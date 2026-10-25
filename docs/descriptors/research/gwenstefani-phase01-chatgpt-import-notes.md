# CLAUDE_IMPORT — Gwen Stefani Phase 01

**Cut-off:** 2026-10-25. Strictly incremental; **import only four rows** from `gwenstefani_phase01_rows_ONLY.csv`. Every row has exactly 27 columns and status `draft`. No content was written to GitHub.

## Artist and catalogue
- Artist **Gwen Stefani** is **not present** in `src/data/catalog.ts` at this phase's read-only check. Proposed Fandome ID: **`gwenstefani`**. First add this artist to the catalogue and applicable seed/Scenes records (`US`, main vocal language `en`, active since 1990s with No Doubt; solo since 2000s), before validator runs.
- `docs/descriptors/gwenstefani.csv` and `docs/descriptors/gwen.csv` were both absent from branch `descriptors`. Do not overwrite any file created after this inspection.
- Add these four studio albums and IDs to the catalogue **in the listed order**:

| album_id | album title | original year | action |
|---|---|---:|---|
| `gwenstefani-loveangelmusicbaby` | Love. Angel. Music. Baby. | 2004 | add |
| `gwenstefani-thesweetescape` | The Sweet Escape | 2006 | add |
| `gwenstefani-thisiswhatthetruthfeelslike` | This Is What the Truth Feels Like | 2016 | add |
| `gwenstefani-youmakeitfeellikechristmas` | You Make It Feel Like Christmas | 2017 | add |

## Genre, instrument and production vocabulary
- New **genre tokens**: **none** (all selected genre labels are already in `scenes.ts` as of branch inspection).
- New **instrument tokens**: **none**.
- New **production tokens**: **`hornarrangements`** (horn arrangements explicitly credited), **`stringarrangements`** (string arrangements explicitly credited) for the 2017 Christmas album. Add both to `src/data/production.ts` before running the validator; if arrangement methods are considered out of scope, delete those two tokens and document the judgement rather than silently changing row semantics.
- Both new production tokens use only lowercase letters and are sourced to AllMusic's 2017 album personnel. The 2016 `drumprogramming` token is already present in current production list.
- No co-billed *album* in this phase. Blake Shelton is featured only on the title track of the 2017 album; André 3000, Eve and Akon are featured collaborators on individual songs, not additional billed album artists. Do not add `coBilled.ts` records.

## Interpretation and edition caveats
- Love. Angel. Music. Baby. punctuation is significant in display title; slug strips it for ID.
- Original release years: 2004, 2006, 2016, 2017; some discography websites disagree on region-specific days/months, not years. Avoid importing deluxe bonus tracks as new studio albums.
- For *The Sweet Escape* / Wind It Up, Gwen described an orchestra **re-recording** the Sound of Music passage rather than simply using the original record master. Both sampling and interpolation terminology appear in reviews; see evidence notes.
- `producers` includes only actual producer or co-producer credit. It excludes executive production alone, vocal features, mixing only, and writers (notably Linda Perry / Justin Tranter / Julia Michaels where not production-credited).
- All eight scales are evidence-grounded editorial assessments at whole-album level, not extrapolated from a signature single. Genre evidence distinguishes `whole album`, `some tracks` and `texture`. The evidence-notes file states where a token is a weak match requiring second review (e.g., track-scoped `doowop` and `motown` on the Christmas album).
- The instruments/production lists contain only documented album-specific terms. Unknown gear was not inferred from genre.

## Next phase
- **Phase 02:** *Bouquet* (2024), studio, plus only qualifying later released EP/remix/collaboration projects if separately substantiated. This is a **one-album phase if no additional releases meet the landmark exception**. Do not repeat deluxe reissues, these four albums or No Doubt albums. As of research cut-off, the official catalogue also lists 2024 *Bouquet* and deluxe variations, not an additional distinct 2025/2026 studio LP.

## Import check
1. Add artist+four album IDs (and two production tokens or explicitly remove tokens from row first).
2. Add exactly the rows in the `rows_ONLY.csv`, not past/future phases.
3. Verify genre evidence and source URLs against original and region editions.
4. Run `npx vite-node scripts/validate-descriptors.ts` and app tests.
5. Keep status `draft` until independently reviewed.
