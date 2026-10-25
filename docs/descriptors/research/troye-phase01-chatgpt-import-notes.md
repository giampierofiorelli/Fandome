# Claude import — Troye Sivan Phase 01 (incremental)

Four releases ONLY: TRXYE (2014 EP), Blue Neighbourhood (2015 studio), Bloom (2018 studio), In a Dream (2020 EP). No live albums. Source-backed 25-column draft descriptor, source file, per-genre evidence, evidence notes and catalog audit included. All 4 album IDs are under artist `troye`; existing studio IDs preserved.

Repository `giampierofiorelli/Fandome`, branch `descriptors` (read-only inspection). At preparation, there is no `docs/descriptors/troye.csv`. Catalog already includes Blue Neighbourhood, Bloom, Something to Give Each Other; **do not repeat or overwrite previously researched albums**.

1. Import only rows in `troye_phase01_rows_ONLY.csv` into `docs/descriptors/troye.csv` with exact 25-field header. Add `troye-trxye` and `troye-inadream` to album catalog if absence confirmed. `TRXYE` and `In a Dream` are EPs, not studio records.
2. Put research files in `docs/descriptors/research/`; retain provenance source keys. Source file columns include extra metadata; adapt to existing preferred import format only as needed (source key may be moved into source text if importer assumes six fields).
3. Genre tokens: **none new**. All genres already in guide, `src/data/scenes.ts`, and validator; genre order approximates salience but scope is documented individually. Genre included for one track is annotated track-level, not album-wide.
4. WILD (2015): **excluded** as standalone descriptor because all six recordings appear on Blue Neighbourhood deluxe; keep exclusion visible in catalog audit. Further early EPs (2007/2012) also excluded as pre-breakthrough/archival.
5. Original editions: Blue Neighbourhood standard (not WILD-inclusive deluxe); Bloom original 10-song; In a Dream original 6-song (no acoustic bonus). Avoid importing remixes/alternate tracks as primary album evidence.
6. Production roles are verified through Universal Music / MusicBrainz / AllMusic. Do not turn songwriter, mixers, features, or comparisons into producers/influences. The column `influenced_by` is empty throughout: available named-artist comparisons are not direct causal evidence for whole albums.
7. Validate with `npx vite-node scripts/validate-descriptors.ts`; then run the applicable project suite. Draft status requires human second review.

## Next phase (strictly new)
- `Something to Give Each Other` (2023), existing `troye-somethingtogiveeachother`.
- `She's the Best` (2026, released 9 October), new `troye-shesthebest`.
- No live or reissues. Use October 2026 first-party label and professional reviews.
