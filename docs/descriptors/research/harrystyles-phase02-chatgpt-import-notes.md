# Fandome import — Harry Styles — Phase 02

**Research cutoff:** 27 October 2026  
**Artist ID:** `harrystyles`  
**Phase type:** STRICTLY incremental; one new studio-album row. No live, concert film, compilation, remixes or previously delivered rows.  
**Status:** `draft`; Claude performs the second-person editorial review, catalog update and validator tests.  
**GitHub:** branch `descriptors` read-only; `docs/descriptors/harrystyles.csv` not yet present at review time. This does **not** make Phase 01's three delivered rows part of Phase 02.

## Phase contents (new rows only)

| album_id | Title | Year | Type | Catalog status |
|---|---|---:|---|---|
| `harrystyles-kissallthetimediscooccasionally` | *Kiss All the Time. Disco, Occasionally.* | 2026 | studio | **Add** |

## Catalogue changes required BEFORE descriptor import

In `src/data/catalog.ts`, within the existing artist ID `harrystyles` release array, add the studio-album entry `['Kiss All the Time. Disco, Occasionally.', 2026]`. Use the deterministic ID `harrystyles-kissallthetimediscooccasionally` and **retain all** existing album entries. Original release date: **6 March 2026**. Official evidence: https://www.sonymusic.ca/press_release/harry-styles-kiss-all-the-time-disco-occasionally-available-everywhere-today and https://store-uk.hstyles.co.uk/products/standard-cd.

**Co-billed albums:** none. Guests include Tom Skinner, Ellie Rowsell and the House Gospel Choir but the album's billing is only **Harry Styles**. No change to `coBilled.ts`.

## New tokens to add

| Category | New exact token | Album evidence |
|---|---|---|
| Genre | `balearic` | Craig McLean, The Blend, describes *Aperture* with Balearic and electro components; not interchangeably `balearicbeat` or `balearichouse`. |
| Instrument | `vibraphone` | Sam Wilson's credited vibraphone on *Coming Up Roses* in Pitchfork's original credits transcription. |
| Instrument | `spanishguitar` | AP reviewer hears Spanish guitars on *Ready, Steady, Go!*; this is a professional review description rather than a formal instrument/session credit. Review token choice. |
| Production | `modularsynth` | Kid Harpoon describes his patched modular instrument making the distinctive *Aperture* sound (Spotify Songlore, reported by MusicRadar, 24 Oct 2026). |

All other 2026-row genre/instrument/production tokens are already in the inspected source lists. Do not conflate `frenchhouse` with `frenchtouch`, `synthpop` with `electropop`, or `eventideh910` with an unrelated Eventide model. `marimba`, `englishhorn`, `celesta` and `tr909` already exist in their respective allowed lists.

## Evidence and credits to preserve

- **Primary producers:** Kid Harpoon; Tyler Johnson. Kid Harpoon produced every track; Johnson has specific *co-producer* credits, distinct from his additional-production-only tracks.
- **Machines:** Roland TR-909 is explicitly documented by producer Kid Harpoon on *Aperture*. His unspecified modular rig is evidenced. A reported **Eventide HS3000 SE** does not match manufacturer nomenclature **H3000 SE** and is intentionally omitted from the production tokens until exact identification is certain. Further explanation in evidence notes.
- **Musical influences** are carefully separated from `sounds_like`: direct Harry Styles attributions include LCD Soundsystem, Floating Points and Jamie xx, with AP reporting his reference to The Durutti Column. Critics support other listed names, with weaker evidence called out in the notes. Being a guest player, sampled artist or person referenced in a lyric is never sufficient.
- **Media caveats:** live-show synthesizer rigs and the Netflix live concert do **not** prove equipment on the 2026 studio master. His stated GarageBand phone songwriting sketches likewise do **not** prove that the released songs were produced with GarageBand. The BBC / NME and critics disagree about the artistic outcome; this remains `draft` for review.

## Files

1. `harrystyles_phase02_rows_ONLY.csv` — **one** 27-column row.
2. `harrystyles_phase02_sources.csv` — bibliographic / credit links, including 24 Oct 2026 producer testimony.
3. `harrystyles_phase02_genre_evidence.csv` — **one line for each of 21** genre tokens, with a scope field.
4. `harrystyles_phase02_evidence-notes.md` — eight scale decisions, instrumentation and production details, credits, caveats and disagreements.
5. `harrystyles_phase02_catalog-audit.csv` — **one** new catalogue addition.
6. `CLAUDE_IMPORT.md` — these instructions.

## Next phase

**None planned as of 27 October 2026.** All **four released Harry Styles solo studio albums** have now been assigned to Phase 01 (2017, 2019 and 2022) or this Phase 02 (2026). Do not create Phase 03 from concert albums, archival compilations, unreleased albums or reissues. Only conduct additional phases if qualifying **new music is released** or an important independently billed EP/other qualifying project is found with documented grounds.
