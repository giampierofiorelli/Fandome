# CLAUDE_IMPORT — Irama Fandome Phase 02

**Repository branch consulted:** `descriptors` (read-only). **Date:** 26 October 2026. At audit time, both `irama` and `rkomi` were **absent** from `src/data/catalog.ts`, and neither `irama.csv` nor `rkomi.csv` was present in `docs/descriptors/`. **Import Phase 01 before Phase 02.** No GitHub files have been modified.

## Deliverables in this ZIP

1. `irama_phase02_rows_ONLY.csv` — **3 new album rows, exact 27 columns**, UTF-8, `status=draft`.
2. `irama_phase02_sources.csv` — verified source references, each per album.
3. `irama_phase02_genre_evidence.csv` — **one row per genre**, exact source and track-vs-album scope.
4. `irama_phase02_evidence-notes.md` — per-album instruments, techniques, eight ratings, producer and influence boundaries.
5. `irama_phase02_catalog-audit.csv` — current catalog status/additions.
6. This `CLAUDE_IMPORT.md`.

## Add to artist `irama` catalog after Phase 01 tuples

```
['Il giorno in cui ho smesso di pensare', 2022],
['No Stress', 2023],
['Antologia della vita e della morte', 2025]
```

IDs: `irama-ilgiornoincuihosmessodipensare`, `irama-nostress`, `irama-antologiadellavitaedellamorte`. Original editions only: 13 tracks (2022), 11 tracks (2023), 14 tracks (2025). The 2022 deluxe additions and 2026 *Cabana* addition to the 2025 release are excluded.

## Required co-billing action

*No Stress* is a **true jointly billed studio album**, not a featured appearance or Irama solo album. In `src/data/coBilled.ts`, add:

```ts
'irama-nostress': { credit: 'Irama & Rkomi' },
```

**Only after** `rkomi` has a valid page in Fandome, use:

```ts
'irama-nostress': { with: ['rkomi'], credit: 'Irama & Rkomi' },
```

Do not create duplicate record rows under the artist `rkomi` merely to make the shared album appear. Do not convert to `compilation` or `ep`.

## Allowed tokens / vocabulary

- **Genre tokens:** all already allowed in `src/data/scenes.ts` and mapped families; **no new genre names** introduced. `afrobeat` used by critics to mean modern *Afrobeats*; potential ontology ambiguity requiring governance (the system does not currently distinguish it).
- **Instrument to add:** `dobro` to `src/data/instruments.ts` (credited on 2025 album track 'Arizona' by Luca Mongia). No other instrument addition proposed. The Phase 01 `bassoon` and `recorder` additions should still be present before importing prior phase.
- **Production tokens:** `stringarrangements`, `vocoder`, `programming`, `drumprogramming`, `liverecording` already exist; no new techniques needed. Scope production to cited original tracks; leave blank if not verifiably documented.

## Important reviewer guardrails

- **Differentiate credited producers from writers, mixers, string arrangers, guest singers and Shablo's broader artistic direction.** This was checked directly against Qobuz track credits for 2022/2025 and Universal+Qobuz for 2023. No inferred engineer-as-producer credits.
- *Antologia* has a prominent 2025 original versus 2026 expanded **15-track digital retail listing**: **do not** treat *Cabana* or its producers/instruments as part of the 2025 album.
- `influenced_by` for 2025 records a **conceptual De André inspiration** and an **Arizona-only Lenny Kravitz musical reference** directly attested by Irama. If your field excludes conceptual inspiration, drop De André; document decision.
- `genres`: ones labelled `some tracks` or `texture` are relevant but should not be presented as entire album identities. A couple of 2025 track genre tags are explicitly low source strength; editors can remove them after review.
- `sounds_like` recommendations are **editorial comparisons** not proof of intentional musical influence.
- **Run** `scripts/validate-descriptors.ts` from repository after adding vocab and rows. The file schema was validated locally; repository validation was not run.

## Next stage

Main studio album/EP coverage through 2026 is complete once both phases are imported. Do not create a duplicate phase for remastered editions; optional future study is limited to meaningful release-unique projects, not live or standard deluxe editions.
