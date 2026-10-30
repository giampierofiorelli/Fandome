# CLAUDE IMPORT — Gabriella Ferri phase 03 (incremental)

**Branch checked**: `descriptors` on 2026-10-30, read-only. Artist ID `gabriellaferri` exists in `src/data/catalog.ts` with **empty** albums list. Artist absent from seed.ts. `docs/descriptors/gabriellaferri.csv` returned 404 (no in-repo rows at check time). **Phases 01 and 02 were previously delivered** and must NEVER be repeated or overwritten by this import even if not yet pushed to GitHub.

## Phase 03 — three new rows; one album unresolved

| Existing/proposed ID | Album | Year | Type | Catalogue |
| --- | --- | ---: | --- | --- |
| `gabriellaferri-eadessoandiamoaincominciare` | ...E adesso andiamo a incominciare | 1977 | studio | add |
| `gabriellaferri-gabriella` | Gabriella | 1981 | studio | add |
| `gabriellaferri-nostargia` | Nostargia | 1987 | studio | **add to catalogue ONLY; descriptor held** |
| `gabriellaferri-ritornoalfuturo` | Ritorno al futuro | 1997 | studio | add |

**`Nostargia` has NO row in this phase, because sources did not directly verify the instruments on its 1987 recordings. No already-described albums are included.** Phases 01–02 accounted for records 1966–1975, including two distinct Gabriella Ferri eponymous issues (1966, 1970), and these were skipped here. This phase's `Gabriella` (1981) is a different work and has its own existing-standard title slug.

## Catalogue additions

Add all four studio records to `src/data/catalog.ts` for existing `gabriellaferri` ID with the supplied exact IDs, years and titles. **Album already catalogued:** none in this phase. No new artist ID needed. Existing base scene in `src/data/scenes.ts` is `IT it 1960 folk`. Existing artist is marked not touring because deceased. No changes required to the genre family map if all token lookups pass.

## Co-billed releases and editions

1977 RCA title exists in a nine-track single-LP issue (PL31281) and a fourteen-track double issue (PL31305) billed with **Gabriella Ferri e Laboratorio Pandemonium**. That is **one album family** with two variants, not two descriptors. If using extended issue, register precisely that credit in `src/data/coBilled.ts` (or inspect original sleeve for exact punctuation). Individual Pandemonium members are collaborators, not new co-billed artists. No other album in this phase requires co-billing.

## Token additions

**None required by this three-row draft.** All genre (`folk`, `chanson`, `pop`, `psychedelic`, `rnb`, `songwriter`, `neapolitansong`), instrument (`piano`, `synth`, `mallets`, `balalaika`, etc.) and production (`choirvocals`, `moog`) tokens are already in the lists. Do not introduce new tokens to replace source terms with approximations.

## Verification blockers / caveats (read before import)

1. **`Nostargia` is intentionally OMITTED FROM THE ROWS FILE**: its 1987 sleeve credits were not readable. One reused 1981 recording (*Canzone*) is identified, but album-level personnel from 1981 do not prove which instruments are on that exact track. The original Fonit Cetra LPX184 inner-sleeve credits are the outstanding source. Add the record to the catalogue, but do not create a descriptor until instruments are independently documented. This is the explicit no-thin-rows safeguard.
2. `Gabriella` (1981) `folk` and `Ritorno al futuro` (1997) `chanson|folk` are independently documented as pressing styles by Musicbase. `songwriter` is supported by the original compositions listed in the contemporaneous credits but Claude should confirm whether album reviewers call it a genre. Track-level `neapolitansong` remains fourth.
3. 1977 variants have different track totals. Track-specific genre rankings refer to original expanded issue where appropriate; do not split duplicate single/double album.
4. Piero Pintucci is explicitly credited producer for 1977/1981, and Mirco Mariani explicitly says he **arranged and produced** the 1997 album. Leave 1987 producer blank, since none was verified. Do not promote arrangers, soundtrack composers or engineers to producer.
5. The 1997 credits are taken from an online reproduction of the CD credits and require independent sleeve verification when possible; 1987's 1981 *Canzone* source is NOT evidence of the whole 1987 album's vintage sonics. No artist whose song is merely covered is an album-specific influence.
6. `landmark=0` on all three delivered rows because independent strong claims of having *defined/changed* a genre, artist career or sound were not found. Career comeback, TV-show association or high artistic praise is not enough.

## Files (six)

- `CLAUDE_IMPORT.md` — this import and audit note
- `gabriellaferri_phase03_rows_ONLY.csv` — three strictly new rows, 27 columns
- `gabriellaferri_phase03_sources.csv` — source URLs, source types, supported fields and strength
- `gabriellaferri_phase03_genre_evidence.csv` — one evidence line per album genre and scope
- `gabriellaferri_phase03_evidence-notes.md` — full album-level rationale, scales, credits and source uncertainty
- `gabriellaferri_phase03_catalog-audit.csv` — four original-title/year catalogue entries, including the un-described 1987 album

## Next phase 04

**`Canti diVersi` (2000)**, the final studio album in OndaRock's discography. The unresolved 1987 `Nostargia` must only be supplied in a later dedicated corrective package if its original instrumentation can be sourced. Do not pad the phase with live or compilation records. This is not a full discography completion until the 1987 gap is resolved.
