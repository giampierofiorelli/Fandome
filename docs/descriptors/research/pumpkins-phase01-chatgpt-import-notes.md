# CLAUDE IMPORT — The Smashing Pumpkins / Phase 01

## Incremental contents
Only these four studio albums; import `pumpkins_phase01_rows_ONLY.csv` without copying older artists or future albums. The row file has the exact current 27-column header and status `draft`.

| album_id | title | year | type |
|---|---|---:|---|
| pumpkins-gish | Gish | 1991 | studio |
| pumpkins-siamesedream | Siamese Dream | 1993 | studio |
| pumpkins-melloncollieandtheinfinitesadness | Mellon Collie and the Infinite Sadness | 1995 | studio |
| pumpkins-adore | Adore | 1998 | studio |


## Catalogue audit
- Existing artist ID: `pumpkins` with displayed artist `The Smashing Pumpkins` in `src/data/catalog.ts`, branch `descriptors`.
- All four Phase 01 albums already appear in catalog.ts; **none of the Phase 01 albums need adding**. Retain canonical existing IDs.
- Full verified studio discography through 27 October 2026 also shows albums missing from catalog.ts, outside this phase (see `pumpkins_phase01_catalog-audit.csv`):
  - `Machina II/The Friends & Enemies of Modern Music` (2000, studio) — distinct original album released free; add in a future phase.
  - `Zeitgeist` (2007, studio) — add in future phase.
  - `Oceania` (2012, studio) — add in future phase.
  - `Monuments to an Elegy` (2014, studio) — add in future phase.
  - `Shiny and Oh So Bright, Vol. 1 / LP: No Past. No Future. No Sun.` (2018, studio) — add in future phase.
  - `Cyr` (2020, studio) — add in future phase.
  - `Atum: A Rock Opera in Three Acts` (2023, studio) — add in future phase; avoid conflating early Act One tracks from 2022 with whole album release.
- The catalog already contains `Machina/The Machines of God` (2000) and `Aghori Mhori Mei` (2024). `Pisces Iscariot` (1994) is a compilation of B-sides and outtakes and `The Aeroplane Flies High` (1996) collects singles/EPs; deliberately excluded. Deluxe editions and bonus discs do not become new albums. No live albums in this batch.

## Co-billed
None. All original studio album credits are by The Smashing Pumpkins; guest performers are not co-billed album artists. No `coBilled.ts` update.

## New tokens
No new genre, instrument, or production tokens required under the branch's latest `Genre`, `INSTRUMENTS` and `PRODUCTION` types. `acidfolk`, `noisepop`, `gothpop`, `electrorock`, `triphop`, `electropop`, `newwave`, `electronica`, `neopsychedelia`, `prog` and all remaining used genre tokens already exist.

## ARTIST INFLUENCES — artist-wide, first phase only
These are influences documented by Billy Corgan or a Smashing Pumpkins member as shaping their work. **Artist-wide influences are NOT automatically copied into every album's `influenced_by` field.**

- **Black Sabbath**: Corgan identifies the band's heaviness as a foundational childhood influence; Pitchfork links `Master of Reality` explicitly to *Siamese Dream*'s sound goal. Source: https://pitchfork.com/reviews/albums/smashing-pumpkins-siamese-dream/
- **My Bloody Valentine**: Corgan admits direct borrowing from Kevin Shields on `Daydream` on *Gish*. Source: https://www.nme.com/news/music/smashing-pumpkins-billy-corgan-on-gish-influencing-pearl-jam-and-nirvana-2951893
- **The Cure**: Corgan explicitly recalls synthesizers in The Cure and early influence of the Chicago industrial/electronic scene. Source: https://www.nme.com/music-interviews/billy-corgan-the-smashing-pumpkins-cyr-glastonbury-mellon-collie-2825845
- **New Order** and **Bauhaus**: Jimmy Chamberlin explains Corgan's formative post-punk interests in an interview. Source: https://www.alternativenation.net/smashing-pumpkins-member-reveals-band-attracted-soundgarden/
- **Joy Division**: Same Chamberlin firsthand testimony names Joy Division among Corgan's interests. Source: https://www.alternativenation.net/smashing-pumpkins-member-reveals-band-attracted-soundgarden/
- **Rush**: Corgan says the opening of `Cherub Rock` derives from Rush's `By-Tor and the Snow Dog`. Source: https://ultimateclassicrock.com/smashing-pumpkins-rush-cherub-rock/
- **The Who**: Corgan specifically likens the tempo/backing of `Tonight Tonight` to The Who. Source: https://www.musicradar.com/news/billy-corgan-interview-smashing-pumpkins-kurt-cobain-guitar-solos-rush-boston
- **Yes**, **Jethro Tull**, **Queen**, **Ramones**: Corgan recalls early formative listening to each in a long-form interview; these are **artist-wide listening influences**, not proof they shaped one named album. Source: https://www.self-titledmag.com/smashing-pumpkings-feature-billy-corgan-interview/
- **Johnny Marr / The Smiths**: Chamberlin says James Iha was especially drawn to Johnny Marr. Source: https://www.alternativenation.net/smashing-pumpkins-member-reveals-band-attracted-soundgarden/
- **Siouxsie and the Banshees**, **Led Zeppelin**, **The Beatles**: Named as materials the debut sought to combine by critic Mark Beaumont; album-specific independent critic attribution rather than firsthand musician testimony. Source: https://www.loudersound.com/music/smashing-pumpkins-gish

## Production-credit caution
- *Gish* and *Siamese Dream*: Butch Vig and Billy Corgan; Alan Moulder mixed *Siamese Dream* but is not a producer.
- *Mellon Collie*: Flood, Alan Moulder and Billy Corgan. Sound Credit and MusicRadar cover their production roles; avoid listing assistant engineers.
- *Adore*: original 1998 MusicBrainz track producer relationships give Billy Corgan/Brad Wood; Flood mostly as mixer. Some general discographies credit him as producer; leave out unless Claude checks an unequivocal original per-track producer credit. Bon Harris provides programming, not production.
- A gear item visible in studio (e.g., sitar during Siamese Dream) is **not** automatically on the album. No software or signature model was invented.

## Genre-evidence interpretation
Genre evidence has `whole album`, `some tracks`, or `texture` scope. The 27-column row format collapses the scope into a `|` list; preserve the order and use this evidence CSV to prevent a low-scope tag from dominating similarity matches. Broader genres and specific named genres are retained together when warranted. Some scene-coded tags such as `postgrunge` come from editorial cataloguing and are disputed by critical accounts; keep them source-attributed.

## Next phase (Phase 02)
`Machina/The Machines of God` (2000), `Machina II/The Friends & Enemies of Modern Music` (2000), `Zeitgeist` (2007). Note the similar MACHINA names are **separate** studio releases. `Machina II` and `Zeitgeist` must be added before descriptor validation. Source for catalog completeness: https://musicbrainz.org/artist/ba0d6274-db14-4ef5-b28d-657ebde1a396?page=1 and https://www.smashingpumpkins.com/

## Files
1. `CLAUDE_IMPORT.md`
2. `pumpkins_phase01_rows_ONLY.csv`
3. `pumpkins_phase01_sources.csv`
4. `pumpkins_phase01_genre_evidence.csv`
5. `pumpkins_phase01_evidence-notes.md`
6. `pumpkins_phase01_catalog-audit.csv`
