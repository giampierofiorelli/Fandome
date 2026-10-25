# CLAUDE_IMPORT — Rihanna, Phase 02 (27-column descriptors)

**Artist ID:** `rihanna` (verified in `src/data/catalog.ts`, branch `descriptors`). **Scope:** only four album descriptors from this phase. `docs/descriptors/rihanna.csv` did not exist when checked on 2026-10-25; the Phase 01 user ZIP exists separately and must be imported first, or the four Phase 01 rows must be retained if later imported. Do **not** repeat or override Phase 01.

## Phase contents

- `rihanna-loud` — *Loud* (2010, studio; **already in catalog**)
- `rihanna-talkthattalk` — *Talk That Talk* (2011, studio; **already in catalog**)
- `rihanna-unapologetic` — *Unapologetic* (2012, studio; **already in catalog**)
- `rihanna-anti` — *Anti* (2016, studio; **already in catalog**)

## Files in this ZIP

- `rihanna_phase02_rows_ONLY.csv` — exactly 27 columns; only these 4 new album rows.
- `rihanna_phase02_sources.csv` — separately traceable source ledger.
- `rihanna_phase02_genre_evidence.csv` — every genre token has a source, scope and track examples.
- `rihanna_phase02_evidence-notes.md` — 49 standard-edition tracks audited individually; reasoning, uncertainties, disagreements, producer/technique caveats.
- `rihanna_phase02_catalog-audit.csv` — already listed; add no duplicate albums.
- This `CLAUDE_IMPORT.md`.

## Validator and token changes

The inspected branch's validator and guide already have **27 columns** with `voice,instruments,production,lyrics` in that order; this ZIP matches them exactly. Retain any earlier Phase 01 rows and update their schema by adding blank `production` if needed; they must not be duplicated here. Use `npx vite-node scripts/validate-descriptors.ts` and project tests after merging. **No GitHub writes made.**

**New genre tokens:** `alternativernb` (alternative R&B; album-level classification from Album of the Year) and `psychedelicsoul` (psychedelic soul; track scope via Slant and AOTY). Both require additions to `src/data/scenes.ts`, `src/data/genreFamilies.ts`, and the validator's `GENRES` set as applicable. Suggested parent links: `alternativernb -> [rnb, alt]`; `psychedelicsoul -> [soul, psychedelicpop]`. These are *suggestions* for Claude; do not override existing graph conventions without checking.

**New instrument tokens:** none. **New production tokens:** none. All selections are from the current approved sets.

## Caveats

1. Genres from individual tracks are retained even when minor; `scope=texture` or low evidence must never be represented as whole-album style certainty. Genre evidence tracks are descriptive, not a per-song database import.
2. `Loud` 2010 and `Talk That Talk` 2011 refer to **11-track standard albums**; `Unapologetic` 2012 has **14 standard tracks**; `Anti` 2016 has **13 standard tracks**. Deluxe bonuses and outside singles not on the record are excluded. The four standard editions contain 49 tracks total.
3. Producer lists contain track-level credited producers/co-producers (and explicitly named additional producers). Rihanna's ANTI executive producer credit is noted but not conflated with individual recording producers. Writing, mixing and ordinary engineering credits are excluded.
4. `instruments` are only those documented from experts or actual credits, not general genre inference. `production=sampling` describes actual use of a sound recording, not every interpolation, sample clearance or stylistic reference. `liverecording` does **not** apply to vocals recorded on tour in improvised studios.
5. `Anti` standard album was initially released January 28, 2016 (official); deluxe edition followed separately. The 2015 non-album singles *FourFiveSeconds*, *Bitch Better Have My Money*, *American Oxygen* are excluded.
6. `sounds_like` is an editorial guide, not the documented `influenced_by` list. Only direct Fred Ball description supports *Prince* and *Al Green* in `influenced_by` for ANTI via *Love on the Brain*. Tame Impala is a cover, not silently converted to a declared influence.
7. Overall `confidence=high` reflects the wealth of discographic/critic evidence; specific genre assertions with low scope/strength are explicitly provisional and can be trimmed by Claude. No inferred signature hardware/DAWs added. `aor` on ANTI is qualified **guitar texture** from a Guardian review rather than a whole-album claim.

## Phase 03

No further Rihanna **studio** albums released through October 25, 2026 following *Anti* (2016). Other soundtracks/guest features, later singles, remixes and compilations should not be misclassified as studio albums. The four Phase 02 records close the chronological studio-album study; return to another artist or separately request a landmark non-studio project after verifying eligible release and original sources.
