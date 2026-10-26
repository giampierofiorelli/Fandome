# CLAUDE IMPORT — Franco Battiato Phase 02 (incremental)

One ZIP for one phase. **Read-only research:** no GitHub commits or imported edits have been made.

## New album rows in this phase (ONLY)

| album_id | album | year | type | add to catalog? |
|---|---|---|---|---|
| `battiato-mellelegladiator` | M.elle le “Gladiator” | 1975 | studio | YES |
| `battiato-battiato` | Battiato | 1977 | studio | YES |
| `battiato-jukebox` | Juke Box | 1978 | studio | YES |
| `battiato-legittoprimadellesabbie` | L’Egitto prima delle sabbie | 1978 | studio | YES |

All four original records are missing from the `battiato` row in `src/data/catalog.ts` (which currently lists five later albums only). The prior phase’s *Fetus*, *Pollution*, *Sulle corde di Aries* and *Clic* are **not included** in any Phase 02 output.

## Contents

- `battiato_phase02_rows_ONLY.csv` — canonical 27-column CSV header + 4 new rows.
- `battiato_phase02_sources.csv` — album-specific researched credits, reviews and chronology (source URL and strength).
- `battiato_phase02_genre_evidence.csv` — a separate evidence row for each ordered genre, preserving scope.
- `battiato_phase02_evidence-notes.md` — album-by-album instrument, production, rating, vocal, genre and disagreement rationale.
- `battiato_phase02_catalog-audit.csv` — catalogue insert list and state.
- `CLAUDE_IMPORT.md` — this note.

## New taxonomy tokens

1. **Genre** `minimalism`: minimalist piano works on *Battiato* and *L’Egitto prima delle sabbie*. More precise than the existing genre `postminimalism`, which should NOT be substituted for the historical minimalist work.
2. **Genre** `sacredmusic`: liturgical Latin and sacred chamber vocal music on **some tracks** of *Juke Box* (last in ordering).
3. **Instrument**: none (existing `organ`, `synth`, `piano`, `violin`, `strings`, `trumpet`).
4. **Production**: none (existing `tapeeffects`, `sampling`, `overdubbing`, `emsvcs3`, `sonicmanipulation`, `stringarrangements`).

Add new genre tokens to `scenes.ts`, `genreFamilies.ts` (suggest `minimalism: ['classical']`, `sacredmusic: ['classical']`; adjust after reviewing how taxonomies distinguish Christian liturgical repertoire from cross-tradition sacred genres) and the validator’s genre allowlist before validating. **No new album format code** needed.

## Credit and release cautions

- Prefer **original album years** according to original Italian LPs: 1975/1977/1978/1978. Battiato’s website biography lists *Battiato* as 1976 and *Juke Box* as 1977; original Ricordi catalogue numbers and distributor ℗ years support 1977/1978. Storefront Apple / AllMusic headings sometimes say *L’Egitto* 1979 though 1978 ℗ and original 1978 pressing agree.
- The proper original name `M.elle le “Gladiator”` appears in sources with inconsistent spelling, typography and punctuation. The ID follows ASCII letters-only rule.
- *Juke Box*: commercial 1978 **LP**, not an original EP. Apple currently labels the digital issue `EP`; unaccepted commission for the *Brunelleschi* television documentary means `studio`, **not soundtrack**.
- *Feedback* was a 1976 retrospective/compilation of earlier material; OMIT this phase as non-landmark duplicated repertory.
- Producer-credit conflicts: **Juke Box** Wikipedia says Battiato, but Apple-distributed credits say Pino Massara and Paolo Scarnecchia; **L’Egitto** distributor credits both while AllMusic formal credits highlight Natale Massara (alias Pino). This is **pending original-sleeve verification**; do not reclassify performers/composers as producers. `confidence=medium` for *Juke Box*.
- No co-billed release in these four: Giusto Pio performs/co-composes but is not named as co-billed artist on the original cover. Do not create a `coBilled.ts` entry.
- `neoclassical` is a weak AllMusic metadata tag for *L’Egitto*, documented in genre evidence; related pop/new-age metadata is **not** adopted without sonic support. Strong evidence clearly establishes minimalist piano composition.
- `influenced_by` is **intentionally empty** in all Phase 02 records without corroborated **album-specific** transmission, notwithstanding the prior Battiato artist-level influence pack. Critical resemblance (`sounds_like`) is not proven historical influence.
- Strings and trumpet in *Juke Box* are confirmed on certain tracks, not necessarily all six. `production` blank on *L’Egitto* is deliberate.

## Import procedure

1. Integrate only Phase 02 rows into `docs/descriptors/battiato.csv`, preserving Phase 01 rows already integrated. No concatenation of prior ZIPs into this CSV.
2. Add four missing catalog entries, with exact years and IDs if catalogue ID derivation is needed; check imported punctuation/normalization.
3. Review producer caveats and the two new genre tokens; run `scripts/validate-descriptors.ts` and project tests.
4. Assess numeric scales and comparisons as editorial candidates; all rows remain `draft` until second-person verification.

## Planned next phase — Phase 03

1. *L’era del cinghiale bianco* (1979) — studio.
2. *Patriots* (1980) — studio.
3. *La voce del padrone* (1981) — studio.
4. *L’arca di Noè* (1982) — studio.

Next ZIP contains **only** these four later records.
