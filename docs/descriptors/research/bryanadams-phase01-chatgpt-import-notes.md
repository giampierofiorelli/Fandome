# Fandome import — Bryan Adams — Phase 01

- Artist: **Bryan Adams**
- Proposed Fandome artist id: **`bryanadams`** (alphanumeric; the artist was NOT found in the branch `descriptors` `catalog.ts` or `seed.ts` checked 2026-10-28).
- Phase: **01**, first 4 studio albums, original standard editions only.
- Descriptors: `bryanadams_phase01_rows_ONLY.csv` has 27 columns and **only** these four records.
- Status: all `draft` (not independently reviewed).
- Nothing was imported or changed on GitHub.

## Phase 01: albums / ids

| Album ID | Title | Year | Type | Action |
|---|---|---:|---|---|
| `bryanadams-bryanadams` | Bryan Adams | 1980 | studio | Add to catalog |
| `bryanadams-youwantityougotit` | You Want It You Got It | 1981 | studio | Add to catalog |
| `bryanadams-cutslikeaknife` | Cuts Like a Knife | 1983 | studio | Add to catalog |
| `bryanadams-reckless` | Reckless | 1984 | studio | Add to catalog |

No previous `docs/descriptors/bryanadams.csv` exists in the checked branch, and no Bryan Adams album was found within the landmark-file search; **no earlier described album has been skipped**. Existing catalog and seed artist / album IDs were searched, so these are *proposed new* ids; rerun audit before merge if the repository changes. Check other releases before bulk import.

## Albums to add to the catalogue

All four above. The `catalog-audit.csv` also lists the next four studio albums as upcoming additions. The debut is self-titled; reserve the ID `bryanadams-bryanadams` rather than `bryanadams-bryanadams1980` unless another self-titled disc of the same artist is found.

## Co-billed recordings

None in this phase. Tina Turner is a featured singer on the track *It's Only Love* of *Reckless*; this does not make the album co-billed.

## New descriptor tokens

- Genres: **none** (`poprock`, `aor`, `powerpop`, `rock`, `hardrock`, `powerballad`, `newwave`, `heartlandrock`, `arenarock` already allowed).
- Instruments: **none**.
- Production: **none**.

## ARTIST INFLUENCES (whole career, not per album)

These are artists explicitly named by Bryan Adams, not credits, covers or critic comparisons. **Do not copy this list to individual album `influenced_by` cells** without evidence for that album.

| Influence | Documentary support |
|---|---|
| The Beatles | Adams calls them his first influences: https://tidal.com/magazine/article/bryan-adams-nothing-to-prove-us/1-18071; also https://www.timeout.com/hong-kong/music/interview-bryan-adams-on-his-get-up-tour-and-returning-to-hong-kong |
| Buddy Holly and the Crickets | Adams names both among early influences: https://www.timeout.com/hong-kong/music/interview-bryan-adams-on-his-get-up-tour-and-returning-to-hong-kong |
| The Everly Brothers | Artist names them among influences: https://www.timeout.com/hong-kong/music/interview-bryan-adams-on-his-get-up-tour-and-returning-to-hong-kong |
| Simon & Garfunkel | Adams explicitly lists the duo: https://www.timeout.com/hong-kong/music/interview-bryan-adams-on-his-get-up-tour-and-returning-to-hong-kong |
| Led Zeppelin | Adams identifies rock-era inspiration: https://www.timeout.com/hong-kong/music/interview-bryan-adams-on-his-get-up-tour-and-returning-to-hong-kong; 2025 interview https://www.hollywoodreporterindia.com/features/interviews/bryan-adams-interview-i-admire-artists-who-can-reinvent-themselves-like-lady-gaga |
| David Bowie | Adams names Bowie among later influences: https://www.timeout.com/hong-kong/music/interview-bryan-adams-on-his-get-up-tour-and-returning-to-hong-kong |
| Elton John | Adams names him in the same answer: https://www.timeout.com/hong-kong/music/interview-bryan-adams-on-his-get-up-tour-and-returning-to-hong-kong |

Jim Vallance's different statement that the Beatles shaped **his own** musical development (https://www.museonmuse.jp/?p=5915) is not a direct admission of influence on any *specific* early Bryan Adams album.

## Editorial caveats

- *You Want It You Got It* is the artist-site spelling; A&M/streaming services often display a comma after *It*. The Fandome title here is consistently without the comma and the normalized ID is punctuation-free.
- *Cuts Like a Knife* official website includes a later bonus track, *Christmas Time*; baseline is the 10 original songs.
- *Reckless*: Jim Vallance is historically a main songwriter and associate producer. Original A&M archive calls him co-producer, but track-specific release credits indicate associate. Original official page credits production only to Adams and Clearmountain. Keep only these two in the producers cell until any original-sleeve photographic evidence resolves the discrepancy.
- *Reckless*: One-take `onetake` applies only to *Run to You* per Adams; **not** to all tracks. The album's analog master tapes and vocal overdubs are documented. Specific home-studio machines photographed by Vallance should not be assigned to the final studio album.
- The first 3 albums lack a source that proves a distinct vocabulary-tagged production technique for the RELEASED recording; their `production` values remain empty, deliberately rather than inferred from studio technology.
- Comparisons in `sounds_like` are editorial and are never imported as `influenced_by`.
- Genre `newwave` on the second album is just title-track texture; `powerpop` on *Cuts Like a Knife* chiefly describes the title-track chorus. Scope lives in the genre evidence file.

## QA / Claude actions

1. Import / add the artist and four albums with the exact IDs in this archive. Never overwrite any newer existing descriptor row; reconcile with current branch first.
2. Append the 4 rows only; leave all other artists, albums and phases alone. Append the evidence and source rows as their schema requires.
3. Validate all 27 columns, genre/instrument/production tokens, required album catalogue entries, note lengths (max 15 words), and each `influenced_by` claim.
4. Keep `status=draft` until independently checked and apply normal tests.

## Next phase — Phase 02

1. *Into the Fire* (1987)
2. *Waking Up the Neighbours* (1991)
3. *18 til I Die* (1996)
4. *On a Day Like Today* (1998)

Exclude live records, greatest-hits packages and albums recorded as other artists.


## Claude import note

- 4 rows imported as delivered; no new tokens.
- Catalog: full studio discography added (1980-2025), incl. the Spirit soundtrack (2002) and the covers album Tracks of My Years (2014); live and compilations excluded.
- Scene CA en 1980 rock,pop (Canada: a global market, never a discovery target).
- Artist influences added to artistInfluences.ts from Adams's own interviews.
