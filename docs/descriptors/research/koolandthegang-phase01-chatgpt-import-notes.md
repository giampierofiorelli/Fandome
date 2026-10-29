# Claude import — Kool & the Gang (Fandome phase 01)

Research date: 2026-10-29. Target repository: `giampierofiorelli/Fandome`, branch `descriptors`. **Do not commit changes without checking the present branch and resolving conflicts.** This deliverable is a research/import proposal, not a merged PR.

## The six files

1. `koolandthegang_phase01_rows_ONLY.csv`: the four original studio album drafts in the guide's **exact 27-column** schema; merge into `docs/descriptors/koolandthegang.csv` after registering the artist and albums.
2. `koolandthegang_phase01_sources.csv`: verified-source inventory (artist, label, editorial, credits, interviews).
3. `koolandthegang_phase01_genre_evidence.csv`: traceable support for genre tokens and their album-level scope.
4. `koolandthegang_phase01_evidence-notes.md`: reasoning, scope guards, producer disputes and exclusions.
5. `koolandthegang_phase01_catalog-audit.csv`: list of proposed new IDs; re-check repo state when importing.
6. `CLAUDE_IMPORT.md`: these instructions.

## Checks for importer

- Read `docs/album-descriptors-guide.md`, `src/data/scenes.ts`, `src/data/genreFamilies.ts`, `src/data/instruments.ts`, `src/data/production.ts`, and `scripts/validate-descriptors.ts` on the current branch.
- Add the artist **Kool & the Gang** with canonical new ID `koolandthegang` if absent. Add four canonical original studio LPs (1969, July 1972, November 1972, 1973). Do not confuse the 1971 live LPs with studio material.
- Preserve exact `album_id` values from audit. `Good Times` is **after** `Music Is the Message` chronologically, despite one ordering discrepancy in a website's general list.
- Check catalog for duplicates by artist/title/year in addition to IDs. A track such as `Jungle Boogie` appearing on a soundtrack/compilation is not a new Kool & the Gang studio LP.
- Keep album descriptors as `status=draft`; let a second qualified reviewer control `reviewed`. Keep empty fields empty when research is insufficient.
- The genre tokens `funk`, `souljazz`, `rnb`, `jazzfunk`, `soul`, `jazz` and all instrument/production values in this batch were checked against the repository's accepted values in research (no proposed new token).
- `sounds_like` are editorial comparisons. `influenced_by` cites Robert Bell's interviews and contemporary interpretation; **not** covers, samples or the unaccepted outside producer.
- Run repo's existing descriptor validation and any generated type/index tests; correct issues without silently altering historical credit provenance.
- Do not import external album covers or copyrighted review texts. This pack paraphrases evidence and links to its sources.

## Source/identity reservations

The 1969 debut is referenced as 1970 in some modern accounts, but official artist discography, MusicBrainz and the original LP chronology support 1969. Use 1969 for ID/year. Qobuz/modern reissues can add songs or show track-level Gene Redd Jr. roles; these do not overturn original album-wide credits. Detailed uncertainty and scope are in evidence notes.

## Claude import note (Oct 2026)

- The band's own production credit dropped (Music Is the Message, Good Times, Wild and Peaceful). Artist added with the studio discography (23 albums, holiday and remix albums left out); scene US en 1960 funk,soul,jazz; still touring.
