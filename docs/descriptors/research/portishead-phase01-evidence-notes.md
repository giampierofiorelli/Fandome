# Portishead — Fandome phase 01: evidence notes (2026-10-25)

## Approach

- Audit read-only against branch `descriptors`; no `portishead` artist in `catalog.ts` or `seed.ts` and no `docs/descriptors/portishead.csv`. New IDs use `portishead-` plus the compact album title.
- Source citations and per-genre source/scope are provided in separate CSVs. Scale values are editorial judgments anchored to the Fandome guide, **not numerical scores found in sources**. The row is a draft for Claude review.
- Genres have no cap. They are ordered by primary sound, followed by narrower song styles, then low-priority industry database umbrella labels. `whole album / metadata` is not equivalent to unanimous expert musical classification.
- Production and instrumentation include only documented recording/instrument facts from these specific albums. `sounds_like` is editorial sonic proximity, not a historical influence claim.

## Dummy (1994) — portishead-dummy

**Primary evidence:** Philip Sherburne (Pitchfork), John Bush (AllMusic), Apple Music, MusicBrainz recording credits, 2019 Barrow/Utley Irish Times interview and the Barrow Guardian interview.

- **Genres:** AllMusic and Apple Music identify trip-hop/electronica/electronic; Apple says downtempo. MusicBrainz album-level tags include acid jazz. Hip-hop, breakbeat and dub come from Pitchfork's descriptions of rhythmic sources/texture, not claims that every track belongs to those genres. AllMusic includes broad alternative-pop/rock categories as metadata; these appear late. The genre index also names dark jazz, illbient, turntablism and spy music; kept last with secondary-metadata scope because they are not the album's primary style.
- **Instruments:** Bass, drums, Fender Rhodes, Hammond organ, guitars, theremin, trumpet and strings come from album credits (AllMusic/MusicBrainz). Turntables, samplers and dubplate cutting from Pitchfork's detailed recording account. Rhodes is `electricpiano`, Hammond is `organ`; string instruments on `Roads` are real credited personnel.
- **Production:** Self-recorded jam source material was tracked on 24-track tape, fed into samplers, sometimes recut to dubplates; `sampling|analogtape` are therefore sound. The band's broken-gear and degraded-vinyl methods justify `lofi` and `distortion`, although the record's mixes are controlled. Apple describes Gibbons' falsetto; mark it last because it is not the sole register. **Do not assign any particular model of sampler or drum machine.**
- **Producers:** Portishead credited as producer; Adrian Utley individually as co-producer, separate from engineering by Dave McDonald. Not all sample-source writers/producers are record producers.
- **Influence:** Geoff Barrow explicitly linked John Carpenter's *Assault on Precinct 13* score to `Roads`. That supports John Carpenter, not an automatic influence tag for every sampled musician. Pitchfork compares Gibbons to Billie Holiday, but resemblance does not establish documented influence.
- **Scales (energy/electronic/mood/theatrical/experimental/polish/tempo/groove = 2/3/0/3/3/4/1/2):** Mostly slow and emotionally desolate; potent but not aggressively loud; balanced live playing and sampler editing, tightly detailed studio mix, restrained dance momentum. The album is deliberately more claustrophobic than the word “chillout” implies.
- **Topics/voices:** Heartbreak, isolation, sensuality and identity concerns come from `Glory Box`, `Roads`, `Sour Times` and Pitchfork's close lyrical reading. Gibbons has breathy, weathered and suddenly intense registers.

## Portishead (1997) — portishead-portishead

**Primary evidence:** Stephen Thomas Erlewine (AllMusic), 1997 Adrian Utley interview (Lollipop), AllMusic personnel credits, aggregator metadata with labelled weaker authority.

- **Genres:** Trip-hop/electronica/electronic remain primary by AllMusic; acid jazz is documented in album taxonomies but a secondary stylistic classification. Downtempo is supported by genre indexes and the critic's pervasive slow tempo. AllMusic adds alternative and adult-alternative pop/rock umbrella tags, followed by secondary album-tag index labels dark jazz, turntablism and spy music. All are kept after core styles and labelled `metadata`.
- **Instruments:** AllMusic credits Utley on guitar, bass, Moog, Fender Rhodes and piano, Barrow on drums, Baggot on organ/piano, Hague et al on horns, Cornick on trombone, Cooper on violin, and programmed/sampled sources. `moog` is a documented synth brand here; no unsupported sampler model.
- **Production:** Utley says they deliberately stopped sampling **other people's** records and made, recorded and cut their own sources before sampling. Thus `sampling` still applies. AllMusic says Gibbons' voice is electronically phased on many tracks: new precise token `vocalphasing` rather than misdescribing it as Auto-Tune. A limited outside sample exists on `Only You`; no assertion of zero pre-existing samples.
- **Producers:** AllMusic names Beth Gibbons, Geoff Barrow, Adrian Utley, Dave McDonald as producers; Dave is not listed solely because he engineered (the producer credit is separately documented).
- **Influences:** Blank. The reviews identify spy-movie references and noir analogies, but don't securely tie a named artist as this album's direct influence. Do not mistake sample credits (Ken Thorne, Pharcyde) for `influenced_by`.
- **Scales (2/3/0/4/4/4/1/2):** More foreboding, dissonant and theatrical than the debut; still slow and deliberately constructed rather than overtly dance-oriented. Reviewer descriptions of orchestrated torch songs and phased vocals support the higher theatrical and experimental positions.
- **Themes/voice:** Relationship desperation, yearning and isolation; often more strained, rough and dramatic singing.

## Roseland NYC Live (1998) — portishead-roselandnyclive

**Primary evidence:** original 1998 release issue (AllMusic), AllMusic performance credits, 2026 Guardian top-live-albums ranking, MusicBrainz track/venue data, Apple Music.

- **Exception to no-live rule:** AllMusic calls the 35-piece-orchestra special concert an unusually essential live record, and *The Guardian* ranks it #28 among its 30 greatest live albums (January 2026). It materially adds something beyond the studio recordings. Thus `type=live`, `landmark=1`.
- **Edition caveat:** Roseland Ballroom show was **24 July 1997**, album originally **1998**. Source metadata and some editions indicate **other venues/1998 performances** on the released record, so do not claim every album track was captured at Roseland. The 25th-anniversary 2023 edition is a reissue, **not a new album row**.
- **Genres:** AllMusic supplies album-level `triphop`, `electronica`, `electronic`, and broad alternative-rock/adult-alternative styles. Orchestra and jazz-sounding horns describe arrangement/instrumentation; they do not license adding `classical` or `acidjazz` to the genre column without a genre source.
- **Instruments:** AllMusic credits the orchestra's strings, woodwinds, brass, flutes, violins, cello, saxophone and trombone, and turntables, guitars, bass, keyboards, synth and drums. Several instruments are constituent members of the larger orchestra token; listing both is intentional to make individual timbres searchable.
- **Production:** New `concertrecording` identifies live concert recording, as current `liverecording` is labelled in the repository as “Recorded live in the studio” and would misdescribe this album. Moog synthesizer is credited. **A large orchestra does not imply digital layering, overdubs, or studio sampling.**
- **Producers:** `Portishead` is explicitly credited in MusicBrainz and AllMusic. Some derivative online credits name a separate television/video producer; not promoted to record producer without original record credit.
- **Scales (3/2/1/4/2/4/2/2):** Dynamic live orchestra increases energy/theatrical effect, and physically played instruments lower electronics vs originals. Songs retain eerie grief; programme remains mostly mid/slow. Live orchestral sophistication differs from studio `polish`: clean and arranged ≠ glossy pop production.
- **Sounds_like:** Tindersticks and David Axelrod refer to orchestral/dark cinematic proximity, not historical influence.

## Third (2008) — portishead-third

**Primary evidence:** 2008 Pitchfork review/interview, 2008 Guardian reviews, Adrian Utley interviews (Sound on Sound and Exclaim!), AllMusic credits, Reverb technical retrospective, Guardian Silver Apples and Carpenter interviews.

- **Genre disagreement:** Pitchfork expressly states this album leaves trip-hop behind; AllMusic still attaches `Trip-Hop` to its style metadata. Both are logged: `triphop` is **late, disputed legacy genre**, not primary. `electronic` is stable; *The Guardian* names krautrock rhythms. Album of the Year metadata labels experimental rock, post-industrial and psychedelic rock; these are secondary, not unanimous critic agreement. `industrial` concerns `Machine Gun`, `folk` and `doowop` specifically `Deep Water`, `jazz` the free-jazz horns of `Magic Doors`. They belong late and carry `some tracks` scope.
- **Instruments:** AllMusic verifies drums (Deamer), bass (Barr), cello (Nicholls), Fender Rhodes (Baggot), saxophone (Gregory), clarinet and vocals (Team Brick), guitar (Gibbons); *The Guardian* calls out ukulele; Reverb documents analogue synths, drum machine, guitar, organ and hurdy-gurdy. A single track's instruments appear later.
- **Production:** First-hand Utley/Barrow discussion and technical reporting distinguish Third's RADAR multitrack workflow from earlier cut-to-vinyl construction. `radar24` records that system. `Machine Gun` uses a cheap Orla organ's drum machine rhythm sampled and treated with a flanger (Reverb/Exclaim), supporting `sampling|orlatiffany4`; `orlatiffany4` is track-specific. Sources name Korg MS-20, EMS VCS3, ARP 2600 and Moog-family instruments. Sources discuss spring-reverb hardware, Altiverb software and some Pro Tools ambience; secondary sources mention Logic. **No claim that every track uses these devices**; the order emphasizes core processes first. `analogtape` is deliberately absent because RADAR was a digital hard-disc capture system despite its tape-like sonic character.
- **Documented influences:** Geoff Barrow directly calls Silver Apples a pathway and identifies `We Carry On` as homage. He connects Carpenter's *Assault on Precinct 13* to `Machine Gun`. Pitchfork characterizes `We Carry On` as a Joy Division homage; critic attribution is sufficient under user's rule but weaker than first-person confirmation. Clinic, Suicide and Broadcast are editorial `sounds_like`, not recorded influences.
- **Scales (3/4/0/4/5/3/3/2):** Abrasive peaks and motorik pulse balanced against sparse songs; gloom dominates; experimental arrangements and stronger electronic synth/drum sources; less deliberately slick than the nineties LPs. Tempo varies, so neither uniformly fast nor wholly slow.
- **Lyrics/language:** English lead singing, themes of anxiety and internal distress. A Portuguese opening speech sample on `Silence`, plus incidental sampled spoken sources, does not make Portuguese a *main singing language*. Do not add `pt` automatically.

## Sources with limitations / handling disagreements

- AllMusic exposes broad rock umbrella styles on all albums even when much of the sound is electronic. The order of genre tags guards against those labels overpowering the defining trip-hop/electronica sound.
- Third contains stark conflicting critical taxonomies, so its track-level industrial/folk/doowop/free-jazz references are explicitly `some tracks`.
- The Sound on Sound direct interview is search-indexed but the website can block automated full-page reading (403). It is cited for what can be independently recovered in the search excerpt and cross-checked against Exclaim!/Reverb; hardware details with only secondary corroboration are lower strength.
- The band's direct rejection of the term “trip-hop” is a separate question from listener-facing taxonomic placement. For Dummy and Portishead it remains the dominant documented genre; on Third it is kept only to reflect named but contested metadata.
- `influenced_by` purposely excludes sampled composers, guest performers, producers and derivative similarity judgments unless there is an explicit documentary basis.
