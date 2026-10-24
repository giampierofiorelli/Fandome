# CLAUDE IMPORT — Fandome / Madame (incremental phase 01)

This archive covers **only Madame** (Italian singer Francesca Calearo): three studio albums 2021–2026. No data from Madonna, Elodie, Annalisa, Charli xcx, BLANCO or Mahmood.

## Files
- `docs/descriptors/madame.csv` — exactly three rows; current 25-column contract.
- `docs/descriptors/research/madame-sources.csv` — source-by-source metadata with URLs and source types.
- `docs/descriptors/research/madame-genre-evidence.csv` — every single genre, with scope and supporting reference.
- `docs/descriptors/research/madame-catalog-audit.csv` — IDs, originals vs deluxe editions, and missing album.
- `docs/descriptors/research/madame-evidence-notes.md` — nuanced scholarly/editiorial rationale, scores, caveats, conflicting critics.

- `merge_madame.py` — optional conflict-refusing, idempotent 3-row merge helper. Run it from the extracted ZIP root.

## Steps for Claude (descriptors branch)
1. Work on the **existing `descriptors` branch**. Re-read `docs/album-descriptors-guide.md` before import. DO NOT copy the archive's 25-column CSV over any previously existing Madame content without comparing by `album_id`.
2. Preserve existing IDs `madame-madame`, `madame-lamore`; missing third album must be added to `src/data/catalog.ts` in the `madame` artist's album list as `['Disincanto', 2026]` (generated ID `madame-disincanto`). This may be included in a separate catalog commit.
3. Add missing genre tokens `bossanova`, `nusoul` and `poprap` to `src/data/scenes.ts` **and** `scripts/validate-descriptors.ts` and elsewhere the allowed registry is enforced, only after confirming absent. All three are cited by named critics (pop-rap is the album-level category for Disincanto).
4. Merge `madame.csv` with any existing rows by `album_id`: `python merge_madame.py /path/to/Fandome --dry-run`, then `python merge_madame.py /path/to/Fandome`. If existing row differs, helper refuses overwrite. Never extract the archive directly over existing `madame.csv`.
5. Verify producer credits in `madame-evidence-notes.md`; Qobuz digital-expanded releases should not change original-edition analysis. Check Madame's `Bestia` co-producer credit before publication.
6. `npx vite-node scripts/validate-descriptors.ts`, `npm run typecheck`, `npm test` (use repo's actual tooling/dependencies). Fix errors without weakening the validator.
7. Keep `status=draft`; a second reviewer can change it to `reviewed` **only after separate verification**. When committed, provide URL and hash.

## Explicit source/edition caveats
- Standard 2021 16 tracks vs later 17/18 digital editions, excluded Marea/Tu mi hai capito.
- 2023 standard 14 tracks vs 15-track digital with Tekno Pokè, excluded.
- Disincanto original 14-track album has official release 17 April 2026, but some stores display 16 April; use year 2026.
- Numeric ratings are editorial judgement, not findings published by experts.
- `confidence=high` reflects multiple qualified sources, not certainty of numerical measurements.

No GitHub changes were made by ChatGPT.
