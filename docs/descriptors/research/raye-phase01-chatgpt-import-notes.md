# CLAUDE_IMPORT — RAYE Phase 01 (incremental)

**READ-ONLY research.** Import into public branch `descriptors` after independent review; never blindly rewrite, replace other artist work, or interpret draft as approved. RAYE has no descriptor CSV in the branch as checked 25 Oct 2026. Exactly **3** new rows: one EP/mini-album + two studio albums.

## Import order
1. Read `docs/album-descriptors-guide.md`, `src/data/catalog.ts`, `src/data/scenes.ts`, `src/data/genreFamilies.ts`, and `scripts/validate-descriptors.ts` **at current branch head**, not cached documentation.
2. Reconcile the attached album audit and seed/catalog IDs. Existing 2023 album `raye-my21stcenturyblues` **must not be recreated**, while new entries `raye-euphoricsadsongs` and `raye-thismusicmaycontainhope` need catalog rows.
3. Copy all three 25-column rows from `raye_phase01_rows_ONLY.csv` to `docs/descriptors/raye.csv`; if a file now exists, merge by exact `album_id` and do not duplicate.
4. Add new token `orchestralpop` (clear parent mapping: `['pop','classical']` is misleading because this is not classical genre; choose `['pop']`, with note that instrumentation is orchestra) to guide, `scenes.ts`, `genreFamilies.ts` and validator. All other tokens have already been seen in the current guide.
5. Copy research CSVs and markdown notes to `docs/descriptors/research/` preserving provenance; keep source keys stable. Source file: 27 URLs, genre-evidence 36 cells, 3 catalog audit rows.
6. **Resolve two items before final approval:** (a) 2026 producer aggregator credits for Alex Robinson and Marvin Tony Hemmings differ in granularity from Qobuz track-level roles; verify producer credit on named song or remove those names; (b) check whether `Dolly Parton` (one song) and the 2026 jazz elders (enduring influences) meet project-wide `influenced_by` threshold; abstain if not.
7. Run `npx vite-node scripts/validate-descriptors.ts`; tests, then import only after review. Keep `status=draft` until distinct reviewer.

## Excluded releases
No live projects, no unqualified earlier EPs, no remix-edition duplicates or 2024 'Genesis.' single suite. Most relevant albums are complete through 25 Oct 2026. 2026 Mercury Prize win was verified but is contextual evidence only.

## Existing ID check
`raye-my21stcenturyblues` is the catalog-generated ID; the two new IDs follow `raye-` + title `slug` with punctuation stripped. Preserve artist title `RAYE` (upper case), and formal 2026 disc title ending with dot.
