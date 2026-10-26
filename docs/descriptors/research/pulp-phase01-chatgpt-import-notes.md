# CLAUDE IMPORT — Pulp Phase 01 (original 1983–1994 releases)

**Read-only research delivery**. No GitHub changes have been made. Four new descriptor rows and five supporting files, with 27-column schema exactly matching the guide. Status `draft`.

## Artist and catalogue prerequisite
- **Artist `pulp` does not yet exist** in `src/data/catalog.ts` on branch `descriptors` as checked 2026-10-26. Add a new artist row `['pulp', 'Pulp', '<choose palette colour>', '<choose suitable tagline>', ...]`, plus scene entry `pulp: 'GB en 1980 rock,alt'` (actual discography begins in late 1970s, first album 1983) if not there. Do not claim that code was edited here.
- Albums to add in chronology: `['It', 1983]`; `['Freaks', 1987]`; `['Separations', 1992]`; `["His 'n' Hers", 1994]`.
- Expected Fandome IDs from current `slug` rule: `pulp-it`, `pulp-freaks`, `pulp-separations`, `pulp-hisnhers`.
- The missing `docs/descriptors/pulp.csv` should be created or appended to only after schema validation; **do not overwrite any parallel ongoing import**. The four rows in `pulp_phase01_rows_ONLY.csv` are the only new rows for this phase.
- No co-billed collaboration records are involved in this phase.

## Genre additions to review
Check `src/data/scenes.ts`, `genreFamilies.ts`: `indiefolk`, `tweepop`, `neoacoustic`, `gothicrock`, `darkcabaret` are new tokens proposed on explicit genre metadata of variable strength. `indiefolk` is named by a secondary reference, but should be checked with stronger criticism before adding globally. For each row, `<id>_genre_evidence.csv` exposes the exact source phrasing and scope. The weaker aggregate tags are editorial-review candidates, not factual certainties.

## Instrument and production tokens
- Add instrument: `timpani` (Nick Banks, His 'n' Hers; also on Separations session). The other instruments already exist in the guide.
- Add production tokens (named models): `casiofz10` (Casio FZ-10 sampler; Separations), `emssynthia` (EMS Synthi A; His 'n' Hers), `korgtridentii` (Korg Trident II), `stylophone350s` (Stylophone 350S). Exact original-source spelling retained in evidence notes.
- Empty production in *It* and *Freaks* means no sufficiently album-specific effect/production hardware source, **not** that the studio made no technical decisions.

## Credits and version pitfalls
- **It** is a 1983 seven-track mini-LP also accepted as Pulp's first studio album. Ignore later reissue bonus tracks and never add a duplicate EP row.
- **Freaks**: recorded June 1986; released 11 May 1987. Album sleeve says producer **Pulp**. Recording-session chronology also names Jonathan Kirk as producer, but album text says mixing assistant; reserve amendment until original credits clarify.
- **Separations**: recorded 1989–90 but released June 1992, producer **Alan Smyth and Pulp**, not engineer Alan Fisch. Do not promote 2012 bonus remixes to original album tracks.
- **His 'n' Hers**: original UK release April 1994; US digital versions have different dates. Producer **Ed Buller**. Original vinyl excludes remixed Babies, while original CD includes it; no second studio album.
- `influenced_by` for Freaks relies on a **critic's** comparison of vocal delivery to Ian Curtis/Mark E. Smith, not artist testimony; feel free to lower confidence during second review. `sounds_like` is original editorial sonic similarity and not credited collaboration.

## Deliverables / import order
1. `pulp_phase01_catalog-audit.csv` — artist addition and four album additions.
2. `pulp_phase01_rows_ONLY.csv` — four 27-column descriptor rows.
3. `pulp_phase01_sources.csv` — actual URLs and precise support.
4. `pulp_phase01_genre_evidence.csv` — one evidence row for each assigned genre.
5. `pulp_phase01_evidence-notes.md` — explanatory reasoning, uncertainty and constraints.
6. This file `CLAUDE_IMPORT.md`.

Run `scripts/validate-descriptors.ts` after merging according to repository guidance. Do not merge by replacing existing descriptor files blindly.

## Next phase (no repeats)
- *Different Class* (1995); *This Is Hardcore* (1998); *We Love Life* (2001); *More* (2025).
- Optional historical compilation *Intro: The Gift Recordings* (1993) should only be considered independently if recommendation value justifies repetition of singles; generally skip as a compilation. Live releases not included.
