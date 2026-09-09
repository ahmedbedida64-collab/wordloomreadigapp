# Wordloom Agent Guide

Wordloom is a dependency-free static app. Read [README.md](README.md) for the user-facing feature list and hosting instructions.

## Project Shape

- [index.html](index.html) defines the app shell, views, modals, and service-worker registration.
- [app.js](app.js) owns in-memory book data, rendering, navigation, event handlers, localStorage, IndexedDB downloads, vocabulary, notes, and reader state.
- CSS loads in this order: [styles.css](styles.css), [overrides.css](overrides.css), [enhanced.css](enhanced.css), then [vocabulary-enhanced.css](vocabulary-enhanced.css). Later files win the cascade.
- [sw.js](sw.js) caches the app shell and runtime GET requests. Bump `CACHE_NAME` when cached behavior or shell assets change.

## Responsive Contract

- Treat desktop and phone layouts as separate acceptance targets.
- Desktop baseline: approximately 1440px wide, fixed sidebar, three-column book grid, and no horizontal overflow.
- Phone baseline: 390x844px, hidden sidebar with menu drawer, one-column book grid, full-width touch actions, and no horizontal overflow.
- The primary responsive breakpoint is `max-width: 700px`.
- Keep phone header actions in fixed, non-overlapping icon boxes. Do not allow button labels to compete for header width.
- Keep reader title, level, mode, visual-guide, and Previous/Next controls in explicit rows or lanes on phones.
- Keep filters horizontally scrollable when they exceed the viewport; do not introduce page-wide horizontal scrolling.
- Reader pages use fixed-height generated content and horizontal swipe navigation. Verify clipping, controls, and scrolling after changing reader dimensions.
- When adding or changing a modal, test both its native `hidden` attribute and `.hidden` class. Opening must populate content before removing both hidden states; closing must restore both.

## Development And Validation

- Run locally by opening `index.html`, or serve the folder with a simple static server when testing service workers and browser APIs.
- There is no build step or package installation.
- For UI changes, validate at minimum 390x844 and 1440x900. Check computed rectangles for overlap, `document.documentElement.scrollWidth <= viewport width`, modal open/close behavior, and keyboard focus for new actions.
- Clear or unregister the service worker when validating fresh CSS or JavaScript locally; its cache-first behavior can hide source changes.
- Do not treat a passing desktop check as sufficient for a phone change.

## Editing Guardrails

- Inspect the actual DOM selector before adding handlers. The app contains legacy and duplicate event registrations; consolidate duplicates when touching that behavior.
- Prefer the existing CSS variables, fonts, and layered stylesheet conventions. Put a final override in the last-loaded stylesheet only when the cascade requires it.
- Escape or safely handle any user-controlled value before interpolating it into `innerHTML`.
- Preserve localStorage and IndexedDB keys unless a migration is intentional.
- Authentication is a front-end demo gate, not real account security. Do not describe it as production authentication.
- Imported PDF/text files are currently acknowledged but not parsed; do not imply that import is complete without implementing it.