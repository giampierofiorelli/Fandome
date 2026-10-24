# Fandome: notes for Claude

- Independent, English-UI social network for music fans. React 18 + TypeScript + Vite, deployed to GitHub Pages by `.github/workflows/pages.yml` (tests, nightly concert fetch, build).
- No paid backend for now (owner's decision): state lives in the browser (IndexedDB via `src/lib/mediaStore.ts`, loaded in `src/store/store.tsx`).
- Keep the current design (calm glass, one column, big light numerals, Doto dot-matrix accents, floating tab bar). The listening party look must not change.
- GDPR: nothing from third parties loads before consent or a user tap; fonts are self-hosted.
- **Before planning new work, read `ROADMAP.md`**: it lists features we decided to do later (e.g. Apple Music in the listening party, collector marketplace) and what is waiting on the owner.
- The owner writes in Italian: answer in Italian, short, outcome first.
