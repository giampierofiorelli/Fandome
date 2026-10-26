# CLAUDE_IMPORT — Queen — Phase 04

**Branch:** `descriptors` (read-only research hand-off). **Research date:** 2026-10-26. **Phase contents:** four **new** album rows, no earlier Queen rows, no other artists' rows, no live albums and no compilation albums.

## Four album rows for import

| album_id | title | year | type | catalog status |
| --- | --- | --- | --- | --- |
| `queen-themiracle` | The Miracle | 1989 | studio | already present |
| `queen-innuendo` | Innuendo | 1991 | studio | already present |
| `queen-madeinheaven` | Made in Heaven | 1995 | studio | already present |
| `queen-thecosmosrocks` | The Cosmos Rocks | 2008 | studio | already present |

**Do not add any of the four to `catalog.ts`:** all four are on the updated branch under `queen`. During research, `docs/descriptors/queen.csv` currently had Phase 01 and Phase 02 rows but not 03 or 04. Append only `queen_phase04_rows_ONLY.csv` after other pending phases. Never overwrite existing phases when importing.

## Original billing / collaborations

- `queen-thecosmosrocks`: **exact billing `Queen + Paul Rodgers`**. This **already exists** in `src/data/coBilled.ts` with `credit: 'Queen + Paul Rodgers'`. No change to that mapping is necessary. The `artist` field remains `Queen` for the existing parent Fandome artist ID, while `scene` and notes preserve the project distinction. May, Taylor and Rodgers are the featured act; Deacon and Mercury do not appear as performers.
- The other three are Queen albums, not co-billed projects. Guests like Steve Howe on *Innuendo* are **not** co-billed album artists.

## Albums to add to Fandome catalog

**None**. The ID/title/year pairs were verified in the current `src/data/catalog.ts`.

## New genre tokens

**None**: all genre values used in this phase are present in the branch's Genre list. `prog` represents explicitly source-called progressive rock for *Innuendo*; `flamenco` appears late in the row with track-passage scope, not as the primary identity.

## New instrument tokens

**None**: main played instruments use existing tokens. In particular, the Spanish guitar on Innuendo can be represented by `acousticguitar`. The gospel choir is a *voice character*, not an invented instrument. Guitar-generated orchestral sounds are not labelled as an actual orchestra.

## New production token: add before import

- `korgm1` — **Korg M1 synthesizer/workstation**, explicitly documented in MusicBrainz recording credits for *The Miracle*'s title track [M4] and specialist documentation of *Innuendo*'s keyboard orchestration [I10]. Keep it distinct from `korg01w` and `rolandd50`. Add label to `src/data/production.ts` and accepted productions in `scripts/validate-descriptors.ts`; **do not conflate** with generic `synth` instrument. `rolandd50` is already available.

No other out-of-list genre/instrument/production tokens are used. No machine name is inferred from the era alone.

## Verified producer/co-producer scope

- The Miracle: **Queen|David Richards** [M1,M4]. Brian Zellis computer programming is **not** production credit.
- Innuendo: **Queen|David Richards** [I1,I4]. Steve Howe is a guest guitarist, Mike Moran guest keyboardist.
- Made in Heaven: **Queen|David Richards|Justin Shirley-Smith|Joshua J. Macrae**; last three explicitly co-produced [H1,H2]. **Mack** is credited for additional recorded material, *not* as an album producer.
- The Cosmos Rocks: **Brian May|Paul Rodgers|Roger Taylor|Joshua J. Macrae|Justin Shirley-Smith|Kris Fredriksson**; last three explicitly co-produced [C1,C6]. None is included solely as a mixer or engineer.

## Critical caveats for Claude

1. Use original-release configurations: *The Miracle* original 1989 ten-track album, not the six newly released/unreleased 2022 bonus-session pieces [M2]. *Innuendo* 1991 original LP/CD, not later deluxe bonus songs; original vinyl edits several tracks [I4]. *Made in Heaven* includes earlier Mercury vocal sources reworked **after** his death; some songs were remade from his 1985 solo LP [H1,H6]. *The Cosmos Rocks* released September 15, 2008 in EMI markets; AllMusic lists later US date 28 October 2008 [C1,C3]. Year is 2008 throughout.
2. `korgm1` source wording is exact Korg M1. Do not treat it as the model of every synth on either album. *Innuendo* flamenco is a prominent **section of the title track**, not all twelve cuts. No full orchestra is established by synth orchestration [I7,I10].
3. The source for `dancerock` on *Made in Heaven* is a lower-strength secondary genre label on `You Don't Fool Me` [H11]. It is literal, and limited to the **original album version**, not later club remixes. Some style panels are community/editorial metadata rather than firsthand accounts; `genre_evidence.csv` marks them weaker.
4. `sampling` on *Made in Heaven* refers to original recording excerpts and edit construction; *Let Me Live* does have additional choir voices; it is not a wholly gospel album [H2,H6,H8].
5. **Influences:** *The Cosmos Rocks* has `Free|Bad Company` because Brian May explicitly says those prior bands have strong musical elements in the recordings [C2]. `sounds_like` contains sonic editorial comparisons only. The Beatles/Jimi Hendrix are broad stated teachers in album publicity, not proven record-specific influence [C1]. **ARTIST INFLUENCES are Phase 01 only** and deliberately not repeated.
6. `landmark=0` for *The Cosmos Rocks* evaluates the Queen canon, not a claim that the distinct collaboration is unimportant. Critics disagree significantly on artistic success [C3-C5]. `Made in Heaven` is a posthumous new studio record, not a compilation for Fandome classification even though it reuses source performances.

## Files and validation

The ZIP contains six files only:

- `CLAUDE_IMPORT.md` (this file)
- `queen_phase04_rows_ONLY.csv` — 27 columns, exactly four new album rows
- `queen_phase04_sources.csv` — sourced link list with strength and supported claims
- `queen_phase04_genre_evidence.csv` — exactly one entry per genre token in every row, including scope
- `queen_phase04_evidence-notes.md` — scale reasoning, instruments/production, competing interpretations
- `queen_phase04_catalog-audit.csv` — four already-listed entries and co-billing note

Add the `korgm1` allowed production token, append the four rows once, validate descriptors and run application tests. No scripts in ZIP; this hand-off does not write to GitHub.

## Next phase

**None scheduled: Queen's main released studio and purpose-made soundtrack discography, including the Queen + Paul Rodgers studio collaboration, is complete through 26 October 2026 with Phase 04.** The exclusions stand: live recordings, greatest-hits collections, and repackaged earlier songs would not provide distinct studio-era descriptors. New *released original* albums can be researched only when and if they appear.
