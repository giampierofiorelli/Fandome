# CLAUDE IMPORT — Yazoo / Phase 01 (complete original studio discography)

**Date:** 27 October 2026. GitHub branch `descriptors` read-only. Verified `src/data/catalog.ts`, `src/data/seed.ts`, `src/data/coBilled.ts`, `docs/descriptors/yazoo.csv`, album guide, genre / instrument / production taxonomies and the landmark research index. Existing `docs/descriptors/yazoo.csv` returned 404. No earlier descriptor rows were found for these albums.

## Phase contents and exact IDs

| album_id | album title (exact catalog) | year | type | in catalogue |
|---|---|---:|---|---|
| `yazoo-upstairsaterics` | *Upstairs at Eric’s* | 1982 | `studio` | yes |
| `yazoo-youandmeboth` | *You and Me Both* | 1983 | `studio` | yes |

Both records are already catalogued under **`yazoo`**. `seed.ts` does not override this ID. Preserve existing original 1982 curly apostrophe `Eric’s`; do not use a separate `yaz` artist ID for the North American billing. Both rows are new and `draft`.

## ZIP files (six, exactly)

- `yazoo_phase01_rows_ONLY.csv` — 2 new descriptor rows, exact current 27 columns.
- `yazoo_phase01_sources.csv` — per-record independent sources, with relevant scope and confidence.
- `yazoo_phase01_genre_evidence.csv` — one entry per listed genre, with `whole album` / `some tracks` scope.
- `yazoo_phase01_evidence-notes.md` — dates, gear, voice, numerical scores, original releases, unusual credit qualifications.
- `yazoo_phase01_catalog-audit.csv` — original two album IDs and excluded compilation/live/single/reissue titles.
- `CLAUDE_IMPORT.md` — instructions, artist influences, caveats.

Import only `rows_ONLY.csv` into Fandome, using companion sources as evidence. Validate with `npx vite-node scripts/validate-descriptors.ts` and Fandome tests. **No repository changes were made.**

## Catalog additions

**None.** Both studio albums and exact IDs already exist. There is no third original Yazoo studio album. No previously completed Yazoo descriptor rows were skipped.

## Co-billed releases

**None.** Yazoo is itself an official duo, comprising Vince Clarke and Alison Moyet, not a co-billing of their *separate* solo artists. *The Sapphires* are credited with backing vocals for “Walk Away From Love”; they are not a separately billed album artist. **No changes to `coBilled.ts`.**

## New taxonomy tokens

**None.** All chosen genres (`synthpop`, `newwave`, `electropop`, `dancepop`, `alternativedance`, `electronic`, `soul`, `funk`), instruments (`synth`, `drummachine`, `sequencer`, `keyboards`, `piano`, `synthbass`) and production tokens (`synthprogramming`, `drumprogramming`, `tr808`, `jupiter4`, `sequentialproone`, `rolandmc4`, `tapeloops`, `overdubbing`) exist in the `descriptors` branch as verified 27 October 2026.

## ARTIST INFLUENCES — primary testimony, not mere similarity

- **Orchestral Manoeuvres in the Dark** — Vince Clarke identified OMD and their **first album**, *Orchestral Manoeuvres in the Dark* (1980), as formative inspiration for making pop with synths. Sources: [MusicRadar interview with Clarke](https://www.musicradar.com/news/vince-clarke-im-not-a-good-enough-keyboard-player-to-write-on-the-synth), [Clarke in Synthtopia](https://www.synthtopia.com/content/2008/07/07/vince-clarke-talks-synthesizers-analog-virtual/). Album link when appropriate: `Orchestral Manoeuvres in the Dark (Orchestral Manoeuvres in the Dark)`.
- **The Human League** — Clarke specifically singled out their *early, pre-female-singers records*, meaning *Reproduction* (1979) and *Travelogue* (1980), as strongly influential. Source: [Synthtopia interview](https://www.synthtopia.com/content/2008/07/07/vince-clarke-talks-synthesizers-analog-virtual/); corroboration [2017 MusicRadar interview](https://www.musicradar.com/news/vince-clarke-im-not-a-good-enough-keyboard-player-to-write-on-the-synth). **Do not attach *Dare* as their identified inspiration.**
- **The Normal** — Clarke says Daniel Miller's early single as The Normal made him pay attention to the sounds of synthesizers and their punk-like minimalism. Source: [MusicRadar first-person interview](https://www.musicradar.com/news/vince-clarke-im-not-a-good-enough-keyboard-player-to-write-on-the-synth). Do not invent an album by The Normal: the decisive early release was a single.
- **Soft Cell** — Clarke recalls early records by Soft Cell among the records sparking the local scene and his own electronic experiments; **not** enough to tie a particular Yazoo song to a particular Soft Cell album. Source: [MusicRadar 2023 interview](https://www.musicradar.com/news/vince-clarke-interview).
- **Muddy Waters** — Alison Moyet says she sought the roots of electric blues in Waters' music before forming Yazoo. Source: original [Rip It Up interview, 1 December 1982, archived by New Zealand National Library](https://paperspast.natlib.govt.nz/periodicals/RIU19821201.2.24).
- **Sonny Boy Williamson** — Moyet explicitly lists him among the blues artists from whom she developed her listening and singing. Source: [Rip It Up, 1982](https://paperspast.natlib.govt.nz/periodicals/RIU19821201.2.24). “Sonny Boy Williamson” is ambiguous: record-link resolution should **not automatically assume Williamson I vs II** without additional specific identification.
- **Howlin’ Wolf** — Moyet explicitly names Howlin’ Wolf among musicians she went back to when exploring R&B roots. Source: [Rip It Up, 1982](https://paperspast.natlib.govt.nz/periodicals/RIU19821201.2.24); corroboration her detailed [2011 Quietus interview](https://thequietus.com/interviews/alison-moyet-interview-yazoo/) on the rough male blues vocal model.
- **Dr. Feelgood** — Moyet recalls attending their R&B shows, which inspired her early musical direction. Source: [Rip It Up, 1982](https://paperspast.natlib.govt.nz/periodicals/RIU19821201.2.24). Precise recording influence on a given Yazoo cut is **not confirmed**.
- **Lew Lewis** — Moyet also identifies Lew Lewis in her R&B live-listening experience before Yazoo. Source: [Rip It Up, 1982](https://paperspast.natlib.govt.nz/periodicals/RIU19821201.2.24).

These are the artists **the duo themselves cited**, not artists listed only because critics compared sounds. **Do not add Depeche Mode or Erasure as Yazoo influences on the basis that Clarke was a member, before or after.** Clarke's collaborators / Mute producer Daniel Miller and guest vocals by the Sapphires are not automatically influences. `sounds_like` is an independent similarity judgement, including some later-era artists, and is not evidence of historical influence.

## Important edition / credit checks

- `Upstairs at Eric’s` **UK Mute LP (1982, 11 original songs)** excludes “Situation”. Some original US and later editions add “Situation”; avoid double-counting this bonus and do not use it alone for an original LP criterion. UK original [official tracklist](https://www.alisonmoyetmusic.com/upstairs-at-erics/).
- `You and Me Both` **UK Mute LP (1983)** includes “Happy People” (track 10). Some North American pressings replace it with “State Farm”. UK original [official tracklist](https://www.alisonmoyetmusic.com/you-and-me-both/).
- Album-level producer on both original UK LPs: **`Yazoo|Eric Radcliffe`**, matching official Moyet discography. Although later music databases give Daniel Miller **producer on some individual tracks**, original sleeve also assigns him merely **additional production** on parts of the first album. Album production must not be casually generalised from these song-level relationships. John Fryer was the **engineer** on sessions, not overall credited producer.
- Vince's 1982 debut setup is well documented: **Roland TR-808, Jupiter-4, Pro-One, MC-4**. The 1983 record has verified synths, drum machines and sequencing but the exact same hardware models are *not* independently documented for those sessions, so its row avoids a falsely specific machine list. Do not import later instruments he used with Erasure (Fairlight stage rig etc.) into the 1982–83 LPs.
- `lyric` and `genre` evidence may be track-limited; every genre in `rows_ONLY.csv` has a corresponding scope and link in `genre_evidence.csv`.
- `confidence=high` on both rows reflects consistently documented album identities, genres, production and broad instrumentation; uncertainty around fine details is documented rather than solved by guessing. Both remain `draft` awaiting second review.
- Exclude all later live albums, remix compilations and box sets even if they are landmark collectibles. `Yaz` (US branding) is the **same** artist, not a collaboration.

## Next phase

**None required.** *Upstairs at Eric’s* (1982) and *You and Me Both* (1983) are the duo's entire original studio-album discography. Further work only if the owner explicitly requests single/EP, session, remix or reunion material.
