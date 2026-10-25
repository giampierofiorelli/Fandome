# CLAUDE_IMPORT — Sia Phase 02 (27-column revision)

Read-only research package for branch `descriptors` as checked 25 October 2026. No GitHub changes have been made by ChatGPT.

## Phase contents, ONLY new descriptors

- `sia-weareborn` — *We Are Born* (2010, studio)
- `sia-1000formsoffear` — *1000 Forms of Fear* (2014, studio)
- `sia-thisisacting` — *This Is Acting* (2016, studio)
- `sia-everydayischristmas` — *Everyday Is Christmas* (2017, studio)

These four albums ALREADY exist in `src/data/catalog.ts` (`sia`, original titles and years). **No catalogue rows to add**. At time of check, `docs/descriptors/sia.csv` was absent; if Claude has subsequently imported phase 01, append exactly these four rows without repeating phase 01, and preserve all existing identifiers. If present in a newer branch revision, replace by ID rather than duplicate.

## Format

`sia_phase02_rows_ONLY.csv` has exactly **27 columns**, in the current guide/validator order: `voice,instruments,production,lyrics`. Run the repository validator and tests after import. `status=draft`; numeric scales are editorial and referenced by album in the research notes. **No part of the discography from 1997–2008 is repeated**. Original 2010/2014/2016/2017 standard tracks only; see evidence notes for expansion caveats.

## Instruments absent from the preinstalled instrument list

- `baritoneguitar` — credited physical instrument on one or more tracks; refer to evidence notes and sources.
- `celesta` — credited physical instrument on one or more tracks; refer to evidence notes and sources.
- `chamberlin` — credited physical instrument on one or more tracks; refer to evidence notes and sources.
- `mellotron` — credited physical instrument on one or more tracks; refer to evidence notes and sources.
- `pumporgan` — credited physical instrument on one or more tracks; refer to evidence notes and sources.
- `sleighbells` — credited physical instrument on one or more tracks; refer to evidence notes and sources.

## Production tokens absent from list

- None

## Genre tokens absent from list

- None

All new tokens are lowercase, alphanumeric (instrument tokens letters only). Extend `src/data/instruments.ts` and `genreFamilies.ts` only when necessary; add a genre to `scenes.ts` first if absent. Record qualified texture-only genres without promoting them to uniform album identity.

## Important caveats

- *We Are Born*: 13 original compositions/cover performances; `Oh Father` is a Madonna cover, **not** evidence Madonna directly influenced the *album*. Diplo's `Clap Your Hands` remix not represented. Original `You've Changed` reworked versus Lauren Flax recording.
- *1000 Forms of Fear*: 12 original tracks. Source linked is a Japan 2014 pressing containing **bonus versions**; apply only tracks 1–12. Includes co-production *Elastic Heart* Diplo + Kurstin; Chris Braide credited on *Big Girls Cry*, Shatkin on *Chandelier*. `newwave` and `artpop` are lower-confidence album/texture taxonomies. Specific keyboard models are not guessed.
- *This Is Acting*: 12 original tracks, not deluxe. `Reaper` has SIX credited producer names, `House on Fire` and `Footprints` also have **additional producer** credits in the source. Producer names are not inferred from the writers. *Sweet Design* includes credited samples; no generic assumption all tracks use sampling. The remixed Sean Paul `Cheap Thrills` version is not used.
- *Everyday Is Christmas*: standard **10 songs** produced by Kurstin in 2017. The 2018 cover *Round and Round*, later extra songs and sped-up mixes are NOT covered. `sleighbells` source is a reviewed audible element; `pumporgan`, `baritoneguitar`, `mellotron`, `celesta` are from original-album personnel as reproduced in discographic credits; specialist tokens retained. *Santa's Coming for Us* `calypsopop`/`boogiewoogie` reflect reviewer-described TRACK TEXTURES, not categorical calypso LP.
- `influenced_by` blank on all four rows: cover performance, stylistic comparison and pitching a song to Adele or Rihanna are not demonstrations of directly acknowledged influence.

## Next phase / discography beyond this packet

Sia solo: *Music – Songs from and Inspired by the Motion Picture* (2021, soundtrack/album; verify edition and film-song relationship); *Reasonable Woman* (2024, studio). Significant collaboration to audit independently: *Labrinth, Sia & Diplo Present... LSD* (2019), a distinct three-artist collaborative project, not casually recatalogued as a Sia solo disc. Plan next phase of 3 records only after confirming attribution, exact billing and Fandome IDs. *Everyday Is Christmas* later deluxe editions must not be counted again as new studio albums.

## Files

- `sia_phase02_rows_ONLY.csv`: 4 new rows, 27 columns.
- `sia_phase02_sources.csv`: independent reviews, editorials and release credits, source types and evidence strength.
- `sia_phase02_genre_evidence.csv`: per-genre source, scope, track rationale and strength.
- `sia_phase02_evidence-notes.md`: original track-by-track evidence, scale reasoning and disagreement.
- `sia_phase02_catalog-audit.csv`: existing catalog entries, add-descriptor-only instruction.

No scripts are needed. Claude handles catalogue updates, taxonomy, validation and tests.
