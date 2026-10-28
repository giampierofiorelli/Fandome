# CLAUDE_IMPORT — Gloria Gaynor / Phase 02

## Scope and catalogue integrity

Research and read-only branch check: **28 October 2026**. Public GitHub `descriptors` branch checked for **both** `src/data/catalog.ts` and `src/data/seed.ts` and for `docs/descriptors/gloriagaynor.csv`: no Gloria Gaynor artist ID, album entry or existing descriptor file detected. **Proposed existing-project ID from phase 01: `gloriagaynor`**. Claude must check its live working branch before creating the artist or albums, because phase 01 was already delivered separately and may have been imported elsewhere.

**Only these four new studio albums in this ZIP; 27 columns, original release order:**

| New album_id | Original album title | Year | Type | Catalog action |
|---|---|---:|---|---|
| `gloriagaynor-gloriagaynorsparkavenuesound` | Gloria Gaynor's Park Avenue Sound | 1978 | studio | add if absent |
| `gloriagaynor-lovetracks` | Love Tracks | 1978 | studio | add if absent |
| `gloriagaynor-ihavearight` | I Have a Right | 1979 | studio | add if absent |
| `gloriagaynor-stories` | Stories | 1980 | studio | add if absent |

**Phase 01 records not included:** *Never Can Say Goodbye* (1975), *Experience Gloria Gaynor* (1975), *I've Got You* (1976), *Glorious* (1977). Do not re-import them from a previous ZIP; preserve their prior assigned IDs. None of the four phase 02 albums is a live album, compilation or a reissue-only recording.

## Important credit/date cases

- **Love Tracks is a 1978 album**, although AllMusic's timeline displays 1979; *Cash Box* reviewed it **23 December 1978**, and release databases specify November 1978. `I Will Survive` belongs here, not on the 1975 debut. Original pressing PD-1-6184.
- **Park Avenue Sound**: full original name includes the artist's forename and possessive. The vinyl label uses the producer credit **TAN** (collective), with **Al Stewart** and **Conell Johnson Jr.** co-producing one track and **Joel Diamond** producing other titles. See `evidence-notes.md` for exact allocations and spellings; do not interpret arrangers and performing musicians as producers.
- **Love Tracks** and **I Have a Right**: Fekaris is credited **producer** on the original Polydor issue; Perren is credited **associate producer** and arranger, so the Fandome `producers` field contains **Dino Fekaris** only (strict field definition). Conflicting later metadata is preserved in notes; **Stories** explicitly credits **Fekaris and Perren** as producers.
- Album-level `phillysoul` represents well-attested Philadelphia soul influence on **Park Avenue Sound**, with original-session artists and recording venue documented. `popsoul` for **Stories** is secondary/low-strength because a reported contemporary Billboard description still awaits verification against its original scan; reviewer can omit that token if low-strength sources are disallowed.
- Genres are not capped. Each row has at least four tokens, each documented separately in `genre_evidence.csv` with full-album vs track-specific scope.
- All instrument and production tokens correspond to named album musicians/arrangements in original-pressing credits and qualified descriptions. No unfounded synth model, drum machine, sampler or digital tool; `influenced_by` **blank** without particular album-level primary statements. `sounds_like` are editorial comparisons.

## Project tokens and collaborations

**New genre tokens: none. New instrument tokens: none. New production tokens: none.** Every used token is present in the `descriptors` branch's corresponding types. **Co-billed releases: none.** These four `type` values are `studio`; `status` remains `draft` until independently verified.

## Phase sequence

**Next Phase 03 (first chronological pass):** *I Kinda Like Me* (1981), *Gloria Gaynor* (1982), *I Am Gloria Gaynor* (1984), *The Power of Gloria Gaynor* (1986). Check the precise title of *The Power* and the classification of its entirely new recordings vs hits medley and secondary reissues. Later titles like *Love Affair*, *I Wish You Love* and *Testimony* require separate release/edition classification. No proposed phase 03 rows are contained in this ZIP.

## Six deliverables

1. `CLAUDE_IMPORT.md` — import instructions and caveats.
2. `gloriagaynor_phase02_rows_ONLY.csv` — **4** rows, 27-column header, only new phase 02 albums.
3. `gloriagaynor_phase02_sources.csv` — **22** per-album qualified sources, evidence and working locations.
4. `gloriagaynor_phase02_genre_evidence.csv` — **18** separately scoped genre lines.
5. `gloriagaynor_phase02_evidence-notes.md` — editorial judgments, producer and instrument evidence, disagreements.
6. `gloriagaynor_phase02_catalog-audit.csv` — current phase vs past and future records, catalog actions.

Claude imports on its own branch and runs repository validator and tests. This archive contains no scripts and **does not modify GitHub**.
