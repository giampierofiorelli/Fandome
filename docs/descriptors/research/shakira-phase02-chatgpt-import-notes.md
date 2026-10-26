# CLAUDE_IMPORT — SHAKIRA / PHASE 02

**Research cutoff:** 26 October 2026. **Artist id:** `shakira` verified in `src/data/catalog.ts`, branch `descriptors`. **Status:** `draft`. **Phase strictly incremental:** exactly four studio-album rows, none from phase 01.

## Albums in this ZIP

| album_id | Title | Year | Type | In catalogue? |
|---|---|---:|---|---|
| `shakira-laundryservice` | Laundry Service | 2001 | studio | YES |
| `shakira-fijacionoralvol1` | Fijación Oral, Vol. 1 | 2005 | studio | YES |
| `shakira-oralfixationvol2` | Oral Fixation, Vol. 2 | 2005 | studio | YES |
| `shakira-shewolf` | She Wolf | 2009 | studio | YES |

Exact original catalogue IDs are retained. `docs/descriptors/shakira.csv` was absent on the branch at initial research. If Claude has imported Phase 01 since then, append only these Phase 02 rows, do not replace or repeat them.

## Permanent scope correction from the owner

**Never research or describe live albums or greatest-hits/retrospective compilations for this project**, even when acclaimed or landmark. In particular **MTV Unplugged (2000) is EXCLUDED**, notwithstanding the phase-01 manifest's superseded suggestion. Previously recorded songs bundled live or recompiled provide little new original-album sound identity. Focus on original studio albums and selectively important genuinely distinct musical projects where documented. No live or compilation rows in any future phase.

## Catalogue additions

**None in Phase 02 itself.** All four IDs are in `catalog.ts`. The catalogue is still missing **Sale el Sol (2010)** and **Shakira (2014)** (both original studio albums) and they should be added in Phase 03. Phase 01 separately flagged `Magia` and `Peligro`; if not imported yet, those phase-01 imports remain outstanding and should not be duplicated here.

## New exact tokens (add BEFORE descriptor validation)

**New genre tokens:**
- `andeanmusic` — phrase 'Andean music' for Whenever, Wherever (one-track texture, AllMusic).
- `middleeasternmusic` — 'Middle Eastern music' for Eyes Like Yours (one-track texture, AllMusic).
- `neodisco` — 'neo-disco' specifically on Timor (AllMusic); distinct from existing `nudisco`.

**New instrument tokens:**
- `bandoneon` — original Laundry Service (Objection) and Fijación Oral personnel.
- `charango` — Laundry Service / Whenever Wherever, MusicBrainz.
- `quena` — Laundry Service / Whenever Wherever, MusicBrainz.
- `rondador` — Laundry Service / Whenever Wherever, MusicBrainz.
- `gong` — NME review of She Wolf.

**New production tokens:** none. Existing `programming`, `hornarrangements`, `stringarrangements`, and `digitalediting` are used. Phase 01 separately flagged `bachata` and `oud`; do not rename them here.

These genre tokens are directly source-named traditions/styles; they do NOT assert album-wide prevalence. Add the genre names to `scenes.ts`, `genreFamilies.ts` as appropriate, and the hardcoded validator genre set. Add instruments to `instruments.ts`.

## ARTIST INFLUENCES

Phase 01 already contains the only artist-wide influence inventory. **Do not reimport that table here.** This phase documents one *album-specific* influence, Crystal Castles → She Wolf: a 2009 critic expressly calls Men in This Town Crystal Castles-inspired, alongside Shakira's contemporary comments that John Hill introduced her to that electronic sound. See album evidence notes and sources. Collaborators and merely similar artists are not recast as influences.

## Credits / edition caveats

- **Laundry Service:** producer/co-producer roles only; Emilio Estefan Jr. is executive. AllMusic's album roster includes Pablo Flores/Javier Garza; inspect sleeve for whether those are limited to edition-specific tracks when merging.
- **Fijación Oral:** Rick Rubin's credit is executive; never place him in `producers`. Alejandro Sanz is a featured vocalist/guitarist, not a producer.
- **Oral Fixation Vol. 2:** the 2005 **original 11-song** edition is primary. **Hips Don't Lie was added in 2006**; its producer Wyclef Jean and additional guest instruments should not define the original 2005 row. The Matrix is recorded as pre-production in MusicBrainz and excluded as a full producer.
- **She Wolf:** bonus tracks/2010 reconfigurations differ across territories. **Timbaland is excluded** from original-album producer credits since Give It Up to Me is on some expanded editions. No undocumented specific vocal-processing box, synth model or DAW inserted.
- Empty `influenced_by` on first three albums is intentional. Similarity is not evidence of causation.
- The quantitative scales are evidence-grounded assessments rather than sourced numeric claims; see per-album reasons.

## Co-billed albums

**None in Phase 02.** Guest credits to Alejandro Sanz, Gustavo Cerati, Carlos Santana or Wyclef Jean are **track features**, not independently co-billed studio albums; do not modify `coBilled.ts` for them.

## Next phase — PHASE 03 (studio only)

1. **Sale el Sol** (2010) — missing from catalogue; ADD `shakira-saleelsol`.
2. **Shakira** (2014) — missing from catalogue; ADD `shakira-shakira`.
3. **El Dorado** (2017) — already in catalogue.
4. **Las Mujeres Ya No Lloran** (2024) — already in catalogue.

This will complete the original studio albums available through 26 October 2026, subject to reviewing whether any independently original and musically significant EP/remix collaboration qualifies. **No live albums and no compilations.**

## ZIP contents (six files)

- `CLAUDE_IMPORT.md` (this manifest)
- `shakira_phase02_rows_ONLY.csv` (27-column header plus precisely four rows)
- `shakira_phase02_sources.csv` (source identity, live link, evidence use/strength)
- `shakira_phase02_genre_evidence.csv` (one line for each genre, with scope)
- `shakira_phase02_evidence-notes.md` (scale/instrument/production reasoning and disagreements)
- `shakira_phase02_catalog-audit.csv` (catalogue confirmation and no duplicates)
