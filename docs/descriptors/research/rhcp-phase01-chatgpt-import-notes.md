# CLAUDE IMPORT — RHCP Phase 01

**One incremental ZIP, 27 October 2026.** All new rows only; do not merge prior artists’ rows. Six files included, no scripts. All descriptor status values are `draft`.

## Critical artist-registration prerequisite

`src/data/catalog.ts` and `src/data/seed.ts` contain **no Red Hot Chili Peppers entry** on the `descriptors` branch checked today. `docs/descriptors/rhcp.csv` does not exist. **Proposed artist ID is `rhcp`** (not an existing id); add the artist to the catalogue/seed/artist registry before validator import. If an unpublished parallel change already registered this artist under a different id, reconcile the id deliberately **before** import, then regenerate album ids across all files. Do not simply paste rows when album or artist ids are missing: the validator will fail.

## Phase contents (new rows)

| album_id | Original album | Year | Type |
|---|---|---:|---|
| `rhcp-theredhotchilipeppers` | The Red Hot Chili Peppers | 1984 | studio |
| `rhcp-freakystyley` | Freaky Styley | 1985 | studio |
| `rhcp-theupliftmofopartyplan` | The Uplift Mofo Party Plan | 1987 | studio |
| `rhcp-mothersmilk` | Mother's Milk | 1989 | studio |

All four require new catalogue records. The full **13 studio-album** audit (1984–2022) is in `rhcp_phase01_catalog-audit.csv`, each marked `add` because the artist is absent. Original release dates were checked against the band's official discography. `The Abbey Road E.P.` (1988) is excluded because it consists chiefly of previously released tracks, and compilation records are expressly prohibited by the user's current instruction. No greatest-hits, live, archival collection or reissue is included.

**Co-billed albums**: none among these phase albums; no edits to `coBilled.ts` needed.

## Catalogue albums to add (all original studio albums)

- The Red Hot Chili Peppers (1984), `studio`, `rhcp-theredhotchilipeppers`
- Freaky Styley (1985), `studio`, `rhcp-freakystyley`
- The Uplift Mofo Party Plan (1987), `studio`, `rhcp-theupliftmofopartyplan`
- Mother's Milk (1989), `studio`, `rhcp-mothersmilk`
- Blood Sugar Sex Magik (1991), `studio`, `rhcp-bloodsugarsexmagik`
- One Hot Minute (1995), `studio`, `rhcp-onehotminute`
- Californication (1999), `studio`, `rhcp-californication`
- By the Way (2002), `studio`, `rhcp-bytheway`
- Stadium Arcadium (2006), `studio`, `rhcp-stadiumarcadium`
- I'm with You (2011), `studio`, `rhcp-imwithyou`
- The Getaway (2016), `studio`, `rhcp-thegetaway`
- Unlimited Love (2022), `studio`, `rhcp-unlimitedlove`
- Return of the Dream Canteen (2022), `studio`, `rhcp-returnofthedreamcanteen`

## New controlled vocabulary values

- **Genre** `raprock`: source spelling *rap rock* (separate from voice token `rap`, and not `hiphop`). Present in Phase 01 album-level genre taxonomies. Add to `scenes.ts`, `genreFamilies.ts` and the validator allowed set **before validation**.
- **Genre** `pfunk`: source spelling *P-Funk*, the Parliament/Funkadelic school identified for *Freaky Styley*. Do not remap to generic `funk`, though both tokens can coexist. Add to `scenes.ts`, `genreFamilies.ts` and validator allowed set.
- **Instrument**: no new tokens. All listed instruments are defined in the checked `instruments.ts`.
- **Production**: no new tokens. `hornarrangements` and `overdubbing` exist in the checked `production.ts`.

If a future batch includes another new genre, instrument or production token, extend the same allowed-value structures before running tests. `genreFamilies.ts` should assign appropriate parents to `raprock` and `pfunk` rather than omit them.

## ARTIST INFLUENCES (Phase 01 only)

Each item below is an influence the musicians have **named**, not a credited co-worker or a cover automatically treated as influence. These concern members' formative and continuing musical vocabulary; **do not** populate every album's `influenced_by` from this artist-wide list without album-specific evidence.

- **Grandmaster Flash** — Anthony Kiedis directly identifies Grandmaster Flash and early hip-hop storytelling as an inspiration for his vocal role. Source: https://www.cbsnews.com/news/red-hot-chili-peppers-60-minutes-transcript-2023-06-18/
- **Parliament** — Flea names Parliament/Funkadelic among foundational funk records; Kiedis describes studying them after debut. Source: https://invisible-movement.net/press/1991-11-guitarworld ; https://www.washingtonpost.com/archive/lifestyle/style/1990/05/13/the-medium-is-the-mayhem/72a4e924-517c-4716-b311-5d7647dd81e4/
- **Funkadelic** — Flea specifically names Parliament/Funkadelic; Kiedis describes discovering their music after debut. Source: https://invisible-movement.net/press/1991-11-guitarworld ; https://www.washingtonpost.com/archive/lifestyle/style/1990/05/13/the-medium-is-the-mayhem/72a4e924-517c-4716-b311-5d7647dd81e4/
- **Ohio Players** — Flea names the Ohio Players among formative funk music he loved. Source: https://invisible-movement.net/press/1991-11-guitarworld
- **The Brothers Johnson** — Flea explicitly names the Brothers Johnson among his funk listening influences. Source: https://invisible-movement.net/press/1991-11-guitarworld
- **James Brown** — Flea explicitly identifies James Brown in his formative funk music. Source: https://invisible-movement.net/press/1991-11-guitarworld
- **Louis Armstrong** — Flea calls Armstrong one of the first musicians he loved in his upbringing. Source: https://invisible-movement.net/press/1991-11-guitarworld
- **Jimi Hendrix** — Flea states Hillel Slovak introduced him to Hendrix; Frusciante also names Hendrix as formative. Source: https://www.mojo4music.com/articles/stories/flea-i-was-in-love-with-hillel-when-he-died-it-was-devastating/ ; https://www.musicradar.com/news/classic-interview-john-frusciante-red-hot-chili-peppers
- **Jeff Beck** — Flea says Slovak introduced him to Jeff Beck. Source: https://www.mojo4music.com/articles/stories/flea-i-was-in-love-with-hillel-when-he-died-it-was-devastating/
- **Gang of Four** — Flea says Slovak introduced him to Gang of Four, before later Andy Gill debut production. Source: https://www.mojo4music.com/articles/stories/flea-i-was-in-love-with-hillel-when-he-died-it-was-devastating/
- **Led Zeppelin** — Flea identifies the group among formative bands he grew up loving. Source: https://www.forbes.com/sites/stevebaltin/2022/04/01/qa-red-hot-chili-peppers-anthony-kiedis-and-flea-on-new-album-hollywood-ramones-lakers-and-more/
- **Earth, Wind & Fire** — Flea explicitly includes them in the formative communal bands he loved. Source: https://www.forbes.com/sites/stevebaltin/2022/04/01/qa-red-hot-chili-peppers-anthony-kiedis-and-flea-on-new-album-hollywood-ramones-lakers-and-more/
- **Hillel Slovak** — John Frusciante says Slovak’s guitar approach was the foundation of his own role in the band. Source: https://www.musicradar.com/news/john-frusciante-talks-hillel-slovak-influence

## Caveats for Claude

1. **The debut uses Jack Sherman on guitar and Cliff Martinez on drums.** Original guitarist Hillel Slovak and drummer Jack Irons did not record the released 1984 debut (even though they co-wrote songs).
2. **The 1985 lineup changes again** to Hillel Slovak guitar and Cliff Martinez drums; producer George Clinton alone, with documented Horny Horns guests.
3. **1987** is the only RHCP studio album by the four original founding members. Michael Beinhorn is producer; recording and mix engineering personnel are not.
4. **1989** uses Frusciante and Chad Smith on the bulk of recordings, **except the older *Fire* recording** featuring Slovak and Irons. Michael Beinhorn produced; Dave Jerden mixed. Frusciante describes extensive overdubs, specifically on this album.
5. **No drum-machine track** is claimed on 1984: Andy Gill's account specifically says it was a tempo reference and became a cowbell workaround. A studio anecdote is not proof of a machine heard on the album.
6. **No invented audio gear.** Some secondary descriptions of Slovak's 1987 effect disagree (vocoder versus talk box); those tokens are left empty. No guitar or bass brand and no engineer-owned hardware is attributed without an album-specific source.
7. Original sleeve credits and sources conflict occasionally on dates, spelling and the personnel of later reissues. Prefer band discography for **original release years**, original artwork liner notes for performance and production roles, and consult evidence-notes per album.
8. **Genre new tokens** `raprock` and `pfunk` must be registered before the 27-column descriptor passes the current validator. This is deliberate compliance with the request never to collapse related genre names.
9. Scores reflect the researched **whole album** and are defensible editorial judgments; they are not directly measured data.
10. `status=draft` is not final editorial approval. Re-check any contested individual lyric interpretation before marking `reviewed`.

## Phase plan (strictly incremental, studio albums only)

- **Phase 02:** *Blood Sugar Sex Magik* (1991), *One Hot Minute* (1995), *Californication* (1999).
- **Phase 03:** *By the Way* (2002), *Stadium Arcadium* (2006), *I'm with You* (2011).
- **Phase 04:** *The Getaway* (2016), *Unlimited Love* (2022), *Return of the Dream Canteen* (2022).

No earlier Phase 01 album rows will appear in these future phase ZIPs. Compilation exclusion applies to **all** subsequent phases, not just Red Hot Chili Peppers.


## Claude import note (Oct 2026)
- Mother's Milk: Hillel Slovak removed from `influenced_by` (he was the band's own guitarist, on Fire: a self-reference, owner rule).
