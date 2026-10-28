# CLAUDE IMPORT — SNAP! — Fandome phase 01 (complete studio discography)

Created 27 October 2026. GitHub `descriptors` branch read-only; unmerged draft. Only 3 incremental new album rows in this ZIP. Current catalog.ts / seed.ts have no Snap! artist; `docs/descriptors/snap.csv` not present and no landmarks already described for Snap!. Artist id **`snap`** (proposed; no collision in current two catalog sources). **Add artist and three albums before validating rows.**

| album_id | title | year | type | catalog status |
|---|---|---:|---|---|
| `snap-worldpower` | World Power | 1990 | studio | ADD |
| `snap-themadmansreturn` | The Madman's Return | 1992 | studio | ADD |
| `snap-welcometotomorrow` | Welcome to Tomorrow | 1994 | studio | ADD |

**All first-era studio albums are covered in this single ZIP.** Apple Music and MusicBrainz each list 3; `Snap! Attack` (1996) is a compilation, not a 4th studio album. Later remix collections, 2000s singles and EPs also excluded. No next album phase needed for regular studio albums. No co-billed albums: guest artist credits in *Rame* or Summer’s lead performances are not joint artist billing for full album.

## New tokens: REQUIRED

- Genre **`hiphouse`**, documented on original *World Power* 1990 CD and 1992 *Madman's Return* reissues as **Hip-House**. Add to `src/data/scenes.ts`, validator genre set, genre family mapping as appropriate. **Do not map to `hiphop` or `house`; both are separate tokens in file.**
- Production **`voxalatorv01b`**, original/reissued *Welcome to Tomorrow* album note expressly credits synthetic voice processor/program **Voxalator V01b** on “Dream on the Moon”. Add to `src/data/production.ts` and validation if necessary. This is cited from a reissue sleeve transcription, so confirm with original artwork if available.
- All other genre tokens `eurohouse`, `house`, `eurodance`, `electronic`, `hiphop`, `poprap`, `techno`, `downtempo`, `trance`, instrumentation `sampler`, `sequencer`, `synth`, `guitar`, `woodwinds`, and production `sampling`, `programming`, `synthprogramming`, `protools`, `cubase`, `recycle`, `digitalrecording`, `sonicmanipulation` exist in guide, instruments, or production list.

## ARTIST INFLUENCES (entire career, phase 01 only)

**No first-person, reliably named artist influences substantiated by available interviews.** Main producer Luca Anzilotti told Roger Brown (*The Mix*, Nov 1994) that Snap! did not model writing around outside fashions: https://www.muzines.co.uk/articles/snap-to-tomorrow/8245 . Michael Münzing and Anzilotti also discuss their signature combination of hip-hop and house in this 2009 direct interview: https://www.sueddeutsche.de/magazin/musik/dieses-stueck-kann-unsere-familien-bis-ans-lebensende-ernaehren-szm.76578 . Neither source justifies attaching specific bands as artistic influences. **Do not use** James Brown, Mantronix, Chill Rob G, Newcleus, Jocelyn Brown etc. just because music was sampled. `influenced_by` is blank on all three rows.

## Caveats / import review

- `Snap!` producer credit on all 3 albums = production partnership **Michael Münzing / Luca Anzilotti**, often billed using pseudonyms Benito Benites / John “Virgo” Garrett III. `producers` cell uses exact credited **Snap!** rather than listing personnel as uncredited producers.
- Studio *World Power*: 1990 original European LP has **eight** tracks, some 1990 CDs have ten. Sampling incontrovertibly attested on first album, but `sampler|sequencer` as specific album instrumentation is supported partly by **retrospective artist workflow**, not named hardware for 1990. Keep confidence medium and check 1990 original sleeve for explicit hardware to upgrade.
- *The Madman's Return* debuted **1992**, not 1993; reissues include bonus tracks, different “Rhythm Is a Dancer” versions, and later Niki Haris performances. Original sleeve specifies sequencer, guitars, winds. No 1994 studio model inventory should bleed into 1992 metadata.
- *Welcome to Tomorrow* originally **1994**; contemporary 1994 *The Mix* interview supports specific production process and studio gear of period, but **do not claim every instrument in their inventory was used on the album**. Distinguish Marcus/Markus Deml guitar on “Waves” from writer/producer credits. Summer = Paula Brown. Reissue transcribed source of Voxalator is medium-quality and needs original artwork cross-check.
- Sounds-like entries are **editorial comparisons**, not producer named musical influences; these can be refined with independent listening. Numeric scales are anchored but editorial. **No live albums or compilations included**.

## Contents (six files)

1. `snap_phase01_rows_ONLY.csv` — strict 27-column data; 3 original studio albums.
2. `snap_phase01_sources.csv` — source-level URLs and what they specifically substantiate.
3. `snap_phase01_genre_evidence.csv` — one source-grounded line per genre token and scope.
4. `snap_phase01_evidence-notes.md` — evidence and conflicts per album.
5. `snap_phase01_catalog-audit.csv` — new artist plus new albums.
6. `CLAUDE_IMPORT.md` — import notes, new tokens, influences, cautions.

**Next phase:** None: entire confirmed Snap! studio album discography delivered. A dedicated remix/EP phase only if separately requested.

## Claude import note (28 Oct 2026)

Producers named (Michael Münzing, Luca Anzilotti, credited as Snap!). Lyric themes from Wikipedia, EW, Boston Globe and TranceCritic; The Madman's Return sounds_like adds Giorgio Moroder and Donna Summer (Record Mirror and Juha Soininen on Rhythm Is a Dancer). Reception researched by Claude.
