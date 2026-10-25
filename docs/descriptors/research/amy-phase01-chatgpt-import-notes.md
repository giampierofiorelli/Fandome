# CLAUDE_IMPORT — Amy Winehouse Fandome Phase 01

This ZIP has **three new descriptors** and six files. GitHub branch `descriptors` was read-only checked on 2026-10-25. Amy artist ID `amy` is already present. There was NO existing `docs/descriptors/amy.csv`.

**Import sequence**

1. Add `amy_phase01_rows_ONLY.csv` rows to new `docs/descriptors/amy.csv` with exactly same 25 fields. Keep `amy-frank` and `amy-backtoblack` catalogue IDs unchanged.
2. Add a single new album to the `['amy','Amy Winehouse',...]` list in `src/data/catalog.ts`: `['Lioness: Hidden Treasures', 2011]`. Expected generated slug `amy-lionesshiddentreasures`.
3. Document sources, genre evidence, notes and catalog audit within `docs/descriptors/research/` (choose distinct phase names, never overwrite prior research).
4. New codes: `souljazz`, `popsoul`, `acidjazz`, `northernsoul`, `loversrock`. Add to `Genre` (`src/data/scenes.ts`), genre families (`src/data/genreFamilies.ts`), static validator GENRES (`scripts/validate-descriptors.ts`) and guide (`docs/album-descriptors-guide.md`). See evidence notes for family proposals and caution about track-only/comparison genres.
5. Run `npx vite-node scripts/validate-descriptors.ts` and full tests after adding catalog and types. Do not import as `reviewed`; score reasoning is editorial and requires independent second review.

**Album choices:** *Frank* (2003) and *Back to Black* (2006) are Amy's only completed studio albums. *Lioness: Hidden Treasures* (2011) is a notable **posthumous compilation**, never a third studio album. All live releases and simple deluxe/reissue configurations are excluded.

**Scope cautions:** UK original 2003 *Frank*, 11-track 2006 *Back to Black*; 12-track 2011 *Lioness*. `nusoul` normalizes source term `neo-soul`. `acidjazz` and `northernsoul` are reviewer comparisons/style references, *not* dominant genres. `loversrock` is a specific Lioness song historical arrangement reference. `mood` measures emotional colour, **not** rhythmic energy. Voice types depend on changing material and performances. Artist testimony grounds influence; critic sonic similarity alone is not sufficient.

**Verify:** *Frank* producers have edition/role differences (Jony Rockstar is additional producer). *Back to Black*: P*Nut vs John Harrison credits for *He Can Only Hold Her*. On *Lioness*, the final studio duet *Body and Soul* lists both Phil Ramone and Dae Bennett as producers in detailed credits. Inspect all before promoting rows to `reviewed`.
