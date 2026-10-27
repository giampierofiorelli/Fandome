# Fandome import notes: SPAGNA phase 01

Research date: 2026-10-27. Branch inspected: `descriptors` (read only; NO repository change made).

## What is inside

1. `spagna_phase01_rows_ONLY.csv`: FOUR 27-column descriptor rows with stable proposed IDs.
2. `spagna_phase01_sources.csv`: per-album actual public sources and what each supports.
3. `spagna_phase01_genre_evidence.csv`: every proposed genre plus its evidence link.
4. `spagna_phase01_catalog-audit.csv`: absent catalog records and compilations to exclude.
5. `spagna_phase01_evidence-notes.md`: thorough reasoning, ambiguities and negative-evidence rules.
6. `spagna_phase01_reception.csv`: optional newer reception-score dataset, keep acclaim empty.
7. `CLAUDE_IMPORT.md`: this document.

## Exact import steps

- Add artist `spagna`, display `Spagna`, original studio albums to `src/data/catalog.ts` (or the production catalog's appropriate source).
- Ensure album IDs are created exactly `spagna-dedicatedtothemoon`, `spagna-youaremyenergy`, `spagna-nowayout`, `spagna-matteroftime`. Check local ID generator for slug collisions. Artist missing from both catalog and seed at research time, so the stock descriptor validator **cannot** pass until catalog entries are added.
- Then install `spagna_phase01_rows_ONLY.csv` content as `docs/descriptors/spagna.csv`. Run `npx vite-node scripts/validate-descriptors.ts`. Repair any mismatch against repo-current ID, Genre or instrument schema; do not silently force fields. All four rows are `draft`, not second-person reviewed.
- If the new `Reception` feature is enabled, place `spagna_phase01_reception.csv` at `docs/descriptors/reception/spagna.csv` or merge it into the canonical reception data flow. Acclaim empties are intentional.
- Do not import excluded compilations / live records. Prepare a second batch for 1995+ original studios.

## Source / honesty policies

- No manufactured instrument or recording equipment; 1987 & 1988 instrument and production cells intentionally blank.
- No claimed album-level influences unless artist/producer identifies *that album* as influenced; none justified in the sources for these four rows.
- Sounds-like similarities are independent editorial comparisons.
- 1993 original release date is 1993, irrespective of later 1995 database reissue.
- For 1991, confirm which song Diane Warren produced: she is first and foremost songwriter on “There's a Love”; verify against original CD before applying producer name as final.
- Album-level reception professional `acclaim` left blank, not scored by user reviews.

## Claude import note (27 Oct 2026)

Credits checked on the original sleeves (Discogs API): Dedicated to the Moon producers Ivana Spagna and Larry Pignagnoli (Theo Spagna executive producer), trumpet solo Giovanni Bergamaschi, guitar solo Pignagnoli; No Way Out: Diane Warren co-produced There's a Love with Guy Roche (confirmed); Matter of Time adds acoustic guitar and Hammond. Reception researched by Claude; phase 02 reception kept from ChatGPT.
