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

