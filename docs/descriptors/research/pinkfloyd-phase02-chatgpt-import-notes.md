# Fandome — Pink Floyd Phase 02 import (read-only research)

Research date: **26 October 2026**. Contents are strictly incremental and include no Phase 01 rows.

## Phase 02 album rows
- `pinkfloyd-atomheartmother` — **Atom Heart Mother** (1970, `studio`)
- `pinkfloyd-meddle` — **Meddle** (1971, `studio`)
- `pinkfloyd-obscuredbyclouds` — **Obscured by Clouds** (1972, `soundtrack`)
- `pinkfloyd-thedarksideofthemoon` — **The Dark Side of the Moon** (1973, `studio`)

## Catalogue audit / additions
- Artist ID: `pinkfloyd` (already exists in the `descriptors` branch).
- **Already in catalogue**: `pinkfloyd-thedarksideofthemoon`. Reuse its exact ID.
- **ADD**: `Atom Heart Mother` (1970, studio), id `pinkfloyd-atomheartmother`.
- **ADD**: `Meddle` (1971, studio), id `pinkfloyd-meddle`.
- **ADD**: `Obscured by Clouds` (1972, soundtrack), id `pinkfloyd-obscuredbyclouds`.
- At research time `docs/descriptors/pinkfloyd.csv` did **not** exist yet. Do not overwrite Phase 01 if newly imported; append only these Phase 02 rows.

## New genre token needed
- `symphonicprog` — AOTY *Atom Heart Mother* tags **Symphonic Prog**. Scope: the extended orchestrated suite, not every track. Add to `src/data/scenes.ts`, with family `['prog', 'rock']` in `src/data/genreFamilies.ts`, then update validator's allowed list if needed.
- The genre token `psychedelicrock` was already required by Phase 01; verify import state. Existing music-specific tokens (`folkrock`, `artrock`, `albumrock`, `prog`, `bluesrock`, `gospel`, `spacerock`) are already in the current guide.
- AOTY also lists **Field Recordings** under *Atom Heart Mother*, but this is assigned as a production technique in the descriptor, not as an independent music genre. Never turn soundtrack-format tags into the first sound genre.

## Instrument and production tokens
- **No new instrument token required** by this phase. `steelguitar` represents pedal steel; `mallets` covers vibraphone; `electricpiano` covers Wurlitzer and Fender Rhodes.
- **No new production token required** by this phase: `emsvcs3`, `emssynthiaks`, `moog`, `tapeeffects`, `overdubbing`, `fieldrecordings`, `belting`, `layeredvocals`, `hornarrangements` and `stringarrangements` already exist in guide / production list. Confirm the branch at import time.
- Distinguish credited *producer* from engineer and orchestrator. All four records credit **Pink Floyd** as album producer. Ron Geesin arranged/orchestrated the suite on *Atom Heart Mother*; Alan Parsons engineered *Dark Side*; Chris Thomas mixed *Dark Side*.

## Co-billed work
- **None**. Geesin, Clare Torry and Dick Parry are contributors, not co-billed album artists; do not add `coBilled.ts` relationships.

## Edition, genre and methodological cautions
- Four original issues only, no post-release quadraphonic remixes, box-set demos, live recordings or 2016 re-recordings.
- *Obscured by Clouds* is treated as `soundtrack` because it was composed for Barbet Schroeder’s film *La Vallée*. Some songs did not feature in the movie and some catalogs call it a studio LP; decision and support documented in evidence-notes.
- *Atom Heart Mother*: the 23-minute suite features brass, choir and cello arranged by Ron Geesin. `symphonicprog` is largely suite-scoped. “Alan's Psychedelic Breakfast” is a studio collage; source strength is not uniform across production techniques.
- *Meddle*: EMS VCS3 is on “One of These Days” per track credits. The single-note Leslie-piano and wah-guitar seagull of “Echoes” must not be miscredited as digital processing. The album-wide groove/experimental judgments account for quiet side-one tracks.
- *The Dark Side of the Moon*: physical tape loops, EMS VCS3/Synthi AKS, organ/piano, saxophone and wordless Clare Torry vocals are documented. Alan Parsons is engineer **not** producer. The personal influences field is blank because musical parallels are not documented direct influences on this particular release.
- `confidence` measures evidence of source-backed claims, not mathematical certainty of editorial 0–5 scales; all `status=draft`.

## Phase 03 (next, new rows only)
1. **Wish You Were Here** (1975, studio; already in catalogue)
2. **Animals** (1977, studio; already in catalogue)
3. **The Wall** (1979, studio; already in catalogue)
4. **The Final Cut** (1983, studio; add to catalogue)

## File inventory
- `pinkfloyd_phase02_rows_ONLY.csv` — exact 27 Fandome columns; four new rows
- `pinkfloyd_phase02_sources.csv` — source-by-album citations
- `pinkfloyd_phase02_genre_evidence.csv` — every listed genre individually justified and scoped
- `pinkfloyd_phase02_evidence-notes.md` — detailed reasoning and expert disagreements
- `pinkfloyd_phase02_catalog-audit.csv` — catalogue state and additions
- `CLAUDE_IMPORT.md` — this import guide

**Import**: add catalog rows and `symphonicprog` / its genre family first, append new descriptor rows without overwriting earlier phases, run `npx vite-node scripts/validate-descriptors.ts` and the relevant test suite. Research package does not modify GitHub.
