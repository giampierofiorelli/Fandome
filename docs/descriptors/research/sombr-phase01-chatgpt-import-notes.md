# Fandome — sombr Phase 01 — Claude import

## Files and scope

- `sombr_phase01_rows_ONLY.csv`: **two** new rows with 27 columns, `status=draft`.
- `sombr_phase01_sources.csv`: source-level factual claims and evidence strengths.
- `sombr_phase01_genre_evidence.csv`: one justification for each pipe-delimited genre, including album-level vs particular-track scopes.
- `sombr_phase01_evidence-notes.md`: detailed rationale for all eight numeric scales, instruments, techniques, critical agreement/disagreement and uncertainties.
- `sombr_phase01_catalog-audit.csv`: required catalog action.

## IDs, type and catalog

The official existing Fandome artist ID is `sombr` (lowercase). In `src/data/catalog.ts`, `I Barely Know Her` (2025) already exists, **do not duplicate**. Add `in another life` (2023) as `ep`-typed release to the catalog if your catalog supports non-studio albums; since catalog entries only contain title/year, the descriptor must preserve `type=ep`. Maintain chronological order. `sombr-inanotherlife` and `sombr-ibarelyknowher` are new descriptor IDs. No `docs/descriptors/sombr.csv` existed in the branch when researched (2026-10-26).

## New vocabulary proposals (only with source)

- `instruments.ts`: `autoharp` (Mason Stoops on “we never dated”, Qobuz album track credits).
- `production.ts`: `korgtriton` (sombr's direct “12 to 12” production interview, MusicRadar quoting Mix with the Masters).
- `scenes.ts` and `genreFamilies.ts`: **none**. All genre tokens used here already exist.

## Production-specific cautions

- Both EP and LP producers: `sombr|Tony Berg`. Berg has per-track production credits; **not** mixed by Shawn Everett/Rich Costey, who are not producers. On album “back to friends” and “we never dated” are sombr-only production; the row lists everyone credited anywhere on the album.
- `korgtriton`, drum loop and funk/disco/new-wave are **specifically on “12 to 12”**, not across all ten songs.
- `autoharp` is **specifically on “we never dated”**; `cello` on “canal street”; `trumpet` and marimba (instrument class `mallets`) appear on the 2023 EP.
- Review distinction: Pitchfork's skeptical criticism should not be suppressed because NME's account is enthusiastic.
- Original credits say `guitar` without consistent acoustic/electric identification, so both rows use `guitar`. `overdubbing` is deliberately omitted because an engineer's corroboration was not found. Better to omit unsupported tags than to infer them.
- Influence tokens for 2025 are grounded in artist's album-era interviews, not in named guest musicians. EP influenced_by remains empty.

## Current discography through 2026-10-26

2023 *in another life* (EP); 2025 *I Barely Know Her* (only studio album). 2026 `Homewrecker`, `Potential` and `My Body Isn't Ready` are singles, not additional LPs/EPs. There is no next obligatory phase until another eligible release; refresh discography before new research.

## Validation

Run `scripts/validate-descriptors.ts` after merging into a copy of the branch. This research pass does not modify GitHub. All rows are proposals until second-person review.
