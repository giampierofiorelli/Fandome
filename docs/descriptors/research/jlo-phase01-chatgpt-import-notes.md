# CLAUDE_IMPORT — Jennifer Lopez, Phase 01

## Scope and branch audit
- Target branch: `descriptors` (read only on 25 October 2026).
- Artist: `Jennifer Lopez`, **existing Fandome ID: `jlo`** (`src/data/catalog.ts`).
- `docs/descriptors/jlo.csv` did not exist when checked. **This ZIP is incremental**: exactly four new rows, not the full catalogue.
- Do not import before adding missing genre to `src/data/scenes.ts`, `src/data/genreFamilies.ts`, and `scripts/validate-descriptors.ts` (where needed), then run validation/tests.

## Phase 01 album IDs
1. `jlo-onthe6` — **On the 6** (1999), `studio`: already in catalogue.
2. `jlo-jlo` — **J.Lo** (2001), `studio`: already in catalogue.
3. `jlo-jtothalotheremixes` — **J to tha L-O!: The Remixes** (2002), `remix`: **add to catalogue**.
4. `jlo-thisismethen` — **This Is Me… Then** (2002), `studio`: already in catalogue; keep exact existing ID.

## Catalogue addition
- Append `['J to tha L-O!: The Remixes', 2002]` to the `jlo` artist list **between** `J.Lo` and `This Is Me… Then`, preserving chronology. `album_id` is generated using Fandome slug rules.
- *J to tha L-O!* is included as a **landmark remix**: Guinness World Records confirms it was the first remix record to lead Billboard 200 in February 2002. Distinct from a new studio album. Most mixes were reconstructions, some with new raps; *Alive* is one newly recorded soundtrack ballad.
- The 11-track US version is the **canonical analytical scope** for the remix row. Europe/other territories carry extra tracks, often Spanish-language mixes. Adjust `language`/`genres` only if expanding the canonical scope.
- Some sources style this album `J To Tha L-O! The Remixes` without a colon or use a long dash; retain one official styling while keeping the stable ID.
- On the 6 and J.Lo include Spanish tracks; the baseline 11-track remix collection and This Is Me… Then are English-led.
- *This Is Me… Then* is studio album **2002**. 2022 anniversary LP reissues are **not** separate albums.
- Different databases disagree on J.Lo's precise first issue date in January 2001; year is unambiguous. *On the 6* official street date often June 1 1999.

## Token additions
- **New genre:** `latinhouse` — named as “Latino House” in Dele Fadele’s NME review of *J to tha L-O! The Remixes*. Add to `Genre`/family tree with parents `house` and `latin` and to validator allowed genres. **Only a handful of remix tracks, not the full album.**
- **New genre:** `salsa` — Los Angeles Times explicitly describes *On the 6* as containing salsa-kissed R&B. Add to Genre/families and validator; recommend parent `latin` and `dance`. Do not assume the entire album is salsa.
- **No new instrument tokens.** All instrument values are drawn from the current `instruments.ts`.
- **No new production tokens.** All production values are present in `production.ts`.

## Credits, edition and interpretation warnings
- `producers` includes only people credited as producers/co-producers for at least one track in the canonical version. Not songwriters, executive producers alone, engineers or remixers whose only credit is `remixer`. The remix row therefore **does not automatically promote** Hex Hector, Metro or Pablo Flores to producer.
- The same individual can have producer credit on a different track or release; `J.Lo` producer credits should be checked against original track lists rather than a later deluxe-edition bonus.
- `instruments` collects instruments documented anywhere on the album (including some-track contributions), not an assertion that every song uses each.
- `sampling` on the remix album is specifically verified for the *I'm Real* remix (Rick James) and *If You Had My Love* Darkchild remix (Michael Jackson). Samples do not independently prove a documented **influence** on the whole album, so `influenced_by` remains blank.
- Sound-alike comparisons are **editorial** and not claimed as historically documented direct influences. Exception: The Guardian explicitly identifies Diana Ross as shaping the style of *This Is Me… Then*, so she is recorded there in `influenced_by`.
- `notes` are original phrasing and <=15 words. All scales are album-level, judged from the available criticism; more speculative components are left unclaimed.
- Reviewer disagreement: Slant hears the remix album as useful radical reshaping, whereas AllMusic faults its rap-first sequencing; *This Is Me… Then* receives an enthusiastically positive AllMusic assessment even as its dance-pop palette is reduced.

## Phase 02 (no repetition)
**Rebirth** (2005), **Como Ama una Mujer** (2007), **Brave** (2007), **Love?** (2011). Catalogue additions required for the first three; `Love?` already exists.

## Later coverage
**A.K.A.** (2014), **Marry Me: Original Motion Picture Soundtrack** (2022; credit Jennifer Lopez & Maluma; document co-billing if admitted), **This Is Me… Now** (2024). Avoid unrelated greatest-hits packages without a separately argued landmark criterion.

## Package files
- `jlo_phase01_rows_ONLY.csv` — exactly four rows plus 27-column header.
- `jlo_phase01_sources.csv` — evidence URLs and what they prove.
- `jlo_phase01_genre_evidence.csv` — one genre source/scope per album token.
- `jlo_phase01_evidence-notes.md` — scale reasoning, provenance, disagreements and unknowns.
- `jlo_phase01_catalog-audit.csv` — exact catalogue actions.
