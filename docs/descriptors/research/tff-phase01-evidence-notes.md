# Evidence notes — Tears for Fears, phase 01

Scores on 0–5 scales are editorial judgments applied to the published Fandome anchors, not objective measurements. Sources establish instrument/genre/production evidence; not every value is a word-for-word quote from a critic. Source URLs and purpose are in `tff_phase01_sources.csv`, and every genre has a row in `tff_phase01_genre_evidence.csv`.

## The Hurting (1983) — `tff-thehurting`

**The sound and score.** Predominantly electronic pop, but not exclusively so: keyboards/synths, programmed percussion and a playable rhythm section are all credited. The bleak, inward-looking songs justify mood 1, relatively moderate energy 3 and groove 3. It is highly studio-shaped (polish 4), but the direct arrangements and irregular moments such as "The Prisoner" do not warrant maximal experimentation. Curt Smith's more subdued lead and Roland Orzabal's more forceful register support clear/soft/powerful (in mixed proportions).

**Instruments.** MusicBrainz records keyboards played by Roland, Curt and Ian Stanley, Curt's bass, Roland's guitar, Manny Elias's acoustic kit, and Chris Hughes's percussion. The visible synthesizer/drum-machine layer is attested by Pitchfork and Orzabal's production interview, not guessed from synth-pop as a genre.

**Production.** In a retrospective interview Orzabal himself explicitly identifies the Roland CR-78 and borrowing the cymbal-free drum atmosphere of Peter Gabriel's third record. MusicBrainz credits programming to band and producer. `programming`, `drumprogramming`, `rolandcr78` therefore supported. The absence of specific other synth models is deliberate.

**Genres and comparisons.** AllMusic lists Synth Pop, New Wave, Punk/New Wave, College Rock, Alternative/Indie Rock, Contemporary Pop/Rock; Pitchfork calls the 1983 album dark wave. Thus `darkwave` has stronger musical substance than merely inferred gloom. Depeche Mode, OMD and The Cure are editorial comparisons, **not documented influences**. The psychoanalytic framework is lyrical, not a reason to encode "experimental" music genre. *Pale Shelter* early single productions are not conflated with the standard album version.

**Lyrics.** Childhood anxiety, emotional damage, parental absence and identity come from band interviews and the AllMusic critique. Some interpersonal estrangement is captured by `heartbreak`; it is not presented as a romance album.

## Songs from the Big Chair (1985) — `tff-songsfromthebigchair`

**The sound and score.** A broader, louder record (energy 4, theatrical 4, polish 5) containing the anthemic "Shout", the agile, rhythmically insistent "Everybody Wants to Rule the World", wistful "I Believe", and more exploratory "Listen". Mood 2 balances release/catharsis with anxiety and Cold War themes. Groove 4 reflects several pulse-driven singles but not universal club orientation.

**Instruments.** Official-style album credits document Curt's bass, Roland's guitar, Ian's keyboards, Manny Elias/Chris Hughes/Jerry Marotta's drums, Andy Davis and Roland on grand piano, and saxophonists Will Gregory and Mel Collins. Producer Chris Hughes separately lists Steinberger bass, Stratocaster, Gretsch kit, Fairlight synth/sampling, and keyboard/drum boxes. Sampler is attributed to the explicitly named Fairlight, not a generic inference.

**Production models.** In his Red Bull Music Academy interview, Chris Hughes names a "LinnDrum II", "Drumulator", "Roland Super Jupiter", "Fairlight" and "DX7". Map LinnDrum to existing `linndrum`, but retain new `drumulator` and `rolandsuperjupiter` as separate tokens. Ian Stanley's home facility and multi-part experimentation support overdubbing and programming. Do **not** assume a TR-808, Oberheim or other fashionable machine without album-source evidence. Producer remains Chris Hughes, rather than songwriter Ian Stanley or engineer Dave Bascombe.

**Influences.** Pitchfork's reported creative-listening references point to Talking Heads, Brian Eno, Robert Wyatt and Peter Gabriel. It describes Curt Smith's admiration for The Blue Nile's *A Walk Across the Rooftops*. A critic comparing "Listen" with Jon Hassell is **sonic resemblance**, not proof of a documented influence, so Jon Hassell is omitted from `influenced_by`. Robert Wyatt's "Sea Song" cover is not evidence *by itself*.

**Lyrics.** Personal recovery, power, work, love and the Cold War are directly discussed in the extended Pitchfork retrospective. Art-rock and prog are included as *partial album* styles based on "I Believe", "Listen", and multipart pieces, not claimed to dominate all tracks.

## The Seeds of Love (1989) — `tff-theseedsoflove`

**The sound and score.** The arrangements expand into soul, jazz-rock, late-Beatles-style psychedelic pop and orchestral instruments. Energy 3 is balanced by many reflective slow stretches; electronic 2 is lower than either predecessor despite Fairlight and programmed drums. Theatrical 4, experimental 4 and polish 5 capture the ambitious suite-like mixtures and expensive multi-year studio work, while the groove 3 reflects bluesy/jazzy performances rather than dance-floor production.

**Instruments.** MusicBrainz and the reprinted original liner credits name Oleta Adams (vocals and piano), Pino Palladino (bass), Manu Katché/Phil Collins and others (drums), Simon Clark and Ian Stanley (Hammond organ/keys/synth), Robbie McIntosh and Neil Taylor (guitars), Jon Hassell (trumpet), Kate St John (oboe/saxophone), Peter Hope-Evans (harmonica), orchestra arrangements by Richard Niles and Suzie Katayama (cello). The `strings` token is supported by Richard Niles's first-person account of a substantial string orchestra, not guessed from lushness. `electricpiano` is Roland's Wurlitzer in the *Sowing* sessions.

**Production.** Orzabal's Fairlight demo is explicit. He and Bascombe discuss a drum-box route and later rerecording and tempo matching. Richard Niles's thesis describes orchestral arrangements and digitally moving fragments between sections; token `digitalediting` is limited to that documented process. The Niles account is stronger evidence for the string and horn arrangements than vague critics' adjectives.

**Producers.** Standard album liner credit: Tears for Fears and David Bascombe. Qobuz metadata also shows Ian Stanley on an individual song, but not as the general album's credited producer in the principal liner inventory. *Guest* Oleta Adams and *drummer* Phil Collins are deliberately **not** `influenced_by`.

**Influence.** Orzabal and Bascombe explicitly describe "I Am the Walrus" as the rhythmic/stylistic model for "Sowing the Seeds of Love"; assign The Beatles with *Magical Mystery Tour* (the 1967 US album on which the song appeared). This is an actual creative influence, whereas the Beatles also being an audible similarity legitimately appears in `sounds_like`.

**Genre disagreements.** AllMusic's Euro-Pop and alternative-rock shelving coexist with Pitchfork's soul/neo-psychedelic description and the reported album genres sophisti-pop, progressive pop and jazz-rock. These are not collapsed into a single umbrella style. `psychedelicsoul` is a literal musical hybrid described by the Pitchfork review, not proof every track has soul lead vocals.

## Elemental (1993) — `tff-elemental`

**The sound and score.** The first record after Curt Smith left places Roland Orzabal at the centre. Less grandly orchestrated than *Seeds*, but still meticulously made and stylistically variable. The core remains melodic pop-rock, with art-pop, sophisti-pop and progressive-pop elements. Electronic 3 and polish 4 are comparative editorial scores; they are **not proof** of undocumented synthesizer models. The bittersweet and occasionally pointed lyrics favour mood 2.

**Instrumentation.** The original release credit broadly says Orzabal, Griffiths and Palmer handled "instruments" without instrument-by-instrument breakdown. The original CD lists Guy Pratt on extra bass for "Mr. Pessimist" and Mark O'Donoughue's Wurlitzer electric piano on "Goodnight Song". The album-specific Equipboard listing supports Orzabal's guitar/keyboards and Griffiths's guitar, but its particular Ovation guitar model is not securely tied to this session, and is **not** inserted as a production token. Because the source is weaker, this row is `medium` confidence, not `high`.

**Production.** No specific session technique or signature drum machine meets the evidence threshold: leave production blank. Do not translate the mastering credit for Bob Ludwig into a recording method or fill a generic `programming` token by inference. The three co-producers are verified by Qobuz and MusicBrainz, not confused with the album's engineer.

**Influence vs homage.** "Brian Wilson Said" is an homage, and commentators recognise the Beach Boys connection. Under Fandome's rule this is a comparison (`sounds_like`) and **not** enough evidence to populate `influenced_by`. Other comparisons are likewise editorial rather than biographical claims.

**Source disagreements.** AllMusic uses alternative pop/rock and contemporary pop/rock; Album of the Year adds sophisti-pop, art pop and progressive pop; pressing-style listings include synth-pop. `synthpop` is thus represented but placed late, reflecting a partial rather than overarching resemblance. Other sources inconsistently credit the piano outro to Howard Jones; the original-liner transcriptions identify Mark O'Donoughue on track 10. The published day of release varies; year 1993 is uncontested.
