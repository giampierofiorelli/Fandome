# CLAUDE_IMPORT — Dire Straits, Phase 02

## What this archive contains

Exactly **two new studio-album rows** under artist ID `direstraits`:

| album_id | Artist | Album | Year | Type |
|---|---|---|---|---|
| `direstraits-brothersinarms` | Dire Straits | Brothers in Arms | 1985 | studio |
| `direstraits-oneverystreet` | Dire Straits | On Every Street | 1991 | studio |

This is **strictly incremental** to Phase 01. Do not reimport the 1978, 1979, 1980 and 1982 records, and do not overwrite them.

## Files and installation

- `direstraits_phase02_rows_ONLY.csv`: precisely 27 columns and only two rows; append to `docs/descriptors/direstraits.csv` (or create if absent), preserving existing contents.
- `direstraits_phase02_sources.csv`: per-album source/claim register.
- `direstraits_phase02_genre_evidence.csv`: each listed genre with source and album/track scope.
- `direstraits_phase02_evidence-notes.md`: scale rationale, instrumentation and caveats.
- `direstraits_phase02_catalog-audit.csv`: exact catalogue resolution.
- This import guide.

## Catalogue and double billing

The artist `direstraits` and both albums **already exist** in `src/data/catalog.ts` at the time checked; no catalogue additions are required. `seed.ts` has no alternative short ID. No co-billed album credits are involved. Do not add solo Mark Knopfler material here.

## New tokens

Add to **instruments** vocabulary: `vibraphone` (Mike Mainieri’s vibes on *Brothers in Arms*).

Add to **production** vocabulary: `sonypcm3324` (Sony PCM-3324 digital multitrack tape machine) and `yamahadx1` (Yamaha DX1 synthesizer). These specific models are documented in the evidence notes. **Do not** remap `yamahadx1` to `dx7`. No new genres are proposed. Ensure your validator accepts the new tokens before importing.

## Caveats

1. *Brothers in Arms* original LP uses shorter song edits than the original CD; both are one studio album. Original producer credit: Mark Knopfler and Neil Dorfsman. Its digital recorder is NOT a drum machine; `electronic` scores sound sources, not recording medium.
2. *On Every Street*: official producers are Mark Knopfler and **Dire Straits**, not Chuck Ainlay or Neil Dorfsman (engineer/mixer). `digitalrecording` uses DDD on a CD edition, not a verified model name. No original 1991 synth or recorder model is inferred.
3. Both `influenced_by` fields are intentionally empty for lack of album-specific artist/producer testimony. `sounds_like` is editorial judgement. `On Every Street` has track-specific folk and rockabilly styles ordered below whole-album genres.
4. Scores 0–5 are editorial evaluations supported by the album-specific evidence. All statuses `draft` pending independent review.

## Next phase

**No Phase 03 is needed** for Dire Straits studio albums: *On Every Street* (1991) was the last released studio record. Live albums and compilations excluded per project rules.

## Validation for Claude

Check headers/IDs/canonical genre families; integrate new allowed tokens; run `npx vite-node scripts/validate-descriptors.ts` and your normal test suite. No GitHub writes were performed by this research batch.


## Claude import note

- 2 rows appended; vibraphone mapped to the existing mallets token (not a new instrument).
- New production tokens: sonypcm3324, yamahadx1.
- Reception researched by Claude.
