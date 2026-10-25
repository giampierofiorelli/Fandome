# CLAUDE — Troye Sivan Phase 02, strictly incremental

Repository: `giampierofiorelli/Fandome` / branch `descriptors`. This ZIP contains only **two newly researched studio albums**, `Something to Give Each Other` (2023) and `She's the Best` (2026). Read repository guide and preserve prior Phase 01 (TRXYE, Blue Neighbourhood, Bloom, In a Dream) exactly; latest check returned 404 on `docs/descriptors/troye.csv`, so FIRST import/locate Phase 01 and do not redo it.

1. Merge only rows from `troye_phase02_rows_ONLY.csv` into artist `docs/descriptors/troye.csv`. Existing ID `troye-somethingtogiveeachother` remains as is. Newly add `troye-shesthebest` to `src/data/catalog.ts`, 2026, then import it. All 25 descriptor columns and notes <=15 words.
2. Archive three supporting CSVs and evidence notes in `docs/descriptors/research/` (source keys are intentionally preserved; source file has rich 9-field metadata).
3. **New token proposal**: `balearicbeat`, used on 2026 album at multi-track/texture scope, based on The Guardian 9 Oct 2026. Review before acceptance. If accepted, add to `docs/album-descriptors-guide.md`, `src/data/scenes.ts` (union + labels), `src/data/genreFamilies.ts` (suggest family `dance|electronic|house`; ensure compatible constraints) and hardcoded `GENRES` in `scripts/validate-descriptors.ts`. Do not infer genre dominance or silently alter the row.
4. **Original release control**: 2023 original 10-track / 2026 original 12-track (9 October). The Qobuz 14 August 2026 page identified as a *single* is NOT a source for 12-track album credits. Prefer the verified `f1wvsbkiki6zu` album page. Do not use deluxe reissues or live albums.
5. **Producer identity**: alias Kaeyln/Kaelyn Behr = Styalz Fuego. No duplication. Madonna and Mirwais are sample-based songwriter rights on Party, NOT producers. `influenced_by` Madonna (direct sample + firsthand admiration); Janet Jackson for 2023 (documented inspiration for creating album). Acoustic pop / DnB / French touch / UK garage / shoegaze scoped per genre-evidence file.
6. Validate with `npx vite-node scripts/validate-descriptors.ts` and project suite; all rows are drafts pending second reviewer. Do not commit research without your standard owner approval.

No additional Troye Sivan phase is currently needed through 25 October 2026.
