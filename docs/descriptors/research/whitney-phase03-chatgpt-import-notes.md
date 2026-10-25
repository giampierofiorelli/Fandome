# CLAUDE IMPORT — Whitney Houston Phase 03

**Research and branch audit:** 25 October 2026; GitHub `descriptors` branch inspected read-only. This ZIP contains **three and only three new album descriptor rows (2003–2012)** and five research/import companions. Do not recreate earlier phases or import other artist records.

## Albums in this incremental phase

| Album ID (exact, no accents or punctuation) | Album title | Year | Type | Current catalogue |
|---|---|---|---|---|
| `whitney-onewishtheholidayalbum` | One Wish: The Holiday Album | 2003 | `studio` | ADD |
| `whitney-ilooktoyou` | I Look to You | 2009 | `studio` | ADD |
| `whitney-sparkleoriginalmotionpicturesoundtrack` | Sparkle: Original Motion Picture Soundtrack | 2012 | `soundtrack` | ADD |

Original `catalog.ts` artist `whitney` is known, but the published list currently contains 1985, 1987, 1990, 1992, 1998 only. `docs/descriptors/whitney.csv` contains the Phase 01 rows (1985, 1987, 1990, 1992), and Phase 02 (1995, 1996, 1998, 2002) has been delivered separately. Add only the three 2003–2012 catalog entries; merge only this phase's descriptor rows **after** preserving separate phase imports and avoiding re-importing the already-known 1998 title.

## Required vocabulary updates BEFORE validation

- **New genre token:** `retrosoul`, *Retro-Soul*. It is an explicit AllMusic style for **Sparkle** (2012), not an inference. Add to Genre union `src/data/scenes.ts`, genre family mapping `src/data/genreFamilies.ts` (soul/R&B family), genre-validator set in `scripts/validate-descriptors.ts`; follow application's other central genre metadata if any. `retrosoul` appears once in the 2012 row.
- **Existing genre dependency:** `contemporarygospel` from separately delivered Phase 02 may still require registry addition before validating other phases, but **is not present in Phase 03's three rows**.
- **New instrument tokens:** none. **New production tokens:** none. `layeredvocals` is an existing token, supported by contemporary description of multi-tracked *Celebrate* vocals.

## Exact billing, versions and album-type caveats

1. **2003 One Wish:** standard original 11-song album. Final two tracks reproduce recordings from **1996 The Preacher’s Wife** (*Who Would Imagine a King*, *Joy to the World*); don't treat them as new 2003 sessions. Bobbi Kristina appears on one track only.
2. **2009 I Look to You:** original 11-song studio album. Estate lists Clive Davis, Whitney Houston and Larry Jackson in general production credits; sound-recording `producers` field specifically follows identified per-track producer/co-producer metadata, excluding executive/managerial attributions without demonstrated musical-production role.
3. **2012 Sparkle:** original 11-track *various-artists* vocal soundtrack (31 July US estate date). Houston sings only *His Eye Is on the Sparrow* and duet *Celebrate* with Jordin Sparks, her last recorded song. Its inclusion in `whitney` is curatorial and should preserve **various-artists billing** on metadata if the app supports it. Do not create coBilled.ts entry Whitney Houston & Jordin Sparks for this soundtrack: they are co-billed **only on the Celebrate song**, not the overall release. Houston's film executive-producer credit is **not** a musical album producer credit. Different October 2012 *Sparkle – Original Score* by Salaam Remi is not included.
4. Artist-specific scaling on *Sparkle* requires extra caution: `voice`, instrumentation, mood, and `sounds_like` describe **all 11 tracks**, not solely Whitney's two. The specialist reviews diverge; evidence notes detail which critics are more favourable or dismissive.
5. Original 2012 release date conflict (AllMusic July 30 versus estate July 31 US) affects **date only**, not 2012 year or metadata identity.

## Co-billed full-album records

**None** newly required in `coBilled.ts` for this phase. One Wish's Bobbi Kristina guest vocal and Sparkle's Whitney/Jordin duet are track-only guest relationships. Do not confuse various-artists film album with a dual-artist record.

## Next phase — Phase 04 (new ZIP; no phase03 rows)

Chronological and limited to historically consequential projects:

1. **I Wanna Dance with Somebody (The Movie: Whitney New, Classic and Reimagined)** (2022), `soundtrack`, 35 archival and reimagined tracks.
2. **I Go to the Rock: The Gospel Music of Whitney Houston** (2023), `compilation`, historic gospel archive and six previously unreleased performances.
3. **Whitney Houston: The Concert for a New South Africa (Durban)** (2024), `live`, unusually **landmark** because the 1994 Durban concert was historically significant and the authorized first full live album arrived in 2024. Sony notes distinct CD/vinyl/digital programmes; control edition and one newly released studio song *Love Is*.

Earlier 2022 and 2023 items were initially considered for this Phase 03. A full chronologically ordered discography audit detected the 2012 *Sparkle* soundtrack and 2024 authorized landmark live release, so the release grouping was **corrected before delivery**. Do not import the earlier draft's 2022/2023 rows as part of Phase 03; these belong to Phase 04 only.

## File inventory

- `whitney_phase03_rows_ONLY.csv`: 27-column Fandome header + exactly 3 new rows.
- `whitney_phase03_sources.csv`: per-record links, source types, claim supported and evidence strength.
- `whitney_phase03_genre_evidence.csv`: every genre exactly one evidence row including whole album / some tracks / texture scope.
- `whitney_phase03_evidence-notes.md`: album-specific anchored numerical judgments, instrument and production provenance, nuanced disagreement, release caveats.
- `whitney_phase03_catalog-audit.csv`: old-catalog presence/absence and required new entries.
- `CLAUDE_IMPORT.md`: this file, new token registry, next-phase plan.

No scripts required. After catalogue/token updates, append the rows, then let Claude run the repo's validator and tests. Do not mark `reviewed` without independent review.
