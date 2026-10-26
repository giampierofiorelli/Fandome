# Oasis — Phase 01: research evidence and scoring decisions

**Branch check**: `descriptors`, read-only, 26 October 2026. Artist `oasis` and all four album titles already in `src/data/catalog.ts`. `docs/descriptors/oasis.csv` not found. All data here is `draft`; do not infer that preceding packets or repositories were edited.

## Evidence policy
- Numeric scales are editorial judgments against the guide anchors, not measurements. Scores apply to original **whole albums**, not bonus tracks, reissues or famous singles alone.
- The `genres` column includes detailed AllMusic style labels, normalized by removing punctuation, **and** source-defined musical ingredients, with explicit scope in `genre_evidence.csv`. AllMusic broad classes are not claims that every song shares that style.
- The field `influenced_by` is populated only where artist interviews or qualified critics document direct influence. `sounds_like` is an **editorial comparison** only, not an asserted personal influence.
- Album-specific instruments are based on sleeve transcriptions and per-track credits. `electricguitar` and `acousticguitar` distinguish actual credited playing, not an inference from genre. Empty production claims are preferred to guessing a particular machine.

## Definitely Maybe (1994)
**Sources:** official 1994 album page; original sleeve transcription; Sound on Sound Owen Morris recollections; Stephen Thomas Erlewine/AllMusic; contemporaneous Hot Press; Guardian 1994 review; Rock Cellar oral history.

- **Energy 4, tempo 3:** high-volume energetic rock but several medium-tempo songs; average speed is not fast throughout.
- **Electronic 1:** documented core sound is electrically amplified guitars, bass, acoustic drums, with no album-defining synthesizers. Guitar amplification does not make it electronic-pop production.
- **Mood 4:** the album's overriding confident, affirming exuberance offsets some reflective lyrical moments.
- **Theatrical 3, experimental 1:** swaggering extrovert delivery but conventional guitar-song structures rather than experimental techniques.
- **Polish 3:** Owen Morris salvaged and intensely remixed rough earlier sessions; avoids inaccurately calling it either pristine or lo-fi.
- **Groove 2:** repeated propulsive backbeats rather than dancefloor-led grooves.
- **Voice:** Liam's piercing raspy and forceful tenor, plus clearer Noel supporting vocals.
- **Instruments:** original sleeve names Liam/Noel/Bonehead/Guigsy/McCarroll with guitar, bass and drums. Do not credit the early pre-Oasis Rain drum machine to this album.
- **Production:** Noel overdubbed guitars according to Morris. `wallofsound` summarizes dense layered guitar mix, not a literal Spector session claim. Crucial credit caveat: sleeve lists Gallagher+Coyle as principal producers, Morris for additional production and mixing, Batchelor for the released track *Slide Away*. Official page names all four. No extra producer inferred from engineer or mastering personnel.
- **Influences:** direct Noel/Bonehead/Liam interviews describe Beatles, Stones, Kinks, Who, Jam, Sex Pistols, T. Rex, Neil Young and Stone Roses. These are not copied into `producers`.

## (What’s the Story) Morning Glory? (1995)
**Sources:** official page and sleeve; MusicBrainz original release per-track musician credits; Sound on Sound; Morris technical interview; AllMusic; Official Charts.

- **Energy 3, tempo 3:** uptempo *Morning Glory* and *Roll with It* coexist with acoustic and midtempo *Wonderwall*, *Cast No Shadow* and *Champagne Supernova*.
- **Electronic 1:** Mellotron/E-bow enrich a guitar-led ensemble but do not form its dominant sound source.
- **Mood 3:** uplifting choruses counter reflective and bittersweet songs.
- **Theatrical 4, experimental 1, polish 4:** large arena-style refrains, conventional songwriting and multi-layered studio production.
- **Groove 2:** rock backbeats, not a dance album.
- **Instruments:** sleeve confirms Noel/Bonehead Mellotron and piano, Noel E-bow, acoustic/electric guitars, bass, White drums/percussion, Weller guest guitar/vocals; MusicBrainz credits percussion and harmonica on *The Swamp Song* extracts. `tambourine` is a **new** instrument token because some track-level credits name it separately.
- **Production:** `overdubbing` and sonically dense `wallofsound` are supported by Morris recollections. `ebow` is a **new production technique/device** token, not a claim that E-bow is an independent musical instrument. `analogtape` intentionally omitted: evidence of original tape masters alone does not identify the recording format unambiguously.
- **Credit caveat:** Tony McCarroll plays on *Some Might Say* despite Alan White's main album drum credit. Do not attribute White to all tracks.
- **Influences:** Beatles and John Lennon are documented for *Don't Look Back in Anger*, David Bowie for its related riff, and Noel directly credits Grant Lee Buffalo's *Fuzzy* as the influence on *Some Might Say*. George Harrison is **not** listed: a borrowed song title alone is insufficient sonic influence.

## Be Here Now (1997)
**Sources:** official album page; original sleeve; engineer Nick Brine's detailed interview; Noel Gallagher interview about mixing and tape machines; AllMusic.

- **Energy 4, tempo 3, groove 2:** sustained bombastic rock performance but many songs are long, midtempo structures.
- **Electronic 1:** keyboards and tape treatments supplement, rather than dominate, a very guitar-based album.
- **Mood 3:** exuberant bravado mixed with *Don't Go Away* pathos, varied across lengthy tracks.
- **Theatrical 5:** unusually extended, maximalist choruses and arrangements.
- **Experimental 2, polish 4:** ambitious accumulation of overdubs, but relatively conventional melodic structures and a deliberately loud/saturated final mix. Polish 4 refers to elaborate, expensive construction, **not** reviewer approval of clarity.
- **Instruments:** original sleeve credits Nick Ingman's and Noel Gallagher's strings; Mike Rowe keyboard, Johnny Depp slide guitar, Mark Feltham harmonica. Slide guitar is recorded as `electricguitar`, not inaccurately `steelguitar`.
- **Production:** Brine directly describes multiple amps/pedals, overlapping guitar takes and filling 96 tracks; Noel describes two analogue tape machines (recording multitrack), supporting `wallofsound|overdubbing|analogtape`. `stringarrangements` credited. The original credit `backwards bits` on *D'You Know What I Mean?* documents reversed elements but not the device or processing method; `tapeeffects` is intentionally left out pending evidence of tape processing.
- **Genre caveat:** `psychedelia` references *Magic Pie*, expressly a **selected-track** style; not the principal album genre.
- **Influences:** Noel directly discusses *Be Here Now* composition against Beatles/Lennon/McCartney references and names his Stones/Pistols/Kinks/Stooges/Jam influences in his 1997 LA Times interview. His 1997 Q interview (reported in The Independent) names Bowie's riff as an influence on *Stand By Me*.

## Standing on the Shoulder of Giants (2000)
**Sources:** official page; original sleeve; MusicBrainz original-release per-track credits and sample data; AllMusic; Apple Music editorial notes.

- **Energy 3, tempo 2, mood 2:** more measured, minor-key and reflective than earlier records. *Gas Panic!* and *I Can See a Liar* add bursts of energy.
- **Electronic 3:** programmed sections and an identifiable sampled track coexist with traditional electric guitar, acoustic guitar and a live drummer; well short of fully electronic.
- **Theatrical 3, experimental 3, polish 4:** more subdued performances, but psychedelic textures, sampled sounds and extensive studio editing raise novelty and production complexity.
- **Groove 3:** *Go Let It Out* and *Who Feels Love?* contain dance-derived rhythmic ideas, while most other tracks remain guitar rock.
- **Instruments:** original sleeve documents Mini Moog and Mellotron on *Gas Panic!*, electric sitar played by Mark Coyle on *Put Yer Money Where Yer Mouth Is*, flute by Charlotte Glasson, harmonica by Mark Feltham, numerous guitar/keyboard parts by Noel and Paul Stacey. `electricsitar` is a **new** instrument distinct from the acoustic `sitar` token.
- **Production:** Jan Kybert credited with Pro Tools operation/programming; the sample from Johnny Jenkins' *I Walk on Guilded Splinters* is documented for *Go Let It Out*; reverse guitar on *Who Feels Love?* is specifically described in the sleeve transcription, but its means (tape reversal or digital manipulation) are undocumented. Hence `tapeeffects` is omitted. `minimoog` is already an allowed production token on this branch. No invented sampler or drum-machine brand.
- **Genres:** AllMusic describes hints of `bigbeat` and `electronica` and melodic `psychedelicpop`. Apple Music separately labels the recording indie rock. `bigbeat` / `electronica` have *texture or selected-track* scope only.
- **Personnel:** Gem Archer and Andy Bell did not record the core album, although they became touring members. Do not confuse the 2000 band with the 1994–1997 lineup.
- **Influences:** AllMusic identifies Chemical Brothers and Charlatans inspirations for psychedelic/dancefloor ideas; `sounds_like` remains broader editorial likeness.

## Known limitations for Claude QA
1. `wallofsound` is a production descriptor of dense mixes supported by engineers/critics; not a claim of direct Phil Spector production or a specific tape machine.
2. Style taxonomies sometimes list generic broad styles across all Oasis releases. They are retained because guide says preserve *all named genres*, but their album-wide discriminatory value is weak; per-album scopes tell the ranking system this.
3. `analogtape` is asserted only for *Be Here Now*, where Noel explicitly recalls operating dual tape machines; this does not mean the other albums were digitally recorded.
4. E-bow is a guitar sound-generation device; we propose `ebow` as production token. If software models it as an instrument instead, migrate with rationale, not both.
5. Reversed sound is noted in the recording credits for both 1997/2000, but `tapeeffects` is **not** assigned because the mechanism (analogue tape vs digital reverse) cannot be established.
6. Catalogue has a punctuation-curly apostrophe in *Morning Glory?*, but slug normalization must preserve existing ID `oasis-whatsthestorymorningglory`.
7. `The Masterplan` (1998) is a significant B-side compilation to consider in a distinct subsequent research phase; do not quietly classify it as a studio album or repeat previous studio releases.
