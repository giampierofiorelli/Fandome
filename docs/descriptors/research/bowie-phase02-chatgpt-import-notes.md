# David Bowie — Fandome Phase 02 (incremental import)

## Contents: exactly four new studio album descriptors

| album_id | Original title | Year | type | Catalogue action |
|---|---|---:|---|---|
| `bowie-theriseandfallofziggystardustandthespidersfrommars` | The Rise and Fall of Ziggy Stardust and the Spiders from Mars | 1972 | studio | existing (keep ID) |
| `bowie-aladdinsane` | Aladdin Sane | 1973 | studio | ADD |
| `bowie-pinups` | Pin Ups | 1973 | studio | ADD |
| `bowie-diamonddogs` | Diamond Dogs | 1974 | studio | ADD |

Only the four albums above are present in the rows CSV. Do **not** rewrite or duplicate Phase 01: David Bowie (1967), David Bowie (1969)/Space Oddity, The Man Who Sold the World (1970), Hunky Dory (1971).

## Files

1. `bowie_phase02_rows_ONLY.csv` — exactly 27 columns, 4 data rows, status `draft`.
2. `bowie_phase02_sources.csv` — album-level bibliographic documentation with working source URLs.
3. `bowie_phase02_genre_evidence.csv` — one row per genre assignment per album with explicit whole-album / some-tracks scope.
4. `bowie_phase02_evidence-notes.md` — per-album reasoning, limitations, credit disagreements, scale judgments.
5. `bowie_phase02_catalog-audit.csv` — IDs and catalogue updates.
6. `CLAUDE_IMPORT.md` — this handoff.

## Vocabulary to add

- New **genres**: `albumrock` (the AllMusic 'Album Rock' tag), `avantgardejazz` (Mike Garson's description of Aladdin Sane passages). Add both to `src/data/scenes.ts`, `src/data/genreFamilies.ts` (choose justified parent relationships) and validator enumerations. Existing `glamrock`, `artrock`, `experimentalrock`, `protopunk`, `contemporarypoprock`, `rockopera`, `cabaret`, `doowop`, `moog` etc. should be reused.
- New **instrument tokens**: none.
- New **production tokens**: none.

## Release and attribution caveats

- *Pin Ups* release **19 October 1973**. The official `https://www.davidbowie.com/pin-ups` discography page says October 1976, contradicting the official anniversary posts and AllMusic. **Use 1973** (original issue). Treat as `studio`, a newly recorded covers project rather than a compilation of earlier Bowie masters.
- *Diamond Dogs*: album **produced by David Bowie** alone, as in official Bowie discography; Tony Visconti assisted with **mixing** and string work, and should not be imported as album producer. Never treat mixers, string arrangers or writers as co-producers.
- *Ziggy Stardust*: use exact 1972 title and existing slug; 1973 film/live soundtrack is a separate release and **not** this album.
- `influenced_by` is strictly about musician influences. Orwell and Burroughs influenced *Diamond Dogs* literature/lyrics, but must not appear in that column.
- Ken Scott's accounts of rhythm-section recording and first-take vocals span multiple Bowie projects. Technical precision is strongest for *Ziggy*. Others distinguish shared working practice from a documented exact per-track device.
- Do not propagate gear descriptions from modern 5.1/Atmos remixes or 2023 half-speed mastering to original 1970s sessions.
- No known co-billed releases among these four; leave `src/data/coBilled.ts` unchanged.

## Next phase (Phase 03)

1. *Young Americans* (1975)
2. *Station to Station* (1976)
3. *Low* (1977)
4. *“Heroes”* (1977)

Phase 03 must likewise be strictly incremental.
