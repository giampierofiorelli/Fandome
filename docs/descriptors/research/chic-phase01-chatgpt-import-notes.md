# Fandome import — Chic Phase 01

**Research date:** 2026-10-25. **GitHub branch inspected:** `descriptors` (read-only). **Artist ID:** `chic`. Only four incrementally new records are supplied. Do not overwrite/import earlier artist batches.

## Phase contents (studio albums)

| album_id | title | year | catalogue status |
| --- | --- | ---: | --- |
| `chic-chic` | Chic | 1977 | existing; keep id |
| `chic-cestchic` | C’est Chic | 1978 | existing; keep id |
| `chic-risque` | Risqué | 1979 | existing; keep id |
| `chic-realpeople` | Real People | 1980 | **ADD** |

## Catalogue addition required
- Add `['Real People', 1980]` to the `chic` album list in `src/data/catalog.ts`, between `Risqué` and `It's About Time`. Genre/type = studio, ID after Fandome slugging = `chic-realpeople`.
- Do not rename the existing `Chic`, `C’est Chic` or `Risqué` catalogue entries. Preserve the catalogue's curly apostrophe in `C’est Chic`; the slug is `chic-cestchic`.

## Co-billed
None in Phase 01. Do not add Sister Sledge / Diana Ross collaboration records to Chic's own album catalogue; Rodgers/Edwards producing those recordings does not make them Chic releases.

## New genre / instrument / production tokens
None. All supplied tokens are already in the repository's full guide/list, including `eurodisco`, `quietstorm`, `contemporaryrnb`, `sonicmanipulation`, `analogtape` and `chimes` (the latter is in the full `instruments.ts`, even though omitted from the abbreviated user prompt).

## Critical caveats
- Album-wide versus track-level descriptors are explicitly separated in the genre evidence and evidence-notes files. `quietstorm` is principally ballad material on the 1977–79 LPs. `newwave|rock` on *Real People* are textures, and `contemporaryrnb` is a later music-library classification of a 1980 recording.
- The `influenced_by` column is blank: Roxy Music and KISS influenced Chic's image/identity, but direct sonic album-level influence was not established. Editorial sonic comparisons live in `sounds_like`.
- LP personnel ≠ per-track assignments. In a Sound on Sound interview Nile Rodgers specifically says Chic deliberately left personnel-to-track associations unspecific.
- Rodgers documents live-to-tape studio rhythm tracking and overdubs for the early Chic method; that is **not** a concert recording. Those techniques are only encoded on *Chic* and *C’est Chic* because of supporting debut/specific-1978 accounts. Later records have empty production cells pending album-specific technical evidence.
- On *Chic* (1977), Kenny Lehman is credited as a producer in 1977 original-LP transcriptions (not merely as a brass arranger); avoid conflating him with executive producers.
- Some sources conflict on the exact date of *C'est Chic* in 1978. Year is secure; day/month are not used.
- All 8 numeric dimensions are Fandome evidence-informed judgments rather than quoted ratings; unfamiliar machine/software tokens remain blank.
- External validator/tests have not been executed on GitHub; the generated CSV syntax, source coverage, genre alignment and ZIP contents are verified locally.

## Next phase — Phase 02 (four albums)
1. *Take It Off* (1981) — add to catalogue.
2. *Tongue in Chic* (1982) — add to catalogue.
3. *Believer* (1983) — add to catalogue.
4. *Chic-Ism* (1992) — add to catalogue.

Phase 03 would cover *It's About Time* (2018); earlier named collaborations or remixes only if independently qualifying as Chic albums under the user rules.

## Files
1. `CLAUDE_IMPORT.md`
2. `chic_phase01_rows_ONLY.csv`
3. `chic_phase01_sources.csv`
4. `chic_phase01_genre_evidence.csv`
5. `chic_phase01_evidence-notes.md`
6. `chic_phase01_catalog-audit.csv`
