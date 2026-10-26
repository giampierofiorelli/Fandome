# CLAUDE_IMPORT — Franco Battiato Phase 06 (STRICTLY INCREMENTAL)

Research at **26 October 2026**. Fandome branch **`descriptors`** (read only). The user wants **one ZIP per phase**. Import ONLY the four new rows in this archive. Do not regenerate/overwrite Phase 01–05 descriptor rows.

## New phase rows

| album_id | album | year | type | catalogue action |
|---|---|---|---|---|
| `battiato-messaarcaica` | *Messa arcaica* | 1994 | studio | ADD |
| `battiato-lombrelloelamacchinadacucire` | *L’ombrello e la macchina da cucire* | 1995 | studio | ADD |
| `battiato-limboscata` | *L’imboscata* | 1996 | studio | ADD |
| `battiato-gommalacca` | *Gommalacca* | 1998 | studio | PRESENT IN CATALOGUE, retain ID |

Artist ID: **`battiato`**. The GitHub `catalog.ts` currently lists *Gommalacca* but omits the other three. The raw `docs/descriptors/battiato.csv` currently contains only four Phase 01 rows; earlier ZIPs may not yet have been committed. Match by `album_id`, not by row order.

## Files inside this ZIP

1. `CLAUDE_IMPORT.md` (this file)
2. `battiato_phase06_rows_ONLY.csv` (exactly 27 fields; 4 new album rows only)
3. `battiato_phase06_sources.csv` (source evidence, original credit references, working source URLs)
4. `battiato_phase06_genre_evidence.csv` (one line per genre per record with `whole album`, `some tracks`, or `texture` scope)
5. `battiato_phase06_evidence-notes.md` (reasoning behind all non-obvious values, contradictions, source hierarchy)
6. `battiato_phase06_catalog-audit.csv` (catalog/descriptor membership and add/retain action)

## Critical edition and credit cautions

- **Messa arcaica is a 1994 EMI Classics CD recorded in studio at Logic Studio in 1993.** This is separate from its **1993 stage premiere** and from the **1996 Shadow, Light** later release with additional material. Mark `studio`, not `live`; do not duplicate *Shadow, Light* as a new original mass. The original disc university bibliographic record has the catalog number and session information. Qobuz lists **Battiato Producer** and **Maghenzani Executive Producer**, but **Apple Classical explicitly credits both as Producers** as well as Maghenzani Executive Producer. The row provisionally includes both and requires original-booklet resolution.
- *L’ombrello e la macchina da cucire* has **Enrico Maghenzani**, not lyricist **Manlio Sgalambro**, as producer. **Joseph Haydn** is included in `influenced_by` ONLY because *Un vecchio cameriere* uses and credits music from Haydn's Op.64/5 quartet (album-specific direct musical borrowing); references in lyrics to other names are not proof of sonic influence.
- *L’imboscata* is **produced by Franco Battiato**; recording/mixing by Benedict Fenner, executive production by Maurizio Salvadori. Do not replace instrumental credits with those of the **1997 tour**. **La emboscada** (1997 Spanish translation/version) is not part of Phase 06.
- *Gommalacca*: Battiato producer, external musicians are collaborators and **not** co-billed artists. Later 1999 pressings may sample Maria Callas in *Casta diva*, whereas some earlier copies use Paola Romanò: no uniform Callas attribution to all 1998 copies. `sampling` nevertheless supported by separate sampled choirs and vocal examples.
- `influenced_by` empty unless source explicitly documents an artist-level musical influence or direct musical borrowing. `sounds_like` is an **editorial** comparison, never a claim of influence.

## Catalogue / co-billed / tokens

- Add catalogue entries with original years and titles in the table; do not modify the **already catalogued** *Gommalacca* album ID.
- **No co-billed albums** this phase. None of the named guest artists turns these into multi-artist billed releases. No change to `coBilled.ts`.
- **New genre tokens:** none; `sacredmusic`, `experimentalpop`, `electropop`, `neoclassical`, `electrorock`, `alternativerock` etc. already exist in the guide/validator.
- **New instrument tokens:** none. **New production tokens:** none. Do not invent exact electronic instruments or production machines from a genre label.
- The source and genre CSVs contain outside URLs and do not need to be imported as descriptor rows. Notes and evidence retain contradictory claims for second-person review.

## Next Phase 07 (proposed, original releases only)

1. **Fleurs** (1999) — studio covers project, important, despite cover songs.
2. **Campi magnetici** (2000) — studio recording for a staged ballet; investigate `soundtrack` vs `studio` using original CD and programme.
3. **Ferro battuto** (2001) — studio album.
4. **Fleurs 3** (2002) — separate interpretive/covers studio album (not a reissue of 1999 *Fleurs*).

Skip generic compilations, and treat the 1996 *Shadow, Light* as a version of previously described music unless a unique recording justifies an exception.

## Import procedure

- Confirm correct album IDs and import ONLY `battiato_phase06_rows_ONLY.csv`; add three catalogue entries.
- Extend nothing in `scenes.ts`, `genreFamilies.ts`, `instruments.ts`, `production.ts` unless the validator reports a truly missing token.
- Run `npx vite-node scripts/validate-descriptors.ts` and project tests after import; only Claude can perform repository validation.
- Preserve qualified disagreement in the notes rather than silently converting sample/production inferences to verified facts.
