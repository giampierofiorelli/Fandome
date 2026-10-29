# CLAUDE_IMPORT — Paul Young / Fandome phase 01

Branch: `descriptors` (read-only research; no commits made). Prepared: 2026-10-29. Only NEW descriptor rows, no repeats.

## Four phase 01 studio albums
- `paulyoung-noparlez` — *No Parlez* (1983), `studio` [already in `catalog.ts`]
- `paulyoung-thesecretofassociation` — *The Secret of Association* (1985), `studio` [already in `catalog.ts`]
- `paulyoung-betweentwofires` — *Between Two Fires* (1986), `studio` [already in `catalog.ts`]
- `paulyoung-othervoices` — *Other Voices* (1990), `studio` [**ADD** to `catalog.ts`]

Artist ID: **`paulyoung`**, verified in `src/data/catalog.ts`; not in `seed.ts`. `docs/descriptors/paulyoung.csv` was NOT present on branch checked; no previously researched descriptor rows were skipped. The first three catalogue titles and years match exactly.

### Required Claude steps
1. Add **Other Voices (1990, studio)** under existing `paulyoung` catalog row, preserving first three album IDs and existing metadata.
2. Import only the 4 rows in `paulyoung_phase01_rows_ONLY.csv` (27 columns). Never overwrite prior phase data or append old rows.
3. Keep all approved genre, instrument and production values. **No new tokens proposed**: all are intended to use tokens already supported by the October 2026 Fandome guide; Claude should run the live validator to confirm.
4. Store `paulyoung_phase01_sources.csv`, `paulyoung_phase01_genre_evidence.csv`, `paulyoung_phase01_evidence-notes.md`, and `paulyoung_phase01_catalog-audit.csv` beside the descriptors and validate with `scripts/validate-descriptors.ts` and project tests. All rows remain `status=draft` until second-person review.
5. Album-specific influences are left blank when their attachment to an album is undocumented; do not infer influence from covers or collaborations. `sounds_like` consists of editorial similarity hypotheses and is not a historical claim.

## ARTIST INFLUENCES — directly named by Paul Young (phase 01 only)
Source: Paul Young interview originally 2011, republished 2019: https://www.rediscoverthe80s.com/2019/08/interview-with-paul-young.html . The artist lists these across periods of his musical development:
- Early musical interests: **Free / Paul Rodgers, James Taylor, Stevie Wonder**.
- First group era: **The Who, Small Faces, Faces, Patto, Dire Straits, Robert Palmer, The Stranglers**.
- Later group / Q-Tips soul phase: **Junior Walker, Joe Tex, Otis Redding, Sam Cooke, Wilson Pickett**.
- Around solo debut: **Garnet Mimms, Chuck Jackson, Johnnie Taylor, Talking Heads, Soft Cell**. He also mentions African highlife and juju as styles rather than particular artists.
Cross-check (Paul Young discusses how soul shaped his singing): https://bigtakeover.com/interviews/interview-paul-young
These are documented **artist-wide influences** only. Do not convert these wholesale into `influenced_by` fields for individual albums without additional album-specific statements.

## Editorial caveats
- `No Parlez`: UK vinyl/CD and later reissues differ in track length and remixes. Original release is the reference.
- `The Secret of Association`: some credit transcriptions misname drummer Mark Pinder; follow original-pressing personnel. `Everytime You Go Away` is the song's original title on the album, even when printed as 'Every Time You Go Away' elsewhere.
- `Between Two Fires`: Palladino credited for *production assistance* only, not as a producer. Hugh Padgham, Ian Kewley, Paul Young are credited producers; 2007 reissue adds remixes/extra tracks.
- `Other Voices`: Warne Livesey's name appears inconsistently as 'Wayne' in certain credit transcriptions. Original album has five musical producers and Paul Young as **executive** producer. Stevie Wonder, David Gilmour, Chaka Khan and Steve Winwood appear as musicians/guests, not co-billed album artists. 2012 reissue adds material.
- No live albums or compilation records. Do not include Streetband or Q-Tips releases here; those were different band credits.

## Next phase (02)
Proposed chronologically from the artist's official album history: *The Crossing* (1993), *Reflections* (1995; check edition/year variants and 1994 metadata), *Paul Young* (1997), *Rock Swings* (2006). **Check whether a separately issued 1994 *Acoustic Paul Young* is a standalone studio album or an alternative format / regional reissue before finalising this plan.** Subsequent: *Good Thing* (2016) and any verified later original studio release after checking official and MusicBrainz; avoid compilation duplicates.

## Contained files
1. `CLAUDE_IMPORT.md`
2. `paulyoung_phase01_rows_ONLY.csv`
3. `paulyoung_phase01_sources.csv`
4. `paulyoung_phase01_genre_evidence.csv`
5. `paulyoung_phase01_evidence-notes.md`
6. `paulyoung_phase01_catalog-audit.csv`

## Claude import note (Oct 2026)

- Other Voices: Steve Winwood removed from sounds_like (he plays on the album: a guest is not a comparison).
- Catalogue row extended with Other Voices (1990) and the later studio albums through Good Thing (2016); Acoustic Paul Young (1994) left out pending its format check.
- Artist influences added from Paul Young's own interview (Free filed for Free / Paul Rodgers).
