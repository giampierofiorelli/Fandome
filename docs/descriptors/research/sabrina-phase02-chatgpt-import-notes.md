# Fandome — Sabrina Carpenter | PHASE 02, ONLY NEW ROWS

**Exactly three records:**
- `sabrina-singularactii` / *Singular: Act II* (2019), new catalogue identity
- `sabrina-emailsicantsend` / *emails i can’t send* (2022), catalogue already contains identity
- `sabrina-shortnsweet` / *Short n’ Sweet* (2024), catalogue already contains identity

All 25 columns follow `docs/album-descriptors-guide.md`. Scope restricted to **original release editions** only; no `fwd:` additions, deluxe tracks, other artist, or earlier Sabrina phase records.

## Files
- `new_rows/sabrina_phase02_rows_ONLY.csv`: header + 3 rows only
- `research/sabrina_phase02_sources.csv`: full expert/official source references (deduplicated)
- `research/sabrina_phase02_genre_evidence.csv`: one evidence entry per genre **and scope**
- `research/sabrina_phase02_evidence-notes.md`: specific rationales for numerical fields, lyrics, voices, producers, influences, disputed genre assignments
- `research/sabrina_phase02_catalog-audit.csv`: currently-present IDs and additions
- `scripts/import_sabrina_phase02.py`: safe additive, no overwrite or forced reset

## Claude — apply steps
1. Work on `descriptors`, **not main**. Check existing `docs/descriptors/sabrina.csv` before appending; if any ID collision differs, **stop** for manual reconciliation. Preserve all previous rows.
2. Add `['Singular: Act II', 2019]` under `sabrina` in `src/data/catalog.ts` **only if absent**, with ID `sabrina-singularactii`. Do **not** add duplicates of 2022/2024 catalogue identities.
3. Confirm genre vocabulary: `contemporaryrnb`, `countrypop`, `gfunk`, `bluegrass` as required by evidence. Some may already be on the live `descriptors` branch; add missing accepted terms consistently in `src/data/scenes.ts`, `scripts/validate-descriptors.ts` and any other genre consumers. New tags have track-local scope notes and the last two are weak; discuss their appropriateness before accepting. Don't blindly delete tags to pass tests.
4. Extract ZIP. Dry run: `python3 scripts/import_sabrina_phase02.py /path/to/Fandome`. Append: `python3 scripts/import_sabrina_phase02.py /path/to/Fandome --apply`; script is idempotent when rows match and refuses mismatched collisions.
5. Run `npx vite-node scripts/validate-descriptors.ts`, appropriate tests/build, inspect the three rows musically, commit, and report actual SHA. Keep `status=draft` pending second-person review.

No artificial limits apply to multi-value columns (voice, genres, lyrics, producers, sounds_like, influenced_by, language). `notes` specifically has **max 15 words**, numeric scales remain 0–5, and other fixed enums still apply. Do not automatically equate a producer, co-writer, mixer and artistic influence.

**Next separate phase:** only *Man’s Best Friend* (2025), not included here.
