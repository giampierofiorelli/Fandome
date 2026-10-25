# Daft Punk — Fandome Phase 01 import

Branch checked: `descriptors` (read only). Artist ID: `daftpunk`. No published `docs/descriptors/daftpunk.csv` or `docs/descriptors/incoming/daftpunk.csv` was present at check time.

## New rows in this ZIP only

- `daftpunk-homework` — *Homework* (1997, studio; already in catalogue)
- `daftpunk-discovery` — *Discovery* (2001, studio; already in catalogue)
- `daftpunk-daftclub` — *Daft Club* (2003, remix; ADD to catalogue)
- `daftpunk-humanafterall` — *Human After All* (2005, studio; already in catalogue)

All rows are exactly 27 columns, `draft`. `landmark` identifies a defining artist recording, **not** a reason to mistake genre-level influence for recording evidence. No previous phases or other artists are included.

## Catalogue change needed

Add `['Daft Club', 2003]` with type `remix` to Daft Punk (`daftpunk`) chronological listing in `src/data/catalog.ts` / seed as appropriate. Preserve IDs for Homework, Discovery, Human After All. No co-billed Daft Punk album in this phase. *Daft Club* lists remix contributors on individual tracks, not a jointly billed album: DO NOT create entries in `coBilled.ts` simply because remixers are named.

## New controlled tokens requiring Claude import

**Genres:** `chicagohouse` (parents: `house`), `leftfieldhouse` (parents: `house`). The text 'French house' is mapped to existing `frenchtouch`, not automatically to a new `frenchhouse` synonym. Use `src/data/genreFamilies.ts` and validator list.

**Instruments:** no new tokens; all are already available. For remixes, only the instrument explicitly documented for the 2003 recording is supplied: `sampler`; original album equipment is NOT automatically inherited for remixes.

**Production:** `tr707` (Roland TR-707), `tb303` (Roland TB-303), `juno106` (Roland Juno-106), `sp1200` (E-mu SP-1200), `rolands760` (Roland S-760 sampler), `alesis3630` (Alesis 3630 compressor), `datrecording` (recorded to DAT and resampled), `rolandsvc350` (Roland SVC-350 vocoder). Existing tokens used: `sampling`, `tr909`, `tr808`, `linndrum`, `talkbox`, `vocoder`, `autotune`, `distortion`, `harmonizer`, `mpc`, `ableton`. **Verify tokens with current lists before validator run**. The proposed pedal and eight-track specifications are excluded from the row because publicly circulating claims lack robust album-specific session verification.

## Producer-credit safeguards

- *Homework* and *Human After All*: Thomas Bangalter and Guy-Manuel de Homem-Christo. Do **not** add Gildas Loaëc or Cédric Hervet just because the latter release carries their production-coordination credits.
- *Discovery*: main producers are the duo, with **Todd Edwards** (`Face to Face`) and **Romanthony** (`Too Long`) specifically credited as producers/co-producers. Romanthony's vocals on `One More Time` alone do not confer an album-wide producer role.
- *Daft Club*: main original-track producers the duo, Todd Edwards on two `Face to Face` mixes and Romanthony on his source tracks, plus **Chilly Gonzales** separately credited as producer of `Too Long (Gonzales Version)` in the original remix-record credits. The Neptunes, Basement Jaxx, Slum Village, Laidback Luke, Cosmo Vitelli etc. are **confirmed as remixers**; do NOT automatically reinterpret the remixer role as musical producer.

## Release/genre caveats

- Original European *Homework*: 20 Jan 1997; US edition later. Original *Discovery*: 12 Mar 2001. Original *Daft Club*: 1 Dec 2003 (2021 reissue irrelevant for the year). *Human After All*: 14 Mar 2005.
- `chicagohouse` and `frenchtouch` on *Homework* describe the dominant Paris/Chicago dance connection; `acidtechno` and `gfunk` only apply to certain tracks, and are down-weighted accordingly.
- *Daft Club* has high track-to-track sonic diversity; album-wide acoustic instruments and particular synthesizers cannot be transferred from `Discovery`. Do not transform remix names into `influenced_by`.
- `Human After All` guitar/drum-machine setup is supported by Le Monde; uncertain DigiTech pedal and eight-track identifications are excluded. Ableton's artist interview connects Live to the duo's 2005 work without substantiating a precise per-track version.
- Some album-style comparisons such as rock/soft-rock are specific to tracks or arrangements. Genre evidence includes `scope`.
- No Wikipedia-only claims are necessary to make any major descriptor decision.

## Planned next phase (strict chronological, no repeats)

**Phase 02:** `Human After All: Remixes` (2006 original Japanese release, remix), `Alive 2007` (2007 landmark live album), `TRON: Legacy` (2010 original film soundtrack), `Random Access Memories` (2013 studio). Treat the 2014 international publication of the 2006 remix album as an edition, not a separate original album. Do not include routine 2023 alternate RAM mixes or compilation duplicates. `Alive 1997` (2001 release) excluded under user rule absent independent evidence of landmark status; `Musique Vol. 1` is a singles compilation, not a distinct album work. Evaluate any additional landmark record only with evidence, preserving the chronological phase sequence.

## ZIP files

1. `CLAUDE_IMPORT.md`
2. `daftpunk_phase01_rows_ONLY.csv`
3. `daftpunk_phase01_sources.csv`
4. `daftpunk_phase01_genre_evidence.csv`
5. `daftpunk_phase01_evidence-notes.md`
6. `daftpunk_phase01_catalog-audit.csv`

This ZIP is only a research/import handoff. Nothing was written to GitHub.
