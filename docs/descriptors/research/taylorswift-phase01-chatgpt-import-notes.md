# CLAUDE IMPORT — Taylor Swift / Fandome Phase 01

**Date:** 26 October 2026. **Branch audited:** `descriptors` (read-only); artist ID `taylorswift`; target descriptor path `docs/descriptors/taylorswift.csv` (not present when checked). Import **only** the four new rows. No prior Taylor Swift descriptor file was available to duplicate.

## Phase contents and catalogue audit

| Album ID | Title | Year | Type | Action |
|---|---|---:|---|---|
| `taylorswift-evermore` | Evermore | 2020 | studio | Already in catalogue: keep |
| `taylorswift-midnights` | Midnights | 2022 | studio | Already in catalogue: keep |
| `taylorswift-thetorturedpoetsdepartment` | The Tortured Poets Department | 2024 | studio | Already in catalogue: keep |
| `taylorswift-thelifeofashowgirl` | The Life of a Showgirl | 2025 | studio | Already in catalogue: keep |

**Albums to add:** none. The four names are already present under the `taylorswift` artist entry in `src/data/catalog.ts`. **Co-billed albums:** none in this phase; the listed guest artist features are tracks within Swift releases, not jointly billed albums. `coBilled.ts` was reviewed. No live album, compilation or re-recording is included.

## Album version caveats

- `evermore`: original 15 tracks, not later deluxe bonuses.
- `Midnights`: original **13 tracks**; 3am Edition's seven later tracks excluded. Aaron Dessner is not credited producer on original 13.
- `The Tortured Poets Department`: **16-track base album**. The Anthology's 15 later same-day extra songs are part of an extended edition, not a separately authored core album row; do not import a second TTPD album. The source notes explain distinctions.
- `The Life of a Showgirl`: **12-track 2025 base**. A September 2026 *Encore* reissue contains four newly added songs; not a new studio album. The four extra songs are not scored in the 2025 original-album row. [Reuters](https://www.reuters.com/business/media-telecom/taylor-swift-releases-encore-her-hit-showgirl-album-2026-09-25/).

## NEW tokens for Claude to add

**Genre** `contemporarysingersongwriter` — exact **Contemporary Singer/Songwriter** tag on [AllMusic evermore](https://www.allmusic.com/album/evermore-mw0003459663) and [AllMusic Showgirl](https://www.allmusic.com/album/the-life-of-a-showgirl-mw0004596064); define in `src/data/scenes.ts` and `src/data/genreFamilies.ts` (suggest parent `songwriter`; any additional parents require your design judgment).

**Instrument** `omnichord` — [Pitchfork Midnights original credits](https://pitchfork.com/news/taylor-swift-releases-new-album-midnights-listen-and-read-the-full-credits/) and [official original Opalite credits](https://www.taylorswift.com/tloasopalitecredits/); put in `src/data/instruments.ts`, no generic substitute.

**Production** `op1` — OP-1 explicitly credited to Patrik Berger on *evermore* / *gold rush*. **Production** `prophetx` — Prophet X explicitly credited to Justin Vernon on *evermore* / *marjorie*. Both require adding to `src/data/production.ts`, retaining their exact model distinct from Prophet 5. [Primary 2020 credits](https://pitchfork.com/news/taylor-swift-releases-new-album-evermore-listen-and-read-the-full-credits/).

## ARTIST INFLUENCES — only in Phase 01

These **career-level** sources explicitly connect the artist's own stated learning/influence and must NOT be copied into album-specific `influenced_by` without independent evidence for that album:

- **Joni Mitchell** — Swift named *Blue* and explained admiration for Mitchell's autobiographical emotional songwriting to Rhapsody; cited in [Recording Academy, 22 April 2024](https://www.grammy.com/news/artists-who-influenced-taylor-swift-stevie-nicks-joni-mitchell-tim-mcgraw/). Strength: **high, self-disclosure quoted**.
- **The Chicks** (formerly Dixie Chicks) — Swift explicitly described how seeing the group convinced her that female artists could play instruments while giving striking live performances; [Recording Academy citing Swift's 2020 Billboard interview](https://www.grammy.com/news/artists-who-influenced-taylor-swift-stevie-nicks-joni-mitchell-tim-mcgraw/). Strength: **high, direct quotation**.
- **Fall Out Boy** — In a 2023 *Speak Now (Taylor’s Version)* announcement, Swift explicitly named the act among artists who most strongly shaped her lyric writing at that stage. [Recording Academy](https://www.grammy.com/news/artists-who-influenced-taylor-swift-stevie-nicks-joni-mitchell-tim-mcgraw/). Strength: **high, directly attributed statement**.
- **Paramore** — Same explicit 2023 lyric-writing influence statement; [Recording Academy](https://www.grammy.com/news/artists-who-influenced-taylor-swift-stevie-nicks-joni-mitchell-tim-mcgraw/). Strength: **high, directly attributed statement**.
- **Shania Twain** — Swift's Sept 2021 public TikTok about country women crossing into pop concludes that she learned from Twain. [ABC News, 23 Sep 2021](https://www.goodmorningamerica.com/culture/story/taylor-swift-shares-appreciation-shania-twain-tiktok-80187448). Strength: **high, public artist assertion**.

**Excluded from artist influences:** name-dropped Stevie Nicks/Patti Smith (mere song references), Paul McCartney's story about Linda (an unconfirmed lyric theory), literary and film inspirations, featured guest performers and producers. These do not meet album-specific documentary threshold.

## Import checks

- Files: `taylorswift_phase01_rows_ONLY.csv` (27-column header / 4 rows), `taylorswift_phase01_sources.csv`, `taylorswift_phase01_genre_evidence.csv`, `taylorswift_phase01_evidence-notes.md`, `taylorswift_phase01_catalog-audit.csv`, `CLAUDE_IMPORT.md`.
- Every row is `status=draft`. Every notes field <=15 words; genres source-indexed, ordered whole album before specific textures. No limit on number of tags except notes.
- No scripts shipped; Claude needs to merge into artist file, extend token lists, run `npx vite-node scripts/validate-descriptors.ts` and project tests.

## Next phase

**No Phase 02 for the present request**: it explicitly requested the last four albums. Earlier original studio albums remain undescribed here. If a chronological backward extension is requested, the immediate next set is **folklore (2020), Lover (2019), reputation (2017), 1989 (2014)**, to be delivered oldest-to-newest within its own independently incremental ZIP.
