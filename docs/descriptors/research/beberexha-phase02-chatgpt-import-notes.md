# CLAUDE_IMPORT.md — Bebe Rexha, Phase 02 (strict incremental)

Cut-off: **2026-10-26**. GitHub `giampierofiorelli/Fandome`, branch `descriptors`, **read-only**; **CURRENT VERIFICATION:** `catalog.ts` already lists artist `beberexha` and all seven releases. `docs/descriptors/beberexha.csv` already contains the four Phase 01 rows only (rechecked on branch `descriptors` on 26 Oct 2026). DO NOT add catalog entries or repeat them. Append ONLY the three Phase 02 rows.

## Phase 02 only — THREE new 27-column rows

| ID | Original title | Year | Type |
|---|---|---:|---|
| `beberexha-bettermistakes` | Better Mistakes | 2021 | studio |
| `beberexha-bebe` | Bebe | 2023 | studio |
| `beberexha-dirtyblonde` | DIRTY BLONDE | 2026 | studio |

**No Phase 01 rows** included. EPs and *Expectations* from prior ZIP must not be re-imported. No live shows, remix reissues, guest-only releases or compilations.

## Catalog updates

- **NO catalog additions or changes needed.** Confirmed current `catalog.ts` artist `beberexha` already lists *I Don’t Wanna Grow Up*, both *All Your Fault* EPs, *Expectations*, *Better Mistakes*, *Bebe* and *Dirty Blonde*. Preserve the catalogue title casing `Dirty Blonde` even though the 2026 digital edition is styled `DIRTY BLONDE` in the row, unless Claude's validator requires the catalogue display title.
- **Already described in `docs/descriptors/beberexha.csv`:** all FOUR Phase 01 releases.
- **New descriptors only:** *Better Mistakes* (2021), *Bebe* (2023), *DIRTY BLONDE* (2026). The catalog IDs are as in this file and already have catalogue entities.
- **No co-billed album**: David Guetta / Faithless / Dolly Parton / Snoop Dogg etc are track participants or featured artists in this context, not artists jointly credited on the album release. `coBilled.ts` unchanged.

## Add token(s) to allowed lists before validating

**Genres** to add in `src/data/scenes.ts`, `src/data/genreFamilies.ts` and the validator token set as appropriate:

- `emorap` — LA Times describes *Die for a Man* on *Better Mistakes* as emo-rap, track only. Keep separate from `hiphop`.
- `melodichouse` — Album of the Year metadata names melodic house on *DIRTY BLONDE*; **lower-confidence community tag**, not universally validated.
- `festivalprogressivehouse` — Album of the Year metadata names festival progressive house on *DIRTY BLONDE*; **lower-confidence community tag**, not universally validated.
- `jerseybounce` — official album text specifically describes *Drink and a Little Love* as Jersey-bounce-meets-country; do **not** equate this with `jerseyclub` without evidence.

**Instruments:** add `resonatorguitar` (generic resonator guitar specifically credited by MusicBrainz on *Drink and a Little Love*). **Production:** no new tokens.

## Critical caveats and edition choices

1. *Better Mistakes*: contemporary announcement and distributor release establish May 7 2021, while AllMusic's header gives April 23; year is uncontroversial.
2. *Bebe*: original 2023 album 12 tracks; 2022 David Guetta duet *I'm Good (Blue)* belongs on it, but is not a second LP or evidence Guetta produced other songs. Rexha's `ExecutiveProducer` tag is **not** main producer credit.
3. *DIRTY BLONDE*: primary standard **13-track digital** album June 12 2026. CD and LP have **14 tracks** adding *I Don't Need Anything*; don't create new descriptor or include bonus in base-album-weighted scores. Visual album is multimedia variant. `en|sq` correctly preserves the small but explicit Albanian lyric in *Çike Çike*.
4. Qobuz 2026 and MusicBrainz physical credit lists disagree on some production contributors; the producer row primarily uses Qobuz's explicitly credited Producer role (not `ComposerLyricist`). See per-album notes before adding anyone else.
5. No sampled artist in `influenced_by` unless direct musical influence is independently documented. *Bebe* has an explicit Fleetwood Mac / Stevie Nicks artistic reference; *DIRTY BLONDE* mentions Madonna visually, **not as a documented musical influence**.
6. *DIRTY BLONDE* has three subgenre tags from lower-confidence Album of the Year genre metadata; consider dropping them during human validation if the standard requires professional-critic corroboration. Its official/critic broad genre account is strong.
7. **Strict instrument rule already applied:** `synthbass` omitted from 2026 despite 808 bassline language; `drummachine` omitted from 2021 despite rhythm programming; `resonatorguitar` retained as exact new token instead of guessing `dobro`.

## Artist influences / next phase

Artist-wide influences are already documented in **Phase 01**. Do not repeat them here. This phase **completes the selected original album and substantive EP discography through 26 Oct 2026**. No Phase 03 planned until a new original release appears.

## Contents (six files)

- `CLAUDE_IMPORT.md`
- `beberexha_phase02_rows_ONLY.csv` (exactly 3 new rows, 27 columns)
- `beberexha_phase02_sources.csv`
- `beberexha_phase02_genre_evidence.csv` (one entry per emitted genre)
- `beberexha_phase02_evidence-notes.md`
- `beberexha_phase02_catalog-audit.csv`
