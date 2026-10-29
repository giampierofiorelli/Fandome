# Lauryn Hill — Fandome Phase 01 / Claude import

Research date: **29 October 2026**. Branch `descriptors`, **read only**. **One** original solo studio album; **one** phase. Exactly six UTF-8 files with a single 27-column descriptor row.

## Catalogue and validation

- **Proposed new artist ID:** `laurynhill` (letters only). Both `src/data/catalog.ts` and `src/data/seed.ts` were checked on 29 October 2026: no solo Lauryn Hill entry or `laurynhill` identifier. The Fugees also have no independent artist entry in those two files at check time; do not invent their records in this phase.
- Add new artist to `src/data/catalog.ts` first, with album list `[['The Miseducation of Lauryn Hill', 1998]]`. The derived album ID is exactly **`laurynhill-themiseducationoflaurynhill`**. Assign normal artist profile details using site conventions; no existing id to reuse.
- Then import `laurynhill_phase01_rows_ONLY.csv` (one new row), genre evidence and source/notes research. Run `npx vite-node scripts/validate-descriptors.ts` plus application tests after inserting the album. The CSV uses only **existing** vocabulary genre/instrument/production tokens as checked from branch files.
- **None skipped because already described:** no `docs/descriptors/laurynhill.csv` or existing solo descriptor rows. No previous Lauryn Hill phase.
- **Original release:** *The Miseducation of Lauryn Hill* (1998), `studio`; first edition 25 August 1998 (source `allmusic_album`). This is NOT the Fugees' *The Score*.

## Exclusions / next phase

- *MTV Unplugged No. 2.0* (2002) is **live**, even though many songs were new; excluded per owner's explicit rule.
- No posthumous, remix, reissue or deluxe versions are treated as original studio albums. No other solo studio LP verified through 29 October 2026.
- **Next phase: none.** One eligible solo studio album; Phase 01 completes the current request. Research the Fugees under a separate artist if requested.

## Original production and evidence caution

- `producers`: **Lauryn Hill | Vada Nobles | Ché Guevara | Don Harris** from track-level master credits, including coda *Tell Him* (Qobuz). No blanket credit granted to every New Ark member; 1998 reporting documents a contested credit history. See `laurynhill_phase01_evidence-notes.md` for exactly where the roles arise.
- `instruments` are original recording credits, not stylistic guesses. The fields `acousticguitar`, `harpsichord` and `celesta` are track-specific, not whole-record dominant instruments. Verify the audit if newer master credits change.
- Genres have 14 individual source-supported entries; tail genres describe specific tracks or textures, not the whole album. No new tokens required.
- `status=draft`, `confidence=high`, `landmark=1`. High confidence concerns overall sonic portrait, not an independently adjudicated producer-credit dispute.

## ARTIST INFLUENCES (Phase 01 only; distinguish from per-album influences)

These are **people Lauryn Hill herself identified as musical teachers/records that shaped her early listening**, in the Academy of Achievement interview [source](https://achievement.org/achiever/lauryn-hill/):

- **Stevie Wonder — *Songs in the Key of Life*:** Hill recalls her mother repeatedly playing it; hearing *Isn't She Lovely* is among her first musical memories.
- **Shep and the Limelites:** Hill identifies them among the 45 rpm recordings she listened to growing up; she describes those artists as her musical teachers.
- **Gladys Knight and the Pips:** Hill explicitly names them alongside Shep and the Limelites as foundational childhood listening.
- **Marvin Gaye — *What's Going On*:** Hill says she used to play the first side repeatedly before bed.
- **Curtis Mayfield:** Hill discusses his political/spiritual musical message in a reflective interview; note this does not automatically identify a particular Mayfield record as a direct sonic template for Miseducation.

**Album-specific influences:** Michael A. Gonzales [recounts in TIDAL](https://tidal.com/magazine/article/ms-lauryn-hill-miseducation-20-years-writers/1-52256) that Hill herself told him **Curtis Mayfield, The Temptations, Roberta Flack** records inspired her when she made *Miseducation*. Those three are listed in the album `influenced_by` field, but the account is a **reporter's recollection** rather than Hill's published direct quotation. Follow the research notes; don't upgrade its provenance. The Marley family connection, collaborators, sampled artists and Fugees are not automatically album influences.

## Contested points

1. Producer allocation: released label master and a later legal claim differ; report both without deciding an unresolved historical dispute.
2. Soul, neo-soul and R&B overlap but are individually cited, as instructed. The first genres carry the most weight; dancehall, boombap, doo-wop, funk and gospel are properly tail-tagged.
3. Pitchfork critic comparisons with Aretha/Stevie Wonder/Joni Mitchell are only `sounds_like`, not `influenced_by`.
4. The original album includes later hidden coda tracks, not separate singles or releases; donor/master track ordering differences do not change the 1998 record identity.

## Claude import note (Oct 2026)

- Artist added (one solo studio album); scene US en 1990 rnb,soul,hiphop. Her own production credit dropped from producers. influenced_by kept (Curtis Mayfield, The Temptations, Roberta Flack, as Hill told Michael A. Gonzales, TIDAL).
