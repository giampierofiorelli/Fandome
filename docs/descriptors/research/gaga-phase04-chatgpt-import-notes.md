# CLAUDE IMPORT — Lady Gaga / Phase 04

**Read-only research snapshot:** 2026-10-24. **Import only the new phase rows.** Files in this ZIP use exact 25-column guide header, `status=draft`, 0–5 integer anchors (blank permitted), and unlimited pipe-delimited lists; `notes` alone is capped at 15 words.

## Phase 04 — two independent releases

| album_id | title | original year | type | catalogue |
|---|---|---:|---|---|
| `g-mayhem` | Mayhem | 2025 | studio | existing seed album; **keep ID unchanged** |
| `gaga-applemusiclivemayhemrequiem` | Apple Music Live: MAYHEM Requiem | 2026 | live | new, must add |

**Catalogue addition:** `('Apple Music Live: MAYHEM Requiem', 2026, 'live')`, id `gaga-applemusiclivemayhemrequiem`. `type` belongs to descriptor row; catalogue `[title, year]` as defined by `catalog.ts`. Exact displayed title follows Apple Music release metadata and does not include the older 2025 edition's title. Never use `gaga-mayhem`; `seed.ts` already assigns `g-mayhem`.

**Why the live album:** a professionally released, separately arranged Wiltern Theatre 2026 album which converts songs to stark piano, industrial, new-wave and electro-funk versions, not simply a reissue of 2025 masters. Defining-album flag `landmark=0` is intentionally distinct from inclusion as a substantial live work.

## Proposed new genre tokens (seven)

- `industrialdance`
- `electrogrunge`
- `techstep`
- `boogie`
- `aor`
- `powerballad`
- `hairmetal`

All seven appear in qualified critical text and are **scoped** in `gaga_phase04_genre_evidence.csv`, particularly brief texture labels. To validate/import without failure, Claude must add these to `src/data/scenes.ts`, `GENRE_LABELS`, `src/data/genreFamilies.ts` **and the validator `GENRES` set**. Suggested parents: `industrialdance → ['industrial','dance']`; `electrogrunge → ['electronic','grunge']`; `techstep → ['drumandbass']`; `boogie → ['funk','disco']`; `aor → ['softrock']`; `powerballad → ['poprock']`; `hairmetal → ['metal','rock']`. These are proposals, not already committed changes. Scope-specific obscure genre evidence should be downweighted in matching.

## Six included files

1. `CLAUDE_IMPORT.md` (this brief)
2. `gaga_phase04_rows_ONLY.csv` — only two phase-04 rows, **not** previous phases
3. `gaga_phase04_sources.csv` — source key included in `source` before ` | `, document roles and strength
4. `gaga_phase04_genre_evidence.csv` — one genre per line with album/substantial/track/texture labels
5. `gaga_phase04_evidence-notes.md` — score explanations, evidence conflicts, explicit abstentions
6. `gaga_phase04_catalog-audit.csv` — existing vs missing catalogue rows

## Critical caveats

- *Mayhem* original release **2025-03-07, 14 songs**. Later *The Dead Dance* addition and other deluxe tracks must not shift the original record's descriptors; no extra rows for alternate editions.
- Only **credited musical producer/co-producer roles**: Lady Gaga, Andrew Watt, Cirkut, Gesaffelstein, Bruno Mars and D'Mile (track-specific). **Michael Polansky = co-writer and executive producer**, not credited as musical track producer in the consulted Qobuz listing; exclude from `producers`.
- *MAYHEM Requiem* released **2026-05-14**, recorded 2026-01. Apple sometimes displays 42 track/media assets; the distinct **21-part concert programme** is supported by Pitchfork and the specialist discography. Do not double count.
- Do not copy 2025 producers onto the 2026 **live recording**; its musical production credit is left empty because adequate live-release producer credits were not established.
- *The Devil Wears Prada 2* (2026) is **a various-artists** soundtrack: 3 Gaga cuts within 13 songs. Not represented as Gaga album; recorded in exclusion audit notes with official label and industry sources.
- Gaga's direct named **influences** are recorded separately from critics' `sounds_like` analogies. A sonic comparison does not prove causal influence.
- Current `docs/descriptors/gaga.csv` on `descriptors` branch contained exactly eight 2008–2020 album rows at check time. Never duplicate them. Future check should be repeated before merge.

## Next phase

As of **24 October 2026**, all eligible released Gaga solo and collaborative studio albums, the agreed important EP and soundtracks, and this significant live re-arrangement are covered by Phases 01–04. **No automatic Phase 05**: start another phase only after a newly released, qualifying, independent album/project, or if Claude flags an omission backed by original sources. A future change in music catalogues or release dates does not retroactively authorize unreleased works.

## Import validation

1. Add the new live album and proposed genres before running the supplied project's validator.
2. Append only the two phase-04 rows to `docs/descriptors/gaga.csv` if their IDs are not already present.
3. `npx vite-node scripts/validate-descriptors.ts`, then project tests.
4. Check release format/date, original 14-song edition and 2026 live-producer abstention.
