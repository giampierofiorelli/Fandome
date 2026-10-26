# Fandome / Claude import — Tame Impala — Phase 02

**Research date:** 26 October 2026 · Branch `descriptors` read-only · artist ID `tameimpala`.

## Only these new phase-02 records

| album_id | title | year | type | catalog.ts |
|---|---|---:|---|---|
| `tameimpala-theslowrush` | The Slow Rush | 2020 | studio | already present |
| `tameimpala-deadbeat` | Deadbeat | 2025 | studio | already present |

This ZIP is **strictly incremental**. Do not reimport *Tame Impala* (2008 EP), *Innerspeaker*, *Lonerism*, or *Currents*, delivered in phase 01. Existing `docs/descriptors/tameimpala.csv` was absent (404) when checked on branch `descriptors`; avoid overwriting any work the owner/Claude has subsequently imported. Append only if rows not already present. The ZIP contains all **six required deliverables** (27-column rows, source register, genre-level evidence, evidence notes, catalog audit, import note).

## Albums to add to `catalog.ts`

**None for this phase.** Both studio albums appear under `tameimpala` on the `descriptors` branch. The original 2008 EP was marked ADD in phase 01, but is **not part of phase 02**. The five studio albums plus that historical EP conclude the eligible catalogue as of 26 October 2026.

## New token declarations for Claude (check against current source before adding)

**Genres:**
- `clubpsych`: club-psych, Sony Music's *Deadbeat* press release calls the *whole album* this style. Suggested genre parents `electronic`, `psychedelic` (or `neopsychedelia` if preferred for the genre family).
- `lofihouse`: lo-fi house on *Deadbeat*, specifically “No Reply”, based on Pitchfork review. Parents `house`, `electronic`.
- `industrialtechno`: industrial techno on *Deadbeat*, specifically “Ethereal Connection”, based on NME. Parents `techno`, `industrial`.

**Production:**
- `rolandsh1`: Roland SH-1 on *The Slow Rush*, confirmed by Kevin Parker, Sound on Sound (2020).
- `oberheimmatrix6`: Oberheim Matrix 6, *The Slow Rush*, Sound on Sound (2020).
- `oberheimmatrix1000`: Oberheim Matrix 1000, *The Slow Rush*, Sound on Sound (2020).
- `vermonadrm1`: Vermona DRM1 drum synthesizer, *Deadbeat*, Tape Notes (2026) / Mix with the Masters “Dracula”.
- `soundtoysdecapitator`: Soundtoys Decapitator, *Deadbeat*, Mix with the Masters “Dracula” and Tape Notes.
- `soundtoysechoboy`: Soundtoys EchoBoy, *Deadbeat* vocal delay, Tape Notes.
- `valhallaroom`: Valhalla Room reverb, *Deadbeat*, Tape Notes.

**Instruments:** no new instrument tokens. Machine-specific production names remain distinct from `drummachine`, `synth`, and `synthbass` as instruments.

Check repo before adding; the above were compared with `src/data/scenes.ts`, `src/data/production.ts` and `src/data/instruments.ts` on research date. The distinct terms `neodisco` (AllMusic) and `nudisco` (Album of the Year) already exist; do **not** conflate them. `tr707`, `tr808`, `prophet5`, `rolandd50`, `ableton`, `moog`, `autotune`, `analogtape`, `springreverb`, `sampling`, `pitchedvocals`, `layeredvocals` are already recognised.

## Co-billed records

None. Sara(h) Aarons is a co-writer of specific tracks, not a co-billed artist; Loren Humphrey's *additional production* / engineering credit must not enter `producers`. Kevin Parker is the only credited main producer for both albums, per AllMusic.

## Artist influences

Artist-wide `ARTIST INFLUENCES` belong to **phase 01 only** and are not repeated. The present `influenced_by` field gives album/track-specific support only. In particular, “sampled sound”, guest personnel, song quotations or a general career influence do **not** justify album influence without qualified source attribution.

## Source and classification caveats

1. **The Slow Rush** was released 14 February 2020; use original 12-track LP, *not* later B-sides, remixes or the excluded single “Patience”. `tr707` is confirmed on “Glimmer”. An 808-*like* kick on “Borderline” produced by EQ **does not prove TR-808 hardware** on this LP. The songs can sound like samples while being re-performed; the actual spoken audio samples in “Glimmer” and “Tomorrow's Dust” are separately verified.
2. **Deadbeat** was released 17 October 2025 and is within cutoff. Tape Notes (September 2026) and Mix with the Masters (October 2026) are timely **post-release** production accounts. Drums/room capture and actual `tr808|vermonadrm1` are documented. `prophet5|rolandd50` and certain vocal processes are demonstrated on “Dracula”; do not attribute them automatically to all 12 tracks.
3. Critics disagree on *Deadbeat*: Pitchfork and Resident Advisor are skeptical of its club sound, whereas the studio-specialist Tape Op review is positive. The rows describe audible music, not average critical acclaim.
4. Both rows are `draft`. `confidence` applies to the *whole row*. Scales are editorial anchor-relative 0–5, not invented claims from source ratings. `landmark=0` on *Deadbeat* is provisional pending a separate career-importance/reception assessment.

## Files / imports

1. `tameimpala_phase02_rows_ONLY.csv`: exactly two new 27-column rows, no repeats.
2. `tameimpala_phase02_sources.csv`: exact source URLs with field-specific support.
3. `tameimpala_phase02_genre_evidence.csv`: one sourced row per genre per album; explicitly tagged whole album / some tracks / texture.
4. `tameimpala_phase02_evidence-notes.md`: source reasoning for all non-obvious scores, instruments, production, lyrical fields, conflicts.
5. `tameimpala_phase02_catalog-audit.csv`: both album IDs existing.
6. `CLAUDE_IMPORT.md`: this file.

Before validation, add new token types/labels and `GENRE_PARENTS` entries. Append only the two rows, then run `npx vite-node scripts/validate-descriptors.ts` and the repo tests.

## Next phase

**None.** All five released Tame Impala studio albums (2010–2025) and the eligible debut EP (2008, phase 01) have now been covered. Do not schedule unrelated guest-produced albums, festival live recordings, compilations or solo projects as phase 03.
