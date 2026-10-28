# CLAUDE IMPORT — Technotronic — Fandome phase 01

Research cut-off: **28 October 2026**. This is one incremental ZIP with **four new draft album rows**, 27 columns. Read-only audit of `giampierofiorelli/Fandome`, branch `descriptors`; no code or GitHub writes. Source links and evidence descriptions accompany the rows. Preserve each CSV's UTF-8 encoding.

## Identity / duplicates

- **Proposed artist ID:** `technotronic`. Exact artist-name and ID checks in **both** `src/data/catalog.ts` and `src/data/seed.ts` found no existing entry. No artist-ID collision detected.
- `docs/descriptors/technotronic.csv` does **not** exist. No existing description skipped. This should be a new artist and four new albums in the catalog; add their IDs **before** running descriptor validation.
- Technotronic is a Belgian production project founded by **Jo Bogaert**. Early album cover/video model **Felly** is not the recorded lead rapper on *Pump Up the Jam*; the main performer is **Ya Kid K**, with MC Eric on other tracks. **Reggie** fronts most of *Body to Body*. *Recall* has Ya Kid K, Daisy Dee and Black Diamond. Use one artist room; features are **not** co-billed albums.

## This phase's new entries

| Album ID | Title (original album identity) | Year | Type |
|---|---|---|---|
| `technotronic-pumpupthejamthealbum` | Pump Up the Jam: The Album | 1989 | studio |
| `technotronic-triponthistheremixes` | Trip on This! The Remixes | 1990 | remix |
| `technotronic-bodytobody` | Body to Body | 1991 | studio |
| `technotronic-recall` | Recall | 1995 | studio |

**Why the remix album qualifies:** *Trip on This!* is a separate 1990 original issue, featuring extensive reinterpretations by named musicians/remix specialists including **Shep Pettibone, David Morales, The Dust Brothers, Bernard Sumner and Todd Terry**, meeting the significant documented-collaboration exception. It is not classified as a studio album.

The three studios and the one 1990 remix are the full core album scope for this artist; **there is no phase 02 currently planned**. New stand-alone singles, compilation albums and later reissues are excluded.

## Catalogue audit

All four must be added to `catalog.ts`; none currently in `seed.ts`. `technotronic_phase01_catalog-audit.csv` documents additions and excluded/ambiguous release identities. In particular, the 1989 main release often appears simply as **Pump Up the Jam** in MusicBrainz or digital platforms, while AllMusic gives **Pump Up the Jam: The Album**. The latter is chosen as canonical here. Do not create both titles as separate studio albums.

Original editions of *Body to Body* vary by territory (9-track vinyl / 11-track CD) and *Trip on This!* by remix sequence. *Recall* digital copyright years may reflect reissue not original 1995 release. Version-specific notes are in `technotronic_phase01_evidence-notes.md`.

## Tokens that need changes

- **New genre:** `newbeat` (Belgian new beat). This exact genre is explicitly sourced in the album evidence but currently missing from the allowed `Genre` list. Add to `src/data/scenes.ts` and map to an appropriate family in `genreFamilies.ts` **before import**. Do not silently translate to `house` or `techno`.
- **New instruments:** none. **New production tokens:** none. `drums` on the 1991 album represents documented *programmed drum sounds*, **not proof of acoustic drums** or a particular drum-machine model.

## ARTIST INFLUENCES (artist-wide, named and sourced)

**No artist-wide musical influence names independently verified to the required standard; leave this blank.** Evidence reviewed:

1. [Jo Bogaert interview for the 1995 Japanese *Recall* CD (translated collector transcript)](https://www.sanfransys.com/homepages/technotronic_recall_japanese_interview.htm). Bogaert explicitly discusses Belgian new beat, synthesizer interests and wanting Euro house, but identifies styles, not specific artists shaping the Technotronic records.
2. [Los Angeles Times interview with Jo Bogaert (15 April 1990)](https://www.latimes.com/archives/la-xpm-1990-04-15-ca-1652-story.html). He discusses the intent to fuse American house/rap with European dance and commercial ambitions, without a clear named artistic model.
3. [Insomniac retrospective on Pump Up the Jam](https://www.insomniac.com/music/technotronic-pump-up-the-jam/): mentions a **Marshall Jefferson** sample; sampled-record attribution **cannot** be promoted to `influenced_by` under Fandome rules.
4. [Generation Dance Technotronic profile](https://generation.dance/en/artists/technotronic/): connects the earlier instrumental to **Farley Jackmaster Funk** but does not reproduce a first-person statement from Bogaert or a producer citing him as a named creative influence. Do not elevate this source to verified artist influence.

A contemporaneous *Musician* interview mentions complex classical music and gear; without a direct explicit first-person citation to a named musical influence, do not add composers or musicians merely because a journalist compared them.

## Editorial judgments and fidelity

- Genre evidence CSV gives one evidence row for **every genre** tagged on the four rows, distinguishes album-wide labels from single-track textures, and keeps `newbeat` as its own token.
- `influenced_by` deliberately empty on every album. `sounds_like` is **editorial sonic resemblance only**, not credit, sample or influence; producers and track guests must never be added for being collaborators.
- 1991 Body to Body: primary credits document programming but **do not name a physical synthesizer or drum machine**. The documented programmed drums are recorded as `drums`, and no equipment model is invented. This limitation is explicit in evidence notes.
- 1995 *Recall*: do **not** misclassify additional production/mixers **Phil Wilde and Peter Bauwens** as album co-producers; only Jo Bogaert and Patrick De Meyer are documented principal producers on booklet transcription.
- *Trip on This!* producers other than Bogaert are credited for only particular reconstructions, not as producers of the whole project; verify edition-by-edition if normalising the list.
- MusicBrainz and original label data were preferred for editions and credits; AllMusic and contemporaneous interviews for sound description. A 1995 producer interview is available via an unofficial Japanese-CD translation and should be treated as qualified, not fully independently authenticated. The *Musician* PDF and *Music & Media* PDF surfaced in indexing but their full PDFs could not be fetched; these are **contextual only**, not standalone primary proof.

## Contents

- `technotronic_phase01_rows_ONLY.csv` — 27-column album rows, phase 01 only.
- `technotronic_phase01_sources.csv` — source records and evidence strength.
- `technotronic_phase01_genre_evidence.csv` — evidence by individual genre with track/album scope.
- `technotronic_phase01_evidence-notes.md` — critical reasoning, scores, credits caveats.
- `technotronic_phase01_catalog-audit.csv` — all required additions and excluded releases.
- `CLAUDE_IMPORT.md` — this guide.

**Next phase:** none for now. The three studio albums and the documented-collaboration remix release are exhausted. Further work could focus on specific non-duplicate EPs only if requested.


## Claude import note

- 4 rows imported (3 studio + the 1990 remix album). New genre newbeat (parents ebm, acidhouse).
- Body to Body: instruments drums changed to drummachine (the source documents programmed drums only).
- Scene BE en 1980 dance,electronic (sung in English, not a local discovery). No artist influences (none named).
