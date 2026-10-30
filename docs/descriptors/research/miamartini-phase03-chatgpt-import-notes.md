# CLAUDE IMPORT — Mia Martini / phase 03 (incremental)

**Repo:** `giampierofiorelli/Fandome`, branch `descriptors`. **Artist ID:** `miamartini`, already in `catalog.ts` (not in `seed.ts`). Research snapshot: **30 October 2026**. Read-only.

## Import these four new rows only

| ID | Album | Year | Type | Catalogue |
|---|---|---:|---|---|
| `miamartini-danza` | Danza | 1978 | studio | already present |
| `miamartini-mimi` | Mimì | 1981 | studio | already present |
| `miamartini-quantevoltehocontatolestelle` | Quante volte... ho contato le stelle | 1982 | studio | already present |
| `miamartini-martinimia` | Martini Mia... | 1989 | studio | already present |

The four album titles/years are already in `src/data/catalog.ts` with these computed slug IDs. **No catalogue additions are required.** `src/data/coBilled.ts` contains no co-billed Mia Martini album in this phase; no joint headline credit is proposed. All are original studio releases.

## Already done / skips

The GitHub file `docs/descriptors/miamartini.csv` currently contains exactly these **four existing rows**, already described and **skipped**:

- `miamartini-oltrelacollina` — *Oltre la collina* (1971)
- `miamartini-nelmondounacosa` — *Nel mondo, una cosa* (1972)
- `miamartini-ilgiornodopo` — *Il giorno dopo* (1973)
- `miamartini-epropriocomevivere` — *È proprio come vivere* (1974)

The four albums **delivered in phase 02** are also **skipped** here, even if Claude has not yet imported them into GitHub: *Sensi e controsensi*, *Un altro giorno con me* (both 1975), *Che vuoi che sia... se t'ho aspettato tanto* (1976), and *Per amarti* (1977). Never duplicate earlier phase ZIPs.

**Excluded live album:** *Miei compagni di viaggio* (1983) is a live recording of a concert at Milan's Teatro Ciak Toshiba on 22–23 October 1983; it is not an eligible phase-03 studio entry. Compilations are also out of scope. The ten original 1989 *Martini Mia...* tracks include a **new recording** of the older *Agapimu*, which is not a new co-billed release or a separate new album.

## Tokens to add

- **New instruments:** `mandovox` and `cetra`, both directly credited to Ivano Fossati on *Danza* by Hit Parade Italia's original Warner LP personnel transcription. Suggested labels: **Mandovox** and **cetra (plucked string instrument)**. The singular `cetra` credit should remain distinct from synthesizers. They do not currently occur in the branch's `src/data/instruments.ts`.
- **New genre tokens:** none. All four records use genre tokens already listed in `src/data/scenes.ts`. Avoid unconfirmed `newwave`, `progressivepop`, `softfunk` tags based only on unsourced encyclopaedic summaries.
- **New production tokens:** none. `arpomni`, `oberheim` and `vocoder` are already allowed in `src/data/production.ts`.
- Map **vibraphone** to `mallets`, as required by the owner.

## Credits, issues and safeguards

1. **Danza**: original release 1978 per WEA original copyright/Hit Parade/ICS.A.I.C.; some sources show 1979 (single issue, later cataloguing). Do not change existing year/ID. Fossati's original arrangement and artistic production are well documented. Piero Colasanti has contradictory credits: some discographies list him as producer, the original sleeve reproduction identifies him as **executive producer**. The row currently lists only `Ivano Fossati`, excluding Colasanti as an executive. Check an original sleeve before adding him; not an automatic producer. Natale Massara realised the track *Vola* but is not unambiguously credited there as ordinary co-producer. Session account: stable group working together for two months, **not** proof of one-take live recording.
2. **Mimì**: Dick Halligan is the credited producer, while his Oberheim and the track-eight vocoder are supported by the original DDD credits. No model like Oberheim OB-X or OB-Xa can safely be specified. The voice is documented as more raspy after her return; no unverified auto-tune or drum machine.
3. **Quante volte...**: Shel Shapiro is the only credited producer. Hit Parade gives core personnel; leave production and unspecified synthesizer equipment empty. Some internet personnel lists add other equipment, but no original independently open corroboration was found. `ballad` in the last genre slot is a weaker critic-inferred stylistic value. Do not insert an unsupported `newwave` or `softfunk` token.
4. **Martini Mia...**: **Promovideo** appears in the original Fonit Cetra `producer` field. Gianni Sanjust appears as executive producer only (exclude); Maurizio Fabrizio and Renato Serio are arrangers (exclude). Sources give Enzo Gragnaniello on guitar but do **not** identify all accompanying players or machines, so leave the `production` cell and `electronic` scale blank. *Agapimu* was newly re-recorded (Greek), **not** merely a reused recording from 1974. *Statte vicino a me* is mostly sung in Italian with a few Neapolitan lines: main language `it|el`, no album-wide `nap` assumption.
5. The notes file flags two weakly supported `ballad` genre entries explicitly for Claude's stricter literal-source audit. Some primary sleeves are presented via searchable/indexed original pressing metadata where automated full-text access is blocked; review before promoting confidence to `high`.
6. The row status remains **`draft`**. No earlier rows, scripts, or Github writes are included in this ZIP. Run existing validation/tests after importing tokens and rows.

## Files included

`CLAUDE_IMPORT.md`;
`miamartini_phase03_rows_ONLY.csv`;
`miamartini_phase03_sources.csv`;
`miamartini_phase03_genre_evidence.csv`;
`miamartini_phase03_evidence-notes.md`;
`miamartini_phase03_catalog-audit.csv`.

## Next phase 04

1. `miamartini-lamiarazza` — *La mia razza* (1990)
2. `miamartini-lacrime` — *Lacrime* (1992)
3. `miamartini-lamusicachemigiraintorno` — *La musica che mi gira intorno* (1994)

These are the final three studio albums in the currently listed catalogue; the next phase will therefore contain three rows unless one has meanwhile been described. No reworking of previously delivered albums.
