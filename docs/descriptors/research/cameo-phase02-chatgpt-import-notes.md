# CLAUDE IMPORT — Cameo, phase 02

Research prepared 28 October 2026 for `giampierofiorelli/Fandome` (`descriptors`, read-only). **Strictly incremental:** four new studio records only. Do not reimport phase 01. Append four rows after verifying the catalogue state at import time.

## Phase 02 records

| album_id | title | original year | action |
|---|---|---|---|
| `cameo-cameosis` | Cameosis | 1980 | Add and import |
| `cameo-feelme` | Feel Me | 1980 | Add and import |
| `cameo-knightsofthesoundtable` | Knights of the Sound Table | 1981 | Add and import |
| `cameo-alligatorwoman` | Alligator Woman | 1982 | Add and import |

Artist ID remains `cameo` as proposed in phase 01. Current repository check found no `cameo` in `src/data/catalog.ts` or `src/data/seed.ts`; `docs/descriptors/cameo.csv` was unavailable, so **neither phase is yet confirmed imported to GitHub**. Phase 01 delivered four rows (`Cardiac Arrest`, `We All Know Who We Are`, `Ugly Ego`, `Secret Omen`), which this ZIP intentionally does not repeat. The audit lists all 17 original studio titles and their separate statuses; the missing `cameo` artist should be created once, not once per phase.

## Scope, exclusions and identity

- All four are original Chocolate City-era **studio** LPs, in original chronological order. Dates confirmed by https://www.cameonation.com/discography, https://musicbrainz.org/artist/ef4d808a-2113-44c3-9b44-1b31f026ef1e, https://www.allmusic.com/album/cameosis-mw0000312967, https://www.allmusic.com/album/feel-me-mw0000838513, https://www.allmusic.com/album/knights-of-the-sound-table-mw0000097779, https://www.allmusic.com/album/alligator-woman-mw0001878982.
- *Cameosis* is before *Feel Me*, though both were issued in 1980. *Knights* 1981; *Alligator Woman* 1982.
- No compilations, live discs, two-in-one CD reissues, bonus tracks or separately reissued 12-inch singles counted as albums.
- *Nasty* (1996) is a live album, excluded.
- No co-billed album or secondary artist credits need `coBilled.ts` edits. Nona Hendryx is a guest on *Knights*, not an album's co-billed artist.
- Next phase: *Style* (1983), *She's Strange* (1984), *Single Life* (1985), *Word Up!* (1986).

## Genres and new tokens

No new genre, instrument or production tokens are required for these four records under the current Fandome vocabulary. Every row in `cameo_phase02_genre_evidence.csv` has a separate URL and scope. Important distinctions:

- *Cameosis*: Funk, R&B and contemporary R&B at album level. Smooth soul represents the slower sung side; `ballad` is scoped to the romantic tracks, not the entire album.
- *Feel Me*: Funk remains central, but the Lockett-led title track and 'Better Days' are explicitly slow romantic ballads; 'Is This the Way' is a quicker socially conscious song.
- *Knights*: Funk with contemporary-R&B stylistic framing; AllMusic calls 'The Sound Table' a disco venture, so `disco` is in the **long tail**, not the main genre.
- *Alligator Woman*: Deep funk predominates; `pop` is confined to the prominent single 'Flirt', and `ballad` to softer songs such as 'For You'.

## Explicit instruments and recording techniques

- *Cameosis*: original credits document bass, drums, guitars, Rhodes, piano, Moog/Minimoog and brass; Angel Allende congas and Irving Spice's Strings. Tity Brothers and Larry Blackmon on horns; Sammy Lowe on string arranging. Never put Sammy Lowe, the Tity Brothers or engineer Steve Jerome in `producers` (https://www.allmusic.com/album/cameosis-mw0000312967; https://shop-obc.michael45.com/produkt/cameo-cameosis/). `moog` is documented; *Mini-moog* credited (model known); generic *Prophet* **does not** establish a Prophet-5 model.
- *Feel Me*: the detailed original personnel include T.C. Campbell Minimoog/Prophet, Randy Stern Yamaha CS-80, large sax/trumpet/trombone section, Jose Rossy congas. Horn arranging credited to Cameo/Blackmon (with Tity Brothers and additional Leon Pendarvis noted on original personnel); do not mislabel personnel as producers (https://www.jazzmusicarchives.com/album/cameo/feel-me; https://recordsale.de/de/kuenstler/cameo/albums/feel-me; https://en.wikipedia.org/wiki/Feel_Me_(album)).
- *Knights*: AllMusic confirms Blackmon and Jeryl Bright **horn arrangements**, Rhodes, Moog synth and a **Prophet** (model not specified). Do not assign modern DAW, drum machine or sampling solely because the record sounds electronic. Nona Hendryx guests on 'Don't Be So Cool' (https://www.allmusic.com/album/knights-of-the-sound-table-mw0000097779; https://www.jazzmusicarchives.com/album/cameo/knights-of-the-sound-table).
- *Alligator Woman*: LP personnel transcription explicitly names **Jupiter-8, Minimoog and Yamaha CS-80** plus generic Moog and Prophet; `jupiter8|minimoog|moog|yamahacs80` records only verified models. Roland Jupiter-8 and Yamaha CS-80 were synths played by credited keyboardists, **not proof of drum-machine programming or digital tape** (https://www.jazzmusicarchives.com/album/cameo/alligator-woman).
- All four rows credit **Larry Blackmon** as producer, checked against AllMusic, MusicBrainz and original LP listings.
- Remastering mentioned in AllMusic CD credits is **later CD mastering**, not a 1980–82 original production technique. Do not use `remastering` for the LP rows.

## Artist influence versus sounds-like

`influenced_by` is left empty for every album: group-level statements by Blackmon about Sly Stone and early exposure to James Brown do not prove an *album-specific* source. See artist-level context in phase 01; do not automatically apply one influence to all releases. A generic critical comparison with Parliament/Funkadelic in Andy Kellman's Cameo biography (https://www.allmusic.com/artist/cameo-mn0000944349) is editorial sonic similarity only and is never treated as a producer relationship or direct artist testimony. `sounds_like` remains sparsely filled: Cameosis cites the closely related early-band P-Funk sensibility; Alligator Woman's Parliament reference is historical/contrastive, so similarity is an editorial low-weight link rather than a new influence.

## Caveats, status and confidence

- Scales 0–5 are **editorial assessments against Fandome anchor recordings**, not audio analysis measurements. Each dimension is justified by the corresponding professional review in the evidence notes. `status=draft`; `confidence` reflects source availability, not second-person verification.
- Many personnel lists available online reproduce original LP credits without sleeve images. Source strength is marked `medium` for third-party transcriptions and `high` for specialist reviews and publisher credits.
- `voice` empty is deliberate: Lockett's *individual track* tenor can be described as gentle, but this does not demonstrate a single dominant vocal category for an LP with multiple leads.
- Early CAMEO album dates differ across several database editions; this phase's 1980/1980/1981/1982 year sequence is not contested, regardless of later digital reissue dates.
- Source and genre evidence are album-specific. `sounds_like` is a labelled editorial judgement; do not promote it to documented influence.

## Files

1. `cameo_phase02_rows_ONLY.csv` (exactly four new album rows, 27 columns).
2. `cameo_phase02_sources.csv` (references with original URLs, support claims and strength).
3. `cameo_phase02_genre_evidence.csv` (one source-linked row per assigned genre).
4. `cameo_phase02_evidence-notes.md` (album-wise evidence, scales and uncertainty).
5. `cameo_phase02_catalog-audit.csv` (17 original studio albums; phase statuses).
6. `CLAUDE_IMPORT.md` (this document).

CSV: UTF-8 with BOM, quoted comma-containing fields, CRLF records. The ZIP holds these **six files only**, no code or first-phase records.


## Claude import note

- 4 rows appended as delivered; no new tokens; albums already in the catalogue.
- Reception and missing comparisons researched by Claude.
- sounds_like added from critics: Feel Me Wendy Carlos, The Spinners (Christgau); Style Slave (Christgau); She's Strange Grace Jones, Sly and Robbie, Talking Heads, George Benson (BBC, Easlea 2011); Alligator Woman The B-52's (Christgau, title hit).
