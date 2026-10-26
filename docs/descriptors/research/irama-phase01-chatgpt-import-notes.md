# Claude import — Irama Phase 01

**Branch audited:** `descriptors`, read-only, 26 October 2026. No `irama` artist entry found in `src/data/catalog.ts` and no `docs/descriptors/irama.csv` at audit time.

## Files

- `irama_phase01_rows_ONLY.csv`: **4 NEW ROWS**, exact **27-column** header; status `draft`.
- `irama_phase01_sources.csv`: per-release named source and exact URL.
- `irama_phase01_genre_evidence.csv`: one record for **each** genre token in each album, with source, scope and rationale.
- `irama_phase01_evidence-notes.md`: scale notes, instrument/producer evidence, negative caveats and sources.
- `irama_phase01_catalog-audit.csv`: four additions required.

## Artist and album catalogue additions

Add artist ID `irama`, label `Irama`, suitable color and description; add catalog tuples **in original chronological order**:

```
['Irama', 2016], ['Plume', 2018], ['Giovani', 2018], ['Crepe', 2020]
```

IDs (following normalized lowercase alphanumeric title):

- `irama-irama` studio 2016
- `irama-plume` **ep** 2018
- `irama-giovani` studio 2018
- `irama-crepe` **ep** 2020

Ensure the album catalogue supports EP type in the metadata: the catalog itself uses title/year tuples and does not express `type` there. Warner music-shop 2024 vinyl press dates are **not** original release dates.

## Allowed-token changes

All proposed genre and production tags exist in current `src/data/scenes.ts` / `src/data/production.ts`. **Two new instruments** require adding to `src/data/instruments.ts` before descriptor validation:

- `bassoon` (fagotto, Lancaster Lopes Pinto on *Plume* per Qobuz and AllMusic)
- `recorder` (flauto dolce, Giulio Nenna on *Plume* `Che ne sai` per Qobuz)

`moog`, `talkbox`, `drumprogramming`, `programming`, `liverecording` and `falsetto` already exist. No fabricated hardware/software names. No co-billed release in this phase. `influenced_by` is intentionally blank where album-specific documentary attribution is missing.

## Important source/classification caveats

- 2018 *Plume* and 2020 *Crepe* are **EPs**, despite album-like grouping by retailers.
- `Giovani` 2018 original is the subject, not 2019-expanded `Giovani per sempre`, though Qobuz credits for original tracks are republished there. Exclude bonus tracks from genre and scalar judgments.
- *Crepe* 2020 base EP has seven main compositions; some retailer listings add an alternate `Mediterranea`. The date of 2024 colored vinyl is a repress, not new original.
- Producer credits distinguish named producers from recording, mastering, mix or vocal-production engineers. Some named people are producers on individual songs only.
- `bassoon`, `recorder`, `talkbox`, Moog, Latin and rock are **track-specific** elements; do not infer global prevalence from mere presence.
- `sounds_like` is editorial, not documented inspiration; `influenced_by` blank by design.

## Next suggested batch

`Il giorno in cui ho smesso di pensare` (2022); `No Stress` with Rkomi (2023; confirm studio/EP and co-billing); `Antologia della vita e della morte` (2025). The deluxe 2019 *Giovani per sempre* should be handled as an edition audit, not a duplicative studio album.

No repository files were changed. Run `scripts/validate-descriptors.ts` after import and any token addition.
