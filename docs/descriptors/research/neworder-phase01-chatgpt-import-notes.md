# New Order — Fandome Phase 01 (26 October 2026)

**Artist ID:** `neworder` (already in `src/data/catalog.ts`). **Existing descriptor CSV:** none found under `docs/descriptors/neworder.csv` in the `descriptors` branch at research time.

## Phase contents (four original studio albums)

| album_id | Original album | Year | Catalogue status |
|---|---|---:|---|
| `neworder-movement` | Movement | 1981 | present |
| `neworder-powercorruptionlies` | Power, Corruption & Lies | 1983 | present |
| `neworder-lowlife` | Low-Life | 1985 | present |
| `neworder-brotherhood` | Brotherhood | 1986 | present |

The CSV has the required 27-column header and contains **these four rows only**. Other artists and previous or future phase rows are absent.

## Catalogue additions required over remaining phases

The current Fandome `catalog.ts` lists 6 studio albums: Movement (1981), Power, Corruption & Lies (1983), Low-Life (1985), Brotherhood (1986), Technique (1989), Music Complete (2015). The remaining four officially released studio albums must be added before import in later phases:

| title | year | type | expected new ID |
|---|---:|---|---|
| Republic | 1993 | studio | `neworder-republic` |
| Get Ready | 2001 | studio | `neworder-getready` |
| Waiting for the Sirens’ Call | 2005 | studio | `neworder-waitingforthesirenscall` |
| Lost Sirens | 2013 | studio | `neworder-lostsirens` |

`Lost Sirens` is an album of previously unreleased **studio recordings** from the Waiting for the Sirens' Call sessions. Unlike a greatest-hits collection, it contains different previously unreleased songs, so it is retained in the studio-album audit. `Music Complete` (2015) already appears in the catalogue. Fandome's existing seed-generated IDs are authoritative; verify exact case/spelling at import before adding.

## Co-billed albums

None in this phase. Producer field uses `New Order` as a group credit on the three self-produced records; members of New Order are not separate co-billed artists. No update to `coBilled.ts` for these rows.

## New tokens Claude must add and type-check

- **Genre:** `collegerock` — AllMusic's "College Rock" style, documented for Power, Corruption & Lies, Low-Life and Brotherhood. Add to `scenes.ts`, `genreFamilies.ts`, and validator before importing. Suggested parents: `indie|rock` (this is a mapping choice for Claude; the source label is exact).
- **Instrument:** no new instrument token in this phase.
- **Production:** `alphasynthauri` (Alpha Syntauri digital synthesizer/control system, named by Stephen Morris in Classic Pop for PCL); `voyetra8` (Octave-Plateau Voyetra-8 synthesizer used on Low-Life, named in Hi-Fi News). Add the two **exact** models to `production.ts` before import.
- **Existing production model token:** `oberheimdmx` for the Oberheim DMX drum machine, distinct from `oberheim` as generic manufacturer; `prophet5` and `linndrum` are also present in the production list, as is `emulator` (not `emulatorii`). Claude should verify whether `oberheimdmx` remains in current `production.ts` and introduce it if absent.

## ARTIST INFLUENCES — Phase 01 only (direct named statements)

These are **artist-level influences**, not automatically copied to any album's `influenced_by`. A named artist belongs in a row only where the source names that album as influenced.

1. **Kraftwerk** — Stephen Morris describes their impact on the band's songwriting, instruments and refusal of rock convention; direct musician account. Source: https://www.juliensauctions.com/en/articles/florian-schneider-tribute-by-new-order-stephen-morris . Bernard Sumner also names Kraftwerk as vital: https://www.thenewworld.co.uk/brexit-news-new-order-why-europe-made-us-what-we-are-today-15838/
2. **Giorgio Moroder** — Peter Hook directly says New Order were into Moroder while moving toward dance music. Source: https://www.undertheradar.co.nz/utr/interviewMore/CID/435/N/New-Order.utr . For *Power, Corruption & Lies* Qobuz critic Marc Zisman makes the album-specific link: https://www.qobuz.com/us-en/album/power-corruption-lies-new-order/0825646053803
3. **Donna Summer** — early disco influence discussed alongside Giorgio Moroder in the band's formation of electronic identity, but the "Blue Monday" example must not be misattributed to *Power, Corruption & Lies*. Source: https://www.theguardian.com/music/2023/mar/07/forty-years-of-new-order-blue-monday-inspirations ; also Bernard Sumner interview reprinted at https://disordertc.wordpress.com/2015/04/12/an-interview-with-bernard-sumner/ . Source provides band-era context, NOT album-specific proof.
4. **Can** — Stephen Morris directly names Can and drummer Jaki Liebezeit as musical influences. Source: https://www.electronicbeats.net/stephen-morris-tanks-for-the-beats
5. **Neu!** — Stephen Morris directly names Neu! and the motorik style, source: https://www.electronicbeats.net/stephen-morris-tanks-for-the-beats . Sumner discusses their impact on the wider band transition at https://www.thenewworld.co.uk/brexit-news-new-order-why-europe-made-us-what-we-are-today-15838/
6. **The Velvet Underground** — drummer Stephen Morris says he aimed to emulate Maureen Tucker's drumming: https://www.electronicbeats.net/stephen-morris-tanks-for-the-beats . This concerns his playing approach rather than any specific New Order album.

## Caveats, exclusions, and validation

- **Original albums only**: later 2008–2025 remaster bonus CDs, 12-inch remixes and concert recordings do not support the original-LP descriptors.
- **“Blue Monday” (1983)** was a standalone single and **was not on the original eight-track Power, Corruption & Lies LP**. Do not put its exclusive samples, remix producers or guest credits in that album's row. `State of the Nation` is absent from the original 1986 Brotherhood LP; many CDs append it.
- **Substance (1987)**, despite historical importance, is a collection of previously released 12-inch singles, not an original studio album. Excluded for Fandome's recommendation objective. Likewise `1981–1982` (1982) collates singles; don't treat those as new album songs or a new studio album.
- No live albums, greatest-hits compilations, reissues, future releases or duplicated phase rows. `Music Complete` (2015) remains latest studio album verified as of 26 October 2026.
- `genre_evidence.csv` scope values are `whole album`, `some tracks`, `texture`; named source genres that are album-wide from metadata are left broad, while specific song genres have limited scope.
- `confidence=high` reflects strong musical/credit support from multiple primary/qualified sources, **not** certainty that editorial 0–5 scores are objective.
- All `notes` fields are original and ≤15 words. CSV saved in UTF-8 without BOM (validator-safe header), quoted where needed. Status always `draft`.

## Next phases (incremental)

- **Phase 02:** *Technique* (1989); *Republic* (1993); *Get Ready* (2001); *Waiting for the Sirens’ Call* (2005).
- **Phase 03:** *Lost Sirens* (2013); *Music Complete* (2015). This completes the ten studio albums without counting compilations/live records.

## Contents

1. `neworder_phase01_rows_ONLY.csv`
2. `neworder_phase01_sources.csv`
3. `neworder_phase01_genre_evidence.csv`
4. `neworder_phase01_evidence-notes.md`
5. `neworder_phase01_catalog-audit.csv`
6. `CLAUDE_IMPORT.md`
