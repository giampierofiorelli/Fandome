# CLAUDE_IMPORT — Queen — Phase 03

**Branch:** `descriptors`. **Research date:** 2026-10-26. **Incremental package:** four original-release albums, four **new** descriptor rows, **no Phase 01/02 rows** and no live albums or compilations. This ZIP has the six required documents only. This is a research hand-off; GitHub files have **not** been modified.

## Phase contents

| Album ID | Album | Year | Type | Catalog status |
|---|---|---|---|---|
| `queen-flashgordon` | Flash Gordon | 1980 | soundtrack | Present |
| `queen-hotspace` | Hot Space | 1982 | studio | Present |
| `queen-theworks` | The Works | 1984 | studio | Present |
| `queen-akindofmagic` | A Kind of Magic | 1986 | studio | Present |

**Catalog:** ALL FOUR are already listed under `queen` in the current `src/data/catalog.ts` branch. No additions in this phase. Existing `docs/descriptors/queen.csv` contains four Phase 01 rows as of the check; Phase 02 may be awaiting import. Import only the four Phase 03 rows; do not duplicate other phases or replace the existing file.

## Schema / tokens

- The descriptor CSV contains 27 columns in the current guide order and only this phase's four rows. Genre evidence is **one row for each genre** with scope and source IDs, found in the sources CSV. All 8 scale values are integer editorial judgements cross-checked against album-specific material.
- `genres` are ordered by musical centrality; small-scale/track-only and metadata genres come after dominant genres. Similar-looking but different genres are not conflated.

### NEW genre token — add to `scenes.ts`, `genreFamilies.ts` as appropriate, and validator

- `progressiveelectronica`: **exact phrase** “progressive electronica” in label press feature [F3, F4]. Not the same spelling or source term as existing `progressiveelectronic` (“Progressive Electronic”, classified separately by [F8]). Both appear on *Flash Gordon*. Place `progressiveelectronica` under electronic/experimentally oriented family.

### NEW instrument tokens

None. All currently included instruments in the rows exist in the `src/data/instruments.ts` allowlist. The `sampler` instrument on *A Kind of Magic* is supported by 1986 actual use; avoid inventing an orchestra on *Hot Space*. The orchestra on *Flash Gordon* occurs only in parts of the original album, not across every cue.

### NEW production tokens — do not substitute nearby models

- `linnlm1` = **Linn LM-1 Drum Computer** on *Hot Space* [H3]; it is NOT automatically `linndrum`, the LinnDrum LM-2.
- `oberheimobxa` = **Oberheim OB-Xa**, identified as used on *The Works* by [W6]; distinct from `oberheimobx` in Phase 02 and `oberheimob8` in validator.
- `kurzweil250` = **Kurzweil 250** used by Mack for sampled/pitch-lowered Mercury intro on *One Vision*, via **first-hand 1986 interview** [A7]; not `kurzweilk2000`.

### Production / original editions caveats

- *Flash Gordon* **type=soundtrack**, even though the official site calls it a studio release in the chronological albums. It is Queen's sole purpose-made full film soundtrack LP. Its original sleeve credits **Brian May and Mack** as producers, Queen in the wider original creation; Howard Blake provided **orchestral arrangements** and is **not** a credited album producer [F1,F5]. Dialogue is not a new vocalist and is marked `voice=spoken` alongside mostly instrumental cues. **No soundtrack-only orchestral instrumentation is copied into another LP.** The soundtrack includes distinct heroic rock songs, ambience and electronic cues, not merely `soundtrack` as a musical descriptor.
- *Hot Space*: `producers=Queen|Mack|David Bowie`, because Bowie co-produced *Under Pressure* [H1,H4]. **Arif Mardin** is separately credited with horn arrangement / additional production on *Staying Power*. Because this is an **additional-production-only** credit, he is deliberately **excluded** from the album producers field [H3,H4]. The original *Cool Cat* album has no Bowie vocal; those vocals were removed. Some date sources place UK release on May 4 and others May 21; only year is needed [H1,H2]. The initial pop/dance emphasis coexists with rock side two; editors disagree on quality. Brian May describes **the Isley Brothers** as an actual inspiration for the album in a 1982 interview [H6]. `influenced_by` does not mean the Isley Brothers appeared as guests or were sampled.
- *The Works*: `producers=Queen|Mack`; David Richards was involved in engineering but not a credited full producer for this 1984 album [W1,W3]. Fred Mandel performed synth/programming, not album production [W3,W4]. The original 1984 LP contains 9 tracks; **do not use bonus 12-inch mixes** to judge its sound. `jupiter8`, `rolandvp330`, `linndrum` and `oberheimobxa` are differentiated by sources; the Jupiter 8 in a demo is discussed with its later use in the released recording [W6,W7]. `fairlight` is reported for *Machines* specifically [W3]. `vocoder` refers to Roger's *Machines* vocoded line and *Radio Ga Ga* [W5,W7]. No claimed specific studio brand is derived from concert equipment [W7].
- *A Kind of Magic* is a **studio album**, **not** the full film soundtrack for *Highlander*. The songs are substantially revised from film versions and several are unrelated to the film [A1,A2]. Album producers are **Queen, Mack, David Richards** across different tracks; **Michael Kamen arranged/conducted the orchestra on *Who Wants to Live Forever* but did not produce the Queen studio album** [A3,A5]. `kurzweil250`, `sampling`, `pitchedvocals` and vocal layering are directly discussed by Mack; backwards elements by Roger Taylor [A7] and detailed retrospectives [A6]. `drumprogramming` is track-supported [A4], not necessarily across all songs. **Do not add the different 1986 bonus-track instrumental *Forever* as its own album**. The instrument model of Spike Edney's synth in *Forever* is disputed between Yamaha DX-7 and Emulator II [Queen Songs]; excluded as not proven for the original core album.

## Documentary evidence, restraint and disagreement

- `voice=instrumental|powerful|spoken|choral` is for the mostly instrumental *Flash Gordon* soundtrack, not a claim of sung lyrics throughout. Film samples/dialogue are speech rather than lyrics. *Hot Space* features Mercury falsetto (not in the `voice` allowed set; correctly entered in **production**, with `voice=clear|powerful...`).
- *Hot Space* is both criticized for limiting Brian May's guitar and confirmed by [H3] to contain substantial guitar parts. Both claims are documented rather than simplifying the record to all synthesizers or all electric guitar.
- *The Works* pivots to guitar rock while retaining synthesized pop/electronica experiments; *A Kind of Magic* is part film-inspired and part pop single collection, a distinction reflected in the scale scores.
- `influenced_by` does **not** include Bowie as a guest/producer, Michael Kamen as an arranger, the *Highlander* film as a literary/cinematic theme, or apparent similarities to other artists.
- All `sounds_like` entries are **editorial resemblance candidates**, and should not be mistaken for documented influences.
- `landmark=1` marks these albums as meaningful turning points in the band's musical identity. The score is unique in Queen's core discography; *Hot Space* a dance pivot; *The Works* and *A Kind of Magic* major 1980s singles-driven records.

## Co-billed releases

None in Phase 03. *Under Pressure* is a track jointly performed with David Bowie, **not a co-billed album** and not an entry in `coBilled.ts`. *A Kind of Magic* is not a Queen + Michael Kamen album. **Phase 04** includes 2008 *The Cosmos Rocks* explicitly credited to Queen + Paul Rodgers, subject to separate `coBilled.ts` audit.

## ARTIST INFLUENCES

Not repeated: Phase 01 already contains artist-wide influences. Album-specific confirmed named influence for this phase: **The Isley Brothers** for the *Hot Space* material, based on Brian May's contemporaneous interview [H6]. References to Roxy Music, Chic, and others as sonic echoes remain `sounds_like` where appropriate and do not become causal influence evidence.

## What to import / verify

1. Add the three new machine tokens and one new genre token in appropriate allowlists (and validator where needed).
2. Append ONLY `queen_phase03_rows_ONLY.csv` to the artist descriptor file; never reimport earlier phase rows.
3. Ensure `queen-flashgordon` exactly matches the catalogue title and ID; run Fandome descriptor validator and tests after tokens.
4. Read evidence notes and per-genre scope when reviewing relative weight; `confidence` is a **whole-row** research judgement, not proof that every narrowly contextual genre is dominant.

## Next: Queen Phase 04

1. *The Miracle* (1989) — studio.
2. *Innuendo* (1991) — studio.
3. *Made in Heaven* (1995) — studio.
4. *The Cosmos Rocks* (2008) — studio, **Queen + Paul Rodgers** credit; different frontman, separately interpret sonic similarities.

Exclude *Live Magic*, *Live at Wembley ’86*, *Greatest Hits* collections and other recycled performance compilations.
