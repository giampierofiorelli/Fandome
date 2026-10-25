# CLAUDE IMPORT — Raffaella Carrà Phase 02

**Strictly incremental:** import ONLY `carra_phase02_rows_ONLY.csv` (4 new rows). Do not repeat Phase 01 rows (already in `docs/descriptors/carra.csv`). Branch `descriptors` was inspected read-only on 25 October 2026; Fandome artist ID is **`carra`**.

## New rows in this ZIP

| album_id | title | original year | type |
|---|---|---|---|
| carra-milleluci | Milleluci | 1974 | studio |
| carra-felicitatata | Felicità tà tà | 1974 | studio |
| carra-forteforteforte | Forte forte forte | 1976 | studio |
| carra-fiesta | Fiesta | 1977 | studio |

## Catalogue changes required

All four are absent from `src/data/catalog.ts`'s `carra` entry and from the existing `docs/descriptors/carra.csv` as checked. Append exactly these four to the Carrà artist album listing; preserve all pre-existing IDs/rows.

## Genre tokens / validator

Add **`latinpop`** (Latin pop), **`rumba`**, and **`tarantella`** to `src/data/scenes.ts` Genre union AND `genreFamilies.ts`, and update the validator genre set if it does not already include them. Recommended parents: `latinpop: ['latin','pop']`, `rumba: ['latin']`, `tarantella: ['folk']`. `musicaleggera`, `showtunes`, `italodisco`, `eurodisco`, `ballad`, `europop`, `disco`, `funk`, `soul` already exist in the branch's validator. New tokens are grounded by genre mentions/track-names but `rumba` and `tarantella` carry low confidence: the title alone cannot establish how a song was arranged. `latinpop` is an explicit genre named for the album or a track in documented secondary sources.

**Do not discard minority genres because the record isn't cohesive.** `carra_phase02_genre_evidence.csv` records `whole album`, `some tracks`, and `texture`, with strengths and per-track context. Database-wide genre tags (Funk/Soul, Electronic, Rock) are explicitly distinguished from observed track-level styles. Low confidence means REVIEW, not 'unknown sound must be assumed true'.

## Credits, edition, chronology

- `Milleluci` is the 1974 studio LP associated with the TV show with Mina, not a TV soundtrack or live album. Paolo Ormi and Gianni Ferrio are **arrangers**, not shown as credited album producers.
- `Felicità tà tà` is the original 11-song CGD LP, not the different-date tape; Gianni Boncompagni, Andrea Lo Vecchio and Paolo Ormi appear in creative/arranging roles, but no verified LP producer was located.
- `Forte forte forte` is the original 1976 Italian LP, not the single or foreign-language versions. Franco Bracardi is an **arranger**, not independently confirmed as producer. A far l'amore comincia tu is included in the LP.
- `Fiesta` is the Italian CGD 20018 LP; versions from France and Spain have different tracks and languages. Album producer **Gianni Boncompagni** is named by a secondary album source; original sleeve corroboration desirable. Bracardi/Ormi are arrangers.
- Electronic scale deliberately blank for all four; there is no credible full-album instrument inventory or synthesizer percentage. Other scales are explicit album-level editorial judgments; consult notes before changing them.
- `influenced_by` and `sounds_like` intentionally empty rather than guessing connections.

## Validation

1. Add albums to catalogue while preserving existing Carrà IDs; add new genre tokens and family parents.
2. Append only the four CSV data lines from `carra_phase02_rows_ONLY.csv` to the existing `docs/descriptors/carra.csv` header; no duplication.
3. Run `npx vite-node scripts/validate-descriptors.ts`, then normal project tests.
4. Keep all Phase 02 source/evidence files (no rewrite of previous research). Do not mark rows `reviewed` without secondary review.

## Next phase — 03 (provisional original Italian studio sequence)

`Raffaella` (1978); `Applauso` (1979); `Mi spendo tutto` (1980); `Raffaella Carrà` (1981). **ID collision alert:** `Raffaella` (1978) has the same normalized title as `Raffaella` (1971), and `Raffaella Carrà` (1981) as the 1971 eponymous LP. Claude must devise explicit catalogue-safe and validator-compatible unique IDs (e.g. year suffixed) rather than overwrite Phase 01 entries. Check whether `Latino` (1980) is a distinct regional album or an alternate issue of `Mi spendo tutto` before considering it as an additional landmark.
