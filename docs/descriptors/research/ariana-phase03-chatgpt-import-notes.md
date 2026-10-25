# CLAUDE IMPORT — Ariana Grande / Fandome Phase 03

**Package date:** 2026-10-25. **Repository:** `giampierofiorelli/Fandome`, branch `descriptors`, read-only research. **Intent:** incremental import of only two rows (2025–2026) that do not exist in the repository at preflight.

## Contents (six files, no code)

1. `CLAUDE_IMPORT.md` — this import contract.
2. `ariana_phase03_rows_ONLY.csv` — the two original CSV rows with exactly 25 columns.
3. `ariana_phase03_sources.csv` — independent reviews, first-party release records and credited release metadata.
4. `ariana_phase03_genre_evidence.csv` — one source-backed row per selected genre with scope and review flags.
5. `ariana_phase03_evidence-notes.md` — full ordinal scoring reasoning, caveats, collaborations and disagreement.
6. `ariana_phase03_catalog-audit.csv` — two new album identifiers and action list.

## Exact rows and ID action

- `ariana-wickedforgoodthesoundtrack` — `Wicked: For Good – The Soundtrack` (2025, soundtrack, the full film-song album including cast). New Fandome catalogue entry.
- `ariana-petal` — `petal` (2026, studio). New catalogue entry; preserve original lower-case styling.

Both follow `artistId + '-' + lowercase_ASCII_alphanumerics(slug(title))` and do not duplicate the already-imported eight Ariana descriptors. Existing *Wicked: The Soundtrack* (2024) ID `ariana-wickedthesoundtrack` must not change.

## Schema and genre status

- Same exact 25-column guide, scale 0–5, valid voices/lyrics/ISO language, notes <= 15 words, `status=draft`.
- **No new genre tokens needed.** All tokens used already occur in guide/`scenes.ts`/genre families/validator at preflight. Please still verify current branch before importing.
- Under the owner's **no genre-count cap** rule, complete quoted genre labels include limited track textures. `ariana_phase03_genre_evidence.csv` records album-wide vs track-only entries, so recommender should not treat weak track-style evidence as dominant. If ranking cannot downweight scope, assess the potential recommendation distortion before import.
- `petal` references **Imogen Heap** as documented critical-attribution influence on harmony stacking; treat as qualified-critic assertion, not a primary artist statement. Comparators in `sounds_like` are not turned into causal influences.
- `Wicked` soundtrack producer roles are **Schwartz, Oremus, Wells**. Ariana/Erivo only labelled vocal producers in verified track credits; composer of original instrumental score **John Powell** not automatically producer of the song album.

## Verify and import (Claude only)

1. Inspect `docs/descriptors/ariana.csv`, `src/data/catalog.ts` and `src/data/seed.ts`, ensuring neither new album ID is present. If one exists now, reconcile rather than duplicate.
2. Append only the two new rows. Keep all pre-existing records intact, do not replace previous phases.
3. Add two catalogue entries to Ariana's catalogue, preserving exact title and year. 
4. Store source/evidence files in `docs/descriptors/research/` per conventions; do not overwrite old phase source files.
5. Run `npx vite-node scripts/validate-descriptors.ts` and project tests, review the high-level and track-level genre distinction, inspect voice/lyrics and producer credit roles; keep `draft` until reviewed.

**No GitHub write was performed during research.**
