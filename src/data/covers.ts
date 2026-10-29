// Documented covers between albums on Fandome: the song, the album where it first appeared (original)
// and the album with the cover. Shown on both album pages and counted as a "covered" connection.
// Only covers credited on the record (songwriting credits, official discographies).
export interface Cover {
  song: string
  original: string // album id of the original recording
  cover: string // album id of the cover
  source: string
}

export const COVERS: Cover[] = [
  { song: 'Gloria', original: 'tozzi-gloria', cover: 'laurabranigan-branigan', source: 'Branigan (Atlantic 1982) credits: Tozzi, Bigazzi, English lyrics Trevor Veitch' },
  { song: 'Ti amo', original: 'tozzi-enellariatiamo', cover: 'laurabranigan-selfcontrol', source: 'Self Control (Atlantic 1984) credits: Tozzi, Bigazzi, English lyrics Diane Warren' },
  { song: 'Self Control', original: 'raf-raf', cover: 'laurabranigan-selfcontrol', source: 'Self Control (Atlantic 1984) credits: Raf (Raffaele Riefoli), Giancarlo Bigazzi, Steve Piccolo' },
  { song: 'Der Kommissar (as Deep in the Dark)', original: 'falco-einzelhaft', cover: 'laurabranigan-branigan2', source: 'Branigan 2 (Atlantic 1983): Deep in the Dark set to the music of Der Kommissar (Falco, Robert Ponger)' },
  { song: 'It’s the End of the World as We Know It', original: 'rem-document', cover: 'ligabue-acheoraelafinedelmondo', source: 'A che ora è la fine del mondo? (WEA 1994): Italian adaptation by Ligabue of the R.E.M. song (Berry, Buck, Mills, Stipe)' },
  { song: 'Il mio canto libero', original: 'battisti-ilmiocantolibero', cover: 'pausini-iocanto', source: 'Io canto (Warner 2006, Discogs 845227) credits: Mogol, Battisti' },
  { song: 'Destinazione paradiso', original: 'grignani-destinazioneparadiso', cover: 'pausini-iocanto', source: 'Io canto (Warner 2006, Discogs 845227) credits: Grignani, Bigazzi' },
  { song: 'Stella gemella', original: 'eros-dovecemusica', cover: 'pausini-iocanto', source: 'Io canto (Warner 2006, Discogs 845227) credits: Ramazzotti, Cassano, Cogliati' },
  { song: 'Come il sole all’improvviso', original: 'zucchero-rispetto', cover: 'pausini-iocanto', source: 'Io canto (Warner 2006, Discogs 845227) credits: Fornaciari' },
  { song: 'Spaccacuore', original: 'bersani-freak', cover: 'pausini-iocanto', source: 'Io canto (Warner 2006, Discogs 845227) credits: Bersani' },
  { song: 'Anima fragile', original: 'vasco-colpadalfredo', cover: 'pausini-iocanto', source: 'Io canto (Warner 2006, Discogs 845227) credits: Vasco Rossi' },
  { song: 'Non me lo so spiegare', original: 'tiziano-111', cover: 'pausini-iocanto', source: 'Io canto (Warner 2006, Discogs 845227) credits: Tiziano Ferro' },
  { song: 'Strada facendo', original: 'baglioni-stradafacendo', cover: 'pausini-iocanto', source: 'Io canto (Warner 2006, Discogs 845227) credits: Baglioni' },
]

// A cover leads one way, like an influence: from the record with the cover to the original (owner, Oct 2026).
export const coverFrom = (coverAlbum: string, original: string) => COVERS.find((c) => c.cover === coverAlbum && c.original === original)
// The same between artists (artist ids are the album ids' prefix): x covered y.
export const coverFromArtist = (x: string, y: string) => COVERS.find((c) => c.cover.split('-')[0] === x && c.original.split('-')[0] === y)

export const coversOf = (albumId: string) => ({
  covers: COVERS.filter((c) => c.cover === albumId),
  coveredBy: COVERS.filter((c) => c.original === albumId),
})
