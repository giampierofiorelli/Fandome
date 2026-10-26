# CLAUDE IMPORT — Rondò Veneziano, Phase 02 (1984–1987)

**Incremental packet:** exactly four new rows, **27 columns**. Import no row from Phase 01; do not recreate that phase. This ZIP contains six requested files, no scripts. All draft values need the normal import validator.

## Phase contents

| album_id | original title | year | type | catalog status |
|---|---|---|---|---|
| `rondoveneziano-odisseaveneziana` | Odissea veneziana | 1984 | studio | ADD |
| `rondoveneziano-casanova` | Casanova | 1985 | studio | ADD |
| `rondoveneziano-rapsodiaveneziana` | Rapsodia veneziana | 1986 | studio | ADD |
| `rondoveneziano-arabesque` | Arabesque | 1987 | studio | ADD |

## Catalog / artist ID

- GitHub branch `descriptors`, file `src/data/catalog.ts`, checked 2026-10-26: `rondoveneziano` **not found**; four new albums absent. If Phase 01 import has already added the artist, add **only** these Phase 02 albums. Otherwise, add artist `['rondoveneziano', 'Rondò Veneziano', ...]` and coordinate with Phase 01 catalog additions separately.
- Canonical titles are the first **Italian original-album** release names, not export replacements. IDs strip accents and whitespace.
- `src/data/coBilled.ts`: no albums in this phase are co-billed to distinct musical artists; `Rondò Veneziano` only.

## Essential edition disambiguation

- **Odissea veneziana (1984)**: NINE tracks on original Baby LP BR 56062 (incl. 11-minute Tiziano). Official website currently lists FOURTEEN; this is a later/other international version incorporating *Casanova* tracks. Don't substitute current website tracklist for 1984.
- **Casanova (1985)**: TWELVE tracks on original LP. Some territories published a FOURTEEN-track *Odissea veneziana* (1985), based on Casanova plus earlier pieces. Not a separate unique studio album.
- **Rapsodia veneziana (1986)** = *Fantasia veneziana* (Germany / Austria) = *Lagune* (regional version); tracklists overlap and do not establish independent original albums. The 1986 title track is not the 1984 *Fantasia veneziana* song.
- **Arabesque (1987)** = *Misteriosa Venezia* (German **alternate program**, with additions and removals). Note timing differences of vinyl vs CD; do not create separate album IDs.
- **Not Quite Jerusalem (1985)**: separate soundtrack to review outside this four-album canonical phase if landmark criteria can be demonstrated; it is NOT a fifth phase-02 row.

## New tokens

| family | token | source / meaning | suggested hierarchy |
|---|---|---|---|
| Genre | `baroque` | Label on French 1986 *Rapsodia veneziana* original LP; a historic style, **not** `baroquepop` | `classical` |
| Instrument | `frenchhorn` | French horn (`corno francese`) explicitly named in *Casanova* album personnel | none |
| Production | none | No album-specific gear, effect or recording-process model secure enough to tag | none |

All other genres and instrument tokens already exist in the `descriptors` branch guide. `baroquepop` is already allowed and remains different from `baroque`.

## Influences

Artist-wide named influences already delivered in Phase 01; do **not** duplicate ARTIST INFLUENCES list here. Italian *Odissea* summary mentions Bach BWV565 paraphrase in the title track and a Vivaldi tribute in *Tiziano*, but the writer is not a named qualified critic and no artist/producer declaration was found. Under the strict eligibility rules these are **not imported** into `influenced_by` (blank for all Phase 02 records). No guest is mistaken for an influence.

## Producers / instruments

Only `Gian Piero Reverberi` appears in producer column. Laura Giordano's composing credits and technicians' mixing/engineering credits do not make them producers. 1985 original album documents French horn (new token) plus strings, winds and rhythm section; do not project this instrumentation into 1986/1987 without original-album evidence. `production` is empty for all rows: a studio address or general historical synth practice cannot license a tape/effects/gear token.

## Next phase: Phase 03

1. *Concerto* (1988), studio.
2. *Masquerade* (1989), studio.
3. *Barocco* (1990), studio.
4. *Prestige* (1991), studio.

Before proceeding, separately audit 1985 *Not Quite Jerusalem* soundtrack and 1990 *The Genius of Vivaldi, Mozart, Beethoven* adaptations for special-album inclusion; do not treat regional retitles or compilations as another studio album automatically.

## Validation

- `rows_ONLY.csv` contains header + four new albums in chronology.
- Each listed genre has one source/scope row in `genre_evidence.csv`; track-specific/release-only tags placed last.
- `notes` 15 words maximum; `status=draft`; mood/polish and undocumented instrument/production models deliberately blank.
- Run catalog addition, Genre union and GENRE_PARENTS update for `baroque` (if not already present), instrument definition for `frenchhorn`, then `npx vite-node scripts/validate-descriptors.ts` and tests.
