# Claude research notes (Oct 2026, wave 2)

# Wave 2 / D: evidence notes

Five albums: lcd-soundofsilver, daftpunk-randomaccessmemories, goldfrapp-supernature, hotchip-madeinthedark, avicii-true. Titles and years match `src/data/catalog.ts`.
All quotes come from pages I opened (curl text dumps in `wave2/D_dl/`). Wikipedia was used only to find URLs; it is never cited.
Credits come from MusicBrainz release credits (web-service API) and, where MusicBrainz was thin, the Discogs API.

**Couldn't open (403/402/404/DNS):** Metacritic and AllMusic (all albums, also via Wayback, which is blocked), Uncut, NME 2013 influence news, Spin (RAM, Supernature, True), DJ Mag, Télérama, Telegraph (402), EW (402), Slant, Stylus (DNS), Under the Radar, musicOMH, Drowned in Sound, Rolling Stone's 2008 Hot Chip review (404), BBC News, Inthemix, Dallas Voice, Antimusic, CMU. No Metascores are cited.

**Rule applied to producers:** the artist's own production credit is dropped. Daft Punk's existing file (`docs/descriptors/daftpunk.csv`) lists Bangalter|de Homem-Christo as producers on the older albums; for RAM I list only the credited co-producers (MusicBrainz), as the wave rules say. Goldfrapp (credited "Goldfrapp") and Hot Chip (credited "Hot Chip", Discogs) therefore have an empty producers cell. LCD's credit is "DFA" (MusicBrainz), the production team of Murphy and Tim Goldsworthy: kept as `The DFA`, but drop it if the team counts as the artist's own credit.

---

## lcd-soundofsilver: LCD Soundsystem, Sound of Silver (2007), 9 tracks

Sources opened:
- Pitchfork, Mark Pytlik, 9.2 https://pitchfork.com/reviews/albums/10017-sound-of-silver/
- Pitchfork, Top 200 Albums of the 2000s (#17, Pytlik) https://pitchfork.com/features/lists-and-guides/7710-the-top-200-albums-of-the-2000s-20-1/
- Guardian, Dorian Lynskey https://www.theguardian.com/music/2007/mar/09/popandrock.shopping2
- Guardian, 100 best albums of the 21st century (#5) https://www.theguardian.com/music/2019/sep/13/100-best-albums-of-the-21st-century
- Rolling Stone, Sophie Harris, "10 Things You Didn't Know" (2017; quotes Murphy from Mojo, Fact, Clash) https://www.rollingstone.com/music/music-news/lcd-soundsystems-sound-of-silver-10-things-you-didnt-know-110495/
- Resident Advisor review https://ra.co/reviews/4501
- NME, Tim Jonze https://www.nme.com/reviews/lcd-soundsystem/8277
- Los Angeles Times, Ann Powers https://www.latimes.com/archives/la-xpm-2007-mar-18-ca-rack18-story.html
- Seattle Times https://www.seattletimes.com/entertainment/lcd-soundsystems-dance-punk-groove-remains-tight-on-sound-of-silver/
- The Vinyl District, Michael Little http://www.thevinyldistrict.com/storefront/2015/07/graded-on-a-curve-lcd-soundsystem-sound-of-silver/
- Robert Christgau http://www.robertchristgau.com/get_album.php?id=13586
- The Dowsers (2017) https://the-dowsers.com/the-dowser-posts/lcd-soundsystems-sound-silver-became-gold-standard-modern-dance-punk
- Credits: MusicBrainz release 21d098df-8327-3503-97e6-22bea515520e

Cells:
- genres: Wikipedia's list (dance-punk, dance-rock, electronica, art rock) checked against originals. Dowsers "dance-punk chic" and RA "variations of dance-punk" → `dancepunk`. Guardian "dance-rock for grown-ups", PF200 "A dance-rock record", RA "squarely in dance rock territory" → `dancerock`. Vinyl District "best electronica LP ever", Seattle "crafts electronica" → `electronica`. PF200 "this hybrid of 1970s art-rock and more traditional dance elements" → `artrock`. Pitchfork "a perfect hybrid of dance and rock music's values" → `dance`, `rock`; Seattle "He sprinkles rock, 80s synth, Euro disco, techno and funky soul" → `rock`, `eurodisco`, `techno`, `soul`. Guardian "dependably thrilling punk-funk (North American Scum)" → `punkfunk` (new); Guardian Someone Great "an addictive techno elegy" → `techno`. RA "fulfilling his house/techno jones" → `house`. Pitchfork Someone Great "sliver of electro", RS quoting itself: "the electro of 'Get Innocuous'" → `electro`. NME "indebted to the original disco-punk explosion of the late-'70s" → `discopunk` (new). Vinyl District All My Friends "a totally infectious Kraut rock groove", Watch the Tapes "a vague Krautrock feel" → `krautrock`. Pitchfork: "new-wave ('Watch the Tapes')" → `newwave`; title track "a rumbling, ice-cold, no-wave groove" → `nowave` (new). RA: NY I Love You "the back-handed ballad" → `ballad` (tail). Not used: Guardian "art-techno" (no exact token, one track); electronic rock and indie rock (sources Irish Times/Treblezine not opened).
- energy 4: RA "most rocking moments… propulsive", NME "a record designed for the dancefloor"; one slow closer.
- electronic 3: live drums + programming and synths (RA "intersect with live drumming"); Pitchfork: "an analog obsessive with a general aversion to software". Hybrid, not fully electronic.
- mood 2: RS "Themes of loss loom large", Murphy "In the first half I wanted to kill myself"; LA Times "the funny ones always have a dark edge, and the downers gleam".
- theatrical 2: deadpan, specific vignettes ("I don't like big rock lyrics", Murphy via RS); RA notes "histrionic vocal layers".
- experimental 3: NME "play hop-scotch with genres"; PF200: "wasn't trading in new untested sounds as much as it was confidently updating a pastiche".
- polish 4: Pitchfork "deep, spacious, and full-blooded"; RS "clever and slick in execution".
- tempo 4, groove 4: NME dancefloor purpose, Seattle "impossible to sit still to"; Someone Great "relaxed tempo" (RA) and slow piano closer keep it below 5.
- voice `spoken|clear`: Pitchfork "straight deadpan"; Vinyl District "go from conversational to falsetto"; LA Times "Murphy yelps"; falsetto in production.
- instruments: MusicBrainz credits: synthesizer, drum set, bass, guitar, piano, percussion, handclaps, organ, clavinet, glockenspiel, mbira (Pitchfork hears "kalimbas" → `kalimba`), violin, viola, cello. NME "The way Murphy thwacks the cowbell" → `cowbell`.
- production: RA "reprising the drum programming" → `drumprogramming`; MusicBrainz "programming" → `programming`; Murphy (Mojo via RS) "Just do it all myself by doing it in layers" → `overdubbing`; RA "Murphy's histrionic vocal layers" → `layeredvocals`; Vinyl District "Prince-like falsetto", LA Times "the off-kilter falsetto" → `falsetto`.
- lyrics: RS "the loss of youth that's explored on 'All My Friends'" and Sound of Silver "Makes you want to feel like a teenager" (nostalgia, introspection); NY I Love You "explores the sanitization of… New York" (social); Someone Great "heartbreak… elegiac" (heartbreak); Seattle "a healthy dose of irony" (irony); Guardian 100 "pondering their identities as New Yorkers, Americans and thirtysomethings" (identity).
- sounds_like (critics on the album's sound): PF200 "David Bowie? Check. David Byrne? Check. Brian Eno? Check plus" (whole album); LA Times "Brian Eno currently is Murphy's favorite sonic muse… here his influence abounds"; NME "from Eno to ESG" for the album's "backbone" → `ESG`. One track each (9 tracks): LA Times Get Innocuous "practically a tribute to the Talking Heads-Eno collaboration 'I Zimbra'" (Fear of Music) → `Talking Heads (Fear of Music) [1/9]`; Pitchfork "the Velvet Underground ('New York I Love You')", All My Friends piano "not unlike… Steve Reich's approximation of one"; Guardian Get Innocuous "Bowie-vs-Underworld art-techno" (Underworld [1/9]), All My Friends "New Order-tinged"; NME All My Friends "The Chemical Brothers' 'The Golden Path'" (single, so no album), title track "Gang Of Four skull-whacked", NY I Love You "Otis Redding reborn", Get Innocuous "a barefaced pinch from Kraftwerk's 'The Robots'" (The Man-Machine), Watch the Tapes "Beach Boys-style amusement-park pop"; Vinyl District All My Friends intro reminds of "The Who's intro to 'Baba O'Riley'" (Who's Next). Not used: Prince (RA "Murphy's best Prince impression" and Vinyl "Prince-like falsetto" are vocal delivery comparisons), Nico, Kermit.
- influenced_by (Murphy's words, quoted by Rolling Stone 2017): from Fact: "This time around, we made the studio silver as a constant reminder to remember the glam rock, Chrome and DAF, the things that I think of as shiny music – T. Rex, Heaven 17 and Human League, but more Hawkwind, with 'Silver Machine.'" → T. Rex, Hawkwind, Chrome, DAF, Heaven 17, The Human League (whole album: the reminder applied to the whole record). From Mojo: "['All My Friends'] is purposefully trying to chase a feeling that I got from [Joy Division's] 'Transmission'" → `Joy Division [1/9]` (Transmission was a non-album single, so no album in brackets).
- producers: MusicBrainz "DFA" on every track (see note at top).
- landmark 1: RS 2017 "It's Sound of Silver, though, that still serves as LCD Soundsystem's defining statement" and "this seminal album".
- Reception 5/5/2: see reception.csv. Mainstream 2: independent DFA record made by Murphy almost alone (RS 2017 point 8), dance-punk scene; RA saw it "reaching for a broader audience", so not 1.
- Legacy: no row. The Dowsers' title calls it "the Gold Standard for Modern Dance-Punk" but the text I could open has no statement about later artists; the DJ Mag "Solid Gold" feature was 403.

## daftpunk-randomaccessmemories: Daft Punk, Random Access Memories (2013), 13 tracks

Sources opened:
- Pitchfork, Mark Richardson, 8.8 https://pitchfork.com/reviews/albums/18028-daft-punk-random-access-memories/
- Pitchfork cover story, Ryan Dombal https://pitchfork.com/features/cover-story/9131-daft-punk/
- Pitchfork Top 50 Albums of 2013 (#7) https://pitchfork.com/features/staff-lists/9293-the-top-50-albums-of-2013/5/
- Pitchfork Reviews Rescored (8.8 → 6.8, Philip Sherburne) https://pitchfork.com/features/lists-and-guides/pitchfork-reviews-rescored/
- Guardian, Alexis Petridis https://www.theguardian.com/music/2013/may/15/daft-punk-random-access-memories-review
- Rolling Stone review https://www.rollingstone.com/music/albumreviews/random-access-memories-20130513
- Rolling Stone "secrets of new album" https://www.rollingstone.com/music/news/exclusive-daft-punk-reveal-secrets-of-new-album-20130413
- Rolling Stone, Todd Edwards video piece https://www.rollingstone.com/music/videos/daft-punks-random-access-memories-channels-fleetwood-mac-doobie-brothers-20130408
- Rolling Stone 500 (2020) https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/daft-punk-random-access-memories-4-1062938/
- Independent https://www.independent.co.uk/arts-entertainment/music/reviews/album-review-daft-punk-random-access-memories-sony-music-8601668.html
- NME https://www.nme.com/reviews/daft-punk/14423 ; A.V. Club https://www.avclub.com/daft-punk-random-access-memories-1798176861 ; Resident Advisor http://www.residentadvisor.net/review-view.aspx?id=12989
- Sound On Sound (engineers Mick Guzauski, Peter Franco) http://www.soundonsound.com/sos/jul13/articles/daft-punk.htm
- Billboard 2013 feature https://www.billboard.com/music/music-news/daft-punk-how-the-pioneering-dance-duo-conjured-random-access-memories-1561328/ ; Billboard best dance albums of the 2010s https://www.billboard.com/music/music-news/best-dance-albums-decade-2010s-top-40-8544805/
- Credits: MusicBrainz release fc1eb6d6-1c46-429a-8332-4f881c541ae7

Cells:
- genres: Pitchfork "a mix of disco, soft rock, and prog-pop, along with some Broadway-style pop bombast" (`disco`, `softrock`, `progressivepop` for "prog-pop"/"pop-prog"); "Game" and "Within" "downtempo, slightly jazzy robotic soul" (`downtempo`, `soul`); Doin' It Right "a terrifically uplifting bit of electro-pop" (`electropop`). RS "prog-rocking, reverse-engineered dance music", "an electro-jazz-funk epic", "The jazz fusion gestures" (`prog`, `jazzfusion`, `funk`). Independent "odyssey through disco, rock, funk", Touch "musical theatre crooning" (`rock`, `musicaltheatre`). A.V. Club "a down-tempo soft-rock ballad", "the nine-minute electro-funk epic", "weighty electronica", Touch "electro-big-band-honky-tonk rhapsody", "the stargazing disco-funk" (`electrofunk`, `electronica`, `bigband`, `honkytonk`, `discofunk`, `ballad`). Pitchfork cover: "celebratory disco, moody funk, expansive psychedelia, new wave pop, G-funk, and even minimalist trap music" (`psychedelia`, `newwave`, `gfunk`, `trap`). PF Top 50: "psychedelia, prog-rock, disco, electro, indie-pop, house, and even the odd trap beat" (`electro`, `indiepop`, `house`). Guardian/NME "pop" moments (`pop`). Not used: RA "power-Italo", "yacht-ballad" (no exact tokens).
- energy 3; electronic 2: RS "built a record more or less wholly on live instrumentation"; RS secrets: drum machines on "just two of the album's thirteen tracks", electronics only a modular synth and vocoders. mood 3: celebratory Get Lucky vs Independent "a melancholic thread which runs through some of the album". theatrical 4: Pitchfork "Broadway-style pop bombast", RS "over-the-top concept LP", AVC "prog-rock bombast". experimental 3: Touch/Giorgio ambition vs RA "profoundly conservative". polish 5: Pitchfork "one of the best engineered records in many years", Guardian "lavish, meticulous arrangements", SOS ($1M, Studer/Ampex tape). tempo 3, groove 3: disco grooves but RS "not a record for the average Electric Daisy Carnival goer".
- voice `clear|soft|spoken|instrumental`: vocoded leads and guests (Pharrell "stylishly smooth R&B croon", AVC; Paul Williams "fragile voice", Guardian); Moroder "spoken vocals" (MusicBrainz); Motherboard and Contact are instrumental.
- instruments: MusicBrainz: guitar (Nile Rodgers, Paul Jackson Jr.), bass guitar (Nathan East, James Genus), drum set (JR Robinson, Omar Hakim), keyboard, electric piano (Chris Caswell), synthesizer (Daft Punk), lap/pedal steel guitar (Greg Leisz → `steelguitar`), percussion (Quinn), ondes Martenot (Thomas Bloch), piano (Chilly Gonzales). SOS: 25-piece orchestra, "percussion and timpani", "the brass section and the woodwind section". RA Within "twinkling Rhodes" (`electricpiano`). Vocoders (RS secrets "an arsenal of vintage vocoders"). Drum machine on two tracks (RS secrets). Guardian "distorted guitar" → `electricguitar`.
- production: SOS "Studer A827 running 24-track ATR tape", mixed to "three half-inch analogue machines… Ampex 102" (`analogtape`), recorded to both tape and Pro Tools (`protools`); early keyboards "Prophet 5, [Roland] Jupiter 6, Juno 106, Yamaha CS80" (`prophet5`, `jupiter6`, `juno106`, `yamahacs80`); Guardian "a Roland 303 synthesiser" on Giorgio (`tb303`); RS secrets "a massive, custom-built modular synthesizer" (`modularsynth`) and vocoders (`vocoder`); SOS live takes ("we'd often just let the tape roll", `liverecording`), "ready for overdubbing" (`overdubbing`), orchestra/strings/brass arranged by Chris Caswell (`stringarrangements`, `hornarrangements`), "parallel compression… LA2A or an 1176" (`compression`, `ua1176`).
- lyrics: RS "cyborgs striving to be human" (identity); Pitchfork Touch "love is the answer" (love); "an album about time and memory" (nostalgia); NME "a melancholy android discovers heartbreak" (heartbreak); Lose Yourself to Dance / Get Lucky "good times" (party, Billboard).
- producers: MusicBrainz co-producers Julian Casablancas (Instant Crush), Todd Edwards (Fragments of Time), DJ Falcon (Contact). Bangalter and de Homem-Christo dropped (artist's own).
- sounds_like: RS "orbiting somewhere between Pink Floyd's Dark Side of the Moon and Earth, Wind and Fire's That's the Way of the World" (whole album). One track each: PF Top 50 Fragments of Time "stellar Steely Dan karaoke"; Pitchfork Fragments "the sound of El Lay—the Eagles, Jackson Browne, Michael McDonald"; Instant Crush "sounds a lot like a great song by Daft Punk's pals Phoenix"; Touch "a Cluster-fied spacey intro"; Guardian "the Air-like Within"; Pitchfork cover Touch "recalling nothing less than the Beatles' 'A Day in the Life'" (Sgt. Pepper's). Excluded as collaborators: Chic (Nile Rodgers plays on it: Pitchfork "their version of a Chic song"), Giorgio Moroder, Paul Williams, The Strokes (Casablancas), Animal Collective "My Girls" (Panda Bear).
- influenced_by: co-producer Todd Edwards (RS video piece): "They wanted to pick up this West Coast vibe… going back to the time of Fleetwood Mac, and the Doobie Brothers and… the Eagles." Said about his sessions (Fragments of Time), so `[1/13]`. Eagles is in both columns (allowed). Not used: Paul Williams / Phantom of the Paradise and Moroder (collaborators); Prince's Lovesexy (only an idea for indexing the CD).
- landmark 1: Billboard 2013 "Random Access Memories is Daft Punk's magnum opus". (The Pitchfork rescore says it "doesn't feel pivotal in the same way that Discovery did"; noted, the landmark still stands on Billboard's word.)
- Reception 5/4/3: Grammy AOTY and Billboard 2010s #6 support importance 5; acclaim 4, not 5, because of the 6.8 rescore and mixed early reviews (Pitchfork "some listeners were underwhelmed"); mainstream 3: artist-led, anti-trend ("Electronic music right now is in its comfort zone", Bangalter).
- Legacy: none found (the Pitchfork rescore says "It didn't push pop music forward").

## goldfrapp-supernature: Goldfrapp, Supernature (2005), 11 tracks

Sources opened:
- Pitchfork, 7.0 https://pitchfork.com/reviews/albums/3506-supernature/
- Guardian, Dorian Lynskey https://www.theguardian.com/music/2005/aug/12/popandrock.shopping7
- Observer, Kitty Empire https://www.theguardian.com/music/2005/aug/14/popandrock.shopping1
- Observer, Polly Vernon https://www.theguardian.com/observer/omm/reviews/story/0,13875,1527822,00.html
- PopMatters https://www.popmatters.com/goldfrapp-supernature-2495923395.html
- NME http://www.nme.com/reviews/goldfrapp/7753
- Rolling Stone news "Goldfrapp unleash Supernature" https://www.rollingstone.com/music/music-news/goldfrapp-unleash-supernature-117812/
- Clash, "Supernature at 20" (interview with both members) https://www.clashmusic.com/features/its-just-mysterious-goldfrapps-supernature-at-20/
- The Big Takeover interview https://bigtakeover.com/interviews/interview-alison-goldfrapp
- Xtra https://xtramagazine.com/?p=22197 ; Gay City News https://gaycitynews.com/all-that-glitters-is-goldfrapp ; Village Voice https://www.villagevoice.com/the-great-synth-pop-crossover-that-never-was-gets-poppier/
- VICE 99 Greatest Dance Albums (#44) https://www.vice.com/en/article/the-99-greatest-dance-albums-of-all-time/
- Credits: MusicBrainz release fc8d82e1-bcd3-3f18-becf-1be166575604

Cells:
- genres: Guardian "Supernature's musical lodestars are glam rock and synth pop" (`glamrock`, `synthpop`); Guardian "electro-glam", Big Takeover "their newest electro-glam masterpiece" → `electroglam` (new); Pitchfork "the electro dance-pop full-length", "glammy electroid dancefloor pop", Ooh La La "Germanic electro-house action" and "some hard schaffel" → `dancepop`, `electro`, `electrohouse`, `schaffel` (new; PopMatters also names the "electronic 'schaffel' trend"); Gay City News "gives it a jolt of electro-pop" → `electropop`; VICE "evolution towards dance pop… Inspired by New Wave and disco" → `newwave`, `disco`; NME "Studio 54 School Of Disco"; Village Voice "the great crossover synth-pop band"; PopMatters two slow songs "Felt Mountain's classy trip hop" → `triphop`; Pitchfork "dots of old-model cabaret spook" → `cabaret` (tail); `pop` (Guardian "a proper, populist hit"). Not used: Wikipedia's "electroclash" (Guardian only says electroclash "tapped this seam three years ago", about others).
- energy 3, groove 3: Observer "Half of it speaks directly to the body, half floats around just above the ears". electronic 4: synth-led (Clash "the catalyst for the sound of this album was about the synths") with fuzz guitar, bass and drums. mood 3: Guardian "a brash, beautiful celebration of love and dancing" vs Pitchfork "witchy", Observer "bittersweet". theatrical 4: Observer (Vernon) "high drama", Kitty Empire "high camp". experimental 2: PopMatters "there are no surprises… the same formula as Black Cherry". polish 5: Pitchfork "curiously expensive-sounding", "production that sounds alternately like high-polish chrome", "immaculate synth arrangements". tempo 3.
- voice `soft|clear`: Village Voice "Alison Goldfrapp's breathy… vocals"; Rolling Stone news "crystal-clear pipes"; falsetto in production.
- instruments: Clash: synths, "experimenting with electric guitar, which was pushed through Gregory's new fuzz pedal", "the bass and the drums, and doing hand claps"; MusicBrainz: bass, guitar (Adrian Utley), drums, synthesizer; Observer "elegiac string sweeps", Let It Take U "a minor key piano"; PopMatters Satin Chic "fun little piano fills", Koko "a small hint of sitar".
- production: Clash: fuzz pedal "producing the gritty sound of 'Supernature'" (`distortion`); "the EDP Wasp… known for its rough-edged sound" (`edpwasp`, new); MusicBrainz "additional programming" (`programming`); Gay City News "the layered vocals, strings and drums" (`layeredvocals`); Observer "Goldfrapp's aerated falsetto" (`falsetto`).
- lyrics: Guardian "Few lines here don't sound like entendres", "a celebration of love and dancing", "ideas of metamorphosis and flight from the humdrum" → sensuality, love, party, identity.
- producers: empty (MusicBrainz credits "Goldfrapp" only).
- sounds_like (11 tracks): NME "the streaks of numerous '80s electro-heroes here (Gary Numan, New Order, Orchestral Manoeuvres In The Dark)" (whole album); Guardian "the synthesiser sounds on Koko and Beautiful are so familiar that if I were Gary Numan I would install new locks"; VICE "less Blondie, more Kylie" and Guardian "filed alongside Kylie" → Kylie Minogue; Gay City News critics "comparing 'Supernature' to late '70s Donna Summer tracks overlaid with electronica" → Donna Summer. T. Rex [2/11]: NME Ooh La La "T-Rex infatuated tones", PopMatters Ride a White Horse "An obvious nod to T. Rex's 'Ride a White Swan'". The Human League [2/11]: Vernon Lovely 2 C U "harnesses the jaded sexiness of the Human League", PopMatters Number 1 "a gorgeous, Human League style backdrop". [1/11]: Pitchfork Ooh La La "how awesome Peaches thinks she sounds"; Guardian Ooh La La "homage to Norman Greenbaum's Spirit in the Sky"; Kitty Empire Ooh La La "a saucy retread of Iggy Pop's 'The Passenger'" (Lust for Life); Vernon Lovely 2 C U "my favourite ever Girls Aloud song", Satin Chic "something Toyah might have co-written"; PopMatters Fly Me Away "veers into Ladytron territory", Satin Chic "reminiscent of early Elton John". Not used: Pitchfork's persona list (Kylie/PJ Harvey/Siouxsie/Beth Gibbons, about her role), Debbie Harry/Siouxsie voice comparisons, Kate Bush "vocal acrobatics", Prince (title only), Portishead (Adrian Utley plays on it: collaborator).
- influenced_by: Big Takeover, asked about "such a heavy glam influence on Supernature", Alison: "Um, MARC BOLAN I really liked. I think it's more just that era… also the production" → T. Rex; Clash: Gregory on glam: "I remember Alison playing me some Joan Jett. And I suddenly thought, 'Oh, I get it'", in the context of the album's glam rhythm → Joan Jett (medium: about his conversion to glam that shaped Ooh La La). Clash also: Alison "very influenced by glam rock". Not used: Clash's film composers (Morricone, Badalamenti, Legrand: about their first meeting, not this album).
- landmark 0: no source calls it their defining album (Clash: "masterly synth opus" is praise only).
- Reception 4/4/3.

## hotchip-madeinthedark: Hot Chip, Made in the Dark (2008), 13 tracks

Sources opened:
- Pitchfork, Mark Pytlik, 7.0 https://pitchfork.com/reviews/albums/11129-made-in-the-dark/
- Guardian, Alex Macpherson https://www.theguardian.com/music/2008/feb/01/electronicmusic.shopping
- Observer, Ben Thompson https://www.theguardian.com/music/2008/jan/20/electronicmusic.shopping
- Georgia Straight, interview with Felix Martin https://www.straight.com/article-141075/hot-chip-battles-boredom
- Sound On Sound, "Hot Chip" (2015, Goddard and Taylor on Made in the Dark recording) https://www.soundonsound.com/people/hot-chip
- The Fader (Alexis Taylor on Ready for the Floor) http://www.thefader.com/articles/2007/12/5/hot-chip-s-ready-for-floor-video-explained-kind-of
- Credits: MusicBrainz ff9943ab-651e-30c8-8a46-1711deb5c0d3; Discogs release 1223459 (producer Hot Chip; sax Emma Smith; Todd Rundgren sample)

Cells:
- genres: Guardian "folky balladry, frenetic rave-ups and rattling electropop" (`electropop`, `ballad`, `folk`); Pitchfork "the tender-hearted electro of 'Ready for the Floor'… electro-pop dressing", "perfect pop moments" (`electro`, `pop`); Straight "an agreeably contagious electro-pop number"; Observer Hold On "the metaphysical disco pick-me-up", Ready for the Floor "the infectious digital doo-wop", Bendable Poseable "the robotic rhumba", "the first slow jam" (`disco`, `doowop`, `rumba`, `slowjam`); Straight title track "a spare exercise in blue-eyed soul", We're Looking… "gospel-inflected backing vocals" (`blueeyedsoul`, `gospel`); Guardian Touch Too Much "a vaguely Krautrocky sustained synth organ riff" (`krautrock`, tail). Not used: Wikipedia's "indietronica, alternative dance" (no opened source); Straight "psychedelic dance pop" (one song, no exact token).
- energy 3, groove 3: Guardian "at their best when they… commit themselves to rampant dancefloor energy", but ballads (Guardian) and "undanceable rumples" (Pitchfork). electronic 4: synths and drum machines, some live band (SOS). mood 3: "feelgood" Touch Too Much (Pitchfork) vs ballads of "love and yearning". theatrical 2: Guardian Taylor "Too diffident", "fey quaver". experimental 3: Martin "quite experimental and quite out-there… quite weird and confusing"; Pitchfork "self-conscious interruptions… inscrutable non-sequiturs". polish 3: Pitchfork "show-offy sonics", but SOS live takes "sounded like a band doing a radio session". tempo 3.
- voice `soft`: Guardian "Taylor's fey quaver", Pitchfork "Alexis Taylor's balladesque vocal".
- instruments: Straight "the Elektron Machinedrum" (`drummachine`), "electric-guitar chording", "handclaps"; Pitchfork "characteristically clattering percussions", "keening synths"; Guardian "wind chimes" (`chimes`), "plenty of cowbells"; MusicBrainz/Discogs saxophone (Emma Smith, track 1).
- production: SOS Goddard "We recorded a lot of stuff live… essentially recordings of the band as it was live" (`liverecording`); Observer Out at the Pictures and Hold On "recorded by the whole band live in one take" (`onetake`); Straight: Martin's "weapon of choice, the Elektron Machinedrum" (`elektronmachinedrum`, new); Observer "the much-publicised Todd Rundgren vocal sample", Discogs credits the sample (`sampling`).
- lyrics `love`: Guardian "these rather lovely vignettes of love and yearning". Nothing else sourced.
- producers: empty (Discogs "Producer: Hot Chip").
- sounds_like: Observer "the clear blue water that once seemed to divide not only Steely Dan and Was Not Was, but also Kraftwerk and 10CC" (whole album). One track each: Observer Shake a Fist "as close to being the new Chemical Brothers" and its backbeat as the next stage after "Destiny's Child's 'Bootylicious'"; Wrestlers "the brutally wonky Bone, Thugs-N-Harmony tribute"; Straight One Pure Thought "will have Of Montreal fans reaching for their red-vinyl hot pants"; Guardian Ready for the Floor "exactly the kind of song you can imagine [Kylie] singing".
- influenced_by: empty. The Guardian's interview list (Destiny's Child, Will Oldham, German minimal techno, R Kelly, Fleetwood Mac, Prince) is about the band in general, not this album, and the critic adds "they sound nothing like any of them". Todd Rundgren ("Hot Chip's hero") is sampled on the album, so he is excluded.
- landmark 0. Confidence medium (thin credits, Metacritic/AllMusic not opened).
- Reception 3/3/2.

## avicii-true: Avicii, True (2013), 10 tracks

Sources opened:
- Rolling Stone review https://www.rollingstone.com/music/albumreviews/true-20130917
- Rolling Stone 50 Best Albums of 2013 https://www.rollingstone.com/music/music-lists/50-best-albums-of-2013-39776/
- PopMatters https://www.popmatters.com/avicii-true-2495724025.html
- Billboard (2013, Avicii interview) https://www.billboard.com/music/music-news/avicii-to-release-debut-album-true-in-september-exclusive-1567857/
- Billboard best dance albums of the 2010s (#7) https://www.billboard.com/music/music-news/best-dance-albums-decade-2010s-top-40-8544805/
- Billboard via Yahoo, "True at 10" (Per Sundin interview) https://www.yahoo.com/entertainment/avicii-true-10-disastrous-debut-215110619.html
- Yahoo "Flashback interview" (Avicii Q&A) https://www.yahoo.com/news/flashback-interview-avicii-found-true-calling-182329116.html
- AP via KSL https://www.ksl.com/article/26929177/avicii-fuses-electronic-music-country-on-debut
- Complex (Fuse interview summary) https://www.complex.com/music/2013/06/avicii-saystrue-album-is-folk
- Dancing Astronaut (Ultra 2013) http://www.dancingastronaut.com/2013/03/avicii-rolls-the-dice-at-ultra-2013-too-advanced-for-dance/
- IZM (Korean review) https://www.izm.co.kr/posts?id=25890
- Credits: MusicBrainz 6226c435-90f5-4ada-82fa-7a891d8368fc; Discogs 4920449

Cells:
- genres: RS "a set of folk, soul and addictive house beats", "two funky disco jams" (`folk`, `soul`, `house`, `disco`); RS 50 "Mumford & Sons in my EDM… combining vintage roots music and energetic house beats" (`edm`); Billboard 2010s "Sounds of bluegrass, soul, and even country music" (`bluegrass`, `country`); AP "his electronic-country fusion" (`electronic`); Yahoo "many of its tracks almost sounded country, albeit with an R&B edge" (`rnb`); PopMatters Lay Me Down "the uptempo, jazz infused song" (`jazz`, tail). Note: Avicii himself "prefers the term folk over country" (AP), so folk ranks above country.
- energy 4, groove 4: RS 50 "it never lets up", "energetic house beats"; Avicii (AP) "put a 4/4 beat under it". mood 4: RS 50 "an exuberant cross-cultural good time"; Avicii (Dancing Astronaut) "melodies and positive energy". electronic 3: acoustic guitar, banjo and live players over synths (Dancing Astronaut "acoustic instruments"; AP "add synths"). theatrical 3: RS "banging diva vocals", "grand Appalachian stomper". experimental 2: IZM calls such fusion a cliché, though bold for EDM in 2013. polish 4: big-room production with session players; no source describes the mix in detail (lowest-confidence scale). tempo 4.
- voice `powerful|clear`: RS "banging diva vocals from Audra Mae and Adam Lambert"; PopMatters "the sultry tones of R&B singer Aloe Blacc".
- instruments: Avicii (Yahoo) "The sound of the acoustics is just so pure, especially the guitar" (`acousticguitar`); Complex "the use of banjo" (`banjo`); MusicBrainz guitar (Mike Einziger, Nile Rodgers), keyboard (Peter Dyer); AP "add synths" (`synth`).
- production: MusicBrainz talkbox (Peter Dyer, track 7) → `talkbox`.
- lyrics: empty (no opened source describes the themes).
- producers: MusicBrainz co-producer Nile Rodgers (Lay Me Down). Tim Bergling dropped (artist); Arash Pournouri is executive producer (dropped).
- sounds_like: RS "this Mumford & Synths sound" and RS 50 "you got Mumford & Sons in my EDM" (whole album) → Mumford & Sons; RS "much more than a page from Moby's Play book" → Moby (Play). Not used: PopMatters' Lana Del Rey (about MØ's voice) and David Guetta (career comparison).
- influenced_by: empty. Avicii names genres only ("bluegrass in particular has always captured my attention", Yahoo; "true… to my own influences", Billboard), no artists.
- landmark 1: IZM: "어느 것도 이 '개척 앨범'을 대체할 수 없다. 앞으로 나올 그의 결과물들도 넘어서기 힘겨워 보일 정도다" (nothing can replace this "pioneering album"; his later work will struggle to surpass it); Billboard 2010s #7. Medium.
- Reception 5/3/3: importance 5 (debut album; "Wake Me Up" RIAA's highest-certified dance song, Billboard). Acclaim 3: year-end and decade lists but no Metacritic/AllMusic opened, mixed IZM. Mainstream 3, not 4: Sundin says Tim refused the dance-industry topliner-testing routine ("I want to be an artist… I want to do an album"), and the album went against the EDM grain (Ultra backlash). It is still built around radio singles with guest singers (Sundin: "there were so many singles on it"), so 4 is defensible: owner's call.

---

## New tokens

Genres:
- `punkfunk`: Guardian (Lynskey) on Sound of Silver, "dependably thrilling punk-funk". The list has `funkpunk`; not mapped, per the exact-name rule (merge them if you treat them as the same).
- `discopunk`: NME on Sound of Silver, "the original disco-punk explosion".
- `nowave`: Pitchfork on Sound of Silver's title track, "no-wave groove".
- `electroglam`: Guardian (Lynskey) and The Big Takeover on Supernature, "electro-glam".
- `schaffel`: Pitchfork on Supernature ("some hard schaffel"; PopMatters: "the… electronic 'schaffel' trend in Germany").

Production:
- `edpwasp`: EDP Wasp synth (Clash, Supernature).
- `elektronmachinedrum`: Elektron Machinedrum (Georgia Straight, Made in the Dark).

## Uncertain

- LCD producers `The DFA` (Murphy's own team with Goldsworthy): keep or drop.
- RAM influenced_by rests on co-producer Todd Edwards relaying the duo's brief (one track).
- Supernature influenced_by Joan Jett: Gregory's account of how he came round to glam, not a direct "this album was influenced by" statement.
- True polish and acclaim, and Made in the Dark acclaim, without Metacritic/AllMusic.
- Daft Punk producer convention differs from the existing daftpunk.csv rows (see the top of these notes).

