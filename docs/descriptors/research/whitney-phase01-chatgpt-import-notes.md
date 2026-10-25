# Fandome import: Whitney Houston — Phase 01

Read-only GitHub branch checked: `descriptors` (2026-10-25). Artist id: **`whitney`**. Neither `docs/descriptors/whitney.csv` nor Whitney-named research files existed in the checked directory listing. This archive contains **only four new descriptor rows**, no old batches.

## Contents and exact ids

| album_id | release | year | type | catalog status |
|---|---|---:|---|---|
| `whitney-whitneyhouston` | Whitney Houston | 1985 | studio | already in catalog |
| `whitney-whitney` | Whitney | 1987 | studio | already in catalog |
| `whitney-imyourbabytonight` | I’m Your Baby Tonight | 1990 | studio | already in catalog |
| `whitney-thebodyguardoriginalsoundtrackalbum` | The Bodyguard: Original Soundtrack Album | 1992 | soundtrack | **ADD TO CATALOG** |

## Catalogue additions

Add Whitney's **The Bodyguard: Original Soundtrack Album (1992, soundtrack)** to Whitney's album list. New id is exactly `whitney-thebodyguardoriginalsoundtrackalbum`, derived from normalized full title. Keep the three existing catalog ids unchanged. Note: catalog's `I’m Your Baby Tonight` title uses a curly apostrophe. No Whitney descriptor rows exist yet to duplicate. No albums by other artists are included.

## Co-billed / anthology status

**The Bodyguard** is a Whitney Houston-led **various-artists** film soundtrack with six Whitney tracks and other performers. It is **not** a co-billed Whitney Houston/another named artist duo; there is no evidence for an exact shared duo billing matching `coBilled.ts` conventions. Do **not** generate fake duet co-billing. Preserve multi-artist nuance in the notes and downstream UI if supported.

## New controlled vocabulary

- **Production token to add:** `prophet2002` = Sequential Circuits Prophet 2002 sampler, *specifically* the instrument named in the 1987 Whitney liner notes. This is **not** Prophet-5. Source: https://albumlinernotes.com/Whitney.html (track *Love Is a Contact Sport*).
- **New genre tokens:** none. All genre tags are currently recognized.
- **New instrument tokens:** none. We use generic `guitar`, already supported in `src/data/instruments.ts`, where a credit only says 'guitar'. It was omitted from the shortened instrument list in the brief but **is present in the actual repo guide and TS taxonomy**; keeping it avoids inventing `electricguitar`/`acousticguitar`. Specific `acousticguitar` appears when original credits say acoustic.

## Important caveats

1. **Producer roles:** The official website sometimes calls Clive Davis a producer on summary pages, whereas detailed sources credit him as **executive producer**. The CSV excludes Clive Davis and other executive-only figures. For the 1992 soundtrack, Whitney Houston *does* appear because she is credited producer for *Jesus Loves Me*, separately from her executive role.
2. **1990 Yvonne Turner:** credited *co-producer* on three tracks in session liner transcription; some international edition/track-mix credits may vary. Confirm matching first edition on import. Mark Spier explicitly co-produced *After We Make Love*.
3. **1987 Prophet distinction:** `prophet2002` needs to be added as a new production token before validating. Source names Prophet 2002, not Prophet-5. `tr808` derives from explicit Roland 808 programming; `linndrum` is *not* added because liner only states generic Linn.
4. **1992 12 versus 13 tracks:** official estate web track list omits instrumental Kenny G *Waiting for You*; Sessiondays shows the 13-track original. The row describes the **original soundtrack release, including the 13th recording**. Cross-verify edition and track ordering during import.
5. **1992 rap-vocal producer:** Duran Ramos is credited specifically as producer of rap vocals on the guest track, not whole-track producer. Retain as a credited component producer until second-pass credit policy review; exclude assistants, recording engineers and arrangers who are not explicitly producers.
6. **Production blanks are deliberate:** 1985 contains no machine/technique values verified to the strict evidentiary standard, so its cell is empty.
7. **`sounds_like` versus `influenced_by`:** editorial proximity is in sounds_like; the one documented arrangement reference, Linda Ronstadt for the 1992 song, is identified in LOC archival research. Do not fill other inferred influences.
8. **Genre taxonomy:** The Bodyguard's `soundtrack` is contextual and deliberately last. Other genres (rock, gospel, disco, powerballad) are local to tracks; see the genre-evidence file for scope.
9. The rows are `draft`. `landmark=1` for all four as these are central released records, with the movie soundtrack historic in sales and cultural profile.

## Package files

- `whitney_phase01_rows_ONLY.csv` — **27 columns, 4 new rows**.
- `whitney_phase01_sources.csv` — trackable research references and descriptions.
- `whitney_phase01_genre_evidence.csv` — one genre per row, whole-record vs specific-tracks vs texture.
- `whitney_phase01_evidence-notes.md` — basis, non-obvious values, credit distinctions and conflicting reviews.
- `whitney_phase01_catalog-audit.csv` — 3 already in catalogue / 1 addition.
- `CLAUDE_IMPORT.md` — this file.

## Proposed Phase 02 (chronological; do not import yet)

1. **Waiting to Exhale: Original Soundtrack Album (1995)** — soundtrack; Whitney + various artists, important collaboration, verify original billing.
2. **The Preacher's Wife: Original Soundtrack Album (1996)** — landmark gospel-heavy soundtrack.
3. **My Love Is Your Love (1998)** — studio album already in `catalog.ts`.
4. **Just Whitney (2002)** — studio album, will require catalog addition.

No live albums added by default; posthumous recordings and compilation-only releases need an independent landmark case.
