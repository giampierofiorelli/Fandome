# R.E.M. — Fandome Phase 01 (incremental research delivery)

**Artist:** R.E.M.  
**Proposed Fandome ID:** `rem` (confirmed ABSENT from `src/data/catalog.ts`, branch `descriptors`, 27 October 2026).  
**Cut-off:** 27 October 2026. **Import scope:** four new rows only (no earlier phases, no other artist). 

## Import order and phase contents

1. Create the missing artist entry/room with ID `rem`, display name `R.E.M.`. Existing catalog rows must not be overwritten.
2. Add all four Phase 01 releases to the catalog before invoking validator. The audit CSV also inventories all future main studio albums, currently missing because artist is absent.
3. Add missing genre tokens to `scenes.ts` **and** the corresponding `genreFamilies.ts` parent relationships before validation, if they remain absent.
4. Import only `rem_phase01_rows_ONLY.csv`. Production/source/genre evidence and audit files are support material and not album descriptors.

| album_id | title | year | type |
| --- | --- | ---: | --- |
| `rem-chronictown` | Chronic Town | 1982 | ep |
| `rem-murmur` | Murmur | 1983 | studio |
| `rem-reckoning` | Reckoning | 1984 | studio |
| `rem-fablesofthereconstruction` | Fables of the Reconstruction | 1985 | studio |

### Albums to add to the catalogue

All **16 original, eligible records** in the audit are missing: 15 R.E.M. studio albums (1983–2011) plus the landmark *Chronic Town* EP. Four get imported now, and the rest remain listed for later phases. This is an **artist addition**, not simply a missing album. See `rem_phase01_catalog-audit.csv` for IDs, years, and dates.

### Genre additions, instruments and production tokens

- **New genres:** `garagepop` (AllMusic describes *Reckoning* as a return to garage pop); `americanunderground` (AllMusic styles classification across early albums; scene / editorial taxonomy rather than a tight sonic genre). Suggested genre parents respectively `['garagerock','pop']`, `['indie']` if your hierarchy permits. Verify that parent tokens exist before inserting.
- Existing genres `alternativeindierock` and `alternativepoprock` preserve AllMusic's **two distinct** style labels, *Alternative/Indie Rock* and *Alternative Pop/Rock*; do not silently replace one with the other.
- **New instrument tokens:** none.
- **New production tokens:** none.
- *Fables of the Reconstruction* original masters have **no verified specific process/device** in our sources; its `production` cell is deliberately empty. The 2010 bonus **Athens demo** material was captured live with minimal overdubs, but that statement does not verify the recording approach for the original 1985 album masters.

## ARTIST INFLUENCES — primary statements (Phase 01 only)

These are **artist-wide musical touchstones**, not claims about any one album's source. Consequently, `influenced_by` cells remain empty until explicit **album-specific** attribution can be established.

| Artist | Documented evidence from R.E.M. member or an attributed interview | Source |
| --- | --- | --- |
| Patti Smith | Stipe explicitly says hearing *Horses* convinced him to sing and form a band; exceptionally direct influence. | https://pitchfork.com/features/5-10-15-20/michael-stipe-on-the-music-that-made-him/ |
| Television | Stipe places Television among the New York punk bands that altered his musical imagination, as a teenager. | https://thequietus.com/interviews/rocks-backpages/r-e-m-rem-interview-jon-savage/ |
| The Velvet Underground | Stipe expressly calls the group an **aspirational influence** on R.E.M.; independently reinforced by Buck discussing their early covers and musical affinities. | https://www.latimes.com/entertainment-arts/music/story/2021-10-15/michael-stipe-r-e-m-velvet-underground |
| Big Star | Mike Mills says the band's first two albums set a benchmark for what a four-piece should accomplish; **ambition/songcraft influence**, not a claim of imitation. | https://flagpole.com/music/music-features/2014/11/05/r-e-m-s-mike-mills-on-big-star-baseball-and-the-music-biz/ |
| The Byrds | On NPR *Fresh Air*, Buck recounts trying to imitate Roger McGuinn's guitar picking while learning; **with caveat** that in an earlier interview Buck rejected the easy '60s Byrds label. | https://freshairarchive.org/segments/accelerate-rem-hits-top-speed-again ; https://www.theguardian.com/music/2013/nov/20/rem-rocks-backpages-classic-interview |
| Wire | A profile says Buck and Stipe bonded over shared love of Wire and Television; journalist reports their preferences rather than a direct band quotation about arranging R.E.M. songs. **Lower confidence.** | https://www.independent.co.uk/arts-entertainment/music/features/michael-stipe-who-are-you-calling-an-elder-statesman-92203.html |
| The B-52's | Stipe discusses B-52's and Patti Smith as shaping R.E.M.'s early interests in interview material reported by Rolling Stone Germany; qualified secondary account. | https://www.rollingstone.de/michael-stipe-ueber-die-fruehen-einfluesse-von-r-e-m-2260349/ |

The Rock & Roll Hall of Fame also lists musical forebears but did **not** substitute its list for artist testimony: https://rockhall.com/inductees/rem/.

## Editions and credits caveats

- **Chronic Town** is a five-track original studio **EP**, not the later duplicate EP tracks appended to the *Dead Letter Office* CD. Original liner credits Mitch Easter **and R.E.M.** as record producers; David Healey is **executive** producer and must NOT be listed. Source: https://remhq.com/music/chronic-town/.
- The original *Chronic Town* liner states the October 1981 Drive-In sessions; retrospective Easter interviews refer to later re-recordings of *Wolves, Lower*. That doesn't change the 1982 release year. Source: https://www.udiscovermusic.com/stories/r-e-m-chronic-town-review/.
- *Murmur* liner explicitly credits the **two** producers Mitch Easter and Don Dixon, who recorded the 1983 Charlotte sessions. Its bonus-edition live tracks and reissue producers do not belong in these descriptors. Source: https://remhq.com/music/murmur/.
- *Reckoning* exact April 1984 release day differs among databases (9, 16, 19 April). CSV stores the uncontested year 1984, not a guessed day. Source: https://www.onamrecords.com/artists/r-e-m/discography/united-states/i-r-s-records/sp-70044/reckoning; https://www.allmusic.com/album/reckoning-mw0000191497.
- *Fables of the Reconstruction* has alternate packaging/side orientation but is one 1985 studio album. Joe Boyd is the **sole credited producer**. Guest violin, cello, trumpet and saxophone are genuine album credits, but are used on selected tracks only; string and horn **arrangements were not individually credited** in the accessible original liner, so no invented production techniques. Source: https://remhq.com/music/fables-of-the-reconstruction/.
- Style term **American Underground** is included as a source-named AllMusic label at low ranking; it is a scene descriptor, not treated as distinct timbral evidence. `garagepop` is sourced to AllMusic prose, not a fabricated tag.
- No live albums, compilations or duplicate recordings from expanded reissues are included. No co-billed release in this phase: `coBilled.ts` needs **no entries**.

## Next phase — Phase 02 (four albums)

**Lifes Rich Pageant** (1986), **Document** (1987), **Green** (1988), **Out of Time** (1991). The next ZIP must contain ONLY those four fresh descriptor rows, not this phase.

## Contents (6 files)

- `CLAUDE_IMPORT.md` (this file)
- `rem_phase01_rows_ONLY.csv` (27 columns; four rows)
- `rem_phase01_sources.csv` (traceable original liner notes, interviews, reviews)
- `rem_phase01_genre_evidence.csv` (one source/scope for every genre token)
- `rem_phase01_evidence-notes.md` (per-album scale/instrument/production reasoning)
- `rem_phase01_catalog-audit.csv` (all 15 studio albums + EP, plus explicit exclusions)
