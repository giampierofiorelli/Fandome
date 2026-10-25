# CLAUDE IMPORT — Mariah Carey Phase 03 (4 NEW ROWS ONLY)

This is a read-only research handoff, **not** a repository commit. Target repo `giampierofiorelli/Fandome`, branch `descriptors`. Research date: 2026-10-25. Use the latest project guide and preserve Phase 01 and Phase 02 rows.

## Files

1. `mariah_phase03_rows_ONLY.csv` — 4 rows x 25 canonical descriptor columns; `status=draft`.
2. `mariah_phase03_sources.csv` — traceable independent reviews, artist accounts, official credits, and metadata. Each `source` begins with a stable key.
3. `mariah_phase03_genre_evidence.csv` — each CSV genre has source keys, a scope and limitation.
4. `mariah_phase03_evidence-notes.md` — album-scoped reasoning for voice, mood and scores; uncertainties and dissent.
5. `mariah_phase03_catalog-audit.csv` — catalog additions and original editions.
6. This file.

## Merge and checks

- Existing branch `docs/descriptors/mariah.csv` contains four Phase 01 records (Mariah Carey, Emotions, Music Box, Merry Christmas) at research time; Phase 02 (Daydream, Butterfly, Rainbow, Glitter) may not yet have been merged. Never **replace** its contents with this incremental CSV. Append only the four IDs in the rows file; check again for new remote commits.
- All new albums except existing catalog `The Emancipation of Mimi` need catalog registration in `src/data/catalog.ts`. Existing artistId `mariah`. New IDs must match the **actual** slug function. Crucial: `E=MC²` becomes `mariah-emc` because superscript ² is removed, not turned into 2.
- **No new genre tokens required.** All tokens in this phase exist already in `src/data/scenes.ts` and `scripts/validate-descriptors.ts` as inspected. Genre scope `track-level` must not dominate algorithmic ranking: consider whether to omit peripheral ones if the consumer engine lacks scope awareness; preserve all evidentiary rows.
- Original issue only: Charmbracelet 15 tracks (including its original closing remix), Mimi 14, E=MC² 14, Memoirs 17 core tracks. Qobuz Memoirs disc 2 contains remix extras; ignore it for production, genres, values.
- `rap` in the `voice` column denotes featured rap verses, not Mariah vocal delivery. Review that modelling choice if recommender assumes only lead singer. `raspy` on some tracks should not be read as ubiquitous.
- `influenced_by` **deliberately blank** because reviews establish sonic comparisons/samples but not album-specific independently documented causal influence. Don't auto-fill from famous inspirations.
- Review per-track credit of all producers in `E=MC²` before finalizing; late album-source listings include extra producer roles whose scope can differ.
- Run `npx vite-node scripts/validate-descriptors.ts`; check other genre files as necessary. No permission to commit or overwrite existing records from this package.

## Next Phase

Phase 04: Merry Christmas II You (2010), Me. I Am Mariah... The Elusive Chanteuse (2014), Caution (2018), Here for It All (2025). No live albums.
