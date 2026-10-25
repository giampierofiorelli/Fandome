# Fandome — Raffaella Carrà / Phase 03 import (incremental)

Branch: `descriptors`. Artist ID: `carra`. Research cutoff: 25 October 2026.

## Contents — EXACTLY four new album records

| Album ID | Original title | Year | Type |
|---|---|---:|---|
| `carra-raffaella1978` | Raffaella | 1978 | studio |
| `carra-applauso` | Applauso | 1979 | studio |
| `carra-mispendotutto` | Mi spendo tutto | 1980 | studio |
| `carra-raffaellacarra1981` | Raffaella Carrà | 1981 | studio |

Four rows ONLY. No Phase 01/02 rows, no other artists, no international-language duplicates.

## 1971 title collision (must address BEFORE validation)

`catalog.ts` and `docs/descriptors/carra.csv` ALREADY include `carra-raffaella` for **Raffaella (1971)** and `carra-raffaellacarra` for **Raffaella Carrà (1971)**. 1978 and 1981 are DIFFERENT new studio records with the same respective titles. Thus suffix the year in their new unique album IDs: `carra-raffaella1978` and `carra-raffaellacarra1981`, keep original title unchanged. Add all four proposed records to `src/data/catalog.ts` and `src/data/seed.ts` **before** `npx vite-node scripts/validate-descriptors.ts`: until a year-disambiguated ID is registered in `seed.ts`, the validator's naive fallback slug check expects the ID already occupied by 1971 and rejects the necessary suffix. Do not change ID of any existing row. Import only `carra_phase03_rows_ONLY.csv`, appended to existing `docs/descriptors/carra.csv`.

## New genre tokens

**None.** All used tokens (`eurodisco`, `disco`, `pop`, `funk`, `tango`, `schlager`, `showtunes`, `ballad`, `electro`, `italodisco`, `latin`, `latinpop`, `rumba`, `newwave`, `rock`) already appear in `Genre` in `src/data/scenes.ts`, as verified on `descriptors`.

## Caveats

- Crucial: **track-level genres survive**, even if restricted to one song. Follow `carra_phase03_genre_evidence.csv` for confidence and whole album/some tracks scope. Specialist music analysis supplies funk on *Sono nera*, tango on *Tango*, and electro/Italo on *Joggin'*, alongside larger genre labels. Not every track needs to exemplify every album genre.
- *Raffaella* 1978: original Italian CBS edition is benchmark; Spanish version *Hay que venir al sur* should not replace it. *Tango* genuinely tango; *Sono nera* funk; the specialist incorrectly says its year is 1979 although it is on 1978 LP. Sleeve credits Boncompagni album producer; Qobuz adds Ormi co-production for *Black Cat* only. If Claude wants strict album-sleeve-only producer definition, remove Ormi from row and preserve the Qobuz track-specific credit in evidence notes.
- *Applauso*: contains real ballads (official site) AND *Joggin'* electro/Italo instrumental exception. Original sleeve states Boncompagni producer; Vaona/Musso/Ormi arrangers; do not confuse. Spanish *Canta en Español* has different tracks.
- *Mi spendo tutto*: 1980 according to Sony / Rockol / national library original phonogram year, 1981 date according to Carrà's official original-pressing page (19 Jan 1981). Resolve according to Fandome policy but **do not silently overwrite without checking**. The original 1980 *Pedro* and 2024 remix must not be conflated.
- *Raffaella Carrà* 1981: canonical Spanish Hispavox S 90.402 11 tracks. Danilo Vaona produced side A; Paolo Ormi side B. Greek Italian-version and Argentine extra song are variants, not separate original albums. Italo-disco genre is retrospective/contested with rock-new-wave shift.
- Empty `electronic` / `influenced_by` / `sounds_like` cells are deliberate evidence abstentions. All scales use whole-album balance (documented exceptions included) and never genre alone.

## Next phase 04 — pending source verification

1. *Raffaella Carrà '82* (1982) — studio
2. *Fatalità* (1983) — studio
3. *Bolero* (1984) — studio
4. *Fidati!* (1985) — studio

## Files

- `CLAUDE_IMPORT.md` — instructions and scope
- `carra_phase03_rows_ONLY.csv` — strict 25-column incremental rows
- `carra_phase03_sources.csv` — source records with working/publicly found URLs
- `carra_phase03_genre_evidence.csv` — one row per genre per album; track scope explicit
- `carra_phase03_evidence-notes.md` — per-record reasoning and documented disagreements
- `carra_phase03_catalog-audit.csv` — catalogue presence/ID collision
