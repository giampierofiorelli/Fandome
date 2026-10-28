# Claude import notes — Nick Kamen / Phase 01

**Artist id:** `nickkamen` (proposed new Fandome artist id; not present in `catalog.ts`, `seed.ts` or `docs/descriptors/nickkamen.csv` checked on 2026-10-28, branch `descriptors`). **Artist name:** Nick Kamen.

## Scope
All four released studio albums, in one final phase (01):

1. `nickkamen-nickkamen` — *Nick Kamen* (1987), studio
2. `nickkamen-us` — *Us* (1988), studio
3. `nickkamen-moveuntilwefly` — *Move Until We Fly* (1990), studio
4. `nickkamen-whateverwhenever` — *Whatever, Whenever* (1992), studio

**Skipped previously described albums:** none. No description file exists for this artist on `descriptors` at check time. All four must be added to the catalogue before running the validator. No co-billed albums. Do not use the personal profile of producer Madonna as primary artist of *Nick Kamen*.

## Import
- Add a Nick Kamen artist room with id `nickkamen`; add all four original studio records with ids above and year/type as shown.
- Append only the FOUR rows in `nickkamen_phase01_rows_ONLY.csv` to `docs/descriptors/nickkamen.csv`, keeping 27 columns (do not import any earlier album data).
- Add `nickkamen_phase01_reception.csv` to `docs/descriptors/reception/nickkamen.csv` (five columns, album_id/importance/acclaim/mainstream/sources).
- Keep the other CSVs and notes in `docs/descriptors/research/` as inspectable provenance.
- Run `npx vite-node scripts/validate-descriptors.ts`, and tests. The CSV files are `utf-8-sig` for spreadsheet compatibility.

## Tokens
No new genre/instrument/production token is proposed. All used tokens are from current standard vocabulary (pop, synthpop, downtempo, electronic, rnb, soul, poprock, rock, indie, dance; instruments and production as applicable). No custom models were invented.

## ARTIST INFLUENCES
**None verified** from direct, attributable artist/producer statements. Covers of Sam Cooke, Four Tops, Bob Dylan, Curtis Mayfield, etc., and collaborators Madonna, Stephen Bray and Patrick Leonard **must not** be filed as artist influences. `influenced_by` remains blank instead of conjecturing.

## Catalogue exclusions
- *Loving You* (1988) — compilation, not a fifth original studio album.
- *Each Time You Break My Heart* (1991/1993) — release-group/compilation variants; not another studio album.
- *Nick Kamen: The Complete Collection* (2020) — box set/compilation, not a studio album.
- **Title/date discrepancy:** original final album *Whatever, Whenever* (1992), NOT *Whatever, Wherever* (1995) as some AllMusic database records suggest. Original 1992 metadata from Warner via Apple Music and Qobuz supports the correct entry.
- **US album sequence:** 1988 Sessiondays sleeve credits list 9 cuts; some issues list *Better Be Good Tonite*. This does not create a new album.
- **Lotown:** billing is ambiguous between a production collective and studio name in 1990/1992 credits; treated as printed producer name and explained in evidence notes.

## Coverage caveats
`influenced_by` is intentionally empty; album-specific production machines are not inferred. `Move Until We Fly` has limited confirmed instrumentation (guitar); this should be improved with first-edition booklet credits, not guessed. Review scores are album-relative editorial estimates supported by sources, not Metacritic ratings or sales data.

## Next phase
**None. Nick Kamen's four original studio albums are covered in this phase.**

## Claude import note (28 Oct 2026)

Credits checked on the sleeves (Discogs API). Us: Fairlight credited (J.J. Jeczalik tracks); LinnDrum not on the sleeve, removed. Debut sounds_like adds the Bee Gees (Billboard 1986 on the vocals). Whatever, Whenever: dreampop and shoegaze touches, EMF, Happy Mondays and the Beatles (Rolling Stone Italia 2021). Move Until We Fly has no musician credits on any edition. Reception researched by Claude.
