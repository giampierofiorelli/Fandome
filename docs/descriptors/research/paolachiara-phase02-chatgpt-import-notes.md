# Fandome import — Paola & Chiara — Phase 02

Branch checked (read-only): `descriptors`, date **25 October 2026**. Artist ID: **`paolachiara`**. The published `docs/descriptors/paolachiara.csv` still returned 404 when this phase was checked; do not assume the Phase 01 ZIP has been merged. This ZIP intentionally contains only these four new albums.

## Strictly incremental phase contents

| album_id | Official album | Original year | type | Catalogue action |
|---|---|---:|---|---|
| `paolachiara-blu` | Blu | 2004 | studio | ADD |
| `paolachiara-winthegame` | Win the Game | 2007 | studio | ADD |
| `paolachiara-milleluci` | Milleluci | 2010 | studio | ADD |
| `paolachiara-giungla` | Giungla | 2013 | studio | ADD |

Current `src/data/catalog.ts` lists only `Festival` (2002) for Paola & Chiara. None of the four above appears there. Prior Phase 01 contains `Ci chiamano bambine`, `Giornata storica`, `Television`, `Festival`; **never re-import/rebuild those rows from this ZIP**.

## Six files supplied

- `paolachiara_phase02_rows_ONLY.csv` — header + exactly four new rows; **27 columns**.
- `paolachiara_phase02_sources.csv` — album-level documented sources and evidentiary roles.
- `paolachiara_phase02_genre_evidence.csv` — one row per genre, with scope (`whole album`, `some tracks`, `texture`).
- `paolachiara_phase02_evidence-notes.md` — scale reasoning, instrument and production justification, and critic disagreements.
- `paolachiara_phase02_catalog-audit.csv` — four albums absent from catalogue and descriptor file.
- `CLAUDE_IMPORT.md` — these import instructions.

## New tokens to add before validating

- **Genre:** `rap` (some tracks of *Giungla*, named explicitly by Rockol). Keep `hiphop` distinct; decide parent (`hiphop`) in genreFamilies.ts and validate taxonomy.
- **Production:** `programming` (Blu and Win the Game, generic credited programming; do not silently reinterpret as `drumprogramming` or `synthprogramming`). Add to `src/data/production.ts` with a human-readable label or, if not accepted, remove token and leave production empty rather than guess.
- **Instruments:** none. `guitar` is already present in `src/data/instruments.ts` and the current guide; it is used on Blu since credits do not specify acoustic or electric guitar.

## Multi-artist records

No new co-billed album-level records for this phase. The album *Giungla* features **Moreno** on `Tu devi essere pazzo` and **Razza Krasta** on `Divertiamoci (perché c'è feeling)`; featured performers do not create a co-billed *album*. A named Ron Trent remix on *Win the Game* similarly does not alter album ownership.

## Caveats and edition handling

- *Blu*: Qobuz lists Phil Palmer and Andrea Zuppini as **producer on its first track only**; keep their scope narrow. A 2004 source identifies Stevie Wonder, early Michael Jackson, Sade and Wham! as direct references.
- *Win the Game*: original 2007 release, despite the 2006 phonogram date on current digital listings. Base record predominantly English; Italian songs plus Spanish CD bonus. Independent-label Trepertre release. Secondary album credits disagree with AllMusic on Tommy Vee/Michele Monestiroli vs Marcello Misitano; verify original inner sleeve.
- *Milleluci*: original title is a single word, unlike some Qobuz displays. Nine-track core edition is in Italian; remixes and Spanish versions are deluxe extras. Five producers listed because contemporary reports describe Bini, Anzaldi, Monestiroli as production collaborators, while some catalog summaries name only the sisters. `production` blank due lack of identified equipment or effects.
- *Giungla*: standard 12-song body, plus some editions carry remix/Chinese-version bonus tracks. `it|zh` includes that Chinese-language bonus; adjust to `it` if catalog uses 12-track core only. `rap` is limited to features. Artist influence from Katy Perry / Christina Aguilera is a critic's statement, not artist testimony.

## Next phase

**Phase 03 (conditional / optional)**: *Per sempre* (2023), `compilation`, major reunion album of re-recorded hits and documented collaborations. It may merit a separate phase because of its chart/collaboration significance, but **do not** treat as a ninth original studio album. Verify exact featured-artist credits per track and avoid importing it if a future accepted descriptor already exists. The studio discography from 1997–2013 is complete across phases 01 and 02.

## Import steps for Claude

1. Read the source and notes files, reconcile all caveats; add four catalogue items using exact IDs; preserve any already-present rows.
2. Add `rap` and `programming` or explicitly abstain when evidence is insufficient; never map unknown values to false synonyms.
3. Import *only* the four Phase 02 records into `docs/descriptors/paolachiara.csv`, appending to existing content or creating it if absent, without changing Phase 01 rows.
4. Run `npx vite-node scripts/validate-descriptors.ts` and repository test suite, resolve identified schema and source concerns, and retain `status=draft` pending independent review.
