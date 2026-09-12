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
const curatedCatalog = [
  { title: 'The Art of War', author: 'Sun Tzu', level: 'B2', topic: 'history', length: 'Short · 18k words', source: 'Project Gutenberg · public domain', kind: 'quoted' },
  { title: 'The Republic', author: 'Plato', level: 'C1', topic: 'history', length: 'Long · 95k words', source: 'Project Gutenberg · public domain', kind: 'quoted' },
  { title: 'Meditations', author: 'Marcus Aurelius', level: 'B2', topic: 'life', length: 'Short · 35k words', source: 'Project Gutenberg · public domain', kind: 'quoted' },
  { title: 'The Prince', author: 'Niccolò Machiavelli', level: 'C1', topic: 'history', length: 'Short · 45k words', source: 'Project Gutenberg · public domain', kind: 'quoted' },
  { title: 'The Autobiography of Benjamin Franklin', author: 'Benjamin Franklin', level: 'B2', topic: 'history', length: 'Medium · 65k words', source: 'Library of Congress · public domain', kind: 'quoted' },
  { title: 'Narrative of the Life of Frederick Douglass', author: 'Frederick Douglass', level: 'B2', topic: 'history', length: 'Medium · 55k words', source: 'Library of Congress · public domain', kind: 'quoted' },
  { title: 'Walden', author: 'Henry David Thoreau', level: 'C1', topic: 'nature', length: 'Long · 115k words', source: 'Standard Ebooks · public domain', kind: 'quoted' },
  { title: 'On Liberty', author: 'John Stuart Mill', level: 'C1', topic: 'history', length: 'Medium · 70k words', source: 'Project Gutenberg · public domain', kind: 'quoted' },
  { title: 'The Origin of Species', author: 'Charles Darwin', level: 'C1', topic: 'science', length: 'Long · 155k words', source: 'Standard Ebooks · public domain', kind: 'quoted' },
  { title: 'The Wealth of Nations', author: 'Adam Smith', level: 'C1', topic: 'business', length: 'Very long · 390k words', source: 'Project Gutenberg · public domain', kind: 'quoted' },
  { title: 'The Federalist Papers', author: 'Hamilton, Madison, Jay', level: 'C1', topic: 'history', length: 'Very long · 180k words', source: 'Library of Congress · public domain', kind: 'quoted' },
  { title: 'The Communist Manifesto', author: 'Karl Marx and Friedrich Engels', level: 'B2', topic: 'history', length: 'Short · 27k words', source: 'Internet Archive · public domain', kind: 'quoted' },
  { title: 'Common Sense', author: 'Thomas Paine', level: 'B2', topic: 'history', length: 'Short · 35k words', source: 'Project Gutenberg · public domain', kind: 'quoted' },
  { title: 'The Souls of Black Folk', author: 'W. E. B. Du Bois', level: 'C1', topic: 'culture', length: 'Medium · 80k words', source: 'Standard Ebooks · public domain', kind: 'quoted' },
  { title: 'The Essays of Michel de Montaigne', author: 'Michel de Montaigne', level: 'C1', topic: 'life', length: 'Very long · 230k words', source: 'Project Gutenberg · public domain', kind: 'quoted' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', level: 'B2', topic: 'culture', length: 'Long · 122k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'Jane Eyre', author: 'Charlotte Brontë', level: 'B2', topic: 'culture', length: 'Long · 183k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'Wuthering Heights', author: 'Emily Brontë', level: 'C1', topic: 'culture', length: 'Long · 108k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'Great Expectations', author: 'Charles Dickens', level: 'B2', topic: 'culture', length: 'Very long · 186k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'A Tale of Two Cities', author: 'Charles Dickens', level: 'B2', topic: 'history', length: 'Long · 135k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'Frankenstein', author: 'Mary Shelley', level: 'B2', topic: 'science', length: 'Medium · 75k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'Dracula', author: 'Bram Stoker', level: 'B2', topic: 'culture', length: 'Long · 160k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'Little Women', author: 'Louisa May Alcott', level: 'B1', topic: 'life', length: 'Long · 170k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', level: 'C1', topic: 'travel', length: 'Very long · 460k words', source: 'Project Gutenberg · public domain', kind: 'novel' },
  { title: 'The Three Musketeers', author: 'Alexandre Dumas', level: 'B2', topic: 'history', length: 'Very long · 220k words', source: 'Project Gutenberg · public domain', kind: 'novel' },
  { title: 'Moby-Dick', author: 'Herman Melville', level: 'C1', topic: 'travel', length: 'Very long · 210k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', level: 'C1', topic: 'culture', length: 'Medium · 80k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', level: 'B2', topic: 'life', length: 'Medium · 100k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'Alice’s Adventures in Wonderland', author: 'Lewis Carroll', level: 'B1', topic: 'culture', length: 'Short · 27k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'The Wonderful Wizard of Oz', author: 'L. Frank Baum', level: 'B1', topic: 'travel', length: 'Short · 40k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'The Secret Garden', author: 'Frances Hodgson Burnett', level: 'B1', topic: 'life', length: 'Medium · 75k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'The Wind in the Willows', author: 'Kenneth Grahame', level: 'B2', topic: 'nature', length: 'Medium · 65k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'The Old Man and the Sea', author: 'Ernest Hemingway', level: 'B1', topic: 'life', length: 'Short · 27k words', source: 'Publisher source · adapted', kind: 'novel' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', level: 'B2', topic: 'culture', length: 'Medium · 47k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'Ulysses', author: 'James Joyce', level: 'C1', topic: 'culture', length: 'Very long · 265k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'Don Quixote', author: 'Miguel de Cervantes', level: 'C1', topic: 'travel', length: 'Very long · 345k words', source: 'Project Gutenberg · public domain', kind: 'novel' },
  { title: 'The Odyssey', author: 'Homer', level: 'B2', topic: 'travel', length: 'Long · 120k words', source: 'Project Gutenberg · public domain', kind: 'novel' },
  { title: 'The Divine Comedy', author: 'Dante Alighieri', level: 'C1', topic: 'culture', length: 'Long · 100k words', source: 'Project Gutenberg · public domain', kind: 'novel' },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', level: 'C1', topic: 'culture', length: 'Very long · 211k words', source: 'Project Gutenberg · public domain', kind: 'novel' },
  { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', level: 'C1', topic: 'culture', length: 'Very long · 364k words', source: 'Project Gutenberg · public domain', kind: 'novel' },
  { title: 'Anna Karenina', author: 'Leo Tolstoy', level: 'C1', topic: 'culture', length: 'Very long · 350k words', source: 'Project Gutenberg · public domain', kind: 'novel' },
  { title: 'War and Peace', author: 'Leo Tolstoy', level: 'C1', topic: 'history', length: 'Very long · 587k words', source: 'Project Gutenberg · public domain', kind: 'novel' },
  { title: 'Middlemarch', author: 'George Eliot', level: 'C1', topic: 'culture', length: 'Very long · 210k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'A Christmas Carol', author: 'Charles Dickens', level: 'B1', topic: 'culture', length: 'Short · 30k words', source: 'Standard Ebooks · public domain', kind: 'novel' },
  { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', level: 'B2', topic: 'culture', length: 'Medium · 78k words', source: 'Standard Ebooks · public domain', kind: 'novel' }
];
curatedCatalog.forEach((book, index) => books.push({ ...book, cover: ['cover-green', 'cover-blue', 'cover-yellow', 'cover-rose'][index % 4], progress: 0 }));
const authScreen = document.querySelector('#auth-screen');
const appShell = document.querySelector('.app-shell');
const authSession = localStorage.getItem('wordloom-session');
function openWelcome() { if (!localStorage.getItem('wordloom-welcome-complete')) document.querySelector('#welcome-modal').classList.remove('hidden'); }
function unlockApp(session) { localStorage.setItem('wordloom-session', JSON.stringify(session)); authScreen.classList.add('hidden'); appShell.classList.remove('auth-locked'); openWelcome(); }
function submitAuth(event) { event.preventDefault(); const email = document.querySelector('#auth-email').value.trim(); const password = document.querySelector('#auth-password').value; const error = document.querySelector('#auth-error'); if (!email || password.length < 4) { error.textContent = 'Enter a valid email and a password with at least 4 characters.'; return; } unlockApp({ email, name: email.split('@')[0] }); }
if (authSession) { authScreen.classList.add('hidden'); appShell.classList.remove('auth-locked'); openWelcome(); }
const vocabulary = [['restless', 'unable to relax or stay still', 'B1'], ['distant', 'far away in space or time', 'B1'], ['familiar', 'well known from experience', 'A2'], ['visibility', 'how clearly something can be seen', 'B2'], ['steady', 'firm and not changing', 'B1'], ['veil', 'a covering that hides something', 'B2'], ['value', 'the worth or importance of something', 'A2'], ['city', 'a large populated place with streets and buildings', 'A1'], ['nature', 'the natural world around us', 'A2'], ['emotion', 'a feeling such as joy, fear, or sadness', 'B1']];
const extraTitles = { life: ['Morning Rituals', 'The Friendly Neighbor', 'A Room of One’s Own', 'Making Time', 'The Sunday Table'], travel: ['Across the Desert', 'The Harbor Road', 'Three Days in Rome', 'The Island Journal', 'A Guide to New Streets', 'Night Train North'], culture: ['The Language of Music', 'Stories We Carry', 'The Open Gallery', 'Food and Memory', 'Theatre Lights', 'A Letter to Home'], science: ['The Life of Bees', 'Inside the Human Body', 'Weather Patterns', 'The Language of Plants', 'Ocean Currents', 'The Science of Sleep'], business: ['The Small Enterprise', 'Leading with Care', 'Ideas that Scale', 'The Customer Story', 'Work in Progress', 'The Value of Time', 'A Better Meeting', 'Building Trust'], technology: ['The Digital Garden', 'Understanding the Internet', 'Robots at Work', 'The Future of Energy', 'A Human Interface', 'Learning to Code', 'Data and Decisions', 'The Connected Home'], history: ['The Silk Road', 'Women Who Changed History', 'The Industrial Age', 'A People’s Archive', 'The First Cities', 'The Long Voyage', 'Revolutions in Print', 'The Story of Numbers'] };

const playData = {
  memento: [
    { word: 'city', emoji: '🏙️', visualLabel: 'streets and buildings' },
    { word: 'nature', emoji: '🌿', visualLabel: 'the natural world' },
    { word: 'emotion', emoji: '💭', visualLabel: 'a feeling' },
    { word: 'value', emoji: '✨', visualLabel: 'worth or importance' }
  ],
  duel: [
    { word: 'value', meaning: 'the worth or importance of something', distractors: ['the amount something weighs', 'a place where people buy goods'] },
    { word: 'steady', meaning: 'firm and not changing', distractors: ['moving in a sudden pattern', 'made of many different colors'] },
    { word: 'visibility', meaning: 'how clearly something can be seen', distractors: ['how loudly something can be heard', 'how quickly something can move'] },
    { word: 'familiar', meaning: 'well known from experience', distractors: ['never seen or heard before', 'difficult to recognize because it is hidden'] }
  ],
  wordcraft: ['C', 'I', 'T', 'Y', 'N', 'A', 'T', 'U', 'R', 'E', 'E', 'M', 'O', 'T', 'I', 'O', 'N', 'V', 'A', 'L', 'U', 'E']
};
const coreGameData = {
  phoneme: [
    { word: 'steady', parts: ['st', '_', 'ady'], missing: 'E', phoneme: '/e/', spokenPhoneme: 'eh' },
    { word: 'nature', parts: ['n', '_', 'ture'], missing: 'A', phoneme: '/a/', spokenPhoneme: 'ay' }
  ],
  context: [
    { word: 'visibility', scene: '🌫️', sceneLabel: 'A foggy road where distant shapes are hard to see.', options: ['visibility', 'emotion', 'value'], hint: 'Think about how clearly the scene can be seen.' },
    { word: 'steady', scene: '🕯️', sceneLabel: 'A candle flame stays still while the room is quiet.', options: ['steady', 'distant', 'familiar'], hint: 'Choose the word for something firm and not changing.' }
  ],
  scramble: [
    { tiles: ['keeps', 'the', 'lighthouse', 'ships', 'safe'], accepted: [['the', 'lighthouse', 'keeps', 'ships', 'safe']] },
    { tiles: ['felt', 'the', 'voice', 'familiar'], accepted: [['the', 'voice', 'felt', 'familiar']] }
  ],
  recall: [
    { word: 'distant', options: ['distant', 'steady', 'familiar', 'value'] },
    { word: 'emotion', options: ['emotion', 'visibility', 'nature', 'city'] },
    { word: 'veil', options: ['veil', 'value', 'steady', 'restless'] },
    { word: 'nature', options: ['nature', 'distant', 'emotion', 'city'] }
  ]
};
Object.entries(extraTitles).forEach(([topic, titles]) => titles.forEach((title, index) => books.push({ title, author: 'Wordloom Collection', level: index % 3 === 0 ? 'A2' : index % 3 === 1 ? 'B1' : 'B2', cover: ['cover-rose', 'cover-green', 'cover-yellow', 'cover-blue'][index % 4], progress: 0, topic, source: index % 2 ? 'Open Library' : 'Wordloom Originals' })));
const dictionary = {
  morning: ['صباح', 'the early part of the day, before noon', 'noun', 'The morning was quiet and bright.'],
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
  thought: ['فكرة', 'an idea or opinion produced by thinking', 'noun', 'That thought made her smile.'],
  cafe: ['مقهى', 'a small restaurant where people drink coffee and eat light meals', 'noun', 'We met at a quiet cafe after work.']
};
const translations = { ar: 'العربية', en: 'English', fr: 'français', es: 'español', tr: 'Türkçe', de: 'Deutsch' };
const customTranslations = {
  morning: { ar: 'صباح', en: 'morning', fr: 'matin', es: 'mañana', tr: 'sabah', de: 'Morgen' },
  the: { ar: 'الـ', en: 'the', fr: 'le / la', es: 'el / la', tr: 'belirli tanımlık', de: 'der / die / das' }, sea: { ar: 'البحر', en: 'sea', fr: 'mer', es: 'mar', tr: 'deniz', de: 'Meer' }, restless: { ar: 'قلق / مضطرب', en: 'restless', fr: 'agité', es: 'inquieto', tr: 'huzursuz', de: 'unruhig' }, evening: { ar: 'المساء', en: 'evening', fr: 'soir', es: 'tarde', tr: 'akşam', de: 'Abend' }, folding: { ar: 'ينطوي / يطوي', en: 'folding', fr: 'pliage', es: 'doblando', tr: 'katlama', de: 'falten' }, dark: { ar: 'مظلم / داكن', en: 'dark', fr: 'sombre', es: 'oscuro', tr: 'karanlık', de: 'dunkel' }, blue: { ar: 'أزرق', en: 'blue', fr: 'bleu', es: 'azul', tr: 'mavi', de: 'blau' }, cafe: { ar: 'مقهى', en: 'cafe', fr: 'café', es: 'cafetería', tr: 'kafe', de: 'Café' }, sleeves: { ar: 'أكمام', en: 'sleeves', fr: 'manches', es: 'mangas', tr: 'kollar', de: 'Ärmel' }, lighthouse: { ar: 'منارة', en: 'lighthouse', fr: 'phare', es: 'faro', tr: 'deniz feneri', de: 'Leuchtturm' }, keeper: { ar: 'حارس / قيّم', en: 'keeper', fr: 'gardien', es: 'guardián', tr: 'bekçi', de: 'Wächter' }, checked: { ar: 'فحص / تحقق', en: 'checked', fr: 'vérifié', es: 'comprobado', tr: 'kontrol edildi', de: 'geprüft' }, familiar: { ar: 'مألوف', en: 'familiar', fr: 'familier', es: 'familiar', tr: 'tanıdık', de: 'vertraut' }, village: { ar: 'قرية', en: 'village', fr: 'village', es: 'pueblo', tr: 'köy', de: 'Dorf' }, disappear: { ar: 'يختفي', en: 'disappear', fr: 'disparaître', es: 'desaparecer', tr: 'kaybolmak', de: 'verschwinden' }, veil: { ar: 'حجاب / ستار', en: 'veil', fr: 'voile', es: 'velo', tr: 'peçe', de: 'Schleier' }, rain: { ar: 'مطر', en: 'rain', fr: 'pluie', es: 'lluvia', tr: 'yağmur', de: 'Regen' }, distant: { ar: 'بعيد', en: 'distant', fr: 'lointain', es: 'distante', tr: 'uzak', de: 'fern' }, warning: { ar: 'تحذير', en: 'warning', fr: 'avertissement', es: 'advertencia', tr: 'uyarı', de: 'Warnung' }, logbook: { ar: 'سجل', en: 'logbook', fr: 'journal de bord', es: 'cuaderno de bitácora', tr: 'günlük', de: 'Logbuch' }, carefully: { ar: 'بعناية', en: 'carefully', fr: 'soigneusement', es: 'cuidadosamente', tr: 'dikkatlice', de: 'vorsichtig' }, visibility: { ar: 'وضوح الرؤية', en: 'visibility', fr: 'visibilité', es: 'visibilidad', tr: 'görüş mesafesi', de: 'Sichtbarkeit' }, steady: { ar: 'ثابت / مستقر', en: 'steady', fr: 'stable', es: 'estable', tr: 'sabit', de: 'stabil' }, boat: { ar: 'قارب', en: 'boat', fr: 'bateau', es: 'barco', tr: 'tekne', de: 'Boot' }, thought: { ar: 'فكرة', en: 'thought', fr: 'pensée', es: 'pensamiento', tr: 'düşünce', de: 'Gedanke' }
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
const views = { library: document.querySelector('#library-view'), reading: document.querySelector('#reading-view'), vocabulary: document.querySelector('#vocabulary-view'), play: document.querySelector('#play-view') };
let selectedFilter = 'all'; let selectedTopic = 'all'; let selectedLevel = 'all'; let libraryQuery = ''; let selectedVocabLevel = 'all'; let activeLibraryTab = 'all'; let selectedPlayTab = 'phoneme'; let motherLanguage = localStorage.getItem('wordloom-language') || 'ar'; let learnerLevel = localStorage.getItem('wordloom-level') || 'A1'; let graphicsEnabled = localStorage.getItem('wordloom-graphics') !== 'off'; let savedWords = new Set(JSON.parse(localStorage.getItem('wordloom-saved-words') || '[]')); let vocabularyRecords = JSON.parse(localStorage.getItem('wordloom-vocabulary-records') || '{}'); let activeWordContext = '';
let favoriteBooks = new Set(JSON.parse(localStorage.getItem('wordloom-favorite-books') || '[]'));
let flashcardIndex = 0;
let wordBankVisible = false;
let reviewState = { answered: false, choices: [], correctChoice: '' };
let activeBook = books[0]; let readerState = { page: 0 };
let readingMetrics = JSON.parse(localStorage.getItem('wordloom-reading-metrics') || '{"words":0,"minutes":0,"pages":0,"lookups":0,"streak":0,"lastDay":""}');
let lastRecordedPage = '';
const gameSchemas = {
  level: { $schema: 'https://json-schema.org/draft/2020-12/schema', type: 'object', required: ['id', 'gameType', 'difficulty', 'content'], properties: { id: { type: 'string' }, gameType: { type: 'string' }, difficulty: { type: 'string' }, content: { type: 'array' } } },
  word: { $schema: 'https://json-schema.org/draft/2020-12/schema', type: 'object', required: ['word', 'meaning', 'level'], properties: { word: { type: 'string' }, meaning: { type: 'string' }, level: { type: 'string' } } },
  phoneme: { $schema: 'https://json-schema.org/draft/2020-12/schema', type: 'object', required: ['grapheme', 'phoneme', 'spokenPhoneme'], properties: { grapheme: { type: 'string' }, phoneme: { type: 'string' }, spokenPhoneme: { type: 'string' } } },
  audioAsset: { $schema: 'https://json-schema.org/draft/2020-12/schema', type: 'object', required: ['id', 'text', 'locale'], properties: { id: { type: 'string' }, text: { type: 'string' }, locale: { type: 'string' }, src: { type: ['string', 'null'] } } },
  distractorPool: { $schema: 'https://json-schema.org/draft/2020-12/schema', type: 'object', required: ['target', 'items', 'basis'], properties: { target: { type: 'string' }, items: { type: 'array', items: { type: 'string' } }, basis: { enum: ['phonological', 'semantic'] } } }
};
window.wordloomGameSchemas = gameSchemas;

const gameStateTransitions = {
  INIT: { ASSETS_READY: 'READY' },
  READY: { START: 'PLAYING' },
  PLAYING: { EVALUATE: 'EVALUATING' },
  EVALUATING: { FEEDBACK: 'FEEDBACK' },
  FEEDBACK: { RESUME: 'PLAYING', COMPLETE: 'COMPLETED' },
  COMPLETED: { RESET: 'READY' }
};
function createGameMachine(id) {
  let state = 'INIT';
  return {
    id,
    get state() { return state; },
    transition(event) {
      const next = gameStateTransitions[state]?.[event];
      if (!next) return false;
      state = next;
      return true;
    },
    canInteract() { return state === 'PLAYING'; },
    canAdvance() { return state === 'COMPLETED'; },
    isTransitioning() { return state === 'EVALUATING' || state === 'FEEDBACK'; }
  };
}

const playState = {
  memento: { deck: [], revealed: [], matched: new Set(), score: 0, locked: false },
  duel: { currentIndex: 0, status: 'idle', prompt: '', answer: '', solved: false },
  wordcraft: { targetWord: 'NATURE', selection: [], solved: false },
  phoneme: { roundIndex: 0, solved: false, draggedLetter: '' },
  context: { roundIndex: 0, attempts: 0, solved: false },
  scramble: { roundIndex: 0, selection: [], solved: false },
  recall: { roundIndex: 0, score: 0, streak: 0, timeLimit: 3200, timer: null, startedAt: 0, locked: false }
};
const gameMachines = Object.fromEntries(['phoneme', 'context', 'scramble', 'recall'].map(id => [id, createGameMachine(id)]));
playState.machines = gameMachines;
window.playState = playState;
window.renderMementoBoard = renderMementoBoard;
window.renderWordcraftGrid = renderWordcraftGrid;

function speakText(text) {
  if (!text || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = .78;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

function speakPhoneme(round, letter) {
  speakText(round?.spokenPhoneme || letter);
}

function queueFeedbackAudio(text) {
  const timer = setTimeout(() => {
    feedbackTimers.delete(timer);
    speakText(text);
  }, 150);
  feedbackTimers.add(timer);
}

function recordGameCompletion(gameId, word) {
  const source = vocabulary.find(entry => entry[0] === word) || [word, dictionary[word]?.[1] || 'learned through game play', 'B1'];
  const record = vocabularyRecords[word] || { word, meaning: source[1], level: source[2], repetitions: 0, interval: 0, nextReview: Date.now() };
  record.repetitions = (record.repetitions || 0) + 1;
  record.interval = Math.max(1, Math.round((record.interval || 1) * 2.5));
  record.nextReview = Date.now() + record.interval * 86400000;
  record.lastGame = gameId;
  vocabularyRecords[word] = record;
  localStorage.setItem('wordloom-vocabulary-records', JSON.stringify(vocabularyRecords));
  const progress = JSON.parse(localStorage.getItem('wordloom-game-progress') || '{}');
  progress[gameId] = (progress[gameId] || 0) + 1;
  localStorage.setItem('wordloom-game-progress', JSON.stringify(progress));
}

const gameAssetManifest = [
  ...coreGameData.phoneme.map(round => ({ id: `phoneme-${round.word}`, text: round.spokenPhoneme, locale: 'en-US', src: null })),
  ...coreGameData.context.map(round => ({ id: `scene-${round.word}`, text: round.sceneLabel, locale: 'visual', src: null })),
  ...coreGameData.recall.map(round => ({ id: `recall-${round.word}`, text: round.word, locale: 'en-US', src: null }))
];
window.wordloomGameAssets = gameAssetManifest;
let gameAssetsReady = false;
const feedbackTimers = new Set();

function preloadGameAssets() {
  const visualReady = gameAssetManifest.filter(asset => asset.locale === 'visual').every(asset => asset.text);
  const audioReady = 'speechSynthesis' in window;
  if (!visualReady) return Promise.resolve({ visualReady: false, audioReady });
  if (!audioReady) return Promise.resolve({ visualReady: true, audioReady: false });
  speechSynthesis.getVoices();
  return new Promise(resolve => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      speechSynthesis.removeEventListener('voiceschanged', finish);
      resolve({ visualReady: true, audioReady: true });
    };
    speechSynthesis.addEventListener('voiceschanged', finish, { once: true });
    setTimeout(finish, 180);
  });
}

function renderGameGate(gameId, panel, render) {
  const machine = gameMachines[gameId];
  panel.dataset.gamePhase = machine.state;
  if (machine.state === 'INIT') {
    panel.setAttribute('aria-busy', 'true');
    panel.innerHTML = '<div class="game-loader" role="status"><span></span><p>Preparing this game...</p></div>';
    return false;
  }
  panel.removeAttribute('aria-busy');
  if (machine.state === 'READY') {
    panel.innerHTML = `<div class="game-ready"><p>Game assets ready.</p><button class="game-next" data-start-game="${gameId}" type="button">Start game</button></div>`;
    panel.querySelector('[data-start-game]').addEventListener('click', () => {
      if (machine.transition('START')) render();
    });
    return false;
  }
  if (machine.isTransitioning()) {
    panel.setAttribute('aria-busy', 'true');
    panel.innerHTML = '<div class="game-transition" role="status">Checking your answer...</div>';
    return false;
  }
  return true;
}

function evaluateGameAction(gameId, render, completed) {
  const machine = gameMachines[gameId];
  if (!machine.canInteract() || !machine.transition('EVALUATE')) return false;
  render();
  setTimeout(() => {
    if (!machine.transition('FEEDBACK')) return;
    render();
    setTimeout(() => {
      machine.transition(completed ? 'COMPLETE' : 'RESUME');
      render();
    }, 320);
  }, 150);
  return true;
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    clearTimeout(playState.recall.timer);
    clearInterval(playState.recall.progressTimer);
    feedbackTimers.forEach(timer => clearTimeout(timer));
    feedbackTimers.clear();
    return;
  }
  if (selectedPlayTab === 'recall' && gameMachines.recall.canInteract()) renderRecallGame();
});

function bindMementoBoard() {
  const mementoCards = document.querySelectorAll('.memento-card');
  mementoCards.forEach(card => {
    if (card.dataset.bound === 'memento') return;
    card.dataset.bound = 'memento';
    card.addEventListener('click', () => {
      const cardId = card.dataset.cardId;
      const cardWord = card.dataset.cardWord;
      if (!cardId || !cardWord) return;
      if (playState.memento.locked || playState.memento.matched.has(cardWord) || playState.memento.revealed.includes(cardId)) return;
      playState.memento.revealed.push(cardId);
      speakText(cardWord);
      renderMementoBoard();

      if (playState.memento.revealed.length === 2) {
        playState.memento.locked = true;
        const [firstId, secondId] = playState.memento.revealed;
        const firstCard = playState.memento.deck.find(entry => entry.id === firstId);
        const secondCard = playState.memento.deck.find(entry => entry.id === secondId);

        if (firstCard && secondCard && firstCard.word === secondCard.word) {
          playState.memento.matched.add(firstCard.word);
          playState.memento.score += 1;
          showToast(`Match! “${firstCard.word}” is correct.`);
          playState.memento.revealed = [];
          playState.memento.locked = false;
          renderMementoBoard();
        } else {
          const firstWord = firstCard?.word || 'card';
          const secondWord = secondCard?.word || 'card';
          showToast(`Not quite. ${firstWord} and ${secondWord} do not match.`);
          setTimeout(() => {
            playState.memento.revealed = [];
            playState.memento.locked = false;
            renderMementoBoard();
          }, 650);
        }
      }
    });
  });
}

function resetDuelRound() {
  const round = playData.duel[playState.duel.currentIndex % playData.duel.length];
  const panel = document.querySelector('.duel-panel');
  if (!panel) return;

  const choices = [round.meaning, ...round.distractors];
  playState.duel.prompt = `Choose the best meaning of "${round.word}"`;
  playState.duel.answer = round.meaning;
  playState.duel.solved = false;
  panel.innerHTML = `
    <p class="duel-prompt">${playState.duel.prompt}</p>
    <button class="sound-button" data-speak="${round.word}" type="button" aria-label="Hear ${round.word}">🔊 Hear "${round.word}"</button>
    <div class="duel-choices">
      ${choices.map(choice => `<button type="button" data-answer="${choice}">${choice}</button>`).join('')}
    </div>
  `;
  speakText(round.word);
  bindDuels();
}

function bindDuels() {
  const duelingChoices = document.querySelectorAll('.duel-choices button');
  duelingChoices.forEach(button => {
    if (button.dataset.bound === 'duel') return;
    button.dataset.bound = 'duel';
    button.addEventListener('click', () => {
      const userAnswer = button.dataset.answer || button.textContent.trim();
      const promptText = document.querySelector('.duel-prompt');
      const choices = document.querySelectorAll('.duel-choices button');
      const correctAnswer = playState.duel.answer;
      choices.forEach(choice => choice.classList.remove('correct', 'wrong'));

      if (userAnswer === correctAnswer) {
        button.classList.add('correct');
        if (promptText) promptText.textContent = `Correct — ${correctAnswer}`;
        showToast('Correct answer!');
        playState.duel.solved = true;
      } else {
        button.classList.add('wrong');
        const correctButton = [...choices].find(choice => (choice.dataset.answer || choice.textContent.trim()) === correctAnswer);
        if (correctButton) correctButton.classList.add('correct');
        if (promptText) promptText.textContent = `Close — the best answer is: ${correctAnswer}`;
        showToast('Not quite. Try the next clue.');
      }

      setTimeout(() => {
        playState.duel.currentIndex = (playState.duel.currentIndex + 1) % playData.duel.length;
        resetDuelRound();
      }, 1100);
    });
  });
}

function bindWordcraft() {
  const wordcraftCells = document.querySelectorAll('.wordcraft-cell');
  wordcraftCells.forEach(cell => {
    if (cell.dataset.bound === 'wordcraft') return;
    cell.dataset.bound = 'wordcraft';
    cell.addEventListener('click', () => {
      const index = Number(cell.dataset.cellIndex);
      const letters = playData.wordcraft.slice();
      const targetWord = playState.wordcraft.targetWord;
      const selection = playState.wordcraft.selection;
      if (playState.wordcraft.solved) return;
      if (selection.includes(index)) {
        const indexToRemove = selection.lastIndexOf(index);
        selection.splice(indexToRemove, 1);
      } else {
        selection.push(index);
        speakText(letters[index]);
      }
      const chosenLetters = selection.map(item => letters[item]).join('').toUpperCase();
      if (chosenLetters.length > targetWord.length) {
        playState.wordcraft.selection = [];
        renderWordcraftGrid();
        showToast('That sequence is too long. Try again.');
        return;
      }
      renderWordcraftGrid();
      if (chosenLetters === targetWord) {
        playState.wordcraft.solved = true;
        renderWordcraftGrid();
        speakText(targetWord);
        showToast('Puzzle solved! You built NATURE.');
        return;
      }
      if (chosenLetters.length === targetWord.length && chosenLetters !== targetWord) {
        setTimeout(() => {
          playState.wordcraft.selection = [];
          renderWordcraftGrid();
        }, 550);
        showToast('Almost — try a different path through the letters.');
      }
    });
  });
}

function isPointInside(element, clientX, clientY) {
  const rect = element.getBoundingClientRect();
  return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}

function renderPhonemeGame() {
  const panel = document.querySelector('#phoneme-panel');
  if (!panel) return;
  if (!renderGameGate('phoneme', panel, renderPhonemeGame)) return;
  const round = coreGameData.phoneme[playState.phoneme.roundIndex % coreGameData.phoneme.length];
  panel.innerHTML = `<div class="phoneme-word" aria-label="Complete ${round.word}">${round.parts.map(part => part === '_' ? `<span class="phoneme-drop-zone ${playState.phoneme.solved ? 'is-snapped' : ''}" data-phoneme-zone="true">${playState.phoneme.solved ? round.missing : '?'}</span>` : `<span>${part}</span>`).join('')}</div><p class="game-instruction">Drag the missing sound into place. Touch a letter to hear its phoneme.</p><div class="phoneme-bank">${['A', 'E', 'I', 'O'].map(letter => `<button class="phoneme-tile" draggable="true" data-phoneme-letter="${letter}" type="button">${letter}<small>${letter === round.missing ? round.phoneme : 'letter'}</small></button>`).join('')}</div><p class="game-feedback" aria-live="polite">${playState.phoneme.solved ? `Complete: ${round.word}` : 'Choose the sound that completes the word.'}</p>${playState.phoneme.solved ? '<button class="game-next" data-next-phoneme type="button">Next word</button>' : ''}`;
  const zone = panel.querySelector('[data-phoneme-zone]');
  panel.querySelectorAll('[data-phoneme-letter]').forEach(tile => {
    tile.addEventListener('dragstart', event => {
      playState.phoneme.draggedLetter = tile.dataset.phonemeLetter;
      event.dataTransfer?.setData('text/plain', playState.phoneme.draggedLetter);
      speakPhoneme(coreGameData.phoneme[playState.phoneme.roundIndex % coreGameData.phoneme.length], playState.phoneme.draggedLetter);
    });
    tile.addEventListener('pointerdown', () => {
      playState.phoneme.draggedLetter = tile.dataset.phonemeLetter;
      speakPhoneme(coreGameData.phoneme[playState.phoneme.roundIndex % coreGameData.phoneme.length], playState.phoneme.draggedLetter);
    });
  });
  if (zone) {
    zone.addEventListener('dragover', event => event.preventDefault());
    zone.addEventListener('drop', event => {
      event.preventDefault();
      if (isPointInside(zone, event.clientX, event.clientY)) completePhoneme(playState.phoneme.draggedLetter || event.dataTransfer?.getData('text/plain'));
    });
    zone.addEventListener('pointerup', event => {
      if (isPointInside(zone, event.clientX, event.clientY)) completePhoneme(playState.phoneme.draggedLetter);
    });
  }
  panel.querySelector('[data-next-phoneme]')?.addEventListener('click', () => {
    if (!gameMachines.phoneme.canAdvance()) return;
    gameMachines.phoneme.transition('RESET');
    playState.phoneme.roundIndex += 1;
    playState.phoneme.solved = false;
    playState.phoneme.draggedLetter = '';
    renderPhonemeGame();
  });
}

function completePhoneme(letter) {
  const round = coreGameData.phoneme[playState.phoneme.roundIndex % coreGameData.phoneme.length];
  if (!letter || playState.phoneme.solved || !gameMachines.phoneme.canInteract()) return;
  const feedback = document.querySelector('#phoneme-panel .game-feedback');
  if (letter.toUpperCase() !== round.missing) {
    if (feedback) feedback.textContent = `That sound does not complete ${round.word}. Try another letter.`;
    speakPhoneme(round, letter);
    return;
  }
  playState.phoneme.solved = true;
  speakText(round.word);
  evaluateGameAction('phoneme', renderPhonemeGame, true);
}

function renderContextGame() {
  const panel = document.querySelector('#context-panel');
  if (!panel) return;
  if (!renderGameGate('context', panel, renderContextGame)) return;
  const round = coreGameData.context[playState.context.roundIndex % coreGameData.context.length];
  panel.innerHTML = `<div class="scene-card"><span class="scene-emoji" aria-hidden="true">${round.scene}</span><p>${round.sceneLabel}</p></div><div class="context-options">${round.options.map(option => `<button type="button" data-context-option="${option}">${option}</button>`).join('')}</div><p class="game-feedback" aria-live="polite">${playState.context.solved ? `Matched: ${round.word}` : 'Choose the word that fits the scene.'}</p>${playState.context.solved ? '<button class="game-next" data-next-context type="button">Next scene</button>' : ''}`;
  panel.querySelectorAll('[data-context-option]').forEach(button => button.addEventListener('click', () => {
    if (playState.context.solved || !gameMachines.context.canInteract()) return;
    const feedback = panel.querySelector('.game-feedback');
    if (button.dataset.contextOption === round.word) {
      playState.context.solved = true;
      speakText(round.word);
      evaluateGameAction('context', renderContextGame, true);
      return;
    }
    playState.context.attempts += 1;
    button.classList.add('wrong');
    if (playState.context.attempts >= 2 && feedback) feedback.textContent = `Hint: ${round.hint}`;
    else if (feedback) feedback.textContent = 'Look closely at what is happening in the scene.';
    evaluateGameAction('context', renderContextGame, false);
  }));
  panel.querySelector('[data-next-context]')?.addEventListener('click', () => {
    if (!gameMachines.context.canAdvance()) return;
    gameMachines.context.transition('RESET');
    playState.context.roundIndex += 1;
    playState.context.attempts = 0;
    playState.context.solved = false;
    renderContextGame();
  });
}

function renderScrambleGame() {
  const panel = document.querySelector('#scramble-panel');
  if (!panel) return;
  if (!renderGameGate('scramble', panel, renderScrambleGame)) return;
  const round = coreGameData.scramble[playState.scramble.roundIndex % coreGameData.scramble.length];
  const selectedWords = playState.scramble.selection.map(index => round.tiles[index]);
  panel.innerHTML = `<div class="scramble-answer" aria-live="polite">${selectedWords.length ? selectedWords.join(' ') : 'Tap tiles to build the sentence'}</div><div class="scramble-tiles">${round.tiles.map((word, index) => `<button type="button" class="scramble-tile ${playState.scramble.selection.includes(index) ? 'selected' : ''}" data-scramble-index="${index}" ${playState.scramble.selection.includes(index) ? 'aria-pressed="true"' : ''}>${word}</button>`).join('')}</div><p class="game-feedback" aria-live="polite">${playState.scramble.solved ? 'Valid sentence.' : 'The order must match an accepted sentence pattern.'}</p>${playState.scramble.solved ? '<button class="game-next" data-next-scramble type="button">Next sentence</button>' : ''}`;
  panel.querySelectorAll('[data-scramble-index]').forEach(tile => tile.addEventListener('click', () => {
    if (playState.scramble.solved || !gameMachines.scramble.canInteract()) return;
    const index = Number(tile.dataset.scrambleIndex);
    if (playState.scramble.selection.includes(index)) return;
    playState.scramble.selection.push(index);
    speakText(round.tiles[index]);
    const current = playState.scramble.selection.map(item => round.tiles[item]);
    const isPrefix = round.accepted.some(pattern => current.every((word, position) => pattern[position] === word));
    if (!isPrefix) {
      playState.scramble.selection = [];
      evaluateGameAction('scramble', renderScrambleGame, false);
      return;
    }
    if (round.accepted.some(pattern => pattern.length === current.length && pattern.every((word, position) => word === current[position]))) {
      playState.scramble.solved = true;
      speakText(current.join(' '));
    }
    evaluateGameAction('scramble', renderScrambleGame, playState.scramble.solved);
  }));
  panel.querySelector('[data-next-scramble]')?.addEventListener('click', () => {
    if (!gameMachines.scramble.canAdvance()) return;
    gameMachines.scramble.transition('RESET');
    playState.scramble.roundIndex += 1;
    playState.scramble.selection = [];
    playState.scramble.solved = false;
    renderScrambleGame();
  });
}

function renderRecallGame() {
  const panel = document.querySelector('#recall-panel');
  if (!panel) return;
  if (!renderGameGate('recall', panel, renderRecallGame)) return;
  clearTimeout(playState.recall.timer);
  clearInterval(playState.recall.progressTimer);
  const round = coreGameData.recall[playState.recall.roundIndex % coreGameData.recall.length];
  const optionCount = playState.recall.streak >= 2 ? 4 : 3;
  const options = round.options.slice(0, optionCount);
  playState.recall.locked = false;
  playState.recall.startedAt = Date.now();
  panel.innerHTML = `<div class="recall-clock"><span>Listen and choose</span><strong>${(playState.recall.timeLimit / 1000).toFixed(1)}s</strong></div><div class="recall-progress"><span></span></div><button class="sound-button" data-recall-speak type="button">🔊 Hear the word</button><div class="recall-options">${options.map(option => `<button type="button" data-recall-option="${option}">${option}</button>`).join('')}</div><p class="game-feedback" aria-live="polite">${optionCount} choices · faster rounds unlock as you build a streak.</p>`;
  speakText(round.word);
  const startedAt = playState.recall.startedAt;
  const progress = panel.querySelector('.recall-progress span');
  playState.recall.progressTimer = setInterval(() => {
    const elapsed = Date.now() - startedAt;
    if (progress) progress.style.width = `${Math.max(0, 100 - elapsed / playState.recall.timeLimit * 100)}%`;
  }, 80);
  playState.recall.timer = setTimeout(() => resolveRecall(false, round), playState.recall.timeLimit);
  panel.querySelector('[data-recall-speak]').addEventListener('click', () => speakText(round.word));
  panel.querySelectorAll('[data-recall-option]').forEach(button => button.addEventListener('click', () => resolveRecall(button.dataset.recallOption === round.word, round)));
}

function resolveRecall(correct, round) {
  if (playState.recall.locked || !gameMachines.recall.canInteract()) return;
  playState.recall.locked = true;
  clearTimeout(playState.recall.timer);
  clearInterval(playState.recall.progressTimer);
  const feedback = document.querySelector('#recall-panel .game-feedback');
  if (correct) {
    playState.recall.score += 1;
    playState.recall.streak += 1;
    playState.recall.timeLimit = Math.max(1800, playState.recall.timeLimit - 250);
    if (feedback) feedback.textContent = `Correct. ${round.word} heard clearly. Next round is ${playState.recall.timeLimit / 1000}s.`;
  } else {
    playState.recall.streak = 0;
    playState.recall.timeLimit = Math.min(5000, playState.recall.timeLimit + 450);
    if (feedback) feedback.textContent = `The word was ${round.word}. The next round will give you more time.`;
  }
  playState.recall.roundIndex += 1;
  evaluateGameAction('recall', renderRecallGame, false);
}

function attachTouchFeedback() {
  const targets = document.querySelectorAll('button, .memento-card, .wordcraft-cell, .nav-item, .source-card, .mini-book, .module-card, .game-card, .topic-button, .level-button');
  targets.forEach(element => {
    if (element.dataset.touchBound === 'true') return;
    element.dataset.touchBound = 'true';
    const applyPress = event => {
      element.classList.add('is-pressed');
      if (!(element instanceof HTMLElement)) return;
      element.style.position = element.style.position || 'relative';
      const ripple = document.createElement('span');
      const rect = element.getBoundingClientRect();
      ripple.className = 'ripple';
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      element.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    };
    const clearPress = () => element.classList.remove('is-pressed');
    element.addEventListener('pointerdown', applyPress, { passive: true });
    element.addEventListener('pointerup', clearPress, { passive: true });
    element.addEventListener('pointerleave', clearPress, { passive: true });
    element.addEventListener('pointercancel', clearPress, { passive: true });
  });
}

function shuffleList(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function persistFavoriteBooks() {
  localStorage.setItem('wordloom-favorite-books', JSON.stringify([...favoriteBooks]));
}

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
function lightHaptic() { if (navigator.vibrate) navigator.vibrate(8); }
function addCosmicInteractions() {
  document.addEventListener('pointerdown', event => {
    const target = event.target.closest('button, .cover-button, .source-card');
    if (!target) return;
    target.classList.add('pressing');
    lightHaptic();
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    target.style.position = target.style.position || 'relative';
    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(type => document.addEventListener(type, event => { const element = event.target instanceof Element ? event.target.closest('button, .cover-button, .source-card') : null; element?.classList.remove('pressing'); }));
  const reader = document.querySelector('#reading-view');
  if (reader && window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', event => {
      if (reader.classList.contains('hidden')) return;
      const page = reader.querySelector('.reader-page');
      if (page) page.style.setProperty('--reading-tilt', `${Math.max(-1.5, Math.min(1.5, (event.gamma || 0) / 18))}deg`);
    }, { passive: true });
  }
}
function updateFlowMetric() { document.querySelector('#streak-title').textContent = readingMetrics.minutes ? `${readingMetrics.minutes} min reading flow` : 'Reading flow'; document.querySelector('#streak-detail').textContent = `${readingMetrics.words} words · ${readingMetrics.pages} pages`; updateReadingStats(); }
function organizeLibraryShelves() { const cards = [...grid.querySelectorAll(':scope > .mini-book')]; if (!cards.length) return; const labels = { life: 'Everyday life', travel: 'Travel and place', science: 'Science and discovery', history: 'History and ideas', culture: 'Culture and stories', technology: 'Technology and tomorrow', business: 'Business and career' }; const shelves = new Map(); cards.forEach(card => { const topic = [...card.querySelector('.mini-cover')?.classList || []].find(name => Object.hasOwn(labels, name.replace('cover-', ''))); const key = topic ? topic.replace('cover-', '') : 'life'; if (!shelves.has(key)) shelves.set(key, []); shelves.get(key).push(card); }); grid.innerHTML = ''; shelves.forEach((cardsForTopic, topic) => { const shelf = document.createElement('section'); shelf.className = 'library-shelf'; shelf.dataset.topic = topic; shelf.innerHTML = `<div class="shelf-heading"><h2>${labels[topic] || 'More to explore'}</h2></div><div class="shelf-track"></div>`; shelf.querySelector('.shelf-track').append(...cardsForTopic); grid.appendChild(shelf); }); }
const shelfObserver = new MutationObserver(organizeLibraryShelves);
shelfObserver.observe(grid, { childList: true });
function recordReadingPage(page) { const key = `${activeBook.title}:${page.pageNumber}`; if (lastRecordedPage === key) return; lastRecordedPage = key; readingMetrics.words += page.paragraphs.join(' ').split(/\s+/).filter(Boolean).length; readingMetrics.pages += 1; readingMetrics.minutes = Math.max(readingMetrics.minutes, Math.round(readingMetrics.pages * 2)); updateDayStreak(); localStorage.setItem('wordloom-reading-metrics', JSON.stringify(readingMetrics)); updateFlowMetric(); }
function ensureSlaControls() { const levelBar = document.querySelector('.level-bar'); if (levelBar && !levelBar.querySelector('[data-level="C2"]')) levelBar.insertAdjacentHTML('beforeend', '<button class="level-button" data-level="C2" type="button">C2 Proficient</button>'); const sourceLine = document.querySelector('.source-line'); if (sourceLine && !sourceLine.querySelector('.density-signal')) sourceLine.insertAdjacentHTML('beforeend', '<span class="density-signal" id="density-signal">98% familiar words recommended</span>'); if (!document.querySelector('#quick-word-popover')) document.body.insertAdjacentHTML('beforeend', '<div class="quick-word-popover hidden" id="quick-word-popover" role="status"></div>'); }
function renderBooks() {
  const query = libraryQuery.trim().toLowerCase();
  let filtered = books.filter(book => (selectedTopic === 'all' || book.topic === selectedTopic) && (selectedLevel === 'all' || book.level === selectedLevel) && (selectedFilter === 'all' || (selectedFilter === 'progress' && book.progress > 0 && book.progress < 100) || (selectedFilter === 'finished' && book.progress === 100)) && (!query || `${book.title} ${book.topic} ${book.level} ${book.source}`.toLowerCase().includes(query)));
  if (activeLibraryTab === 'favorites') filtered = filtered.filter(book => favoriteBooks.has(book.title));
  if (activeLibraryTab === 'history') filtered = filtered.filter(book => book.progress > 0 || readingMetrics.pages > 0);
  grid.innerHTML = filtered.length ? filtered.map(book => {
    const photoSet = coverPhotos[book.topic] || coverPhotos.life;
    const photo = photoSet[coverPhotoIndex[book.title] % photoSet.length];
    const isFavorite = favoriteBooks.has(book.title);
    return `<article class="mini-book">
      <div class="cover-button" data-book="${book.title}" tabindex="0" role="button" aria-label="Open ${book.title}">
        <div class="mini-cover ${book.cover} cover-${book.topic}">
          <button class="cover-favorite-button ${isFavorite ? 'active' : ''}" type="button" data-favorite-book="${book.title}" aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}" title="${isFavorite ? 'Saved to favorites' : 'Save to favorites'}"><span aria-hidden="true">♥</span></button>
          <img class="cover-photo" src="${photo}" alt="" loading="lazy" onerror="this.hidden=true;this.parentElement.classList.add('cover-photo-fallback')" />
          <span class="cover-art"></span>
          <strong>${book.title}</strong>
        </div>
      </div>
      <div class="mini-info">
        <div class="book-card-heading"><h3>${book.title}</h3><span class="difficulty-badge level-${book.level.toLowerCase()}">${book.level}</span></div>
        <p class="book-author">${book.author}</p>
        <p class="book-facts"><span>${book.length || 'Short lesson'}</span><span>${book.kind === 'quoted' ? 'Quoted edition' : book.kind === 'novel' ? 'Novel' : book.source}</span></p>
        <div class="mini-book-actions">
          <button class="small-read-button" type="button" data-read-book="${book.title}">${book.progress ? 'Continue' : 'Read'}</button>
        </div>
      </div>
    </article>`;
  }).join('') : '<p class="empty-state">No books match your search and filters.</p>';
  organizeLibraryShelves();
}
function renderBookPreviewModal() {
  const modal = document.querySelector('#book-preview-modal');
  const preview = modal?.querySelector('.book-preview-modal');
  if (!modal || !preview || !activeBook) return;
  const photoSet = coverPhotos[activeBook.topic] || coverPhotos.life;
  const photo = photoSet[coverPhotoIndex[activeBook.title] % photoSet.length];
  const cover = coverDetails[activeBook.topic] || coverDetails.life;
  const isFavorite = favoriteBooks.has(activeBook.title);
  preview.innerHTML = `
    <button class="modal-close" data-book-preview-close type="button" aria-label="Close book preview">Close</button>
    <div class="book-preview-cover ${activeBook.cover} cover-${activeBook.topic}" aria-hidden="true">
      <img class="cover-photo" src="${photo}" alt="" onerror="this.hidden=true;this.parentElement.classList.add('cover-photo-fallback')">
      <span class="cover-art"></span>
      <span class="book-preview-mark">${cover[2]}</span>
      <span class="book-preview-kicker">${cover[0]}</span>
    </div>
    <div class="book-preview-copy">
      <div class="book-preview-heading"><div><p class="eyebrow">Ready to read</p><h2 id="book-preview-title">${activeBook.title}</h2></div><button class="book-preview-favorite ${isFavorite ? 'active' : ''}" type="button" data-favorite-book="${activeBook.title}" aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">♥</button></div>
      <p>${cover[1]}</p>
      <dl class="book-preview-facts"><div><dt>Level</dt><dd>${activeBook.level}</dd></div><div><dt>Length</dt><dd>${activeBook.length || 'Short lesson'}</dd></div><div><dt>Source</dt><dd>${activeBook.source}</dd></div></dl>
      <p class="book-preview-description">${topicDescriptions[activeBook.topic] || 'A focused reading experience built for steady, confident learning.'}</p>
      <div class="book-preview-actions"><button class="mini-secondary" data-book-preview-close type="button">Not now</button><button class="mini-primary" data-book-preview-start="${activeBook.title}" type="button">Start reading <span>→</span></button></div>
    </div>
  `;
  preview.querySelectorAll('[data-book-preview-close]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    closeBookPreview(true);
  }, { once: true }));
  preview.querySelectorAll('[data-book-preview-close]').forEach(button => button.addEventListener('pointerdown', event => {
    event.preventDefault();
    event.stopPropagation();
    closeBookPreview(true);
  }, { once: true }));
}
function openBookPreview(bookTitle) {
  activeBook = books.find(book => book.title === bookTitle) || activeBook;
  if (!activeBook) return;
  const modal = document.querySelector('#book-preview-modal');
  renderBookPreviewModal();
  modal.removeAttribute('hidden');
  modal.classList.remove('hidden');
  modal.style.removeProperty('display');
  modal.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => modal.querySelector('[data-book-preview-start]')?.focus());
}
function closeBookPreview(returnToLibrary = false) {
  const modal = document.querySelector('#book-preview-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('hidden', '');
  modal.setAttribute('aria-hidden', 'true');
  modal.style.setProperty('display', 'none', 'important');
  modal.querySelector('.book-preview-modal')?.replaceChildren();
  if (returnToLibrary) showView('library');
}
async function downloadLibrary() {
  const button = document.querySelector('#download-library');
  const status = document.querySelector('#library-download-status');
  button.disabled = true;
  status.textContent = `Preparing ${books.length} books...`;
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

function wordKey(text) { return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, ''); }
function isKnownWord(key) { return (vocabularyRecords[key]?.repetitions || 0) >= 4; }
function buildWordMarkup(text) {
  return text.split(/(\s+)/).map(part => /^\s+$/.test(part) ? part : `<button class="word${isKnownWord(wordKey(part)) ? ' known-word' : ''}" data-word="${wordKey(part)}" data-context="${encodeURIComponent(text)}">${part}</button>`).join('');
}
function renderStory() { document.querySelector('#story-copy').innerHTML = buildWordMarkup(story); }
function renderComprehension() {
  const panel = document.querySelector('#comprehension-panel');
  panel.innerHTML = `<div class="comprehension-heading"><div><span class="eyebrow">Optional reflection</span><h2>Check your understanding</h2></div><button class="text-button" data-skip-comprehension type="button">Skip</button></div><p>What is the main idea of <strong>${activeBook.title}</strong>?</p><div class="comprehension-options"><button data-answer="main" type="button">It explains the topic through connected facts and examples.</button><button data-answer="other" type="button">It is only a list of unrelated words.</button></div><p class="comprehension-feedback" aria-live="polite"></p>`;
}
function updateReadingStats() {
  const streak = Number(readingMetrics.streak || 0);
  const count = document.querySelector('#streak-count');
  const message = document.querySelector('#streak-message');
  if (!count || !message) return;
  if (!streak) {
    count.textContent = 'Start your streak';
    message.textContent = 'Read today, then return tomorrow to keep the flame going.';
  } else if (streak === 1) {
    count.textContent = '1 day in a row';
    message.textContent = 'A strong start. Read tomorrow to grow your streak.';
  } else {
    count.textContent = `${streak} days in a row`;
    message.textContent = streak >= 7 ? 'You’re on fire. Keep your reading rhythm alive.' : 'Keep the flame going with one more reading session tomorrow.';
  }
}
function updateDayStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const previous = readingMetrics.lastDay;
  if (previous !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    readingMetrics.streak = previous === yesterday ? (readingMetrics.streak || 0) + 1 : 1;
    readingMetrics.lastDay = today;
  }
}
function renderReaderPreview() {
  const preview = document.querySelector('#reader-preview');
  if (!preview || !activeBook) return;
  const isFavorite = favoriteBooks.has(activeBook.title);
  const cover = coverDetails[activeBook.topic] || coverDetails.life;
  preview.innerHTML = `
    <div class="reader-preview-card ${activeBook.cover}">
      <div class="reader-preview-header">
        <span class="reader-preview-level">${activeBook.level}</span>
        <button class="reader-preview-favorite ${isFavorite ? 'active' : ''}" type="button" data-favorite-book="${activeBook.title}" aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}"><span aria-hidden="true">♥</span></button>
      </div>
      <div class="reader-preview-body">
        <p class="eyebrow">Book preview</p>
        <h2>${activeBook.title}</h2>
        <p>${cover[1]} · ${activeBook.author}</p>
        <p class="reader-source-note">${activeBook.length || 'Short learning text'} · ${activeBook.kind === 'quoted' ? 'Public-domain quotation' : activeBook.kind === 'novel' ? 'Novel reading edition' : activeBook.source}</p>
        <p class="reader-preview-description">${topicDescriptions[activeBook.topic] || 'A focused reading experience built for steady, confident learning.'}</p>
      </div>
      <div class="reader-preview-actions">
        <button type="button" class="mini-secondary" data-reader-share="${activeBook.title}">Share</button>
        <button type="button" class="mini-primary" data-reader-start="${activeBook.title}">Start reading</button>
      </div>
    </div>
  `;
}

function renderReaderState() {
  if (!document.querySelector('#reading-view') || document.querySelector('#reading-view').classList.contains('hidden')) return;
  const pages = getActivePages();
  const page = pages[readerState.page || 0];
  const storyCopy = document.querySelector('#story-copy');
  const progressValue = ((page.pageNumber) / pages.length) * 100;
  recordReadingPage(page);
  renderReaderPreview();
  storyCopy.innerHTML = `<div class="reader-page" data-page="${page.pageNumber}"><h3>${page.subtitle}</h3>${page.paragraphs.map(paragraph => `<p>${buildWordMarkup(paragraph)}</p>`).join('')}<span class="page-number">Page ${page.pageNumber} of ${pages.length}</span></div>`;
  storyCopy.scrollTop = 0;
  document.querySelector('#reading-view').scrollTop = 0;
  document.querySelector('.reading-meta').innerHTML = `<span class="tag amber">${activeBook.level} · Reading practice</span><span>Page ${page.pageNumber} · Chapter ${page.chapterIndex + 1}</span><span class="reading-time">${pages.length} pages · ${getActiveChapters().length} chapters</span>`;
  document.querySelector('#reading-view h1').textContent = activeBook.title;
  const author = document.querySelector('.reading-author');
  if (author) author.textContent = `${activeBook.author} · adapted learning text`;
  const progressBar = document.querySelector('.reading-progress span');
  if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(8, progressValue))}%`;
  const prevButton = document.querySelectorAll('.reader-control')[0];
  const nextButton = document.querySelectorAll('.reader-control')[1];
  const isFirstPage = (readerState.page || 0) === 0;
  const isLastPage = (readerState.page || 0) === pages.length - 1;
  if (prevButton) prevButton.disabled = isFirstPage;
  if (nextButton) {
    nextButton.textContent = isLastPage ? 'Finished ✓' : 'Next page →';
    nextButton.disabled = false;
  }
  const readerStatus = document.querySelector('.reader-status');
  if (readerStatus) {
    readerStatus.textContent = `Page ${page.pageNumber} / ${pages.length}`;
  }
  const comprehension = document.querySelector('#comprehension-panel');
  if (comprehension) {
    comprehension.classList.toggle('hidden', !isLastPage);
    if (isLastPage) renderComprehension();
  }
}
function moveReader(step) {
  const pages = getActivePages();
  const nextPage = Math.min(pages.length - 1, Math.max(0, (readerState.page || 0) + step));
  if (nextPage === readerState.page) { showToast(step > 0 ? 'You have reached the end of this book.' : 'You are at the first page of this book.'); return; }
  readerState.page = nextPage;
  renderReaderState();
}
function showView(viewName) { Object.values(views).forEach(view => view.classList.add('hidden')); views[viewName].classList.remove('hidden'); document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === viewName)); const labelMap = { library: 'Library', vocabulary: 'Review', play: 'Play', reading: 'Reading room' }; document.querySelector('.breadcrumb strong').textContent = labelMap[viewName] || 'Library'; document.querySelector('.sidebar').classList.remove('mobile-open'); }
function openReader(bookTitle = activeBook.title) { activeBook = books.find(book => book.title === bookTitle) || activeBook; readerState = { page: 0 }; closeBookPreview(); showView('reading'); renderReaderState(); }
function closeModals() { document.querySelectorAll('.modal-backdrop').forEach(modal => { modal.classList.add('hidden'); modal.setAttribute('hidden', ''); modal.setAttribute('aria-hidden', 'true'); }); }
function saveWordToVocabulary(key, sentence) {
  const data = dictionary[key] || [key, 'A useful word from this story.', 'word', ''];
  vocabularyRecords[key] = vocabularyRecords[key] || { word: key, meaning: data[1], level: 'B1', sentence, repetitions: 0, interval: 0, nextReview: Date.now() };
  vocabularyRecords[key].sentence = sentence;
  vocabularyRecords[key].meaning = data[1];
  localStorage.setItem('wordloom-vocabulary-records', JSON.stringify(vocabularyRecords));
  savedWords.add(key);
  localStorage.setItem('wordloom-saved-words', JSON.stringify([...savedWords]));
}
function showDictionary(word) {
  const content = document.querySelector('#dictionary-content');
  const modal = document.querySelector('#dictionary-modal');
  const key = word?.dataset?.word ? wordKey(word.dataset.word) : wordKey(word?.textContent || '');
  if (!content || !modal || !key) return;
  const data = dictionary[key] || [key, 'A useful word from this story.', 'word', `The word “${key}” appears in this story.`];
  const translation = getWordTranslation(key, data);
  try { activeWordContext = decodeURIComponent(word.dataset.context || data[3]); } catch { activeWordContext = data[3]; }
  readingMetrics.lookups = (readingMetrics.lookups || 0) + 1;
  localStorage.setItem('wordloom-reading-metrics', JSON.stringify(readingMetrics));
  updateReadingStats();
  const languageLabel = translations[motherLanguage] || translations.en;
  content.innerHTML = `<span class="detail-label">WORD</span><h3 id="dictionary-title">${key}</h3><div class="translation-line"><span>Translation · ${languageLabel}</span><strong>${translation || 'Translation unavailable'}</strong></div><div class="context-box"><span class="phrase-label">IN THIS PHRASE</span><p>“${activeWordContext}”</p></div><div class="modal-actions"><button class="speak-word" data-speak="${key}" type="button">Hear word</button><button class="modal-save" data-learn-word="${key}" type="button"${savedWords.has(key) ? ' disabled' : ''}>${savedWords.has(key) ? 'Added to review' : 'Add to review'}</button></div>`;
  modal.removeAttribute('hidden');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  modal.querySelector('[data-close-modal]')?.focus();
  document.querySelector('#quick-word-popover')?.classList.add('hidden');
}
function getWordTranslation(key, data) {
  if (motherLanguage !== 'en' && customTranslations[key]?.[motherLanguage]) return customTranslations[key][motherLanguage];
  if (motherLanguage === 'ar') return data[0] && data[0] !== key ? data[0] : data[1] || 'ترجمة غير متاحة';
  if (motherLanguage === 'en') return data[1] || key;
  return 'Translation unavailable';
}
function showFullDictionary(key) { const modal = document.querySelector('#dictionary-modal'); const content = document.querySelector('#dictionary-content'); const data = dictionary[key] || [key, 'A useful word from this story.', 'word', `The word “${key}” appears in this story.`]; const translation = getWordTranslation(key, data); const languageLabel = translations[motherLanguage] || translations.en; content.innerHTML = `<span class="detail-label">WORD IN CONTEXT</span><h3 id="dictionary-title">${key}</h3><span class="word-pronounce">/${key}/ · ${data[2]}</span><p class="word-definition">${data[1]}</p><div class="translation-line"><span>Translation · ${languageLabel}</span><strong>${translation || 'Translation unavailable'}</strong></div><div class="detail-label" style="display:block;margin-top:22px">ANOTHER EXAMPLE</div><div class="modal-example">${activeWordContext || data[3]}</div><div class="modal-actions"><button class="speak-word" data-speak="${key}" type="button">Hear word</button><button class="modal-save" data-learn-word="${key}" type="button"${savedWords.has(key) ? ' disabled' : ''}>${savedWords.has(key) ? 'Added to review' : 'Add to review'}</button></div>`; modal.removeAttribute('hidden'); modal.classList.remove('hidden'); document.querySelector('#quick-word-popover')?.classList.add('hidden'); }
function applyColorMood(mood) { const moods = ['mood-fern', 'mood-coral', 'mood-sky', 'mood-amber']; const selectedMood = moods.includes(`mood-${mood}`) ? mood : 'fern'; document.body.classList.remove('theme-dark', ...moods); document.body.classList.add(`mood-${selectedMood}`); if (window.setMood) window.setMood(selectedMood); }
function savePreferences() { motherLanguage = document.querySelector('#mother-language').value; const mood = document.querySelector('#color-mode-setting').value; localStorage.setItem('wordloom-language', motherLanguage); localStorage.setItem('wordloom-mood', mood); applyColorMood(mood); renderVocabulary(); closeModals(); showToast('Settings saved'); }
function buildReviewPlan(record = {}) {
  const repetition = Number(record.repetitions || 0);
  const steps = [
    { label: '1. Learn', note: 'Meaning + example', state: repetition < 1 ? 'active' : '' },
    { label: '2. Recall', note: 'Review tomorrow', state: repetition >= 1 && repetition < 3 ? 'active' : '' },
    { label: '3. Use', note: 'Use it in a sentence', state: repetition >= 3 && repetition < 5 ? 'active' : '' },
    { label: '4. Master', note: 'Check again in 7 days', state: repetition >= 5 ? 'active' : '' }
  ];
  return `
    <div class="review-plan" aria-label="Vocabulary review plan">
      <div class="review-plan-header"><span>Review plan</span><strong>${record.unknown ? 'Needs attention' : 'On track'}</strong></div>
      <ul>
        ${steps.map(step => `<li class="${step.state}"><span>${step.label}</span><small>${step.note}</small></li>`).join('')}
      </ul>
    </div>
  `;
}

function renderVocabulary() {
  const difficult = Object.values(vocabularyRecords)
    .filter(record => (record.unknown || (record.repetitions || 0) < 4) && (selectedVocabLevel === 'all' || record.level === selectedVocabLevel))
    .map(record => [record.word, record.meaning, record.level || 'B1', record.sentence || `You can use “${record.word}” in a simple sentence.`]);
  const fallback = vocabulary.filter(([, , level]) => selectedVocabLevel === 'all' || level === selectedVocabLevel);
  const matches = difficult.length ? difficult : fallback;
  const current = matches[flashcardIndex % Math.max(1, matches.length)] || vocabulary[0];
  const translateForReview = word => getWordTranslation(word, dictionary[word] || [word, vocabularyRecords[word]?.meaning || '']);
  const correctChoice = translateForReview(current[0]);
  const choices = [...new Set(vocabulary.map(item => translateForReview(item[0])).filter(choice => choice && choice !== 'Translation unavailable' && choice !== correctChoice && choice.trim().toLowerCase() !== current[0].trim().toLowerCase()))].slice(0, 3);
  const orderedChoices = [correctChoice, ...choices];
  const rotation = flashcardIndex % orderedChoices.length;
  reviewState = { answered: false, choices: orderedChoices.slice(rotation).concat(orderedChoices.slice(0, rotation)), correctChoice };
  document.querySelector('#flashcard-stage').innerHTML = `
    <article class="review-card">
      <div class="review-card-top"><span class="flashcard-level">${current[2]} · ${translations[motherLanguage] || 'Your language'}</span><span class="flashcard-count">${matches.length ? (flashcardIndex % matches.length) + 1 : 0} of ${matches.length}</span></div>
      <div class="review-prompt"><strong class="review-word">${current[0]}</strong><p>Choose its translation in ${translations[motherLanguage] || 'your mother language'}.</p><button class="review-listen" data-review-speak="${current[0]}" type="button" aria-label="Hear ${current[0]}">🔊 <span>Hear word</span></button></div>
      <div class="review-choices" role="group" aria-label="Choose the translation">${reviewState.choices.map((choice, index) => `<button type="button" dir="auto" data-review-choice="${index}">${choice}</button>`).join('')}</div>
      <div class="review-result" aria-live="polite">Choose one translation to check your answer.</div>
    </article>
  `;
  document.querySelector('#saved-word-count').textContent = matches.length;
  document.querySelector('.nav-item[data-view="vocabulary"] .nav-count').textContent = document.querySelector('#saved-word-count').textContent;
}
function reviewWord(word, rating) { const record = vocabularyRecords[word] || { word, repetitions: 0, interval: 0, nextReview: Date.now() }; const factors = { Again: [0, 1], Hard: [Math.max(1, record.repetitions), Math.max(1, Math.round((record.interval || 1) * 1.5))], Good: [record.repetitions + 1, Math.max(1, Math.round((record.interval || 1) * 2.5))], Easy: [record.repetitions + 1, Math.max(2, Math.round((record.interval || 1) * 3.5))] }; const [repetitions, interval] = factors[rating]; record.repetitions = repetitions; record.interval = interval; record.nextReview = Date.now() + interval * 86400000; vocabularyRecords[word] = record; localStorage.setItem('wordloom-vocabulary-records', JSON.stringify(vocabularyRecords)); renderVocabulary(); showToast(`${word} reviewed · next review in ${interval} day${interval === 1 ? '' : 's'}`); }
function exportVocabulary() { const rows = [['Front', 'Back', 'Context', 'Tags']]; Object.values(vocabularyRecords).forEach(record => rows.push([record.word, record.meaning || '', record.sentence || '', 'wordloom'])); const csv = rows.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\n'); const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' })); link.download = 'wordloom-vocabulary.csv'; link.click(); URL.revokeObjectURL(link.href); }
function renderPlayTabs() {
  if (selectedPlayTab !== 'recall') {
    clearTimeout(playState.recall.timer);
    clearInterval(playState.recall.progressTimer);
    playState.recall.locked = true;
  }

  const cards = document.querySelectorAll('.game-card');
  cards.forEach(card => {
    const isActive = card.dataset.playCard === selectedPlayTab;
    card.classList.toggle('is-active', isActive);
    const launch = card.querySelector('[data-play-launch]');
    if (launch) {
      launch.textContent = isActive ? 'Quit' : 'Start';
      launch.setAttribute('aria-expanded', String(isActive));
    }
  });
}

function renderSelectedPlayGame() {
  const renderers = { phoneme: renderPhonemeGame, scramble: renderScrambleGame, recall: renderRecallGame };
  renderers[selectedPlayTab]?.();
  attachTouchFeedback();
}

function selectPlayGame(game) {
  if (!['phoneme', 'scramble', 'recall'].includes(game)) return;
  if (selectedPlayTab === game) {
    selectedPlayTab = '';
    renderPlayTabs();
    return;
  }
  selectedPlayTab = game;
  renderPlayTabs();
  renderSelectedPlayGame();
}
function renderMementoBoard() {
  const board = document.querySelector('#memento-board');
  if (!board) return;
  if (!playState.memento.deck.length) {
    playState.memento.deck = shuffleList([...playData.memento, ...playData.memento].map((entry, index) => ({ ...entry, id: `${entry.word}-${index}` })));
  }

  board.innerHTML = playState.memento.deck.map(card => {
    const isRevealed = playState.memento.revealed.includes(card.id) || playState.memento.matched.has(card.word);
    const isMatched = playState.memento.matched.has(card.word);
    return `
      <button type="button" class="memento-card ${isRevealed ? 'is-flipped' : ''} ${isMatched ? 'is-matched' : ''}" data-card-id="${card.id}" data-card-word="${card.word}" aria-label="${isRevealed ? card.word : 'Hidden card'}">
        <span>${isRevealed ? card.emoji : '?'}</span>
        <small>${isRevealed ? `${card.word} · ${card.visualLabel}` : 'Match'}</small>
      </button>
    `;
  }).join('');
  bindMementoBoard();
  attachTouchFeedback();
}

function resetMementoBoard() {
  playState.memento.deck = shuffleList([...playData.memento, ...playData.memento].map((entry, index) => ({ ...entry, id: `${entry.word}-${index}` })));
  playState.memento.revealed = [];
  playState.memento.matched = new Set();
  playState.memento.score = 0;
  playState.memento.locked = false;
  renderMementoBoard();
}

function renderWordcraftGrid() {
  const board = document.querySelector('#wordcraft-grid');
  if (!board) return;
  const letters = playData.wordcraft.slice();
  const selected = playState.wordcraft.selection;
  board.innerHTML = letters.map((letter, index) => `<button type="button" class="wordcraft-cell ${selected.includes(index) ? 'selected' : ''} ${playState.wordcraft.solved ? 'solved' : ''}" data-cell-index="${index}" data-letter="${letter}">${letter}</button>`).join('');
  const goalLabel = document.querySelector('#wordcraft-status');
  if (goalLabel) {
    goalLabel.textContent = playState.wordcraft.solved ? `Solved: ${playState.wordcraft.targetWord}` : `Build: ${playState.wordcraft.targetWord}`;
  }
  bindWordcraft();
  attachTouchFeedback();
}

function openModal(selector) { const modal = document.querySelector(selector); if (!modal) return; modal.removeAttribute('hidden'); modal.classList.remove('hidden'); }

injectReaderStyles();
ensureSlaControls();
const initialLevelButton = document.querySelector(`.level-button[data-level="${selectedLevel}"]`) || document.querySelector('.level-button[data-level="all"]');
if (initialLevelButton) { initialLevelButton.classList.add('active'); initialLevelButton.setAttribute('aria-pressed', 'true'); }
renderBooks();
renderStory();
renderVocabulary();
renderPlayTabs();
renderSelectedPlayGame();
attachTouchFeedback();
preloadGameAssets().then(() => {
  gameAssetsReady = true;
  Object.values(gameMachines).forEach(machine => machine.transition('ASSETS_READY'));
  renderSelectedPlayGame();
});
document.querySelector('#auth-form').addEventListener('submit', submitAuth);
document.querySelector('#download-library')?.addEventListener('click', downloadLibrary);
if (localStorage.getItem('wordloom-library-downloaded') === 'true' && document.querySelector('#library-download-status')) document.querySelector('#library-download-status').textContent = 'Ready offline';
  document.querySelector('#finish-welcome').addEventListener('click', () => { motherLanguage = document.querySelector('#welcome-language').value; localStorage.setItem('wordloom-language', motherLanguage); localStorage.setItem('wordloom-welcome-complete', 'true'); document.querySelector('#mother-language').value = motherLanguage; document.querySelector('#welcome-modal').classList.add('hidden'); showToast('Your reading room is ready'); });
document.querySelector('#add-book')?.addEventListener('click', () => openModal('#source-modal'));
document.querySelector('#import-local-book').addEventListener('click', () => { document.querySelector('#source-modal').classList.add('hidden'); document.querySelector('#pdf-input').click(); });
document.querySelectorAll('[data-source-url]').forEach(source => source.addEventListener('click', event => {
  event.preventDefault();
  const query = window.prompt(`Search ${source.dataset.sourceLabel}`, 'English reading');
  if (query?.trim()) window.open(`${source.dataset.sourceUrl}${encodeURIComponent(query.trim())}`, '_blank', 'noopener');
}));
document.querySelector('#auth-guest').addEventListener('click', () => unlockApp({ email: 'guest@wordloom.local', name: 'Guest reader' }));

const savedMood = localStorage.getItem('wordloom-mood') || 'fern';
document.querySelector('#mother-language').value = motherLanguage; document.querySelector('#color-mode-setting').value = savedMood; applyColorMood(savedMood);
updateFlowMetric();
document.querySelectorAll('.nav-item').forEach(button => button.addEventListener('click', () => button.dataset.view === 'reading' ? openReader() : showView(button.dataset.view))); document.querySelector('.library-tab[data-library-tab="all"]').addEventListener('click', () => { activeLibraryTab = 'all'; renderBooks(); updateLibraryTabs(); }); document.querySelector('.library-tab[data-library-tab="favorites"]').addEventListener('click', () => { activeLibraryTab = 'favorites'; renderBooks(); updateLibraryTabs(); }); document.querySelector('.library-tab[data-library-tab="history"]').addEventListener('click', () => { activeLibraryTab = 'history'; renderBooks(); updateLibraryTabs(); }); document.querySelector('#back-to-library').addEventListener('click', () => showView('library')); document.querySelector('#import-pdf').addEventListener('click', () => document.querySelector('#pdf-input').click()); document.querySelector('#pdf-input').addEventListener('change', event => { const file = event.target.files[0]; if (file) showToast(`${file.name} added. PDF reader setup is next.`); event.target.value = ''; });
document.querySelector('.settings-button').addEventListener('click', () => openModal('#preferences-modal')); document.querySelector('#save-preferences').addEventListener('click', savePreferences); document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', closeModals)); document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('click', event => { if (event.target !== backdrop || backdrop.id === 'book-preview-modal') return; closeModals(); })); document.querySelectorAll('.topic-button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.topic-button').forEach(item => item.classList.remove('active')); button.classList.add('active'); selectedTopic = button.dataset.topic; renderBooks(); }));
document.querySelector('#book-preview-modal').addEventListener('click', event => {
  if (!event.target.closest('[data-book-preview-close]') && event.target !== event.currentTarget) return;
  event.preventDefault();
  event.stopPropagation();
  closeBookPreview(true);
});
document.querySelectorAll('.accent-choice').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.accent-choice').forEach(item => item.classList.remove('active')); button.classList.add('active'); document.body.classList.remove('accent-coral', 'accent-blue', 'accent-violet'); if (button.dataset.accent !== 'green') document.body.classList.add(`accent-${button.dataset.accent}`); })); document.querySelectorAll('.reader-control').forEach(button => button.addEventListener('click', () => { const step = button.textContent.includes('Previous') ? -1 : 1; moveReader(step); })); document.querySelectorAll('.top-actions .icon-button')[0].addEventListener('click', () => showToast('Search will cover your books and vocabulary.')); document.querySelectorAll('.top-actions .icon-button')[1].addEventListener('click', () => showToast('You are all caught up.')); document.querySelector('.mobile-menu').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('mobile-open'));
document.querySelector('.top-actions [aria-label="Open search"]').addEventListener('click', () => { showView('library'); document.querySelector('#library-search').focus(); }); document.querySelector('.mobile-menu').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('mobile-open'));
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

document.addEventListener('click', event => {
  const playLaunch = event.target.closest('[data-play-launch]');
  if (playLaunch) {
    selectPlayGame(playLaunch.dataset.playLaunch);
    return;
  }

  const favorite = event.target.closest('[data-favorite-book]');
  if (favorite) {
    const title = favorite.dataset.favoriteBook;
    if (favoriteBooks.has(title)) {
      favoriteBooks.delete(title);
      showToast('Removed from favorites');
    } else {
      favoriteBooks.add(title);
      showToast('Saved to favorites');
    }
    persistFavoriteBooks();
    renderBooks();
    if (activeBook && activeBook.title === title) renderReaderPreview();
    if (!document.querySelector('#book-preview-modal')?.hasAttribute('hidden')) renderBookPreviewModal();
    return;
  }

  const readButton = event.target.closest('[data-read-book]');
  if (readButton) {
    openBookPreview(readButton.dataset.readBook);
    return;
  }

  const bookPreviewStart = event.target.closest('[data-book-preview-start]');
  if (bookPreviewStart) {
    openReader(bookPreviewStart.dataset.bookPreviewStart);
    return;
  }

  const share = event.target.closest('[data-reader-share]');
  if (share) {
    const title = share.dataset.readerShare;
    const url = `${window.location.origin}${window.location.pathname}?book=${encodeURIComponent(title)}`;
    navigator.clipboard?.writeText(url).catch(() => {});
    showToast(`Share link copied for ${title}`);
    return;
  }

  const startReading = event.target.closest('[data-reader-start]');
  if (startReading) {
    renderReaderState();
    return;
  }

  const word = event.target.closest('.word'); if (word) { showDictionary(word); return; }
  const more = event.target.closest('[data-more-word]'); if (more) { showFullDictionary(more.dataset.moreWord); return; }
  const learn = event.target.closest('[data-learn-word]'); if (learn) { saveWordToVocabulary(learn.dataset.learnWord, activeWordContext); learn.textContent = 'Added to review'; learn.disabled = true; renderVocabulary(); showToast(`${learn.dataset.learnWord} added to your review cards`); return; }
  const unknown = event.target.closest('[data-unknown-word]'); if (unknown) { saveWordToVocabulary(unknown.dataset.unknownWord, activeWordContext); vocabularyRecords[unknown.dataset.unknownWord].unknown = true; vocabularyRecords[unknown.dataset.unknownWord].repetitions = 0; localStorage.setItem('wordloom-vocabulary-records', JSON.stringify(vocabularyRecords)); unknown.textContent = 'Added to review'; showToast(`${unknown.dataset.unknownWord} added to your review game`); return; }
  const know = event.target.closest('[data-know-word]'); if (know) { saveWordToVocabulary(know.dataset.knowWord, activeWordContext); vocabularyRecords[know.dataset.knowWord].unknown = false; vocabularyRecords[know.dataset.knowWord].repetitions = 4; localStorage.setItem('wordloom-vocabulary-records', JSON.stringify(vocabularyRecords)); know.textContent = 'Known'; showToast(`${know.dataset.knowWord} marked as known`); return; }
  const reviewListen = event.target.closest('[data-review-speak]'); if (reviewListen) { speakText(reviewListen.dataset.reviewSpeak); return; }
  const reviewChoice = event.target.closest('[data-review-choice]'); if (reviewChoice) {
    if (reviewState.answered) return;
    reviewState.answered = true;
    const currentWord = document.querySelector('[data-review-speak]')?.dataset.reviewSpeak;
    const selected = reviewState.choices[Number(reviewChoice.dataset.reviewChoice)];
    const correct = selected === reviewState.correctChoice;
    document.querySelectorAll('[data-review-choice]').forEach(button => {
      button.disabled = true;
      if (button.textContent === reviewState.correctChoice) button.classList.add('correct');
    });
    reviewChoice.classList.add(correct ? 'correct' : 'wrong');
    const result = document.querySelector('.review-result');
    if (result) result.innerHTML = correct ? `<strong>Correct.</strong> ${reviewState.correctChoice}<small>${dictionary[currentWord]?.[1] || 'This word is useful in everyday reading.'}</small><button class="review-next" data-review-next type="button">Next word</button>` : `<strong>Not yet.</strong> The answer is ${reviewState.correctChoice}.<small>${dictionary[currentWord]?.[1] || 'Read this meaning once, then try the next card.'}</small><button class="review-next" data-review-next type="button">Next word</button>`;
    if (currentWord) {
      const record = vocabularyRecords[currentWord] || { word: currentWord, meaning: dictionary[currentWord]?.[1] || '', repetitions: 0, interval: 0, nextReview: Date.now() };
      record.unknown = !correct;
      record.repetitions = correct ? (record.repetitions || 0) + 1 : 0;
      record.interval = correct ? Math.max(1, Math.round((record.interval || 1) * 2.5)) : 1;
      record.nextReview = Date.now() + record.interval * 86400000;
      vocabularyRecords[currentWord] = record;
      localStorage.setItem('wordloom-vocabulary-records', JSON.stringify(vocabularyRecords));
    }
    speakText(currentWord || '');
    return;
  }
  const reviewNext = event.target.closest('[data-review-next]'); if (reviewNext) { flashcardIndex += 1; renderVocabulary(); return; }
  const speak = event.target.closest('[data-speak]'); if (speak && 'speechSynthesis' in window) { speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(speak.dataset.speak); utterance.lang = 'en-US'; utterance.rate = .78; utterance.pitch = 1; speechSynthesis.speak(utterance); }
  const review = event.target.closest('[data-review-word]'); if (review) { const wordRecord = vocabularyRecords[review.dataset.reviewWord] || {}; const rating = window.prompt(`Recall “${review.dataset.reviewWord}”\n\n${wordRecord.sentence || 'No saved sentence yet.'}\n\nType: Again, Hard, Good, or Easy`, 'Good'); if (rating && ['Again', 'Hard', 'Good', 'Easy'].includes(rating)) reviewWord(review.dataset.reviewWord, rating); }
  const answer = event.target.closest('[data-answer]'); if (answer) { const feedback = document.querySelector('.comprehension-feedback'); feedback.textContent = answer.dataset.answer === 'main' ? 'Correct. You identified the central idea.' : 'Keep reading for the connected explanation.'; }
  if (event.target.closest('[data-skip-comprehension]')) document.querySelector('#comprehension-panel').classList.add('hidden');
});
document.addEventListener('click', event => { if (!event.target.closest('.word') && !event.target.closest('#quick-word-popover')) document.querySelector('#quick-word-popover')?.classList.add('hidden'); });

document.addEventListener('click', event => { const speaker = event.target.closest('[data-spell-speak]'); if (speaker && 'speechSynthesis' in window) { speechSynthesis.cancel(); const voice = new SpeechSynthesisUtterance(speaker.dataset.spellSpeak); voice.lang = 'en-US'; voice.rate = .72; speechSynthesis.speak(voice); } const checker = event.target.closest('[data-spell-check]'); if (checker) { const input = document.querySelector('#spelling-answer'); const answer = input?.value.trim().toLowerCase(); const expected = checker.dataset.spellCheck.toLowerCase(); const feedback = document.querySelector('.spelling-feedback'); if (!feedback) return; if (answer === expected) { feedback.textContent = 'Correct. You spelled it clearly.'; feedback.className = 'spelling-feedback correct'; } else { feedback.textContent = 'Not quite. Listen again and try once more.'; feedback.className = 'spelling-feedback try-again'; } } });

document.querySelector('#story-copy').dataset.trackScroll = 'true';
document.querySelector('#library-search').addEventListener('input', event => { libraryQuery = event.target.value; renderBooks(); });
document.querySelector('#library-filter-toggle').addEventListener('click', () => {
  const panel = document.querySelector('#library-level-filter');
  const isHidden = panel.classList.toggle('hidden');
  const toggle = document.querySelector('#library-filter-toggle');
  toggle.setAttribute('aria-expanded', String(!isHidden));
});
document.querySelectorAll('.level-button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.level-button').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-pressed', 'false'); });
  button.classList.add('active');
  button.setAttribute('aria-pressed', 'true');
  selectedLevel = button.dataset.level;
  document.querySelector('#library-level-filter').classList.add('hidden');
  document.querySelector('#library-filter-toggle').setAttribute('aria-expanded', 'false');
  renderBooks();
}));
document.querySelectorAll('.vocab-filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.vocab-filter').forEach(item => item.classList.remove('active')); button.classList.add('active'); selectedVocabLevel = button.dataset.level; flashcardIndex = 0; renderVocabulary(); }));
document.addEventListener('click', event => {
  const book = event.target.closest('[data-book]');
  if (book && !event.target.closest('[data-favorite-book]') && !event.target.closest('[data-read-book]')) {
    openBookPreview(book.dataset.book);
  }

  const shelf = event.target.closest('[data-shelf-topic]');
  if (shelf) {
    const topic = shelf.dataset.shelfTopic;
    const topicButton = document.querySelector(`.topic-button[data-topic="${topic}"]`);
    if (topicButton) { topicButton.click(); } else { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  }
});
document.addEventListener('keydown', event => {
  const book = event.target.closest('[data-book]');
  if (book && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    openBookPreview(book.dataset.book);
  }
  if (event.key === 'Escape' && !document.querySelector('#book-preview-modal')?.hasAttribute('hidden')) closeBookPreview(true);
});
function updateLibraryTabs() {
  document.querySelectorAll('.library-tab').forEach(button => {
    button.classList.toggle('active', button.dataset.libraryTab === activeLibraryTab);
  });
}
updateLibraryTabs();
updateReadingStats();
addCosmicInteractions();
