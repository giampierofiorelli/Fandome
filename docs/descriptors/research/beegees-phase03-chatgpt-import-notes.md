# Fandome — Bee Gees — Phase 03 import

- **Artist and ID:** Bee Gees (`beegees`). Branch `descriptors` of `giampierofiorelli/Fandome`, read-only checked **28 October 2026**.
- **Repository status changed since Phase 02:** `beegees` now exists in `src/data/catalog.ts`; the first four rows (1965–68) exist in `docs/descriptors/beegees.csv`. The Phase 02 rows (1968–70) were delivered separately and are NOT repeated here. This archive includes **only** the next 4 album rows (1971–74).
- **Catalogue:** all four target album names/years were already listed in `catalog.ts` at the time of this phase, so **do not add duplicate catalogue albums**. Retain the catalogue-derived album IDs in the CSV.
- **No new genre/instrument/production tokens required:** every token used in this phase was present in `scenes.ts`, `instruments.ts`, and `production.ts` at research time.
- All four albums are released studio LPs, with `status=draft`. No live album, compilation, single-only issue, reissue or unreleased shelved record included.

## Import these 4 rows, no others

| album_id | original album title | year | type | catalogue action |
|---|---|---:|---|---|
| `beegees-trafalgar` | Trafalgar | 1971 | studio | already listed; import descriptor |
| `beegees-towhomitmayconcern` | To Whom It May Concern | 1972 | studio | already listed; import descriptor |
| `beegees-lifeinatincan` | Life in a Tin Can | 1973 | studio | already listed; import descriptor |
| `beegees-mrnatural` | Mr. Natural | 1974 | studio | already listed; import descriptor |

## Production, scope and edition caveats

1. *Trafalgar*: Bill Shepherd arranged orchestrations; credited producers are Robert Stigwood and Bee Gees. `landmark=0` despite a major hit single.
2. *To Whom It May Concern*: original 1972 album; some early UK editions omit *Run to Me*. Moog documented on *Sweet Song of Summer* alone, not every track. Last London LP with Bill Shepherd.
3. *Life in a Tin Can*: recorded Los Angeles **1972**, issued **1973**. Produced by Bee Gees. Johnny Pate is arranger/conductor only. `powerpop`, `baroquepop` and `soul` represent particular-song colours, not predominant album-wide styles.
4. *Mr. Natural*: 1974 Arif Mardin production; the blue-eyed-soul direction precedes the more famous disco era. May vs July release-month disagreements are irrelevant to `year=1974`. Band and distributor original LP credits outrank retrospective informal lists.
5. **Documented musical influences:** no named non-band musical influence was verified as explicitly credited by a member or producer **for these four specific albums**. Therefore all four `influenced_by` cells are empty, rather than populating them from vague Beatles and soul parallels. `sounds_like` contains independent editorial listening comparisons.

## Files

- `beegees_phase03_rows_ONLY.csv`: four CSV data rows with 27 guide-defined columns, no prior phases.
- `beegees_phase03_sources.csv`: specific album-source-claim pairs and source strength.
- `beegees_phase03_genre_evidence.csv`: one source-backed entry per genre, including scope (album / one track).
- `beegees_phase03_evidence-notes.md`: album-level reasoning, instrument/production evidence and uncertainty.
- `beegees_phase03_catalog-audit.csv`: catalogue and descriptor status of this phase only, plus next-phase candidates.

## Next phase — Phase 04

1. *Main Course* (1975)
2. *Children of the World* (1976)
3. *Spirits Having Flown* (1979)
4. *Living Eyes* (1981)

*Best of Bee Gees Volume 2* (1973), *Here at Last... Bee Gees... Live* (1977), *Bee Gees Greatest* (1979), and the multi-artist soundtrack *Saturday Night Fever* (1977) are **excluded** in this album-incremental studio sequence. Soundtrack work can be researched as a separate release if expressly requested; no duplication here.


## Claude import note

- 4 rows appended as delivered; no new tokens.
- Reception researched by Claude.
