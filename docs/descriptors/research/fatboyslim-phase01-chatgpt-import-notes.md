# Fatboy Slim — Fandome Phase 01 import (25 October 2026)

## Contents and invariants

Four **new** rows only. CSV is 27 columns; status is `draft` throughout. No live albums, other artist rows or material from an earlier phase.

- `fatboyslim-betterlivingthroughchemistry` — *Better Living Through Chemistry* (1996), studio.
- `fatboyslim-youvecomealongwaybaby` — *You've Come a Long Way, Baby* (1998), studio.
- `fatboyslim-halfwaybetweenthegutterandthestars` — *Halfway Between the Gutter and the Stars* (2000), studio.
- `fatboyslim-palookaville` — *Palookaville* (2004), studio.

## Catalogue / artist setup

The artist is **not currently found** in `src/data/catalog.ts` or `src/data/seed.ts`, and no `docs/descriptors/fatboyslim.csv` was found on `descriptors` when inspected. Before descriptor validation, **create the artist entry** with ID `fatboyslim`, display name **Fatboy Slim**, and add the four releases above to the catalogue; preserve the IDs in the rows. Do not create an alternate `normancook` room for these albums. Add any required scene data (`GB`, English, 1990s, big beat/electronic). Genre family mappings are maintained in `src/data/genreFamilies.ts`.

## New tokens (add before validation)

- Genre: `afrohouse` — track-specific Afro-house styling on *Jin Go Lo Ba* (musicOMH); link to `house` and `afro` parents in the genre family mapping.
- Genre: `rockabilly` — relevant to **one** *Palookaville* track's guitar contribution, not its overall dominant sound (Observer/Guardian); place in genre family under `rock`.
- Production: `akais950` — Akai S950 sampler; documented first album studio and 1998 rig.
- Production: `atarist` — Atari ST computer/sequencing platform; documented first and second album setups.
- Production: `clabcreator` — C-Lab Creator sequencing software; documented first album home setup and 1998-era recording context. Note contemporary accounts also mention Cubase on the 1998 record; not necessarily exclusive use.
- Production: `backmasking` — backmasked/reversed guitar material described by Apple Music for 1998 album.
- No new instrument tokens. Existing `tb303`, `cubase`, `sampling`, `vocalchops` were checked in the codebase.

The live *On the Floor at the Boutique* (1998) is a DJ mix, not a studio album, and is not included. No generic best-of or remix collections are included. `Here Lies Love` (2010) is a **material separate co-billed collaboration** with David Byrne, not a fifth Fatboy Slim solo studio album. A possible specialist follow-up package should include it under the precise credit **David Byrne and Fatboy Slim**, with a new ID (`fatboyslim-herelieslove`) and a `coBilled.ts` entry; check the other artist's catalogue for duplication before doing so. The original 2010 concept recording differs from the 2014 Original Cast Recording; do not conflate them. Source: https://www.nonesuch.com/albums/here-lies-love

## Production and personnel boundaries

All four releases credit **Fatboy Slim** (Norman Cook) as record producer. **Simon Thornton** is credited as engineer/mixer and, on some editions, executive producer; he is **not** inserted into the CSV `producers` field, following the strict rule. Featured vocalists and sample-origin artists are not producers. `instruments` describe source-confirmed audible timbres, including **sampled** sounds; they do not imply that guest players performed every instrument freshly on the album. Source descriptions limited to an individual song are documented as `some tracks` or `texture` in the evidence CSV and placed late in the ordered genre lists.

For the 1996 LP, early UK releases have different track counts and bonus tracks from US/reissues; year and album-scale notes refer to the **original** 1996 album. 1998 *You've Come a Long Way, Baby* was recorded at The House of Love, Brighton; gear comparisons in contemporary retrospective sources are documented in evidence notes. Release-day discrepancies for 1996 / 1998 / 2004 do not alter the year-only schema.

## Next phase

The four Fatboy Slim **solo studio** albums are complete here, through 25 October 2026. If pursuing a curated collaboration phase, investigate **David Byrne and Fatboy Slim — Here Lies Love (2010)** as the principal remaining essential project, followed only by other objectively documented, landmark collaborations/EPs if sufficient for a new incremental package. No speculative album or generic live/compilation should be added to reach four rows.

## Import procedure

1. Add artist plus four albums and any missing genre/production tokens to the repo (`descriptors` branch) and update any scene/family mappings.
2. Import only `fatboyslim_phase01_rows_ONLY.csv` into `docs/descriptors/fatboyslim.csv` (with the 27-column header).
3. Run `npx vite-node scripts/validate-descriptors.ts` and tests. Only add co-billing if separately processing *Here Lies Love*.
4. Read `fatboyslim_phase01_evidence-notes.md` for critical disputes and track-level support. Keep `status=draft` until an independent second check.

Note: file creation is external to GitHub and does not itself run the project validator. URL evidence reflects pages retrieved on the research date; some sources may have subscription barriers.
