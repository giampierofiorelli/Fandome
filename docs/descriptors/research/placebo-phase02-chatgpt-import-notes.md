# CLAUDE_IMPORT — Placebo — Phase 02

## Scope / exact incremental import

- Artist: **Placebo**, Fandome artist id **`placebo`** (verified `catalog.ts`, branch `descriptors`). Checked: **2026-10-27**.
- Import **ONLY these 3 rows**, from `placebo_phase02_rows_ONLY.csv` (UTF-8 BOM; 27 columns; `status=draft`):
  1. **`placebo-sleepingwithghosts`** — *Sleeping with Ghosts* (2003, studio)
  2. **`placebo-meds`** — *Meds* (2006, studio)
  3. **`placebo-battleforthesun`** — *Battle for the Sun* (2009, studio)
- Phase 01 (*Placebo*, *Without You I'm Nothing*, *Black Market Music*) must **not** be recopied or included in this batch.
- Original, core 12-/13-/13-song album sequences are used. No deluxe-only B-sides, covers discs, bonus remixes, reissues, live albums or best-of compilations.

## Albums to add to `src/data/catalog.ts`

| Album id | Exact display title | Year | Type | When |
|---|---|---|---|---|
| `placebo-battleforthesun` | Battle for the Sun | 2009 | studio | **Add now, before validating Phase 02** |
| `placebo-loudlikelove` | Loud Like Love | 2013 | studio | Add before Phase 03 |

The other six original Placebo albums are already listed in `catalog.ts`. **Repository snapshot check:** `docs/descriptors/placebo.csv` was absent; Phase 01 has already been delivered outside GitHub and is intentionally excluded from this ZIP. Consult the included catalogue audit.

## Newly required allowed tokens (exact-match rule)

**Genres (2)**, add to Genre type/list, parent-family map, validator before testing:

| token | What / reason | Source | Suggested parent mapping |
|---|---|---|---|
| **`punkrevival`** | AllMusic specifically says *Punk Revival* for *Battle for the Sun*; this is **not** `postpunkrevival` | https://www.allmusic.com/album/battle-for-the-sun-mw0000815680 | `punk` / `rock` |
| **`dixierock`** | NME specifically describes *For What It's Worth* as Dixie-rock; a limited track-level flavour, not a whole-album central style | https://www.nme.com/reviews/reviews-placebo-10534-318741 | `countryrock` / `rock` |

**Instruments (0):** all selected terms already occur in `src/data/instruments.ts`. **Production (0):** all selected terms already occur in `src/data/production.ts`.

## Co-billed albums

**None.** Guests **Alison Mosshart** and **Michael Stipe** on *Meds* are credited as guest vocalists, not co-billed for the album; neither is its producer. The 2009 album is credited to Placebo alone. Do not modify `coBilled.ts`.

## ARTIST INFLUENCES

**Not repeated:** artist-wide documented inspirations were included in the Phase 01 `CLAUDE_IMPORT.md`. The `influenced_by` cells are intentionally empty for all three albums here: direct evidence of named influences on each *specific recording* was not found. Critics’ comparisons belong in `sounds_like`. The band's 2009 decision to hire David Bottrill because of his Tool work does **not** establish a Tool musical influence. Neither does a guest appearance establish influence.

## Key credit and edition caveats

1. **2003:** Jim Abbiss producer, Barny Barnicott engineer/mixer. The original twelve-song *Sleeping with Ghosts* is the album; an edition including the *Covers* disc is **not** a new studio work. Molko explicitly reports vintage synths + old-school analog techniques, but no specific tape medium, machine model or drum machine is verified, so the production CSV cell is blank.
2. **2006:** Dimitri Tikovoï producer; **Flood is mixer**, not coproducer. Strings by Fiona Brice and separate violin/viola/cello players on *Space Monkey*, *Pierrot the Clown*, *Song to Say Goodbye*. The Alison Mosshart and Michael Stipe features are not whole-album collaborations.
3. **2009:** David Bottrill producer, Dimitri Tikovoï **additional credited producer on *Kings of Medicine* only**. Alan Moulder, Dave Bascombe = mixers, James Brown = engineer. Original album recorded Metalworks Toronto with further London sessions. A sleeve credit ambiguity (piccolo trumpet versus piccolo flute) is acknowledged in evidence notes; no disputed specific instrument added.
4. **2009 genre specificity:** `punkrevival` must **not** be silently rewritten to `postpunkrevival`; `dixierock`, `mariachi`, `britpop` are track-specific/contested and placed last, never central to similarity. All tags have independently inspectable source and scope in genre evidence CSV.
5. **Studio-only/no repeated songs:** Original covers, live reinterpretations and singles compilations excluded, including *Once More with Feeling* and *MTV Unplugged*. See catalog audit.
6. **Scale values** are editorial and tied to album-era critic/artist evidence, not objective analytics. No sound-source models or elaborate vocal-technique tokens have been inferred from genre alone.

## What the next phase will contain

**Phase 03 — the final 2 original Placebo studio albums:**
- **`placebo-loudlikelove`** — *Loud Like Love* (2013, studio), **add to catalog**.
- **`placebo-neverletmego`** — *Never Let Me Go* (2022, studio), existing ID.

Do not add an excluded live album or a compilation just to make Phase 03 contain three rows.

## File guide
- `placebo_phase02_rows_ONLY.csv` — 3 and ONLY 3 27-field descriptor rows.
- `placebo_phase02_sources.csv` — per-album evidence and working source URLs.
- `placebo_phase02_genre_evidence.csv` — one line for every genre token per album with scope and source.
- `placebo_phase02_evidence-notes.md` — rationale for each nonobvious score, instrument, production, influence decision, and disagreements.
- `placebo_phase02_catalog-audit.csv` — present/missing catalog entries and exclusions.

Repositories checked read-only: https://github.com/giampierofiorelli/Fandome/blob/descriptors/docs/album-descriptors-guide.md ; https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/catalog.ts ; https://github.com/giampierofiorelli/Fandome/tree/descriptors/docs/descriptors .
