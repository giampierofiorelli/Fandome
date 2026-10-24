# Fandome — Sabrina Carpenter | Phase 01 — ONLY NEW ALBUMS

**Contains exactly three new original studio-album descriptor rows:**
- `sabrina-eyeswideopen` — *Eyes Wide Open* (2015)
- `sabrina-evolution` — *EVOLution* (2016)
- `sabrina-singularacti` — *Singular: Act I* (2018)

No earlier batch or other artist appears. No existing Fandome album row is overwritten.

## Materials
1. `new_rows/sabrina_phase01_rows_ONLY.csv`: exactly 25-column Fandome schema, header + 3 rows.
2. `research/sabrina_phase01_sources.csv`: authored reviews / label track credits / original release evidence, source reliability and URLs.
3. `research/sabrina_phase01_genre_evidence.csv`: per-genre source, whether whole-album / secondary / texture / weak catalogue tag.
4. `research/sabrina_phase01_evidence-notes.md`: numeric rating rationales, producer-role verification, dissent and uncertainties.
5. `research/sabrina_phase01_catalog-audit.csv`: exact IDs and required additions to Fandome catalogue.
6. `scripts/import_sabrina_phase01.py`: additive/idempotent descriptor importer, rejects collisions and existing mismatched row.

## Claude's required integration workflow
- Work on GitHub branch **`descriptors`**, not `main`.
- **First** add the three absent original album identities to `src/data/catalog.ts` (artist ID `sabrina`) with the dates and titles in catalog audit. The existing 2022/2024/2025 catalog items must be untouched.
- Ensure slug IDs follow repository function: `sabrina-eyeswideopen`, `sabrina-evolution`, `sabrina-singularacti`.
- Review four new genre tokens `acousticpop`, `teenpop`, `contemporaryrnb`, `altpop`. They are attested in the source files, with lower-confidence tags clearly differentiated. Add accepted tokens to `src/data/scenes.ts`, `scripts/validate-descriptors.ts` (and any other vocabulary consumers) **before running the validator**; do not delete genre evidence just to satisfy a validator.
- Run `python3 scripts/import_sabrina_phase01.py /path/to/Fandome --apply` from the extracted ZIP root. Script refuses any conflicting `album_id`, and is idempotent on identical rows; it cannot update the catalog or the vocabulary.
- Run `npx vite-node scripts/validate-descriptors.ts` and the project's regular test/build checks.
- Confirm row-by-row music evidence before marking reviewed. Keep `status=draft` for now. Commit and report actual SHA and test outputs; do not claim a GitHub write from ChatGPT.
- Honor the updated guide: **NO arbitrary max value counts in multi-valued fields**. The **notes field explicitly retains its 15-word limit**.

## Caution
- **Producer vs songwriter**: only role-credited Producer and CoProducer, not credit based only on writing or mixing.
- Album of the Year genre tags are weaker than critic-authored independent sonic analysis; see evidence notes.
- Future batches should contain only: *Singular: Act II* (2019), *emails i can't send* (2022), *Short n' Sweet* (2024), then *Man's Best Friend* (2025), not any of these initial three.
- The 2020 multi-artist soundtrack *Clouds* and the Christmas EP *fruitcake* are not solo studio albums; evaluate separately if needed.
