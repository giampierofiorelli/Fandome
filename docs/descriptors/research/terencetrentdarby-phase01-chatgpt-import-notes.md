# CLAUDE IMPORT — Terence Trent D'Arby / Sananda Maitreya — phase 01

Prepared **28 October 2026**. **Incremental research pack, four new draft album rows**, 27 columns; no GitHub writes. CSVs UTF-8 with conventional comma separators. The album dates and full chronology are corroborated against the [official Sananda Maitreya catalogue](https://sanandamaitreya.com/sananda-maitreya-music/sananda-maitreya-discography/), [MusicBrainz](https://musicbrainz.org/artist/91f603ca-b126-42a2-9c29-820ca687347c) and [studio-discography listing](https://en.wikipedia.org/wiki/Terence_Trent_D%27Arby_discography).

## Artist id, duplicates and release identities

- Proposed artist ID: **`terencetrentdarby`**. Both `src/data/catalog.ts` and `src/data/seed.ts` (descriptors branch) were checked; neither contains **Terence Trent D'Arby** or **Sananda Maitreya**, and no id collision was found by text search.
- `docs/descriptors/terencetrentdarby.csv` and `docs/descriptors/sanandamaitreya.csv` returned **404**. No previously filled rows were skipped. The October 2026 landmarks file had no Terence Trent D'Arby/Sananda Maitreya match.
- This is **one person**: Terence Trent D'Arby changed his stage name to **Sananda Maitreya** in 2001. The official artist site retrospectively renames his first four releases. Preserve their **original 1987–95 release credits** in the historical titles and artists; do **not** create duplicate album rows under both names. For 2001 onwards, Claude should decide a single canonical Fandome artist identity and preserve the original release attribution in metadata. Do not merge two artist identities automatically without reconciling URLs and existing identifiers.

## Phase 01 — four new rows

| album_id | Original album title | Year | Type |
|---|---|---:|---|
| `terencetrentdarby-introducingthehardlineaccordingtoterencetrentdarby` | Introducing the Hardline According to Terence Trent D'Arby | 1987 | studio |
| `terencetrentdarby-neitherfishnorflesh` | Neither Fish nor Flesh | 1989 | studio |
| `terencetrentdarby-symphonyordamn` | Symphony or Damn | 1993 | studio |
| `terencetrentdarby-vibrator` | Vibrator | 1995 | studio |

## Catalog audit and additions

All studio albums below are absent from the currently checked Fandome files and require catalog additions. The accompanying audit CSV contains IDs and phase allocations; **only the first four are described in this ZIP**.

| Phase | Year | Studio album | Proposed ID |
|---|---:|---|---|
| 01 | 1987 | Introducing the Hardline According to Terence Trent D'Arby | `terencetrentdarby-introducingthehardlineaccordingtoterencetrentdarby` |
| 01 | 1989 | Neither Fish nor Flesh | `terencetrentdarby-neitherfishnorflesh` |
| 01 | 1993 | Symphony or Damn | `terencetrentdarby-symphonyordamn` |
| 01 | 1995 | Vibrator | `terencetrentdarby-vibrator` |
| 02 | 2001 | Wildcard | `terencetrentdarby-wildcard` |
| 02 | 2005 | Angels & Vampires – Volume I | `terencetrentdarby-angelsvampiresvolumei` |
| 02 | 2006 | Angels & Vampires – Volume II | `terencetrentdarby-angelsvampiresvolumeii` |
| 02 | 2009 | Nigor Mortis | `terencetrentdarby-nigormortis` |
| 03 | 2011 | The Sphinx | `terencetrentdarby-thesphinx` |
| 03 | 2013 | Return to Zooathalon | `terencetrentdarby-returntozooathalon` |
| 03 | 2015 | The Rise of the Zugebrian Time Lords | `terencetrentdarby-theriseofthezugebriantimelords` |
| 04 | 2017 | Prometheus & Pandora | `terencetrentdarby-prometheuspandora` |
| 04 | 2021 | Pandora's PlayHouse | `terencetrentdarby-pandorasplayhouse` |
| 04 | 2024 | The Pegasus Project: Pegasus & the Swan | `terencetrentdarby-thepegasusprojectpegasustheswan` |

### Special studio-release caveat

- The 2005/2006 **Angels & Vampires Volumes I and II** were originally released separately; the [official store](https://sanandamaitreya.com/sananda-maitreya-music/sananda-maitreya-discography/) also lists an **Angels & Vampires** combined project. Proposed audit maintains the original two issues pending checking the original metadata; don't add the combined reissue as a third studio album.
- **Wildcard** (2001) appears under both the old and new artist names, depending on edition. Deduplicate by *recording/release*, not printed stage name.
- **Early Works** (1989, The Touch with Terence Trent D'Arby) comprises archive material from his pre-solo German group; exclude under the instruction not to merge earlier work under another name. Separate The Touch cataloguing could be considered if the artist is added independently, but this is not a landmark solo album.
- Excluded: **Best Remixes** (1991), Greatest Hits / collections, original live and live EPs (e.g. 2025 Pegasus Project Live, 2026 SMNUK'25!), reissues and instrumental editions repeating existing albums. *Neither Fish nor Flesh* has the phrase "A Soundtrack of Love, Faith, Hope & Destruction" in its subtitle: it is **a studio album**, not a film soundtrack.
- No significant co-billed studio album in phase 01. Des'ree on *Delicate* is a **guest feature** only, not a co-billed album.

## New controlled vocabulary

- **Genres:** none. `contemporarypoprock`, `adultcontemporaryrnb`, `psychedelicfunk`, `progressivesoul`, `psychedelicsoul` and other row genres were checked against the current scene genre list.
- **Instruments:** `piccolo` — distinctly credited piccolo on *Symphony or Damn* (track *Turn the Page*), per the session credits: https://sessiondays.com/2020/06/26/1993-terence-trent-darby-terence-trent-darbys-symphony-or-damn/. Add the token to Fandome's instrument allow-list.
- **Production:** `scratching` — credited turntable-style scratching as a studio performance/technique on *Neither Fish nor Flesh*. Original AllMusic personnel credits use this name: https://www.allmusic.com/album/neither-fish-nor-flesh-mw0000654312. Add the production token; we purposely did not assume a specific turntable device.

## ARTIST INFLUENCES — artist statements with sources (NOT an album `influenced_by` list)

1. **2015, Songwriting Magazine interview** (https://www.songwritingmagazine.co.uk/interviews/sananda-maitreya): The Beatles are explicitly credited for inspiring him to make music. He separately lists **Motown acts, The Jackson 5, Stevie Wonder, Sam Cooke, Rod Stewart, The Rolling Stones, James Brown and Jimi Hendrix** in childhood; later **Bob Dylan, Tom Petty, Bruce Springsteen, Neil Young, Led Zeppelin, The Who, Donny Hathaway, Otis Redding, Todd Rundgren and Prince**. Group names and artists are kept distinct; Motown is a label/scene, not one artist.
2. **2003, This Is Not Retro interview** (https://www.thisisnotretro.com/interviews/terence-trent-darby-interview-2003/): he calls **Stevie Wonder and the Beatles** formative forces on his voice/harmonic writing; also singles out **J. S. Bach, Ludwig van Beethoven, Wolfgang Amadeus Mozart, John Lennon, Paul McCartney, The Rolling Stones, Sly Stone, Led Zeppelin, Jimi Hendrix, Bob Marley** as revered inspirations. In this source Lennon/McCartney are also members of the Beatles, so do not mechanically triple-count a Beatles-related influence.
3. **2024, Guardian interview with Dave Simpson** (https://www.theguardian.com/culture/2024/apr/05/sananda-maitreya-terence-trent-d-arby-i-hypnotised-myself-into-believing-i-was-a-genius): credits **the Beatles, the Rolling Stones, Jackie Wilson, Sam Cooke, Rod Stewart, Buddy Holly** and mentions the production of **Brian Wilson**; specifically says Rod Stewart's soul/rock combination showed him an artistic path.
4. **2024, It's Psychedelic Baby interview** (https://www.psychedelicbabymag.com/2024/09/sananda-maitreya-interview-new-album-the-pegasus-project-pegasus-the-swan.html): explicitly calls out **Stevie Wonder, The Beatles, The Rolling Stones, James Brown, Jimi Hendrix, The Beach Boys, Steely Dan, Aretha Franklin, Sam Cooke, Sly & the Family Stone, Michael Jackson/The Jackson 5, Bruce Springsteen, Prince, Miles Davis, Rod Stewart and Frank Sinatra** as deeply influential, with **Miles Davis** specifically described as a mentor.
5. **2021, Antakly Projects interview** (https://www.ninunina.com/interviews/2021/3/17/sananda-maitreya): named influences **The Beatles, The Rolling Stones, Rod Stewart, Stevie Wonder, Bob Dylan, Frank Sinatra, Sam Cooke, The Beach Boys, Jimi Hendrix, Marvin Gaye, Ella Fitzgerald, James Brown, Patsy Cline**.

**Strict distinction:** These are **artist-wide, often retrospective influences**. They cannot automatically populate the four album-specific `influenced_by` cells; all four cells are intentionally empty. Critics' sound comparisons with Prince, Sam Cooke, Marvin Gaye etc. are recorded under `sounds_like` and separately evidenced.

## Sources, subjective scores, uncertainties

- See `*_sources.csv` for album-specific working URLs; `*_genre_evidence.csv` contains a source and scope **for each genre token**; `*_evidence-notes.md` documents every non-obvious score, instrument, technique, producer distinction and divergent review.
- Original 1987 debut **Howard Gray** credit applies only to specific songs; **Martyn Ware** produced much of the album alongside D'Arby. The 1989/1993/1995 album releases credit D'Arby as producer. Engineers, mixers and featured artists were excluded.
- Release **month/day** conflicts between AllMusic, original territories and current reissues do not affect the **original release years** in this pack. Do not substitute 2022 reissue titles and dates for 1987 originals.
- Album 4 has critical disagreements about its success and arrangement density; `confidence=high` is about the agreement on available descriptions and credits, not about critical praise.
- Some **AllMusic** pages returned an automated **403** on direct opening, while search indexing exposed their album metadata and personnel excerpts. The **Songwriting Magazine** interview intermittently timed out on direct opening, although its indexed interview answer was retrieved. Reopen and verify those sources when importing; no full-page direct access is claimed here.
- `status` is `draft` throughout; Claude must run validator/tests after adding the artist, albums and controlled-vocabulary additions.

## Next phase 02

`Wildcard` (2001), `Angels & Vampires – Volume I` (2005), `Angels & Vampires – Volume II` (2006), `Nigor Mortis` (2009). All are under the continuing Sananda Maitreya identity; **none** is described here.


## Claude import note

- 4 rows imported; one artist id terencetrentdarby for the whole career (display: Terence Trent D'Arby (Sananda Maitreya)); catalogue 14 studio albums 1987-2024.
- Plain rock removed from Neither Fish nor Flesh (AllMusic: rock 'in the overall mix'; psychedelic funk/pop cover it) and Vibrator (poprock, funkrock cover it), per the owner's rule.
- piccolo mapped to flute; scratching moved to the instrument turntables (no new tokens).
- Scene US en 1980 soul,rnb,funk. Artist influences from his interviews (2003-2024).
- Reception researched by Claude.
