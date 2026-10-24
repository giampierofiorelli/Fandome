# Fandome — Elisa Phase 02 ONLY — increment 2026-10-24

## Exact new descriptors
- `elisa-lotus` — **Lotus**, 2003, studio
- `elisa-pearldays` — **Pearl Days**, 2004, studio
- `elisa-heart` — **Heart**, 2009, studio

Only these three rows. **Do not reimport phase 01** (`Pipes & Flowers`, `Asile’s World`, `Then Comes the Sun`) and do not touch any other artist. `Heart` is absent from `src/data/catalog.ts` as of October 24 and **must be added** with title **Heart** and year **2009**; other two already exist. The new ID derives automatically from the repository slug rule as `elisa-heart`.

## Package contents (seven files)
1. `elisa_phase02_rows_ONLY.csv` — three rows, 25 precise columns.
2. `elisa_phase02_sources.csv` — 20 entries (19 distinct URLs), each with support and strength.
3. `elisa_phase02_genre_evidence.csv` — 16 precise genre attestations, with scope and review flags.
4. `elisa_phase02_evidence-notes.md` — scoring explanations and source disagreement.
5. `elisa_phase02_catalog-audit.csv` — ID/catalog audit.
6. `append_phase02.py` — collision-safe, atomic, repeatable CSV append.
7. `CLAUDE_IMPORT.md` — this file.

## Required action for Claude
1. Work on the **`descriptors` branch**, never overwrite earlier committed rows. This research read guide SHA `e5b62ea899e699c1e77ba22b4f44137a4109c7d1` from GitHub default branch; reread the *live branch guide and validator* before merge.
2. Add **Heart (2009)** as a new Elisa catalog album (ID `elisa-heart`) before running the Fandome validator. The existing catalog already contains **Lotus** and **Pearl Days**.
3. Genre tokens not in that guide/validator yet, used across this phase: `electronica`, `alternativerock`, `poprock`, `indierock`, `adultalternativepoprock`. **All were already proposed in Elisa Phase 01**; reconcile against actual validator before adding anything. `electronica` is not always synonymous with the broader `electronic`.
4. Carefully distinguish `Lotus` original **2003** (not AllMusic regional 2004 issue) studio acoustic reinterpretations from a concert/live recording; `Pearl Days` original **ten-track 2004 edition** (not later eleven-track bonus), `Heart` original **fourteen-track 2009 edition**.
5. From Fandome repo root run `python /path/to/extracted/append_phase02.py`, OR merge *only three* identical rows manually. Re-running is safe; script refuses conflicts. Do not copy the entire ZIP contents into `docs/descriptors/` (contains research/README and script, not only CSV).
6. Copy supporting evidence into `docs/descriptors/research/` using distinct phase02 names. Run `npx vite-node scripts/validate-descriptors.ts`, relevant tests/typechecks, commit on `descriptors`, report actual commit SHA. ChatGPT has not pushed to GitHub.
7. The guide says **no arbitrary number-of-values limit** for any multi-value column. `notes` alone is constrained to 15 words. All rows remain `status=draft`; missing `sounds_like`/`influenced_by` is deliberate abstention.

## Remaining Elisa projects (not included)
*Ivy* (2010), *L'anima vola* (2013), *On* (2016), *Diari aperti* (2018), *Ritorno al futuro/Back to the Future* (2022), plus other editions/releases to check separately. **Kintsugi** is announced for Nov 27, 2026, after the current research cutoff; not included as released.
