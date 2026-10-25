# Giorgio Moroder — Fandome Phase 02 — Claude import (incremental only)

Prepared **2026-10-25**. GitHub repository `giampierofiorelli/Fandome`, branch **`descriptors`**, accessed in **read-only** mode. Confirmed Fandome artist ID: `moroder`. The descriptor file `docs/descriptors/moroder.csv` **now exists** and contains **four Phase 01 rows** (1969, 1970, 1972, 1973). **Do not overwrite it** or repeat any of those rows.

## Exact files in this ZIP

- `moroder_phase02_rows_ONLY.csv`: header + **four and only four new rows**, exactly 25 guide columns, all `draft`.
- `moroder_phase02_sources.csv`: original working URLs and evidence strength, one support claim per item.
- `moroder_phase02_genre_evidence.csv`: every phase02 genre, its album-versus-track scope, source IDs and certainty.
- `moroder_phase02_evidence-notes.md`: scores, blank values, original pressings, personnel, contradictory accounts and influence audit.
- `moroder_phase02_catalog-audit.csv`: preserve existing album ID; catalogue additions; original-edition caveats.
- `CLAUDE_IMPORT.md`: instructions and next phase.

## Phase 02 album IDs and current catalogue status

| album ID | original album | year | type | action |
|---|---|---:|---|---|
| `moroder-spinach1` | *Spinach 1* (the **Spinach** project with Michael Holm) | 1973 | studio | **add** |
| `moroder-einzelganger` | *Einzelgänger* (artist alias) | 1975 | studio | **add** |
| `moroder-knightsinwhitesatin` | *Knights in White Satin* | 1976 | studio | **add** |
| `moroder-fromheretoeternity` | *From Here to Eternity* | 1977 | studio | **already in catalogue**: descriptor only |

All four rows are **new descriptors** even though 1977 album exists in the catalogue; this is different from duplicating an existing descriptor. Do not fold Spinach into the 1973 *Giorgio's Music* row. Do not infer a different artist ID from the original **Spinach**/**Einzelgänger** performing names.

## New genre tokens needing linked additions (if retained)

| token | recommended parents | album | rationale / scope |
|---|---|---|---|
| `rockandroll` | `rock` | Spinach 1 | Original LP/reissue metadata says Rock & Roll. |
| `minimalsynth` | `electronic` | Einzelgänger | DMY explicitly calls it a minimal synth record. |
| `spacedisco` | `disco`, `electronic` | From Here to Eternity | Album of the Year album tag, **retrospective**, less reliable than signed criticism. |
| `progressiveelectronic` | `electronic`, `prog` | From Here to Eternity | Album of the Year album tag; partly supported by the evolving first-side suite, not confirmed historical movement label. |

**`psychedelicrock`** in Spinach 1 is **already added by Phase 01** on the inspected current branch (same token, do not add it twice). The other included tokens (e.g. `synthpop`, `electrodisco`, `eurodisco`, `hinrg`) also already exist. If a new token is retained, insert it into **all three**: `src/data/scenes.ts` Genre definition and display map, `src/data/genreFamilies.ts` parent map, and the validator's `GENRES` set in `scripts/validate-descriptors.ts`. Follow the local code's conventions. Remove an unsubstantiated token consistently from rows **and** genre evidence rather than silently dropping it.

## Import guards

1. Pull/refresh `descriptors` before modifying files. Match by `album_id`; append **only missing Phase 02 rows** into the existing `docs/descriptors/moroder.csv` (do not replace the four Phase 01 rows).
2. The *Spinach 1* row is **`confidence=low`** because an original production entity *Holm/Pietsch Productions* and chart-level Moroder/Holm producer credits differ. Source details in evidence notes. If revising `producers`, cite the original LP sleeve explicitly.
3. *Einzelgänger* sources credit Moroder as sole **producer**, with Reinhold Mack as engineer. Do **not** put Kraftwerk in `influenced_by` merely because critics hear resemblance. `language` is empty because prominent vocoder/vocal fragments do not prove the main singing language.
4. *Knights in White Satin*: original **six** tracks (no 2011 bonus edits). This is Moroder's live-ensemble-heavy 1976 disco record, not a wholly synthesized *From Here* precursor. Pete Bellotte is songwriter; original credited producer only Moroder. The Moody Blues appear in `influenced_by` strictly as source of a documented direct cover.
5. *From Here to Eternity*: original **eight** tracks, Moroder sole producer; Bellotte is writer/vocal collaborator, Koppers engineer and Wedel programmer. Strongly electronic instrumentation. Do not merge with 1985 compilation / edit.
6. Check every album genre-evidence line, especially weak `synthpop` (1973 retro taxonomy), `soul|rnb` (1976 retailer families), `spacedisco|hinrg` (1977 retrospective taxonomy).
7. Run `npx vite-node scripts/validate-descriptors.ts`, application tests/build. Leave every row `draft` until a separate review.

## Next phase — Phase 03 (chronological 1978–1979)

1. *Love's in You, Love's in Me* (1978; Giorgio & Chris Bennett; original co-billed collaboration; date and joint credits to recheck).
2. *Midnight Express* (1978; solo soundtrack, original original-score album; album release versus film date to audit).
3. *Music from Battlestar Galactica and Other Original Compositions* (1978; soundtrack-themed original album; confirm which selections Moroder produced and composed, not confused with Stu Phillips' score).
4. *E=MC²* (1979; studio; **already in Fandome catalog**, keep existing album ID).

**Separate-artist check:** The Moroder/Bellotte-produced *Munich Machine* by Munich Machine appeared May 1977, **before** this phase's July 1977 *From Here to Eternity*. It is a named collective rather than a Giorgio Moroder solo album. Evaluate it separately as a potential artist-room collaboration / connection; do not insert it into Phase 03 and thereby violate chronology. Verify original 1978 album issue dates in next phase, avoiding film premiere dates. No future phase content is included in this ZIP.

Original historical catalogue links: https://www.giorgiomoroder.com/music/munich-machine-munich-machine/ ; https://www.giorgiomoroder.com/music/giorgio-and-chris-loves-in-you-loves-in-me/ ; https://www.giorgiomoroder.com/music/midnight-express/ ; https://www.giorgiomoroder.com/credits/ .
