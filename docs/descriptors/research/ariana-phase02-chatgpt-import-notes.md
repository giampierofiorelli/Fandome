# Claude import — Ariana Grande / Phase 02

**Increment only / import in order.** Research snapshot: 25 October 2026. This ZIP contains precisely four new rows. Do not reimport or overwrite Phase 01 or other artists' rows. No live albums. Read `ariana_phase02_evidence-notes.md` and genre evidence before treating low-scope tokens as whole-album identity.

## Phase 02 contents

- `ariana-thankunext` — *thank u, next* (2019), studio — existing catalogue album
- `ariana-positions` — *Positions* (2020), studio — existing catalogue album
- `ariana-eternalsunshine` — *Eternal Sunshine* (2024), studio — existing catalogue album
- `ariana-wickedthesoundtrack` — *Wicked: The Soundtrack* (2024), soundtrack — **add to catalogue**, recorded by the multi-artist Wicked film cast; Ariana Grande and Cynthia Erivo are main billing

## Catalogue addition

`['Wicked: The Soundtrack', 2024]` under artist `ariana` (type soundtrack in descriptors), with expected computed ID `ariana-wickedthesoundtrack`. The standard 2024 songs album is distinguished from a separate instrumental score album, 2024 sing-along editions, 2025 commentary edition and the 2025 follow-up film. Preserve multi-artist billing in connected metadata: other cast tracks do not all feature Ariana.

## New genre token

- `musicaltheatre`: explicit *Wicked* soundtrack category (AllMusic “Musicals”; Qobuz “Musical Theatre”; original Broadway musical). Add to `src/data/scenes.ts` Genre, `src/data/genreFamilies.ts` parents (suggest `['soundtrack','showtunes']`, making sure both exist), and the validator GENRES set before running validation. This is not equivalent to `classical` or `opera`.

## Credit caveats

- *thank u, next*: `producers` includes direct full/track production and independently credited co-production. Vocal-only and additional-producer roles are identified in notes and left out pending role decision; no writers/mixers added by association.
- *Positions*: source disagreement regarding Ariana Grande as music versus vocal producer; excluded pending track master check. Other lesser-known producer names come from original track credits (see Qobuz/MusicBrainz).
- *Eternal Sunshine*: includes track music producers Ariana Grande, Max Martin, ILYA, DaviDior etc. Peter Kahm is only a writer in the verified Qobuz original master and is excluded. Disco/house/alt are track-scoped; original standard album only.
- *Wicked*: credited producer trio Stephen Schwartz, Stephen Oremus, Greg Wells from label masters; theatrical vocal production and film-level executive music roles differentiated. Musical comparisons should not become inferred influences.
- All scales 0–5 use the established anchor guide, not artist averages. `influenced_by` left empty unless actual influence substantiated. **There are NO per-column cardinality limits except the 15-word notes field.**

## Files

1. `ariana_phase02_rows_ONLY.csv`: exactly 25 columns and only four incremental rows.
2. `ariana_phase02_sources.csv`: record of album-specific reviews, credits, originals and supported claims; codes embedded in source names.
3. `ariana_phase02_genre_evidence.csv`: a distinct source-and-scope record for each genre token in the four rows.
4. `ariana_phase02_evidence-notes.md`: album-by-album scoring justification, disagreements, credit scope, uncertainty.
5. `ariana_phase02_catalog-audit.csv`: existing vs new album IDs and editions.
6. This import file.

## Next phase

Phase 03: *Wicked: For Good* (2025) and *Petal* (2026) after release/merit verification, plus any separately qualifying non-live independent soundtrack or collaboration. No live albums or routine deluxe reissues.

## Validation / import

1. Verify `docs/descriptors/ariana.csv` on current `descriptors` branch and import Phase 01 first if not yet in GitHub.
2. Update catalogue for `ariana-wickedthesoundtrack`; retain original IDs of three existing albums.
3. Add `musicaltheatre` to genre type/families/validator. Inspect any credit ambiguities flagged above.
4. Append only these four descriptor rows; never replace prior rows.
5. Run `npx vite-node scripts/validate-descriptors.ts` and project tests. All rows remain `draft` pending second review.
