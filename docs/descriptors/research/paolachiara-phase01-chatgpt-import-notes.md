# Fandome import — Paola & Chiara, Phase 01

Research cutoff: **25 October 2026**. Branch inspected: `descriptors` (read only). Artist ID in `src/data/catalog.ts`: **`paolachiara`**; display name **Paola & Chiara**. Existing `docs/descriptors/paolachiara.csv` returned 404; none of the four records is already described in that file.

## Contents (strictly incremental)

| album_id | title | year | type | catalogue action |
|---|---|---:|---|---|
| `paolachiara-cichiamanobambine` | Ci chiamano bambine | 1997 | studio | ADD |
| `paolachiara-giornatastorica` | Giornata storica | 1998 | studio | ADD |
| `paolachiara-television` | Television | 2000 | studio | ADD |
| `paolachiara-festival` | Festival | 2002 | studio | KEEP existing |

All descriptor rows have the prescribed **27-column** layout; all status values `draft`. Files in this ZIP are only for this phase and artist.

## New catalogue entries

- `Ci chiamano bambine`, 1997, `studio` → `paolachiara-cichiamanobambine`
- `Giornata storica`, 1998, `studio` → `paolachiara-giornatastorica`
- `Television`, 2000, `studio` → `paolachiara-television`

`Festival`, 2002, is already in the catalogue. Import must preserve the existing `paolachiara-festival` ID.

## Co-billed album audit

**None in Phase 01.** Paola & Chiara are a duo with their own single Fandome artist ID and should not be registered as two independent Fandome artist pages in `coBilled.ts`.

## New vocabulary tokens

**One new instrument token: `bouzouki`.** It is named in Television credits for a specific track; add it to `src/data/instruments.ts` before validation. There are no new genre or production tokens; all other row tokens exist in the `descriptors` branch lists. `stringarrangements` and `protools` are existing production tokens. `lounge`, `folkrock`, `latinpop`, `europop` and `dancepop` are existing genre tokens.

## Source and edition caveats

1. Original **1997** `Ci chiamano bambine` is a ten-track studio album. The 1998 reissue with `Per te`, `Ti vada o no`, an acoustic track and remix is **not a new album**. Qobuz's 1998 version credits Massimo Luca as producer of new `Per te`, so **Phil Palmer alone** is listed for the original album. The 1997 CD pressing credits Marco Forni keyboards/programming, Phil Palmer guitar, Paolo Costa bass and Lele Melotti drums. Do not transfer the 2005 `Re Vox` track credits to 1997.
2. **1998** `Giornata storica` is documented by original Qobuz per-track producer credits (Massimo Luca). Instrumentation is supported by the album's personnel transcription, but not independently available original liner scans, so `confidence` is medium. The Guardian compares its sound to the Cranberries: **sonic comparison**, not a documented artistic influence.
3. Original **2000** `Television` differs from the **2001 special edition** and English/Spanish-language editions. Album lyrics `language=it|es` describes the original's Italian songs and prominent Spanish wording; it does **not** claim the separately issued English edition is part of the original. Saxophone, bouzouki, orchestral strings and acoustic players are present only on **some** tracks. `The Rapino Brothers` appear in some track/remix metadata but are not claimed as whole-original-album producers. `stringarrangements` is documented; unspecified digital programming is **not** silently converted into a named synthesizer or drum-machine token.
4. **2002** `Festival` has multiple personnel/credit presentations. AllMusic directly credits the duo, Roberto Baldi and Michele Monestiroli as album producers; Apple Music additionally credits **Phil Palmer and Andrea Zuppini as producers of the title track**. They appear in the producers list as *track-limited* credits, not a claim that they oversaw every track. `protools` is explicitly in the AllMusic album credit list. The 2024 Spanish-language release is a later edition and should not be a second studio album row. Distinguish samba and orchestral **single remix** instruments from the main album.
5. Genre evidence distinguishes `whole album`, `some tracks`, and `texture`, so `flamenco`/`soul` on Festival should not outweigh its core dance-pop sound. Similarity to Madonna, Pet Shop Boys, Corrs or Cranberries lives in `sounds_like` only. The artist interview describes broad listening (including Vivaldi) but does not establish a specific composer as a decisive album influence: all `influenced_by` values intentionally remain blank.
6. Scales are original editorial judgments constrained by sourced album-level stylistic and instrumentation descriptions. Unspecified signature gear/software was not invented. All scores and credits should remain reviewable `draft`.

## Next phase — Phase 02

- `Blu` (2004), studio, NEW
- `Win the Game` (2007), studio, NEW
- `Milleluci` (2010), studio, NEW
- `Giungla` (2013), studio, NEW

This completes the **eight original studio albums**. The significant 2023 duet/re-recording compilation `Per sempre` should be **separately assessed** for an additional landmark compilation row; it is not an unissued studio LP. The 2005 `Greatest Hits` compilation and 2015 `The Story` should not automatically be given new rows without a distinct landmark justification. No albums released after the stated cutoff were researched.

## Package files

- `paolachiara_phase01_rows_ONLY.csv` (27-column import)
- `paolachiara_phase01_sources.csv` (link evidence)
- `paolachiara_phase01_genre_evidence.csv` (per-genre sourcing)
- `paolachiara_phase01_evidence-notes.md` (album-level reasoning and disagreements)
- `paolachiara_phase01_catalog-audit.csv` (catalogue actions)
- `CLAUDE_IMPORT.md` (this guide)
