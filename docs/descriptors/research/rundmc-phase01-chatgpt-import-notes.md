# CLAUDE_IMPORT — Run-D.M.C. phase 01

## Target

- Branch: `descriptors` (read-only research; **no repository writes done here**).
- Artist name: **Run-D.M.C.**; proposed unused artist id: **`rundmc`**.
- Checked artist in BOTH `src/data/catalog.ts` and `src/data/seed.ts`: **absent**.
- Checked `docs/descriptors/`: no `rundmc.csv` file; landmark research has no `rundmc` entry.
- **Previously described albums skipped: none.**
- Current phase only, **four new rows** (all `type=studio`, `status=draft`):
  1. `rundmc-rundmc` — *Run-D.M.C.* (1984)
  2. `rundmc-kingofrock` — *King of Rock* (1985)
  3. `rundmc-raisinghell` — *Raising Hell* (1986)
  4. `rundmc-tougherthanleather` — *Tougher Than Leather* (1988)

## Catalogue additions (mandatory before descriptor import)

All **seven** studio albums are absent from the checked catalogue. Add the artist `rundmc` and:

| Album id | Title | Year | Type | Phase |
|---|---|---:|---|---|
| `rundmc-rundmc` | Run-D.M.C. | 1984 | studio | 01 |
| `rundmc-kingofrock` | King of Rock | 1985 | studio | 01 |
| `rundmc-raisinghell` | Raising Hell | 1986 | studio | 01 |
| `rundmc-tougherthanleather` | Tougher Than Leather | 1988 | studio | 01 |
| `rundmc-backfromhell` | Back from Hell | 1990 | studio | 02 |
| `rundmc-downwiththeking` | Down with the King | 1993 | studio | 02 |
| `rundmc-crownroyal` | Crown Royal | 2001 | studio | 02 |

See `rundmc_phase01_catalog-audit.csv` for machine-readable actions. MusicBrainz discography: https://musicbrainz.org/artist/5ecc3f72-20a6-47a0-8dc5-fb0b3dadeea0

## Co-billed records

None among these four studio album **release titles**. The single/track “Walk This Way” features Aerosmith and “Roots, Rap, Reggae” features Yellowman; neither makes the whole LP a co-billed album. No entry needed in `coBilled.ts`.

## New genre, instrument, production tokens

**None proposed**. All phase 01 tokens used already appear in the `descriptors` guide/scenes and instrument/production definitions, including `oldschoolrap`, `eastcoasthiphop`, `raprock`, `gogo`, `poprock`, `oberheimdmx` and `prophet5`.

## ARTIST INFLUENCES (phase 01 only)

These are *self-named musical influences*, not critics' sound-alike suggestions and not people who merely collaborated. Since the interviewees are members of the group, claims refer most directly to D.M.C.'s part in the group's work.

- **Kurtis Blow** — D.M.C. says he imitated Blow as he entered rap. First-person interview: https://www.njarts.net/darryl-dmc-mcdaniels-interview-a-rich-past-and-a-meaningful-present/
- **Grandmaster Flash and the Furious Five / Grandmaster Flash** — D.M.C. says he copied Flash's work as an aspiring performer. Same NJArts interview.
- **Afrika Bambaataa & Soulsonic Force** — D.M.C. says this crew shaped his approach; producer Larry Smith independently says “It's Like That” was his response to “Planet Rock”. Sources: https://www.njarts.net/darryl-dmc-mcdaniels-interview-a-rich-past-and-a-meaningful-present/ ; https://medium.com/@briancoleman/larry-smith-q-a-january-2006-229fd9bd8e91
- **Melle Mel** — named by D.M.C. alongside Flash as a model. Source: https://www.njarts.net/darryl-dmc-mcdaniels-interview-a-rich-past-and-a-meaningful-present/
- **The Cold Crush Brothers** — D.M.C. identifies them as influential on his lyrics and hip-hop delivery in his Library of Congress interview; compares “Beats to the Rhyme” to a Cold Crush routine. Sources: https://www.loc.gov/static/programs/national-recording-preservation-board/documents/DarylMcDanielInterview.pdf ; https://allhiphop.com/reviews-music/class-of-88-tougher-than-leather/
- **The Beatles** — directly named by D.M.C. as an influence. Sources: https://www.loc.gov/static/programs/national-recording-preservation-board/documents/DarylMcDanielInterview.pdf ; https://hypebeast.com/2019/10/run-dmc-darryl-mcdaniels-jbl-fest-interview
- **The Rolling Stones** — directly named by D.M.C. Sources: same LOC and Hypebeast interviews.
- **Led Zeppelin** — directly named by D.M.C. Sources: same LOC and Hypebeast interviews.
- **Harry Chapin** — directly named by D.M.C. Sources: same LOC and Hypebeast interviews.
- **Jim Croce** — directly named by D.M.C. Sources: same LOC and Hypebeast interviews.
- **Creedence Clearwater Revival** — directly named by D.M.C. Source: https://hypebeast.com/2019/10/run-dmc-darryl-mcdaniels-jbl-fest-interview
- **Janis Joplin** — directly named by D.M.C. Source: https://hypebeast.com/2019/10/run-dmc-darryl-mcdaniels-jbl-fest-interview
- **Public Enemy** — D.M.C. says particular *Tougher Than Leather* tracks drew on Public Enemy. Direct track-by-track source: https://allhiphop.com/reviews-music/class-of-88-tougher-than-leather/ . **Do not project this backwards into the 1984/85 rows or uncritically into Raising Hell (1986).**
- **Slick Rick / Doug E. Fresh** — D.M.C. specifically relates the work's comedy/narrative approach to “La Di Da Di”; see 1988 interview and Raising Hell retrospective. Sources: https://allhiphop.com/reviews-music/class-of-88-tougher-than-leather/ ; https://albumism.com/features/run-dmc-raising-hell-album-anniversary

## Edition, date, evidence and credit caveats

- Original studio LPs only. Deluxe 2005 reissues include live tracks and remixes that **do not** change the album's `type` or recording-era genre assessments.
- Some web discography listings incorrectly imply **Crown Royal** dates from 1999; original commercial album release was **2001**. Phase 02 follows MusicBrainz/pressing chronology and the contemporary AP listing.
- Original **Raising Hell** May 1986 release day varies between databases (15 May and 27 May); year 1986 is stable and is all the 27-column CSV stores.
- **Run-D.M.C.** assistant producer Rod Hui is **not** included as a producer, despite an inconsistent secondary infobox. **Tougher Than Leather** executive producer Russell Simmons is **not** included. **Raising Hell** credited co-producers Jason Mizell and Joseph Simmons **are** included.
- The `influenced_by` value for *Raising Hell* is restricted to musicians D.M.C. names in album-era testimony and the independently documented “La Di Da Di” model; Public Enemy, although listed retrospectively by D.M.C. in that interview, is omitted from the 1986 row to avoid an evident chronology issue.
- Genre-evidence scope distinguishes whole-album genre from one-track flavours. A track-featured guest is **not** the same as an influence, and the sampled source record is **not** automatically an influence.
- Critic/retrospective descriptions are not recording-session metadata. Where specific hardware was not established for that album, it has not been guessed.
- CSV uses exactly 27 columns; notes max 15 words; status `draft`; only these four rows.

## Next phase

**Phase 02 (final):** `Back from Hell` (1990), `Down with the King` (1993), `Crown Royal` (2001). Separate ZIP and exactly **three new rows** only. No live albums, reissues or compilations.

## Claude import note (Oct 2026)

- Raising Hell: The Knack removed from sounds_like (It's Tricky quotes My Sharona: a quotation is not a comparison). influenced_by keeps the album-specific names (Cold Crush Brothers, Doug E. Fresh, Slick Rick); The Beatles, Stones, Led Zeppelin, Harry Chapin, Jim Croce are D.M.C.'s general influences and go in the artist influences.
- Tougher Than Leather producers: Davy D, Rick Rubin (the group's own credit dropped).
- Artist added (7 studio albums), not touring; scene US en 1980 hiphop,rock.
