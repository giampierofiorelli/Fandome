# CLAUDE_IMPORT — Matthew Wilder — Fandome Phase 01

Date checked: 2026-10-28. Repository: `giampierofiorelli/Fandome`, branch `descriptors` (read only).

## Phase rows (chronological; original issues)

| ID | Album | Year | Type |
|---|---|---|---|
| matthewwilder-idontspeakthelanguage | I Don't Speak the Language | 1983 | studio |
| matthewwilder-bouncinoffthewalls | Bouncin' Off the Walls | 1984 | studio |
| matthewwilder-mulan | Mulan: An Original Walt Disney Records Soundtrack | 1998 | soundtrack |
| matthewwilder-especiallyonbirthdays | Especially on Birthdays | 2021 | soundtrack |

**This phase completes the currently confirmed released album discography in scope.** Two original pop studio LPs, one major feature-film soundtrack with substantial Wilder composition/production, and a separately released 2021 theatrical score. Album issue date takes priority over later singles, reissues and catalog aggregation dates. The 1972 Matthew & Peter release *Under the Arch* is credited to a different duo; excluded. The 1999 two-album combined edition is a compilation/reissue and excluded. No live albums.

## Catalogue cross-check / additions

Checked `src/data/catalog.ts` and `src/data/seed.ts`; neither includes Matthew Wilder as of today's inspected branch. `docs/descriptors/matthewwilder.csv` absent. `src/data/coBilled.ts` has no Wilder/Mulan entry. Proposed artist id **`matthewwilder`** (letters only; no collision found in inspected catalogue). Four new album IDs in `rows_ONLY.csv`; create room and matching album entries before running the existing validator. **Do not re-import other artists or previous batches.** See `catalog-audit.csv`.

### Co-billed 1998 soundtrack

MusicBrainz versions do not agree on *display artist credit*: originals/variants include `Jerry Goldsmith & Matthew Wilder`, `Matthew Wilder, David Zippel / Jerry Goldsmith`, and `Jerry Goldsmith, Matthew Wilder & David Zippel`. Disney official credits explicitly separate **songs: Matthew Wilder (music), David Zippel (lyrics); score: Jerry Goldsmith**. Treat soundtrack as a shared release; add/reconcile `coBilled.ts` and do not silently attribute Goldsmith's score to Wilder. Proposed catalogue title `Mulan: An Original Walt Disney Records Soundtrack`; use MusicBrainz original-issue credit for exact display after Claude verifies edition. Never classify it as a solo studio album.

## New tokens requiring catalogue extension

Genres: **`operaticpop`** (as expressly named for the Mulan soundtrack in published album genre metadata). Do not map this to `operatic` voice or `opera`, and do not remove the original genre.

Production: **`korgpoly61`**, **`simmonsdrums`** (both named in Bouncin' Off the Walls musician-by-musician sleeve-note transcription). Double-check LP before adding these optional detailed tokens; if unverified, remove token and document reason, not invent a machine. All other used genres/instruments/production tags were checked against current enumerations.

No additional instrument tokens in this batch.

## ARTIST INFLUENCES (career-level: first-person sources)

- **The Beatles; The Rolling Stones**: Wilder said he grew up on them. Source: [Recording Academy/GRAMMY interview (12 Feb 2020)](https://www.grammy.com/news/got-keep-movin-how-matthew-wilders-80s-deep-cut-break-my-stride-broke-tiktok/). Broad career sources; **not** automatically album-specific.
- **James Taylor; Carole King; Seals and Crofts**: Wilder expressly names them as 1970s folk/singer-songwriter music shaping his earliest musical direction. [Recording Academy](https://www.grammy.com/news/got-keep-movin-how-matthew-wilders-80s-deep-cut-break-my-stride-broke-tiktok/). Historical influences, not presumed to shape the 1980s studio LPs.
- **Culture Club; Thompson Twins**: Wilder explicitly describes those UK new-wave acts as influences on the 1982-83 creation of Break My Stride. [CultureSonar interview (23 Feb 2020)](https://www.culturesonar.com/catching-up-with-matthew-wilder-no-breaking-his-stride/). Linked only to 1983 album's `influenced_by` because of the song-specific firsthand account.
- **Men at Work**: Wilder includes them when recalling the broader new-wave environment. [Recording Academy](https://www.grammy.com/news/got-keep-movin-how-matthew-wilders-80s-deep-cut-break-my-stride-broke-tiktok/). A scene influence; NOT placed in album row without track-level evidence.

Do not list artists merely produced by Wilder (No Doubt, Christina Aguilera, etc.) as artistic influences. Similarly, guest performers Stevie Wonder, 98 Degrees and Donny Osmond on Mulan are not automatically influences.

## Evidence-quality and classification caveats

- **1983:** all credited producers are Peter Bunetta, Rick Chudacoff and Bill Elliott. The original `Break My Stride` recording credits specify a **Prophet-5** and **Oberheim DMX**, with drum programming; *the album* also credits Prophet-10 and E-mu Emulator on other tracks. Preserve separate machines and track scope. The source transcription uses Elliott; some sources spell Elliot.
- **1984:** producer credit Peter Bunetta and Rick Chudacoff. AllMusic verifies an extensive live-instrument cast as well as synths; fan-transcribed sleeve detail supports LinnDrum, DX7, Emulator, Poly-61, Jupiter-8, Simmons, vocoder and Chapman Stick. The fine instrument models have weaker independent confirmation than the personnel; reviewer should compare scans.
- **1998:** both songs and orchestral cues appear on the original soundtrack. Wilder produced songs; Goldsmith produced score. `instrumental` is one of several lead-voice categories because the orchestral portion is long; none implies that Wilder sings lead. A film soundtrack is not a full Wilder studio LP.
- **2021:** The PaperBoats credit says Wilder **composed, arranged and performed** the **US** score. The first Australian score was performed by Zephyr Quartet/voiceROM: **do not copy their violin/cello or vocal credits to Wilder's audio.** Music providers list an eleven-track release 3 March 2021. No independent original album liner notes or verified instrumentation/production, genre subcategories or singer credits found; the row is deliberately **LOW confidence**, with instruments, production, voice, producers and most scales **empty**. This is a research limitation, not a validator mistake. No made-up instruments, 4-genre padding or assumed absence of vocals. Claude should enrich from the actual 2021 audio and authoritative master credits before publishing a high-confidence recommendation.
- `sounds_like` for the 1984 LP is deliberately blank: a historic review mentioned Elvis Costello for one track only, and the full text could not be rechecked. Do not convert a tentative comparison into an album-wide link.
- Ratings are Fandome editorial assessments under 0–5 anchors; they are not quoted measurements. `status=draft` throughout.

## Files and import

1. `matthewwilder_phase01_rows_ONLY.csv` — precisely 4 new rows, 27 guide columns.
2. `matthewwilder_phase01_sources.csv` — evidence and links per album.
3. `matthewwilder_phase01_genre_evidence.csv` — one evidence row per genre, scopes distinguished.
4. `matthewwilder_phase01_evidence-notes.md` — each musical/credit judgment and all uncertainties.
5. `matthewwilder_phase01_catalog-audit.csv` — catalog additions.
6. `CLAUDE_IMPORT.md` — these instructions.

Importer should add missing catalogue artist/albums, co-bill as appropriate, add two optional production tokens and one genre token, then run `scripts/validate-descriptors.ts` and tests. Do not mark `reviewed` without a second person.

## Next phase

**None currently planned**: this phase includes both early studio albums and the two later significant released soundtracks. Review the special 2021 score's missing fields before claiming it fully characterized.

## Claude import note and enrichment (Oct 2026)

- New genre token `operaticpop` (pop, classicalcrossover); production tokens `korgpoly61`, `simmonsdrums`, both confirmed on Discogs release 1430717 (Poly-61 by Wilder; Simmons by Armand Grimaldi and Peter Bunetta).
- Bouncin' Off the Walls: Discogs confirms Poly-61, Simmons, Chapman Stick (Lloyd Moffitt), Jupiter-8, LinnDrum (Brad Buxer), DX7, OB-Xa, Prophet-5, Emulator, vocoder; Minimoog added (Richard Gibbs). Confidence raised to high. No review naming Elvis Costello found: sounds_like stays empty.
- I Don't Speak the Language: sounds_like emptied. Culture Club and Thompson Twins come from Wilder himself (CultureSonar 2020), so they stay in influenced_by only; no critic comparison found.
- Mulan: album id follows the catalogue title (`matthewwilder-mulananoriginalwaltdisneyrecordssoundtrack`); co-billed (songs Wilder/Zippel, score Jerry Goldsmith). sounds_like Village People (TV Guide on I'll Make a Man Out of You).
- Especially on Birthdays (2021) left out: a self-released score for a non-verbal children's show, with no credits, instrumentation, genre or reviews anywhere (only an Apple Music tracklist). It can be added if real data turns up.
- Artist added (3 albums), not touring; scene US en 1980 pop,synthpop.
