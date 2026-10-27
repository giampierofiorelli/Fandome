# CLAUDE IMPORT — U2 / phase 04 (2026-10-27)

## Incremental contents

Only the following three rows; do **not** import phase 01–03 material again:

| Album ID | Display title | Year | Type | Catalogue status |
|---|---|---:|---|---|
| `u2-originalsoundtracks1` | Original Soundtracks 1 (Passengers) | 1995 | `studio` | ADD |
| `u2-pop` | Pop | 1997 | `studio` | ADD |
| `u2-allthatyoucantleavebehind` | All That You Can’t Leave Behind | 2000 | `studio` | exists |

Original Soundtracks 1 is credited to **Passengers**, the recording project U2 formed with Brian Eno. All That You Can’t Leave Behind is in the catalog with the curly apostrophe; retain its existing ID. Verified against the `descriptors` branch catalog on 2026-10-27.

## Albums to add to `src/data/catalog.ts`

- U2: `['Original Soundtracks 1', 1995]` (1995 studio collaborative album, billed **Passengers**) — ID `u2-originalsoundtracks1`.
- U2: `['Pop', 1997]` (studio) — ID `u2-pop`.

Keep original chronological order. Do not add any new artist room unless separately requested.

## Co-billed records (`src/data/coBilled.ts`)

- `u2-originalsoundtracks1`: **exact release credit `Passengers`**. Passengers consists of the four U2 members **and Brian Eno**. `eno` is an existing Fandome artist ID. Suggested object: `{'with': ['eno'], 'credit': 'Passengers'}`. If import conventions require the descriptive billing instead of the exact cover text, flag that choice rather than silently renaming the release. Official source: https://www.u2.com/products/passengers-original-soundtracks-1.
- `u2-pop`, `u2-allthatyoucantleavebehind`: no separate credited co-billed artist.

## New descriptor tokens

- Genres: **none** (all listed genre tokens already occur in `src/data/scenes.ts`, including `adultalternativepoprock`, `dancerock`, `triphop`, `ambientpop`, `collegerock`, `doowop`).
- Instruments: **none**.
- Production: **none**.
- Verify all exact tokens using repo validator after merging catalogue/co-billed entries.

## Producer credit caveats

- **Passengers**: Brian Eno produced; Howie B contributed treatments/mixing and other performances, not as album producer.
- **Pop**: discrepancy: U2.com summary names Flood and Howie B in PRODUCED BY, while the 1997 sleeve says `Produced by Flood; additional production Howie B, Steve Osborne`. Thus `Flood|Howie B` is provisional based on official summary, **not** a claim that every track is co-produced by Howie B; verify at track level before marking reviewed. Steve Osborne and Nellee Hooper are not in `producers`.
- **All That You Can’t Leave Behind**: Brian Eno and Daniel Lanois only. Steve Lillywhite, Mike Hedges, Richard Stannard, Julian Gallagher had only additional production on the album credit.

## Release / edition caveats

- Passengers: U2.com dates **7 November 1995**; some Europe/UK discographies give **6 November**. Consistently use 1995. `studio` despite the imaginary soundtracks title and some actual film uses. Luciano Pavarotti and Holi are **guest singers, not co-billed album artists**. Main 14-track edition only.
- Pop: use **1997 original album**, not later re-recordings, live songs or remixed singles. Flood reports that approximately **95% of drums are real** despite extensive programming in development. Howie B’s **later re-recording of Please** with orchestra is not evidence for the original album.
- All That You Can’t Leave Behind: **original eleven-track core release**; twelfth UK *The Ground Beneath Her Feet* is a territory-dependent bonus and no independent row. Original U2 catalog apostrophe is typographic.
- Genre evidence includes `whole album`, `some tracks` and `texture` scopes. The very last tags on Pop are influences in the recording texture and **not** assertions that Pop is a whole-album rap or techno recording. Claude may use these scopes when weighting.

## Next phase — U2 phase 05

1. **How to Dismantle an Atomic Bomb** (2004)
2. **No Line on the Horizon** (2009)
3. **Songs of Innocence** (2014)

Before starting, re-audit the `descriptors` branch to detect any file changes or new albums already added. Exclude the 2023 *Songs of Surrender* from this phase (re-recordings compilation, not a standard studio album); assess only if independently justified later. Do not repeat any phase 01–04 rows.

## Files in this ZIP

- `u2_phase04_rows_ONLY.csv` — 27 descriptor columns, only new rows.
- `u2_phase04_sources.csv` — album-specific sources, verified public URLs.
- `u2_phase04_genre_evidence.csv` — one line per genre per album and application scope.
- `u2_phase04_evidence-notes.md` — detailed research decisions, disagreements, evidence for instruments/production.
- `u2_phase04_catalog-audit.csv` — two additions and one pre-existing ID.
- `CLAUDE_IMPORT.md` — these instructions.

No writing to GitHub has been performed.
