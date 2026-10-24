# Fandome robyn phase 03 — STRICTLY INCREMENTAL

**Only 4 new album/EP identities, never any earlier rows.** 25 CSV fields. Status draft. Guide checked at SHA c8e17340aa0213761d34b82d7af226ce1e5d254e. No arbitrary limits on multivalue fields; source coverage controls inclusion. Album notes follow the guide's <=15-word exception.

## Deliverables
- `robyn_phase03_rows_ONLY.csv`: 4 rows, no historical rows.
- `robyn_phase03_sources.csv`: 24 per-album source links (22 unique URLs), critic/label/credit authority and scope.
- `robyn_phase03_genre_evidence.csv`: 43 genre attestations, including track-specific scope.
- `robyn_phase03_evidence-notes.md`: detailed source-by-source reasoning, credits, caveats.
- `robyn_phase03_catalog-audit.csv`: what catalogue has and needs; no silent duplication.
- `append_phase03.py`: append-only idempotent and collision-safe import.
- `CLAUDE_IMPORT.md`: these instructions.

## Claude integration
1. Work on `descriptors` branch, fetch latest and recheck its guide, genre list, catalog, pre-existing `robyn.csv` rows before merge. GitHub main may have changed after this export.
2. Insert only missing catalog identities listed in audit. Distinguish co-billed collaborators and original release types; do not convert collaborative EPs into solo studio albums. Review `type=studio` for True Electric carefully (newly recorded studio reworkings, not live show audio).
3. Add newly evidenced genre tokens **only if absent**: `bigbeat`, `chillwave`, `synthwave`. Prior suggested tokens may exist on `descriptors` but not the default guide. Update taxonomy, guide and validator together.
4. Run `python /path/to/append_phase03.py` **from Fandome repository root** (script reads its adjacent file). Identical IDs are skipped on re-run; a differing existing row raises a conflict and never overwrites silently. No external rows are included.
5. Save research CSV and notes to `docs/descriptors/research/`; `npx vite-node scripts/validate-descriptors.ts`, run typecheck/tests, then commit to `descriptors` and report real SHA. No GitHub write was performed here.

**Critical nuances:** Refer to the album-specific evidence notes before applying. Sources support facts; numeric scales are carefully calibrated *editorial* judgments; keep `draft` until independently reviewed.
