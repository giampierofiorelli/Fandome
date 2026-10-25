# CLAUDE_IMPORT — Kraftwerk / Phase 01 (read-only handoff)

## Package (six files; **only four new descriptor rows**)

- `CLAUDE_IMPORT.md` (this file)
- `kraftwerk_phase01_rows_ONLY.csv` — exact 25-column header, 4 rows, `status=draft`
- `kraftwerk_phase01_sources.csv` — source ID within `source`, original links, claim scope, strength
- `kraftwerk_phase01_genre_evidence.csv` — one row for **each** selected token per album, separate track/album scope
- `kraftwerk_phase01_evidence-notes.md` — why each editorial score, style and influence was or was not selected
- `kraftwerk_phase01_catalog-audit.csv` — existing/new album ids and edition constraints

## Phase 01 contents

1. `kraftwerk-kraftwerk` — **Kraftwerk** (1970, studio): add to catalog.
2. `kraftwerk-kraftwerk2` — **Kraftwerk 2** (1972, studio): add to catalog.
3. `kraftwerk-ralfundflorian` — **Ralf und Florian** (1973, studio): add to catalog. Alternative issue title *Ralf & Florian*.
4. `kraftwerk-autobahn` — **Autobahn** (1974, studio): already in catalog; keep this ID.

GitHub artist ID `kraftwerk` confirmed; `docs/descriptors/kraftwerk.csv` did not exist on branch `descriptors` at inspection time. Recheck branch before import; merge by album ID rather than overwriting any other artist or later additions.

## Genres requiring addition (if retained)

The following 7 tokens **do not exist** in the inspected Fandome Genre union/validator; each is explicitly sourced and restricted by scope in genre evidence:

- `artrock`: proposed parents `rock|prog`
- `avantgarde`: proposed parents `experimental`
- `berlinschool`: proposed parents `progressiveelectronic|electronic`
- `drone`: proposed parents `ambient|experimental`
- `experimentalelectronic`: proposed parents `experimental|electronic`
- `musiqueconcrete`: proposed parents `experimental|electronic`
- `postminimalism`: proposed parents `electronic|experimental`

Update `src/data/scenes.ts`, `src/data/genreFamilies.ts`, **and** `scripts/validate-descriptors.ts` before validation. These are suggestions for review, not edits to GitHub. Existing genre tokens need no changes.

## Critical factual and modelling cautions

- Exclude *Tone Float* (1970): issued under **Organisation**, predecessor group, not an album released by Kraftwerk. If later added as a landmark collaboration/prehistory, document that separately and do not duplicate here.
- First three Kraftwerk albums are not early versions of their fully programmed later synth-pop: recordings feature violin, flute, organs, guitars, drums and tape experiments. Thus none receives `electronic=5` merely from artist reputation.
- Producer roles: debut original sleeve names **Kraftwerk + Conny Plank**; second album **Hütter + Schneider + Plank**; third and fourth **Hütter + Schneider**, with Plank credited as **engineer** on those releases. Do not silently copy personnel across all records.
- On *Ralf und Florian*, alternate album-title spellings and wordless vocoder pieces do not prove that the lead language is German; leave language/lyrics unknown. The `berlinschool` style tag does not imply the recording was produced in Berlin.
- On *Autobahn*, the Beach Boys connection is a sonic analogy, *not verified direct influence*: Ralf Hütter has explicitly rejected the supposed direct lyrical quote. Do not populate `influenced_by` from similarities. The album includes calmer side B.
- `dance` on the 1970 debut comes only from AllMusic's unusually broad Club/Dance parent category, and is **explicitly weak metadata, not dominant danceability**. If your genre governance excludes catalog-only umbrella labels, remove this token and matching genre-evidence line in a documented review. Likewise `synthpop` and `electrofunk` on Autobahn are **precursor** language in expert commentary.
- Retain original 1970, January 1972, 1973 and November 1974 release years; do not mistake 1971 *Kraftwerk 2* recording dates for 1971 publication. Distinguish original 1974 LP title track from 1975 edited single.

## Import procedure

1. Compare ids in branch `descriptors`; append only absent ids and add only three missing catalogue tuples in chronological order.
2. Review each genre strength/scope and add missing tokens/parents and validator entries only if retaining them.
3. Run `npx vite-node scripts/validate-descriptors.ts` and project tests/build.
4. All rows stay `draft` pending second review. Never claim the full app tests ran merely because the CSV shape was locally checked.

## Next chronological phase: Phase 02

1. **Radio-Activity** (1975; German original *Radio-Aktivität* and English-language versions to audit)
2. **Trans-Europe Express** (1977; German original *Trans Europa Express* to audit)
3. **The Man-Machine** (1978; German *Die Mensch-Maschine* to audit)
4. **Computer World** (1981; German *Computerwelt* to audit)

All four appear in current catalog under the English names; preserve those generated IDs. Later phases should examine **Electric Café** (1986), influential remix album **The Mix** (1991), **Tour de France Soundtracks** (2003) and other genuinely distinct landmark projects; avoid ordinary greatest-hits collections and live re-recordings absent a separate significance threshold.
