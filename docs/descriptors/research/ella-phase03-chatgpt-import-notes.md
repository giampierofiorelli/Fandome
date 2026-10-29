# CLAUDE_IMPORT — Ella Fitzgerald / Fandome Phase 03

**Prepared 29 October 2026.** Four incremental original studio album rows with exactly 27 columns; `draft`, source-backed and not yet imported. One ZIP holds exactly 6 files. Import only `ella_phase03_rows_ONLY.csv` as descriptor rows and consult all five supporting documents.

## Four records

| ID | Title | Working original year | Action |
|---|---|---:|---|
| `ella-likesomeoneinlove` | Like Someone in Love | 1957 | Add Ella catalogue album |
| `ella-porgyandbess` | Porgy and Bess (with Louis Armstrong) | 1958 | Add Ella album + Armstrong co-billing; 1957/58/59 release dispute recorded |
| `ella-ellafitzgeraldsingstheirvingberlinsongbook` | Ella Fitzgerald Sings the Irving Berlin Song Book | 1958 | Add original 32-track studio double LP; not later Volume 1 and 2 reissues |
| `ella-ellaswingslightly` | Ella Swings Lightly | 1959 | Add original Marty Paich studio album; session is Nov 1958, early 1958-1959 issue ambiguity unresolved |

## Catalog & co-billing

Existing artist IDs: `ella` and `armstrong` in `src/data/catalog.ts`. All four album IDs are new and computed using the guide's lowercased, punctuation-stripped slug. **Do not create a second `armstrong-porgyandbess`**. Once the new Ella album exists, add `CO_BILLED['ella-porgyandbess'] = {with:['armstrong'], credit:'Ella Fitzgerald & Louis Armstrong'}` to `src/data/coBilled.ts`, which maps its presence into both artist rooms. An earlier studio duet `Ella and Louis` is already globally keyed to `armstrong-ellaandlouis` and described in Phase 02; never reimport or replace that ID.

`Ella Swings Lightly` is the fourth album in this batch. It was added so an eligible original Marty Paich studio album is not skipped. First-issue dating is contested: original-session discographer Jazzdisco and AllMusic main album give **1959**, but some 1958 mono pressings and digital entries indicate **1958**. Treat `year=1959` as **provisional pending human checking**. Official Ella discography puts *Porgy and Bess* in 1957 (its recording year); Verve/AllMusic issue **1958**, later stereo issue also appears as 1959. Keep working `year=1958` with uncertainty flagged. See evidence notes for primary sources.

## Strict preservation rules

- Do not import any Phase 01 or 02 rows; prior files stay untouched.
- Do not import live records: *Ella at the Opera House*, *Ella in Berlin* and *At Newport*.
- Do not import a compilation or the later reissue extras as a separate original release; *Like Someone in Love* means original **15 songs**, Berlin Song Book original **32 songs**.
- Frank DeVol, Paul Weston, Russell Garcia and Marty Paich are arrangers/conductors. **Norman Granz is the credited record PRODUCER of all four**, no producer credits should be inferred for engineers.
- New/or not yet approved genre tokens `americanpopularsong`, `earlyjazzvocals`, `bop`: verify whether added to `src/data/scenes.ts`, `genreFamilies.ts` and `scripts/validate-descriptors.ts`; add approved ones exactly or resolve their classification, then validate. `americanpopularsong` may be a repertoire/style classification, not a sonic genre. Do not silently substitute a different token.
- In `Like Someone in Love`, the original exact DeVol ensemble roster is incomplete; list `orchestra|saxophone` only, do not infer specific strings. No specific recording techniques documented, so its production cell is empty.
- `influenced_by` blank is deliberate for all four; do not turn a covered composer or collaborator into an influence without album-specific testimony. `sounds_like` are editorial sonic comparisons.
- All rows are `draft`. The two disputed year decisions are human-review blockers, despite structural CSV correctness.

## Files

1. `ella_phase03_rows_ONLY.csv` — incremental descriptors (4 rows, 27 columns)
2. `ella_phase03_sources.csv` — source-by-album URL, supported claims and evidence strengths
3. `ella_phase03_genre_evidence.csv` — evidence per genre token
4. `ella_phase03_evidence-notes.md` — rationale and ambiguities per album
5. `ella_phase03_catalog-audit.csv` — previous/next/eligible, exclusions and new catalogue IDs
6. `CLAUDE_IMPORT.md` — these import instructions

## Phase 04 after these rows

*Ella Fitzgerald Sings Sweet Songs for Swingers* (1958/59 issue check), *Ella Fitzgerald Sings the George and Ira Gershwin Song Book* (1959), *Get Happy!* (1959), and a fourth eligible 1959/60 non-live original project after verifying its issue. Do not repeat *Ella Swings Lightly*.

## Claude import note (Oct 2026)

- Rows imported as delivered (tokens already registered in phases 01-02). Porgy and Bess co-billed with Armstrong (coBilled.ts).
