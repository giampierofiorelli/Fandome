# ABBA — Phase 01: instructions for Claude

Scope: **only four original studio albums** (1973–1976). This incremental package must not overwrite `docs/descriptors/abba.csv` if it has meanwhile been created, or replicate prior artist rows.

Files (all paths relative to this ZIP):
- `abba_phase01_rows_ONLY.csv`: **four rows**, 25 columns, `status=draft`.
- `abba_phase01_sources.csv`: mapped verified public URLs, claim-specific support.
- `abba_phase01_genre_evidence.csv`: one row for every genre token in every album row, with source IDs and track/album scope.
- `abba_phase01_evidence-notes.md`: why scores, voices, influences and exclusions were selected.
- `abba_phase01_catalog-audit.csv`: new vs existing ABBA catalog IDs and edition cautions.
- `CLAUDE_IMPORT.md`: this handoff.

### Verified repository context on branch `descriptors` (2026-10-25)
- Fandome artist ID `abba` already exists; artist scene `SE en 1970 pop,disco` exists.
- Catalog already lists `Waterloo` (1974), `Arrival` (1976), `The Album` (1977), `Voulez-Vous` (1979), `Super Trouper` (1980), `The Visitors` (1981), `Voyage` (2021).
- Add catalog `Ring Ring` (1973) and `ABBA` (1975) with ID generation function `abba-ringring` and `abba-abba`; no duplicates of existing songs/albums.
- `docs/descriptors/abba.csv` **did not exist** at time of audit. If it has since been created, merge by ID instead of overwriting.

### Before integration
1. Check each source assertion, including weaker genre labels in the evidence CSV (`schlager`, `folkrock`, `baroquepop`, `phillysoul`). Never inflate one-track elements to overall dominance.
2. Add **four new genre tokens only if retained**: `schlager`, `folkrock`, `baroquepop`, `phillysoul` to `src/data/scenes.ts`, `src/data/genreFamilies.ts`, and `scripts/validate-descriptors.ts`. For `schlager`, consider `pop|traditionalpop`; `folkrock` -> `folk|rock`; `baroquepop` -> `pop`; `phillysoul` -> `soul|rnb`.
3. Preserve normalized `abba-waterloo`, `abba-arrival`; add missing rows to `src/data/catalog.ts` only.
4. Run `npx vite-node scripts/validate-descriptors.ts` and any app build/test. Keep draft until second review.
5. Key source caveats: Original **Ring Ring** and **Waterloo** Swedish LPs can include Swedish vocals alongside English; the international editions may differ. **Fernando was not on standard Swedish Arrival**, and no bonus/deluxe tracks are scored.
6. Producer fields contain only **Benny Andersson** and **Björn Ulvaeus**. Michael B. Tretow was engineer. Stig Anderson was manager/songwriter, not album producer in the credited sources.
7. Influences are strict. Phil Spector is an explicitly documented title-track *engineering method* on Ring Ring, while George McCrae, 10cc and Fats Domino are documented **track-specific** Arrival references; none performed/produced on those records.

### Forward phases (no live)
Phase 02: `ABBA: The Album` (1977), `Voulez-Vous` (1979), `Super Trouper` (1980). Phase 03: `The Visitors` (1981), `Voyage` (2021); review only genuinely independent studio projects, not hit collections or musical cast albums. Name of 1977 catalog: **The Album**, not `ABBA: The Album` if Fandome catalog uses the shorter title.
