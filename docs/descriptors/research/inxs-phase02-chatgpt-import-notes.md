# CLAUDE_IMPORT — INXS / Phase 02

**Artist:** INXS; use the `inxs` artist ID and the album IDs already proposed in Phase 01. **Research and validation:** 28 October 2026. This archive is *incremental*: exactly four NEW 27-column studio album records, no old rows. The public `descriptors` branch’s `catalog.ts` and `seed.ts` still do not list INXS; `docs/descriptors/inxs.csv` returned 404 when checked, so these IDs are provisional **until imported**. If Claude has already imported Phase 01 on a different/private branch, preserve those IDs and use only Phase 02 rows from this package.

## Import exactly these rows

1. `inxs-listenlikethieves` — **Listen Like Thieves**, 1985, `studio`, add to catalog
2. `inxs-kick` — **Kick**, 1987, `studio`, add to catalog
3. `inxs-x` — **X**, 1990, `studio`, add to catalog
4. `inxs-welcometowhereveryouare` — **Welcome to Wherever You Are**, 1992, `studio`, add to catalog

These are all **original studio albums**. *Live Baby Live* (1991) is a concert album and is excluded despite falling between *X* and *Welcome*. No compilations. The catalogue audit lists the entire INXS studio chronology and marks earlier-phase rows **not** to re-import.

## Tokens to register / validate

- **New genre token:** `orchestralrock` (some tracks on *Welcome to Wherever You Are*). Contemporary LA Times critic Mike Boehm specifically uses the phrase “orchestral rock” for several arrangements; not a claim about every track: https://www.latimes.com/archives/la-xpm-1992-08-09-ca-6018-story.html . If already in the latest `scenes.ts`, no duplicate. All other genre labels in these rows match the supplied canonical list (including lower-priority `bigmusic`, `sophistipop`, `popsoul`, `bluesrock`, `punknewwave`).
- **New instrument tokens:** none.
- **New production tokens:** none. Key verified existing tokens: `tr707`, `emulatorii`, `digitalrecording`, `analogtape`, `vocalphasing`, `sampling`, `stringarrangements`, `distortion`.
- **Co-billed albums:** none. The production co-credit `INXS` on the 1992 album is **not** an album-level split artist billing.
- **Artist-wide influences:** supplied with sources in the Phase 01 `CLAUDE_IMPORT.md`; do not regenerate or propagate artist-wide names into album `influenced_by` fields. These four fields are deliberately blank because no explicit testimony tied the named musical influences to each individual album. Critics’ comparisons belong to `sounds_like`.

## Technical and source caveats

- **Kick drum machine, sampler, recording:** detailed first-person recording interview with Andrew Farriss and engineer David Nicholas establishes **Roland TR-707** on 'Need You Tonight', an **Emulator II** sampled keyboard-bass sound, combined live drums and drum-machine beat, Otari digital multitrack with analog Studer safety, and phase treatment on Michael Hutchence’s voice. Source: https://www.mixonline.com/recording/classic-tracks/classic-track-inxs-need-you-tonight-367581 . `drummachine`, `sampler`, `synthbass` are heard on at least one central track, not necessarily the whole album.
- **Kick string ambiguity:** Andrew Farriss reports playing the string parts for 'Never Tear Us Apart' on a keyboard; early takes were different. Other testimony calls them “strings,” and members describe the Emulator. The row deliberately **does not** include the acoustic instrument token `strings`, because the evidence points to keyboard-generated string parts rather than a verified hired string section; `stringarrangements` records the confirmed production decision. Chris Thomas's liner recollections: https://albumlinernotes.com/Kick.html ; Farriss: https://www.musicradar.com/news/guitars/andrew-farriss-talks-inxs-kick-album-track-by-track-566768 .
- **Kick original album:** cover of The Loved Ones' 'The Loved One' is a song on this band's *Kick*, **not** evidence that the original band influenced the album. 'Mediate' uses a rhythmic near-rap/spoken style; the canonical `spoken` voice token is preferred to `rap` because it is a song-level gesture. The album *Kick* is not 12 tracks according to the truncated official band webpage (the official store and original editions include 'Tiny Daggers' as track 12); production descriptors cover original 1987 album.
- **X harmonica:** Charlie Musselwhite's **sample** is used on 'Suicide Blonde', but he also played non-sampled harmonica on other tracks, so both `harmonica` instrument and `sampling` production are correct. Do not treat Musselwhite as an influence or co-producer. https://www.harpsurgery.com/charlie-musselwhite-part-i-komedia-brighton-18th-november-2008/ and Apple Music editorial. `sophistipop` and `bigmusic` are metadata tags from Album of the Year and lower-confidence than contemporary dance-rock reporting. No specific synth model for X is sufficiently verified.
- **Welcome co-production:** physical pressing credits and songwriter Andrew Farriss both explicitly credit **Mark Opitz and INXS**. Bob Clearmountain **mixed** the album: NOT an album producer. https://www.chartsurfer.de/artist/inxs/welcome-to-wherever-you-are-album_frcung.html and https://www.songwritingmagazine.co.uk/interviews/beautiful-girl-inxs . The 60-piece Australian Concert Orchestra appears on two songs, 'Baby Don't Cry' and 'Men and Women', not throughout. 'Not Enough Time' contains backward guitar according to The Independent, but don't invent a precise reversing tape device. Distorted guitars, sitar, percussive sound and studio vocal processing documented. 'Beautiful Girl' has a directly stated personal/parenthood starting point, so it supports introspection/love more than broad political themes.
- **Production of Listen Like Thieves:** producer Chris Thomas had the band play *together in the studio* with concert monitors and acoustic microphone bleed, not a released concert recording. `liverecording` and `roomambience` refer to that recording process. No explicit synthesizer-programming workflow or hardware model is verified for this album, so `synthprogramming` is left empty.
- **Genres:** genre-evidence table distinguishes per-album metadata, critic descriptions of entire albums, individual songs and texture. Album-level genre tags such as `collegerock` are *industry catalog labels*, not proof of how every track sounds. `orchestralrock` is only part of *Welcome*. `funkrock` on *Welcome* applies to some tracks. `bluesrock` on *Kick* is limited to the covered song. Pitchfork and magazine comparisons (Roxy Music / U2; Beatles / Saints / Roxy Music) are **not influences**.
- **Conflicting release dates:** site lists *Kick* 19 October 1987, other discographies list 12 October; year is reliable. Official site lists *Welcome* 3 August 1992, digital services 4 August; use 1992. Other albums: *Listen Like Thieves* 14 October 1985, *X* 25 September 1990. Use **original** studio editions, not anniversary reissues or live bonus discs.

## Next phase

**Phase 03:** *Full Moon, Dirty Hearts* (1993), *Elegantly Wasted* (1997), *Switch* (2005). Potential **Phase 04**, only if owner elects studio re-recording records: *Original Sin* (2010/2011) with multiple guest vocalists. Remain consistent with earlier Phase 01 caveat and do not add it automatically.

## Package contents

- `CLAUDE_IMPORT.md`
- `inxs_phase02_rows_ONLY.csv`
- `inxs_phase02_sources.csv`
- `inxs_phase02_genre_evidence.csv`
- `inxs_phase02_evidence-notes.md`
- `inxs_phase02_catalog-audit.csv`

No code, no Phase 01 rows.
