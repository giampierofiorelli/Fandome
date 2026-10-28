# CLAUDE IMPORT — 4 Non Blondes, Phase 01

One incremental ZIP for Fandome branch `descriptors`. Research checked: **2026-10-28**. Do not import to main directly.

## Contents
- `4nonblondes_phase01_rows_ONLY.csv` — exactly **1 newly researched row**, 27 columns, `draft`.
- `4nonblondes_phase01_sources.csv` — **15** source references with URLs and claim support.
- `4nonblondes_phase01_genre_evidence.csv` — **13** genre-specific evidence records (source scope included).
- `4nonblondes_phase01_evidence-notes.md` — evidence explanations, uncertainties, credits and distinctions.
- `4nonblondes_phase01_catalog-audit.csv` — new artist/album, unreleased second album excluded.
- `CLAUDE_IMPORT.md` — this file.

## Artist and album ids
`artist_id: 4nonblondes` (proposed; not currently in either `src/data/catalog.ts` or `src/data/seed.ts` at time of check).

| Album ID | Title | Original year | Type |
|---|---|---:|---|
| `4nonblondes-biggerbetterfastermore` | Bigger, Better, Faster, More! | 1992 | studio |

## Catalogue additions
Create 4 Non Blondes (`4nonblondes`) in the correct catalogue area, then add the **1992** studio album above with exact matching generated id. Check any newly merged changes before writing. `4nonblondes` begins with a digit but is an **alphanumeric string**, consistent with the letters-and-digits-only rule. No duplicate prior descriptor file was found.

**Do not add** the reported second 4 Non Blondes album *1994* now. Linda Perry named a possible **2027** release in a May 2026 NME interview; as of 28 Oct 2026 it is unreleased: https://www.nme.com/news/music/linda-perry-4-non-blondes-reunion-confirms-first-new-album-in-33-years-1994-3946949.

## ARTIST INFLUENCES — phase 01 only
The 2023 Linda Perry interview listing from Matt Pinfield states that she discusses influences **Karen Carpenter**, **Tracey Thorn**, and **The Who**. This is artist-level testimony, NOT proven as the source of the album's 1992 sound. Source: https://podcasts.apple.com/us/podcast/linda-perry/id1629471594?i=1000638541816. Keep album `influenced_by` empty pending stronger album-specific testimony. Janis Joplin, Heart, Concrete Blonde and Toni Childs are **reviewer comparisons**, never promoted to influence without first-person proof.

## Token changes
No new genre, instrument or production tokens are needed in this phase. Album genres use existing Fandome tokens (`alternativerock`, `bluesrock`, `funkrock`, `hardrock`, `poprock`, `folk`, `rnb`, `psychedelia`, `blues`); instruments and `belting` are existing values.

## Production caveat
The original album credits David Tickle as producer. Linda Perry has given first-person testimony that she was responsible for a replacement recording of “What's Up?” used on the record, without receiving a corresponding production credit. Do not rewrite formal producer credits on the basis of the recording anecdote.

## Import / validation
1. Merge this one row, do not replace other artist descriptors.
2. Add artist and released album to `src/data/catalog.ts` first.
3. Validate with `npx vite-node scripts/validate-descriptors.ts`, plus normal project tests.
4. Preserve empty `influenced_by` and other intentionally unsupported production tokens.
5. Genre ranks lead with fully album-level evidence, and put weaker live-review/texture evidence later.

## Next phase
No Phase 02 yet: only one 4 Non Blondes studio album has been **released** by 28 October 2026. Reassess after the projected 2027 second album actually appears; do not prepare its descriptors in advance.


## Claude import note

- 1 row imported as delivered; no new tokens. Unreleased second album not listed.
- Scene US en 1990 rock,alt (a global market, never a discovery target).
- Artist influences from Linda Perry (Karen Carpenter, Tracey Thorn, The Who).
- Reception researched by Claude.
