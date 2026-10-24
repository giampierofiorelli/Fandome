# Fandome: notes for Claude

- Independent, English-UI social network for music fans. React 18 + TypeScript + Vite, deployed to GitHub Pages by `.github/workflows/pages.yml` (tests, nightly concert fetch, build).
- No paid backend for now (owner's decision): state lives in the browser (IndexedDB via `src/lib/mediaStore.ts`, loaded in `src/store/store.tsx`).
- Keep the current design (calm glass, one column, big light numerals, Doto dot-matrix accents, floating tab bar). The listening party look must not change.
- GDPR: nothing from third parties loads before consent or a user tap; fonts are self-hosted.
- **Before planning new work, read `ROADMAP.md`**: it lists features we decided to do later (e.g. Apple Music in the listening party, collector marketplace) and what is waiting on the owner.
- The owner writes in Italian: answer in Italian, short, outcome first.

## Manifesto (owner's words, shown in the footer)

Fandome is made by music lovers for music lovers, and above all to promote and support the artists. It is also a way to push back against the power of algorithms: the internet and social media promised to be democratic and accessible, for listeners and for artists, and it hasn't always gone that way. Product decisions follow from this: no ads, no paid boosts, no hidden ranking, explainable feeds and suggestions, artists presented at their best.
