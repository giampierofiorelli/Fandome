# CLAUDE_IMPORT — U2, Phase 01 (27 October 2026)

**Artist/Fandome ID:** `u2` (exact name `U2`). **Incremental import:** only the three phase-01 rows in `u2_phase01_rows_ONLY.csv`. This ZIP does **not** contain any future album descriptors and does not include any existing U2 descriptors from earlier phases.

## This phase: album IDs, chronology and action

| ID | Title | Year | Type | Existing in `catalog.ts`? | Action |
|---|---|---:|---|---|---|
| `u2-boy` | Boy | 1980 | studio | Yes | Preserve existing ID |
| `u2-october` | October | 1981 | studio | **No** | **Add the 1981 studio album before running validator/tests** |
| `u2-war` | War | 1983 | studio | Yes | Preserve existing ID |

**Catalogue addition in this phase:** `['October', 1981]` in the U2 row of `src/data/catalog.ts`; generated ID `u2-october`. The source of truth is the actual catalogue data; do not reassign `u2-boy` or `u2-war`.

**Multi-artist billing in this phase:** none; no change required to `coBilled.ts`.

## New tokens to register

- **Genres:** none. All album genre tags used here already appear in `scenes.ts` / validator at review time.
- **Instruments:** `bodhran` — Irish frame drum, credited to Vincent/Vinnie Kilduff on *October*. Source: [1981 sleeve transcription](https://www.u2songs.com/discography/u2_october_remaster). It is intentionally *not* replaced with generic `percussion`, because the precise instrument is documented.
- **Production:** `compression` — drum dynamic-range compression documented by War engineer Kevin Killen; `ua1176` — Universal Audio 1176 compressor model explicitly named by Killen in the same [Tape Op interview](https://tapeop.com/interviews/67/kevin-killen). These are *War* entries and are not assumed for the other LPs.

Add both production tokens to `src/data/production.ts` / `PRODUCTION` and to the validator's enumerated set if maintained separately. Add `bodhran` to `instruments.ts` / `INSTRUMENTS`. Check tokens against current branch before adding, as rules may evolve.

## ARTIST INFLUENCES — group-wide, phase 01 only

These are named by The Edge himself as inspirations. **This is a group-wide reference list; do not automatically copy it into any individual album's `influenced_by` column.**

**Early pop/glam/punk references, directly recalled by The Edge** ([Far Out retrospective reproducing his remarks](https://faroutmagazine.co.uk/the-edge-bands-most-inspired-u2/)):

| Artist | Basis |
|---|---|
| Ramones | The Edge identifies them among favourite early formative bands; also cited by Bono in his band's origin story. [Edge](https://faroutmagazine.co.uk/the-edge-bands-most-inspired-u2/) |
| T. Rex | The Edge identifies T. Rex among early melodic influences. [Edge](https://faroutmagazine.co.uk/the-edge-bands-most-inspired-u2/) |
| David Bowie | The Edge names Bowie among early favourite artists. [Edge](https://faroutmagazine.co.uk/the-edge-bands-most-inspired-u2/) |
| The Rolling Stones | The Edge says they were perhaps part of the band's early favourites. [Edge](https://faroutmagazine.co.uk/the-edge-bands-most-inspired-u2/); qualified recollection |
| Sex Pistols | The Edge identifies the Pistols as later formative favourites. [Edge](https://faroutmagazine.co.uk/the-edge-bands-most-inspired-u2/) |
| The Clash | The Edge identifies the Clash alongside the Pistols. [Edge](https://faroutmagazine.co.uk/the-edge-bands-most-inspired-u2/) |
| Patti Smith | The Edge explicitly names her as an inspiration. [Edge](https://faroutmagazine.co.uk/the-edge-bands-most-inspired-u2/); [Absolute Radio](https://www.hellorayo.co.uk/absolute-radio/music/news/the-edge-u2-manchester-scene) |

**Early post-punk influences, stated during Tim Burgess's interview** ([Absolute Radio, 4 April 2023](https://www.hellorayo.co.uk/absolute-radio/music/news/the-edge-u2-manchester-scene)):

| Artist | Basis |
|---|---|
| Echo & the Bunnymen | Edge names as one of the post-punk bands that got U2 going. [Interview](https://www.hellorayo.co.uk/absolute-radio/music/news/the-edge-u2-manchester-scene) |
| The Teardrop Explodes | Same specific recollection. [Interview](https://www.hellorayo.co.uk/absolute-radio/music/news/the-edge-u2-manchester-scene) |
| Wah! Heat | Same specific recollection. [Interview](https://www.hellorayo.co.uk/absolute-radio/music/news/the-edge-u2-manchester-scene) |
| Television | Edge names the American group among bands that got them going. [Interview](https://www.hellorayo.co.uk/absolute-radio/music/news/the-edge-u2-manchester-scene) |
| Richard Hell and the Voidoids | Same first-person source; exact credited artist/group name. [Interview](https://www.hellorayo.co.uk/absolute-radio/music/news/the-edge-u2-manchester-scene) |

**Later Manchester inspiration, distinguished from early albums** ([Absolute Radio, 2023](https://www.hellorayo.co.uk/absolute-radio/music/news/the-edge-u2-manchester-scene)):

| Artist | Basis |
|---|---|
| The Stone Roses | Edge explicitly credits the band's influence on U2, notably *Achtung Baby*. [Interview](https://www.hellorayo.co.uk/absolute-radio/music/news/the-edge-u2-manchester-scene) |
| Happy Mondays | Same Manchester-scene quotation. [Interview](https://www.hellorayo.co.uk/absolute-radio/music/news/the-edge-u2-manchester-scene) |
| The Charlatans | Edge mentions Tim Burgess's band's music as an influence. [Interview](https://www.hellorayo.co.uk/absolute-radio/music/news/the-edge-u2-manchester-scene) |

**Documented specifically for the first record:** Siouxsie and the Banshees, Buzzcocks and The Skids are heard by The Edge when revisiting *Boy* in a Q interview reprinted on [U2's official Boy page](https://www.u2.com/products/boy); these three are therefore included in `u2-boy.influenced_by` and need not be projected onto *October* or *War*.

## Album audit and later phases

The source lists **15 released U2 studio albums through 27 October 2026**. The Fandome U2 row currently contains 7 of them: *Boy* (1980), *War* (1983), *The Joshua Tree* (1987), *Achtung Baby* (1991), *Zooropa* (1993), *All That You Can't Leave Behind* (2000), *How to Dismantle an Atomic Bomb* (2004). Remaining released entries missing from the catalogue, to be researched in later incremental ZIPs (do not create description rows in this phase):

- *The Unforgettable Fire* (1984, studio)
- *Rattle and Hum* (1988, cinema soundtrack / hybrid new-studio-and-live album; decide `soundtrack` based on official billing)
- *Pop* (1997, studio)
- *No Line on the Horizon* (2009, studio)
- *Songs of Innocence* (2014, studio)
- *Songs of Experience* (2017, studio)
- *Songs of Surrender* (2023, studio; re-recordings)

*October* is the eighth missing entry and is in **this** phase. Besides the 15 studio releases, **Under a Blood Red Sky** (1983) merits an exception as a genuinely landmark live album/EP: [AllMusic's band biography](https://www.allmusic.com/artist/u2-mn0000219203) characterises its historic UK chart performance. It will be assessed/covered as a live record in phase 02, respecting the user's landmark-only exception. Other live albums, routine compilations and ordinary archival reissues are omitted.

*Original Soundtracks 1* (1995) is a separate artist-billed **Passengers** project (Brian Eno with members of U2); assess as a major collaboration/soundtrack in a future phase and check exact credit in `coBilled.ts` rather than treating it automatically as a regular U2 record. Two 2026 standalone six-track EPs, *Days of Ash* (18 February 2026) and *Easter Lily* (April 2026), are **released** and should undergo later landmark/materiality assessment; they are not to be silently mistaken for the upcoming album. [U2: Days of Ash](https://www.u2.com/products/days-of-ash-ep); [U2: Easter Lily](https://www.u2.com/blogs/news/u2-easter-lily-new-ep-out-now). The 2024 archival *How to Re-Assemble an Atomic Bomb* is not here classified as a new studio album.

**Unreleased exclusion:** *Carnaval De Luz* is officially announced for **13 November 2026**, after the **27 October 2026** research cutoff. It is **not** eligible for album rows or catalog additions yet. The band and label identify it as the sixteenth studio album. [U2 announcement](https://www.u2.com/blogs/news/carnaval-de-luz-new-album-coming-in-november).

## Next phase (phase 02)

1. **Under a Blood Red Sky** (1983; exceptional landmark live album).
2. **The Unforgettable Fire** (1984; studio).
3. **The Joshua Tree** (1987; studio).

The next ZIP will contain **only** those three newly researched descriptor rows, not this phase's rows. *Rattle and Hum* and subsequent albums will follow.

## Caveats and Claude actions

1. Read `u2_phase01_evidence-notes.md` for the rationale of **every score**, production token, instrument, influence and documented disagreements.
2. First add `u2-october` to the catalogue, then register `bodhran`, `compression` and `ua1176`, then import the three new 27-column rows and run validator/tests. The original catalogue must not be overwritten by the 3-row CSV.
3. **Release-date variations:** official October release is 12 Oct 1981 although some fan archives list 20 Oct; War official date is 28 Feb 1983 despite some March accounts. Both differences are immaterial to `year` but should not be silently changed.
4. **October engineer credit conflict:** original liner transcription credits Paul Thomas, while one archived U2 page names Chris Thomas. The descriptor stores neither engineer in producers; Steve Lillywhite is unambiguous. Do not treat Bill Whelan on *War* as a mixer-only credit: he is explicitly producer of **The Refugee**.
5. **Genres:** AllMusic's broad, sometimes repetitive album genre taxonomy is reproduced under its exact wording-normalised tokens. `folkrock`, `funk`, `dance` on October and `funk` on War are **some-tracks-only**, so remain last. `gospel` and `christianrock` have not been inferred from religious lyrics.
6. **Instrument caution:** no synthesizer, drum machine, tape format, delay model or other equipment is assumed from the general period. `bodhran` is the one explicitly documented nonstandard instrument in these three records.
7. The GitHub web directory listing for `docs/descriptors` was restricted; direct raw URL `docs/descriptors/u2.csv` returned 404 at research time. Check remote branch for intervening additions before import. Source references in this ZIP are external public links; no repository mutations were made.


## Claude import note (Oct 2026, phases 01-04 together)
- Achtung Baby: The Stone Roses, David Bowie, My Bloody Valentine, Happy Mondays, The KLF, Sonic Youth moved from influenced_by to sounds_like (critics' attributions: New Yorker, Irish Times, AllMusic; owner rule).
- Original Soundtracks 1 (billed as Passengers) and All That You Can't Leave Behind: self-references dropped from sounds_like (U2's own albums; Brian Eno is a Passengers member).
- Kept: Boy (The Edge names Siouxsie, Buzzcocks, The Skids), The Joshua Tree (The Edge: Hendrix, Willie Dixon, Archie Edwards; gospel references), Pop (Howie B and Flood: James Brown, Les Baxter, The Turtles, Naked Funk).
- Under a Blood Red Sky (live) imported as a landmark live album, like Nirvana's Unplugged and Depeche Mode's 101.
