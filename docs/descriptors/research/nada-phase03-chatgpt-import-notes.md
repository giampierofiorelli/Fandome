# Nada — Fandome Phase 03 | Claude import instructions

Contains **exactly four new studio album rows**, chronological. **Only** `nada_phase03_rows_ONLY.csv` is to be appended to the artist descriptor file. **Never** import old phase 01/02 rows again or duplicate catalog entries. All rows are `draft`, Fandome 27-column schema; source links and album-genre evidence supplied in separate files.

## Album IDs and catalog additions

| album_id | title | year | type | catalogue action |
|---|---|---:|---|---|
| `nada-bacirossi` | Baci rossi | 1986 | studio | Add |
| `nada-lanimenere` | L'anime nere | 1992 | studio | Add |
| `nada-doveseisei` | Dove sei sei | 1999 | studio | Add |
| `nada-lamoreefortissimoeilcorpono` | L'amore è fortissimo e il corpo no | 2001 | studio | Add |

Fandome artist `nada` was not in checked `src/data/catalog.ts`, and `docs/descriptors/nada.csv` not found on `descriptors` at start of research. Prior phases 01/02 have already been supplied to the user; their presence in GitHub is not confirmed. **Create artist if still missing, import phase01 and phase02 separately only if not already present, append new phase03 rows**, then run Fandome validator/tests. No write to GitHub done here.

## Uncertainties and editorial choices

- **Original editions**: Baci rossi EMI May 1986 eight tracks, L'anime nere RCA/BMG 1992 nine tracks, Dove sei sei Mercury 1999 eleven tracks, L'amore è fortissimo e il corpo no Storie di Note 2001 nine tracks. No live, compilation, greatest hits, or reissued bonus tracks. Note some artist-event biographies misdate Baci rossi to **1985**; follow the original 1986 EMI pressing.
- **L'anime nere producer conflict — NEEDS RCA BOOKLET CHECK**: specialist discography Hit Parade Italia = Nada + Gerri Manzoli, encyclopaedic album history = Varo Venturi + Gerardo Manzoli. Row provisionally uses Nada + Gerri Manzoli, with low confidence; do **not** mark reviewed yet or assume Venturi was officially a producer. **L'anime nere instruments and production intentionally blank** because album-specific musician/technical credits could not be verified, and genre does not establish actual instrumentation. Obtain booklet for completion.
- **Dove sei sei songwriting nuance:** Nada wrote 10/11 songs; *Piccoli fiumi* is by Gianmaria Testa. Producer Mauro Pagani only; Gerry Manzoli pre-production and Marcello Villella executive, so do not add as producers. **Lou Reed** is only a critic sonic comparison (`sounds_like`), **not** stated influence.
- **L'amore è fortissimo e il corpo no:** original-credits transcription names three artistic producers, Minieri + Mesolella + Nada. Gerry Manzoli executive producer excluded. The digital electronic processing is documented, but no signature studio machine/plug-in. `punk` is a **tail genre** based on explicit source wording about punk colouring in an eclectic rock album, not a blanket classification. **Loredana Bertè (Un pettirosso da combattimento)** is contemporary critic comparison only, not a direct influence.
- **Other genres**: 1992 `poprock|italianpop|canzonedautore|ballad`, 1986 `italianpop`, and 2001 `punk` are marked contextual/editorial where original sources do not name exact token. Check scope before deciding to keep them. Music production values and all scores are editorial, not copied from reviews.
- **No new genre/instrument/production tokens.** No co-billed album for this phase. No album-specific direct influence sufficiently documented, therefore `influenced_by` empty in all rows. No general artist influences repeated (only phase 01).
- `nada_phase03_genre_evidence.csv` has one row per genre. `nada_phase03_sources.csv` stores source URLs and supported facts. `nada_phase03_evidence-notes.md` explains conflicts and album-specific sources. `nada_phase03_catalog-audit.csv` records the necessary additions. Six files only; no build script.

## Next phase 04

*Tutto l’amore che mi manca* (2004), *Luna in piena* (2007), *Vamp* (2011), *Occupo poco spazio* (2014). Exclude the live albums and compilations.

## Claude import note

- Added the four albums to the catalogue. Nada dropped from producers as self-credit (Baci rossi, L'anime nere, L'amore è fortissimo e il corpo no).
- sounds_like Lou Reed (Dove sei sei) and Loredana Bertè (L'amore è fortissimo…) kept pending the critic check.
