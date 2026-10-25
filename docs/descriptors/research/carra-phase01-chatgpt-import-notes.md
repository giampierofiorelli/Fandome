# CLAUDE_IMPORT — REPLACE Raffaella Carrà Phase 01 (corrected)

Date: 25 October 2026. Artist `carra`. **This ZIP is a replacement for the ORIGINAL phase 01, not a new album phase.**

## Required import behavior

The four original rows already exist in `docs/descriptors/carra.csv` and all four albums are already in `src/data/catalog.ts` on branch `descriptors`. Replace exactly these four rows using `album_id` as the unique key. **Do not append duplicates. Do not touch imported Phases 02–04.** Preserve row order with other album phases.

| album_id | Original album | Year | Import |
|---|---|---:|---|
| `carra-raffaella` | Raffaella | 1971 | REPLACE row; catalogue already has album |
| `carra-raffaellacarra` | Raffaella Carrà | 1971 | REPLACE row; catalogue already has album |
| `carra-raffaellasenzarespiro` | Raffaella... Senzarespiro | 1972 | REPLACE row; catalogue already has album |
| `carra-scatolaasorpresa` | Scatola a sorpresa | 1973 | REPLACE row; catalogue already has album |

## What changed

- The four CSV rows now contain **33 genre assignments** with **33 genre evidence lines**, plus a **45-track audit** in `carra_phase01_evidence-notes.md`.
- A minority genre appears even if limited to one track; `scope=some tracks` rather than `whole album`. Evidence grades and prose distinguish proved performed sound from documented origin of a cover.
- The 1971 funk case matters especially: *Reggae Rrrrr!* should not be tagged reggae just from its title. Treccani independently documents *Chissà chi sei* as an Italian adaptation of soul-funk *Sookie Sookie*.
- Preserve original 1971/1972 ambiguous credit/date context and studio-recreated concert classification.

## New genre tokens to introduce (only if absent in current `Genre` and `GENRE_PARENTS`)

- `childrensmusic` — children-oriented popular song (not all TV songs).
- `liscio` — regional Italian social dance music of Romagna.
- `waltz` — triple-metre dance related to Romagna mia.
- `pasodoble` — Spanish traditional march-form dance.
- `march` — instrumental processional/military march.
- `polka` — Central European dance type.
- `sonjarocho` — Mexican Veracruz musical form originally behind La Bamba.

Add each actually missing token to `src/data/scenes.ts` and `src/data/genreFamilies.ts`; update validator hardcoded genre set if needed, matching established practice. Suggested parents: childrensmusic → pop, liscio → folk|dance, waltz → dance, pasodoble → dance|latin, march → classical (or [] if not desired), polka → folk|dance, sonjarocho → folk|latin. Parent assignment is a recommendation for Claude to inspect, not an automatically verified hierarchy.

## Packaging and verification

1. Import the FOUR replacement rows by ID (not append).
2. Update the known genre union/parents and validator genre set (only where absent).
3. Review `carra_phase01_genre_evidence.csv`: historical repertoire genre is explicitly weaker than demonstrated arrangement; never let an unsupported source texture masquerade as entire-LP style.
4. Keep all later phase rows and catalogue entries identical.
5. Run `npx vite-node scripts/validate-descriptors.ts` and repository tests after import. This tool run only validates CSV format and cross-file evidence, not Fandome runtime code.

## Producer/edition caveats

- `Gianni Boncompagni` is verified as producer by Sony/Qobuz on labelled tracks and by AllMusic for the 1972 LP / sleeve archive for 1973. Roberto Formentini appears as project coordinator in Sony song-level credits but as album-level producer on other secondary discographies. Do not add him automatically without resolving original sleeves.
- 1971 debut date appears as April 1971 on official record archive, 1970 in some retrospective accounts; unchanged catalogue year.
- `Raffaella... Senzarespiro` is `studio`: deliberately studio-constructed false live recording; streaming reissue labels can be misleading.
- The 1973 LP incorporates short instrumentals and original song covers. Not all singers/genres/languages apply to every track.

## Contents (exactly six files)

1. `CLAUDE_IMPORT.md`
2. `carra_phase01_rows_ONLY.csv` — header + FOUR replacement rows only
3. `carra_phase01_sources.csv` — album-level and track-level working sources
4. `carra_phase01_genre_evidence.csv` — each album genre and track reason
5. `carra_phase01_evidence-notes.md` — all 45 tracks, scale rationale and disagreements
6. `carra_phase01_catalog-audit.csv` — all already in catalogue; replace, do not add

## Next phase

**None requested. Research stops with this correction.**
