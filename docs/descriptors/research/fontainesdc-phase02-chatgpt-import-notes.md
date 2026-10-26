# Fandome — Fontaines D.C., Phase 02 (final studio phase)

Research cutoff: **26 October 2026**. **Incremental ZIP**: contains just **two NEW descriptor rows** (Romance and Dopamine Chamber), not Phase 01 rows, no other artists, no live/compilation/EP reissues.

## Import rows

| album_id | Title | Original release | Type |
|---|---|---|---|
| `fontainesdc-romance` | Romance | 23 August 2024 | studio |
| `fontainesdc-dopaminechamber` | Dopamine Chamber | 16 October 2026 | studio |

**ARTIST ID and catalogue precondition:** As previously verified on `descriptors` branch on 26 October 2026, `src/data/catalog.ts` and `src/data/seed.ts` had no Fontaines D.C. artist, and `docs/descriptors/fontainesdc.csv` did not exist. `fontainesdc` is the **proposed** room ID. If Claude has since imported Phase 01, keep its exact already-created ID and add only these two album rows. If it has not, create the room and all five studio albums from the Phase 01 catalogue audit first. If another ID has since been chosen, remap phase IDs consistently and verify no duplicates. Never import files or rows from `docs/descriptors/mina.csv` into this artist.

Catalogue source (all five original studio albums): https://fontainesdc.com/pages/music

## Albums to add (if still missing)

1. `fontainesdc-romance`: **Romance** (2024), studio.
2. `fontainesdc-dopaminechamber`: **Dopamine Chamber** (2026), studio.

These are both released as of the cutoff. The 2025 deluxe reissue of Romance is *not* an independent album. No other original studio releases remain after phase 02 through this date.

## Co-billed album audit

**None.** `Where Is Gone?` is the **song-level** credit 'Fontaines D.C. with ROSALÍA', track 8 on Dopamine Chamber. The album itself is billed to Fontaines D.C. alone. Do **not** add an album entry to `coBilled.ts`, and do not assign Rosalía as album producer.

## NEW genre tokens this phase (must be added to scenes.ts and genreFamilies.ts)

- `numetal` — nu metal; Romance track-level touch, supported by The Guardian's 2024 review and band interviews. Genre family suggestion: `['metal', 'rock']` (editorial schema choice for Claude).
- `janglepop` — jangle pop; Romance track-scoped AOTY genre metadata, primarily light chiming-guitar tracks. Genre family suggestion: `['pop', 'indie']` (editorial schema choice for Claude).

All other genre tokens in the Phase 02 CSV are already in the branch's published genre list as consulted on 26 October 2026. Do not mistake aesthetic imagery (`cyberpunk`, `cinematic`, `dystopian`) or sampling sources for genre labels.

## NEW instruments

**None.** Current instrument tokens cover all selected main instruments. The track-credited six-string bass is encoded `bass` rather than inventing a model-specific instrumental subtype. Mellotron is an instrument token, not inherently a software model.

## NEW production tokens (add to production.ts)

- `yamaharefacecp` — Yamaha Reface CP, explicit synth/keyboard model on Romance in MusicBrainz credits. Classed as a model token; source labels are not evidence of underlying synthesis technology.
- `ringmodulation` — ring modulation, MusicBrainz credits Carlos O'Connell with the effect on Romance track *Bug*. This is an audio effect, not an unnamed machine model.

`minimoog`, `sampling`, `programming`, `stringarrangements`, `fieldrecordings`, `falsetto`, `distortion`, `layeredvocals` and `overdubbing` are existing allowed production tokens. No unverified particular DAW, drum-machine model or pedal version is guessed.

## MINA — verified direct album influence, priority evidence

**NPR first-person interview, 12 October 2026**, Ann Powers interviewing **Grian Chatten** (original NPR content syndicated by WXXI):
https://www.wxxinews.org/npr-news/2026-10-12/fontaines-d-c-s-decadent-dystopian-vision-of-our-time

Chatten names **Mina**, the Italian singer, as a musical source for the **human, comforting, emotionally warm** side he sought on *Dopamine Chamber*. He contrasts this with a dystopian, more industrial spectrum influenced by **John Maus, Depeche Mode, New Order and The Cure's Disintegration**. These five belong in *Dopamine Chamber*'s `influenced_by`, with **Mina first**. The record's use of 1960s Italian-pop string vocabulary is independently described in the record's press materials (via RTÉ). Mina is **not** a producer, guest vocalist, sample, duet, co-billed artist or covered songwriter here. Do not retroactively insert Mina as an influence on Dogrel/A Hero's Death/Skinty Fia without separate evidence. Nor is the unrelated Fandome singer Mina included in this package's CSV rows.

## Other important source and credit caveats

- **James Ford** is credited as actual producer on both original releases. On Dopamine Chamber aggregated Tracknack credits mention Marta Salogni, Carlos O'Connell and Tom Coll as producers; the 11 individual MusicBrainz master-recording credits instead identify Ford as producer, and Marta as engineer/instrumentalist and Carlos/Tom as programming or musicians. Do not merge until authoritative original liner credits substantiate a co-production claim. The disparity is documented in the evidence notes.
- `language=en` on both. Rosalía sings in English on *Where Is Gone?*, so `es` would be wrong. Music references to Italy/Spain do not establish vocal language.
- MusicBrainz identifies actual strings, bass, synths and instruments; studio interviews document methods. A sonic comparison stays in `sounds_like`, not `influenced_by` without first-person/critic influence attribution.
- Numeric scores represent Fandome’s album-wide editorial judgements. Ten-day-old Dopamine Chamber receives `confidence=medium` because initial reviews differ sharply (Financial Times vs Guardian/NME), although specific credits and the Mina quote are primary evidence.
- `notes` alone are limited to 15 words; every other list field is uncapped.
- *Romance* official album has 11 tracks; *Dopamine Chamber* also has 11. One Rolling Stone UK review inaccurately states 12 for Dopamine Chamber; prefer official tracklist and MusicBrainz.

## File manifest

- `CLAUDE_IMPORT.md` — this file.
- `fontainesdc_phase02_rows_ONLY.csv` — 27-column header and exactly 2 NEW rows.
- `fontainesdc_phase02_sources.csv` — documentary sources with support and confidence.
- `fontainesdc_phase02_genre_evidence.csv` — individual genre source plus album/track/texture scope.
- `fontainesdc_phase02_evidence-notes.md` — source-based reasoning for non-obvious cells and critical discrepancies.
- `fontainesdc_phase02_catalog-audit.csv` — both proposed ids, missing status and catalogue action.

## Next phase

**None planned:** five released studio albums (2019, 2020, 2022, 2024, 2026) are covered by Phase 01 + Phase 02. Do not fill the series with live recordings or greatest-hits albums. If new original albums are subsequently released, start a new strictly incremental Phase 03 after checking the latest Fandome branch and release evidence.
