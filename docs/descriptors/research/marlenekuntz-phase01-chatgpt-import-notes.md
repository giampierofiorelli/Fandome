# MARLENE KUNTZ — FANDOME PHASE 01 — CLAUDE IMPORT

## Exactly incremental deliverable

Only the following **four new rows** appear in `marlenekuntz_phase01_rows_ONLY.csv`; no previous artist or phase rows are present. This ZIP contains exactly six files. Format: the Fandome guide's **27 columns**. Rows are proposals (`draft`), not independently validated/merged changes. Research snapshot: 27 October 2026.

| Fandome ID | Title | Year | Type | catalog.ts status |
|---|---|---|---|---|
| `marlenekuntz-catartica` | Catartica | 1994 | studio | already in catalog |
| `marlenekuntz-ilvile` | Il vile | 1996 | studio | already in catalog |
| `marlenekuntz-comedisdegno` | Come di sdegno | 1998 | ep | **ADD** |
| `marlenekuntz-houccisoparanoia` | Ho ucciso paranoia | 1999 | studio | already in catalog |

**Artist**: `marlenekuntz` — `Marlene Kuntz`. Exact existing key in `src/data/catalog.ts` (`descriptors` branch), read-only. On the branch examined no `docs/descriptors/marlenekuntz.csv` existed. For new IDs strip non-alphanumeric characters from title and append to `marlenekuntz-`. No duplicate IDs.

## Catalog additions / full released studio-album audit

The branch listed only Catartica (1994), Il vile (1996) and Ho ucciso paranoia (1999). The published studio discography through October 2026 is **Catartica** (1994), **Il vile** (1996), **Ho ucciso paranoia** (1999), **Che cosa vedi** (2000), **Senza peso** (2003), **Bianco sporco** (2005), **Uno** (2007), **Ricoveri virtuali e sexy solitudini** (2010), **Nella tua luce** (2013), **Lunga attesa** (2016) and **Karma Clima** (2022). Verified from the [band's official biography](https://marlenekuntz.com/biografia/), [Rockol artist biography](https://www.rockol.it/artista/marlene-kuntz/biografia) and [MusicBrainz](https://musicbrainz.org/artist/b948e199-ad8a-4321-9a84-58f36226d9fa).

**Claude: add these missing original releases to `catalog.ts`** (do NOT make descriptor rows for later phases yet):

- `Come di sdegno` — 1998, **ep** (important mini-LP), `marlenekuntz-comedisdegno`.
- `Che cosa vedi` — 2000, **studio**, `marlenekuntz-checosavedi`.
- `Senza peso` — 2003, **studio**, `marlenekuntz-senzapeso`.
- `Bianco sporco` — 2005, **studio**, `marlenekuntz-biancosporco`.
- `Uno` — 2007, **studio**, `marlenekuntz-uno`.
- `Ricoveri virtuali e sexy solitudini` — 2010, **studio**, `marlenekuntz-ricoverivirtualiesexysolitudini`.
- `Nella tua luce` — 2013, **studio**, `marlenekuntz-nellatualuce`.
- `Lunga attesa` — 2016, **studio**, `marlenekuntz-lungaattesa`.
- `Karma Clima` — 2022, **studio**, `marlenekuntz-karmaclima`.

Additional significant EP candidates for later research (do not silently insert as studio): **Cometa** (2001) and **Fingendo la poesia** (2004); inspect original content and significance before allocating them to phases. **Come di sdegno** inclusion is justified by [band's own history](https://marlenekuntz.com/come-di-sdegno-per-la-prima-volta-in-vinile-in-occasione-dei-suoi-ventanni/) and [OndaRock's detailed discussion](https://www.ondarock.it/monografie/marlenekuntz/): two remixes, original recordings, live cut, lengthy experimental improvisation. **Spore** is an optional second disc in the 1999 deluxe *Ho ucciso paranoia* package, **not** a second 1999 studio album. **H.U.P. Live in Catharsis** (1999) and later live records are excluded; retrospective best-of compilations and demo collections excluded. The documentary *Petali di candore* (1997) is a video, not an original studio album. No co-billed album credited to another lead artist in this phase: no change to `src/data/coBilled.ts`.

## Genre / instrumentation tokens

**No new genre tokens required:** `noiserock`, `alternativerock`, `postgrunge`, `grunge`, `postpunk`, `hardrock`, `indierock`, `metal`, `rock` and `electrorock` are already on the `descriptors` branch. **No new instrument or production tokens required:** instruments are existing `electricguitar`, `bass`, `drums`, `sampler`; production uses existing `distortion`, `analogtape`, `digitalediting`, `sampling`, `remixing`, `liverecording`, `concertrecording`. If a later validator flags one, inspect the current branch before reclassifying it. No machine names guessed. See genre evidence for whole-record versus single-track/texture scope. Sources calling 1990s grunge/post-grunge genres differ; prefer more strongly documented noise rock when ranking.

## ARTIST INFLUENCES — PHASE 01 ONLY; sources directly quoting Godano

These artists are documented as *Marlene Kuntz / Cristiano Godano's broad musical influences*, not automatic values of every album's `influenced_by` column:

- **Sonic Youth** — explicitly one of Godano's four named musical sources in a 1990 interview (republished 2012): https://www.distorsioni.net/canali/interviste/un-ventennio-con-i-marlene-kuntz ; he further says the band willingly publicized Sonic Youth's influence: https://www.ondarock.it/interviste/marlenekuntz/ .
- **Nick Cave** — another of his original four foundational influences: https://www.distorsioni.net/canali/interviste/un-ventennio-con-i-marlene-kuntz ; 2017 direct retrospective: https://www.spaziorock.it/marlene-kuntz-cristiano-godano-intervista-2017/ .
- **Tom Waits** — one of the four explicitly identified sources by Godano in the early original interview: https://www.distorsioni.net/canali/interviste/un-ventennio-con-i-marlene-kuntz .
- **The Gun Club** — one of the original four explicitly identified sources by Godano in that same early interview: https://www.distorsioni.net/canali/interviste/un-ventennio-con-i-marlene-kuntz .
- **Fugazi** — early American underground sound important to band per Godano: https://www.spaziorock.it/marlene-kuntz-cristiano-godano-intervista-2017/ .
- **Soundgarden** — explicitly identified by Godano as an influence on the particularly heavy **Il vile**: https://milano.repubblica.it/cronaca/2026/08/10/news/marlene_kuntz_brescia-425520530/amp/ ; cited among era's models: https://www.spaziorock.it/marlene-kuntz-cristiano-godano-intervista-2017/ .
- **Big Black** — named by Godano among formative American sounds: https://www.spaziorock.it/marlene-kuntz-cristiano-godano-intervista-2017/ .
- **Swans** — named by Godano among formative American sounds: https://www.spaziorock.it/marlene-kuntz-cristiano-godano-intervista-2017/ .
- **Thin White Rope** — named by Godano among formative American sounds: https://www.spaziorock.it/marlene-kuntz-cristiano-godano-intervista-2017/ .
- **Helmet** — named by Godano among formative American sounds: https://www.spaziorock.it/marlene-kuntz-cristiano-godano-intervista-2017/ .
- **CCCP Fedeli alla linea** — limited vocal-shaping precedent for song **Sonica**, acknowledged as *small*, not total album identity: https://www.spaziorock.it/marlene-kuntz-cristiano-godano-intervista-2017/ . **Do not confuse with C.S.I.** (different band and chronology).
- **Leonard Cohen**, **Bob Dylan**, **Johnny Cash** — Godano says they influenced him later on, NOT necessarily the early albums: https://www.ilrestodelcarlino.it/cultura/cristiano-godano-la-musica-oggi-770a7cbd . They must not be retroactively assigned to the 1994–99 album fields.

**Restraint**: a 1990 interview also mentions other artists band members were listening to, but mere listening is insufficient as proof of influence. Sonic resemblance goes under `sounds_like`. A literary influence is not recorded as a musical influence. An executive producer is not a producer; track remix credits do not make the remixer a co-producer.

## Caveats / required decisions for Claude

1. Keep `Come di sdegno` as `ep` despite the track called Donna L having live origins and the EP including two remixes. Original year **1998** per artist's own discography (some catalog dates/reissues disagree).
2. **Catartica**: Marco Lega artistically produced; Gianni Maroccolo was **executive producer**. Label metadata additionally credits band as producer: keep `Marco L. Lega|Marlene Kuntz`, not Maroccolo. [Original credits](https://www.musiculturaonline.it/marlene-kuntz-catartica/), [Qobuz](https://www.qobuz.com/us-en/album/catartica-marlene-kuntz/0724384911553).
3. **Il vile**: original production credits **Marco Lega except track 10, produced by band**; Maroccolo executive only. [MusiCulturA](https://www.musiculturaonline.it/marlene-kuntz-il-vile/).
4. **Ho ucciso paranoia**: most tracks co-produced by Lega + band; tracks 7 and 9 credited to **Gianni Maroccolo + band**. Maroccolo credited as producer *only because* of these two tracks, not his executive role. [MusiCulturA](https://www.musiculturaonline.it/marlene-kuntz-ho-ucciso-paranoia/), [original pressing transcription](https://readdork.com/album/marlene-kuntz-ho-ucciso-paranoia/pressing/1939885).
5. `digitalediting` appears only where printed historical credits identify digital editing; 3M analog tapes for *Catartica* supported by original personnel account. `sampler`/`sampling` on the EP is track-specific, not inferred from genre. No imagined equipment/software.
6. Some genre tags (especially `postgrunge`, `grunge`) are contested/weak; `genre_evidence` marks scope and strength. Review before using as strong similarity weights.
7. Source URLs are real URLs located during research; source set mixes primary artist site, 1999 contemporaneous review, journalist retrospectives and transcribed liner credits. An original 1994 album is distinct from 2024 remaster; ignore modern bonus/demo instrumentation not identified on original.

## Next phase

**Phase 02**: `Che cosa vedi` (2000), `Senza peso` (2003), `Bianco sporco` (2005). Consider **Cometa (2001)** for inclusion only if qualified research confirms it qualifies as a landmark EP: if included it should slot chronologically between 2000 and 2003 and phase will have four releases. Subsequent phases continue with *Uno* (2007) onward. Avoid any rows from this ZIP in a later phase.
