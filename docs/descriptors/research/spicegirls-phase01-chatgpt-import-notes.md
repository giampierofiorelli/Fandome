# CLAUDE_IMPORT — Spice Girls Phase 01

## Scope and files

**Snapshot:** GitHub branch `descriptors`, consulted 25 October 2026 (read only). Contains **three** new descriptor rows and five additional research/audit files. The CSV includes exactly 27 descriptor columns in the guide's order. Do not import prior phases/other artists.

Albums:

- `spicegirls-spice` — **Spice** (1996), `studio`
- `spicegirls-spiceworld` — **Spiceworld** (1997), `studio`
- `spicegirls-forever` — **Forever** (2000), `studio`

## Catalogue audit

Artist ID `spicegirls` already exists in `src/data/catalog.ts`; all three core studio albums are present with the exact IDs above. `docs/descriptors/spicegirls.csv` was **not found** at research time, so all three descriptor rows are newly proposed, with **zero album additions** needed. If Claude sees a newer descriptor file than the examined branch, perform ID-level deduplication **before** merging. The `catalog-audit.csv` is intentionally exhaustive for this phase.

## Additions to catalogue, co-billed entries, new tokens

- **New catalogue albums:** none.
- **New co-billed albums:** none; producers and guest musicians do not constitute co-billing.
- **New genre tokens:** none. `dancepop`, `northernsoul`, `gfunk`, `blueeyedsoul`, `doowop`, `synthfunk`, `newjackswing`, `freestyle`, `bigband`, `contemporaryrnb` and `garage` already exist in `scenes.ts` at research time. Preserve minor-track genre ordering; the accompanying genre evidence file marks scope.
- **New instrument tokens:** none. All filled entries are in `src/data/instruments.ts`.
- **New production tokens:** none. `sampling`, `layeredvocals`, and `protools` are currently allowed by `src/data/production.ts`.

## Crediting and verification caveats

1. *Spice* Andy Bradfield is a documented **additional/co-producer** on tracks; do not confuse with mixing-only credits. `Absolute` is the credited production partnership Andy Watkins/Paul Wilson.
2. *Spiceworld* producers are `Richard Stannard|Matt Rowe|Absolute`. Its *Spice World* movie association does not create an extra soundtrack album row; the core album is described as studio.
3. *Forever* source credits distinguish full producers from vocal producers, engineers, mixers and arrangers. Its Robert Smith is a music-credit entry; **do not link automatically to Robert Smith of The Cure**. LaShawn Daniels and Eliot Kennedy/Sue Drake have vocal-production roles requiring care, not automatic elevation to main producer status.
4. `protools` for *Forever* comes from a secondary transcription of album liner notes; verify booklet if possible. `synth` and `acousticguitar` are specifically identified by track reviews. No signature hardware is extrapolated from the period or genre.
5. `influenced_by` for all three albums reflects **qualified critic statements**, not direct quotes from the band; consider these lower-evidence links until first-person corroboration. `sounds_like` is Fandome's editorial resemblance field.
6. There are **no separate released studio albums after Forever** as of 25 October 2026. The 2007 *Greatest Hits* is a retrospective compilation and does not pass the user's landmark-record inclusion threshold; “Headlines (Friendship Never Ends)” and “Voodoo” are individual compilation tracks, not a new studio album. Anniversary reissues are the same original works.

## Next phase

**No Phase 02 is planned:** all three studio LPs are included in Phase 01. Only undertake a distinct later phase if an independently important EP, remix, soundtrack or co-billed album is documented (do not invent extra releases just to fill a phase).

## Import workflow

1. Re-check current catalogue/descriptor state and source URLs; merge only missing new rows into `docs/descriptors/spicegirls.csv` using the 27-column header.
2. Check source-supported minor genre scoping and flag all critic-derived influence links for human review.
3. Run the repository's descriptor validator and tests as normal. The ZIP is **research only**; it does not contain scripts and has not edited GitHub.
