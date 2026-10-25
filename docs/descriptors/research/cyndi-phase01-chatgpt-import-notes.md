# CLAUDE_IMPORT — Cyndi Lauper Phase 01

**Research cut-off:** 2026-10-25. **Strictly incremental:** import only the four rows in `cyndi_phase01_rows_ONLY.csv`. **Do not import Phase 01 from any other artist or duplicate prior phases.** Leave `status=draft` pending second review.

## Artist / catalogue

- Fandome artist ID: **`cyndi`**, already in `src/data/catalog.ts`.
- No `docs/descriptors/cyndi.csv` was found on the `descriptors` branch at research start.
- The following four album IDs **already exist** in the catalogue and must be preserved exactly:

| Album ID | Title | Year | Type | Catalogue action |
|---|---|---:|---|---|
| `cyndi-shessounusual` | She’s So Unusual | 1983 | studio | none |
| `cyndi-truecolors` | True Colors | 1986 | studio | none |
| `cyndi-anighttoremember` | A Night to Remember | 1989 | studio | none |
| `cyndi-hatfullofstars` | Hat Full of Stars | 1993 | studio | none |

**Albums to add to catalogue in this phase:** none. **Co-billed albums in this phase:** none; no `coBilled.ts` change.

## Required new tokens

- New genre tokens: **none** (all included genres appear in current `scenes.ts` genre type and current validator).
- New instrument tokens: `coralsitar` (Coral Sitar electric guitar variant; A Night to Remember), `flugelhorn` (Hat Full of Stars), `dulcimer` (unspecified type on Hat Full of Stars; do not silently map to `hammereddulcimer`).
- New production tokens: `memorymoog` (specific synth documented in retrospective for a track on She’s So Unusual), `drumprogramming` (explicit programming credits on Hat Full of Stars). The generic `synth` instrument is already available.
- Add appropriate labels to `src/data/instruments.ts` / `src/data/production.ts`; only expand broader type definitions if validator and app require it. Validate that new tokens are source-backed before merging.

## Credit / evidence caveats

- **She’s So Unusual:** label metadata calls William Wittman *co-producer*, MusicBrainz says *associate producer*. Check original LP liner notes. Rick Chertoff is producer, Lennie Petze executive producer only. `memorymoog` is **song-specific**, not proved across the entire record.
- **True Colors:** Cyndi Lauper and Lennie Petze are credited producers. LinnDrum is explicitly given in musician metadata; verify against original sleeve, if available. Some dance-pop genre evidence is secondary.
- **A Night to Remember:** Phil Ramone produced individual tracks; Eric Thorngren is associate producer according to a liner-note transcription and is omitted from `producers`. Coral Sitar is not a traditional sitar; inspect edition-dependent track listing (bonus “Hole in My Heart”).
- **Hat Full of Stars:** Qobuz/Sony aggregates producer and instrument credits across songs; Junior Vasquez's role is not necessarily album-wide track by track. `drumprogramming` is explicit; don't substitute machine models. Divergent contemporary and retrospective critical judgments are in evidence notes. `poprock` is low-priority and derives from AllMusic's broad Contemporary Pop/Rock classification.
- 1993 is the label/industry original-release year for *Hat Full of Stars*; AllMusic sometimes shows `1992` on its album overview. Keep catalogue year **1993**.
- Each source and per-genre scope is carried in the companion CSVs. Any weak unsupported value may be cleared rather than guessed.

## Files in archive

1. `CLAUDE_IMPORT.md`
2. `cyndi_phase01_rows_ONLY.csv`
3. `cyndi_phase01_sources.csv`
4. `cyndi_phase01_genre_evidence.csv`
5. `cyndi_phase01_evidence-notes.md`
6. `cyndi_phase01_catalog-audit.csv`

## Next phase — Phase 02

- **Sisters of Avalon** (1996; studio)
- **Merry Christmas... Have a Nice Life!** (1998; studio)
- **Shine** (2002; EP, if retained under the landmark-EP exception; its five-track 2002 Oglio issue must be distinguished from the 2004 Japanese album edition)
- **At Last** (2003; studio)

Resolve the 2002 EP / 2004 Japanese album *Shine* identity **before** finalizing Phase 02. Do not describe overlapping recordings twice. If the EP fails the significance test, replace it with *The Body Acoustic* (2005) while maintaining chronology in the next-phase list.

**Claude import action:** merge only these four new rows; run `npx vite-node scripts/validate-descriptors.ts` and project tests after registering any new tokens.
