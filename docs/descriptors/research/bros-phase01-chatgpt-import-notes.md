# CLAUDE_IMPORT — Bros, phase 01 (COMPLETE studio run)

Research date: **28 October 2026**. Artist: **Bros**, proposed artist ID `bros` (UK band Matt Goss, Luke Goss and, initially, Craig Logan; **not** the separate US recording act also called Bros). This phase has **three** original studio records. Because this is the complete Bros studio album catalogue, **NO phase 02 is scheduled.**

## Import exactly three 27-column rows

| proposed album_id | title | first release year | type | landmark |
|---|---|---:|---|---:|
| `bros-push` | Push | 1988 | studio | 1 |
| `bros-thetime` | The Time | 1989 | studio | 0 |
| `bros-changingfaces` | Changing Faces | 1991 | studio | 0 |

**Catalogue audit as of the public `descriptors` branch checked 28 Oct 2026:** No exact Bros artist ID or name in `src/data/catalog.ts` OR `src/data/seed.ts`; `docs/descriptors/bros.csv` returned 404; no `bros` entry in Claude's public 2026 landmark-research memo. Therefore add a new `bros` artist and all three original studio albums with the above IDs, if still absent at the time Claude imports. If IDs have appeared by the time of import, use those existing IDs and avoid duplicates. `bros` does not clash with the available public artist IDs. Do not modify earlier artists or any other descriptors. Run repo `validate-descriptors` and tests.

Public repo files checked: 
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/catalog.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/seed.ts
- https://github.com/giampierofiorelli/Fandome/blob/descriptors/docs/album-descriptors-guide.md

## Album identity and source caveats

- All albums credited only to **Bros**. **No co-billed records**. First album is the 1988 studio *Push*, not the re-released bonus-track configuration. 1988 official original first release (some digital stores cite later dates).
- *The Time* is **1989** and is Bros as a duo following Logan's departure. Catalogue the original UK LP, rather than the US version that includes a remixed *I Owe You Nothing*. Credits identify **Nicky Graham**, not Matt or Luke, as producer. Tom Lord-Alge is a mixer, not co-producer.
- *Changing Faces* is **1991** and the producer is **Gary Stevenson**. Original 10 tracks. Store the year; online sources disagree on the exact release day. A 2010 hits retrospective discusses original track sound, but is not itself an album to include.
- Physical-release credits and label-supplied credits outrank reinterpretations in user reviews. Some retrospective reviews criticised the music; do not copy their value judgments as facts or user-facing notes.

## Artist influences — direct evidence (artist-wide, not album-level)

These are documented **artist statements**: keep as artist-level influence graph edges with sources. The separate album-level `influenced_by` cells are intentionally EMPTY because no source here unequivocally attributes a specific artist to a specific album's conception. Preserve this distinction.

1. **Stevie Wonder** — Matt Goss said his aunt introduced him to Wonder's soul singing; he specifically cited *Talking Book*, *Fulfillingness' First Finale*, *Songs in the Key of Life* as formative. https://whatsmyscene.com/star-scene-matt-goss-luke-goss-bros/ ; contemporary band interview: https://jimshelley.com/music/bros-in-berlin/
2. **Donny Hathaway** — Matt Goss explicitly named him as a formative singer. https://whatsmyscene.com/star-scene-matt-goss-luke-goss-bros/ ; https://www.ukmusicreviews.co.uk/interviews/interview-matt-goss/
3. **Michael Jackson** — Matt names him as a primary vocal influence. https://whatsmyscene.com/star-scene-matt-goss-luke-goss-bros/
4. **George Michael** — Matt lists him in his vocal influence list. https://whatsmyscene.com/star-scene-matt-goss-luke-goss-bros/
5. **The Jackson 5** — Matt and Luke cite the Jackson 5 as formative music in a period interview. https://jimshelley.com/music/bros-in-berlin/
6. **Prince** — Luke Goss expressly named Prince as an early inspiration. https://theactionelite.com/brand-new-luke-goss-interview/
7. **The Police / Stewart Copeland** — Luke singled out The Police and their drummer Stewart Copeland as early formative musical influences. https://theactionelite.com/brand-new-luke-goss-interview/
8. **Frank Sinatra**, **Nat King Cole**, **Perry Como** — Matt identifies hearing all three from his grandfather as shaping his approach to singing; Sinatra specifically his lyric delivery. https://www.ukmusicreviews.co.uk/interviews/interview-matt-goss/
9. **War** (in particular *Low Rider*) and **Parliament** — named as formative listening in the Goss brothers' contemporary interview; the interview incorrectly refers to a War ‘Low Rider album’, so do not treat that as the title of an LP. https://jimshelley.com/music/bros-in-berlin/
10. **Genesis** and **Ian Dury** (notably *Hit Me With Your Rhythm Stick*) — Matt identifies what Luke loved growing up; these are historically sourced early interests, but not documented as a particular Bros album's sonic template. https://jimshelley.com/music/bros-in-berlin/
11. **T. Rex** — contemporaneous journalist reports that the brothers were enthusiastic about the band; weaker evidence than their own statement, so consider an artist-wide link tentative. https://jimshelley.com/music/bros-in-berlin/

Avoid assuming cover performers, remixers, associated album guests or comparative sonic artists are influences. `sounds_like=George Michael` on *Changing Faces* reflects a 1991 *Q* critical comparison, not an artist attribution; `sounds_like=Michael Jackson` on *The Time* reflects an AllMusic specific song comparison.

## New tokens and validator

**New genre tokens:** NONE. All source-established tokens used are present in the public `scenes.ts` genre list: `dancepop`, `teenpop`, `synthpop`, `poprock`, `pop`, `rnb`, `acidhouse`, `discofunk`, `funk`, `powerballad`, `gospel`.

**New instrument tokens:** NONE. All instruments occur in `instruments.ts`. For *Push*, the credited Fairlight Series III is represented in instruments as `synth` and in production as `fairlight`. Never confuse the model with Fairlight II.

**New production tokens:** NONE. Used: `programming`, `fairlight`, `hornarrangements`, `drumprogramming`. Crucially, horn players alone do not prove the `hornarrangements` technique: here *The Time* has explicit arrangement credit to Kick Horns. *Changing Faces* drum programming is documented; do not invent a LinnDrum or TR-808 model.

**Genres and confidence:** All three albums include 4+ genres; source and track-scope details in genre CSV. The relatively rare late-tail genre on a song (*Madly in Love* acid-house-inspired; *Try* gospel; *Are You Mine?* power ballad) should remain low-weight. Stage `status=draft` until independently reviewed.

## Files in the ZIP

1. `bros_phase01_rows_ONLY.csv`: 3 **new** rows and exactly 27 columns, `status=draft`.
2. `bros_phase01_sources.csv`: album references plus artist-only direct-interview influences, labelled `album_id=ARTIST` for clarity.
3. `bros_phase01_genre_evidence.csv`: one record per genre token used, with scope.
4. `bros_phase01_evidence-notes.md`: individual values, instrumentation, comparisons, context, editions and uncertainties.
5. `bros_phase01_catalog-audit.csv`: album-by-album import plan and releases excluded from this run.
6. `CLAUDE_IMPORT.md`: this memo.

**Next phase:** None; all three known Bros studio albums through 28 October 2026 are covered. Live recordings, compilations and remix collections intentionally excluded.

## Claude import note (Oct 2026)

- Rows imported as delivered. Artist added (3 studio albums), scene GB en 1980 pop,dance.
- Artist influences from the Goss brothers' own statements; T. Rex left out (only a journalist's report).
