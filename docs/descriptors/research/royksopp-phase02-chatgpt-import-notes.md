# Fandome / Röyksopp — Phase 02, STRICT INCREMENT

Only **Senior (2010)**, **The Inevitable End (2014)**, and **Profound Mysteries (first installment, April 2022)**. **No** preceding albums, other artists, sequels or later remix albums in the descriptor rows. All rows are `draft`, in original 25-column schema. This is a manual review package, not a claimed GitHub write.

## Seven files

1. `royksopp_phase02_rows_ONLY.csv` — precisely 3 new descriptor rows.
2. `royksopp_phase02_sources.csv` — per-album critical, primary and credit references with URLs.
3. `royksopp_phase02_genre_evidence.csv` — every genre token backed by album/track scope and evidence keys.
4. `royksopp_phase02_evidence-notes.md` — thorough per-column editorial calibration and uncertainties.
5. `royksopp_phase02_catalog-audit.csv` — exact existing IDs and necessary addition.
6. `append_phase02.py` — idempotent guarded append, refuses collisions with differing data.
7. `CLAUDE_IMPORT.md` — this file.

## Instructions to Claude

1. Check out current `descriptors` branch and read current `docs/album-descriptors-guide.md`. This batch was checked against default-branch guide SHA `e5b62ea899e699c1e77ba22b4f44137a4109c7d1`.
2. `royksopp-senior` is **MISSING** in `src/data/catalog.ts`: add exact title/year. `royksopp-theinevitableend` and `royksopp-profoundmysteries` are already present; no duplicate catalog insertion.
3. New-to-default token `ambientbreakbeat` is **explicitly** present in AllMusic classification (Ambient Breakbeat); add to genre union/catalogue, validator and guide if approved. `downtempo` and `downbeat` are absent on the **default** guide but were already proposed in phase 01; **recheck** branch before re-adding them. All existing legitimate genre tokens may have multiple entries; do not apply arbitrary limits to multi-value columns.
4. **Review flags** prior to import: The Inevitable End `house` is **deliberately excluded** because no album-specific source directly attests it. Retain documented `disco` only as a one-track sound. Senior `disco` and `dance` are minority/critical-comparison tags. Profound Mysteries aggregate Dork producer list includes `Madelene Eliasson`, but **precise track scope needs confirmation**; remove name rather than claim her contribution across the whole project if the primary credits cannot corroborate it. Source-critical concerns are deliberately exposed in evidence notes rather than silently buried.
5. Evaluate the **original releases**: Senior 9 cuts, The Inevitable End 12 original cuts (NOT the 5 Prologue bonus songs), Profound Mysteries first 10 cuts (NOT Volumes II or III). Album-wide metrics should reflect this original track set.
6. Merge into `docs/descriptors/royksopp.csv` on `descriptors` branch, using `python /path/to/append_phase02.py` from Fandome repo root or careful manual merge. Existing differing IDs cause a hard failure rather than overwrite. Re-running a successful import does nothing.
7. Save research files under `docs/descriptors/research/`, run `npx vite-node scripts/validate-descriptors.ts`, run project tests, commit and report real SHA. **No remote repository changes or tests were performed by this package.**

## Future (not in this ZIP)

*Profound Mysteries II* and *III* (each released separately 2022), *Nebulous Nights: An Ambient Excursion Into Profound Mysteries* (2024), and *True Electric* (2025), with cautious release-type classification. See MusicBrainz and official statements. Do not pre-import their rows from earlier packages.
