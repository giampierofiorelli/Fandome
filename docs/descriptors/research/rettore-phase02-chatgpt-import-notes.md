# Fandome import — Donatella Rettore phase 02 (2026-10-25)

## Files in this ZIP
- `rettore_phase02_rows_ONLY.csv`: **exact 26-column** exchange header, 4 *new-phase-only* album rows; no other artist or previous phase.
- `rettore_phase02_sources.csv`: specific working research URLs, evidence claims and strength.
- `rettore_phase02_genre_evidence.csv`: **26** genre-evidence rows with explicit album-wide/track-limited scope.
- `rettore_phase02_evidence-notes.md`: detailed track-by-track source/analysis, minority genres, instrumentation, disagreements and abstentions.
- `rettore_phase02_catalog-audit.csv`: catalog identity and additions.

## Album IDs and names
1. `rettore-estasiclamorosa` — *Estasi clamorosa* (1981, studio). Already in `catalog.ts` **do not add**.
2. `rettore-kamikazerocknrollsuicide` — *Kamikaze Rock 'n' Roll Suicide* (1982, studio). Add to catalog once.
3. `rettore-farwest` — *Far West* (1983, studio). Add once.
4. `rettore-danceteria` — *Danceteria* (1985, studio). Add once.

`rettore` artist id exists. `docs/descriptors/rettore.csv` was **not** present when researched; phase-01 ZIP had been delivered but not imported. Claude should integrate that earlier four-row phase once independently, rather than making this ZIP cumulative. `Estasi clamorosa` album exists in catalog even though its descriptor is absent.

## Schema compatibility — important
The user explicitly requested **26 fields** with `instruments` after `voice`; this archive follows that contract exactly.
However, the live branch `descriptors` guide and `scripts/validate-descriptors.ts` were checked during the research and now expect **27 fields** because another field `production` was added *between* `instruments` and `lyrics`. **Claude must insert a blank `production` column in each import row at that position** to satisfy the current validator, without shifting lyric/language/other values. Preserve the user-facing 26-column source CSV unmodified. Sourcing the new `production` values is a separate task; never fabricate them.

## Additional tokens
- New genre tokens: **none**.
- New instrument tokens: **`keyboards`, `kazoo`**. Credit for keyboards across all four albums, kazoo specifically on *Clamoroso* (1981). They are outside `src/data/instruments.ts`, so add them to the map/set before validating; do not delete credited instruments.

## Producer caveats
- 1981 LP: producer Roberto Danè, collaborator Claudio Rego, arranger Pinuccio Pirazzoli; collaborator alone not necessarily album producer.
- 1982 LP: producer Roberto Danè, Pirazzoli arranger, Rego production collaborator.
- 1983 LP: Roberto Danè producer, original LP credits Rego co-producer.
- 1985 LP: Danè labelled principal producer in Qobuz; Rego and Leudemann sometimes credited as executive producers while Hit Parade Italia uses a broad `produzione` credit for all three. Keep them documented separately from `producers` pending original sleeve checking.

## Track/evidence safeguards
- Do not tag `Far West` as country just because of Western imagery, nor as a released musical soundtrack (its intended stage project never materialized).
- Do not remove `ska` from Estasi merely because only *Donatella* is ska; do not generalize it to all eleven tracks.
- In *Kamikaze*, preserve both `punk` (`Garage`) and `ballad` (solo-piano *Giulietta*) and `march` (rhythmic detail in *Sangue del mio sangue*) alongside new wave and synthesizers.
- The *Danceteria* set comprises nine original 1985 songs, not bonus tracks or reissues.
- All `confidence` statuses are cautious; values remain draft. Independent original master-tape verification was not performed.

## Next phase: phase 03
- *Rettoressa* (1988, studio)
- *Son rettore e canto* (1992, studio)
- *Incantesimi notturni* (1994, studio)
- *Figurine* (2005, studio)
*Ossigenata* (1989) is a greatest-hits compilation with two new tracks; omit unless separate evidence shows landmark status. Never include ordinary compilations automatically.
