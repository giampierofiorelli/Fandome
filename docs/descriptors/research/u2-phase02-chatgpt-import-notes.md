# CLAUDE_IMPORT — U2, Phase 02 (27 October 2026)

**Fandome artist ID:** `u2` · **Status:** draft · **Release cutoff:** 27 October 2026 · **Import only this phase's three rows**.

## Files and phase entries

| ID | Original title | Year | Type | Catalog now | Claude action |
|---|---|---:|---|---|---|
| `u2-underabloodredsky` | Under a Blood Red Sky | 1983 | live | absent | **Add** to U2 `albums` list (landmark live exception) |
| `u2-theunforgettablefire` | The Unforgettable Fire | 1984 | studio | absent | **Add** to U2 `albums` list |
| `u2-thejoshuatree` | The Joshua Tree | 1987 | studio | present | Keep existing catalog ID; do not add duplicate |

The catalogue status above reflects the live `descriptors` branch `src/data/catalog.ts` observed **27 October 2026** (U2 row listed *Boy*, *War*, *The Joshua Tree*, *Achtung Baby*, *Zooropa*, *All That You Can’t Leave Behind*, *How to Dismantle an Atomic Bomb*). The **phase-01** `u2-october` addition has **not** yet appeared in that branch; it remains a dependency from the preceding ZIP. Check for concurrent branch changes before modifying the catalogue. **No project files were written to GitHub.**

### Albums to add to `catalog.ts`

- `['Under a Blood Red Sky', 1983]`: Fandome type **live**, a deliberately included **landmark** eight-track live mini-LP; this is not the 1984 concert film or a new studio album. [U2 official release](https://www.u2.com/products/under-a-blood-red-sky).
- `['The Unforgettable Fire', 1984]`: Fandome type **studio**, the band's fourth studio album. [U2 official release](https://www.u2.com/products/the-unforgettable-fire).
- `The Joshua Tree` (1987): **already listed**, do not add another entry. [U2 official release](https://www.u2.com/products/u2-the-joshua-tree).

### Co-billed albums

**None in this phase.** No `coBilled.ts` change is needed.

### New genres to register

| New token | Literal source label | Applied to | Exact genre evidence |
|---|---|---|---|
| `bigmusic` | Big Music | All three | [AOTY live](https://www.albumoftheyear.org/album/40158-u2-under-a-blood-red-sky.php), [AOTY Fire](https://www.albumoftheyear.org/genre/869-big-music/all/), [AOTY Joshua](https://www.albumoftheyear.org/album/4436-u2-the-joshua-tree.php) |
| `heartlandrock` | Heartland Rock | *The Joshua Tree* only | [AOTY album page](https://www.albumoftheyear.org/album/4436-u2-the-joshua-tree.php) |

These words are **not** synonyms of `arenarock`, `albumrock` or `countryrock`. Add new entries to `src/data/scenes.ts` Genre, `src/data/genreFamilies.ts`, and `scripts/validate-descriptors.ts` (if fixed enums are maintained). Suggested **taxonomy proposals** for review (not source facts): `bigmusic: ['rock']`; `heartlandrock: ['rock']`. Both map to an existing parent so the recommender can rank their relationship to other genres.

**New instruments:** none. `omnichord` used on *The Joshua Tree* is **already defined** in `src/data/instruments.ts` in the branch checked. Do **not** misclassify the documented custom Infinite Guitar as `ebow`.

**New production tokens:** none. `dx7`, `fairlight`, `tapeeffects`, `roomambience`, `analogtape`, `stringarrangements`, `synthprogramming`, `overdubbing`, `hornarrangements`, `concertrecording`, `delay` and `sonicmanipulation` are in the current registry. The preceding phase-01 proposed `compression` and `ua1176` remain the separate responsibility of its importer and are **not** used in phase 02.

### ARTIST INFLUENCES

**Not repeated.** Group-wide artist influences, each with sources, are in **phase 01** as requested. Album-specific documented references for *The Joshua Tree* are stored in this phase's `influenced_by` row and explained/source-linked in the evidence notes, without promoting musicians, sampled material, covers or literary inspiration into unfounded influences.

## 27-column data / verification

- `u2_phase02_rows_ONLY.csv`: precisely **3** new rows + exact 27-column header. No phase-01 rows and no other artists.
- `u2_phase02_sources.csv`: cited original sleeves, official U2 discography, original 1983 review, interviews with Eno/Lanois/Edge, genre indices and expert reviews; URL and source strength per claim.
- `u2_phase02_genre_evidence.csv`: **one evidence line per one genre per one album**. `scope` distinguishes whole record vs some tracks.
- `u2_phase02_evidence-notes.md`: instruments, production, rating anchor rationales, provenance conflicts, limitations and editorial judgments.
- `u2_phase02_catalog-audit.csv`: the two new IDs versus the existing `u2-thejoshuatree`.
- `CLAUDE_IMPORT.md`: this file.

**Importer order:** integrate missing phase-01 album/tokens (if not already done); add the two phase-02 catalogue entries; register `bigmusic` and `heartlandrock` incl. parents; import only the three phase-02 rows; run the app's descriptor validator/tests. Avoid merging the phase-01 and phase-02 `rows_ONLY.csv` into a single phase delivery.

## Material caveats

1. **Live LP versus video / EP:** U2's 1983 official album contains eight tracks from **three** concerts, with Jimmy Iovine as *album* producer. The 1984 filmed Red Rocks concert has different contents. AllMusic sometimes calls the LP an EP; the user explicitly allows landmark live records, so its Fandome `type` is **live**.
2. **1983 original date discrepancy:** official U2 lists **21 November 1983**, while AOTY lists **7 November**. Use the primary official date; the descriptor stores `1983` only.
3. **1984 producer vs string arranger vs engineers:** `Brian Eno|Daniel Lanois` only. Kevin Killen, Randy Ezratty, Noel Kelehan and Paul Barrett have other credited roles. The Fairlight is credited, but its specific model/generation is not.
4. **1987 recording location simplification:** U2's official page highlights Windmill Lane, but detailed engineer recollections include **Danesmoate** and home work. Do not wrongly infer every performance was done at one studio.
5. **1987 producer vs mix credits:** `Brian Eno|Daniel Lanois` only. Flood recorded; Steve Lillywhite mixed four tracks, and is **not** a third producer of the LP.
6. **Historic devices / machines:** the **Infinite Guitar is not an E-Bow**. A Yamaha beatbox was a writing/guide tool for *With or Without You*; whether that signal remains on the final released record is unresolved, so neither `drummachine` nor an invented model is included. *The Unforgettable Fire* title song also has a documented drum-machine writing demo, but no firm evidence it is a final heard instrument.
7. **Gospel:** a gospel-influenced studio song is on *The Joshua Tree*. The actual Harlem gospel choir is from a later **1987 concert and 1988 Rattle and Hum** recording; never credit that choir on the 1987 studio album.
8. **No additional release / reissue rows:** 2007/2009 remasters, later concert reissues, and 2024 live retrospectives are the same works or outside this landmark exception. Future announced releases after 27 October 2026 must not be inserted.
9. **Genre indexing versus criticism:** AllMusic supplies several redundant style labels and AOTY adds Big Music / Dream Pop / Heartland Rock. These are source-stated labels; the first genre in each row is our relevance ranking. `gospel`, `folk`, `blues`, `country` are secondary/narrower sources or portions, not claims about the whole *Joshua Tree* recording.

## Next phase 03 (chronological)

1. **Rattle and Hum** (1988): hybrid film soundtrack including studio and live songs; confirm `soundtrack` vs `studio` while retaining official billing.
2. **Achtung Baby** (1991): studio, already in Fandome catalogue.
3. **Zooropa** (1993): studio, already in Fandome catalogue.

*Original Soundtracks 1* (1995), the separate **Passengers** collaboration involving U2 and Brian Eno, will require a later evidence-led scope and `coBilled.ts` check; do not create it as U2's ordinary 1995 studio LP by default.
