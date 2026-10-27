# CLAUDE IMPORT — Sabrina Salerno, Phase 01

Date: 2026-10-27. Repo `giampierofiorelli/Fandome`, branch `descriptors`, **READ-ONLY**. Verified files: `src/data/catalog.ts`, `src/data/seed.ts`, `src/data/coBilled.ts`, `docs/album-descriptors-guide.md`, `src/data/scenes.ts`, `src/data/instruments.ts`, `src/data/production.ts`, `scripts/validate-descriptors.ts`.

## Artist identity and existing state

- **EXISTING artist ID `sabrinasalerno`** (do not create a new artist): found in `src/data/catalog.ts` with existing album listings `[Sabrina, 1987]`, `[Super Sabrina, 1988]`. Not separately present in `seed.ts`.
- `docs/descriptors/sabrinasalerno.csv` and `docs/descriptors/reception/sabrinasalerno.csv`: **not present** as of research. None of the four albums was already described. Do NOT skip existing catalogue albums just because they exist as names: both still need descriptor rows.
- No co-billing entry in `coBilled.ts` for the first four records. `Siamo donne` with Jo Squillo appears on select expanded editions of **Over the Pop** and is not a separate co-billed album.

## Exactly four new descriptor rows in this ZIP (strict incremental phase)

1. `sabrinasalerno-sabrina` — Sabrina (1987), **already in catalog**.
2. `sabrinasalerno-supersabrina` — Super Sabrina (1988), **already in catalog**.
3. `sabrinasalerno-overthepop` — Over the Pop (1991), **ADD missing catalog album**.
4. `sabrinasalerno-maschiodovesei` — Maschio dove sei (**1995 original release**), **ADD missing catalog album**.

Artist billed **Sabrina** on early physical releases, but `artist` in CSV is the existing Fandome room display name **Sabrina Salerno**.

## Phase 02 plan (NOT contained in this ZIP)

- A Flower's Broken (1999), original studio album.
- Erase/Rewind Official Remix (2008), **hybrid compilation/remix plus new material**; inspect first-issue tracklist and whether its new studio disc merits a descriptor. Do not reclassify a remix collection as a studio album without supporting evidence.

Skip: **Something Special** (1988), **Super Remix** (1990) (compilations/old-track remix collection); **Numeri** (1997), **Fatta... Rifatta** (1999) (reissues of *Maschio dove sei*, not new albums). Beware contradictory album year in third-party sources: earliest *Maschio dove sei* Italian NAR pressing is **1995**, per MusicBrainz, Apple and 1995 session drummer.

## Token and ID audit

- All genres are in Fandome existing union (`italodisco`, `synthpop`, `disco`, `dancepop`, `pop`, `hinrg`, `electronic`, `poprock`, `eurodance`, `rock`). No genre additions.
- All instruments (`keyboards`, `synth`, `guitar`, `saxophone`, `drums`, `brass`) and production (`programming`) are in current token dictionaries. No additions.
- No album-specific reliably testified influences; all 4 `influenced_by` cells intentionally **empty**. Editorial sounds-like comparisons live only in `sounds_like` and are not evidence of influence.
- Album scales are 0–5 integer editorial assessments; blank `acclaim` means no defensible consensus, not bad reviews. Genre evidence CSV has exactly one row per genre token.

## Package manifest and import

- `sabrinasalerno_phase01_rows_ONLY.csv`: EXACTLY 27-column schema, 4 phase-specific descriptor rows, status `draft`.
- `sabrinasalerno_phase01_sources.csv`: source provenance across album labels, musician, official biography, music journalism, original issues.
- `sabrinasalerno_phase01_genre_evidence.csv`: per-genre evidence and scope (album versus track).
- `sabrinasalerno_phase01_catalog-audit.csv`: existing/add/defer/exclude classifications.
- `sabrinasalerno_phase01_reception.csv`: 4-row additional career importance, acclaim (empty when ungrounded), mainstream manufacturing ratings.
- `sabrinasalerno_phase01_evidence-notes.md`: original issue details and exclusions, year discrepancy, instrument/machine attribution, influence notes.
- `CLAUDE_IMPORT.md`: this note.

Claude should **retain** the two existing albums, **add** the two missing albums to `catalog.ts`, save the 27-column rows as `docs/descriptors/sabrinasalerno.csv`, save reception rows as `docs/descriptors/reception/sabrinasalerno.csv`, and then run `npx vite-node scripts/validate-descriptors.ts`. No GitHub data was modified directly.

## Claude import note (27 Oct 2026)

Credits checked on the original sleeves (Discogs API): Sabrina 1987 producers Cecchetto, Romani, Bonsanto, Rossi, with Rossi's synthesizers, sequencer and drum machine (Wikipedia personnel); Super Sabrina producers Giampiero Menzione (general producer), Stock Aitken Waterman (All of Me), Elvio Moratto (My Chico); Giorgio Moroder is credited as writer only on that album; Over the Pop adds Menzione, Peppe Vessicchio and Gianni Muciaccia. Reception researched by Claude.
