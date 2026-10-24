# CLAUDE IMPORT — Lady Gaga Phase 02 (incremental; 2026-10-24)

## Import scope
Exactly **4 new rows** in `gaga_phase02_rows_ONLY.csv`. Do NOT copy or re-import any Phase 01 rows. Do NOT mix phases or artists.

| Album ID | Release (original) | Year | Type | Current Fandome catalogue |
|---|---|---|---|---|
| `gaga-cheektocheek` | *Cheek to Cheek* (Tony Bennett & Lady Gaga) | 2014 | studio | ADD |
| `gaga-joanne` | *Joanne* | 2016 | studio | ADD |
| `gaga-astarisborn` | *A Star Is Born* (with Bradley Cooper, film soundtrack) | 2018 | soundtrack | ADD |
| `g-chromatica` | *Chromatica* | 2020 | studio | ALREADY in `src/data/seed.ts`: preserve exact ID |

`gaga` comes from the fixed original artist room in `seed.ts`, rather than a `catalog.ts` row. Fandome's original seed IDs (e.g. `g-chromatica`) override slug-generated IDs. The newer missing titles use `gaga-` plus normalized album title. No `gaga.csv` was found on the `descriptors` branch at read time: **Phase 01 is not yet committed there**, so Claude must not mistake absence in the branch for a reason to regenerate Phase 01.

## Files in this ZIP
1. `CLAUDE_IMPORT.md` (this file)
2. `gaga_phase02_rows_ONLY.csv` (25-column header plus 4 rows, `status=draft`)
3. `gaga_phase02_sources.csv` (full source title, original verified URL and evidentiary role)
4. `gaga_phase02_genre_evidence.csv` (one row per album-genre, scope and cited source keys)
5. `gaga_phase02_evidence-notes.md` (scale justification, source disagreement, credit decisions)
6. `gaga_phase02_catalog-audit.csv` (existing vs missing catalogue entries)

## Catalogue additions
- **Cheek to Cheek (2014; studio)** — special collaboration with Tony Bennett; original *standard* 2014 version. `artist` field is Lady Gaga for the Gaga room, but album should retain joint credit in shared catalogue display if app supports it.
- **Joanne (2016; studio)** — original 11-track version, not 14-track deluxe.
- **A Star Is Born (2018; soundtrack)** — actual original 34-track film album with Bradley Cooper, including dialogue.
- **Chromatica (2020; studio)** — do not add a duplicate; Fandome original ID `g-chromatica`.

## NEW genre tokens proposed
`vocaljazz`, `swing`, `bigband`, `traditionalpop`, `countrypop`, `pianorock`, `americana`, `countryrock`, `bluesrock`, `eurohouse`.

Add them to `src/data/scenes.ts` `Genre` and `GENRE_LABELS`, define genre parents in `src/data/genreFamilies.ts`, and update the hardcoded `GENRES` set in `scripts/validate-descriptors.ts`. `traditionalpop`, `swing` and `bigband` are historical/jazz-related; avoid automatically mapping all to contemporary chart pop. Parent relationships require deliberate curation by Claude. **No limit** is imposed on multi-valued columns; only notes have a 15-word maximum.

## Critical caveats
- *Cheek to Cheek*: original album only, jointly credited to Tony Bennett. Qobuz and Apple track credits establish Dae Bennett as producer; AOTY also lists Gretchen Anderson as producer, but that addition must be checked against original printed liner notes. An executable import requiring all names proven by primary liner documentation may temporarily omit Gretchen.
- *Joanne*: official album credits include Jeff Bhasker/Josh Homme as credited co-producers. RedOne only appears on the **deluxe** *Angel Down (Work Tape)* and is intentionally not added to original standard-edition row.
- *A Star Is Born*: precise 34-track release includes 15 spoken dialogue tracks. Producers are **track producers** listed by Universal Music, not all songwriters. Mark Ronson co-wrote *Shallow* but did not produce its released soundtrack recording.
- *Chromatica*: interludes count in all-record scale; Universal specifies the producer vs *additional producer* statuses for Max Martin, Tchami and Rami Yacoub. `sounds_like` is editorial resemblance; influence `Daft Punk` is only documented for *911* by NME.
- All source evidence is scoped; low-salience one-track genres must **not** be read as album-wide genres. Lyrics and sonic scores refer to album as a whole.

## Next phase (Phase 03; prepare only after this import)
1. *Dawn of Chromatica* (3 September 2021; significant remix album)
2. *Love for Sale* (1 October 2021; collaborative studio album with Tony Bennett)
3. *Harlequin* (2024; companion studio album inspired by *Joker: Folie à Deux*)
4. *Joker: Folie à Deux* (2024; separately released film soundtrack; audit eligibility and original soundtrack credits before final inclusion)

**Chronology for Phase 03 must be** *Dawn of Chromatica* (3 Sep 2021), *Love for Sale* (1 Oct 2021), *Harlequin* (27 Sep 2024), *Joker: Folie à Deux* (4 Oct 2024), if the latter qualifies under the landmark soundtrack rule. *Mayhem* (2025) then belongs to Phase 04. Do not invent unreleased albums.

## Claude validation
- Merge only these four rows into `docs/descriptors/gaga.csv` (create it if Phase 01 has not been imported yet; **ideally import Phase 01 first**).
- Add three new catalogue entries, and add genre tokens to type, labels, families, validator.
- Run `npx vite-node scripts/validate-descriptors.ts` and project tests after staging. Validate that `g-chromatica` is not rewritten to `gaga-chromatica`.
- Keep `status=draft` until a second researcher or reviewer approves sources and uncertain producer metadata.
