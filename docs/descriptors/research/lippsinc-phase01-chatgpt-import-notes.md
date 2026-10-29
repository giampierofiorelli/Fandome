# CLAUDE_IMPORT — Lipps, Inc. / Fandome Phase 01 (complete)

Prepared **2026-10-29**, repository `giampierofiorelli/Fandome`, branch **`descriptors`** (read only). Package is the **entire studio discography**: four proposed draft rows, in the exact 27-column order; there is no phase 02.

## Artist and catalog

- Fandome artist ID proposed: `lippsinc`; display name `Lipps, Inc.`.
- `src/data/catalog.ts` inspected; no `Lipps, Inc.` match. `src/data/coBilled.ts` inspected; no matching co-billed artist. `docs/descriptors/lippsinc.csv` not found. `seed.ts` read was attempted but GitHub returned a transient connector failure; **Claude must recheck seed.ts** and the live branch before import.
- Add an artist room, US scene (Minneapolis; late-1970s disco/funk), original albums in order: `lippsinc-mouthtomouth` (1979), `lippsinc-puckerup` (1980), `lippsinc-designermusic` (1981), `lippsinc-4` (1983). Remember `4` is the literal title, and the artist name has punctuation.
- All four rows have `already_in_catalog=no` as observed for catalog.ts, not a guarantee that no later commit added them. Do not create duplicate IDs.

## Import instructions

1. Re-open repository guide and genre/production/instrument enums; check the *current* branch for artist and album collisions.
2. Add the artist and four albums to `src/data/catalog.ts` (or correct canonical catalog location), scene metadata for US English artist (1979 start), and any related artist data required by the site. Keep `type=studio` for all.
3. Import **only** the four records in `lippsinc_phase01_rows_ONLY.csv` to `docs/descriptors/lippsinc.csv`. Match the canonical 27-column header. The four original years: **1979, 1980, 1981, 1983**.
4. Copy source, genre-evidence, evidence-notes and catalog-audit files into `docs/descriptors/research/` under the project conventions. Review `confidence=medium` for Designer Music and 4 before production use.
5. Run `scripts/validate-descriptors.ts` and the usual TypeScript/app checks. If the catalog schema or enums change, raise conflicts; do not silently remap genres or instrument tokens.

## Research guardrails

- `influenced_by` intentionally blank for all four. No musician/producer statement about **specific albums' influences** was located; DO NOT propagate general artist comparison to an asserted influence.
- `sounds_like=Giorgio Moroder` only on **Pucker Up**, grounded in Amy Hanson's review; it is explicitly **not** a direct Greenberg influence. Covers, engineers, guests and backing singers do not create such links.
- *Designer Music* genre-classification disagreement: post-disco/new wave/synth-pop (secondary encyclopedia) vs disco/funk (AllMusic) and electronic (LP style). This is flagged in notes, not a false consensus.
- *Mouth to Mouth* dates differ in MusicBrainz pressings: original release **1979**, and 1980 is not the master date. Steven Greenberg is the producer; David Rivkin recording engineer.
- *4* original lead vocalist is **Margie / Margaret Cox**, not Cynthia Johnson; `voice` was left empty due to lack of a sourced timbral descriptor.
- Avoid compilation *Funkyworld* and unrelated singles. All albums included; phase complete.

## Contents: exactly six files

- `CLAUDE_IMPORT.md` — these instructions.
- `lippsinc_phase01_rows_ONLY.csv` — four album descriptors, 27 columns.
- `lippsinc_phase01_sources.csv` — researched source references, exact URLs.
- `lippsinc_phase01_genre_evidence.csv` — per-genre, per-album evidence and scope.
- `lippsinc_phase01_evidence-notes.md` — complete researcher notes and uncertainty.
- `lippsinc_phase01_catalog-audit.csv` — proposed catalog actions.

## Claude import note (Oct 2026)

- Artist added (4 studio albums, complete), not touring; scene US en 1970 disco,funk. No artist-level influences documented.
