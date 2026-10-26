# Fandome import: Lorde — Phase 01

## Strictly incremental files

- Artist ID already in `src/data/catalog.ts`: `lorde` (verified on the read-only `descriptors` branch, 2026-10-26).
- `docs/descriptors/lorde.csv` was absent when checked; **no existing descriptors to overwrite or repeat**.
- Import exactly 3 new rows with 27 columns from `lorde_phase01_rows_ONLY.csv` and inspect source/caveat files.

| album_id | title | first release | type | catalog status |
|---|---|---|---|---|
| `lorde-theloveclubep` | The Love Club EP | 2012 (free initial distribution; commercial March 2013) | ep | **ADD** |
| `lorde-pureheroine` | Pure Heroine | 2013 | studio | already present |
| `lorde-melodrama` | Melodrama | 2017 | studio | already present |

### Albums to add to `catalog.ts`

- **The Love Club EP** — **2012**, `ep`, proposed new ID `lorde-theloveclubep`. Commercial services frequently date the EP **8 March 2013**; the original self-release was November 2012. Catalog should use first-release year, consistently with row.
- No other catalogue additions in Phase 01.

### Albums billed to more than one artist

None. Featured guests on other releases and Lorde's various-artists soundtrack curation are not co-billed Lorde albums.

### New genre / instrument / production tokens

**None.** Every value in the three rows already exists in the supplied `scenes.ts`, `instruments.ts` and `production.ts` vocabularies. `newwave`, `industrial`, `dancehall` are track-only and placed late in the Melodrama list; no conversion of “trip-pop” to `triphop` is claimed.

## ARTIST INFLUENCES (Phase 01 only; independent of particular albums)

Each of these is **documented**, not guessed from sonic similarities. Treat artist-level inspirations separately from `influenced_by` album cells.

| Artist | Evidence | Source |
|---|---|---|
| James Blake | The Recording Academy explicitly says Lorde cited him as an influence in its interview profile. | https://www.grammy.com/news/video-exclusive-grammycom-interview-with-lorde/ |
| Etta James | Named in the Recording Academy account of Lorde's cited influences. | https://www.grammy.com/news/video-exclusive-grammycom-interview-with-lorde/ |
| Fleetwood Mac | Named in the Recording Academy account of Lorde's cited influences. | https://www.grammy.com/news/video-exclusive-grammycom-interview-with-lorde/ |
| Otis Redding | Named in the Recording Academy account of Lorde's cited influences. | https://www.grammy.com/news/video-exclusive-grammycom-interview-with-lorde/ |
| Robyn | Lorde explicitly described Robyn as a major inspiration for writing pop listeners can dance and cry to, during *Melodrama*. | https://www.iheart.com/content/2017-03-17-lorde-on-new-album-melodrama-one-of-the-craziest-years-of-her-life/ |
| Kate Bush | Lorde herself identifies Kate Bush as a reference for “Writer in the Dark”'s high keening vocals. | https://www.abc.net.au/triplej/news/making-melodrama%3A-lordes-comeback-and-what-happens-next/8663454 |

Source caveat: *Pure Heroine* producer Joel Little separately mentioned James Blake/Burial/Neptunes as studio aesthetic inspirations (https://www.theguardian.com/music/2014/apr/11/joel-little-lorde); do **not** promote all of Joel Little's influences to Lorde's artist-wide list.

## Edition / overlap caveats

- This phase **intentionally includes** the landmark debut *The Love Club EP*, which contains mostly original material unavailable on the 10-track *Pure Heroine* album. “Royals” occurs on both. The duplicate is explicit and should not be interpreted as two different tracks for track similarity.
- *Pure Heroine* means the original 10-track release, not an extended package.
- *Melodrama* means original 11-track studio album, no single remixes.
- The EP's 2012 free-release and 2013 retail dates must be kept distinct. Sources: SPIN and Qobuz.
- *The Hunger Games: Mockingjay – Part 1* (2014) is a **Various Artists soundtrack curated by Lorde** with Lorde tracks; not a solo Lorde album, and not a co-billed release for `coBilled.ts`.
- Technical production: *Melodrama* `protools` reflects session equipment named in the GRAMMY producer/engineer oral history; do not automatically assign it to earlier albums.
- Producer credits on *Melodrama*: **Kuk Harrell vocal/additional only**, **Flume, S1, T-Minus and Jean-Benoît Dunckel additional only**, **Tove Lo co-writer only**. Do not import any into `producers`. Joel Little is a producer only on “Supercut”, while separately receiving an earlier songwriting credit.
- Scores 0–5 remain carefully evidenced editorial judgments; genre-tag indexing is secondary evidence and sometimes broader than close listening.

## Next phase — Phase 02 (final original-album batch)

1. *Solar Power* (2021), studio.
2. *Virgin* (2025), studio.

Only two records remain after this 3-album Phase 01. Review the Māori-language *Te Ao Mārama* (2021) as a derivative EP in the exclusions notes rather than duplicating existing arrangements under a new descriptor. No live albums or compilations. If genuinely new original releases appear after 2026-10-26, treat them as a future new phase.

## Import check

Add any missing record to `src/data/catalog.ts`, merge the **three** rows into `docs/descriptors/lorde.csv`, check the 27-column header and run repository validator/test suite. Research support files are not descriptor rows.
