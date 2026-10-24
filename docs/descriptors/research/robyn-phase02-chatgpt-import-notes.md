# Fandome — Robyn phase 02: STRICT INCREMENT (no previous albums)

## Scope and album identity
This package includes ONLY the 4 research rows: `Robyn` (2005), `Body Talk Pt. 1` (2010), `Body Talk Pt. 2` (2010), `Body Talk` (2010). It does NOT contain phase 01 songs/albums, other artists, `Honey` (2018), `Sexistential` (2026), or non-existent `Body Talk Pt. 3`. All CSV entries are `draft`.

The original 2005 **Robyn** album must be scored from original 2005 Swedish sequence, not US 2008 expanded version. `Body Talk` finale shares earlier songs with Pt1/Pt2 but is a separate 15-track commercially released studio album; `Body Talk Pt. 3` is explicitly a **superseded provisional name**, see F_NEWS. The standalone Pt1/Pt2 are eight-song **mini-albums**; provisional `type=studio` follows album discographies; if site's policy prefers `ep`, review and modify deliberately.

## Included package
- `robyn_phase02_rows_ONLY.csv`: 4 rows x 25 columns, UTF-8, strictly new researched IDs.
- `robyn_phase02_sources.csv`: 25 album-to-source links (23 distinct sources), named critic, date, URL, evidence scope.
- `robyn_phase02_genre_evidence.csv`: 43 attestation records with `scope` and strength.
- `robyn_phase02_evidence-notes.md`: per-field reasoning, original vs expanded edition, uncertainty, production credits.
- `robyn_phase02_catalog-audit.csv`: two pre-existing and two missing catalogue IDs and type caveats.
- `append_phase02.py`: guarded, idempotent, append-only helper.
- `CLAUDE_IMPORT.md`: these instructions.

## For Claude
1. Switch to repo `descriptors` branch, fetch latest, and examine latest guide and `docs/descriptors/robyn.csv`. Guide SHA when compiled: `e5b62ea899e699c1e77ba22b4f44137a4109c7d1`.
2. Add missing catalog IDs only: `robyn-bodytalkpt1`, `robyn-bodytalkpt2`; existing `robyn-robyn` and `robyn-bodytalk` should not be duplicated.
3. New genre tokens not in that guide: **none**. Still inspect claims in genre-evidence; less relevant track-only tags are explicitly scoped.
4. Append only 4 rows into `docs/descriptors/robyn.csv` through `python /path/to/append_phase02.py` launched from repo root, or manual verified merge. DO NOT overwrite existing row if an ID collision; helper **raises** on differing data rather than silently merging. If a row already exists identically, skip it.
5. Source values (credits) and numeric judgments are *not* equally certain. Some 2005 album producers could be edition-dependent; the distinct Swedish-language Pt1 track changes `language` from the other 2010 issues. Keep draft pending second-person verification.
6. Run `npx vite-node scripts/validate-descriptors.ts` plus test suite/typecheck; commit to `descriptors`; report actual SHA. This bundle was locally validated but no tests in remote repo have been executed here.

## Remaining Robyn research
`Honey` (2018) and `Sexistential` (2026) remain for Phase 03. Consider `Do It Again` (2014, Robyn & Röyksopp collaboration EP) and `Love Is Free` (2015, Robyn & La Bagatelle Magique collaboration EP) as distinct shared-artist projects if extending beyond Robyn solo studio albums.
