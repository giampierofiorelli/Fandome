# CLAUDE IMPORT — La Bionda, Phase 01 (2026-10-25)

**STRICTLY INCREMENTAL: four new rows only; no other artist and no previous phase.** Artist id `labionda` exists in `src/data/catalog.ts`; no `docs/descriptors/labionda.csv` was present on the `descriptors` branch at audit time. Use a single append/create to that artist CSV. Do not alter unrelated files. UTF-8 comma-separated rows follow exactly 25 columns with empty = unknown and `status=draft`. English-language research documentation.

## Import album IDs

1. `labionda-fratellilabiondasrl` — **Fratelli La Bionda s.r.l.** (1972, studio, Ricordi SMRL 6099)
2. `labionda-ognivoltachetutenevai` — **Ogni volta che tu te ne vai** (1975, studio, Ricordi SMRL 6171)
3. `labionda-tuttovabene` — **Tutto va bene** (1977, studio *revised issue*, Baby Records LPX 016)
4. `labionda-labionda` — **La Bionda** (1978, studio, Baby Records LPX 24)

## Critical duplicate/edition decision

1977 **Tutto va bene** recycles/reworks 1975 **Ogni volta che tu te ne vai**, including three songs in English, and is credited as a separate LP in discographies. **Do not misrepresent 1977 as an entirely independently recorded original album.** We provide two rows to retain materially different original release objects and language availability, but Claude should decide whether application catalogue supports `edition_of`/variant mapping; until checked it is `draft` and clearly labeled. For playlist/recommendation de-duplication, do not count common recordings twice. The Rolling Stone interview calls the second album *Tutto va bene* **of 1975** (recording date) while the Baby LPX 016 issue dates to 1977.

## Catalogue additions

All four titles are missing from `catalog.ts` and `labionda.csv` at current audit. Add original release years only; no future albums. Preserve exact casing and punctuation in titles, maintain ids as specified. `Fratelli La Bionda` was the early display credit; the Fandome `artist` stays `La Bionda` to match existing artist identity.

## New genre tokens

**None** are needed: every token in this phase is already in `src/data/scenes.ts` and the validator; `folkrock`, `softrock`, `prog`, `europop`, `eurodisco`, `ballad`, and `songwriter` were checked. Genre evidence file distinguishes whole album, some tracks and texture. Treat low-strength genre tags as proposals to verify, not as certainties.

## Source and credit caveats

- Bruno Lauzi credited as producer on 1972 secondary discography; Natale Massara arranger is not automatically a producer.
- The 1975 LP is **SMRL 6171** per Ricordi catalogue; at least one reseller incorrectly gives 6172.
- 1978 original LP credited **Carmelo La Bionda** as producer; both brothers appear as *executive producers* and on single-production credits. Do not conflate these.
- Charly Ricanek = arranger, keyboards, ARP synth, **not** documented album producer.
- `There for Me` is a ballad amid dance tracks and is counted; full LP character is NOT inferred from the only hit.
- 1972 `Stills` and `Rag.` are instrumental tracks, though the whole album is vocal.
- 1977 edition overlaps 1975; album id remains separate while edition status needs human review.
- `influenced_by` conservatively names **Crosby, Stills & Nash** only for the album to which La Bionda directly connected that model.
- All free numerical estimates derive from cited instrumentation/critical or artist accounts. In 1975 and 1977 most scales deliberately blank due to album-specific listening/source insufficiency.

## Next phase — proposed

**Phase 02:** `Bandido` (1979), `High Energy` (1979), `I Wanna Be Your Lover` (1980), `InBeatween` (1998, official title verify punctuation and exact year). Research separately all **D.D. Sound** landmark albums (1977–79), since that is an alternate credited project and needs a catalogue alias decision. The studio-film scores (e.g. Bud Spencer/Terence Hill films) merit inclusion only when an original released soundtrack LP and independent importance are both verified; do not invent soundtrack releases from filmography listings.

## ZIP files

- `CLAUDE_IMPORT.md`
- `labionda_phase01_rows_ONLY.csv`
- `labionda_phase01_sources.csv`
- `labionda_phase01_genre_evidence.csv`
- `labionda_phase01_evidence-notes.md`
- `labionda_phase01_catalog-audit.csv`

After import run `npx vite-node scripts/validate-descriptors.ts` and project tests. No repository writes performed by research process.
