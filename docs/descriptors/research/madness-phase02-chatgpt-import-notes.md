# CLAUDE_IMPORT — Madness, phase 02

Research date: **28 October 2026**  
Artist: **Madness** · artist ID: `madness` (proposed in phase 01)  
Phase 02: **four NEW studio-album rows only**, strictly incremental. No rows from phase 01. UTF-8 with BOM CSV files.

## Import the four rows

| album_id | original album | year | type | landmark |
|---|---|---:|---|---:|
| `madness-keepmoving` | Keep Moving | 1984 | studio | 1 |
| `madness-madnotmad` | Mad Not Mad | 1985 | studio | 0 |
| `madness-wonderful` | Wonderful | 1999 | studio | 1 |
| `madness-thedangermensessionsvol1` | The Dangermen Sessions Vol. 1 | 2005 | studio | 0 |

**Action:** Add these four studio albums to `catalog.ts` if absent, preserving EXACTLY these IDs and titles. Import `madness_phase02_rows_ONLY.csv` as the four *new* descriptor rows. Run repo validator and tests. Leave any earlier Madness rows untouched.

## Identity and catalogue policy

The branch `descriptors` public `catalog.ts`, `seed.ts` and `docs/descriptors/madness.csv` were checked 28 October 2026: no Madness room/descriptor file yet. Phase 01 created a proposed `madness` room and four descriptors. If phase 01 has already been imported by Claude into its own worktree, **keep that artist ID**, append these four albums, and never re-import the phase 01 CSV. If not imported, phase 02 requires phase 01 artist and albums first. See audit CSV.

**IMPORTANT CORRECTION relative to the preliminary phase 01 plan:** The 1988 LP *The Madness* is explicitly billed to **The Madness**, the post-1986 offshoot of four Madness members, with production credit The Three Eyes. DO NOT add as `madness-themadness` to the Madness catalogue; retain separate identity. Possible future standalone `themadness-themadness` needs independent Fandome room and separate research; it is NOT included in this ZIP. Sources: https://www.allmusic.com/album/the-madness-1988-mw0000961712 and https://www.classicpopmag.com/features/album-by-album-madness/ . This correction reduces the eventual Madness studio corpus by one and gives four-album phases 02 and 03.

## Original release / producer caveats

- `Keep Moving` is dated **1984** as the original UK album (US edition has changed tracks). Original pressing production Clive Langer and Alan Winstanley; **David Bedford** provided orchestration / string arrangements, *not* production. Actor Michael Caine appears as a **spoken voice**, not a producer. Woodgate's triggers do not establish any named drum-machine model on this record.
- `Mad Not Mad` (1985) names **Dan Woodgate LinnDrum programming and keyboard sequences** in the original sleeve transcription, so `linndrum|drumprogramming|programming` are justified. Mike Barson absent; Steve Nieve and Roy Davies play keys and piano. Only **Clive Langer and Alan Winstanley** are primary album producers. Sources' ambiguous 'Matt Howe producer' credit conflicts with the contemporary album sleeve's assistant credit; do not import Howe as a primary co-producer without primary-source reconciliation.
- `Wonderful` (1999) is an original 11-track reunion studio LP (not 1999 live *Universal Madness*). Langer and Winstanley produced; Simon Hale arranged strings and Terry Edwards arranged brass, not co-production. Ian Dury was a guest on *Drip Fed Fred* and **not a producer**.
- `The Dangermen Sessions Vol. 1` (2005) was *released as Madness*, though the band used the performing alter ego The Dangermen. **It is a freshly recorded studio covers album, not a compilation or a live release.** Credited producers on different tracks: Dennis Bovell, Steve Dub, Segs, and Madness. The Exclaim! review says Langer/Winstanley, but original pressing credit is more authoritative and refutes that claim. The 2023 expanded edition includes bonus recordings not represented in this descriptor.

## New tokens

**Genres:** none new in phase 02 *if* phase 01's `skarevival` has already been added. `skarevival` is reused from phase 01, still a **proposed new token** in the public `scenes.ts` as checked. Importer must add it if absent; do not incorrectly map onto `thirdwaveskarevival`. Other genre tokens (`sophistipop`, `blueeyedsoul`, `bossanova`, `motown`, `calypso`, `chamberpop`, `twotone`, `dub` and the rest) already appear in the public genre union.

**Instruments:** none new. `dobro` is already a token; the physical release calls Steve Donnelley's instrument a Dobro / resonator guitar. On this album use only `dobro`, and only as a low-weight instrument.

**Production:** none new. `linndrum`, `drumprogramming`, `programming`, `stringarrangements` and `hornarrangements` already appear in the official production list. Do not deduce recording formats or named analog synths without liner or studio documentation.

**Co-billed albums in phase 02:** none. All four LPs were credited to Madness.

**Influences:** artist-wide direct statements were delivered in phase 01; do not repeat that artist-level list here. Individual `influenced_by` values are conservatively blank because the specific song-cover and sonic-resemblance examples are not new album-specific artist assertions. *Drip Fed Fred* featuring Ian Dury and Prince Buster covered on *Dangermen* cannot substitute for influence evidence. Editorial sonic parallels are in `sounds_like` with source reasons in evidence notes.

## Research files

1. `madness_phase02_rows_ONLY.csv`: 27-column schema, 4 new rows, status draft.
2. `madness_phase02_sources.csv`: album-focused source and review / liner credit evidence, working published URLs; links may be paywalled or time out from some environments.
3. `madness_phase02_genre_evidence.csv`: one sourced record for *every* genre in every new row; scope marks single-track references.
4. `madness_phase02_evidence-notes.md`: reasons for all scales, instrumentation, production, genre scope and disputed credits.
5. `madness_phase02_catalog-audit.csv`: four albums to add, one offshoot to exclude, next four original studio albums.
6. `CLAUDE_IMPORT.md`: this import memo.

## Next phase — 03 (four studio albums, still chronological)

1. *The Liberty of Norton Folgate* (2009)
2. *Oui Oui Si Si Ja Ja Da Da* (2012)
3. *Can't Touch Us Now* (2016)
4. *Theatre of the Absurd Presents C'est La Vie* (2023)

Skip 1983 US *Madness* compilation, greatest hits, live sets and the 1988 LP from the distinct act **The Madness**. Only one ZIP per phase.

## Claude import note (Oct 2026)

- sounds_like: Scritti Politti removed from Mad Not Mad (The Sweetest Girl is a cover; a covered artist is not a comparison), Ian Dury removed from Wonderful (he guests on Drip Fed Fred), Prince Buster removed from The Dangermen Sessions (covered songs). UB40 (Labour of Love) kept (AllMusic).
- The Dangermen Sessions producers: Dennis Bovell, Steve Dub, Segs; the band's own credit dropped (not a link to other acts).
- The Madness (1988) stays out of the Madness catalogue, as phase 02 confirms it is billed to a separate act.

## Claude enrichment (reception pass, Oct 2026)

- Reception rows appended to `docs/descriptors/reception/madness.csv`.
- Mad Not Mad sounds_like: Bryan Ferry (Trouser Press: "sounding a bit like Bryan Ferry in more than one spot").
- Wonderful sounds_like: The Kinks replaced by XTC (no source for Kinks on this album; Trouser Press: "'Lovestruck' could almost be the Great Lost XTC Single").
- The Dangermen Sessions: UB40 (Labour of Love) confirmed by Trouser Press. Keep Moving: Bowie kept from Classic Pop (vocals on Michael Caine), not found elsewhere.
