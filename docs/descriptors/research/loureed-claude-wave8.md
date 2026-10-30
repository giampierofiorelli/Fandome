# Claude research notes (Oct 2026, wave 5)

# Wave 8, group B: notes (Iggy Pop, The Stooges, Lou Reed, The Clash)

No Wikipedia cited. AllMusic, Treble, Tidal, Rolling Stone Japan, This Is Dig and uDiscover returned 403; MusicBrainz and
the Discogs API were used for dates and credits. Scales are my judgment from the reviews quoted (reason given per album).

## 1. Who cites them in our catalogue (grep of docs/descriptors/*.csv and src/data/artistInfluences.ts)

**Iggy Pop** (records named: *The Idiot*, *Lust for Life*)
- influenced_by: bowie-theriseandfallofziggystardustandthespidersfrommars (Iggy Pop), florence-dancefever (Iggy Pop)
- sounds_like: bowie-diamonddogs, bowie-stationtostation, bowie-lodger, bowie-scarymonstersandsupercreeps, bowie-tonight,
  florence-dancefever (Iggy Pop [1/14]), goldfrapp-supernature (**Iggy Pop (Lust for Life) [1/11]**),
  joydivision-unknownpleasures (**Iggy Pop (The Idiot)**), ligabue-buoncompleannoelvis, rem-monster
- artistInfluences.ts: Joy Division/New Order entry (Peter Hook, The Independent: Iggy Pop), line ~570 entry (Iggy Pop and The Stooges)
- Note: rem-monster cites "Iggy & the Stooges" in influenced_by: that name should resolve to `stooges`, not `iggypop`.

**The Stooges** (record named: *Raw Power*)
- influenced_by: oasis-beherenow, oasis-heathenchemistry, rem-monster (Iggy & the Stooges), smiths-thequeenisdead
  (**The Stooges (Raw Power)**)
- sounds_like: fontainesdc-aherosdeath, pearljam-vitalogy
- artistInfluences.ts: lines ~418, 554, 562 (Guns N' Roses: Izzy), 570

**Lou Reed** (records named: *Transformer*, *Songs for Drella*)
- influenced_by: arcticmonkeys-am (**Lou Reed (Transformer)**), bowie-hunkydory, bowie-theriseandfallofziggystardustandthespidersfrommars
- sounds_like: arcticmonkeys-am (Lou Reed [1/12]), bowie-hunkydory, dylan-roughandrowdyways (**Lou Reed and John Cale
  (Songs for Drella) [1/10]**: joint name, needs mapping), falco-falco3, gracejones-nightclubbing, lykkeli-woundedrhymes,
  nada-doveseisei, rem-monster
- artistInfluences.ts: Lana Del Rey entry (FADER 2014), Frankie Goes to Hollywood entry (Holly Johnson: Lou Reed's Transformer)

**The Clash** (no record named)
- influenced_by: cyndi-shessounusual, gogos-beautyandthebeat, massiveattack-mezzanine,
  publicenemy-ittakesanationofmillionstoholdusback, u2-howtodismantleanatomicbomb
- artistInfluences.ts: Public Enemy (Chuck D), Duran Duran, Alphaville (Marian Gold), line ~554
- Chosen: the debut and London Calling, the two the sources rank highest.

Albums described: Iggy 2 (both named), Stooges 3 (Raw Power named + the two Elektra albums), Lou Reed 2 (Transformer named
+ Berlin), Clash 2.

## 2. Per album evidence

### iggypop-theidiot (The Idiot, 1977)
Sources: Pitchfork, Sasha Geffen, 2020 (*The Bowie Years*) https://pitchfork.com/reviews/albums/iggy-pop-the-bowie-years/ ;
Clash Magazine, Classic Albums 2012 https://www.clashmusic.com/features/classic-albums-iggy-pop-the-idiot ; The Vinyl
District, Michael H. Little, "Graded on a Curve" https://www.thevinyldistrict.com/storefront/graded-on-a-curve-iggy-pop-the-idiot/ ;
Diffuser, Bryan Wawzenek 2017 https://diffuser.fm/iggy-pop-idiot/ ; Louder buyer's guide
https://www.loudersound.com/features/buyers-guide-how-to-buy-the-best-of-iggy-pop ; Louder (Kris Needs) 2020
https://www.loudersound.com/reviews/iggy-pops-bowie-years-the-resurgence-of-the-punkfather ; Christgau
https://www.robertchristgau.com/get_artist.php?name=Iggy+Pop ; Discogs https://www.discogs.com/master/38306 (French and UK
1977 LPs: "Producer, Arranged By, Recorded By – David Bowie"; "Mixed By – Tony Visconti").
- genres: artrock, krautrock, electronica: TVD "Kraftwerk-flavored art rock ... and even proto-industrial electronica"
  (electronica = Mass Production, so last); Louder/Kris Needs "Iggy's krautrock-influenced makeover"; funk: TVD "funky and
  robotic", "pneumatic and Teutonic funk of Nightclubbing"; synthpop: Louder "funkified proto-synth pop".
- energy 2 / tempo 2: Christgau "the slow rocker ... (tranceprone)", Pitchfork "cool and restrained". electronic 3: Clash "the
  clash of guitars had been replaced with synthesizers and electronic beats", but guitar/bass/sax stay central (TVD).
  mood 1: Clash "the second most depressing record ever written", TVD "darkest". theatrical 3: Pitchfork "perfectly tuned
  melodrama" vs "cool detachment". experimental 4: TVD "radical departure", "avant garde". polish 3: Pitchfork "The Idiot's
  slick tracks". groove 3: funk grooves (TVD) though Christgau finds it trance-like.
- voice clear|spoken (medium): TVD "his deep baritone", sung "alternately in his usual singing voice and his abyss of a
  baritone"; Clash: Dum Dum Boys opens with "a faux conversation".
- instruments: Pitchfork "clipped percussion, whining guitars, and thin synthesizer tones"; Diffuser "drum machines,
  synthesizers and even toy instruments"; TVD "an old rhythm machine" on Nightclubbing, Bowie "on saxophone and synthesizer";
  Clash "just a piano and electronic beat" (Dum Dum Boys intro). production feedback: TVD Alomar "spray[s] more guitar feedback".
- lyrics: introspection (Pitchfork "monument to alienation"), irony (Christgau "oldtimer's irony"), party (Nightclubbing,
  Funtime), love (China Girl, Clash), nostalgia (Dum Dum Boys "elegy for the Stooges").
- producers: David Bowie (Discogs; Visconti only mixed, so left out).
- sounds_like: Kraftwerk (TVD "Kraftwerk-flavored"). David Bowie / Station to Station (TVD, Christgau) dropped: Bowie
  produced and co-wrote.
- influenced_by: James Brown, Kraftwerk (Iggy described it as "a cross between James Brown and Kraftwerk": Diffuser,
  Clash); Neu! (Diffuser: "Iggy claimed that the two were inspired by 'the idea of Berlin,' as well as the so-called
  krautrock of bands such as Neu! and Kraftwerk").
- landmark 1: Louder "Pop's seminal late 70s downtown-troubadour albums"; Clash "bleakly revolutionary then, and it is now".
- Legacy 5: quotes in legacy.csv (Clash, Louder, Diffuser, Pitchfork).
- Our Joy Division row cites "Iggy Pop (The Idiot)": Clash and TVD both note Ian Curtis's link to the album; consistent.

### iggypop-lustforlife (Lust for Life, 1977)
Sources: Far Out, Tyler Golsen 2022 https://faroutmagazine.co.uk/lust-for-life-iggy-pop-album-turns-45/ ; Diffuser
https://diffuser.fm/iggy-pop-lust-for-life/ ; Pitchfork 2020 (as above); Christgau; Louder buyer's guide; Discogs
https://www.discogs.com/master/38128 (US LP https://www.discogs.com/release/933439: "Producer – Bewlay Bros.", Bass Tony Sales,
Drums Hunt Sales, Guitar Carlos Alomar, Ricky Gardiner, Piano David Bowie, recorded at Hansa Tonstudios).
- genres: hardrock, newwave: Far Out "an exuberant blast of early new wave and classic hard rock"; punk: Pitchfork
  "breathes some punk grit back into Pop's performance", Far Out list "supreme potent punk tendencies"; blueeyedsoul:
  Louder "Turn Blue, a seven-minute nervous breakdown disguised as white-boy soul" (one track, last).
- energy 4: Far Out "40 minutes of nonstop energy"; tempo 4: Christgau "faster and more assertive"; electronic 1: Far Out
  "spared from the generational keyboard sounds"; mood 3: "upbeat" (Louder/Needs) yet alienation (Pitchfork on The
  Passenger); polish 3: Diffuser "sharp and direct"; groove 3: Diffuser "thunderous Motown beat", Louder "slinky Fall in
  Love With Me", "rollicking gypsy swing"; theatrical 3, experimental 2: conventional rock band (Diffuser).
- voice powerful|raspy: Far Out "shouts, croons, guttural bellows"; Pitchfork "fevered snarl".
- instruments: Discogs credits + Diffuser (Bowie "played keyboards").
- lyrics: irony (Christgau "nihilistic satire"), introspection (The Passenger, Pitchfork), party (Success, Some Weird Sin).
- producers: David Bowie|Iggy Pop. The sleeve credits "Bewlay Bros."; Pitchfork: "Pop, with Bowie serving as co-writer and
  co-producer, issued The Idiot and Lust for Life". I could not open a source naming the third Bewlay brother (engineer
  Colin Thurston is credited as engineer on Discogs), so he is not listed.
- sounds_like: The Rolling Stones [1/9] (Louder "the Stones-y freak anthem Some Weird Sin"). Bowie dropped (collaborator).
- landmark 1: Far Out "Pop's definitive musical statement"; Diffuser "the seminal Lust for Life".
- Legacy 3: only the joint Pitchfork statement (with The Idiot); no album-specific influence quote.
- Our Goldfrapp row cites "Iggy Pop (Lust for Life) [1/11]": consistent.

### stooges-thestooges (The Stooges, 1969)
Sources: Rolling Stone 500 (2020, No. 488) https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/ ;
Pitchfork, Joe Tangari 2005 https://pitchfork.com/reviews/albums/11842-the-stooges-fun-house/ ; Christgau
https://www.robertchristgau.com/get_artist2.php?id=611 ; Louder buyer's guide; Far Out (Jack Whatley 2020)
https://faroutmagazine.co.uk/iggy-pop-stooges-10-best-albums-playlist/ ; Sound Opinions 692 https://soundopinions.org/show/692 ;
Discogs https://www.discogs.com/master/38215 (US LP https://www.discogs.com/release/4282482: Producer John Cale; Viola John Cale
on We Will Fall).
- genres: punk: Rolling Stone "seminal punk classics", Louder "searing, snarling, sexed-up punk rock"; protopunk: Far Out
  "the very first murmurs of punk"; blues: Pitchfork 2010 "the primordial caveman blues of The Stooges"; psychedelia:
  Pitchfork 2005 "Alexander's bass keeps things grounded in blues and psychedelia".
- energy 4: Rolling Stone "a savagery that unsettled even the most blasé clubgoers" (minus the 10-minute dirge);
  mood 1: "weaponized boredom", Pitchfork "the bleakness of their vision"; experimental 3: We Will Fall "a droning,
  10-minute dirge"; polish 2: Rolling Stone "a primitive debut", Pitchfork Cale gave them "a crisp, muscular sound";
  groove 2: Pitchfork "the raging caveman groove ... on 1969"; electronic 1: guitar band plus piano.
- voice raspy|spoken: Rolling Stone "snarled"; Pitchfork "Iggy's harrowing narration" on We Will Fall.
- instruments: Discogs; Pitchfork "inclusion of piano and sleigh bell" (I Wanna Be Your Dog); Sound Opinions "hand claps and
  sleigh bells". production: wahwah (Rolling Stone "Ron Asheton's wah-wah blurts"), distortion (Pitchfork "a sickeningly
  fuzzed-out guitar solo" on Ann).
- lyrics: sensuality (I Wanna Be Your Dog, "then-controversial refrain"), introspection (alienation, boredom), love (Ann).
- sounds_like: empty. Christgau: "the side of the Velvet Underground that never developed (John Cale produced)": dropped,
  the Velvet Underground is the producer's band. Pitchfork's Doors reference is about the cover, not the sound.
- landmark 1: Louder "nothing like The Stooges existed before this album".

### stooges-funhouse (Fun House, 1970)
Sources: Pitchfork 2005 (as above); Christgau (as above); Sound Opinions 692; Rolling Stone 2020 (Rollins feature)
https://www.rollingstone.com/music/music-features/henry-rollins-interview-1234567/ ; Louder buyer's guide; Bangor Daily News
obituary of Steve Mackay 2015
https://bangordailynews.com/2015/10/14/living/steve-mackay-the-stooges-unforgettable-saxophonist-dead-at-66/ ; Discogs
https://www.discogs.com/master/38209 (US LP https://www.discogs.com/release/1352562: Producer Don Gallucci, Tenor Saxophone
Steven Mackay).
- genres: protopunk (Rolling Stone "the 1970 proto-punk holy grail"); garagerock, rnb, freejazz (Sound Opinions "brought
  together garage rock, rhythm and blues and free jazz"); funk (Sound Opinions, Greg Kot: "an evocative synthesis of rock,
  funk and free jazz"); avantrock (Christgau "this is genuinely 'avant-garde' rock"); blues, psychedelia (Pitchfork); punk
  (Louder "droning psyche-punk classics"). Pitchfork also says "apocalyptic garage meltdown".
- energy 5: Christgau "Shall I compare it to an atom bomb?"; mood 1: Pitchfork "Iggy tossed in a flaming sea, possibly hell";
  experimental 4: L.A. Blues "makes no pretense of song structure" (Pitchfork), "free-noise meltdown" (Rolling Stone);
  polish 1: Pitchfork "recorded Fun House as though it were a live album ... less than perfect from a technical standpoint";
  groove 2: Christgau "the primary appeal of the music isn't physical", though Pitchfork hears "heavy boogie"; tempo 3.
- voice raspy|powerful: Pitchfork "screaming and grunting", "demented vocal".
- production liverecording, roomambience: Sound Opinions: Gallucci "removed all the sound proofing from the studio ...
  With no baffles, there was so much 'bleed' that multitracking was impossible"; "recorded almost entirely live to tape".
- lyrics: sensuality (Loose, T.V. Eye), party (1970: "Out of my mind on a Saturday night", Pitchfork).
- sounds_like: The Doors [1/7] (Louder "the meandering, self-consciously Doors-y title track").
- influenced_by: Maceo Parker. Mackay recalled Iggy's brief: "I want you to play like you are Maceo Parker, but you took LSD"
  (Bangor Daily News). Sax is on 3 of 7 tracks, but the brief is for the record's sax sound; left without a share (judgment).
  A search summary quoted Iggy on Howlin' Wolf ("pertinent for me on Fun House") and on Coltrane/Coleman, but I could not
  open the original pages (Tidal 403), so not used.
- landmark 1: Sound Opinions "setting a template for the punk revolution"; Rolling Stone "proto-punk holy grail".

### stooges-rawpower (Raw Power, 1973; credited to Iggy and the Stooges)
Sources: Pitchfork, Stuart Berman 2010
https://pitchfork.com/reviews/albums/14125-raw-power-legacy-edition-raw-power-deluxe-edition/ ; Guitar.com, Gary Walker 2020
https://guitar.com/reviews/album/the-genius-of-raw-power-by-iggy-and-the-stooges/ ; Albumism 2018
https://albumism.com/features/tribute-celebrating-45-years-of-iggy-the-stooges-raw-power ; Clash Magazine 2011
https://www.clashmusic.com/?p=207734 ; Christgau https://www.robertchristgau.com/get_artist.php?id=3055 ; Louder buyer's guide;
Discogs https://www.discogs.com/master/38175 (US LP https://www.discogs.com/release/489717: "Producer – Iggy Pop", "Mixed By –
David Bowie, Iggy Pop"; Guitar James Williamson; Bass Ron Asheton; Drums Scott Asheton).
- genres: protopunk (Guitar.com "a hugely influential proto-punk manifesto"); hardrock (Nick Kent, quoted by Guitar.com:
  "the greatest, meanest-eyed, coldest-blooded hard rock tour de force"); garagerock (Clash 2011 "vital 1973 garage rock
  classic"); punk (Albumism "incredibly punk"; Guitar.com Consequence quote "most important punk record"); rockandroll
  (Guitar.com "roots firmly in 50s rock'n'roll"; Pitchfork "Raw Power's 50s-rock roots"); blues (Guitar.com I Need Somebody
  "a moody blues vamp", Albumism "bluesy roots").
- energy 5: Guitar.com "frighteningly loud, furiously uncompromising"; tempo 4: Guitar.com "a harder edge and more adrenal
  tempo than predecessor Funhouse"; mood 2: heroin/death themes but "fun and jangling" title track (Albumism);
  polish 2: Pitchfork "Bowie's infamously treble-heavy Raw Power mix", Christgau "thin as an epicure's wrist", self-produced
  "shambolic affair" (Guitar.com); experimental 2; groove 2 ("wild, groovy" Shake Appeal only); electronic 1.
- voice raspy|powerful: Albumism "a rasping Jim Morrison-quality", "screaming to the point where his voice fries".
- instruments: Discogs; Guitar.com "Williamson's menacing acoustic riff" (Gimme Danger), "an insistent piano", "his celesta
  part" (I Need Somebody); Christgau 1997 "you can finally hear the celeste on Penetration".
- production: delay, coopertimecube (NEW): Guitar.com "feeding the guitar track on Gimme Danger through the Cooper Time Cube,
  a garden-hose based delay unit".
- lyrics: political (Guitar.com Search and Destroy "a furious rallying cry for the anti-Vietnam war movement"), sensuality
  (Gimme Danger "simmering with sexual tension"), introspection (drug metaphors, Albumism).
- producers: Iggy Pop (Discogs; Guitar.com "it was self-produced"). Bowie mixed it only: not a producer.
- sounds_like: Chuck Berry [1/8] (Guitar.com "the influence of Chuck Berry on Williamson's rock-solid rhythm" on Your Pretty
  Face; Albumism "rooted in Chuck Berry"); The Doors [1/8] (Guitar.com "the Doors-esque I Need Somebody"; Albumism's "Jim
  Morrison-quality" vocal on Penetration).
- influenced_by: Little Richard [1/8]: Iggy on Shake Appeal, "get to my dream of being Little Richard for a minute"
  (Guitar.com, Albumism).
- landmark 1: Albumism "The Stooges' quintessential studio album"; Pitchfork "One of the greatest rock albums ever".
- Our Smiths row cites "The Stooges (Raw Power)": consistent.

### loureed-transformer (Transformer, 1972)
Sources: Pitchfork 2003 (8.4) https://pitchfork.com/reviews/albums/6731-transformer/ ; Rolling Stone, Lou Reed essential
albums 2016 https://www.rollingstone.com/feature/lou-reeds-essential-albums-115222/ ; Christgau
https://www.robertchristgau.com/get_artist.php?name=Lou+Reed ; The Vinyl District 2013 (Berlin piece, mentions Transformer)
https://thevinyldistrict.com/storefront/graded-curve-lou-reed-berlin ; The National 2023 (as below); Discogs
https://www.discogs.com/master/44278 (UK LP https://www.discogs.com/release/32146632: Producer David Bowie, Mick Ronson;
Ronson "String And Bass (Brass) Arrangements", piano, recorder; Herbie Flowers tuba; Ronnie Ross baritone sax) and
MusicBrainz (Herbie Flowers double bass and bass guitar; drums Barry De Souza, John Halsey, Ritchie Dharma).
- genres: glamrock (Pitchfork "one of both glam rock's and Reed's finest moments"; Rolling Stone "returning the favor of
  glam rock to its American architect"; TVD "a victory for the serious-side of glam-rock"); pop (Pitchfork "took the strong
  pop undercurrent ... and indulged"; Rolling Stone "left-hook pop masterpiece"); cabaret (Rolling Stone: Walk on the Wild
  Side "a smoke-clouded jazz-cabaret vamp", the lead hit, so third).
- energy 3: rockers (Vicious "a stiff, snot-nosed Godzilla of a rock song") beside "more sedate tracks" (Pitchfork);
  theatrical 4 / polish 4: Pitchfork "ornate arrangements", "production work was so loaded that ... it might have been
  overbearing"; experimental 2: pop direction; mood 3: "gleefully tongue-in-cheek" vs tender Perfect Day; tempo 2,
  groove 2 (ballads and mid-tempo vamps); electronic 1.
- voice soft: Pitchfork "crooning in a sensitive lilt", "his dry vocal delivery".
- lyrics: irony, identity (Walk on the Wild Side "celebrated ... transgender realization", Rolling Stone), storytelling
  (Factory family portraits), love (Perfect Day, Satellite of Love), sensuality.
- sounds_like: empty (Bowie and Ronson produced; Velvet Underground is his own band). influenced_by: none documented.
- landmark 1: Rolling Stone "Reed came out fully as a solo star on this left-hook pop masterpiece".
- No legacy row: no source on influence on later music (Pitchfork's "blueprint" is for Reed's own solo work).

### loureed-berlin (Berlin, 1973)
Sources: Pitchfork 2008 (review of Berlin: Live at St. Ann's Warehouse, discusses the original)
https://pitchfork.com/reviews/albums/12391-berlin-live-at-st-anns-warehouse/ ; Rolling Stone 2016 guide (as above); The Vinyl
District 2013 https://thevinyldistrict.com/storefront/graded-curve-lou-reed-berlin ; The National 2023
https://www.thenationalnews.com/weekend/2023/09/29/fifty-years-on-why-lou-reeds-berlin-remains-one-of-the-bleakest-albums-ever-made ;
Christgau; Discogs https://www.discogs.com/master/44291 (US LP https://www.discogs.com/release/4896252: Producer Bob Ezrin;
arranged by Ezrin and Allan Macmillan; Choir credits; Jack Bruce bass; Aynsley Dunbar, B.J. Wilson drums; Steve Winwood
organ, harmonium; Ezrin piano, mellotron; Michael Brecker tenor sax; Randy Brecker trumpet; Jon Pierson bass trombone;
Gene Martynec synthesizer on The Bed; Reed vocals, acoustic guitar).
- genres: rockopera (TVD "if Berlin is often called a rock opera"), prog (Rolling Stone "Reed's version of prog-rock").
  Both medium: TVD argues it "transcends the appellation".
- mood 0: Pitchfork "absurdly depressing", "unwaveringly dark songs"; NYT via Pitchfork "the most depressing album ever
  made". theatrical 4: Rolling Stone "decked out in orchestral pomp", Pitchfork "a melodrama". polish 4: Pitchfork
  "characteristically lush orchestration", The National "a healthy budget", "ornate ... instrumentation". energy 2 /
  tempo 1 / groove 0: Pitchfork "muted", ballad-led cycle; a few rockers (TVD: Caroline Says I "a sturdy rocker").
  experimental 3: The National "experimental and ambient soundscapes". electronic 1: mellotron, synth on one track.
- voice soft: The National "Reed croons in lullaby fashion".
- instruments: Discogs + TVD ("the lilting flutes during The Kids"; Reed "doesn't even plug in his electric").
- production: choirvocals (Discogs choir credits; Pitchfork "the children's chorus at the end" of Sad Song; The National
  "a lovely choral arrangement"); soundeffects (TVD "the crying baby" on The Kids).
- lyrics: storytelling (song cycle of Jim and Caroline), heartbreak, introspection; drugs and domestic violence.
- producers: Bob Ezrin.
- sounds_like: Pink Floyd [1/10]: Pitchfork "'Sad Song' is a sublimely bastardized Pink Floyd song, from the psych solos to
  the children's chorus".
- landmark 0: sources call it an underdog/rehabbed classic, none calls it defining. confidence medium (genre tokens).
- Legacy 3: The National quote (later artists drawn to its soundscapes); no specific artists named.

### clash-theclash (The Clash, 1977)
Sources: Louder, Scott Rowley 2017 https://www.loudersound.com/reviews/the-clash-the-clash-album-review ; Clash Magazine, Kris
Needs 2012 https://www.clashmusic.com/features/classic-albums-the-clash-the-clash/ ; Christgau
https://www.robertchristgau.com/get_artist.php?name=The+Clash ; Louder London Calling review (Christgau and Sounds quotes)
https://www.loudersound.com/reviews/the-clash-london-calling-album-review ; Discogs https://www.discogs.com/master/24371 (UK LP
https://www.discogs.com/release/13088764: Producer Mickey Foote; Strummer, Jones guitar/vocals; Simonon bass; drums "Tory
Crimes" = Terry Chimes).
- genres: punk (Louder "the holy trinity of punk"); rock (Christgau "the greatest rock and roll album ever manufactured
  anywhere"; Mick Jones "a rock 'n' roll track in 4/4"); reggae (Louder "punk-reggae" on Police And Thieves, one track, last).
- energy 5 / tempo 4: Louder "short adrenaline bursts", White Riot album version "twice as fast and three times more
  furious"; Christgau "it never stops snarling". polish 1: Clash Magazine "recorded over three speed-fuelled weekends ...
  (the whole thing cost £4,000)", "minimal studio enhancement"; Louder "messy and thrilling". mood 2: anger and boredom
  with "defiance and dark humour" (Louder). experimental 2: Police And Thieves "experimental" (Jones). groove 2.
- voice raspy|clear: Louder "Strummer's yobbish bark balanced by Jones's boyish sensitivity".
- production: liverecording (Clash Magazine "They basically captured the live set"); dubeffects (Mick Jones: "We've
  incorporated dub reggae techniques" on Police And Thieves).
- lyrics: social (boring jobs, bosses, Job Centre), political (race, police: White Riot), irony ("dark humour").
- sounds_like: none (Needs compares its importance, not its sound, to the first Rolling Stones album).
- landmark 1: Christgau (UK version) "the greatest rock and roll album ever manufactured anywhere"; Louder: Sounds voted
  it the all-time greatest album in 1985.
- Legacy 4: punk-reggae link (Louder, Clash Magazine). Louder's "without whom it's hard to imagine The Jam, Stiff Little
  Fingers, Sham 69 or Generation X, let alone Green Day, Rancid, or maybe even U2" is about the band, so not used for the score.

### clash-londoncalling (London Calling, 1979)
Sources: Pitchfork, Amanda Petrusich 2004 (10.0)
https://pitchfork.com/reviews/albums/1490-london-calling-25th-anniversary-legacy-edition/ ; Rolling Stone 2019 (10 things)
https://www.rollingstone.com/feature/clash-london-calling-album-facts-923232/ ; Christgau (A+); NPR 2020 (Greil Marcus)
https://www.npr.org/transcripts/799345169 ; Louder 2017 https://www.loudersound.com/reviews/the-clash-london-calling-album-review ;
Discogs https://www.discogs.com/master/19382 (UK LP https://www.discogs.com/release/470912: Producer Guy Stevens; Brass The
Irish Horns; Organ Micky Gallagher; Piano Jones, Strummer; Drums, Percussion Topper Headon; engineer Bill Price).
- genres: Rolling Stone "a unique fusion of punk, rockabilly, reggae, R&B, and pop"; dub (Pitchfork "inspired by the musical
  tenets of dub and reggae"); rock (Pitchfork "The Clash are a rock band, and 1979's London Calling is their creative apex";
  Christgau "hard-rocking").
- energy 4: Pitchfork "pummeling"; mood 3: Marcus "Rough. Funny. Expansive", apocalyptic title track; experimental 3:
  "unlike anything heard before or since" (Rolling Stone); polish 3: Christgau "Complaints about 'slick' production are
  absurd--Guy Stevens slick?", Pitchfork "has its fair share of slipped fingers"; groove 3: reggae, "shuffle" (Christgau);
  theatrical 3; tempo 3.
- voice raspy|clear: Christgau "A gratifyingly loose Joe Strummer makes virtuoso use of his four-note range", "the empathy
  of Mick Jones's vocal"; Pitchfork "big, prophetic hollers".
- instruments: Discogs; Christgau "brass, pianner, and shuffle".
- lyrics: political (Pitchfork "The Clash insisted on forefronting their politics"; Spanish Bombs), social (Lost in the
  Supermarket "anti-consumerist screed"), storytelling.
- producers: Guy Stevens.
- sounds_like / influenced_by: none documented. Brand New Cadillac (Vince Taylor), Wrong 'Em Boyo and Revolution Rock are
  covers, so not influences.
- landmark 1: Pitchfork "one of punk's defining documents ... their creative apex"; Rolling Stone "Rolling Stone labeled it
  the best album of the Eighties".
- No legacy row: no opened source states its influence on later music (a Punknews quote seen in search results was not opened).

## 3. New tokens
- production: `coopertimecube` (Cooper Time Cube delay unit, Raw Power: Guitar.com). Also tagged `delay`.
- No new genre or instrument tokens.

## 4. Could not open / uncertain
- AllMusic (403), Treble (403), Tidal "Iggy Pop in the Seventies" (403), Rolling Stone Japan's 2020 list reprint (403),
  uDiscover (403), This Is Dig (403), WPR (TLS error). Rolling Stone's own 500 page only loads the first 50 entries (The
  Stooges No. 488 confirmed). The other 2020 ranks seen in search snippets (London Calling 16, Fun House 94, Transformer
  109) are not cited.
- Iggy's quote "a cross between James Brown and Kraftwerk" is quoted by Diffuser and Clash; the original 1977 interview was
  not found.
- Lust for Life producers: sleeve "Bewlay Bros."; listed as Bowie|Iggy Pop from Pitchfork's "co-producer" wording.
- The Idiot voice (clear|spoken) is a weak mapping of "deep baritone"; Berlin genres (rockopera|prog) are medium.
- Fun House influence Maceo Parker comes from Mackay's recollection of Iggy's words (obituary); given no share.
- Kill City (1977, Iggy Pop & James Williamson) is in the Iggy discography as a collaboration; MusicBrainz 1977-11, Christgau
  lists the Bomp LP as 1978.
- Coney Island Baby: MusicBrainz says 1975-12; verify before import.
- Mapping needed when importing: "Iggy & the Stooges" (rem-monster) should resolve to `stooges`; "Lou Reed and John Cale
  (Songs for Drella)" (dylan) has no row.

