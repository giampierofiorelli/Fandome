# CLAUDE IMPORT — Cameo, phase 01

Research conducted 28 October 2026. **Incremental import: four new rows only**. GitHub repo `giampierofiorelli/Fandome`, branch `descriptors` was read-only. Do not overwrite or import rows from any other phase.

## Identity, catalogue status, and exclusions

- New proposed artist ID: `cameo`. No Cameo artist or albums in `src/data/catalog.ts` or `src/data/seed.ts` on the checked branch; `docs/descriptors/cameo.csv` was not present. Check no collision when importing.
- Full artist name: **Cameo**. Not an alias of an earlier catalogue entity.
- Four original **studio** releases here; no live albums, compilation or reissues as standalone records.
- There are **17 studio album release titles** in the examined AllMusic/MusicBrainz discographies (1977–2000). All 17 need catalogue rows; four described now, remaining 13 scheduled for future phases. Complete audit in `cameo_phase01_catalog-audit.csv`.
- The albums `Cardiac Arrest/We All Know Who We Are` (2010) and `Ugly Ego/Secret Omen` (2015) are **two-in-one reissues** and must not be imported as new studios. *Nasty* (1996) is a **live album** and excluded. Original recordings by the pre-Cameo group The Players are not counted.
- No co-billed albums in this phase and no additions to `src/data/coBilled.ts`.

## Exactly four new descriptor rows

| album_id | Original studio album | Year | Catalogue action |
|---|---|---:|---|
| `cameo-cardiacarrest` | *Cardiac Arrest* | 1977 | Add artist/album then import |
| `cameo-weallknowwhoweare` | *We All Know Who We Are* | 1978 | Add album then import |
| `cameo-uglyego` | *Ugly Ego* | 1978 | Add album then import |
| `cameo-secretomen` | *Secret Omen* | 1979 | Add album then import |

## Source-priority caveat for future catalogue years

The band's own discography (https://www.cameonation.com/discography) and AllMusic list *Emotional Violence* as **1991** and *In the Face of Funk* as **1994**. MusicBrainz lists some later release-year variants (**1992**/**1995** respectively). The audit uses the former release-year sequence, flags the discrepancy for later-phase checking, and does **not** pretend all databases agree.

## New genre tokens — required, exact terms

- `discosoul` — AllMusic's Alex Henderson calls *Cardiac Arrest* track 'Find My Way' disco-soul: https://www.allmusic.com/album/cardiac-arrest-mw0000112836. Add to `scenes.ts` and define its family parents in `genreFamilies.ts` (preserve both disco and soul ancestry). **One-track / tail** genre.
- `discofunk` — AllMusic's Stephen Thomas Erlewine calls *We All Know Who We Are* track 'It's Serious' disco-funk: https://www.allmusic.com/album/we-all-know-who-we-are-mw0000036609. Add to genre vocabulary and parents (disco/funk ancestry). **One-track / tail** genre.
- New instrument tokens: **none**. New production tokens: **none**.

## ARTIST INFLUENCES — artist level only, from identified original remarks

These are not automatically assigned to any of the four albums' `influenced_by` cells, which remain **empty** because first-person, **album-specific** attribution could not be established:

- **Sly & the Family Stone (Sly Stone)**: Larry Blackmon explicitly said Cameo had an impact on later acts comparable to the impact Sly Stone had on Cameo; Geoffrey Himes, *The Washington Post*, 9 March 1995: https://www.washingtonpost.com/archive/lifestyle/1995/03/10/cameo-faces-the-future/68f08a23-2d34-4f58-8fc6-e1c04f12481e/.
- **James Brown**: Blackmon discussed his strong early impression from seeing Brown at the Apollo; Dyllan Furness, *Broward Palm Beach New Times*, 29 May 2015: https://www.browardpalmbeach.com/music/cameo-frontman-larry-blackmon-sincerity-turns-me-on-7008634/. Interview confirms personal inspiration, without establishing a specific song/album borrowed.
- **Ohio Players**: Geoffrey Himes explains the original New York City Players identity was inspired by Ohio Players; this is good **group-history inspiration**, but not a first-person declaration of musical technique or a named album. Keep as contextual candidate, not verified album influence: https://www.washingtonpost.com/archive/lifestyle/1995/03/10/cameo-faces-the-future/68f08a23-2d34-4f58-8fc6-e1c04f12481e/.
- **Sam Cooke and Jackie Wilson**: Blackmon recalls seeing them as a young listener at the Apollo in a direct interview reproduced in *LA Watts Times*. However, mere attendance/admirations without a named musical debt is insufficient to automatically assign `influenced_by`; excluded from confirmed list.

Album `sounds_like` is **critical sonic similarity**, not claimed causal influence. In particular, AllMusic's Parliament, Funkadelic, Ohio Players and Bar-Kays references are critic comparisons on the early Cameo sound, not direct confirmation of influence on individual recordings: https://www.allmusic.com/album/cardiac-arrest-mw0000112836; https://www.allmusic.com/artist/cameo-mn0000944349.

## Source conflicts, track scope and production caveats

1. **1978 vs 1977 for the second LP**: AllMusic (including its discography timeline) lists *We All Know Who We Are* as **1977**, but MusicBrainz lists it in **1978**, and original Chocolate City LP CCLP 2004 is listed **January 1978** by 45cat; JazzRockSoul gives **2 January 1978** and Soul and Funk Music records a February 1978 chart debut. Following the specific original LP/release evidence, CSV uses **1978**; do not silently change based on AllMusic's date. Sources: https://www.allmusic.com/album/we-all-know-who-we-are-mw0000036609; https://www.45cat.com/vinyl/album/cclp2004; https://jazzrocksoul.com/artists/cameo/; https://mail.soulandfunkmusic.com/album/cameo/we_all_know_who_we_are; https://musicbrainz.org/artist/ef4d808a-2113-44c3-9b44-1b31f026ef1e.
2. **Cardiac Arrest producer**: Original-credits listings at AllMusic and Soul and Funk Music credit **Larry Blackmon**, while JazzRockSoul writes that Larry Blackmon and Gregory Johnson produced its sessions. This is a real attribution conflict. The descriptor `producers` field conservatively uses Blackmon only; verify original 1977 sleeve before adding Johnson. https://www.allmusic.com/album/cardiac-arrest-mw0000112836; https://www.soulandfunkmusic.com/album/cameo/cardiac_arrest; https://jazzrocksoul.com/artists/cameo/.
3. **Ugly Ego sequencing dispute**: AllMusic's Rob Theakston calls it the immediate follow-up to *Cardiac Arrest*, though the actual second studio album was *We All Know Who We Are*. This affects narrative sequence, not original LP chronology. https://www.allmusic.com/album/ugly-ego-mw0000467212; https://jazzrocksoul.com/artists/cameo/.
4. **Recording vs later reissues**: The 2010/2015 two-in-one CDs, mastering updates and compilation tracks do not establish original-LP mastering techniques; none of the four rows attributes analogue tape, digital synthesis, sampling or named drum machines without verified album-specific technical evidence.
5. **`production` blank is intentional** on first three albums. A horn-rich arrangement alone is not a verified studio process; for *Secret Omen*, **Sammy Lowe** is credited with separate horn and string arrangements, so `hornarrangements|stringarrangements` is populated. He is **not** credited as an album producer: https://audio-music.info/htm/c/Cameo_Secret_Omen.htm.
6. **Genre long tails are not whole-album labels**: `discosoul` for *Cardiac Arrest*, `discofunk` for the second LP, and `disco` for *Secret Omen* derive from particular tracks; `ballad` on *Ugly Ego* only represents its several romantic ballads. The primary sound remains rhythm-section-and-horns funk.
7. **Voice left blank** rather than mapping Blackmon's described nasal/flexible expressive style onto unsourced prescribed voice categories. Vocals are documented in credits, but no decisive album-specific `soft|clear|powerful|raspy` evidence was found.
8. **Scales** are Fandome editorial judgments supported by album descriptions, not quantitative audio measurements. See `cameo_phase01_evidence-notes.md`; where evidence is thin, confidence is `medium` and unsupported technologies remain empty.

## Files in ZIP

- `cameo_phase01_rows_ONLY.csv` — 27 columns, exactly 4 **new** studio rows.
- `cameo_phase01_sources.csv` — claim-by-claim source register, with original URLs and evidence strength.
- `cameo_phase01_genre_evidence.csv` — a separate source-supported row for each assigned genre and its scope.
- `cameo_phase01_evidence-notes.md` — album-wise rationale and uncertainties.
- `cameo_phase01_catalog-audit.csv` — 17 original studio releases, status and next import action.
- `CLAUDE_IMPORT.md` — import instructions and artist-level research.

CSV encoding UTF-8 with BOM, RFC-style quoted fields where necessary, and CRLF newlines. No scripts in delivery.

## Next phase (02)

1. *Cameosis* (1980)
2. *Feel Me* (1980)
3. *Knights of the Sound Table* (1981)
4. *Alligator Woman* (1982)


## Claude import note

- 4 rows imported; catalogue 17 studio albums 1977-2000. New genres discosoul, discofunk.
- Scene US en 1970 funk,rnb,soul. Artist influences Sly and the Family Stone, James Brown, Ohio Players (group named after them); Sam Cooke and Jackie Wilson left out (seen at the Apollo, no musical debt stated).
