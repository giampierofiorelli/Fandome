# CLAUDE IMPORT — ENYA phase 01

**Read-only research package**, prepared 2026-10-25. Artist interpreted as **Enya** (Eithne Ní Bhraonáin), not the Enja jazz label. Fandome branch `descriptors` lacks this artist; **create artist ID `enya` in `catalog.ts` (and the corresponding scene metadata) before importing**. Original language primarily English/Irish; country IE, decade 1980, genre family new age / Celtic folk / ambient pop.

## Phase contents (exactly four new rows)

- `enya-enya` — *Enya* (1987), studio. First released under own name; reissued as *The Celts* in 1992 (same album).
- `enya-watermark` — *Watermark* (1988), studio.
- `enya-shepherdmoons` — *Shepherd Moons* (1991), studio.
- `enya-thememoryoftrees` — *The Memory of Trees* (1995), studio.

All 4 albums and the artist currently need new catalogue entries. Do not duplicate rows from any other artist or prior phase. Only this phase's 4 rows are in `enya_phase01_rows_ONLY.csv`.

## Add to catalogue

`['Enya', 1987]`, `['Watermark', 1988]`, `['Shepherd Moons', 1991]`, `['The Memory of Trees', 1995]` under artist `enya`. Implement the artist profile first; update artist-scene mapping and all associated data/seed machinery as required. **No co-billed albums in this phase**.

## Tokens to import (if not already present)

**New genres:** celtic, celticfolk, celticnewage, celticpop, contemporaryceltic, contemporaryinstrumental, etherealwave, ethnicfusion, neoclassicalnewage

Ensure parent mapping in `src/data/genreFamilies.ts`, `scenes.ts`, and the validator's genre whitelist (these are verified source-named terms, not blindly inherited genre equivalents). Reuse existing `newage`, `ambient`, `ambientpop`, `modernclassical`, `electronic`, `folk`, `pop`.

**New instruments:** uilleannpipes, lowwhistle, violin, cornet, cello. `uilleannpipes` is the specific Irish bagpipe, `cornet` is a brass instrument; do not collapse these into `woodwinds`/`brass` when sources name them specifically.

**New production:** juno60, emulatorii, digitaltape, rolandd50. Existing `dx7`, `layeredvocals`, `heavyreverb` remain valid. Exact token `rolandd50` indicates the named Roland D-50; avoid guessing named synthesisers on later albums.

## Important caveats

1. Some catalogues carry **1986** for copyright or recording of the debut. Original UK LP physically catalogued as **1987**, also the year given by AllMusic and Rhino. Original title was **Enya**, not *The Celts*.
2. `The Frog Prince` (1985) is a separately published soundtrack but **primarily performed by others**; it has been researched and excluded by the selective soundtrack-landmark rule. It is **not** a missing studio row.
3. **Watermark:** co-producers Enya and Ross Cullum are included by original MusicBrainz credit; Nicky Ryan producer. No sequencer and no sampled vocal choir (1989 *Sound On Sound* producer interview); 32-track digital tape and Roland D-50 documented. Do not add Roland D-50 to unrelated albums.
4. **Shepherd Moons:** 'Book of Days' differs by edition (original Irish vs later English). The subsequent re-recording for *Far and Away* is not a second full album.
5. **Memory of Trees:** multilingual English/Irish/Latin/Spanish documented directly in *El País*. 1995 international release dates differ; year fixed.
6. Genre nomenclature is contested: Enya has rejected **new age** as a personal genre label, even as AllMusic, Qobuz and other critics classify her records that way. Preserve both claims without silently overwriting genre evidence.
7. The original-source URLs, exact claim scopes and critical disagreements are in `enya_phase01_sources.csv`, `enya_phase01_genre_evidence.csv` and `enya_phase01_evidence-notes.md`. Human review still required (`status=draft`).

## Next phase (02)

1. *A Day Without Rain* (2000) — studio
2. *Amarantine* (2005) — studio
3. *And Winter Came...* (2008) — studio
4. *Dark Sky Island* (2015) — studio

No compilation-only repeat (*Paint the Sky with Stars* is a best-of album) and no repeat of this phase. The 2015 album is the newest confirmed studio album as at preparation date.
