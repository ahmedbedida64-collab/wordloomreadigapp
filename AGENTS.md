# Wordloom Agent Guide

This project is a dependency-free browser app. The product interface is defined in [index.html](index.html), state and rendering logic live in [app.js](app.js), and styling is layered through [styles.css](styles.css), [overrides.css](overrides.css), [enhanced.css](enhanced.css), and [vocabulary-enhanced.css](vocabulary-enhanced.css).

See [README.md](README.md) for the user-facing feature summary and hosting guidance.

## Current product conventions

- The navigation is intentionally a three-item bottom dock: Library, Review, and Play.
- There is no notes screen or notes tab in the current app flow; do not reintroduce empty note slots or ghost spacing in the nav.
- Library tabs are: All, Favorites, and Reading history.
- Level filtering is a small popover driven by the Levels button; the app uses level-only filtering rather than a larger multi-filter system.
- Reader flow is a book preview then a reading view with swipe and Previous/Next controls.
- Book cards, favorite hearts, and preview actions are generated dynamically from app state and must keep delegated event handling consistent.

## Project shape

- [index.html](index.html): app shell, views, modals, the three-item nav, and service worker registration.
- [app.js](app.js): data model, dynamic rendering, stateful interactions, localStorage persistence, IndexedDB fallback, vocabulary review logic, reader flow, and Play game interactions.
- [styles.css](styles.css): base layout and visual foundation.
- [overrides.css](overrides.css): targeted fixes and responsive adjustments.
- [enhanced.css](enhanced.css): motion and visual polish.
- [vocabulary-enhanced.css](vocabulary-enhanced.css): final state styling for tabs, chips, game cards, and review behavior.
- [sw.js](sw.js): caches the app shell and runtime GET requests; bump the cache name when the shell or cache behavior changes.

## Development and validation

- No build step, package install, or framework tooling is required.
- Run locally with a static server such as `python3 -m http.server 8765` from the repo root, then open the page in a browser.
- Validate at minimum 390x844 and 1440x900.
- Check for: no horizontal overflow, no nav gaps or dead slots, correct active states, modal hidden states, and keyboard focus on new controls.
- If stale CSS or JS is suspected, unregister or clear the service worker before re-testing.

## Editing guardrails

- Inspect the real DOM selectors before changing handlers; the app has legacy and duplicate event paths.
- Prefer delegated clicks over adding ad hoc listeners to each rerendered card.
- Keep CSS cascade behavior predictable: final overrides belong in the last-loaded stylesheet only when necessary.
- Preserve localStorage and IndexedDB keys unless a migration is intentional.
- Do not describe authentication as production security; this is a front-end demo gate.
- Imported PDF/text files are acknowledged but not fully parsed; do not imply support beyond the current implementation.
- Keep the navigation compact and aligned with the current app state: no empty notes placeholder, no hidden dead column, and no extra spacing from stale note-era styling.

## Useful prompts for future agents

- "Fix the three-item nav spacing and active states on mobile and desktop."
- "Debug the library tab/favorite/history flow after rerendering cards."
- "Add a focused visual fix without reintroducing the stale notes layout."
- "Validate the reader preview + back button flow and ensure no horizontal overflow."