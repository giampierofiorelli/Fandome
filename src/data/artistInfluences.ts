// Influences an artist has named for their work as a whole (interviews, biographies), not tied to one album.
// Album-specific influences stay in the descriptor column `influenced_by`. Used by "If you like this artist":
// a named artist that is described on Fandome gets one of the reserved places. Keep the source.
export const ARTIST_INFLUENCES: Record<string, { names: string[]; source: string }> = {
  katyperry: {
    names: ['Freddie Mercury', 'Queen', 'Madonna', 'Alanis Morissette', 'Gwen Stefani', 'Cyndi Lauper', 'Björk', 'The Beach Boys', 'Amy Grant', 'Stevie Nicks', 'ABBA', 'Whitney Houston', 'Mariah Carey', 'Joni Mitchell', 'Paul Simon', 'P!nk'],
    source: 'Wikipedia, Katy Perry, Artistry/Influences (NME 2008; MTV "I want to evolve like Madonna"; Billboard Q&A; NPR; ContactMusic)',
  },
  spicegirls: {
    names: ['Madonna', 'Michael Jackson'],
    source: 'Geri Halliwell, memoir excerpt in Marie Claire ("pop music like early Madonna and Michael Jackson"); Melanie C, Interview magazine',
  },
}
