# CLAUDE IMPORT — Cameo, phase 03

Research performed **28 October 2026**, Fandome `descriptors` branch read-only. This is an **incremental ZIP**, containing **only four new album rows**. No files from Cameo phases 01 and 02 are repeated. Append the four rows to the artist's cumulative CSV after checking the repository state and creating missing catalogue entries.

## Album IDs and chronological position

| Album ID | Album | Year | Type |
|---|---|---|---|
| `cameo-style` | *Style* | 1983 | studio |
| `cameo-shesstrange` | *She's Strange* | 1984 | studio |
| `cameo-singlelife` | *Single Life* | 1985 | studio |
| `cameo-wordup` | *Word Up!* | 1986 | studio |

Artist ID `cameo` was proposed in phase 01. As checked 28 Oct 2026, no artist entry appears in `src/data/catalog.ts` or `src/data/seed.ts`, and `docs/descriptors/cameo.csv` returned 404. That does **not** show earlier ZIPs were never imported elsewhere; it means import status cannot be verified in the checked branch. Make one `cameo` artist entry, not three. The `catalog-audit.csv` lists all 17 original studio releases and phase assignments; add missing album entries, then append exactly four rows.

## What has already been delivered, not repeated

Phase 01: *Cardiac Arrest* (1977), *We All Know Who We Are* (1978), *Ugly Ego* (1978), *Secret Omen* (1979). Phase 02: *Cameosis* (1980), *Feel Me* (1980), *Knights of the Sound Table* (1981), *Alligator Woman* (1982).

## Critical safeguards for phase 03

1. **Album genre, not just the hit:** Electro-funk/synth-funk increasingly dominates, but one-off `reggae`, `rap` and `quietstorm` labels remain low-weight tail descriptors. Sources and song scopes are written in `cameo_phase03_genre_evidence.csv`. AllMusic hears funk with rock instrumentation on *Lé Ve Toi!*; this is documented in notes, but no inferred `funkrock` token is assigned, because the critic does not identify that as a named genre.
2. **Technology is credited per album.** *Style* has a secondary transcription of Prophet-5, Jupiter-8 and Minimoog (lower-confidence original-liner-note derivative). *Single Life* explicitly credits **Sammy Merendino for drum programming**. *Word Up!* credits **Peter Scherer for Synclavier programming**, Merendino for drum programming and Cameo for horn arrangements. Exact synthesizer models must not be propagated to another album without evidence.
3. **Radio filtered voice:** AllMusic song critic Ed Hogan reports Blackmon singing the *Word Up!* title track via a small transistor-radio speaker. `vocalfilter` is justified by that track only and does not mean the entire LP uses it. The distinct recorded snare sound is described but without proven model; do not assert TR-808, LinnDrum, Simmons, gated reverb or sampling on this evidence.
4. **Personnel versus production:** Larry Blackmon is the sole credited principal producer for these original albums. Charlie Singleton, Kevin Kendrick, Sammy Merendino and Peter Scherer were musician/programming collaborators; engineers and mixers are not producers. Guest musicians and backing singers are not influences.
5. **No borrowed-work influences:** *She's Strange* contains a tribute to Bob Marley, which is **not** direct evidence that he shaped the entire album. `influenced_by` remains empty in all rows pending album-specific direct testimony. AllMusic's historical comparisons to P-Funk, Ohio Players and others do not by themselves establish new album-specific influences. Empty `sounds_like` avoids unresearched similarities.
6. **No live albums or compilations.** Studio originals only, original release year, no later reissue extra tracks. No co-billed album changes needed. `landmark` is 1 for *She's Strange* and *Word Up!*, 0 for the other two; this is Fandome editorial classification.
7. **Scale ratings:** Our own integer 0–5 assessments using Fandome's guide anchors, based on the sourced album descriptions, not measured acoustical statistics. Vocal descriptors were deliberately conservative: `rap` only for *She's Strange* and *Single Life* and no forced `raspy` or `spoken` value for a whole album. All rows `status=draft`; no second review performed.

## Token additions

No new genres, instruments or production tokens required for phase 03 as checked in the current branch: `synthfunk`, `electrofunk`, `vocalfilter`, `synclavier`, `drumprogramming`, `prophet5`, `jupiter8`, `minimoog` are all existing Fandome tokens.

## Evidence limitations and disagreements

- *Style* synthesizer model names are sourced through the album's transcribed 1983 liner-note credits, as reproduced in a secondary page, not a personally inspected sleeve scan. The AllMusic review independently supports prominent keyboards and synthesizers, **not those model names**; the equipment-specific tokens can be deleted if stricter original-sleeve evidence is required.
- *She's Strange* is 1984 on the original vinyl. AllMusic search sometimes lists a stray digital edition with 1979, which is not the original year. The title track and *Talkin' Out the Side of Your Neck* feature rap; the whole album is not a hip-hop record.
- *Single Life* review specifies a rock-ballad track, not an album-wide rock genre; `ballad` marks it without broad `rock`. On *Urban Warrior* the critic calls the performance a rap tune; `rap` is track-scoped.
- *Emotional Violence* (later phase, not in this ZIP) is dated **1991** on Cameo's official site and AllMusic, but **1992** in some release-group databases. Flag this discrepancy for future phase audit rather than silently treating the year as uncontroversial.
- *Word Up!* has conflicting exact original release **day/month** across online release metadata; all agree 1986, therefore only 1986 is included. Mixing, production and mastering credits are not interchangeable.
- Provenance is explicit in `sources.csv`; third-party vinyl credit transcriptions have lower evidence strength than MusicBrainz producer/technical credits or editorial specialist reviews.

## Next phase (04)

*Machismo* (1988), *Real Men Wear Black* (1990), *Emotional Violence* (1991) and *In the Face of Funk* (1994). The final studio record *Sexy Sweet Thing* (2000) will need its own final phase or a later grouped batch. Do not quietly substitute compilation *The Best of Cameo* or live *Nasty* (1996).

## Contents

1. `cameo_phase03_rows_ONLY.csv` — four new 27-column rows.
2. `cameo_phase03_sources.csv` — claim-specific sources and original URLs.
3. `cameo_phase03_genre_evidence.csv` — source and scope for each genre token.
4. `cameo_phase03_evidence-notes.md` — detailed per-album reasoning and uncertainties.
5. `cameo_phase03_catalog-audit.csv` — 17-studio-album chronological audit.
6. `CLAUDE_IMPORT.md` — these instructions.

UTF-8 with BOM, CSV with CRLF records, quoted fields where necessary. No scripts, links to generated files, or previous-phase data inside the ZIP.


## Claude import note

- 4 rows appended as delivered; no new tokens; albums already in the catalogue.
- Reception and missing comparisons researched by Claude.
- sounds_like added from critics: Feel Me Wendy Carlos, The Spinners (Christgau); Style Slave (Christgau); She's Strange Grace Jones, Sly and Robbie, Talking Heads, George Benson (BBC, Easlea 2011); Alligator Woman The B-52's (Christgau, title hit).
