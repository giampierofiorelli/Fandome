# CLAUDE IMPORT — The Verve / Phase 01

Read-only research snapshot: Fandome GitHub branch `descriptors`, 2026-10-26. Artist `verve` already exists; `docs/descriptors/verve.csv` was NOT found. Import the **four incremental rows only** from `verve_phase01_rows_ONLY.csv`. All rows are `draft`, contain exactly 27 columns and are chronologically ordered.

## Phase contents

| album_id | title | year | type | Fandome catalog |
|---|---|---:|---|---|
| `verve-verve` | Verve | 1992 | ep | **ADD** |
| `verve-astorminheaven` | A Storm in Heaven | 1993 | studio | exists |
| `verve-anorthernsoul` | A Northern Soul | 1995 | studio | exists |
| `verve-urbanhymns` | Urban Hymns | 1997 | studio | exists |

## Album to add to catalog.ts

- `['Verve', 1992]`, `type=ep`, `album_id=verve-verve`. Standalone landmark **studio EP** released under the group's original name *Verve*, sometimes listed *Verve EP* or *The Verve E.P.*. MusicBrainz original release group is `Verve`: https://musicbrainz.org/release-group/7f788661-9649-3a90-9436-807e2161203e . AllMusic also documents the early standalone five-track EP: https://www.allmusic.com/album/r77456 . This is **not** the 1994 B-side compilation *No Come Down*.
- Existing catalogue: A Storm in Heaven (1993), A Northern Soul (1995), Urban Hymns (1997), Forth (2008); do not add these again.
- Co-billed album rows: **none** in phase 01. The historical EP credits *Verve* (same band) rather than a collaboration. Andrew Oldham Orchestra on a sample is **not** co-billing.

## New exact-list tokens to register

- **Genre**: `spacerockrevival` — genre label **Space Rock Revival** specifically attached to *The Verve E.P.* by Album of the Year: https://www.albumoftheyear.org/album/6533-the-verve-the-verve-ep.php . Different from `spacerock`; add to `scenes.ts`, `genreFamilies.ts` and the genre allowlist in `validate-descriptors.ts` (e.g. parent `spacerock`/`rock`). If Claude rejects medium-confidence aggregator labels, delete that row genre and its evidence record instead of substituting another genre silently.
- **Production**: `rolandgs6` — Roland GS-6 digital guitar-effects processor used by Nick McCabe by the *A Storm in Heaven* recording; 1998 Total Guitar technical discussion: https://www.thevervelive.com/1998/03/total-guitar-magazine-genius-of.html . Register exact model, not a generic synthesizer or tape delay.
- **New instruments**: none.

## ARTIST INFLUENCES (group members name them; artist-wide, not automatically album-specific)

These named influences must not be copied mechanically into every `influenced_by` cell. See per-album evidence for the narrower artist-per-album links.

| Artist | Direct statement / qualification | Primary interview |
|---|---|---|
| Joy Division | Nick McCabe describes youthful listening to their record textures | https://www.thevervelive.com/1998/03/total-guitar-magazine-genius-of.html |
| John Martyn | McCabe explicitly identifies 1970s Martyn albums as a source of his textured playing | https://www.thevervelive.com/1998/03/total-guitar-magazine-genius-of.html |
| The Durutti Column / Vini Reilly | McCabe explicitly names Reilly's anti-rock guitar approach | https://www.thevervelive.com/2016/10/coneys-loft-q-with-nick-mccabe.html |
| Funkadelic / Eddie Hazel | Named by McCabe as an enduring guitar influence | https://www.musicradar.com/news/guitars/nick-mccabe-on-the-verves-studio-battles-egos-and-tonal-exploration-644155 |
| Richard Thompson | McCabe specifically says he listened to Thompson during the making of *A Northern Soul* | https://www.musicradar.com/news/guitars/nick-mccabe-on-the-verves-studio-battles-egos-and-tonal-exploration-644155 |
| Television / Tom Verlaine | McCabe explicitly identifies Verlaine as an influence | https://www.thevervelive.com/2016/10/coneys-loft-q-with-nick-mccabe.html |
| Jimi Hendrix | McCabe explicitly says Hendrix affected his musical outlook | https://www.thevervelive.com/2016/10/coneys-loft-q-with-nick-mccabe.html |
| Can / Holger Czukay | McCabe names Can and Holger Czukay among substantial influences | https://www.thevervelive.com/2016/10/coneys-loft-q-with-nick-mccabe.html |
| Public Image Ltd | McCabe names PIL as music he followed before joining The Verve | https://www.musicradar.com/news/guitars/nick-mccabe-on-the-verves-studio-battles-egos-and-tonal-exploration-644155 |
| Curtis Mayfield | Richard Ashcroft names Mayfield when describing Black soul sources for *Urban Hymns* | https://stubermania.substack.com/p/a-conversation-with-richard-ashcroft |
| Marvin Gaye | Ashcroft directly names Gaye alongside Mayfield in 1997 retrospective on *Urban Hymns* sound | https://stubermania.substack.com/p/a-conversation-with-richard-ashcroft |
| Sly and the Family Stone | Ashcroft's 1997 interview names the group as a model of bodily groove and emotion | https://stubermania.substack.com/p/a-conversation-with-richard-ashcroft |
| The Beatles | Richard Ashcroft recounts his parents' Beatles records in youth; broader rather than album-specific evidence | https://www.latimes.com/archives/la-xpm-1998-mar-29-ca-33819-story.html |
| Pink Floyd | Richard Ashcroft recounts household records; McCabe also mentions family exposure, not a specific album's stated influence | https://www.latimes.com/archives/la-xpm-1998-mar-29-ca-33819-story.html |
| The Stone Roses | Ashcroft says seeing the band live at 15 was formative for pursuing music; not a track-specific source | https://www.latimes.com/archives/la-xpm-1998-mar-29-ca-33819-story.html |

**Excluded from unqualified influence list:** Cocteau Twins (McCabe's 1998 answer is ambivalent), Led Zeppelin (McCabe recalls forced childhood listening, not a positive directional influence), sample source Rolling Stones / Andrew Oldham Orchestra (musical quotation, not by itself a causally stated influence). General sonic similarity belongs only in `sounds_like`.

## Edition, credit, date and measurement caveats

- Original EP release listed as 1992-12-01 by MusicBrainz, November 1992 by AllMusic, and 7 December elsewhere. Year **1992** is secure, day/month not harmonized.
- EP first published under the name **Verve**. Fandome row uses `The Verve` to match the existing artist display name.
- Youth and The Verve are credited together on most of *Urban Hymns*; Chris Potter is a **true producer on some tracks**, additional producer on others. Do not add Andrew Loog Oldham as album producer; he made a **pre-existing sample source**. Wil Malone is string arranger, not album producer.
- Liam Gallagher is a guest on *A Northern Soul* handclaps, not a producer. Historical Rolling Stones sample is not an `influenced_by` link.
- A Storm in Heaven critics differ in contemporaneous versus later critical appraisal. *A Northern Soul* is sometimes filed as shoegaze even though reviewers emphasise the band's departure from the style.
- The opening five tracks of later compilations/deluxe reissues are **not** additional phase albums.
- Musical scales are editorial ratings grounded in per-album reviews and credited sonics. `lyrics` left empty for 1992/1993 rather than extrapolating from the later singer-songwriter albums.

## Next phase

**Phase 02: `Forth` (2008) only**, the sole remaining studio album in Fandome and the completed The Verve studio catalogue through 2026-10-26. A second phase of 3–4 unique studio/landmark releases is impossible without padding with singles, compilations or live records. No repeats from phase 01.

## Files

1. `CLAUDE_IMPORT.md` (this file)
2. `verve_phase01_rows_ONLY.csv` (strictly new rows)
3. `verve_phase01_sources.csv` (source URLs and supported claims)
4. `verve_phase01_genre_evidence.csv` (one genre per row, explicit scope)
5. `verve_phase01_evidence-notes.md` (case-by-case rationale and source disputes)
6. `verve_phase01_catalog-audit.csv` (catalogue completeness)

After importing, add any new catalog entries/tokens, run the validator and tests. No code/repository mutation performed by this package.
