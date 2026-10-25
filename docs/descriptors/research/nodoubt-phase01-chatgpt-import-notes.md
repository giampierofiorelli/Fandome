# CLAUDE_IMPORT — No Doubt / Fandome Phase 01

**Branch:** `descriptors` (read-only audit). Research date: 25 October 2026. Only the four new rows in this ZIP are to be appended/imported. No scripts or repository writes are included.

## Phase contents — four albums, chronological

1. `nodoubt-nodoubt` — **No Doubt** (1992), `studio`
2. `nodoubt-thebeaconstreetcollection` — **The Beacon Street Collection** (1995), `studio`
3. `nodoubt-tragickingdom` — **Tragic Kingdom** (1995), `studio`
4. `nodoubt-returnofsaturn` — **Return of Saturn** (2000), `studio`

## Catalogue action

- **Artist is missing** from `src/data/catalog.ts` (as inspected). Create artist ID `nodoubt`, display name `No Doubt`, suitable artist scene e.g. US / en / 1980 / `ska,punk,rock,pop` (subject to schema and your judgement). The `nodoubt` ID was derived using the documented naming convention; no existing catalogue ID could be preserved because this artist is not present.
- Add all **four** albums with exact title/year/type as above. `docs/descriptors/nodoubt.csv` was absent: these are not duplicates. Preserve original year and order for the two 1995 albums.
- The **album IDs** in rows are ready for the catalogue: they are `nodoubt-` plus lowercase alphanumeric title slugs.

## Co-billed albums

**None.** *The Beacon Street Collection* includes a guest vocal by Bradley Nowell of Sublime on `Total Hate '95`, but the album itself is credited only to No Doubt. No `coBilled.ts` entry is warranted.

## New genre tokens to add in `scenes.ts`, `genreFamilies.ts` and validator

| token | sourced wording | proposed parents | note |
|---|---|---|---|
| `skapunk` | Ska-Punk | `ska`, `punk` | Named by AllMusic; core early-band classification |
| `thirdwaveskarevival` | Third Wave Ska Revival | `ska`, `punk` | Named by AllMusic; do not conflate with original 2-Tone movement |
| `postgrunge` | Post-Grunge | `alternativerock` | A broad AllMusic genre-index value; lowest-weight in rows |
| `twotone` | 2 Tone | `ska`, `newwave` | Named on *Beacon Street* genre index; historic style tag, not scene membership |

The parent `ska` exists in the repo. If Claude finds some token already added in an updated branch, reuse it rather than duplicate. All other chosen genre tokens come from the inspected repository vocabulary.

## New production tokens

- `synthprogramming` — synthesizer programming, evidenced by *Return of Saturn* personnel credits. No synthesizer model inferred.
- `sonicmanipulation` — credited sonic manipulation editing on limited *Return of Saturn* tracks (liner-note transcription). **Verify exact edition and whether this passes your production-token threshold**. If not, omit this token and its row entry, not replace it by an invented technique.
- No new instrument tokens are required (`steeldrums` = credited steelpan; `mellotron`, `sitar`, `tabla` exist in the current list).

## Caveats

- Genre evidence explicitly uses **whole album / some tracks / texture**. Low-priority post-grunge and 2-Tone sources are flagged, not presented as leading sound.
- Production/gear tags apply only where credits or production accounts specifically support them. Empty production cells for the first two albums mean unknown techniques, **not zero production**.
- Original *No Doubt* (1992) album credited to Dito Godwin and No Doubt; *Beacon Street* to No Doubt; *Tragic Kingdom* to Matthew Wilder; *Return of Saturn* to Glen Ballard, Jerry Harrison, Matthew Wilder and No Doubt (different tracks/sessions).
- *The Beacon Street Collection* is a proper 1995 studio album despite the word “Collection”. Its self-release precedes *Tragic Kingdom* (Oct 1995). Remaster bonus tracks not considered.
- Lyrics/themes and numeric scores are independently reasoned, not falsely claimed as source quotations. Uncertain influences are confined to documented period interviews or qualified critics and explained in evidence-notes.
- Source URLs were retrieved from web results. The supporting genre file has a row for **every token of every album**.

## Files and import

- `nodoubt_phase01_rows_ONLY.csv` — exactly 27 columns, header + 4 new rows.
- `nodoubt_phase01_sources.csv` — sources with URLs and evidence-strength labels.
- `nodoubt_phase01_genre_evidence.csv` — album/token/scope/source for each genre.
- `nodoubt_phase01_evidence-notes.md` — values, instrument and production provenance, disagreement.
- `nodoubt_phase01_catalog-audit.csv` — four catalogue additions.
- `CLAUDE_IMPORT.md` — this file.

Import artist, four album catalogue entries and new tokens first; then descriptor rows. Run `npx vite-node scripts/validate-descriptors.ts` plus existing tests in repository. Do not insert Phase 01 rows twice.

## Next Phase 02

1. `nodoubt-rocksteady` — **Rock Steady** (2001), `studio`
2. `nodoubt-pushandshove` — **Push and Shove** (2012), `studio`

This phase covers all remaining No Doubt studio albums publicly released by 25 October 2026. Only include supplementary remix / collaboration / live material if it qualifies as a documented landmark after a separate evidence audit; do not pad to four rows.
