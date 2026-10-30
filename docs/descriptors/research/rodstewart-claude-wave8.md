# Claude research notes (Oct 2026, wave 5)

# Wave 8 / E: evidence notes (Steely Dan, 10cc, Aerosmith, Rod Stewart, Carole King)

Nine rows: Steely Dan 3, 10cc 1, Aerosmith 2, Rod Stewart 2, Carole King 1.

**Sources used throughout**
- Credits: Discogs API, master plus main release (dumps in dl/dg_*.txt).
- Grades: Christgau Consumer Guide artist pages (dl/xg_*.txt).
- Rolling Stone 500 Greatest Albums (2020) positions, read from Rolling Stone Japan's copy of the list: https://rollingstonejapan.com/articles/detail/35155/15/1/1. Ranks: Tapestry 25, Aja 63, Can't Buy a Thrill 168, Every Picture Tells a Story 177, Rocks 366.

**Could not open:** AllMusic (403), loc.gov registry list (403), rollingstone.com list pages (dynamic), Kerrang Slash interview (403). Wikipedia was used only to find sources.

**Left out:** 10cc Sheet Music. Christgau and a Louder blurb are the only sources on its sound, and Discogs has no per-track credits, so the row would be thin.

## 1. Where our catalogue cites them (grep of docs/descriptors/*.csv and src/data/artistInfluences.ts)

**Steely Dan** (records named: Aja, Gaucho)
- arcticmonkeys-thecar: Steely Dan (Gaucho) [1/10]
- daftpunk-randomaccessmemories: [1/13]
- direstraits-brothersinarms
- harrystyles-harryshouse
- hotchip-madeinthedark
- sza-sos: [1/23]
- tameimpala-theslowrush
- tff-theseedsoflove
- toto-totoiv: Steely Dan (Aja) and Steely Dan (Gaucho)
- artistInfluences.ts: Sananda Maitreya (Terence Trent D'Arby); Geoff Downes/Buggles

**10cc** (no record named)
- abba-arrival
- buggles-theageofplastic
- hotchip-madeinthedark
- queen-anightattheopera, queen-adayattheraces
- rem-automaticforthepeople (2 cells)
- terencetrentdarby-symphonyordamn
- artistInfluences.ts: Geoff Downes/Buggles

**Aerosmith** (record named: Rocks)
- gnr-appetitefordestruction: Aerosmith (Rocks)
- gnr-gnrlies, gnr-useyourillusioni
- pearljam-ten
- queen-sheerheartattack, queen-newsoftheworld
- roxette-joyride
- scorpions-lovedrive
- artistInfluences.ts: Slash/GNR (Kerrang, Rocks), Alberto Camerini, one more list at line 54, a guitarist list at line 554

**Rod Stewart** (no record named)
- arcticmonkeys-am: [1/12]
- bonnietyler (4 albums: theworldstartstonight, naturalforce, diamondcut, goodbyetotheisland)
- bryanadams-18tilidie
- harrystyles-harrystyles
- kimcarnes-mistakenidentity
- terencetrentdarby-vibrator
- artistInfluences.ts: Sananda Maitreya ("Rod Stewart's soul-rock showed him a path")

**Carole King** (record named: Tapestry)
- adele-19
- adele-21: Carole King (Tapestry) [2/12]
- gaga-astarisborn
- jonimitchell-blue: Carole King (Tapestry)
- kimcarnes (restonme, kimcarnes, stvincentscourt)
- lanadelrey-normanfuckingrockwell: Carole King (Tapestry)
- sabrina-emailsicantsend
- artistInfluences.ts: Matthew Wilder; Kim Carnes list. Irene Cara's note says King was left out.

Album choice: the three named records come first (Aja, Gaucho, Rocks, Tapestry). Then each artist's key album: Can't Buy a Thrill, The Original Soundtrack, Toys in the Attic, Every Picture Tells a Story, Atlantic Crossing.

## steelydan-cantbuyathrill (1972)

**Pitchfork, Sasha Geffen, 2019, 8.6** (https://pitchfork.com/reviews/albums/steely-dan-cant-buy-a-thrill/)
- "playing jazz-rock with a group of like-minded nerds"
- "the credits for Thrill number a dozen musicians on instruments as far-flung as electric sitar and flugelhorn"
- "Echoes of Zombies' psychedelia and Beach Boys' sunshine also waft through Thrill" → sounds_like The Zombies, The Beach Boys
- "Take 'Dirty Work,' basically an Eagles song" → Eagles [1/10]
- "sunny, flippant ear candy"; "hooks aimed straight at your dopamine receptors, with vocal harmonies and gleaming guitar lines braided tight" → mood 4, polish 4
- "The weird was there, embryonic" → experimental 2
- Pitchfork also says they "claimed the Rolling Stones, the Beatles, and Dylan as influences". That is reported and not tied to this album, so it is not used in influenced_by.

**Christgau A** (https://www.robertchristgau.com/get_artist.php?name=steely+dan)
- "'Do It Again,' a catchy modified mambo" → mambo (one track, 4th place)
- "the beat swings more than it blasts" → energy 3, groove 3
- "a loser so compulsive"; "a hate song to a professed genius" → lyrics irony, storytelling

**Discogs** master 16883 / release 1580493
- genres Rock; styles Pop Rock, Jazz-Rock → poprock, jazzrock, rock
- Producer Gary Katz
- Instruments: electric sitar (Denny Dias); pedal steel and Spanish guitar (Jeff Baxter); piano, electric piano and organ (Fagen); flugelhorn (Snooky Young); tenor sax (Jerome Richardson); percussion (Victor Feldman)

**Other cells**
- RS500 2020 #168.
- voice left empty: Christgau's "homogenized vocals" does not map to a voice type, and lead vocals are split between David Palmer and Fagen.
- landmark 0: no source calls it defining.

## steelydan-aja (1977)

**Pitchfork, Amanda Petrusich, 2019, 10.0** (https://pitchfork.com/reviews/albums/steely-dan-aja/)
- "Aja is as much a jazz record as a pop one… which tradition (fusion, R&B, soul, disco, classical) was being mined" → jazz, pop, then jazzfusion, rnb, soul, disco in the long tail ("classical" left out as too loose)
- "full of strange, unprecedented, disorienting moves"; obscure chords (mu major) → experimental 3
- "the production on Aja is so expert" → polish 5
- "Fagen croons… His voice thins… a little gasp of tenderness" → voice soft
- "a little bit of pleasure just for pleasure's sake" → mood 3, given the loser-fantasy lyrics
- Lyrics "funny, surreal… narratively ambiguous"; Deacon Blues' "mythic loserdom" → storytelling, irony, introspection
- Becker: "We overdubbed a lot of the overdubs over"; more than 40 session musicians → overdubbing
- Steely Dan's "most commercially successful release"

**Christgau B+**: "well-crafted West Coast studio jazz", "Deacon Blues… one of their warmest".

**Discogs** master 16921 / release 1842334
- genres Jazz, Rock; style Jazz-Rock → jazzrock first
- Producer Gary Katz
- Horns arranged and conducted by Tom Scott → hornarrangements
- Instruments: synthesizer (Fagen), electric pianos, clavinet (Joe Sample, Don Grolnick), lyricon (Tom Scott), vibes (Feldman, as mallets), saxes and flutes, brass, percussion, a police whistle (not listed as an instrument)

**Other cells**
- groove 3: Pitchfork hears the band getting "jazzier, groovier, weirder" through the 1970s; no dance-floor claim.
- electronic 1: synth and electric pianos, but an acoustic/electric band record.
- landmark 1: Library of Congress National Recording Registry (LCIB May 2011: https://loc.gov/loc/lcib/1105/news.html); RS500 #63; Pitchfork 10.

## steelydan-gaucho (1980)

**Pitchfork, Alex Pappademas, 2019, 9.4** (https://pitchfork.com/reviews/albums/steely-dan-gaucho/)
- "There may be no more perfectly yacht-rock tercet in the Dan canon" → yachtrock (3rd; the source applies it to a lyric within their style)
- "The almost pathologically overdetermined production is elegant, arid, a little forbidding… every last tinkling chime sounds like it took 12 days to mix" → polish 5
- "decay, disillusionment, a gnawing sadness" → mood 1
- "the player with the heaviest footprint belongs to 'Wendel,' a Paleolithic 12-bit sampling unit… to impose a drum-machine-like consistency on the work of live drummers" → instruments sampler; production sampling, drumprogramming ("the option to program with real drum hits")
- Becker (Mojo): "disco records that were just whack-whack, so perfect… we didn't see why we couldn't have that too" → groove 3. Disco is not used as a genre: the source names it as a target for the drum feel only.
- "about breakups and estrangements and encroaching age and… hard drugs"; older men chasing younger women; "a sneer and a tear" → storytelling, irony, heartbreak, sensuality

**Christgau B-**: "intellectual cocktail rock"; "top-drawer El Lay studio hacks". "Cocktail rock" is not a token, so it is not used.

**Discogs** master 17020 / release 844094
- genres Jazz, Rock; styles Pop Rock, Jazz-Rock → jazzrock, poprock, jazz
- Producer Gary Katz
- "Sequenced By [Wendal], Effects [Wendal]: Roger Nichols"
- Horn arrangements by Rob Mounsey and Tom Scott
- Instruments: bass clarinet (George Marge, Wally Kane), lyricon, trumpet/flugelhorn (Randy Brecker)

**Other cells**
- Mark Knopfler plays lead guitar on Time Out of Mind, so Dire Straits cannot be linked from here.
- voice left empty: no source describes Fagen's voice on this album.
- landmark 0.

## tencc-theoriginalsoundtrack (1975)

**Best Classic Bands, 2022** (https://bestclassicbands.com/10cc-original-soundtrack-review-10-31-222/)
- Une Nuit a Paris "at times sounds like Queen, Zappa and Gershwin in a blender" → Queen, Frank Zappa, George Gershwin
- The Second Sitting for the Last Supper "nods in the direction of Steely Dan, Elton John, the Who and Chuck Berry" → [1/8] each
- On Brand New Day and Flying Junk: "one can't help but hear how 10cc was competing with Queen… a similar comic and grandiose aesthetic" → Queen [3/8] in total
- "bicycle horn, crowd noises, slamming doors and other effects" → soundeffects
- "all four vocalists form a chorus" → voice choral
- "over 200 vocal overdubs" on I'm Not in Love
- "According to the composers, the feel and rhythm are inspired by 'The Girl From Ipanema'" → influenced_by Antônio Carlos Jobim [1/8]. **Uncertain:** the source names the song, not an artist. If you prefer a record, the link would be Getz/Gilberto; drop it if a song-level influence named without its artist is not enough.
- "masterpiece" status; quotes Ken Barnes (Rolling Stone): "Musically there's more going on than in ten Yes albums, yet it's generally as accessible as a straight pop band." Not used for sounds_like: it contrasts them with Yes rather than comparing.

**Record Collector, 2023** (https://recordcollectormag.com/reviews/album/the-original-soundtrack)
- "the peak, certainly in commercial terms"
- Une Nuit's "quasi-operatic, Bohemian Rhapsody-style grandeur"
- "Godley's inspired vocal arrangement and Creme's suggestion of using tape loops"

**Louder, best 10cc albums** (https://www.loudersound.com/music/albums/10cc-best-albums)
- "a darker affair than its predecessors… noir tone" → mood 2
- "an eight-minute mini-operetta" → theatrical 4
- "production landmark I'm Not In Love… revolutionary use of looped, layered voices" → landmark 1, layeredvocals, tapeloops
- "a Zep-heavy monster like The Second Sitting For The Last Supper" → Led Zeppelin [1/8]

**Tape Op, Ian Brennan** (https://tapeop.com/interviews/165/making-10ccs-im-not-love)
- 16 passes per note, spliced into 12-foot tape loops → tapesplicing, tapeloops, overdubbing
- "A second track… run at half-speed to drop the pitch" → varispeed
- "a diffuse bass drum created with a Moog synth" → moog
- "a DI'd rhythm electric guitar" → directinjection
- "a toy music box" → musicbox
- "10cc were pioneers of 'artists as producer/engineers'"

**Discogs** master 30537 / release 778762
- style Art Rock → artrock
- "Producer, Recorded By: 10cc"
- "Effects [Gizmo]: Lol Creme" → gizmotron
- Instruments: Mbira [Karima] (Godley), autoharp, 6-string bass, double bass, timpani, timbales, bongos, vibraphone (as mallets), violin, cello, mandolin, steel guitar, Moog

**Genres:** prog from Best Classic Bands ("ambitious prog"); pop from Louder (pop-rock songcraft) and Best Classic Bands ("commercial pop songwriting").

**Christgau D+** (dissent: "imitation movie mush"). Noted in reception; acclaim kept at 4.

**Other cells**
- tempo left empty: tempos "come and go".
- producers: the credit names the band, "10cc".

## aerosmith-toysintheattic (1975)

**Ultimate Classic Rock** (https://ultimateclassicrock.com/aerosmith-toys-in-the-attic/)
- Joe Perry: "We knew we wanted to play some uptempo songs, some shuffle songs and some blues rock" → bluesrock, tempo 4
- Walk This Way came from a desire to write "something funky"; it is the album's biggest hit, so funk goes 3rd
- "this was our first real studio record" → polish 3
- Steven Tyler: "I knew how the Beatles, the Animals and the Kinks did it — with lyrics and titles. I saw reason and rhyme in all the lunacy" → influenced_by The Beatles, The Animals, The Kinks. **Medium:** a songwriting model rather than a sound.
- "a quantum leap forward… the point of no return" → landmark 1, importance 5

**Christgau B+**
- "even the sludgy numbers get crazy"
- "a gift for the dirty line"; "Big Ten Inch Record" → lyrics sensuality, irony ("clever")

**Discogs** master 36627 / release 6790493
- styles Hard Rock, Blues Rock
- Producer Jack Douglas ("Arranged By: Aerosmith" is an arranging credit, not production)
- Instruments: harmonica (Tyler), slide and acoustic guitar (Perry), piano (Scott Cushnie), bass marimba (Jay Messina, as mallets), orchestra arranged and conducted by Mike Mainieri

**Other cells**
- voice left empty: no description of the voice.
- groove 3: funky and shuffle songs.

## aerosmith-rocks (1976)

**Ultimate Classic Rock** (https://ultimateclassicrock.com/aerosmith-rocks/)
- Perry: "I wanted the hardest-rocking record imaginable"; "blistering guitars, blistering vocals, balls-to-the-wall smash-your-eardrums production" → energy 5, voice powerful (medium)
- Brad Whitford: "basically live and very little production or overdubs on it… Aerosmith kind of in the raw" → polish 2, liverecording
- Recorded with a mobile studio in their Warehouse rehearsal space
- Instrument swap on Sick as a Dog (Perry on bass, then Tyler)
- "the ultimate soundtrack to the party" → lyrics party

**Christgau A-**
- "they've retooled Led Zeppelin till the English warhorse is all glitz and flow" → sounds_like Led Zeppelin
- "complex song structures that don't sacrifice the basic 4/4 and I-IV-V" → experimental 1
- In the Gems review: "they made a great album once (and only once)"

**Discogs** master 36741 / release 380484
- styles Hard Rock, Blues Rock
- Producers Jack Douglas and Aerosmith ("Producer, Arranged By: Aerosmith") → both
- Instruments: lap steel and 6-string bass (Perry), banjo (Paul Prestopino), keyboards (Tyler)

**Other cells**
- RS500 2020 #366. landmark 1.
- Legacy 3: Loudwire 2022, Slash on Nobody's Fault "off the Rocks record… had a lot to do with how I ended up where I am" (https://loudwire.com/slash-which-aerosmith-album-song-influenced-musical-path/).
- Heavy metal is left out as a genre: the claim (LA Times, 1994) was seen only through a search summary.

## rodstewart-everypicturetellsastory (1971)

**Pitchfork Sunday Review, Tal Rosenberg, 2023, 9.4** (https://pitchfork.com/reviews/albums/rod-stewart-every-picture-tells-a-story/)
- "a rollicking and surprisingly grounded document of early '70s folk-rock"; "a true fusion of folk and rock" → folkrock, folk
- "a bold rasp"; "brambly crooning" → voice raspy
- "Nothing is in lockstep"; the band seems "as if they're learning the song while they're playing it" → polish 2
- Seems Like a Long Time turned into "the bleary gospel song it always should have been"; Reason to Believe "a hybrid of gospel and British folk" → gospel
- "it sounds a lot like the Rolling Stones" → sounds_like The Rolling Stones. The Faces, his own band, back one track and are excluded.
- Instruments: Maggie May's McLagan organ, Sears' celeste, Ray Jackson's mandolin; "pedal and slide guitar" on Mandolin Wind; a 12-string acoustic
- "the album that made Rod Stewart a star" → landmark 1, importance 5
- Lyrics: an insecure young man, Maggie May's story, "a sentimentalist suspicious of nostalgia" → storytelling, love, introspection, nostalgia

**Christgau A+**
- "it's the mandolin and pedal steel that come through sharpest"
- "'Mandolin Wind' leading into Motown leading into Tim Hardin" → motown (one track, I'm Losing You)

**Discogs** master 68324 / release 1300866
- styles Blues Rock, Folk Rock → bluesrock
- "Producer, Acoustic Guitar, Vocals: Rod Stewart"
- Violin: Dick Powell

**Other cells**
- Influences: Stewart's Dylan quote is artist-level, so it goes in artists.md, not this row.
- RS500 2020 #177.

## rodstewart-atlanticcrossing (1975) — thin row, confidence low

**Ultimate Classic Rock** (https://ultimateclassicrock.com/rod-stewart-atlantic-crossing/)
- Stewart: "a long-held ambition to offer his version of Memphis soul" (paraphrase by UCR) → memphissoul, soul
- Rhythm sections: the MGs, Muscle Shoals and Al Green's
- Producer Tom Dowd
- First album without the Faces; UK No. 1
- **Not used for influenced_by:** the MGs (Cropper, Dunn, Al Jackson) play on the album, so they are collaborators.

**Christgau B+**: "The Southern session men… suit his more generalized interpretive approach, on the 'slow side' as well as the 'fast'."

**Discogs** master 68399 / release 864428
- styles Rock & Roll, Soft Rock, Pop Rock → rockandroll, softrock, poprock
- Strings arranged by Arif Mardin and James Mitchell → stringarrangements
- The Memphis Horns → brass, hornarrangements
- David Lindley on mandolin and violin

**Other cells**
- Only electronic 0 is filled: credits show no electronic instruments. No review describes the sound closely enough for the other scales.

## caroleking-tapestry (1971)

**Pitchfork Sunday Review, Jenn Pelly, 2019, 10.0** (https://pitchfork.com/reviews/albums/carole-king-tapestry/)
- "She called her own music 'soft rock'" → softrock first
- "songs that mix girl-group longing, Broadway balladeering, blues, soul, and wonder" → girlgrouppop, blues, soul. "Broadway balladeering" is not mapped: showtunes would be a stretch.
- "The gospel-tinged backing vocals of 'Way Over Yonder'" → gospel (one track, long tail)
- Singer-songwriter context ("the sea change… towards the singer-songwriter") → songwriter
- "Tapestry used the room itself as an instrument… Lou Adler wanted it to sound like the understated… demos… the tactile intimacy of a woman at the piano singing straight to you. The result was precise but not overly manicured" → roomambience, theatrical 1, polish 3
- "a sweet serenity"; "if it feels comforting, that is a gift" → mood 4
- Spirituality and yoga; heartbreak (It's Too Late); love and friendship → lyrics love, heartbreak, introspection, spiritual
- **Not used for influenced_by:** King wrote So Far Away and You've Got a Friend "with his [James Taylor's] sunstruck sound in mind", but Taylor plays on the album, so he is a collaborator. Joni Mitchell sings backing vocals, so she is excluded too.
- 15 weeks at No. 1, four Grammys

**Christgau A-**: "Pacific rock… liberated [the female voice] from technical decorum… with all the cracks and imperfections."

**Discogs** master 104166 / release 1395530
- genres Rock, Pop; style Pop Rock → poprock
- Producer Lou Adler
- Instruments: piano, bass, drums, electric and acoustic guitar, electric piano, congas, a string quartet (violin, viola, cello, string bass), Curtis Amy on saxophones and flute

**Other cells**
- Voice left empty: Pitchfork's "unvarnished", her voice breaking, a "maxed out… alto" does not fit one listed voice type cleanly. Tell me if you want soft or clear.
- landmark 1: NRR (https://www.caroleking.com/news/tapestry-added-national-recording-registry), RS500 2020 #25, Pitchfork 10.

## Reception notes
- mainstream 3 for every row: all are artist-led records.
  - Steely Dan, 10cc and Stewart's EPTS produced themselves or with their own long-time producer.
  - Toys and Rocks were built from the band's riffs with Jack Douglas.
  - Atlantic Crossing: UCR speaks of an "increasingly commercial focus on subsequent efforts", so later albums, not this one.
- Gaucho importance 3: platinum and a top 10 single, but no source calls it central to their career.

## Legacy notes
- TOS 4: Louder says Une Nuit influenced Bohemian Rhapsody and I'm Not in Love was a signpost for Trevor Horn ("Eighties pop began here").
- Rocks 3: Loudwire, Slash.
- Aja 3 and Tapestry 3: National Recording Registry, as for abba-arrival in the repo. **Flag:** the registry marks significance, not influence on later music. Drop these two rows if that is too loose.

## New tokens
None. Every genre, instrument and production value is already in the lists: gizmotron, tapeloops, varispeed, directinjection, sampler, lyricon, electricsitar, mbira, musicbox, memphissoul, girlgrouppop, yachtrock, mambo, motown.

