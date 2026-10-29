# Public Enemy — Fandome Phase 01 / Claude import

**Deliverable:** 4 new studio-album rows, 1987–1991; one zip, 6 files. **STRICTLY INCREMENTAL:** no pre-existing artist rows; no album rows outside Phase 01. All data uses the 27-column Fandome header and `status=draft`.

## Repository audit (descriptors branch, checked 2026-10-29)

- `src/data/catalog.ts`: no `Public Enemy`/`publicenemy` entry found.
- `src/data/seed.ts`: no `Public Enemy`/`publicenemy` entry found.
- `docs/descriptors/publicenemy.csv`: absent.
- `docs/descriptors/research/landmarks-claude-2026-10.md`: no existing Public Enemy landmark row documented there.
- **New artist id proposed:** `publicenemy` (letters only; not in either inspected catalogue file). Add artist and album ids before running tests.
- **Albums skipped as already described:** none.

## Phase 01 contents (new ids)

- `publicenemy-yobumrushtheshow` — *Yo! Bum Rush the Show* (1987, studio)
- `publicenemy-ittakesanationofmillionstoholdusback` — *It Takes a Nation of Millions to Hold Us Back* (1988, studio)
- `publicenemy-fearofablackplanet` — *Fear of a Black Planet* (1990, studio)
- `publicenemy-apocalypse91theenemystrikesblack` — *Apocalypse 91... The Enemy Strikes Black* (1991, studio)

## Albums to ADD to catalogue

All 17 Public Enemy-billed records in the attached `publicenemy_phase01_catalog-audit.csv` are absent from both inspected catalogue sources. Add the four Phase 01 album objects now; the remainder may be staged in later phases. All IDs follow `publicenemy-` + alphanumeric lowercase album title (punctuation and spaces stripped).

The **next phase (02)** is:
- *Muse Sick-n-Hour Mess Age* (1994), studio
- *He Got Game* (1998), soundtrack (also appears in some discographies as sixth studio-era album; not an ordinary multi-artist soundtrack)
- *There's a Poison Goin' On* (1999), studio
- *Revolverlution* (2002), studio

Further phases, planned chronological 3–4 albums each:
- **03:** *New Whirl Odor* (2005); *Rebirth of a Nation* (2006); *How You Sell Soul to a Soulless People Who Sold Their Soul???* (2007)
- **04:** *Most of My Heroes Still Don't Appear on No Stamp* (2012); *The Evil Empire of Everything* (2012); *Man Plans God Laughs* (2015)
- **05:** *Nothing Is Quick in the Desert* (2017); *What You Gonna Do When the Grid Goes Down?* (2020); *Black Sky Over the Projects: Apartment 2025* (2025)

## Co-billed/collaboration records

- *Rebirth of a Nation* (2006): **Public Enemy featuring Paris**, a full-length special collaboration. Exact credit confirmed in contemporary NME coverage: https://www.nme.com/news/music/public-enemy-53-1353765. The producing label calls it a full-fledged collaboration and says Paris handled all production: https://www.guerrillafunkrecordings.com/rebirth-of-a-nation. **Review `coBilled.ts` schema before adding the credit.** Not part of Phase 01 rows.
- *He Got Game* (1998): **Public Enemy**, soundtrack album; co-billed artists on individual tracks are features only: https://music.apple.com/us/album/he-got-game-original-motion-picture-soundtrack/1424733581; https://www.allmusic.com/album/release/he-got-game-mr0000655884.

## ARTIST INFLUENCES (independent of any album row)

**Directly identified by Chuck D:**
- **The Last Poets** — named as an influence on Public Enemy in direct artist interview: https://progressive.org/magazine/chuck-d-interview-antonino-d-ambrosio/.
- **Gil Scott-Heron** — named alongside the Last Poets in that same direct interview: https://progressive.org/magazine/chuck-d-interview-antonino-d-ambrosio/.
- **The O'Jays** — Chuck D specifically cites Philadelphia International Records' sound, mentioning the O'Jays as a profound influence: https://progressive.org/magazine/chuck-d-interview-antonino-d-ambrosio/.
- **The Clash** — Chuck D expressly identifies the band and its cross-cultural punk example as inspiring his direction: https://progressive.org/magazine/chuck-d-interview-antonino-d-ambrosio/. Also cited in the *Nation* anniversary interview: https://ew.com/music/public-enemy-it-takes-a-nation-of-millions-to-hold-us-back-chuck-d-35th-anniversary-interview/.
- **James Brown** — Chuck D names him in the 35th-anniversary interview on the 1988 record: https://ew.com/music/public-enemy-it-takes-a-nation-of-millions-to-hold-us-back-chuck-d-35th-anniversary-interview/.
- **Bob Marley** — Chuck D names him in that same 1988 album interview: https://ew.com/music/public-enemy-it-takes-a-nation-of-millions-to-hold-us-back-chuck-d-35th-anniversary-interview/.

**Do not automatically count** sampled tracks (e.g. Slayer, Dennis Coffey, James Brown samples), contributors/guests, labels (Motown, Stax), or broad movements (punk) as artist-to-artist influence links. Chuck D also mentioned previous rap generations without naming each artist; we cannot manufacture those names.

## New Fandome vocabulary to consider

- **Genres:** `politicalrap`, `politicalhiphop`, `conscioushiphop`, `experimentalhiphop`, `thrashmetal` (**last limited to the Anthrax track**). Check `scenes.ts`: these source-exact genres may be missing; do not replace a documented source label with an adjacent but different token. Separate genre-evidence sheet has source and album/track scope.
- **Instruments:** no additional tokens proposed. `sampler`, `drummachine`, `turntables`, `synth`, `guitar`, `bass`, `sequencer`, `saxophone`, `drums`, `keyboards`, `congas` are existing guide tokens.
- **Production:** **new token `akais900`** is required: Reverb's producer/equipment account specifies the Akai S-900 for the 1988 sessions, and `src/data/production.ts` currently lacks this token. Other early sampler models: existing `ensoniqmirage` (1987) and `sp1200` (1988). Don't extend these machine assignments to later albums by inference.

## Source/credit caveats

- 1987 release month is inconsistently stated in vendor and catalogue material; year 1987 is safe.
- Bill Stephney produced the 1987 debut; Hank Shocklee and Carl Ryder are also **co-producers**. Rick Rubin is **executive producer** only, excluded under project rules.
- 1988 LP credits give producer Hank Shocklee and Carl Ryder, but list Eric Sadler as assistant producer and Bill Stephney as production supervisor; the latter are excluded from `producers` even though the Bomb Squad is often collectively credited.
- 1990 credits identify four Bomb Squad individuals as producers; no need to invent extra producer names from sample writers.
- For 1991 the four actual producers of Imperial Grand Ministers of Funk are kept distinct from **Bomb Squad executive production** (contemporary https://www.worldradiohistory.com/Archive-All-Music/Gavin-Report/90/91/Gavin-1991-09-20.pdf); all four appear individually in AllMusic credits. Contemporary ad spells one member `J.I.B.` whereas AllMusic says `The JBL`; verify identity before canonicalizing an alias. Amoeba's generic Hank Shocklee producer listing conflicts with the period album-level ad; do not silently merge categories.
- 'Bring tha Noize' (1991 version) is a **song-level crossover with guest Anthrax**, not grounds to tag all of *Apocalypse 91* as rock or metal.
- The **official site** currently describes inconsistent cumulative studio totals in different locations, while several discographies count *He Got Game* in studio albums, and some count *Loud Is Not Enough* (2020) released by **Enemy Radio**. This audit lists studio albums under Public Enemy, a Public Enemy-billed soundtrack and the Public Enemy featuring Paris collaboration. Exclude Enemy Radio under the project rule against pre/side moniker work. New 2026 'She Got Game' is a **single**, not an album. https://www.publicenemy.com/music; https://publicenemy.bandcamp.com/album/black-sky-over-the-projects-apartment-2025?from=discover_page; https://www.nme.com/news/music/public-enemy-53-1353765.
- Excluded compilation/live: *Greatest Misses* (1992), other best-of anthologies, and live albums. Reissue bonus tracks are not separate albums.

## Import commands for Claude (not executed)

1. Add the `publicenemy` artist and the four album IDs/titles/year/type to `catalog.ts` (and seed only if required by the app's architecture).
2. Review the newly documented genre tokens against `scenes.ts`, adding missing source-exact types. Verify producer alias `J.I.B.`/`The JBL`.
3. Import **only** `publicenemy_phase01_rows_ONLY.csv` into `docs/descriptors/publicenemy.csv`, preserving header order and cells.
4. Link evidence via `publicenemy_phase01_sources.csv` and `publicenemy_phase01_genre_evidence.csv`, retain caveats from evidence-notes.
5. Run `scripts/validate-descriptors.ts` and associated catalogue tests; fix schema conflicts without collapsing genres or inventing source claims.

## Included files

1. `CLAUDE_IMPORT.md`
2. `publicenemy_phase01_rows_ONLY.csv`
3. `publicenemy_phase01_sources.csv`
4. `publicenemy_phase01_genre_evidence.csv`
5. `publicenemy_phase01_evidence-notes.md`
6. `publicenemy_phase01_catalog-audit.csv`

## Claude import note (Oct 2026)

- New genre tokens: politicalrap, politicalhiphop, conscioushiphop, experimentalhiphop, thrashmetal (Bring tha Noize only). New production token akais900.
- Artist added with 17 albums (He Got Game a soundtrack; Rebirth of a Nation co-billed "Public Enemy featuring Paris"); scene US en 1980 hiphop.
