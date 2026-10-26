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
  spicegirls: {
    names: ['Madonna', 'Michael Jackson'],
    source: 'Geri Halliwell, memoir excerpt in Marie Claire ("pop music like early Madonna and Michael Jackson"); Melanie C, Interview magazine',
  },
}
