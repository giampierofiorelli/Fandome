# CLAUDE_IMPORT — Alanis Morissette / Phase 01

**Project:** Fandome, branch `descriptors`, hand-off read-only. Research cut-off: **2026-10-25**. STRICTLY INCREMENTAL: four new albums only (1991–1998); no other artists or phase rows. The `rows_ONLY.csv` file has exactly **27 columns**.

## IMPORTANT: artist ID does not exist yet

The `src/data/catalog.ts` file on the inspected `descriptors` branch contains **no Alanis Morissette entry**. Neither `docs/descriptors/alanis.csv` nor `docs/descriptors/alanismorissette.csv` exists there. Therefore `alanis` is a **proposed new artist ID**, not a retrieved existing ID. Claude MUST inspect for collisions, create the artist room/list and scene record as required, and approve this ID before importing the rows. Do not silently pretend the Fandome artist already existed. In the 1991 and 1992 original MCA albums, the cover artist credit is **Alanis**; Fandome's stable display name should be **Alanis Morissette**.

## Four new rows — all additions to catalogue

| album_id | title | year | type | catalogue |
|---|---|---|---|---|
| `alanis-alanis` | Alanis | 1991 | studio | ADD |
| `alanis-nowisthetime` | Now Is the Time | 1992 | studio | ADD |
| `alanis-jaggedlittlepill` | Jagged Little Pill | 1995 | studio | ADD |
| `alanis-supposedformerinfatuationjunkie` | Supposed Former Infatuation Junkie | 1998 | studio | ADD |

Suggested entry format: `['alanis', 'Alanis Morissette', <approved color and tagline>, [['Alanis', 1991], ['Now Is the Time', 1992], ['Jagged Little Pill', 1995], ['Supposed Former Infatuation Junkie', 1998], ...]]`. **Do not use a literal placeholder**: Claude selects the existing catalogue shape, styling, and full later discography, and can verify any additional source IDs in seed.ts before finalizing.

## Vocabulary additions

- New genre **`bhangra`**: a critic ([eonmusic](https://www.eonmusic.co.uk/reviews/25-years-on-alanis-morissettes-supposed-former-infatuation-junkie-still-has-bite)) specifically describes the *Front Row* rhythm as a bhangra beat. This is **texture of a single track**, not whole album. Add token to `scenes.ts` and parent(s) to `genreFamilies.ts` according to project taxonomy; if genre modeling disallows track-rhythm tags, keep evidence but discuss before import rather than replace silently.
- Other genre tokens used (`dancepop`, `teenpop`, `newjackswing`, `alternativepoprock`, `adultalternativepoprock`, `alternativeindierock`, `contemporarypoprock`, `alternativerock`, `postgrunge`, `triphop`, etc.) must be **checked by Claude** against live branch before import. Existing instrument token **`guitar`** is deliberate: the primary credits do not consistently distinguish electric from acoustic guitar. Do not guess variants.
- New instruments **none**; `chamberlin` already in project instrument list. Note 1998 Qobuz's conflicting Mellotron credit (full evidence notes).
- New production tokens **none**: `adatrecording`, `onetake`, `overdubbing`, `analogtape`, `layeredvocals`, `stringarrangements`, `drumprogramming`, `programming`, `sampling` appear in current list. `protools` must **NOT** be assigned to 1995 because recording engineer describes it as next-album gear.

## Caveats for validation

1. `Now Is the Time` has **low-strength `newjackswing` evidence** from an album-metadata site and limited track specificity. Claude can retain low-ranked or ask for source upgrade. Do not promote it to dominant sound.
2. Production on 1992 album is left empty: programming from 1991 must not be copied. Both early records are Canadian-only original MCA releases.
3. Frank Levin is documented in 1991 sleeve transcription for keyboard solo/strings arrangement, with a **potential disputed track-specific producer** role on *Human Touch*. We keep Leslie Howe as firm album producer pending label verification.
4. In 1998 `influenced_by` includes Tori Amos (explicitly cited by Morissette per 1998 Washington Post critic) and Nusrat Fateh Ali Khan (**critic-identified stylistic debt**, not asserted artist admission). Portishead is a *sounds_like* opinion.
5. The 1998 album's 17-track original is used; 2024 anniversary bonus tracks excluded. `bhangra` and `triphop` are lower-ranked track-specific touches, not album-wide genre claims.
6. **Unreleased:** *Good Weather for Immaculate Conception* is announced for **2026-11-06** per [official Alanis site](https://alanis.com/) and [Pitchfork](https://pitchfork.com/story/alanis-morissette-made-a-holiday-album/); as of 2026-10-25 do **not** import. Streaming-preorder metadata does not qualify.
7. Scale columns are original, evidence-constrained Fandome editorial judgments. Empty production and blank `influenced_by` mean unknown, not no technique/influence.
8. No co-billed albums in this phase; `coBilled.ts` unchanged.

## Files in this ZIP

- `CLAUDE_IMPORT.md`
- `alanis_phase01_rows_ONLY.csv`
- `alanis_phase01_sources.csv`
- `alanis_phase01_genre_evidence.csv`
- `alanis_phase01_evidence-notes.md`
- `alanis_phase01_catalog-audit.csv`

## Next phase (Phase 02)

Chronological studio phases: **Under Rug Swept (2002)**; **So-Called Chaos (2004)**; **Flavors of Entanglement (2008)**. Separately evaluate whether **Jagged Little Pill Acoustic (2005)** merits an independent landmark re-recording descriptor (it isn't a new songwriting album) and whether *MTV Unplugged* (1999) warrants a live exception. Never silently duplicate 1995 album data.
