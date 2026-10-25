# CLAUDE_IMPORT — The Cranberries / Phase 01

Read-only researched hand-off for Fandome `descriptors` branch. Cutoff **25 October 2026**. **Strictly incremental:** add exactly the four Phase 01 rows below; nothing from other artists or future phases. All rows have **27 columns**, UTF-8-BOM encoded CSV, `draft` status. No GitHub writes performed.

## Catalogue inspection

Artist ID in `src/data/catalog.ts`: **`cranberries`** (display: **The Cranberries**). All 4 albums are **already catalogued**. `docs/descriptors/cranberries.csv` was **not found** (404 on inspected branch), so no existing album descriptors are to be repeated. Claude should recheck live branch before merging in case the repo has changed since inspection.

| album_id | Original title | year | type | action |
|---|---|---|---|---|
| `cranberries-everybodyelseisdoingitsowhycantwe` | Everybody Else Is Doing It, So Why Can’t We? | 1993 | studio | descriptor only, existing catalogue |
| `cranberries-noneedtoargue` | No Need to Argue | 1994 | studio | descriptor only, existing catalogue |
| `cranberries-tothefaithfuldeparted` | To the Faithful Departed | 1996 | studio | descriptor only, existing catalogue |
| `cranberries-burythehatchet` | Bury the Hatchet | 1999 | studio | descriptor only, existing catalogue |

### Albums to add to catalog this phase

**None.** These four titles and years already occur in the `cranberries` artist row of `catalog.ts`. Preserve generated catalogue IDs exactly; if Claude finds a different ID in seeded data, defer import and reconcile rather than creating duplicates.

### New genre/instrument/production tokens

- **Genres:** `celticrock` (AllMusic *Celtic Rock* for 1993 and 1999); `janglepop` (secondary album genre tag for 1993 and 1999, reinforced by Noel Hogan's documented Johnny Marr-inspired jangling guitar). Add them verbatim to `scenes.ts` Genre and extend `genreFamilies.ts` appropriately; **do not silently map them to `celtic` or `indiepop`**. All other genres in these four rows are already represented in the inspected guide. The lower-confidence jangle-pop label deserves a final importer review.
- **Instruments:** `whistle` (the 1996 album credits only say *whistle*; do not assert *tin whistle*); `musicalsaw` (Henry Daag credited *saw* on the 1996 album's 'Bosnia'). Add both to `instruments.ts` with appropriate labels or flag for review. These instruments are limited to album tracks, not the album's basic rhythm section.
- **Production:** no new tokens. Used existing `distortion`, `stringarrangements`, `hornarrangements` only where this album's review or credits support them. 1993 production is **blank** because producer identity is not a documented specific technique; don't infer analogue tape, reverb, named electronics, digital DAWs, or drum machines.

### Original-edition and technical caveats

1. *Everybody Else…* uses 1993 original **12 tracks**. Pearse Gilmore produced aborted early sessions and a later Complete Sessions bonus track *Them*; do **not** include him among the producers of the original LP.
2. *No Need to Argue* uses original **13 tracks**; *Zombie* is the main distortion-heavy exception. Exclude live bonus discs and 2020/2025 anniversary extras.
3. *To the Faithful Departed* 1996 original editions vary **13–15 tracks** by territory: *Intermission* and *Cordell* differ in the original configurations. String credit on *Cordell* therefore does not imply that the piece appears in every version. Don't fold in the Pavarotti *Ave Maria* or later bonus material. Michael Kamen is an orchestrator/arranger, NOT an album producer; Bruce Fairbairn is a credited co-producer and also plays trumpet on *Salvation*.
4. *Bury the Hatchet* original US standard is **13 tracks**, with *Sorry Son* as 14th in some regions. The row characterises common original programme, not the 2002 Complete Sessions. Benedict/Ben Fenner is ONE credited person, not two separate producers. Mixing engineer Mike Plotnikoff is not a producer.
5. `sounds_like` names are **editorial similarity judgments**; `influenced_by` is only populated on the 1993 album, where Noel Hogan directly named the formative artists. Do not copy producer Stephen Street into an influences column. Critic disagreements are documented in `_evidence-notes.md`.
6. One album's musicological category does not automatically transfer to adjacent releases. Distorted *Zombie* doesn't license global grunge on 1994; 'Salvation' brass and *Bosnia* musical saw don't become basic 1996 instrumentation on every track.

## Six files

- `CLAUDE_IMPORT.md` (this file)
- `cranberries_phase01_rows_ONLY.csv` (27 columns, exactly 4 data rows)
- `cranberries_phase01_sources.csv` (source audit, links and supported claims)
- `cranberries_phase01_genre_evidence.csv` (every entered genre, source, scope and strength)
- `cranberries_phase01_evidence-notes.md` (album-specific justification, disputes, constraints)
- `cranberries_phase01_catalog-audit.csv` (no new records this phase)

## Next Phase 02 — 4 new rows

1. *Wake Up and Smell the Coffee* (2001) — missing from current catalogue, must ADD.
2. *Roses* (2012) — missing from current catalogue, must ADD.
3. *Something Else* (2017) — studio orchestral/acoustic re-recordings of older songs plus three new songs; decide how to represent without recommending it as original compositions; missing from catalogue, must ADD if included as a distinct studio album.
4. *In the End* (2019) — already in catalogue; posthumous studio completion, do NOT frame as newly recorded Dolores vocals.

No new live-only albums by default, including later historical concert releases unless a distinct landmark exception is supported. There will be no repeated rows from Phase 01.
