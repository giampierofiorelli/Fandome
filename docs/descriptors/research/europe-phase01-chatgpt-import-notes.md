# CLAUDE IMPORT — Europe / Phase 01

Research date: **27 October 2026**. Repository branch `descriptors` checked **read-only**: `src/data/catalog.ts`, `src/data/seed.ts`, `docs/descriptors/europe.csv`, guide, genre/genre families, instrument/production registries, `src/data/coBilled.ts` and prior-landmarks research.

**New artist:** `europe` (not listed in `catalog.ts` or `seed.ts`). No `docs/descriptors/europe.csv` exists, so **there is no earlier Europe descriptor row to skip**. Add the artist and its original studio album entries to the catalog before importing this file. Do not confuse the Swedish **Europe** with `Europe` as a geographical/label/venue term.

**Four original album rows (only this phase):**

| Fandome album ID | Album | Year | Type | Catalog status |
|---|---|---:|---|---|
| `europe-europe` | Europe | 1983 | studio | ADD |
| `europe-wingsoftomorrow` | Wings of Tomorrow | 1984 | studio | ADD |
| `europe-thefinalcountdown` | The Final Countdown | 1986 | studio | ADD |
| `europe-outofthisworld` | Out of This World | 1988 | studio | ADD |

Six import files: this `CLAUDE_IMPORT.md`; `europe_phase01_rows_ONLY.csv`; `europe_phase01_sources.csv`; `europe_phase01_genre_evidence.csv`; `europe_phase01_evidence-notes.md`; `europe_phase01_catalog-audit.csv`. Imported rows have **27 columns** and `status=draft`, not `reviewed`. The other files contain evidence, not rows to import. Run `npx vite-node scripts/validate-descriptors.ts` and associated tests **after** registering the missing albums and tokens. Do **not** rewrite or duplicate any other artist's descriptors.

## Artist and albums to add

Suggested `europe` artist ID. Create all twelve *released* studio albums in the catalogue over phases, with the literal titles/years and ids in the audit. **`Come This Madness` (2026)** was released on **25 September 2026**, according to label Silver Lining Music, so it **must not be marked future/unreleased as of 27 October 2026**. Album catalogue audit records all twelve. No soundtracks/mixtapes/collaborations require new rows for this initial tranche.

## Additional Fandome tokens required

- **Genres:** `powermetal` (Power Metal, some tracks in 1983 original album; supported by Album of the Year) and `glammetal` (Glam Metal, named for 1986 and 1988 LPs). These are **not equivalent** to the already existing `heavymetal` and `hairmetal`. Register in `src/data/scenes.ts` AND `src/data/genreFamilies.ts`, e.g. parent `powermetal` → `heavymetal` → `metal`, `glammetal` → `heavymetal` → `metal`. Do not assume this parental suggestion matches exact data model without reviewing source.
- **Production:** `rolandjx8p` — Roland JX-8P hardware synthesizer, independently and directly documented for the *title track* of *The Final Countdown* by Mic Michaeli; add to `src/data/production.ts`. `yamahatx816` **already exists**; do not create a duplicate. Don't substitute `dx7`: the specific rack unit matters.
- **Instruments:** none required; all listed tokens exist (`synth`, `keyboards`, `electricguitar`, `drums`, `bass`, `acousticguitar`, `percussion`, `piano`).

## ARTIST INFLUENCES — named by members, with sources

This section captures **the band's broader declared musical influences**, not automatically applicable to every record. The `influenced_by` CSV cells only list influences where reasonably tied to the phase or song. Music comparisons are deliberately reserved for `sounds_like`.

- **UFO** — Tempest repeatedly names them among Europe's strongest early influences and says the band grew up with their records. [Über Röck, interview with Tempest](https://uber-rock.co.uk/joey-tempest-europe-uber-rock-interview-exclusive/); [Metal Express Radio, Tempest 2018](https://www.metalexpressradio.com/2018/09/06/joey-tempest-europe-the-kudos-we-get-from-rock-fans-means-so-much-to-us/).
- **Thin Lizzy** — One of the main bands Europe wanted to tour like and whose vocal phrasing and stage style Tempest studied. [Europe official biography](https://www.europetheband.com/about); [Metal Rules 2018](https://www.metal-rules.com/2018/07/26/europe-joey-tempest/).
- **Deep Purple** — Tempest directly references their mixed blues/jazz/classical hard-rock approach as formative; original band biography corroborates. [BBC interview reported by Blabbermouth 2023](https://blabbermouth.net/news/joey-tempest-how-iron-maiden-influenced-europe-in-bands-early-days); [Europe official](https://www.europetheband.com/about).
- **Rainbow** — Tempest explicitly names Rainbow among the British hard-rock groups they emulated as teenagers. [Über Röck](https://uber-rock.co.uk/joey-tempest-europe-uber-rock-interview-exclusive/); [Tempest 2007 interview](https://en.rockline.si/joey-tempest-we-dont-want-to-stay-an-eighties-band-2007/).
- **Whitesnake** — Tempest says Coverdale inspired his singing/stagecraft; he saw Whitesnake repeatedly. [Metal Rules 2018](https://www.metal-rules.com/2018/07/26/europe-joey-tempest/).
- **Led Zeppelin** — Guitar-driven early band influence in official biography. [Europe official](https://www.europetheband.com/about).
- **Iron Maiden** — Tempest explicitly recalls their effect on early Europe and cites **Run to the Hills** (on *The Number of the Beast*, 1982) as rhythmic inspiration for “The Final Countdown.” [MusicRadar, Tempest 2016](https://www.musicradar.com/news/guitars/europes-joey-tempest-how-i-wrote-the-final-countdown-640575), [BBC interview reported 2023](https://blabbermouth.net/news/joey-tempest-how-iron-maiden-influenced-europe-in-bands-early-days).
- **Def Leppard** — Tempest recalls listening to their albums in the band's early period and draws links in attitude/melody. [BBC interview, Blabbermouth](https://blabbermouth.net/news/joey-tempest-how-iron-maiden-influenced-europe-in-bands-early-days).
- **Mott the Hoople** — Cited among Tempest's early influences in an interview about his musical upbringing. [Screamer Magazine](https://screamermagazine.com/interviews/europes-joey-tempest-sets-new-boundaries/).
- **David Bowie** — Tempest names **Space Oddity** (1969 original eponymous LP, also commonly titled *Space Oddity*) as a specific inspiration for the lyrics of the 1986 title track. This is a compositional influence, not an instrumental *sound-alike*. [MusicRadar, Tempest 2016](https://www.musicradar.com/news/guitars/europes-joey-tempest-how-i-wrote-the-final-countdown-640575).

## Personnel/credit checks

- *Europe* (1983): original guitarist's site credits **Europe** (main producer) **and Thomas Erdtman and Erik Videgård** (co-producers), plus Tony Reno on drums. **Do not omit named co-producers** merely because summary discographies only say Europe.
- *Wings of Tomorrow* (1984): **Leif Mases** sole producer, Tony Reno drums, Joey Tempest keys/acoustic guitar. Some later-edition MusicBrainz inherited recording relationships include **Kee Marcello and Mic Michaeli on isolated tracks**; original 1984 LP credits do **not** support putting Marcello in the personnel. Kee's Europe era begins later.
- *The Final Countdown* (1986): **Kevin Elson** sole producer; **John Norum**, **Mic Michaeli**, **Ian Haugland**. Specific 1986 title song synth sources: **Roland JX-8P + Yamaha TX816**. The Korg Polysix was part of a **composing demo** years earlier, not the final recorded synth stack.
- *Out of This World* (1988): **Ron Nevison** sole producer; **Kee Marcello** on lead guitar, **Mic Michaeli** keys, **Mike Moran** arranger/conductor (not producer). Explicit piano credit for Joey Tempest on *Tomorrow*. No undocumented 1988 hardware production tokens were added.

## Co-billed records

None. All original phase-one releases are billed solely to Europe. `Force` was a prior band name; no separately billed Force material is imported. Non-musical narrative inspiration (e.g. horror film for Seven Doors Hotel) is not an artist influence. No `coBilled.ts` change required.

## Release caveats and next phase

- All four are albums in studio; an `liverecording` technique on 1983 means live **studio performance**, not an excluded concert album.
- Exclude all compilation packages, greatest-hits, reissue bonus demos and live concerts (e.g. *1982–1992*, *Almost Unplugged*, *The Final Countdown 30th Anniversary Show*).
- Phase **02** (four new rows, no phase 01 repeats): **Prisoners in Paradise** (1991), **Start from the Dark** (2004), **Secret Society** (2006), **Last Look at Eden** (2009).
- Phase **03**: **Bag of Bones** (2012), **War of Kings** (2015), **Walk the Earth** (2017), **Come This Madness** (2026, released 25 Sep).
