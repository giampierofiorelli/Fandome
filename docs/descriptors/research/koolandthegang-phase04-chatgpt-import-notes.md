# CLAUDE_IMPORT — Kool & the Gang Fandome phase 04

Prepared 29 October 2026. Original studio albums: **Something Special** (1981), **As One** (1982), **In the Heart** (1983), **Emergency** (1984). Four original albums in this tranche. This ZIP does **not** include earlier 1969–1980 material, live releases, compilations or bonus remixes.

## Contents (six files)

- `koolandthegang_phase04_rows_ONLY.csv`: four researched 27-column draft album descriptor records, no merged older phases.
- `koolandthegang_phase04_sources.csv`: source provenance per original album and the field each source supports.
- `koolandthegang_phase04_genre_evidence.csv`: one row for each genre tag, with album-level versus song-level scope explicit.
- `koolandthegang_phase04_evidence-notes.md`: reasoning, technical equipment, disagreements and limits.
- `koolandthegang_phase04_catalog-audit.csv`: four import actions; compare with the actual branch before changing the catalogue.
- `CLAUDE_IMPORT.md`: these import instructions.

## Import carefully

1. Read `docs/album-descriptors-guide.md` on branch `descriptors`, its current Genre list `src/data/scenes.ts`, instrument list `src/data/instruments.ts`, production list `src/data/production.ts`, and the parser/validator at `scripts/validate-descriptors.ts`.
2. Look for Kool & the Gang in both `src/data/catalog.ts` and `src/data/seed.ts`, and for `docs/descriptors/koolandthegang.csv`. Do not assume previous phases have already been imported. Preserve actual Fandome IDs if the current repo has a different artist ID; update album IDs consistently.
3. Ensure the four original studio LPs are in the room only once. Never replace a previously reviewed descriptor blindly. Append/update drafts using exact 27 fields; preserve UTF-8 and embedded double-quoted text.
4. Integrate provenance into `docs/descriptors/research/` with filenames consistent with other phases. Do not overwrite phases 01–03 research files. The source CSV intentionally documents which claims each page supports.
5. Check genre taxonomy exactly: `rnb`, `funk`, `soul`, `disco`, `pop`, `quietstorm`, `contemporaryrnb`, `postdisco`, `electrofunk`, `adultcontemporary`. All are expected tokens; do not silently convert source genres to nearby tokens.
6. The production models listed here are documented on original LP credits: `oberheimobx`, `memorymoog`, `minimoog`, `dx7`, `yamahadx1`, `oberheimobxa`, `oberheimob8`, `juno60`. The actual Xpander is documented on Emergency but is deliberately not a token in the descriptor CSV (consult instructions if adding it).
7. `influenced_by` deliberately blank across the phase; no album-specific direct influence evidence qualified under Fandome rules. Never transform `sounds_like` editorial similarities or Deodato production credits into inferred influences.
8. Re-run `scripts/validate-descriptors.ts` or project's equivalent on the integrated data, plus any repo tests; mark `reviewed` only after a separate human review, not simply after a CSV parser passes.

`As One` includes an album-specific Cab Calloway **song tribute**, documented in the original 1982 notes. This is **not** a permitted automatic album-level `influenced_by` edge. *Something Special* is credited as produced by Deodato *in association with* the band. *Emergency* has a distinct production regime (Bell/Bonnefond/group). All genre tags have individual evidence rows and song-specific tail labels are marked.

No GitHub changes were made while preparing this package. A successful ZIP integrity test does not prove that an iPhone app will open a sandbox link.

## Claude import note (Oct 2026)

- Band self-credit dropped from producers (In the Heart, Emergency keep Ronald Bell and Jim Bonnefond).
- New production token `oberheimxpander` added (documented on Emergency's credits) to production.ts, the guide and the prompt.

## Claude enrichment (reception pass, Oct 2026)

- Reception rows appended to `docs/descriptors/reception/koolandthegang.csv`.
- sounds_like (ChatGPT's editorial lists) checked: no critic compares any of the four albums to EWF, Commodores, Chic, Gap Band, Shalamar, Prince or the Pointer Sisters; only a personal review site (warr.org) names Stevie Wonder, Marvin Gaye and Cameo for single tracks, not used. All four emptied.
