# CLAUDE_IMPORT – Giorgio Moroder – Phase 06

## Package boundary
**Exactly four new 25-column rows**, no prior artist or phase rows. Audit date 2026-10-25; GitHub branch `descriptors` read-only. The last confirmed imported Moroder descriptors in `docs/descriptors/moroder.csv` were phases 01–03 (12 rows) and catalog through 1979. Phases 04 and 05 were supplied as ZIPs but **not found imported** at this audit. Import or reconcile **their ZIPs separately**; don't erase them when adding this phase.

## Files
- `moroder_phase06_rows_ONLY.csv` — four new draft rows
- `moroder_phase06_sources.csv` — claim-specific verified public links, source ids prefixed in `source` column
- `moroder_phase06_genre_evidence.csv` — one evidence item per genre in those four rows
- `moroder_phase06_evidence-notes.md` — scale justifications, interpretation, disputes, influence exclusions
- `moroder_phase06_catalog-audit.csv` — absent catalog items, proposed exact IDs and editions
- `CLAUDE_IMPORT.md` — this file

## Album IDs / import order
1. `moroder-electricdreams` — **Electric Dreams** (1984, soundtrack) — add.
2. `moroder-metropolis` — **Metropolis** (1984, soundtrack) — add. Original LP in 1984 even though Moroder site tags later 1985 issue.
3. `moroder-innovisions` — **Innovisions** (1985, compilation) — add. Reissue label calls it studio but explains back-catalog mixes; documentary classification caveat in notes.
4. `moroder-philipoakeygiorgiomoroder` — **Philip Oakey & Giorgio Moroder** (1985, studio) — add. Original 9 tracks.

Artist room id = `moroder` (verified from `src/data/catalog.ts`). All new IDs follow Fandome ASCII title slug. Important: **do not automatically add a separate Philip Oakey artist room**; this is documented collaboration, and `artist` CSV column remains Giorgio Moroder to match the existing Moroder files.

### Production caveats
- Electric Dreams: original various-artists LP, not wholly produced by Moroder. Full album producers are `Giorgio Moroder|Jeff Lynne|Steve Levine|B.E.F.|Greg Walsh|Don Was`. AFI track credits and original LP match; site only lists Moroder-associated songs.
- Metropolis: original Columbia LP includes separate producers on **specific songs**, e.g. Freddie Mercury / Reinhold Mack and Neil Giraldo / Peter Coleman; do not reduce to Moroder-only. Note original 1984 issue vs 1985 site metadata.
- Innovisions: Brian Reeves is explicitly a remixer/engineer, not to be added as producer without separate documentation. No claim it is ten brand-new 1985 performances. Type is `compilation` under Fandome taxonomy despite a reissue marketing description `studio`.
- Philip Oakey record: Moroder is sole named producer on the original LP; Barrow plays instruments/programs, Reeves engineers; both are **not** co-producers by default.
- No documented album-level artistic influences for these four releases: `influenced_by` blank. Critics' sonic analogies go in `sounds_like`.

### Genres and tools
No new genre tokens required (current branch has all: `electrorock`, `hinrg`, `europop`, `newwave`, `electropop`, etc.). Existing `src/data/scenes.ts`, `src/data/genreFamilies.ts`, and `scripts/validate-descriptors.ts` need no token changes for phase 06. Check immediately before adding. Append rows to `docs/descriptors/moroder.csv` by unique `album_id`; preserve all prior rows and the exact 25-column header. Append new album entries to existing Moroder tuple in `src/data/catalog.ts` chronologically, preserving the existing 1979 and 2015 records. Run `npx vite-node scripts/validate-descriptors.ts` and the app tests. Do not change `status=draft` without second review.

### Next phase, provisional Phase 07
`Top Gun` (1986, verify soundtrack extent and credited producers); `Over the Top` (1987, soundtrack); `To Be Number One` (1990, Giorgio Moroder Project studio LP); `The NeverEnding Story II: The Next Chapter` (1990, soundtrack). **Exclude Rambo III (1988) from the currently proposed four**: Moroder produced two songs on an original soundtrack mostly composed by Jerry Goldsmith, and the available evidence does not establish a Moroder-defining album; reconsider only if further evidence justifies inclusion. Original release months/order within 1990 need verification. These are provisional targets **not covered** by Phase 06.
