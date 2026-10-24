# Fandome — GEOLIER / Phase 01 — ONLY NEW ARTIST

Research as of **2026-10-24**. This ZIP contains **4 original studio albums by Geolier only**. Do **not** combine prior artist ZIPs into this package. No GitHub files have been changed by ChatGPT; Claude can import, validate and commit.

## Contents

- `geolier_phase01_rows_ONLY.csv`: **four rows**, exactly 25 columns, status=draft, untouched album IDs for the 3 catalogued records, new ID for 2026.
- `geolier_phase01_sources.csv`: named original reviews, first-person interview, label pages, dated release metadata and track-production credits.
- `geolier_phase01_genre_evidence.csv`: explicit per-genre justification, including separate *album-wide vs track-specific* scope.
- `geolier_phase01_evidence-notes.md`: 0–5 score rationales and source disagreements.
- `geolier_phase01_catalog-audit.csv`: ID/year checks, **2024 fix and 2026 addition**.
- `merge_geolier_rows.py`: safe row-only, idempotent merge helper. Does not change `catalog.ts`.
- `CLAUDE_IMPORT.md`: these instructions.

## Important repository issues

1. `src/data/catalog.ts` currently records `['Dio lo sa', 2025]`, but original release was **2024-06-07**. Fix to 2024 in catalog, without renaming `geolier-diolosa`.
2. Add `['Tutto è possibile', 2026]` to Geolier's catalog albums; generated ID is `geolier-tuttoepossibile`.
3. Add currently unrecognized genre IDs: `hardcorehiphop`, `latintrap`, `westcoasthiphop` to genre and validator lists. These reflect critic descriptions; see the scoped genre evidence CSV.
4. The project uses `it` for tracks performed largely in Neapolitan because it requires two-letter language codes. This is **a schema limitation**; please consider a `nap` (ISO 639-3) extension, without silently misrepresenting the language.
5. `Tutto è possibile – Atto II` (2026-10-16) is a later expanded/follow-on version, **not automatically a fifth original studio album**. Scope this batch to the original 16-track 2026 issue, not subsequent bonus tracks.

## Import / review

1. In branch `descriptors`, fetch latest `main` or merge latest guide and genre updates as needed.
2. Inspect the four new rows. Correct the catalog year and add the missing 2026 album in `src/data/catalog.ts` using the verified audit.
3. Ensure new genres are registered before validation. The genre evidence file makes **no limit** on identifiers; use normalized letters-only forms.
4. Merge the four rows into `docs/descriptors/geolier.csv` without overwriting old content. Example from the extracted ZIP directory:

   `python3 merge_geolier_rows.py /path/to/Fandome/docs/descriptors/geolier.csv`

   The script fails on any existing same-ID row that differs, instead of silently overwriting it.
5. Copy research files (sources, evidence notes, genres, audit) into `docs/descriptors/research/` without overwriting existing artifacts.
6. Run `npx vite-node scripts/validate-descriptors.ts` and the repository tests before committing.
7. All rows are editorial `draft`. A second reviewer must check sources, producers and numeric judgments before marking `reviewed`.

Research policy: no filler; leave insufficiently supported fields blank. All genre tags have explicit scope. Producer credits are listed only where source-backed. No generic name-based similarity guesses are present. Number values reflect the analysis of the albums rather than a measurable physical property.
