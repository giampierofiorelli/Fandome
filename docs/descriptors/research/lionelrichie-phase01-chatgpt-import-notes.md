# CLAUDE_IMPORT — Lionel Richie, Fandome Phase 01

Research checked: **28 October 2026**. Source repository: `giampierofiorelli/Fandome`, branch `descriptors` (READ ONLY). Incremental phase: **4 new studio albums**, 27 descriptor columns per row.

## Rows in this ZIP (do not append duplicates)

| ID | Album | Original year | Type |
| --- | --- | --- | --- |
| `lionelrichie-lionelrichie` | Lionel Richie | 1982 | studio |
| `lionelrichie-cantslowdown` | Can't Slow Down | 1983 | studio |
| `lionelrichie-dancingontheceiling` | Dancing on the Ceiling | 1986 | studio |
| `lionelrichie-louderthanwords` | Louder Than Words | 1996 | studio |

**Catalog state:** There is no Lionel Richie artist row in `src/data/catalog.ts` or `src/data/seed.ts`; there is no existing `docs/descriptors/lionelrichie.csv`, so **zero albums were skipped as previously described**. Propose new artist ID **`lionelrichie`**, check unique before import, and create artist + album records. All 11 currently known solo studio album records are absent: see `lionelrichie_phase01_catalog-audit.csv`. Ensure names and years match audit; add every studio album to the catalog to satisfy tests, not just phase-01 rows.

**Add to catalog** (11 solo studio titles): Lionel Richie (1982); Can't Slow Down (1983); Dancing on the Ceiling (1986); Louder Than Words (1996); Time (1998); Renaissance (2000); Just for You (2004); Coming Home (2006); Sounds of the Season (2006, short holiday studio album); Just Go (2009); Tuskegee (2012). **Compilation excluded:** Back to Front (1992), even though it contains new songs; likewise greatest hits albums and concert releases. Do not import the Commodores' records into this artist room.

**Co-billed albums:** None of the four albums is co-billed with another headline artist. Guests (including Alabama on Deep River Woman, and other session players) are NOT co-billed artist entries. Tuskegee will be addressed as one Lionel Richie studio release with guests in a later phase.

## New vocabulary

- **Genre `contemporarycountry`:** AllMusic specifically names *Contemporary Country* as a category for Louder Than Words. This exact token does not appear in current `src/data/scenes.ts`; create the token and genre-family relation (parent `country`) rather than substituting `countrypop`. It is last in the descriptor and explicitly weakly corroborated; if the editorial team rejects it, document that change rather than silently map it.
- **Instruments:** None new (all values in current list).
- **Production:** None new (all values in current list).

## ARTIST INFLUENCES (career-wide, not automatically album-specific)

- **Marvin Gaye, Elton John, James Brown.** Asked directly about his biggest influences growing up, Richie names these three musicians in his own 17 July 2017 Forbes interview: https://www.forbes.com/sites/danschawbel/2017/07/17/lionel-richie-his-secret-for-staying-health-while-touring-the-world/.
- **Nat King Cole, Frank Sinatra, Elvis Presley, Ella Fitzgerald.** In that same answer he distinguishes music played by his parents, heard every day, from the first three names. **Household exposure**, not proof that any particular album emulates one of them: https://www.forbes.com/sites/danschawbel/2017/07/17/lionel-richie-his-secret-for-staying-health-while-touring-the-world/.
- **Marvin Gaye, Stevie Wonder, Smokey Robinson, Holland–Dozier–Holland.** Richie names these Motown figures as songwriting tutors and professional models in a direct interview: https://hebbonair.com/hello-lionel-richie/. Stevie Wonder and Marvin Gaye are also recalled as formative observational models in https://13thfloor.co.nz/hello-its-lionel-richie-interview/.
- **The Beatles, Billy Joel and Paul McCartney.** In the same primary interview, Richie says these were among the pop songwriting directions he wanted to explore beyond a strict R&B category: https://13thfloor.co.nz/hello-its-lionel-richie-interview/.
- **Country Joe and the Fish, Cream and Jimi Hendrix.** Richie recalls carrying their records alongside Marvin Gaye's while at college; *listening evidence*, not proof of direct influence on specific works: https://www.wprl.org/npr-music/2012-04-02/hello-is-this-the-country-album-youre-looking-for.

Because no sourced statement firmly links any named musician to the creation of an individual album *here*, the four `influenced_by` CSV cells are **blank**. Do NOT auto-fill them from this career-level list or mark producers/guests as influences. `sounds_like` is an editorial resemblance field, separately distinguished from influence.

## Caveats and interpretation

- Dating: the original **Dancing on the Ceiling** LP came out in **1986**, notwithstanding Qobuz's 1985 year on one digitization. The 1992 compilation **Back to Front** is excluded by project rule; the next studio album is 1996.
- 1982–86 genres: The editorial source tags broad `adultcontemporary`, `rnb` and `popsoul`; track-specific production often includes funk/soft rock/synthpop/country. The genre evidence file preserves scope. Never upgrade a peripheral track to the dominant sound.
- The original 1996 release and streaming editions of *Louder Than Words* differ on displayed track count (13 tracks in some liner credit transcriptions; 12 in current Qobuz edition). Use one album ID; check original track credits on import.
- Eight scale ratings are Fandome editorial interpretations of reviewed sound and documented arrangements, not metric facts. Every row is `draft`, awaiting second-person review.
- Do not interpret professional reviewers' *comparison* to another singer as evidence of musical influence.

## Included files

1. `CLAUDE_IMPORT.md` (this note)
2. `lionelrichie_phase01_rows_ONLY.csv` — four new rows, 27 columns
3. `lionelrichie_phase01_sources.csv` — sources, types, links, and specific claims
4. `lionelrichie_phase01_genre_evidence.csv` — exactly one justification per genre label in order
5. `lionelrichie_phase01_evidence-notes.md` — qualitative reasoning, ratings, disagreements and production
6. `lionelrichie_phase01_catalog-audit.csv` — full studio discography and import actions

## Next phases (do not add descriptor rows yet)

**Phase 02:** *Time* (1998), *Renaissance* (2000), *Just for You* (2004), *Coming Home* (2006). **Phase 03:** *Sounds of the Season* (2006), *Just Go* (2009), *Tuskegee* (2012). Do not include live or compilations.

Import and validate with `scripts/validate-descriptors.ts` after creating the artist and album entries; this ZIP does not modify GitHub.


## Claude import note

- 4 rows imported as delivered; catalogue 11 solo studio albums 1982-2012 (Commodores not included). New genre contemporarycountry (parent country).
- Scene US en 1980 pop,soul,rnb. Artist influences from his interviews; parents' records and college listening left out.
- Reception researched by Claude.
