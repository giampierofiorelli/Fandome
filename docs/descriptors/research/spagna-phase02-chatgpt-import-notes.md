# Fandome — Spagna Phase 02 — Import notes

Scope: 4 original studio albums (1995, 1996, 1997, 2000). Produced 27 October 2026. Source branch was inspected read-only. **No GitHub changes have been made.**

## Included files

- `spagna_phase02_rows_ONLY.csv` — exactly four 27-column descriptors, stable proposed IDs.
- `spagna_phase02_sources.csv` — album-specific evidence, URLs, strengths.
- `spagna_phase02_genre_evidence.csv` — every chosen genre with its source and album/track scope.
- `spagna_phase02_catalog-audit.csv` — include/exclude/defer decisions, with the 1998 hits compilation excluded.
- `spagna_phase02_evidence-notes.md` — provenance, track-specific instrument citations, factual cautions.
- `spagna_phase02_reception.csv` — importance/acclaim/mainstream supplemental metrics.

## Import instructions for Claude

1. Import Spagna Phase 01 first (`spagna-dedicatedtothemoon`, `spagna-youaremyenergy`, `spagna-nowayout`, `spagna-matteroftime`).
2. Add this batch to the **same artist** `spagna` in `catalog.ts`, four albums. Do not create a duplicate Spagna room. New proposed IDs: `spagna-siamoindue`, `spagna-lupisolitari`, `spagna-indivisibili`, `spagna-domani`.
3. Append these four CSV records to `docs/descriptors/spagna.csv`, **not** replace Phase 01; remove only one duplicate header. Do not import `E che mai sarà` (1998) as a studio album.
4. Append reception to `docs/descriptors/reception/spagna.csv`, respecting the existing header; keep empty `acclaim` fields as intended.
5. Run `npx vite-node scripts/validate-descriptors.ts` once catalogue IDs and descriptors are synchronized. Confirm `status=draft`, no fabricated second-person review.
6. `accordion` for the 1997 album and `latinpop` / `orchestralpop` for the 2000 album have specifically qualified sources in the evidence notes: review before merging if only direct album-level tags are allowed.

## Validation outcome

Four records, 27 fields each; exact valid genre spellings from 27-column guide, scales 0–5, permitted categorical types, no empty album IDs, 15-word note cap. Sources do not imply any machine absent from the source. Some `sounds_like` entries are editorial sonic similarities, not documented influences. Catalog lookup from original Phase 01: Spagna absent; new IDs must be added before repo validator can pass.

Remaining for Phase 03: *La nostra canzone* (2001; newly recorded covers, studio not compilation), *Woman* (2002), *L'arte di arrangiarsi* (2004), *Diario di bordo* (2005). The 2006 repack needs classification as reissue before an import.
