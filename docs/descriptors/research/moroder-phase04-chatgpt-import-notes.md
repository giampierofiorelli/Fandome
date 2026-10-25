# Fandome / Giorgio Moroder / Phase 04 — Claude import

**READ ONLY SOURCE, IMPORT VIA CLAUDE.** Research cutoff 2026-10-25. Strictly incremental phase; only the four rows below. Do not replace `moroder.csv` with this file: append unique IDs after confirming no intervening commits already imported them.

## Phase contents

| album_id | Original title (Fandome catalog title) | year | type | catalogue at research time |
|---|---|---:|---|---|
| `moroder-americangigolo` | American Gigolo | 1980 | soundtrack | missing |
| `moroder-foxes` | Foxes | 1980 | soundtrack | missing |
| `moroder-catpeople` | Cat People | 1982 | soundtrack | missing |
| `moroder-solitarymen` | Solitary Men | 1983 | studio | missing |

**Six files included:** this file, `moroder_phase04_rows_ONLY.csv` (25 columns, four draft rows), `moroder_phase04_sources.csv`, `moroder_phase04_genre_evidence.csv` (one record for every token used), `moroder_phase04_evidence-notes.md`, `moroder_phase04_catalog-audit.csv`.

## Current repository check
At verification time `src/data/catalog.ts` artist ID `moroder` already listed 1969-1979 releases and 2015 `Déjà Vu`. It **did not yet list Phase 03** (*Love's in You, Love's in Me*, *Midnight Express*, *Music from Battlestar Galactica*, *E=MC²* descriptor only) or the four Phase 04 titles. `docs/descriptors/moroder.csv` included **Phase 01 and 02 rows only**. Phase 03's ZIP already exists from ChatGPT but had not yet been merged. **Do not skip, overwrite or automatically merge Phase 03**: keep its separate handoff and preserve chronological file ordering when Claude imports both phases.

## Add to catalogue
Add only the four entries above to the Giorgio Moroder (`moroder`) array, preserving original titles and years and using canonical generated slugs. They yield the four `moroder-...` IDs shown. Original album credits for *Foxes* say Various Artists; Fandome's Moroder room should nevertheless contain the Moroder-curated soundtrack as a meaningful score/composer-led project, **not** classify every performer as Moroder. *Solitary Men* is jointly credited Moroder and Joe Esposito: record the dual attribution in the evidence notes and/or future collaboration field without inventing a second Fandome row with the same music.

## New genre token
Only **`darkambient`** is absent from the genre list currently used by the Phase 02 branch. AOTY labels *Cat People* `Dark Ambient`, with independent score reviews/producer tape account supporting the dark atmospheric scope. New family proposal: `darkambient: ['ambient','electronic']`. Add it to `src/data/scenes.ts` (`Genre` and labels), `src/data/genreFamilies.ts`, and `scripts/validate-descriptors.ts`, **only if retained after review**. The validator will otherwise reject the Cat People row.

## Caveats to resolve before import
1. **Foxes:** Moroder official page omits original double-LP side-D slow instrumental *Valley of the Dolls*, independently present in original NBLP-2-7206 12-cut discographies. Use original **12** recordings; original LP subcredits for Angel numbers need spot-check for any song-specific extra producers. `producers` contains only Moroder, whom artist page lists as soundtrack producer.
2. **Solitary Men:** original 11 tracks, unlike expanded CD reissues (14 or 18). Original first song occasionally printed *Solitary Man* versus *Solitary Men*; album title stays plural. `producers` has Moroder only. AllMusic reissue credits attribute 'Producer, Production Coordination' to Lauri Kanner; verify whether Kanner actually received *original album producer* credit before adding a second name. Reissue metadata alone is unresolved.
3. **American Gigolo:** original 8-track album excludes unrelated licensed music heard in film. *Hello Mr W.A.M.* arranges Mozart K. 622 Adagio, so `influenced_by` includes Mozart **strictly for this track**, per original sleeve. Moroder himself describes synth score with a disco beat, whereas Blondie is a new-wave band. Faltermeyer is arranger, not album producer.
4. **Cat People:** original 10-song score includes original 1982 Bowie performance, not Bowie's different 1983 remake. Only opening song sung; rest score instrumental. Dark ambient and synthpop genre scope is qualified in evidence notes. Michael Landau/Tim May/Sklar/Forsey are performers, not co-producers.
5. All scales are **album-wide editorial estimates**, and missing values reflect unknowns. Avoid applying the most famous singles' character to the whole soundtrack. `sounds_like` is editorial, `influenced_by` documented only.

## Integration order
- Merge new catalogue titles under ID `moroder`, **then** append only Phase 04 CSV records not already present.
- If `darkambient` is accepted, update all three genre touchpoints; otherwise remove the token and corresponding evidence line from Cat People before importing.
- Run `npx vite-node scripts/validate-descriptors.ts` and existing tests/build. Maintain `draft` pending second review. Never overwrite prior phases.

## Next phase (provisional, must verify dates, credits and standalone soundtrack scope)
**Phase 05 (1983–1984):** *Flashdance* (1983), *Scarface* (1983), *D.C. Cab* (1983), *The NeverEnding Story* (1984). Dates inside 1983 may overlap *Solitary Men*. Prioritize original release ordering by verified date and separate Moroder's tracks from Phil Ramone/other soundtrack producers. Projects *Electric Dreams* (1984), *Metropolis* (1984), *Philip Oakey & Giorgio Moroder* (1985), *Innovisions* (1985) for subsequent passes, assessing significance and whether each is a distinct original release. Munich Machine titles also require dedicated collaboration/artist-alias audit without reintroducing earlier-phase albums.
