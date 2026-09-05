const books = [
  { title: 'My First Morning', author: 'Wordloom Beginners', level: 'A1', cover: 'cover-yellow', progress: 0, topic: 'life', source: 'Beginner shelf' },
  { title: 'At the Café', author: 'Wordloom Beginners', level: 'A1', cover: 'cover-rose', progress: 0, topic: 'life', source: 'Beginner shelf' },
  { title: 'A Day in the City', author: 'Wordloom Beginners', level: 'A1', cover: 'cover-blue', progress: 0, topic: 'travel', source: 'Beginner shelf' },
  { title: 'My Family Album', author: 'Wordloom Beginners', level: 'A1', cover: 'cover-green', progress: 0, topic: 'life', source: 'Beginner shelf' },
  { title: 'Weather Today', author: 'Wordloom Beginners', level: 'A1', cover: 'cover-yellow', progress: 0, topic: 'science', source: 'Beginner shelf' },
  { title: 'A Walk in the Park', author: 'Wordloom Beginners', level: 'A1', cover: 'cover-green', progress: 0, topic: 'life', source: 'Beginner shelf' },
  { title: 'The Lighthouse', author: 'Wikipedia adaptation', level: 'B1', cover: 'cover-blue', progress: 12, topic: 'science', source: 'Wikipedia' },
  { title: 'The Climate Question', author: 'Wikipedia adaptation', level: 'C1', cover: 'cover-blue', progress: 0, topic: 'science', source: 'Wikipedia' },
  { title: 'The Ethics of AI', author: 'Wikipedia adaptation', level: 'C1', cover: 'cover-technology', progress: 0, topic: 'technology', source: 'Wikipedia' },
  { title: 'The Great Wall', author: 'Wikipedia adaptation', level: 'B1', cover: 'cover-green', progress: 0, topic: 'history', source: 'Wikipedia' },
  { title: 'The Ocean', author: 'Wikipedia adaptation', level: 'A2', cover: 'cover-yellow', progress: 28, topic: 'science', source: 'Wikipedia' },
  { title: 'The Human Brain', author: 'Wikipedia adaptation', level: 'B2', cover: 'cover-rose', progress: 0, topic: 'science', source: 'Wikipedia' },
  { title: 'The Roman Colosseum', author: 'Wikipedia adaptation', level: 'B1', cover: 'cover-rose', progress: 0, topic: 'history', source: 'Wikipedia' },
  { title: 'The Nile', author: 'Wikipedia adaptation', level: 'A2', cover: 'cover-blue', progress: 0, topic: 'history', source: 'Wikipedia' },
  { title: 'The Moon', author: 'Wikipedia adaptation', level: 'A2', cover: 'cover-yellow', progress: 0, topic: 'science', source: 'Wikipedia' },
  { title: 'The Suez Canal', author: 'Wikipedia adaptation', level: 'B1', cover: 'cover-green', progress: 0, topic: 'history', source: 'Wikipedia' },
  { title: 'The Amazon Rainforest', author: 'Wikipedia adaptation', level: 'B2', cover: 'cover-blue', progress: 0, topic: 'science', source: 'Wikipedia' },
  { title: 'The Silk Road', author: 'Wikipedia adaptation', level: 'B1', cover: 'cover-rose', progress: 0, topic: 'history', source: 'Wikipedia' },
  { title: 'The City of Venice', author: 'Wikipedia adaptation', level: 'B1', cover: 'cover-green', progress: 0, topic: 'culture', source: 'Wikipedia' },
  { title: 'The Volcano', author: 'Wikipedia adaptation', level: 'A2', cover: 'cover-yellow', progress: 0, topic: 'science', source: 'Wikipedia' },
  { title: 'The Solar System', author: 'Wikipedia adaptation', level: 'B2', cover: 'cover-blue', progress: 0, topic: 'science', source: 'Wikipedia' },
  { title: 'The Andes', author: 'Wikipedia adaptation', level: 'B1', cover: 'cover-rose', progress: 0, topic: 'travel', source: 'Wikipedia' },
  { title: 'The Arctic', author: 'Wikipedia adaptation', level: 'B2', cover: 'cover-green', progress: 0, topic: 'science', source: 'Wikipedia' },
  { title: 'The Library of Alexandria', author: 'Wikipedia adaptation', level: 'B1', cover: 'cover-yellow', progress: 0, topic: 'history', source: 'Wikipedia' },
  { title: 'The Sahara', author: 'Wikipedia adaptation', level: 'B1', cover: 'cover-rose', progress: 0, topic: 'travel', source: 'Wikipedia' },
  { title: 'The Eiffel Tower', author: 'Wikipedia adaptation', level: 'A2', cover: 'cover-blue', progress: 0, topic: 'culture', source: 'Wikipedia' },
  { title: 'The Pacific Ocean', author: 'Wikipedia adaptation', level: 'B2', cover: 'cover-green', progress: 0, topic: 'science', source: 'Wikipedia' },
  { title: 'The Human Body', author: 'Wikipedia adaptation', level: 'A2', cover: 'cover-yellow', progress: 0, topic: 'science', source: 'Wikipedia' },
  { title: 'The Roman Empire', author: 'Wikipedia adaptation', level: 'B2', cover: 'cover-blue', progress: 0, topic: 'history', source: 'Wikipedia' },
  { title: 'The Himalayas', author: 'Wikipedia adaptation', level: 'B1', cover: 'cover-rose', progress: 0, topic: 'travel', source: 'Wikipedia' },
  { title: 'The Desert', author: 'Wikipedia adaptation', level: 'A2', cover: 'cover-green', progress: 0, topic: 'travel', source: 'Wikipedia' },
  { title: 'The World Wide Web', author: 'Wikipedia adaptation', level: 'B2', cover: 'cover-yellow', progress: 0, topic: 'technology', source: 'Wikipedia' },
  { title: 'The Statue of Liberty', author: 'Wikipedia adaptation', level: 'A2', cover: 'cover-blue', progress: 0, topic: 'history', source: 'Wikipedia' },
  { title: 'The Inca Empire', author: 'Wikipedia adaptation', level: 'B1', cover: 'cover-rose', progress: 0, topic: 'history', source: 'Wikipedia' },
  { title: 'The Ancient Forest', author: 'Wikipedia adaptation', level: 'A2', cover: 'cover-green', progress: 0, topic: 'science', source: 'Wikipedia' }
];
const authScreen = document.querySelector('#auth-screen');
const appShell = document.querySelector('.app-shell');
const authSession = localStorage.getItem('wordloom-session');
function unlockApp(session) { localStorage.setItem('wordloom-session', JSON.stringify(session)); authScreen.classList.add('hidden'); appShell.classList.remove('auth-locked'); }
function submitAuth(event) { event.preventDefault(); const email = document.querySelector('#auth-email').value.trim(); const password = document.querySelector('#auth-password').value; const error = document.querySelector('#auth-error'); if (!email || password.length < 4) { error.textContent = 'Enter a valid email and a password with at least 4 characters.'; return; } unlockApp({ email, name: email.split('@')[0] }); }
if (authSession) { authScreen.classList.add('hidden'); appShell.classList.remove('auth-locked'); }
const vocabulary = [['restless', 'unable to relax or stay still', 'B1'], ['distant', 'far away in space or time', 'B1'], ['familiar', 'well known from experience', 'A2'], ['visibility', 'how clearly something can be seen', 'B2'], ['steady', 'firm and not changing', 'B1'], ['veil', 'a covering that hides something', 'B2']];
const extraTitles = { life: ['Morning Rituals', 'The Friendly Neighbor', 'A Room of One’s Own', 'Making Time', 'The Sunday Table'], travel: ['Across the Desert', 'The Harbor Road', 'Three Days in Rome', 'The Island Journal', 'A Guide to New Streets', 'Night Train North'], culture: ['The Language of Music', 'Stories We Carry', 'The Open Gallery', 'Food and Memory', 'Theatre Lights', 'A Letter to Home'], science: ['The Life of Bees', 'Inside the Human Body', 'Weather Patterns', 'The Language of Plants', 'Ocean Currents', 'The Science of Sleep'], business: ['The Small Enterprise', 'Leading with Care', 'Ideas that Scale', 'The Customer Story', 'Work in Progress', 'The Value of Time', 'A Better Meeting', 'Building Trust'], technology: ['The Digital Garden', 'Understanding the Internet', 'Robots at Work', 'The Future of Energy', 'A Human Interface', 'Learning to Code', 'Data and Decisions', 'The Connected Home'], history: ['The Silk Road', 'Women Who Changed History', 'The Industrial Age', 'A People’s Archive', 'The First Cities', 'The Long Voyage', 'Revolutions in Print', 'The Story of Numbers'] };
Object.entries(extraTitles).forEach(([topic, titles]) => titles.forEach((title, index) => books.push({ title, author: 'Wordloom Collection', level: index % 3 === 0 ? 'A2' : index % 3 === 1 ? 'B1' : 'B2', cover: ['cover-rose', 'cover-green', 'cover-yellow', 'cover-blue'][index % 4], progress: 0, topic, source: index % 2 ? 'Open Library' : 'Wordloom Originals' })));
const dictionary = {
  the: ['the', 'used to refer to a particular person, thing, or situation', 'article', 'The lamp was bright in the dark room.'],
  sea: ['البحر', 'a large area of salt water', 'noun', 'The sea was calm before sunrise.'],
  restless: ['قلق / مضطرب', 'unable to relax, be still, or feel calm', 'adjective', 'The city felt restless before the storm arrived.'],
  evening: ['المساء', 'the part of the day between afternoon and night', 'noun', 'We walked home in the quiet evening.'],
  folding: ['ينطوي / يطوي', 'bending or closing something over itself', 'verb', 'She was folding the letter carefully.'],
  dark: ['مظلم / داكن', 'with very little or no light', 'adjective', 'A dark cloud crossed the sky.'],
  blue: ['أزرق', 'the color of a clear daytime sky', 'adjective', 'He wore a blue jacket.'],
  sleeves: ['أكمام', 'parts of clothing that cover the arms', 'noun', 'The coat had long sleeves.'],
  lighthouse: ['منارة', 'a tall building with a light that guides ships', 'noun', 'The lighthouse stood above the harbor.'],
  keeper: ['حارس / قيّم', 'a person who looks after something', 'noun', 'The keeper checked the gate.'],
  checked: ['فحص / تحقق', 'looked at something carefully to make sure it was correct', 'verb', 'She checked the answer twice.'],
  familiar: ['مألوف', 'well known from experience', 'adjective', 'His voice sounded familiar.'],
  village: ['قرية', 'a small community in the countryside', 'noun', 'The village was surrounded by hills.'],
  disappear: ['يختفي', 'to become impossible to see or find', 'verb', 'The boat began to disappear in the fog.'],
  veil: ['حجاب / ستار', 'a covering that hides something', 'noun', 'A veil of mist covered the valley.'],
  rain: ['مطر', 'water that falls from clouds', 'noun', 'The rain started after lunch.'],
  distant: ['بعيد', 'far away in space or time', 'adjective', 'A distant light appeared on the horizon.'],
  warning: ['تحذير', 'something that tells you about possible danger', 'noun', 'The sign gave a clear warning.'],
  logbook: ['سجل', 'a book used to record events or information', 'noun', 'The captain wrote in the logbook.'],
  carefully: ['بعناية', 'in a way that avoids mistakes or damage', 'adverb', 'He placed the glass carefully.'],
  visibility: ['وضوح الرؤية', 'how clearly something can be seen', 'noun', 'Visibility was low during the storm.'],
  steady: ['ثابت / مستقر', 'firm and not changing', 'adjective', 'Keep your hand steady.'],
  boat: ['قارب', 'a small vessel used for traveling on water', 'noun', 'The boat moved toward the shore.'],
  thought: ['فكرة', 'an idea or opinion produced by thinking', 'noun', 'That thought made her smile.']
};
const translations = { ar: 'العربية', fr: 'français', es: 'español', tr: 'Türkçe', de: 'Deutsch' };
const customTranslations = {
  the: { fr: 'le / la', es: 'el / la', tr: 'belirli tanımlık', de: 'der / die / das' }, sea: { fr: 'mer', es: 'mar', tr: 'deniz', de: 'Meer' }, restless: { ar: 'قلق / مضطرب', fr: 'agité', es: 'inquieto', tr: 'huzursuz', de: 'unruhig' }, evening: { ar: 'المساء', fr: 'soir', es: 'tarde', tr: 'akşam', de: 'Abend' }, folding: { ar: 'ينطوي / يطوي', fr: 'pliage', es: 'doblando', tr: 'katlama', de: 'falten' }, dark: { ar: 'مظلم / داكن', fr: 'sombre', es: 'oscuro', tr: 'karanlık', de: 'dunkel' }, blue: { ar: 'أزرق', fr: 'bleu', es: 'azul', tr: 'mavi', de: 'blau' }, sleeves: { ar: 'أكمام', fr: 'manches', es: 'mangas', tr: 'kollar', de: 'Ärmel' }, lighthouse: { ar: 'منارة', fr: 'phare', es: 'faro', tr: 'deniz feneri', de: 'Leuchtturm' }, keeper: { ar: 'حارس / قيّم', fr: 'gardien', es: 'guardián', tr: 'bekçi', de: 'Wächter' }, checked: { ar: 'فحص / تحقق', fr: 'vérifié', es: 'comprobado', tr: 'kontrol edildi', de: 'geprüft' }, familiar: { ar: 'مألوف', fr: 'familier', es: 'familiar', tr: 'tanıdık', de: 'vertraut' }, village: { ar: 'قرية', fr: 'village', es: 'pueblo', tr: 'köy', de: 'Dorf' }, disappear: { ar: 'يختفي', fr: 'disparaître', es: 'desaparecer', tr: 'kaybolmak', de: 'verschwinden' }, veil: { ar: 'حجاب / ستار', fr: 'voile', es: 'velo', tr: 'peçe', de: 'Schleier' }, rain: { ar: 'مطر', fr: 'pluie', es: 'lluvia', tr: 'yağmur', de: 'Regen' }, distant: { ar: 'بعيد', fr: 'lointain', es: 'distante', tr: 'uzak', de: 'fern' }, warning: { ar: 'تحذير', fr: 'avertissement', es: 'advertencia', tr: 'uyarı', de: 'Warnung' }, logbook: { ar: 'سجل', fr: 'journal de bord', es: 'cuaderno de bitácora', tr: 'günlük', de: 'Logbuch' }, carefully: { ar: 'بعناية', fr: 'soigneusement', es: 'cuidadosamente', tr: 'dikkatlice', de: 'vorsichtig' }, visibility: { ar: 'وضوح الرؤية', fr: 'visibilité', es: 'visibilidad', tr: 'görüş mesafesi', de: 'Sichtbarkeit' }, steady: { ar: 'ثابت / مستقر', fr: 'stable', es: 'estable', tr: 'sabit', de: 'stabil' }, boat: { ar: 'قارب', fr: 'bateau', es: 'barco', tr: 'tekne', de: 'Boot' }, thought: { ar: 'فكرة', fr: 'pensée', es: 'pensamiento', tr: 'düşünce', de: 'Gedanke' }
};
const story = 'A lighthouse is a tower with a bright light that helps ships find their way at night or in bad weather. It is often built on a coast, an island, or a rocky shore. The light is usually produced by a lamp, a lens, and a rotating mechanism that sends flashes across the water. For centuries, sailors depended on these lights to know where land was and to avoid dangerous rocks. The first large lighthouses were built in ancient times, and many of them became symbols of safety and guidance. In a way, a lighthouse is both a building and a warning: it tells ships where to go and what dangers may still be near.';
const readerChapters = [
  { title: 'The Lighthouse', subtitle: 'Chapter 1 · A tower of warning', paragraphs: [
    'A lighthouse is a tall tower with a bright light that helps ships find their way at night or during fog, rain, or storms. It is often built near a coast, an island, or a dangerous reef, where rocks and shallow water can make navigation difficult for sailors. The light is usually produced by a lamp, a lens, and a rotating mechanism that sends flashes across the sea. In this way, the lighthouse becomes a visible signal in the dark.',
    'For thousands of years, people have used guidance systems to mark coasts and harbors. Early sailors relied on fire beacons, natural landmarks, and local knowledge before technology became more advanced. Later, large stone towers were built to hold lamps high above the waves. They were often staffed by keepers who cleaned the lenses, checked the fuel, and watched the horizon for signs of trouble. Their work was quiet but essential.',
    'The lighthouse has also become a symbol of safety and direction. It stands in a place where the land meets the open sea, and it tells people that danger is real but not unstoppable. Even today, the image of a lighthouse still suggests hope, discipline, and continuity. A light can stay steady while the world around it changes, and that steady signal remains one of the oldest forms of practical guidance on Earth.'
  ] },
  { title: 'The Lighthouse', subtitle: 'Chapter 2 · The work of a keeper', paragraphs: [
    'A lighthouse keeper had an important and difficult job. The tower might stand far from villages, and the keeper had to watch the lamp, maintain the machinery, and keep careful records of weather, visibility, and sea conditions. In the past, this work sometimes required long nights and lonely hours. The keeper might read the sky, listen to the waves, and check the light as if it were a living thing.',
    'The job was not only technical. It also required judgment and memory. A keeper had to understand how light and distance changed the pattern of the coast. If the weather worsened, the keeper might need to signal danger or adjust the lantern. The role was part practical labor and part responsibility for life at sea. In many places, the keeper became a trusted person in the community.',
    'Modern lighthouses are often automated, but the old story remains powerful. The image of a person keeping watch through darkness still shapes the way we think about safety and care. Even if the light is controlled by electricity instead of oil, the meaning of the lighthouse has not disappeared. It still tells travelers that there is a path, a signal, and a place to land.'
  ] },
  { title: 'The Lighthouse', subtitle: 'Chapter 3 · Why they still matter', paragraphs: [
    'Today, lighthouses are not only practical tools. They are also part of local history, national identity, and cultural memory. Many are preserved as historic monuments, while others continue to mark safe entry points to ports and harbors. Visitors often admire the architecture of the tower, the beauty of the sea view, and the deeply human idea of a light that remains on while others sleep.',
    'Their importance is easy to underestimate. A seafarer may not think about the people who care for the lantern, but a safe arrival depends on that quiet labor. The light allows ships to avoid hidden rocks, measure distances, and enter safer waters. The lighthouse remains a bridge between human planning and the vast, uncertain ocean.',
    'In the end, the lighthouse is a reminder that guidance matters at sea and on land. A steady beam can cross miles of darkness. It can announce danger, offer direction, and show the way home. That is why the lighthouse still feels so familiar: it gives shape to uncertainty and turns the unknown into something navigable.'
  ] }
];
const grid = document.querySelector('#book-grid');
const toast = document.querySelector('#toast');
const views = { library: document.querySelector('#library-view'), reading: document.querySelector('#reading-view'), vocabulary: document.querySelector('#vocabulary-view'), notes: document.querySelector('#notes-view') };
let selectedFilter = 'all'; let selectedTopic = 'all'; let selectedLevel = 'all'; let libraryQuery = ''; let selectedVocabLevel = 'all'; let motherLanguage = localStorage.getItem('wordloom-language') || 'ar'; let learnerLevel = localStorage.getItem('wordloom-level') || 'A1'; let graphicsEnabled = localStorage.getItem('wordloom-graphics') !== 'off'; let savedWords = new Set(JSON.parse(localStorage.getItem('wordloom-saved-words') || '[]')); let activeWordContext = '';
let notes = JSON.parse(localStorage.getItem('wordloom-notes') || '[]');
let activeBook = books[0]; let readerState = { page: 0 };
let readingMetrics = JSON.parse(localStorage.getItem('wordloom-reading-metrics') || '{"words":0,"minutes":0,"pages":0}');
let lastRecordedPage = '';

const topicLessons = {
  science: ['how the subject works', 'the systems behind it', 'the evidence researchers use', 'key people and discoveries', 'why it matters in daily life', 'common questions and answers', 'changes over time', 'limits and open problems', 'a real-world example', 'a review of the main ideas'],
  history: ['where the story begins', 'the people who shaped it', 'the places that mattered', 'how daily life changed', 'conflict and cooperation', 'the evidence historians study', 'important turning points', 'different perspectives', 'what happened afterwards', 'what this history means today'],
  culture: ['the setting and its origins', 'the people who made it meaningful', 'symbols and traditions', 'how the practice is learned', 'how traditions change', 'the details visitors notice', 'language and identity', 'modern influences', 'a personal connection', 'why the subject still matters'],
  travel: ['the landscape and first impressions', 'how people live in the region', 'a route through important places', 'food, weather, and routines', 'practical details for visitors', 'a day in the destination', 'meeting local communities', 'responsible travel', 'memories and meaning', 'what makes the destination memorable'],
  technology: ['the problem the invention solved', 'the ideas behind the system', 'the people who built it', 'how it works today', 'benefits and limits', 'responsible use', 'changes in everyday life', 'what can go wrong', 'where the field may go next', 'a review of the main ideas'],
  life: ['the situation in ordinary life', 'the habits and choices involved', 'a useful way to practice it', 'language for real conversations', 'common difficulties', 'small improvements', 'different points of view', 'a memorable example', 'questions to consider', 'a reflection to carry forward']
};

function createBookChapters(book) {
  const lessons = topicLessons[book.topic] || topicLessons.life;
  return lessons.map((lesson, index) => ({
    title: book.title,
    subtitle: `Chapter ${index + 1} · ${lesson}`,
    paragraphs: [
      `${book.title} is a useful subject for English learners because it connects clear facts with familiar questions. In this chapter, we look at ${lesson}. The goal is not to memorize every detail. Instead, notice how the ideas are introduced, explained, compared, and connected to real life. These patterns appear often in articles, conversations, classes, and workplace discussions.`,
      `When people learn about ${book.title.toLowerCase()}, they usually begin with a simple question: what is it, and why does it matter? A good answer gives context before it gives detail. It names the important people, places, materials, or events, then shows how they influence one another. Keep a few new words in your notes and try to explain the main idea in your own words after reading.`,
      `The subject also invites a wider view. Facts can describe the past, explain the present, or help us imagine the future. Different communities may understand the same topic in different ways, so careful readers look for evidence and listen to more than one perspective. By the end of this chapter, you should be able to summarize the central idea, describe one example, and ask a useful follow-up question.`
    ]
  }));
}

function getActiveChapters() { return activeBook.title === 'The Lighthouse' ? Array.from({ length: 10 }, (_, index) => ({ ...readerChapters[index % readerChapters.length], subtitle: `Chapter ${index + 1} · ${['A tower of warning', 'The work of a keeper', 'Reading the coastline', 'Light, distance, and weather', 'A history of guidance', 'The people behind the signal', 'Lighthouses in modern life', 'A symbol of safety', 'A changing technology', 'Why the light still matters'][index]}` })) : createBookChapters(activeBook); }
function createPageText(book, chapter, pageNumber, totalPages) {
  const pageInChapter = ((pageNumber - 1) % 10) + 1;
  return [
    `${book.title} gives us a useful way to practice English through facts, sequence, and explanation. Page ${pageNumber} of ${totalPages} follows the chapter idea: ${chapter.subtitle.replace(/^Chapter \d+ · /, '')}. Read for the main point first, then return to notice the words that show time, cause, contrast, and result.`,
    `As the reader moves through this section, the subject becomes more specific. A good explanation connects a detail to a larger picture: who made a decision, what changed, where the evidence comes from, and why the result matters. Page ${pageInChapter} of this chapter adds another step so the ideas feel connected rather than isolated.`,
    `Try a small learning task before continuing. Say the central idea aloud in one sentence, choose two useful words, and ask one question about the next page. This habit turns a long book into a calm series of conversations with the text.`
  ];
}
function createBookPages(book) {
  const chapters = getActiveChapters();
  return chapters.flatMap((chapter, chapterIndex) => Array.from({ length: 10 }, (_, pageIndex) => {
    const pageNumber = chapterIndex * 10 + pageIndex + 1;
    return { ...chapter, chapterIndex, pageNumber, paragraphs: createPageText(book, chapter, pageNumber, chapters.length * 10) };
  }));
}
function getActivePages() { const chapters = getActiveChapters(); return chapters.flatMap((chapter, chapterIndex) => Array.from({ length: 10 }, (_, pageIndex) => ({ ...chapter, chapterIndex, pageNumber: chapterIndex * 10 + pageIndex + 1, paragraphs: pageIndex === 0 && activeBook.title === 'The Lighthouse' ? chapter.paragraphs : createPageText(activeBook, chapter, chapterIndex * 10 + pageIndex + 1, chapters.length * 10) }))); }

const coverDetails = {
  science: ['SCIENCE', 'A field guide to the living world', '✦'],
  history: ['HISTORY', 'Stories that shaped the present', '◈'],
  travel: ['TRAVEL', 'A journey through place and memory', '⌁'],
  culture: ['CULTURE', 'People, meaning, and tradition', '◒'],
  technology: ['TECHNOLOGY', 'Ideas that changed how we live', '⌘'],
  life: ['EVERYDAY LIFE', 'Practical English for real moments', '✺'],
  business: ['BUSINESS', 'Clear language for modern work', '▦']
};
const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const levelDetailsC2 = { label: 'Proficient', description: 'Complex ideas and nuanced language for near-fluent readers.' };
const coverPhotos = {
  science: [
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=84'
  ],
  history: [
    'https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1599837565318-67429bde7162?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=900&q=84'
  ],
  travel: [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=900&q=84'
  ],
  culture: [
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=84'
  ],
  technology: [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=84'
  ],
  life: [
    'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=84'
  ],
  business: [
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=84',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=84'
  ]
};
const levelDetails = {
  A1: { label: 'Beginner', description: 'Very short sentences and everyday words for a gentle first step.' },
  A2: { label: 'Easy', description: 'Short sentences and everyday vocabulary for confident beginners.' },
  B1: { label: 'Intermediate', description: 'Clear explanations with useful vocabulary for independent learners.' },
  B2: { label: 'Upper intermediate', description: 'Richer ideas and precise language for stronger readers.' },
  C1: { label: 'Advanced', description: 'Nuanced language and complex ideas for advanced learners.' }
};
const topicDescriptions = {
  science: 'Explore a real subject through facts, examples, and practical English.',
  history: 'Follow the people, places, and turning points behind a lasting story.',
  travel: 'Build useful language while discovering landscapes, communities, and journeys.',
  culture: 'Understand traditions, identity, and the details that give places meaning.',
  technology: 'Learn how an idea works and how it changes the way people live.',
  life: 'Practice natural English through familiar situations and thoughtful choices.',
  business: 'Learn clear language for decisions, teamwork, and modern working life.'
};
const coverPhotoIndex = {};
books.forEach((book, index) => {
  coverPhotoIndex[book.title] = index;
});

function injectReaderStyles() {
  const readerStyles = document.createElement('style');
  readerStyles.textContent = `
    .story-copy { position: relative; height: 760px; overflow: hidden; padding: 10px 14px 10px 0; touch-action: pan-x; }
    .reader-page { height: 740px; padding: 32px 30px 42px; border-bottom: 1px solid var(--line); display: flex; flex-direction: column; justify-content: center; animation: reader-page-in .24s ease-out; }
    .reader-page h3 { margin: 0 0 18px; font: 700 14px 'DM Mono'; letter-spacing: 1.5px; color: var(--muted); text-transform: uppercase; }
    .reader-page p { margin: 0 0 22px; font-size: 18px; line-height: 1.9; font-family: 'Playfair Display', Georgia, serif; color: var(--ink); }
    .reader-page .page-number { margin-top: auto; color: var(--muted); font: 10px 'DM Mono'; letter-spacing: .1em; text-transform: uppercase; }
    .page-graphic { display: grid; place-items: center; min-height: 118px; margin: 0 0 20px; border: 1px solid var(--line); border-radius: 8px; color: var(--green); background: var(--canvas); font: 600 11px 'DM Mono'; letter-spacing: .1em; text-transform: uppercase; }
    body.graphics-off .page-graphic { display: none; }
    .page-graphic .graphic-symbol { font-size: 48px; display: block; margin-bottom: 6px; }
    .reader-page .word { border: 0; border-bottom: 2px solid var(--amber); background: rgba(242,198,109,.18); color: #5c4a1a; font: inherit; padding: 1px 3px; cursor: pointer; border-radius: 2px; }
    .reader-control:disabled { opacity: .45; cursor: not-allowed; }
    .reader-footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 12px; }
    .reader-status { font: 11px 'DM Mono'; color: var(--muted); letter-spacing: .08em; text-transform: uppercase; }
    .reading-paper { max-width: 820px; }
    @keyframes reader-page-in { from { opacity: .35; transform: translateX(18px); } to { opacity: 1; transform: translateX(0); } }
  `;
  document.head.appendChild(readerStyles);
}

function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(showToast.timeout); showToast.timeout = setTimeout(() => toast.classList.remove('show'), 2400); }
function updateFlowMetric() { document.querySelector('#streak-title').textContent = readingMetrics.minutes ? `${readingMetrics.minutes} min reading flow` : 'Reading flow'; document.querySelector('#streak-detail').textContent = `${readingMetrics.words} words · ${readingMetrics.pages} pages`; }
function recordReadingPage(page) { const key = `${activeBook.title}:${page.pageNumber}`; if (lastRecordedPage === key) return; lastRecordedPage = key; readingMetrics.words += page.paragraphs.join(' ').split(/\s+/).filter(Boolean).length; readingMetrics.pages += 1; readingMetrics.minutes = Math.max(readingMetrics.minutes, Math.round(readingMetrics.pages * 2)); localStorage.setItem('wordloom-reading-metrics', JSON.stringify(readingMetrics)); updateFlowMetric(); }
function ensureSlaControls() { const levelBar = document.querySelector('.level-bar'); if (levelBar && !levelBar.querySelector('[data-level="C2"]')) levelBar.insertAdjacentHTML('beforeend', '<button class="level-button" data-level="C2">C2 Proficient</button>'); const sourceLine = document.querySelector('.source-line'); if (sourceLine && !sourceLine.querySelector('.density-signal')) sourceLine.insertAdjacentHTML('beforeend', '<span class="density-signal" id="density-signal">98% familiar words recommended</span>'); const readerFooter = document.querySelector('.reader-footer'); if (readerFooter && !readerFooter.querySelector('#reader-mode')) readerFooter.insertAdjacentHTML('beforeend', '<button class="reader-mode-toggle" id="reader-mode">Speed run</button>'); if (!document.querySelector('#quick-word-popover')) document.body.insertAdjacentHTML('beforeend', '<div class="quick-word-popover hidden" id="quick-word-popover" role="status"></div>'); const levelSelect = document.querySelector('#reader-level'); if (levelSelect && !levelSelect.querySelector('[value="C2"]')) levelSelect.insertAdjacentHTML('beforeend', '<option value="C2">C2 · Proficient</option>'); }
function renderBooks() { const query = libraryQuery.trim().toLowerCase(); const filtered = books.filter(book => (selectedTopic === 'all' || book.topic === selectedTopic) && (selectedLevel === 'all' || book.level === selectedLevel) && (selectedFilter === 'all' || (selectedFilter === 'progress' && book.progress > 0 && book.progress < 100) || (selectedFilter === 'finished' && book.progress === 100)) && (!query || `${book.title} ${book.topic} ${book.level} ${book.source}`.toLowerCase().includes(query))); grid.innerHTML = filtered.length ? filtered.map(book => { const cover = coverDetails[book.topic] || coverDetails.life; const level = levelDetails[book.level] || levelDetailsC2[book.level] || levelDetails.B1; const description = topicDescriptions[book.topic] || topicDescriptions.life; const photoSet = coverPhotos[book.topic] || coverPhotos.life; const photo = photoSet[coverPhotoIndex[book.title] % photoSet.length]; const familiarity = Math.max(95, Math.min(98, 99 - Math.abs(levelOrder.indexOf(book.level) - levelOrder.indexOf(learnerLevel)))); return `<article class="mini-book"><button class="cover-button" data-book="${book.title}" aria-label="Open ${book.title}"><div class="mini-cover ${book.cover} cover-${book.topic}"><img class="cover-photo" src="${photo}" alt="" loading="lazy" onerror="this.hidden=true;this.parentElement.classList.add('cover-photo-fallback')" /><span class="cover-art"></span><span class="cover-stamp">${cover[0]}</span><span class="cover-glyph">${cover[2]}</span><strong>${book.title}</strong><small>${cover[1]}</small></div></button><div class="mini-info"><div class="book-card-heading"><h3>${book.title}</h3><span class="difficulty-badge level-${book.level.toLowerCase()}">${book.level}</span></div><p class="book-description-small">${description}</p><div class="book-facts"><span>${level.label}</span><span>${familiarity}% familiar</span><span>${book.source}</span></div><div class="book-status"><span style="width:${book.progress}%"></span></div><button class="small-read-button" data-book="${book.title}">${book.progress ? 'Open book' : 'Start reading'} <span>→</span></button></div></article>`; }).join('') : '<p class="empty-state">No books match your search and filters.</p>'; }
async function downloadLibrary() {
  const button = document.querySelector('#download-library');
  const status = document.querySelector('#library-download-status');
  button.disabled = true;
  status.textContent = 'Preparing 82 books...';
  try {
    const database = await new Promise((resolve, reject) => {
      const request = indexedDB.open('wordloom-library', 2);
      request.onupgradeneeded = () => request.result.createObjectStore('books', { keyPath: 'title' });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    await new Promise((resolve, reject) => {
      const transaction = database.transaction('books', 'readwrite');
      books.forEach((book, index) => {
        const previousBook = activeBook;
        activeBook = book;
        transaction.objectStore('books').put({ ...book, pages: createBookPages(book), downloadedAt: Date.now() });
        activeBook = previousBook;
        if (index % 10 === 0) status.textContent = `Preparing ${index + 1} of ${books.length} books...`;
      });
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    localStorage.setItem('wordloom-library-downloaded', 'true');
    status.textContent = 'Ready offline';
    showToast('All books are ready offline');
  } catch (error) {
    status.textContent = 'Download failed';
    showToast('Could not save the library on this device');
  } finally {
    button.disabled = false;
  }
}

function renderStory() { document.querySelector('#story-copy').innerHTML = story.split(/(\s+)/).map(part => /^\s+$/.test(part) ? part : `<button class="word" data-word="${part.toLowerCase().replace(/[^a-z]/g, '')}">${part}</button>`).join(''); }
function buildWordMarkup(text) {
  return text.split(/(\s+)/).map(part => /^\s+$/.test(part) ? part : `<button class="word" data-word="${part.toLowerCase().replace(/[^a-z]/g, '')}">${part}</button>`).join('');
}
function renderReaderState() {
  const pages = getActivePages();
  const page = pages[readerState.page || 0];
  const storyCopy = document.querySelector('#story-copy');
  const progressValue = ((page.pageNumber) / pages.length) * 100;
  recordReadingPage(page);
  const graphic = coverDetails[activeBook.topic] || coverDetails.life;
  storyCopy.innerHTML = `<div class="reader-page" data-page="${page.pageNumber}"><h3>${page.subtitle}</h3><div class="page-graphic"><div><span class="graphic-symbol">${graphic[2]}</span>${graphic[0]} · visual guide</div></div>${page.paragraphs.map(paragraph => `<p>${paragraph.split(/(\s+)/).map(part => /^\s+$/.test(part) ? part : `<button class="word" data-word="${part.toLowerCase().replace(/[^a-z]/g, '')}">${part}</button>`).join('')}</p>`).join('')}<span class="page-number">Page ${page.pageNumber} of ${pages.length}</span></div>`;
  document.querySelector('.reading-meta').innerHTML = `<span class="tag amber">${activeBook.level} · Reading practice</span><span>Page ${page.pageNumber} · Chapter ${page.chapterIndex + 1}</span><span class="reading-time">100 pages · ${getActiveChapters().length} chapters</span>`;
  document.querySelector('#reading-view h1').textContent = activeBook.title;
  document.querySelector('.reading-author').textContent = `${activeBook.author} · adapted learning text`;
  document.querySelector('.reading-progress span').style.width = `${Math.min(100, Math.max(8, progressValue))}%`;
  const prevButton = document.querySelectorAll('.reader-control')[0];
  const nextButton = document.querySelectorAll('.reader-control')[1];
  const isFirstPage = (readerState.page || 0) === 0;
  const isLastPage = (readerState.page || 0) === pages.length - 1;
  prevButton.disabled = isFirstPage;
  nextButton.textContent = isLastPage ? 'Finished ✓' : 'Next page →';
  nextButton.disabled = false;
  const readerStatus = document.querySelector('.reader-status');
  if (readerStatus) {
    readerStatus.textContent = `Page ${page.pageNumber} / ${pages.length}`;
  }
}
function moveReader(step) {
  const pages = getActivePages();
  const nextPage = Math.min(pages.length - 1, Math.max(0, (readerState.page || 0) + step));
  if (nextPage === readerState.page) { showToast(step > 0 ? 'You have reached the end of this book.' : 'You are at the first page of this book.'); return; }
  readerState.page = nextPage;
  renderReaderState();
}
function showView(viewName) { Object.values(views).forEach(view => view.classList.add('hidden')); views[viewName].classList.remove('hidden'); document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === viewName)); document.querySelector('.breadcrumb strong').textContent = viewName === 'reading' ? 'Reading room' : viewName[0].toUpperCase() + viewName.slice(1); document.querySelector('.sidebar').classList.remove('mobile-open'); }
function openReader(bookTitle = activeBook.title) { activeBook = books.find(book => book.title === bookTitle) || activeBook; readerState = { page: 0 }; showView('reading'); renderReaderState(); }
function closeModals() { document.querySelectorAll('.modal-backdrop').forEach(modal => modal.classList.add('hidden')); }
function showDictionary(word) { const key = word.dataset.word; const data = dictionary[key] || [key, 'a word used in this story', 'word', `The word “${key}” appears in this story.`]; const translation = customTranslations[key]?.[motherLanguage] || (motherLanguage === 'ar' ? data[0] : `${data[0]} (${translations[motherLanguage]})`); document.querySelector('#dictionary-content').innerHTML = `<span class="detail-label">WORD IN CONTEXT</span><h3 id="dictionary-title">${key}</h3><span class="word-pronounce">/${key}/ · ${data[2]}</span><p class="word-definition">${data[1]}</p><div class="translation-line"><span>Translation · ${translations[motherLanguage]}</span><strong>${translation}</strong></div><div class="detail-label" style="display:block;margin-top:22px">ANOTHER EXAMPLE</div><div class="modal-example">${data[3]}</div><div class="modal-actions"><button class="speak-word" data-speak="${key}">◉ Hear word</button><button class="modal-save" data-save-word="${key}">${savedWords.has(key) ? '✓ Saved' : '+ Save to vocabulary'}</button></div>`; document.querySelector('#dictionary-modal').classList.remove('hidden'); }
function showDictionary(word) { const key = word.dataset.word; const data = dictionary[key] || [key, 'a word used in this story', 'word', `The word “${key}” appears in this story.`]; const translation = customTranslations[key]?.[motherLanguage] || (motherLanguage === 'ar' ? data[0] : `${data[0]} (${translations[motherLanguage]})`); activeWordContext = data[3]; const popover = document.querySelector('#quick-word-popover'); popover.innerHTML = `<strong>${key}</strong><span>${data[1]}</span><button data-more-word="${key}">More details</button>`; popover.classList.remove('hidden'); popover.style.left = `${Math.min(window.innerWidth - 250, word.getBoundingClientRect().left)}px`; popover.style.top = `${word.getBoundingClientRect().bottom + 8}px`; }
function getWordTranslation(key, data) { return customTranslations[key]?.[motherLanguage] || data[0] || 'Translation unavailable'; }
function showFullDictionary(key) { const data = dictionary[key] || [key, 'a word used in this story', 'word', `The word “${key}” appears in this story.`]; const translation = getWordTranslation(key, data); document.querySelector('#dictionary-content').innerHTML = `<span class="detail-label">WORD IN CONTEXT</span><h3 id="dictionary-title">${key}</h3><span class="word-pronounce">/${key}/ · ${data[2]}</span><p class="word-definition">${data[1]}</p><div class="translation-line"><span>Translation · ${translations[motherLanguage]}</span><strong>${translation}</strong></div><div class="detail-label" style="display:block;margin-top:22px">ANOTHER EXAMPLE</div><div class="modal-example">${activeWordContext || data[3]}</div><div class="modal-actions"><button class="speak-word" data-speak="${key}">◉ Hear word</button><button class="modal-save" data-save-word="${key}">${savedWords.has(key) ? '✓ Saved' : '+ Save to vocabulary'}</button></div>`; document.querySelector('#dictionary-modal').classList.remove('hidden'); document.querySelector('#quick-word-popover').classList.add('hidden'); }
function savePreferences() { motherLanguage = document.querySelector('#mother-language').value; learnerLevel = document.querySelector('#reader-level').value; graphicsEnabled = document.querySelector('#book-graphics').checked; localStorage.setItem('wordloom-language', motherLanguage); localStorage.setItem('wordloom-level', learnerLevel); localStorage.setItem('wordloom-graphics', graphicsEnabled ? 'on' : 'off'); document.body.classList.toggle('graphics-off', !graphicsEnabled); const mode = document.querySelector('#color-mode').value; document.body.classList.toggle('theme-dark', mode === 'dark'); localStorage.setItem('wordloom-mode', mode); renderReaderState(); closeModals(); showToast(`Preferences saved · ${learnerLevel}`); }
function renderVocabulary(query = '') { const matches = vocabulary.filter(([word, meaning, level]) => (selectedVocabLevel === 'all' || level === selectedVocabLevel) && `${word} ${meaning}`.toLowerCase().includes(query.toLowerCase())); const groups = ['A2', 'B1', 'B2'].map(level => { const words = matches.filter(item => item[2] === level); return words.length ? `<section class="word-group"><div class="word-group-heading"><h3>${level} words</h3><span>${words.length} saved</span></div><div class="word-list">${words.map(([word, meaning]) => `<div class="word-row"><strong>${word}</strong><span>${meaning}</span><span class="word-level">${level}</span></div>`).join('')}</div></section>` : ''; }).join(''); document.querySelector('#word-list').innerHTML = groups || '<p class="empty-state">No vocabulary matches your search.</p>'; document.querySelector('#saved-word-count').textContent = savedWords.size || vocabulary.length; document.querySelector('.nav-item[data-view="vocabulary"] .nav-count').textContent = savedWords.size || vocabulary.length; }
function renderNotes() { const noteMarkup = notes.map(note => `<article class="saved-note"><span class="note-pin">✦</span><p>${note.text}</p><span class="note-context">${note.book} · ${note.chapter}</span></article>`).join(''); document.querySelector('#notes-list').innerHTML = noteMarkup || '<p class="empty-state">Your notes will appear here. Save a useful idea while you read.</p>'; }

injectReaderStyles();
ensureSlaControls();
renderBooks();
renderStory();
renderVocabulary();
renderNotes();
document.querySelector('#auth-form').addEventListener('submit', submitAuth);
document.querySelector('#download-library').addEventListener('click', downloadLibrary);
if (localStorage.getItem('wordloom-library-downloaded') === 'true') document.querySelector('#library-download-status').textContent = 'Ready offline';
document.querySelector('#add-book').addEventListener('click', () => document.querySelector('#source-modal').classList.remove('hidden'));
document.querySelector('#import-local-book').addEventListener('click', () => { document.querySelector('#source-modal').classList.add('hidden'); document.querySelector('#pdf-input').click(); });
document.querySelectorAll('[data-source-url]').forEach(source => source.addEventListener('click', event => {
  event.preventDefault();
  const query = window.prompt(`Search ${source.dataset.sourceLabel}`, 'English reading');
  if (query?.trim()) window.open(`${source.dataset.sourceUrl}${encodeURIComponent(query.trim())}`, '_blank', 'noopener');
}));
document.querySelector('#auth-guest').addEventListener('click', () => unlockApp({ email: 'guest@wordloom.local', name: 'Guest reader' }));

const savedMode = localStorage.getItem('wordloom-mode') || 'light';
document.querySelector('#mother-language').value = motherLanguage; document.querySelector('#reader-level').value = learnerLevel; document.querySelector('#book-graphics').checked = graphicsEnabled; document.body.classList.toggle('theme-dark', savedMode === 'dark'); document.querySelector('#color-mode').textContent = savedMode === 'dark' ? 'Light mode' : 'Dark mode'; document.querySelector('#color-mode').setAttribute('aria-pressed', savedMode === 'dark'); document.body.classList.toggle('graphics-off', !graphicsEnabled);
updateFlowMetric();
document.querySelectorAll('.nav-item').forEach(button => button.addEventListener('click', () => button.dataset.view === 'reading' ? openReader() : showView(button.dataset.view))); document.querySelector('#continue-reading').addEventListener('click', () => openReader('The Lighthouse')); document.querySelector('#back-to-library').addEventListener('click', () => showView('library')); document.querySelector('#import-pdf').addEventListener('click', () => document.querySelector('#pdf-input').click()); document.querySelector('#pdf-input').addEventListener('change', event => { const file = event.target.files[0]; if (file) showToast(`${file.name} added. PDF reader setup is next.`); event.target.value = ''; });
document.querySelector('#new-note').addEventListener('click', () => showToast('New note editor is ready for the next step.')); document.querySelector('.settings-button').addEventListener('click', () => document.querySelector('#preferences-modal').classList.remove('hidden')); document.querySelector('#save-preferences').addEventListener('click', savePreferences); document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', closeModals)); document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('click', event => { if (event.target === backdrop) closeModals(); })); document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter-button').forEach(item => item.classList.remove('active')); button.classList.add('active'); selectedFilter = button.dataset.filter; renderBooks(); })); document.querySelectorAll('.topic-button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.topic-button').forEach(item => item.classList.remove('active')); button.classList.add('active'); selectedTopic = button.dataset.topic; renderBooks(); }));
document.querySelector('#color-mode').addEventListener('click', event => { const dark = !document.body.classList.contains('theme-dark'); document.body.classList.toggle('theme-dark', dark); localStorage.setItem('wordloom-mode', dark ? 'dark' : 'light'); event.currentTarget.textContent = dark ? 'Light mode' : 'Dark mode'; event.currentTarget.setAttribute('aria-pressed', dark); showToast(dark ? 'Dark reading mode on' : 'Light reading mode on'); });
document.querySelectorAll('.accent-choice').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.accent-choice').forEach(item => item.classList.remove('active')); button.classList.add('active'); document.body.classList.remove('accent-coral', 'accent-blue', 'accent-violet'); if (button.dataset.accent !== 'green') document.body.classList.add(`accent-${button.dataset.accent}`); })); document.querySelector('.text-button').addEventListener('click', () => document.querySelector('.library-section').scrollIntoView({ behavior: 'smooth' })); document.querySelector('.filter-icon').addEventListener('click', () => showToast('Grid view is already active.')); document.querySelectorAll('.reader-control').forEach(button => button.addEventListener('click', () => { const step = button.textContent.includes('Previous') ? -1 : 1; moveReader(step); })); document.querySelectorAll('.top-actions .icon-button')[0].addEventListener('click', () => showToast('Search will cover your books and vocabulary.')); document.querySelectorAll('.top-actions .icon-button')[1].addEventListener('click', () => showToast('You are all caught up.')); document.querySelector('.mobile-menu').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('mobile-open'));
document.querySelector('#vocab-search').addEventListener('input', event => renderVocabulary(event.target.value));
document.querySelector('#reader-mode').addEventListener('click', event => { document.querySelector('#reading-view').classList.toggle('speed-run'); event.target.textContent = document.querySelector('#reading-view').classList.contains('speed-run') ? 'Review mode' : 'Speed run'; showToast('Reading mode updated'); });
const storyCopy = document.querySelector('#story-copy');
let swipeStartX = 0;
let swipeStartY = 0;
storyCopy.addEventListener('touchstart', event => {
  const touch = event.changedTouches[0];
  swipeStartX = touch.clientX;
  swipeStartY = touch.clientY;
}, { passive: true });
storyCopy.addEventListener('touchend', event => {
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - swipeStartX;
  const deltaY = touch.clientY - swipeStartY;
  if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY)) return;
  moveReader(deltaX < 0 ? 1 : -1);
}, { passive: true });

document.addEventListener('click', event => { const word = event.target.closest('.word'); if (word) { showDictionary(word); return; } const more = event.target.closest('[data-more-word]'); if (more) { showFullDictionary(more.dataset.moreWord); return; } const save = event.target.closest('[data-save-word]'); if (save) { savedWords.add(save.dataset.saveWord); localStorage.setItem('wordloom-saved-words', JSON.stringify([...savedWords])); save.textContent = '✓ Saved'; renderVocabulary(document.querySelector('#vocab-search').value); showToast(`${save.dataset.saveWord} saved to your vocabulary`); return; } const speak = event.target.closest('[data-speak]'); if (speak && 'speechSynthesis' in window) speechSynthesis.speak(new SpeechSynthesisUtterance(speak.dataset.speak)); });
document.addEventListener('click', event => { if (!event.target.closest('.word') && !event.target.closest('#quick-word-popover')) document.querySelector('#quick-word-popover')?.classList.add('hidden'); });

document.querySelector('#story-copy').dataset.trackScroll = 'true';
document.querySelector('#library-search').addEventListener('input', event => { libraryQuery = event.target.value; renderBooks(); });
document.querySelectorAll('.level-button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.level-button').forEach(item => item.classList.remove('active')); button.classList.add('active'); selectedLevel = button.dataset.level; renderBooks(); }));
document.querySelectorAll('.vocab-filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.vocab-filter').forEach(item => item.classList.remove('active')); button.classList.add('active'); selectedVocabLevel = button.dataset.level; renderVocabulary(document.querySelector('#vocab-search').value); }));
document.querySelector('.top-actions .icon-button').addEventListener('click', () => { showView('library'); document.querySelector('#library-search').focus(); });
document.querySelector('#new-note').addEventListener('click', () => { const text = window.prompt('What useful idea do you want to remember?'); if (!text?.trim()) return; const currentPage = getActivePages()[readerState.page || 0]; notes.unshift({ text: text.trim(), book: activeBook.title, chapter: `Chapter ${currentPage.chapterIndex + 1}, page ${currentPage.pageNumber}` }); localStorage.setItem('wordloom-notes', JSON.stringify(notes)); renderNotes(); showView('notes'); showToast('Note saved'); });
document.addEventListener('click', event => { const book = event.target.closest('[data-book]'); if (book) openReader(book.dataset.book); const save = event.target.closest('[data-save-word]'); if (save) { savedWords.add(save.dataset.saveWord); localStorage.setItem('wordloom-saved-words', JSON.stringify([...savedWords])); renderVocabulary(document.querySelector('#vocab-search').value); } });
