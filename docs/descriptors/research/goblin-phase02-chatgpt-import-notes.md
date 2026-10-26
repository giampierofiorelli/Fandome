# CLAUDE_IMPORT — Goblin / Phase 02: Dario Argento only

**Research date:** 2026-10-26. **Branch:** `descriptors` (read-only). **Import state:** `draft`. **SCOPE CHANGE authorized by user:** only Goblin-related scores for **films directed by Dario Argento**. This phase contains exactly **3 new rows**, no repeat of Phase 01 (`Profondo rosso`, `Roller`, `Suspiria`, `Il fantastico viaggio del bagarozzo Mark`) and no material from other artists.

## Phase 02 contents and issue identity

| Fandome album id | Album name | Year in row | Type | Date and artist-credit caveat |
|---|---|---:|---|---|
| `goblin-tenebre` | Tenebre | **1982** | soundtrack | 1982 LP credits **Simonetti / Pignatelli / Morante**; NOT originally issued as Goblin |
| `goblin-phenomena` | Phenomena | **1997** | soundtrack | **1985 film / original VARIOUS ARTISTS LP**, first **1997** instrumental score-only edition (Cinevox MDF 303) includes Goblin + Simonetti/Pignatelli |
| `goblin-nonhosonno` | Non ho sonno | **2000** | soundtrack | original score recorded 2000; **film 2001**; 2000 vs 2001 album year disputed between first-press indices |

No row exists for *Phenomena*'s 1985 Various Artists LP, nor any film-score track not in the 1997 selected instrumental edition. The 2026 *Tenebre* re-recording is **Claudio Simonetti's Goblin**, not this original 1982 album.

## Catalogue actions — all three are missing as at the read-only check

`src/data/catalog.ts` under artist-id `goblin` currently only includes `Profondo rosso` (1975), `Roller` (1976), `Suspiria` (1977). Phase 01 also requested adding `Il fantastico viaggio del bagarozzo Mark` (1978), pending import.

ADD:

- `['Tenebre', 1982]` → `goblin-tenebre`
- `['Phenomena', 1997]` → `goblin-phenomena` (**1997 score-only CD**, not 1985 various-artists LP; full issue subtitle *The Complete Original Instrumental Sound Track Album*)
- `['Non ho sonno', 2000]` → `goblin-nonhosonno` (**original issue as documented in Goblin official discography**; see year discrepancy below)

This is a **Goblin room / score-family indexing proposal**, not a historical falsification of the album's original billing. Original credits are preserved below. If application needs exact issued artist identity, add a separate artist room for the Simonetti/Pignatelli/Morante trio and/or a work/recording association; do not silently overwrite the source credit.

## `coBilled.ts` — exact original billing

- **Original 1982 Tenebre**: `goblin-tenebre: { credit: 'Simonetti / Pignatelli / Morante' }` (same three names expanded: **Claudio Simonetti / Fabio Pignatelli / Massimo Morante**); `with` only if separate person rooms exist in Fandome. Source: [Goblin official](https://www.goblinofficial.com/biography.php); [1982 sleeve transcribed](https://www.seaoftranquility.org/reviews.php?id=2206&op=showcontent).
- **1997 Phenomena**: edition listed under **Goblin** in score-discography listings but **Claudio Simonetti / Goblin** and **Simonetti / Pignatelli** on other issues; ORIGINAL 1985 various-artist LP credited **Various Artists**. `coBilled` assignment requires inspection of the actual original **1997 MDF 303** outer sleeve/spine to ascertain exact album billing before creating a mapping. **Do not invent a canonical “Goblin & Claudio Simonetti” co-credit merely because tracks differ.** Sources: [1997 edition](https://winyle-online.pl/wydawnictwo/a794a271/goblin-phenomena-the-complete-original-instrumental-sound-track-album-cd-reedycja-remastering-caly-swiat-1997); [AMS track credits](https://ams-music.it/wp/phenomena/?lang=&lightbox=true).
- **2000 Non ho sonno**: credited **Goblin** alone; no mapping.

## Tokens to ADD before validation

| Family | New token | Why | Suggested parent in `genreFamilies.ts` |
|---|---|---|---|
| genre | `progmetal` | AllMusic explicitly calls a *Non ho sonno* track **prog-metal** | `metal`, `prog` |
| production | `rolandjupiter8` | Simonetti keyboard model on original *Tenebre* credits | n/a |
| production | `oberheimdmx` | Simonetti DMX digital drum device in original *Tenebre* credits | n/a |
| production | `rolandmc4` | Simonetti MC4 sequencer/computer on original *Tenebre* credits | n/a |

**New instruments:** none. Other cited tokens (`electrorock`, `synthpop`, `electro`, `ambient`, `experimental`, `hardrock`, `vocoder`, `tr808`, `minimoog`, etc.) already appear in the branch's lists. **Do not add `linn9000`** (the Simonetti retrospective statement conflicts with the 1982 recording chronology and original-transcribed gear). See evidence notes.

## Phase handling and conditions

1. Verify no new `docs/descriptors/goblin.csv` rows since this read-only lookup; import MUST NOT repeat earlier phases. The branch had NO `goblin.csv` at lookup, but user may import Phase 01 before Phase 02.
2. Add missing titles under `goblin` in `catalog.ts`; preserve existing identifiers. Add missing specific tokens in `scenes.ts` / `genreFamilies.ts` / validator and `production.ts`.
3. Add original Tenebre trio credit to `coBilled.ts` where appropriate. Review 1997 Phenomena actual sleeve for album-level billing. Keep `producers` **blank** where only writer/arranger, engineer, mixer or programmer is credited.
4. Import only `goblin_phase02_rows_ONLY.csv` (**3 data rows and 27 columns**). Do not treat `*_sources.csv` as a descriptor file.
5. Run validator (`npx vite-node scripts/validate-descriptors.ts`) and tests. Phase 01's four new genre tokens are tracked only in its own import file and not repeated here.

## Date issues and genre boundaries

- *Non ho sonno*: official Goblin discography, OndaRock and 2000 label-copyright metadata favour original album year **2000**. Cinevox 2001-specific release and later AllMusic 2002-specific edition exist. The full first-sale date for the earliest 2000 pressing remains unverified. Do not replace original 2000 with 2001 movie date automatically.
- *Phenomena*: soundtrack 1985 LP is **Various Artists**, score-only 1997 CD contains Goblin/Solo cues, later 2014 AMS issue and 2007 Cinevox expanded issue are different editions. Do NOT classify Iron Maiden/Motörhead rock recordings as music made by Goblin. Also do not call the full 1997 disc “1985 album” even though the music was composed for the 1985 film.
- *Tenebre*: dance, synthpop and electronic music here relate to original 1982 source accounts; do not import the contemporary 2026 remake's specific instruments or genres. Linn 9000 retrospective equipment conflict noted.

## ARTIST INFLUENCES

Phase 01 only by contract. No duplicates here; all three album-specific `influenced_by` cells are empty until a qualifying album-level musical-influence source is found. Film director Dario Argento is NOT an artist influence.

## Films not included and project state

Dario Argento-directed *Opera*, *Il cartaio*, *La terza madre*, *Dracula 3D* involve Claudio Simonetti **solo** music and do not give Goblin album credits; *Inferno* relies on Keith Emerson; the 1989 *La chiesa* with Goblin music is directed by **Michele Soavi**; *Zombi* is **George A. Romero** (Argento contributed as producer/editor of European version). See evidence notes for references.

**NEXT PHASE:** none within the **Dario Argento-directed films / original Goblin score** filter beyond these three and previously delivered *Profondo rosso* and *Suspiria*. If user expands scope to other directors, resume chronological *Zombi* (1978), *Squadra antigangsters* (1979), *Amo non amo* (1979), *Patrick* (1979) WITHOUT repeating earlier rows.

## ZIP contents

- `CLAUDE_IMPORT.md` (this file)
- `goblin_phase02_rows_ONLY.csv`
- `goblin_phase02_sources.csv`
- `goblin_phase02_genre_evidence.csv`
- `goblin_phase02_evidence-notes.md`
- `goblin_phase02_catalog-audit.csv`
