# CLAUDE IMPORT — Beyoncé Phase 01

Read-only researched draft. Artist id `beyonce`. **Import only rows in this package**, do not concatenate any earlier artist or phase. Original studio albums only; do not add concerts, live albums or greatest hits.

## Exact phase content

- `beyonce-dangerouslyinlove` — *Dangerously in Love* (2003, studio); catalogue: existing
- `beyonce-bday` — *B’Day* (2006, studio); catalogue: existing
- `beyonce-iamsashafierce` — *I Am… Sasha Fierce* (2008, studio); catalogue: existing
- `beyonce-4` — *4* (2011, studio); catalogue: existing

## Catalogue audit

All four albums are **already present** in `src/data/catalog.ts` (branch `descriptors`); zero catalogue additions in this phase. None were present in an existing `docs/descriptors/beyonce.csv` file at time of research. No multi-artist billing in these four releases.

## Tokens for Claude to add first

- **New genre**: `gogo` — Washington, D.C. go-go rhythm/funk style, documented for tracks of *B’Day*. Add exactly this token to genre type and validator before import; do not silently map to `funk`. Genre evidence marks track-scoped use.
- **New instruments**: none.
- **New production tokens**: none.

## ARTIST INFLUENCES (Phase 01 only)

Career-wide or directly named musical inspirations; do not automatically import into `influenced_by` of each album. Links are specific, publicly indexed sources.

- **Michael Jackson** — Beyoncé called him her hero and said his performances were the reason she pursued her path. [Source](https://www.gigwise.com/news/51423/)
- **Tina Turner** — Beyoncé directly credited Turner with inspiring her as a performer and referenced her impact onstage. [Source](https://www.yahoo.com/entertainment/beyonc-honors-tina-turner-during-213916575.html)
- **Mariah Carey** — Beyoncé told critic Sasha Frere-Jones she began attempting vocal runs after hearing Vision of Love. [Source](https://www.newyorker.com/magazine/2006/04/03/on-top)
- **Janet Jackson** — GRAMMY music retrospective describes her as an early musical inspiration. [Source](https://www.grammy.com/news/beyonce-songbook-musical-album-music-video-guide/)
- **Prince** — Beyoncé explicitly described Prince as a formative rock/soul influence in GQ interview. [Source](https://www.gq.com/story/beyonce-cover-story-interview-gq-february-2013)
- **Aretha Franklin** — Beyoncé cited Aretha as an influence on her R&B writing in GQ interview. [Source](https://www.gq.com/story/beyonce-cover-story-interview-gq-february-2013)
- **Diana Ross** — Beyoncé explicitly named Diana Ross among career musical touchstones in GQ. [Source](https://www.gq.com/story/beyonce-cover-story-interview-gq-february-2013)
- **Fela Kuti** — Beyoncé cited Fela Kuti in discussing how work on her fourth studio album began. [Source](https://www.theguardian.com/music/2011/may/12/beyonce-new-album-title-4)
- **Earth Wind & Fire** — Beyoncé directly listed the group among inspirations in her interview about 4. [Source](https://www.nme.com/news/music/beyonce-275-1284292)
- **DeBarge** — Beyoncé directly listed the group among inspirations in her interview about 4. [Source](https://hiphop-n-more.com/2011/05/beyonce-reveals-title-of-4th-studio-album/)
- **Lionel Richie** — Beyoncé directly listed Richie among inspirations in her interview about 4. [Source](https://hiphop-n-more.com/2011/05/beyonce-reveals-title-of-4th-studio-album/)
- **Teena Marie** — Beyoncé directly listed Marie among inspirations in her interview about 4. [Source](https://hiphop-n-more.com/2011/05/beyonce-reveals-title-of-4th-studio-album/)
- **The Jackson 5** — Beyoncé directly listed the group among inspirations in her interview about 4. [Source](https://www.nme.com/news/music/beyonce-275-1284292)
- **New Edition** — Beyoncé directly listed the group among inspirations in her interview about 4. [Source](https://hiphop-n-more.com/2011/05/beyonce-reveals-title-of-4th-studio-album/)
- **Adele** — Beyoncé directly listed Adele among inspirations in her interview about 4. [Source](https://www.nme.com/news/music/beyonce-275-1284292)
- **Florence + the Machine** — Beyoncé directly listed the group among inspirations in her interview about 4. [Source](https://www.nme.com/news/music/beyonce-275-1284292)

## Notes on evidence

- See rows-ONLY CSV for 27-column descriptors; sources CSV for link-level support; genre evidence for per-token scope; evidence notes for eight ratings, instrumentation, production and disagreement.
- `gogo` requires a genre-list + validator update. No fabricated hardware model: an oral history mentioning an “808” does not establish an original Roland TR-808 being physically used.
- Original 2006 *B’Day* differs from 2007 deluxe with Shakira’s duet and Spanish remakes: these are deliberately excluded from album-average genre/language and have not been treated as a separate release.
- *I Am… Sasha Fierce* mixes an intimate-disc sequence with a dance-oriented second disc; score both discs together. Deluxe/bonus track instrumentation must not become generic album instrumentation.
- No albums from the user's previous Beyoncé phases are repeated (no existing file was found).
- Ratings are evidence-led assessments; source collections are not recordings listened to during this task. All rows `draft`.

## Next phase — Beyoncé Phase 02

1. *Beyoncé* (2013) — studio
2. *Lemonade* (2016) — studio
3. *Everything Is Love* (2018) — major collaboration, billed **The Carters** (Beyoncé and JAY-Z), review as artist-linked co-billed studio release; add to catalogue and `coBilled.ts` if adopted.

Then Phase 03 may review *The Lion King: The Gift* (2019), *Renaissance* (2022), and *Cowboy Carter* (2024). *The Gift* is a newly recorded, Beyoncé-curated soundtrack with multiple credited lead artists, not a greatest-hits compilation, so its soundtrack status and billing require separate audit. Never import a live album or greatest-hits package.
