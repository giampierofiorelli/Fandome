# CLAUDE IMPORT — Toto, Phase 02

**Date:** 28 October 2026. **Repository:** `giampierofiorelli/Fandome`, **branch:** `descriptors`. All research is read-only; no GitHub files have been changed.

## Phase contents — four new descriptor rows only

| album_id | Title | Year | Type | In catalog.ts? |
| --- | --- | --- | --- | --- |
| `toto-isolation` | Isolation | 1984 | studio | **Yes** |
| `toto-dune` | Dune | 1984 | soundtrack | **No — ADD** |
| `toto-fahrenheit` | Fahrenheit | 1986 | studio | **Yes** |
| `toto-theseventhone` | The Seventh One | 1988 | studio | **No — ADD** |

Artist ID `toto` (existing in `src/data/catalog.ts`, absent from `src/data/seed.ts`). Album IDs use catalog.ts's letter-and-digit slug rule. `docs/descriptors/toto.csv` did not exist when checked. Phase 01 previously supplied Toto (1978), Hydra (1979), Turn Back (1981) and Toto IV (1982); **DO NOT reimport or recreate those rows here**. The phase 01 catalog audit also identified missing Turn Back; this phase is strictly incremental.

## Catalogue additions required before validation

- **Dune**, 1984, `soundtrack`; `album_id=toto-dune`. The original Toto/Brian Eno film-score album, included because it is a significant original band composition, not a collection of licensed songs. Original release was in November/December 1984 depending on edition/database; use **1984**.
- **The Seventh One**, 1988, `studio`; `album_id=toto-theseventhone`. On the original 11-track LP, the title song was NOT on the core album, despite later single/reissue listings.

In the catalog append `['Dune', 1984], ['The Seventh One', 1988]` in chronological position for Toto. Ensure `Turn Back` from phase 01 is separately added if still absent. Do not add live or compilation releases.

## Tokens

- **New genres:** none. Every genre token in these rows already exists in `src/data/scenes.ts`, including `symphonicrock`, `modernclassical`, `downtempo`, `technopop`, `easylistening`.
- **New instruments:** none. `mallets` is the existing vibraphone token; `steeldrums` and `steelguitar` are separate existing tokens.
- **New production tokens:** none. Reversed guitar sounds are reported on *Dune*, but no tape-reversal mechanism was established; neither `tapeeffects` nor `backmasking` is assigned.
- **Genre provenance:** Each of the **34** listed genres has an evidence row with whole-album/some-tracks/texture scope in `toto_phase02_genre_evidence.csv`. Many lower-priority broad AllMusic styles are catalog-level descriptions, not separate listening tests.

## Caveats and editorial decisions

1. *Dune*: *Prophecy Theme* is composed/performed by **Brian Eno, Daniel Lanois, Roger Eno**, distinct from Toto's music. Original booklet: music produced by Toto except this one track by Brian Eno. Gilbert Marouani is the **soundtrack executive producer**, not a track producer. Score includes Vienna Symphony Orchestra and Volksoper Choir; the album is primarily instrumental, with no sung lyrics and therefore **empty `language` and `lyrics`**. Source: https://www.duneinfo.com/music/dune-original-soundtrack-recording .
2. `Dmitri Shostakovich` is included only for *Dune* in `influenced_by`: David Paich directly described hearing two symphonies played by David Lynch as the music brief. Source: https://pitchfork.com/thepitch/the-unlikely-story-of-totos-soundtrack-for-david-lynchs-infamous-dune-adaptation/ . No unverified influences are inferred for other phase 02 albums.
3. *Isolation* singer is **Fergie Frederiksen** and bassist is **Mike Porcaro**; *Fahrenheit* and *The Seventh One* feature **Joseph Williams**. Bobby Kimball credited on some background parts of *Isolation* but **not** as lead singer of its finished album.
4. *Fahrenheit* closing piece *Don't Stop Me Now* is jazz with **Miles Davis** on trumpet. Jazz is a **track-level tail genre**, not an album-wide lead category. Michael Jackson is a documented sound comparison on *Till the End*, NOT album influence.
5. *The Seventh One* features Andy Narell steel drums, David Lindley lap steel, Jim Horn woodwinds, Joe Porcaro vibraphone, named horn/string arrangements, and Steve Porcaro programming. Strings/horns are sourced to specific track credits; do not infer instruments from genre alone.
6. Critical opinions conflict. Album ratings are editorial estimates under the guide scales. `status` is always `draft`; no second-person review has been done. The soundtrack *Dune* is intentionally treated as `landmark=1` for its singular sound within Toto, not for chart impact.
7. Date discrepancy: *Isolation* first-release dates differ between sources (October 18/November 5 1984); both place it before *Dune* (November/December 1984). Only **year** is encoded.

## Files (six)

1. `CLAUDE_IMPORT.md` — read this first
2. `toto_phase02_rows_ONLY.csv` — 4 new rows, exact 27-column header
3. `toto_phase02_sources.csv` — research source URLs, claim support and strength
4. `toto_phase02_genre_evidence.csv` — one provenance row per genre
5. `toto_phase02_evidence-notes.md` — assessment rationale, equipment and editorial caveats
6. `toto_phase02_catalog-audit.csv` — full discography inventory, missing album audit and phase planning

## Next phase (03)

Four albums in chronological order, none repeated: **Kingdom of Desire** (1992), **Tambu** (1995), **Mindfields** (1999), **Through the Looking Glass** (2002). Phase 04: **Falling in Between** (2006), **Toto XIV** (2015), **Old Is New** (2018). Compilation and live albums excluded.


## Claude import note

- 4 rows appended; Dune and The Seventh One were already added to the catalogue with phase 01.
- Same self-reference rule as Boz Scaggs in phase 01: The Tubes (The Completion Backward Principle) removed from Isolation (Lukather co-wrote and played on that record) and Michael Jackson removed from Fahrenheit (Toto members played on and wrote for Thriller).
- Dune influenced_by Shostakovich kept: Paich says Lynch played him two Shostakovich symphonies as the brief.
- Reception researched by Claude.
