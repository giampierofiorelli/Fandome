# CLAUDE_IMPORT — Ella Fitzgerald · Fandome Phase 04

**Prepared:** 29 October 2026. **One incremental ZIP containing six files and three album rows, each with precisely 27 columns.** Read source and evidence documents before importing. The catalogue is ahead of earlier phases: check the latest branch before adding albums.

## Only new descriptor rows

| album_id | album | working year | branch action |
|---|---|---:|---|
| `ella-ellafitzgeraldsingssweetsongsforswingers` | *Ella Fitzgerald Sings Sweet Songs for Swingers* | 1959 | **Add to** catalog.ts, then import descriptor |
| `ella-ellafitzgeraldsingsthegeorgeandiragershwinsongbook` | *Ella Fitzgerald Sings the George and Ira Gershwin Song Book* | 1959 | **Already in** catalog.ts, add descriptor only |
| `ella-gethappy` | *Get Happy!* | 1959 provisional | **Add to** catalog.ts only after issue-year and studio-versus-compilation review |

Artist ID: `ella` (already in catalog.ts). The three IDs use the Fandome slug rule. Only this phase's three rows appear in `ella_phase04_rows_ONLY.csv`; **never reimport previous phases**, and **never replace** already-imported rows in `docs/descriptors/ella.csv`. As of the latest GitHub branch checked on 29 October 2026, `ella.csv` has the first 11 rows from earlier batches, not these three.

## Source verification / import blockers

1. **Get Happy! original year:** official Ella / AllMusic / MusicBrainz say **1959**; jazzdiscography.com, jazzdisco.org and 45cat first Verve US pressings show **1960**. `year=1959` is provisional. Claude must compare original physical LP/label evidence and make an explicit choice **before** declaring the row validated; if correcting to 1960, also update catalog.ts. No exact calendar day invented.
2. **Get Happy! classification:** original 12-track studio LP assembled from multiple recording dates (1957–59); described as a hodge-podge of previously unissued studio pieces. It is generally classed a studio album, but Fandome has a strict no-compilations rule. Require explicit human classification; if considered a compilation by the owner, do **not import this row**. Never use its 14-track expanded CD as original.
3. **Gershwin Song Book:** original 1959 **five-LP set, 53-song programme**, one album; not five separate albums and not 1998 four-CD expanded 59-track programme. Nelson Riddle is arranger/conductor, Norman Granz producer. Existing album ID is reused verbatim.
4. **Sweet Songs:** original 1959 Verve MG V-4032, twelve tracks, recorded Nov 1958 and Jul 1959. Frank DeVol arranged and conducted unidentified orchestra, Granz producer. 1958 metadata is session misdating and cannot be original release if later sessions are included.
5. **Production fields:** `production` is blank for Sweet Songs and Get Happy, as there are no documented signature studio effects or recording technology. Gershwin uses `hornarrangements|stringarrangements` from documented Riddle charts.
6. **No new tokens required:** `vocaljazz`, `jazz`, `standards`, `traditionalpop`, `swing`, `bigband`, `americanpopularsong`, `earlyjazzvocals`, `blues` and all instruments/production values exist in the October 29 Fandome source lists. Verify again during import.
7. `influenced_by` blank on all three: composers being covered are not evidence they influenced these particular sessions. `sounds_like` is editorial association only.

## Contents (six files)

- `ella_phase04_rows_ONLY.csv`: the three rows, strict 27-column header, `draft` review status.
- `ella_phase04_sources.csv`: album-wise source identifiers and supported specific claims, **26 source references** across three LPs.
- `ella_phase04_genre_evidence.csv`: one sourced entry per genre per album.
- `ella_phase04_evidence-notes.md`: source-grounded decisions for all non-obvious values, ratings, studio credits and controversies.
- `ella_phase04_catalog-audit.csv`: exact catalog changes, prior phases, live exclusions and next eligible albums.
- `CLAUDE_IMPORT.md`: this handoff.

## Next phase (05)

Research 1960 original non-live studio albums: *Ella Wishes You a Swinging Christmas*, *Hello, Love*, and *Ella Fitzgerald Sings Songs from Let No Man Write My Epitaph* (later issued as *The Intimate Ella*). Recheck publication dates and whether *Hello, Love* reuses session tracks before deciding types. Do not include *Ella in Berlin: Mack the Knife* (live), even though the landmark appears in Fandome's catalog. The user wants one ZIP per phase.

## Claude import note (Oct 2026)

- Get Happy! not imported: assembled from previously unissued 1957-59 sessions, a compilation in practice (same call as Sweet and Hot). Two rows imported; Sweet Songs for Swingers added to the catalogue (the Gershwin Song Book id was already there).
