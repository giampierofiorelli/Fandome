# CLAUDE_IMPORT — Queen — Phase 02

**Target:** Fandome GitHub branch `descriptors` only (repository not modified here). Created 2026-10-26. **Incremental phase:** four new descriptor rows, **not a replacement of Phase 01**, and zero repeats. Read each CSV as UTF-8 with BOM, preserve 27-column schema and validate after catalog/token changes. The files contain source-specific evidence and audit paths. No scripts are included.

## Phase contents

| Album ID | Original title | Year | Type | `catalog.ts` status |
|---|---|---:|---|---|
| `queen-adayattheraces` | A Day at the Races | 1976 | studio | **ADD** |
| `queen-newsoftheworld` | News of the World | 1977 | studio | present |
| `queen-jazz` | Jazz | 1978 | studio | **ADD** |
| `queen-thegame` | The Game | 1980 | studio | present |

`queen_phase02_rows_ONLY.csv` is the **only** descriptor CSV to append to `docs/descriptors/queen.csv`; do not import Phase 01 rows twice. Four rows exactly. `queen_phase02_sources.csv` gives linkable supporting sources. `queen_phase02_genre_evidence.csv` explicitly joins genres to source IDs in that file. `queen_phase02_evidence-notes.md` records cross-source disagreements and reasons for all nontrivial production and scale values. `queen_phase02_catalog-audit.csv` audits just these four albums.

## Catalogue additions (required before validation)

1. `A Day at the Races` (1976), **studio**, `queen-adayattheraces`.
2. `Jazz` (1978), **studio**, `queen-jazz`.

The other two are present in current `catalog.ts` Queen entry. Phase 01 proposed `Queen II` and `Sheer Heart Attack`: they remain independent Phase 01 catalog additions; not included as descriptor rows in this ZIP.

## Token changes needed

### New genres
**None uniquely introduced by Phase 02.** However `arenarock` and `britishmetal` were reported as new genre tokens in **Phase 01** and are reused here only because professional AllMusic sources classify these Queen albums with those literal names. If Claude has not imported Phase 01 token changes, ensure both are included in `scenes.ts` and validator genre allowlist first. No genre term is forcibly mapped to a nearby token.

### New instruments
- `footstomps` — collective foot stamping on *We Will Rock You*; differentiated from `handclaps` [N6].
- `maracas` — Brian May maracas on *Who Needs You* [N4,N9].
- `cowbell` — Freddie Mercury cowbell on *Who Needs You* [N4,N9].
- `bicyclebell` — actual bicycle bells credited to all members on *Bicycle Race* [J4].

All other instrument tokens selected occur in Fandome’s allowed instruments list (including `slideguitar`, which is in current `instruments.ts` even though it is missing from some older copied prompt lists).

### New production tokens
- `oberheimobx` — original *The Game* sleeve and track credits expressly say **Oberheim OB-X** [G3,G4]. Do not confuse with OB-8.
- `drumloop` — the tape-loop structure created for *Another One Bites the Dust*, producer Mack firsthand [G5,G6]. `drumprogramming` would misrepresent this acoustic-kit loop.
- `publisoninfernal` — the **Publison Infernal Machine** special effects processor, identified by producer Mack on *Another One Bites the Dust* [G5]. Model is specific; do not collapse it into a generic named sampler.

`harmonizer` is an **existing** production token. Queen’s official account names an Eventide harmonizer on *The Game* without establishing the precise Eventide model: do not add `eventideh910` [G7]. On *News of the World* Queen separately document a 1977 harmonizer on *Get Down, Make Love* [N5].

## Production credit caveats
- *A Day at the Races* (1976): **Queen** alone; Mike Stone was engineer [R1,R4].
- *News of the World* (1977): **Queen** alone per original sleeve; Mike Stone **assisted** production and engineered. Some later discographies call him a co-producer: see evidence notes for conflict [N3,N6].
- *Jazz* (1978): **Queen and Roy Thomas Baker**, full producers. Workman and Etchells are engineers [J1,J10].
- *The Game* (1980): **Queen and Mack**; 1980 sleeve expressly credits Mack as **co-producer** [G4]. Do not add 2011 remastering staff.

## Co-billed albums
None in Phase 02. The separately credited *The Cosmos Rocks* (2008), **Queen + Paul Rodgers**, is reserved for Phase 04, as reported in Phase 01.

## ARTIST INFLUENCES
By design, this whole-artist influence section appears **only in Phase 01**. This Phase 02 package does not repeat it. Documented **album-specific** inspirations: Aretha Franklin for *Somebody to Love* [R6]; Chic for *Another One Bites the Dust* [G1,G7]; Elvis Presley for *Crazy Little Thing Called Love* [G8]. These are appropriately recorded in each album’s `influenced_by` field, not migrated to a second Phase 01 artist-wide list.

## Editorial / quality caveats
- Instrument and technique tokens are **track-supported**, not claims that they are present on every track. New `bicyclebell`, `footstomps`, `cowbell`, `maracas` are explicitly situated in the supporting evidence.
- *Jazz* does not receive a `jazz` genre merely because of its title. *News of the World* has a **single cod-jazz song**, documented separately [N10].
- The `language=en|ja` on *A Day at the Races* reflects only the **Japanese choruses** on *Teo Torriatte*. The 1978 *Mustapha* does not prove an Arabic-language album.
- The 1976–1978 entries are explicitly non-synth releases. 1977 guitar and voice harmonizer effects must not be called synthesizers. The 1980 album’s specific instrument is an **Oberheim OB-X**, not an OB-8.
- `production=onetake` on *News of the World* concerns the initial performance of *Sleeping on the Sidewalk*, later edited by Brian May [N5,N8].
- `influenced_by` is restricted to named documented inspirations, never writers, guests, interpolations, or similarities. New machine and instrument tokens must be registered before validator execution.
- `genres` prioritises record-wide styles, then limited track styles and low-specificity publisher taxonomies. Genre evidence gives source and scope for **every value**.

## Next: Queen Phase 03 (new rows only)

1. *Flash Gordon* (1980) — **soundtrack**, major standalone Queen film composition.
2. *Hot Space* (1982) — **studio**.
3. *The Works* (1984) — **studio**.
4. *A Kind of Magic* (1986) — **studio**, not classified as the *Highlander* soundtrack despite its film-related songs.

Beyond that, Phase 04: *The Miracle* (1989), *Innuendo* (1991), *Made in Heaven* (1995), *The Cosmos Rocks* (2008; Queen + Paul Rodgers). No live albums or compilations planned; they duplicate earlier studio work for recommendation purposes.
