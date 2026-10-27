// Influences an artist has named for their work as a whole (interviews, biographies), not tied to one album.
// Album-specific influences stay in the descriptor column `influenced_by`. Used by "If you like this artist":
// a named artist that is described on Fandome gets one of the reserved places. Keep the source.
export const ARTIST_INFLUENCES: Record<string, { names: string[]; source: string }> = {
  katyperry: {
    names: ['Freddie Mercury', 'Queen', 'Madonna', 'Alanis Morissette', 'Gwen Stefani', 'Cyndi Lauper', 'Björk', 'The Beach Boys', 'Amy Grant', 'Stevie Nicks', 'ABBA', 'Whitney Houston', 'Mariah Carey', 'Joni Mitchell', 'Paul Simon', 'P!nk'],
    source: 'Wikipedia, Katy Perry, Artistry/Influences (NME 2008; MTV "I want to evolve like Madonna"; Billboard Q&A; NPR; ContactMusic)',
  },
  queen: {
    names: ['The Beatles', 'Led Zeppelin', 'Jimmy Page', 'The Who', 'Jimi Hendrix', 'Rory Gallagher', 'Buddy Holly', 'The Crickets', 'The Everly Brothers', 'Free', 'Eric Clapton', 'Liza Minnelli'],
    source: 'ChatGPT influence audit (docs/descriptors/research/queen-phase01-chatgpt-import-notes.md): Brian May in Guitar World interviews and on brianmay.com (2015, Rory Gallagher); PBS American Masters (Freddie Mercury on Liza Minnelli)',
  },
  janet: {
    names: ['Stevie Wonder', 'Marvin Gaye', 'Sly and the Family Stone', 'The Jackson 5', 'Michael Jackson', 'Prince', 'Earth, Wind & Fire'],
    source: 'ChatGPT influence audit (docs/descriptors/research/janet-phase01-chatgpt-import-notes.md): CNN Larry King Live 2001 (Stevie Wonder, Marvin Gaye, Sly and the Family Stone, her brothers); Heart 2024 interview (Jackson 5, Michael Jackson, Prince, Earth, Wind & Fire)',
  },
  kylie: {
    names: ['Prince', 'ABBA', 'Olivia Newton-John', 'Donna Summer', 'Madonna', 'Whitney Houston', 'Cyndi Lauper', 'Fleetwood Mac'],
    source: 'ChatGPT influence audit (docs/descriptors/research/kylie-phase01-chatgpt-import-notes.md): Vogue 2024 (Prince, ABBA, Olivia Newton-John, Donna Summer); ELLE 2020 (Madonna, Whitney Houston, Cyndi Lauper, Fleetwood Mac, lower strength)',
  },
  marina: {
    names: ['Kate Bush', 'PJ Harvey', 'Fiona Apple', 'The Distillers', 'Brody Dalle', 'The Dresden Dolls', 'Daniel Johnston', 'Madonna', 'Britney Spears', 'Emily Haines', 'The Shangri-Las', 'Röyksopp', 'Garbage', 'Shirley Manson', 'Patti Smith'],
    source: 'ChatGPT influence audit (docs/descriptors/research/marina-phase01-chatgpt-import-notes.md): Glitter 2015, Irish Times 2012, Drowned in Sound 2012, Wonderland 2012, VICE 2015, The Line of Best Fit (Froot), Glamour',
  },
  lanadelrey: {
    names: ['Nina Simone', 'Billie Holiday', 'Eagles', 'The Eagles', 'The Beach Boys', 'Bob Dylan', 'Lou Reed', 'Cat Power', 'Father John Misty', 'Frank Sinatra', 'Elvis Presley', 'Nirvana', 'Eminem', 'Joan Baez', 'Stevie Nicks', 'Britney Spears', 'Thomas Newman', 'Bruce Springsteen'],
    source: 'ChatGPT influence audit (docs/descriptors/research/lanadelrey-phase01-chatgpt-import-notes.md): Aftonbladet (Nina Simone, Billie Holiday); antiMusic 2014 (Eagles, Beach Boys); The FADER 2014 (Dylan, Lou Reed); NME (Cat Power, Father John Misty, Sinatra, Elvis, Nirvana, Eminem); Biography.com (Baez, Nicks, Britney Spears); Just Jared 2011 (Thomas Newman, Springsteen)',
  },
  billie: {
    names: ['Tyler, the Creator', 'Drake', 'Earl Sweatshirt', 'A$AP Rocky', 'Miguel', 'The Beatles', 'Green Day', 'Avril Lavigne', 'Lana Del Rey', 'Julie London', 'Peggy Lee', 'Frank Sinatra'],
    source: 'ChatGPT influence audit (docs/descriptors/research/billie-phase01-chatgpt-import-notes.md): PAPER 2017 and Teen Vogue 2017 interviews (rappers, the Beatles, Green Day, Avril Lavigne, Lana Del Rey, Sinatra); Los Angeles Times and ELLE 2021 (Julie London, Peggy Lee)',
  },
  lorde: {
    names: ['James Blake', 'Etta James', 'Fleetwood Mac', 'Otis Redding', 'Robyn', 'Kate Bush'],
    source: 'ChatGPT influence audit (docs/descriptors/research/lorde-phase01-chatgpt-import-notes.md): GRAMMY.com interview (James Blake, Etta James, Fleetwood Mac, Otis Redding); iHeart 2017 (Robyn); triple j 2017 (Kate Bush on Writer in the Dark)',
  },
  beberexha: {
    names: ['No Doubt', 'The Cranberries', 'Destiny’s Child', 'Kanye West', 'Lauryn Hill', 'Queen', 'The Killers', 'Twenty One Pilots', 'Aerosmith', 'Nirvana', 'Led Zeppelin', 'Red Hot Chili Peppers'],
    source: 'ChatGPT influence audit (docs/descriptors/research/beberexha-phase01-chatgpt-import-notes.md): Hashtag Legend interview (No Doubt, The Cranberries, Destiny’s Child, Kanye West, Lauryn Hill); GRAMMY.com 2021 Better Mistakes interview (rock influences); NME 2018 (No Doubt on Expectations)',
  },
  taylorswift: {
    names: ['Joni Mitchell', 'The Chicks', 'Dixie Chicks', 'Fall Out Boy', 'Paramore', 'Shania Twain'],
    source: 'ChatGPT influence audit (docs/descriptors/research/taylorswift-phase01-chatgpt-import-notes.md): Recording Academy 2024 (Joni Mitchell via Rhapsody; The Chicks via Billboard 2020; Fall Out Boy and Paramore, Speak Now (Taylor’s Version) 2023); ABC News 2021 (Shania Twain TikTok)',
  },
  miley: {
    names: ['Britney Spears', 'Metallica', 'Dolly Parton', 'Joan Jett', 'Stevie Nicks'],
    source: 'ChatGPT influence audit (docs/descriptors/research/miley-phase01-chatgpt-import-notes.md): Us Weekly 2013 (Britney Spears); Official Charts 2020 (Britney Spears and Metallica); Variety 2026 (Dolly Parton, Joan Jett, Stevie Nicks as mentors and formative legends)',
  },
  beyonce: {
    names: ['Michael Jackson', 'Tina Turner', 'Mariah Carey', 'Janet Jackson', 'Prince', 'Aretha Franklin', 'Diana Ross', 'Fela Kuti', 'Earth, Wind & Fire', 'DeBarge', 'Lionel Richie', 'Teena Marie', 'The Jackson 5', 'New Edition', 'Adele', 'Florence + The Machine'],
    source: 'ChatGPT influence audit (docs/descriptors/research/beyonce-phase01-chatgpt-import-notes.md): Gigwise (Michael Jackson), Yahoo (Tina Turner), The New Yorker 2006 (Mariah Carey), GRAMMY.com (Janet Jackson), GQ 2013 (Prince, Aretha Franklin, Diana Ross), The Guardian, NME and HipHop-N-More 2011 (the inspirations for 4)',
  },
  shakira: {
    names: ['Led Zeppelin', 'The Cure', 'The Police', 'The Beatles', 'Nirvana', 'Radiohead', 'The Rolling Stones'],
    source: 'ChatGPT influence audit (docs/descriptors/research/shakira-phase01-chatgpt-import-notes.md): Shakira interview, Today’s Outlook; AllMusic biography; The Guardian 2007 (Radiohead); Associated Press 2026 (the Rolling Stones)',
  },
  rondoveneziano: {
    names: ['Johann Sebastian Bach'],
    source: 'ChatGPT influence audit (docs/descriptors/research/rondoveneziano-phase01-chatgpt-import-notes.md): official history, rondoveneziano.com/en/our-history (Gian Piero Reverberi enchanted by Bach as a young player)',
  },
  goblin: {
    names: ['Genesis', 'King Crimson', 'The Beatles', 'The Rolling Stones', 'Emerson, Lake & Palmer', 'Keith Emerson', 'Yes'],
    source: 'ChatGPT influence audit (docs/descriptors/research/goblin-phase01-chatgpt-import-notes.md): Claudio Simonetti, Red Bull Music Academy lecture 2004; FACT 2014 (Moog on Suspiria chosen out of admiration for Keith Emerson)',
  },
  morricone: {
    names: ['Carl Maria von Weber', 'Igor Stravinsky', 'Goffredo Petrassi'],
    source: 'ChatGPT influence audit (docs/descriptors/research/morricone-phase01-chatgpt-import-notes.md): BFI (Weber, first attempts at composing); The Independent interview (Stravinsky); Messaggero di Sant’Antonio interview (Petrassi, his teacher)',
  },
  battiato: {
    names: ['Karlheinz Stockhausen', 'John Cage', 'Johann Sebastian Bach', 'Musica Elettronica Viva', 'Bob Dylan', 'Giusto Pio'],
    source: 'ChatGPT influence audit (docs/descriptors/research/battiato-artist_influences*.csv): Battiato 2007 and 2013 interviews (Stockhausen, disputed by Stefano Pio), Camisasca (Stockhausen, Cage), Rockol (Bach on Fetus), Stefano Pio (MEV), HHV Mag (Dylan, 1960s), Giusto Pio interviews',
  },
  fontainesdc: {
    names: ['The Dubliners', 'Girl Band', 'The Pogues', 'The Rolling Stones', 'The Beach Boys'],
    source: 'So Young Magazine 2018 ("Our influences include the Dubliners and Girl Band"; The Pogues, The Rolling Stones); Dork 2018 (The Beach Boys). Album-specific influences are in docs/descriptors/fontainesdc.csv',
  },
  neworder: {
    names: ['Kraftwerk', 'Giorgio Moroder', 'Donna Summer', 'Can', 'Neu!', 'The Velvet Underground'],
    source: 'Stephen Morris (Julien\'s Auctions tribute to Florian Schneider; Electronic Beats "Tanks for the beats": Can, Neu!, Maureen Tucker); Bernard Sumner (The New European; 2015 interview: Kraftwerk, Neu!, Donna Summer); Peter Hook (Under the Radar: Moroder); Guardian 2023 Blue Monday inspirations',
  },
  tameimpala: {
    names: ['Air', 'My Bloody Valentine', 'The Flaming Lips', 'Supertramp', 'The Doors', 'Blue Cheer', 'Bee Gees'],
    source: 'Kevin Parker: Guardian 2013 (Air, Talkie Walkie); Los Angeles Times 2010 (My Bloody Valentine, Blue Cheer); i-D and Jambands 2015 (The Flaming Lips, The Doors); Sound Opinions 2013 (Supertramp); NME 2015 (Bee Gees, Currents)',
  },
  verve: {
    names: ['Joy Division', 'John Martyn', 'The Durutti Column', 'Funkadelic', 'Richard Thompson', 'Television', 'Jimi Hendrix', 'Can', 'Public Image Ltd', 'Curtis Mayfield', 'Marvin Gaye', 'Sly and the Family Stone', 'The Beatles', 'Pink Floyd', 'The Stone Roses'],
    source: 'Nick McCabe: Total Guitar 1998, Coney\'s Loft Q&A 2016, MusicRadar; Richard Ashcroft: 1997 interview (Stuber), Los Angeles Times 1998',
  },
  talkingheads: {
    names: ['Roxy Music', 'Al Green', 'Smokey Robinson', 'Otis Redding', 'James Brown', 'Fela Kuti', 'Parliament', 'Funkadelic', 'Hamilton Bohannon'],
    source: 'Chris Frantz (Louder; The Quietus: Roxy Music, Al Green, Smokey Robinson, Otis Redding); David Byrne (Pitchfork 5-10-15-20: James Brown, Parliament, Funkadelic, Bohannon); Eno and Byrne (Guardian 2009) and GRAMMY.com 2020 on Fela Kuti',
  },
  joydivision: {
    names: ['Kraftwerk', 'Can', 'Faust', 'The Doors', 'The Velvet Underground', 'Iggy Pop', 'John Cale', 'David Bowie', 'Sex Pistols'],
    source: 'Peter Hook (NME 2020: Kraftwerk, The Doors; Bristol24/7: Can, Faust; The Independent: Iggy Pop; Jon Savage, This Searing Light, Guardian 2019: The Velvet Underground, John Cale); Stephen Morris (Getintothis 2019: Jaki Liebezeit); Classic Pop (Berlin-era Bowie, secondary); Pitchfork 2007 (Sex Pistols, early DIY ethos)',
  },
  felakuti: {
    names: ['James Brown'],
    source: 'en.wikipedia, Fela Kuti (James Brown "an important American influence"); Okayplayer, How Fela Kuti channeled James Brown\'s funk',
  },
  tonyallen: {
    names: ['Art Blakey', 'Max Roach', 'Guy Warren'],
    source: 'Tony Allen in Clash (Art Blakey his idol); Afropop Worldwide, Remembering Tony Allen; Mail & Guardian 2020 (Max Roach); en.wikipedia (Guy Warren)',
  },
  femikuti: {
    names: ['Fela Kuti', 'John Coltrane', 'Duke Ellington', 'Herbie Hancock'],
    source: 'Femi Kuti, UK Jazz News interview, 24 Oct 2013',
  },
  kingsunnyade: {
    names: ['Tunde Nightingale'],
    source: 'en.wikipedia, King Sunny Adé (played with Nightingale and borrowed his so wa mbe jùjú style)',
  },
  harrystyles: {
    names: ['The Rolling Stones', 'The Beatles', 'Fleetwood Mac', 'Queen', 'Elvis Presley', 'Shania Twain', 'Savage Garden', 'Norah Jones'],
    source: 'Harry Styles, NPR interview on Fine Line (Feb 2020): the artists he grew up with',
  },
  notwist: {
    names: ['Dinosaur Jr.', 'Neil Young', 'Jerry’s Kids', 'Minor Threat', 'Rites of Spring', 'Moving Targets', 'Wipers', 'Pitchfork', 'Sonic Youth', 'Hüsker Dü', 'Talk Talk', 'Stereolab', 'Autechre', 'Can', 'Neu!', 'Gil Evans', 'Mike Oldfield', 'The Police', 'Billy Cobham'],
    source: 'Markus Acher: Pitchfork interview; 15 Questions; Los Angeles Times 2003; Rock Obrobje and The Skinny (late Talk Talk; Stereolab, Autechre, Can, Neu!, Gil Evans)',
  },
  mgmt: {
    names: ['The Flaming Lips', 'Psychic TV', 'Chrome', 'Spiritualized', 'Spacemen 3', 'Suicide', 'Royal Trux', 'Television Personalities', 'Roxy Music', 'Neil Young', 'Skip Spence', 'Mayo Thompson', 'Phish'],
    source: 'MGMT: Song Exploder via Pitchfork (Flaming Lips); Caught in the Crossfire 2008; Pitchfork interview 2010; Electronic Beats 2013 (Skip Spence, Mayo Thompson); Relix/Jambands 2013 (Phish)',
  },
  duranduran: {
    names: ['Roxy Music', 'David Bowie', 'Chic', 'Sex Pistols', 'Giorgio Moroder', 'Japan', 'Kraftwerk', 'Ultravox', 'The Human League', 'T. Rex', 'Sparks', 'Siouxsie and the Banshees', 'The Cure', 'The Clash', 'The Damned'],
    source: 'duranduran.com interviews: Simon Le Bon 2012 (Roxy Music, Chic, Sex Pistols), Roger Taylor 2011-2012 (Bowie, Roxy Music, Japan, Kraftwerk, Ultravox), Nick Rhodes 2021-2022 (Moroder, Human League Reproduction); Vogue 2021 (T. Rex, Sparks, Siouxsie, The Cure, The Clash, The Damned)',
  },
  alphaville: {
    names: ['Orchestral Manoeuvres in the Dark', 'Tubeway Army', 'Gary Numan', 'David Bowie', 'Roxy Music', 'Kraftwerk', 'The Human League', 'Rupert Hine', 'Scott Walker', 'Steve Harley', 'Cockney Rebel', 'David Sylvian', 'Punishment of Luxury', 'Eyeless in Gaza', 'The Associates', 'Tim Curry', 'Brian Protheroe', 'Seventh Wave', 'Sex Pistols', 'The Clash', 'Queen', 'Freddie Mercury'],
    source: 'Marian Gold: Classic Pop 2025 (OMD, Tubeway Army, Gary Numan), harmony.fm 2024 (OMD Electricity, Freddie Mercury), Die Presse 2023 (Bowie, Sex Pistols, The Clash), 1999-2000 fan Q&A archive (Roxy Music, Kraftwerk, Human League, Rupert Hine, Scott Walker, Steve Harley, Sylvian and others), Berliner Zeitung',
  },
  psb: {
    names: ['Bobby Orlando', 'The Flirts', 'Soft Cell', 'Grandmaster Flash and the Furious Five', 'David Bowie', 'Giorgio Moroder', 'Phil Spector', 'The Beatles', 'Grace Jones', 'ABC', 'Art of Noise'],
    source: 'Tennant and Lowe: Magnet 2016 (Bobby Orlando, Soft Cell), The Independent (The Flirts), This Is Not Retro 2004 (The Message), BBC This Cultural Life (Bowie), Classic Pop on Behaviour (Moroder) and on Introspective (Spector, Beatles, Grace Jones, ABC, Art of Noise)',
  },
  rhcp: {
    names: ['Grandmaster Flash', 'Parliament', 'Funkadelic', 'Ohio Players', 'The Brothers Johnson', 'James Brown', 'Louis Armstrong', 'Jimi Hendrix', 'Jeff Beck', 'Gang of Four', 'Led Zeppelin', 'Earth, Wind & Fire'],
    source: 'Anthony Kiedis: CBS 60 Minutes 2023 (Grandmaster Flash), Washington Post 1990 (P-Funk); Flea: Guitar World 1991 (Parliament/Funkadelic, Ohio Players, Brothers Johnson, James Brown, Louis Armstrong), Mojo (Hendrix, Jeff Beck, Gang of Four via Hillel Slovak), Forbes 2022 (Led Zeppelin, Earth Wind & Fire); John Frusciante: MusicRadar (Hendrix)',
  },
  depeche: {
    names: ['Kraftwerk', 'The Human League', 'Orchestral Manoeuvres in the Dark', 'David Bowie'],
    source: 'Daniel Miller, MusicRadar (Kraftwerk); Vince Clarke, The Quietus 2013 and Tape Op #150; Martin Gore, Moogfest 2019 with Daniel Miller; Dave Gahan, Rolling Stone 2017 (Bowie)',
  },
  pearljam: {
    names: ['Jimi Hendrix', 'Stevie Ray Vaughan', 'B.B. King', 'Iron Maiden', 'Judas Priest', 'Kiss', 'Aerosmith', 'Led Zeppelin', 'Simon & Garfunkel', 'The Stooges', 'Ramones', 'The Clash', 'Sex Pistols', 'The Who', 'The Beatles', 'The Band', 'Talking Heads', 'Sonic Youth', 'Fugazi', 'Neil Young'],
    source: 'Mike McCready: Guitar World (Ten; Stevie Ray Vaughan); Stone Gossard: Stereogum; Jeff Ament: Guitar World, 12stringbass.net; Eddie Vedder: American Songwriter (with Springsteen), Louder (Neil Young, Merkin Ball)',
  },
  nirvana: {
    names: ['Wipers', 'Pixies', 'The Vaselines', 'Melvins', 'The Jesus Lizard', 'The Breeders'],
    source: 'Kurt Cobain: Rolling Stone 1994 (Pixies), Rolling Stone AU on Greg Sage (Wipers), Live Nirvana interviews (Vaselines; Breeders for In Utero), kurtcobain.com (Melvins); Dave Grohl: Live Nirvana 1993 (The Jesus Lizard, In Utero)',
  },
  gnr: {
    names: ['Aerosmith', 'Led Zeppelin', 'The Rolling Stones', 'The Who', 'B.B. King', 'The Yardbirds', 'The Kinks', 'The Beatles', 'AC/DC', 'Black Sabbath', 'Cheap Trick', 'Queen', 'Elton John', 'The Stooges', 'New York Dolls', 'Sex Pistols', 'Black Flag'],
    source: 'Slash: Kerrang (Aerosmith, Rocks), zZounds interview (Led Zeppelin, The Who, B.B. King), Hot Press (Rolling Stones), The List via Blabbermouth (AC/DC, Sabbath, Cheap Trick); Steven Adler via Blabbermouth (Axl: Queen, Elton John; Izzy: Stooges, New York Dolls, Sex Pistols; Duff: Black Flag); MusicRadar (Elton John, November Rain)',
  },
  talktalk: {
    names: ['Otis Redding', 'John Coltrane', 'Burt Bacharach', 'Claude Debussy', 'Dmitri Shostakovich', 'Miles Davis', 'Gil Evans', 'John Cage', 'Maurice Ravel', 'Ornette Coleman', 'Olivier Messiaen', 'John Lee Hooker', 'Béla Bartók', 'Erik Satie', 'Darius Milhaud'],
    source: 'Mark Hollis: Guardian 2019 (1982 interviews); Pitchfork 2019; Jason Cowley, Out of Time (1998 interview); Classic Pop, The Colour of Spring',
  },
  placebo: {
    names: ['Sonic Youth', 'Pixies', 'PJ Harvey', 'David Bowie', 'Joy Division', 'The Cure', 'Nick Cave', 'Dead Kennedys', 'Iggy Pop', 'The Stooges'],
    source: 'Brian Molko: Hot Press (Androgyny in the UK); The Independent (All made up with somewhere to go); Jam! Music 1998 interview (The Cure, Nick Cave, Dead Kennedys, PJ Harvey)',
  },
  rem: {
    names: ['Patti Smith', 'Television', 'The Velvet Underground', 'Big Star', 'The Byrds', 'Wire', 'The B-52’s'],
    source: 'Michael Stipe: Pitchfork 5-10-15-20 (Patti Smith, Horses); Jon Savage interview, The Quietus (Television); Los Angeles Times 2021 (Velvet Underground); Rolling Stone Germany (B-52s); Mike Mills, Flagpole 2014 (Big Star); Peter Buck, NPR Fresh Air (The Byrds); The Independent (Wire, lower confidence)',
  },
  pumpkins: {
    names: ['Black Sabbath', 'My Bloody Valentine', 'The Cure', 'New Order', 'Bauhaus', 'Joy Division', 'Rush', 'The Who', 'Yes', 'Jethro Tull', 'Queen', 'Ramones', 'The Smiths'],
    source: 'Billy Corgan: Pitchfork (Sabbath), NME (My Bloody Valentine on Gish; The Cure), Ultimate Classic Rock (Rush, Cherub Rock), MusicRadar (The Who, Tonight Tonight), Self-Titled (Yes, Jethro Tull, Queen, Ramones); Jimmy Chamberlin, Alternative Nation (New Order, Bauhaus, Joy Division; Iha and Johnny Marr)',
  },
  skunkanansie: {
    names: ['Nirvana', 'Rage Against the Machine', 'The Smashing Pumpkins', 'Tool', 'The Prodigy', 'Led Zeppelin', 'Parliament', 'Sex Pistols', 'Blondie', 'Nina Simone'],
    source: 'Skin: Louder 2015, Kerrang!, Radio X, Ticketmaster (Led Zeppelin, Nina Simone, Blondie); Mark Richardson, Renowned for Sound (Led Zeppelin, Parliament, Sex Pistols)',
  },
  sinead: {
    names: ['Bob Dylan', 'John Lennon', 'Van Morrison', 'Nina Simone', 'Buju Banton', 'Sizzla', 'R. H. Harris', 'The Soul Stirrers', 'Aretha Franklin'],
    source: 'Sinéad O’Connor: Paul Freeman interview 2002 (Dylan, Lennon, Van Morrison, Nina Simone, Buju Banton, Sizzla); Trouser Press 2007 (Dylan, R. H. Harris and the Soul Stirrers); NPR/WCMU 2014 (Idiot Wind; Aretha Franklin, album sequencing)',
  },
  marlenekuntz: {
    names: ['Sonic Youth', 'Nick Cave', 'Tom Waits', 'The Gun Club', 'Fugazi', 'Soundgarden', 'Big Black', 'Swans', 'Thin White Rope', 'Helmet', 'CCCP Fedeli alla linea', 'Leonard Cohen', 'Bob Dylan', 'Johnny Cash'],
    source: 'Cristiano Godano: 1990 interview republished by Distorsioni (Sonic Youth, Nick Cave, Tom Waits, The Gun Club); OndaRock interview; SpazioRock 2017 (Fugazi, Soundgarden, Big Black, Swans, Thin White Rope, Helmet, CCCP for Sonica); la Repubblica 2026 (Soundgarden on Il vile); il Resto del Carlino (later: Cohen, Dylan, Cash)',
  },
  subsonica: {
    names: ['Pink Floyd', 'The Chemical Brothers', 'Massive Attack', 'Casino Royale'],
    source: 'OndaRock monograph (Clara Martinelli, Claudio Fabretti): their background in Pink Floyd psychedelia, British electronica (Chemical Brothers), trip-hop (Massive Attack) and Casino Royale; biographical, not first-person',
  },
  tiromancino: {
    names: ['Pino Daniele', 'Lucio Battisti', 'Lucio Dalla', 'Eric Clapton', 'Jimi Hendrix'],
    source: 'Federico Zampaglione: MyDreams 2019 (Pino Daniele); MadMass 2024 (Battisti, Dalla); Rolling Stone Italia 2021 (Clapton, Just One Night; Hendrix)',
  },
  spicegirls: {
    names: ['Madonna', 'Michael Jackson'],
    source: 'Geri Halliwell, memoir excerpt in Marie Claire ("pop music like early Madonna and Michael Jackson"); Melanie C, Interview magazine',
  },
}
