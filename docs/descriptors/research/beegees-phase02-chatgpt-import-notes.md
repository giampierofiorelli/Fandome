# Fandome import — Bee Gees — Phase 02

- **Artist:** Bee Gees; **artist ID:** `beegees` (Phase 01 proposal). Repo `giampierofiorelli/Fandome`, branch `descriptors`, read-only check on **2026-10-28**.
- `beegees` absent from both `catalog.ts` and `seed.ts` in the checked branch; `docs/descriptors/beegees.csv` not yet present (404).
- **Incremental:** this ZIP contains exactly 4 NEW studio rows and **no Phase 01 rows**. Previously delivered (excluded): `The Bee Gees Sing and Play 14 Barry Gibb Songs` (1965), `Spicks and Specks` (1966), `Bee Gees' 1st` (1967), `Horizontal` (1968).
- No live recordings, compilations, TV soundtrack duplication, reissues or expanded bonus tracks. 27-column CSV exactly, all rows `draft`.

## Album rows and catalog additions

| Album ID | Album | Year | Type | Action |
|---|---|---:|---|---|
| `beegees-idea` | Idea | 1968 | studio | add |
| `beegees-odessa` | Odessa | 1969 | studio | add |
| `beegees-cucumbercastle` | Cucumber Castle | 1970 | studio | add |
| `beegees-2yearson` | 2 Years On | 1970 | studio | add |

## Tokens needing a Fandome vocabulary addition

- **Genre:** `countryfolk` — country folk, sourced as album style of *Cucumber Castle* (https://en.wikipedia.org/wiki/Cucumber_Castle). `countryfolk` was absent from the checked `Genre` union on 2026-10-28; retain this exact valid lowercase token and add it before running the repo validator. Do not silently normalize it to `country` or `folkrock`.
- All other genres, instrument tokens and production tokens in the 4 rows were found in the branch's allowed vocabulary.

## Edition, artist and production caveats

1. `Idea` original **UK** LP has `Such a Shame` and no `I've Gotta Get a Message to You`; original **US** LP swaps those tracks. The official 13-track list blends both. Use UK pressing as base for album-wide assessment; see evidence notes and Brennan 1968.
2. `Odessa` is a 1969 double album, not a compilation. 2009 reissue demos are excluded. Band/producer Barry Gibb **explicitly** describes Beatles `Yellow Submarine` as influencing the material, linked as `The Beatles (Revolver)` in `influenced_by`. Do not treat the subsequently released Who album *Tommy* as an earlier influence.
3. `Cucumber Castle` is a **Bee Gees album by Barry and Maurice without Robin**. Do not merge it with the BBC TV special of the same title. Producers are Robert Stigwood and Bee Gees, NOT Robin Gibb.
4. `2 Years On`: original release **1970**, despite AllMusic indexing some editions as 1971. Reunion album combines three brothers' tracks and pair/solo-derived recordings; track-specific Maurice and Robin production confirmed in Brennan 1970.

## Source mapping

- `beegees_phase02_sources.csv`: per-album URL/source/type/claim/strength.
- `beegees_phase02_genre_evidence.csv`: every genre in each row has at least one linked piece of evidence and its scope (album, selected tracks or one track).
- `beegees_phase02_evidence-notes.md`: instrumentation, editions, producer attribution, influences and explicit uncertainty.
- `beegees_phase02_catalog-audit.csv`: 4 proposed additions and next 4 candidates, not repeated data.

## Next phase — Phase 03

1. *Trafalgar* (1971)
2. *To Whom It May Concern* (1972)
3. *Life in a Tin Can* (1973)
4. *Mr. Natural* (1974)

`Best of Bee Gees` is a compilation and excluded. *A Kick in the Head Is Worth Eight in the Pants* was **unreleased** in 1973 and excluded from released studio albums unless separately requested.


## Claude import note

- 4 rows appended as delivered; albums already in the catalogue.
- New genre countryfolk registered (parents country, folk).
- Odessa influenced_by The Beatles (Revolver): Barry Gibb names Yellow Submarine as a model, kept.
- Reception researched by Claude.
