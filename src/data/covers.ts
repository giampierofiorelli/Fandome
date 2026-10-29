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
]

export const coversOf = (albumId: string) => ({
  covers: COVERS.filter((c) => c.cover === albumId),
  coveredBy: COVERS.filter((c) => c.original === albumId),
})
