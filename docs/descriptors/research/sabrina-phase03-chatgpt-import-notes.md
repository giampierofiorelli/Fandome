# IMPORT BRIEF — Sabrina Carpenter, PHASE 03 (ONLY ONE NEW ALBUM)

Target: `giampierofiorelli/Fandome`, `descriptors` branch. **Append only** one row: `sabrina-mansbestfriend` (*Man’s Best Friend*, 2025). **Do not repeat, import again or change the six albums provided earlier.**

1. Inspect `sabrina_phase03_rows_ONLY.csv`, `sabrina_phase03_sources.csv`, `sabrina_phase03_evidence-notes.md`, `sabrina_phase03_genre_evidence.csv`, and `sabrina_phase03_catalog-audit.csv` before merging. All scores are editorial **draft** judgments, sources are provenance.
2. Existing Fandome catalog already lists *Man’s Best Friend* (2025); ID derived from catalog's slug rule is `sabrina-mansbestfriend` (not a new artist). Keep its existing entry/title; append only its descriptor.
3. Add taxonomy tokens if not yet registered: `discopop`, `yachtrock`, `quietstorm`. Preserve the existing `nudisco`, `electrofunk`, `newjackswing`, `softrock` labels. This is NOT a request to limit other source-supported genres. The evidence CSV marks track-specific usages.
4. If there is no collision, either append this single CSV row manually to `docs/descriptors/sabrina.csv` or run from repo root `python3 <extracted>/apply_incremental.py`. The script deliberately fails on any differing existing ID, never overwrites, never edits catalog/taxonomy. It is safe to rerun: identical duplicate produces no new row.
5. Run `npx vite-node scripts/validate-descriptors.ts` plus relevant repo tests after taxonomy synchronization; independently check studio edition (12 songs) and credits (Sabrina Carpenter, Jack Antonoff and John Ryan are **Producers**, Amy Allen **songwriter**). Do not claim validation passed until executed in your repo.
6. Commit to `descriptors` branch and report a real commit SHA, validation outcome, any genre-token additions and content conflicts. Never silently replace existing IDs.

Note: current guide states **no arbitrary value-count cap in any column**; `notes` still max 15 words, numeric scores remain 0–5. No other artist or Sabrina prior-phase rows are in this ZIP.
