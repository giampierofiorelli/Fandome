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
