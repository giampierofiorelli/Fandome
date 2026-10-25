# Fandome import — Moby Phase 01

Research cut-off: 2026-10-25. Source branch: `descriptors` (read-only).

## Files and exact incremental scope
- `moby_phase01_rows_ONLY.csv` — 4 new descriptor rows, 27 columns.
- `moby_phase01_sources.csv` — 33 source records (documented claims and strength).
- `moby_phase01_genre_evidence.csv` — 47 genre assignments with their source and scope.
- `moby_phase01_evidence-notes.md` — album-by-album decisions, recording details, contrary evidence.
- `moby_phase01_catalog-audit.csv` — catalogue state and actions.

Import ONLY these four IDs, without duplicating existing rows:
1. `moby-moby` — **Moby** (1992), studio; add catalogue entry.
2. `moby-ambient` — **Ambient** (1993), studio; add catalogue entry.
3. `moby-move` — **Move** (1993), landmark EP; add catalogue entry.
4. `moby-everythingiswrong` — **Everything Is Wrong** (1995), studio; keep existing catalogue ID.

## New album catalogue entries
In artist `moby`'s chronological `ROWS` list in `src/data/catalog.ts`, add:
- `['Moby', 1992]`
- `['Ambient', 1993]`
- `['Move', 1993]`

The catalogue already includes **Everything Is Wrong** (1995); do not repeat it. `docs/descriptors/moby.csv` did not exist at research time; import into that file without touching other artists. Artist ID `moby` already exists.

## Co-billed records
None in this phase. Moby is the billed album artist on all four; guest singers and the violinist are not co-billed album artists. Do not modify `src/data/coBilled.ts`.

## New tokens to add (exact names)
- Genres: `ambienttechno, hardcore, happyhardcore`. Add to the `Genre` union (`scenes.ts`), `GENRE_PARENTS` (`genreFamilies.ts`), **and** the validator's fixed `GENRES` list as necessary. Suggested parents: `ambienttechno → ambient|techno`, `hardcore → punk` **only after ambiguity review** (see below), `happyhardcore → rave|electronic`. The term `hardcore` appears in a contextual 1995 review; do not equate it with hardcore techno.
- Instruments: **none**. Existing tokens suffice.
- Production: `sy22, sy35, sy85, jupiter6, bossse50`. These are **1995 album-specific** machines stated by Moby in a contemporary technical interview (Yamaha SY22/SY35/SY85; Roland Jupiter-6; Boss SE-50). Add to `production.ts` and validator checks as appropriate.

## Caveats important to the importer
- `Moby` (1992): official album-length release is approximately **54:37**, while one AllMusic search result shows **27:10**; the 1992 cassette/release page supports the full album. It is an Instinct label-assembled selection of earlier work, released without Moby's participation. `The Story So Far` is a differently programmed British variant, **not** another album row.
- `Ambient` (1993): conventionally listed among studio albums, but Ned Raggett and AllMusic's biographical account call it an archival **compilation** of 1988–91 recordings assembled by Instinct. `type=studio` follows prevailing published album numbering; editorial review can choose `compilation` without changing its historical identity. Do not confuse it with Moby's later `Ambient 23` or `Long Ambients`.
- `Everything Is Wrong`: Moby alone is credited as producer. The 1995 technical interview names several production tools; mastering from the console to DAT is **not** evidence of an analog-tape production. Guest vocalists are performers, not co-producers. The `Underwater` disc with limited editions is a bonus program, not a second standard tracklist.
- `Move` (1993): first Mute/Elektra EP, significant enough to qualify for the landmark-EP exception (US Billboard dance #1). UK Mute four-song EP and US Elektra six-song editions differ. Use 1993 and `type=ep`; Moby produced, Curt Frasca engineered title cut, Rozz Morehead and Carole Sylvan sang on it. Do not add other artists to co-billed album credits.
- `Animal Rights` (1996) is deferred chronologically to **Phase 02**.
- `influenced_by`: Badalamenti on `Go` is a direct melodic source. Moby says he **replayed**, rather than sampled, the Twin Peaks theme with piano/synth; Pitchfork calls it a sample. Both reports are logged. Do not enter `sampling` for the entire 1992 album merely because of that single disputed technique.
- `sounds_like` is an editorial sonic comparison, not a claim of documented influence.
- `landmark` measures significance within Moby's catalogue, not review score. `Move` qualifies for its first major-label release and chart breakthrough.
- Only album-supported instruments/production are entered; unknown cells are deliberately empty.

## Next phase (02)
- `Animal Rights` (1996)
- `Play` (1999)
- `18` (2002)
- `Hotel` (2005)

`I Like to Score` (1997) is a film/TV-related collection with previously issued tracks, not one of Moby's full original studio albums. Evaluate it separately if a landmark soundtrack collection is desired; do not automatically import as soundtrack or duplicate previously issued material. `The End of Everything` (1996) is billed under the **Voodoo Child** alias and is not a Moby-billed album.

## After import
Add the 3 new catalogue rows and new tokens, import four descriptor rows as `draft`, run `npx vite-node scripts/validate-descriptors.ts` and repository tests, and report any unresolved type or genre-parent conflict. No changes to GitHub were made in this research phase.
