# Fandome import — Fontaines D.C., Phase 01

Research cutoff: **26 October 2026**. This ZIP is strictly incremental: **three studio albums only**. All descriptor rows are `draft`.

## Phase contents

| album_id | Title | Year | Type |
|---|---|---|---|
| `fontainesdc-dogrel` | Dogrel | 2019 | studio |
| `fontainesdc-aherosdeath` | A Hero's Death | 2020 | studio |
| `fontainesdc-skintyfia` | Skinty Fia | 2022 | studio |

## Essential import prerequisite: missing artist room

The supplied branch `descriptors` contains **no Fontaines D.C. row in `src/data/catalog.ts` or `src/data/seed.ts` and no `docs/descriptors/fontainesdc.csv`** as inspected on 26 October 2026. The artist id `fontainesdc` is therefore a **proposed, not an existing, id**. Add the artist to the catalogue and seed first; match that exact id (or consistently remap all five album ids if Claude's design requires a different id). Validator will reject these descriptors without a matching artist/album in seed.

Catalogue references: https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/catalog.ts ; https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/seed.ts; https://github.com/giampierofiorelli/Fandome/tree/descriptors/docs/descriptors.

## Released studio albums to add to catalogue

All five are currently missing, according to the retrieved branch. Phase 01 includes only the first three, Phase 02 will describe the remaining two. Official release list: https://fontainesdc.com/pages/music.

| Title | Year | Type | Proposed ID | Phase |
|---|---:|---|---|---|
| Dogrel | 2019 | studio | `fontainesdc-dogrel` | 01 |
| A Hero's Death | 2020 | studio | `fontainesdc-aherosdeath` | 01 |
| Skinty Fia | 2022 | studio | `fontainesdc-skintyfia` | 01 |
| Romance | 2024 | studio | `fontainesdc-romance` | 02 |
| Dopamine Chamber | 2026 | studio | `fontainesdc-dopaminechamber` | 02 |

**Original releases (official):** 12 April 2019; 31 July 2020; 22 April 2022; 23 August 2024; 16 October 2026. The last album had been released **ten days** before the research cutoff. Do **not** exclude it as a future release. No live recordings, greatest-hits sets or later reissues are included. The early two-song singles and extra versions are not treated as independently important EPs.

## Co-billed albums

**None** among the five original studio albums; no `coBilled.ts` entry is requested. A 2026 standalone collaboration single with Rosalía is excluded from the album research. No post-2018 pre-album tracks are promoted into separate albums.

## New tokens to create before validation

- **Genres:** `artpunk` (art-punk), `garagepsych` (garage-psych), `crankwave` (crank wave), `punkblues` (punk-blues), `gothgaze` (gothgaze), `industrialfunk` (industrial funk). Each source and whole-album/track scope is in the genre evidence file. AOTY's `crankwave` is an editorial/community genre tag (medium evidence), not an artist statement.
- **Instruments:** `clavioline` (monophonic electronic keyboard credited in A Hero's Death and Skinty Fia; O'Connell also recalls using it on Dogrel); `xylophone` (credited on Skinty Fia — Big Shot). Do not collapse clavioline into organ or synth; do not silently collapse xylophone into generic `mallets`.
- **Production:** `swarmatron` (credited Dan Carey analogue synth on all three), `buchlamusiceasel` (Dogrel; credited Buchla Music Easel), `moogone` (A Hero's Death; credited Moog One), `enzofx` (A Hero's Death; MusicBrainz calls the effect **Enzo FX** without definitively naming a maker), `industrialectricechodegrader` (Skinty Fia; Conor Curley's studio pedal). Create exactly these lower-case IDs, and use `production.ts` display labels. `logic` is intentionally **absent**: a Logic demo for Nabokov is *not* evidence that Logic produced the released master.

## ARTIST INFLUENCES (phase 01 only; documented statements)

Artist-level influences are not automatically copied to every album. Documentary status is distinguished from resemblance and from direct contributions.

| Artist/band | Documentary evidence | Source |
|---|---|---|
| The Dubliners | Band says directly “Our influences include the Dubliners and Girl Band.” | https://soyoungmagazine.com/who-are-you-fontaines-d-c/ |
| Girl Band (now Gilla Band) | Same self-description in 2018; also discussed as a formative Dublin-band example. | https://soyoungmagazine.com/who-are-you-fontaines-d-c/ ; https://stereogum.com/2028289/fontaines-d-c-dublin-dogrel-interview/interviews/band-to-watch |
| The Pogues | Band says *Rum, Sodomy & the Lash* is near the heart of their shared artistic outlook. | https://soyoungmagazine.com/who-are-you-fontaines-d-c/ |
| The Rolling Stones | Band cites their obsession with Rolling Stones records while forming their sound. | https://soyoungmagazine.com/who-are-you-fontaines-d-c/ |
| The Beach Boys | Carlos O'Connell describes the band as deeply into their music and its surf elements, years before album two. | https://readdork.com/news/fontaines-d-c-interview-nov18 |
| Sinéad O'Connor | Chatten explains precisely how her songs informed the writing and vocal approach on Skinty Fia. | https://stereogum.com/2183192/fontaines-dc-skinty-fia-influences/interviews/under-the-influence |
| Primal Scream | Curley says *XTRMNTR*, notably Accelerator, informed rhythmic/guitar thinking for Skinty Fia. | https://stereogum.com/2183192/fontaines-dc-skinty-fia-influences/interviews/under-the-influence |
| Cocteau Twins | Curley identifies Robin Guthrie's playing as an ideal to pursue on Skinty Fia. | https://stereogum.com/2183192/fontaines-dc-skinty-fia-influences/interviews/under-the-influence |
| My Bloody Valentine | Curley explicitly links the band's expansive guitar aims to My Bloody Valentine. | https://stereogum.com/2183192/fontaines-dc-skinty-fia-influences/interviews/under-the-influence |
| Warm Drag | Curley describes sample-style guitar thinking inspired by this band's approach. | https://guitar.com/features/interviews/fontaines-dc-guitarists-conor-curley-carlos-oconnell-new-album-skinty-fia/ |
| Suicide | O'Connell directly names the band's electronic noise as inspiration for Living in America. | https://stereogum.com/2092383/the-story-behind-every-song-on-fontaines-d-c-s-new-album-a-heros-death/interviews |
| Cabaret Voltaire | O'Connell names the band alongside Suicide for Living in America. | https://stereogum.com/2092383/the-story-behind-every-song-on-fontaines-d-c-s-new-album-a-heros-death/interviews |
| Spacemen 3 | O'Connell reports direct musical inspiration for abrasive guitars on Living in America. | https://stereogum.com/2092383/the-story-behind-every-song-on-fontaines-d-c-s-new-album-a-heros-death/interviews |
| The Brian Jonestown Massacre | O'Connell directly describes You Said as inspired by this band's musical approach. | https://stereogum.com/2092383/the-story-behind-every-song-on-fontaines-d-c-s-new-album-a-heros-death/interviews |
| Lee Hazlewood | Chatten cites the producer/songwriter's escapist musical world as an attraction during A Hero's Death. | https://www.nme.com/big-reads/fontaines-dc-cover-interview-2020-a-heroes-death-2682101 |

The Guardian and Pitchfork also *compare* songs to Joy Division, The Smiths, The Verve, Gang of Four and others. Unless the musicians explicitly claim inspiration, those names remain in `sounds_like` rather than `influenced_by`.

## Interpretation and editorial caveats

1. **Album scales are editorial judgments** based on contemporaneous criticism, interview accounts, recording method and track contrasts. They are not numerical measurements copied from reviews.
2. The `sounds_like` field is sonic comparison, not a historical influence claim. The sources file supports the comparisons where a critic names them.
3. **Genre evidence uses scopes**: `whole album`, `some tracks`, `texture`. Later token values never override the dominant post-punk/rock identity. `jungle` on *Skinty Fia* is a track-level drum-pattern descriptor, not an assertion that the record is primarily jungle.
4. *Dogrel*: 2018 single versions are distinct from some subsequently re-recorded LP versions. Dan Carey recorded groups of songs live to tape, but X-Press also documents two days of overdubs. `liverecording` does not mean a concert album.
5. *A Hero's Death*: an earlier Los Angeles attempt with Nick Launay was discarded; the credited released album producer is **Dan Carey alone**. Dan Carey used a modular synth/filter to affect an added room amplifier, but unnamed hardware models are not guessed. Abbey Road's Christian Wright mastered the album; he is **not** a producer. A disputed Metacritic summary incorrectly attributes the final record to a Los Angeles production: prefer direct Carey interview and credits.
6. *Skinty Fia*: MusicBrainz lists **clavioline** and **xylophone** on tracks, even though review coverage foregrounds accordion and guitars. Stereogum mentions 'gated effects' on drums; that description is insufficient to tag exact `noisegating`. Guitar.com identifies Logic for an early demo, not necessarily the mastered album.
7. *Skinty Fia* is predominantly sung in English, but the repeated sung Irish-language refrain **“In ár gCroíthe go deo”** justifies secondary `ga`.
8. AOTY labels are included only when they match a named genre; they have **medium** evidence relative to first-party credits and direct interviews. The genre lists are deliberately detailed, and track-only tags have low position in the `genres` field.
9. `notes` values are original text of **no more than 15 words**. All 27-column CSV rows are only this phase. No compiled scripts are included.

## Next phase

**Phase 02 (final, 2 studio albums):** *Romance* (2024) and *Dopamine Chamber* (2026). Two rather than three, because these are the only remaining released studio albums; do not pad with live sets, compilations or unreleased material. Producer/gear/genre review will be independent of these Phase 01 rows.
