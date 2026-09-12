# Wordloom

Wordloom is a dependency-free English reading lab with illustrated books, CEFR level filters, swipe-based reading, vocabulary lookup, notes, and local preferences.

## Included

- Personal library with reading progress
- Continue-reading view
- Selectable vocabulary inside the story
- Translation-style definitions and context examples
- Vocabulary garden with collected words
- Responsive phone and desktop layout
- A1 beginner shelf through C1 advanced reading
- 100-page books with 10 chapters and horizontal page swiping
- Optional visual guides inside reading pages
- Topic-specific photographic book covers
- First-screen sign-in with guest mode for local demos

## Run locally

Open `index.html` in a browser. No build step or Node installation is required.

## Upload

Upload this folder to any static host. The entry point is `index.html`.

- **Netlify:** drag the folder into Netlify Drop, or connect the repository and leave the build command empty.
- **GitHub Pages:** publish the folder from the repository's Pages settings.
- **Cloudflare Pages:** use the folder as the project directory, with no build command and no output directory.

The app uses Google Fonts and Unsplash cover images, so the deployed site needs normal outbound HTTPS access. User preferences, notes, saved words, and the demo sign-in session are stored in the browser's local storage on each device. The current login is a front-end demo gate; connect it to a real authentication provider before using real user accounts.

## Game module and QA

The game domain is split into a dependency-free module and browser adapters:

- `game-module.js`: FSM, pure game engines, completion queue, and fixture validation.
- `game-schemas.json`: schemas for levels, words, phonemes, audio assets, and distractor pools.
- `game-fixtures.json`: sample A1 through C1 vocabulary and game data.
- `qa-self-audit.html` and `qa-self-audit.js`: executable three-loop QA harness.

The state machine is `INIT -> READY -> PLAYING -> EVALUATING -> FEEDBACK -> COMPLETED`. Game controls are unavailable during evaluation and feedback. To run the complete audit, serve the folder with a static server and open `/qa-self-audit.html`; opening it directly as a `file:` URL blocks JSON fixture fetches in some browsers.

## Future product layers

1. Persist books, notes, and vocabulary with a local database.
2. Add user-imported EPUB/PDF/text books and sentence-level parsing.
3. Connect a dictionary and text-to-speech service.
4. Add spaced repetition reviews and accounts/sync across devices.
