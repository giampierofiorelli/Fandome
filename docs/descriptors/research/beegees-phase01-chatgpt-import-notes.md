# Fandome import — Bee Gees — Phase 01

- Artist: **Bee Gees**
- Proposed Fandome artist ID: **`beegees`** (letters only).
- Repository read: `giampierofiorelli/Fandome` branch `descriptors` on 2026-10-28, without writes.
- Artist absent from BOTH `src/data/catalog.ts` and `src/data/seed.ts`.
- `docs/descriptors/beegees.csv` returned 404; no existing Bee Gees descriptor rows were available to skip. Landmark research file was checked for standalone Bee Gees rows; mentions as comparison for other artists are not existing Bee Gees descriptors.
- One row per album, 27 columns, all `draft`; no live shows, greatest hits or reissue bonus material included.

## This phase — original standard studio albums

| Album ID | Title | Year | Type | Catalog action |
|---|---|---:|---|---|
| `beegees-thebeegeessingandplay14barrygibbsongs` | The Bee Gees Sing and Play 14 Barry Gibb Songs | 1965 | studio | Add |
| `beegees-spicksandspecks` | Spicks and Specks | 1966 | studio | Add |
| `beegees-beegees1st` | Bee Gees' 1st | 1967 | studio | Add |
| `beegees-horizontal` | Horizontal | 1968 | studio | Add |

## Catalogue additions

All four album IDs above are proposed additions. No preexisting IDs found for this artist in checked catalog/seed. Reserve ID `beegees-beegees1st` to retain original apostrophe-less title normalization.

**1965 release caveat:** *The Bee Gees Sing and Play 14 Barry Gibb Songs* is the widely numbered first Bee Gees studio LP, but includes **nine earlier Australian single sides and five new tracks**. Robin Gibb’s estate calls it a first true album and mostly a compilation. It is intentionally included **only because discographies count it as studio album**. Claude should flag it for curator review if Fandome excludes predominantly recycled studio recordings regardless of canonical classification. The official beegees.com discography currently starts with 1966 *Spicks and Specks*. See evidence notes and source URLs.

## Co-billed albums / original label credit

Original Leedon sleeve of 1965 debut is billed **“Barry Gibb & The Bee Gee's”**, not simply “Bee Gees”. This is a historical credit for the same band with Barry named; if catalog supports co-billed artist objects, inspect exact original attribution before changing the row. All later phase-01 albums billed Bee Gees.

## Tokens not already in the checked Fandome vocabulary

- **Genres:** none expected; `beat`, `ampop`, `sunshinepop`, `rockandroll`, `folkrock`, `baroquepop`, `psychedelicpop`, `psychedelicrock`, `artpop`, `artrock`, `softrock`, `poprock`, `rock` already appear in the `Genre` union.
- **Instruments:** none expected; `melodica`, `mellotron`, `harpsichord`, `oboe`, `trumpet` already listed.
- **Production:** none expected; `analogtape`, `overdubbing`, `stringarrangements` already listed.

## ARTIST INFLUENCES — career-wide, supported sources (phase 01 only)

| Influence | Who / evidence | Source |
|---|---|---|
| The Everly Brothers | Barry Gibb remembers their early harmony records as a model for the brothers singing together. | https://www.independent.co.uk/arts-entertainment/barry-gibb-bee-gees-new-album-b1767552.html |
| The Mills Brothers | Barry recalls the childhood vocal quartet and explicitly connects listening to early three-brother harmony practice. | https://www.independent.co.uk/arts-entertainment/barry-gibb-bee-gees-new-album-b1767552.html |
| The Beatles | Barry states he remains a Beatles devotee; period biographies describe their model in the early group. This is career-wide testimony, NOT evidence of specific track/album inspiration. | https://chicago.suntimes.com/2016/3/4/18474924/barry-gibb-embarks-on-solo-tour-celebrates-the-bee-gees |
| The Hollies | Barry named them in *The Joy of the Bee Gees* documentary, as summarised in a biographical article. Secondary documentation; moderate confidence. | https://britishheritage.org/bee-gees |
| Otis Redding | Barry named him in the same documentary account; the song *To Love Somebody* being intended for Redding is not itself an album influence. | https://britishheritage.org/bee-gees |
| Neil Sedaka | Maurice identified him as an early influence in the same biographical account. | https://britishheritage.org/bee-gees |

These artist-wide influences are **not** automatically inserted into `influenced_by` for any of the four album rows. Covers, songs written for somebody else, guests, and critic comparisons are not influences.

## Credits / editions requiring care

- 1965: Bill Shepherd is primarily associated with new sessions; Robert Iredale appears in older-song credit summaries. The LP is a multi-year compilation-like studio debut, not a single 1965 recording session.
- 1966: Nat Kipner produced; Ossie Byrne engineered. Never conflate his engineering with production. The originally issued *Spicks and Specks* LP must not be confused with *Monday's Rain*, *Rare, Precious & Beautiful* or alternate 2013 CD versions.
- 1967: Robert Stigwood producer; Ossie Byrne co-producer. Shepherd/Dennys arrangements are not production. An occasional track-level Bee Gees credit does not establish group album production.
- 1968: Robert Stigwood and Bee Gees are album producers. Reissue credits and related session material should not alter the original album attribution.
- Studio instruments and production codes in the CSV have evidence at the album or track scope; specific synth models have not been invented.

## Next phase — Phase 02

1. *Idea* (1968)
2. *Odessa* (1969)
3. *Cucumber Castle* (1970)
4. *2 Years On* (1970)

Later phases continue chronologically. Omit compilation *Best of Bee Gees* (1969) and live albums; handle the 1977 *Saturday Night Fever* soundtrack separately if requested as a landmark/collaboration, avoiding duplication of Bee Gees songs and other artists.


## Claude import note

- 4 rows imported as delivered; no new tokens.
- Catalog: full studio discography 1965-2001 (22 albums); Saturday Night Fever and Staying Alive soundtracks (multi-artist) left out for now. Added to LEGACY.
- Scene GB en 1960 pop,disco,rock (British-born, started in Australia).
- 1965 album kept as studio (discographies count it) though 9 of 14 tracks are earlier singles: flagged to the owner.
- Everly Brothers, Beatles, Hollies are both artist influences and editorial likenesses: kept in both.
