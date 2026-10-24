# CLAUDE IMPORT — Lady Gaga, Phase 03 (increment only)

**As-of:** 2026-10-24. **Branch reviewed:** `descriptors`. **Artist ID:** `gaga`. **Status:** draft.

## New rows, exactly four

- `gaga-dawnofchromatica` — **Dawn of Chromatica** (2021, `remix`)
- `gaga-loveforsale` — **Love for Sale** (2021, `studio`)
- `gaga-harlequin` — **Harlequin** (2024, `studio`)
- `gaga-jokerfolieadeuxmusicfromthemotionpicture` — **Joker: Folie à Deux (Music From the Motion Picture)** (2024, `soundtrack`)

## Catalogue additions

All four entries are missing from `seed.ts` and the artist catalogue. Add each title/year/type from `gaga_phase03_catalog-audit.csv` and use the exact `album_id` above. Preserve existing Gaga entries with special `g-` IDs. These are **four additional albums only**: do not overwrite the 8 imported Phase 01–02 rows, and do not add them a second time to another artist.

## Genre tokens not in current `scenes.ts`

- `deconstructedclub`: proposed parent family `electronic|experimental (subgenre of electronic club, experimental editing)`. Add to `Genre`, display labels, `GENRE_PARENTS` and descriptor validator before import.
- `divahouse`: proposed parent family `house|dance`. Add to `Genre`, display labels, `GENRE_PARENTS` and descriptor validator before import.
- `glitchpop`: proposed parent family `electropop|experimentalpop`. Add to `Genre`, display labels, `GENRE_PARENTS` and descriptor validator before import.
- `standards`: proposed parent family `traditionalpop|jazz`. Add to `Genre`, display labels, `GENRE_PARENTS` and descriptor validator before import.
- `easylistening`: proposed parent family `pop`. Add to `Genre`, display labels, `GENRE_PARENTS` and descriptor validator before import.
- `showtunes`: proposed parent family `traditionalpop|soundtrack`. Add to `Genre`, display labels, `GENRE_PARENTS` and descriptor validator before import.
- `surfpunk`: proposed parent family `surfrock|punk`. Add to `Genre`, display labels, `GENRE_PARENTS` and descriptor validator before import.

All other genre tokens are present in the checked `descriptors` branch (some were added for Gaga Phase 02). No limit on genre, voice, theme, influences or producer values; only `notes` capped at 15 words.

## Caveats

- **Dawn of Chromatica**: standalone 2021 remix album, no original-album track re-import. Its producer cell is deliberately blank: Qobuz formally lists remixers, while a secondary index inconsistently labels those same people as producers; BloodPop is documented as executive producer. Keep the uncertain production role out until credits resolve.
- **Love for Sale**: 12-track original edition with Tony Bennett, not deluxe; Dae Bennett is producer. Cole Porter is the songwriter of repertoire, **not** the album producer.
- **Harlequin**: 13-track Sept 27 studio companion by Gaga (not a movie soundtrack recording). Gaga, Benjamin Rice, BloodPop credited producers; Michael Polansky is co-writer/arranger on some songs, not a producer by those credits.
- **Joker: Folie à Deux (Music From the Motion Picture)**: 16-track Oct 4 vocal cast soundtrack; NOT *Harlequin* and NOT Hildur Guðnadóttir’s instrumental score. Long ID is correct slug of exact full release title. Co-artist is Joaquin Phoenix; primary Fandome row remains under Lady Gaga.
- Whole-album vs isolated-track and taxonomy-only genres are differentiated in `genre_evidence.csv`. Do not present low-scope token matches as album-wide without checking the ranker. `influenced_by` deliberately empty when a direct creative influence is not documented.

## Six files

`gaga_phase03_rows_ONLY.csv` (25 columns, 4 increment-only rows), `gaga_phase03_sources.csv` (original URLs with support), `gaga_phase03_genre_evidence.csv` (individual genre and scope), `gaga_phase03_evidence-notes.md` (all eight scores, producers, ambiguities, disputes), `gaga_phase03_catalog-audit.csv` (missing titles and IDs), and this `CLAUDE_IMPORT.md`.

## Next phase

Phase 04: *MAYHEM* (2025), already in seed with exact ID `g-mayhem`. Verify independent later album-scale remixes/collaborations that qualify, without adding unrelated guest features or future releases.

