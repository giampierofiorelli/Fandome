# CLAUDE_IMPORT — Roxette / phase 01

**Artist ID proposed:** `roxette`. The public Fandome `descriptors` branch has **no Roxette artist entry** in either `src/data/catalog.ts` or `src/data/seed.ts`, and no conflicting `roxette` id was found. Add a new artist room and album catalogue entries before running descriptor validation.

**Research date:** 28 October 2026. **Status:** 4 new `draft` rows, 27 exact columns.

## Import this phase only

1. `roxette-pearlsofpassion` — *Pearls of Passion* (1986), `studio`, add artist and album
2. `roxette-looksharp` — *Look Sharp!* (1988), `studio`, add album
3. `roxette-joyride` — *Joyride* (1991), `studio`, add album
4. `roxette-tourism` — *Tourism* (1992), `studio` (classification caveat below), add album

No Roxette album rows were found in `docs/descriptors/roxette.csv` (public raw path returns 404). The landmarks research file also contains no Roxette entry. Thus no previously completed Roxette album was skipped. If Claude has since added a private row, preserve the newer row and skip duplicate import.

## Additions required in the catalogue

All four phase-01 albums are absent in the public branch; the remaining relevant studio records are also absent. For full catalogue inventory and future batches see `roxette_phase01_catalog-audit.csv`.

## Genre / instrument / production token additions

**New genre tokens** (currently absent from `src/data/scenes.ts`):
- `europop` — album style identified by AllMusic.
- `adultcontemporary` — album style identified by AllMusic.
- `contemporarypoprock` — AllMusic's distinct 'Contemporary Pop/Rock' label; preserve label rather than silently rewriting it as plain pop-rock.
- `swedishpoprock` — AllMusic's distinct 'Swedish Pop/Rock' style, an admittedly location-specific taxonomy. Claude may decide to suppress geographic styles globally, but must do so consistently.

**New instrument tokens:** none.

**New production token:** `ensoniqesq1` — Ensoniq ESQ-1 synthesizer/sequencer, named by Per Gessle about writing 'The Look' (1988). Source: https://www.songwriteruniverse.com/per-gessle-roxette-2018/ . It is an explicit single-track production clue, not an inferred album-wide equipment inventory.

## ARTIST INFLUENCES — documented across the duo's work (phase 01 only)

These are artist-level musical roots, **not blanket album-level `influenced_by` values**. Keep the album column empty when a source does not tie the artist to that album or its recorded songs.

**Per Gessle:**
- **The Kinks, The Beatles, The Who:** Gessle names all three as foundational 1960s/1970s favourites. Interview: https://citycodemag.com/roxette-interview/
- **David Bowie, T. Rex, The Ramones, Patti Smith, Tom Petty & the Heartbreakers:** explicit first-person list of acts that inspired his musical direction. https://citycodemag.com/roxette-interview/
- **Herman's Hermits; Goffin and King (songwriting duo):** named by Gessle as songwriting influences on his pop outlook. https://www.fireworks-magazine.com/post/roxette-blast-from-the-past-jan-2021
- **ABBA and The Monkees:** Gessle identifies their pop language as a part of his artistic side. https://www.fireworks-magazine.com/post/roxette-blast-from-the-past-jan-2021
- **Joni Mitchell, Leonard Cohen, John Cale:** named as formative songwriters whose works he listened to or translated as he learned writing. https://www.fireworks-magazine.com/post/roxette-blast-from-the-past-jan-2021
- **Blondie and The Romantics:** named in a biographical account of Gessle's Swedish new wave/power-pop roots, based on a 1991 *Musician* interview. Secondary source: https://www.encyclopedia.com/education/news-wires-white-papers-and-books/roxette

**Marie Fredriksson:**
- **Aretha Franklin and Led Zeppelin:** Gessle identifies Marie's interest in the blues and these specific artists while explaining the combination that formed Roxette's sound. First-person interview: https://www.fireworks-magazine.com/post/roxette-blast-from-the-past-jan-2021
- **Billie Holiday:** identified as a central jazz-vocal influence by the Roxette biographical account. https://www.encyclopedia.com/education/news-wires-white-papers-and-books/roxette

**Clarence Öfwerman — producer, NOT an artist member:** Gessle says Öfwerman's progressive-rock listening included **Yes, Peter Gabriel-era Genesis and Gentle Giant**, influencing the producer's arrangements in the Roxette partnership. Do not conflate producer listening with Per/Marie's own influences. https://www.fireworks-magazine.com/post/roxette-blast-from-the-past-jan-2021

**Album-specific confirmed `influenced_by`:** For 'The Look' (1988), Gessle requested a guitar part in the style of **The Beatles' 'Taxman'** (originally *Revolver*) and guitarist Jonas Isacsson confirms the request for a **ZZ Top**-like rock-guitar tone. Sources: https://www.fireworks-magazine.com/post/roxette-blast-from-the-past-jan-2021 ; https://www.dailyroxette.com/jonas-isacsson-meets-the-daily-roxette/ . Distinguish references to entire albums from concrete track-specific influences.

## Caveats and classification decisions

- **Tourism (1992)** is a hybrid: original 16-track album has multiple new studio songs, hotel-room recordings and existing songs newly performed live. Label-era marketing calls it a 'tour album', and common discographies classify it as a fourth studio album; Album of the Year calls it a compilation. Fandome has no hybrid album type. `studio` is provisional and justified by substantial new studio material, **not a claim the entire release was studio-recorded**. Verify this exception with the owner if strictly excluding all releases with any live tracks.
- **The 1987 *Dance Passion*** is a brief collection of remixes of the debut's songs, not included (non-landmark remix). The unrelated 1984 *Heartland* export by **Gyllene Tider** was temporarily billed Roxette abroad but precedes the Marie/Per duo, so excluded under the pre-duo-name rule.
- **The 1996 *Baladas en Español*** is explicitly catalogued as a compilation of Spanish-language re-recordings, so excluded for now under 'no compilations'. If separately requested, its translations/re-recordings deserve a later special phase and must be reviewed song by song.
- **No PG Roxette** albums are merged: that is a later separately branded project.
- **Pearls of Passion:** 1997/2009 bonus reissues differ from 1986 original. Original 1986 album title and year retained; a Qobuz digital 'extended' source is used only for original tracks' credits.
- **Look Sharp!:** Adam Moseley produced 3 London-recorded tracks ('Cry', 'Chances', 'View from a Hill'), Clarence Öfwerman the other songs. 'Talkbox' on 'Dangerous' is track-specific (MusicBrainz); avoid asserting it is prevalent.
- **Joyride:** original liner credits name Clarence as producer; Anders Herrlin is programme/bass/engineering personnel, despite AllMusic sometimes labelling him a producer.
- **Tourism:** Anders Herrlin's producer tag comes from AllMusic album credits; original pressing commonly names Clarence alone. Claude should examine the exact track/liner credits before retaining Herrlin as a strict co-producer.
- **Genre taxonomy:** Four unrecognised but source-identifiable AllMusic tags are explicitly listed above. `pop`, `rock` are included only where published album genre/category text supports them, not inferred from national origin.
- **No co-billed duo projects** identified in the first four releases. Both members are part of one group (Roxette), not two separately credited artists.

## Next phase — Phase 02 (three albums)

1. *Crash! Boom! Bang!* (1994) — `roxette-crashboombang`
2. *Have a Nice Day* (1999) — `roxette-haveaniceday`
3. *Room Service* (2001) — `roxette-roomservice`

Then Phase 03: *Charm School* (2011), *Travelling* (2012), *Good Karma* (2016). Exclude ordinary greatest hits, live records, vault compilations and PG Roxette; review the status of *Baladas en Español* only on special request.
