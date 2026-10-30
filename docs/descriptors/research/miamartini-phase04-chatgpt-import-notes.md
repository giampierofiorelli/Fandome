# CLAUDE IMPORT — Mia Martini, phase 04 (FINAL; strictly incremental)

**Read-only check:** Fandome `descriptors` branch, 30 October 2026.
**Artist:** Mia Martini, Fandome ID `miamartini` (both existing artist catalogue and scene row); no short ID in `seed.ts`.

## This phase: only three new rows

- `miamartini-lamiarazza` — **La mia razza** (1990, studio)
- `miamartini-lacrime` — **Lacrime** (1992, studio)
- `miamartini-lamusicachemigiraintorno` — **La musica che mi gira intorno** (1994, studio)

The three original albums and their IDs **already exist** in `src/data/catalog.ts`; the phase audit records `already in catalog`. **Albums to add to catalogue: none.** Co-billed albums in this phase: **none**. All these recordings are by Mia Martini alone; the credited guests, songwriters, original cover performers and managers are not co-billed artists.

`docs/descriptors/miamartini.csv` currently contains **phase 01 and 02 rows** (1971–1977), with no phase-04 matches. **Already described/earlier phases intentionally skipped:** *Oltre la collina* (1971), *Nel mondo, una cosa* (1972), *Il giorno dopo* (1973), *È proprio come vivere* (1974), *Sensi e controsensi* (1975), *Un altro giorno con me* (1975), *Che vuoi che sia... se t'ho aspettato tanto* (1976), *Per amarti* (1977). **Phase 03 was already delivered separately:** *Danza* (1978), *Mimì* (1981), *Quante volte... ho contato le stelle* (1982), *Martini Mia...* (1989). They are deliberately NOT present even if Claude has yet to import that ZIP; do not overwrite their rows.

### Tokens, additions and exclusions

- **New genres:** none. Only existing tokens are used (`pop`, `songwriter`, `ballad`, `neapolitansong`, `latin`, `ethnicmusic`, `poprock`, `folk`).
- **New instruments:** none. Existing tokens `bouzouki`, `panflute` and `quena` are directly credited for specific 1990 tracks; strings/oboe are original 1992 credits.
- **New production tokens:** none. The existing `programming`, `stringarrangements`, `choirvocals` are all explicitly credited for the relevant albums.
- **Artist influences:** included in phase 01 only, not reintroduced here. Do not treat the musicians whose songs Mia **covered** in 1994 as influences in `influenced_by`.
- **Live and compilations excluded:** *Miei compagni di viaggio* (1983) and *Mia Martini in concerto* (1991) are live albums; *Rapsodia – Il meglio* (1992), *Mi basta solo che sia un amore* (1991) and posthumous reissues/anthologies excluded. *La musica che mi gira intorno* (1994) is a **newly recorded studio covers project** (not merely a greatest-hits compilation), so included.

### Credits, metadata and decisions for Claude

- **1990 producer**: Giovanni Sanjust, also referred to as Gianni Sanjust; original Fonit Cetra session credits and songwriter's firsthand account agree. Do not include the arrangers as producers.
- **1992 production**: original label discography says "Promovideo e Mia Martini per Voice Sound". Mia is credited by name and therefore included. A song-level production credit for **Giancarlo Bigazzi** appears for *Gli uomini non cambiano* in austriancharts; he is included, but not assumed to have produced the entire record. `Promovideo` is an organization credited for the production; the row holds **human producer names**, while the company credit is preserved in the notes for Claude to review against project style.
- **1994 production**: conflicting but open sources. Original discography identifies Mia Martini as producer; Recensiamo Musica says Nando Sepe, whom Martini calls her manager in a later-published interview. Both names are entered due to published record-production attribution, with confidence `medium` and explicit uncertainty about Nando's actual production credit. The official physical cover scan should take precedence if Claude can inspect it. Fio Zanotti is the arranger; not a producer without a producer credit.
- **1994 album type**: use `studio`, not `compilation`, because the 12 songs are new 1994 studio recordings rather than older masters, notwithstanding some review databases' covers-album classification.
- **1994 pressing ID/date**: Hit Parade Italia calls the release RTI 1070-2; MusicBrainz's RTI label listing maps it to RTI 1066-2. Some sources say October and others December 1994. Keep only original release year `1994` in rows; do not force either disputed number/date.
- **Voice**: 1990 remains empty rather than extrapolate career-wide timbre; 1992/1994 `powerful` from reviews of these specific albums. No `raspy` asserted simply because the singer's general reputation was raspy.
- **No unsupported `influenced_by`/`sounds_like` claims**: covered composers, guest musicians, authors of lyrics, and scene peers do not qualify. Neither album-specific critic provides a strict sonic artist comparison.
- **Landmark=0** for all three by guide's strict genre/sound/entire-career-defining requirement. Having a famous single, being a farewell record or receiving critical acclaim is insufficient.

### Files enclosed

1. `CLAUDE_IMPORT.md` — import instructions and conflicts
2. `miamartini_phase04_rows_ONLY.csv` — **3 new rows**, exactly 27 columns
3. `miamartini_phase04_sources.csv` — album-specific independent, label, original-credit, participant and interview sources
4. `miamartini_phase04_genre_evidence.csv` — **one row per genre** with source and scope
5. `miamartini_phase04_evidence-notes.md` — eight scale rationales, instrument/production credit provenance and disagreements
6. `miamartini_phase04_catalog-audit.csv` — all three catalogue IDs already present

### Next phase

**None**: Mia Martini's 15 eligible original studio projects, from 1971 to 1994, have been assigned across four incremental phases. Any further work on live or compilation releases requires a separate request. Check live GitHub row IDs immediately before importing, and never reimport earlier phases.
