# CLAUDE_IMPORT — Umberto Tozzi — Fandome Phase 01

**Prepared:** 29 October 2026 · **Branch inspected:** `descriptors` · **GitHub read-only; do not treat the ZIP as an applied commit.**

## Artist identity and existing state

- Existing **artist ID: `tozzi`**. In `src/data/catalog.ts` this artist is already listed with `Donna amante mia` (1976), `È nell’aria… ti amo` (1977), and `Gloria` (1979). `src/data/seed.ts` does not define a competing artist.
- **No existing** `docs/descriptors/tozzi.csv` descriptor file was found on the checked branch. No previously described album is being repeated.
- This ZIP contains **exactly four new 27-column rows**. Do not copy or merge any other artist or a prior phase.

## Phase 01 to import, in order

| album_id | original album | year | type | action |
|---|---|---:|---|---|
| `tozzi-donnaamantemia` | Donna amante mia | 1976 | studio | already in catalogue; add descriptor |
| `tozzi-enellariatiamo` | È nell’aria… ti amo | 1977 | studio | already in catalogue; add descriptor; maintain exact existing typography/ID |
| `tozzi-tu` | Tu | 1978 | studio | **ADD** `['Tu', 1978]` to `tozzi` albums, then add descriptor |
| `tozzi-gloria` | Gloria | 1979 | studio | already in catalogue; add descriptor |

**ID rule:** existing catalogue slug for `È nell’aria… ti amo` is `enellariatiamo`. Distinguish the second album from the later multi-album *Ti amo* compilation and distinguish `Tu` from its same-named single and Spanish single.

## Catalogue actions

1. Add **only** missing album **`Tu` (1978)** under artist id `tozzi` (no new artist, and no duplication of the three existing titles).
2. Create `docs/descriptors/tozzi.csv` or append only the four *missing* descriptor rows if Claude has since imported one. Recheck branch HEAD before applying anything.
3. Do not treat 1974 *Strada bianca* by earlier band Data as a Tozzi solo album; do not add 1980 *In concerto*, 1988 *Royal Albert Hall*, later greatest hits, or 1978 *Prima o poi…* (compilation). The 2012 *Donna Amante Mia / Tu* paired reissue was consulted solely for original player credits; **not** a new release to import.
4. Phase 01 has **no co-billed original album**. The later `Tozzi Masini` (2006), credited to Umberto Tozzi & Marco Masini, needs later review as a documented collaboration/re-recording project, not this phase.

## Tokens / validation

- All genre tokens used are already in `src/data/scenes.ts`: `pop`, `poprock`, `softrock`, `ballad`, `italianpop`.
- All instrument tokens used are already in `src/data/instruments.ts`: `guitar`, `electricguitar`, `acousticguitar`, `bass`, `drums`, `keyboards`, `piano`, `percussion`, `strings`, `violin`, `washboard`.
- The one production token used is already in `src/data/production.ts`: `stringarrangements`.
- **No new genre, instrument or production tokens.** 1976–78 production cells are deliberately blank when effects and specific recording techniques are unverified.
- Each status is `draft`; a separate researcher must approve before `reviewed`.

## ARTIST INFLUENCES (phase 01 only)

These are **career-wide named inspirations**, not assertions of direct influence on each of the four albums. Preserve sources in research notes and do **not** automatically fill the album-level `influenced_by` column.

| Named artist | first-person evidence | URL |
|---|---|---|
| The Beatles | Tozzi: listening to Beatles and Anglo-American music shaped his melodic metre and overall sound | https://www.corriere.it/spettacoli/22_marzo_03/umberto-tozzi-compie-70-anni-con-mia-moglie-ci-siamo-sposati-quattro-volte-scrivo-canzone-meno-tre-ore-cd7d58d4-9a59-11ec-a66e-5cad27f47546_amp.html |
| Elvis Presley | Tozzi lists Elvis among his own musical influences in 2022 interview | https://www.krone.at/2744023 |
| The Rolling Stones | Tozzi lists the Rolling Stones among his own musical influences in 2022 interview | https://www.krone.at/2744023 |

**Do not infer:** Giancarlo Bigazzi is his collaborator/producer, not automatically an `influenced_by` musical artist. Lucio Battisti's reported comment about Tozzi's uniqueness does **not** mean Tozzi cites Battisti as an album influence. Laura Branigan is an important later cover performer, not an influence on the 1979 original `Gloria`.

## Credits, editions and caveats

- Bigazzi is credited as main producer on all four original LPs; Franco Monaldi arranger on the first three, **Greg Mathieson arranger, pianist, keyboard player and conductor** on 1979 `Gloria`. [See sources and notes.]
- The 1976 album has several instrumentalists and uses different musicians from the Turin band on the next two LPs. **Do not transpose 1976 personnel onto 1977–78.**
- First three albums do not have robust original technical reports to justify production equipment/tags: leave cells blank. 1979 orchestral string production is documented, with `stringarrangements` as the only production method.
- First LP genre evidence is weaker: a 1978 historical *collection* including first/second LP tracks tags soft rock/pop rock/ballad; the notes flag this as derivative, NOT a false original LP tag.
- **No entire-album Italo-disco attribution.** `Gloria` title track may be discussed as eurodisco by later writers, but actual 1979 LP credits show full band and orchestral pop-rock; avoid an album-wide electronic dance genre without an album-specific reliable source.
- Do not import a standalone Spanish re-recording, single, 45-rpm alternative mix or posthumously remastered edition as a fresh Tozzi studio album.

## Files in this ZIP / import order

1. `tozzi_phase01_rows_ONLY.csv` — only four new rows, exact 27 columns.
2. `tozzi_phase01_sources.csv` — supporting links and what each proves.
3. `tozzi_phase01_genre_evidence.csv` — one source-supported entry per genre per album, including partial/single/retrospective scope.
4. `tozzi_phase01_evidence-notes.md` — eight scale judgements, instrumental personnel, production and producer distinctions, ambiguity.
5. `tozzi_phase01_catalog-audit.csv` — original studio discography, existing album vs required addition, future releases deliberately unresearched.
6. `CLAUDE_IMPORT.md` — this manifest.

**After the import:** run `npx vite-node scripts/validate-descriptors.ts` and the project tests. Expect the validator to reject the new `tozzi-tu` until you add Tu to the catalogue. Do not alter unrelated album rows.

## Next phase (02)

**1980–1984:** `Tozzi` (1980), `Notte rosa` (1981), `Eva` (1982), `Hurrah!` (1984). The `Hurrah!`/`Mama` original/re-recording relationship and later instrumental/duet projects are left for the appropriate later audit, not silently imported.

## Claude import note (Oct 2026)

- Tu (1978) added to the catalogue. Artist influences: The Beatles, Elvis Presley, The Rolling Stones (his own words, 2022).
