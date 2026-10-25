# Chappell Roan — Fandome Phase 01, import instruction for Claude

- Repository: `giampierofiorelli/Fandome`, branch `descriptors`; read-only audit by ChatGPT.
- Artist id `chappell`; descriptor target `docs/descriptors/chappell.csv`, **not yet existing** on branch when examined.
- Import **only** the two rows from `chappell_phase01_rows_ONLY.csv` with 25-column header; merge into any new file rather than overwriting unrelated work.
- Catalog: `chappell-theriseandfallofamidwestprincess` exists; add `chappell-schoolnights` under artist `chappell` using original 2017 EP title/date/type. Do not duplicate original 2023 entry.
- Keep original 5-track School Nights EP separate from the 2023 14-track LP. Exclude live performances/reissues/singles (Good Luck, Babe!, The Giver, The Subway and 2026 expectations featured single).
- Every CSV genre has a corresponding `genre_evidence.csv` evidence record and existing `Genre` token. No additions to `src/data/scenes.ts`, `genreFamilies.ts`, or validator needed.
- Important verification flags: 2017 Phili Stelios track **production** only secondary metadata; `Good Hurt` producers Andrew Wells and Jennifer Decilveo are confirmed in Qobuz. Secondary 2017 genres may be too thin. `country` and `house` for 2023 are strictly limited/track-level.
- Editorial numerical ratings and voice labels in evidence notes are **proposals**, no falsely asserted objective measurements.
- `influenced_by` 2023 lists formative artists from first-person interviews, with source pointers; audit specific-to-album causal standard before marking reviewed.
- `status=draft`; run `npx vite-node scripts/validate-descriptors.ts` after catalog import and merge, plus manual evidence review. No GitHub writes performed.
- Package contains exactly six files. Research cutoff: 2026-10-25.
