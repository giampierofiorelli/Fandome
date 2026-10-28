# Claude import — Kim Carnes, Phase 01

**Artist:** Kim Carnes  
**Proposed Fandome artist ID:** `kimcarnes`  
**Repository checked:** `giampierofiorelli/Fandome`, `descriptors` branch, `src/data/catalog.ts` and `src/data/seed.ts`  
**Existing descriptor check:** `docs/descriptors/kimcarnes.csv` not found at research time.  
**Row status:** `draft` (not reviewed). **Strictly incremental:** four new albums, not previously imported rows.

## Albums in this ZIP

| Album ID | Album | Original year | Type | Catalogue action |
|---|---|---:|---|---|
| `kimcarnes-restonme` | *Rest on Me* | 1971 | studio | add |
| `kimcarnes-kimcarnes` | *Kim Carnes* | 1975 | studio | add |
| `kimcarnes-sailin` | *Sailin'* | 1976 | studio | add |
| `kimcarnes-stvincentscourt` | *St. Vincent's Court* | 1979 | studio | add |

Add artist `kimcarnes` (US, en, decade 1970, genres `poprock`, `softrock` as catalogue baseline) and all four albums to `catalog.ts` before invoking the repository validator. No previously described Kim Carnes albums were found; none skipped.

## Six files

1. `kimcarnes_phase01_rows_ONLY.csv` — 27-column import rows for these four albums only.
2. `kimcarnes_phase01_sources.csv` — source trace with album scope and confidence.
3. `kimcarnes_phase01_genre_evidence.csv` — one row per genre per album, including whole album / some tracks / texture.
4. `kimcarnes_phase01_evidence-notes.md` — reasoning, release-date conflicts, sonic caveats and uncertain claims.
5. `kimcarnes_phase01_catalog-audit.csv` — precise additions to the catalogue.
6. `CLAUDE_IMPORT.md` — this manifest.

## New tokens and collaborations

No new genre, instrument or production token is required: every value is drawn from the existing Fandome vocabularies. No qualifying co-billed album appears in this phase. Producers are original-album credits only; orchestral arrangers and mixers are not imported as producers.

## ARTIST INFLUENCES — separate from album influences

No specific musician could be **confirmed in a first-person interview or producer statement as an artist-wide formative influence** within the material checked. A profile on Myspace has a platform-provided field “Influenced By: Janis Joplin; Rod Stewart” (https://myspace.com/kimcarnessongs), but its authorship cannot be established, so those names are not added to album rows or treated as confirmed artist-wide influences. The official biography (https://kimcarnes.com/pages/about) and Carnes’s 2019 interview (https://kimcarnes.blogspot.com/2019/07/interview-kim-carnes-on-her-creative.html) substantiate songwriting background but do not establish those influence claims. Keep influences blank pending stronger primary evidence.

## Edition / credits caveats

- *Rest on Me*: choose **1971**, corroborated by the original Dec. 1971 issue; AllMusic timeline incorrectly or differently uses 1972. Avoid using early-1990s slowed and remixed budget CDs as sonic source; study original or corrected remaster.
- *Kim Carnes* (1975): the Gene Cotton duet version of "You're a Part of Me" is later; do not merge. An Australian two-LP issue with *Sailin'* does not mean they are one album.
- *Sailin'*: recorded with Muscle Shoals musicians. Jerry Wexler and Barry Beckett are both credited producers.
- *St. Vincent's Court*: Daniel Moore has a producer credit for track 9 only; Kim Carnes and Dave Ellingson credited for the album. The 2003 combined two-album CD is a reissue and must not replace the original 1979 studio album.
- `influenced_by` is deliberately empty for lack of corroborated album-specific first-person testimony. Some lower-priority genre tags are reasoned editorial texture/track judgments; their source evidence rows spell that out.

## Next phase — Phase 02

*Romance Dance* (1980), *Mistaken Identity* (1981), *Voyeur* (1982), *Café Racers* (1983). Exclude live releases and compilations.

## Validation after import

Confirm all album IDs are unique and present in the updated catalogue, row count = 4, 27 columns, source URLs resolve, genre tokens match `src/data/scenes.ts` and instrument/production values are accepted. Then run `npx vite-node scripts/validate-descriptors.ts` and project tests, and review accuracy before setting `status=reviewed`.


## Claude import note

- 4 rows imported; vibraphone mapped to mallets. Catalogue: 13 studio albums 1971-2004.
- Scene US en 1970 rock,pop. No artist influences (none confirmed).
- Rest on Me: countryrock added last (Discogs styles, release 2775273). Reception researched by Claude.
