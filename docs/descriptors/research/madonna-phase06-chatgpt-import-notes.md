# CLAUDE_IMPORT — Madonna Phase 06 (historical soundtrack backfill)

**READ FIRST:** Import precisely these TWO rows; this is a targeted addition after existing Madonna Phases 01–05, not a redo or chronological continuation of the main album run. Checked GitHub `descriptors` branch: `docs/descriptors/madonna.csv` currently contains 15 rows and none with these IDs; `src/data/seed.ts` has the same 15 album IDs; these two soundtracks are absent. Preserve all existing IDs and descriptors.

## Phase contents
1. `madonna-imbreathless` — **I'm Breathless**, 1990, `soundtrack` (original 12 tracks; film-inspired concept hybrid).
2. `madonna-evita` — **Evita**, 1996, `soundtrack` (complete original 31-track two-disc motion-picture score).

## Add to catalogue (both missing)
| ID | Title | Year | Type |
| --- | --- | --- | --- |
| `madonna-imbreathless` | I'm Breathless | 1990 | soundtrack |
| `madonna-evita` | Evita | 1996 | soundtrack |

Add to the existing seeded Madonna album list (same repository ID construction). These are *new* IDs based on artist id `madonna`. Do **not** alter the 15 existing rows. Data is ordered chronologically within Phase 06; earlier phases covered different albums already.

## New genre tokens (all attested in source evidence)
- `jazzpop`: Music genre aggregation explicitly uses Jazz Pop for *I'm Breathless*. Suggested parents: `['jazz','pop']`.
- `adultcontemporary`: AllMusic explicitly lists Adult Contemporary style for both albums. Suggested parents: `['pop']`.
- `rockopera`: contemporary Spanish reporting and album genre catalogue explicitly classify *Evita* as rock opera. Suggested parents: `['rock','showtunes']` (avoid confusion with classical opera).

Add these tokens to `src/data/scenes.ts`, display labels, `src/data/genreFamilies.ts`, and `scripts/validate-descriptors.ts`. Other included tokens already appear in current Genre union.

## Caveats and scope
- `I'm Breathless` may be called both a studio concept album and soundtrack; Fandome's `soundtrack` fits the officially film-linked release. Only three songs appeared in *Dick Tracy*. Do not overwrite its 1990 12-track scope with the original *Dick Tracy* film score.
- `Evita` originally appeared in 1996 in country-specific editions. Score the original **complete film soundtrack**, not the shorter **Selections/Music from the Motion Picture** highlights package or 1997 page dates.
- AllMusic identifies musical/pop/rock/dance labels in its genre taxonomy, but some are very broad; see explicit `scope` in genre evidence. `Vogue` is one track, not an album-wide house pivot.
- `I'm Breathless` producers (credited on different tracks): Madonna, Patrick Leonard, Bill Bottrell, Kevin Gilbert, Shep Pettibone. `Evita` original-score producers: Andrew Lloyd Webber, Nigel Wright, Alan Parker, David Caddick. Do not confuse producer roles with writer, conductor, engineer, executive producer or remixers.
- `sounds_like` for Evita and `influenced_by` for Evita are left empty. For I'm Breathless, the Salsoul Orchestra link is **specifically Vogue**, not the album's jazz core; the Marilyn Monroe comparison is editorial/timbral, not a direct influence.
- Numeric descriptors 0–5 are album-level *editorial* scores anchored to the project guide, not lab measurements. All rows are `draft`. Genre lists, voice/lyrics lists, producers/influence lists have **no cap**; `notes` alone max 15 words.

## File inventory
- `madonna_phase06_rows_ONLY.csv` — exact 25 columns and these 2 rows only.
- `madonna_phase06_sources.csv` — researched URLs, explicit claims and strength.
- `madonna_phase06_genre_evidence.csv` — one row per genre, scope and source keys.
- `madonna_phase06_evidence-notes.md` — 8 scales and non-obvious fields assessed per album; critical disagreement.
- `madonna_phase06_catalog-audit.csv` — original catalog status and proposed IDs.

## Import protocol
1. Recheck branch head for any concurrent changes, particularly the two new IDs.
2. Add new album catalogue rows, allowed genre tokens and genre-family entries; do not remove prior material.
3. Append exactly the two CSV rows to `docs/descriptors/madonna.csv` (never insert preceding Phase 01–05 rows again).
4. Save the phase research files in `docs/descriptors/research/`; keep provenance.
5. Run `npx vite-node scripts/validate-descriptors.ts` and the repository tests. If any validator issue arises, fix it in the repo or halt; do not quietly discard supported genres.

## Next phase
No automatic Phase 07 is needed for these two requested records. The optional next task is a **separate researched Madonna soundtrack gap audit** (e.g. *Who's That Girl*, 1987) only if the owner requests it; do not preemptively add compilation/soundtrack titles to this phase.
