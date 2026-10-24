# Annalisa — Phase 01 | Evidence notes

Research date: 2026-10-24. Three albums only. **Draft editorial scoring:** 0–5 values are judgments based on qualitative sources, not direct measurements or a listening-based acoustic analysis. No field is estimated purely from the artist's later sound or overall genre.

**Schema:** 25 columns, the exact order specified by `docs/album-descriptors-guide.md` (2026-10-24). `status=draft`, without `(unsure)` in notes. Genres: all specifically documented genre labels, with no maximum, ordered by strength of applicability. More specific genres do not displace their parent genres.

**New genre requiring Claude to add it to the validator and the canonical guide:** `britpop` (source on the debut describes a Brit-pop flavor on *Brividi*, as well as British influences on *Fuori*). This is a *track-level stylistic element* rather than a claim that the whole debut is a Britpop album. If Claude's validator initially rejects it, the correct remedy is to add the genre as instructed, **not** silently discard it.

## Nali (2011) — `annalisa-nali`

- **Identity:** Already present in Fandome `src/data/catalog.ts` as *Nali* (2011); preserve its existing ID. The artist's official discography lists the album and songs. The debut is 9 tracks: 8 originals and a live Mina cover. [A1, A2, A5]
- **Genres ordered `pop|rock|electronic|britpop`:** Rockol identifies an album of pop songs; AllMusic categorizes it Pop/Rock; the official introductory materials document electronics on *Solo* and *Giorno per giorno*, plus British/Brit-pop sonorities on *Brividi* and *Fuori*. These are *minority elements*, not dominant full-album identities. [A1, A2, A3]
- **Energy 2 (tentative), mood 3:** Annalisa's track-by-track explanation spans inward-looking breakup material (*Cado giù*, *Questo bellissimo gioco*) as well as optimism (*Inverno*) and romantic happiness (*Diamante lei e luce lui*). A lower-middle intensity and mixed emotional mood are more defensible than labeling it uniformly upbeat. This remains editorial rather than measured. [A1]
- **Electronic 2:** The record's dominant pop songs include explicitly mentioned electronic elements on a subset of tracks, so not an overwhelmingly electronic sound. [A1]
- **Voice `clear`:** Artist description of varied, controlled vocal timbres alongside reviews; necessarily a coarse categorical choice. [A1, A3]
- **Lyrics `love|heartbreak`:** Relationship happiness, longing and breakups in the artist's explanations. [A1]
- **Producers:** Dado Parisini is documented as the lead, and Rockol's later retrospective adds Nicolò Fragile; producer vs contributor per track should be revisited if full liner notes become available. [A1, A4]
- **Influences:** Annalisa mentions artists she listens to (including Björk, Mina and Portishead) but DOES NOT attribute the album's production choices to them. Therefore `influenced_by` is **blank**. `sounds_like` is also blank: no album-specific comparative claim with sufficient precision. [A1]
- **Unassigned:** theatrical, experimental, polish, tempo, groove. Source descriptions are insufficient for reproducible album-level 0–5 ratings. `landmark=1` is a **debut/artist-defining editorial flag**, not a claim of historical greatness.

## Mentre tutto cambia (2012) — `annalisa-mentretuttocambia`

- **Identity:** New album for Fandome. Original year 2012, 12 songs; produced by Dado Parisini. [A9]
- **Genres `pop|electronic|rock`:** Rockol explicitly calls the record pop. Soundsblog documents sparse electronics in *Per te* and *Tra due minuti è primavera*, and a rock-flavored *Ottovolante*. The latter two should have lower weights than pop. [A6, A7]
- **Energy 2, mood 2:** Several ballads and piano/string-led, often pensive love songs dominate the specialist descriptions; more driving individual tracks (e.g. *Bolle*) keep energy from zero. Mood remains a coarse interpretation of the review descriptions. [A6, A7, A8]
- **Electronic 2:** The critic highlights deliberately limited synth/electronic intrusions within primarily acoustic/traditional-pop arrangements. [A7]
- **Experimental 1:** The detailed critical review notes familiar musical structures and limited harmonic or formal surprises on multiple songs, although some electronic experiments are present. [A7] Editorial judgment, not an objective measure.
- **Voice `clear`:** Soundsblog specifically describes softer delivery and register/falsetto control. [A7]
- **Lyrics `love|heartbreak`:** Contemporary review identifies a predominantly romantic collection, including heartbreak and relationship dynamics. [A7]
- **Comparisons:** Soundsblog compares the piano of *Tutto sommato* to Sara Bareilles' *Love Song*, but this is **one track** and is not accepted as a verified album-wide `sounds_like` relation. `sounds_like` empty. [A7]
- **Unassigned:** theatrical, polish, tempo, groove, influenced_by.

## Non so ballare (2013) — `annalisa-nonsoballare`

- **Identity:** New album for Fandome, 11 tracks, produced by Davide Graziano (official site). [A12]
- **Genres `pop|rock|jazz`:** TiVo's published editorial introduction describes melodic pop-rock as the majority style, and specifically identifies jazz inflections in the first two songs plus *Io tu e noi*. The late-2010s dance-pop reputation of the artist must NOT inform this row. [A11]
- **Energy and tempo empty:** Pop-rock and jazz alone cannot reliably define typical driving intensity or BPM. Do not force a value. Likewise electronics, groove, experimental, polish and theatrical remain blank.
- **Mood 2 (tentative):** Specialist review calls several works intimate, poignant and melancholy (notably *La prima volta*), while lighter retro jazz moments offset that emotional center. Editorial judgment. [A10, A11]
- **Voice `clear`:** Franco Zanetti describes a controlled, expressive and tuneful delivery, rather than an aggressive/raspy one. [A10]
- **Lyrics `love|social`:** Annalisa's documented focus includes emotional relationships and serious social topics in *Alice e il blu* and *Spara amore mio*. Prefer specialist/artist corroboration for full lyric interpretation. [A10, A11]
- **Sounds like `Arisa`:** Rockol critic Franco Zanetti explicitly hears a resemblance in *Alice e il blu* and *Tutta l'altra gente*. **It is partial, track-specific**, not full-album identity. Claude should choose whether to retain this at album level. [A10]
- **Producers:** Davide Graziano, not Ermal Meta (a songwriter on several tracks). [A10, A12]
- **Inﬂuenced_by empty:** Similarity in a critical review is not proof of direct influence. `landmark=0` is editorial/relative to later signature releases, not a quality score.

## Discography check

Nine distinct studio albums (2011–2025) are verified via the official artist site and MusicBrainz. Do not mistake *Nuda 10* (expanded reissue, 2021) or *Le origini* (retrospective compilation) for new studio albums. Only these three albums were researched in this incremental batch. Additional unreleased or later albums should not be inferred.

## Uncertainty, disagreements and limitations

- The newer guide says no genre limit; the list `britpop` is unsupported by the validator until Claude extends it. Preserve it with the underlying citation.
- Track-specific genre references are permitted but are ranked after album-wide genres; no claim that a Britpop or jazz style dominates an album.
- Rockol's Nali press summary cites only Dado Parisini; the later Rockol review cites Nicolò Fragile as a co-producer. Preserve both with provenance, subject to liner-note verification.
- Early-release source dates on digital stores sometimes vary by country. Original release years here come from the artist's own discography.
- No waveform, tempo/BPM measurements, independent listening panels or multi-rater calibration were performed. Blank numbers are deliberate abstentions.

## Source key

[A1] Annalisa official presentation (`annalisaofficial.it/news/136-scheda-del-cd-qnaliq`)
[A2] Rockol, NALI review (7 Mar 2011)
[A3] AllMusic, Nali review by Mariano Prunes
[A4] Rockol, Non so ballare review by Franco Zanetti (22 Feb 2013)
[A5] Annalisa official discography
[A6] Rockol, Mentre tutto cambia review (26 Mar 2012)
[A7] Soundsblog, Mentre tutto cambia track-by-track review (29 Mar 2012)
[A8] Recensiamo Musica, Nico Donvito retrospective (27 Mar 2022)
[A9] Annalisa official discography (2012 section)
[A10] Rockol, Non so ballare review by Franco Zanetti
[A11] TiVo, Non so ballare synopsis published by Qobuz
[A12] Annalisa official discography (2013 section)

See `annalisa-phase01-sources.csv` for full URLs and evidence mapping. Do NOT copy publication text into the software repository; these notes summarize the facts and editorial reasoning in original wording.
