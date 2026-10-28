# CLAUDE_IMPORT — Frankie Goes to Hollywood, phase 01

**Research date:** 28 October 2026  
**Artist name:** Frankie Goes to Hollywood  
**Proposed artist ID:** `frankiegoestohollywood` (letters only)  
**Phase:** 01, complete original studio discography (two albums; a justified exception to the normal three-to-four-album phase size)

## What this ZIP contains

Six import/research files: this memo, `frankiegoestohollywood_phase01_rows_ONLY.csv`, `frankiegoestohollywood_phase01_sources.csv`, `frankiegoestohollywood_phase01_genre_evidence.csv`, `frankiegoestohollywood_phase01_evidence-notes.md`, `frankiegoestohollywood_phase01_catalog-audit.csv`.

## Phase 01 rows (new, chronological)

1. `frankiegoestohollywood-welcometothepleasuredome` — **Welcome to the Pleasuredome** (1984), studio, landmark 1.
2. `frankiegoestohollywood-liverpool` — **Liverpool** (1986), studio, landmark 0.

The CSV has **exactly 27 columns and two data rows**, status `draft`, with no rows from previous phases.

## Artist ID and catalogue audit

No **Frankie Goes to Hollywood** entry was found in either `src/data/catalog.ts` or `src/data/seed.ts` (branch `descriptors`). The proposed `frankiegoestohollywood` ID was not found there either. The URL for `docs/descriptors/frankiegoestohollywood.csv` returned **404**, so **no albums were skipped as already described**. The absence of an artist in those two files means **Claude must add the artist room and both albums before validation**. Recheck before import in case of concurrent changes.

**Albums to add:**

| artist_id | album_id | title | year | type |
|---|---|---|---:|---|
| `frankiegoestohollywood` | `frankiegoestohollywood-welcometothepleasuredome` | Welcome to the Pleasuredome | 1984 | studio |
| `frankiegoestohollywood` | `frankiegoestohollywood-liverpool` | Liverpool | 1986 | studio |

**Co-billed albums:** none; both credited to Frankie Goes to Hollywood.

**Excluded:** *Bang!* (1985; compilation), the later greatest hits and retrospective releases, live albums, single remix formats and assorted later bonus-track collections. The important remixes belong to singles rather than a qualifying standalone remix album. Do not mistake *Bang!* for a third studio album.

## New tokens

**Genres:** none required. All selected genre tokens, including `hinrg`, `dancerock`, `clubdance`, `newwave`, `ballad`, `poprock`, are present in the present `scenes.ts` Genre declaration.  
**Instruments:** none required.  
**Production:** none required. Includes existing `jupiter8`, `ppgwave23`, `synclavier`, `linndrum`, `tr808`, `emulator`, `digitaltape` tokens.

Check the live definitions at import time; the metadata can change.

## ARTIST INFLUENCES (artist-wide, NOT album `influenced_by`)

Only musicians explicitly described as influences by a band member are listed; distinguish general formative inspiration from music that can be proven to shape an individual album's sound.

- **David Bowie / Ziggy Stardust**. Holly Johnson calls Bowie a role model and states that the Frankie stage persona was his interpretation of Ziggy Stardust. Paul Rutherford separately describes Bowie's early impact. Sources: https://www.electronicbeats.net/mr-style-icon-holly-johnson-on-david-bowie and https://pennyblackmusic.co.uk/Home/DetailsMobile?Id=20988 . This is a *performance/conceptual* influence; not automatically an album-level musical influence.
- **T. Rex / Marc Bolan**. Johnson explicitly says T. Rex and Bolan were formative teenage artists. Source: https://thequeerreview.com/2021/09/19/exclusive-interview-holly-johnson-this-was-me-everybodys-talking-about-jamie/ . Artistic and visual development is clear; direct sonic adoption by either FGTH LP is unproven.
- **Lou Reed (*Transformer*)**. Johnson says this particular album strongly influenced him. Source: https://www.lcrpride.co.uk/2024/12/23/in-conversation-with-holly-johnson/ . It is documented at *artist* level; no basis to assert *Welcome to the Pleasuredome* copied its sound.
- **Disco as an idiom, not a named artist**. Paul Rutherford says he immersed himself in disco after time in America and brought it to FGTH: https://pennyblackmusic.co.uk/Home/DetailsMobile?Id=20988 . Do not invent disco artists as influences.

**Album-specific exception**: `Liverpool` → `Ratt (Invasion of Your Privacy)` stems from Brian Nash's account of drummer Peter Gill using the rhythmic feel of Ratt's *Lay It Down* for *Rage Hard*. Source: https://www.musicradar.com/artists/singles-albums/we-were-denigrated-for-the-fact-that-it-was-machines-on-the-records-whereas-new-order-made-blue-monday-and-were-hailed-as-the-best-thing-since-sliced-bread-watching-the-wildlife-the-failure-of-frankie-goes-to-hollywoods-liverpool-40-years-on .

## Credit / release caveats

- *Welcome to the Pleasuredome*: **Trevor Horn** is producer; Stephen Lipson is commonly credited with **additional** production or assistance. More generic websites occasionally call both producers; phase row follows the more specific release credits.
- *Liverpool*: **Stephen Lipson** is producer; **Trevor Horn** is executive producer / final mixer, not a full credited co-producer. Avoid confusing the two.
- Original-release dates: 29 October 1984 and 20 October 1986; source metadata on digital reissues sometimes shows different dates.
- Opening suite, *Relax*, *Two Tribes* and *The Power of Love* have many edits, extended versions and reissues. Genre/tempo/scale decisions apply to the **original album sequence**, not the most elaborate or most famous later 12-inch mixes.
- The source-based studio-machine inventory is different for 1984 and 1986. For `Liverpool`, an account identifies *Sony 24-track digital recorders* but **does not give the exact Sony model**. Do not infer `sonypcm3324` from it.
- The website's genre labels sometimes reflect site-wide filing (*Rock*) rather than a robust album-level style; the genre-evidence CSV records the weight and scope of each meaningful style.

## Next phase

**None planned.** All two original studio albums are covered in phase 01. Consider a later standalone phase only if you specifically request a historically important remix/EP release; live albums and compilations remain excluded under current rules.

## Original source reference URLs

- https://github.com/giampierofiorelli/Fandome/blob/descriptors/docs/album-descriptors-guide.md
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/catalog.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/seed.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/scenes.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/instruments.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/production.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/coBilled.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/scripts/validate-descriptors.ts

## Claude import note (Oct 2026)

- Art of Noise removed from Welcome to the Pleasuredome's sounds_like: Trevor Horn, the album's producer, was a member (a producer's band is not a comparison).
- Liverpool keeps plain `rock`: sources describe the whole record as the band's rock turn (MusicRadar, Wikipedia "pop-rock"/heavier rock sound); poprock stays first.
- Producers as in the rows: Horn alone for 1984 (Lipson additional), Lipson alone for 1986 (Horn executive producer).
- Artist added to the catalogue (2 studio albums), scene GB en 1980 synthpop,dance,rock, not touring (LEGACY). Bang! (compilation) left out.
