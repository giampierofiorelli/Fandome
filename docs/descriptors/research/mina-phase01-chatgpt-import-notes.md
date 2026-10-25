# CLAUDE_IMPORT — Mina / selected landmark albums / Phase 01

## Package is incremental (exactly six files)
- `CLAUDE_IMPORT.md` (this checklist)
- `mina_phase01_rows_ONLY.csv`: **four rows, exactly 25 columns**
- `mina_phase01_sources.csv`: evidence URLs, credits, genres and selection
- `mina_phase01_genre_evidence.csv`: one row per album genre, scope and source IDs
- `mina_phase01_evidence-notes.md`: song/album scope, grades, omissions, disagreements, notes on selection
- `mina_phase01_catalog-audit.csv`: existing vs missing albums, release versions

## Repository checked 2026-10-25 (branch descriptors, read-only)
`src/data/catalog.ts` artist ID `mina`, initially seeded with *Studio Uno* (1965), *Frutta e verdura* (1973), *Mina Live ’78* (1978) and *Mina Celentano* (1998). No `docs/descriptors/mina.csv` present at that point. **Recheck HEAD before importing; never duplicate rows or overwrite concurrently imported research.**

## Exactly four selected early landmark albums
1. `mina-tintarelladiluna` — *Tintarella di luna* (1960, studio in official discography; compiled previously issued singles): **add to catalog**.
2. `mina-ilcieloinunastanza` — *Il cielo in una stanza* (1960, studio in official discography; compiled singles): **add to catalog**, not the 4-track EP.
3. `mina-mina` — *Mina* **(1964)** (studio; first new-program Ri-Fi LP): **add to catalog**. **1971's self-titled Mina is a different release, and must NOT share this ID.**
4. `mina-studiouno` — *Studio Uno* (1965, original 12-track album): **already in catalog**; preserve this generated ID and append its descriptor only if missing.

## Integration essentials
- User explicitly requested **the most important albums**, not all records. Continue with critically/historically meaningful releases and disclose selection criteria. Do not silently add all intermediate 1961–63 albums just to make a consecutive discography.
- These four are original LP **release units**. The two 1960 records and *Studio Uno* reuse prior singles yet are traditionally/officially filed as studio albums, `type=studio`, not later greatest-hits compilations. Keep this historical ambiguity visible. Original LP track lists only; exclude remasters, re-recordings, deluxe bonuses, cross-border substitutions.
- Producer is **Wladimiro Albera** solely on the 1964 *Mina*: original first-pressing record explicitly credits him. Augusto Martelli, Tony De Vita, Giulio Libano and Piero Gosio are **arrangers/conductors, not proven producers**. Missing producer cells on other three records are deliberate.
- `influenced_by` blank throughout: songs covered, label staff, arrangements, and `sounds_like` singers are not proof of direct **documented inspiration for the album**. This is not an error.
- For original *Mina* 1964 `language=en|it|pt|es`. In *Studio Uno* only `it` (cover originals in other languages do not alter the recorded album language).
- **New genre tokens proposed:** `boogiewoogie`, `italianpop`, `musicaleggera`. Update `src/data/scenes.ts`, `src/data/genreFamilies.ts`, `scripts/validate-descriptors.ts` and any mappings. `itpop` is not automatically equivalent to period `italianpop`. Others used are already allowed; ensure validator recognizes current branch vocabulary.
- `genres` include all sourced names without a limit; `genre_evidence.csv` marks very weak/broad/track-only ones so future ranking can weight provenance instead of assuming equal album dominance.
- `notes` must be max 15 words; `voice` and `lyrics` guide allowed tokens only; all eight numeric scales are integers 0–5 when filled, intentionally blank if unclear. `status=draft`, **not reviewed**.
- `Mina` title (1964) gets `mina-mina`. 1971 *Mina* requires editorially disambiguated ID in next batch and should use stable slug/ID even after catalog updates. No accidental renaming existing seed.
- Before merging, run `npx vite-node scripts/validate-descriptors.ts` and project tests; preserve currently imported data and validate any proposed genre token additions. This ZIP does **not** modify GitHub.

## Next selected Phase 02
*Studio Uno '66* (1966), *Dedicato a mio padre* (1967), *Canzonissima '68* (1968), *Mina* (1971), after checking historic album-level evidence and carefully disambiguating the 1971 eponymous album.
