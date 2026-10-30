# CLAUDE IMPORT — Rino Gaetano / PHASE 01 (STRICTLY INCREMENTAL)

**GitHub**: `giampierofiorelli/Fandome`, branch `descriptors`, checked **30 October 2026**, **read only**. Existing artist id: **`rinogaetano`** in `src/data/catalog.ts`; not found in `src/data/seed.ts`. `docs/descriptors/rinogaetano.csv` **does not exist** (404). The existing catalogue has exactly three of the four phase-01 albums. This batch includes **four new rows only**, never any rows from another artist.

## Phase 01 contents

| Exact album_id | Album title | Year | Type | Current catalogue |
|---|---|---:|---|---|
| `rinogaetano-ingressolibero` | Ingresso libero | 1974 | studio | **ADD** |
| `rinogaetano-miofratelloefigliounico` | Mio fratello è figlio unico | 1976 | studio | already present |
| `rinogaetano-aida` | Aida | 1977 | studio | already present |
| `rinogaetano-nuntereggaepiu` | Nuntereggae più | 1978 | studio | already present |

**Catalogue to add**: `Ingresso libero` (1974, `studio`), exact ID `rinogaetano-ingressolibero`. Existing three preserve their original IDs unchanged. The albums above all exist already as **releases**, but not all as catalogue records. Album release years independently checked with MusicBrainz, Sony artist-site discography, Treccani and OndaRock.

**Co-billed albums:** none for this phase. Guest singer Francesco De Gregori on the 1978 album does not mean co-billing. The 1981 jointly billed *Q Concert* is a **live** release and intentionally not eligible under the owner's October 2026 rule.

## Complete released studio discography / phased plan

| Year | Studio album | Phase |
|---:|---|---|
| 1974 | Ingresso libero | 01 |
| 1976 | Mio fratello è figlio unico | 01 |
| 1977 | Aida | 01 |
| 1978 | Nuntereggae più | 01 |
| 1979 | Resta vile maschio, dove vai? | 02 |
| 1980 | E io ci sto | 02 |

The 1981 *Q Concert* is live and 1990+ releases are anthologies; skip. The independently released 1975 single *Ma il cielo è sempre più blu* is not separately described because this artist has studio albums. 1973 Kammamuri’s single predates the Rino Gaetano artist identity; also skip.

## Token audit: one NEW genre token

**New genre: `comedyrock`** — named expressly in AllMusic's genre/style listing for *Ingresso libero*. Add to `src/data/scenes.ts` and `src/data/genreFamilies.ts`; suggested family parents: `rock`, `poprock` (Claude to decide exact hierarchy). All other genre tokens in the rows (`songwriter`, `folk`, `italianpop`, `chanson`, `poprock`, `folkblues`, `ballad`, `canzonedautore`, `folkrock`, `pianorock`, `softrock`, `rnb`, `latin`, `pop`, `reggae`) are already in the repo. Every listed instrument and production token is already in `src/data/instruments.ts` and `src/data/production.ts`; no spelling fallback, undocumented synth model, or genre substitution introduced.

Genres are intentionally **unlimited** and listed with strongest album-wide styles first, with single-track textures at the end. Check `rinogaetano_phase01_genre_evidence.csv` for **one evidence row per genre** and whether it represents the whole album, multiple songs or just one.

## ARTIST INFLUENCES — artist as a whole (Phase 01 only)

These are **not** automatically copied to any album’s `influenced_by`. The estate/official biography specifically says Rino was inspired by the following artists in his formative years, corroborated by ICSAIC and Treccani's report of his early manuscript notebooks.

| Artist or group | Attribution | Source |
|---|---|---|
| Enzo Jannacci | Named inspirational model in official biography; 1976 contemporary artist interview independently identifies him as formative | https://www.rinogaetano.it/biografia/ ; https://www.r3m.it/2020/11/13/rino-gaetano-tutti-gli-artisti-rock-che-hanno-influenzato-e-ispirato-il-cantautore-italiano/ |
| Fabrizio De André | Explicitly named among Italian inspirations | https://www.rinogaetano.it/biografia/ |
| Ricky Gianco | Explicitly named among Italian inspirations | https://www.rinogaetano.it/biografia/ |
| I Gufi | Explicitly named among Italian inspirations | https://www.rinogaetano.it/biografia/ |
| Bob Dylan | Explicitly named among international inspirations | https://www.rinogaetano.it/biografia/ |
| The Beatles | Explicitly named among international inspirations | https://www.rinogaetano.it/biografia/ |

These influences are **global**, and only a critic, not the artist, hears the particular *Aida* songs as Dylan/Beatles-like. Accordingly, two fractional links appear under `sounds_like` on that record, **never** under `influenced_by`.

## Evidence caveats and editorial decisions

- **1974 producer missing**: despite Micocci discovering/promoting the singer, the original label/liner does not verifiably name him producer; SentireAscoltare specifically flags the missing name. Keep the producers cell empty. It is not a CSV defect.
- **1977 producer missing**: Sony metadata specifically lists Bianchi as arranger/coordinator, Cini is documented arranging, and one song shows anonymous `Unknown Producer`. None is a documented named album producer. Leave the cell empty; do not fill it from 1978 credits.
- **1976** Sony/Qobuz credits **Vincenzo Micocci**, while 1978 credits **Rino Gaetano, Rodolfo Bianchi, Ruggero Cini**; none was omitted merely for also being a musician.
- **1976 anniversary reissue not yet released**: a Rockol article dated 29 October 2026 announces an edition due 20 November 2026 with an original uncensored version of *Sfiorivano le viole*. **Do not describe the unreleased reissue**; the 1976 original is used.
- **1978 string credits conflict**: Hit Parade Italia repeats an U.M.R. string credit identical to 1977, while another 1978-only credits transcription doesn't. To avoid fabricating a documented orchestra, production/instrument `strings` and `stringarrangements` are left out of 1978.
- **Landmark values**: 1976 `1` due to career breakthrough/OndaRock milestone, 1978 `1` due to independent Treccani and Rolling Stone analysis of the *decisive* commercial/stylistic turning point; 1974/1977 `0`, despite critical praise. No label superlatives used.
- **Voice**: `raspy` only on albums where an album-specific critic or label notes rough singing; **1974 voice blank** rather than extrapolating from later records. Source ambiguity is exposed in the notes.
- **Covers / guests / instruments** are never treated as influences; all album-specific `influenced_by` cells deliberately blank.
- **No invented production methods**: No assumption about analog tape, studio models, one-take recording, heavy reverb, overdubbing or remaster technology. The only production tokens used are directly supported `moog`, `choirvocals`, and `stringarrangements`.
- **Scene** denotes an artistic movement (`Folkstudio romano` early, `cantautori italiani` later), not the ISO country/language/decade `src/data/scenes.ts` string; this artist already exists, so no proposed artist ID/scene metadata required.

## Exact six files

1. `CLAUDE_IMPORT.md` — this hand-off, global influences, catalogue and caveats
2. `rinogaetano_phase01_rows_ONLY.csv` — 27-column header, exactly **four** incremental rows
3. `rinogaetano_phase01_sources.csv` — independent/official supporting sources with openable URLs
4. `rinogaetano_phase01_genre_evidence.csv` — one row for each genre on each album
5. `rinogaetano_phase01_evidence-notes.md` — eight scales, instruments, techniques, credits, links and disagreements
6. `rinogaetano_phase01_catalog-audit.csv` — exact ID, additions, duplicate safeguards

## Next — Phase 02

Chronological remaining studio albums: **`Resta vile maschio, dove vai?` (1979)** and **`E io ci sto` (1980)**. The normal phase is 3–4 albums, but **only two eligible studio albums remain**; no live/compilation fillers should be added. Import them in one final, two-row ZIP. Check catalogue and descriptors afresh before making it.
