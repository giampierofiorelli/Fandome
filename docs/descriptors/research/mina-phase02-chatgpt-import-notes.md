# CLAUDE_IMPORT — Mina / Phase 02 (selected landmark albums)

## Exactly six deliverables
1. `CLAUDE_IMPORT.md`
2. `mina_phase02_rows_ONLY.csv` — header and exactly 4 new records (25 columns)
3. `mina_phase02_sources.csv` — grounded per-album evidence URLs
4. `mina_phase02_genre_evidence.csv` — every genre in every row, scoped and source-linked
5. `mina_phase02_evidence-notes.md` — reasoning, weaknesses and credit caveats
6. `mina_phase02_catalog-audit.csv` — album existence, add instructions and duplicate-ID risk

## Current source state (read only, 2026-10-25)
- Repository: `giampierofiorelli/Fandome`, branch `descriptors`.
- `docs/descriptors/mina.csv` already contains Phase 01 (4 albums): `mina-tintarelladiluna`, `mina-ilcieloinunastanza`, `mina-mina` (**1964**), `mina-studiouno` (1965). Do not touch these rows.
- `src/data/catalog.ts` already includes these Phase 01 titles plus `Frutta e verdura` 1973, `Mina Live ’78` 1978, `Mina Celentano` 1998.
- Four Phase 02 IDs absent: `mina-studiouno66`, `mina-dedicatoamiopadre`, `mina-canzonissima68`, `mina-mina1971`. Recheck before import; never duplicate.

## CRITICAL collision: two original albums titled *Mina*
- **1964 album**: `Mina` already in catalog, generated `mina-mina`. **Keep it.**
- **1971 album**: also officially titled `Mina` on PDU PLD A 5037, known as monkey-cover LP. For the existing catalog function `slug(title)` to generate a different ID, add tuple **`['Mina (1971)', 1971]`**, with descriptor `title=Mina (1971)` and `album_id=mina-mina1971` as shipped. This is an **editorial disambiguation**, not a new claim about cover text. Record the true printed name separately if Fandome implements display aliases later.
- Otherwise an exact-title addition `['Mina',1971]` generates a duplicate `mina-mina` and could silently corrupt links/ratings. Never do this.

## Import
1. Open branch guide, scenes, families, current validator and current Mina descriptor; ensure any changes since this package are reconciled.
2. Insert the four 1966, 1967, 1968 and 1971 catalog entries in chronological order. Existing years / albums unchanged.
3. Append four rows *ONLY* after de-duplicating IDs. No old rows repeated.
4. **Genre token `blueeyedsoul`** is new: its basis is a secondary genre entry for 1971 with low strength. Add to `src/data/scenes.ts`, `src/data/genreFamilies.ts`, and `scripts/validate-descriptors.ts` **if** accepting it; otherwise log disagreement and remove this one token from descriptor and genre evidence together (preserve broader sourced `soul`). No artificial genre count limit.
5. Preserve blank `producers` in 1967, 1968, 1971; personnel listed in the sleeve as conductor/arranger are **not automatically producers**. Studio Uno 66 has separately listed producer Wladimiro Albera, subject to check.
6. Keep every row `status=draft`, never mark `reviewed` without independent review. `notes` <=15 words. Other fields unlimited as guide allows.
7. Run `npx vite-node scripts/validate-descriptors.ts` and project tests after import; no GitHub writes from this package.

## Next
Further **most-important-only**, not comprehensive discography. Evaluate `Mina canta o Brasil` (1970) as a potential missed culturally distinguished record before continuing past 1971, and *Frutta e verdura* (1973), *Amanti di valore* (1973), *Baby Gate* (1974), *La Mina* (1975), *Mina Live ’78* (1978), and *Mina Celentano* (1998) according to critical evidence and non-duplication rules. Prefer genuine studio LPs and exceptional live/collaboration landmarks, not all releases.
