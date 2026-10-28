# CLAUDE IMPORT — Bonnie Tyler / Phase 01

Branch: `descriptors`. Research delivery only; no changes have been made to GitHub.

## Artist and catalog audit

Proposed artist ID: `bonnietyler`. Neither `src/data/catalog.ts` nor `src/data/seed.ts` contained Bonnie Tyler when checked on 28 October 2026, and `docs/descriptors/bonnietyler.csv` did not exist. No already-described Bonnie Tyler studio album is being repeated. The catalog audit includes the current batch and an indicative later-phase backlog.

| Album ID | Original album | Year | Type | Action |
|---|---|---|---|---|
| `bonnietyler-theworldstartstonight` | The World Starts Tonight | 1977 | studio | ADD |
| `bonnietyler-naturalforce` | Natural Force | 1978 | studio | ADD |
| `bonnietyler-diamondcut` | Diamond Cut | 1979 | studio | ADD |
| `bonnietyler-goodbyetotheisland` | Goodbye to the Island | 1981 | studio | ADD |

All four rows are new and `draft`. None is live, a greatest hits album, or co-billed. No genre, instrument or production token additions are necessary.

## ARTIST INFLUENCES — documented, artist-wide

- **Tina Turner**. Bonnie Tyler named her as a singer who shaped her love of powerful, soulful vocals: https://bonnietyler.com/news/bonnie-tyler-talks-women-in-music/ and her own retrospective remarks in https://www.goldminemag.com/interviews/power-ballad-singer-bonnie-tyler-feels-the-title-is-perfect-for-her-latest-album-the-best-is-yet-to-come
- **Janis Joplin**. Tyler credits Joplin's emotive vocal interpretation as formative in the same direct statements: https://bonnietyler.com/news/bonnie-tyler-talks-women-in-music/ and https://www.goldminemag.com/interviews/power-ballad-singer-bonnie-tyler-feels-the-title-is-perfect-for-her-latest-album-the-best-is-yet-to-come

These artist-wide statements are *not* proof that either specifically influenced the recording/arrangements of all four albums. Consequently the per-album `influenced_by` cells remain blank. Covers (including "Piece of My Heart" and "(You Make Me Feel Like) A Natural Woman") are not themselves influence evidence. `sounds_like` entries are editorial sonic comparisons, not producer or collaborator credits.

## Edition, personnel and production caveats

- **The World Starts Tonight:** Use the original 1977 ten-track album, not bonus tracks on later CDs. Producers Ronnie Scott, Steve Wolfe and David Mackay; latter also arranged strings. The debut predates the major post-surgery change in vocal character: do not homogenise its singing with the later 1980s bombast. Sources: https://www.allmusic.com/album/the-world-starts-tonight-mw0000842694 and https://sessiondays.com/2017/01/28/1977-bonnie-tyler-world-starts-tonight/
- **Natural Force:** US release is *It's a Heartache*, a regional retitling of the 1978 album, not a separate 1978 studio album. The album’s early RCA session credits identify Steve Wolfe (guitar/vocals), Kevin Dunne (bass), Micky Gibbins (drums), with additional contributions identified in sleeve transcriptions. Some secondary discography transcriptions differ on the drummer (Simon Phillips versus Micky Gibbins); prefer original/recording-specific MusicBrainz credits, and **do not assign a single named drummer across the whole album based on those conflicting summaries**. Sources: https://musicbrainz.org/release/b35539ca-c423-47b4-be0b-99725cead634 and https://www.allmusic.com/album/its-a-heartache-mw0000376169
- **Diamond Cut:** AllMusic credits Robin Geoffrey Cable, Ronnie Scott and Steve Wolfe for production, and documents extensive guitar, rhythm, saxophone, harmonica, mandolin, steel/slide guitar and occasional Moog colour. Session credits for some musicians on later expanded editions should not be used to infer that bonus tracks belong to the original LP. Sources: https://www.allmusic.com/album/diamond-cut-mw0000840913 and https://drummerszone.com/music/release/16710/diamond-cut
- **Goodbye to the Island:** Sessions began in 1979; the final LP was issued 28 January 1981. Official retrospective describes rerecording during 1980, two production groups (Hugh Murphy alone / Hugh Murphy with Ronnie Scott and Steve Wolfe), and the ensemble including saxophonist Raphael Ravenscroft and players linked with Gerry Rafferty. CSV records all *credited* producers without implying all produced every track. Do not classify Procol Harum and Chris Rea as influences: one is covered and the other supplied a song. Sources: https://bonnietyler.com/news/celebrating-40-years-of-goodbye-to-the-island/ and https://musicbrainz.org/release/81a5a229-f4d9-417d-8392-7ed7aff25f27
- **`production` blanks:** A studio-era recording is not automatically evidence for the `analogtape` descriptor; avoid invented machine models, overdubbing claims and digital processing. Empty cells mean no album-specific technique confidently established by the sources consulted.
- **Genre coverage:** `genre_evidence.csv` marks editorial/track-specific genres with `selected_tracks` or `texture`, rather than disguising them as explicit whole-album classifications. Use the genre evidence to review uncertain long-tail tags. Numeric scales are independent expert judgments, not publisher ratings.

## Archive files and import

1. `CLAUDE_IMPORT.md` — these instructions and caveats.
2. `bonnietyler_phase01_rows_ONLY.csv` — exactly four new rows, 27 columns.
3. `bonnietyler_phase01_sources.csv` — source titles, URLs, claim scopes.
4. `bonnietyler_phase01_genre_evidence.csv` — one evidence item for every included genre.
5. `bonnietyler_phase01_evidence-notes.md` — per-album reasoning and disagreements.
6. `bonnietyler_phase01_catalog-audit.csv` — four current rows and upcoming studio backlog.

Add the artist and four original studio albums to `catalog.ts`, merge only the current `rows_ONLY.csv` into `docs/descriptors/bonnietyler.csv`, then run `npx vite-node scripts/validate-descriptors.ts` and project tests in Claude. No other artist's rows are included.

## Next phase — Phase 02

1. *Faster Than the Speed of Night* (1983)
2. *Secret Dreams and Forbidden Fire* (1986)
3. *Hide Your Heart* (1988)
4. *Bitterblue* (1991)

Different releases titled *It's a Heartache*, *Natural Force* reissues, and compilations are not distinct studio albums.


## Claude import note

- 4 rows imported as delivered; no new tokens. Catalogue: 18 studio albums 1977-2021.
- Scene GB en 1970 rock,pop,country (Welsh).
- Artist influences: Tina Turner, Janis Joplin (vocal models she names).
- Reception researched by Claude (Wikipedia, Classic Pop and We Are Cult 2019 RCA Years reviews, Discogs 1720414, 7051760). mainstream 5: managers Scott and Wolfe wrote and produced, she was the voice.
