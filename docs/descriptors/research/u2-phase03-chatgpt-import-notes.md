# CLAUDE_IMPORT — U2 Phase 03 (27 October 2026)

**Artist:** `u2` (U2) · **Release cut-off:** 27 October 2026 · **Status:** `draft` · **Import only the new three phase-03 rows.** The source and genre evidence are intentionally additional research tables, **not** descriptor rows.

## Files in this ZIP

1. `u2_phase03_rows_ONLY.csv` — exact 27-column header + **three new rows**, no phase-01/02 rows.
2. `u2_phase03_sources.csv` — source-level provenance for this phase's albums only.
3. `u2_phase03_genre_evidence.csv` — one genre/source/scope per row.
4. `u2_phase03_evidence-notes.md` — per-album all eight scales, instrumentation, production, original/reissue editions, controversial credits, other fields and critic disagreement.
5. `u2_phase03_catalog-audit.csv` — exact GitHub `catalog.ts` status.
6. `CLAUDE_IMPORT.md` — instructions and taxonomy additions (this file).

## This phase's album IDs

| Album ID | Release | Year | Type | In live `catalog.ts`? | Action |
|---|---|---:|---|---|---|
| `u2-rattleandhum` | Rattle and Hum | 1988 | `soundtrack` | **No** | **Add** original 1988 record (not merely a live LP). |
| `u2-achtungbaby` | Achtung Baby | 1991 | `studio` | **Yes** | Keep existing ID; do not add duplicate. |
| `u2-zooropa` | Zooropa | 1993 | `studio` | **Yes** | Keep existing ID; do not add duplicate. |

The inspected branch's U2 `catalog.ts` row is `['u2','U2',... [['Boy',1980],['War',1983],['The Joshua Tree',1987],['Achtung Baby',1991],['Zooropa',1993],['All That You Can’t Leave Behind',2000],['How to Dismantle an Atomic Bomb',2004]]]`. The Phase-01/02 proposed additions do **not** yet appear in this branch snapshot; they remain **separate earlier-phase responsibilities**, never silently duplicated in this ZIP.

## Album to add to the catalogue

- `['Rattle and Hum', 1988]` — Fandome type `soundtrack`, original release 10 October 1988, not a compilation or a standalone live album. [Original U2 publication](https://www.u2.com/products/rattle-and-hum); [MusicBrainz: Album + Soundtrack](https://musicbrainz.org/release/96927375-9ebc-4592-9507-b47c0274a56c). `id = u2-rattleandhum` by the existing lowercase letters-only title slug rule.

## Multi-artist billing

**None in this phase.** B.B. King, Dylan, Johnny Cash, choir, and studio players are track-level guests/collaborators, not co-billed album artists for *Rattle and Hum* or *Zooropa*. Do not create `coBilled.ts` entries for them.

## New genre tokens to register

| Token | Sourced original label | Album | Scope / evidence |
|---|---|---|---|
| `rootsrock` | Roots Rock | *Rattle and Hum* | Full-album style in [Album of the Year](https://www.albumoftheyear.org/album/4435-u2-rattle-and-hum.php). |
| `memphissoul` | Memphis soul | *Rattle and Hum* | *Angel of Harlem*, [contemporary Knight-Ridder review](https://www.u2songs.com/news/u2s_rattle_much_much_more_than_a_soundtrack). |
| `abstract` | Abstract | *Zooropa* | Original 1993 cassette style tag in [edition credits](https://www.chartsurfer.de/artist/u2/zooropa-album_frcgnn.html); **weak as a whole-album label; texture only**. |

These tokens **are not silently mapped** to `americana`, `soul`, `experimental`, or any close term. Claude must update `src/data/scenes.ts`, `src/data/genreFamilies.ts` and fixed allowlist in `scripts/validate-descriptors.ts` (or equivalent schemas). Proposed taxonomy parents for review only: `rootsrock -> rock`; `memphissoul -> soul`; `abstract -> experimental`. These are proposed *relationships*, not alleged critic quotations.

**Dependent token from phase 02:** `heartlandrock` is used on *Rattle and Hum* because Album of the Year explicitly says Heartland Rock. It was **already proposed for registration in U2 phase 02**, but remains absent in the current `descriptors` branch. Import phase 02 first or verify the token has since been added. Do **not** treat this as a new phase-03 token. (`bigmusic` from phase 02 is not used in these three rows.)

**New instruments:** none. All current instrument values are in the read branch `src/data/instruments.ts`. `organ` covers Hammond; `harmonium` is a distinct instrument (documented on *Zooropa*). `sampler` is a physical sampler on *Zooropa*, supported by the Akai S1100 engineering interview.

**New production tokens:** none. `fieldrecordings`, `concertrecording`, `analogtape`, `datrecording`, `sampling`, `drumloop`, `akais1100`, `digitalediting`, `sonicmanipulation`, `stringarrangements`, `wahwah`, `feedback`, `falsetto` and other values used are already registered. `akais1100` is deliberately **not** `akais1000`.

## ARTIST INFLUENCES

**Not repeated.** The group-wide source-based `ARTIST INFLUENCES` belong **only in Phase 01**. `influenced_by` for *Achtung Baby* in this phase refers strictly to this album, using qualified critics' exact names; these are distinct from the group-wide influence list.

## Critical caveats for Claude

1. **Achtung Baby / Lillywhite:** The original [1991 original track credits](https://albumlinernotes.com/Achtung_Baby.html) and [MusicBrainz](https://musicbrainz.org/release/0f20dea8-bf8a-3d93-bfa2-56d543209641) explicitly identify Steve Lillywhite as **producer on individual tracks**. U2's simplified original product page lists mainly Lanois + Eno and says Lillywhite mixed other cuts; **mixing alone is not the reason he is included**. Phase-03 row includes the actual **track production credit**. Flood and Robbie Adams remain engineers/mixers, not original-album producers.
2. **Zooropa / Lanois:** U2's original LP names Flood, Eno and Edge. Some 1993 cassettes assign `co-producer` to Daniel Lanois on *Numb* while other original issues say it was **originally recorded with** him. This conflict is disclosed in evidence notes and **left out** of producer cell pending original-master credit reconciliation. Do not add Lanois simply because he produced the previous album.
3. **Rattle and Hum:** Original audio title is a 16-track **soundtrack**, not the concert film itself and not the later *Excerpts* EP. Original LP lists Jimmy Iovine as primary credited album producer. Later crowdsourced issue-level metadata sometimes assigns other producers to individual tracks; do not automatically promote engineers and arrangers.
4. **Instruments and machinery:** Sound on Sound's original engineer interview explicitly documents **Akai S1100, Otari analogue tape and DAT** for *Zooropa*. No source here identifies a specific TR-808/909, vocoder, specific Fairlight model or named synthesizer for the released 1991/1993 recordings, so these are absent. *Achtung Baby* digital editing on the master does not mean it was tracked digitally throughout.
5. **Genre granularity:** Full release-style genres go first. Labels heard in only one song or as a texture follow, **with per-genre scope** in the genre evidence ledger. `memphissoul` and `abstract` require explicit taxonomy review; latter is an original physical-edition style label, not a primary musical identity. `synthpop` is source-specified for *Zooropa*; do not remap to `electropop`.
6. **Album-specific influences:** *Achtung Baby* critic-source influences are qualified, with [The New Yorker](https://www.newyorker.com/magazine/1992/02/17/1992-02-17-075-tny-cards-000145798), [Irish Times](https://www.irishtimes.com/culture/music/2024/09/27/u2s-country-mile-and-picture-of-you-x-w-two-fantastic-songs-but-its-hard-not-to-be-haunted-by-what-they-represent/) and [AllMusic](https://www.allmusic.com/artist/u2-mn0000219203). No `influenced_by` value is inferred merely from a cover, a guest appearance or a shared producer.
7. **Date cutoff:** No post-27 Oct 2026 release is included. Reissues, remasters, promotional EPs, documentaries and film versions do not create new full-album rows.

## Next phase 04 (provisional chronology)

1. **Original Soundtracks 1** (1995) — by **Passengers**, the U2/Brian Eno side project; first verify original exact billing and decide appropriate `coBilled.ts`/catalog representation rather than placing it in U2's standard discography without review.
2. **Pop** (1997) — U2 studio album.
3. **All That You Can't Leave Behind** (2000) — U2 studio album, already in existing catalogue.

If the Passengers record does not meet the explicit landmark-collaboration exception, skip it and proceed to U2's next eligible record; **no compilation is a substitute**. The next ZIP must contain only its selected new rows.

**Importer:** add `u2-rattleandhum`; register new phase-03 genre tokens and any outstanding earlier-phase genre; add only these three rows to the U2 descriptor store; run the validator/tests. Never overwrite the existing phase-01 or phase-02 research packages and do not add completed records twice.
