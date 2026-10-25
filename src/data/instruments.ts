// Main instruments of an album (descriptor column `instruments`, main first). Instrumentation is one of the
// core attribute families in expert music analysis (e.g. Pandora's Music Genome Project). If a source names an
// instrument not listed here, the researcher uses it anyway (lowercase, letters only) and Claude adds it.
export const INSTRUMENT_LABELS: Record<string, string> = {
  // keys
  piano: 'Piano', electricpiano: 'Electric piano', organ: 'Organ', harpsichord: 'Harpsichord', accordion: 'Accordion', keyboards: 'Keyboards',
  // electronic
  synth: 'Synthesizers', drummachine: 'Drum machine', sequencer: 'Sequencer', sampler: 'Samples', vocoder: 'Vocoder', turntables: 'Turntables', theremin: 'Theremin',
  // guitars and strings
  acousticguitar: 'Acoustic guitar', electricguitar: 'Electric guitar', bass: 'Bass guitar', synthbass: 'Synth bass', doublebass: 'Double bass',
  steelguitar: 'Steel guitar', mandolin: 'Mandolin', banjo: 'Banjo', ukulele: 'Ukulele', sitar: 'Sitar', harp: 'Harp',
  strings: 'Strings', orchestra: 'Orchestra',
  // drums and percussion
  drums: 'Drums', percussion: 'Percussion', mallets: 'Vibraphone and marimba', steeldrums: 'Steel drums', handclaps: 'Handclaps',
  // winds
  brass: 'Brass', trumpet: 'Trumpet', saxophone: 'Saxophone', woodwinds: 'Woodwinds', flute: 'Flute', clarinet: 'Clarinet', harmonica: 'Harmonica', kazoo: 'Kazoo',
}
export const INSTRUMENTS = new Set(Object.keys(INSTRUMENT_LABELS))
export const instrumentLabel = (i: string) => INSTRUMENT_LABELS[i] ?? i
