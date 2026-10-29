# CLAUDE IMPORT — Ligabue, phase 02 (2026-10-29)

Artist id `ligabue`; exact artist display name **Ligabue**. Repository checked on branch `descriptors`. **No existing `docs/descriptors/ligabue.csv`** at the time of this research. Four phase 02 rows only; **do not append duplicates from phase 01**. Do not auto-commit: add missing catalog entries, merge the rows and execute validation first.

## ZIP contents (six files)

- `ligabue_phase02_rows_ONLY.csv`: four descriptor rows, **exactly 27 columns**; all `status=draft`.
- `ligabue_phase02_sources.csv`: 35 individually described album-specific source references.
- `ligabue_phase02_genre_evidence.csv`: 29 mapped genre assertions with scope.
- `ligabue_phase02_evidence-notes.md`: musical reasoning, interview-proven influences, production cautions, receptions and date disagreements.
- `ligabue_phase02_catalog-audit.csv`: existing rows vs required additions.
- `CLAUDE_IMPORT.md`: this integration note.

## Albums and identifiers, chronological

1. `ligabue-buoncompleannoelvis` — **Buon compleanno Elvis** (1995), studio, **already in catalog**.
2. `ligabue-missmondo` — **Miss Mondo** (1999), studio, **already in catalog**.
3. `ligabue-fuoricomeva` — **Fuori come va?** (2002), studio, **missing from catalog**.
4. `ligabue-nomeecognome` — **Nome e cognome** (2005), studio, **missing from catalog**.

## Add to src/data/catalog.ts

Insert in chronological order into `['ligabue', 'Ligabue', ...]`:

```ts
['Fuori come va?', 2002],
['Nome e cognome', 2005],
```

Preserve all pre-existing records and their identifiers. Confirm `slug()` yields the IDs listed above and run `npx vite-node scripts/validate-descriptors.ts` plus normal project tests.

## New tokens / tokens to inspect

- **New genre:** `alternativecountryrock`, exact AllMusic style **Alternative Country-Rock**, used on 1995 original album (recorded 1995; AllMusic listing has misleading 1996 header). Add to `src/data/scenes.ts` and parent it to `altcountry|countryrock` in `src/data/genreFamilies.ts` if retaining exact style terminology. Do not silently map it to `countryrock` alone.
- **No new instrument or production tokens are proposed**. `ebow` is represented as a production technique only (1999), not as a separate instrument; the original credit notes also mention it as a device, and the accepted vocabulary does not define it as an instrument. `musicbox` (1999) and separate `percussion` (2005) are deliberately omitted because available period credits are insufficient.

## Documented influences

This is phase 02: artist-wide influences were provided only in phase 01; **do not redo them here**. The row for **Miss Mondo** contains *album/track-specific* influence statements from Ligabue's 16 Sep 1999 interview in *Musica!* transcribed online 17 Sep 1999: Brian Eno, Robert Fripp, Beck, John Hiatt (Bring the Family) and R.E.M. These are **first-person musical references**, not collaborators or covers. Source transcript: https://groups.google.com/g/it.arti.musica.rockitalia/c/1ZVvpy8178c . The transcription is secondhand; verify original magazine if possible. Exclude the Bacharach and Hendrix references in the interview because they refer to **Non fai più male**, the non-album B-side.

## Production, metadata and boundary cautions

- 1995: artistic producers Ligabue and Barbacci; Valerio Soave executive only. 1995 tracklist and period issue, not the 2025 reinterpretations.
- 1999: Ligabue solo producer; Claudio Maioli executive. Piero Milesi arranger/conductor, not producer. Preserve original 1999 personnel and strings only on 2 songs; no drum-machine inference from live-sounding loops.
- 2002: Ligabue and Barbacci producers, Maioli executive; first issue **26 April 2002**, not AllMusic's later May date. Tracklist 12 not provisional prerelease 11.
- 2005: Ligabue, Barbacci and **Luca Pernici** producers, Maioli executive; **Pernici** is sometimes misspelled *Persici* in reviews. Original issue 11 tracks including the instrumental intro; do not import later versions.
- `sounds_like` is for critic comparisons/editorial proximity, not declared formation influences. Genre tail terms tied to a single song should not displace principal album genres. Do not infer gear or technique from genre.
- 1997/2003 live albums excluded; the 1998 *Radiofreccia* soundtrack requires an independent importance/collaboration assessment and is not included.

## Next phase 03

**Arrivederci, mostro! (2010)**, **Mondovisione (2013)**, **Made in Italy (2016)**, **Start (2019)**. Exclude live and compilations; later phases can include *7* (2020), *Dedicato a noi* (2023) and future already-released studio albums as appropriate.

## Claude import note

- Added Fuori come va? (2002) and Nome e cognome (2005) to the catalogue.
- New genre token `alternativecountryrock` (AllMusic "Alternative Country-Rock"), parents altcountry and countryrock.
- Producers: Ligabue dropped as self-credit; Fabrizio Barbacci and Luca Pernici kept. Miss Mondo has no producer left.
- Miss Mondo: influenced_by kept (Brian Eno, Robert Fripp, Beck, John Hiatt (Bring the Family), R.E.M.: Ligabue's own words on the album's songs, Musica! 1999, transcription to be verified). sounds_like emptied: John Hiatt and R.E.M. there came from the same interview, not from a critic.
- Fuori come va?: The Who removed from sounds_like (Rockol notes two songs referencing The Who, a reference, not a comparison of the sound).
- Buon compleanno Elvis: Springsteen and Iggy Pop (OndaRock) to be checked in the reception pass.

## Claude enrichment

- Reception from OndaRock (monografia and Nome e cognome review), Rolling Stone Italia's 100 best Italian albums (Elvis No. 11), hitparadeitalia.it and FIMI year-end, AllMusic via it.wikipedia, Rockit, Mescalina, Scanner, Il Giornale.
- Buon compleanno Elvis: sounds_like Bruce Springsteen|Iggy Pop confirmed at album level (OndaRock: "Il sound di Buon compleanno Elvis… è Iggy Pop e Bruce Springsteen senza U2 e The Police").
- Miss Mondo: influenced_by emptied. The Musica! 1999 quotes are first-person but each names an artist for one song (Eno on Si viene e si va and Miss Mondo '99, Fripp on Si viene e si va, Beck on Baby, è un mondo super, John Hiatt on Da adesso in poi, R.E.M. on Forse mi trovo), the same rule as other one-track influences. "Harpsichord" corrected to tambourine (the credit's "cembalo" is the percussion instrument); slide guitar added (bottleneck on track 5).
- Fuori come va?: added sampling and programming (official credits: Stefano Cesca samples, Davide Roveri keyboard programming; OndaRock: "arricchito da inserti elettronici"), electronic 1, arena rock (OndaRock: "un rock da arena"). The Who stays out (one track, In pieno rock'n'roll).
- Nome e cognome: sounds_like U2 (Rockol, Gianni Sibilla 2005: "un suono più tagliente, che in più di un'occasione ricorda quello degli U2"; read from a search extract, Rockol blocks direct access). Added arena rock (OndaRock).
- Producers confirmed by the official site and Discogs: Barbacci (Elvis, Fuori come va?), Barbacci and Pernici (Nome e cognome); Miss Mondo produced by Ligabue alone.

## Owner rule on song-level influences (Oct 2026)

- Miss Mondo (14 songs): influenced_by restored with each song's share, from Ligabue's own words (Musica! 1999): Brian Eno [2/14] (Si viene e si va, Miss Mondo '99), Robert Fripp [1/14], Beck [1/14], John Hiatt (Bring the Family) [1/14], R.E.M. [1/14].
