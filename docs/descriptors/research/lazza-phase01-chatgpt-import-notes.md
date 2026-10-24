# Fandome — Lazza Phase 01 ONLY (2026-10-24)

## Deliverables

- `lazza_phase01_rows_ONLY.csv` — FIVE new phase-01 records, 25 columns, no records of other artists.
- `lazza_phase01_sources.csv` — bibliographic references, authors, links, date and support claims.
- `lazza_phase01_genre_evidence.csv` — individual genre/source mappings including `track_only` labels.
- `lazza_phase01_evidence-notes.md` — album-level reasoning, scale justification, uncertainties, conflicting critics.
- `lazza_phase01_catalog-audit.csv` — two catalog gaps and three existing album IDs.
- `merge_incremental.py` — optional idempotent non-overwriting merge utility.

## Claude: action checklist

1. On the `descriptors` branch, inspect the current latest `docs/album-descriptors-guide.md` / validation script (both may evolve).
2. The five rows cover Zzala (2017), Re Mida (2019), J (2020, `mixtape`), Sirio (2022), Locura (2024). Existing Fandome catalog artist id: `lazza`. Existing album IDs `lazza-remida`, `lazza-sirio`, `lazza-locura` verified. NEW proposed IDs `lazza-zzala` and `lazza-j` conform to slug rule.
3. Add only the two missing releases to `src/data/catalog.ts` (or preferred data backend), no extra duplicates. Check previous descriptor file before merging.
4. **New genres:** `hardcorehiphop` (Sirio/Topboy) and `drill` (J/Moncler). Add them to the shared genre union and automatic validator BEFORE validation. Never silently drop genre evidence.
5. Merge the five rows without replacing unrelated earlier research. Run `python merge_incremental.py docs/descriptors/lazza.csv` from the directory where this file resides (or use its absolute path). On conflict, review manually rather than overwrite.
6. Merge or store source/genre/reasoning files in `docs/descriptors/research/` using collision-safe names. Do not replace another artist's files.
7. Run `npx vite-node scripts/validate-descriptors.ts`, project tests and TypeScript build from repository root. This package validates CSV structure locally but cannot run against Claude's entire working tree.
8. Keep every row `draft` until independent musical review; do not equate technically valid CSV with verified qualitative judgment.
9. The 2025 LOCURA JAM + OPERA and early mixtapes are noted but intentionally NOT included. Treat alternate recordings independently if later selected.

## Source reliability boundaries

Prioritize named critics (Rockol, OndaRock, Newsic, La Casa del Rap) for sound and content; Universal Music and track-level credits for releases/producers; artist interviews for artistic intent. Scores 0–5 remain anchored editorial inferences and are not extracted measurements. Unverified artist influences are empty. No prior artist batches are bundled.
