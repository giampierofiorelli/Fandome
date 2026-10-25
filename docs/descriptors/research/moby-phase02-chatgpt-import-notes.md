# Fandome — Moby Phase 02 import

Research cutoff: 2026-10-25, GitHub source branch `descriptors` read only.

## Scope — EXACTLY four new rows, no replays of Phase 01

1. `moby-animalrights` — **Animal Rights** (1996), studio; existing catalog album.
2. `moby-play` — **Play** (1999), studio; existing catalog album.
3. `moby-18` — **18** (2002), studio; existing catalog album.
4. `moby-hotel` — **Hotel** (2005), studio; existing catalog album.

Import only `moby_phase02_rows_ONLY.csv`; append to `docs/descriptors/moby.csv` after any imported Phase 01 rows, without duplicating them. **Do not replace Phase 01**. At research time `docs/descriptors/moby.csv` was not found in the remote branch. Do not fabricate an empty file if Claude already imported Phase 01; inspect the live working tree first.

## Files

- `moby_phase02_rows_ONLY.csv`: four 27-column draft descriptor rows.
- `moby_phase02_sources.csv`: 43 documented source references.
- `moby_phase02_genre_evidence.csv`: 61 genre assignments, each separately sourced and scoped.
- `moby_phase02_evidence-notes.md`: line-by-line reasoning, technical caveats, critical disagreements and editions.
- `moby_phase02_catalog-audit.csv`: album ID/availability, status and catalogue action.
- `CLAUDE_IMPORT.md`: this file.

## Catalogue additions

None. `moby` and all four albums already exist in `src/data/catalog.ts` with the exact derived IDs above. The catalogue already lists *Everything Is Wrong* (1995) in earlier Phase 01, and *Wait for Me* (2009) for a later phase. **No updates to artist catalog for this phase**.

## Co-billed albums

None. Guests on *18* and *Hotel* are not co-billed album artists. No `coBilled.ts` changes.

## Newly required exact tokens

- Genres: `ambienttechno`, `alternativeindierock`, `posthardcore`. `ambienttechno` was **already proposed in Moby Phase 01**; add only if not imported yet. Distinguish `alternativeindierock` (AllMusic alternative/indie rock) from existing `alternativepoprock` and `adultalternativepoprock`. Update `scenes.ts`, `genreFamilies.ts`, and the validator's own list. Suggested parent chains: `ambienttechno → ambient|techno`; `alternativeindierock → alternativerock|indie`; `posthardcore → punkrock`.
- Instruments: **none**; all this phase's tokens already exist in `instruments.ts`.
- Production: `emuproformance` (E-mu Proformance piano module), `spx900` (Yamaha SPX900), `overdubbing` (studio layering of separate performances). `sy22` and `sy85` were already proposed in Moby Phase 01 and may still need adding; all other production tokens already belong to the branch guide. Update `production.ts` before validator if any missing.

## Import cautions

- *Animal Rights*: Original UK 1996 versus US 1997 issue and *Little Idiot* bonus CD; keep Moby sole **producer**; Alan Moulder engineer/mixer, **not** a credited co-producer in 1996 UK release.
- *Play*: sampled archival voices are **not** session guests. Moby describes the period's Akai 3200/Cubase/TR909 workflow and preserved noisy source material in a 2000 *Sound On Sound* interview; 1999 artist interview documents cassette demos. No full-album Pro Tools claim. Specific gear from one song does **not** mean every track used the same hardware.
- *18*: older samples and guest singers both appear; do not assume all gospel choir passages are sampled. 2024 `Extreme Ways` tutorial **recreates** instrument parts and is not original 2002 multitrack provenance; avoid claiming that every recreation instrument is an exact original take.
- *Hotel*: the record was produced by Moby and mixed/engineered partly by Brian Sperber. Contemporary interviews describe *zero sampled vocals* and many overdubbed live instrument parts, not an electronic-free record. The bonus *Hotel: Ambient* is separate from the standard core album.
- Critical controversy is not erased: negative AllMusic assessment of *Animal Rights*, negative Pitchfork assessment of *18*, and disagreement about the merits/influences of *Hotel* are in the notes.
- Genre evidence scopes prevent track-level categories outranking dominant genres. Do not set a genre simply because a critic mentions an influence and explicitly says the record does not resemble it; the unusual `newwave|postpunk` placement for *Hotel* deserves reviewer confirmation.

## Next phase — 03

Chronological studio albums: *Last Night* (2008), *Wait for Me* (2009), *Destroyed* (2011), *Innocents* (2013). Check separately whether additional non-studio albums or a landmark release deserves inclusion; no live or compilation by default.

## Import checks

Append four unique rows; register missing tokens; run `npx vite-node scripts/validate-descriptors.ts` and project tests. This ZIP does not modify GitHub.
