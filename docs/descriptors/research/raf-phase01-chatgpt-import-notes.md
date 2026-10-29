# CLAUDE — import Raf phase 01 into Fandome

Branch: `descriptors`. Artist id: `raf` **already exists** in `src/data/catalog.ts`, currently with **zero albums**; do not recreate the artist.

1. Read `docs/album-descriptors-guide.md`, latest validator and current `src/data/scenes.ts`, `src/data/instruments.ts`, `src/data/production.ts`.
2. Check current catalogue and existing `docs/descriptors/raf.csv` for possible concurrent changes after this batch. Do not overwrite or duplicate a pre-existing row.
3. Add **only** the following four original studio album tuples to the existing `raf` artist in `src/data/catalog.ts`: `['Raf', 1984]`, `['Svegliarsi un anno fa', 1988]`, `['Cosa resterà...', 1989]`, `["Sogni... è tutto quello che c'è", 1991]`. Use the exact titles to produce IDs in `raf_phase01_rows_ONLY.csv`.
4. Copy rows into `docs/descriptors/raf.csv` in exact 27-column guide order. Respect CSV UTF-8, commas in quotes, pipe-separated tokens, `status=draft`.
5. Read source list, genre evidence and research notes; where a claim is restricted to a single track, preserve that distinction. Leave `influenced_by` empty until album-specific primary evidence is found; no invented references.
6. Verify `production` and `instruments` use already accepted vocabulary; this phase requests **no new tokens**.
7. Run `npx vite-node scripts/validate-descriptors.ts`. If `catalogAlbums` and `seed` are not aligned for your checkout, follow the project's normal catalog-to-seed workflow before concluding that the descriptor ID is invalid.
8. **Do not** add the 1987 *Self Control* / *Change Your Mind* reissue or the 1992 Spanish compilation *Raf* as new studio albums. No live or compilation releases.
9. Keep notes on the producer nuance: Celso Valli album producer; Giancarlo Bigazzi produces lead singles; verify the original cover at review. The ID for *Raf* is `raf-raf`, not a second artist ID.
10. No GitHub changes were made by the researcher: the ZIP supplies import-ready proposals only.

Files:
- `raf_phase01_rows_ONLY.csv` — 4 original-studio album descriptor rows, 27 columns.
- `raf_phase01_sources.csv` — source links and the fields/claims they support.
- `raf_phase01_genre_evidence.csv` — per-genre track/album scope.
- `raf_phase01_catalog-audit.csv` — proposed additions and conflicts.
- `raf_phase01_evidence-notes.md` — deeper rationale and uncertainty.
- `CLAUDE_IMPORT.md` — this file.

## Claude import note (Oct 2026)

- Sogni... è tutto quello che c'è: Eros Ramazzotti removed from sounds_like (he duets on the album: a guest is not a comparison); Raf's own production credit dropped. Four albums added to the catalogue row.
