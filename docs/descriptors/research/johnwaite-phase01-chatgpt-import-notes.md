# John Waite — Fandome phase 01 — Claude import

**Import exactly four NEW solo studio album rows**, chronological. This phase is standalone and strictly incremental. Only `johnwaite_phase01_rows_ONLY.csv` belongs in the album-descriptors CSV; never append the sources or genre evidence to it. All rows are `draft` and have 27 columns. No GitHub edits were made by ChatGPT.

## GitHub audit and IDs
Checked branch `descriptors` in `src/data/catalog.ts` and `src/data/seed.ts`: **no John Waite artist entry**. Checked `docs/descriptors/johnwaite.csv`, `docs/descriptors/waite.csv`: **both missing**. Propose new artist id **`johnwaite`**, avoiding The Babys and Bad English, which should have their own catalogues. Add the following four album entries to the new artist and import only these rows:

| album_id | title | year | type | action |
|---|---|---|---|---|
| `johnwaite-ignition` | Ignition | 1982 | studio | Add artist and album |
| `johnwaite-nobrakes` | No Brakes | 1984 | studio | Add album |
| `johnwaite-maskofsmiles` | Mask of Smiles | 1985 | studio | Add album |
| `johnwaite-roversreturn` | Rover's Return | 1987 | studio | Add album |

No landmark album was already described for this artist, so **no album was skipped**. All source URLs are in `johnwaite_phase01_sources.csv`; genre-by-genre evidence and scope are in `johnwaite_phase01_genre_evidence.csv`.

## ARTIST INFLUENCES (phase 01 only: named by John Waite)

These are artist-wide autobiographical musical references from interviews, **not** direct evidence for the four records. Do not autofill `influenced_by` for each album.

- **Neil Young**: Waite says Young had a major effect on deciding to become a singer. Source: https://www.johnwaiteworldwide.com/news/john-waite-beauty-in-imperfection/
- **The Beatles**: Waite explicitly calls them a formative influence and turning point in musical life. Source: https://www.songwritingmagazine.co.uk/interviews/john-waite
- **Hank Williams**: He says his cousin introduced him to Williams, an early defining source. Source: https://xsrock.com/exclusive-interview-with-john-waite/
- **Marty Robbins**: He identifies Robbins as a major childhood influence, especially cowboy ballads. Source: https://xsrock.com/exclusive-interview-with-john-waite/
- **Nina & Frederik**: Waite recalls their minor-key records had a considerable effect on him. Source: https://www.songwritingmagazine.co.uk/interviews/interview-john-waite
- **The Shadows**: He explicitly acknowledges their early impact as part of pre-Beatles music education. Source: https://www.suncoastpost.com/music/interview-with-musician-john-waite-coming-to-sarasotas-van-wezel-performing-arts/
- **Otis Redding**: Waite identifies African-American soul singers including Redding among his musical foundations. Source: https://trafficbeat.net/conversation-john-waite-huffpost-2-23-11/
- **Etta James**: Waite names James among influential early soul and R&B musicians. Source: https://trafficbeat.net/conversation-john-waite-huffpost-2-23-11/
- **Tina Turner**: Waite names Turner in discussion of his own musical influences. Source: https://trafficbeat.net/conversation-john-waite-huffpost-2-23-11/
- **Jimi Hendrix**: Waite describes his formative listening to Hendrix during art school. Source: https://www.iconvsicon.com/2013/07/22/john-waite-discusses-his-career-longevity-new-live-album-and-much-more/

## Editorial caveats

- **Producer credits:** *Ignition* Neil Giraldo. *No Brakes* John Waite + David Thoener + Gary Gersh (also spelled Gersch). *Mask of Smiles* John Waite + Stephen Galfas. *Rover's Return* main producers John Waite + Frank Filipetti; *track 1* Desmond Child; *tracks 6–7* Rick Nowels. All four appear in the latter row but the per-track distinction must be preserved.
- **Production tags:** Only `drumprogramming` on *Rover's Return* is directly documented by a credited player (Jimmy Bralower). Do not guess specific drum machine/synth hardware for other albums. Empty production fields are intentional. Instruments derive from original liner/session credits, not genre guesses.
- **Genre evidence:** minimum four per album. `newwave` on *Ignition* refers to production texture; `synthpop` for *Mask of Smiles* has an original pressing style citation and is not the record's primary genre; `hardrock` on *No Brakes* is tail based on original vinyl index; `arenarock|softrock` on *Rover's Return* are **editorial tail** classifications based on tracks, to reconsider if strict direct-source-only genre evidence is required. No new tokens needed (all present in `src/data/scenes.ts` at research time).
- **Versions:** *Mask of Smiles / Rover's Return* two-album reissues are not new studio works. *The Babys* and *Bad English* are separate credited artists. Do not duplicate catalogue or descriptor rows across phases.
- **Sounds-like:** provisional, human-judgment similarities, never factual influences. No album-specific musical influence was confirmed for the four original 1980s albums, so all `influenced_by` are intentionally empty.
- **Metadata:** the 2001 reissue and later digital issues may display remastering/digital editing credits; do not apply these to original album production without evidence. Run the Fandome validator and tests before merging; keep status `draft` pending independent review.

## Next phase 02

*Temple Bar* (1995), *When You Were Mine* (1997), *Figure in a Landscape* (2001), *The Hard Way* (2004). Four new rows only.

## Claude import note

- New artist `johnwaite` (catalogue, scene GB en 1980 rock,pop), four solo studio albums 1982–1987. The Babys and Bad English stay separate.
- Producers: John Waite dropped as self-credit.
- sounds_like emptied (Pat Benatar, Rick Springfield, Bryan Adams, Foreigner, Starship): ChatGPT calls them "provisional, human-judgment similarities". Pat Benatar would also be a producer link (Neil Giraldo, her guitarist, produced Ignition). The reception pass looks for critics' comparisons.
- Artist influences from his own words: Neil Young, The Beatles, Hank Williams, Marty Robbins, Nina & Frederik, The Shadows, Otis Redding, Etta James, Tina Turner, Jimi Hendrix.

## Claude enrichment

- Reception from en.wikipedia (charts), RIAA, AllMusic (Erlewine, via Qobuz), Cash Box 1982–85, Billboard 1985 and 1987, Washington Post 1984, Stereogum 2020, Pop Rescue.
- No album-level critic comparison found: sounds_like stays empty. Track-level only: Missing You vs The Police's Every Breath You Take (Washington Post, Stereogum) and Journey (Stereogum).
- Producers confirmed (Discogs 6384247, 10985363, 2179234, 899789): Neil Giraldo; David Thoener and Gary Gersh; Stephen Galfas; Frank Filipetti, Desmond Child (track A1), Rick Nowels (B1–B2).
- Ignition: saxophone added (Uptown Horns). Mask of Smiles: brass removed (the Borneo Horns are saxophones), hard rock added (Cash Box). Rover's Return: arena rock and soft rock removed (ChatGPT's own "editorial" tags, no source).
