# Fugees — Fandome Phase 01 / Claude import

Research date **29 October 2026**. GitHub `giampierofiorelli/Fandome`, branch **`descriptors`**, read-only. **ONE final ZIP; six UTF-8 files; two original studio albums, 27 columns.** Phase 01 and final phase for the studio discography.

## Catalogue / ID checks

- Neither `src/data/catalog.ts` nor `src/data/seed.ts` currently contains Fugees; no existing `docs/descriptors/fugees.csv` was found. An ID collision check finds `fugees` unused. New artist ID: **`fugees`**, not `laurynhill` or `wyclef`.
- Insert the artist entry in `src/data/catalog.ts` with the chronological album pairs `['Blunted on Reality', 1994]` and `['The Score', 1996]`. Suggested artists array row: `['fugees', 'Fugees', '#58656b', 'Refugee Camp hip-hop', [['Blunted on Reality', 1994], ['The Score', 1996]]]`. The colour/tagline are editorial suggestions, **not facts**.
- The new album IDs in `fugees_phase01_rows_ONLY.csv` follow the catalogue slug function: `fugees-bluntedonreality` and `fugees-thescore`.
- Do not add to `docs/descriptors/laurynhill.csv` or otherwise duplicate Lauryn Hill’s solo work. *Blunted on Reality* is sometimes billed *Fugees (Tranzlator Crew)*; normalise to **Fugees**, preserving that alias as context in notes.
- **Already-described albums skipped:** none. **Already-in-catalogue Fugees studio albums:** none.

## Original studio albums — this ZIP

1. `fugees-bluntedonreality` — *Blunted on Reality* (**1994**, studio), new album and new descriptor.
2. `fugees-thescore` — *The Score* (**1996**, studio), new album and new descriptor.

## Required new genre vocabulary

- `eastcoastrap` — AllMusic album style **East Coast Rap** on *Blunted on Reality*. Fandome has `eastcoasthiphop` but the owner requires retaining the source's **exact term** rather than silently mapping to a near neighbour. Source: https://www.allmusic.com/album/blunted-on-reality-mw0000110303
- `reggaefusion` — Pitchfork explicitly calls part of the debut **reggae fusion**. Source: https://pitchfork.com/reviews/albums/22566-blunted-on-reality/
- `raggarap` — Pitchfork explicitly calls the debut **ragga rap**. Same source.

These three tokens are not yet in the checked `src/data/scenes.ts`. Add them to the Genre type, display-name mapping, any controlled enums and `scripts/validate-descriptors.ts` before validation. No new instrument or production tokens are required. **Do not coerce new tags** to `ragga`, `reggae` or `eastcoasthiphop` without evidence or approval. `fugees_phase01_genre_evidence.csv` gives individual scope/citations for all 22 genre assignments.

## ARTIST INFLUENCES (member statements; do not automatically place in every album `influenced_by`)

- **The Beatles (Sgt. Pepper's Lonely Hearts Club Band) and Pink Floyd (The Wall)** — Wyclef explicitly names the pair as the creative blueprints *during the making of The Score*. These **two**, unlike general formative listening, qualify in the 1996 album row's `influenced_by`. Primary first-person source: https://www.deathwishcoffee.com/pages/fueled-by-death-cast-ep-168-wyclef-jean-reincarnated
- **Bob Marley (Exodus), Bob Dylan (early work), The Police (Synchronicity)** — Wyclef personally names the albums and musicians he listened to when coming up, in his **August 2026** joint interview with Lauryn Hill. These are member-level formative sources; the interview does not explicitly say they were 1996 production blueprints, so they are NOT inserted in the row. Source: https://ny1.com/nyc/all-boroughs/ap-top-news/2026/08/05/qa-ms-lauryn-hill-on-the-diaspora-calling-festival-in-the-uk-the-fugees-legacy-and-dangelo
- **Jimi Hendrix, Marvin Gaye, Johnny Cash, Boukman Eksperyans**, plus Bob Marley — Wyclef names these as influences on *his own music* in a first-person Big Think interview. Do not presume all three Fugees shared each influence. Source: https://bigthink.com/videos/big-think-interview-with-wyclef-jean/
- **Shep & The Limelites and family soul/doo-wop records** — Lauryn Hill recounts personally discovering the group's 45s in her parents' collection, in a contemporary **1996** interview; her early singing was grounded in that music. Source: https://mixmag.net/feature/from-the-archive-fugees-1996-cover-feature-interview-hip-hop
- **Not influences by sampling alone:** Teena Marie, Ramsey Lewis, Enya, Roberta Flack, Bob Marley, Aretha Franklin and others sampled or covered on a track are not automatically album-level influences. A Marley influence is documented separately by Wyclef's own statements, but the *No Woman, No Cry* cover alone would not establish it.

## Credits, editions, scope

- Original edition only. Some *Blunted on Reality* dates vary January/February 1994; a 2026 AllMusic retail reissue is **not** a 2026 Fugees album. `1994` is certain. *The Score* 1996 original release day differs between domestic and global metadata, use **1996**.
- Producers include verified producers/co-producers only. **Salaam Remi** explicitly produced the *Nappy Heads* / *Vocab* **remixes** and *Fu-Gee-La*, but is **not automatically an original-track producer on Blunted**. Do not confuse songs covered or sampled with recording/performance/production credits.
- Sly & Robbie’s bass/drums and Handel Tucker’s keyboards appear particularly in the **Fu-Gee-La alternate Sly & Robbie mix** on CD listings. Do **not** attribute them to the main original album program without a track-level main-version credit. Likewise do not infer specific samplers from the existence of samples.
- The group, not Lauryn as a solo artist, is the album's primary credit; these are not formally co-billed LPs. No entry in `src/data/coBilled.ts` is needed. Guests (John Forté, Diamond D) are track-level only.
- `Bootleg Versions` (1996) is a remix release; `Greatest Hits` (2003) a compilation. Both **excluded** under owner’s current scope. No newer studio LP released by 29 October 2026 is documented in the checked discography.

## Workflow for Claude

1. Add `fugees` artist and the two album title/year pairs to `src/data/catalog.ts`.
2. Add three source-specific genre tokens to `src/data/scenes.ts`, display and validation declarations.
3. Save `fugees_phase01_rows_ONLY.csv` as `docs/descriptors/fugees.csv` (one header and **two** rows). Both rows are `status=draft`.
4. Retain `fugees_phase01_sources.csv`, `fugees_phase01_genre_evidence.csv`, and `fugees_phase01_evidence-notes.md` under the normal research directory following established naming conventions.
5. Run `npx vite-node scripts/validate-descriptors.ts` and the project's relevant tests after catalog and token updates. No tests have been run against the changed repo, because this ZIP does not write to GitHub.

## Next phase

**No Phase 02 needed** for the two-album studio catalogue. If the owner later requests noteworthy remix or EP material, make a new narrowly scoped, strictly incremental phase; never repeat these two rows.

## Claude import note (Oct 2026)

- New genre tokens eastcoastrap (eastcoasthiphop, rap), reggaefusion (reggae, pop), raggarap (ragga, hiphop). Artist added (2 studio albums), not touring; scene US en 1990 hiphop,reggae.
