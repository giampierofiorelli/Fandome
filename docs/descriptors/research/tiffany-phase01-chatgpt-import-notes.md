# Tiffany — Fandome phase 01 — Claude import

**Import exactly four NEW studio-album descriptor rows.** The archive is strictly incremental and contains no artist rows from earlier tasks or future phases. No Github modifications were performed. Rows have 27 comma-separated columns and `status=draft`.

## Artist and ID audit
- Artist: **Tiffany** (Tiffany Renee Darwish), the American singer associated with “I Think We’re Alone Now”.
- Proposed `artist_id`: **`tiffany`**, checked against `src/data/catalog.ts` and `src/data/seed.ts` on branch `descriptors` (29 October 2026): no artist found, no ID collision.
- `docs/descriptors/tiffany.csv`: **absent**. **No already-described albums were skipped.**
- Add an artist entry and the following original studio albums to `src/data/catalog.ts` before running tests:

| Album ID | Title | Original year | Type | Existing? |
|---|---|---:|---|---|
| `tiffany-tiffany` | Tiffany | 1987 | studio | No |
| `tiffany-holdanoldfriendshand` | Hold an Old Friend's Hand | 1988 | studio | No |
| `tiffany-newinside` | New Inside | 1990 | studio | No |
| `tiffany-dreamsneverdie` | Dreams Never Die | 1993 | studio | No |

## Six files in this ZIP
- `tiffany_phase01_rows_ONLY.csv`: add these four rows only to `docs/descriptors/tiffany.csv`.
- `tiffany_phase01_sources.csv`: working references and their specific scope.
- `tiffany_phase01_genre_evidence.csv`: source and coverage per genre.
- `tiffany_phase01_evidence-notes.md`: album-specific assessment, disputed dates/credit roles, confidence and editions.
- `tiffany_phase01_catalog-audit.csv`: catalogue changes needed.
- `CLAUDE_IMPORT.md`: these instructions.

## Co-billing, formats and vocabulary
- No co-billed albums in this phase. “Hearts Never Lie” features **Chris Farren** on a track only; it is not a collaboration album.
- 27-column descriptor header matches `docs/album-descriptors-guide.md`. Every genre, voice, instrument and production token used is already in the current repo's vocabulary: **no additions proposed**. Validate using `scripts/validate-descriptors.ts` after import.
- The 1993 album *Dreams Never Die* is the **12-track Asia-only original**; exclude the six bonus tracks added in 2005. The 1990 CD lists 11 tracks on the sleeve but has 10 playable indexes because the interlude is joined to “Tenderly”.
- The proposed harder-rock US edition of *Dreams Never Die* was never released. It must not affect original-album descriptors. 1990 release-day sources differ (25 September vs 2 October), but both give year 1990.
- All values, including the eight numeric scales and `sounds_like`, are **editorial proposals requiring human review**. Keep unconfirmed instruments, production machines and album-specific influences empty.

## ARTIST INFLUENCES (first-person sources; artist-wide, NOT album-specific)
These are artist-level influences supported by statements from Tiffany, not inferred because of shared personnel, covers, genres or critics' comparisons.

1. **Stevie Nicks** — Tiffany says Nicks has been an inspiration and calls her one of her core early influences. Sources: [eonmusic interview](https://www.eonmusic.co.uk/tiffany-ultimate-namm-night-eonmusic-interview-february-2019.html), [Fox News interview](https://www.foxnews.com/entertainment/tiffany-80s-i-think-were-alone-now-debbie-gibson.amp).
2. **Heart** — Tiffany says she listened to Heart as a youngster and was inspired to pursue rock singing. Sources: [Classic Pop interview](https://www.classicpopmag.com/features/all-grown-up-tiffany-interview/), [eonmusic interview](https://www.eonmusic.co.uk/tiffany-ultimate-namm-night-eonmusic-interview-february-2019.html).
3. **Fleetwood Mac** — Tiffany explicitly recalls discovering Fleetwood Mac in a cousin's record collection and being drawn away from the country route toward rock. Source: [Classic Pop interview](https://www.classicpopmag.com/features/all-grown-up-tiffany-interview/).
4. **Led Zeppelin** — Tiffany identifies their music as part of the rock she grew up on. Sources: [eonmusic interview](https://www.eonmusic.co.uk/tiffany-ultimate-namm-night-eonmusic-interview-february-2019.html), [Tucson Weekly interview](https://www.tucsonweekly.com/music/all-grown-up-15407800/).
5. **Janis Joplin** — Tiffany recalls visualising becoming a singer like Nicks or Joplin while she was young. Source: [American Songwriter, quoting Tiffany](https://americansongwriter.com/80s-pop-sensation-tiffany-and-her-stranger-things-fueled-resurgence-where-are-they-now/) (reported direct quotation; verify its originating interview before treating it as high confidence).

*Formative repertoire:* Tiffany says Tanya Tucker’s “Delta Dawn” was the first song she learned, but recording an artist’s song does not automatically establish a named artistic influence. Do not promote Tanya Tucker on that basis alone.

## Producer and genre caveats
- *Tiffany* / *Hold an Old Friend's Hand*: **George Tobin** sole album producer; **John Duarte** arranger and musician, not automatically producer.
- *New Inside*: **Phillip Damien** and **Maurice Starr** documented producers, latter with track-specific involvement; **Dick Scott executive-only**, exclude from producer column.
- *Dreams Never Die*: **George Tobin** credited as producer “in association with John Duarte.” Some lists call Duarte a producer; leave Duarte out until original 1993 Japanese booklet role is checked.
- `synthpop` on the 1988 album and `dancepop` on the 1993 album are lower-strength categories from secondary classification/reissue contexts, placed last to avoid over-weighting.

## Roadmap
**Phase 02:** *The Color of Silence* (2000), *Dust Off and Dance* (2005), *Just Me* (2007), *Rose Tattoo* (2011).
**Phase 03:** *A Million Miles* (2016), *Pieces of Me* (2018), *Shadows* (2022).
Avoid live recordings, greatest hits and retrospective compilations until separately requested.

## Claude import note

- New artist `tiffany` (catalogue, scene US en 1980 pop), four studio albums 1987–1993.
- sounds_like emptied (Stevie Nicks, New Kids on the Block, Mariah Carey): "editorial proposals". New Kids on the Block would also be a producer link (Maurice Starr produced them). Stevie Nicks stays as an artist-level influence from her own words.
- Artist influences from her own words: Stevie Nicks, Heart, Fleetwood Mac, Led Zeppelin, Janis Joplin.

## Claude enrichment

- Reception from en.wikipedia (charts, certifications, ratings box), RIAA, AllMusic (via Qobuz), Robert Christgau, Rolling Stone, Entertainment Weekly, Music & Media 1990.
- sounds_like: Tiffany (1987) Stevie Nicks ("vocal style and the album's material were strongly influenced by Stevie Nicks", Wisconsin State Journal and The Morning Call 1987 via en.wikipedia); Hold an Old Friend's Hand Stevie Nicks (John Milward, Knight-Ridder 1989: the new styling "makes her sound even more like Stevie Nicks"). New Inside and Dreams Never Die stay empty (Janet Jackson/Paula Abdul only for the New Inside single).
- influenced_by Stevie Nicks on the 1987 album: Tiffany told the Wisconsin State Journal (1987) that she and George Tobin tried songs in several styles, including a "Stevie Nicks sound".
- Producers confirmed (Discogs 1643963, 3694921, 1643961, 732939): George Tobin (1987, 1988, 1993; John Duarte arranger); New Inside Phillip Damien (9 tracks), Maurice Starr (2), Kevin Grady added (co-producer of It's You).
- Hold an Old Friend's Hand: landmark 0; country pop (en.wikipedia) and electronic drums ("heavy Simmons drums") added; digital recording confirmed (sleeve). New Inside: rap removed from voice (the rap is the guest's, credited "Dennis Cheese").
