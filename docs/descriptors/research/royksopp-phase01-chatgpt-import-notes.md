# Fandome — Röyksopp phase 01: STRICT INCREMENT

This ZIP has **only three newly researched albums**: `Melody A.M.` (2001), `The Understanding` (2005), `Junior` (2009). It contains NO other artists, no historical descriptor rows, and no later Röyksopp albums. The existing 25-column Fandome CSV format is retained, all new rows are `draft`.

## Seven files

- `royksopp_phase01_rows_ONLY.csv` — 3 rows x 25 columns with artist ID `royksopp` (album_id prefixed accordingly).
- `royksopp_phase01_sources.csv` — album-to-source evidence, credits, reviews and release dates.
- `royksopp_phase01_genre_evidence.csv` — genre-by-genre attestation and whole-album vs track-level scope.
- `royksopp_phase01_evidence-notes.md` — rationale for every 0–5 scale and material uncertainty.
- `royksopp_phase01_catalog-audit.csv` — album ID check against current Fandome catalog.
- `append_phase01.py` — guarded append-only helper; detects collisions, is idempotent.
- `CLAUDE_IMPORT.md` — instructions.

## Instructions to Claude

1. Checkout and update the **`descriptors`** branch in `giampierofiorelli/Fandome`; inspect the latest `docs/album-descriptors-guide.md`. Guide SHA at time of study: `e5b62ea899e699c1e77ba22b4f44137a4109c7d1`.
2. All THREE album IDs **already exist** in `src/data/catalog.ts`: `royksopp-melodyam`, `royksopp-theunderstanding`, `royksopp-junior`. **Do not add duplicates**.
3. New source-attested genre tokens requiring catalog + validator + scenes definitions: **`downtempo`, `chillout`, `downbeat`, `electro`, `rave`**. Check normalization and scope; the guide does not permit dropping documented tokens merely because missing from the current taxonomy. `synthpop` and `electropop` are different documented sounds.
4. To append from Fandome repo root, run `python /path/to/append_phase01.py` (script finds its colocated CSV), or merge the rows manually into `docs/descriptors/royksopp.csv`. Do not overwrite an existing differing row. Rerunning the helper skips matching duplicate IDs.
5. Judge **2001 / 2005 / 2009 original editions only**; no bonus remixes/reissues. Verify `Ole J. Mjøs` track-specific scope for debut and the critic-attributed 2009 influences before marking reviewed. Do not treat collaborators as producers.
6. Then execute `npx vite-node scripts/validate-descriptors.ts` and repository tests, commit to `descriptors` and report real SHA. No changes to GitHub have been made directly here; remote tests have not been executed.

## Subsequent, NOT included

`Senior` (2010), `The Inevitable End` (2014), `Profound Mysteries I/II/III` (2022); later rework/reinterpretation titles `Nebulous Nights` (2024) and `True Electric` (2025) to classify separately. Check overlap and album/EP/live/remix labels before building later batches.
