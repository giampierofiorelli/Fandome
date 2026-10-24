# Fandome: notes for Claude

- Independent, English-UI social network for music fans. React 18 + TypeScript + Vite, deployed to GitHub Pages by `.github/workflows/pages.yml` (tests, nightly concert fetch, build).
- No paid backend for now (owner's decision): state lives in the browser (IndexedDB via `src/lib/mediaStore.ts`, loaded in `src/store/store.tsx`).
- Keep the current design (calm glass, one column, big light numerals, Doto dot-matrix accents, floating tab bar). The listening party look must not change.
- GDPR: nothing from third parties loads before consent or a user tap; fonts are self-hosted.
- Album descriptors (`docs/album-descriptors-guide.md`, branch `descriptors`): owner's rule, no limit on the number of values in any column; every genre a source names goes in, new genres are added to the list.
- Discovery (suggestions, Bridge, "A scene you don't know yet") never targets the global markets (US, UK; CA, AU, IE too for now, to rethink later) or English-language pop: only local scenes, singing mainly in their own language (owner's rule; `isLocalArtist` in `src/data/scenes.ts`).
- **Before planning new work, read `ROADMAP.md`**: it lists features we decided to do later (e.g. Apple Music in the listening party, collector marketplace) and what is waiting on the owner.
- The owner writes in Italian: answer in Italian, short, outcome first.

## Manifesto (owner's words, shown in the footer)

Fandome is made by music lovers for music lovers, and above all to promote and support the artists. The internet and social media promised to be democratic and accessible, for listeners and for artists; instead algorithms and playlists decide what people hear, and artists who aren't on the right lists stay unknown. Fandome wants a truer, more open, more democratic way to discover music and to be discovered: explainable feeds and suggestions, fans bringing artists to other fans, artists presented at their best. Note: do NOT promise "no ads" anywhere: the site may need ads, a marketplace or tips in the future (owner's decision); sponsored content must always be clearly labelled.

No hate, no bullying, no body shaming of artists, no fan wars: fans of different artists should discover each other's music, not fight. Fandome is only about music: every post is tied to at least one artist, off-topic content is discouraged and can be reported ("Not about music").
