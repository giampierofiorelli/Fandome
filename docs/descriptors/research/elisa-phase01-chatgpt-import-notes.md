# Fandome — Elisa — PHASE 01 (strict increment, October 24 2026)

## Exactly these NEW descriptor rows
1. `elisa-pipesflowers` — `Pipes & Flowers` (1997), studio
2. `elisa-asilesworld` — `Asile’s World` (2000), studio **exact existing curly apostrophe from catalog.ts**
3. `elisa-thencomesthesun` — `Then Comes the Sun` (2001), studio

Do not add old batches or other artists. All 3 album IDs are **already in** Fandome `src/data/catalog.ts`; there are no identity additions required in this batch.

## Contents — seven files
- `elisa_phase01_rows_ONLY.csv` — exactly three rows and 25 header columns. Existing Fandome album IDs, title capitalization and years preserved.
- `elisa_phase01_sources.csv` — 21 album-source links, 20 unique sources (one future-release check is catalog-context-only).
- `elisa_phase01_genre_evidence.csv` — 22 scoped genre evidence claims (dominant vs specialist-style vs secondary).
- `elisa_phase01_evidence-notes.md` — reasons for numeric scores and nonnumeric details, differentiated critical vs fact claims.
- `elisa_phase01_catalog-audit.csv` — cross-check versus current artist album catalog.
- `append_phase01.py` — atomic, collision-safe append-only script tested for first run, second run, and changed-row collision.
- `CLAUDE_IMPORT.md` — this document.

## Instructions for Claude
1. Checkout the `descriptors` branch. Read current live guide/validator and actual `docs/descriptors/elisa.csv` before any change. Research reference guide SHA `e5b62ea899e699c1e77ba22b4f44137a4109c7d1` (default branch read on Oct 24).
2. Add these **exact** missing genre strings to `src/data/scenes.ts`, `scripts/validate-descriptors.ts` and any relevant UI taxonomy only if absent: **adultalternativepoprock, alternativerock, downtempo, electronica**. In genre evidence, review secondary-style labels and decide admissibility; do not silently replace a legitimate exact genre with a generic one.
3. Preserve `Asile’s World` curly apostrophe in the Fandome album title; source and album ID rules are correct. Preserve year=1997 for `Pipes & Flowers` despite later AllMusic regional release; `Asile’s World` 2000 13-track original (not 2001 16-track edition), no *Luce*; 2001 original `Then Comes the Sun`.
4. Run `python /EXTRACTED/PATH/append_phase01.py` from the **repository root**, or merge the three new rows manually without overwriting any existing album ID. Script leaves existing rows untouched and refuses on an incompatible duplicate.
5. Run `npx vite-node scripts/validate-descriptors.ts`, tests/typecheck/lint as applicable, then commit on `descriptors`, report real SHA. This bundle does **not** edit GitHub directly.
6. Numeric scores are judgments based on musical review evidence, `status=draft`. `influenced_by` must remain attributable to specific critical/artist evidence, not automatic inference from musical similarity.

## Later phases (not included)
- `Lotus` (2003), `Pearl Days` (2004), `Soundtrack '96-'06` (2006 compilation if useful), `Heart` (2009), `Ivy` (2010), `L'anima vola` (2013), `On` (2016), `Diari aperti` (2018), `Ritorno al futuro/Back to the Future` (2022), others after verification.
- **Do not import Kintsugi as released**: as of the research date October 24 2026, its announced release is **November 27, 2026**, per ANSA [K26_ANSA].
