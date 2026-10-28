# CLAUDE_IMPORT — KC and the Sunshine Band — Phase 01 — 28 October 2026

## Import exactly this phase

- Single original ZIP: `kcandthesunshineband_fandome_phase01.zip` with 6 files. Only `*_rows_ONLY.csv` contains descriptive rows to import. Every row is `draft` and has 27 exact guide columns.
- Proposed artist ID: **`kcandthesunshineband`**. Neither `src/data/catalog.ts` nor `src/data/seed.ts` contains this band when checked on 2026-10-28; the matching `docs/descriptors/kcandthesunshineband.csv` also was not found. Re-check branch before editing, add artist room and necessary album catalog entries, then import strictly these four descriptors, run validator and tests. Never overwrite earlier artist work.

### 4 original albums, chronological

1. `kcandthesunshineband-doitgood` — **Do It Good** (1974), studio.
2. `kcandthesunshineband-kcandthesunshineband` — **KC and the Sunshine Band** (1975), studio.
3. `kcandthesunshineband-thesoundofsunshine` — **The Sound of Sunshine** (1975), studio, ORIGINAL RELEASE CREDIT **The Sunshine Band** (instrumental, but third LP in the same recording project according to Rhino).
4. `kcandthesunshineband-part3` — **Part 3** (1976), studio.

### Essential catalog alias decision

**The Sound of Sunshine** is an original studio album, **not a compilation** and not a different ensemble. The original album was billed to **The Sunshine Band** and deliberately omits KC from the billing because the album is instrumental. Rhino's rights-holder history expressly files it as third KC and the Sunshine Band studio album. Use album room `kcandthesunshineband-thesoundofsunshine` and preserve the original printed artist credit if the repository supports per-release aliases. Do not create a second band artist room or incorrectly mark the album as KC lead vocals. Sources: https://www.rhino.com/article/happy-45th-the-sunshine-band-the-sound-of-sunshine, https://musicbrainz.org/artist/76a5a114-ed6a-4eb6-8a81-ad5768d4b41c, https://jazzrocksoul.com/artists/kc-and-the-sunshine-band/.

### Artists missing / duplicate check

The proposed name `KC and the Sunshine Band` and ID `kcandthesunshineband` have no catalog/seed match in the inspected branch. Four album rows absent. No other already-described album was skipped in phase 01 because the descriptor file did not exist. Original historical catalog names are often written KC & The Sunshine Band, K.C. & the Sunshine Band or The Sunshine Band; normalize only the catalog artist name while preserving original release credit in notes.

### New tokens

- **New genres: none.** Every genre here exists in the `Genre` union, including `rnb`, `dancepop`, `soul`, `funk`, `disco`.
- **New instruments: none.** All instrument tokens exist in `instruments.ts`.
- **New production tokens: none.** `overdubbing`, `varispeed`, `layeredvocals`, `hornarrangements`, `delay` exist in `production.ts`. `varispeed`, `delay` etc. apply to **Get Down Tonight** and need not characterize every song on 1975 LP.

### ARTIST INFLUENCES (artist-wide, direct interview, do not auto-fill each row)

In a **2017 first-person interview** conducted by Jade Kennedy, Harry Wayne Casey named these musical artists among his strongest formative influences (his remarks do **not** tie each individual artist to a specific album). Source: https://musicfeeds.com.au/features/kc-sunshine-band-dangers-fame-exciting-new-music/

- Stevie Wonder
- Marvin Gaye
- The Supremes
- The Temptations
- Gladys Knight (spoken as Gladys Knight, not necessarily the Pips)
- Joe Cocker
- James Brown
- Chicago
- Blood, Sweat & Tears

Casey also names *Motown*, a label and artist network, as his primary formative inspiration. Do not put the word Motown as an artist in `influenced_by`. In his [Recording Academy account](https://www.grammy.com/news/harry-wayne-casey-the-boogie-man-returns/), Casey separately cites Bahamian **Junkanoo** as a musical rhythmic inspiration (a musical tradition, not an artist). It must not appear as a fictitious artist; nor do steel drums, cowbells and whistles become album instrument tags without album-specific evidence. All four album `influenced_by` fields remain **blank** pending album-specific substantiation.

### Recording methods and limitations

- **Do It Good:** Richard Finch is sole credited producer, unlike the subsequent Casey/Finch joint credits. Do not conflate arranger Harry Wayne Casey with producer.
- **1975 self-titled:** `varispeed` for sped-up guitar intro and `delay` for lead vocal are sourced to Casey's track-level account: https://www.musicradar.com/news/guitars/classic-tracks-harry-wayne-casey-on-kc-and-the-sunshine-bands-get-down-tonight-603572. `hornarrangements` and `overdubbing` are likewise tied primarily to *Get Down Tonight*. Do not assert use of drum machines or electronic synths from the disco style alone.
- **Instrumental album:** The original billing differs, while all four albums remain in the same core recording project. A database's listing of backing vocalists is not sufficient to override the original instrumental release's lack of lead sung lyrics.
- **Part 3:** Casey/Finch remain producers, with horns, percussion and backing vocalists. Multitrack overdubbing is documented in a general Casey interview about the studio-band era, but no precise per-LP machine is independently certified.
- **Genre evidence:** `*_genre_evidence.csv` records each genre, exact source URL, and album-vs-texture scope. Many labels are modern retrospective styles. Keep `dancepop` genre and its precedence as sourced; do not silently promote `rnb` above `disco` for 1976.
- **Screens / sources:** All references are publicly accessible web pages; source file includes original publisher links (rather than fabricated DOIs). `status=draft` means Claude should perform a second-person review before `reviewed`.

### Next phase 02 — no repeats

1. **Who Do Ya (Love)** (1978)
2. **Do You Wanna Go Party** (1979)
3. **The Painter** (1981)
4. **All in a Night's Work** (1982)

**Space Cadet Solo Flight** (1981) is sometimes shown in KC catalogs but billed as a solo Harry Wayne Casey project; research its original artist attribution before deciding whether it belongs in the group room. Do not silently include it as a group LP. Later follow-up includes *KC Ten* and later studio recordings, after checking release/billing and any compilations. All live and greatest-hits albums excluded.

## Claude import note (Oct 2026)

- Rows imported as delivered. The Sound of Sunshine stays in the band's room with the printed credit "The Sunshine Band" (coBilled.ts).
- Artist added with the studio discography through Feeling You! The 60s (2015); Space Cadet Solo Flight (1981) left out pending its billing check. Scene US en 1970 disco,funk; still touring.
