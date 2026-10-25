# CLAUDE_IMPORT — Giorgio Moroder, Fandome Phase 07

**Read-only research date: 2026-10-25. Phase 07 is strictly incremental.**

## Exact ZIP inventory
1. `CLAUDE_IMPORT.md`
2. `moroder_phase07_rows_ONLY.csv`: 25-column header and exactly four Phase 07 rows; append by `album_id`, never replace earlier rows.
3. `moroder_phase07_sources.csv`: album-level and claim-specific source references with working source-page URLs.
4. `moroder_phase07_genre_evidence.csv`: one evidence record per genre token; always read its `scope` before allowing a genre to influence recommendations.
5. `moroder_phase07_evidence-notes.md`: scoring rationale, actual credited music producers, conflicting sources, deliberately unknown values.
6. `moroder_phase07_catalog-audit.csv`: catalogue additions and edition boundaries.

## Four album records, in original-release order
- `moroder-topgun` — **Top Gun** (1986, soundtrack): add catalog title. Original Columbia ten-track LP, NOT the 1999/2000/2024 expanded soundtracks.
- `moroder-overthetop` — **Over the Top** (1987, soundtrack): add catalog title. The 1987 LP has ten tracks **including Frank Stallone's Bad Nite**; the official Moroder site omits it.
- `moroder-tobenumberone` — **To Be Number One** (1990, studio): add catalog title; original billing **The Giorgio Moroder Project**. Original ten-track Virgin LP, distinct from twelve-track contemporaneous CD.
- `moroder-theneverendingstoryiithenextchapter` — **The NeverEnding Story II: The Next Chapter** (1990, soundtrack): add catalog title. The **entire WEA album** includes Robert Folk's predominantly orchestral score plus Moroder songs.

## Exact branch/catalog audit
- Fandome artist id: `moroder` (read from `src/data/catalog.ts`, branch `descriptors`).
- At audit time 2026-10-25, `docs/descriptors/moroder.csv` contains 16 rows, through Phase 04; Phases 05 and 06 are **not** in this file and remain independent ZIPs to merge before or separately from Phase 07.
- At audit, the Moroder catalog lists the original 1969–1983 titles and Déjà Vu 2015, not the 1983–1990 Phase 05/06/07 titles. Don't infer import completeness from previous ChatGPT downloads.
- **New genre token:** `modernclassical` from The NeverEnding Story II discography; add it to `Genre` in `src/data/scenes.ts`, `GENRE_PARENTS` in `genreFamilies.ts` (suggest `['classical']`), the genre display map if maintained, and `scripts/validate-descriptors.ts`. All other tokens already occur in the current guide. This recommendation is provisional pending second review; don't delete the source-specific classification silently.

## Production and recording boundaries
- *Top Gun*: Giorgio Moroder is **not** the sole producer of this various-artists album. AFI supplies song-by-song credits. Its score is Harold Faltermeyer's, not Moroder's. Exclude later soundtrack tracks such as Radar Radio and unused film cues from original-album scores. Film producers Simpson/Bruckheimer are **not** record producers.
- *Over the Top*: distinct co-producers on tracks: Van Halen + Hagar; Frank Stallone + Peter Schless; Richie Zito. Source: first LP sleeve and IMDb soundtrack credits. Musician Anthony Marinelli is arranger/synth player, not a credited producer. Distinguish *Bad Nite* from *I Will Be Strong*.
- *To Be Number One*: artist website spells **Feel The Under** and Paul **Engenmann**, but the original LP and MusicBrainz give **Feel The Thunder** and **Paul Engemann**. Some original 1990 CDs add *Break the Rules* and extended *To Be Number One*, but this descriptor covers the original ten-song LP with *Un'estate italiana* as track ten. The *album* gets `landmark=0`: the successful World Cup theme is historically significant, but that does not make the full LP a defining Moroder album.
- *NeverEnding Story II*: official site highlights Moroder's tracks and names Moroder producer. That is not the entirety of the soundtrack: Robert Folk composed, conducted and produced the predominant instrumental score. `producers` contains **Robert Folk|Giorgio Moroder**, not Keith Forsey (who co-wrote the reused theme).
- `sounds_like` is editorial resemblance, not documented artistic influence. All four `influenced_by` deliberately blank. Per-track styles in genre evidence must not be misconstrued as predominant album genres.

## Import validation
1. Re-fetch current branch before appending; skip any existing `album_id` rather than overwriting. Preserve Phases 01–06 exactly.
2. Insert four album tuples into the existing Moroder row of `src/data/catalog.ts`; use the same exact titles as CSV so IDs match the repo slug rule.
3. Add the new genre token if approved; don't add new rows directly into main without check.
4. Run `npx vite-node scripts/validate-descriptors.ts` after importing plus project build/tests.
5. Leave all four rows `draft`; this package does not assert a second-person review or that repository tests were run here.

## Next chronological phase (Phase 08, subject to significance audit)
- **Forever Dancing** (1992, studio)
- **Déjà Vu** (2015, studio; existing catalogue ID `moroder-dejavu`, as generated from the existing catalog title `Déjà Vu` using NFD accent removal)
- **TRON RUN/r** (2016, soundtrack collaboration with Raney Shockne; check that it is a substantive released album)
- **Queen of the South: Original Series Soundtrack** (2018, collaborative score; include only after original-release credits/significance audit)

Separate retrospective work: **Sparks — No. 1 in Heaven** (1979) is a documented seminal Moroder *production collaboration*, but it is billed to Sparks; research for artist-cross-links rather than silently inserting it as a Giorgio Moroder solo album out of chronological order. Other film-song contributions should be evaluated against the user's significance rule, not automatically all catalogued.
