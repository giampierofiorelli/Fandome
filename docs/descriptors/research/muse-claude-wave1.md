# Claude research notes (Oct 2026, wave 1)

# Wave 1 / C: evidence notes

Albums: radiohead-kida, radiohead-inrainbows, franz-franzferdinand, muse-absolution, florence-lungs.
Titles, years and artist names checked in `src/data/catalog.ts` (artist "Florence + The Machine"). Radiohead scene string copied from `docs/descriptors/radiohead.csv`.
Every page below was opened (curl or WebFetch) during this session. Quotes are verbatim from the pages. Wikipedia was used only to find original sources, and is cited nowhere.

**Couldn't open:** AllMusic, Metacritic, AlbumOfTheYear, Spin, Slant and Treble (all 403); archive.org (blocked); followmearound.com (gone); the Pitchfork reviews of Absolution and Lungs (wrong IDs, 404); the Guardian reviews of In Rainbows and Lungs (404); the Washington Post. The Metacritic scores and RIAA/BPI certifications are therefore **not** used.

## New tokens
- genre `technometal`: PopMatters (19 May 2004) on Absolution: "*The Matrix*-era techno-metal"; PopMatters (21 Jun 2004): "Rob Zombie-style techno metal" ("Hysteria").
- genre `speedmetal`: PopMatters (21 Jun 2004): "The use of speed metal guitar to open 'Stockholm Syndrome'" (one track, so it sits in the tail).
- instrument `ondesmartenot` (Kid A): BBC Radio 3 *Mixing It*, 20 Jan 2001 (Colin Greenwood): "he sang through a vocoder, and the notes were triggered by the Ondes Martenot". Drowned in Sound 2009 also names "the Ondes Martenot".

---

## radiohead-kida (Kid A, 2000)

Sources:
- P = Pitchfork, Brent DiCrescenzo, 2 Oct 2000, score 10 (from the page JSON "rating":10). https://pitchfork.com/reviews/albums/6656-kid-a/
- AV = The A.V. Club, Joshua Klein, 2 Oct 2000. https://www.avclub.com/radiohead-kid-a-1798192491
- RS = Rolling Stone, David Fricke, 12 Oct 2000. https://www.rollingstone.com/music/music-album-reviews/kid-a-252683/
- NPR = Ken Tucker, Fresh Air, 13 Oct 2000. https://www.npr.org/2000/10/13/1112430/kid-a-by-radiohead
- G = The Guardian, Friday Review, 22 Sep 2000 (Yorke interview). https://www.theguardian.com/friday_review/story/0,,371289,00.html
- NME00 = NME news, 1 Nov 2000. https://www.nme.com/news/music/radiohead-393-1309133
- BBC3 = BBC Radio 3 *Mixing It*, 20 Jan 2001, with Jonny and Colin Greenwood. Full transcript on the fan archive citizeninsane.eu, which links the BBC page it came from. https://citizeninsane.eu/media/uk/bbc/04/i11a_2001-01-20_bbcrad3.html (excerpts also at https://citizeninsane.eu/sessions/04/kida_influences.html and https://citizeninsane.eu/interconnex/charlesmingus.html)
- Q = The Quietus, 28 Sep 2020, "Talking Heads Gone Bleep Techno: Radiohead's Kid A Turns 20". https://thequietus.com/articles/28987-kid-a-radiohead-review-anniversary
- DiS = Drowned in Sound, Alexander Tudor, 27 Mar 2009. https://drownedinsound.com/in_depth/4136425-radioheads-kid-a-the-dis-re-appraisal
- VD = The Vinyl District, Michael H. Little, 7 Dec 2020. https://thevinyldistrict.com/storefront/graded-on-a-curve-radiohead-kid-a
- NME15 = NME blog, April Clare Welsh, 2 Oct 2015. https://www.nme.com/blogs/nme-blogs/radioheads-kid-a-turns-15-the-albums-tracks-ranked-in-order-of-greatness-1188414
- PM = PopMatters, Amnesiac review, 2001. https://www.popmatters.com/010511-radiohead-2496101503.html
- L = Louder, Niall Doherty. https://www.loudersound.com/bands-artists/from-problem-child-to-golden-child-the-story-behind-every-song-on-radioheads-kid-a
- RSmk = Rolling Stone, Simon Vozick-Levinson, "The making of In Rainbows". https://www.rollingstone.com/music/music-news/the-making-of-radioheads-in-rainbows-187534/
- RS500 = Rolling Stone podcast page, 2020. https://www.rollingstone.com/music/music-news/radiohead-kid-a-album-thom-yorke-500-greatest-albums-1071552/

Evidence by column:
- **genres**
  - electronica: L "cut-up electronica"; DiS "an unprecedentedly bold move into electronica".
  - postrock: NME15 "the post-rock masterpiece".
  - artpop: RS "hermetic electronics and art-pop frost".
  - electrorock: PM "a more challenging brand of electro-rock".
  - artrock: RSmk "the art-rock advances of ... Kid A"; AV "art-rock majesty".
  - ambient: L "ambient minimalism".
  - krautrock: L "heady Krautrock grooves".
  - experimental: NPR headline "An Experimental Departure".
  - Track-level tail: techno (RS "'Idioteque' is silvery techno"; L "techno menace"), jazz (L "jazz-tinged skronk-rock"), folkrock (RS, "How to Disappear Completely": "cold-blue folk rock"), funk (RS "The crusty funk of 'The National Anthem'").
- **scales**
  - energy 2: mostly hushed. RS: "Power chords are sparse"; one shrill peak ("The National Anthem").
  - electronic 4: AV "hypnotic loops of distorted beats and hissing, humming synths bravely replacing the usual recipe of drums and guitar". Not 5, because BBC3 has Jonny: "There's more guitar on this record than people realise".
  - mood 1: RS "airless, entombed in chrome"; P "a clouded brain trying to recall an alien abduction".
  - theatrical 2: inward, mumbled delivery (RS: "his voice is going the wrong way ... back into his head").
  - experimental 4: AV "Largely abandoning any elements of rock music"; NPR "anti-rock".
  - polish 4: dense studio construction (Pro Tools, samplers; DiS).
  - tempo 2.
  - groove 1: RS "linear grooves even scarcer".
- **voice** soft|clear: RS "watery croon", "particle-beam tenor"; P "trademark falsetto". The voice is often processed.
- **instruments**
  - ondesmartenot: see New tokens.
  - electricpiano: RS "An electric piano marches in arrhythmic circles"; BBC3 "Thom would play the Rhodes".
  - synth: RS, AV.
  - drummachine: BBC3, Jonny: "I built a drum machine ... out of old components".
  - sampler: DiS "samplers, Kaos pads, Pro-Tools"; BBC3.
  - organ: P "Pulsing organs"; Q "warm organ tones".
  - guitar and electricguitar: BBC3 ("Treefingers" is "just one guitar", from Ed O'Brien's guitar loops).
  - acousticguitar: Q, "How to Disappear Completely" "starts with acoustic guitar".
  - bass: P "Mean, fuzzy bass"; DiS "fat, grinding bass".
  - drums.
  - strings and orchestra: BBC3, strings played by an orchestra at Dorchester Abbey, led by John Lubbock.
  - brass: BBC3, Jonny scored a brass section for "The National Anthem".
  - harmonium and pumporgan: BBC3 "this old harmonium pedal organ"; DiS "a pump organ".
  - vocoder: BBC3.
  - Harp is left out on purpose: BBC3 says the harps on "Motion Picture Soundtrack" were samples ("we don't have any real harps").
- **production**
  - vocoder: BBC3.
  - processedguitar: BBC3. Asked if the guitar went "through lots of effects processors, or to trigger samples", Jonny says "That's pretty much how it happened".
  - sampling: BBC3, the Paul Lansky sample on "Idioteque".
  - vocalchops and backmasking: Q "vocal cut ups, reverses".
  - stringarrangements and hornarrangements: BBC3, Jonny "scored the strings" and "scored out the rough tune" for the brass.
  - protools: DiS.
  - falsetto: P.
- **lyrics** social|identity: RS "a heated argument about conformity, individuality and the messy consequences of playing God"; AV "man losing his battle with technology".
- **producers**: Nigel Godrich. G: "Kid A's producer Nigel Godrich". The band's own co-production credit is dropped.
- **sounds_like**
  - Aphex Twin (whole album): AV "the disc ebbs and flows like Aphex Twin".
  - Pink Floyd and Brian Eno (whole album): VD "its Pink Floyd/Brian Eno vibe".
  - Talking Heads (Remain in Light) (whole album): Q "it feels like Remain In Light, goes bleep techno".
  - Björk (Homogenic) [1/10]: P "'Idioteque' clicks and thuds like Aphex Twin and Bjork's Homogenic".
  - Autechre [1/10]: NME15, "Idioteque" "gives Autechre a run for his money".
  - David Bowie (Low) [1/10]: P, "Treefingers" "similar in sound and intent to Side B of Bowie and Eno's Low".
  - Kraftwerk [1/10]: RS "squashed into a Kraftwerk-ian bleat in the title song".
  - The Beatles (The Beatles) [1/10]: P, "Motion Picture Soundtrack" "brings to mind The White Album".
  - R.E.M. (Document) [1/10]: RS, "Optimistic" has "a catchy, glancing echo of R.E.M.'s 'The One I Love'" (on *Document*).
  - Left out: P's Coltrane "Ole" comparison, because it is about a live song ("Egyptian Song") that isn't on the album.
- **influenced_by**
  - Aphex Twin, Autechre: G "Yorke's embracing of the Warp back catalogue - Autechre, Aphex Twin" in making Kid A's electronic sound. BBC3, Colin: Thom "was very into the whole Warp records".
  - Talking Heads (Remain in Light): NME00, Yorke: "'Remain In Light' by Talking Heads was 'our big record' while Radiohead recorded 'Kid A', citing it as a 'massive reference point'".
  - Miles Davis (Bitches Brew) and (In a Silent Way): BBC3, Jonny: "We're trying to be Bitches Brew by recording lots of electric pianos", and "parts of In A Silent Way ... atmospheres are something we try and copy".
  - Can, Faust: BBC3, Jonny: "that's something we aspire to with bands like Can ... and Faust even".
  - Olivier Messiaen: BBC3. Asked whether Messiaen was an influence (the ondes Martenot), Jonny tells of his teenage fascination and names *Turangalîla*.
  - Serge Gainsbourg (Histoire de Melody Nelson): one of the "inspirational pieces of music" the Greenwoods brought to BBC3. Jonny: "one of the best records"; Colin: "the strings as well". (medium)
  - Charles Mingus [1/10]: BBC3, Jonny: "by the end it should turn into a Charlie Mingus track ... like the Blues & Roots era" ("The National Anthem").
  - Alice Coltrane (Ptah, the El Daoud) [1/10]: BBC3. "Blue Nile" from *Ptah the El Daoud* is played; the host links it to "Motion Picture Soundtrack"; Jonny: "her records have a depth to them that we try to emulate".
  - Tom Waits [1/10]: BBC3, Jonny: "Motion Picture Soundtrack" was "influenced by Tom Waits".
  - Not added: Penderecki, Björk and Mo'Wax. No original source for these could be opened.
- **landmark** 1: P "an album which completely obliterates how albums, and Radiohead themselves, will be considered"; RS500 No. 20.
- **Reception**
  - importance 5.
  - acclaim 5: P 10.0; RS 500 (2020) No. 20.
  - mainstream 2: alternative/experimental turn with no singles or videos (G). A popular auteur record leaning far from radio form, so below OK Computer's 3.
- **Legacy** 5: L quote (a "wave of artists who followed and were inspired": The 1975, The xx, Bon Iver, Arcade Fire ...).
- Uncertain: the RS 500 rank comes from Rolling Stone's own podcast page ("landed at Number 20"), not the list page, which is paginated.

## radiohead-inrainbows (In Rainbows, 2007)

Sources:
- P = Pitchfork, Mark Pytlik, 15 Oct 2007, rating 9.3 (page JSON). https://pitchfork.com/reviews/albums/10785-in-rainbows/
- RS = Rolling Stone, Rob Sheffield, 2007. https://www.rollingstone.com/music/music-album-reviews/in-rainbows-255437/
- SG = Stereogum, Chris DeVille, "In Rainbows Turns 10". https://stereogum.com/1964512/in-rainbows-turns-10/reviews/the-anniversary
- SK = The Skinny, Ally Brown. https://www.theskinny.co.uk/music/reviews/albums/radiohead-in-rainbows
- CMG = Cokemachineglow, Alan Baban, 5 Nov 2007. https://cokemachineglow.com/records/radiohead-inrainbows-2007/
- RTE = RTÉ review, 25 Oct 2007. https://www.rte.ie/entertainment/music-reviews/2007/1025/449537-radiohead
- OBS = The Observer, Craig McLean, 9 Dec 2007 (fan Q&A). https://www.theguardian.com/music/2007/dec/09/popandrock.radiohead1
- i = The i Paper (Jonny Greenwood). https://inews.co.uk/culture/music/jonny-greenwood-radiohead-lazy-guitar-player-4772567
- RSmk = Rolling Stone, Simon Vozick-Levinson, making-of. https://www.rollingstone.com/music/music-news/the-making-of-radioheads-in-rainbows-187534/

Evidence by column:
- **genres**
  - rock: RS "typically hard-rocking Radiohead ... All of it rocks"; SG "it comes across as the work of a rock band ... a guitar-driven rock combo".
  - indierock: SK "melds synths, loops, trips and beats into mid-tempo indie-rock".
  - pop: CMG "So this is a pop record"; SG "their poppiest ... collection of songs in more than a decade".
  - Track-level tail, all from SG: torchsong ("the fatalistic torch song 'Nude'"), powerballad ("the clattering power ballad 'Reckoner'"), slowjam ("'House Of Cards,' Radiohead's idea of a sexy slow jam").
  - Not used: art rock, experimental rock and electronica. The sources for these (Washington Post, PopMatters, Digital Trends) couldn't be opened.
- **scales**
  - energy 3: mix of rave-ups and ballads (SG).
  - electronic 2: SG "nudged electronics into the background"; P "the album's only dip into Kid A-style electronics".
  - mood 2: SG "bittersweet", "unprecedented warmth", but also death themes.
  - theatrical 2.
  - experimental 2: CMG "The experiments are over; here is pop".
  - polish 4: SK "sumptuous, enveloping production".
  - tempo 3.
  - groove 2.
- **voice** soft|clear: RS "his voice has an R&B lilt"; P "slinky, elongated falsetto".
- **instruments**
  - guitars: SG; P mentions fingerpicked acoustic guitars on "Faust Arp".
  - bass and drums: P on the rhythm section.
  - piano, synth, glockenspiel: P on "All I Need": "glockenspiel, synths, pianos".
  - strings: P "swooping strings".
  - percussion: RS "brushes and woodblocks", "finger-cymbal solo".
- **production**
  - heavyreverb: P "dollops of reverb"; SK "guitars soaked in reverb".
  - stringarrangements: SG "Jonny Greenwood's orchestral arrangements".
  - falsetto: P.
  - feedback: P "waves of reverbed feedback".
- **lyrics** love|introspection|sensuality: SG "And then there are the love songs"; OBS, Yorke: "the fucking panic of realising you're going to die!"; RS "erotic pleading".
- **producers**: Nigel Godrich. RSmk: "the band scrapped their work to date and called Godrich".
- **sounds_like**
  - The Beatles [1/10]: P, "Faust Arp" "begs comparisons to some of the Beatles' sweetest two-minute interludes".
  - R.E.M. [1/10]: P, "House of Cards" "a slow, R.E.M.-shaped ballad".
  - Gary Numan [2/10]: RS "the Gary Numan synth-nightmare drones of 'All I Need' and 'House of Cards'".
  - Dusty Springfield [1/10] and The Byrds (The Notorious Byrd Brothers) [1/10]: RS, "House of Cards" "closely resembling Dusty Springfield's (and the Byrds') 'Going Back'". The Byrds' version is on *The Notorious Byrd Brothers*; Dusty's was a single, so no album is given for her.
- **influenced_by**: Steve Reich [1/10]. i: "Greenwood has cited Reich as an influence on the phasing guitars in Radiohead's songs 'Let Down' and 'Weird Fishes/Arpeggi'".
  - Not added (no original source opened): Peaches (handclaps on "15 Step"), Neu! and Wolfmother ("Bodysnatchers"), Surgeon (an abandoned version of "Videotape"), and the Transformer/Revolver/Hunky Dory remark.
- **landmark** 0: no opened source calls it the defining album. SG: it "deserves to be in the conversation" for their finest work.
- **Reception**
  - importance 4: release model and comeback (RSmk, RTE).
  - acclaim 5: P 9.3; RS "No wasted moments, no weak tracks"; SG.
  - mainstream 3: approachable, band-made (SG, CMG).
- **Legacy**: no row (no source on later influence opened).

## franz-franzferdinand (Franz Ferdinand, 2004)

Sources:
- P = Pitchfork, Brent DiCrescenzo, 8 Mar 2004, rating 9.1. https://pitchfork.com/reviews/albums/3279-franz-ferdinand/
- P200 = Pitchfork, Top 200 Albums of the 2000s, No. 101 (Joshua Klein). https://pitchfork.com/features/staff-lists/7707-the-top-200-albums-of-the-2000s-150-101/5/
- SOS = Sound on Sound, "Recording Franz Ferdinand" (Tore Johansson). https://www.soundonsound.com/people/recording-franz-ferdinand
- G = The Guardian, Alexis Petridis, 29 Jan 2004. https://www.theguardian.com/music/2004/jan/30/popandrock.shopping
- BBC = BBC Music, Simon Fernand, 2004. https://www.bbc.co.uk/music/reviews/bx8c
- RS = Rolling Stone, Barry Walters, 7 Apr 2004. https://www.rollingstone.com/music/music-album-reviews/franz-ferdinand-251212/
- NME = NME, 9 Feb 2024, quoting its 9/10 review and calling the album "an indie classic". https://www.nme.com/news/music/alex-kapranos-celebrates-the-20th-anniversary-of-franz-ferdinands-debut-album-dont-be-afraid-to-dance-3585215
- RIFF = RIFF Magazine, Kyle Kohner, 2018. https://riffmagazine.com/album-reviews/franz-ferdinand-always-ascending/

Evidence by column:
- **genres**
  - postpunkrevival: RIFF "From its 2004 debut ... no band other than The Strokes and Interpol epitomized the post-punk revival".
  - indierock: G "standard post-Strokes indie rock".
  - dancerock: RS "catchy but decidedly raw dance rock".
  - funkpunk: P200 "tightly wound and sneakily clever funk-punk numbers".
  - britpop: RS "draws from beloved Brit pop and post-punk bands"; P "stubbornly nostalgic for the decade-gone heights of Britpop".
  - postpunk: RS.
  - funk and punk: BBC "funky, punky, suave cool".
  - disco: G "disco-influenced drums"; P "squiggly guitar disco" ("Take Me Out", the lead hit).
  - Not used: dance-punk. P explicitly rejects it ("I could erroneously throw Franz Ferdinand in with the recent dance-punk ... 'scene'").
- **scales**
  - energy 4.
  - electronic 1: SOS, keyboard parts mostly muted ("I had to mute most of the keyboard parts").
  - mood 4: P "a celebratory LP".
  - theatrical 3.
  - experimental 2: tempo shifts (G "intriguing shifts in tempo").
  - polish 3: RS "decidedly raw"; SOS, the band asked for it "more thrashy".
  - tempo 4: P "The pace never lets up".
  - groove 4: NME "packed with tunes that will make anyone with legs dance".
- **voice** clear|soft: G "languorous crooning"; BBC "wonderful harmonised vocals"; SOS "a very, very hard, compressed, distorted sound".
- **instruments**: SOS, plus P and BBC.
  - Guitars: Kapranos and McCarthy on a "Selmer amp"; P "dueling-guitars-with-occasional-keyboard".
  - bass: "Fender Bassman".
  - drums.
  - acousticguitar and piano: SOS "an acoustic guitar and an electric guitar and a piano"; P "gentle acoustic strums".
  - keyboards: BBC "keyboard sound so cheesy".
  - melodica: P "Damon Albarn's beloved melodica makes an appearance" ("40'").
- **production**
  - liverecording: SOS "record as much of the basic tracks as possible live".
  - analogtape: "MCI JH16 reel-to-reel".
  - protools: "all the overdubbing was done in Pro Tools".
  - overdubbing.
  - compression and ua1176: "first the Neve compressor ... and then the Universal Audio 1176, so we had double compression".
  - distortedvocals.
  - delay: "I put almost all the instruments through a couple of echoes" ("Take Me Out").
  - flanging: P "Flashy flanger-flecked guitar".
- **lyrics** love|sensuality|irony: RS "pithy quips of seduction and abandonment"; G "furtive sexual goings-on", "sly humour"; P "satire, wit, and unabashed romance".
- **producers**: Tore Johansson (SOS). The band's own credit on two tracks is dropped.
- **sounds_like**
  - Blur (Parklife): P "Each song ... swaggered ... like Alex James' effortless bounce on Blur's 'Girls & Boys'". "40'" is also likened to "Parklife's Side B".
  - Squeeze and The Necessaries: P "revive the sounds of the John Cale-era Squeeze or the New York never-weres The Necessaries".
  - Nile Rodgers: BBC "Funky guitar playing that would make Nile Rodgers proud".
  - Pixies [1/11]: P "Pixies-like pop" ("Take Me Out").
  - Blondie (Eat to the Beat) [2/11]: BBC, "Come on Home" and "Auf Achse" "could be distantly related to Blondie's 'Atomic'" (on *Eat to the Beat*).
  - Heatwave (Too Hot to Handle) [1/11]: BBC, "Tell Her Tonight" "sounds a bit like 'Boogie Nights'".
  - Left out: Suede (P compares their clothes, not their sound) and The Strokes (BBC says they "don't really sound like The Strokes").
- **influenced_by**
  - Orange Juice, Josef K: SOS "scratchy early-'80s guitar bands like Orange Juice and Josef K that the group list as their main influences" (G also notes "a clear interest" in them).
  - Talking Heads, Devo: producer Johansson in SOS: "Nick has a tendency to play those kind of funky Talking Heads/Devo parts". This is a producer's statement, so medium weight.
- **landmark** 1: NME "an indie classic"; Mercury Prize (NME).
- **Reception**
  - importance 5: debut and breakthrough.
  - acclaim 5: P 9.1; P200 No. 101; NME 9/10; BBC "a masterpiece".
  - mainstream 3: band-led, a "surprise indie-to-mainstream hit" (SOS); G "still recognises the importance of writing great pop songs".
- **Legacy**: none (no influence source opened).

## muse-absolution (Absolution, 2003)

Sources:
- SOS = Sound on Sound, Rich Costey interview (Richard Buskin). https://www.soundonsound.com/people/rich-costey-producer
- NME13 = NME blog, Mark Beaumont, 20 Sep 2013. https://www.nme.com/blogs/nme-blogs/10-geeky-facts-about-muses-absolution-10-years-on-760228
- NME23 = NME, Andrew Trendell, 15 Sep 2023. https://www.nme.com/news/music/muse-announce-absolution-20th-anniversary-deluxe-reissue-vinyl-artwork-tracklist-buy-3498650
- RS = Rolling Stone, Rob Kemp, 2004. https://www.rollingstone.com/music/music-album-reviews/absolution-189574/
- PM1 = PopMatters, 19 May 2004. https://www.popmatters.com/muse-absolution-2495992976.html
- PM2 = PopMatters, 21 Jun 2004. https://popmatters.com/muse-absolution2-2495982220.html
- DB = Drawer B, Eric Greenwood, 14 Jul 2004. https://archive.drawerb.com/2004/07/14/muse-absolution-warner-bros/index.html

Evidence by column:
- **genres**
  - hardrock: PM1 "industrial-influenced hard rock", "operatic hard rock".
  - artrock: PM1 "synonymous with classic art rock".
  - prog: RS "prog-rock-style instrumental virtuosity"; PM1 "progressive '70s bombast".
  - alternativerock: PM1 "nothing new for Muse — or alternative rock in general". This is the weakest genre evidence.
  - arenarock, grunge, psychedelia, punk: SOS "strains of grunge, punk, psychedelia and arena rock. All of these elements are prevalent on Muse's new album, Absolution".
  - industrial: PM1 "industrial noise".
  - technometal and speedmetal: see New tokens.
- **scales**
  - energy 4.
  - electronic 2: synths and sequencer, but guitar and piano led.
  - mood 1: apocalyptic (NME23 "apocalypse-based concept").
  - theatrical 5: PM1 "operatic", "bombast and pretentiousness"; DB "his theatrical, oft-clichéd lines".
  - experimental 2.
  - polish 4: NME23 "more polished and direct sound"; DB "slick".
  - tempo 3.
  - groove 1: PM1 "'80s-style dance beats" on two songs only.
- **voice** powerful|clear: DB "Thom Yorke's malleable wail", "intensity and vigor"; PM2 falsetto.
- **instruments**
  - piano and electricpiano: SOS, the Yamaha "CP80, which is an old Yamaha electric piano".
  - preparedpiano: SOS "I laid nails, guitar strings and all sorts of metal objects on top of the piano strings".
  - mandolin and strings: SOS "'Blackout', which utilised mandolin and real strings".
  - orchestra: NME13, Paul Reeve on recording "with a full orchestra".
  - synth: SOS "ambient passes of various synths".
  - sequencer: PM2 "the sequencer building".
  - footstomps: PM2 "A gymnasium full of stomping feet"; NME13 "gravel (on which the band stomped for the intro)".
  - guitars, bass, drums: SOS.
- **production**
  - liverecording and overdubbing: SOS (live basic tracks, then overdubs).
  - roomambience: SOS "I pretty much just used whatever ambience was to be found on the room mics".
  - delay: SOS "Echoplex".
  - distortion: SOS "the Whammy pedal". DB "guitars that sound like futuristic buzzsaws".
  - falsetto: PM2.
  - protools: SOS "He typically treats Pro Tools as if it were a tape machine".
  - Not used: Kyma, and the vocoded Nord guitar. Not in the pages opened.
- **lyrics** political|social|love|heartbreak: NME13 "his biggest sociopolitical statement yet", Iraq War; PM1 "the upheaval of personal relationships as the world is coming to an end"; PM2, "Stockholm Syndrome" as a romantic hostage story.
- **producers**: Rich Costey|John Cornfield|Paul Reeve. SOS: "already recorded several tracks ... with John Cornfield and Paul Reed". NME13 names "producer Paul Reeve", so Reeve is the spelling used.
- **sounds_like**
  - Radiohead (The Bends): RS "adopting Radiohead's bombastic Bends approach".
  - Radiohead (whole album): DB "a glorious bizarro universe, where Radiohead still worships the guitar".
  - Styx, Boston, Asia: PM2 "Their songs are filled with hooks in the tradition of ... Styx, Boston, and Asia".
  - Radiohead (OK Computer) [2/14]: PM1, "Falling Away with You" and "Blackout" "compare to those of The Bends – or OK Computer-era Radiohead".
  - Jeff Buckley (Grace) [1/14] and Radiohead (Kid A) [1/14]: PM2, "Apocalypse Please" "sounds as much like a track off of Jeff Buckley's Grace as it does Kid A".
  - Queen (News of the World) [1/14]: PM2 "think Queen's 'We Will Rock You'" (intro).
  - Rob Zombie [1/14]: PM2, "Hysteria".
  - Liberace [1/14]: RS "almost Liberace-esque piano pounding" ("Apocalypse Please").
  - RS also compares the vocals to Thom Yorke and Jeff Buckley on the quiet songs. Not added separately.
- **influenced_by**: Rage Against the Machine|Audioslave. Producer Costey in SOS: "the guys had heard some of my mixes for Rage Against The Machine and Audioslave and they were quite keen to get a sound that was just as big and assertive".
  - Not used: Rachmaninov. NME13 only reports a "pseudo-Rachmaninov bit" played at a string session, not on a specific track.
- **landmark** 1: NME23 "Their seminal third album", their first UK No. 1, "graduate to arena-level".
- **Reception**
  - importance 5.
  - acclaim 4: critics split. UK praise (NME23) against a lukewarm RS and mixed PopMatters; Metacritic couldn't be opened.
  - mainstream 3: band-led arena rock.
- **Legacy**: none.
- Confidence medium: the US reviews disagree.

## florence-lungs (Lungs, 2009)

Sources:
- BBC = BBC Music, Sophie Bruce, 2009. https://www.bbc.co.uk/music/reviews/9h4h
- CL = Clash, Mike Diver. https://www.clashmusic.com/reviews/florence-and-the-machine-lungs
- NPR = NPR All Things Considered, 7 Apr 2010. https://www.npr.org/2010/04/07/125640737/florence-and-the-machine-from-delicate-to-fierce
- COS = Consequence, Alex Young, 2009. https://feed.consequence.net/?p=17340
- SPB = Scene Point Blank review. https://www.scenepointblank.com/reviews/florence-and-the-machine/lungs
- RTE = RTÉ, 27 Jul 2009. https://www.rte.ie/entertainment/music-reviews/2009/0727/449651-florenceandthemachine
- DiS = Drowned in Sound, Joe Goggins, 1 Jun 2015 (review of HBHBHB, looking back at Lungs). http://drownedinsound.com/releases/18827/reviews/4149048
- WFUV = WFUV, 2009. https://wfuv.org/content/florence-and-the-machine-words-and-music-2009
- IT = Irish Times, Lauren Murphy, 28 Oct 2011. https://www.irishtimes.com/culture/music/rock-pop/behind-the-machine-1.633355

Evidence by column:
- **genres**
  - indiepop: DiS "a pretty good first stab at an indie-pop album".
  - soul, pop, blues: CL "silky soul, spiky ballads, raw blues and unashamedly big pop songs".
  - gothpop: BBC "The gothic pop of Lungs".
  - indie: BBC "'soul inspired indie'".
  - baroquepop and baroquerock: SPB "sultry and genre-spanning baroque rock/pop".
  - punk: NPR "Florence and the Machine's polished punk sound".
  - folk: COS "the folk influences of her music".
  - bluesrock: SPB, "Kiss With a Fist" "this upbeat blues rock tune" (one track, so in the tail).
- **scales**
  - energy 3.
  - electronic 1: harps, strings, drums (BBC).
  - mood 3: NPR "bright and upbeat ... lyrical content is often darker".
  - theatrical 4: BBC "soaring, arching crescendos"; SPB "enormous songs".
  - experimental 2.
  - polish 3: SPB "Production is large and swelling", but COS says the production was "basic".
  - tempo 3.
  - groove 2.
- **voice** powerful|soft: NPR "Welch's powerhouse voice", "her signature belt"; BBC "vocals building from breathy almost-nothings"; COS "softly delivered vocals".
- **instruments**
  - harp, strings, drums: BBC "harps, strings and drums".
  - percussion: NPR, Welch: "primal and tribal bashing of percussion".
  - piano: CL "gentle piano and luscious strings".
  - keyboards: SPB "harps, keys, strings and choirs"; RTE "big drums, keyboards".
  - guitar and electricguitar: SPB "an over-driven guitar solo".
  - bass.
  - handclaps: COS, "Dog Days Are Over" "rising up with hand claps".
- **production**: belting (NPR "her signature belt").
- **lyrics** love|heartbreak|storytelling: BBC, "Drumming" is "about what it feels like to be in love"; CL, Hurricane Drunk "wrestling with her heartbreak"; BBC "'Tim Burton-style fairytales'"; COS "Most of the songs speak directly of death and violence".
- **producers**: Paul Epworth|James Ford|Stephen Mackey. BBC: "produced by a crack team - Paul Epworth ..., James Ford ... and Steve Mackey". Eg White, Charlie Hugall and Isabella Summers are left out: they are often credited, but no opened source states it.
- **sounds_like**
  - Nick Cave and the Bad Seeds: CL "the Machine ... sounding like a healthier, happier version of the Bad Seeds".
  - Annie Lennox, Candi Staton, Etta James: WFUV "Welch's love of Annie Lennox, Candi Staton, and Etta James is starting to become apparent". This is a critic hearing them in the music, so medium weight.
  - Cass Elliot [1/13]: BBC "touches of Mama Cass on ... Dogs Days Are Over".
  - Texas [1/13]: CL, "Rabbit Heart" "sounds like the best bloody Texas song you've never heard".
  - Simon & Garfunkel (Bridge over Troubled Water) [1/13]: SPB, "Dog Days" "'El Condor Pasa'-era Simon & Garfunkel strings".
  - The White Stripes [1/13]: SPB "'Kiss With a Fist' is a White Stripes song".
  - Kate Nash [1/13]: COS, "Kiss With a Fist" "similar in type to Kate Nash's ... 'Caroline Is A Victim'".
  - Left out: RTE's Kate Bush and Stevie Nicks (it compares her as a "force of nature", not her sound), and the Candi Staton and The Source cover.
- **influenced_by**: empty.
  - Arcade Fire (Funeral) appears only via a 2012 book (Howe), which couldn't be opened.
  - NPR gives Welch's general "soul music and blues singers" with no names.
- **landmark** 1: IT "Lungs propelled Florence and the Machine into the public consciousness ... one of the most successful albums in recent times"; BBC predicts a "British classic". (medium)
- **Reception**
  - importance 5: breakthrough. NPR: over a million UK copies, Mercury nomination.
  - acclaim 4: BBC and CL positive; RTE and COS mixed.
  - mainstream 3: CL "walking the precarious tightrope between commercial appeal and ... critical approval".
- **Legacy**: none.
- Uncertain: Pitchfork's review couldn't be found; SPB's author isn't shown on the page.

# Claude research notes (Oct 2026, wave 1)

# Wave 1 / D: evidence notes

Five albums: maneskin-teatrodiravoli, lanadelrey-normanfuckingrockwell, florence-ceremonials, lykkeli-woundedrhymes, muse-drones.
Titles and years match `src/data/catalog.ts` exactly (Måneskin title uses the curly apostrophe: `Teatro d’ira: Vol. I`).
All quotes below come from pages I opened (curl text dumps). No Wikipedia is cited: I used it only to find review and chart URLs.
Credits (producers, instruments) come from MusicBrainz release credits, read through the MusicBrainz web-service API (the HTML site has a browser check).

**Couldn't open (blocked, paywalled or 403):** Metacritic (every album; so no Metascores are cited), AllMusic (every album), Rockol review of Teatro d'ira (403; a search snippet said 8.5/10, **not used**), Slant (Wounded Rhymes, NFR), Spin, EW (402), NYT (403), LA Times, Telegraph, Under the Radar, musicOMH, Discogs, Album of the Year. Where I give AllMusic/RS/Guardian star scores for Wounded Rhymes and Drones, they come from the MusicCritic aggregator pages, which reprint the scores with an excerpt and the original link (marked as such in reception.csv).

---

## maneskin-teatrodiravoli: Måneskin, Teatro d’ira: Vol. I (2021)

Sources opened:
- OndaRock, Antonio Silvestri, 19/03/2021, vote 5 (genre header "pop, rock") https://www.ondarock.it/recensioni/2021-maneskin-teatrodiravoli/
- Rolling Stone Italia, Claudio Todesco, "il meglio e il peggio di 'Teatro d'ira Vol. 1'" https://www.rollingstone.it/musica/storie-musica/maneskin-il-meglio-e-il-peggio-di-teatro-dira-vol-1/555136/
- Rolling Stone Italia interview "Domani spacchiamo tutto" https://www.rollingstone.it/musica/interviste-musica/maneskin-domani-spacchiamo-tutto/553278/
- TV Sorrisi e Canzoni, "Non siamo i Led Zeppelin… ma dateci tempo!" https://www.sorrisi.com/musica/album/maneskin-non-siamo-i-led-zeppelin-ma-dateci-tempo/
- Panorama, "Maneskin, Teatro d'ira: il rock torna in classifica" https://www.panorama.it/lifestyle/maneskin-recensione-teatro-dira
- Sony Music Europe news https://www.sonymusic.eu/?p=25949
- Clash, "In Conversation: Måneskin" https://www.clashmusic.com/?p=20701

Cells:
- genres `rock|pop|hardrock|powerballad`: OndaRock header genres "pop, rock"; Clash "an Italian rock group"; OndaRock on I Wanna Be Your Slave (the big international single) "un movimentato hard-rock da ballo"; Vent'anni "una dolente power ballad" (OndaRock), "la rock ballad 'Vent'anni'" (Sorrisi). Zitti e buoni "rievoca il rock novantiano, urlato e assordante" (OndaRock).
- energy 4: OndaRock "urlato e assordante", "fragoroso… riff di chitarra", "mettere il volume al massimo"; but the album alternates "graffi e carezze" (two ballads), so 4 not 5.
- electronic 1: RS Italia "sfogo generazionale espresso con chitarra, basso e batteria"; Panorama "Niente autotune, basi musicali di plastica". A guitar band, no keyboards documented.
- mood 2: theme is "ira catartica" (Sorrisi, Damiano); OndaRock "dolenti sfumature patetiche".
- theatrical 4: RS Italia "Quanta enfasi", "rabbia e malessere sono teatralizzati", "se ne fregano di risultare sopra le righe"; title concept "contrasto tra teatro e ira" (Sorrisi).
- experimental 1: OndaRock "ancora molto formulaico"; RS Italia "Le canzoni sembrano la copia di mille riassunti".
- polish 3: RS Italia "suonato e prodotto (con Fabrizio Ferraguzzo) bene. Trasmette il feeling di un gruppo che suona dal vivo"; band: "suono crudo e contemporaneo" (Sorrisi). Normal studio, raw live feel.
- tempo 3, groove 2: hard-rock "da ballo" and "anima da club inglese" on I Wanna Be Your Slave (OndaRock; Panorama quoting the band), the rest rock and ballads.
- voice `powerful`: RS Italia: Damiano "canta ogni parola come se fosse l'ultima della sua vita"; OndaRock "irrequieto e talentuoso frontman". No source calls the voice raspy, so not used. (Lowest-confidence cell of this row.)
- instruments `electricguitar|bass|drums`: RS Italia "chitarra, basso e batteria"; OndaRock "fanno ruggire chitarre".
- production `liverecording`: Panorama "registrato in presa diretta al Mulino Recording Studio di Acquapendente (VT) guardando alle atmosfere analogiche degli album 70's"; Thomas (RS Italia interview) "Lo abbiamo fatto in presa diretta… Una cosa molto 70s". The band says "Volevamo sentire gli strumenti in maniera analogica" (Sorrisi) but no source says analog tape, so `analogtape` is not used.
- lyrics: Clash "explores the dynamic between oppressors and the oppressed; encouraging those to rebel against and break away from any type of conformity" (social, identity); Panorama, band on I Wanna Be Your Slave: "raccontare la sessualità in tutte le sue sfaccettature" (sensuality); Coraline "il racconto onirico di una bambina prodigio" (storytelling); In nome del padre "come il successo abbia influito sulla nostra vita" (introspection); RS Italia "diversità, fragilità, fobie, sesso, voglia di rivalsa".
- language `it|en`: Sorrisi "un mix di brani in inglese e in italiano"; RS Italia: English "in un paio di pezzi".
- producers: Fabrizio Ferraguzzo (RS Italia).
- sounds_like: OndaRock: Vent'anni "deve qualcosa al suono emotivo e maestoso dei Metallica più ruffiani" → `Metallica [1/8]`; "'Coraline', a rievocare la struttura e il climax di 'Stairway To Heaven'" → `Led Zeppelin (Led Zeppelin IV) [1/8]`. Eight tracks ("appena otto brani"). Not used: RS Italia's "pare di sentire Emma" (it is about Damiano's oversinging, a delivery comparison, not the record's sound).
- influenced_by: empty. The band only cites a general "analog vibe of '70s bootlegs" (Sony) and "Non siamo i Led Zeppelin… Non vogliamo imitare nessuno" (Sorrisi), which rejects the comparison. Clash calls Harry Styles "one of Måneskin's biggest inspirations" but not for this album, so not used.
- landmark 0: no source calls it their defining album.
- Reception: importance 5 (Clash: album and singles charted across Europe, I Wanna Be Your Slave "the first song by an Italian rock band to reach the Top 10 in the UK"; Sony: #1 in Italy, #6 Spotify global album debuts); acclaim 2 (OndaRock 5/10 "senza particolari entusiasmi"; RS Italia "Non sarà un gran disco", with pluses; Rockol could not be opened, and a positive Rockol score would raise this to 3); mainstream 3 (talent-show band, but "i Måneskin hanno composto tutto da soli", "Non è uno di quei dischi da talent assemblati alla bell'e meglio", RS Italia; Clash: all lyrics by the four).

## lanadelrey-normanfuckingrockwell: Lana Del Rey, Norman Fucking Rockwell! (2019)

Sources opened:
- Pitchfork, Jenn Pelly, Sep 3 2019, 9.4, Best New Music https://pitchfork.com/reviews/albums/lana-del-rey-norman-fucking-rockwell/
- Rolling Stone, Rob Sheffield https://www.rollingstone.com/music/music-album-reviews/lana-del-reys-norman-fucking-rockwell-878534/
- The Observer/Guardian, Kitty Empire https://www.theguardian.com/music/2019/aug/31/lana-del-rey-norman-fucking-rockwell-review-venice-bitch-hope-the-greatest
- NME https://www.nme.com/reviews/lana-del-rey-norman-fucking-rockwell-review-2543488
- Consequence https://consequence.net/2019/09/album-review-lana-del-rey-norman-rockwell/
- Vulture https://www.vulture.com/2019/08/album-review-lana-del-rey-norman-fucking-rockwell.html
- The Independent https://www.independent.co.uk/arts-entertainment/music/reviews/lana-del-rey-review-norman-fucking-rockwell-album-tracklist-venice-beach-mariners-apartment-complex-a9083666.html
- The A.V. Club https://www.avclub.com/lana-del-rey-goes-confessional-on-the-meandering-norman-1837833339
- FLOOD http://floodmagazine.com/67474/lana-del-rey-norman-fucking-rockwell/
- Billboard cover story 2019 https://www.billboard.com/music/pop/lana-del-rey-billboard-cover-story-2019-8527901/
- Lists: RS 500 https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/lana-del-rey-norman-fucking-rockwell-4-1062912/ ; RS best of 2010s https://www.rollingstone.com/music/music-lists/best-albums-2010s-ranked-913997/lana-del-rey-norman-fucking-rockwell-2-917452/ ; Pitchfork 200 best of 2010s (#19) https://pitchfork.com/features/lists-and-guides/the-200-best-albums-of-the-2010s/
- Credits: MusicBrainz release 330994f3-f7b1-44f6-aeca-15a228f29b51 (https://musicbrainz.org/release/330994f3-f7b1-44f6-aeca-15a228f29b51)

Cells:
- genres: RS "her Laurel Canyon 1970s soft-rock fantasies" and FLOOD "a mellow soft rock sound" (softrock); Vulture "an hour of contemplative folk-rock tunes and lovelorn piano ballads" (folkrock, ballad); Pitchfork "baroque piano ballads and dazzling folk", AV Club "gentle folk haze" and Lana herself: "A folk record with a little surf twist" (Billboard) (folk); Vulture: Venice Bitch "a nearly ten-minute psychedelic rock workout" (psychedelicrock); AV Club "her version of a confessional singer-songwriter record" (songwriter); CoS "hip-hop-inflected torch-song wave… still surfing that swell", RS "torch ballads" (torchsong); Independent "between the minimalist trip-hop of Del Rey's early days, and the scuzzy desert rock" (triphop, desertrock); CoS "expansive psych-pop lullabies" (psychedelicpop); Pitchfork Venice Bitch "a neo-psychedelic ballad" (neopsychedelia); Pitchfork "the easy pop-rock breeze of Carole King" (poprock); RS "she's finally made her pop classic" (pop). Not mapped: Pitchfork's "baroque piano ballads" (not "baroque pop"), "surf twist" (no exact token), RS "G-funk synths" (instrument colour on one song).
- energy 1, tempo 2, groove 1: CoS "NFR! is aggressively mid-tempo start to finish"; AV Club "one of Del Rey's sleepiest albums yet"; Independent "sultry and soporific"; RS "the languid groove".
- electronic 2: CoS "gently picked acoustic guitar, steady piano, and tasteful strings"; AV Club "crisp, unadorned instrumentation: wistful piano, light horns and string accents"; some synths ("long-haired analogue synth territory", Guardian; "washes of keyboards").
- mood 1: Pitchfork "the sound of a heart shattering and reforming"; "despondency of existence"; hope only at the close.
- theatrical 2: Pitchfork "minimalism… it sounds like Lana alone", "for all the spectral harmonies and cinematic splendor"; AV Club "confessional".
- experimental 2: classic songwriting (Brill Building, Laurel Canyon per Pitchfork) with one long "psychedelic prog freak-out" (AV Club, Venice Bitch).
- polish 3: Pitchfork "You can hear the room everywhere"; arrangements "lush as ever, yet less muddled" (CoS).
- voice `clear`: CoS "her voice has rarely sounded so sharp, central, and clear". (Pitchfork's "piercing falsetto" is on one song only; not used.)
- instruments (MusicBrainz credits + reviews): piano (Antonoff on 12 tracks; "3am bar pianos", Guardian), acoustic/electric guitar, strings (cello, violin; "Disney strings", Guardian), keyboards, synth, drums, saxophone, harp (credits; Independent "the piano, harp, and Guns N' Roses guitar solos are many"), mellotron, flute, bells (Guardian: How to Disappear "this waltz with Christmas bells").
- production `roomambience|stringarrangements`: engineer Laura Sisk (Billboard): "how much of the energy of the room we're able to record… We often don't use a vocal booth"; Pitchfork "You can hear the room everywhere"; CoS "tasteful strings in arrangements".
- lyrics: love/heartbreak (Pitchfork "troubled people attempting to navigate the mess of love"), nostalgia (Independent "a sound rooted in nostalgia"), social (Pitchfork: reviving and exposing American myths, "our crumbling world"), identity, irony (RS "lethally funny"; CoS "gallows humor"), introspection, storytelling (Pitchfork "exquisitely narrated songs").
- producers (MusicBrainz track credits; the artist's own credit dropped, "additional" producers Mighty Mike and Nowels-on-13 dropped): Jack Antonoff (11 tracks), Rick Nowels (2), Zachary Dawes (California), Andrew Watt and Happy Perez (Doin' Time), Dean Reid and Kieron Menzies (The Next Best American Record). Billboard: Antonoff "co-producing almost the whole project, alongside longtime collaborator Rick Nowels".
- sounds_like: Pitchfork "The languor of Mazzy Star and downbeat skitter of Portishead meet the easy pop-rock breeze of Carole King on 1971's Tapestry, or the searching resilience of Joni Mitchell on 1972's For the Roses"; CoS "the connective tissue to past collaborators Stevie Nicks and Cat Power, as well as spiritual links to artists like Laura Nyro, SZA, and H.E.R." (SZA, H.E.R. left out: "spiritual" link, not sound); Independent "Guns N' Roses guitar solos"; AV Club: the closer "conjures both the cadences of Leonard Cohen's 'Famous Blue Raincoat' and Cat Power's most intimate moments" → Leonard Cohen (Songs of Love and Hate) [1/14]; Guardian: Cinnamon Girl's coda "an electronic-tinged echo of Young's famous meandering" → Neil Young [1/14]; Independent: Love Song "sounds like an alternative universe 'Wonderwall'" → Oasis [1/14]; Vulture: Venice Bitch like "the Doors' 'When the Music's Over'" → The Doors (Strange Days) [1/14]; FLOOD: "recalling The Beach Boys' latter period" on The Greatest → The Beach Boys [1/14]. 14 tracks. Lyric references (Eagles, CSN, Led Zeppelin's Houses of the Holy, Bowie) are not sound comparisons: not used.
- influenced_by: empty. Lana only describes the record ("folk record with a little surf twist"); no artist named as an influence in sources I opened.
- landmark 1: RS 500 Greatest Albums; RS "her fifth and finest album… she's finally made her pop classic"; Pitchfork "the apotheosis of Lana Del Rey".
- Reception 5/5/3: see reception.csv. Mainstream 3 (auteur record on a major; RS: Antonoff "adapts to her musical world, barely leaving any of his own fingerprints"; Guardian "the music barely bothers to present itself as pop").
- Legacy: none (no professional source found saying NFR influenced later music; the Billboard legacy quotes in the repo are about Born to Die).

## florence-ceremonials: Florence + The Machine, Ceremonials (2011)

Sources opened:
- Pitchfork, Ryan Dombal, 6.0 https://pitchfork.com/reviews/albums/16004-ceremonials/
- Rolling Stone, Jody Rosen https://www.rollingstone.com/music/albumreviews/ceremonials-20111101
- The Guardian, Michael Hann https://www.theguardian.com/music/2011/oct/27/florence-and-the-machine-ceremonials-review
- NME http://www.nme.com/reviews/florence-and-the-machine/12419
- PopMatters http://www.popmatters.com/review/150687-florence-and-the-machine-ceremonials/
- Clash http://www.clashmusic.com/reviews/florence-and-the-machine-ceremonials
- Drowned in Sound http://drownedinsound.com/releases/16620/reviews/4143919
- Cokemachineglow http://cokemachineglow.com/records/florenceandthemachine-ceremonials-2011/
- The Independent https://www.independent.co.uk/arts-entertainment/music/reviews/album-florence--the-machine-ceremonials-island-2376712.html
- Billboard critics' 10 best albums of 2011 (#8) http://www.billboard.com/articles/list/464746/critics-picks-10-best-albums-of-2011
- TIME Top 10 Albums of 2011 (#2) https://content.time.com/time/specials/packages/article/0,28804,2101344_2101364_2101582,00.html
- Rolling Stone 50 Best Albums of 2011 https://www.rollingstone.com/music/lists/50-best-albums-of-2011-20111207/florence-and-the-machine-ceremonials-19691231
- Music Week UK chart analysis http://www.musicweek.com/news/read/uk-album-chart-analysis-florences-ceremonials-sells-94k/047235
- Interviews: Irish Times "Behind the machine" https://www.irishtimes.com/culture/music/rock-pop/behind-the-machine-1.633355 ; RTÉ https://www.rte.ie/entertainment/2011/1114/433631-florenceandthemachine ; Alan Cross, A Journal of Musical Things http://ajournalofmusicalthings.com/florence-and-the-machines-ceremonials-an-exercise-in-big-soul-and-big-drums/
- Credits: MusicBrainz release d87718e2-0e68-44c9-8ac9-e6e793f91534

Cells:
- genres: NME "a near-great pop record" (pop); Billboard "the British chamber-pop group" (chamberpop); RS "a ballad somewhere between classic soul and midnight-on-the-moors English art rock" (soul, artrock), "nods to goth and gospel", "Celtic melodies" (gospel, celtic); PopMatters "Welch's sheer art-pop hubris", "soulful R&B and electro-pop", "a surprise plunge into glammy Britpop" (artpop, rnb, electropop, britpop); NME "a distinct R&B flavour"; Clash "the power balladry of first single 'Shake It Out'" (powerballad, lead single); DiS "a mainstream act taking a leftfield approach to modern indie-pop" (indiepop); CMG Lover to Lover "a delicious Motown strut", RS list "the arena-scale Motown of 'Lover to Lover'" (motown); Spectrum: DiS "a fantastic house-beat kick", Independent "the Krautrock-disco motorik of 'Spectrum'" (house, krautrock, disco, tail). Not mapped: CMG "baroque power pop" (no exact token; neither baroquepop nor powerpop alone); Welch's "chamber soul" is reported only on Wikipedia from a Guardian interview I could not find, so not used.
- energy 4: NME "everything is (of course) bigger, grander, more dramatic"; Pitchfork "endless crescendos"; Clash: some songs "take the energy down a few notches".
- electronic 2: Clash "string arrangements, subtle electro touches, and gospel choirs"; DiS "doused in more synthesiser".
- mood 2: Guardian "a gothic fever dream of romance"; TIME "her tales of heartache can be oddly uplifting".
- theatrical 5: NME "this is an album that's absorbed every kitchen sink"; RS "turbulent ballads… banshee wails", "melodrama"; Independent "dramatic and really huge and kind of spooky" (Welch's aim).
- experimental 2: Pitchfork "the heaven's-crescendo formula"; Clash "The only real criticism… relentlessly, Florence".
- polish 5: CMG "a sumptuously produced album"; NME "grandiose production"; Pitchfork "the album whitewashes at every turn".
- tempo 3, groove 2: PopMatters on What the Water Gave Me "keeps the sound dancefloor-ready"; Spectrum house beat; mostly anthems and ballads.
- voice `powerful`: Pitchfork "That Voice… blaring"; RS "a vocalist with extra horsepower"; TIME "Welch's full-bodied wails".
- instruments: credits (harp on all 12 tracks by Tom Moth, drums, guitar, bass, keyboards, piano, strings: violin/viola/cello, celesta, synth, percussion, Hammond and reed organ); CMG "insistent piano and church organ, pounding kettle drums, harps" (timpani, organ); DiS "rumbling toms, swishing chimes, plucked harps" (chimes).
- production `stringarrangements|layeredvocals`: string arrangements credited to Sally Herbert (MusicBrainz), Clash "augment it with string arrangements"; CMG "an oft-used multi-tracking vocal effect where a multitude of Florences sing a chorus line".
- lyrics: Billboard "a relatable album about love… the fine line between Christian spirituality and otherworldly voodoo"; RS "Shake It Out, a treatise on heartbreak and spiritual rebirth"; RTÉ: songs on death, ghosts, Joan of Arc (storytelling); Irish Times/RTÉ grandmother visitation (introspection).
- producers: Paul Epworth on every track (MusicBrainz); Irish Times "Welch brought Paul Epworth… on board to oversee the entire album, which was recorded in the plush surrounds of Abbey Road".
- sounds_like: Billboard "channeling avant-pop luminaries like Annie Lennox and Kate Bush"; CMG "she, actually, sonically hews closer to Lennox… Think of Ceremonials as a 21st century update on the latter's Diva (1992)" → Annie Lennox (Diva); RS "drawing on a tradition… from Kate Bush and Siouxsie and the Banshees to PJ Harvey", "The rock band most forcefully evoked on Ceremonials is… U2"; Guardian "the shadow of Siouxsie and the Banshees crops up repeatedly", Never Let Me Go like "the This Mortal Coil songs fronted by Liz Fraser" [1/12]; CMG What the Water Gave Me "mystic soul that out-Toris Tori Amos" [1/12], Shake It Out "resembling the best bits of Arcade Fire's Neon Bible" [1/12]; PopMatters Breaking Down "something you'd expect from the mid-'90s heyday of Pulp and Suede" [1/12 each]; RS Lover to Lover "Adele, anyone?" [1/12]; Pitchfork Breaking Down "could be an outtake from MGMT's career-stalling Congratulations" [1/12]; NME Spectrum "like having your eyes angrily jabbed out by an irate Beyoncé" [1/12]; DiS Leave My Body "recalls Like A Prayer era Madonna channelling Peter Gabriel" [1/12 each]. 12 tracks (standard edition). Not used: Pitchfork's the xx comparison (bonus track only); DiS "Stock/Aitken/Waterman simplicity" (producers, not an artist).
- influenced_by: empty. Welch: the album "was influenced by hymns and poems and sounds of church bells" (Alan Cross), no artists.
- landmark 0: well listed (TIME #2 of 2011) but no source calls it her defining album.
- Reception 4/4/3: UK #1 debut (Music Week), year-end lists (TIME #2, Billboard #8, RS top 50), but mixed reviews (Pitchfork 6.0, Guardian "it never really satsifies" [sic], DiS "a regression"). Mainstream 3: NME, Welch refused "a phalanx of exorbitantly priced R&B producers" in the US; Irish Times "I really need to stay here and write with the people I started off with".

## lykkeli-woundedrhymes: Lykke Li, Wounded Rhymes (2011)

Sources opened:
- Pitchfork, Stephen M. Deusner, 8.3 https://pitchfork.com/reviews/albums/15167-wounded-rhymes/
- Rolling Stone, Jody Rosen http://www.rollingstone.com/music/albumreviews/wounded-rhymes-20110301
- The Guardian, Michael Cragg https://www.theguardian.com/music/2011/feb/24/lykke-li-wounded-rhymes-review
- BBC Music, Lou Thomas https://www.bbc.co.uk/music/reviews/8cx2/
- Consequence of Sound https://consequence.net/2011/02/album-review-lykke-li-wounded-rhymes/
- Paste https://www.pastemagazine.com/articles/2011/02/lykke-li-wounded-rhymes.html
- Tiny Mix Tapes https://www.tinymixtapes.com/music-review/lykke-li-wounded-rhymes
- The Line of Best Fit https://www.thelineofbestfit.com/reviews/albums/lykke-li-wounded-rhymes-48111
- MusicCritic aggregator (score list + excerpts of EW, Slant, AllMusic, Austin Chronicle) https://musiccritic.com/lykke-li/wounded-rhymes
- Interviews: Clash "Lykke Minded" https://www.clashmusic.com/?p=208073 ; NPR transcript https://www.npr.org/transcripts/134661077 ; 7x7 https://www.7x7.com/amp/10-questions-for-swedish-pop-songstress-lykke-li-1781352818
- Warner Music press release (10th anniversary) https://mediarhino.wmg-gardens.com/press-release/lykke-li-announces-10th-anniversary-deluxe-editions-wounded-rhymes
- Credits: MusicBrainz release 4c837cd6-4e42-4805-83e6-c69cb0f70477

Cells:
- genres: CoS "superb pop songs"; Paste "the Swedish princess of off-beat art-pop" (artpop); TMT "committing to a soulful throwback sound… This is soul music" (soul), "the gospel harmonies" on Silent My Song (gospel); Slant "still an expert dabbler in gravelly electro-pop" (electropop); RS "torchy love songs", "girl-group-style romantic melodrama", "Li dips into garage rock and wintry folk" (torchsong, girlgrouppop, garagerock, folk); BBC "the doo-wop lament of Unrequited Love" (doowop). Not mapped: RS "weird-pop".
- energy 3: anthems ("Youth Knows No Pain", "Get Some") next to stripped ballads (Pitchfork "Audacious anthems jostle next to heartbreak ballads").
- electronic 2: Austin Chronicle (via MusicCritic) "rich electronic and organic instrumentation"; Lykke Li (NPR): "real instruments, live takes… there were Hammonds and… drummers".
- mood 1: Guardian "the bleak post-breakup laments"; Pitchfork "depressive without being depressing, dark without being bleak".
- theatrical 3: Pitchfork "a surprisingly dramatic singer"; BBC "the sound's sheer size is almost overwhelming"; but intimate tracks (Unrequited Love recorded "just me and the mic", Clash).
- experimental 3: RS "an ingenious oddball… a weird-pop gem… stretched into all kinds of shapes"; Paste "off-beat art-pop".
- polish 3: Pitchfork "still rough around the edges"; CoS "crisp and clean".
- tempo 2, groove 2: Pitchfork "The biggest moments on Wounded Rhymes take the form of slower ballads"; AllMusic excerpt "hip-shaking drums"; CoS "we'll just keep dancing".
- voice `powerful|soft`: Pitchfork "a powerful voice and strong phrasing"; Line of Best Fit "a darker mood and deeper voice that fully commands"; CoS "a breathy chorus" (Jerome), TMT "the breathy mid-song breakdown".
- instruments: credits (drums, percussion, organ, guitar, bass, piano); BBC "much ominous pounding of kettle drums", Paste "kettle drums popping holes in the mix over deadpan synths" (timpani, synth); CoS "strumming acoustic guitar" (I Know Places), "heavy reverb and handclaps"; AllMusic excerpt "in-the-red handclaps, hip-shaking drums and tambourines, and downright nasty, psych-damaged organ"; Guardian "a desolate whistle solo"; Line of Best Fit "an almost inaudible glockenspiel".
- production: BBC "the tunes resemble a haunted wall of sound, like Phil Spector hijacking a ghost train" (wallofsound); NPR, Li: "real instruments, live takes" (liverecording); RS "reverb-swathed guitars", CoS "heavy reverb" (heavyreverb); CoS "frequent layered harmonies", "harmonies are piled on in choruses" (layeredvocals).
- lyrics: Guardian "recorded in the aftermath of an unrequited love affair"; CoS "sexually charged" (sensuality); Pitchfork "uncomfortably eager to shed or adopt new identities" (identity).
- scene: Swedish artist, written in Los Angeles/desert (Pitchfork; 7x7), produced in Sweden by Björn Yttling.
- producers: Björn Yttling on every track (MusicBrainz; Guardian "producer Björn Yttling (he of Peter Björn and John fame)").
- sounds_like: RS "her guiding spirit seems to be Phil Spector"; BBC "like Phil Spector hijacking a ghost train", "Lykke's voice occasionally recalls that of Dusty Springfield", Silent My Song "the only time fellow Swede alt-heroes The Knife are an overt influence" [1/10]; EW (via MusicCritic) "sounding like a Nordic hybrid of Lou Reed and Darlene Love"; Paste "a bit of Kate Bush's alien whine, a pinch of Bat for Lashes smoke-screen atmospherics, even a hint of… Robyn's sassy croon", and Bat for Lashes and Charlotte Gainsbourg "released excellent albums (Two Suns and IRM, respectively) that mined a similar sonic trajectory"; TMT Unrequited Love "Righteous Brotherly — doo-wop melodies" [1/10], Sadness Is a Blessing "might first bring The Ronettes to mind… homage to The Supremes" [1/10 each], Love Out of Lust "sounds more like 'Maps' than Motown" → Yeah Yeah Yeahs (Fever to Tell) [1/10]. 10 tracks. Not used: RS "neo-Shangri-Las sentiments" (lyrics), TMT's Amy Winehouse (hypothetical), Sinéad O'Connor (approach, not sound).
- influenced_by: empty. In Clash she names "Neil Young, The Shangri-Las, This Mortal Coil, The Beatles, Rolling Stones… That kind of music influences me", but as her general taste, not this album: left out on purpose (owner may decide to add).
- landmark 1: Warner press release calls it "her seminal album" and lists best-of-2011 lists (NYT, Pitchfork, EW, Guardian, Clash, Paste, SPIN); Exclaim calls I Follow Rivers "the hit". The landmark evidence is a label statement, so it is the softest cell of this row.
- Reception 5/4/2: importance 5 rests on the label's "seminal" plus the hit single and the critics' "transformation" framing (Slant excerpt "a stark transformation of mood"); acclaim 4 (Pitchfork 8.3, RS 5/5, Guardian 4/5, BBC "outstanding"; DiS 6/10, NOW 2/5); mainstream 2 (own label: "I set up LL Recordings just for me to have freedom", Clash; indie producer).

## muse-drones: Muse, Drones (2015)

Sources opened:
- Pitchfork, Ian Cohen, 4.5 https://pitchfork.com/reviews/albums/20520-drones/
- Rolling Stone, David Fricke http://www.rollingstone.com/music/albumreviews/muse-drones-20150609
- The Guardian, Gwilym Mumford https://www.theguardian.com/music/2015/jun/04/muse-drones-review-the-bands-most-focused-work-in-a-decade
- The Observer, Kitty Empire https://www.theguardian.com/music/2015/jun/07/muse-drones-album-review-kitty-empire
- Consequence of Sound https://consequence.net/2015/06/album-review-muse-drones/
- Paste https://www.pastemagazine.com/articles/2015/06/muse-drones-review.html
- Drowned in Sound http://drownedinsound.com/releases/18847/reviews/4149076
- NME news (Bellamy "best album"; "everything we know") https://www.nme.com/news/music/muse-61-1220072 ; https://www.nme.com/news/music/muse-65-1209518
- Louder (Mutt Lange fears; Grammy) https://loudersound.com/news/muse-mutt-lange-fears-drones ; https://www.loudersound.com/news/muse-roger-waters-win-grammys
- MusicCritic aggregator https://musiccritic.com/muse/drones
- Credits: MusicBrainz release 40888c66-4f02-486f-9708-bc008f4e46d4

Cells:
- genres: Pitchfork "Muse's down-and-dirty rock record" (rock); RS "this progressive-metal holocaust" and CoS "a British prog-metal band" (progmetal); Observer "hard rock has enjoyed warily eyeing the interface between robotics and warfare… Muse have grasped this paranoid sub-genre", "Never a band to shy away from a prog-rock statement" (hardrock, prog); CoS "the bluesy heavy metal of Led Zeppelin and Deep Purple ('Psycho', 'Reapers')" (heavymetal); Paste "a lighter-waving arena-rock climax" (arenarock, Dead Inside); DiS "a sci-fi rock opera" (rockopera); RS "the stark opening electro-funk of 'Dead Inside'" (electrofunk); CoS "the pummelling synthpop of Depeche Mode on 'Dead Inside'" (synthpop); Paste "the Gary Glitter glam-metal of 'Psycho'" and "the art-disco death march of 'Dead Inside'" (new tokens glammetal, artdisco). Bellamy (NME): "go back to a more 'rock' sound".
- energy 4: Guardian "It's the heaviest the band has sounded in some time"; ballads Aftermath and The Globalist keep it off 5.
- electronic 2: Observer "confining their often elaborate sound to just drums, bass, guitar and the odd electronic flourish"; Bellamy (NME) "standard three-piece rock band with guitar, bass and drums".
- mood 1: concept of indoctrination and drone killing; Pitchfork "a cryptocratic nightmare".
- theatrical 5: CoS "crank the bombast to 11", "the overblown theatrics of Queen"; DiS "a sci-fi rock opera"; concept album with drill-sergeant and JFK interludes.
- experimental 2: DiS "still just Muse colouring inside carefully-drawn stock lines"; one 10-minute suite.
- polish 5: Guardian "a more polished variant of their early, unkempt sound"; Pitchfork "CGI'd production"; RS on Lange "famous for stuffing every air pocket on Def Leppard's Hysteria".
- tempo 3, groove 2: Observer "a thwacking beat" (Dead Inside); Pitchfork "Metallica's boogie" (Psycho).
- voice `powerful`: RS "Bellamy wails"; Paste "shrieks and croons", CoS "his flexible tenor". (`operatic` not used: critics call him operatic but he is not classically trained.)
- instruments: credits (guitar, bass, drums, synth, piano, Hammond organ; EdoDea ensemble orchestra on Aftermath and The Globalist); NME/Instagram "Milan strings"; Paste "orchestral simmer… canned strings".
- production: Observer "operatic – Bellamy's falsetto" (falsetto); RS "a choir of Bellamys", Pitchfork "an a cappella chorale of a thousand Matt Bellamys" (layeredvocals); Guardian "samples of JFK speeches", Paste "sampled rain drops and TV commercials" (sampling); RS "loaded with fuzz", Paste "fuzz-bass clatter", NME (band Instagram) "listening to some FAT bass distortion" (distortion).
- lyrics: Bellamy (NME) "the journey of a human… to their indoctrination by the system to be a human drone, to their eventual defection" (political, storytelling, social); Observer "an Orwellian breakup album", NME/Q "a relationship ending" (heartbreak).
- producers: Robert John "Mutt" Lange (MusicBrainz; NME "co-produced by Robert John 'Mutt' Lange"). Dropped: Muse (own credit), Rich Costey and Tommaso Colliva (credited as additional producers).
- sounds_like: Observer "the grand gestures of Queen", CoS "the overblown theatrics of Queen" and "the band Muse most resembles on Drones is a latter-day U2", "all executed with a rhinestone-studded swagger reminiscent of Bowie and T. Rex" (whole album); Depeche Mode: RS Dead Inside "suggest a totalitarian Depeche Mode", CoS Dead Inside "more than a passing resemblance to 'Personal Jesus'", Observer Psycho "recalls both Depeche Mode (say, Personal Jesus) and Marilyn Manson" → Depeche Mode (Violator) [2/12], Marilyn Manson [1/12]; CoS "the dirty riffage of Black Sabbath ('The Handler')" [1/12], "the bluesy heavy metal of Led Zeppelin and Deep Purple ('Psycho', 'Reapers')" [2/12 each]; Pitchfork "'Psycho' itself splices Metallica's boogie '2x4'…" → Metallica (Load) [1/12]; Guardian and DiS: The Globalist veers "from Morricone to Metallica/metal" → Ennio Morricone [1/12]; Observer Reapers "his inner Yngwie Malmsteen" [1/12]; Paste "the Gary Glitter glam-metal of 'Psycho'" [1/12]. 12 tracks. Not used: comparisons with Muse's own Origin of Symmetry; Pitchfork's Rush/Queensrÿche/Pink Floyd line (about the band's career, not this album).
- influenced_by: empty. Bellamy only cites a book (Predators: The CIA's Drone War on al Qaeda, NME) and the band's own early records ("go back to how we made music in the early stages of our career"), which is a self-reference.
- landmark 0.
- Reception 3/3/3: Grammy Best Rock Album (Louder); reviews mixed (RS 4/5, NME 3.5/5, Guardian and Observer 3/5, Paste 5.8, CoS C, Pitchfork 4.5). Mainstream 3 is a judgement call: Mutt Lange is a hit producer and CoS hears "almost palpable yearning to be played on commercial rock radio" on Mercy (case for 4), but Bellamy says Lange "wasn't like that at all – he was totally into the concept" and the record is a band-written concept album (Louder).

---

## New tokens

- `glammetal` (genre): Paste on Drones, "the Gary Glitter glam-metal of 'Psycho'". Not the same as `hairmetal`.
- `artdisco` (genre): Paste on Drones, "the art-disco death march of 'Dead Inside'".

## Uncertain / for the owner

- Måneskin acclaim 2 rests on OndaRock (5/10) and RS Italia (mixed). Rockol (positive, 8.5 per a search snippet) could not be opened: if verified, acclaim should be 3. Voice `powerful` is thin (only RS Italia's description of the oversinging).
- Lykke Li landmark 1 and importance 5 rest on the label's "seminal album" and the I Follow Rivers hit; no independent critic calls it her defining record.
- Lykke Li's general influences (Neil Young, The Shangri-Las, This Mortal Coil, The Beatles, Rolling Stones; Clash 2011) were left out of influenced_by because she does not tie them to this album.
- Muse mainstream 3 vs 4 (see above).
- Florence: Welch's own "chamber soul" label (Guardian interview, cited only on Wikipedia) not verified, so not used.
- No legacy rows: I found no professional source saying any of these five albums influenced later music.

