# Trentemøller — Phase 03: Claude import instructions

**Increment-only snapshot:** researched through **24 October 2026**; **2 rows**; no earlier-phase rows.

## Included albums and IDs

1. `trentemoller-memoria` — **Memoria**, 2022, **studio**; **already in catalogue**, no addition needed.
2. `trentemoller-dreamweaver` — **Dreamweaver**, 2024, **studio**; **add to catalogue**, with exactly this title/year/type and id.

These are the **only** rows in `trentemoller_phase03_rows_ONLY.csv`. The artist is `Trentemøller` and its Fandome artist ID is `trentemoller`. Current branch read on 24 October contained only the 4 imported Phase 01 descriptors, including neither of these rows; Phase 02 is a separate unmerged ZIP and should be imported separately. Avoid re-importing its *Lost*, *Lost Reworks*, *Fixion*, *Obverse*. Import Phase 03 additively, not by replacing previous artist descriptors.

## Six files

- `CLAUDE_IMPORT.md` (this file)
- `trentemoller_phase03_rows_ONLY.csv`: strict 25-column header + 2 new rows.
- `trentemoller_phase03_sources.csv`: exact requested six columns; sources carry stable labels `M_*` or `D_*` in their `source` field.
- `trentemoller_phase03_genre_evidence.csv`: one ordered entry for **every** row genre, with album/subset/texture scope and source keys.
- `trentemoller_phase03_evidence-notes.md`: complete explanations, uncertainty, credits and disagreements.
- `trentemoller_phase03_catalog-audit.csv`: existing ID versus new addition.

## Genre integration

Genre tokens in these rows absent from the **current GitHub guide**: `krautrock`, `slowcore`, `indiedance`, `noiserock`, `spacerock`, `psychedelicrock`. The first **two** are already proposed for addition by the independent **Phase 02** archive, so do not create them twice if Phase 02 was imported. The **4 new tokens introduced here** (assuming Phase 02 imported first) are:

- `indiedance` ← `dance|indie`; specialist Magnetic Magazine review explicitly calls the Memoria hybrid *indie dance*, not alternative dance.
- `noiserock` ← `rock`; explicit hard guitar/noise-rock cuts on both albums.
- `spacerock` ← `rock` (or evaluate `prog|rock`); only *A Different Light* on Dreamweaver.
- `psychedelicrock` ← `rock`; cautiously scoped to the 1970s psych-rock **inspiration** and broadly psychedelic aesthetic of Dreamweaver; may merit editorial review before applying as a listening genre.

Claude must add any missing token to **both** `src/data/scenes.ts` and `src/data/genreFamilies.ts` plus to the validator's allowed GENRES. Existing tokens `dreampop`, `electronica`, `newwave`, `synthpop`, `electropop`, `postpunk`, `postrock`, `shoegaze`, `alt`, `indie` are not interchangeable, and should not be removed. `indiedance` for *Memoria* has **low strength**: Magnetic explicitly calls the album hybrid *indie dance*, but sustained dance-floor arrangements are scarce; review this as a genre with restricted scope, not a synonym for `alternativedance`. No category other than notes is limited in the number of values; notes are ≤15 words.

## Original editions, personnel, known conflicts

- *Memoria* was issued **11 February 2022** with 14 songs; Anders Trentemøller is the only evidenced producer, while Lisbet Fritze supplied vocals/guitar, Silas Tinglef instrumental performances. On *Dead Or Alive*, the credited singer is Trentemøller. English lyrics were written by Anders [M_BC,M_Q,M_OFF].
- *Dreamweaver* was issued **13 September 2024** with 10 songs; credited producer/mixer Anders Trentemøller. DíSA is primary singer and writer of lyrics for track **Dreamweavers**; all credits must distinguish composers, session players and mastering by Heba Kadry from producing [D_BC,D_Q,D_808].
- Genre evidence is album-sensitive. Very heavy songs or ambient closers cannot set whole-album energy/groove scores.
- OndaRock says 1 instrumental on Dreamweaver and Qobuz's prose 3, whereas Qobuz's *track-by-track named vocal credits* identify 2. The notes expose the conflict, not falsify unanimity.
- Italian/English variants of titles are not new works. The album is singular **Dreamweaver** vs the track/single plural **Dreamweavers**.
- The **self-titled Trentemøller album scheduled 13 November 2026 is still unreleased as of 24 October 2026** [D_2026]. Do not create a released album row for it yet.

## Validation and ordering

Import after/alongside the first two Trentemøller ZIPs but append **only these two new rows**. Preserve catalogue ID `trentemoller-memoria`. Add `trentemoller-dreamweaver` to the artist's album list. Integrate genre tokens across Fandome typed sources, validate `npx vite-node scripts/validate-descriptors.ts`, then run project tests. Confirm 25 columns, 2 rows, `status=draft`, 0–5 integers/blank and no duplicated album IDs. All sources file URLs were located in public search results; occasional regional streaming paywalls and editorial translation are marked in evidence notes. Do not claim second-person review occurred.

## What Phase 04 will contain

**Not yet eligible:** future self-titled studio album **trentemøller** due **13 November 2026**. When released and critically evaluated, create a separate new ZIP (Phase 04) with only newly released material; no duplicate Phase 01–03 rows. There is no other unreleased work in this package.
