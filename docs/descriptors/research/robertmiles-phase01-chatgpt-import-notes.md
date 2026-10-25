# CLAUDE_IMPORT — Robert Miles Phase 01 (2026-10-25)

## Import files
- `robertmiles_phase01_rows_ONLY.csv`: exactly **3 new descriptor rows** in the prescribed 27-column order. The archive contains no rows from another artist or phase.
- `robertmiles_phase01_sources.csv`: 27 album-specific evidence records with URL, evidence strength, and supported claims.
- `robertmiles_phase01_genre_evidence.csv`: 33 genre-scope records, including track-only and texture genres.
- `robertmiles_phase01_evidence-notes.md`: mapping rationale, scale judgement, instruments/production, and review disagreements.
- `robertmiles_phase01_catalog-audit.csv`: existing vs new album IDs.

## Albums in this phase
1. `robertmiles-dreamland` — **Dreamland** (1996), studio, **already in catalog.ts**.
2. `robertmiles-23am` — **23am** (1997), studio, **ADD to catalog.ts**.
3. `robertmiles-organik` — **Organik** (2001), studio, **ADD to catalog.ts**.

Artist key `robertmiles` verified from `src/data/catalog.ts`, branch `descriptors`. At research time no `docs/descriptors/robertmiles.csv` existed. Preserve catalogue ID `robertmiles-dreamland`. New IDs follow name-slug algorithm. Do not overwrite other files/rows. The first phase is intentionally **three albums**, not the whole discography.

## Tokens to add before validating
**Genres** not currently in `Genre` / validator (source and scope documented per row): `dreamtrance`, `dreamhouse`, `progressivehouse`, `melodictrance`, `newage`, `worldmusic`. Check `src/data/scenes.ts`, `docs/album-descriptors-guide.md` and validator's genre allowlist. If a current token has since been added, reuse it, don't duplicate.

**Instruments**: `sarangi`, `tabla` (2001 album). Other instruments in rows are already in `src/data/instruments.ts`.

**Production**: `kurzweilk2000`, `akais3200`, `korg01w` (1980s/90s hardware documented in a specialist retrospective for **Children** and **Fable**, both on Dreamland). Other production tokens used exist. Document this gear evidence as **medium strength** rather than an engineer's verified session log. Do not equate the sound of piano with evidence of an acoustic instrument. Avoid adding Korg M1, Roland JD-800, Roland RD-500, Lexicon LXP15, a DAW or a drum machine without direct album-specific evidence. The source directly disputes the stage gear claims.

## Credits and catalogue caveats
- Robert Miles = Roberto Concina. `producers` uses **Robert Miles**, not the duplicate legal alias.
- **Dreamland:** UK/EU first issue lacks later US single **One & One**, which adds Maria Nayler vocals and additional producer Robin Hancock. The row reflects the frequently circulated inclusive/expanded album; if Claude prefers original 1996 EU release ONLY, remove Hancock and reconsider `language=en`, `lyrics=love` scope (Fable other vocal exceptions). Keep one album row: reissues are not new albums.
- **23am:** First UK releases are **1997**, despite an inaccurate 1998 date in RA biography. The original sleeve identifies Plus XXX Studios Paris. `fieldrecordings` is not asserted from mere touring-samples references.
- **Organik:** 2001 original credits show Toni Economides credited *additional producer*. Sarangi is **not** sitar; preserve the specific new instrument token. Trombone, saxophone or flute should not be inferred from Indian/world-music tags. Lyrics are almost entirely limited to Paths, sung by Nina Miranda; a French-language track title is not evidence of French vocals.
- `influenced_by` intentionally empty for this phase: RA lists general formative influences, but no verified **album-specific** artist influence meets the stricter field definition. Co-performers are not listed as influences. `sounds_like` is deliberately an editorial sonic-comparison field.
- `status=draft` everywhere. Numeric scales are editorial and source-grounded, not extracted scores. `notes` ≤15 words.

## Co-billed album
None in Phase 01. The 2004 album **Miles_Gurtu** is *Robert Miles & Trilok Gurtu*: in Phase 02 add `{ credit: 'Robert Miles & Trilok Gurtu' }` in `src/data/coBilled.ts` for `robertmiles-milesgurtu`. The 2001 guest musicians are NOT co-billed.

## Complete released album plan / exclusions
- Studio: *Dreamland* (1996), *23am* (1997), *Organik* (2001), collaborative studio *Miles_Gurtu* (2004), *Th1rt3en* (2011).
- Significant remix work: *Organik Remixes* originally **2002** on S:alt (later 2003 editions); archive it as remix, not a sixth studio LP.
- **Phase 02 (next ZIP)**: `robertmiles-organikremixes` — **Organik Remixes** (2002, remix); `robertmiles-milesgurtu` — **Miles_Gurtu** (2004, studio, collaborative, original printed credit Robert Miles & Trilok Gurtu); `robertmiles-th1rt3en` — **Th1Rt3En** (2011, studio).
- Not selected as core albums: 1996 *Dreamland II* (territory-specific remix companion), 1997 *In the Mix* (DJ mix), *Renaissance Worldwide* (DJ mix/compilation, listed inconsistently 1997/2002). These are not independent studio albums; reconsider only if original critical/label documentation establishes landmark status. Single-track reissues not new album rows.
- Keep the 2002 **first-release year** for *Organik Remixes* despite AllMusic's 2003 reissue listing. Supported by RA and Salt/streaming metadata (URLs: https://ra.co/dj/robertmiles/biography, https://open.spotify.com/album/4C9kuI2Uy4fNvBtdSLNYaU).

## Import sequence
Add new album metadata and new tokens, merge **only** the three new descriptor lines, then run `npx vite-node scripts/validate-descriptors.ts` plus normal checks; review the instrument/production caveats before marking any row `reviewed`.
