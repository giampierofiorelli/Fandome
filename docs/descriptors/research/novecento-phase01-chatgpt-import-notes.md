# CLAUDE IMPORT — Novecento, Fandome phase 01

**Generated:** 27 October 2026  |  **Branch read-only:** `descriptors`  |  **Status:** draft, not merged

## Included rows (only this phase)

| album_id | Album | Year | Type | Catalogue status |
|---|---|---:|---|---|
| novecento-novecento | Novecento | 1984 | studio | Add |
| novecento-dreamland | Dreamland | 1986 | studio | Add |
| novecento-shine | Shine | 1988 | studio | Add |
| novecento-leavingnow | Leaving Now | 1991 | studio | Add |

**Artist:** No `Novecento` artist in either `src/data/catalog.ts` or `src/data/seed.ts` (checked 27 Oct 2026); propose **`novecento`**, no collision found. **All four** album objects need adding to catalogue before validating descriptors. Existing `docs/descriptors/novecento.csv` not found; no albums skipped as previously described. Artist membership: Dora Carofiglio (Dora Nicolosi), Pino / Giuseppe Nicolosi, Lino Nicolosi, Rossana Nicolosi. Avoid confusing with other Novecento-named acts.

### New allowed-value tokens

None: `italodisco`, `synthpop`, `funk`, `pop`, `poprock`, `dance`, `ballad`, `electronic`, `downtempo`, `eurohouse`, `italohouse`, `house` are already present in Fandome descriptors guide/validator. Instruments `keyboards`, `bass`, `guitar`, `drums`, `percussion`, `saxophone`, `trumpet` are also registered. No production tokens proposed because no album-specific gear/techniques securely supported.

### ARTIST INFLUENCES (whole career, phase 01 only)

**Direct first-person evidence** (Pino Nicolosi):
- **Billy Cobham**, **Al Jarreau**, **Eumir Deodato**, **Brian Auger**: Pino calls them youthful idols and the musicians the group grew up listening to. https://www.ilsussidiario.net/news/musica-e-concerti/2014/12/27/novecento-tutti-i-segreti-della-band-l-intervista-esclusiva/567637/
- **Genesis**, **Peter Gabriel**: Pino names sustained listening when interviewer mentions Tony Banks-like harmonic language and Dreamland-era sound. Same interview/link above.
- **Stevie Wonder**, **Elton John**, **Al Jarreau**: Lino Nicolosi quoted in 14 September 1996 Billboard article as his influences for richer harmony: https://www.worldradiohistory.com/Archive-All-Music/Billboard/90s/1996/BB-1996-09-14.pdf

**Secondary biographical evidence, not claimed as direct artist quotes:** **Chaka Khan**, **Pink Floyd** listed as early listening by Jazzitalia: https://win.jazzitalia.net/recensioni/featuring.asp . Keep tier separate. Later collaborators cannot automatically be inferred to be influences.

### Important caveats

- **Shine first release 1988**, not 1989 (later Japan CD and some retrospective discographies). Label's own band discography and original Five FM 13611 LP confirm. Do not use the Japanese CD year in `year`.
- **Dreamland**: original 1986 Italian LP has eight songs; *Changes* appears on specific Japanese CD/reissues. Album descriptors use original issue, not bonus track. Some digital store data shows 1985 copyright metadata, not original release.
- **Novecento debut:** Original *Movin' On* produced by **Tony Carrasco**; original *The Only One* by **Novecento**. Album producer field reflects documented track split. John Fryer credited as **mixer** of The Only One maxi, not producer.
- **Leaving Now 1991:** original LP produced by **Novecento**. The separately produced **1996 Arthur Baker** single and the 2002 collaboration re-recording with Billy Cobham/Eddie Gomez are not album credits. Its `instruments` and `production` fields are *blank due to missing LP-specific personnel / equipment evidence*. Urgent improvement: obtain original Discomagic LP 531 gatefold sleeve photos/liner notes. Do **not** auto-fill from generic four-person lineup.
- **No falsely assigned album-specific influences.** The documented artist-wide listening influences are reported above; none proved direct for these individual albums. `sounds_like` on debut contains comparisons made by interviewer about song *It's Too Late*, not influencing relationships.
- **Excluded:** *Divieto di sosta* (1981), issued under previous band name and an EP; *The Best*, *Collection*, *Greatest Hits*, *Through the Years* compilations; live releases. Later co-billed collaborations not in this incremental phase.
- **Sources:** `novecento_phase01_sources.csv`; every genre claim documented per item in `novecento_phase01_genre_evidence.csv`. Editor scores and uncertainties explained album-by-album in `novecento_phase01_evidence-notes.md`. All scales provisional, 0–5, integers; lyrics left blank without album lyric evidence. All rows status `draft`.

### Next phase 02

**Necessary (1992)**, **C'è un mondo che... (1997)**, **Featuring... (2002)** (after confirming its mixture of new vs previously issued material), and **Secret (2008)** if original-studio status and resources permit; restrict to 3–4 chronological rows. No re-sending phase 01 rows.

### Files inside this ZIP

- `novecento_phase01_rows_ONLY.csv` — exactly 27 columns and 4 new rows.
- `novecento_phase01_sources.csv` — one source per line, album-scoped.
- `novecento_phase01_genre_evidence.csv` — genre + scope and reason, one row per token.
- `novecento_phase01_evidence-notes.md` — album-specific audit trail / disputed dates and credits.
- `novecento_phase01_catalog-audit.csv` — add rows/artist.
- `CLAUDE_IMPORT.md` — these instructions.

## Claude import note (28 Oct 2026)

Debut credits checked on the sleeve (Discogs API): Pino Nicolosi on keyboards and Crumar Bit One, Max Costa programming drums and synthesizers, saxophone by Claudio Pascoli (German edition). Leaving Now's sleeves list no musicians or gear, so its instruments stay empty. No critic reviews found for any of the four albums: acclaim empty. Reception researched by Claude.
