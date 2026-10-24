# Fandome — Elisa, Phase 03 ONLY — 2026-10-24

## Exactly three new descriptor rows
- `elisa-ivy` — **Ivy**, 2010, `studio`
- `elisa-lanimavola` — **L’anima vola**, 2013, `studio`
- `elisa-on` — **On**, 2016, `studio`

**No repeats from Elisa Phase 01 or Phase 02.** No other artists. Guide from Fandome default branch SHA `e5b62ea899e699c1e77ba22b4f44137a4109c7d1`; reread the branch-local latest guide and validator before committing.

## Seven included files
1. `elisa_phase03_rows_ONLY.csv`: 3 rows, exactly 25 columns.
2. `elisa_phase03_sources.csv`: 21 unique source URLs with strengths and what they support.
3. `elisa_phase03_genre_evidence.csv`: 18 supported genre tags, per-album vs per-track scope.
4. `elisa_phase03_evidence-notes.md`: methodological caveats and field-by-field score explanations.
5. `elisa_phase03_catalog-audit.csv`: identity and repository reconciliation.
6. `append_phase03.py`: atomic safe append, no overwrites, idempotent.
7. `CLAUDE_IMPORT.md`: these instructions.

## Claude integration checklist
1. On branch **`descriptors`**, confirm existing Elisa phase 01 and 02 data before import. Never reimport or replace old data. Only `Ivy`, `L’anima vola`, `On` rows are provided here. **Do not repeat previous album rows**.
2. In the read default-branch catalog, **L’anima vola 2013** already exists. Add missing **Ivy 2010** and **On 2016** to `src/data/catalog.ts` (exact IDs as listed), only if they remain absent on the actual branch. The `catalog.ts` slug builder is punctuation-insensitive: `elisa-lanimavola`.
3. Update validator, scene type and guide for new genre tokens **`softrock`, `classicalcrossover`, `drumandbass`** if not yet added. Previously proposed, not necessarily implemented: `poprock`, `adultalternativepoprock`, `indierock`. Do not add duplicate aliases for existing tokens. **`classicalcrossover` is the least secure genre assignment** (secondary taxonomy) and merits independent review rather than being treated as classical orchestral music.
4. Production verification caveats: **Ivy** includes four contributors credited *Additional Production* by AllMusic, not just Elisa; **L’anima vola** has Morricone's production on one track and mixed-source Christian Rigano co-production attribution; **On** has Curt Schneider unequivocally, while other coproducers need original-edition credit review. See evidence-notes.
5. Original edition only: *Ivy* 17 tracks 2010 (not 2020 deluxe or DVD live content), *L’anima vola* 11 tracks 2013, *On* 13 tracks 2016. `On` is 11 English and two Italian. Do not include tour-specific arrangements.
6. From Fandome repository root run `python /full/path/to/extracted/append_phase03.py` (or merge manually only the exact three rows); first ensure the catalog IDs exist so validator can resolve them. This script is atomic, idempotent, and refuses to overwrite a conflicting existing row.
7. Save research into `docs/descriptors/research/` under their phase03 filenames. Run `npx vite-node scripts/validate-descriptors.ts`, tests, typechecks, commit changes **only in descriptors branch** and report actual SHA. ChatGPT did not change GitHub.
8. **No arbitrary number-of-values cap** in multi-value columns; `notes` alone is max 15 words, numeric 0–5 scores remain single values. Never elevate `status=draft` without second-person review. Unknown fields may remain empty. Don't conflate `sounds_like` with documented `influenced_by`.

Next Elisa phases could examine *Diari aperti* (2018), *Ritorno al futuro/Back to the Future* (2022), other studio releases/editions, excluding *Kintsugi* until its announced future Nov 27 2026 release.
