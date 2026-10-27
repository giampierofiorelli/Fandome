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
