# Vasco Rossi — Fandome phase 03 (1989–1998)

**Four new studio-album rows only.** The delivery is incremental: import `vasco_phase03_rows_ONLY.csv` without overwriting phase 01 or phase 02. Research checked against the `descriptors` branch on 29 October 2026. This archive does not make any GitHub changes and does **not** assert that earlier ZIPs have been imported.

## Exact album IDs and catalog audit

| Year | Album (exact catalogue title) | Album ID | Catalogue action |
|---:|---|---|---|
| 1989 | Liberi liberi | `vasco-liberiliberi` | Existing |
| 1993 | Gli spari sopra | `vasco-glisparisopra` | Existing |
| 1996 | Nessun pericolo… per te | `vasco-nessunpericoloperte` | Existing |
| 1998 | Canzoni per me | `vasco-canzoniperme` | **ADD** studio 1998 |

The active catalog currently includes only three of the four above. Only add *Canzoni per me*; preserve existing album IDs. No co-billed album in this batch.

**Excluded:** `Fronte del palco` (1990), `Vasco live 10.7.90 San Siro` (1991), `Rewind` (1999) are live; other greatest-hits collections also excluded. The 1992 single/EP *Gli spari sopra* is not the full studio LP.

## New tokens and technical caveats

No new genre, instrument or production tokens expected; all tokens used belong to the existing Fandome guide (please revalidate against the up-to-date TypeScript lists). `analogtape` for 1993 is supported by label account, **but** programming credit sources conflict; see the detailed note. `drumprogramming` for 1989 needs confirmation beyond contemporaneous MIDIdrum + programming credits.

**Producer details not to flatten:**
- *Liberi liberi* Vasco Rossi only; Rudy Trevisi arranges and Serse May programs, not credited as producers. Maurizio Biancani mixes specific tracks.
- *Gli spari sopra* Guido Elmi and Vasco Rossi album producers; Dave Stewart only produces *Hai ragione tu*, verified by original-era credits and 1993 trade interview. Guest Pino Daniele does not count as producer.
- *Nessun pericolo… per te* Guido Elmi and Vasco Rossi main producers, Celso Valli additionally producer on tracks 5 and 10 per original-vinyl database, disputed relative to separate arrangement-only sleeve summary. Andrea Braido co-production vs pre-production discrepancy: omitted pending sleeve review.
- *Canzoni per me* Vasco Rossi and Celso Valli, not Luca Bignardi (recording/mixing/programming).

`influenced_by` and `sounds_like` intentionally empty: no album-specific firsthand influence testimony or stable critical sonic comparison meeting the Fandome standard. Adaptations, lyrical comparisons and collaborators never turn into influences by default.

## Claude import process

1. In `src/data/catalog.ts`, append `['Canzoni per me', 1998]` to Vasco's album list; chronological order after *Nessun pericolo… per te*, before any later albums.
2. Check there is no newer `vasco.csv` row for these exact IDs before inserting; append these four rows only to `docs/descriptors/vasco.csv` after any phase 01/02 rows.
3. Verify ambiguous studio programming and the song-level producer credits against original print; amend the draft if required.
4. Validate all genres and instrument/production tokens in the working repository; run `npx vite-node scripts/validate-descriptors.ts` and the project's test commands after import.
5. Treat `reception/vasco.csv` as a separate reception/importance workflow, not included in the research ZIP.

## Archive

- `vasco_phase03_rows_ONLY.csv` — 27 columns, 4 rows.
- `vasco_phase03_sources.csv` — 39 itemized source records with links and claim scopes.
- `vasco_phase03_genre_evidence.csv` — 23 genre evidence records, including track-only tags.
- `vasco_phase03_evidence-notes.md` — detailed technical and critical uncertainty.
- `vasco_phase03_catalog-audit.csv` — existing / missing / excluded albums.
- `CLAUDE_IMPORT.md` — this memo.

## Next phase 04

`Stupido hotel` (2001), `Buoni o cattivi` (2004), `Il mondo che vorrei` (2008), `Vivere o niente` (2011). Only studio releases, no live or compilations.

## Claude import note

- Added Canzoni per me (1998) to the catalogue.
- Producers: Vasco Rossi dropped as self-credit on all four (Liberi liberi is left with no producer). Dave Stewart kept on Gli spari sopra (one track, Hai ragione tu); Celso Valli kept on Nessun pericolo… per te pending the reception check.
