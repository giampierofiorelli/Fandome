# Fandome — Rihanna — Phase 01 import

Read-only research, no GitHub modifications. Research date: 2026-10-25.

## Exact incremental contents (four albums only)

- `rihanna-musicofthesun` — Music of the Sun (2005), studio — ADD to catalogue
- `rihanna-agirllikeme` — A Girl Like Me (2006), studio — ADD to catalogue
- `rihanna-goodgirlgonebad` — Good Girl Gone Bad (2007), studio — EXISTING catalogue id; keep original title
- `rihanna-ratedr` — Rated R (2009), studio — EXISTING catalogue id

No existing descriptor file `docs/descriptors/rihanna.csv` was found on the branch when checked. Only these four rows may be imported; do not duplicate any future Rihanna phase.

## Format and validator IMPORTANT

The owner explicitly requires **26 columns** and `instruments` immediately after `voice`; the provided `rihanna_phase01_rows_ONLY.csv` follows this exact contract. The current GitHub `docs/album-descriptors-guide.md` and `scripts/validate-descriptors.ts` have since gained a *27th* `production` field immediately **after** `instruments`. To import on that code version, Claude must insert a blank `production` field in each row **and** the matching header before running the validator, then enrich it only from sources. Do not shift lyrics or any later fields, never interpret the 26-column source as 27 columns.

## New genre tokens

- `freestyle` — cited 1980s Latin freestyle context for *Push Up on Me*, with weaker texture-level evidence on the debut; register in `scenes.ts`, `genreFamilies.ts` and the validator before import. No genre list limit. (Parent suggestions: `dance`, `electro`.)

## New instrument tokens

- `keyboards` — literal generic keyboard credit (e.g. Carl Sturken); **do not** automatically equate this with `synth`.
- `guitar` — literal undifferentiated guitar credit; do not guess electric/acoustic where source unspecified.
- `trombone`, `tuba` — specifically credited on *Lemme Get That*.
Add instruments to `src/data/instruments.ts` and validator as required. Instruments on individual tracks are included even if minor; credited violin/cello/viola are represented collectively by `strings`.

## Production and other caveats

- Credits are drawn mainly from Def Jam/Qobuz track-level attributions; mixing, songwriting, guest and executive roles are excluded from `producers`. Some additional/co-producers are included based on explicit roles.
- The original *Good Girl Gone Bad* (2007) **does not include** the later 2008 *Reloaded* songs *Disturbia* or *Take a Bow*; they can be handled in the future if a separately landmark reissue is warranted.
- *A Girl Like Me* has country-specific editions and a 13th track (*If It's Lovin' That You Want Pt. 2*) on the cited US release; metadata is not uniform.
- `sounds_like` is an editorial resemblance judgment. `influenced_by` is intentionally blank except Beyoncé on the first album, whose musical debt is expressly asserted in Slant. A **sample**, cover or label collaboration is not automatically an artist influence.
- `freestyle` on the debut is low-strength because Slant identifies the production team with freestyle; that is not a rigorous acoustic classification of its one song.
- Some reissue dates on store pages show 1 January placeholders; original years 2005, 2006, 2007 and 2009 follow contemporaneous dated reviews, AllMusic and original-release metadata.

## Next phase (Phase 02, only new rows)

1. *Loud* (2010)
2. *Talk That Talk* (2011)
3. *Unapologetic* (2012)
4. *Anti* (2016)

Only subsequently released Rihanna studio albums or qualifying landmark projects should be considered after these.

## Files

- `rihanna_phase01_rows_ONLY.csv` — 26 columns, exactly four rows
- `rihanna_phase01_sources.csv` — source URLs and claims
- `rihanna_phase01_genre_evidence.csv` — genre, source, scope, strength, justification
- `rihanna_phase01_evidence-notes.md` — scale and per-track rationale
- `rihanna_phase01_catalog-audit.csv` — existing vs. new catalogue items
- `CLAUDE_IMPORT.md` — this file
