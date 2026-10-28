# Katrina and the Waves — Phase 01: research notes

All numbers, sonic comparisons and mood judgements are editorial Fandome descriptors, not copied review ratings. Source names and evidence are recorded separately in `katrinaandthewaves_phase01_sources.csv` and `katrinaandthewaves_phase01_genre_evidence.csv`.

## 1. Walking on Sunshine (1983)

- **Release identity**: original Canada-only Attic LP titled *Walking on Sunshine*; some UK 1983 copies and 2010 reissues are titled *Katrina and the Waves*, not the 1985 Capitol LP. Official band discography, band history, AllMusic, original-edition listings.
- **Musical profile**: energetic guitar pop and new wave, loose live-band momentum, 1960s melodic hooks. `rnb` is a lower-priority texture rather than a claim that every track is R&B. The first original version of the title song is less polished than the hit remake.
- **Voice / scores**: Katrina's clearly projected, powerful singing and two Rew-led songs support `powerful|clear`. Energy 4, mood 4, groove 4, polish 2; short budget sessions and live basic takes justify lower polish than later releases.
- **Instruments**: Rew / Leskanich guitars, de la Cruz bass, Cooper drums, Nick Glennie-Smith organ and Kevin Flanagan saxophone from AllMusic 1983 credits and original 1983/84 session compilation credits. The sax is documented for the first 1983 version, not the 1985 brass remake.
- **Production**: Pat Collier's documented 24-track tape/live band recording with subsequent vocal overdubs supports `analogtape|liverecording|overdubbing`. Do not assert particular synth models; Collier says the organ-like sound *may* have come from a sampler, but is uncertain.
- **Influences**: band members describe older artists who shaped them generally; no reliable album-specific direct attribution found, so `influenced_by` is empty.
- **Comparisons / lyric themes**: 1960s-style guitar-pop comparisons are independent editorial sonic judgements; relationships, celebratory love and short-story lyrics recur.

## 2. Katrina and the Waves 2 (1984)

- **Release**: Attic Canada, 1984, original title *Katrina and the Waves 2*. The group's official site compresses the title to *Katrina and the Waves (1984)*; the original edition and reviews use the `2` suffix.
- **Genre and sound**: compared with 1983, Trouser Press finds a harder-rocking set; AllMusic hears more keyboards, horns and backing voices, with an increasingly polished recording. R&B and blues are scoped to songs like `Maniac House` and `Cry for Me`, not treated as dominant album genres.
- **Voice / scores**: greater performance control but still rousing, forceful delivery; energy 4, polish 3 and electronic 1 (still fundamentally live rock, though Linn percussion is noted).
- **Instruments / production**: guitars, bass, drums, organ, keyboard parts, credited brass and backing voices. Mark Deming at AllMusic explicitly reports a Linn Drum partly taking over percussion duties from Alex Cooper: `linndrum` is supported as a family, not as any specific Linn Drum model. Extra overdubbing follows added vocals and keyboards.
- **Producers**: Pat Collier and Katrina and the Waves are credited on the original studio material; later reissue track credits should not override the original LP.
- **Influences / comparisons**: no album-specific artist/producer testimony establishes a named musical influence; leave empty.

## 3. Katrina and the Waves (1985)

- **Release identity**: international Capitol album, March 1985, distinct from the first two Canadian LPs; all its compositions were previously recorded, but the album combines new performances and substantial reworkings. It is a 1985 *studio* recording, not the 2003 compilation *The Original Recordings*.
- **Production**: the original liner track credits show Pat Collier and Katrina and the Waves as producers, while Scott Litt is given additional production/engineering/mixing for tracks. MusicBrainz release-level data additionally calls Litt a co-producer, creating a metadata conflict. The main producers field follows original liner credits; Litt's major role is explicitly noted and linked to his primary interview.
- **Instruments**: Rew and Leskanich guitars, Cooper drums/percussion and synthesizer (on a track), de la Cruz bass, guest organ, brass on `Walking on Sunshine`, added background vocals; supported by MusicBrainz and album personnel credits.
- **Production details**: Pat Collier and Scott Litt explain replacing the drums, overdubbing horns, reshaping the 1985 `Walking on Sunshine` song, using analogue multitrack recording, a powerful compressed vocal and tape-delay effects on the drums. Horn arrangements credited to Eamon Fitzpatrick. A possible Linn Drum 2 augmentation and a *probable* Emulator-like keyboard are mentioned with explicit uncertainty; neither exact model is asserted in the CSV.
- **Specific influence**: Scott Litt explicitly says Wham!'s `Wake Me Up Before You Go-Go`, from *Make It Big* (1984), inspired the R&B rhythmic feel he sought when working on the 1985 version of `Walking on Sunshine` (Mix, Barbara Schultz, 2017). This supports `Wham! (Make It Big)` for this album **only**; it is a production influence on a central hit, not evidence that all songs are Wham-like.
- **Numbers / vocal assessment**: energy 5, groove 5, polish 4, theatrical 4; bold, celebratory horns, vivid rhythm and strong chorus delivery. Comparison names are editorial, distinct from sourced influence.

## 4. Waves (1986)

- **Year**: band's official discography identifies 1986; MusicBrainz documents January 1986 sessions. Some AllMusic metadata incorrectly gives 1985. Use 1986, and flag for importer.
- **Production / credits**: Katrina and the Waves, Pat Collier, Scott Litt credited as producers on this second Capitol album. MusicBrainz track listing corroborates band guitars/bass/drums; original-edition credits name Nick Glennie-Smith on keyboards, a brass section and Eamon Fitzpatrick as horn arranger. Hammond-like organ is explicitly heard in the contemporary/revisited Trouser Press review; there is no reliable evidence of a particular organ model in the credited hardware.
- **Style**: same new-wave and pop-rock frame but more soulful vocals, organ timbre, Stax-like R&B and horn ornamentation. `powerpop` at end reflects a few Rew-written tracks rather than the entire album.
- **Songwriting shift**: Rew wrote two of the ten songs, with many by Leskanich and de la Cruz (AllMusic / MusicBrainz); sound and lyric character therefore differ from the 1983/85 records.
- **Values**: energy 4 / polish 4 / theatrical 4 / electronic 1; full-group guitars and drums still dominate. `hornarrangements` supported by Eamon Fitzpatrick. No unverified machines, effects or software are assigned.
- **Influences**: Stax is the critic's stylistic comparison and the group's longstanding general background, not an album-specific claim by an album maker; `influenced_by` remains blank.

## Cross-source disagreements and limitations

1. The 1983 album has Canadian and British names; the 1985 LP has the same name as one 1983 variant. Use the exact release year and recorded-version identity to avoid incorrect catalog merges.
2. *Waves* is confirmed **1986** by the band official chronology and session date despite an AllMusic 1985 label.
3. Pat Collier's technical interview concerns multiple sessions and chiefly the *1985* hit version; do not transfer all drum treatments to the 1983 album.
4. The 1984 Linn Drum is substantiated; its precise model is not. No actual *Emulator* or other specific synthesizer has been confirmed, despite tentative memory in the Collier interview.
5. The `sounds_like` field makes clearly editorial sonic comparisons. `influenced_by` is reserved for specific artist or album-producer evidence.
6. The `production` tokens document actual techniques, not guessed sonic aesthetics. Unknown production details remain empty or sparingly described.
