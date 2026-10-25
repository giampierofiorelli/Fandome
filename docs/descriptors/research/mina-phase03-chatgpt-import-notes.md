# CLAUDE_IMPORT — Mina Phase 03 (important-albums selection)

## Contents and sequence
Exactly six files: `CLAUDE_IMPORT.md`; `mina_phase03_rows_ONLY.csv` (25-column schema, four new rows); `mina_phase03_sources.csv`; `mina_phase03_genre_evidence.csv`; `mina_phase03_evidence-notes.md`; `mina_phase03_catalog-audit.csv`.

Read `docs/album-descriptors-guide.md` on branch `descriptors`, then this evidence audit. **Never overwrite prior work.** No GitHub writes were performed by this package author.

### Four rows (chronological release date, although first is retrospective insertion)
1. `mina-minacantaobrasil` — *Mina canta o Brasil*, 1970 studio, new catalog entry.
2. `mina-fruttaeverdura` — *Frutta e verdura*, 1973 studio, **existing Fandome catalog ID**; preserve.
3. `mina-amantidivalore` — *Amanti di valore*, 1973 studio, new catalog entry.
4. `mina-babygate` — *Baby Gate*, 1974 studio, new catalog entry.

### Critical safeguards
- Branch audit (25 October 2026) `docs/descriptors/mina.csv` currently contains **only the four Phase 01 rows (1960–65)**. Phase 02 ZIP (1966, 1967, 1968, 1971) was delivered but was not yet imported. Import **Phase 02 as well**, preserving all first-phase material. Re-audit before applying Phase 03 because repository contents may change.
- Insert the 1970 Brazilian album before 1971 despite being researched in Phase 03. Album chronological sequence should not follow ZIP phase number.
- Append four new CSV rows only if the IDs are not already present; do not replace any existing row. Merge songs/editions conservatively.
- The two 1973 albums were released in a **double-pack package** but are **different LPs**, original PDU PLD L 5069 and 5070, with 10 and 11 tracks; do **not** fuse or duplicate.
- *Baby Gate* (1974), original PDU PLD L 6006, has 11 songs. It was paired with *Mina®* in one product bundle but must not inherit its other 11 tracks; 1974 recordings are different from 1958–59 Baby Gate original singles.
- Repertoire writers, arrangers and engineers are **not automatically producers or documented influences**. Pino Presti / Carlo Pes frequently arranged; unknown production roles are blank. 1970 Bob Mitchell producer credit is provisionally based on secondary credit, whereas original/reissue label explicitly lists arrangement: verify original sleeve and leave blank if not substantiated.
- 5 new genre tokens: `mpb` (Brazilian popular music), `samba`, `tropicalia`, `chanson`, `ballad`. Add to `src/data/scenes.ts`, `src/data/genreFamilies.ts`, label mapping and `scripts/validate-descriptors.ts` *before validation*. The `genre_evidence.csv` scopes indicate dominance vs track subsets vs broad tag. Weak contextual genres should be reviewed, not silently assumed.
- The album with ID `mina-mina` from 1964 and the separate `mina-mina1971` from Phase 02 MUST remain distinct; any special title/slug handling introduced for the second must continue to pass the validator.
- All rows use `status=draft`. Do not mark reviewed until second-person audit. The 0–5 scales describe music only; unknown fields stay empty. The only text cap is `notes` <=15 words.
- Run `npx vite-node scripts/validate-descriptors.ts` and automated project tests on the merged files; author cannot run repo tests without a clone.

### Likely next shortlist (Phase 04, to verify importance)
`Mina canta Lucio` (1975), `La Mina` (1975), `Singolare` (1976), `Mina quasi Jannacci` (1977); weigh `Mina Live '78` as a major exception under the user's landmark criterion, then `Attila` (1979), `Kyrie` (1980), `Mina Celentano` (1998) and selected later songbooks. Do not automatically include every annual album.
