# Fandome import — Harry Styles — Phase 01

**Research cutoff:** 27 October 2026  
**Artist ID:** `harrystyles`  
**Scope:** three chronologically first **released studio albums**, no live records, compilations or previous-phase rows.  
**Status:** all descriptors `draft`; editorial review by Claude required.  
**GitHub:** `descriptors` branch inspected read-only; `docs/descriptors/harrystyles.csv` was not present.

## Phase contents: three new rows

| album_id | Album | Year | Type | In catalogue? |
|---|---|---:|---|---|
| `harrystyles-harrystyles` | *Harry Styles* | 2017 | studio | yes |
| `harrystyles-fineline` | *Fine Line* | 2019 | studio | yes |
| `harrystyles-harryshouse` | *Harry’s House* | 2022 | studio | yes |

## Albums to add to `src/data/catalog.ts`

| Proposed ID | Title | Year | Type | Why |
|---|---|---:|---|---|
| `harrystyles-kissallthetimediscooccasionally` | *Kiss All the Time. Disco, Occasionally.* | 2026 | studio | Fourth album, officially released 6 March 2026, absent from branch `descriptors` catalog at research time. |

Official label source: https://www.sonymusic.ca/press_release/harry-styles-kiss-all-the-time-disco-occasionally-available-everywhere-today.

## Co-billed albums

**None** found qualifying as a Harry Styles solo co-billed album in the selected period. The *Harry's House* collaborators and *Fine Line* collaborators receive track credits but are not co-billed release artists. No `coBilled.ts` change required.

## New tokens for Claude

**Genres:** `citypop` — Japanese city-pop influence specifically identified by a published review of *Harry's House*; evidence source https://popalbumreviews.com/albums/harry-styles/harrys-house/review. Keep late because source describes influence rather than the album’s dominant style; consider omitting at second-person review if the bar for adding a genre is higher.  
**Instruments:** none (all instrument tokens used in these rows already appear in repository's guide, or supplied allowed list).  
**Production:** none.

Genre names remain distinct: `synthpop` is not `electropop`; no semantic substitutions were made. Source named terms restricted to tracks are ordered later in each album's genre list.

## ARTIST INFLUENCES — sourced, career-wide (phase 01 only)

These are artists **Harry Styles himself identified** as formative musical references; they are *not automatically inserted into every album’s `influenced_by` field*.

| Artist | Primary source / what Styles said |
|---|---|
| The Rolling Stones | NPR interview: named among the artists heard while growing up. https://www.kpbs.org/news/2020/02/27/harry-styles-on-fine-line-stevie-nicks-and-his |
| The Beatles | Same NPR interview, formative family listening. https://www.kpbs.org/news/2020/02/27/harry-styles-on-fine-line-stevie-nicks-and-his |
| Fleetwood Mac | Same NPR interview; named and singled out “Dreams” as an early favorite. https://www.kpbs.org/news/2020/02/27/harry-styles-on-fine-line-stevie-nicks-and-his |
| Queen | Same NPR interview, early musical exposure. https://www.kpbs.org/news/2020/02/27/harry-styles-on-fine-line-stevie-nicks-and-his |
| Elvis Presley | Same NPR interview, childhood listening. https://www.kpbs.org/news/2020/02/27/harry-styles-on-fine-line-stevie-nicks-and-his |
| Shania Twain | Same NPR interview, childhood listening. https://www.kpbs.org/news/2020/02/27/harry-styles-on-fine-line-stevie-nicks-and-his |
| Savage Garden | Same NPR interview, childhood listening. https://www.kpbs.org/news/2020/02/27/harry-styles-on-fine-line-stevie-nicks-and-his |
| Norah Jones | Same NPR interview, childhood listening. https://www.kpbs.org/news/2020/02/27/harry-styles-on-fine-line-stevie-nicks-and-his |

*Album-specific, independently sourced*: He sought out a dulcimer maker associated with Joni Mitchell for *Fine Line* (https://www.musicweek.com/interviews/read/this-is-definitely-the-most-excited-i-ve-been-harry-styles-the-music-week-interview/078350). Haruomi Hosono's 1973 *Hosono House* specifically influenced the creation of *Harry's House* (https://www.rollingstone.co.uk/music/harry-styles-the-worlds-most-wanted-man-rolling-stone-interview-21656/). David Bowie's inspirational example for the 2017 single “Sign of the Times” is described in https://www.nme.com/reviews/album/harry-styles-fine-line-review-packed-with-personality-and-charm-and-saucy-lyrics-2584779; source is critical attribution, rather than a direct artist quotation.

## Caveats and handoff

- The first three record IDs match the catalogue's artist-plus-title lowercase alphanumeric construction. Apostrophe and curly apostrophe in *Harry’s House* are stripped in `harrystyles-harryshouse`.
- Source CSV distinguishes actual producers/co-producers from engineers, instrumentalists, writers and executive-only credits. For 2017, Bhasker's executive credit is supplemented by music-release **track producer** credits; otherwise executive credit alone would be insufficient.
- Modern digital and original physical editions do not create duplicate album rows. Remix/single/live editions were excluded.
- Some track-credit databases may throttle (MusicBrainz rate limiting), so full album credits for *Harry’s House* are also mirrored in Pitchfork's 20 May 2022 primary-credit transcription.
- The 27-column CSV uses `status=draft` throughout and no notes field exceeds 15 words.
- `instruments` and `production` are sourced from this album’s credits/reviews, never inferred from genre. Scales are documented editorial judgments.
- Sources and genre-specific scopes are in their respective CSVs; nuanced decisions and disagreements are in the evidence notes.

## Next phase — Phase 02

**One remaining released studio album:** *Kiss All the Time. Disco, Occasionally.* (2026), released **6 March 2026**. A phase with one album is the necessary chronological remainder, rather than padding the file with live albums, singles, or repeat rows. Phase 02 must first add this album to `catalog.ts`.
