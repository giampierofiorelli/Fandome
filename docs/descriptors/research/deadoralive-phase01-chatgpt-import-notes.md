# CLAUDE IMPORT — Dead or Alive / Fandome phase 01

Research on 27 October 2026. GitHub `descriptors` was read **only**: `src/data/catalog.ts`, `src/data/seed.ts`, `src/data/coBilled.ts`, `docs/album-descriptors-guide.md`, `src/data/scenes.ts`, `src/data/genreFamilies.ts`, `src/data/instruments.ts`, `src/data/production.ts`, the validator, and the landmark list. The target `docs/descriptors/deadoralive.csv` was not present (404), and no matching entry was found in the landmarks list. No existing descriptors have been repeated.

**Artist ID:** `deadoralive` proposed, lowercase ASCII letters only. **No Dead or Alive entry** was found in either `catalog.ts` or `seed.ts` (do not confuse with unrelated Death or metal artists). Add a new artist. All four Phase 01 albums below must be added to the catalog before validator run. The existing-artist ID rule does not override a later canonical ID if Claude discovers an artist newly added by someone else: reconcile before import.

## 1. Phase-01 deliverables — 27-column original studio album rows

| Album ID (proposed) | Title | Original year | Type | Fandome catalog |
|---|---|---:|---|---|
| `deadoralive-sophisticatedboomboom` | Sophisticated Boom Boom | 1984 | studio | **ADD** |
| `deadoralive-youthquake` | Youthquake | 1985 | studio | **ADD** |
| `deadoralive-madbadanddangeroustoknow` | Mad, Bad and Dangerous to Know | 1986 | studio | **ADD** |
| `deadoralive-nude` | Nude | 1988 | studio | **ADD** |

## 2. Catalog changes and exclusions

- **ADD:** artist `deadoralive` (Dead or Alive) and exactly the four Phase 01 records above. Keep the canonical case/spelling of the album titles. The 1986 title is **Mad, Bad and Dangerous to Know**; editions vary in punctuation, so avoid duplicate variants.
- **ADD LATER (Phase 02):** *Fan the Flame (Part 1)* (1990); *Nukleopatra* (1995); *Fragile* (2000); *Fan the Flame (Part 2) (The Resurrection)* (first published 2021 with 1990-era recordings). Verify the final title/issue for the archival Part 2 before adding.
- **EXCLUDE:** *Rip It Up* (1987, remixed compilation), *Nude: Remade Remodelled* (1989, remix), greatest hits, live, and box sets. Do not duplicate album editions with added remixes. *It’s Been Hours Now* (1982) is an early EP, deferred pending historical-significance decision. Early releases as **Nightmares in Wax** are a *different billed act*, so exclude them.
- **No co-billed originals** here. Wayne Hussey is a session-era guitarist/ex-member, not a co-billed album artist. Zeus B. Held and Stock Aitken Waterman are producers, not co-billed artists.

## 3. Production and genre token audit

- **New genre tokens: NONE.** `synthpop`, `dancepop`, `hinrg`, `dancerock`, `disco`, `newwave`, `postpunk`, `alternativedance`, `electronic`, `clubdance`, `freestyle`, `italodisco`, `eurodisco`, `poprock`, `contemporarypoprock` all already exist in `src/data/scenes.ts`. `hinrg` is the actual canonical spelling (not `hi-nrg`).
- **New instrument tokens: NONE.** `keyboards`, `drums`, `bass`, `guitar`, `electricguitar`, `brass`, `strings`, `synth`, `drummachine`, `sequencer`, `sampler`, `percussion`, `saxophone`, `melodica` already exist.
- **New production tokens: NONE.** `hornarrangements`, `stringarrangements`, `drumprogramming`, `synthprogramming`, `sampling`, `fairlight`, `ppgwave`, `linndrum`, `digitalediting` already exist. **Do not copy Youthquake's named hardware to any other LP** based on producer reputation.
- All eight 0–5 scales are whole-album **editorial judgments**. All rows are `draft` (not second-person `reviewed`), and notes contain max 15 words. Check references and status during import.

## 4. ARTIST INFLUENCES (first-person sourced)

These are the group's **musical influences**, not people guesting on records or artists who came later. Album-specific influence fields are more conservative.

- **Sylvester** — Pete Burns confirmed Sylvester was among his specific musical influences in his **2003 interview**. First LP producer Zeus B. Held independently says the band listened to Sylvester's up-tempo gay Hi-NRG disco. [Pete Burns interview, Windy City Times](https://windycitytimes.com/2003/06/18/alive-and-well-pete-burns-of-dead-or-alive/) · [Zeus B. Held first-person interview](https://www.electricityclub.co.uk/zeus-b-held-interview/). Sylvester's *Step II* includes the songs commonly associated with his disco sound: [Sylvester official discography](https://sylvesterofficial.com/discography/step-ii/).
- **Divine** — Burns explicitly singled out **Native Love (Step by Step)** as closest to his ideal punk-inflected dance sound. Its first studio album was *My First Album*, also issued as *Jungle Jezebel*: [Burns interview](https://windycitytimes.com/2003/06/18/alive-and-well-pete-burns-of-dead-or-alive/) · [original album context](https://en.wikipedia.org/wiki/Native_Love_%28Step_by_Step%29). Divine is an influence because **Burns says so**, not because a cover, guest role or sample appears on the album.
- **Patrick Cowley** — producer Zeus B. Held explicitly says Dead or Alive loved **Patrick Cowley and Sylvester**, informing their uptempo sound while recording *Sophisticated Boom Boom*: [Zeus B. Held original producer interview](https://www.electricityclub.co.uk/zeus-b-held-interview/). Cowley did **not** co-produce the record.
- **Hazell Dean** — SAW producer **Mike Stock** recalls Burns hearing the SAW-produced **Whatever I Do (Wherever I Go)** and contacting that team specifically, indicating an influence on the production target for *Youthquake*. The single first appeared on *Heart First* (1984). [Mike Stock direct recollection](https://radiox.cms.socastsrm.com/2021/03/03/mike-stock-looks-back-on-36-years-of-stock-aitken-waterman-smashes/) · [SAW song/album record](https://www.stockaitkenwaterman.co.uk/hazell-dean-whatever-i-do). This is not proof that her other recordings shaped later Dead or Alive albums.

**NOT documented album influences:** KC & the Sunshine Band are the source of a *cover*, not automatically influential for the album; SAW are credited *producers*, not `influenced_by` artists; Frankie Goes to Hollywood, ABC, Bananarama, Soft Cell, Human League and Samantha Fox in `sounds_like` are **editorial comparisons only**. Recheck all `sounds_like` references before automatic album linking.

## 5. Critical edition/date caveats

- **Nude date:** Japan's original edition was already out in December **1988**; **Oricon specifies 19 Dec 1988**, whereas some catalogues list 18 Dec. US/UK **1989** editions are later territorial releases. Use **1988** in the year field. [Oricon original 1988 Japan listing](https://www.oricon.co.jp/prof/110356/products/10189/1/) · [1988 Japanese vinyl](https://eil.com/shop/moreinfo.asp?catalogid=18932).
- *Mad, Bad and Dangerous to Know* is **1986** by original US/Japan LP / November release; later UK catalogues display **1987**. [ChartSurfer original pressings](https://www.chartsurfer.de/artist/dead-or-alive/mad-bad-and-dangerous-to-know-album_fhuvfu.html).
- **Sophisticated Boom Boom:** original LP 10 tracks; extended 2007/2016 material cannot be used as the basis for original production-instrument credits. Some Wayne Hussey tracks predate the finished group lineup; his contributions still belong to original 1984 songs.
- **Youthquake**: SAW's era-specific gear (Fairlight, PPG Wave, LinnDrum) is attested by technical studio retrospect but may not be used on every track. Source descriptions supersede heuristic inference from genre. Pete Burns's melodica is heard on a particular track, not throughout album.
- **Nude original core:** original nine tracks, no 1989 Japan-only remix set. Producer **Pete Burns|Steve Coy**. Mike Percy and Tim Lever remained on at least some of the album's recorded material; they departed during its production, so their instruments can appear as track-level credits without naming them co-producers.
- **Catalog first:** Claude must add artist and Phase 01 releases (if still absent) before running `npx vite-node scripts/validate-descriptors.ts`; run tests afterwards. Nothing was written to the repository.

## 6. ZIP contents and workflow

1. `deadoralive_phase01_rows_ONLY.csv` — 4 strictly incremental studio-album rows, header exactly 27 columns.
2. `deadoralive_phase01_sources.csv` — real URL records with statement-level provenance.
3. `deadoralive_phase01_genre_evidence.csv` — every genre entry tied to album-specific source and scope.
4. `deadoralive_phase01_evidence-notes.md` — per-album reasons, caveats, edition disagreements.
5. `deadoralive_phase01_catalog-audit.csv` — add/skip choices and proposed next-phase list.
6. `CLAUDE_IMPORT.md` — this guide.

**Next phase 02:** *Fan the Flame (Part 1)* (1990), *Nukleopatra* (1995), *Fragile* (2000), and a separate verification of archival *Fan the Flame (Part 2)* (released 2021) before treating it as a new studio-album row.
