// Influences an artist has named for their work as a whole (interviews, biographies), not tied to one album.
// Album-specific influences stay in the descriptor column `influenced_by`. Used by "If you like this artist":
// a named artist that is described on Fandome gets one of the reserved places. Keep the source.
export const ARTIST_INFLUENCES: Record<string, { names: string[]; source: string }> = {
  katyperry: {
    names: ['Freddie Mercury', 'Queen', 'Madonna', 'Alanis Morissette', 'Gwen Stefani', 'Cyndi Lauper', 'Björk', 'The Beach Boys', 'Amy Grant', 'Stevie Nicks', 'ABBA', 'Whitney Houston', 'Mariah Carey', 'Joni Mitchell', 'Paul Simon', 'P!nk'],
    source: 'Wikipedia, Katy Perry, Artistry/Influences (NME 2008; MTV "I want to evolve like Madonna"; Billboard Q&A; NPR; ContactMusic)',
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
  spicegirls: {
    names: ['Madonna', 'Michael Jackson'],
    source: 'Geri Halliwell, memoir excerpt in Marie Claire ("pop music like early Madonna and Michael Jackson"); Melanie C, Interview magazine',
  },
}
