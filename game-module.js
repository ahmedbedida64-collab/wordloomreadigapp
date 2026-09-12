/* Wordloom game domain module. UI adapters supply rendering and audio callbacks. */
export const GAME_STATES = Object.freeze(['INIT', 'READY', 'PLAYING', 'EVALUATING', 'FEEDBACK', 'COMPLETED']);

const TRANSITIONS = Object.freeze({
  INIT: { ASSETS_READY: 'READY' },
  READY: { START: 'PLAYING' },
  PLAYING: { EVALUATE: 'EVALUATING' },
  EVALUATING: { FEEDBACK: 'FEEDBACK' },
  FEEDBACK: { RESUME: 'PLAYING', COMPLETE: 'COMPLETED' },
  COMPLETED: { RESET: 'READY' }
});

export function createGameMachine(id) {
  let state = 'INIT';
  return Object.freeze({
    id,
    get state() { return state; },
    transition(event) {
      const next = TRANSITIONS[state]?.[event];
      if (!next) return false;
      state = next;
      return true;
    },
    canInteract: () => state === 'PLAYING',
    isTransitioning: () => state === 'EVALUATING' || state === 'FEEDBACK',
    canAdvance: () => state === 'COMPLETED'
  });
}

export function createGameMachines(ids) {
  return Object.fromEntries(ids.map(id => [id, createGameMachine(id)]));
}

export function assertSchemaShape(value, schema, path = '$') {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${path} must be an object`);
  for (const required of schema.required || []) {
    if (!(required in value)) throw new Error(`${path}.${required} is required`);
  }
  for (const [key, rule] of Object.entries(schema.properties || {})) {
    if (!(key in value)) continue;
    const actual = Array.isArray(value[key]) ? 'array' : typeof value[key];
    const accepted = Array.isArray(rule.type) ? rule.type : [rule.type];
    const integerAccepted = accepted.includes('integer') && actual === 'number' && Number.isInteger(value[key]);
    if (!accepted.includes(actual) && !integerAccepted && !(value[key] === null && accepted.includes('null'))) throw new Error(`${path}.${key} has type ${actual}, expected ${accepted.join(' or ')}`);
    if (rule.enum && !rule.enum.includes(value[key])) throw new Error(`${path}.${key} has an invalid enum value`);
  }
  return true;
}

export function validateFixtures(fixtures, schemas) {
  for (const config of fixtures.configs || []) assertSchemaShape(config, schemas.gameConfig, `config:${config.contentPackId}`);
  for (const level of fixtures.levels) assertSchemaShape(level, schemas.level, `level:${level.id}`);
  for (const word of fixtures.words) assertSchemaShape(word, schemas.word, `word:${word.word}`);
  for (const item of fixtures.phonemes) assertSchemaShape(item, schemas.phoneme, `phoneme:${item.grapheme}`);
  for (const item of fixtures.audioAssets) assertSchemaShape(item, schemas.audioAsset, `audio:${item.id}`);
  for (const pool of fixtures.distractorPools) {
    assertSchemaShape(pool, schemas.distractorPool, `distractor:${pool.target}`);
    if (new Set(pool.items).size !== pool.items.length) throw new Error(`distractor:${pool.target} contains duplicates`);
    if (pool.items.some(item => item.toLowerCase() === pool.target.toLowerCase())) throw new Error(`distractor:${pool.target} overlaps its target`);
  }
  for (const item of fixtures.wordImageItems || []) assertSchemaShape(item, schemas.wordImageItem, `word-image:${item.id}`);
  for (const item of fixtures.sentenceItems || []) assertSchemaShape(item, schemas.sentenceItem, `sentence:${item.id}`);
  for (const item of fixtures.recallItems || []) assertSchemaShape(item, schemas.recallItem, `recall:${item.id}`);
  return true;
}

export function createCompletionQueue() {
  const records = new Map();
  return {
    complete(word, gameId, now = Date.now()) {
      const record = records.get(word) || { word, repetitions: 0, intervalDays: 0, nextReview: now };
      record.repetitions += 1;
      record.intervalDays = Math.max(1, Math.round((record.intervalDays || 1) * 2.5));
      record.nextReview = now + record.intervalDays * 86400000;
      record.lastGame = gameId;
      records.set(word, record);
      return { ...record };
    },
    get(word) { return records.get(word); },
    values() { return [...records.values()]; }
  };
}

export function createPhonemeEngine(round, { machine, speak = () => {}, queue }) {
  return {
    touch(letter) { if (machine.canInteract()) speak(round.spokenPhoneme || letter); },
    drop(letter, insideTarget) {
      if (!machine.canInteract() || !insideTarget) return { accepted: false, reason: 'outside-target' };
      if (letter.toUpperCase() !== round.missing.toUpperCase()) return { accepted: false, reason: 'wrong-phoneme' };
      machine.transition('EVALUATE');
      speak(round.word);
      queue?.complete(round.word, 'phoneme');
      return { accepted: true, state: machine.state };
    }
  };
}

export function createContextEngine(round, { machine, speak = () => {}, queue }) {
  let attempts = 0;
  return {
    choose(word) {
      if (!machine.canInteract()) return { correct: false, ignored: true };
      const correct = word === round.word;
      attempts += 1;
      machine.transition('EVALUATE');
      if (correct) { speak(round.word); queue?.complete(round.word, 'context'); }
      return { correct, attempts, hint: !correct && attempts >= 2 ? round.hint : null };
    }
  };
}

export function createScrambleEngine(round, { machine, speak = () => {}, queue }) {
  let selection = [];
  return {
    choose(index) {
      if (!machine.canInteract() || selection.includes(index)) return { valid: false, ignored: true };
      selection = [...selection, index];
      const words = selection.map(item => round.tiles[item]);
      const prefix = round.accepted.some(pattern => words.every((word, position) => pattern[position] === word));
      if (!prefix) { selection = []; machine.transition('EVALUATE'); return { valid: false, reset: true }; }
      const complete = round.accepted.some(pattern => pattern.length === words.length && pattern.every((word, position) => word === words[position]));
      if (complete) { machine.transition('EVALUATE'); speak(words.join(' ')); queue?.complete(round.word, 'scramble'); }
      return { valid: true, complete, words };
    },
    selection: () => selection.map(index => round.tiles[index])
  };
}

export function createRecallEngine(round, { machine, speak = () => {}, queue, initialTime = 3200 }) {
  let timeLimit = initialTime;
  let streak = 0;
  let locked = false;
  return {
    start() { locked = false; speak(round.word); return { timeLimit, optionCount: streak >= 2 ? 4 : 3 }; },
    answer(option) {
      if (locked || !machine.canInteract()) return { ignored: true };
      locked = true;
      const correct = option === round.word;
      machine.transition('EVALUATE');
      if (correct) { streak += 1; timeLimit = Math.max(1800, timeLimit - 250); queue?.complete(round.word, 'recall'); }
      else { streak = 0; timeLimit = Math.min(5000, timeLimit + 450); }
      return { correct, streak, timeLimit };
    }
  };
}

export function createAudioManager({ play = () => {}, cancel = () => {} } = {}) {
  let activePhoneme = null;
  let debounceTimer = null;
  const queue = [];
  const flush = () => {
    debounceTimer = null;
    const next = queue.shift();
    if (!next) return;
    activePhoneme = next;
    play(next.type, next.id);
  };
  return {
    preload(assets = []) { return Promise.resolve(assets.map(asset => asset.id)); },
    playPhoneme(id) {
      queue.length = 0;
      queue.push({ type: 'phoneme', id });
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(flush, 80);
    },
    playWord(id) { queue.push({ type: 'word', id }); flush(); },
    playSFX(id) { queue.push({ type: 'sfx', id }); flush(); },
    stop() { queue.length = 0; clearTimeout(debounceTimer); debounceTimer = null; activePhoneme = null; cancel(); },
    get activePhoneme() { return activePhoneme; }
  };
}

export function createHintEngine({ maxAttemptsBeforeReveal = 4 } = {}) {
  let failedAttempts = 0;
  let hintLevel = 0;
  return {
    fail() {
      failedAttempts += 1;
      hintLevel = failedAttempts >= maxAttemptsBeforeReveal ? 3 : failedAttempts >= 3 ? 2 : failedAttempts >= 2 ? 1 : 0;
      return { failedAttempts, hintLevel };
    },
    reset() { failedAttempts = 0; hintLevel = 0; },
    get failedAttempts() { return failedAttempts; },
    get hintLevel() { return hintLevel; }
  };
}

export function createTelemetry({ now = () => Date.now(), onEvent = () => {} } = {}) {
  const started = new Map();
  return {
    start(itemId) { started.set(itemId, now()); },
    record(event) {
      const itemStarted = started.get(event.itemId);
      const payload = Object.freeze({ engineId: event.engineId, itemId: event.itemId, attemptNumber: event.attemptNumber || 1, timeToFirstInteractionMs: event.timeToFirstInteractionMs ?? (itemStarted ? now() - itemStarted : 0), timeToSubmitMs: event.timeToSubmitMs ?? (itemStarted ? now() - itemStarted : 0), correct: Boolean(event.correct), hintUsed: Boolean(event.hintUsed), hintLevel: event.hintLevel || 0, difficultyTier: event.difficultyTier || 1, timestamp: now(), type: event.type || 'attempt' });
      onEvent(payload);
      return payload;
    }
  };
}

export function createDifficultyAdapter({ timerMs = 3200, optionCount = 3, minTimerMs = 2500, maxTimerMs = 6000, minOptions = 2, maxOptions = 5 } = {}) {
  const window = [];
  let difficultyTier = 1;
  return {
    get config() { return { timerMs, optionCount, difficultyTier }; },
    observe(result) {
      window.push(result);
      if (window.length > 5) window.shift();
      if (window.length < 5) return this.config;
      const accuracy = window.filter(item => item.correct).length / 5;
      const correctTimes = window.filter(item => item.correct).map(item => item.responseTimeMs);
      const average = correctTimes.length ? correctTimes.reduce((sum, value) => sum + value, 0) / correctTimes.length : Infinity;
      const timedOut = window.filter(item => item.timedOut).length;
      if (accuracy >= .8 && average < timerMs * .5) {
        difficultyTier = Math.min(5, difficultyTier + 1);
        timerMs = Math.max(minTimerMs, Math.round(timerMs * .85));
        optionCount = Math.min(maxOptions, optionCount + 1);
      } else if (accuracy <= .4 || timedOut >= 2) {
        difficultyTier = Math.max(1, difficultyTier - 1);
        timerMs = Math.min(maxTimerMs, Math.round(timerMs * 1.2));
        optionCount = Math.max(minOptions, optionCount - 1);
      }
      window.length = 0;
      return this.config;
    }
  };
}

export function calculateDropTarget(tileRect, slots, tolerance = .5, minimumOverlap = .3) {
  const tileWidth = tileRect.right - tileRect.left;
  const tileHeight = tileRect.bottom - tileRect.top;
  const tileArea = tileWidth * tileHeight;
  let best = null;
  for (const slot of slots) {
    if (slot.filled) continue;
    const slotWidth = slot.rect.right - slot.rect.left;
    const slotHeight = slot.rect.bottom - slot.rect.top;
    const expanded = { left: slot.rect.left - slotWidth * tolerance, right: slot.rect.right + slotWidth * tolerance, top: slot.rect.top - slotHeight * tolerance, bottom: slot.rect.bottom + slotHeight * tolerance };
    const overlap = Math.max(0, Math.min(tileRect.right, expanded.right) - Math.max(tileRect.left, expanded.left)) * Math.max(0, Math.min(tileRect.bottom, expanded.bottom) - Math.max(tileRect.top, expanded.top));
    const ratio = tileArea ? overlap / tileArea : 0;
    if (ratio >= minimumOverlap && (!best || ratio > best.overlapRatio)) best = { slot, overlapRatio: ratio, snapTo: { x: (slot.rect.left + slot.rect.right) / 2, y: (slot.rect.top + slot.rect.bottom) / 2 } };
  }
  return best;
}

export function matchPatternTree(tokens, patterns) {
  const walk = (placed, nodes, tokenIndex = 0, nodeIndex = 0) => {
    if (tokenIndex === placed.length) return { valid: true, complete: nodeIndex >= nodes.length || nodes.slice(nodeIndex).every(node => node.optional) };
    if (nodeIndex >= nodes.length) return { valid: false, failedIndex: tokenIndex };
    const token = placed[tokenIndex];
    const node = nodes[nodeIndex];
    const allowed = node.allowedTokenIds?.includes(token.id) || node.allowedPOS?.includes(token.pos);
    if (allowed) return walk(placed, nodes, tokenIndex + 1, nodeIndex + 1);
    if (node.optional) return walk(placed, nodes, tokenIndex, nodeIndex + 1);
    return { valid: false, failedIndex: tokenIndex };
  };
  for (const pattern of patterns) {
    const result = walk(tokens, pattern);
    if (result.valid) return result;
  }
  return { valid: false, failedIndex: Math.min(tokens.length, 0) };
}

function createEngineContract(id, config, handlers) {
  let state = 'IDLE';
  let content = null;
  const listeners = new Set();
  const emit = (type, payload = {}) => { const event = { engineId: id, type, ...payload }; listeners.forEach(listener => listener(event)); return event; };
  return {
    id, config,
    get state() { return state; },
    async load(nextContent) { state = 'LOADING'; content = await Promise.resolve(nextContent); state = 'IDLE'; return content; },
    start() { if (state !== 'IDLE' && state !== 'SUCCESS' && state !== 'FAIL') return false; state = 'ACTIVE'; handlers.start?.(content); return true; },
    submit(input) { if (state !== 'ACTIVE') return { ignored: true, state }; state = 'EVALUATING'; const result = handlers.submit(input, content); state = result.correct ? 'SUCCESS' : 'FAIL'; emit(result.correct ? 'success' : 'fail', result); if (result.complete) { state = 'COMPLETE'; emit('complete', result); } return result; },
    reset() { state = 'IDLE'; handlers.reset?.(); },
    onEvent(callback) { listeners.add(callback); return () => listeners.delete(callback); },
    destroy() { listeners.clear(); handlers.destroy?.(); state = 'IDLE'; content = null; }
  };
}

export function createPhonemeDragDropEngine(config, deps) {
  return createEngineContract('phoneme-dragdrop', config, { submit(input, round) { const target = calculateDropTarget(input.tileRect, input.slots); const accepted = target?.slot?.correctLetter?.toUpperCase() === input.letter?.toUpperCase(); return { correct: accepted, complete: accepted && input.remainingSlots === 0, target, reason: accepted ? 'snap' : target ? 'wrong-slot' : 'outside-target' }; }, start() { deps.audio?.playWord(config.promptAudioId); } });
}

export function createWordImageBuilderEngine(config, deps) {
  const hints = createHintEngine({ maxAttemptsBeforeReveal: config.maxAttemptsBeforeReveal || 4 });
  return createEngineContract('word-image-builder', config, { submit(input, item) { const correct = input.optionId === item.correctOptionId; const hint = correct ? null : hints.fail(); if (correct) { deps.audio?.playWord(item.promptAudioId); deps.queue?.complete(item.wordId, 'word-image-builder'); } return { correct, hint, complete: correct }; }, reset() { hints.reset(); } });
}

export function createSentenceScrambleEngine(config, deps) {
  return createEngineContract('sentence-scramble', config, { submit(input, item) { const exact = item.acceptedSequences?.some(sequence => sequence.join('|') === input.tokenIds.join('|')); const tree = exact || matchPatternTree(input.tokens, item.acceptedPatterns || []).valid; if (tree) deps.queue?.complete(item.word, 'sentence-scramble'); return { correct: tree, complete: tree, failedIndex: tree ? null : matchPatternTree(input.tokens, item.acceptedPatterns || []).failedIndex }; } });
}

export function createAudioRecallEngine(config, deps) {
  const difficulty = createDifficultyAdapter(config);
  return createEngineContract('audio-recall', config, { start(item) { deps.audio?.playWord(item.audioId); return difficulty.config; }, submit(input, item) { const correct = input.optionId === item.correctOptionId && !input.timedOut; const update = difficulty.observe({ correct, timedOut: Boolean(input.timedOut), responseTimeMs: input.responseTimeMs || config.timerMs }); if (correct) deps.queue?.complete(item.wordId, 'audio-recall'); return { correct, complete: false, difficulty: update, repeat: !correct }; } });
}

export function runQaLoops(fixtures, schemas) {
  const results = [];
  const pass = (name, checks) => { checks(); results.push({ name, status: 'PASS' }); };
  pass('Loop 1: logical and data integrity', () => {
    validateFixtures(fixtures, schemas);
    for (const phoneme of fixtures.phonemes) {
      const visual = fixtures.words.find(word => word.word === phoneme.word);
      if (!visual || !phoneme.audioAssetId) throw new Error(`phoneme ${phoneme.grapheme} has no word/audio mapping`);
      const audio = fixtures.audioAssets.find(asset => asset.id === phoneme.audioAssetId);
      if (!audio || audio.text !== phoneme.spokenPhoneme) throw new Error(`phoneme ${phoneme.grapheme} audio mismatch`);
    }
    for (const pool of fixtures.distractorPools) if (pool.items.some(item => item === pool.target)) throw new Error(`overlap in ${pool.target}`);
    const audio = createAudioManager();
    audio.playPhoneme('phoneme-c-s');
    audio.playPhoneme('phoneme-a-long');
    if (audio.activePhoneme !== null) throw new Error('debounced audio should not fire before its queue tick');
    const match = calculateDropTarget({ left: 0, top: 0, right: 100, bottom: 100 }, [{ id: 'slot-a', rect: { left: 10, top: 10, right: 90, bottom: 90 }, filled: false }]);
    if (!match || match.slot.id !== 'slot-a' || !match.snapTo) throw new Error('collision target did not produce a center snap');
  });
  pass('Loop 2: edge-case and state stress', () => {
    const machine = createGameMachine('stress');
    if (machine.transition('START')) throw new Error('INIT accepted START');
    if (!machine.transition('ASSETS_READY') || !machine.transition('START')) throw new Error('valid startup transition failed');
    for (let index = 0; index < 100; index += 1) {
      if (machine.state === 'READY' && !machine.transition('START')) throw new Error('restart transition failed');
      if (!machine.transition('EVALUATE') || !machine.transition('FEEDBACK')) throw new Error('evaluation cycle froze');
      if (!machine.transition(index % 2 ? 'RESUME' : 'COMPLETE')) throw new Error('feedback transition failed');
      if (machine.state === 'COMPLETED' && !machine.transition('RESET')) throw new Error('reset transition failed');
    }
    if (machine.state !== 'PLAYING') throw new Error(`unexpected final state ${machine.state}`);
    const audio = createAudioManager();
    audio.playPhoneme('a'); audio.playPhoneme('b'); audio.stop();
    if (audio.activePhoneme !== null) throw new Error('audio channel was not released');
  });
  pass('Loop 3: pedagogical and feedback verification', () => {
    const queue = createCompletionQueue();
    const machine = createGameMachine('context');
    machine.transition('ASSETS_READY'); machine.transition('START');
    const engine = createContextEngine(fixtures.context[0], { machine, queue });
    const first = engine.choose(fixtures.context[0].options[1]);
    if (first.hint) throw new Error('hint appeared before two failures');
    machine.transition('FEEDBACK'); machine.transition('RESUME');
    const second = engine.choose(fixtures.context[0].options[2]);
    if (!second.hint) throw new Error('hint did not appear after two failures');
    machine.transition('FEEDBACK'); machine.transition('RESUME');
    const success = engine.choose(fixtures.context[0].word);
    if (!success.correct || !queue.get(fixtures.context[0].word)) throw new Error('completion queue was not updated');
    const difficulty = createDifficultyAdapter({ timerMs: 3200, optionCount: 3 });
    for (let index = 0; index < 5; index += 1) difficulty.observe({ correct: true, timedOut: false, responseTimeMs: 100 });
    if (difficulty.config.difficultyTier < 2 || difficulty.config.timerMs >= 3200 || difficulty.config.optionCount < 4) throw new Error('adaptive difficulty did not scale after a full performance window');
    const pattern = matchPatternTree([{ id: 'the', pos: 'DET' }, { id: 'cat', pos: 'NOUN' }], [[{ allowedPOS: ['DET'] }, { allowedPOS: ['NOUN'] }]]);
    if (!pattern.valid) throw new Error('grammar pattern matcher rejected a valid sequence');
  });
  return results;
}

if (typeof window !== 'undefined') window.WordloomGameModule = { GAME_STATES, createGameMachine, createGameMachines, assertSchemaShape, validateFixtures, createCompletionQueue, createAudioManager, createHintEngine, createTelemetry, createDifficultyAdapter, calculateDropTarget, matchPatternTree, createPhonemeEngine, createContextEngine, createScrambleEngine, createRecallEngine, createPhonemeDragDropEngine, createWordImageBuilderEngine, createSentenceScrambleEngine, createAudioRecallEngine, runQaLoops };
