# CLAUDE_IMPORT — Rondò Veneziano / Fandome Phase 01

Research freeze: 2026-10-26. Sources used as read-only; no GitHub writes.

## Import dependency: artist missing
**No `Rondò Veneziano` artist row or ID was found in `src/data/catalog.ts` on branch `descriptors`.** Therefore `rondoveneziano` is a **proposed new canonical ID**, not an existing identifier. Add artist to `catalog.ts` before importing; assign `Rondò Veneziano` (Italy, circa 1980, classical crossover/baroque-pop) and add `rondoveneziano` scene metadata if the importer requires it. This is essential for validator success.

## Phase 01 — only new rows
- `rondoveneziano-rondoveneziano` — *Rondò Veneziano* (1980, studio), original 1980 Baby Records nine-track LP.
- `rondoveneziano-laserenissima` — *La Serenissima* (1981, studio), original 1981 Baby Records LP.
- `rondoveneziano-scaramucce` — *Scaramucce* (1982, studio), original 1982 Italian Baby Records master.
- `rondoveneziano-venezia2000` — *Venezia 2000* (1983, compilation), landmark continuous mix of early catalog, #1 Switzerland for 4 weeks, #2 Germany.

**Albums to add**: all four. None was found in the present `catalog.ts`. The same is true of the artist ID. The result is four strictly incremental rows only.

## Co-billing
None in this phase. Gian Piero Reverberi is credited producer and arranger, **not** co-billed artist. Laura Giordano is a credited writer on tracks, **not** a co-producer or co-billed artist.

## New tokens
Genres: **none** (all genre tokens in rows are already allowed: `classicalcrossover`, `baroquepop`, `modernclassical`, `easylistening`, `electronic`, `pop`, `prog`, `synthpop`). Instruments: **none** (`orchestra` is on the allowed list). Production: **none** (`remixing` is on the list).

## ARTIST INFLUENCES — Phase 01 only
These apply to the project as a whole, **not automatically** to any particular album:
- **Johann Sebastian Bach** — Official history says Reverberi was enchanted by Bach as a young player; identifies Bach as part of formative classical study. https://rondoveneziano.com/en/our-history/
- **Strauss (identity unresolved)** — Official history mentions playing Strauss waltzes as a child, but does **not** specify which Strauss composer. Do not import a named `Johann Strauss II` or `Richard Strauss` influence without more evidence. https://rondoveneziano.com/en/our-history/
- **Angelo Branduardi (project conception, not proved sonic influence)** — Reverberi said founder Freddy Naggiar asked him to devise an instrumental Branduardi-like concept, and Reverberi initially objected. This is verified origin **context**, not direct stylistic debt for a specific album; do not place Branduardi in album `influenced_by` until supported. Salvo Toscano, Il Foglio, 8 June 2020: https://www.ilfoglio.it/cultura/2020/06/08/news/larte-di-arrangiare--200814
- Venetian Baroque is a documented **period/style inspiration**, not an artist. Do not turn that into an unsupported specific **Vivaldi** claim. Source: https://www.jmproduction.it/rond%C3%B2veneziano

## Evidence restrictions / caveats
1. Original LP track order and country editions matter. UK *The Genius of Venice* is the self-titled 1980 record, not a new original album; *Venice in Peril* is the 1981 La Serenissima album.
2. Original Italian *Scaramucce* closes with **Trasparenze**; the official online tracklist shows a foreign version with **La Serenissima** instead. Keep one album, do not confuse the two LP sequences.
3. *Venezia 2000* is a historically significant **compilation** despite being listed alongside studio titles on the artist site. Original 1983 source credits describe an edited/mixed suite from earlier titles.
4. `synthpop` is an explicit **release metadata style for Venezia 2000**, not an independently established album-wide primary aesthetic. Therefore it is placed **last** in its genres.
5. Musical genre strings are faithful to original metadata; some are weak storefront/community classifications, and their support level is marked separately. The `prog` label for Scaramucce is only weakly sourced and placed last.
6. `orchestra` derives from credited performer (Rondò Veneziano) identified explicitly as an orchestra by the official site; detailed violin/viola/cello/flute/oboe/bass/drum listings and signature synth models have **not** been established for these particular sessions. Do **not** promote the ensemble's generic lineup into per-album instrument or equipment facts. Studio dates do not prove analog tape usage.
7. `remixing` on *Venezia 2000* refers to the documentary mixed-compilation production / re-edited continuous suite and needs human confirmation as the best allowed production token; **not** a claim about studio electronic sound processing.
8. Mood, some tempos, polish and electronic scores are left **blank** where album-specific accounts are inadequate. Remaining scales are contextual editorial **proposals** with medium confidence, not objective metrology. 'Sounds_like' are editorial analogies, **not documented influences**.
9. Primary publisher and historian biography describe orchestra, not per-album session detail; keeping provenance categories separate prevents unsupported precision.
10. Some original pressings were released under multiple names, and the official website 1984 *Odissea veneziana* page displays a Casanova-like sequence. Check original 1984 BR 56062 nine-track LP before Phase 02.

## NEXT PHASE — Phase 02 (not included in this ZIP)
- *Odissea veneziana* (1984) — original Baby Records 9-track LP.
- *Casanova* (1985) — first original Italian LP, not reissues under Odissea Veneziana.
- *Rapsodia veneziana* (1986) — the original Italian title of the record elsewhere called *Fantasia veneziana* or *Lagune*.
- *Arabesque* (1987).

All new records need catalogue additions first. Phase 02 must contain **only** Phase 02 rows.
