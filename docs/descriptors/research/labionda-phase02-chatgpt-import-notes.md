# La Bionda — Fandome Phase 02 (incremental import)

Research date: 2026-10-25. Branch inspected read-only: `descriptors`. Fandome artist ID: `labionda` (from `src/data/catalog.ts`). `docs/descriptors/labionda.csv` was not present at inspection; phase 01 exists as a separate delivered ZIP **but should be imported before this one**. Do not import the earlier rows from this ZIP; none are included.

## Phase 02 rows only

| album_id | Original album | Year | Type | Catalogue action |
|---|---|---|---|---|
| `labionda-bandido` | Bandido | 1979 | studio | Add |
| `labionda-highenergy` | High Energy | 1979 | studio | Add |
| `labionda-iwannabeyourlover` | I Wanna Be Your Lover | 1980 | studio | Add |
| `labionda-inbeatween` | In Beatween | 1998 | studio (reworked catalogue plus fresh compositions) | Add, flag reused compositions |

ID rule applied by removing spaces/punctuation: In Beatween / InBeatween => `labionda-inbeatween`. All four rows have exactly 25 columns; `status=draft`, notes under 15 words.

## Files

- `labionda_phase02_rows_ONLY.csv` — phase-02 descriptor rows; do NOT overwrite phase01.
- `labionda_phase02_sources.csv` — album-specific working reference URLs, provenance and strength.
- `labionda_phase02_genre_evidence.csv` — per-genre justification, album / some tracks / texture scope.
- `labionda_phase02_evidence-notes.md` — release editions, full original track-by-track audit (35 listing entries, including 1998 remixes), sound and credits reasoning, cautionary notes.
- `labionda_phase02_catalog-audit.csv` — four additions; none was present in catalog on inspected branch.
- `CLAUDE_IMPORT.md` — this file.

## Newly needed genres

**None** for this phase. All tokens used are already in `src/data/scenes.ts`. In Beatween is classified `eurohouse|house|electronic|dance` and is not equated to its original 1970s disco recordings.

## Caveats

- **Bandido 1979**: original Italian jacket ©/℗1978, LP released and catalogued 1979; do not silently shift to 1978. `Deserts of Mars` is also catalogued `Desert on Mars`.
- **High Energy 1979**: `hinrg` is **not** asserted merely from title. `I Got Your Number` is described as rockier and `Disco Roller` as disco-focused. The direct producer credit on one reproduced LP says both brothers, while one abbreviated sale listing says only Angelo.
- **I Wanna Be Your Lover 1980**: some overseas records appeared in 1981 and the titular single has a different edit. Nine-track 1980 album under Baby Records BR 56018.
- **In Beatween 1998**: a legitimate 1998 original CD with new compositions AND new versions of both La Bionda and D.D. Sound material. `type=studio` is provisional subject to local editorial preference (some systems treat this as a hybrid remix/studio release). Recorded at Logic Studios, Milan. There are bonus mixes and hidden tracks inside final indexing. `producers=Carmelo La Bionda` confirmed; Rolando Alberti is arranger/programmer, not producer.
- Critical `influenced_by` for High Energy is a *specialist critic's* explicit analogy to Donna Summer's Hot Stuff, not a quote from the brothers. Record importer should preserve attribution, or abstain if threshold requires direct first-person producer testimony.
- Some scales are qualitative document-grounded interpretations, not audio measurements; 1998 scales except electronic abstain because recording-specific evidence is insufficient. For narrow or unknown lead-voice types, cells are intentionally blank; 1998 rap is a documented *minority* lead style, NOT an album hip-hop genre.

## Import steps

1. Preserve all earlier La Bionda rows if phase01 already merged. Append **only** the four rows in `labionda_phase02_rows_ONLY.csv`.
2. Insert four studio albums in catalog under ID `labionda` if missing; add no D.D. Sound albums here.
3. Preserve evidence files in the project research folder; avoid clobbering phase01 source file names.
4. Run `npx vite-node scripts/validate-descriptors.ts` and tests; do not publish `reviewed` without independent editorial review.

## Next phase

There are **no further widely corroborated separate studio albums** under La Bionda after 1998. Next research should cover **D.D. Sound** releases as a separately credited alias (discuss catalogue artist-id decision), starting with the 1977 release `Disco Delivery` / `Burning Love` (often alternate title/territory rather than distinct compositions), `1-2-3-4 Gimme Some More!` (1977) and `Café` (1978), then `The Hootchie Cootchie` (1979). Also investigate soundtrack projects separately, including *Poliziotto superpiù* (1980), but verify whether those were actually released as albums before adding soundtrack descriptor rows. Do not count alternate edition titles as distinct original albums.
