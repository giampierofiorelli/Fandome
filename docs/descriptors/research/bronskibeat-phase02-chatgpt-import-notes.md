# Fandome / Bronski Beat — Phase 02 — instructions for Claude

**Research date:** 27 October 2026. **Branch:** `giampierofiorelli/Fandome` / `descriptors` (read only). **Output:** one ZIP of six research/import files. Import is **strictly incremental**: only two new rows, never overwrite or repeat phase 01.

## Album contents and catalogue changes

| album_id | title | year | type | current catalog? | action |
|---|---|---:|---|---|---|
| `bronskibeat-outabout` | Out & About | **2016** | studio | NO | Add only after examining release-date dispute / available master; provisional low-confidence descriptor |
| `bronskibeat-theageofreason` | The Age of Reason | **2017** | studio | NO | Add catalogue tuple; import new studio re-recording descriptor |

**Artist id = `bronskibeat`.** Catalog currently has only *The Age of Consent* (1984), *Truthdare Doubledare* (1986). Phase 01 delivered *The Age of Consent* (1984), *Hundreds & Thousands* (1985), *Truthdare Doubledare* (1986), *Rainbow Nation* (1995). These four have been **omitted intentionally** from the current rows and must NOT be merged a second time. Phase 01 requested adding catalogue tuples *Hundreds & Thousands* (1985) and *Rainbow Nation* (1995); verify whether Claude has already added them before making further changes.

**Release dates / album identity, read carefully:**

1. **Out & About** is a genuine 1987 recording project, NOT a demonstrated 1987 *published* album. The Independent 2021 obituary reports a first public **2016 online release**; the Southbank Centre says **2017**. No primary original digital release date or complete tracklist was verifiable. **2016 is a supported provisional choice** for the `year` column (first public issue), `confidence=low` and eight scale fields blank. Keep 1987 *recording year* in notes/scene, not in the release year. The publicly distributed version apparently includes post-session remixes, which must be distinguished from the original songs. `producers` empty because **Brian Pugsley is documented as engineer**, not producer. If the import policy requires a verified primary dated store listing and finished tracklist, defer this row pending documentation; do not invent them.
2. **The Age of Reason** (2017) is a **new studio re-recording** of early material with **Stephen Granville** as lead singer, plus three new tracks, not a greatest-hits compilation or repackaged 1984 audio. Producers **Steve Bronski|Ian Donaldson** are directly credited on AllMusic. Disc 1 is 12 new recordings; disc 2 contains new tracks 'Stars'/'I'll Be Gone' and remix variants. Do NOT attribute **Jimmy Somerville** as lead on this album. `type=studio` is a deliberate classification. Initial HMV CD on **28 Jul 2017**; AllMusic digital metadata **4 Aug 2017**.

## New tokens, collaborations and influences

- **Genre tokens to add:** NONE. `synthpop`, `hinrg`, `dancepop`, `disco`, `electronic`, `clubdance` and `pop` already exist in genre list.
- **Instrument tokens to add:** NONE. `synth` and `keyboards` are in current instruments list.
- **Production tokens to add:** NONE for phase 02. `programming`, `synthprogramming`, `falsetto` exist in current list. Tokens `yamahaqx1` and `yamahatx816` were identified in **phase 01**, not introduced or required here.
- **Co-billed albums:** NONE. Rose McDowall appears on songs as a featured musician, not a co-billed album collaborator. Sylvester's 'Stars' is a cover, not co-billing.
- **Artist influences:** Supplied in *phase 01* `CLAUDE_IMPORT.md`; do NOT duplicate artist-wide influence research in phase 02. Neither covers (Sylvester, Patrick Cowley) nor album producer/team members are automatically influences. No first-person confirmed specific influence for the 2017 session is added.

## Import instructions

1. Crosscheck actual catalog/descriptor state, retaining any prior phase 01 work. Add only missing catalog tuples:
   - `['Out & About', 2016]` → `bronskibeat-outabout` **pending review of date and evidence**;
   - `['The Age of Reason', 2017]` → `bronskibeat-theageofreason`.
2. Append only new rows from `bronskibeat_phase02_rows_ONLY.csv` to `docs/descriptors/bronskibeat.csv` (if it already exists); de-duplicate by `album_id`. Do not include phase 01 rows inside the phase 02 ZIP descriptor file.
3. Preserve the **low-confidence / blank value** decisions on *Out & About*. Treat its five genres as **provisional band-era proxies**; do not claim source-backed album-wide classifications. If strict validation requires full-album genre grounding, defer that one row rather than invent album-specific evidence.
4. Import research sources, genre-level evidence and audit with matching repo naming conventions. `status=draft` for both; then run `npx vite-node scripts/validate-descriptors.ts` and the relevant tests in repository.

## Next phase

**No further standard studio-album phase identified for Bronski Beat.** Only lower-priority remix projects (*The Age of Remix*, 2018; *Forbidden Fruit: The Age of Consent Remixed*, 2025) or corrections following recovery of the 2016 *Out & About* original would warrant new research. Do not prepare compilations or live records absent an explicit request.


## Claude import note (Oct 2026)
- Out & About NOT imported: shelved 1987 sessions that surfaced online in 2016, never an official release; no complete track list or credits; genres and instruments were inferred from the band's style, not documented (owner rules: never infer, never list unreleased). Revisit if an official release with credits appears.
- The Age of Reason imported (2017 re-recordings with new songs, produced by Steve Bronski and Ian Donaldson).
