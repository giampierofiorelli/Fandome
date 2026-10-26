# CLAUDE IMPORT — Fandome Miley Cyrus Phase 01

Branch inspected: `descriptors` (read-only). Date cutoff: **26 October 2026**. Artist key: **`miley`**. The existing `docs/descriptors/miley.csv` was not found, so these four Phase 01 descriptor rows are new. **Import only this phase's rows.** Do not replace descriptors or import records from other artists. No scripts or repository changes are included.

## Phase contents (chronological, 4 newly researched rows)

| album_id | title | year | type | catalogue |
|---|---|---:|---|---|
| `miley-bangerz` | Bangerz | 2013 | studio | exists |
| `miley-mileycyrusherdeadpetz` | Miley Cyrus & Her Dead Petz | 2015 | studio | ADD |
| `miley-youngernow` | Younger Now | 2017 | studio | exists |
| `miley-sheiscoming` | She Is Coming | 2019 | ep | ADD |

**Albums to add to `catalog.ts` before descriptor validation:**
- Miley Cyrus & Her Dead Petz, 2015, studio; id `miley-mileycyrusherdeadpetz`
- She Is Coming, 2019, ep; id `miley-sheiscoming`

The actual Fandome catalogue currently has `Bangerz`, `Younger Now`, `Plastic Hearts`, `Endless Summer Vacation`, `Something Beautiful`, but neither 2015 album nor 2019 EP. No existing `miley.csv` on the inspected branch.

**Co-billed records:** none in this phase. *Miley Cyrus & Her Dead Petz* is credited to Miley Cyrus, not co-billed with the Flaming Lips as lead artist; the Flaming Lips have production/guest roles. Guest features on individual tracks do not convert an album into a co-billed release.

## New vocabulary tokens

- Genres: **none to add**. `spacepop` is already present in the current Fandome `Genre` type, as are the other 39 genre-evidence tokens. The album is called a space-pop album by AllMusic; the evidence table scopes this to texture.
- Instrument: `tibetanbowl` — Tibetan singing bowl specifically credited to Miley for *Dead Petz* in a secondary reproduction of artist-site credits. **Provisional, source-confidence limited**; confirm against original artist-site/liner credit before acceptance. No new production tokens in this phase.

## ARTIST INFLUENCES (artist-wide; not album-specific)

These are *named musical reference figures*, not automatic entries for `influenced_by` on every album:

- **Britney Spears** — described as an inspiration by Cyrus around *The Movement* documentary; also named with Metallica when describing an album's inspirations. Sources: [US Weekly, 2013](https://www.usmagazine.com/celebrity-news/news/miley-cyrus-wanted-to-go-topless-at-vmas-plus-other-revelations-from-the-movement-2013310/); [Official Charts, 2020](https://www.officialcharts.com/chart-news/miley-cyrus-says-new-album-is-inspired-by-britney-spears-and-metallica__30961/).
- **Metallica** — explicitly named as source of inspiration for a later Miley album, in her own comments reported by [Official Charts](https://www.officialcharts.com/chart-news/miley-cyrus-says-new-album-is-inspired-by-britney-spears-and-metallica__30961/).
- **Dolly Parton, Joan Jett, Stevie Nicks** — described by Cyrus as mentors / formative music legends in [Variety, 2026](https://au.variety.com/2026/tv/features/miley-cyrus-hannah-montana-anniversary-interview-34410/). A mentor relationship is not evidence that every record sonically imitates their sound.
- **Lil’ Kim** — Cyrus described strong personal identification and listed her among musical heroines. Source: [Digital Spy reporting the Billboard interview, 2013](https://www.digitalspy.com/music/a495617/miley-cyrus-lil-kim-is-who-i-am-on-the-inside/). The strength is lower than a direct album-specific production statement.
- **Nicki Minaj, Beth Hart** — likewise named among Cyrus' five favourite female singers in that 2013 interview; [Digital Spy](https://www.digitalspy.com/music/a495617/miley-cyrus-lil-kim-is-who-i-am-on-the-inside/). **Preferences/idols, not proven influences on a particular album.**

The four CSV `influenced_by` cells are deliberately blank: association through sampling, participation, godparent relationships, sonic resemblance or acknowledged artist-wide influences **does not** prove a documented musical influence specifically on each album. `sounds_like` is explicitly editorial sonic comparison, not a claim of borrowing.

## Credits, dates and interpretation caveats

1. **Bangerz:** original 2013 13-song core is the analytic object. Deluxe extra tracks are not used to expand instruments/producer lists. Track-specific producer and co-producer credits are retained; executive-only, vocal-only and additional-production-only roles are excluded. No assumption that every song is EDM or dubstep: those genre claims are scoped to songs.
2. **Dead Petz:** original surprise free 2015 release is a studio album, not a live album, compilation, or jointly-billed Flaming Lips record. It later appeared in regular label catalogues. Criticism is sharply split: the psychedelic experiments are substantial even though some reviewers consider them undisciplined. AllMusic and Dork disagree on some production attribution (e.g. Fridmann, Barthel). AllMusic gives Fridmann **additional production**, so he is excluded. Secondary credit for Tibetan bowl remains provisional.
3. **Younger Now:** AllMusic lists **Stacy Jones as drummer and musical director**, while the Dork aggregation separately tags him as producer. Without track-level official confirmation of direct record producer role, he is excluded; accepted co-producers are Oren Yoel and Miley Cyrus. String/horn arrangement documented by credits. Dolly Parton appears as performer on Rainbowland, **not evidence of album-specific `influenced_by`**.
4. **She Is Coming:** only the **six original songs issued 31 May 2019** are included, as verified by Sony Music's own press release. Qobuz/Apple now list a **seven-track version containing Slide Away**, released as a later single; do not count that extra song for original EP evidence. Qobuz track credits distinguish **producer** from **programmer/additional studio producer**; Tay Keith and Buddy Ross are excluded where credited only for those other roles. Planned EP sequels *She Is Here* and *She Is Everything* did **not** materialize as released standalone albums.
5. **Scales:** eight numerical values are editorial interpretations of sourced reviews and credits; they are not source-quoted scores. Album-level composite across original standard track lists, not best-known singles. Some low-frequency instrumentation, especially Bangerz' orchestral instruments, appears on selected tracks but is documented.
6. Only `tibetanbowl` is new and may fail validation until Claude adds or removes it. Genre evidence table includes one row per token and a whole/some-tracks/texture scope. Low-strength evidence marked in source table. `status` remains `draft`.

## Next phase — Phase 02

Four *already released* studio albums: **Plastic Hearts (2020), Endless Summer Vacation (2023), Something Beautiful (2025), Bass Persuades (2026)**. Add `Bass Persuades` to the Fandome catalogue in that phase (its 18 September 2026 release is confirmed by [Warner Music Ireland](https://www.warnermusic.ie/news/2026/miley-unveils-new-album-bass-persuades-out-today-watch-video-for-lets-get-married/)). It is promoted under the mononym **Miley**; preserve the Fandome artist id `miley`, and record artist billing as a caveat during the Phase 02 audit. No older live or compilation albums.
