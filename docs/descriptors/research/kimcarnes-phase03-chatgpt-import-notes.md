# CLAUDE_IMPORT — Kim Carnes, Phase 03

**Fandome ID:** `kimcarnes`. **Branch:** `descriptors` (read only). **State:** `draft`, 4 new rows, strictly incremental.

## New studio albums

| album_id | title | year | type |
|---|---|---:|---|
| `kimcarnes-barkingatairplanes` | *Barking at Airplanes* | 1985 | studio |
| `kimcarnes-lighthouse` | *Light House* | 1986 | studio |
| `kimcarnes-viewfromthehouse` | *View from the House* | 1988 | studio |
| `kimcarnes-checkinouttheghosts` | *Checkin' Out the Ghosts* | 1991 | studio |

All four album rows require catalog insertion **if still absent** from `src/data/catalog.ts`. No record repeats Phase 01 or 02. Recheck the current branch immediately before import: the catalog was not yet listing Kim Carnes at research time and can have been changed separately by Claude.

## Included files

1. `kimcarnes_phase03_rows_ONLY.csv`: 4 album rows, exact 27-column import header
2. `kimcarnes_phase03_sources.csv`: sources, specific assertions and evidence strength
3. `kimcarnes_phase03_genre_evidence.csv`: one row per genre, ranked with album / track / texture scope
4. `kimcarnes_phase03_evidence-notes.md`: granular judgments, credits and unresolved questions
5. `kimcarnes_phase03_catalog-audit.csv`: only four new album additions
6. `CLAUDE_IMPORT.md`: this guide

## New vocabulary tokens

No new `Genre` tokens required for these rows. Check `fiddle`, `linn9000` and `dx7` against the latest instrument and production vocabularies. `fiddle` is not in the old `instruments.ts` vocabulary although the player credit is explicitly **fiddle**, so add the new instrument token `fiddle` (or merge with `violin` only if the site has a documented fiddle/violin equivalence policy). All other instruments and production tokens are known from the guide.

## Credits and editions to retain

- *Barking at Airplanes*: Carnes, Cuomo and Hitchings all genuinely produce, the last only on “Abadabadango”; “DMX” equipment identification is insufficient for a precise model token. Carnes mentions Prophet synth warmth in a later interview but no secure Prophet model for this record.
- *Light House*: Val Garay, Linn 9000 credited; *Lighthouse* on later reissue is an alternate spelling, not a separate 1986 album.
- *View from the House*: Carnes and Jimmy Bowen, with Bill Cuomo producing one track; Nashville acoustic ensemble is the distinctive album sound. One song's programmed drums do not define the album.
- *Checkin' Out the Ghosts*: **Japan-only 1991 original**; Joey Carbone on the whole album and Kim Carnes on nine of ten tracks. `Gypsy Honeymoon: The Best of Kim Carnes` (1993) is a **compilation** and must be excluded.

## Source and confidence guidance

A producer, collaborator, covered songwriter or guest musician is not automatically an influence. All four `influenced_by` fields deliberately remain blank. The comparative artists in `sounds_like` are editorial sonic judgments. AllMusic covers primary styles, specific original sleeve transcriptions support the instrument lists; do not infer hardware models from genre. `folkrock` (1988) are lower-confidence secondary descriptors and can be removed if the importer requires exact critical label matches.

## Next and final phase

Phase 04: *Chasin' Wild Trains* (2004), a single album, unless a newer studio album has been released and verified at import time. Do not include the *Gypsy Honeymoon* or *Universal Songs* compilations.


## Claude import note

- 4 rows appended; albums already in the catalogue.
- fiddle mapped to violin (same instrument), no new token.
- Barking at Airplanes: Lindsey Buckingham removed from sounds_like: he plays guitar on the album (a guest).
- Reception researched by Claude.
