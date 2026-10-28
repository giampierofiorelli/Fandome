# Landmark albums of often-cited artists, researched by Claude (Oct 2026)

Owner: add the artists that the catalogue's rows cite often (sounds like, influences) or that weak suggestion lists need. One landmark album each, researched by Claude agents from Wikipedia and the sources it cites. Claude's import fixes: funkpop mapped to the existing popfunk; Exile on Main St. drops Aretha Franklin (attending her sessions is not a documented influence); Pet Sounds keeps Phil Spector as an influence only.

## aretha-ineverlovedamanthewayiloveyou

# Aretha Franklin, I Never Loved a Man the Way I Love You (1967)

Sources
- https://en.wikipedia.org/wiki/I_Never_Loved_a_Man_the_Way_I_Love_You : genre southern soul (infobox); producer Jerry Wexler (infobox; text also says Rick Hall produced the title track at FAME, not credited in infobox, so left out: doubt); FAME Muscle Shoals + Atlantic NY; personnel (Franklin piano/vocals, Spooner Oldham keyboards, guitars, bass, drums, trumpet, tenor and baritone sax, backing vocals by Carolyn/Erma Franklin and Cissy Houston); tape-speed mismatch; reception (AllMusic 5, RS Album Guide 5, Christgau A, Q 4, RS 500 #13 2020, Pitchfork 60s #10, RS Women in Rock #1, US #2, R&B #1, Gold).
- https://bestclassicbands.com/aretha-franklin-i-never-loved-a-man-review-8-4-24/ : R&B, soul, "gospel-tinged"; Oldham electric piano and Hammond organ; King Curtis + horn section; musicians recorded live together at FAME; themes heartbreak, sensuality (Dr. Feelgood), self-respect/identity, civil rights (A Change Is Gonna Come).
- https://www.rollingstone.com/music/music-features/aretha-franklin-never-loved-man-way-love-you-712306/ (via search snippet): Fame sessions made "a new kind of soul" drawing on gospel, R&B and rock and roll (basis for gospel/rnb/rockandroll genres); "the album that made her a legend".
- Search snippet (equipboard / producelikeapro): Oldham on a Wurlitzer 140B electric piano for the title track (model not added: tied to one song, sources thin).

Left EMPTY: influenced_by (only covers of Otis Redding, Sam Cooke, Ray Charles, King Curtis: covers are not influences); sounds_like (only a one-track comparison to Bacharach-David/Dionne Warwick found).
Voice `powerful` only (backing choir of sisters not a lead voice type). Polish 2: live, small-studio session with audible tuning mismatch.

New tokens
- genre `southernsoul`: parents soul|rnb.

## beachboys-petsounds

# Pet Sounds (The Beach Boys, 1966)
- https://en.wikipedia.org/wiki/Pet_Sounds — genres: progressive pop, chamber pop, psychedelic pop, art rock (infobox); text: baroque pop, pop rock, experimental rock, avant-pop, symphonic rock, folk rock. Producer Brian Wilson. Wrecking Crew, Western/Gold Star/Columbia/Sunset Sound; Wall of Sound "interpretation", mono, unison layering and doubling (wallofsound|overdubbing|layeredvocals), string and horn sections. Personnel instruments: Electro-Theremin, harpsichord, tack piano, Hammond organs, 12-strings, basses, mandolin, banjo, accordion, ukulele, bass harmonica, flutes, clarinets, oboe, cor anglais, saxes, trumpet, trombone, French horn, timpani, vibraphone (mallets), glockenspiel, bongos, sleigh bells, güiro, Sid Sharp strings. Influences: Rubber Soul ("main motivator"), Phil Spector, Bacharach/David, Nelson Riddle (Stebbins). Critic Zager: closer to Spector's Wall of Sound (sounds_like). Themes: self-awareness, alienation, lost innocence, coming of age, relationships, spirituality. Reception: AllMusic 5, RSAG 5, Pitchfork 9.4 + 60s #2, RS 500 #2 (all editions), Mojo #1, Uncut #1, Grammy HoF, NRR, US #10, UK #2.
- voice clear|choral: inferred from the vocal-harmony arrangements, not quoted (doubt). Four Freshmen/Sinatra only "possible models": not entered. No new tokens.

## beatles-revolver

# beatles-revolver: sources
- https://en.wikipedia.org/wiki/Revolver_(Beatles_album): genres (infobox rock, pop, psychedelia, R&B; text: acid rock, chamber music, raga rock, musique concrète; psychedelic rock per DeRogatis; psychedelic pop in the legacy section). Producer George Martin (Geoff Emerick was the engineer and is not listed). Instruments: sitar, tambura, tabla, string octet, horns and French horn, clavichord, harmonium, vibraphone, piano, fuzz and Leslie. Techniques: ADT, tape loops, reversed tape, varispeed, close miking. Influences: Indian music, Stockhausen, Motown/Stevie Wonder, Jamerson-style bass on Taxman, Lovin' Spoonful, Pet Sounds ("God Only Knows" → "Here, There and Everywhere"), Herrmann's Psycho. Themes: LSD and consciousness, Eastern philosophy, death, loneliness, taxation. Reception: Larkin #1, RS 500 #3/#11, Q #1, review table (AllMusic 5, Pitchfork 10, Paste 100, A.V. Club A+), charts and certifications.
- https://en.wikipedia.org/wiki/Love_You_To: Harrison drew on Ravi Shankar's recordings (→ influenced_by Ravi Shankar); tabla by Anil Bhagwat, tambura.
- sounds_like Bob Dylan: Riley calls "And Your Bird Can Sing" a putdown in the style of "Positively 4th Street" (a critic's comparison, so not an influence).
- Left out: Motown (a label, not an artist), Luciano Berio (attendance only), and the Byrds (named only in an LSD context). Mellotron is not listed because it was not confirmed for this album.
- Values: experimental 3 (tape-loop, Indian and avant-garde tracks alongside conventional pop songs); mood 3 (mixed, Good Day Sunshine vs Eleanor Rigby / Tomorrow Never Knows); electronic 1 (tape manipulation only).
## New tokens
- genre `ragarock` (parents: psychedelicrock, rock, worldmusic)
- genre `chambermusic` (parents: classical; used for Eleanor Rigby's octet)
- production `adt` (automatic double tracking, a vocal treatment; parent: layeredvocals/tapeeffects)
- production `varispeed` (tape-speed manipulation; parent: tapeeffects)
- production `lesliespeaker` (vocal and guitar through a Leslie rotating speaker; parent: vocalfilter)

## can-tagomago

# can-tagomago: Can, Tago Mago (1971)
Sources
- https://en.wikipedia.org/wiki/Tago_Mago : genres (krautrock, psychedelic rock, experimental rock, avant-funk; musique concrète tape techniques; Sarig: second LP "avant-garde noise music"); producer Can; Schloss Nörvenich, two two-track recorders, three mics, entrance hall for reverb (roomambience, analogtape, liverecording); Czukay edits jams into songs, tape/radio experiments (tapeeffects); personnel (Farfisa, electric piano, violin, double bass, piano, acoustic guitar); Ace Tone Rhythm Ace on "Peking O" (drummachine); influences Miles Davis and Karlheinz Stockhausen (Manning 2003; Czukay/Schmidt studied with Stockhausen); Crowley inspiration (occult → lyrics spiritual); Czukay "from light to darkness"; DeRogatis "mystery and forbidden secrets" (mood 1). Reception: Metacritic 99, AllMusic 5, Pitchfork 9.3/10, DiS 10, Spin 9, Pitchfork 70s #29, NME 500 #409, Mojo #62, 1001 Albums.
- https://ultimateclassicrock.com/can-tago-mago/ (Gallucci, 2021): Suzuki "low rumbles to shrieking howls" (voice soft|powerful), improvised lyrics, tape editing, jazz influence.
- Louder Sound feature (via search snippet: https://www.loudersound.com/features/can-the-making-of-landmark-album-tago-mago): "Teutonic soul met Miles Davis" (sounds_like Miles Davis), whisper-to-shriek vocals, doom-laden keyboards. Austin Chronicle reissue review also invokes Miles Davis.
New tokens
- genre `noise` (noise music; parents: experimental, noiserock, avantgarde)
Doubts
- Some reviewers say Suzuki sings partly in Japanese ("Oh Yeah"); not in Wikipedia, so language = en only.
- Lyrics: improvised; only "spiritual" (Crowley, unconscious) kept.

## cocteautwins-heavenorlasvegas

# cocteautwins-heavenorlasvegas: Cocteau Twins, Heaven or Las Vegas (1990)
Sources
- https://en.wikipedia.org/wiki/Heaven_or_Las_Vegas : genres dream pop (infobox), ambient pop (Pitchfork 90s list, Mapes 2018); self-produced; September Sound; Guthrie's drum programming first, effects from guitars; personnel (guitar, drum machine; bass, keyboards); more accessible, warmer, syncopated danceable rhythms (mood 4, groove 3); glossolalia, lyrics mostly unintelligible; Q reviewer compares to Kate Bush. Reception: Pitchfork 10, AllMusic 5, Vox 10, NME 8, Q 4, EW B-, Pitchfork best dream pop #1, RS 500 #245, Paste best of 1990, Larkin #218, 1001 Albums, UK #7.
- https://guitar.com/review/the-genius-of-heaven-or-las-vegas-by-cocteau-twins/ (Gary Walker, 2020): Akai MPC60 and E-mu SP1200 (mpc, sp1200), Yamaha D1500 delay (delay), Cry Baby wah (wahwah), EBow on the closing track (ebow), slide solo on the title track (slideguitar), piano; "shoegaze wash" (genre shoegaze); "fragility of Fraser's trilled lullabies" (voice soft).
- Reverb, "The Drum Machines of Cocteau Twins" (via search snippet, https://reverb.com/news/the-drum-machines-of-the-cocteau-twins): rhythmic gating of guitars synced to the drum machine, "particularly on later albums like Heaven or Las Vegas" (noisegating).
- That Music Mag review (via search): Fraser's high warble likened to Kate Bush.
New tokens: none.
Doubts
- influenced_by empty: Guthrie (in guitar.com) says "The aim was to make music with punk's energy ... and that shiny, dense Phil Spector sound", but it's unclear whether he means this album or the band generally. Phil Spector could be added if you count it.
- lyrics empty: songs are linked to birth/death and motherhood, but none of the allowed themes is clearly stated.

## curtismayfield-superfly

# Super Fly (1972), type soundtrack

Sources
- https://en.wikipedia.org/wiki/Super_Fly_(soundtrack) : genres psychedelic soul, funk, progressive soul, cinematic soul; producer Curtis Mayfield; Johnny Pate orchestrator/arranger (stringarrangements, hornarrangements); Bell Sound NY + Chicago, band up to 40 players; AllMusic (John Bush) "deep, dark grooves, trademarked wah-wah guitar, and stinging brass" (wahwah, electricguitar, brass, mood 2); personnel Upchurch/McMullen guitar, Lucky Scott bass, Henry Gibson percussion, Harry Lepp trombone; themes poverty, drug abuse, anti-drug intent. Reception: Christgau A-, Pitchfork 9.1, RS 5/5 (2004), RS 500 #69/#72/#76, National Recording Registry 2019, Grammy nomination; US #1, Soul #1, Gold, outsold the film.
- https://www.popmatters.com/174517-mayfield-2495731945.html : soul, R&B, funk, jazz, film score (-> soundtrack genre); Pate's string arrangement; Lucky Scott bass line; Henry Gibson percussion; "sweet falsetto" (voice soft, production falsetto); drug dealing themes, Priest story (storytelling); compared with Isaac Hayes (Shaft) and Marvin Gaye (Trouble Man) -> sounds_like.
- https://en.wikipedia.org/wiki/Henry_Gibson_(percussionist) : Gibson plays bongos and congas; Miami New Times credits his percussion for Pusherman's groove.
- Rolling Stone (Bob Donat, 1972, quoted in search): "fine funky music", anti-drug and self-liberation themes.

influenced_by: empty (no documented influence found; Hayes/Gaye are comparisons).
Drums listed (Morris Jennings, per Guitar Player snippet). "Blaxploitation" named by PopMatters is a film genre, not added.

New tokens
- genre `cinematicsoul` (Wikipedia infobox) -> parents: soul, soundtrack, progressivesoul

## donnasummer-irememberyesterday

# I Remember Yesterday (Donna Summer, 1977)
- https://en.wikipedia.org/wiki/I_Remember_Yesterday : genres Euro disco, pop, R&B; producers Giorgio Moroder & Pete Bellotte; Musicland/Arco, Munich; Moog synth and Moog bass (Baldursson, Moroder, Wedel), guitars, bass, drums (Keith Forsey), brass & woodwinds, backing vocals (Brooklyn Dreams); concept: disco + 40s/50s/60s, I Feel Love = future; themes love, nostalgia, sensuality (Take Me, I Feel Love); ratings AllMusic 3, Christgau B−, EPM 3, Music Week 4, Record Mirror 2; UK #3, US #18, Dance #1, US Platinum.
- https://en.wikipedia.org/wiki/I_Feel_Love : Moog modular + sequencer, delay on bassline (production delay), head-voice vocal (soft).
- https://soulfinger.substack.com/p/donna-summer-i-remember-yesterday : "Love's Unkind" updates Crystals/Ronettes girl-group pop (sounds_like), Motown homage, funk (Black Lady), sax; verdict C except I Feel Love.
- Apple Music editorial (https://geo.music.apple.com/album/1442959426): 1940s big band (title track), girl-group, Motown sequencing (genres bigband, girlgrouppop, motown).
- influenced_by empty: era homages, no named artist documented by Summer/Moroder. Confidence medium (scales lean on two track-level reviews).
## New tokens: none

## fleetwood-rumours

# fleetwood-rumours: Fleetwood Mac, Rumours (1977)
Sources
- https://en.wikipedia.org/wiki/Rumours_(album) : genres pop rock (infobox), soft rock and pop rock (Telegraph, Louder, Irish Times); producers Fleetwood Mac, Ken Caillat, Richard Dashut; Record Plant Sausalito, 3M 24-track (analogtape), long overdubbing, Aphex Aural Exciter used to restore the worn master; instruments (Rhodes, Hammond B-3, piano, Steinway, tack piano, synth, vibraphone, fretless bass on "The Chain", electric harpsichord, dobro, clavinet, congas, maracas, 12-string); influences on songs: Bee Gees "Jive Talkin'" (Second Hand News), Rolling Stones "Street Fighting Man" (Go Your Own Way), Buddy Holly (I Don't Want to Know); themes: relationships/breakups, drug use; three-singer harmonies (voice clear|choral); McKay "cheerful surface, anguished heart" (mood 3). Reception: Metacritic 99, AllMusic 5, Pitchfork 10, RS 5, Christgau A, RS 500 #7 (2020), Q 70s #3, Grammy AOTY, NRR, 40M+.
- Rolling Stone 1977 review (John Swenson), https://www.rollingstone.com/music/music-album-reviews/rumours-196558/ (seen via search snippet): move to "California folk-rock", lessons from the Byrds, Buffalo Springfield and the Eagles (sounds_like; folkrock genre).
New tokens
- production `aphexauralexciter` (Aphex Aural Exciter)
Doubts
- "The Eagles" spelled as already used in repo (official name "Eagles").
- folkrock rests on the RS 1977 review only.

## hendrix-areyouexperienced

# hendrix-areyouexperienced: The Jimi Hendrix Experience, Are You Experienced (1967)
Sources
- https://en.wikipedia.org/wiki/Are_You_Experienced : genres (infobox psychedelic rock, hard rock, acid rock, blues; Shapiro "R&B to free jazz"; Chase "high peak in hard rock"; Newsweek 1967 soul influence; Hit Parader 1989 #35 heavy metal albums); producer Chas Chandler (engineers Kramer, Siddle, Ross not listed); Olympic four-track (analogtape), Marshall stack, fuzz box + overdrive (distortion), Octavia on "Purple Haze", room mic 12 ft away (roomambience), overdubbing on "51st Anniversary", backwards guitar/bass/drums on title track (backmasking), manual wah on "I Don't Live Today" (wahwah), half-speed spoken words on "Third Stone" (tapeeffects), feedback improvisations; personnel (guitar, bass, drums, percussion, piano); influences: Curtis Mayfield chord progression and Dylan-admiring lyrics on "The Wind Cries Mary" (Shadwick 2003); themes: freedom (identity), love/argument (love), alien narrative (storytelling). Reception: AllMusic 5, Pitchfork 10, Blender/DownBeat/RS Guide 5, RS 500 #15/#30, RS Best Debuts #3, Larkin #63, NRR 2005, UK #2, US #5.
New tokens
- genre `freejazz` (parents: jazz, avantgardejazz)
- production `octavia` (Octavia octave-fuzz pedal)
Doubts
- voice left empty: sources only say Hendrix was an unconfident singer; no voice-type description found.
- sounds_like empty: only song-level "in the style of" notes (Wes Montgomery, Hank Marvin, the Ventures) and DeRogatis' comparison to the Nuggets compilation; Rolling Stones/Cream comparisons not found in a source.
- heavymetal rests on the Hit Parader list placement.

## katebush-houndsoflove

# Kate Bush, Hounds of Love (1985)

Sources
- https://en.wikipedia.org/wiki/Hounds_of_Love : genres in infobox (art pop, progressive pop, new wave, art rock, progressive rock, sophisti-pop); "post-progressive" in text; Barry Walters (Pitchfork) on synth-pop + prog; producer Kate Bush; studios; home 8-track demos with LinnDrum, Fairlight, piano, transferred to 24-track and overdubbed for a year; personnel (Fairlight, Yamaha CS-80, piano; McAlea synth sequencing; Palmer LinnDrum programming, bass, Fairlight bass, handclaps; drums; guitars; Weber/Thompson double bass; Medici Sextet strings; cello; Lunny bouzouki + bodhrán; O'Flynn uilleann pipes; Sheahan whistles/fiddles; Paddy Bush balalaika, didgeridoo, fujara, violins; Morris Pert percussion; Kamen orchestral arrangements; Richard Hickox Singers choir); layered vocals; spoken film sample; Ninth Wave concept (sea, death and rebirth, vision quest). Reception: AllMusic 5, Pitchfork 10, Mojo 5, Q 5, RS Album Guide 4, RS 500 #68 (2020), Pitchfork 80s #4, NME 500 #48, UK #1, best-selling studio album.
- Pearson A-level set-work guide (https://qualifications.pearson.com/content/dam/pdf/A%20Level/Music/2016/teaching-and-learning-materials/A_level_Kate_Bush_Hounds_set_work_support_guide.pdf): Fairlight CMI as sampler/sequencer, sampled strings, treated vocal samples, spoken shipping-forecast-style sample, wordless backing vocals, metre changes suggesting prog influence (generic, not used as influenced_by).
- sounds_like: fondsound.com Ninth Wave piece ("Mother Stands for Comfort" recalls Gabriel's Security), Hot Press / ProgArchives reviews (spiritual partner to / analogy with Gabriel's So), a review in the search results pairing its synthpop+folk mix with what Talk Talk and Gabriel did mid-80s (https://www.fondsound.com/kate-bush-the-ninth-wave-1985/, https://www.hotpress.com/music/happy-birthday-kate-bush-revisiting-classic-album-hounds-love-22783157, https://www.progarchives.com/Review.asp?id=113558). Talk Talk is the weakest link (source not opened in full).
- influenced_by left EMPTY: no interview found where Bush names a musical influence for this album (Gabriel introduced her to the Fairlight earlier, not an album influence; Tennyson/Peter Reich are literary sources; "Tsintskaro" and "Blood Red Roses" are quotations).

Judgment values: electronic 3 (Fairlight + LinnDrum core but heavy acoustic/Irish/orchestral layer); mood 2 (dark Ninth Wave vs romantic side one); theatrical 4 (choir, orchestral suite, dramatic vocals); polish 4.

New tokens
- genre `postprogressive` (Wikipedia: "described as post-progressive"): parents prog|artrock.
- instruments `bodhran` (Irish frame drum; parent percussion), `balalaika` (parent guitar/strings family, near mandolin/bouzouki), `fujara` (Slovak overtone flute; parent woodwinds/flute).

## ledzeppelin-ledzeppeliniv

# ledzeppelin-ledzeppeliniv: sources
- https://en.wikipedia.org/wiki/Led_Zeppelin_IV: infobox genres hard rock, folk, blues rock; heavy metal from AllMusic, Spin, PopMatters and Christgau; rock and roll and blues from AllMusic. Producer Jimmy Page. Instruments: mandolin (Battle of Evermore), recorders (Stairway), electric piano, analog synth (Four Sticks, model not named), harmonica (Levee), Ian Stewart's piano (Rock and Roll), acoustic and electric guitars. Techniques: Bonham's drums recorded in the Headley Grange lobby with mics over the staircase (→ roomambience), and a Binson Echorec delay. Influences: "the a cappella section was influenced by Fleetwood Mac's 'Oh Well'" (Black Dog), and "Going to California… inspired by Joni Mitchell". Themes: mythology and post-hippie mysticism, Tolkien, Scottish wars, the search for the perfect woman. Reception: Metacritic 100, AllMusic 5, Christgau A, Pitchfork 9.1, RS 500 #58, Pitchfork 70s #7, Classic Rock British #1, 37M sold, RIAA 24x.
- Excluded from influenced_by: Little Richard ("Keep A-Knockin'" intro, a quotation) and Memphis Minnie (Levee is a reworked cover).
- voice is EMPTY: the source describes no vocal style, even though "powerful" would be the obvious guess.
- sounds_like is empty: no source makes a comparison.
## New tokens
- production `binsonechorec` (Binson Echorec delay unit; parent: delay)

## neilyoung-everybodyknowsthisisnowhere

# Neil Young (with Crazy Horse), Everybody Knows This Is Nowhere (1969)

Sources
- https://en.wikipedia.org/wiki/Everybody_Knows_This_Is_Nowhere : genres country rock, folk rock, garage rock, hard rock, acid rock (infobox); producers Neil Young and David Briggs; Wally Heider and Sunwest, Hollywood; "largely recorded live, without overdubs", vocals live for the first time, long jams edited down, title-track scratch vocal; personnel (Young and Whitten guitars, Talbot bass, Molina drums, Bobby Notkoff violin, Robin Lane guitar/vocals); handclaps on "Cinnamon Girl" inspired by the Angels' "My Boyfriend's Back"; Young cites the Everly Brothers' and Roy Orbison's records as models for the band's "togetherness" feel; D modal tuning (drone). Themes: showbiz dissatisfaction, lost love, guilt; Young calls "Down by the River" "a desperation cry". Reviews: "perpetually mournful" voice (RS 1969), "haunting" (Christgau), "gloriously spontaneous" (Kot). Reception: AllMusic 5, Pitchfork 10, RS Record Guide 5, MusicHound 5, Spin Alt. Guide 6, RS 500 #407 (2020), Larkin #124, US #34 (98 weeks), RIAA Platinum.

Left EMPTY: sounds_like (no critic comparison found); no Old Black/Les Paul model, not in the sources read.
Doubts: voice `clear` is a weak call (sources only say "mournful"); `The Angels (My Boyfriend's Back)` names their 1963 album via the song. Mainstream 2: raw live takes and long jams, not a packaged record; arguably 3 as popular auteur record.

New tokens: none.

## nin-thedownwardspiral

# The Downward Spiral (Nine Inch Nails, 1994)
- https://en.wikipedia.org/wiki/The_Downward_Spiral — genres: industrial rock, alternative rock, industrial metal (infobox); "using elements of techno, dance, electronic, heavy metal, and hard rock"; also industrial, art rock. Producers Trent Reznor, Flood (Alan Moulder mix, not listed). Gear: Mac + Pro Tools, Digidesign TurboSynth, Zoom 9030 (guitars and vocals → distortedvocals), Akai S1000, Kurzweil K2000, TR-808, Minimoog, Prophet VS, Oberheim OB-Mx, Eventide H3000, Studio Vision sequencer; looped live drums (Vrenna, Perkins → drumloop); distorted guitar/bass as sound design; Belew ring-mod guitar; piano motif on "Closer". Vocals "from whispers to screams" (soft|powerful). Influences stated: Bowie *Low*, Pink Floyd *The Wall*. Critics: Pareles compares/contrasts with Ministry and Nitzer Ebb. Themes: nihilism, religion, sex, dehumanization, semi-autobiographical concept (lyrics). Reception: AllMusic 5, RSAG 5, Pitchfork 8.3, Spin 9/10, RS 500 #200/#122, Spin #10, 1001 Albums, US #2, 4x Platinum.
- New tokens: genre `industrialmetal` (parents: industrial, metal, industrialrock). Production: `turbosynth`, `prophetvs`, `eventideh3000`, `zoom9030`, `studiovision` (gear tied to this album by Wikipedia's recording section).

## prince-purplerain

# prince-purplerain: sources
- https://en.wikipedia.org/wiki/Purple_Rain_(album): infobox genres pop, rock, R&B, funk-pop, psychedelia; text names funk, gospel, heavy metal and orchestral music. Producers credited as Prince and the Revolution. Gear: Yamaha CP-80 / DX7, Oberheim OB-SX, Linn LM-1 and LinnDrum, Simmons SDSV; Doctor Fink used a CP-70, Memorymoog and OB-X. Strings (cello, violin) arranged by Prince and Lisa Coleman. Three tracks were recorded live at First Avenue (3 August 1983) and overdubbed later. When Doves Cry has no bass line. Spoken vocals. Themes: religion, sexuality, love, apocalypse and renewal. Sound: "grandiose, synthesized… psychedelic sheen", "denser… full band". Reception: Metacritic 100, Pitchfork 10, AllMusic 5, RS 500 #8, Pitchfork 80s #1, 24 weeks at US #1, RIAA 13x Platinum, Oscar.
- https://www.pressreader.com/usa/rolling-stone-usa/20211005/283029762790491 (Rolling Stone, Bobby Z) and https://www.mprnews.org/story/2014/12/07/npr-purple-rain (NPR, Alan Light): Prince set out to write a Bob Seger-style ballad after sharing arenas with Seger (→ influenced_by Bob Seger).
- sounds_like Jimi Hendrix: from Kurt Loder's 1984 Rolling Stone review (a critic's comparison).
- type is set to studio per the brief, although the film tie-in is often called a soundtrack. The voice column has no source for "powerful", so it stays clear|spoken.
## New tokens
- genre `funkpop` (Wikipedia's infobox says "funk-pop"; parents: funk, pop. It may be an alias of the existing `popfunk`, which is for the owner to decide)
- instrument `electronicdrums` (Simmons SDSV; parents: drums, drummachine)

## radiohead-okcomputer

# Radiohead, OK Computer (1997)

Sources
- https://en.wikipedia.org/wiki/OK_Computer (both halves read): genres alternative rock, art rock, post-Britpop (infobox); critics on progressive rock debt, electronica; producers Nigel Godrich and Radiohead; St Catherine's Court and Canned Applause; ~80% recorded live (O'Brien); vocals on stone staircase, "Let Down" in a ballroom (room acoustics); electric piano, Mellotron, glockenspiel, cowbell, Greenwood 16-piece string arrangement; sampler + Macintosh used to edit drum tracks ("Airbag", DJ Shadow-inspired drum programming); delay-generated feedback ("Karma Police"); synthesized "Fred" voice on "Fitter Happier" (spoken). Influences cited by the band: Miles Davis Bitches Brew, Ennio Morricone, Can, The Beatles ("A Day in the Life" / "Happiness Is a Warm Gun"), DJ Shadow, PJ Harvey, R.E.M., Elvis Costello, The Beach Boys Pet Sounds, Pixies, Portishead, Penderecki (Threnody), Phil Spector. Critics' comparisons with Pink Floyd / Dark Side of the Moon (disavowed by band) -> sounds_like. Themes: technology, alienation, consumerism, political corruption, modern life. Reception: AllMusic 5, Pitchfork 10 (2009), RS 5 (2009), NME 10, Q 5, RS 500 #42 (2020), Larkin #4, Grammy Best Alternative Album, National Recording Registry 2014, UK #1, 5x Platinum UK.
- Guide anchors: mood 1 and mainstream 3 are the guide's own anchors for this album.

Excluded from influenced_by: Noam Chomsky, J. G. Ballard, Philip K. Dick (writers, not musical artists); "Influences cited: Pink Floyd, Madness, Talking Heads" in the accolades section was ambiguous, not used.
Doubt: Penderecki named without an album (source names Threnody, a piece).

New tokens: none.

## roxymusic-foryourpleasure

# For Your Pleasure (Roxy Music, 1973)
- https://en.wikipedia.org/wiki/For_Your_Pleasure : art rock, glam rock, American R&B, European avant-garde; Pitchfork (Tannenbaum) between glam and prog; producers the band with Chris Thomas, John Anthony also credited; AIR London; Eno VCS3 & tapes, Mackay oboe/sax, Manzanera guitar, Ferry vocals/keyboards/piano, Porter bass, Thompson drums; phasing on all instruments (In Every Dream Home), tape loops on title track, tremolo and guitar reverb; Ferry's theatrical, campy baritone (theatrical 4); sinister songs (blow-up doll, stalker: mood 2); Eno likened The Bogus Man to Can (sounds_like), Reynolds likened the title track to Nico's Marble Index (sounds_like); ratings AllMusic 5, Pitchfork 10 (2012)/9.5 (2019), RS Album Guide 5, NME 9, Q 4, Christgau B, Spin 6; Q #33, Pitchfork 70s #87, NME 500 #88, RS 500 #351; UK #4, US #193; Gambaccini (RS 1973): "remarkably inaccessible".
- https://www.phoenixnewtimes.com/music/the-roxy-music-guide-for-beginners-10190663/ : The Bogus Man as a nine-minute exercise in krautrock (genre krautrock).
- https://odt.co.nz/node/160181 : Ferry v Eno tug-of-war (experimental vs song).
- influenced_by empty: only documented influence is painter Richard Hamilton (In Every Dream Home a Heartache), not a musician; Mackay credits reggae (a genre) for The Bogus Man beat. Add `Richard Hamilton` if non-musicians are allowed.
- voice left empty: Ferry's crooning baritone has no clear token match.
## New tokens
- production `phasing` (phasing on all instruments, not only vocals; nearest existing is `vocalphasing`).

## slystone-theresariotgoinon

# There's a Riot Goin' On (1971)

Sources
- https://en.wikipedia.org/wiki/There%27s_a_Riot_Goin%27_On : infobox genres (psychedelic funk, avant-soul, avant-pop, deep funk, psychedelic soul); producer Sly Stone; Record Plant Sausalito + Bel Air home studio; Sly overdubbed most parts himself, overdub/erase gave "muddy, gritty" sound (overdubbing, polish 1); Maestro Rhythm King MRK-2 drum machine; personnel (Sly: drums, drum programming, synths, guitar, bass, keyboards; Billy Preston keys; Jerry Martini tenor sax; Cynthia Robinson trumpet/flugelhorn; Larry Graham bass; Greg Errico/Gerry Gibson drums; Freddie Stone, Ike Turner, Bobby Womack guitar); electric piano on Family Affair; low relaxed vocal (soft), raspy vocals on Smilin'; themes: apathy, disillusionment with fame and 60s counterculture, Nixon era, decline of civil rights, Haight satire (Luv n' Haight -> irony), identity search (Austin Chronicle). Reception: AllMusic 5/5 ("funk at its deepest and most impenetrable"), Christgau A+, RS 5/5, RS Album Guide 5/5, Uncut 5/5, RS 500 #99 (2003) #82 (2020), Pitchfork 70s #4, Pazz & Jop #7, Larkin Top 50 Soul #14, Grammy HoF; US #1, Soul #1, Platinum.
- Christgau (via Wikipedia): taped-over murk presages Exile on Main St.; drum-machine beats throw "knuckleballs" at Miles Davis and James Brown -> sounds_like. (Lewis's Kid A comparison and Christgau's "darker than VU & Nico" not used: about murk/darkness, not sonic similarity.)
- Pitchfork 200 best songs of 70s (via slystonemusic.com): Family Affair stripped-down drum machine + light electric keys.

influenced_by: empty. Wikipedia names only non-musical influences (drugs, assassinations, police brutality); no documented musical influence found.

New tokens
- genre `avantsoul` (Wikipedia infobox / Lundy "avant-soul") -> parents: soul, avantgarde, experimentalpop
- genre `deepfunk` (Wikipedia infobox) -> parents: funk, soul
- production `maestrorhythmking` (Maestro Rhythm King MRK-2 drum machine, Wikipedia) -> parent family: drum machines (like rolandcr78)

## sonicyouth-daydreamnation

# Daydream Nation (Sonic Youth, 1988)
- https://en.wikipedia.org/wiki/Daydream_Nation — genres (alternative rock in lead; infobox noise rock, indie rock, art punk, avant rock, art rock, post-punk); producers Sonic Youth + Nick Sansano; personnel (guitars, bass, drums, Moore piano); Greene St. Recording, $30k "first non-econo record" (polish 2); unorthodox tunings, long instrumental sections (experimental 4); themes burnout, music industry, crack epidemic, Gibson/Warhol references (lyrics social|introspection|storytelling); critics: Begrand compares to The Velvet Underground & Nico, Chuck Eddy "good Hawkwind", "Eliminator Jr." = Dinosaur Jr. x ZZ Top (sounds_like); reception: AllMusic 5/5, Pitchfork 10 + 1980s #1/#7, Guardian 5/5, RS 500 #328/#171, Pazz & Jop #2, National Recording Registry, UK #99.
- Search summary of a Mojo feature (pressreader, 403 to fetch): melds hardcore punk, avant-noise, classic rock; Moore named Zen Arcade and Double Nickels on the Dime as the only double albums they knew (format precedent, NOT entered as influence).
- voice spoken: Kim Gordon's half-spoken delivery is commonly described but not verified in a fetched source this pass (doubt).
- New token: genre `avantrock` (suggested parents: experimentalrock, artrock, rock).
- influenced_by left empty: no documented musical influence for this album found (Neil Young/Patti Smith only general influences on Moore; Sansano showed them Public Enemy but no stated influence).

## stevie-songsinthekeyoflife

# Songs in the Key of Life (1976)

Sources
- https://en.wikipedia.org/wiki/Songs_in_the_Key_of_Life : infobox genres R&B, soul, pop, progressive soul, soul jazz; text also funk, jazz, classical (synth string arrangement of Village Ghetto Land); producer Stevie Wonder; Crystal Sound, Record Plant, Hit Factory; Wonder credited lead/backing vocals, harmonica, keyboards, synth bass, drums, percussion, handclaps; others: Fender Rhodes (Herbie Hancock), electric guitar (George Benson), trombone, trumpet, sax, flute, harp (Dorothy Ashby), timbales; West Angeles Church of God Choir, Hare Krishna choir, Wonderlove (choral); themes religion, love, nostalgia, parenthood, inequality, racial discrimination, social justice. Reception: AllMusic 5/5, Christgau A, Pitchfork 10, RS 5/5, RS Album Guide 5/5, Pazz & Jop #1, Grammy AOTY, RS 500 #4 (2020), VH1 #7, Larkin #89, National Recording Registry; US #1 13 weeks, Diamond.
- https://witchdoctor.co.nz/?p=10945 : Yamaha GX-1 "dream machine" simulates string section on Village Ghetto Land; "frenetic guitar-driven fusion" (Contusion) -> jazzfusion; impassioned vocals with multi-tracking (layeredvocals, powerful).
- https://www.gforcesoftware.com/blog/yamaha-gx-1/ and MusicRadar track-by-track (search snippet): GX-1 first appears on Village Ghetto Land, complex arrangements in one take.
- https://en.wikipedia.org/wiki/Sir_Duke : written as a tribute to Duke Ellington, who "had influenced him as a musician" -> influenced_by Duke Ellington. (Basie, Miller, Armstrong, Fitzgerald only named in lyrics, not stated as influences: left out.)

sounds_like: empty (no critic comparison found).
Doubts: electronic 2 (GX-1/synth bass prominent but large acoustic band); jazzfusion is from one review about one track; Witch Doctor also calls Another Star "Latin-flavoured" (not added as latin genre).

New tokens
- production `yamahagx1` (Yamaha GX-1 polysynth) -> family: synth models (like polymoog)

## stones-exileonmainst

# Exile on Main St. (The Rolling Stones, 1972)
- https://en.wikipedia.org/wiki/Exile_on_Main_St. : infobox genres (rock and roll, country blues, hard rock); categories (country rock, soul, gospel); reviewers cite blues/country/gospel/swing; producer Jimmy Miller; Nellcôte basement with mobile studio, overdubs at Sunset Sound (overdubbing); personnel: Nicky Hopkins piano, Bobby Keys sax, Jim Price horns, Billy Preston/Dr. John keyboards, Jagger harmonica, gospel backing singers (choral); themes hedonism, sexuality, nostalgia (Christgau: obsession with time); murky mix, Jagger "sounds lousy" (polish 1), Lenny Kaye "pervading blackness" (mood 2); ratings AllMusic 5, Christgau A+, NME 10, RS Album Guide 5, Metacritic 100 (2010); RS 500 #7/#14; UK/US #1.
- https://www.udiscovermusic.com/stories/the-rolling-stones-exile-on-main-st-influences-explained : Gram Parsons' country influence on Richards (Richards, Life: "I absorbed so much from Gram"); gospel overdubs after Jagger/Watts saw Aretha Franklin's Amazing Grace church sessions in LA (Jan 1972). Also names Burroughs' cut-up method (writer, not listed) and Haggard/Owens/Hank Williams/George Jones as country records Keith and Gram played (general, not listed).
- https://www.lamag.com/culturefiles/aretha-franklin-watts/ (search result): Jagger and Watts at the Amazing Grace sessions while in LA working on Exile.
- voice raspy: Jagger's slurred, buried vocal; weakest-supported value. sounds_like left empty (no critic comparison found).
## New tokens
- genre `countryblues` (Wikipedia infobox "country blues"); suggested parents: blues, country.

## thecure-disintegration

# thecure-disintegration: sources
- https://en.wikipedia.org/wiki/Disintegration_(The_Cure_album): infobox genres gothic rock, dream pop, post-punk, alternative rock; new wave via Paste's list. Producers Robert Smith and David M. Allen. Instruments: Smith on guitars, keyboards and Bass VI; Gallup on bass and keyboards; O'Donnell on keyboards; Williams on drums and percussion. "Prayers for Rain" uses heavy flanging, delay and backwards-run tapes; distorted or treated vocals; lead guitar buried in the mix. Sound: slow, droning guitar progressions, synthesizer slabs, "very lush, very orchestral", "funereal keyboard coloration". Vocals: "cutting clarity", "softly", whispering. Themes: depression, fear of turning 30, love (Lovesong), loss. Simon Price compared the Fascination Street lead to Siouxsie's "Israel" (→ sounds_like). The label called the album "wilfully obscure", and Smith turned away from the pop of Kiss Me (→ mainstream 2). Reception: AllMusic 4.5, Pitchfork 10 (2010), RS 500 #116 (2020), Paste #2, Pitchfork 80s #9, mixed reviews at release (RS 3.5, Q 3, Christgau C+).
- https://www.radiox.co.uk/artists/the-cure/making-of-disintegration-album-1989-songs-meaning/: context on demos and the ageing theme.
- influenced_by is EMPTY: the only documented model is the Cure's own Pornography, which is a self-reference. No source names the outside records Smith listened to (the Cocteau Twins claim is from a Reddit post and was rejected).
## New tokens
- instrument `sixstringbass` (Fender Bass VI; parents: bass, baritoneguitar)
- production `flanging` (parents: tapeeffects, vocalphasing)

## thewho-whosnext

# Who's Next (The Who, 1971)
- https://en.wikipedia.org/wiki/Who%27s_Next — hard rock with arena-rock elements (genres); producers The Who, Glyn Johns (associate producer credit); Stargroves (Rolling Stones Mobile) then Olympic; synths VCS3, ARP, Lowrey organ as drones; "Baba O'Riley" honours Meher Baba and Terry Riley (influenced_by Terry Riley); Lifehouse concept, "Won't Get Fooled Again" critiques revolutions, "Behind Blue Eyes" (lyrics political|social|spiritual|introspection|storytelling); Mojo "most polished album… pioneering rock synthesizers… power-quartet attack" (polish 4); reception: AllMusic 5/5, Christgau "best hard rock album in years", Pazz & Jop 1971 winner, RS 500 #28/#77, Pitchfork 70s #15, Grammy HoF, UK #1, US #4, 3x Platinum.
- Original liner notes (via search: archive.org CD scan, rtbf.be article https://www.rtbf.be/article/who-s-next-des-who-a-50-ans-10821234): Townshend guitars, VCS3 organ, ARP, piano; Entwistle bass, brass, piano; Nicky Hopkins piano; Dave Arbus violin on "Baba O'Riley"; rtbf says loop is a Lowrey Berkshire Deluxe organ (ARP attribution questioned).
- voice powerful|clear: Daltrey's delivery, not sourced explicitly this pass (doubt). sounds_like left empty (no critic comparison found). No new tokens.

## velvetunderground-thevelvetundergroundnico

# The Velvet Underground & Nico (1967)
- https://en.wikipedia.org/wiki/The_Velvet_Underground_%26_Nico : infobox art rock, proto-punk, experimental rock, avant-pop, psychedelic rock; "avant-garde" fused with minimal groove-driven rock; producers Andy Warhol (credited) and Tom Wilson; Cale electric viola, bass, piano, celesta (Sunday Morning); Reed ostrich tuning; Tucker drums/tambourine; drones, distortion, feedback on Heroin, overdubs on Sunday Morning; La Monte Young (Theatre of Eternal Music) and John Cage/Fluxus shaped Cale's approach (influenced_by); themes drugs, prostitution, S&M, urban life, tender love songs; Goldstein: Reed's vocal "like early Dylan" (sounds_like Bob Dylan), Christgau: dispassionate chant (voice spoken); ratings AllMusic 5, Pitchfork 10, RS 5, Spin 10, Christgau A; RS 500 #13/#23; Pitchfork 60s #1; Observer #1; NRR 2006; US #171 (1967).
- https://www.britannica.com/biography/John-Cale : Young's amplified viola/drones influenced Cale's VU work.
- Not listed: Reed's literary influences (Burroughs, Selby, Chandler, Delmore Schwartz) are writers; Babatunde Olatunji / Rolling Stones / Bo Diddley shaped Moe Tucker's drumming in general (RS interview, Apple bio) but not tied to this album; Angus MacLise is an ex-member.
- voice: Nico's low "cello" voice has no matching token, so only `spoken` (Reed) is given.
## New tokens
- production `feedback` (feedback on "Heroin"); no parent needed (technique), or map near `distortion`.

## Second batch: artists behind weak suggestion lists (Oct 2026)
Found by checking every album's list (empty, or top suggestions with little genre in common) and counting which missing artists those albums cite. Claude's import fixes: Suicide's influences dropped (Alan Vega's general tastes, not this album); electronic rock mapped to the existing electrorock. James Last skipped: sources name Non Stop Dancing '65 as his breakthrough, not Classics up to Date; to decide. Richard Clayderman's debut is thin (sources describe the single), confidence low.

## aphextwin-selectedambientworks8592

# aphextwin-selectedambientworks8592: sources
- https://en.wikipedia.org/wiki/Selected_Ambient_Works_85%E2%80%9392 — ambient techno, IDM, electronica, ambient; AllMusic (Tognazzini) draws on techno and acid house club rhythms (-> techno, acidhouse); producer Richard D. James; home-made synths and drum machines, cassette damaged (lofi, polish 1); samples probably from a Casio FZ-10M (casiofz10, hedged "probably"); Independent: homage to Philip Glass and Stockhausen; Murphy compares Xtal vocals to Seefeel and My Bloody Valentine; Reynolds "Satie-esque"; Melody Maker "Not since Kraftwerk…" (all as sounds_like, critics' words); moods "somnambulist dreamscape", "melodic melancholia", "oceanic beats"; AllMusic 5/5, Pitchfork 9.4, Q 5/5, Record Collector 5/5; Fact best album of the 90s, Pitchfork best IDM album, NME 500 #121; BPI Silver.
- No influences documented by James himself (influenced_by empty). Doubt: Independent's "homage" could count as a critic-stated influence; kept in sounds_like per brief.

## byrds-mrtambourineman

# byrds-mrtambourineman: Mr. Tambourine Man (1965)
- https://en.wikipedia.org/wiki/Mr._Tambourine_Man_(album): folk rock; producer Terry Melcher; McGuinn 12-string Rickenbacker, Clark tambourine, Hillman bass, Clarke drums; session men on two tracks (Leon Russell electric piano, Hal Blaine); themes: romance, missing a lover, a woman wronged, Welsh mining disaster (love/heartbreak/social); criss-crossing vocals (voice choral); critics cite the Animals, Searchers, Beatles as the elements combined (sounds_like); Billboard "folk material with pop-dance beat"; AllMusic 5/5, RS 500 #232/#287, Larkin #267, 1001; US #6, UK #7.
- https://www.guitarplayer.com/guitarists/how-george-harrison-inspired-roger-mcguinn-s-invention-of-folk-rock and https://en.wikipedia.org/wiki/Jangle: McGuinn bought the Rickenbacker 12-string after seeing Harrison in A Hard Day's Night; the Byrds modelled their sound on the Beatles (influenced_by The Beatles).
- Dylan and Pete Seeger songs are covers: not influences.
- production empty: nothing sourced.

## clayderman-richardclayderman

# clayderman-richardclayderman: sources
- Title: the 1977 debut is "Richard Clayderman" in en.wikipedia (Ballade pour Adeline page and artist discography); it is also issued as **"Ballade pour Adeline"** (Telefunken DE 1977, Sonet SE 1979, Union Square reissue; AllMusic bio and MusicBrainz release group 8fccefa2-7b0e-4d76-bf9b-0d656ebba008 use that title). Same record, 11 tracks, ~37 min.
- https://en.wikipedia.org/wiki/Ballade_pour_Adeline: album Richard Clayderman (1977, Delphine Records/Delphine Studios); composer and producer Paul de Senneville; recording adds strings, keyboard, guitar, bass guitar and drums to the piano (→ instruments); "pop ballad", "pop instrumental" (→ ballad, pop); chart peaks and 22M sales of the single.
- https://en.wikipedia.org/wiki/Richard_Clayderman: easy listening and "romantic" genre; "gentle piano ballad"; Toussaint and de Senneville auditioned 21 pianists (→ mainstream basis).
- https://fr.wikipedia.org/wiki/Richard_Clayderman: "easy listening", "musique d'ascenseur" image (no album-level rating).
- https://www.allmusic.com/artist/richard-clayderman-mn0000851272 (via search snippet): debut recorded 1977 at the urging of producers Olivier Toussaint and Paul de Senneville (→ producers), sold 20M+ in 38 countries (→ importance 5). AllMusic album page mw0000196543 tags: Easy Listening, New Age (→ newage).
- https://musicbrainz.org (release 9bcb33c0-dacd-40f2-8eab-1d1ea3e44bc1): tracklist (Ballade pour Adeline piano & orchestre / piano seul, Lys River, Lyphard Melodie, Romantica Serenade...).
- Values: energy 1, tempo 1, groove 1, experimental 0 from "gentle piano ballad"/easy-listening descriptions; electronic 1 (one keyboard part). mood, theatrical, polish left empty (no review of the album text found; nightfall.fr review blocked by Cloudflare). acclaim empty (no ratings found).
- Confidence low: evidence mostly about the title single.

## dinosaurjr-yourelivingalloverme

# dinosaurjr-yourelivingalloverme: You're Living All Over Me (1987)
- https://en.wikipedia.org/wiki/You%27re_Living_All_Over_Me: genres indie rock, alternative rock, noise rock, grunge (infobox); producer Wharton Tiers; personnel (Mascis guitar/percussion, Barlow bass/ukulele/tape, Murph drums, Ranaldo bv); NME "missing link between Hüsker Dü and R.E.M." (sounds_like); Pitchfork "hardcore punk blitz, heavy metal guitars"; reception table and lists; Mascis calls it their best.
- https://www.clashmusic.com/features/youre-living-all-over-me-dinosaur-jr/: Pine Tracks + Fun City; Barlow's tape piece "Poledo" (tapeeffects); band listened to 60s/70s, hard rock, post-punk, Throbbing Gristle (general, not tied to the album).
- https://diffuser.fm/dinosaur-jr-youre-living-all-over-me/: yearning, self-pitying romantic lyrics (love/introspection); indie rock/noise.
- Mojo 2021 (pressreader, via search): Marshall stacks, Mascis loved the Zombies and Neil Young (general).
- Doubts: influenced_by left EMPTY (only general band tastes found: Neil Young, Zombies, Black Sabbath per Decibel, Throbbing Gristle; none tied to this album). voice left empty (no source on Mascis's delivery). "grunge" is in the infobox but the text frames it as the album's influence on grunge.

## elo-outoftheblue

# elo-outoftheblue: sources
- https://en.wikipedia.org/wiki/Out_of_the_Blue_(Electric_Light_Orchestra_album): genres (infobox progressive pop, orchestral pop, art rock; text: disco for Sweet Talkin' Woman, "driving rock and roll" for Turn to Stone, R&B feeling for Starlight); producer Jeff Lynne (Mack engineer, not listed); written in a Swiss chalet, recorded Musicland Munich; gear: Minimoog, Wurlitzer (Lynne), Yamaha CS-80, ARP 2600/Odyssey/Omni, Polymoog, Mellotron M400, clavinet, sequencers (Tandy), rototoms and gong (Bevan), violin, cellos, orchestra conducted by Louis Clark, orchestral and choral arrangements (→ choral, stringarrangements); "one of the first pop albums with extensive use of the vocoder"; Munich rain/thunder recordings (→ fieldrecordings); "endlessly overdubbed backing vocals" (→ layeredvocals, overdubbing); "dazzling falsetto harmonies" (→ falsetto). Themes: leaving home, homesickness, rain/sunshine, whaling and Greenpeace, the one happy love song (→ storytelling, love, nostalgia, social). Influence: Bev Bevan said Starlight was meant to feel "something like Al Green" (→ influenced_by Al Green). Critics' comparisons: Billy Altman (RS) hears Beatles, Beach Boys, Bee Gees (→ sounds_like). Reception: EPM 5/5, Pitchfork 8.1, AllMusic 3.5, RS Guide 3, Larkin #346, 1001 Albums, charts and certifications.
- https://en.wikipedia.org/wiki/Mr._Blue_Sky: infobox progressive pop, experimental pop, symphonic rock (→ added after album genres); Guarisco "miniature pop symphony", Beatles pastiche (sounds_like); intro borrowed from the Kinks (a quotation, not listed).
- https://americansongwriter.com/the-beatles-inspired-electric-light-orchestra-hit-that-jeff-lynne-still-has-some-regrets-about/: Lynne rejects the "carry on from the Beatles" line (Roy Wood's quote) → Beatles kept in sounds_like only.
- Values: theatrical 4 and polish 5 ("baroque double album", orchestra + choir + heavy overdubs); mood 4 (Mr. Blue Sky, Sweet Is the Night vs. homesick songs); electronic 2 (synths and vocoder over band and orchestra); groove 2 (one disco-leaning single).
## New tokens
- instrument `rototoms` (parents: drums, percussion)

## eno-musicforairports

# eno-musicforairports: sources
- https://en.wikipedia.org/wiki/Ambient_1:_Music_for_Airports — ambient, minimalist, electronic; producer Brian Eno; Eno synth, electric piano, vocals; Robert Wyatt acoustic piano; three German singers (wordless voices -> choral); "2/2" made on an ARP 2600 (arp2600); layered tape loops of different lengths (tapeloops); built on Erik Satie's furniture music (influenced_by); Eno: "deliberately austere and unemotional", "induce calm"; AllMusic 5/5, Uncut 10/10, Pitchfork 9.2 → 10 (2024), Pitchfork best ambient album (2016), Rolling Stone credits it with defining ambient, 1001 Albums; dissent Christgau B, Spin Alt. Guide 4/10.
- Not listed: Ray Conniff Singers (named by Eno as an image for the voices, not clearly an influence); Reich/Glass (article says alignment came after the album).
- Title kept as given ("Music for Airports"; official full title "Ambient 1: Music for Airports").

## feelies-crazyrhythms

# feelies-crazyrhythms: Crazy Rhythms (1980)
- https://en.wikipedia.org/wiki/Crazy_Rhythms: art punk, post-punk, avant-pop, new wave; jangle pop fusion noted; producers Million, Mercer, Mark Abel; full percussion credits (claves, maracas, castanets, cowbell, tambourine, timbales, bells, keyboards); Mercer: cleaner guitars, experimenting with percussion; NME (Du Noyer) Jonathan Richman / Velvet Underground / Talking Heads, Sounds: Richman's "Roadrunner" and Television (sounds_like); ratings and lists.
- https://lifeoftherecord.com/the-feelies-notes: Mo Tucker beat, VU vocal approach on "Forces at Work", Modern Lovers on "The Boy with Perpetual Nervousness", Fripp & Eno, Glass, Reich on "Loveless Love"/"Raised Eyebrows", the Byrds for clean guitar (influenced_by); guitars recorded direct, cymbals removed, percussion overdubbed in hallways/stairwells (roomambience), reverb pushed to extremes on percussion (heavyreverb); lyrics often about alienation (introspection).
- https://thequietus.com/?p=256622: Reich in the "Raised Eyebrows" rimshots, "Here Come the Warm Jets vibe"; Modern Lovers "a big influence".
- Doubt: voice empty (Mercer's delivery only described by a writer, not fetched). Stooges/MC5/Kraftwerk named as general favourites, left out.

## johncarpenter-halloween

# johncarpenter-halloween: sources
- https://en.wikipedia.org/wiki/Halloween_(1978_soundtrack) — genres electronic, film score; Carpenter composition/performance, Dan Wyman synth programming, engineer Peter Bergren, Sound Arts LA, composed in three days; piano melody in 5/4 (10/8); Carpenter admitted music inspired by Argento's Suspiria (scored by Goblin) and Friedkin's The Exorcist (theme = Mike Oldfield's Tubular Bells); Berardinelli "relatively simple and unsophisticated" (experimental 1, polish 2); AllMusic 4/5.
- https://faroutmagazine.co.uk/john-carpenter-halloween-theme-origins/ — Tubular Bells/Exorcist theme and Goblin as inspiration; Laurie's theme inspired by Bernard Herrmann; Carpenter quote on 5/4 bongo exercise.
- https://online.berklee.edu/takenote/the-halloween-theme-what-makes-the-music-so-scary/ , https://www.theringer.com/2023/10/31/music/john-carpenter-film-scores-musician-halloween — synth score, grand piano + synth keyboard, recorded to click/stopwatch.
- producers empty: no producer credited on the release (only composer/performer, programmer, engineer).
- Doubt: Herrmann influence rests on Far Out only (secondary); no specific synth model documented for this score. Type soundtrack per list (brief said studio). Confidence medium.

## mbv-loveless

# mbv-loveless: Loveless (1991)
- https://en.wikipedia.org/wiki/Loveless_(album): genres shoegaze, noise pop, dream pop, neo-psychedelia, avant-rock, noise rock; producers Shields, Ó Cíosóig; glide guitar via tremolo arm, no chorus/flanger; drums mostly samples of Ó Cíosóig, samples mostly feedback and Butcher's voice (sampler, sampling); vocals low in mix, dreamy, "me slowed down and me speeded up" on When You Sleep (layeredvocals, pitchedvocals); "Soon" swingbeat-influenced beat (groove 2); Shields' sampling informed by Public Enemy / Bomb Squad; 19 studios, ~2.5 years, largely mono; lyrics deliberately obscure (lyrics left empty); ratings and lists (Pitchfork 10, 90s #1, RS 500 #73, NME #18), UK #24, BPI Gold.
- sounds_like empty: critics' comparisons (Pet Sounds, OK Computer) are about stature, not sound.
- Possibly also "The Bomb Squad" in influenced_by (named together with Public Enemy); left out as a production team.
## New tokens
- genre `avantrock` (Wikipedia "avant-rock"; parents: experimentalrock, rock, avantgarde)

## neu-neu

# neu-neu: sources
- https://en.wikipedia.org/wiki/Neu!_(album) — Krautrock, experimental rock, psychedelic rock; producers Conny Plank and Neu!; four nights Dec 1971 at Star Studio Hamburg; Rother electric guitar, bass, bowed bass; Dinger drums, electric guitar, taishōgoto (heavily treated on "Negativland" -> sonicmanipulation), vocals; motorik beat on Hallogallo/Negativland; NME "metallic scrapings, drifting space musik, unwinding drones", compares noise extremism to PiL and Einstürzende Neubauten (sounds_like); Pitchfork 9.7, Mojo 5/5, AllMusic 4.5/5, Q 4/5, NME 8/10; Fact #36 of 1970s; NYT "landmarks of German experimental rock"; ~35,000 sold in West Germany.
- https://www.austinchronicle.com/music/record-reviews-11709691 — reissue review (3.5/5).
- No documented influences found. Language left empty (one short vocal track, language not stated by the sources read).
- New token: instrument `taishogoto` (Japanese taishōgoto; parent: koto/strings).

## orbital-orbital2

# orbital-orbital2: sources
- https://en.wikipedia.org/wiki/Orbital_(1993_album) — techno, dance; produced by Orbital; Meat Beat Manifesto an influence (toured with them before recording); Fabio Paras remix of React 2 Rhythm's "I Know You Like It" inspired "Remind"; phasing on "Time Becomes" (Star Trek TNG speech sample, voice spoken); samples Withnail & I, Fantastic Planet; Sydney crossing alert + didgeridoo (fieldrecordings); aimed "more atmospheric"; reviews AllMusic 5/5, NME 9/10 ("intelligent ambience"), Q 4/5, RS Album Guide 4/5, Village Voice C+; 1001 Albums, Q 90s list, Mixmag #9 (1996); Tom Ewing calls it a progressive house album (-> progressivehouse).
- https://www.mojo4music.com/articles/new-music/orbital-the-brown-album-reviewed/ — "1993 rave opus" (-> rave); Halcyon + On + On samples Opus III.
- Not documented: specific synths/drum machines (instruments limited to sampler + didgeridoo); Steve Reich only named as origin of the phasing technique, so not listed as influence.
- Doubt: Wikipedia gives UK peak 28 in lead, 13 in a chart table. Confidence medium (scales from review adjectives only).

## p-actually

# p-actually: sources
- https://en.wikipedia.org/wiki/Actually_(album): genres synth-pop, electropop, dance-pop (AllMusic "melodic, detached dance-pop"); producers per credits Julian Mendelsohn, Stephen Hague, Andy Richards, Shep Pettibone, David Jacob (with Pet Shop Boys), Bobby Orlando (One More Chance); Fairlight CMI programmed by Blue Weaver, Andy Richards, J. J. Jeczalik, Badalamenti's orchestration programmed on Fairlight instead of an orchestra (→ fairlight, sampler, synthprogramming; no real strings listed); Dusty Springfield guest; themes Thatcherism/privatisation (Shopping, King's Cross), AIDS (It Couldn't Happen Here), unrequited love (I Want to Wake Up) (→ political, social, love, heartbreak); Shopping began as a joke (→ irony); "Hit Music" inspired by Mancini's Peter Gunn as covered by Art of Noise (→ influenced_by Art of Noise (In Visible Silence), the 1986 album with their Peter Gunn); Morricone chorus reuse = quotation, not listed; Grace Jones sleeve inspiration = visual, not listed. Reception: AllMusic 4.5, Spin 9/10, Q/Mojo/RS Guide 4, Q 80s #22, Slant 80s #88, RS 500 #435, 1001 Albums, UK #2, 3x Platinum.
- https://en.wikipedia.org/wiki/It%27s_a_Sin: song genres synth-pop, dance-pop, disco, hi-NRG, new wave, post-disco (→ added after album genres); Fairlight choir, orchestra hits, NASA countdown sample, ambience recorded at Brompton Oratory and a sung Mass at Westminster Cathedral (→ sampling, fieldrecordings); Latin confession recited (→ spoken); Catholic guilt (→ spiritual); "dramatic and overblown", their most theatrical style (→ theatrical 4).
- Left empty: sounds_like (no critic comparison found). Tennant's "heavy metal at heart" remark is about the song's urgency, not a documented influence.
- Values: mood 2 (AIDS, Thatcherism, guilt under danceable surfaces); groove 4; electronic 4 (Fairlight-built, Dusty and live vocals).

## slowdive-souvlaki

# slowdive-souvlaki: Souvlaki (1993)
- https://en.wikipedia.org/wiki/Souvlaki_(album): shoegaze, dream pop; produced by Slowdive (Ed Buller mixed, not listed); Eno keyboards/treatments on two songs (guest, not an influence); early songs influenced by Joy Division and Bowie's Berlin Trilogy (Low, "Heroes", Lodger); "Souvlaki Space Station" from Aphex Twin, dub, early drum and bass; lyrics about solitude in Wales and the breakup with Goswell (heartbreak/introspection); AllMusic "deepest delayed guitar sounds" (production delay); Pitchfork "pillowy-soft" (voice soft); ratings, Pitchfork #2 shoegaze, UK #51; initially panned (NME 6/10, Melody Maker).
- sounds_like left empty: no critic comparison found.
- Doubt: Berlin Trilogy influence is on early demos of the album sessions; listed as three Bowie albums.

## specials-thespecials

# specials-thespecials: The Specials (1979)
- https://en.wikipedia.org/wiki/The_Specials_(album): ska, reggae, 2 Tone, punk rock, new wave; producer Elvis Costello; TW Studios; Dammers keyboards, Rico Rodriguez trombone; "concrete jungle" disaffection of UK youth (social/political); Record Mirror "Madness' older, more responsible brother" (sounds_like); covers of Toots & the Maytals, Prince Buster, Dandy Livingstone, Lloyd Charmers (covers: not influences); ratings (AllMusic 5, Pitchfork 9.3, Q 5, Uncut 10, RSAG 5), lists, UK #4 Gold.
- https://en.wikipedia.org/wiki/The_Specials: ska/rocksteady with punk energy; anti-racist founding; political commentary.
- https://www.theartsdesk.com/node/75067: "clanky sounding" Costello production (polish 1).
- Pattaya Mail review (https://www.pattayamail.com/arts-entertainment/life-at-33-13-rough-and-punky-45406) via search: Costello recorded them virtually live (liverecording); barking singer, wheezing organ, reggae guitars, occasional brass.
- Doubts: influenced_by EMPTY (only covers/reworkings, e.g. Gangsters from Prince Buster's Al Capone; no documented artist influence statement for the album). voice empty (Hall/Staple delivery not described by a fetched source).

## suicide-suicide

# suicide-suicide: Suicide (1977)
- https://en.wikipedia.org/wiki/Suicide_(1977_album): genres (synth-punk, punk rock, electronic rock, synth-pop, minimalist, electronic); producers Craig Leon, Marty Thau; Eventide digital delay on vocals; four days at Ultima Sound; Vega names Elvis Presley, Roy Orbison, Jerry Lee Lewis as his influences; "Frankie Teardrop" news story, songs about street people, "Cheree" about a girlfriend (storytelling/social/love); vocals compared to Gene Vincent (sounds_like); reception table, RS 500, Pitchfork 70s #39, RS punk #66, 1001, no chart.
- https://thequietus.com/?p=26801 (Blown Out '77): Seeburg Rhythm Prince drum machine, Farfisa through two Electro-Harmonix distortion pedals; live set recorded in performance order (~35 min); tape-delay slapback + Eventide delay; Thau's dub-style delay techniques (Lee Perry) -> dubeffects.
- Clash "Keep Your Dreams" (clashmusic.com/?p=46382), via search: Rev says bulk done live.
- Values: electronic 4 (no guitars, organ + rhythm box); polish 1 (primitive analog rig, "Rube Goldberg"); mood 1, experimental 4 from critics' "harshly hypnotic", "unnerving".
- Doubt: influenced_by (Presley/Orbison/Lewis) is Vega's general statement quoted in the album article, not tied to a specific song; confidence medium. voice only "clear" (Gene Vincent croon comparison); screams on Frankie Teardrop not tagged.
## New tokens
- genre `synthpunk` (parents: punk, electropunk, electronic)
- genre `electronicrock` (Wikipedia "electronic rock"; parents: rock, electronic; close to existing `electrorock` "Electro rock" — owner to decide if same)
- production `seeburgrhythmprince` (Seeburg Rhythm Prince drum machine; Quietus ties it to this album)

## tangerinedream-phaedra

# tangerinedream-phaedra: sources
- https://en.wikipedia.org/wiki/Phaedra_(album) — genres electronic, kosmische, ambient, space music, progressive electronic; influenced Berlin School; producer Edgar Froese; Moog modular + Franke's Moog sequencer as bass; personnel Froese (Mellotron, guitar, bass, VCS3, organ), Franke (Moog, VCS3), Baumann (organ, electric piano, VCS3, recorder); phasing device on "Mysterious Semblance", tape echo on "Sequent C'" (delay); AllMusic 5/5, AMG Electronica quote, 1001 Albums; UK #15, gold in seven countries.
- https://ra.co/reviews/25006 (RA Rewind) — mood "melodic but weird… emotionally ambiguous", mystery; compares with Klaus Schulze and Kraftwerk (sounds_like); names krautrock, progressive rock (-> prog), Berlin School.
- No documented influences found (influenced_by empty).
- New token: genre `spacemusic` (Wikipedia "space music"; suggested parents ambient, electronic, newage, progressiveelectronic).

## theorb-theorbsadventuresbeyondtheultraworld

# theorb-theorbsadventuresbeyondtheultraworld: sources
- https://en.wikipedia.org/wiki/The_Orb%27s_Adventures_Beyond_the_Ultraworld: genres (electronic, ambient house, dance, chill-out, ambient dub); producers Paterson, Weston, Falconer, Cauty; Steve Hillage co-producer of two tracks; Guy Pratt bass on Spanish Castles in Space; Casio CZ-101 on Outlands (→ casiocz101); segued double album built on samples and sound effects, Harry Nilsson drum loop (→ drumloop), Soviet fish-signal field recording and NASA audio (→ fieldrecordings), overdubbed layering (Paterson); Chicago house and dub as background; Slant: "loping house beats and shades of reggae-dub" (→ house, dub); NME: "Pink Floyd without the self-indulgent solos" (→ sounds_like Pink Floyd); reception table and rankings (AllMusic 5, EPM 5, Spin 9/10, NME 8/10, Slant #4 electronic, Muzik #7, Pitchfork 90s #100, UK #29 Silver).
- https://classicpopmag.com/2022/04/making-the-orbs-adventures-beyond-the-ultraworld: Paterson's acknowledged debt to Brian Eno's Music for Airports (→ influenced_by); dub basslines central; beats stripped out of techno; US label wanted 3-minute versions (→ mainstream 1).
- https://encyclopedia.com/education/news-wires-white-papers-and-books/orb: album homage to Pink Floyd (Battersea Power Station, "Back Side of the Moon"); Paterson called Pink Floyd and Eno "more than influential" (→ influenced_by Pink Floyd); Spin guide: "huge chunks of Brian Eno-like moods" (→ sounds_like Eno).
- Samples (Minnie Riperton, Rickie Lee Jones, Steve Reich/Pat Metheny, Kraftwerk, Lee Perry, Morricone...) are NOT listed as influences.
- Values: energy 1, tempo 1 (slowed-down house, "off the dance floor"); groove 2; experimental 4 (110-minute sample montage); voice instrumental|spoken (only speech samples); language and lyrics empty.
## New tokens
- genre `ambienthouse` (parents: ambient, house, electronic, chillout)
- genre `ambientdub` (parents: ambient, dub, electronic)
- production `casiocz101` (Casio CZ-101 synth; parent: synth)

## vangelis-bladerunner

# vangelis-bladerunner: sources
- https://en.wikipedia.org/wiki/Blade_Runner_(soundtrack) — genres electronic/new-age/ambient; "draws on the jazz scores of classic film noir", neo-classical elements (-> jazz, neoclassical); Vangelis produced/recorded at Nemo Studios 1981–82, improvised to picture; instruments (Yamaha CS-80 main, Prophet-10, Roland Jupiter-4, CR-5000, VP-330, Yamaha GS1, E-mu Emulator, Steinway, CP-80, Rhodes, gamelan, glockenspiel, gong, snare, timpani, tubular bells; Dick Morrissey sax); 1994 release has dialogue samples on four tracks (voice spoken, production sampling); mood "bleak futurism"; AllMusic 5/5, NME 9/10; Pitchfork best film score (2019), Guardian, Future Music lists; UK #20, UK Gold.
- https://musictech.com/2014/12/landmark-productions-vangelis-blade-runner-soundtrack/ , https://reverbmachine.com/blog/vangelis-blade-runner-synth-sounds-2022/ — CS-80 signature, Prophet 10 drones, GS-1 rhythms, VP-330.
- Not found: documented influences, critics' sounds-like comparisons (left empty). Language left empty (instrumental + film dialogue).
- New tokens: instrument `gamelan` (parent: percussion); production `prophet10`, `yamahags1`, `jupiter4` (synth models, like jupiter6/jupiter8).
- Doubt: brief said type studio, but album list says soundtrack; used `soundtrack`. Demis Roussos vocal credited on one track; kept voice instrumental|spoken.

## Third batch: Morricone and Battiato neighbours, James Last (Oct 2026, owner: 'fallo tu mirato')
Italian film composers cited by the Morricone rows (Piccioni, Nicolai, Trovajoli, Rota, Bacalov; year = film year, several LPs came out later; Django's producers dropped as they are the 1985 LP's), the artists Battiato's rows cite most (Peter Gabriel, Alice, David Sylvian, Giuni Russo, De André), both James Last albums (owner). Battiato's Fetus, Pollution and Sulle corde di Aries gain Tom Zé and Serge Gainsbourg in sounds_like (Simon Reynolds, 4Columns, 2017).

## alice-gioiellirubati

# alice-gioiellirubati — Alice, Gioielli rubati (1985)
- https://it.wikipedia.org/wiki/Gioielli_rubati — genres in infobox (Rock and roll, Musica leggera, Rock progressivo, Rock elettronico, Musica sperimentale); producer Angelo Carrara; arranger Roberto Cacciapaglia; mixed at Power Station NY; Aldo Banfi keyboards/programming, Michele Fedrigotti keyboards; charts IT 18, AT 12, CH 13, SE 15, DE 42; Targa Tenco 1985 best female interpreter. Page flagged as insufficiently sourced.
- https://en.wikipedia.org/wiki/Gioielli_rubati — genres pop, rock; La Scala strings and woodwinds arranged/conducted by Cacciapaglia; Banfi "computers, keyboards, drum machines"; Luna indiana partly spoken; Prospettiva Nevski her best-selling solo single in Europe.
- https://www.rollingstone.it/musica/classifiche-liste-musica/tutti-i-dischi-di-alice-dal-peggiore-al-migliore/942572/ — excludes covers albums, so no ranking for this one.
- Battiato role: songwriter (with Giusto Pio; Messina/Jaeggy on two lyrics); NOT credited as producer (Carrara) → not in producers. sounds_like Franco Battiato because the album is entirely his songs (not an influence: covers excluded by rule).
## Choices / doubts
- "Rock elettronico" mapped to existing `electrorock` (same term contracted). "Rock and roll" in the it.wiki infobox left out: unsourced and contradicted by every description (strings + keyboards Battiato covers); owner may add `rockandroll` if he wants strict application.
- voice and lyrics left empty: no source describes them for this album (only Luna indiana spoken). No critic scores found; acclaim 4 rests on the Targa Tenco (critics' jury) → confidence medium.

## bacalov-django

# bacalov-django — Luis Bacalov, Django (1966)
Sources
- https://en.wikipedia.org/wiki/Django_(1966_film): Bacalov's first western; more traditional than Morricone, especially brass and orchestral writing; "Latin and rock elements" (genres rock, latin); theme lyrics Migliacci/Mellin, Rocky Roberts (English, film) vs Roberto Fia (Italian, album/single) → language it; Movie Wave 5/5, Sputnikmusic 4/5; score among film's most praised elements; reused in Django Unchained.
- https://it.wikipedia.org/wiki/Django_(film_1966): RCA Italiana album/single carried Roberto Fia's Italian version; theme reused by Tarantino and Sukiyaki Western Django.
- https://theaudiophileman.com/django-bacalov/: piercing brass, flute with dramatic effects, frantic cello runs, rock-based bass lines (instruments); traditional template with avant-leaning touches (experimental 2); compared with mentor Morricone (sounds_like).
- https://www.sputnikmusic.com/review/61544/Luis-Bacalov-Django/ (search snippet): Django his most enduring contribution (importance 5).
- Discogs API, release of master 276501 (Intermezzo/General Music 1985): first full LP 1985, theme single Parade PRC 5001 in 1966; album produced for Intermezzo by Maurizio Buttazzoni and Sergio Bassetti (producers column — these are reissue-album producers; drop if you prefer original-session credits only).
- https://it.wikipedia.org/wiki/Luis_Bacalov: other works list.
Doubts: voice type of Roberto Fia not described → only `instrumental`. Year kept as film/single 1966 (full LP first issued 1985).

## deandre-creuzadema

# deandre-creuzadema — Fabrizio De André, Crêuza de mä (1984)
- https://it.wikipedia.org/wiki/Crêuza_de_mä — genres Musica d'autore, folk rock, musica etnica, world music; producers Pagani & De André; full instrument credits (oud, saz, bouzouki, mandola, mandolino, violino, viola, synth, flute; Banfi/Martin synths; Bedel zarb; Arcari shanai; Mussida classical guitar; Kekes gaida); field recordings at Genoa fish market; Italy #7, gold; Targa Tenco; OndaRock pietra miliare, AllMusic 4.5, Scaruffi 7, Byrne, Musica e Dischi best of the 80s, RS Italia #4.
- https://en.wikipedia.org/wiki/Cr%C3%AAuza_de_m%C3%A4 — genres folk, world music; Synclavier (Banfi), Yamaha GS-2 electric piano, goblet drum, Domna Samiou sample; lyric themes (sailors, Sidón war, prostitution, nostalgic lament); multitracked tenores-like vocals.
- https://www.ondarock.it/pietremiliari_ita/deandre_creuza.htm (Giovanni Agnes) — world-music cornerstone placed before Peter Gabriel's Passion and Paul Simon's Graceland (→ sounds_like); gaida, oud, bouzouki; melancholic/fatalistic/sensual mood.
- https://www.ilfattoquotidiano.it/2020/08/03/creuza-de-ma-ricantata-da-mina-e-vasco-per-linaugurazione-del-ponte-san-giorgio-quando-de-andre-nel-1984-disse-non-vendera-un-cao/5888823/ — De André expected it not to sell (mainstream basis).
## New tokens
- genre `ethnicmusic` (it.wiki "musica etnica"; parents: worldmusic, folk).
- instruments `saz` (bağlama; parents: bouzouki/oud family), `shehnai` (oboe-like double reed; parent: woodwinds). Gaida entered as existing `bagpipes`.
## Doubts
- influenced_by empty: Sardinian vocal tradition and trips to Africa/Middle East are documented, but no artist. voice left empty (no descriptor beyond "expressive").

## gabriel-petergabrielmelt

# gabriel-petergabrielmelt — Peter Gabriel, Peter Gabriel (Melt) (1980)
- https://en.wikipedia.org/wiki/Peter_Gabriel_(1980_album) — genres art rock, post-punk, post-progressive, progressive pop; text: "embracing post-punk and new wave"; producer Steve Lillywhite (Padgham engineer only); PAiA drum box, Roland CR-78, gated reverb / "gated room sound", early Fairlight CMI, cymbals banned; Chapman Stick, surdo; themes (decaying mind, assassinations, war, Biko); reviews AllMusic 5, Mojo 5, Classic Rock 10, Uncut 9, RS 4; lists RS 80s #46, Q 80s #29, Pitchfork 80s #125; UK #1; Charisma exec judged Fripp solos not radio-friendly.
- https://en.wikipedia.org/wiki/Biko_(song) — Gabriel credits the Dingaka soundtrack LP with influencing the percussion; African rhythms; Larry Fast's harmonizer-detuned synth bagpipes.
- https://en.wikipedia.org/wiki/Dingaka and Bertha Egnos page via search — Egnos music director of the Dingaka soundtrack (with Basil Gray, Eddie Domingo) → influenced_by `Bertha Egnos (Dingaka)`.
- https://avclub.com/peter-gabriel-peter-gabriel-a-k-a-iii-melt-1798211014 — dense aggressive post-punk production; shares more with Talking Heads' Remain in Light and Fear of Music (→ sounds_like).
- https://loudersound.com/features/david-longdon-reviews-peter-gabriel-s-melt — near-unanimous acclaim; tense, claustrophobic.
## New tokens
- instruments `chapmanstick` (parent: bass), `surdo` (parent: percussion).
## Doubts
- Gated reverb expressed as `noisegating|roomambience` (no gatedreverb token). voice left empty (no album-specific description). Dingaka credit could alternatively be "Basil Gray".

## gabriel-so

# gabriel-so — Peter Gabriel, So (1986)
- https://en.wikipedia.org/wiki/So_(album) — genres art pop, art rock, progressive pop, worldbeat; text "fusing pop, soul, and art rock with elements of traditional world music, particularly African and Brazilian"; producers Gabriel & Daniel Lanois (Killen/Bascombe engineers); gear Fairlight CMI, Linn 9000, LinnDrum, Yamaha CS-80, Synclavier, Mitsubishi 32-track digital; personnel (Memphis horns, Shankar violin, Djalma Corrêa surdo/congas, shakuhachi intro, Chris Hughes electronic drums, Richard Tee piano); Sledgehammer horns inspired by Otis Redding (→ influenced_by); voice "throaty, gravelly", Pareles "grainy" (→ raspy); Mercy Street octave shadow vocal (→ layeredvocals); Buckley: Sledgehammer echoes Stevie Wonder's Superstition (Talking Book) and Bowie's Fame (Young Americans) (→ sounds_like); Chicago Tribune "funky rhythms", Petridis "cod-funk" (→ funk); themes (torture, unemployment, consumerism, obedience, devotion). Reception Pitchfork 9.1, AllMusic 4.5, RS Album Guide 5, RS 500 #187/#297, RS 80s #14, Slant #41; 5x Platinum US.
## New tokens
- instrument `shakuhachi` (parent: flute/woodwinds).
## Doubts
- Anne Sexton (Mercy Street) and Gaudí (In Your Eyes) are non-musical inspirations: left out of influenced_by. Youssou N'Dour is a guest, not an influence.

## giunirusso-energie

# giunirusso-energie — Giuni Russo, Energie (1981)
- https://it.wikipedia.org/wiki/Energie_(Giuni_Russo) — genres Pop sperimentale, New wave (citing OndaRock); produttore Franco Battiato – Alberto Radius; arrangements Battiato & Giusto Pio; Battiato co-author of all tracks; musicians (Pio violin, Radius guitar, Destrieri keyboards, Capra Vaccina timpani, Colonna piano, Donnarumma bass, Scebran drums); 2019 LP FIMI #6; OndaRock "pietra miliare".
- https://www.ondarock.it/artista/giuni-russo (Giuseppe D'Amato) — "pop sperimentale", "synth e violini", Crisi metropolitana mixes punk and spinta elettronica, Una vipera sarò a tango; near five-octave range, Yma Sumac comparison; Il sole di Austerlitz likened to Battiato's Prospettiva Nevskij (Patriots); Rettore parallel; themes war/history, urban alienation, exile, autobiography; most praised album.
- https://www.ondarock.it/classifiche/anni80/ — Energie #2 among Italian 1980s albums (after La voce del padrone).
- https://www.rollingstone.it/musica/classifiche-liste-musica/le-10-migliori-produzioni-di-franco-battiato/511885/ (Fabio Zuffanti, 2020) — #1 of Battiato's 10 best productions; Battiato "produttore e co-autore".
- https://www.rollingstone.it/?p=550909 — Sisini: a record "sempre stato avanti".
## Choices / doubts
- Producers Battiato|Radius as credited; Giusto Pio is arranger only → not in producers.
- Genres include `tango` and `punk` because OndaRock names them for single tracks; `electronic` from "elettronica spinta".
- Rettore in sounds_like is a thematic parallel (Oriental themes) more than sonic; drop it if too loose.

## jameslast-classicsuptodate

# jameslast-classicsuptodate: James Last, Classics up to Date (1966)

Sources
- https://de.wikipedia.org/wiki/James_Last: Polydor International suggested the series after the Dreigroschenoper recording went well. Last took each work's main theme, used fewer instruments, rewrote string parts and laid a quiet rhythm underneath. The Bergedorfer Kammerchor (about 40 amateurs, led by Hellmut Wormsbächer) only hummed, with no text, to warm the strings. That supports voice choral, production wordlessvocals and stringarrangements, groove 1 and energy 2. Volumes sold over a million each over time and reached buyers outside classical music. The table possibly shows UK #67, but the layout made the row unclear, so it is not used.
- https://en.wikipedia.org/wiki/James_Last: nine volumes of classical melodies arranged with strings, rhythm and wordless chorus. Norway #21 (1966). Genres big band and easy listening for the artist.
- https://www.classicalmusicdaily.com/articles/l/j/james-last.htm: the series uses strings, wordless chorus and a beat.
- Discogs master 163372 (https://www.discogs.com/master/163372): Polydor 1966. Genres Pop, Classical; styles Romantic, Easy Listening. James Last credited as conductor and arranger, with no producer credit. This is the source for the genres easylistening, classical and pop; "Romantic" refers to the period of the pieces and is not used. Tracks: Offenbach Barcarole, Verdi Nabucco chorus, Brahms Hungarian Dance 5 and Waltz op. 39/15, Bizet Toreador and Habanera, Grieg, Borodin Notturno, Tchaikovsky Romeo and Juliet, Ketèlbey In a Persian Market, Dvořák New World Largo, and the Bruch Violin Concerto 1 Adagio.

Left empty
- producers: none credited.
- influenced_by: Mantovani was the model for Last's earlier Radio Bremen strings, but nothing ties him to this album.
- sounds_like: no critic comparison found.
- electronic, mood and polish: no evidence.
- acclaim: no reviews found.
- classicalcrossover: no source uses that term for this album, so it is not in the genres.

New tokens
- production `wordlessvocals` (humming or wordless choir used as texture). Suggested label "Wordless vocals". Nearest existing tokens: layeredvocals, and voice choral.

## jameslast-nonstopdancing

# jameslast-nonstopdancing: James Last, Non Stop Dancing (1965)

Sources
- https://en.wikipedia.org/wiki/Non_Stop_Dancing_65: Polydor 237.447, recorded 1965 at Polydor studios in Hamburg, engineer Peter Klemt. Producer: James Last (infobox). Genre: jazz (infobox). AllMusic 4/5. First of about 30 Non Stop Dancing albums. Personnel: trumpet, trombone, 2 sax, 2 guitars, bass, drums, piano and organ. Medleys of 1964–65 hits (Beatles, Orbison, Manfred Mann, Drafi Deutscher...).
- https://en.wikipedia.org/wiki/James_Last: medley of short versions of pop songs held together by an insistent dance beat and crowd noise. "Happy music": big-band arrangements with a jaunty dance beat, heavy on bass and brass. Big hit that made him a European star. Spencer Leigh (The Independent): the series "paved the way for disco and dance mixes". Big band / easy listening; critics called him "king of elevator music". These support genres easylistening and bigband, mood, groove, tempo and the horn arrangements.
- https://de.wikipedia.org/wiki/James_Last: DE #3, 15 months on the chart. Idea came from the party life at Holitzberg (Hamburg-Langenhorn). Polydor production head Heinz Voigt approved the LP; Voigt is not credited as producer, so he is not listed. Party noise was recorded at a party while the orchestra tape played, then mixed in (overdubbing, crowdnoise). The noise covered the joins, so the album runs without breaks. Three songs per medley to keep GEMA fees low. Last's sound started as an imitation of Bert Kaempfert's style, and the resulting "Happy Sound" was "already audible on Non Stop Dancing '65" (Peter Klemt account). That is the basis for influenced_by: Bert Kaempfert.
- Discogs master 437332 / release 3531042 (https://www.discogs.com/master/437332): genres Rock, Pop, Folk/World/Country; styles Instrumental, Schlager, Easy Listening, Skiffle, Rock & Roll, Twist; "Potpourri". This is the only source for the genres pop, schlager, rockandroll, twist, skiffle and rock, and for voice: instrumental. It is user-contributed, so trim those genres if Discogs is not accepted.
- https://www.thestranger.com/?p=201818 (obituary): contemporary pop with strings, horns and a "swinging backbeat", mixed with live-audience sound to make a "party record".

Judgments
- energy 3, mood 5, groove 5, tempo 4: these follow the sources' "insistent dance beat", "happy music" and "party record", and the album's purpose, non-stop dancing.
- electronic 1: amplified guitars, bass and organ in an otherwise acoustic big band.
- polish 3: a normal Polydor studio production, with no evidence for more.
- sounds_like: left empty because no critic comparison was found.
- language and lyrics: left empty because the album is instrumental.

New tokens
- production `crowdnoise` (party or audience noise recorded separately and mixed over the music). Suggested label "Crowd / party noise". Nearest existing token: overdubbing.

## nicolai-lacodadelloscorpione

# nicolai-lacodadelloscorpione — Bruno Nicolai, La coda dello scorpione (1971)
Chosen because two Morricone rows citing Nicolai are gialli (L'uccello dalle piume di cristallo, Chi l'ha vista morire?) and this Sergio Martino score is called the crown jewel of his giallo work; it has the most standalone documentation (Digitmovies CD 2004, Death Waltz 2LP 2017 with review). Close alternative: Tutti i colori del buio (1972, sitar, Edda Dell'Orso on "Sabba", Rock and Roll Globe).
Sources
- http://giallo-fever.blogspot.com/2006/11/bruno-nicolai-in-giallo-ask-anyone.html: edgy percussion, strangled-sounding trumpet, menacing guitar in title theme, lush romantic themes "Foglie rosse"/"Vento d'autunno"; vocal closer "Shadows"; scores sound alike (acclaim 3).
- https://www.horrordna.com/music/bruno-nicolai-the-case-of-the-scorpions-tail-original-motion-picture-soundtrack-album-lp-review: 3.5/5; strings, piano, bass, snare drum; tense vs kitschy melodramatic; "sleazy lounge" cue (lounge genre); "Shadows" sung in English by Audrey Stainton, crooning (voice soft, language en).
- Discogs API: Digitmovies 2004 CD (first release), Death Waltz 2017; styles Soundtrack, Score, Easy Listening.
- Search summary of Discogs "Bruno Nicolai In Giallo" box: Scorpion's Tail the crown jewel, "quintessential giallo scoring".
- https://en.wikipedia.org/wiki/Bruno_Nicolai, https://it.wikipedia.org/wiki/Bruno_Nicolai, https://rockandrollglobe.com/soundtracks-and-film-scores/ten-underrated-italian-horror-soundtracks/: context and other works.
Doubts: Nicolai's western scores (Adiós, Sabata; Corri uomo corri) would link the two Morricone westerns citing him; Il mercenario is a Morricone co-credit.

## piccioni-camille2000

# piccioni-camille2000 — Piero Piccioni, Camille 2000 (1969)
Chosen because the Morricone rows citing Piccioni are lounge/jazz/erotic late-60s scores (Metti, una sera a cena; L'assoluto naturale; Il clan dei siciliani) and Camille 2000 is the Piccioni score most celebrated by critics/collectors in that field. Alternatives with more "institutional" weight: Salvatore Giuliano (Nastro d'Argento 1963), Travolti da un insolito destino (David 1975), Le mani sulla città (Morricone called it one of the most beautiful scores ever).
Sources
- Discogs API release 968128 (Easy Tempo ET 905, 1998): "never previously released"; composed/arranged/conducted 1969 for Radley Metzger's film; styles Soul-Jazz, Bossa Nova, Smooth Jazz, Easy Listening, Latin Jazz (genres; latinjazz and smoothjazz are new tokens). Blind Faith 2017 LP: recorded/mixed by Federico Savina.
- http://www.colonnesonore.net/recensioni/cinema/5783-il-mondo-di-notte-camille-2000.html: soft jazz and psychedelic funk, brass ("monoliti in ottone"), tight rhythmic tapestries; called a capolavoro, rating 5.
- Exclaim! (https://exclaim.ca/film/article/piero_piccioni-camille_2000, via search snippet): "masterpiece", futuristic funk and jazz romance (funk genre).
- Search-result review snippet (source page not identified, likely AOTY/RYM user review): title track opens with bubbling organ; "Lovers" adds saxophone to bass and organ; Brazilian influence on "Tears in Brasil", "Brasil 2000" → organ, saxophone, bass. Flute from track title "Slow Flute Beat". Treat these as weaker evidence.
- https://nostalgiaking.com/2017/03/20/piero-piccioni-camille-2000/: jazz/easy listening; unreleased at time of film.
- https://www.letterboxd.com (search snippet): calm lo-fi jazz and tunes to groove to (groove 3).
- RYM 3.75/5 from 709 ratings (search snippet).
- https://it.wikipedia.org/wiki/Piero_Piccioni, https://en.wikipedia.org/wiki/Piero_Piccioni: other works.
Doubts: album first issued 1998; year set to 1969 (composition/film), as for the other film-dated Italian scores. Weakest-documented of the five.
New tokens: `latinjazz` (parents: jazz, latin), `smoothjazz` (parent: jazz).

## rota-thegodfather

# rota-thegodfather — Nino Rota, The Godfather (1972)
Chosen over 8½: far better documented (dedicated en/it Wikipedia album pages, AllMusic 5/5, AFI #5, Grammy/Golden Globe/BAFTA, Billboard #21) and its Sicilian-tinged melancholic orchestral writing is closer to the Morricone rows citing Rota (Metello, La Califfa) than 8½'s circus marches. 8½ (1963) has almost no documentation of the album itself (it.wiki only notes the 1964 Nastro d'Argento).
Sources
- https://en.wikipedia.org/wiki/The_Godfather_(soundtrack): Paramount 1972; Carlo Savina conductor; cello and cornet solos; nostalgic, "dark, looming, and elegant" (AllMusic 5/5, Zach Curd); Grammy, Golden Globe, BAFTA; Oscar nomination withdrawn (Fortunella reuse); Al Martino sings "I Have But One Heart" (English) → language en.
- https://it.wikipedia.org/wiki/Il_padrino_(colonna_sonora): Carmine Coppola's band pieces (Connie's Wedding); Fortunella controversy.
- Discogs API master 64122: producer Tom Mack; tracklist; Carmine Coppola composed/conducted Connie's Wedding.
- Search results: Billboard 200 #21 (Wikipedia/Nino Rota discography); AFI's 100 Years of Film Scores #5 (https://en.wikipedia.org/wiki/AFI%27s_100_Years_of_Film_Scores, Playbill).
- Total Film (pressreader) / filmtracks via search: waltz opens on melancholy trumpet, accordion and mandolin for Sicilian tradition; mandolin, accordion, acoustic bass for Sicily scenes; solo trumpet bridges folk past and orchestra (genre folk, instruments). SFCV (Scott Terrell): accordion, mandolin and guitar make a café sound within the orchestra. https://theseventies.berkeley.edu/godfather/2018/06/30/the-sound-of-nostalgia-nino-rotas-godfather-theme (trumpet tied to Vito; nostalgia).
Notes: Sibelius Symphony No. 1 resemblance is a quotation, not listed as influence; Fortunella is Rota's own work (self-reference). `waltz` genre from "The Godfather Waltz" being the main theme.

## sylvian-secretsofthebeehive

# sylvian-secretsofthebeehive — David Sylvian, Secrets of the Beehive (1987)
- https://en.wikipedia.org/wiki/Secrets_of_the_Beehive — genres art rock, chamber rock; producer Steve Nye, Sylvian assistant producer; instruments (piano, acoustic/slide/electric guitar, organ, synths, treated piano, Sakamoto string/woodwind/brass arrangements, Danny Thompson double bass, Mark Isham flugelhorn/trumpet, Jansen drums, percussion); lyric theme: belonging to a society without fitting in; Fujii steered him to ECM jazz (a label, not an artist → not listed); reviews Pitchfork 9.1 (2019), Mojo 5, AllMusic 4.5, NME 9, Record Mirror 4.5 ("introspective", "melodic and mellow"); UK #37.
- https://it.wikipedia.org/wiki/Secrets_of_the_Beehive — genres Art pop, Ambient pop.
- https://musicaficionado.blog/2018/11/07/secrets-of-the-beehive-by-david-sylvian/ — sparse acoustic, melancholic; Sylvian's spiritual search (Buddhism, Gurdjieff) in the lyrics (→ spiritual).
## New tokens
- genre `chamberrock` (parents: artrock, chamberpop, rock).
## Doubts
- sounds_like empty: only blog-level links to Talk Talk's Spirit of Eden / This Mortal Coil, not a qualified critic. influenced_by empty (Holger Czukay link is speculative). voice empty. No best-of list placements found → acclaim 4, importance 4, confidence medium.

## trovajoli-setteuominidoro

# trovajoli-setteuominidoro — Armando Trovajoli, Sette uomini d'oro (1965)
Chosen because the Morricone rows citing Trovajoli are late-60s lounge/jazz scores; this is his jazz/easy-listening landmark with an award (Nastro d'Argento 1966 Best Score) and an original CAM LP. Alternatives: La matriarca (1968, "L'amore dice ciao", his most popular song per en.wiki; LP only 2001), C'eravamo tanto amati, Profumo di donna (1974).
Sources
- https://en.wikipedia.org/wiki/Seven_Golden_Men and http://worldofsoundtrack.blogspot.com/2009/05/armando-trovajoli-sette-uomini-doro.html: Nastro d'Argento Best Score 1966.
- Discogs API master 438968 / release 30947893: CAM LP 1965 (recorded 16-6-1965), I Cantori Moderni di Alessandroni vocals; styles Easy Listening, Latin Jazz (LP), Cool Jazz (7").
- Discogs user review on release 6494984 (via search summary): jazz touches, whistled melodies, swing, vocal group styled after the Swingle Singers (sounds_like, swing, whistle).
- https://www.qobuz.com/ie-en/album/sette-uomini-doro-armando-trovajoli-i-cantori-moderni-di-alessandroni/aftqeuzrdiatb: credits.
- https://www.soundohm.com/product/il-grande-colpo-dei-7-uom: about the 1966 SEQUEL (bossa jazz, Swingle Singers + Schifrin) — NOT used for genres.
- https://it.wikipedia.org/wiki/Armando_Trovajoli, https://en.wikipedia.org/wiki/Armando_Trovajoli: other works, jazz-based style.
Doubts: instrumentation poorly documented (only whistle); language empty (wordless vocal group per the Swingle comparison).
New token: `latinjazz` (parents: jazz, latin).

## Fourth batch: foreign neighbours of Battiato from local scenes (owner, Oct 2026)
Links checked by the research agent: Los Planetas (J co-adapted Apriti sesamo into Spanish, Ábrete sésamo 2013: Público, Página/12), Tom Zé and Serge Gainsbourg (Simon Reynolds, 4Columns 2017), Ash Ra Tempel (Battiato played supporting shows with Tangerine Dream and Ash Ra Tempel: OndaRock monograph), Sepideh Raissadat (sings on Fleurs 2, Il venait d'avoir 18 ans), Hossam Ramzy (percussion on Caffè de la Paix track 2, Fogh in Nakhal: Discogs EMI 1062409), Léo Ferré (Col tempo sai on Fleurs 3 is a cover of Avec le temps). Credits: Anwar is by Ensemble Marâghî feat. Sepideh Raissadat; Immortal Egypt by Phil Thornton & Hossam Ramzy (coBilled). Claude's fixes: Los Planetas' Beef and Robyn Hitchcock dropped (borrowed melodies); Anwar language fa|tr. Rejected: Circle, Acid Mothers Temple, Los Natas (they only covered Battiato on a tribute).

## ashratempel-schwingungen

# Ash Ra Tempel, Schwingungen (1972)

## Link to Battiato (checked: holds, but the source differs)
I could not find the Auralcrave article (search on auralcrave.com returned only a Tangerine Dream *Zeit* piece without Battiato). The fact itself is confirmed by OndaRock's Battiato monograph: https://ondarock.com/monographs/franco-battiato/: in the early 1970s Battiato played "shows supporting Brian Eno, Magma, Tangerine Dream, Ash Ra Tempel, John Cale and Nico". Note: OndaRock says supporting shows, not a joint tour. A reader comment elsewhere mentions a Feb 1974 Roundhouse date with Ash Ra Tempel (weak, not used). Cite OndaRock instead of Auralcrave.

## Sources
- en-Wikipedia: https://en.wikipedia.org/wiki/Schwingungen: second album, Ohr 1972; genres krautrock, psychedelic rock; producer Rolf-Ulrich Kaiser (Dieter Dierks engineer, not a producer); personnel Hartmut Enke (guitar, bass, electronics), Manuel Göttsching (guitar, organ, electronics, choir), Wolfgang Müller (drums, vibraphone), Uli Popp (bongos), Matthias Wehler (alto sax), John L. (vocals, jaw harp, percussion); AllMusic 4.5/5. Opening "Light" is "heavily inspired by Peter Green's playing on Fleetwood Mac's 'Albatross'" (David Stubbs, *Future Days: Krautrock and the Birth of a Revolutionary New Music*, 2015) → influenced_by Fleetwood Mac ("Albatross" was a non-album single, so no album in brackets).
- George Starostin, Only Solitaire (2011): http://only-solitaire.blogspot.com/2011/08/ash-ra-tempel-schwingungen.html: John L.'s delivery owes a lot to Can's singers (Mooney, Suzuki); bluesy "we are all one" mantra recalls Eric Burdon & the Animals; part free-jazz, part cosmic jam; "space rock"; phasing and feedback; "Suche & Liebe" first half all chimes, bells and Mellotrons, then tribal drums and a "Pink Floydian" jam (→ sounds_like Can, Eric Burdon & the Animals, Pink Floyd; genres spacerock, freejazz; instruments mellotron, bells, chimes; production phasing, feedback). Vocals sung in English (→ language en; the brief suggested de, but the lyrics quoted are English).
- ProgArchives (via search summary): https://www.progarchives.com/album.asp?id=3582: a reviewer compares the sound to Pink Floyd's *Meddle* era (→ "Pink Floyd (Meddle)"); "Suche" built on vibraphone and organ.
- Julian Cope, *Krautrocksampler* (1995), quoted in MG.ART reissue notes: "Beware of Schwingungen!", side two as the sound of heaven, "a gift from the Gods".

## Values
- voice left empty (reviewers only say John L. yells and mutters, "off-key"). lyrics spiritual (the "we are all one" mantra; Cope's "sound of heaven"), low confidence.
- No new tokens.

## gainsbourg-histoiredemelodynelson

# Serge Gainsbourg, Histoire de Melody Nelson (1971)

## Link to Battiato (checked: holds)
Same Reynolds piece: 4Columns, 2017, https://4columns.org/reynolds-simon/franco-battiato: "a better analogy might be with Brazil's Tom Zé or France's Serge Gainsbourg". Critic's comparison of the artists, not an influence.

## Sources
- en-Wikipedia: https://en.wikipedia.org/wiki/Histoire_de_Melody_Nelson: released 24 Mar 1971, Philips; recorded Marble Arch (London) and Studio des Dames (Paris); producer Jean-Claude Desmarty; arranged and co-written by Jean-Claude Vannier; genres French pop, avant-funk; funk-style electric guitar and bass, spoken word and Sprechgesang vocals, lush strings and choirs; Jean-Luc Ponty electric violin on track 6. Reception: Metacritic 96, AllMusic 5, Pitchfork 10, PopMatters 10 ("a blueprint for trip hop"), A.V. Club A, Pitchfork 70s #21, RS France #4. Story: narrator, a 14-year-old girl, sex, her death in a plane crash, cargo cult.
- fr-Wikipedia: https://fr.wikipedia.org/wiki/Histoire_de_Melody_Nelson: genres pop, rock symphonique, art rock, jazz-rock, jazz-funk; Gainsbourg mostly narrates instead of singing; slowed-down funk bass and drums; ostinato; 2011 reissue research credits: Alan Parker (electric guitar), Dave Richmond (bass), Vannier (piano), Dougie Wright (drums, presumed), Marc Chantereau (timpani, track 7), Jean-Pierre Sabar (harmonium, track 7), Georges Barboteu (horn solo, track 4), Jeunesses musicales de France choir; strings recorded in Paris with Opéra de Paris players over the London rhythm sessions (→ `overdubbing`, `stringarrangements`). Vannier's account: Gainsbourg wrote the story after hearing the music and strings; homage to Nabokov; inspired by Heredia's sonnets (literary, not musical: not listed as influences). Gold 1983; commercial failure on release.
- Europe 1 (influence on later artists): https://www.europe1.fr/culture/ce-que-vous-ne-savez-pas-sur-lalbum-histoire-de-melody-nelson-3000917
- AVCesar review (10/10, French): https://www.avcesar.com/critique/serge-gainsbourg-histoire-de-melody-nelson-2701: funk bass, violins and choirs, spoken texts.

## Values
- mood 1 (Pitchfork: "the black spaces of a man's interior"; death and obsession), theatrical 4 (narrated concept suite, orchestra and choir), experimental 4 ("nothing else in rock"), groove 2 (slowed funk), lyrics storytelling|sensuality|love|heartbreak|spiritual (the final "spiritual quest" of Cargo culte, fr-Wikipedia).
- influenced_by empty: no documented musical influence for this album. sounds_like empty: no source names a sonic peer.

## New tokens
- genres `frenchpop` (en-Wikipedia "French pop"; suggested parents: pop, chanson) and `jazzfunk` (fr-Wikipedia "jazz-funk"; parents: jazz, funk).

## hossamramzy-immortalegypt

# Hossam Ramzy, Immortal Egypt (1998)

## Link to Battiato (VERIFIED: holds)
Hossam Ramzy is credited on Battiato's *Caffè de la Paix* (EMI, 1993): **Percussion, track 2 only ("Fogh in Nakhal")**. Checked in the Discogs database (API, release 1062409, Italian EMI CD): "Hossam Ramzy | Percussion | tracks 2"; notes: recorded March 1993 at Real World Studios, Bath, and June 1993 at Morning Studio, Milan; track 2 adapted from a traditional Iraqi song (Nizar Ismail plays oud on it). https://www.discogs.com/release/1062409-Franco-Battiato-Caff%C3%A9-De-La-Paix. en-Wikipedia lists him among the album's collaborators: https://en.wikipedia.org/wiki/Caff%C3%A8_de_la_Paix. So the credit is real but limited to one track: he is a guest session player, not a collaborator.

## Doubt: artist credit
The album is credited to **Phil Thornton & Hossam Ramzy** (New World Music NWCD 455), all tracks composed, arranged and produced by both. Third album in their series after *Pharaoh* and *Eternal Egypt*.

## Sources
- Discogs (API, release 1531367 and 2005 reissue 3685832): https://www.discogs.com/release/1531367-Phil-Thornton-Hossam-Ramzy-Immortal-Egypt: full credits: Thornton keyboards, synths (vocoder, E-bow, electric guitars), didgeridoo, drum programming; Ramzy Egyptian/world percussion and drums; Mohamed Ali ney; Ahmed Abdel Fattah quarter-tone accordion; Abdalla Helmy kawala flute; Mahmoud Serour violin; Mamdouh El Gebaly and Chalf Hassan oud (Hassan also keyboards); Mohamed Baher mizmar; Sayed El Sha-Er and Shaker Abdullatif rebaba; Mohamed Abo El Khair vocals; Jan Thornton analog synth programming; Grant Young fretless and slap bass; Darren Green didgeridoo. Recorded in Sussex, Cairo and London; mixed Feb–Mar 1998. Discogs styles on the 2005 release: Tribal, Downtempo, Fusion.
- Phil Thornton's site: https://www.philthornton.com/web/Albums/immortalegypt.php: Egyptian dance/Western contemporary theme; a week of overdubs in Cairo (Aug 1997), musicians improvising over short loops; further overdubs in London and Sussex; analog synth textures; per-track rhythms (saiidi, maqsoum-type, malfuf, zaar) → production `overdubbing|synthprogramming`.
- AllMusic review by Adam Greenberg (reproduced on Fishpond): https://www.fishpond.com/Music/Immortal-Egypt-Thornton-Phil-Ramzy-Hossam-Recorded-By-Hossam-Ramzy-Recorded-By/0767715045527: "thoroughly groovable collection of dub work", "unbreakable beat", "standard world beat-type album... pretty good", not authentic (→ genres worldbeat, dub; groove 3). Store category New Age (→ newage, weak). Amazon editorial: probably too gentle for dance clubs.

## Values
- language empty: one vocalist credited, language undocumented; voice `instrumental` as the main mode. lyrics empty.
- mood left empty. importance empty (no source on its place in Ramzy's career).

## New tokens
- instruments `ney` (also used for Anwar), `rebab` (Egyptian two-string fiddle; parent: strings), `mizmar` (Egyptian shawm; parent: woodwinds). Kawala entered as `flute`.

## leoferre-amouranarchie

# Léo Ferré, Amour Anarchie (1970)

## Link to Battiato (checked: holds; a cover, not an influence)
Battiato covered "Avec le temps" in Italian as "Col tempo sai" on *Fleurs 3* (Sony, 2002), track 5 (writers Léo Ferré, Enrico Medail, Gian Piero Simontacchi): https://en.wikipedia.org/wiki/Fleurs_3. Note: "Avec le temps" was recorded in October 1970 for vol. 2 but left off the original LP and released as a 1971 single; it was added to vol. 2 only in the 2013 and 2021 editions (leo-ferre.com, fr-Wikipedia).

## Sources
- fr-Wikipedia: https://fr.wikipedia.org/wiki/Amour_Anarchie: two volumes (May and Nov 1970), double album Dec 1970, Barclay; recorded Jan–Oct 1970, Studios Barclay; genre chanson française; Rolling Stone France 2010: 24th best French rock album; Les Inrocks 2017: 28th in the 100 best French albums. Musicians: Zoo on "Le Chien" and "La The Nana" (electric organ, piano, electric guitar, trombone, tenor/alto/soprano/baritone saxes, flute, electric violin, bass, drums); Lionel Gali solo violin and Danièle Licari voice on "L'Amour fou"; arrangements and musical direction Jean-Michel Defaye; supervision Richard Marsan.
- Official site, vol. 1: https://leo-ferre.com/amour-anarchie: "Supervision & réalisation artistique: Richard Marsan" (→ producers); Alaric Perrolier (2022): love and revolution intertwined after May 68, crude, invective style, Apollinaire/Hugo/Baudelaire heritage (literary, not listed as musical influences), "coup de maître".
- Official site, vol. 2: https://leo-ferre.com/amour-anarchie-vol-2: same team; Ferré broke the standard song length (Le Chien ~7 min, Psaume 151 12 min); Barclay pushed The Nana as the commercial single; vol. 1 sales broadened his audience; Avec le temps and L'Adieu (breakup songs) left off.
- Nightfall review (via search snippet, page behind Cloudflare): https://fp.nightfall.fr/index_13163_leo-ferre-amour-anarchie-vol-1.html: "Le Chien" drops verse/chorus/rhyme; with Zoo "closer to progressive rock" (→ genre prog).

## Values
- voice spoken|powerful (declaimed "Le Chien", "cause et gueule comme un chien"); production stringarrangements (Defaye orchestra). Licari's solo voice on L'Amour fou is credited but its type is undocumented, so no vocal-production token.
- lyrics love|sensuality|political|social|heartbreak.
- No new tokens.

## losplanetas-unasemanaenelmotordeunautobus

# Los Planetas, Una semana en el motor de un autobús (1998)

## Link to Battiato (checked: holds)
J (Juan Ramón Rodríguez) helped adapt the Spanish lyrics of Battiato's *Apriti sesamo* (2012), released in Spanish as *Ábrete sésamo* (Mercury, 2013), with Manu Ferrón.
- Público: https://www.publico.es/culturas/franco-battiato-enigma-revoluciono-musica.html (Spanish version adapted with the help of J of Los Planetas and Manu Ferrón)
- Página/12, 8 June 2013: https://www.pagina12.com.ar/diario/suplementos/espectaculos/3-28874-2013-06-08.html (names J of Los Planetas as one of the translators and quotes his version of "Eri con me")
- ProgArchives lists the 2013 Spanish CD: https://progarchives.com/album.asp?id=54109

## Sources
- es-Wikipedia (raw text read): https://es.wikipedia.org/wiki/Una_semana_en_el_motor_de_un_autob%C3%BAs: release date 13 Apr 1998, RCA-BMG, recorded at Zabriskie Point NYC (Jan 1998), producer Kurt Ralske (recorded and produced by him; mixing by Ángel Martos and Ralske, so only Ralske as producer). Infobox genres indie rock, shoegazing, psychedelic pop. Lineup J, Florent, Kieran Stephen (bass), Eric Jiménez (drums) + Banin (keyboards). Florent (via EFE/eldiario.es 2013): all instruments recorded at once, "symbiosis of melody and distortion... guitars, distortions and ambiences" → production `liverecording|distortion`. Reception: Rockdelux best of 1998, #2 of the 90s, #18 Spanish album of the 20th century; Babelia #11; charts.
- Influences (es-Wikipedia, citing J's own radio show "Emisión telepática", Radio Gladys Palmera, 30 May 2013, songs that inspired the album): Magnetic Fields "Smoke Signals" (*Distant Plastic Trees*) → melody of Segundo premio; Hüsker Dü "All This I've Done for You" (*Candy Apple Grey*) → sound of Desaparecer; Sunny Day Real Estate "5/4" (second, self-titled album) → Parte de lo que me debes; Superchunk "Skip Steps 1 & 3" (*No Pocky for Kitty*) → Cumpleaños total; New Order "Bizarre Love Triangle" (*Brotherhood*) → melody of Línea 1; Robyn Hitchcock and the Egyptians "Glass" (*Fegmania!*) → melody of La copa de Europa; Beef "Rebelde sin caspa" (*Tongues*, 1995) → melody of Cumpleaños total.
  - EXCLUDED as lyric quotations, not influences: Rain Parade (lyrics taken from "Kaleidoscope"), The Chills (phrases of "Rolling Moon"), Pale Saints ("Blue Flower" inspired part of the lyrics; borderline, left out). Beef and Hitchcock are "melody based on": kept because J lists them among the songs that inspired the record, but they are close to borrowings; drop them if the owner reads them as quotations.
- LaFonoteca review (5/5): https://www.lafonoteca.net/disco/una-semana-en-el-motor-de-un-autobus: Segundo premio's final string-arrangement coda (→ `strings|stringarrangements`); Desaparecer "powerpopera", like Pavement or the Lemonheads; Parte de lo que me debes psychedelic, drinking from Chicago/Constellation post-rock; La copa de Europa in the line of Spiritualized (→ sounds_like and genres powerpop, postrock); themes heartbreak, summer love jealousy, inner search/rebirth, drugs (Laboratorio mágico, Toxicosmos). Also says Segundo premio's melody is copied from Étienne Daho's "Promesses" (critic's claim of borrowing, not used).
- El País Tentaciones 2018 (via es-Wikipedia citation): "the most important album of Spanish indie".
- Ratings in es-Wikipedia infobox: AllMusic 4/5, LaFonoteca 5/5, Mondosonoro 5/5.

## Values
- energy 3, mood 1 (bile, rage, "sinister" B-side; heartbreak), experimental 3 (post-rock and shoegaze textures, nine-minute closer), polish 3 (LaFonoteca: care for every sound detail, but live-band recording), groove 1.
- voice left empty: no source describing J's voice on this record.
- No new tokens.

## sepideh-anwar

# Sepideh Raissadat, Anwar (2010)

## Link to Battiato (checked: holds)
She sings with Battiato on track 9 of *Fleurs 2* (2008), "Il venait d'avoir 18 ans" (Pascal Auriat).
- en-Wikipedia, Fleurs 2: https://en.wikipedia.org/wiki/Fleurs_2 (track 9 "with Sepideh Raissadat")
- AllMusic review of Fleurs 2 names her among the five duet partners: https://www.allmusic.com/album/fleurs-2-mw0000811351
- Tirgan biography: performances in Europe with Franco Battiato: https://tirgan.ca/b/2013/programs/music/sepideh-raissadat-.html

## Doubt: artist credit
The album is credited to **Ensemble Marâghî** (Apple Music, Deezer, Felmay), directed by Giovanni De Zorzi (ney), with Sepideh Raissadat (voice, setar), Giovanni Tufano (oud, frame drum), Francesco Clera (percussion / tombak, bendir). She is the featured singer, not the leading artist. Full title: *Anwâr. From Samarqand to Constantinople on the Footsteps of Marâghî*, Felmay FY 8172.

## Sources
- Deezer tracklist: https://www.deezer.com/us/album/3813381: Rast kâr and nakış beste by Abd ul-Qadir Marâghî; şarkı by Hafız Post; Ferahfeza pesrev and selâms by Dede Efendi; a Segâh ilâhi (hymn) → lyrics `spiritual` (Mevlevi selâms, ilâhi); Ottoman classical repertoire → genre.
- Apple Music: https://music.apple.com/us/album/anwar-from-samarkand-to-constantinople-on-footsteps/398305971 (Felmay 2010; store genre "New Age", not used).
- Giovanni De Zorzi, Ca' Foscari IRIS record: https://iris.unive.it/handle/10278/5000053 and maqamproject bio: https://www.maqamproject.uk/giovanni-de-zorzi/ (Ottoman and Central Asian classical/Sufi music; ney soloist with Ensemble Marâghî).
- Felmay description and The Wire #321 (Nov 2010), via Amazon listing and search summaries (pages could not be fetched directly): a musical journey following Marâghî from Samarkand to Constantinople and the Ottoman tradition; Raissadat's "impressively strong and fluent singing" (→ voice `powerful`); formal, stately mood that loosens in the closing instrumental improvisation. Amazon: https://www.amazon.com/Anwar-Ensemble-Maraghi/dp/B0043YH2G4
- Sepideh Raissadat, en-Wikipedia: https://en.wikipedia.org/wiki/Sepideh_Raissadat (Persian classical singer, setar; lists the album, Felmay, 1 Sept 2010).

## Values / doubts
- language fa as given in the brief, not verified: Marâghî's kârs and the Mevlevi selâms are in Persian, the Hafız Post şarkı is in Ottoman Turkish; it may be `fa|tr`. Confidence low.
- mood and polish left empty; producers empty (De Zorzi is credited as musical director, not producer).

## New tokens
- genre `ottomanclassical` ("Ottoman classical music"; suggested parents: classical, middleeasternmusic).
- instruments `ney` (end-blown flute; parent: woodwinds), `setar` (Persian lute; strings), `tombak` (Persian goblet drum; percussion), `framedrum` (bendir/frame drum; percussion).

## tomze-estudandoosamba

# Tom Zé, Estudando o Samba (1976)

## Link to Battiato (checked: holds)
Simon Reynolds, "Franco Battiato", 4Columns, 2017: https://4columns.org/reynolds-simon/franco-battiato. Reviewing the Superior Viaduct reissues of Battiato's early-1970s albums, he says Eno is a weak comparison and "a better analogy might be with Brazil's Tom Zé or France's Serge Gainsbourg", charismatic individualists between avant-garde and mainstream entertainment. This is a critic's comparison of the artists, not an influence.

## Sources
- en-Wikipedia: https://en.wikipedia.org/wiki/Estudando_o_Samba: concept album, genres MPB and samba, Continental; Rolling Stone Brasil 100 greatest Brazilian albums; David Byrne found it and relaunched Zé's career (Luaka Bop); cover (rope and barbed wire = dictatorship and samba-school rigidity).
- pt-Wikipedia: https://pt.wikipedia.org/wiki/Estudando_o_Samba: Rolling Stone Brasil #35; "obra experimental" that further distanced him from the public; credits: production Heraldo do Monte; arrangements José Briamonte; violão (Heraldo, Edson, Vicente Barreto), drums Dirceu Medeiros, contrabaixo Cláudio, percussion Natal and Osvaldinho, surdo Branca de Neve, vocals and choir (Pessoal de Santana); Téo da Cuíca played "tambor d'água" and instruments of his own invention on A Felicidade; Élton Medeiros co-wrote songs.
- Guilherme A. Freire, "A produção artística de Tom Zé na década de 1970..." Revista do IEB 68 (2017): https://revistas.usp.br/rieb/article/view/141522 (PDF read). Quotes Tárik de Souza (1976): the LP sounds like an assembly workshop; "Toc" is an instrumental collage with typewriter and transistor-radio solos (→ `typewriter`). Concrete-poetry syllable play; canonic, polyphonic choirs in Briamonte's arrangements (→ voice `choral`); "Dói" deals with heartbreak (dor de cotovelo). Says Zé applied avant-garde procedures learned at UFBA seminars from H. J. Koellreutter, Ernst Widmer and Jamary Oliveira (→ influenced_by Koellreutter, the best-documented teacher; Leonardo Bomfim's UNESP thesis also ties "Toc" to Koellreutter's ideas: https://acervodigital.unesp.br/handle/11449/110650). Walter Smetak is only "possibly" an influence: left out.
- Christopher Dunn, "Tickling the traditions", Revista do IEB: https://journals.usp.br/rieb/article/view/149645: "disjunctive samba", experiments in rhythm, harmony and poetics combining innovation with social critique (→ lyrics `social`).
- Songlines review, Brian Taylor, April 2019, 5/5: https://songlines.co.uk/review/estudando-o-samba: tropicália influence, experimental; groove-driven samba de roda trio pieces; blender on "Toc" (→ `blender`), samples of cries; "A Felicidade" contrasts with the carnival image of Brazil.

## Values
- groove 3 (samba de roda grooves alongside collage pieces), experimental 4, electronic 1 (tape/radio/noise sources, no synths documented). mood and polish left empty: no source.
- sounds_like empty: Songlines names Gil and Caetano only as more successful contemporaries, not sonic comparisons.

## New tokens
- instruments `typewriter` (suggested label "Typewriter", percussion/found objects) and `blender` ("Blender", found objects). The Brazilian "viola" (Edson) is probably viola caipira, not the orchestral viola: not entered.

## Fifth batch: artists the latest imports cite (owner: 'tutti, soltanto gli album migliori', Oct 2026)
One best album each for The Human League, OMD, Soft Cell, Gary Numan, Grace Jones, Japan, Ultravox, ABC, Sex Pistols, Siouxsie and the Banshees, T. Rex, Scott Walker, The Smiths, The Stone Roses. Claude's fixes: a borrowed riff, melody or lyric is not an influence (as for Los Planetas): Sex Pistols drop ABBA (SOS riff) and Richard Hell (Blank Generation line), T. Rex drops Howlin' Wolf (Jeepster from You'll Be Mine); marimba recorded as mallets.

## abc-thelexiconoflove

# abc-thelexiconoflove: sources
- https://en.wikipedia.org/wiki/The_Lexicon_of_Love: genres (disco, pop, new wave, sophisti-pop, dance-pop, blue-eyed soul, synth-pop, lounge; New Pop movement -> scene); producer Trevor Horn (Steve Brown on original "Tears Are Not Enough"); personnel incl. Anne Dudley orchestrations, J.J. Jeczalik Fairlight CMI programming, David Palmer Linn LM-1, sax, trombone, trumpet, flugelhorn, harp, percussion; influences stated by Martin Fry: strings on Chic records, Earth, Wind & Fire's soundscape, fused with the Cure and Joy Division; emotional level "along the lines of Rodgers and Hammerstein or Cole Porter" (influenced_by). Numan/OMD admired but approach rejected -> not listed. Vocals "crooning", "histrionic flights", "candid camp"; "sumptuous kitsch", "melodramatic love songs" (theatrical 5, polish 5); "witty... very, very funky" (BBC; groove 4); themes love affairs, tender to bitterly ironic (love, heartbreak, irony). Reviews: AllMusic 5, Q 5, Larkin 5, RS 4, Christgau A-, Spin Alt 9/10; Record Mirror 80s #4, NME 80s #15 / all-time #117, Observer #42, 1001 Albums; UK #1.
- https://www.allmusic.com/album/lexicon-of-love-mw0000649803 (search snippet): Fry "a Bryan Ferry fixation" -> sounds_like Bryan Ferry; Blender (quoted at richcain.substack.com) "schooled by Bowie and Ferry"; Christgau compares to Bowie/Ferry -> sounds_like David Bowie.
- No new tokens.

## gracejones-nightclubbing

# gracejones-nightclubbing: sources
- https://en.wikipedia.org/wiki/Nightclubbing_(Grace_Jones_album): genres (infobox: post-disco, new wave, disco, funk, reggae, dance, sophisti-pop, R&B; text: pop, rock, post-punk, electro, dub, art-pop); producers Chris Blackwell, Alex Sadkin; Compass Point Studios, band and singer recording together, songs dropped if not done by the third take (liverecording); personnel (Sly Dunbar drums + syndrums, Robbie Shakespeare bass, Badarou/Downie keyboards, Chung/Reynolds/Browne guitars, Sticky Thompson/Speller percussion, Jack Emblow accordion); Blackwell and Sadkin wanted the sound to take elements of Black Uhuru's *Sinsemilla* (influenced_by, stated by the producers); mood ("froideur", Q; "ice-water backdrop", NME; "blank-eyed alienation", Pitchfork; "languid reggae-influenced"); voice ("flat monotone speak-singing", Pitchfork; "chatting", Gardner); suggestive lyrics on Pull Up to the Bumper (sensuality); critics' comparisons: Lou Reed, Debbie Harry, Gil Scott-Heron (delivery), Bowie and Ian Curtis (BBC), Marlene Dietrich (Uncut) -> sounds_like (Blondie for Harry, Joy Division for Curtis); Bowie influence noted by Joe Muggs (Fact), a critic -> sounds_like only.
- Reviews/lists (same page): AllMusic 4.5, Pitchfork 9.0 BNR, Mojo 5, Uncut 9/10, Q 4, RS Album Guide 3.5, Christgau B-; NME AOTY 1981 #1, Slant 80s #40, NME 500 #211, Hot Press #59; US R&B #9, Billboard 200 #32, UK #35.
- Not used as influences: Wikipedia narration that Blackwell "realised new forms around" Pretenders "Private Life", Roxy Music "Love Is the Drug", The Normal "Warm Leatherette" (songs covered on the previous album; narration, not a quote). Covers on this album (Bowie/Iggy, Piazzolla, Bill Withers, Sting, Vanda & Young) not influences.
- Doubts: energy/electronic/theatrical are my judgment from the descriptions; French verse on "Libertango" not listed as language (minor).

## humanleague-dare

# humanleague-dare — sources
- https://en.wikipedia.org/wiki/Dare_(The_Human_League_album): genres synth-pop/electropop/new wave; producers Martin Rushent & the Human League; gear Linn LM-1, Roland MC-8, Jupiter-4, System 700, Yamaha CS-15, Korg 770, Korg Delta, Casio VL-1/M10; ratings (AllMusic 5, Pitchfork 9.1, Uncut 10, Q 5, RS Album Guide 3/5), best-of lists, UK #1, 3x Platinum; Paul Morley NME ABBA comparison (sounds_like ABBA).
- https://www.soundonsound.com/techniques/classic-tracks-human-league-dont-you-want-me: Rushent "trying to make a new electronic Abba" (influenced_by ABBA); 24 layered analogue synths per line (synthprogramming, overdubbing); bass synths; mixed to work loud in clubs (groove 4).
- https://ultimateclassicrock.com/human-league-dare/: "romantic sentimentality and emotional anxiety" (mood 3); lyrics: he-said-she-said relationship, JFK ("Seconds"), personal demons ("Darkness") → love|storytelling|introspection.
- https://www.udiscovermusic.com (Oakey/Moroder story) quoting Record Mirror 1981: "we want to be like ABBA or Donna Summer" (influenced_by Donna Summer; writer adds "I Feel Love", not bracketed).
- https://trouserpress.com/?p=2315: "Seconds" ambience; no comparisons.
## New tokens (production): rolandmc8, yamahacs15, korg770, korgdelta, casiovl1, casiom10 (synth/sequencer models; parent: synth/sequencer).
## Doubts: voice left empty (no source describes Oakey's/the singers' voices in list terms). Iggy Pop grunts borrowed on "Sound of the Crowd" = quotation, not listed. Oakey citing Flying Lizards, Stewart & Gaskin, Numan as chart models not listed.

## japan-tindrum

# japan-tindrum: sources
- https://en.wikipedia.org/wiki/Tin_Drum_(album): genres (art pop, new wave, post-punk, avant-pop, synth-pop, art rock, electronica); producers Steve Nye and Japan (John Punter uncredited, left out); personnel (Sylvian keyboards/guitar/tapes, Karn fretless bass/African flute/dida, Jansen acoustic+electronic drums, keyboard percussion, Linn LM-1 programming, angklung; Barbieri keyboards; Simon House violin); synths Prophet-5, Oberheim OB-X, Roland System 700; Barbieri "an adventure in synth programming"; themes romance, melancholia, travel/escape, satirical Eastern undercurrent; reviews AllMusic 4.5 ("most unique, challenging"), Guardian/Uncut/RM/Larkin 4, Blender 3, Smash Hits 8/10; Sounds all-time #22 (1986); UK #12 Gold; Bryan Ferry vocal comparison (Record Mirror) -> sounds_like.
- https://en.wikipedia.org/wiki/Ghosts_(Japan_song): Prophet-5, System 700, OB-X, Jansen's marimba (credits from Sound on Sound). Also says unsourced "influenced by Karlheinz Stockhausen" -> not used.
- https://www.popmatters.com/japan-timeless-tin-drum-atr40: writer's comparisons (YMO, Bowie *Lodger*, Talking Heads *Remain in Light*, Kate Bush, Shriekback, Thompson Twins) -> sounds_like; backward-masked vocals (backmasking); Cultural Revolution / Mao propaganda theme (political, irony); "melancholic remorse" (mood 1).
- https://zstereo.co.uk/2015/09/29/japan-tin-drum/: Sylvian "We only used a Prophet and an OBX and tried to emulate fictitious musical instruments" (electronic 4); only YMO's *BGM* sounded similar (sounds_like YMO (BGM)).
- influenced_by left EMPTY: no band/producer statement of influences found (friendship with YMO/Sakamoto is context, not a stated influence). voice left EMPTY: no source characterises Sylvian's voice beyond the Ferry comparison.
- New instrument tokens: `marimba` (parent: mallets/percussion), `dida` (Karn's credit; a clay drum -> percussion), `angklung` (Indonesian bamboo idiophone -> percussion).

## numan-thepleasureprinciple

# numan-thepleasureprinciple — sources
- https://en.wikipedia.org/wiki/The_Pleasure_Principle_(album): genres synth-pop, electropop, new wave, electronica, post-punk; producer Gary Numan; Minimoog, Polymoog (Vox Humana), ARP Odyssey, Synare 3, viola/violin, no electric guitar; flanging, phasing, reverb; sci-fi/technology, isolation, songs from an android's view (storytelling|introspection); ratings AllMusic 4.5, Mojo 5, Uncut 9, Pitchfork 8.2, Christgau B; Record Mirror "repeated the formula from Replicas"; UK #1.
- https://en.wikipedia.org/wiki/Gary_Numan: Numan cited Ultravox's Systems of Romance ("Slow Motion") as the blueprint for his electronic sound (influenced_by, Replicas/Pleasure Principle era); "a rock album with no guitars"; synths through effects for a "distorted, phased, metallic tone" (distortion).
- https://en.wikipedia.org/wiki/Cars_(song): Minimoog/Polymoog parts; Numan wrote "Cars" aiming at a hit.
- https://recordcollectormag.com/reviews/album/the-pleasure-principleexpanded-edition: Moog bass, digital beats, robotic vocals; "year zero" of synth-pop.
- https://www.allmusic.com/profile/jimbola/reviews/5bbfa024347a56db202f5abf (AllMusic USER review, weak): main debt to Bowie, Station to Station and Low (sounds_like David Bowie (Low)); https://www.qobuz.com/it-it/interpreter/gary-numan/68370 and hk01: Kraftwerk + Bowie mix (sounds_like Kraftwerk, weak).
- Uncut via pressreader: cold, distant, repetitive (mood 1).
## Doubts: sounds_like rests on weak sources (user review, retailer bios); Ultravox influence is documented for the electronic turn (Replicas 1979), not this album alone. Voice empty ("robotic" not in list). Billy Currie (Ultravox) plays violin as a guest — not the basis for the influence.

## omd-architecturemorality

# omd-architecturemorality — sources
- https://en.wikipedia.org/wiki/Architecture_%26_Morality: genres synth-pop/electropop (new wave lists); producers Richard Manwaring, OMD, Mike Howlett; personnel instruments (synths, Mellotron, piano, organ, guitar, bass, drums, acoustic/electronic percussion, bass synth, melodica, sax); manipulated choral samples (sampling); lengthy instrumental passages replacing choruses (experimental 3); themes Joan of Arc, religion, love songs; McCluskey: influence of "emotional power of religious music"; critic comparisons: Fricke RS "Pink Floyd-ian", Doran RC "Numanesque", Q "Kraftwerk and Brian Eno influences"; ratings AllMusic 5, Q 5, Pitchfork 8.7, 1001 Albums; UK #3, Platinum.
- https://www.electricityclub.co.uk/?p=83159: McCluskey: Kraftwerk "hugely important" plus the "organic side" from Neu!, La Düsseldorf, Michael Rother (influenced_by); writer: album "tinged more with the spectre of La Düsseldorf than Kraftwerk" (sounds_like); Mellotron choir blocks; Pearl Syndrums (electronicdrums).
- https://www.westword.com/music/andy-mcclusky-of-omd-on-dazzle-ships-the-influence-of-70s-krautrock-and-peter-saville-5675743/ : McCluskey on Kraftwerk → Neu! path.
## Doubts: influences are McCluskey's general statements made in pieces about this album, not strictly album-specific; Michael Rother left out (solo records, unclear for this album). Voice left empty. "Sealand" nod to Neu! "Seeland" is a quotation (not used as basis alone).

## scottwalker-scott4

# scottwalker-scott4: sources
- https://en.wikipedia.org/wiki/Scott_4 : infobox genres (orchestral pop, baroque pop, avant-garde); producer John Franz; Olympic Studios; orchestral accompaniment Peter Knight, Wally Stott (Angela Morley), Keith Roberts → orchestra, stringarrangements; AllMusic (via WP): less ornate, skeletal folk-inspired sound, more rhythm section → bass, drums, energy 2, polish 3; Engel: link lyrics by Sartre, Camus, Yevtushenko "to Bartok modal lines" → influenced_by Béla Bartók (Bergman film, Camus/Sartre are non-music sources, not listed); Mark Lager: "The Seventh Seal" an "Ennio Morriconesque epic" → sounds_like; "Get Behind Me" gospel choir + soulful vocals → choral; Old Man's Back Again (neo-Stalinism/Czechoslovakia) → political; Angels of Ashes spiritual (Rilke) → spiritual; existential lyrics → introspection; "fatalist sublimities" (Select) → mood 1. Ratings: AllMusic 4.5, Pitchfork 9.0, EPM 5, Select 5; 1001 Albums; Larkin #760; failed to chart.
- https://therisingstorm.net/scott-walker-scott-4/ : "deep tenored and dramatic singer backed with a full orchestra and groovy rock combo", theatrical → voice powerful, theatrical 4.
- https://www.progarchives.com/album.asp?id=77834 : orchestral credits Peter Knight, Angela Morley, Keith Roberts.
Doubts: Jacques Brel not listed (no source ties him to this all-original album). Experimental 3 is a balance between "avant-garde" label and accessible orchestral-pop songs. No new tokens.

## sexpistols-nevermindthebollocksheresthesexpistols

# Sex Pistols – Never Mind the Bollocks, Here's the Sex Pistols (1977)

Sources
- https://en.wikipedia.org/wiki/Never_Mind_the_Bollocks,_Here%27s_the_Sex_Pistols: genres (punk rock, hard rock), producers Chris Thomas and Bill Price, Wessex Studios, Jones on guitar and most bass with long overdub sessions; Rotten's "sneering", "half-singing" delivery (voice raspy|spoken); Christgau on lyrics (global economics, Bodies); ratings, best-of lists, charts and certifications (reception). Charles M. Young (RS) names Nirvana as the closest comparison (sounds_like).
- https://en.wikipedia.org/wiki/Pretty_Vacant: Matlock says the riff came from ABBA's "SOS" (on the album *ABBA*, 1975) and the lyric from Richard Hell's "Blank Generation" (Uncut 2022) → influenced_by.
- https://diffuser.fm/sex-pistols-never-mind-the-bollocks/: God Save the Queen written "in the style of Eddie Cochran" (influenced_by); No Feelings a "Johnny Thunders styled riff"; Holidays in the Sun riff "not unlike" The Jam's "In the City" (sounds_like); "lots of layered guitars"; "heavy, but never metal".
- https://mixdownmag.com.au/features/never-mind-the-bollocks-heres-steve-jones/: Jones: Chuck Berry double stops were "the only lead that I knew at the time" (influenced_by Chuck Berry); white Les Paul, Fender Twin, MXR Phase 90 on Anarchy (production phasing); "there was definitely overdubs".
- https://punkncoffee.substack.com/p/never-mind-the-bollocks-a-single: "surprisingly well-produced", layer upon layer of guitars (polish 3, overdubbing).
- https://www.vintageguitar.com/43185/sex-pistols/: Jones's "Faces-influenced swagger" (critic → sounds_like Faces).
- Search snippets: Rotten's voice "ravaged", "non-singing" (raspy|spoken).

Doubts
- Stooges / New York Dolls comparisons appeared only in unverified search snippets: left out.
- Jones's general influences (Faces, Bowie/Ronson, Mott) not tied to this album by a source I could open: not used as influences.
- RS 500 2020 rank is inconsistent on Wikipedia (73 vs 80): cited as "top 100".
- No new tokens.

## siouxsie-juju

# Siouxsie and the Banshees – Juju (1981)

Sources
- https://en.wikipedia.org/wiki/Juju_(Siouxsie_and_the_Banshees_album): genres post-punk, gothic rock (infobox; AllMusic post-punk), art rock (Guardian), dark wave (BBC Radio 4); Surrey Sound, co-produced by Nigel Gray and the band; guitar-based after Kaleidoscope; McGeoch's Gizmo on "Into the Light", EBow on "Sin in My Heart", acoustic guitar (Sounds); Budgie's prominent percussion; Severin: first "concept" album, darker elements; ratings, lists, UK #7, Silver.
- https://www.loudersound.com/features/siouxsie-and-the-banshees-how-we-made-juju (Chris Roberts, 2018): "Night Shift" inspired by the Yorkshire Ripper and Led Zeppelin's "Kashmir" (on *Physical Graffiti*) → influenced_by; Monitor an Orwellian tale; Severin on overdubs; Nigel Gray's "crisp production"; Melody Maker "most influential".
- https://www.udiscovermusic.com/stories/juju-siouxsie-and-the-banshees: song subjects (Arabian Knights: oppression of women; Monitor: surveillance; Voodoo Dolly: possession) → lyrics social|political|spiritual|storytelling; Budgie's spinning toms; synths/drum machines add to the sound (synth listed last).
- https://faroutmagazine.co.uk/what-concept-siouxsie-and-the-banshees-juju/: concept from the African Juju statue, "tribal groove" (groove 2).
- Search snippets: Smash Hits 1981 "high-priestess wail" (voice powerful); mvlteenvoice review hears Joy Division in McGeoch's guitar (weak → sounds_like Joy Division).

New token
- production `gizmotron` (the Gizmo / Gizmotron guitar device by Godley & Creme, used on "Into the Light"); could also be an instrument key. Suggested group: guitar effects (with `ebow`).

Doubts
- sounds_like rests on one minor review; the Kashmir influence is stated by the Louder writer, not in a direct band quote I could read.

## smiths-thequeenisdead

# smiths-thequeenisdead: sources
- https://en.wikipedia.org/wiki/The_Queen_Is_Dead (and sources cited: Goddard 2009 "Mozipedia"/"Songs That Saved Your Life", Rogan 1994, Sound on Sound, PopMatters/Korber, Pitchfork/Reynolds, NME):
  - genres indie rock, jangle pop, post-punk (infobox); "Vicar in a Tutu" music-hall elements and "rockabilly pastiche" (Korber) → musichall, rockabilly (last, track-level).
  - producers Morrissey, Johnny Marr (Stephen Street/John Porter = engineers, not listed).
  - personnel: Marr guitars, sampler (linked E-mu Emulator) → sampler + production emulator; marimba ("Boy with the Thorn") → mallets; Rourke bass; Joyce drums.
  - production: Street's harmoniser pitch-shifting Morrissey ("Ann Coates") → harmonizer, pitchedvocals; tom-tom loop built with a sampler → sampling, drumloop; feedback line through wah-wah → wahwah, feedback.
  - influences: Marr heavily influenced by the Stooges (Raw Power, "I Need Somebody") and the Rolling Stones (Hitch Hike cover for "There Is a Light"); title track influenced by the Velvet Underground; "Frankly, Mr. Shankly" an attempt to recreate Sandie Shaw's "Puppet on a String" vibe. New York Dolls excluded (lyric quotation).
  - themes: anti-monarchism/UK criticism → political, social; surreal/black humour → irony; doomed love → love, heartbreak; misunderstood outsider, gender norms → identity, introspection; melancholy vs humour/anger/joy → mood 2; "Bigmouth" punk adrenaline → energy 3.
  - ratings: Metacritic 99, Pitchfork 10, AllMusic/Mojo/Q/RS/Uncut 5; NME 500 #1; RS 500 #113; Pitchfork 80s #6; Larkin #10; UK #2, US #70.
Doubts: voice left empty (no source describes Morrissey's vocal type here); sounds_like empty (only attitude comparisons: Christgau vs Johnny Rotten, Paste "British Invasion"). No new tokens.

## softcell-nonstoperoticcabaret

# softcell-nonstoperoticcabaret — sources
- https://en.wikipedia.org/wiki/Non-Stop_Erotic_Cabaret: synth-pop/electropop; producer Mike Thorne; ReVox, borrowed Roland drum machine, Korg SB-100 Synthe Bass, Synclavier; concept narrative of suburban man in Soho (storytelling, sensuality); Christgau "camp cynicism" (irony); ratings AllMusic 4.5, Pitchfork 8.5, RS 3/5, NME negative; Out #66; 1001 Albums; UK #5, Platinum.
- https://www.electricity-club.co.uk/?p=71545: Korg SB-100, Synare and Pearl Syncussion (electronicdrums, synare), Synclavier II, Roland TR-808, DeltaLab DL-4 delay; themes sleaze, vice, suburbia/bedsit life, lost innocence (social, heartbreak); band influences Throbbing Gristle, Suicide, Human League, Devo, Northern Soul.
- https://thequietus.com/?p=30878 (oral history): Almond: "transgressive electronic punk band" akin to Suicide and Throbbing Gristle (influenced_by); Ball: sound "minimal and raw" (polish 2); camp, seaside trash (theatrical 4).
- https://trouserpress.com/reviews/soft-cell/: Almond's vocals "breathy and insinuating" (voice soft); Ball's keyboards span electronic and acoustic sounds.
## New tokens (production): korgsb100 (synth bass model; parent: synthbass).
## Doubts: sounds_like left empty (Trouser Press's Kraftwerk line is a contrast; Sutherland's "traditional cabaret" is a genre). Human League/Devo named by Electricity Club as influences of the band generally, not for this album: left out. ARP 2600 (Daniel Miller's) not tied to album tracks: left out.

## stoneroses-thestoneroses

# stoneroses-thestoneroses: sources
- https://en.wikipedia.org/wiki/The_Stone_Roses_(album) : genres Madchester, neo-psychedelia, indie rock, alternative rock; Batey: 1960s-inspired jangle pop, little dance influence → janglepop, groove 2; Erlewine: rhythm section "suggested" dance rhythms, Brown sang "dispassionately"/detached → voice soft; producers John Leckie, Peter Hook ("Elephant Stone"); Squire Strat/Twin Reverb, Mani Rickenbacker bass, Reni drums + piano ("She Bangs the Drums"); critics' comparisons: Unterberger (Beatles melodies, Byrds guitars, Smiths), Bob Stanley (Hendrix, Johnny Marr) → sounds_like; Bye Bye Badman = May 1968 Paris riots → political; ratings and lists (NME/Pitchfork/Spin 10, AllMusic/Mojo/Q/Uncut 5, RS 4; NME 500 #7, RS 500 #319, Larkin #11); dissent DeRogatis/Robinson.
- https://www.radiox.co.uk/artists/stone-roses/making-of-debut-album-1989-songs-meaning/ : Reni (to Clash): "I Am the Resurrection" grew from Mani playing the "Taxman" riff backwards → influenced_by The Beatles (Revolver); "Don't Stop" = "Waterfall" backwards → backmasking.
- https://faroutmagazine.co.uk/the-stone-roses-waterfall-reverse-dont-stop/ : Don't Stop reversed tape, Reni's new percussion overdubs, Brown re-sang → backmasking, overdubbing.
- https://www.pastemagazine.com/music/the-stone-roses/30-years-on-the-stone-roses-debut-lp-still-shines : Byrds' chiming folk-pop, Kinks' English-summer pop, psychedelic funk → sounds_like The Byrds, The Kinks; Reni's bongos; buoyant, uplifting → mood 4; liberation/self-belief, romance, anti-monarchy satire → identity, love, political.
New token: `madchester` (Wikipedia infobox genre). Suggested parents: indie, alt, rock, dance (close to existing `baggy`, `neopsychedelia`, `indiedance`).
Doubts: Jimi Hendrix only in sounds_like; Guitar Player says Squire "made no secret of his love for Hendrix" but I couldn't read the article to tie it to this album, so not in influenced_by. "Fools Gold" (not on original UK LP) ignored; Squire's Johnny Cash remark refers to it. Mani's liking of the Dukes of Stratosphear explains Leckie's hiring, not listed as influence.

## trex-electricwarrior

# T. Rex – Electric Warrior (1971)

Sources
- https://en.wikipedia.org/wiki/Electric_Warrior: genres glam rock, boogie rock, blues rock; producer Tony Visconti (string arrangements); Trident, Advision, Wally Heider, Mediasound; Visconti's flanging, reverb, backwards guitars, tape loops, guitar overloading the console preamps (production flanging|backmasking|tapeloops|distortion|stringarrangements); Wakeman piano, Burt Collins flugelhorn, Ian McDonald sax, strings, Flo & Eddie; Bolan: songs personal and "erotic"; cars, women, boogie; BBC "four-to-the-floor rock 'n' roll"; ratings, RS 500, Pitchfork 70s #20, UK #1, Gold.
- https://en.wikipedia.org/wiki/Get_It_On_(T._Rex_song): Bolan wrote it wanting to record Chuck Berry's "Little Queenie" (on *Chuck Berry Is on Top*, 1959), riff from it → influenced_by; Hammond organ, saxes.
- https://en.wikipedia.org/wiki/Jeepster_(song): Bolan said he "lifted it from a Howlin' Wolf song" ("You'll Be Mine", on the 1962 *Howlin' Wolf* LP) → influenced_by.
- https://guitar.com/reviews/album/the-genius-of-electric-warrior-by-t-rex/: strings doubling Bolan's parts, reversed solo on Cosmic Dancer, Bolan's "purr" (voice soft), Les Paul into Marshall.
- https://faroutmagazine.co.uk/t-rex-album-electric-warrior/: "dazzlingly cool evocations of joy" with poignant moments (mood 4).
- https://www.austinchronicle.com/music/phases-and-stages-11722719/ (via search): Cochran's chugging guitar figures behind Jeepster and Get It On → sounds_like Eddie Cochran.
- https://www.treblezine.com/t-rex-electric-warrior-review/: "lean, balanced and bluesy".

New token
- genre `boogierock` (Wikipedia "boogie rock"; the existing `boogie` is the 80s post-disco style, so not used). Suggested parents: rock, bluesrock, hardrock.

Doubts
- Album for "You'll Be Mine" given from my knowledge (first LP: *Howlin' Wolf*, 1962); verify against the catalogue.

## ultravox-vienna

# ultravox-vienna: sources
- https://en.wikipedia.org/wiki/Vienna_(album): genres (new wave, synth-pop, art pop, new romantic); producers Conny Plank, Ultravox; RAK Studios, mixed at Plank's studio; personnel (Cann drums/electronic percussion, lead vocal on "Mr. X"; Cross bass/synths; Currie piano/synths/viola/violin; Ure guitars/synths/vocals); Sounds: "Euro systems-rock, electronics, Can's fairground style" (sounds_like Can); "Mr. X" a Kraftwerk pastiche; reviews AllMusic 4.5, Sounds 4.5, Mojo 4, RSAG 4, Q 3 ("best album"), Uncut 7/10, RS 2, Christgau C ("dance music for the locked pelvis": groove 2); UK #3.
- https://en.wikipedia.org/wiki/Vienna_(Ultravox_song): viola solo influenced by Max Reger (Guardian 2017; Cann/Currie wanted a late-19th-century romantic-composer feel) -> influenced_by Max Reger; grand piano, viola, violin, Minimoog bass, Roland CR-78 pattern by Cann; Walker Brothers "The Electrician" influence "said" by AllMusic (Dave Thompson), not by the band -> sounds_like The Walker Brothers (Nite Flights) only.
- https://www.classicpopmag.com/?p=14094 (Making Vienna): gear "Roland CR-78, Yamaha CP70, Yamaha SS30 string machine, Yamaha CS8Q [sic] and a Minimoog"; "every track was for a movie that didn't exist" (Ure; storytelling, theatrical 4); "epic, cinematic feel"; "Mr X" robotic vocal (spoken); Vienna inspired by a holiday romance (love). Kraftwerk/Can named only as Ure/Egan's general influences, not album-specific -> not in influenced_by.
- https://www.loudersound.com/reviews/ultravox-vienna-deluxe-edition-review (via search snippet): album's debt to Kraftwerk, Tangerine Dream, Roxy Music -> sounds_like; MOJO Time Machine: Kraftwerk and Neu! -> sounds_like.
- New production tokens: `yamahacp70` (electric grand; parent: electricpiano), `yamahass30` (string machine; like arpstringensemble). The "CS8Q" in Classic Pop is probably a CS-80 typo: NOT entered (yamahacs80 would need confirmation). ARP Odyssey only from a fan site: not entered.
- Doubts: mood 2, theatrical 4, voice `clear` for Ure are judgment from the cinematic/epic descriptions.

## amalia-busto

# amalia-busto: Amália Rodrigues, Busto (1962)
Artist: country PT; career start 1930s (first professional fado engagement 1939; first recordings 1945).
Title: the record has no title on the cover; Wikipedia's article is "Amália Rodrigues (1962 album)", "also known as Busto and Asas Fechadas"; Best Ever Albums lists "Amália Rodrigues (Busto)". Year 1962 confirmed. Kept id and title "Busto" (commonly used).

Sources
- https://en.wikipedia.org/wiki/Am%C3%A1lia_Rodrigues_(1962_album): Columbia 1962, fado; first collaboration with Alain Oulman; José Nunes (Portuguese guitar), Castro Mota (viola = fado guitar, mapped to acousticguitar), Alain Oulman (piano); recorded Teatro Taborda, Lisbon; Blitz 2009 list of 50 greatest Portuguese albums of past 50 years, 2nd best of the 1960s; tracklist (Povo que lavas no rio, Maria Lisboa, Abandono, Estranha forma de vida).
- https://en.wikipedia.org/wiki/Am%C3%A1lia_Rodrigues: Oulman "her main songwriter and musical producer" (general role, not an album credit: producers left empty); album established her signature songs.
- https://museudofado.pt/en/fado/persolanity/alain-oulman-en: Busto 1962 as first work with Oulman, poems by Luís Macedo and David Mourão-Ferreira.
- https://www.dn.pt/arquivo/diario-de-noticias/busto-o-primeiro-trabalho-de-amalia-com-alain-oulman-14357651.html: unlikely partnership that produced her biggest hits; importance of erudite poetry married to popular music.
- Search summaries (reissue texts): "one of the greatest fado classics despite the critiques of the most purists"; "a truthful revolution" in fado (-> experimental 1, mainstream 3).

Values: electronic 0 (guitar/viola/piano only); energy 1, tempo 1, groove 0, mood 1 for slow fado-canção with the sad repertoire (medium confidence). voice, lyrics, theatrical, polish left empty (no album-specific source).
New token: instrument `portugueseguitar` (guitarra portuguesa; parent: guitars/strings group).

## bonga-angola72

# bonga-angola72 — Bonga, Angola 72 (1972)
Sources
- https://en.wikipedia.org/wiki/Bonga_(musician) — recorded in exile in Rotterdam; arrest warrant for seditious lyrics; Mona Ki Ngi Xica; dikanza among his instruments; folk/semba singer; born 1942 Kipiri, Bengo, Angola.
- https://www.lusafrica.com/en/our-artists/bonga/ — Morabeza (Dutch), Cape Verdean musicians, "harrowing" debut, soundtrack of independence struggle.
- https://www.forcedexposure.com/Catalog/bonga-angola-72-74-lusafrica-35th-anniversary-edition-2lp/LUS.86302LP.html (+ mvdb2b reissue notes, via search) — songs sad but lifted by upbeat tempos; semba; Bonga: chose acoustic guitar, dikanza and other percussion.
- https://theboar.org/2026/01/african-sounds-from-the-past-angola-72 — student-paper review: Portuguese folk + semba + kizomba; Portuguese and Kimbundu; dikanza, mbira, congas, acoustic guitar, bass, trumpet; voice bluesy, soulful, raw; slow, passionate, melancholic, homesick; anticolonial, patriotic themes.
- https://pan-african-music.com/en/wp-json/wp/v2/posts/100269 — Mona Ki Ngi Xica anthem of independence movement; album went gold.
- https://songlines.co.uk/review/the-best-of-bonga (via search) — Martin Sinnock: first two albums stand out in musical quality and lyrical profundity (acclaim 4).
- Qobuz artist page; Mail & Guardian (arrest warrant) via search.
- Dustygroove (via search): spare, mostly acoustic guitar, bass, percussion (polish 2).
New tokens: genres `semba` (parents: afro, folk) and `kizomba` (parents: afro, dance; maybe zouk-related); instruments `dikanza` (Angolan scraper, parent: percussion / like recoreco), `mbira` already exists. Language `kmb` (Kimbundu, ISO 639-2, no 2-letter code).
Doubts: kizomba is named only by the student review and is anachronistic for 1972 (genre arose in the 1980s); kept per the "every genre a source names" rule but listed last — drop if the owner prefers. No producer credit found (Discogs blocked) → producers empty. No critic comparisons → sounds_like empty.

## burakasomsistema-blackdiamond

# burakasomsistema-blackdiamond — Buraka Som Sistema, Black Diamond (2008)
Sources
- https://en.wikipedia.org/wiki/Black_Diamond_(Buraka_Som_Sistema_album) — 2008, Fabric/Sony BMG; genres electro, kuduro, breakbeat; guests M.I.A., Kano, DJ Znobia, Deize Tigrona, Pongolove, Petty; AllMusic 4.5/5, Pitchfork 7.9, No Ripcord 9/10, Sputnik 4/5; PT #7, Billboard World #8; EBBA.
- https://en.wikipedia.org/wiki/Buraka_Som_Sistema — Lisbon/Amadora (Buraca); members Branko, Riot, Conductor, Kalaf; progressive kuduro; formed 2006 (origins 2002).
- https://www.popmatters.com/73338-buraka-som-sistema-black-diamond-2496023565.html — 8/10; kuduro + techno, hip-hop, Caribbean; "dance music album"; Portugal's answer to Daft Punk and Justice; tracks compared to Basshunter, Daft Punk, Vybz Kartel, Amadou & Mariam; tribal samples, distorted textures; relentless energy, angry/defiant then experimental; mostly Portuguese, one English track (Kano); production trio Lil' John (Branko), Riot, Conductor.
- https://exclaim.ca/music/article/buraka_som_sistema-black_diamond — progressive kuduro; electronic; intense African percussion; grimy, pulsating; corruption in oil/diamond industries (lyrics social|political).
- https://illinoisentertainer.com/2009/04/buraka-som-sistema-reviewed/ — mixed; "M.I.A.-fueled" wave (sounds_like M.I.A.).
- https://redbullmusicacademy.com/lectures/buraka-som-sistema-rave-against-the-machine — Conductor on mixing Angolan rhythms, semba, kuduro (general, not album-specific → influenced_by empty).
New tokens: genre `progressivekuduro` (parents: kuduro, electronic).
Doubts: producers taken from PopMatters (no credits sheet); instruments thin (sampler|percussion only documented). Basshunter comparison is for one track; kept as source-named.

## cesaria-missperfumado

# cesaria-missperfumado: Cesária Évora, Miss Perfumado (1992)
Artist: country CV (Cape Verde), began singing in Mindelo bars in the 1950s (decade: 1950s).

Sources
- https://en.wikipedia.org/wiki/Miss_Perfumado: 4th studio album, June 1992, Lusafrica, producer Paulino Vieira, recorded in Paris (Studio de la Madeleine, Music' Ange) May–June 1992; genre "morna and coladeira"; languages Portuguese and Cape Verdean Creole; "Sodade" = diaspora longing for home; >300,000 copies, 2x Gold France, FR #42, BE(Wa) #152; AllMusic 4.5/5.
- https://spidey.kfjc.org/609/evora-cesaria-miss-perfumado-nonesuch/ (KFJC review): morna = melancholy song of nostalgia, sadness, love, longing; sparse arrangements, mostly acoustic guitar, cavaquinho, piano; "not as bleak as its subject"; compares Évora to Édith Piaf and Billie Holiday (-> sounds_like); blend of Portuguese, Brazilian and ragtime styles (not used as genres).
- https://eng.caboverdeamusica.online/?p=4397 (Paulino Vieira profile, via search summary): Vieira brothers on string instruments and piano, Paulino producing; Malaquias Costa violin, Escabeche reco-reco.
- https://dutchvinyl.com.au/collections/rca-records-record-label/products/cesaria-evora-miss-perfumado-189031: John Storm Roberts (Original Music): "Ravishing"; piano and string group; fado-like guitar runs; near-Brazilian rhythms.

Values: electronic 0 (acoustic credits); energy 1 / mood 2 / theatrical 1 / tempo 2 / groove 2 from sparse acoustic morna (slow, melancholy) with some coladeiras, and KFJC "not as bleak". polish and voice left empty (no source).
New tokens: genres `morna`, `coladeira` (parents: caboverde, worldmusic); instrument `cavaquinho` (parent: guitars/strings group, like ukulele). Language `kea` (Kabuverdianu, ISO 639-3) first as main singing language.

## dinodsantiago-mundunobu

# dinodsantiago-mundunobu: Dino D'Santiago, Mundu Nôbu (2018)
Artist: country PT (Portuguese of Cape Verdean descent, born Quarteira 1982); career start 2000s (Operação Triunfo casting 2003; first album as Dino SoulMotion 2008).

Sources
- https://www.rollingstone.com/music/music-features/dino-dsantiago-mundu-nobo-como-seria-video-779901/ (via search summaries; page paywalled): "poised hybrid": traditional rhythms plus low end for modern dancefloors, hand-played instruments smoothed with gleaming electronics; lyrics in Creole and Portuguese; focus on batuku and funaná; Rusty Santos co-wrote/co-produced "Nôs Funaná", slowed to 90 bpm (funaná usually 134+); Paul Seiji key contributor; Best Album at first Portuguese Music Awards (Play); "Como Seria" among most-Shazamed songs in Portugal; intention "to show a new way" for Lusophone artists.
- https://postal.pt/cultura/cultura-sul/cine-teatro-louletano-dino-dsantiago-apresenta-novo-disco-em-absoluta-estreia-algarvia/ (June 2018): "produzido por Kalaf & Seiji"; intricate sound, warm enveloping voice; everyday life, sensuality, joy mixed with melancholy; natural storyteller.
- https://leffest.com/en/guests/dino-dsantiago-2: Mundu Nôbu = his signature sound, Afro-pop with futuristic funaná and electronic batuku.
- https://www.musicinafrica.net/node/114096: Play Awards Best Album for Mundu Nôbu (2nd album); career bridges morna, batuku, funaná with R&B and club music; key influence on Madonna's Madame X.
- https://www.timeout.pt/lisboa/pt/noticias/dez-anos-depois-como-soara-o-disco-que-nos-deu-dino-dsantiago-111923: released 2018; made him spokesman of a new sound, soundtrack of creole Lisbon.
- https://pt.wikipedia.org/wiki/Dino_d%27Santiago: biography, 2018 discography.

Values: electronic 3, polish 4, groove 3 (Rolling Stone); tempo 2 (funaná slowed to 90 bpm); mood 3 (joy and melancholy); experimental 2 ("futuristic"). energy, theatrical, voice, instruments left empty. No documented influences found.
Note: English Wikipedia lists the album as 2019; Portuguese Wikipedia, Time Out, Postal (June 2018 premiere), Monocle say 2018: kept 2018.
New tokens: genres `funana` (parents: caboverde, worldmusic, afropop), `batuque` (source spelling "batuku"; parents: caboverde, worldmusic). Language `kea|pt`.

## djmarfox-euseiquemsou

# DJ Marfox — Eu Sei Quem Sou (2011, EP)
Artist: DJ Marfox (Marlon Silva, b. Lisbon 1988, São Tomé parents) · country PT · starting decade 2000 (DJ from 2002, DJs do Guetto 2005–06).
Tagline: The godfather of Lisbon batida, who took the ghetto sound of Quinta do Mocho to the world.

Choice: Marfox has no full-length studio album; his releases are EPs. Eu Sei Quem Sou is Príncipe's first release (P001) and the founding record of the label/scene; type `ep`. Alternative: Chapa Quente (2016 EP, Mixmag 9/10). Year: Príncipe Bandcamp lists 30 Nov 2011 (RA reviewed it Jan 2012; Marfox's Bandcamp gives Feb 2012 for the 12").

Sources
- https://ra.co/reviews/10337 — Philip Sherburne: four tracks (Eu Sei Quem Sou, BIT Binary, Mitologia, Pensamentos), ~140 BPM (tempo 4), tight looping hand drums, buzzing staccato/sawtooth synths, guiros on Bit Binary (instruments), weird modal scales and unsettling harmonies (experimental 4); tagged kuduro, "percussive house music".
- https://www.factmag.com/2013/10/18/this-is-our-grime-dj-marfox-dj-nigga-fox-principe-records-and-the-sound-of-the-lisbon-ghettos/ — the debut 12" as a frenzied polyrhythmic hybrid of Angolan kuduro, batida and kizomba with house and techno (genres); Sherburne's "waist-windingest music" (groove 5); Fruity Loops learned from DJ Jesse (not tied to this record, so not entered).
- https://en.wikipedia.org/wiki/DJ_Marfox — biography, discography, batida = kuduro/kizomba/funaná/tarraxinha + house/techno.
- https://crackmagazine.net/article/long-reads/turning-points-dj-marfox/ — title as manifesto, kuduro roots, no named artist influences.
- https://pan-african-music.com/en/principe-discos-the-highway-to-royalty/ — Príncipe launched 2011 with this EP.

Doubts: no rating/score; producers left empty (self-produced but no credit seen); polish, mood empty; instrumental (no language).
New token: genre `batida` — parents: kuduro, electronic, afro (also house/techno). `kizomba` is also new (not in scenes.ts; the sibling Bonga row uses it too) — parents: semba, afro, zouk-adjacent dance.

## ferrogaita-fundubaxu

# Ferro Gaita — Fundu Baxu (1997) — funaná pick

Why this album (vs Bulimundo): Bulimundo (Katchás) electrified funaná in 1980–84, but its LPs are poorly documented and synth-era. Fundu Baxu is the most documented funaná landmark: best-selling CD in Cape Verde in 1997, ~40,000 copies in a country of ~400,000, "an earthquake" per national press, it led the late-90s return to acoustic gaita + ferrinho and changed the course of Cape Verdean music.

Artist: display name Ferro Gaita; country CV; started 1990s (formed Praia 1996). Tagline: "Praia band that sent raw gaita-and-ferrinho funaná back to the top."

## Sources
- https://afropop.org/articles/pour-me-a-grog-the-funaná-revolt-in-1990s-cabo-verde — 1997 "heavy record of pure Badiu funaná" with "punk-rock energy" (energy 5), 40,000 copies, gaita + ferrinho, later drum kit + electric bass + percussion; "spirit of rebellion and catharsis".
- https://www.okayafrica.com/cabo-verde-funana-revolt-1990s-ferro-gaita — "earthquake shook the country"; gaita (diatonic button accordion), ferrinho and bass guitar.
- https://pan-african-music.com/en/ostinato-records-funana/ — "changed the entire trajectory of the country's music"; 40,000 copies.
- https://worldmusiccentral.org/?p=62627 — founded 1996 Praia; Fundu Baxu (Cape Disco 1997) "presented funana in its original style" (experimental 1); highest-selling CD of the year; upbeat shows.
- https://en.wikipedia.org/wiki/Funan%C3%A1 — Ferro Gaita "one of the leading bands" of the late-90s return to roots; "Moças di Mangui" from Fundu Baxu; traditional funaná = gaita (diatonic accordion) + ferrinho.
- https://www.discogs.com/release/7129684 (API) — credits: Iduino vocals & gaita; Bino Branco vocals; Paulino vocals; Arlindo Delgado drums, cowbell; Jens Kerkhoff congas.
- https://forbesafricalusofona.com/?p=175777 — founder and vocalist Bino Branco (recently died), ferrinho his defining instrument; group formed to revive traditional funaná against electronic instruments.
- https://www.timeout.pt/lisboa/pt/noticias/carnaval-a-moda-de-cabo-verde-030219 — started with a knife, a piece of metal and an accordion; Fundu Baxu best-selling album of 1997.

## New tokens
- genre `funana` — parents: caboverde, folk, dance (worldmusic).
- instrument `ferrinho` (metal scraper, iron bar struck/scraped with a knife) — group: percussion.

## Doubts
- No producer credit found; voice and lyrics left empty (no album-specific source). Mood 4, tempo 4, groove 5, polish 2 rest on the general descriptions of the record's raw dance energy; medium confidence.

## giselajoao-giselajoao

# Gisela João — Gisela João (2013)
Artist: Gisela João · country PT · starting decade 2010 (debut 2013; sang in Barcelos fado houses from 2000).
Tagline: The Barcelos fadista hailed as the best fado voice since Amália.

Choice among Ana Moura, Carminho, Gisela João, Camané: this debut has the strongest documented critical consensus — Ípsilon/Público and Blitz record of the year 2013, unanimous Prémio José Afonso 2014, No. 1 in Portugal. Runner-up: Carminho "Fado" (2009), reportedly Songlines best album of 2011 (only artist/promoter bios confirm it).

Sources
- https://en.wikipedia.org/wiki/Gisela_Jo%C3%A3o — July 2013, Valentim de Carvalho, No. 1, Ípsilon/Público and Blitz record of the year (cites Público Jan 2014), platinum (Blitz).
- https://www.dn.pt/arquivo/diario-de-noticias/gisela-joao-e-a-melhor-voz-que-apareceu-apos-amalia-3800598.html — José Afonso jury: unanimous; voice full and deep, flawless pitch in all registers (powerful|clear); lively and lyrical songs (mood 2 = mixed, leaning sad); produced by Frederico Pereira; "best voice since Amália" (sounds_like Amália Rodrigues).
- https://www.dn.pt/arquivo/diario-de-noticias/gisela-joao-vai-estar-nua-hoje-no-coliseu-do-porto-5761473.html — Frederico Pereira also produced the first album; Sei finalmente (Amália), Sou tua (Flora Pereira), new song Vieste do fim do mundo.
- https://www.museudofado.pt/index.php/en/fado/persolanity/gisela-joao-en — recorded Feb 2013 at Palácio Marquês de Pombal; return to fado's traditional roots, questions its mannerisms (experimental 1); deep powerful voice.
- MusicBrainz release 7e87d72d-5c77-4803-b4d8-efa21343e2ff — 14 tracks; "Voltaste" credits Ricardo Parreira and Tiago Oliveira (Portuguese guitar), Francisco Gaspar (acoustic bass guitar) → portugueseguitar|bass; electronic 0.
- Expresso (Miguel Cadete) and Jornal de Negócios (Manuel Falcão) quotes via https://www.sonicbids.com/band/giselajoao/ (artist press page).

Doubts: viola (fado guitar) not credited in sources seen, so acousticguitar omitted; lyrics themes not sourced (empty). `portugueseguitar` follows the sibling Mariza/Amália rows (not in instruments.ts yet).

## ildolobo-nosmorna

# Ildo Lobo — Nôs Morna (1996) — second morna pick

Why this artist/album (vs Bana): Bana, "King of Morna", left ~100 LPs/EPs with no single documented landmark and much of it compilations. Ildo Lobo (Os Tubarões' singer) is called one of the archipelago's greatest singers and "heir to a tradition shaped by Bana"; Nôs Morna, his solo debut made entirely of mornas, brought him international fame. Note: he was the singer of Os Tubarões, so if Os Tubarões is ever added it must not be linked as an influence (self-reference).

Artist: display name Ildo Lobo; country CV; started 1970s (Os Tubarões, active 1975–2004; born Sal 1953, d. 2004). Tagline: "Os Tubarões' golden voice, Cape Verde's great male morna singer."

Year 1996 (Wikipedia, World Music Central, Discogs 3400912); AllMusic gives a Feb 1997 edition.

## Sources
- https://en.wikipedia.org/wiki/Ildo_Lobo — solo debut 1996, produced by Mário Lúcio (Simentera), recorded at Lusafrica Paris; "rose to international fame with his first solo work"; "versatile and melodic voice".
- https://lusafrica.com/?p=2180 — tribute to his father Antoninho Lobo (one of Cape Verde's great singers), composed entirely of mornas; heir to a tradition shaped by Bana (→ sounds_like Bana; influenced_by Antoninho Lobo, the tradition he inherited and the album honours).
- https://worldmusiccentral.org/?p=62636 — same facts; recorded in Paris with Santiago's finest musicians.
- https://www.discogs.com/release/24149426 (API) — credits: Pedro Rocha acoustic guitar; Kitas Lobo, Taninho classical guitar; Mário Lúcio classical & ten-string guitar, violin, bandolim (mandolin), harmonica, piano, percussion; Manuel de Novas ten-string guitar; Gil Duarte "ukulele" (likely cavaquinho) & bass; Manuel Espírito Santo violin. Discogs styles Folk / Ballad / Morna (→ folk|ballad). All-acoustic → electronic 0.
- https://eng.caboverdeamusica.online/ildo-lobo/ — "sonorous, open, and powerful voice" → voice powerful|clear; an album of only mornas dedicated to his father.
- https://www.muziekweb.nl/en/Link/HEX8744/Incondicional — artist-level praise (no one sang the morna more beautifully).

## Doubts
- No album review/rating found → acclaim empty; lyrics empty. Mood 2, tempo 1, groove 1 from morna-only, ballad-style acoustic record; afrik.com (unreadable, Cloudflare) reportedly says the mornas are joined by rhythm and dance.
- `ukulele` kept as credited; switch to `cavaquinho` if you prefer (Cesária row uses cavaquinho).

## New tokens
- genre `morna` — parents: caboverde, folk, ballad (worldmusic).

## lura-dikorpukualma

# Lura — Di Korpu Ku Alma (2004) — batuque pick

Why this album: the record that put batuku (batuque) on the international map in the 2000s. Orlando Pantera, the creator of the "new batuku", died in 2001 without a studio album, so his songs reached the world through this record (5 Pantera songs). Wikipedia "Music of Cape Verde" lists Pantera, Vadú, Tcheka, Mayra Andrade, Lura as main batuque artists; Lura is the one most widely credited with reviving it (Songlines calls her Cesária's "most potent successor as a global champion of traditional Cape Verdean styles").

Artist: display name Lura; country CV (born Lisbon 1975 to Cape Verdean parents; Lisbon-based, sings Santiago styles; PT if you code by birthplace); started 1990s (career from 1992). Tagline: "Lisbon-born voice who brought Santiago's batuku to the world stage."

Year: 2004 (Lusafrica ℗ 2004, Discogs release 22857245; AllMusic 8 June 2004). The 2005 edition (US Escondida, EU reissue with DVD and 4 extra songs) explains the 2005 dates elsewhere.

## Sources
- https://www.discogs.com/release/22857245 (API) — 2004 Lusafrica, producers Fernando Andrade & José da Silva, Pantera writing credits; Discogs styles African / Morna / Neo Soul.
- https://www.discogs.com/release/13251381 (API, 2005 ed.) — musicians: Kako Alves acoustic 6/12-string & electric guitar; Virgilio Duarte acoustic bass guitar; Miroca Miranda percussion; Fernando Andrade piano, music director, arranger; Domingos Fernandes tenor sax → instruments.
- https://worldmusiccentral.org/?p=3470 — batuku and funaná; Pantera wrote five batuku songs; Lura: "fell in love" with his music (influenced_by Pantera); Cesária Évora inspired "Tem Um Hora Pa Tude" (influenced_by Cesária); themes immigration, drought/rain, food imports, separated families → lyrics social|identity.
- https://mg.co.za/article/2006-08-04-song-migrant — "most realised fusion of her earlier pop sensibilities" with accordion funaná and polyrhythmic batuku (experimental 2, mainstream 3); goal to bring back forgotten classic Cape Verdean music (identity).
- https://www.straight.com/article-166184/cape-verdes-batuku-rhythms-lured-lura — "fast-paced Santiago rhythm called batuku" (tempo/groove), "beautifully-produced" (polish 4), "deep-voiced", sensual voice.
- https://rambles.net/lura_dikorp05.html — contralto voice; African percussion + flamenco-style guitar; "good album".
- https://songlines.co.uk/awards/2016/lura-best-artist-nominee — "husky-voiced" → voice raspy.
- https://lusafrica.com/?p=1776 — first truly Cape Verdean record; 10+ countries; top seller in Italy; BBC World Music Awards nominee; Victoires de la Musique 2006 nominee; Independent quote.
- https://siddharthamitter.com/2005/09/14/alluring-lura-goes-all-out (Boston Globe review reprint) — "terrific new CD"; batuku and fast funaná.
- https://en.wikipedia.org/wiki/Lura_(singer) — born 1975 Lisbon, career from 1992.
- worldmusic genre: nominated as Best World Music Album (Victoires) / BBC World Music Awards.

## Doubts
- No accordion credited in the Discogs musician list, so accordion is not in instruments though funaná tracks exist.
- sounds_like left empty: critics explicitly distinguish her from Cesária (Tucson.com), no other comparison found.
- theatrical 2, mood 3 are judgment calls from the mixed themes and intimate band; lower confidence.

## New tokens
- genre `batuque` — parents: caboverde, folk (worldmusic, afro). `funana`, `morna`: see the Ferro Gaita / Ildo Lobo notes.

## mahmoudguinia-coloursofthenight

# Mahmoud Guinia — Colours of the Night (2017)
Artist: Mahmoud Guinia (also Maâlem Mahmoud Gania) · country MA · starting decade 1970 (recorded prolifically from the 1970s, The Attic).
Tagline: Essaouira's Gnawa master, the king of the guembri.

Choice: his landmark is usually The Trance of Seven Colors (1994, Axiom), but it is co-billed "Maleem Mahmoud Guinia with Pharoah Sanders", a live recording produced by Bill Laswell (AllMusic 3/5, All About Jazz 4/5). Per brief I chose his solo studio album: recorded 2013 at Studio Plein Les Oreilles, Casablanca, first issued on CD in Morocco (year undocumented), released internationally 2017 by Hive Mind (HMRLP001). Year 2017 = first documented release; flag if the Moroccan CD year is found.

Sources
- https://en.wikipedia.org/wiki/Colours_of_the_Night_(Maalem_Mahmoud_Gania_album) — studio album, genres Gnawa/folk/world music, personnel (guembri + lead vocals, chorus), The Wire Top 50 of 2017, The Attic 5/5.
- https://songlines.co.uk/review/colours-of-the-night — 4/5; bluesy gimbri, polyrhythmic qaraqab played by chorus, aged but powerful voice, simple effective production (polish 2).
- https://daily.bandcamp.com/2017/09/26/maalem-mahmoud-gania-colours-of-the-night-review/ — 8–11 min songs as one trance, call and response, much of it uptempo and made for moving, joyful devotion (energy/tempo/groove 3, mood 3).
- https://theatticmag.com/reviews/2144/maalem-mahmoud-gania-_-colours-of-the-night.html — sintir/guembri, krakeb, hand clapping, hypnotic healing trance music.
- https://monolithcocktail.com/tag/krakebs/ — rough soulful vocals (raspy), chorus of male and female singers (choral), synthesizer on one track (electronic 1), devotional lines (spiritual).
- https://en.wikipedia.org/wiki/The_Trance_of_Seven_Colors — billing/live details of the alternative.

Doubts: language left empty (no source states the song language; Gnawa is generally Moroccan Arabic with West African words → `ary` if a source is found). Producer not documented.
New tokens: genre `gnawa` — parents: worldmusic, folk (also afro?/trance-ritual). Instruments `guembri` (three-string bass lute; aka gimbri, sintir) and `qraqeb` (iron castanets; aka krakeb) — new instrument tokens.

## mariza-fadoemmim

# mariza-fadoemmim — Mariza, Fado em Mim (2001)
Sources
- https://en.wikipedia.org/wiki/Fado_em_Mim — genres Fado, World Music; producers Jorge Fernando, Tiago Machado; personnel (Portuguese guitar Custódio Castelo, classical guitar/viola, acoustic bass, double bass, piano, cello, percussion on Barco Negro); AllMusic 4/5, BBC/PopMatters positive; EBBA 2004. (Gives April 2002 = international World Connection release.)
- https://en.wikipedia.org/wiki/Mariza — 2001 release in text; 6x Platinum PT; born Maputo 1973, raised Mouraria; active from 1997.
- https://rambles.net/mariza_fado01.html — World Connection 2001; 12-string Portuguese guitar, classical guitar, acoustic bass + piano, cello, percussion; fado themes passion/sorrow.
- https://songlines.co.uk/features/mariza-every-album-reviewed — Michael Church: "superb"; voice as good as Amália; "new Amália"; Mísia as precedent; mood nostalgia; Barco Negro "deeply spooky" (sounds_like Amália Rodrigues, Mísia).
- https://www.theglobeandmail.com/arts/when-fado-marries-europop/article1335587 — 3.5 stars; fado dressed in Europop, "pop-jazz chanson" on Poetas (genres europop, jazzpop, chanson); resemblance to Amália; Céline Dion comparison for one intro only (not used).
- https://www.miaminewtimes.com/music/mariza-6351095/ (via search) — voice "gorgeous, otherworldly", saudade.
- https://latinolife.co.uk/articles/mariza-interpreter-life , https://theartsdesk.com/new-music/theartsdesk-qa-mariza-diva-fado — Mariza: recorded it to thank her father; favourite singers Callas, Nina Simone, Billie Holiday (general, not tied to this album → influenced_by left empty). Critic hears tribute to Amália, Fernando Maurício, Carlos do Carmo (critic → not influence).
- Britannica (via search): discovered by Jorge Fernando; PT release 2001, international acclaim 2002.
Judgment: voice powerful|clear (critics: rich, vibrant, bursting from the heart); polish 3 normal studio; electronic 0 acoustic.
New tokens: instrument `portugueseguitar` (parents: guitar; probably already proposed by the Amália batch).
Doubt: "new fado" named by Church only as contrast — not added (`newfado`, parent fado, if wanted).

## wendycarlos-switchedonbach

# wendycarlos-switchedonbach — Wendy Carlos, Switched-On Bach (1968)
Sources
- https://en.wikipedia.org/wiki/Switched-On_Bach — Oct 1968, Columbia Masterworks; producers Carlos and Rachel Elkind; genres electronic, baroque; Moog synthesizer (monophonic, built one note at a time) with Benjamin Folkman; custom 8-track Ampex recorder in her apartment (overdubbing, analogtape); 3 Grammys 1970 incl. Best Classical Album and Best Engineered Classical Recording (polish 4); AllMusic 3.5/5; Glenn Gould praise; US #10, Billboard Classical #1 Jan 1969–Jan 1972; Platinum 1986; National Recording Registry 2005; influenced Moroder and Brian Wilson.
- https://www.guitarguitar.co.uk/news/143018/ — legitimised the synth as an instrument.
- Moog modular synthesizer = `moog` + `modularsynth` (production tokens existing).
Genres: `classical` supported by the Grammy Best Classical Album and Billboard Classical chart.
Left empty: energy, mood, theatrical, tempo (no source describes them), lyrics/language (instrumental), sounds_like and influenced_by (Bach is the repertoire, not an influence; no documented influences/critic comparisons found).
New tokens: none. Country US, start 1960s.


# Batch 2 (28 Oct 2026): artists most cited in sounds_like/influences without a described album

Owner: 'Lavora tu su di loro'. One landmark album each. Claude's import fixes: vibraphone/marimba to mallets, fiddle to violin, piccolo to flute, doubletracking and closeharmony to layeredvocals. 17 new genres (calypso, torchsong, artfolk, technorock, sampledelia, alternativehiphop, exotica, oldschoolrap, latinsoul, undergroundhiphop, modaljazz, systemsmusic, postmodern, tulsasound, swamprock, ambientdance, paisleyunderground).

## algreen-letsstaytogether

# algreen-letsstaytogether: sources
- https://en.wikipedia.org/wiki/Let%27s_Stay_Together_(Al_Green_album): soul (infobox), Willie Mitchell producer, Royal Studios Memphis, Hi Rhythm Section (Hodges brothers: organ/piano, guitar, bass; drums Howard Grimes, Al Jackson Jr.), horns (trumpet, saxes, trombone; James Mitchell arrangements); ratings AllMusic 5, RS 5, EPM 5, Pitchfork 8.7, Christgau A-; Guinness/Q/Virgin lists; US #8, soul #1 10 weeks.
- https://www.hhv-mag.com/feature/records-revisited-al-green-lets-stay-together-1972-2/?lang=en: soul/R&B; velvety smooth, organic open production, horns, strings on "How Can You Mend a Broken Heart" (stringarrangements), driving drums; themes love/romance.
- Search snippet (Under the Radar 50th anniversary): "quintessential exercise in the city's game-changing style" -> memphissoul.
- https://en.wikipedia.org/wiki/Al_Green: career influences (Sam Cooke, Wilson Pickett, James Brown, Jackie Wilson) are not album-specific, so influenced_by left empty.
- voice left EMPTY: no reliable source describing his vocals on this album (falsetto claims only on low-quality pages). Bee Gees not listed (covered song).

## bangles-differentlight

# bangles-differentlight — The Bangles, Different Light (1986)
- https://en.wikipedia.org/wiki/Different_Light: pop rock, Top 40 departure from 60s-style roots; Slant: 60s pop melodies, early-80s new wave/rock rhythms; Classic Pop: Paisley Underground influence; producer David Kahne (engineers/mixer excluded); credits: guitars, bass, drums, Mitchell Froom keyboards, Kahne keyboards and LinnDrum programming, harp, electric sitar, extra drums; covers/outside writers (Jules Shear, Big Star, Prince, Liam Sternberg) excluded from sounds_like/influences; ratings AllMusic 3, Slant 4, Classic Pop 4, RSAG 2.5, Spin 6; US #2, UK #3, 3x Platinum.
- https://rockandrollglobe.com/?p=43452 : Billboard "lusher, more layered vocal sound" (layeredvocals); jangly 60s roots, guitar-laden, upbeat infectious pop (mood 4); Debbi Peterson: rushed, more outside songs (mainstream 4).
- Search summary (Slant, AllMusic): slicker, more commercial move; AllMusic: less cohesive than the debut, production and outside musicians part of the problem.
- sounds_like, influenced_by, lyrics left empty: no source gives a sonic comparison (only scene peers Rain Parade/Three O'Clock and the Go-Go's as a commercial model) or themes.
- NEW TOKEN: `paisleyunderground` (Classic Pop "Paisley Underground"; the list has `paisleypop`, a different name); suggested parents: rock, indie, alt (with janglepop, psychedelicrock).

## basementjaxx-remedy

# basementjaxx-remedy — Basement Jaxx, Remedy (1999)
- https://en.wikipedia.org/wiki/Remedy_(Basement_Jaxx_album): genres house, disco; producers Felix Buxton, Simon Ratcliffe; violin (Stop 4 Love), keyboards (Bingo Bango); samples (Locksmith, KRS-One, Selecter, Bolivar); guest vocalists (excluded from sounds_like); Metacritic 88, AllMusic 5 (compared to Daft Punk Homework), NME 9, AP 5, Pitchfork 3.5; 1001 Albums, RS EDM #13; UK #4, Platinum.
- https://stereogum.com/2043219/basement-jaxx-remedy-turns-20/reviews/the-anniversary : deep house / garage; Spanish acoustic guitar on Rendez-Vu; joyous "remedy" for late-90s gloom (mood 5, lyrics party); comparisons Daft Punk, Chemical Brothers, Fatboy Slim.
- https://tinnitist.com/2024/08/05/classic-album-review-basement-jaxx-remedy : electronica, funky house; inventive samples; Chemical Brothers comparison.
- https://www.scaruffi.com/vol6/basement.html : Latin (Bingo Bango), hip-hop (Jump N' Shout), soul-pop (Red Alert), flamenco-like (Rendez-Vu), derivative of garage house.
- Search summary (RA bio, URB 1999): "polished roughness" (polish 3); aim to recapture Chicago/NY house feel — a scene, no artist named for this album, so influenced_by empty.

## beck-odelay

# Beck — Odelay (1996)
- https://en.wikipedia.org/wiki/Odelay — infobox alternative rock, sampledelia, alternative hip hop, experimental rock, folk rock, neo-psychedelia; Erlewine (AllMusic): folk, country, garage rock, electro, exotica, old-school rap, noise rock; Sheffield (RS): punk rock, bossa nova, Latin soul, mainstream R&B; producers; Beck: guitars, bass, harmonica, organ, Moog, thumb piano (kalimba), turntables; Greg Leisz pedal steel, Charlie Haden upright bass, Joey Waronker drums, trumpet/sax on Where It's At; Dust Brothers layered sample approach; ratings, Grammys, lists, certs.
- https://rulefortytwo.com/articles-essays/music/beck-on-odelay/ — "a lot of Odelay was played, not sampled"; early Pro Tools; pawn-shop Moogs; Wurlitzer organ; slide guitar and harmonicas; Them organ sample (sample, not influence).
- https://www.udiscovermusic.com/behind-the-albums/beck-odelay/ — Mark Kemp (RS 1996): "Like the Beasties…" → sounds_like Beastie Boys (not a producer's band).
- lyrics left empty (no source characterises the album's lyrics; many were placeholders). influenced_by empty (Paul's Boutique link is critics' / producers' CV, not a Beck statement).
- New tokens: `sampledelia` (parents electronic, hiphop, psychedelia), `alternativehiphop` (hiphop, alt), `exotica` (lounge, easylistening, spaceagepop), `oldschoolrap` (hiphop, rap), `latinsoul` (latin, soul).

## billieholiday-ladyinsatin

# billieholiday-ladyinsatin: sources
- https://en.wikipedia.org/wiki/Lady_in_Satin: vocal jazz; producer Irving Townsend (Fred Plaut engineer, Ray Ellis arranger/conductor - not producers); 40-piece orchestra with horns, strings, reeds and 3-voice choir; soloists Mel Davis (trumpet), Urbie Green and J.J. Johnson (trombone); rhythm Mal Waldron (piano), Barry Galbraith (guitar), Milt Hinton (bass), Osie Johnson (drums); voice "a fragile, raspy sound" (voice raspy); Great American Songbook and classic pop material (standards, traditionalpop); Holiday admired Sinatra's In the Wee Small Hours and wanted a setting in the vein of Sinatra or Ella Fitzgerald's Song Books (influenced_by); Townsend: she wanted "a pretty album, something delicate"; reception AllMusic 4.5, Penguin 3/4, RS Jazz Guide unfavourable; Grammy HoF 2000; RS 500 #317 (2020).
- lyrics heartbreak|love: from the torch-song repertoire (I'm a Fool to Want You, You Don't Know What Love Is) and Penguin's "beaten woman" reading; medium.
- Ray Ellis not in sounds_like/influenced_by (arranger/collaborator).

## bluenile-hats

# bluenile-hats — The Blue Nile, Hats (1989)
- https://en.wikipedia.org/wiki/Hats_(album): genres (sophisti-pop, art pop, electropop, synth-pop), self-produced by the trio, credits (synths, keyboards, guitar, bass), Castlesound/Calum Malcolm (engineer, so not a producer), ratings (Q 5, Uncut 10, Mojo 5, NME 9, Pitchfork 8.8, RS lukewarm), lists (MM #8, NME #18, Q British #92, Q 80s #38), UK #12.
- https://www.electricityclub.co.uk/?p=4596: more synths and drum machines than the debut, piano, guitar, sampled trumpet (instruments, sampling); comparisons OMD (Architecture & Morality), David Sylvian, Tom Waits and Sinatra in the vocal (sounds_like); love songs of loss and fragile hope; "4 am" mood (mood 1, tempo 1).
- https://www.stereogum.com/2061426/blue-nile-hats-30th-anniversary-review/ : nocturnal, slow, melancholic; lyrics of failing relationships and searching (introspection).
- https://rockandrollglobe.com/new-wave/the-blue-niles-sophisticated-pop-classic-hats-turns-30/ : "blue-eyed soul" approach (genre blueeyedsoul), critic says they seem affected by Talk Talk's Spirit of Eden (a critic's guess, so sounds_like, not influenced_by); velvet, soulful voice (soft).
- https://en.wikipedia.org/wiki/The_Blue_Nile_(band): formed Glasgow 1981; effectively split 2005, Moore 2022: no reunion.
- influenced_by left empty: no band statement found. No gear models documented.

## cars-thecars

# The Cars (1978): sources
- https://en.wikipedia.org/wiki/The_Cars_(album) : genres new wave, power pop, electronic rock; producer Roy Thomas Baker; personnel (Hawkes keyboards/sax/percussion, Robinson drums/Syndrums); irony and sarcasm in Ocasek's lyrics; ratings AllMusic 5, Christgau B+, RS 1978 ("lacquered sound"); RS 500 #282/#284/#353; Larkin #384; NRR 2024; US #18, 6x Platinum.
- https://www.mixonline.com/recording/classic-tracks-the-cars-just-what-i-needed : Vox Continental + Farfisa organs (organ, farfisa), small old Moog (moog), no programmable synths; Syndrum/Synare (electronicdrums); gated snare (noisegating); 9-track stacked background harmonies (layeredvocals); band tracks with most parts replaced by overdubs (overdubbing); stacked vocals recall Queen -> sounds_like Queen.
- https://ultimateclassicrock.com/the-cars-debut-track-by-track/ : flanged toms (flanging); stacked chorus vocals; "Moving in Stereo" shows early Roxy Music influence (critic's view -> sounds_like Roxy Music); breakup/love themes, rock-star parody.
- Left empty: voice, influenced_by (Velvet Underground "Sister Ray" nod is a quotation; Ocasek's favourite bands are career-wide, not documented for this album). Prophet-5/miniKorg claims only on forums: not used.

## dollyparton-jolene

# dollyparton-jolene (Dolly Parton, Jolene, 1974)
- https://en.wikipedia.org/wiki/Jolene_(album): genre country; producer Bob Ferguson; RCA Studio B Nashville; personnel (guitars, pedal steel Pete Drake/Stu Basore, banjo Buck Trent, fiddle Mack Magaha/Johnny Gimble -> violin, piano Hargus Robbins/David Briggs, harmonica Onie Wheeler, bass, drums, Nashville Edition backing vocals); reviews AllMusic 3.5, Christgau B-, EPM 4, Pitchfork 5.8 (2007), Uncut 5; two country #1 singles; US country albums #6.
- https://consequence.net/2023/09/dolly-parton-jolene-review/1: understated, gentle and largely acoustic, carried by storytelling, simply structured; Jolene on hand-picked guitar (acousticguitar); themes fear of losing love, farewell to Wagoner.
- https://highwayqueens.com/2018/10/06/dolly-partons-discography-jolene/: River of Happiness has bluegrass influences (one track -> tail genre); classically country arrangements; speak-sung verses, warm tone, vibrato; heartbreak/longing/love themes; title track dark and menacing.
- https://americansongwriter.com/on-this-day-1974-dolly-parton-released-album-helped-make-her-country-icon/: her breakthrough/most popular album (importance 5).
Scales: electronic 0 (acoustic), mood 2 (pleading, longing, some jaunty songs), groove 1.
sounds_like EMPTY (Whitney Houston/Linda Ronstadt only as later covers; Charley Pride/Glen Campbell named as contrast). influenced_by empty.
Doubt: acclaim 4 vs 3 (Uncut 5/5 and EPM 4/5 vs Pitchfork 5.8 and Christgau B-).
No new tokens.

## ericclapton-slowhand

# ericclapton-slowhand (Eric Clapton, Slowhand, 1977)
- https://en.wikipedia.org/wiki/Slowhand: genres rock, blues, country; producer Glyn Johns (Olympic Studios, May 1977; Johns disliked jamming); personnel (Clapton vocals/guitars, George Terry guitars, Dick Sims keyboards, Carl Radle bass, Jamie Oldaker drums/percussion, Mel Collins sax on The Core, Marcy Levy/Yvonne Elliman vocals); covers of J.J. Cale, Don Williams, John Martyn, Arthur Crudup; reviews AllMusic 4.5 (with 461 his best), RS Album Guide 5, EPM 4, Christgau C+, Kot 2.5; RS 500 #325 (2003); US #2, 3x Platinum.
- https://en.wikipedia.org/wiki/Lay_Down_Sally: lead single = country blues, roots rock, country rock (allowed in top genres as biggest hit; put after infobox genres); Dick Sims electric piano; Billboard: low-key earthy vocal. Clapton credits his Tulsa bandmates (members, so not influences).
- https://bestclassicbands.com/eric-clapton-slowhand-review-12-11-19/: beyond electric blues to pop, country, reggae; editorial economy; organ figures; breezy shuffle, languid ballad; themes: Wonderful Tonight love tribute, Cocaine anti-drug warning (social), Next Time You See Her jealousy, May You Never friendship.
Scales: energy 2/tempo 2 (medium tempo, laid-back), polish 3 (normal studio, economical), voice soft (low key, mellow).
sounds_like EMPTY: the only critic comparison is J.J. Cale (Lay Down Sally "in the style of"), but he is the original of a covered song (Cocaine) -> excluded by the rule. influenced_by empty.
No new tokens.

## everlybrothers-itseverlytime

# The Everly Brothers — It's Everly Time (1960)
- https://en.wikipedia.org/wiki/It%27s_Everly_Time — genre rock and roll; Nashville sessions 8–24 March 1960; personnel (Don/Phil guitar, Chet Atkins & Hank Garland electric guitar, James Clayton steel guitar, bass, Floyd Cramer piano, Buddy Harman drums); mostly Boudleaux & Felice Bryant songs; AllMusic 4.5/5 ("one of their very best"), EPM 3/5; UK #2, US mono #9. No producer credited on the page: producers left empty.
- https://onlysolitaire.substack.com/p/review-the-everly-brothers-its-everly — blend of rock and roll, pop, country, folk, country-pop and one blues-tinged track; harmonies the main draw; heartbreak ("So Sad") and teen romance; comparisons Hank Williams, Buddy Holly (sounds_like); Ray Charles/Fats Domino = covered originals, excluded.
- New token: production `closeharmony` (close two-part vocal harmony; near layeredvocals). Voice left empty (no source for a voice type).

## garbage-garbage

# Garbage — Garbage (1995)
- https://en.wikipedia.org/wiki/Garbage_(album) — infobox alternative rock, dance-rock, power pop; Metro Weekly electronic pop + trip-hop beats + electronica; Kaufman trip-hop, jungle; Wood post-grunge; A.V. Club pop-rock; Grierson "techno-rock"; producer credit Garbage; Smart Studios; samples/loops, Vig's "Wall of Sound", 48 tracks of loops; personnel (guitars, bass, six-string bass, fuzz bass, keyboards, samples, loops, drums; Stubblefield drums, Thimmig clarinet, Ryan percussion); Newsweek acoustic+electric guitars, keyboards; lyrics voyeurism, hedonism, obsession, self-destruction; Erlewine "thin, airy voice", glossy production; Inglis (Sound on Sound) production "owed as much to Public Enemy as Led Zeppelin"; Christgau "Whale without Tricky"; ratings/lists/certs.
- https://faroutmagazine.co.uk/shirley-manson-album-great-sex-cry-your-eyes-out/ — Vig named Debbie Harry, Patti Smith, Chrissie Hynde, Siouxsie as models in the singer search (not album influences; left out).
- influenced_by empty: Wikipedia says the approach grew out of the band's remix work (U2, Depeche Mode, NIN) — remixing, not documented musical influence; not listed. Clash/Single Gun Theory/Headless Chickens are samples.
- New token: `technorock` — parents rock, techno.

## gogos-beautyandthebeat

# Beauty and the Beat (1981): sources
- https://en.wikipedia.org/wiki/Beauty_and_the_Beat_(The_Go-Go%27s_album) : genres new wave, pop rock, power pop, surf rock; producers Richard Gottehrer and Rob Freeman; personnel (Caffey guitar + keyboards, Schock drums/percussion); ratings AllMusic 4.5, Pitchfork 8.3, Spin 10, RS 4; RS 500 #413/#414/#400; Spin Alt #91; 1001 Albums; NRR 2026; US #1, 2x Platinum; NPR: perfected pop-punk (poppunk).
- https://www.wamc.org/2020-08-05/how-the-go-gos-perfected-pop-punk (NPR, Hilary Hughes): Carlisle "modeled ourselves on" Buzzcocks and the Clash; Caffey's reverb surf guitar from her Beach Boys fandom -> influenced_by Buzzcocks|The Clash|The Beach Boys; Gottehrer slowed songs, Carlisle says her voice was sped up (varispeed); Wiedlin's darker lyrics on mental health (introspection), mocking/Hollywood songs (irony).
- https://en.wikipedia.org/wiki/We_Got_the_Beat : re-recorded slower at Gottehrer's direction; Caffey horrified by sped-up vocals.
- https://albumreviews.blog/reviews/punk-and-new-wave-reviews/the-go-gos-album-reviews/ and https://en.debaser.it/go-gos/beauty-and-the-beat/review : hints of Blondie, The Cars, Adam Ant -> sounds_like (smaller outlets; confidence medium).
- Excluded: Shangri-Las (covered), Terry Hall (co-writer), Ramones/Richard Hell (producer/engineer credits, not a sound comparison).

## heart-heart

# Heart (1985): sources
- https://en.wikipedia.org/wiki/Heart_(Heart_album) : genres rock, pop; producer Ron Nevison; personnel (Nancy Wilson guitars/acoustic/mandolin, Leese guitar/keyboards/mandolin, Peter Wolf synths + acoustic piano, Holly Knight keyboards); outside writers; ratings AllMusic 4.5, Kerrang 3, RS Album Guide 2.5, RS unfavourable; US #1, 5x Platinum.
- https://ultimateclassicrock.com/heart-1985-album/ : hard rocker (hardrock), power ballad (powerballad), AC ballad (adultcontemporary); Capitol required agreed material -> outside songwriters, managed image, sisters felt stifled (mainstream 5); Nancy: "auditioning snare samples all day" (production sampling); Nevison kept Nancy's cracked/raspy take (voice raspy).
- https://www.classicrockreview.com/2015/08/1985-heart/ : mainstream pop/rock (poprock), synths and fake strings, electric piano; "Nothin' at All" like 80s Journey -> sounds_like Journey.
- https://www.udiscovermusic.com/stories/heart-1985-classic-album/ : leaner mainstream rock, radio-friendly polish, stilted keyboards; revenge/woman scorned (heartbreak), romantic ballads (love).
- Stereogum (search snippet, Number Ones column): "These Dreams" is straight-up 80s synthpop -> synthpop (long tail).
- https://www.songfacts.com/facts/heart/these-dreams : raspy cold vocal kept.
- Excluded: Grace Slick/Mickey Thomas (guests), Toronto (original of a cover), Robert Plant comparison (one vocal, not album sound).

## hollies-butterfly

# The Hollies — Butterfly (1967)
- https://en.wikipedia.org/wiki/Butterfly_(Hollies_album) — genres psychedelic pop, experimental pop ("pop-oriented approach to psychedelia"); producer Ron Richards, Nash led sessions; EMI/Abbey Road Aug–Oct 1967; Hicks lead guitar + electric sitar ("Maker"), Nash rhythm guitar + harmonium ("Dear Eloise"), Clarke harmonica, Calvert bass/keyboards, Elliott drums; John Scott string and brass arrangements; ratings AllMusic 2.5, Q 3, EPM 4, Sounds 4, Uncut 7/10; last album with Nash.
- https://www.highresaudio.com/album/view/yzidsf/the-hollies-butterfly-remaster — "modest adjustments to the psychedelic era", sitar, trippy studio effects, "pleasant enough, not essential".
- Thin evidence: lyrics, voice, sounds_like, influenced_by empty (no Sgt. Pepper link found in sources). Confidence low. Note: "King Midas in Reverse" is on the US version only, not this UK album.

## jjcale-naturally

# jjcale-naturally (J.J. Cale, Naturally)
Note: released 25 Oct 1971 (Wikipedia); year kept as given (1972, US Shelter release date in some listings).
- https://en.wikipedia.org/wiki/Naturally_(J._J._Cale_album): genre country rock; framework of the Tulsa sound; delicate drums, deep limited-range vocals, guitar mixing country chords/blues/jazz harmony; electric drum machine on Crazy Mama and Call Me the Breeze, demo-like; full personnel (Karl Himmel/Chuck Browning drums, Radle/Drummond/Putnam bass, Wilson/Briggs/Whitehurst piano, Briggs organ, Myrick steel, Spicher/Lavender fiddle -> violin, Haynes dobro, Gayden slide, Colis harmonica); producer Audie Ashworth; reviews (Landau RS, Christgau B, AllMusic 3.5, Owens: lazy rolling boogie contradicting commercial styles); Crazy Mama #22; UK silver.
- https://en.wikipedia.org/wiki/JJ_Cale: whispery vocals buried in mix, early drum machine use, Tulsa sound (blues, rockabilly, country, jazz); LA Times hybrid of blues, folk and jazz. Died 2013. Only named influence (Mose Allison) is tied to "Cocaine" (1976), so NOT used for this album.
- https://thevinyldistrict.com/storefront/graded-on-a-curve-jj-cale-naturally: blues/country/rockabilly/jazz, swamp rock; quiet sleepy whisper vocals; drowsy, low-key mood; shuffle tempo; horn section, piano, harmonica; storytelling (smuggling story, woman left in New Orleans); comparison Randy Newman (understatement) -> sounds_like. (Velvet Underground comparison is for one track only, not used.)
- https://hypercritic.org/collection/jj-cale-naturally-1971-review: "classic of the blues-rock genre"; vocals almost talked (spoken); low tempo; mellow/sad/chilled; horns on Woman I Love, strings on Clyde; loneliness theme.
Scales: energy 1/tempo 1 (low tempo, no momentum), mood 2 (world-weary, sad/chilled), polish 2 (spare, demo-like), groove 2 (rolling boogie/shuffle), electronic 1 (drum machine on two tracks).
New genre tokens: `tulsasound` (parents: rock, blues, country), `swamprock` (parents: rock, blues).
Doubts: swamprock/rockabilly/jazz/folk are named for Cale's style in album reviews, put at tail. influenced_by empty (nothing documented for this album).

## jonimitchell-blue

# Joni Mitchell — Blue (1971)
- https://en.wikipedia.org/wiki/Blue_(Joni_Mitchell_album) — genre folk; AllMusic (Ankeny) "quintessential confessional singer/songwriter album", "confessional folk-pop"; Peter Reilly: torch-song tradition; "Carey" calypso-influenced, Hinton rock and roll (tail genres); producer Joni Mitchell, A&M Studios, engineer Henry Lewy; Mitchell acoustic guitar, Appalachian dulcimer, piano; Stills bass/guitar, Sneaky Pete Kleinow pedal steel, Russ Kunkel drums/percussion, James Taylor guitar; themes: romance, breakup, homesickness, Vietnam, adoption ("Little Green"); Kearns compares "My Old Man" to Carole King's "It's Too Late" (Tapestry) and "This Flight Tonight" to Led Zeppelin's "Friends" (Led Zeppelin III) → sounds_like; reception: AllMusic 5, Pitchfork 10, Christgau A, RS 500 #3, NME #63, NPR; UK #3, US #15, platinum.
- https://lithub.com/anatomy-of-a-perfect-album-on-joni-mitchells-blue/ — "pure-toned" voice (clear), Hinton "startlingly intimate" (soft); sparse dulcimer/piano/guitar, pedal steel interjections, hand percussion; jazz-torch phrasing.
- Guests (Taylor, Stills) not in sounds_like. influenced_by empty: no documented musical influence for this album.
- New token: genre `torchsong` (parents: jazz, pop). `calypso` as above (latin, folk).

## kesha-animal

# kesha-animal — Kesha, Animal (2010)
- https://en.wikipedia.org/wiki/Animal_(Kesha_album): electropop, dance-pop, electro elements, R&B hints (Blah Blah Blah), pop-rock ballad; producers (Dr. Luke, Benny Blanco, Max Martin, Shellback, Ammo, Greg Kurstin, David Gamson, Tom Neville, Oliver Leiber); Auto-Tune, vocoder, samples, drum machines, few guitars, credits accordion/cowbell/whistle/trumpet/sax; sing-speak and spoken rap verses (voice spoken|rap); themes party, boys, heartbreak, lusty Boots & Boys, empowerment; comparisons Lady Gaga, Uffie, Katy Perry, Britney Spears, INXS (Suicide Blonde); Metacritic 54, Pitchfork 7.3, AllMusic 3, Guardian 2, Slant 1.5; US #1, 4x Platinum.
- https://www.interviewmagazine.com/music/kesha (Matt Diehl, March 2010): "I wrote my album a little bit in homage to the Beastie Boys' Licensed to Ill" (influenced_by). She also says she loves the Velvet Underground but not tied to the album, so not included.
- mainstream 5: Dr. Luke/Max Martin hit-factory production, the reference case of a packaged trend record (cf. Teenage Dream anchor).

## kinks-thekinksarethevillagegreenpreservationsociety

# The Kinks — The Kinks Are the Village Green Preservation Society (1968)
- https://en.wikipedia.org/wiki/The_Kinks_Are_the_Village_Green_Preservation_Society — genres (infobox: pop, rock, baroque pop, folk-pop; text: music hall, folk, blues, psychedelia, calypso, raga rock, acid rock); producer Ray Davies (+ Shel Talmy on "Village Green"); Nicky Hopkins piano/harpsichord/Mellotron; Whitaker strings, oboe, cello, viola, piccolo; congas, tambourine, handclaps; Ray double-tracked most lead vocals; overdubs on Pye 4-track; "unassuming"/demo-like production (polish 2); critics' comparisons: Zombies Odessey and Oracle, Love Forever Changes, Left Banke; Ray cites Motown groups (Four Tops, Temptations) for "Starstruck" (influenced_by); themes: nostalgia, preservation, character studies, cynicism; reception scores and lists; no chart in 1968, UK gold 2018.
- https://guitar.com/review/album/the-genius-of-the-kinks-are-the-village-green-preservation-society-by-the-kinks — acoustic-guitar dominated (Fender Malibu, 12-string), harmonium, Dave's electric guitars; vaudeville, calypso-like, ska-like; "Phenomenal Cat" near Pink Floyd (sounds_like).
- Not used as influences: Howlin' Wolf ("Smokestack Lightning" riff = quotation), Phil Spector (journalist's reading of Ray's method on "Picture Book", not Ray's statement), writers (Dylan Thomas, Orwell, Blake...).
- New tokens: genre `calypso` (parents: latin, folk); production `doubletracking` (double-tracked vocals; near layeredvocals); instrument `piccolo` (woodwind, near flute).
- Voice left empty: no source describing Ray's vocal type.

## laurabranigan-branigan

# laurabranigan-branigan (Laura Branigan, Branigan, 1982)
- https://en.wikipedia.org/wiki/Branigan_(album): producer Jack White, co-producer Greg Mathieson; Rusk Sound, Hollywood; personnel (Lukather/Landau/Veitch guitars, Mathieson & Boddicker keyboards/synths, Sklar/Glaub bass, Carlos Vega drums); Gloria = Umberto Tozzi song, its "Eurodisco" version Grammy-nominated; reviews: Billboard positive (voice explodes with fury), AllMusic middling, production bogs down ballads, powerful voice; US #34, Gold US/CA/AU.
- https://theseconddisc.com/2014/07/30/calling-gloria-laura-branigans-debut-album-gets-expanded-reissue/: contemporary pop with big sleek 80s sound; adult contemporary ballads, rock and dance tracks; Down Like a Rock new wave gloss (tail genre); powerful resonant alto with grit; Latin percussion on When, piano on I Wish We Could Be Alone; Living a Lie could put her in competition with Pat Benatar or Debbie Harry -> sounds_like; Atlantic enlisted White/Mathieson after failed singles to establish her in the pop mainstream (mainstream 4); themes romantic longing, lost love.
- https://sessiondays.com/2014/09/1982-laura-branigan-branigan/: pop-rock (Please Stay, Go Away), straight-ahead rock (Living a Lie), ballads; full credits.
- https://laurabraniganonline.com/news/blog/branigan-album-40th-anniversary: four up-tempo tracks among five ballads (groove 2, tempo 3); four-octave powerful voice.
Excluded from sounds_like: Umberto Tozzi (original of a covered song), Burt Bacharach (one chord quotation), Toto (Lukather is a guest). influenced_by empty.
New tokens: none (`ballad`, `adultcontemporary`, `eurodisco`, `newwave` already in the list).
Doubt: acclaim 3 rests on one lukewarm AllMusic review plus positive Billboard; importance 4 because Self Control (1984) is arguably her other defining record.

## lindaronstadt-heartlikeawheel

# lindaronstadt-heartlikeawheel (Linda Ronstadt, Heart Like a Wheel, 1974)
- https://en.wikipedia.org/wiki/Heart_Like_a_Wheel: genres country rock, pop rock, soft rock; producer Peter Asher (Andrew Gold arrangements help); full personnel (pedal steel Sneaky Pete Kleinow, fiddle David Lindley -> violin, banjo Herb Pedersen, harmonica Jimmie Fadden, ukulele/piano/electric piano/drums Gold, strings arranged by Gregory Rose and David Campbell, viola, cello, double bass, tambourine, cowbell); reviews AllMusic 5 (landmark of 70s mainstream pop/rock), Christgau A-, Pitchfork 8.5, RS Album Guide 5; RS 500 #490 (2020); US #1, 2x Platinum; National Recording Registry 2013; Grammy HoF 2018; Grammy for Best Country Vocal Performance (country genre).
- https://ronstadt-linda.com/revhear3.htm (Stephen Holden, Rolling Stone 1975): honey-coloured soprano with a throbbing edge, soulful wail (powerful/clear); heartbroken yet resilient (heartbreak/love); full, distinctive settings with imaginative instrumentation (polish 4); title track as a formal chamber piece (stringarrangements); cross-blend of pop and country.
sounds_like EMPTY: no critic comparison found that isn't a guest (Eagles members, Emmylou Harris, Maria Muldaur, JD Souther) or an original of a covered song (Betty Everett, Everly Brothers, Little Feat, Hank Williams, James Taylor, Buddy Holly). influenced_by empty.
No new tokens. Confidence high on facts, scales are judgement from Holden/Wikipedia.

## maryjblige-mylife

# maryjblige-mylife: sources
- https://en.wikipedia.org/wiki/My_Life_(Mary_J._Blige_album): genre (contemporary R&B), producers, themes (depression, addiction, abusive relationship), samples (Ayers, Mayfield, Al Green, Hayes...), reviews (AllMusic 4/5, Pitchfork 7.0), RS 500 ranks, Time, Blender, Apple 100, Registry 2025, charts and certifications.
- https://daily.redbullmusicacademy.com/2014/11/key-tracks-mary-j-blige-my-life: MPC-60 as hub, Roland JV-1080/D-50, Studer tape, 1176, "vocal flies" layered backing vocals; session players Paul Pesco (guitar), Victor Bailey (bass), Regina Carter (violin), Mark Ledford (trumpet); Alexander on tenor sax/piccolo/flute; Thompson cites go-go.
- https://soulculture.com/?p=50425 (Chucky Thompson interview): influences Rare Essence, Dr. Dre ("acted like I was Dr. Dre" on I Love You), Pete Rock (King of Rock remix vibe for Be With You). Roy Ayers he "used to love" but sampled, so left out (sample rule). Rose Royce = cover, left out.
- https://www.udiscovermusic.com/stories/mary-j-blige-my-life-album/ and https://www.udiscovermusic.com/?p=2567413: hip-hop soul, R&B, soul; raw, rough-edged conversational voice (voice raspy); 70s soul loops; themes infidelity, bad love, faith.
- Search snippets (AllMusic-style review on retail page, udiscover): "quiet storm" ballads, hip-hop subdued in favour of '70s soul (quietstorm genre, medium).
- sounds_like empty: no critic sonic comparison found (Aretha is a framing quote, not a comparison).
- Doubt: RBMA gear list may be specific to "I'm Goin' Down" sessions. Mainstream 3 (artist-written, Bad Boy hit producers).

## milesdavis-kindofblue

# Kind of Blue (Miles Davis, 1959): sources
- https://en.wikipedia.org/wiki/Kind_of_Blue : genre modal jazz (infobox); departure from hard bop; producer Irving Townsend (Teo Macero only produced the 1987 reissue); personnel (trumpet, alto/tenor sax, piano, double bass, drums); three-track tape at 30th Street Studio, two sessions, little rehearsal, band taped live in studio from scale sketches (liverecording, analogtape); George Russell's Lydian Chromatic Concept as the theoretical road to modal jazz (influenced_by); "relaxed quality" (energy/mood); Freddie Freeloader and All Blues are 12-bar blues (blues, long tail); ratings: AllMusic 5, Pitchfork 10, Penguin 4 stars + crown, RS Album Guide 5; RS 500 #12/#31; Larkin Top 100 Jazz #1; National Recording Registry; RIAA 5x Platinum.
- https://jazzmusicarchives.com/review/kind-of-blue/253049 : filed under Cool Jazz (cooljazz).
- Not used: Bill Evans, Coltrane, Adderley, Wynton Kelly are on the album (not influences, not sounds_like). Brubeck's Time Out / Giant Steps are only "recommended alongside", not a sonic comparison: sounds_like left empty. Davis's autobiography reportedly names Les Ballets Africains' thumb piano and Arkansas church gospel as inspirations, not verified here: left out.
## New tokens
- `modaljazz` (genre): parents jazz, cooljazz.

## ninasimone-pastelblues

# ninasimone-pastelblues: sources
- https://en.wikipedia.org/wiki/Pastel_Blues: producer Hal Mooney; personnel Simone (piano, vocals), Al Schackman (guitar, harmonica), Rudy Stevenson (guitar, flute), Lisle Atkinson (double bass), Bobby Hamilton (drums); Pitchfork: blues as urban protest music; AllMusic (Unterberger): more subdued, piano-focused, Sinnerman standout; ratings AllMusic 3.5, Pitchfork 8.7, Record Mirror 4/5, Tom Hull B+; Pitchfork 60s #21; US #139, R&B #8.
- Norman Records listing: "Be My Husband" voice, handclaps and hi-hat (handclaps).
- Sputnik Music review / retail blurbs: jazz, blues, gospel (gospel/jazz genres; weaker sources -> medium).
- Strange Fruit and "Tell Me More..." are Billie Holiday songs: Holiday not in sounds_like (originals rule). No documented album influences.
- voice left empty: no source describing her voice on this album.

## patbenatar-crimesofpassion

# Crimes of Passion (1980): sources
- https://en.wikipedia.org/wiki/Crimes_of_Passion_(Pat_Benatar_album) : genres hard rock, pop rock; producer Keith Olsen; personnel (Giraldo guitars + keyboards, Sheets guitar, Capps bass, Grombacher drums); covers (Young Rascals, Kate Bush: excluded from sounds_like/influences); ratings AllMusic 4.5, MusicHound 4, RS Album Guide 3, EPM 3, RS mixed; US #2, 4x Platinum; Grammy.
- https://en.wikipedia.org/wiki/Hell_Is_for_Children : anti-child-abuse song from NYT articles -> lyrics social.
- https://bestclassicbands.com/pat-benatar-crimes-passion-review-10-18-19/ : "garage-rock polished to a high sheen" (polish 4), "Hit Me" as power pop (powerpop, lead hit), guitar-led sound, wailing simmer-and-burst vocals (powerful); Olsen's pop/AOR blend likened to his Journey/Heart work -> sounds_like Heart|Journey (weak: comparison via the producer's past work).
- https://www.loudersound.com/features/the-pat-benatar-albums-you-should-definitely-own (search snippet): pop songs given arena-rock edge (arenarock); her definitive record and biggest seller (importance 5).
- Left empty: tempo, production, influenced_by (no documented influence found).

## philipglass-glassworks

# Glassworks (Philip Glass, 1982): sources
- https://en.wikipedia.org/wiki/Glassworks_(composition) : style postmodern, minimalist, systems music (citing NME, 10 Apr 1982); chamber music form; movement scoring (piano, flutes, soprano/tenor saxophones, horns, bass clarinet, clarinet, viola, cello, synthesizer); pop-oriented, "Walkman-suitable", short accessible studio pieces for a general audience (Glass quote); Floe borrows a Sibelius theme (quotation, so NOT an influence); AllMusic 4.5/5; commercial success and name recognition. Its Pitchfork 9.5 is for the Complete Sony Recordings box, not this album: not used in acclaim.
- https://thequietus.com/articles/08659-philip-glass-glassworks : Munkacsi's separate Walkman mix; minimalism; pop/classical meeting; AllMusic's John Young compares Opening to Erik Satie (sounds_like).
- https://www.qobuz.com/gb-en/album/glassworks-philip-glass-ensemble/5099708796822 : producers Kurt Munkacsi and Philip Glass; Riesman keyboards/conductor, Glass organ; violas, cellos, French horns, soprano/tenor sax, clarinet, bass clarinet, piccolo.
- https://www.wnyc.org/story/231895-top-10-essential-philip-glass-recordings : essential recordings list; NYT "footnote" remark (via search results).
- Production left empty: the separate LP / cassette (Walkman) mixes are documented but no token fits (could become `walkmanmix`).
## New tokens
- `systemsmusic` (genre): parents minimalism, classical.
- `postmodern` (genre, "postmodern music"): parents classical, contemporaryclassical.

## primalscream-screamadelica

# Primal Scream — Screamadelica (1991)
- https://en.wikipedia.org/wiki/Screamadelica — infobox alternative rock, alternative dance, neo-psychedelia, Madchester, dance-rock, acid house (+ baggy in text); Pitchfork (Cardew): house, blues, soul, dub, ambient, rave, psychedelic rock; producers Weatherall, Nicolson, The Orb, Hypnotone, Jimmy Miller; personnel (guitars, keyboards/piano, bass, drums/percussion; synths, gospel singers, strings, slide guitars); Loaded = Weatherall remix with drum loop; samples (Can, Sly Stone, Vangelis, Eno, Dr. John); Gillespie "listened to [The Marble Index] all the time" while making it; songs got softer after Pet Sounds; Mercury Prize; ratings, lists, certs.
- https://albumism.com/features/primal-scream-screamadelica-album-anniversary — Movin' On Up gospel vocals "call to mind" the Stones' Gimme Shelter (→ The Rolling Stones (Let It Bleed)); piano/acoustic guitar on Damaged; themes drug euphoria, spiritual, escapism, heartbreak, tender love song; Gillespie "warbling" vocals.
- Excluded from sounds_like: The Orb (producer), Jah Wobble/PiL (guest), 13th Floor Elevators (covered original). General band influences (MC5, Love, Stooges, Siouxsie...) not album-specific, left out.

## ronettes-presentingthefabulousronettesfeaturingveronica

# The Ronettes — Presenting the Fabulous Ronettes Featuring Veronica (1964)
- https://en.wikipedia.org/wiki/Presenting_the_Fabulous_Ronettes — only studio album, collects 1963–64 singles; genre pop; producer Phil Spector, arranger Jack Nitzsche, engineer Larry Levine, Gold Star; session credits (pianos, bass, drums, guitars, horns = saxophonists Steve Douglas/Jay Migliori, percussion); Record Mirror 4/5; RS 500 #422 (2003), #494 (2023); songwriters Barry/Greenwich, Mann/Weil, Poncia/Andreoli + Spector.
- https://en.wikipedia.org/wiki/Be_My_Baby (lead single, opens side two) — Wall of Sound, full orchestra (strings), castanets, handclaps, tambourine, heavy drum reverb; Ronnie's lead overdubbed; Nitzsche on her vibrato; labelled pop and R&B (rnb in 2nd place via the lead single rule).
- Voice, sounds_like, influenced_by left empty: no source found for this album (Ronnie's Frankie Lymon model is artist-level, not album-documented).
- mainstream 4: production-line singles (Brill Building writers, Wrecking Crew, producer-driven), though Spector's style is itself auteur — debatable 3–4.

## saintetienne-foxbasealpha

# saintetienne-foxbasealpha — Saint Etienne, Foxbase Alpha (1991)
- https://en.wikipedia.org/wiki/Foxbase_Alpha: infobox genres indie pop, ambient dance, sophisti-pop, synth-pop, techno; house/club culture and 60s pop; produced by Saint Etienne, Ian Catt engineer and co-producer (Kiss and Make Up versions); liner-note gear: Roland Jupiter-4, Korg M1 (Stanley), Prophet-5, E-mu Emax sampler, bongos (Wiggs), Catt guitars/programming, tambourine, bass; samples (Dusty Springfield, Wilson Pickett, Youthman riddim, House of Games dialogue) — samples NOT used as influences; OMD Dazzle Ships named by the band as an influence; ratings and lists (Pitchfork 8.7, Observer 5, Mercury shortlist, 1001, Pitchfork indie-pop 90s, AllMusic 3.5, RSAG 3), UK #34.
- https://www.vice.com/en/article/26-years-later-the-story-behind-saint-etiennes-genre-bending-debut-foxbase-alpha : influences De La Soul, PM Dawn, house and techno; Cracknell cites Elizabeth Fraser (Cocteau Twins) for voice as instrument; covers of Neil Young and The Field Mice (excluded); Simon Reynolds compares it to Primal Scream's Screamadelica (sounds_like); hip-hop, acid house genres; untrained vocals, recorded at home (polish 2).
- Search summary (Guardian/Michael Hann via inkl, blocked): Stanley calls it a scrapbook of house, disco, dub, folk, pop (genres disco, dub, folk). Stanley 2009: too uncommercial (mainstream 2).
- lyrics left empty: no source discusses album themes.
- NEW TOKEN: `ambientdance` (infobox "ambient dance"); suggested parents: electronic, dance, ambient.

## springsteen-borntorun

# Born to Run (1975): sources
- https://en.wikipedia.org/wiki/Born_to_Run : genres (rock and roll, pop rock, R&B, folk rock); producers Springsteen/Appel/Landau (Iovine, Lahav engineers, excluded); personnel and instruments (Bittan piano/glockenspiel/harpsichord/organ, Federici organ, Clemons sax, Sancious Fender Rhodes and possible synth, Brecker/Sanborn horns, Suki Lahav violin, Calello strings, Richard Davis double bass); wall-of-sound, 72-to-16-track overdubbing; Springsteen's stated influences (Duane Eddy, Roy Orbison, Elvis, Phil Spector, Beach Boys, Dylan) -> influenced_by; Frank Rose's girl-group comparison (Shirelles, Ronettes, Shangri-Las) and Chuck Berry comparison -> sounds_like; themes (escape, loneliness, working-class, nostalgia, religious searching); Christgau "white-soul-at-the-opera-house" -> theatrical 5.
- Reception (same page, ratings tables): AllMusic 5, RS Album Guide 5, Q 5, Christgau A, Pitchfork 10 (30th anniv.), RS 500 #18/#18/#21, Larkin #20, Pazz & Jop #3, NRR 2003, US #3, 7x Platinum.
- Left out: Stax / Bo Diddley beat (track-level borrowing/comparison), Jimmy Iovine (engineer).

## tlc-crazysexycool

# tlc-crazysexycool: sources
- https://en.wikipedia.org/wiki/CrazySexyCool: genres R&B, hip-hop soul (infobox); text cites new jack swing, funk; AllMusic (Erlewine) "smooth, seductive collection of contemporary soul", compares to Philly soul (and Prince); Rolling Stone ties Waterfalls to Memphis soul; RS 500 entry: most soulful girl-group R&B since the Supremes (sounds_like The Supremes). Producers; personnel: guitars, horns (horn arrangements on Waterfalls), keyboards incl. Wurlitzer, drum programming, bass, MIDI/sound design, scratching (turntables). Left Eye raps. Themes: sexuality, romance, coming of age; Waterfalls on drugs and HIV. Ratings and lists, charts, 12x Platinum.
- Prince NOT in sounds_like: the Prince comparison is tied to the cover "If I Was Your Girlfriend" (original of covered song rule). Guests (Phife Dawg, Cee-Lo, Busta etc.) not listed.
- influenced_by empty: no documented influences found.
- Doubt: mainstream 3 vs 4 (roster of hitmaker producers); chose 3 given critics' "rebellious" reading.

## toriamos-littleearthquakes

# Tori Amos — Little Earthquakes (1992)
- https://en.wikipedia.org/wiki/Little_Earthquakes — producers (Amos, Rosse, Sigerson, Stanley); personnel (piano, Yamaha CP-80/grand, guitar, bass, drums, mandolin, ukulele, dulcimer, violin, oboe, saw, sampled strings; orchestra arr./cond. Nick DeCaro); themes (guilt, failed relationships, sexual alienation, childhood trauma); comparisons Kate Bush, Jane Siberry (RS "artfolk"), Siouxsie Sioux (vocal holler), Mary Margaret O'Hara (LA Times); RS "subtly progressive song cycle" (prog); "Leather" a "Kurt Weill-meets-Queen cabaret act" (cabaret, one track, tail); AllMusic "female singer/songwriter" template; ratings and lists (AllMusic 5, Pitchfork 8.6, RS 500 #233, Q #66, Larkin #73, 1001); certs.
- Older Wikipedia infobox snapshot (mirror): alternative rock, piano rock. Irish Times genre "Singer/Songwriter".
- https://tunetempest.co.uk/?p=9890 (weak blog) — baroque pop hints (tail).
- https://www.slantmagazine.com/music/tori-amos-little-earthquakes-retrospective-review/ — "high-art, prog-rock fashions".
- influenced_by left empty: no album-specific influence found (Keyboard 1994 Led Zeppelin is general childhood; Crucify EP covers are not influences).
- New token: `artfolk` (RS "artfolk") — parents folk, songwriter.

## tricky-maxinquaye

# Tricky — Maxinquaye (1995)
- https://en.wikipedia.org/wiki/Maxinquaye — infobox trip hop, experimental, dub, electronic, R&B, post-rock, British hip hop; text hip hop, soul, rock, ambient techno, reggae, electronica, underground hip hop; Walsh (Independent) soul, rock, punk...; producers Tricky, Mark Saunders, Howie B, Kevin Petrie; gear Akai S1000, Atari 1040 (ST) + Logic, Alesis ADAT, Mackie 1604; guitars (Saunders, Stevenson), bass (Briquette), drums (FTV); dub-influenced methods, kept glitches and crackles, Christgau "lo-fi"; Topley-Bird soft-spoken, single takes; Tricky whispered/drawled raps; themes cultural decline, dysfunctional sex, drugs, mother; ratings, polls, certs.
- https://reynoldsretro.blogspot.com/2018/07 (Simon Reynolds, Spin 1999 / Village Voice / Melody Maker 1995) — Tricky listened to Billie Holiday and the Geto Boys while making the album (influenced_by, medium); Reynolds links it to Sly Stone's There's a Riot Goin' On, Ponderosa percussion to Tom Waits' Swordfishtrombones, method to King Tubby (sounds_like).
- Excluded: Massive Attack (Tricky's own former band), Public Enemy (Black Steel is a cover), Isaac Hayes (sample), Martina Topley-Bird (vocalist).
- New token: `undergroundhiphop` — parents hiphop, alt.

## ub40-labouroflove

# Labour of Love (UB40, 1983): sources
- https://en.wikipedia.org/wiki/Labour_of_Love : infobox genres reggae, post-punk; producers UB40 and Ray "Pablo" Falconer; covers of 1969-72 reggae songs the band loved; recorded 1982-83 (Manor Mobile, own Abattoir studio); LinnDrums and synthesised basslines (drummachine, synthbass, linndrum); members' instruments (drums, guitars, bass, percussion, saxophone, keyboards, Astro's toasting); NME: "honey-smooth", "gentle, sometimes caressing, a shallow groove" (polish, energy, groove); Kurt Loder "buoyant period spirit" (mood); Ali Campbell: covers were a radio compromise, "we commercialize our music all the time" and Mojo on reliance on surefire-hit cover albums (mainstream 4); ratings AllMusic 4.5, RS 4, Mojo 4, Q 3, Christgau A-; RS 100 Greatest of the 80s #98; UK #1, 2x Platinum, US #14 (1988).
- Lyrics love/heartbreak/social come from the covered songs' content (Red Red Wine, Cherry Oh Baby, Johnny Too Bad): medium confidence.
- sounds_like and influenced_by empty: originals of the covers (Eric Donaldson, Tony Tribe, Jimmy Cliff, The Melodians...) are excluded; Melody Maker's Bowie Pin Ups / Ferry These Foolish Things comparison is about the covers concept, not the sound. voice left empty (no source describes Ali Campbell's voice; Astro's toasting only on some tracks).
## New tokens
- none.

## yes-closetotheedge

# Close to the Edge (Yes, 1972): sources
- https://en.wikipedia.org/wiki/Close_to_the_Edge : genre progressive rock; producers Yes + Eddy Offord (co-producer); personnel/instruments (Howe electric/acoustic guitars, Coral electric sitar, sitar, pedal steel; Wakeman pianos, Hammond, Minimoog, Mellotron, harpsichord, pipe organ; Squire bass; Bruford drums/percussion); 40-ft tape loop with water/birdsong (tapeloops, fieldrecordings); spliced master tape, audible edit (analogtape); wooden stage for live resonance, swung mic for Doppler effect (roomambience); folk-infused And You and I (folk, long tail), hymn-like / search for truth (lyrics spiritual, love); Siddhartha-based metaphorical lyrics (spiritual, introspection); scat vocal harmonies (choral); influences stated by Anderson/Howe: Sibelius Symphonies 6-7, Wendy Carlos Sonic Seasonings, Mahavishnu Orchestra (opening), Stravinsky (Khatru coda). Ratings: AllMusic 5, Pitchfork 9.0, RS Record Guide 5, RS Album Guide 4, Christgau C+, NME 1972 mixed; RS 500 (2020), RS prog #5, Prog #1, Larkin #130, 1001 Albums; US #3, UK #4; Platinum US/UK/CA.
- https://www.sputnikmusic.com/review/75995/Yes-Close-to-the-Edge : sets Yes against Pink Floyd, Genesis, Jethro Tull (sounds_like; semi-pro source, weak).
- Not used: King Crimson (Bruford's next band), Tolkien/Hesse (books, not artists).
## New tokens
- none (pipe organ and Hammond -> `organ`).
