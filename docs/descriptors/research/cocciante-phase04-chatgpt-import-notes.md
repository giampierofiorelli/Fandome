# CLAUDE IMPORT — Riccardo Cocciante / PHASE 04 (INCREMENTAL)

**Repository** `giampierofiorelli/Fandome`; **branch** `descriptors`; checked 2026-10-30. The existing artist ID is **`cocciante`** (not riccardococciante), present in `src/data/catalog.ts`, absent from `src/data/seed.ts`. No co-billed artist needed. Recheck on live branch before import, as earlier batches can have been merged after this snapshot.

**GitHub found** `docs/descriptors/cocciante.csv` with four phase-01 rows, through *L'alba* (1975). Phase 02 and phase 03 were delivered as separate ZIPs but do not yet occur in the descriptor CSV in the checked state. **Never repeat or overwrite earlier phase rows**, even if unimported. Only four phase-04 rows are in this archive:

| ID (exact) | Original title | Year | Type | Catalogue action |
|---|---|---:|---|---|
| `cocciante-cocciante1991` | Cocciante | 1991 | studio | ADD |
| `cocciante-eventiemutamenti` | Eventi e mutamenti | 1993 | studio | ADD |
| `cocciante-unuomofelice` | Un uomo felice | 1994 | studio | ADD |
| `cocciante-innamorato` | Innamorato | 1997 | studio | ADD |

**Do not confuse album IDs**: *Riccardo Cocciante* (1978) = `cocciante-riccardococciante`; *Cocciante* (1982) = `cocciante-cocciante`; *Cocciante* (1991) = **`cocciante-cocciante1991`**. The suffix is required because 1982 and 1991 original album titles are identical. Claude should ensure catalog slug uniqueness using existing project conventions and never replace either album.

**Catalogue audit:** all four albums are missing from `src/data/catalog.ts` as checked, so append original title and year under existing artist. The currently checked catalogue lists through *Cervo a primavera* (1980). Prior delivered phase-03 rows (*Cocciante* 1982, *Sincerità* 1983, *Il mare dei papaveri* 1985, *La grande avventura* 1987) and their additions must be preserved separately. `Il mio nome è Riccardo` (1994) is expressly a **compilation** (RAI), do not create a separate studio descriptor. *Ancora insieme* (1992) is also a collection; *Istantanea* (1998) is live. *L'instant présent* (1995) contains French versions of songs adapted for *Innamorato* (1997), not a second Italian studio title for this phase. *Un hombre feliz* (1995) is Spanish-language adaptation of *Un uomo felice*.

**No new genre, instrument or production tokens**: all values in this batch are existing code-list tokens as checked on GitHub; no changes needed to `scenes.ts`, `instruments.ts` or `production.ts` for these rows. `voice=powerful` is artist-performance-based; Claude may blank it if demanding full-album specific vocal review; never turn it into `operatic` from the artist's later stage-composer career.

**Producer roles, special caution:**

- **1991** original Virgin LP and Sony phonograms name `Patrice Cramer` only as album producer; a separate *Se stiamo insieme* 45 names Cocciante too as a *single* producer. Leave album field as Patrice Cramer unless original LP booklet verifies co-production over the album. Mogol is lyricist, not producer.
- **1993** `Riccardo Cocciante` original Virgin producer, also corroborated by Qobuz. Leonardo De Amicis is **arranger** on some tracks; not named as this LP's producer. Do not copy his 1994/1997 credit backward.
- **1994** both `Riccardo Cocciante|Leonardo De Amicis` explicitly producers on original CD/label credits. AllMusic may identify Leonardo via the nickname `Bozo Allegro`: do not duplicate one person.
- **1997** both `Riccardo Cocciante|Leonardo De Amicis` explicitly producers in original 1997 Sony song credits; artistic producer role in AllMusic. Corporate rights holder Boventoon B.V. is **not** a third artistic producer.

**Instruments and production:** list only documented instrumentation and methods, with original credits detailed in `cocciante_phase04_evidence-notes.md`. No invented drum machines, synthesizer models, orchestral arrangement or studio setups. `strings` on 1994 is justified by violin/viola/cello credited on several album tracks; `choirvocals` means original documented choruses or backing vocals, not automatically gospel genre. *Innamorato* (1997) is sung in Italian although one song bears an English title. *Un uomo felice* has one English duet, therefore language `it|en`. The guest vocalists are *features on a solo album*, not co-billed full-album artists/influences.

**Eight scales 0–5:** album-wide editorial ratings; arguments for each value, genre weighting and exceptions in evidence notes. Fields not supported are left blank or flagged, never filled by inferring a genre from a title. `sounds_like` is blank because no album-specific critic's outside artist comparison is attested. `influenced_by` for 1991 uses Cocciante's own explicit recollection of Otis Redding and Jimi Hendrix as the rock influences revisited on the 1991 album; optional Claude downgrade noted in evidence notes. Later albums' guest, cover or co-author credits are not influences. Landmark `1` only for 1991, on the Sanremo win / comeback; 1993/1994/1997 `0`.

**Exact six files to import / inspect:**

1. `CLAUDE_IMPORT.md` (this file)
2. `cocciante_phase04_rows_ONLY.csv` (four **new** records, exact **27-column** schema, `status=draft`)
3. `cocciante_phase04_sources.csv` (original credits, independent reviews, archives, source URLs)
4. `cocciante_phase04_genre_evidence.csv` (one genre-specific line per genre on each album, with scopes)
5. `cocciante_phase04_evidence-notes.md` (all scales, instruments, producers, conflicts, exclusions)
6. `cocciante_phase04_catalog-audit.csv` (new ids, required additions and warnings)

Append only missing rows, never use phase-only CSV to replace an existing descriptor file. Run `scripts/validate-descriptors.ts` after adding catalogue albums and merging. Proceed to later work only after the existing branch and all previous phase archives have been audited for duplication.
