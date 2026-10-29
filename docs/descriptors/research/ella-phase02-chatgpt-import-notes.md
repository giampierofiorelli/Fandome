# CLAUDE_IMPORT — Ella Fitzgerald / Fandome Phase 02

**Prepared 29 October 2026.** Exactly four NEW incremental researched album rows; 27 columns each; `status=draft`. GitHub remains read-only. One ZIP contains six files. Import `ella_phase02_rows_ONLY.csv` alone for descriptors, then use the other files as evidence/audit. Do not import Phase 01 again.

## Four records in this phase

| CSV album_id | Album | Original year | Catalogue action |
|---|---|---|---|
| `armstrong-ellaandlouis` | Ella and Louis | 1956 | **EXISTING** original global album ID under Louis Armstrong; link it to Ella, no new duplicate |
| `ella-ellafitzgeraldsingstherodgersandhartsongbook` | Ella Fitzgerald Sings the Rodgers and Hart Song Book | 1956 | **NEW** catalogue album for Ella |
| `ella-ellafitzgeraldsingsthedukeellingtonsongbook` | Ella Fitzgerald Sings the Duke Ellington Song Book | 1957 | **NEW** catalogue album for Ella |
| `ella-ellaandlouisagain` | Ella and Louis Again | 1957 | **NEW** catalogue album for Ella, with Louis crosslink |

## ESSENTIAL co-billing instructions

Existing artist IDs: Ella Fitzgerald `ella`, Louis Armstrong `armstrong`. Both are in `src/data/catalog.ts`; Duke Ellington is not currently a room.

- `CO_BILLED['armstrong-ellaandlouis'] = {with:['ella'], credit:'Ella Fitzgerald & Louis Armstrong'}`; do not add a redundant `ella-ellaandlouis`. The Phase 02 descriptor row is correctly keyed to the **existing Armstrong-side ID** even though located in Ella's descriptor file. If the same row is later proposed for Louis, import it only once.
- `CO_BILLED['ella-ellaandlouisagain'] = {with:['armstrong'], credit:'Ella Fitzgerald & Louis Armstrong'}`.
- `CO_BILLED['ella-ellafitzgeraldsingsthedukeellingtonsongbook'] = {credit:'Ella Fitzgerald with Duke Ellington and His Orchestra'}` if editorial policy treats the official `with Duke Ellington` credit as a co-billed record. Do not include an unknown `dukeellington` room ID. Granz is album producer, Duke is performing musician and composer.

## Original dates and edition protection

- Rodgers-Hart: **1956** original Verve (not AllMusic's later 1957 display). 1956 dates in Ella official discography, Apple/Verve and detailed session credits. Original album full title retained rather than an abridged reissue.
- Ellington: **1957** original **studio** Song Book with orchestra and guest small groups; later digital release with "This Compilation" does NOT convert the 1957 original to a compilation.
- Ella and Louis Again: **1957** original **19-track double LP**. Do not substitute recent single-LP edits that remove 7 solo vocal tracks. The 1957 later-year release is attested by uDiscover. A February 1957 date on one Apple digital listing cannot precede the July/August 1957 recorded performances; do not reuse it as original release day.
- Previous **Sweet and Hot** classification hold remains unchanged and is not part of this phase. The first 1956 Porter Song Book is already described in Phase 01.

## Required vocabulary updates

Two possible new explicit AllMusic genre/style tokens here: `americanpopularsong`, `earlyjazzvocals`. Neither is in the currently checked Fandome type/validator list. Treat them as new *literal* styles rather than silently mapping onto an existing near-equivalent, but have Claude/owner resolve whether `americanpopularsong` is a repertoire classification rather than a sonic genre before merging. `bop` is an earlier Phase 01 new token that is also used in Phase 02. Add approved tokens to Genre type, genreFamilies and validator. **Run validation after updates; do not claim the present repository validates the not-yet-present styles.** Existing instrument/production tokens require no additions.

## Source/evidence files

- `ella_phase02_rows_ONLY.csv` — only four 27-column rows, not earlier phases.
- `ella_phase02_sources.csv` — album-keyed qualified links, exact support and strength.
- `ella_phase02_genre_evidence.csv` — one supporting citation per individual assigned genre, with scope.
- `ella_phase02_evidence-notes.md` — album-by-album scale reasons, instruments, producer versus arranger, date disagreements, original/reissue differences, `influenced_by` exclusions.
- `ella_phase02_catalog-audit.csv` — existing and new IDs, prior phase skip and later releases.
- `CLAUDE_IMPORT.md` — these handoff instructions.

## Next phase (03)

*Like Someone in Love* (1957); *Ella Fitzgerald Sings the Irving Berlin Song Book* (1958); and *Porgy and Bess* (1958, with Louis Armstrong). Recheck original master release dates and fourth eligible 1958/59 album before Phase 03. Exclude live albums and archival compilations.

## Claude import note (Oct 2026)

- New genre tokens `earlyjazzvocals` (vocaljazz) and `americanpopularsong` (standards, traditionalpop): AllMusic style labels, kept literally (owner's rule: every genre a source names goes in).
- Ella and Louis keeps the existing id `armstrong-ellaandlouis` (row in ella.csv); co-billed with Ella. Ella and Louis Again co-billed with Armstrong; the Duke Ellington Song Book carries the printed credit "with Duke Ellington and His Orchestra" (Ellington has no room yet).
