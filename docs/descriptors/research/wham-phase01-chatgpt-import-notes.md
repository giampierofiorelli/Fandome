# Fandome — Wham! — Phase 01 import notes

Prepared: 2026-10-27. Artist spelling: **Wham!**. Proposed artist id **`wham`** (only lowercase letters). Checked both Fandome `catalog.ts` and `seed.ts` on branch `descriptors`: no Wham! entry was found. The anticipated `docs/descriptors/wham.csv` path returned HTTP 404. GitHub's directory UI was not fetchable, so check for simultaneous changes before import.

## Phase 01 contents (3 new, incremental album rows)

1. `wham-fantastic` — **Fantastic** (1983, studio)
2. `wham-makeitbig` — **Make It Big** (1984, studio)
3. `wham-musicfromtheedgeofheaven` — **Music from the Edge of Heaven** (1986, studio; **hybrid release caveat** below)

No previously described Wham! albums were found at the expected descriptor path, so none were skipped for being previously described. **All three album ids are proposed new catalogue ids**, as neither artist nor albums are present in the two checked catalogue files. The exact proposed slugs comply with Fandome's id rules. Check any late catalogue updates before adding.

## Catalogue additions

Add artist `wham` (Wham!) and all three studio album entries listed above. MusicBrainz lists these three under 'Album', separating 1986's `The Final` under 'Album + Compilation': https://musicbrainz.org/artist/d570bb31-b9ca-45a4-a2d9-11b186d9c159 . For 1986 use the proper 1986 **North American/Japanese edition** as the descriptor target. There is NO 1986 `The Final` descriptor in this release.

**Co-billed albums:** none. Do not merge George Michael solo recordings or other solo discographies as new Wham! catalogue albums merely because a particular solo performance was included on a Wham! regional album.

## Genre, instrument, production tokens to import

**New genre tokens** (not present in the checked `validate-descriptors.ts` genre set): `britfunk` (AOTY Fantastic primary genre); `discorap` (AOTY Fantastic secondary style). These are deliberately **not** mapped to `funk` / `poprap`: the user requires exact names when a source uses them. Genres `boogie`, `synthfunk`, `popsoul`, `sophistipop`, `newwave`, `adultcontemporary`, `contemporarypoprock`, `poprap`, `europop`, etc. are already represented in the validator's genre list.

**New instruments:** none. **New production tokens:** none. A 1984 official Wham! page calls the Juno a 'Roland Juno 80', whereas studio engineer Chris Porter and George Michael's statements identify the **Juno-60**; only `juno60` is recorded here (not a spurious new `juno80`). No uncertain or unsupported synthesizer models were added.

## ARTIST INFLUENCES — documented musical influences of Wham! members

These are **artist-level connections**, not proof that any individual song or record was copied. **Cover versions, guest players, producers and Wham! members have not been added as influences.**

- **Sylvester:** George Michael names his earlier enthusiasm for Sylvester during a 1982 ZigZag interview with Kris Needs, discussing disco and soul roots. https://gmforever.com/wham-interview-with-kris-needs-zigzag-1982/ (primary interview, retranscription)
- **Elton John:** Michael and Ridgeley bonded at school over Elton John's music according to a 1985 Rolling Stone profile of the duo. https://gmforever.com/wham-rolling-stone-interview-1985/ (period interview/profile)
- **Stevie Wonder:** Contemporary/retrospective LA Times reporting lists Wonder among Michael's formative favourites. https://www.latimes.com/archives/la-xpm-1990-09-09-ca-313-story.html (biographical reporting, not album-specific)
- **Queen and David Bowie:** Rock & Roll Hall of Fame induction essay names the shared early musical affinity for Queen and Bowie. https://gmforever.com/wp-content/uploads/2024/12/George_Michael_Induction_Essay.pdf (institutional biographical account, not an album-specific claim)
- **Bee Gees; Elvis Costello; the B-52's; David Cassidy:** George Michael names all four when directly asked for 'Inspirations' in Scoop Malinowski's Biofile interview. https://mrbiofile.com/2022/05/16/biofile-george-michael-interview/ (direct interview transcribed much later; no clear original interview date)
- **The Supremes:** The Rock & Roll Hall of Fame essay cites Michael's own autobiography on his childhood repeated listening to their records; mark as formative listening, not proven production inspiration. https://gmforever.com/wp-content/uploads/2024/12/George_Michael_Induction_Essay.pdf

**Important:** The band's documented liking for late-1970s disco, ska/2-Tone, and American soul are stylistic influences; they are not individual artist IDs. Their earlier group **The Executive** is not to be put in `influenced_by`.

## Release / credit cautions

- **Fantastic (1983):** Some catalogue listings show the 1983 CD as 11 tracks with instrumentals/remixes. Our descriptors describe the **original eight-track studio LP**, not reissue bonus cuts. Credit `Bob Carter` for the original album track `Wham Rap!`, `Steve Brown` and `George Michael` for the majority of other songs. Don't mistake all rhythm parts for synthesizers; album session credits are full of live drums, bass, guitars and brass. See official https://wham.world/history/ and original pressing documentation https://www.chartsurfer.de/artist/wham/fantastic-album_frphcg.html .
- **Make It Big (1984):** `Everything She Wants` was made largely by George Michael himself with Chris Porter, using LinnDrum and Juno-60. **Last Christmas is NOT on the original eight-track Make It Big LP**. Be careful not to assign sleigh bells from `Last Christmas` to this album. `Careless Whisper` on the original Wham! LP is George Michael-produced; do not add Jerry Wexler on the basis of a separately recorded/issued alternate mix. UK 5 November and US October release dates differ; the year is 1984. Producer source: https://musicbrainz.org/release/8587cf6d-3761-4cae-9acc-78770a13c758 .
- **Music from the Edge of Heaven (1986):** Released for North America/Japan rather than as the UK farewell LP, where **The Final** was a greatest-hits compilation and must be excluded. MusicBrainz treats the North American album as an album, but its eight tracks include older singles (`I'm Your Man`, `Last Christmas`), a 1986 version of `Wham Rap!`, George Michael's standalone `A Different Corner`, and **`Blue (Live in China)`**. Thus it is called a studio album in discographies, but **not all tracks were newly recorded in 1986 and one is live**. The row's genre, scales and instruments characterise this particular compiled LP, not a wholly new studio session. `concertrecording` relates only to `Blue`; `juno60` and `linndrum` relate to the reused `Last Christmas`. https://www.allmusic.com/album/release/music-from-the-edge-of-heaven-mr0001003559 . 
- **Genre scope:** AllMusic's Fantastic styles also include questionable 'Alternative/Indie Rock' and 'Post-Punk' tags: those broad catalogue suggestions are deliberately excluded to protect matching quality (see evidence notes). AOTY's genres often derive from community tagging; they are tagged medium-strength and ordered below more grounded dominant modes when warranted.
- **Instruments vs production:** `juno60` and `linndrum` are supported by the engineer and musician sources for specific tracks, not extrapolated from period/genre. The official page's 'Juno 80' conflicts with that stronger evidence; see album-specific notes.

## Next phase

**There is no phase 02 in the current Wham! studio-album scope.** The only remaining major LP `The Final` (1986) and later greatest-hits compilations are excluded under the owner's Oct 2026 rule. A later phase may be opened ONLY if the owner elects to include a landmark EP/single release (e.g. the 1986 four-track farewell EP) as its own entry; don't create another ZIP for the same recordings now.

## Files

- `wham_phase01_rows_ONLY.csv` — exactly 27 columns and 3 proposed new rows
- `wham_phase01_sources.csv` — working cited source URLs and what they support
- `wham_phase01_genre_evidence.csv` — one genre/album/source row with scopes
- `wham_phase01_evidence-notes.md` — interpretive judgments, instrument/production evidence and caveats
- `wham_phase01_catalog-audit.csv` — additions and existing checks

Import the catalogue entries and two new genre tokens before running the validator against the rows. All rows deliberately remain `draft`.
