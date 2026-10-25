# The Prodigy — Fandome Phase 01 / Claude import instructions

**Research snapshot:** 25 October 2026. One artist, four strictly new records. All 27 columns; `status=draft` throughout. Files have not been written to GitHub.

## Phase contents

- `prodigy-experience` — *Experience* (1992), `studio`
- `prodigy-musicforthejiltedgeneration` — *Music for the Jilted Generation* (1994), `studio`
- `prodigy-thefatoftheland` — *The Fat of the Land* (1997), `studio`
- `prodigy-prodigypresentthedirtchambersessionsvolumeone` — *Prodigy Present: The Dirtchamber Sessions Volume One* (1999), `compilation`, specifically a DJ mix by Liam Howlett

## Catalogue additions

1. **Artist missing:** add The Prodigy under **`prodigy`** in `src/data/catalog.ts` and the artist/scene seeds required by the validator; this is the unambiguous normalized name because no The Prodigy artist ID currently exists in branch `descriptors`.
2. Add **all four** albums above in chronological order (the prior catalogue contains none). The new ID for the 1999 record follows the literal title slug; choose this exact title unless the importer uses a different verified label headline, in which case maintain id/slug consistency.
3. Original release-year is used, not varying market release day. No co-billed credits for phase01. Liam Howlett's solo DJ function in 1999 is a historical billing/credit distinction; **do not** add 50+ sampled artists as co-billed performers.
4. Add genre family mappings and source-supported new tokens before validation.

## New tokens to add (not present in the guide at this snapshot)

**Genres:** `breakbeathardcore` (breakbeat hardcore), `hardcoretechno` (hardcore techno), `breakbeattechno` (breakbeat techno), `raggajungle` (ragga jungle), `funkybreaks` (funky breaks), `acidbreaks` (acid breaks). Add each to `src/data/scenes.ts`, `src/data/genreFamilies.ts`, any strict validator list and to the descriptors guide. Some labels are historical/retrospective; scope is explicit in the genre evidence file.

**Instruments:** none newly needed. `sampler`, `sequencer`, `drummachine`, `synth`, `piano`, `electricguitar`, `flute`, `turntables` already exist.

**Production:** `rolandw30` (Roland W-30 sampler/sequencer), `akais1000` (Akai S1000 sampler), `mackiecr1604` (Mackie CR1604 mixing desk), `mackie8bus` (Mackie analog 8-Bus mixing console), `korgprophecy` (Korg Prophecy synthesizer), `cubase` (Steinberg Cubase), `adatrecording` (ADAT multitrack recording for the DJ mix). The pre-existing `sp1200`, `tr909` and `akais3200` are reused. Source documents support attribution to the respective specific records, not the band's genre.

## Technical and credit caveats

- *Experience*: Howlett says W-30 sequenced the whole album and Akai S1000 expanded sample time. Avoid retroactively assigning the 1996 studio's Akai S3200, Korg Prophecy or Cubase to the 1992 project.
- *Jilted*: Howlett producer on all tracks; **Neil McLellan co-producer only on original CD tracks 4, 5, 7, 9 and 10**, per sleeve notes. Original guitar on `Voodoo People`, flute on `3 Kilos`, both specific contributions rather than album-wide live band.
- *Fat*: Liam is the album producer. Neil McLellan credited engineer, not co-producer. Distorted guitar and Korg synth patches should not be confused with pure sampled guitars. Original UK issue 30 June 1997.
- *Dirtchamber*: XL categorizes as compilation / DJ mix, which is why type is `compilation` rather than `studio`. Mixed/selectively arranged on turntables by Liam, not a new set of performances by the original bands. `producers` intentionally empty. Influence names are **explicitly listed on original booklet**, unlike inferred resemblances. Original UK issue 22 Feb 1999.
- `influenced_by` left empty on first three because named sonic analogues, collaborators or **sample originators** are not sufficient evidence of historical influence.
- `notes` are <=15 words; scales are defensible editorial holistic judgements, not measured signals.

## Exclusions and future work

Excluded in this phase: singles/standard EPs (`What Evil Lurks`, `Charly`, `Everybody in the Place`, `Out of Space`) even when influential, because relevant tracks appear on albums; repackaged `Experience Expanded` and Jilted reissue, and unlicensed bootleg mixes.

**Next phase 02**: *Always Outnumbered, Never Outgunned* (2004); *Invaders Must Die* (2009); *The Day Is My Enemy* (2015); *No Tourists* (2018). Separately audit landmark status of *Their Law: The Singles 1990–2005* and *World's on Fire* (2011 live) before adding any extra phases; don't import as ordinary studio albums.

## Import sequence

1. Review new-artist ID and title slug; add missing catalogue and scene records.
2. Register genuinely absent genre and production tokens and their family/label/validator definitions.
3. Append just the four CSV rows once; review excluded items/edition dates from audit and evidence notes.
4. Run `npx vite-node scripts/validate-descriptors.ts` and project tests. Do not mark reviewed until second-person verification.
