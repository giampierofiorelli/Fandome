# CLAUDE IMPORT — Elisa, Phase 04 ONLY

Two new draft rows, not a full Elisa discography replacement:

- `elisa-diariaperti` — *Diari aperti* (2018), original 11-song issue.
- `elisa-ritornoalfuturobacktothefuture` — *Ritorno al futuro/Back to the Future* (2022), original 25-song CD issue.

**DO NOT import any Elisa phase 1–3 rows from this archive**: they are intentionally absent. Do not silently overwrite any existing ID. Work in `descriptors` branch; these album IDs already exist in the Fandome catalog and must not be re-added.

## Contents

- `elisa_phase04_rows_ONLY.csv` — 25-column descriptor proposal (two rows).
- `elisa_phase04_sources.csv` — original label, expert critical reviews and credit evidence (source URLs, scope and limitations).
- `elisa_phase04_genre_evidence.csv` — every genre token and its whole-album vs one-song scope.
- `elisa_phase04_evidence-notes.md` — rationale for all numeric and editorial choices; critical disagreements and edition choices.
- `elisa_phase04_catalog-audit.csv` — exact catalog identity and original edition.
- `import_incremental.py` — collision-safe incremental import; no silent replacement.

## Steps

1. Compare these IDs against `docs/descriptors/elisa.csv` on `descriptors`, and against the catalog. They should both be existing catalog identities; absence in descriptor CSV is expected.
2. Add three **expert-attested, mainly song-local** genre names to both `src/data/scenes.ts` and `scripts/validate-descriptors.ts` if they are retained: `itpop` (Rolling Stone), `calypsopop` (Rolling Stone), `hiprock` (SentireAscoltare). Exact tokens are lowercase and letters-only. Existing `indierock`, `electropop`, `songwriter`, `reggae`, `house`, etc. need no new tokens.
3. Inspect the evidence notes: do not upgrade track-only genres into whole-album claims. Check `influenced_by` claims separately from `sounds_like` and collaborators; verify each named producer is actually credited.
4. Optional safe preview from extracted ZIP folder: `python3 import_incremental.py --repo /path/to/Fandome`.
5. On the `descriptors` branch, after inspection: `python3 import_incremental.py --repo /path/to/Fandome --apply`. It refuses conflicting album IDs and leaves prior rows intact. Repeat is idempotent for identical rows.
6. Run `npx vite-node scripts/validate-descriptors.ts` and repository tests before any import into the site. Final review required: all rows are `draft`, **not** `reviewed`.
7. Report real commit SHA if any GitHub changes were made. ChatGPT did **not** push or alter GitHub.

## Important uncertainty and disagreements

- `Diari aperti`: the 2019 *Segreti svelati* expanded edition is not the original 2018 11-track album.
- `Ritorno al futuro/Back to the Future`: the original double CD is 25 tracks; some digital formats list 27 with bonus tracks. We did **not** score those bonus tracks.
- Rolling Stone's rhetorical use of *punk* for the De Gregori duet is **not** evidence of punk-rock genre.
- Specialist criticism disagrees on the records' adventurousness/coherence: recorded in evidence notes, not hidden.
- No artificial cap on count of genres, voice types, themes, producers, sonic parallels or influences. Numeric 0–5 scales, the 25-column schema and the 15-word `notes` limit still apply.
