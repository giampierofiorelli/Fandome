# Claude import — SHAKIRA phase 03 (completed studio-album discography)

**Research date:** 26 October 2026  
**Branch verified:** `descriptors`, **artist ID:** `shakira`  
**Use exactly these four NEW rows only.** Never merge the earlier phase 01/02 rows into this phase file. No live albums; no compilations.

## Phase 03 albums
| ID | Title | Year | Type | Catalogue action |
|---|---|---:|---|---|
| `shakira-saleelsol` | Sale el Sol | 2010 | studio | **ADD** |
| `shakira-shakira` | Shakira | 2014 | studio | **ADD** |
| `shakira-eldorado` | El Dorado | 2017 | studio | existing |
| `shakira-lasmujeresyanolloran` | Las Mujeres Ya No Lloran | 2024 | studio | existing |

## Albums to add to src/data/catalog.ts
1. `["Sale el Sol", 2010]`, id `shakira-saleelsol`.
2. `["Shakira", 2014]`, id `shakira-shakira`.

Both need the exact IDs above and a matching generated seed album before the validator runs.

## New genre tokens, check the current branch and add before validation
- `merengue`: Dominican merengue, Epic Records source for Sale el Sol.
- `vallenato`: documented in El Dorado, World Listening Post / specialist commentary.
- `afrobeats`: Afrobeats (PLURAL) on Las Mujeres Ya No Lloran; DO NOT map to existing `afrobeat` (singular).
- `corrido`: Mexican corrido for El Jefe, Guardian.
- `corridotumbado`: more specific style of El Jefe, El País; both specific and broader tokens must be preserved.
- `regionalmexican`: explicitly named by Rolling Stone en Español for 2024 album; broader than corrido.
- `bachata`: explicitly named for El Dorado and 2024. This token was also flagged in earlier Shakira research; add only if still absent.

## New instrument tokens
- `bongos`: credited on El Dorado / Deja Vu (CD personnel).
- `guacharaca`: Colombian scraper on El Dorado / La Bicicleta (CD personnel).
- `caja`: Colombian caja drum on El Dorado / La Bicicleta (CD personnel). Avoid conflation with generic box/cajón.
No new production tokens. Register these in `instruments.ts` only if not already present. The 27-column validator will reject unknown tokens until dictionary additions.

## Co-billed albums
**None**. El Dorado includes originally co-billed *songs* (e.g., Carlos Vives & Shakira; Prince Royce & Shakira), and the 2024 album includes numerous collaborator singles, but the albums themselves are credited to **Shakira** only. Do not create `coBilled.ts` records for these albums.

## Artist influences
Artist-wide influences belong to **phase 01 only**. Do not repeat them or infer an influence from a cover, guest, source comparison or co-producer. Album-specific `influenced_by` remains empty in this phase.

## Caveats / editions
- 2010: use original Sale el Sol studio programme, not international bonus-track or remix duplicates; other release editions vary.
- 2014: standard core *Shakira* rather than adding the expanded-edition-exclusive 2014 football mix/Chasing Shadows in album-wide identity. Qobuz expanded credits are used only for common original tracks.
- 2017: reissued songs La Bicicleta, Deja Vu and Comme moi have their own source-album origins and production credits. No new 'collaboration album' is implied.
- 2024: **official studio album, despite seven previously released singles (2022–23)**; the digital version includes repeated or remix variants. Avoid recommending its bonus remixes as distinct sonic albums. The album is **not a greatest-hits compilation release**.
- Main descriptors use `draft`; album influences deliberately empty. Instrument entries ordered common sounds then characteristic one-off instruments. Editorial similarity is not causation.
- Producer names are track-credited producers/co-producers; guest vocalist only, mixer, engineer, A&R, executive producer, and additional production are excluded when not independently producer-credited.

## Next phase
**None planned.** Phase 03 completes the released original Shakira studio albums to 26 October 2026. Live recordings and compilations stay excluded permanently. An independently original, truly consequential EP/soundtrack or collaboration may require a separate evidence-based audit, not an automatic Phase 04.

## Files inside this ZIP
1. `CLAUDE_IMPORT.md`
2. `shakira_phase03_rows_ONLY.csv` — header plus four rows, 27 columns
3. `shakira_phase03_sources.csv` — album-by-album source IDs/URLs and support
4. `shakira_phase03_genre_evidence.csv` — one row per included genre, with track/album scope
5. `shakira_phase03_evidence-notes.md` — scales, instruments, production, distinctions, caveats
6. `shakira_phase03_catalog-audit.csv` — what to add and what already exists
