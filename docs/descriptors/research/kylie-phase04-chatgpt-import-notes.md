# Kylie Minogue — Fandome Phase 04

Research date **26 October 2026**, `descriptors` branch, GitHub read-only. Phase 04 is strictly incremental. Exactly **three NEW** 27-column descriptor rows:

| Album ID (existing in Fandome seed) | Title | Year | Type |
|---|---|---:|---|
| `kylie-kissmeonce` | Kiss Me Once | 2014 | studio |
| `kylie-kyliechristmas` | Kylie Christmas | 2015 | studio |
| `kylie-golden` | Golden | 2018 | studio |

## Contents

- `CLAUDE_IMPORT.md` (this handoff)
- `kylie_phase04_rows_ONLY.csv` (header plus three rows; no earlier phases)
- `kylie_phase04_sources.csv` (research reference and support)
- `kylie_phase04_genre_evidence.csv` (one row per genre, with track scope)
- `kylie_phase04_evidence-notes.md` (detailed rationale and disagreements)
- `kylie_phase04_catalog-audit.csv` (all three already in seed)

## Catalogue audit

The live [`src/data/seed.ts`](https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/seed.ts) already identifies all three albums under the IDs above. The current committed [`docs/descriptors/kylie.csv`](https://github.com/giampierofiorelli/Fandome/blob/descriptors/docs/descriptors/kylie.csv) contains Phase 01–02 records only (1988–2001), **not** these phase-04 releases. Phase 03 was already delivered separately; Claude must import any outstanding earlier phase first. Do **not** import prior rows from this archive. No additions to catalogue or co-billed table in this phase.

## New tokens / validation

- **Instrument token `slideguitar` — NEW.** AllMusic's *Golden* personnel identify Kiris Houston on **slide guitar**. The guide's tokens include `steelguitar`, but a slide guitar is not necessarily a steel guitar: preserve `slideguitar` rather than invent an uncredited steel guitar. Add it to `src/data/instruments.ts` before validating.
- **New genre tokens: none.** In particular, `synthpop` and `electropop` are kept separate; `deephouse` and `house` retained individually when sourced.
- **New production tokens: none.** Some evidence supports arrangements and programming, but no specific drum-machine model or software has been substantiated.

## Co-billed audit

All three are credited to **Kylie Minogue**. Guests (Enrique Iglesias, Frank Sinatra, Iggy Pop, James Corden, Jack Savoretti) do **not** change the album billing; none creates an entry in `coBilled.ts`.

## Album editions and classification

- *Kiss Me Once*: original 2014 eleven-song standard sequence, not its later deluxe bonus tracks. **Sia is an executive producer and writer only** in checked core credits, so not added to producer list. The song `Beautiful` is a featured duet, not a co-billed album.
- *Kylie Christmas*: original thirteen-song **studio** release. Mostly newly recorded seasonal versions, with some covers/original material and a small number of previously released recordings. This is not a greatest-hits compilation. The **deluxe-only** new track `100 Degrees` (Dannii Minogue duet), `Oh Santa` and `Cried Out Christmas` do **not** determine this row. The later 2016 *Snow Queen* and subsequent expanded editions are not additional albums.
- *Golden*: the original **12-track** 2018 album only. Digital services sometimes present 16 tracks, with deluxe extras `Lost Without You`, `Every Little Part of Me`, `Rollin’`, `Low Blow`: do not let extra-track personnel alter main album credits. The original album has a guest on `Music’s Too Sad Without You`, not co-billing.
- Lyrics, voice, sounds-like and scales are grounded editorial proposals, not literal reproduction of reviews. The genre-evidence scope is crucial: a single dubstep song does not turn the whole 2014 album into dubstep, nor does a deep-house passage make *Golden* a primarily house album.

## Producers: special precision

Producer column includes only directly credited **producer** or **co-producer**, preserving actual individuals or credited studio groups. Qobuz track credits for 2014 distinguish Sia's executive role from credited full production. `The Monsters and the Strangerz` member credits are expanded to individually named producers Stefan Johnson, Jordan Johnson, Marcus Lomax and Alexander Izquierdo. `Stargate` in 2015 is represented by its credited producers **Mikkel Storleer Eriksen** and **Tor Erik Hermansen**, not counted three times under a group name. For *Golden*, Nathan Chapman helped write `Dancing` but Qobuz only explicitly credits **Sky Adams** for producing the original, so Chapman is **not** a producer. The generic metadata term `MusicProduction` on a deluxe recording does not make Charlie Russell a proven full track producer.

## Artist influences

Phase **01** only; do not duplicate here. `influenced_by` is intentionally blank for all three records. Golden's Dolly Parton remark is a stylistic metaphor; a review's Avicii comparison is a **sonic resemblance**. Kylie covering Yazoo, Connie Francis, The Pretenders or The Waitresses is not proof those artists musically influenced her original production. The Ronettes are explicitly invoked for one original Christmas track by a critic but are conservatively placed in `sounds_like`, not `influenced_by`.

## Next — Phase 05

1. *DISCO* (2020) — `k-disco` (catalogue existing)
2. *Tension* (2023) — `k-tension` (catalogue existing)
3. *Tension II* (2024) — `kylie-tensionii` (catalogue existing)

No live records, greatest-hits sets or duplicate versions of previously recorded songs.
