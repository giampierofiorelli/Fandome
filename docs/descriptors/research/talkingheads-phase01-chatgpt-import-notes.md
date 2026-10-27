# CLAUDE IMPORT — Talking Heads / Fandome / Phase 01

Research cutoff: 26 October 2026. **Incremental package**: exactly four new rows for Talking Heads. No rows from other artists or previous phases. Branch inspected: `descriptors` (read only). Artist ID: `talkingheads`. `docs/descriptors/talkingheads.csv` was **not present** on inspected branch.

## This phase (new CSV rows, in chronological order)

| album_id | album | year | type | catalogue |
|---|---|---|---|---|
| `talkingheads-talkingheads77` | Talking Heads: 77 | 1977 | studio | already present |
| `talkingheads-moresongsaboutbuildingsandfood` | More Songs About Buildings and Food | 1978 | studio | **ADD** |
| `talkingheads-fearofmusic` | Fear of Music | 1979 | studio | already present |
| `talkingheads-remaininlight` | Remain in Light | 1980 | studio | already present |

Use header exactly as in `talkingheads_phase01_rows_ONLY.csv` (27 columns). IDs already in catalogue follow the established `talkingheads` prefix and guide slug rule. CSV has **only Phase 01** rows. Do not include singles (e.g. "Love → Building on Fire"), 2005 remaster extras, the 1982 live album *The Name of This Band Is Talking Heads*, or *Stop Making Sense* in the album descriptor import. They reuse compositions and are not required here.

## Catalogue additions and corrections

- **ADD** `More Songs About Buildings and Food` (1978, studio), ID `talkingheads-moresongsaboutbuildingsandfood`.
- **ADD (later Phase 02)** `True Stories` (1986, studio), ID `talkingheads-truestories`.
- **ADD (later Phase 02)** `Naked` (1988, studio), ID `talkingheads-naked`.
- All eight studio albums are accounted for in the audit. Current catalog contains five (1977, 1979, 1980, 1983, 1985).

## Co-billed albums

None in this phase. The *band* is collectively credited as a co-producer on 1977–1979 albums; that is a **production credit, not a co-billed release**. David Byrne and Brian Eno made a separate collaboration (*My Life in the Bush of Ghosts*); it is not a Talking Heads album and is not included. Do not add it to the band's rows.

## New genre tokens

These are sourced genre/style labels missing from the current listed `Genre` tokens; preserve the exact string rather than silently remap:

- `artpunk`: MusicBrainz album-level "art punk" tag (*Talking Heads: 77*), corroborated by Pitchfork's New York art-punk assessment.
- `americanpunk`: AllMusic album "American Punk" style on 1977/1978 releases.
- `punknewwave`: AllMusic "Punk/New Wave" style on relevant albums.
- `collegerock`: AllMusic "College Rock" style on 1978/1980 albums.

The new tokens must be added to `scenes.ts`, their families to `genreFamilies.ts`, and validator allowlist if required. `artrock`, `newyorkpunk`, `newwave`, `funk`, `postpunk`, `afrobeat`, `dancerock`, `albumrock`, `contemporarypoprock` etc. already exist.

## New instrument tokens

None. The 1977 steelpan is the existing `steeldrums` token; the 1977 marimba is the existing `mallets` token. Both are only small parts of that album, not core across all tracks.

## New production tokens

None. Avoid assigning named synthesizer models without reliable, **album-specific** verification. Repeated live parts are not automatic evidence of physical tape loops or sampled audio; no `sampling` token in these rows. No equipment transferred retroactively from Byrne/Eno's separate *My Life in the Bush of Ghosts* sessions.

## ARTIST INFLUENCES (Phase 01 only; band-wide musicians' accounts)

Names below are **documented musical influences or listening references**, not automatically influences on every album. Only *record-specific* support is in the `influenced_by` columns.

- **Roxy Music** — Chris Frantz explicitly recalls the band as an inspiration in an interview: https://www.loudersound.com/features/talking-heads-prog; for early band focus also Mary Harron's contemporary recollection in https://www.theguardian.com/music/2009/mar/27/brian-eno-david-byrne.
- **Al Green** — Chris Frantz states Talking Heads were inspired by Al Green, and the band's 1978 cover of "Take Me to the River" is a documented tribute: https://thequietus.com/interviews/tom-tom-club-chris-frantz-talking-heads-interview/ and https://www.grammy.com/news/remain-light-turns-40-artists-weigh-talking-heads-genre-defying-dance-floor-classic/.
- **Smokey Robinson** — named by Chris Frantz as an influence on Talking Heads: https://thequietus.com/interviews/tom-tom-club-chris-frantz-talking-heads-interview/.
- **Otis Redding** — named by Chris Frantz as an influence on Talking Heads: https://thequietus.com/interviews/tom-tom-club-chris-frantz-talking-heads-interview/.
- **James Brown** — Byrne describes records in Talking Heads' collection and how they moved into rhythmic compositions: https://pitchfork.com/features/5-10-15-20/david-byrne-on-the-music-that-made-him/; the band's road-trip tapes were reported in https://pitchfork.com/reviews/albums/talking-heads-more-songs-about-buildings-and-food/.
- **Fela Kuti** — Eno and Byrne/Frantz directly discuss the Afrobeat template, especially *Afrodisiac* and *Remain in Light*: https://www.theguardian.com/music/2009/mar/27/brian-eno-david-byrne and https://www.grammy.com/news/remain-light-turns-40-artists-weigh-talking-heads-genre-defying-dance-floor-classic/.
- **Parliament / P-Funk** — Byrne names Parliament and George Clinton's recordings as important to the band's rhythmic evolution: https://pitchfork.com/features/5-10-15-20/david-byrne-on-the-music-that-made-him/.
- **Funkadelic** — Byrne names Funkadelic alongside Parliament as part of band's listening: https://pitchfork.com/features/5-10-15-20/david-byrne-on-the-music-that-made-him/.
- **Hamilton Bohannon** — Byrne names his records in the band's collection, alongside funk artists: https://pitchfork.com/features/5-10-15-20/david-byrne-on-the-music-that-made-him/; treat as broad context, not album-specific.

**Not included merely as influence:** Brian Eno (producer/collaborator on 1978–80); Adrian Belew and Robert Fripp (guest instrumentalists); Al Green's covered composition alone (the separate Frantz testimony is what supports artist influence); Hugo Ball (literary source). A source that merely compares Talking Heads to Television or XTC supports `sounds_like`, not `influenced_by`.

## Cautions / interpretation

- 1977 producer metadata: MusicBrainz gives Tony Bongiovi, Lance Quinn **and Talking Heads** as producers. Some editorials mention Bongiovi and Quinn only. Retain all credited producers and flag the distinction.
- 1978 and 1979: credited **Brian Eno and Talking Heads**. Eno was not a *member* of the band or a co-billed album artist.
- 1980: original discography and track-level credits give **Brian Eno alone** as producer, while some retrospectives call it "Eno and Talking Heads" in a less formal creative sense. This row uses the credited role and explains the wording discrepancy.
- `Fear of Music`'s `afrobeat` is **a few tracks**, principally "I Zimbra". `More Songs`'s `disco` and `dub` are partly rhythm/production textures. These scopes are explicit in genre_evidence.
- `Remain in Light`: Byrne explicitly describes sustained live repetitions on analogue tape and post-recording editing; these *humanly repeated* patterns must not be confused with sampling previously released records. The album's Fela Kuti debt is documented by primary interviews. Distinguish artist influence from any cultural or lyrical inspiration.
- Production values such as `heavyreverb` for 1978 describe a strongly audible/identified effect **on selected tracks**, not a blanket claim for every song.
- Eight descriptor scales are **editorial judgements anchored to the Fandome guide**, not numeric measurements. Notes document why they were chosen; revise if listeners disagree.
- `sounds_like` is editorial resemblance, not sourced historical influence. It has no genre-country restriction.
- Credits pertain to the **original studio album**, not later remasters, live albums or bonus tracks. No item repeated from existing artist CSV (none found on branch).

## Next phase (Phase 02, four new studio rows)

1. *Speaking in Tongues* (1983)
2. *Little Creatures* (1985)
3. *True Stories* (1986) — **add to catalogue**
4. *Naked* (1988) — **add to catalogue**

This completes the eight original Talking Heads studio albums. A recording of *Stop Making Sense* is a concert album and must **not** be inserted as a studio-record descriptor; it can be evaluated separately if there is explicit interest in a landmark live exception.

## Files

1. `CLAUDE_IMPORT.md`
2. `talkingheads_phase01_rows_ONLY.csv`
3. `talkingheads_phase01_sources.csv`
4. `talkingheads_phase01_genre_evidence.csv`
5. `talkingheads_phase01_evidence-notes.md`
6. `talkingheads_phase01_catalog-audit.csv`
