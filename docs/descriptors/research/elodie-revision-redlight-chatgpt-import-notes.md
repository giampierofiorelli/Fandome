# CLAUDE_IMPORT — Elodie existing-row REVISION (Red Light onward)

## Do this

1. Read `docs/album-descriptors-guide.md`, existing `docs/descriptors/elodie.csv`, scene tokens, genre families, validator.
2. **Replace**, not append, EXACTLY two existing rows by `album_id`: `elodie-redlight` and `elodie-miamimiodi` from `elodie_redlight_revision_rows_REPLACE.csv`. Preserve all four other Elodie rows. Keep the given 25-column order. IDs and types already valid in repository.
3. Review `elodie_redlight_revision_changes.csv` for field-by-field differences; `elodie_redlight_revision_catalog-audit.csv` shows existing catalog entries and edition choices.
4. Read supporting genre/source/evidence files. Newly proposed genre tokens to add to union, families, guide and hardcoded validator if currently absent: **none expected** for these two rows (verify). Strong caution: low-scope techno, trance, EDM, afrobeat, poprap, contemporaryrnb MUST NOT be counted as dominant just because they occur somewhere in the genres string; the current Fandome schema loses scope if the importer ignores the evidence companion.
5. `influenced_by` Red Light: Madonna is supported **directly** (artist cites Confessions Tour; artist listens to Hung Up) and also journalist attribution. Duke Dumont and Fred again.. are **critic-inferred**, Beyoncé/ Myss Keta are **critical references with less causality certainty**; consider keeping only Madonna if algorithm treats any member of the `influenced_by` column as equally confirmed causal. Never write *Erotica* or *Sex* as proven inspirations; no retrieved contemporary source explicitly names them.
6. Voice classifications are **provisional**. Red Light `raspy` comes from a label's career voice profile, not album track listening. Mi Ami Mi Odi `soft|rap` are track-local. The assistant has not personally auditioned the albums; second reviewer should audit samples, abstain if needed. Never promote source generalities to certainty.
7. The album *Mi Ami Mi Odi* is standard 12-track edition. Do not include bonus `Yakuza` or Rvssian in standard producer set. Track-level credits checked against Qobuz; please independently check MusicBrainz's release-level claims for Elodie and Davide Simonetta.
8. Keep `status=draft`; run `npx vite-node scripts/validate-descriptors.ts` and tests before merge. Do not change GitHub without user's workflow.

## Deliverable files

- `elodie_redlight_revision_rows_REPLACE.csv` — only two replacement rows, not a complete six-row file
- `elodie_redlight_revision_sources.csv` — source keys and claim support
- `elodie_redlight_revision_genre_evidence.csv` — each genre's scope
- `elodie_redlight_revision_evidence-notes.md` — detailed judgment and uncertainties
- `elodie_redlight_revision_catalog-audit.csv` — IDs and release edition
- `CLAUDE_IMPORT.md` — these instructions

This ZIP contains the six standard files. The optional changes.csv is available in build working folder, not required for import.
