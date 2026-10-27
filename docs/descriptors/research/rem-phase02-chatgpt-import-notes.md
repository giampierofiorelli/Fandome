# R.E.M. — Fandome Phase 02 (incremental)

**Artist ID:** `rem` — display R.E.M.  
**Cutoff date:** 27 October 2026.  
**This ZIP contains four NEW descriptor rows only**, following *Chronic Town*, *Murmur*, *Reckoning* and *Fables of the Reconstruction* of Phase 01. Do not re-import Phase 01 rows.

## Phase 02 albums

| album_id | release title | original release | type | catalog status at last check |
| --- | --- | --- | --- | --- |
| `rem-lifesrichpageant` | Lifes Rich Pageant | 1986 | studio | missing |
| `rem-document` | Document | 1987 | studio | missing |
| `rem-green` | Green | 1988 | studio | missing |
| `rem-outoftime` | Out of Time | 1991 | studio | missing |

Official release chronology: https://remhq.com/music/.  
**Catalog caveat:** At the earlier verification of `src/data/catalog.ts` on branch `descriptors`, `rem` was absent entirely, and the standalone phase01 import was not committed to GitHub. Check repository status again before creating the artist: if Claude already imported Phase 01, add only the four albums above; if not, follow the Phase 01 `CLAUDE_IMPORT.md` first. This ZIP does not silently add or repeat that earlier data. The `rem_phase02_catalog-audit.csv` lists actions for only these four new rows.

### New tokens to add

- **Genres:** none newly required by these four rows. `americanunderground` used by *Lifes Rich Pageant* is the same Phase 01 proposed new token, not a second, differently spelled token. If Phase 01 was not merged, Claude must add `americanunderground` to `scenes.ts`, `genreFamilies.ts`, and the validator alongside any Phase 01 pending tokens. The exact names `alternativepoprock`, `alternativeindierock` and `adultalternativepoprock` are deliberately distinct.
- **Instruments:** none (all tokens already in the guide / instrument list).
- **Production:** none (all tokens already in the guide / production list). Specifically, `fairlight` = Carl Marsh's credited Fairlight on the original **Document**; do not confuse with a different sampler model.

### Co-billed album / ARTIST INFLUENCES

- No co-billed album in Phase 02. Guest appearances do not imply joint billing. No new `coBilled.ts` entry.
- **ARTIST INFLUENCES** were documented in **Phase 01 only**; do not duplicate them here. No album-specific causal influence verified in Phase 02, so `influenced_by` cells are blank. Byrds comparisons, guest vocalists, and the Wire cover of `Strange` are not automatically causal influences.

### Credits and stylistic caveats

- `Lifes Rich Pageant` title has **no apostrophe**. **Don Gehman** alone is credited as producer. His interview documents **overdubbing**, not named studio hardware. Styles such as arena rock and garage rock are less central; their evidence file shows whether whole-record, track or scene descriptors.
- `Document` original producers are **Scott Litt + R.E.M.** The original credits explicitly mention **Fairlight** (Carl Marsh) and **horns** (Steve Berlin). Hi-Fi News specifies saxophone and lap-steel/dulcimer on selected tracks. Do not add Marsh as a producer.
- `Green` original producers are **Scott Litt + R.E.M.** Distinguish the original album from 2013 anniversary CD and 1988 demos. Cello, pedal steel and percussion guests are track-specific. Mandolin/accordion are documented on original album recordings.
- `Out of Time` original producers are **Scott Litt + R.E.M.** **Mark Bingham** arranged strings/horns; he is not a record producer. String sessions and separate overdubs are expressly named in original credits. Kate Pierson/KRS-One/Peter Holsapple are guests, not co-billed artists or producer credits. The original LP is *eleven tracks*; no 2016 bonus demos.
- Critic disagreement and the **1991 vs 2016 Michael Stipe love-song characterisation** are documented in evidence notes, not resolved by invented certainty.

### Phase 03 (next)

1. `rem-automaticforthepeople` — **Automatic for the People** (1992)
2. `rem-monster` — **Monster** (1994)
3. `rem-newadventuresinhifi` — **New Adventures in Hi-Fi** (1996)
4. `rem-up` — **Up** (1998)

### Contents — exactly six files

- `CLAUDE_IMPORT.md`
- `rem_phase02_rows_ONLY.csv` — **27 columns; four incremental rows**
- `rem_phase02_sources.csv` — one row per supporting source, working URLs
- `rem_phase02_genre_evidence.csv` — one record per genre token per album, with scope
- `rem_phase02_evidence-notes.md` — per-album source reasoning, uncertainties and critic differences
- `rem_phase02_catalog-audit.csv` — catalog actions for the four phase 02 albums

No source or genre evidence row imports as a descriptor row. Re-check IDs and token registration in the live branch, then run `scripts/validate-descriptors.ts` and tests.
