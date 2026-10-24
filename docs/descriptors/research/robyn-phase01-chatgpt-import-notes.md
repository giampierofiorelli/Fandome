# Fandome — Robyn, phase 01 (STRICT INCREMENT)

## Scope
This package contains **only three newly researched Robyn albums**: `Robyn Is Here` (1995), `My Truth` (1999), `Don't Stop the Music` (2002). It does **not** include previously researched artists, existing 2005/2010/2018 Fandome album rows, or the newly released 2026 `Sexistential`. The later albums are for future phase(s).

## Included files
- `robyn_phase01_rows_ONLY.csv` — exactly 3 new records, **25 columns**, UTF-8, `status=draft`.
- `robyn_phase01_sources.csv` — sourced music criticism, creator information and licensed original release/producer credits with URLs and scope.
- `robyn_phase01_genre_evidence.csv` — one row for each of 23 assigned genre tokens, including **album-wide vs track-level/peripheral** scope.
- `robyn_phase01_evidence-notes.md` — explicit numeric editorial reasoning, edition differences, production/alias caveats and uncertainties.
- `robyn_phase01_catalog-audit.csv` — 3 missing Fandome album identities, with canonical proposed IDs.
- `append_phase01.py` — collision-safe, idempotent append-only helper.
- `CLAUDE_IMPORT.md` — these instructions.

## Before importing in Claude
1. Work on **`descriptors`** branch. Check remote HEAD and current site schema/guide first; this bundle was researched against guide sha `e5b62ea899e699c1e77ba22b4f44137a4109c7d1`.
2. Add all three missing album identities to `src/data/catalog.ts` / seed as applicable, keeping the project original-title-and-year scheme: `robyn-robynishere`, `robyn-mytruth`, `robyn-dontstopthemusic`. **Robyn Is Here original year=1995**; **Don't Stop the Music original year=2002**, in contrast with region-specific AllMusic later years.
3. Add the following missing exact genre tokens in source-of-truth `scenes.ts`, validator, and any required genre UI: **bubblegumpop, contemporaryrnb, europop, hiphopsoul**. Decide about genre candidates supported only by secondary tags after inspecting `genre_evidence`.
4. Album score calibrations are **judgments from criticism**, not objective measurements. `status=draft` is deliberate. Review the edition notes before promoting.
5. Run `python /PATH/TO/EXTRACTED/append_phase01.py` from Fandome repo root or append the 3 new rows manually. **Never overwrite existing IDs**; the script stops on any collision with different data. The script does not make commits or edit catalog/genre definitions.
6. Validate using `npx vite-node scripts/validate-descriptors.ts`, run project tests / typecheck, and commit to `descriptors`. Report actual commit SHA. The ZIP was validated **locally** only; repository tests must be run by Claude.

### Important later work
- Robyn (2005), Body Talk Pt. 1 (2010), Body Talk Pt. 2 (2010), Body Talk (2010), Honey (2018), Sexistential (2026). Two individual 2010 installments share musical material with `Body Talk`, so avoid duplicate identity/description collisions and identify original release types.
- The `Robyn Is Here` North American 1997 edition is **not** a new studio album.
- No limit on supported values in columns. Separate producer credit from composer, mixer, executive producer and influence; keep uncertain fields blank.
