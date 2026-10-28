# Claude import — Kim Carnes, Phase 02

**Artist:** Kim Carnes
**Fandome artist ID proposed in Phase 01:** `kimcarnes`
**Branch checked:** `giampierofiorelli/Fandome` → `descriptors`, both `src/data/catalog.ts` and `src/data/seed.ts` plus `docs/descriptors/kimcarnes.csv`.
**Status:** four new album rows, `draft`, second-person verification pending. **Strictly incremental.**

## Import records

| album_id | title | year | type | catalogue |
|---|---|---:|---|---|
| `kimcarnes-romancedance` | *Romance Dance* | 1980 | studio | add |
| `kimcarnes-mistakenidentity` | *Mistaken Identity* | 1981 | studio | add |
| `kimcarnes-voyeur` | *Voyeur* | 1982 | studio | add |
| `kimcarnes-caferacers` | *Café Racers* | 1983 | studio | add |

Artist/album check on GitHub found no current `kimcarnes` artist in the two seed/catalogue files or published descriptor CSV. The existing Phase 01 ZIP delivered four 1971–79 albums; **do not reimport those records**. If Claude has imported Phase 01 in the meantime, append only these four Phase 02 rows.

## Files inside this ZIP

1. `kimcarnes_phase02_rows_ONLY.csv` — 27-column CSV; four proposed album descriptors only.
2. `kimcarnes_phase02_sources.csv` — traceable source registry with album scope and evidence strength.
3. `kimcarnes_phase02_genre_evidence.csv` — one evidence row for every assigned genre, explicitly marking whole album / some tracks / texture.
4. `kimcarnes_phase02_evidence-notes.md` — per-album production, credited instruments, 0–5 rationale and caveats.
5. `kimcarnes_phase02_catalog-audit.csv` — album and artist additions to the current catalogue.
6. `CLAUDE_IMPORT.md` — this file and import warnings.

## New tokens

None required. All genre, instrument and production tokens in this ZIP are present in the current `scenes.ts`, `instruments.ts` and `production.ts` vocabularies. Production models are carefully scoped: Synare on a 1981 track; Oberheim DMX on the 1982 title track; Jupiter-8 on a 1983 track (verify independently from original credits).

## Important credits and editions

- *Romance Dance*: George Tobin producer; Mike Piccirillo credited "in association"; Daniel Moore producer on one song. Val Garay mixed/finished album, do not add as album producer.
- *Mistaken Identity*: Val Garay producer; “Bette Davis Eyes” recorded as a live studio performance with no overdubs. Garay and Carnes give conflicting take numbers; no `onetake` token.
- *Voyeur*: Val Garay producer; DMX drum computer is Oberheim DMX and not the AMS effects box. Generic Prophet credited, model unverified.
- *Café Racers*: Keith Olsen producer; track-level Jupiter-8 attribution rests on third-party sleeve transcription.
- Later combined or bonus-track editions never create new album rows.

## Artist influences

Artist-wide research was provided with Phase 01; not repeated as Phase 02 album-specific influences. None of the sources reviewed demonstrates a direct named musical influence on these four records. Thus `influenced_by` remains empty; `sounds_like` is an editorial comparison only.

## Next phase (03)

*Barking at Airplanes* (1985), *Light House* (1986), *View from the House* (1988), and *Checkin' Out the Ghosts* (1991). Check original release year, editions and recording credits before importing. A further phase may cover *Chasin' Wild Trains* (2004).


## Claude import note

- 4 rows appended; no new tokens; albums already in the catalogue.
- Romance Dance: Smokey Robinson removed from sounds_like: the album covers his song More Love (the original of a cover is not a likeness).
- Reception researched by Claude.
