# CLAUDE_IMPORT — Simple Minds / Phase 02

## Import scope and identifier

The public Fandome `descriptors` branch was checked again on **28 October 2026**. The artist `simpleminds` is absent from **both** `src/data/catalog.ts` and `src/data/seed.ts`; `docs/descriptors/simpleminds.csv` returns 404. Preserve the **artist id `simpleminds` proposed and used in Phase 01**. Do not silently choose a different artist ID. Note that these read-only public-branch checks cannot reveal private or unmerged imports; reconcile those before changing catalog or creating descriptors.

**Phase 02 contains only these four new studio-album rows**, in chronology:

1. `simpleminds-sisterfeelingscall` — *Sister Feelings Call* (1981)
2. `simpleminds-newgolddream81828384` — *New Gold Dream (81-82-83-84)* (1982)
3. `simpleminds-sparkleintherain` — *Sparkle in the Rain* (1984)
4. `simpleminds-onceuponatime` — *Once Upon a Time* (1985)

All four are **missing from the currently accessible public catalog**. **Add these four album records before running validator/tests**. If a private catalog already contains an album, reuse its existing ID in the CSV and avoid duplicates. The previous phase included *Life in a Day* (1979), *Real to Real Cacophony* (1979), *Empires and Dance* (1980), and *Sons and Fascination* (1981); none is present in this ZIP.

### Special edition and production caveats

- *Sister Feelings Call* is the seven-track companion record issued alongside *Sons and Fascination* in 1981, sometimes bundled as a double record. The official site explicitly calls them separate albums; no repeat of the original *Sons* eight-track LP. Source: https://www.simpleminds.com/1981/09/01/sons-fascination-sister-feelings-call/
- *New Gold Dream*: use nine-track original 1982 studio album. The original sleeve credits **Peter Walsh alone** as producer; some MusicBrainz track records also name Keith Forsey. The discrepancy is documented, **not** silently merged into album production credits. Specific technical evidence from Walsh includes Moog bass doubling, flanging, compression techniques and Studer tape. Herbie Hancock is a **guest synth player, not producer or influence**.
- *Sparkle in the Rain*: Steve Lillywhite produced the original ten songs. The band's 2024 40th-anniversary article describes a **drum-loop method on a 12-inch extended remix of Waterfront**; this does not establish `drumloop` as an album production technique. The cover of Lou Reed's *Street Hassle* is **not** direct influence evidence.
- *Once Upon a Time*: producers **Jimmy Iovine AND Bob Clearmountain** (both fully credited). *Don't You (Forget About Me)* is a **separate 1985 soundtrack single**, absent from the original eight-track album; modern deluxe editions should not contaminate the row. John Giblin plays bass in place of Derek Forbes.

### Token, attribution and import audit

- **New genre tokens:** none; the eight-genre New Gold Dream row distinguishes `synthpop` from `newwave`; all tokens exist in `scenes.ts`.
- **New instrument tokens:** none; all are within `instruments.ts`.
- **New production tokens:** none; `analogtape`, `flanging`, `moog`, `compression`, `overdubbing` and `layeredvocals` already exist in `production.ts`.
- **Co-billed albums:** none.
- **ARTIST INFLUENCES:** these were documented in **Phase 01 only**; intentionally **not repeated**. A limited *album*-specific `influenced_by` list for *New Gold Dream* is based on producer Peter Walsh's direct statement about what the band were listening to while shaping that record, not a critic's sonic comparison. See its sources and evidence notes.
- **Genres:** use `genre_evidence.csv` to distinguish whole-album evidence from genre encountered only in specific tracks or partial textures. Don't silently elevate incidental tracks.
- **Instrument/production tokens:** source-based, no model guessed from era. `Sister Feelings Call` and *Sparkle in the Rain* have intentionally blank production fields where hardware/technique evidence was insufficient.
- **Status:** all four `draft`. **Header:** exactly 27 columns. `notes` each at most 15 words. No scripts included.

### Phase 03 — next

1. *Street Fighting Years* (1989)
2. *Real Life* (1991)
3. *Good News from the Next World* (1995)

Live albums and compilations remain excluded. *Neapolis* and later albums will be included in subsequent phases after the Phase 03 batch. The Phase 01 catalog audit flags recorded-versus-issued date for *Our Secrets Are the Same* and status of studio covers/re-recordings; preserve that caveat.

### ZIP files

- `CLAUDE_IMPORT.md`
- `simpleminds_phase02_rows_ONLY.csv`
- `simpleminds_phase02_sources.csv`
- `simpleminds_phase02_genre_evidence.csv`
- `simpleminds_phase02_evidence-notes.md`
- `simpleminds_phase02_catalog-audit.csv`
