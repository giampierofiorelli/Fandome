# Fandome import — Bonnie Tyler, Phase 02

**Artist ID:** `bonnietyler` (proposed in Phase 01). **Batch:** four new studio albums in chronological order. All rows are `draft` and use the 27-column header defined by `docs/album-descriptors-guide.md`. This is strictly incremental: none of the 1977–81 Phase 01 rows are repeated.

## Rows and catalogue actions

| album_id | Title | Original year | Action |
| --- | --- | --- | --- |
| `bonnietyler-fasterthanthespeedofnight` | Faster Than the Speed of Night | 1983 | ADD |
| `bonnietyler-secretdreamsandforbiddenfire` | Secret Dreams and Forbidden Fire | 1986 | ADD |
| `bonnietyler-hideyourheart` | Hide Your Heart | 1988 | ADD |
| `bonnietyler-bitterblue` | Bitterblue | 1991 | ADD |

The GitHub `descriptors` branch checked on 28 October 2026 had no `bonnietyler` entry in `catalog.ts` or `seed.ts` and no `docs/descriptors/bonnietyler.csv`, so the existing Phase 01 delivery may not yet have been merged. Claude should add the artist **once**, preserve the Phase 01 material, and append only the four rows from this ZIP. Re-check the repository immediately before import.

## New tokens, release identities, relationships

- **New genre tokens:** none. All style labels in the rows use Fandome's existing `Genre` union.
- **New instrument/production tokens:** none.
- **Co-billed releases:** none. The Todd Rundgren and Dan Hartman duets are individual album tracks, not separately co-billed albums.
- **Regional alias:** the 1988 US *Notes from America* edition is *Hide Your Heart*, not a new studio album.
- **1986 editions:** original LP 8 songs; CD 9; cassette 10, with format-specific additions. Keep one album row.
- **1983 credits:** CBS printed John Jansen as associate producer; newer Sony/Qobuz digital metadata calls him co-producer. Main producer entered is Jim Steinman. Review the discrepancy before changing the field.
- **1986 credits:** the original production credit is Jim Steinman; do not bulk-convert keyboard players, engineers and arrangers into co-producers from aggregated websites.
- **1991 credits:** six main producers across tracks plus Luis Rodriguez co-producer. Track allocations are in `evidence-notes.md`.
- **Influences:** album `influenced_by` for the two Steinman records includes Meat Loaf (*Bat Out of Hell*) only because Bonnie Tyler explicitly described wanting songs modelled on Steinman's Meat Loaf album, in a firsthand 1986 interview: https://www.jimsteinman.com/btyler1.htm. Existing artist-wide Tina Turner/Janis Joplin influences from Phase 01 must remain artist-wide; avoid adding them automatically to album rows.
- **Conservative equipment:** album-specific source-backed technique tokens only; no invented models for synths, sequencers or studio software.

## Files inside this ZIP

1. `CLAUDE_IMPORT.md`
2. `bonnietyler_phase02_rows_ONLY.csv`
3. `bonnietyler_phase02_sources.csv`
4. `bonnietyler_phase02_genre_evidence.csv`
5. `bonnietyler_phase02_evidence-notes.md`
6. `bonnietyler_phase02_catalog-audit.csv`

Use rows_ONLY.csv to append to `docs/descriptors/bonnietyler.csv`, resolve catalog additions, then run `npx vite-node scripts/validate-descriptors.ts` and project tests. Do not import the genre evidence as album rows. Keep album-independent comparison text separate from confirmed historical influences.

## Next phase — Phase 03

*Angel Heart* (1992), *Silhouette in Red* (1993), *Free Spirit* (1995) and *All in One Voice* (late-1990s; verify original territorial release year before authoring). No compilation or live album.


## Claude import note

- 4 rows appended; no new tokens; albums already in the catalogue.
- Bitterblue: Modern Talking removed from sounds_like: Dieter Bohlen, their member, produced part of the album.
- Steinman albums: Meat Loaf (Bat Out of Hell) kept as influence (Tyler asked for songs modelled on it, 1986 interview) and likeness; Meat Loaf is not Steinman's band.
- Reception researched by Claude.
