# Fandome import — Whitney Houston Phase 02

Date checked: **2026-10-25**. Read-only `descriptors` branch catalogue reference and the Phase 01 handoff. Import **only these four new rows**; do not append Phase 01 rows from previous archive. No GitHub writes were made.

## Exactly four Phase 02 records

| Album ID | Title | Year | Type | Catalogue |
|---|---|---:|---|---|
| `whitney-waitingtoexhaleoriginalsoundtrackalbum` | Waiting to Exhale: Original Soundtrack Album | 1995 | soundtrack | ADD |
| `whitney-thepreacherswifeoriginalsoundtrackalbum` | The Preacher’s Wife: Original Soundtrack Album | 1996 | soundtrack | ADD |
| `whitney-myloveisyourlove` | My Love Is Your Love | 1998 | studio | ALREADY IN CATALOG |
| `whitney-justwhitney` | Just Whitney | 2002 | studio | ADD |

ID normalization: `whitney-` + lowercase alphanumeric version of the **full original album title**. Existing *My Love Is Your Love* is kept as its catalogue ID. Catalog's Whitney catalogue entry already contains the 1998 title/year; **do not create a duplicate**. Its previous Phase 01 descriptions (1985, 1987, 1990, 1992) are not included in this archive.

## Catalogue additions

Add the three albums marked **ADD** above, with their printed title, year, and type. The 1995 album is predominantly **various artists**, with only 3 Whitney performances. The 1996 soundtrack includes Cissy Houston leading track 14; do not treat her as a co-billed main album partner.

## Co-billed review

- *Waiting to Exhale* is billed as a **various-artists soundtrack** with Whitney and CeCe Winans performing *Count On Me* together. There is no distinct album-level credit "Whitney Houston & CeCe Winans"; **do not add a coBilled.ts record for that duet**. Note the Whitney-led inclusion is a deliberate album-curation decision.
- *The Preacher’s Wife* is billed to Whitney Houston; participating choirs and featured individual singers should **not** trigger co-billed album metadata.
- *My Love Is Your Love* features Mariah Carey, Faith Evans, Kelly Price, Missy Elliott and other musical contributors, but not as co-billed main-album artists.
- *Just Whitney* features Bobby Brown on *My Love*; not album-level co-billing.

## Controlled-vocabulary changes required **before running validator**

- New genre **`contemporarygospel`** (exactly Contemporary Gospel from AllMusic on *The Preacher’s Wife*). Add it to `src/data/scenes.ts` Genre and the validator's GENRES set (and genre family mapping if your importer needs it). This token appears only on the 1996 record.
- **No new instrument tokens.** Existing full repository taxonomy includes `guitar`, `baritoneguitar`, `acousticguitar`, `electricpiano`, etc.
- **No new production tokens.** `sampling` is explicitly grounded on *One of Those Days* (2002); `belting` on gospel singing and large ballads, not guessed machine hardware.

## Caveats for import

1. **Executive-vs-musical producer:** The estate pages often use 'Producers' loosely and sometimes include Clive Davis or L.A. Reid. Detailed per-track Qobuz/liner evidence and the estate's 'Executive Producers' roles govern. *Waiting to Exhale*: musical tracks produced by Babyface; Whitney/Clive are soundtrack-level executive/curatorial participants. *The Preacher’s Wife*: Whitney is a **track-level musical co-producer** with Mervyn Warren, independent of executive role. *Just Whitney*: album-level Whitney/Bobby are listed as producers in original secondary pressing credits; L.A. Reid excluded as executive.
2. **Soundtrack credits:** Do not attribute all singers or instruments in *Waiting to Exhale* to Whitney. The whole original commercial album is classified as a diverse ensemble work.
3. **Original edition:** 1996 original **15** tracks includes two distinct *I Believe in You and Me* versions and a *Step by Step* remix. English-Canadian official page omits some track numbers due to rendering; use the original complete sequence. 2002 **10-track** primary standard album excludes bonus DJ remixes.
4. **Technology limits:** No specific 1995/1996/1998/2002 Roland/Linn/synth workstation/proprietary software is evidenced. Do not infer them from genre or period. `drummachine` on 1996 from contemporary critic's explicit wording; `drummachine` on 1998/2002 represents credit-confirmed programmed electronic drums without named manufacturer.
5. **`influenced_by`:** Only *Just Whitney* has `The Isley Brothers`, because the album track *One of Those Days* samples *Between the Sheets*. Other stylistic resemblance is in `sounds_like`, as editorial judgment.
6. **Review variance:** 1996 gospel authenticity disputed despite producer/performer facts; 1998 more urban/hip-hop with older ballads; 2002 cautious retreat, divergent critical ratings. Read evidence notes before revising numerical descriptors.
7. **Genre evidentiary caution:** 1995 `quietstorm` and `jazz` were **not** added: their suggested fit was not backed by a review actually naming those genres for those performances.
8. In source exports, *Qobuz* displays label-supplied detailed credits; *Sessiondays* is an independent liner transcription. Verify conflicting track index or producer variant against official per-track estate credits.

## Files

- `whitney_phase02_rows_ONLY.csv`: 27 columns; **4 rows only**.
- `whitney_phase02_sources.csv`: source name/type/working source URL/evidence strength per album.
- `whitney_phase02_genre_evidence.csv`: one row per genre, source and scope (album, tracks, or texture).
- `whitney_phase02_evidence-notes.md`: value-specific explanations, instrumental/producer provenance, competing critics.
- `whitney_phase02_catalog-audit.csv`: existing vs additions.
- `CLAUDE_IMPORT.md`: these importing instructions.

## Next phase (Phase 03: planned chronological continuation)

1. *One Wish: The Holiday Album* (2003) — holiday studio album.
2. *I Look to You* (2009) — final full studio album of newly recorded material.
3. *I Wanna Dance with Somebody (The Movie: Whitney New, Classic and Reimagined)* (2022) — **conditional**; assess whether reimagined film soundtrack collaborations justify landmark inclusion.
4. *I Go to the Rock: The Gospel Music of Whitney Houston* (2023) — **conditional**; distinguish archival previously unreleased gospel recordings from conventional compilation before adding.

Only these remaining two original studio-era releases are guaranteed. The late archival soundtracks/collections must pass the "landmark or meaningful collaboration" gate; do **not** pad the catalogue or import future phases by default.
