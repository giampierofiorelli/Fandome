# CLAUDE IMPORT — Ariana Grande — Phase 01 (increment-only)

**Read-only research packet**; do not overwrite previous artist descriptors. GitHub `descriptors` branch checked 25 October 2026. Ariana Fandome artist ID is `ariana`. There was no `docs/descriptors/ariana.csv` on that branch at check time; all four album catalogue entries exist. **Exclude live albums now and in subsequent phases**, per owner instruction.

## This phase's four rows

| Album ID | Official album | Year | Type | Catalogue |
| --- | --- | --- | --- | --- |
| `ariana-yourstruly` | Yours Truly | 2013 | studio | exists |
| `ariana-myeverything` | My Everything | 2014 | studio | exists |
| `ariana-dangerouswoman` | Dangerous Woman | 2016 | studio | exists |
| `ariana-sweetener` | Sweetener | 2018 | studio | exists |

Exact CSV header has 25 columns. Only this phase's four new rows. `status=draft`. Genre-evidence data is one line per genre per album, explicitly annotating whether stylistic evidence is album-wide, substantial, track-specific or merely a texture. Numeric ratings reflect original records in their entirety, not isolated singles, and are editorial assessments based on the credited critical sources.

## Catalogue albums to add this phase
None. All four IDs already exist through `src/data/catalog.ts`; do not rewrite them. Import rows only if `ariana.csv` has not acquired any of these IDs in the meantime. `seed.ts` lists Ariana through catalogueAlbums.

## Two proposed new genres

- `doowop`: explicit 1950s doo-wop on *Yours Truly* and track-specific vocals on *Dangerous Woman*/*Sweetener*. Proposed parents `rnb`, `pop`.
- `cloudpop`: named by NME for *Sweetener* textural passages. Proposed parents `pop`, `electronic`.

These tokens are not currently in the guide/Genre or validator as checked. Update `src/data/scenes.ts`, `src/data/genreFamilies.ts`, and validator's GENRES before final check.

## Credit and edition caveats

- Original *Yours Truly* (2013), *My Everything* original **12-song** album (2014), original **15-song** *Dangerous Woman* (2016), original 15-track *Sweetener* (2018). Exclude subsequent anniversary, deluxe-only, clean-edition alterations and bonus reissue/remix/live performances when evaluating the original album's sound.
- Producers are music producers/co-producers only, not songwriters, mixing engineers, executive producers or featured rappers. Names may be stage names/credited aliases (`ILYA`, `Billboard`, `KeY Wane`, `The Rascals`). Some credit databases disagree on explicit producer roles and regional editions. The notes flag the **David Guetta/One Last Time** conflict particularly; the row currently excludes him because licensed track roles list him as songwriter. Validate exact multi-producer lists against original booklet before moving from `draft` to `reviewed`.
- `sounds_like` denotes explicitly **editorial resemblance**. `influenced_by` is limited to documented album-relevant references: Mariah Carey (*Yours Truly*) and Imogen Heap (*Sweetener*). Empty values on the other albums are intentional abstentions.
- No number-of-values cap on any multivalue column; only `notes` max 15 words.
- Every genre evidence entry includes source URL and scope. Scales/genre judgments and critical disagreements are argued in `ariana_phase01_evidence-notes.md`.

## Next phase
*thank u, next* (2019), *Positions* (2020), *Eternal Sunshine* (2024) and a separate eligibility check of *Wicked: The Soundtrack* (2024) as a potential fourth row. The 2025 *Wicked: For Good* soundtrack and *petal* (2026, released 31 July 2026 according to Universal Music Canada: https://www.universalmusic.ca/2026/07/31/ariana-grande-releases-her-eighth-studio-album-petal-out-now/) follow chronologically if eligible. Live albums excluded. No Phase 02 rows are included here.

## Import procedure
Import only the incremental rows in `ariana_phase01_rows_ONLY.csv`, add `doowop` and `cloudpop` to genre taxonomy and validator as needed, then run `npx vite-node scripts/validate-descriptors.ts` and repository tests. These actions were **not performed on GitHub** by the research assistant.
