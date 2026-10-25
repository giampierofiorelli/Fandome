# CLAUDE IMPORT — Mariah Carey Phase 04 (4 new rows only)

Research cutoff **2026-10-25**. Repository `giampierofiorelli/Fandome`, branch `descriptors`. **Research-only handoff**, not a commit or automatic merge.

## Scope and contents

1. `mariah_phase04_rows_ONLY.csv`: four new 25-column descriptor rows; all `status=draft`.
2. `mariah_phase04_sources.csv`: directly linkable source registry; indexed keys M01–M07, C01–C08, W01–W06, H01–H09.
3. `mariah_phase04_genre_evidence.csv`: EVERY assigned genre mapped to sources, strength and scope.
4. `mariah_phase04_evidence-notes.md`: numeric scoring, voice, mood, provenance and opposing views.
5. `mariah_phase04_catalog-audit.csv`: exact expected IDs and catalog actions.
6. This `CLAUDE_IMPORT.md`.

## Import and catalog

- GitHub `docs/descriptors/mariah.csv` was observed to contain **four Phase 01 rows only** (1990, 1991, 1993, 1994), with Phase 02 and Phase 03 presumably still awaiting import. **Do not redo, overwrite, or backfill those phases from this file**. Check HEAD before merge, append only IDs absent in target.
- New catalog albums: **Merry Christmas II You** (2010), **Me. I Am Mariah... The Elusive Chanteuse** (2014), **Caution** (2018). Existing catalog **Here for It All** (2025) has the generated catalog ID `mariah-hereforitall` and must not be reintroduced under a new ID.
- The exact project slug function removes punctuation and spaces (rather than replacing them with hyphens). In particular: `mariah-meiammariahtheelusivechanteuse`.
- Do **not** reclassify 2010 holiday studio album as compilation or live: the recording repertoire includes an archival live track, but album type is studio. Original *Oh Santa!* Jump Smokers remix is a bonus and excluded from album scoring. Original *Caution* ten tracks exclude Japan-only Runway.
- **No new genre tokens** are proposed. Current guide/validator already allow `christmas`, `popsoul`, `quietstorm`, `nusoul`, `hiphopsoul`, `doowop`, `downtempo`, `dancehall`, `trap`. Compile with existing tokens; verify against HEAD.
- The 2025 album's `rap` influence from *Type Dangerous* is an instrumental sample and hip-hop heritage; `voice` does **not** claim Carey herself raps. *Caution* and *Me. I Am Mariah* feature guest rappers; if the UI treats `voice` as lead singing only, drop `rap` from those vocal lists and use a feature-specific future taxonomy.
- `producers` field contains only confirmed credited music producers (including co-/additional producers when explicit), NOT executive-only producer L.A. Reid, guest singer, instrumentalist, songwriter or mix engineer.
- `mood` independent from dance tempo/energy: 2010=4, 2014=3, 2018=3, 2025=2; see evidence-notes for sourcing and uncertainties.
- All `sounds_like` and `influenced_by` intentionally blank pending robust album-scoped defensible evidence. **Do not fill simply from sampled artists or invited collaborators.**

## Checks Claude should run

Append only newly indexed albums to `src/data/catalog.ts`, then merge incremental descriptor rows into `docs/descriptors/mariah.csv` respecting existing order/IDs. Add research files under `docs/descriptors/research/` without overwriting phase 01–03. Run `npx vite-node scripts/validate-descriptors.ts` and current project test suite. If any producer credit conflicts, validate with original booklet or Qobuz and log exact change. Evaluate whether track-level genre tags should be downweighted in ranking.

## Next steps

**All original full-length Mariah Carey studio albums and the major Glitter soundtrack through October 2026 are now covered across phases 01–04**, assuming independent import of the preceding phases. Live recordings, remix packages, reissues, and non-landmark compilations remain outside user scope. Other film soundtrack participation may be audited separately if requested.
