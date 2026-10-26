// Main instruments of an album (descriptor column `instruments`, main first). Instrumentation is one of the
// core attribute families in expert music analysis (e.g. Pandora's Music Genome Project). If a source names an
// instrument not listed here, the researcher uses it anyway (lowercase, letters only) and Claude adds it.
export const INSTRUMENT_LABELS: Record<string, string> = {
  // keys
  piano: 'Piano', electricpiano: 'Electric piano', clavinet: 'Clavinet', organ: 'Organ', harpsichord: 'Harpsichord', accordion: 'Accordion', bandoneon: 'Bandoneon', keyboards: 'Keyboards', harmonium: 'Harmonium', melodica: 'Melodica', mellotron: 'Mellotron', chamberlin: 'Chamberlin', celesta: 'Celesta', pumporgan: 'Pump organ', clavichord: 'Clavichord', glassharmonica: 'Glass harmonica', glassharp: 'Glass harp', musicbox: 'Music box',
  // electronic
  synth: 'Synthesizers', drummachine: 'Drum machine', sequencer: 'Sequencer', sampler: 'Samples', vocoder: 'Vocoder', turntables: 'Turntables', theremin: 'Theremin', stylophone: 'Stylophone',
  // guitars and strings
  guitar: 'Guitar', baritoneguitar: 'Baritone guitar', acousticguitar: 'Acoustic guitar', electricguitar: 'Electric guitar', guitarsynth: 'Guitar synthesizer', bass: 'Bass guitar', fretlessbass: 'Fretless bass', synthbass: 'Synth bass', doublebass: 'Double bass',
  steelguitar: 'Steel guitar', dobro: 'Dobro', mandolin: 'Mandolin', charango: 'Charango', mandola: 'Mandola', bouzouki: 'Bouzouki', requinto: 'Requinto guitar', banjo: 'Banjo', ukulele: 'Ukulele', sitar: 'Sitar', electricsitar: 'Electric sitar', tambura: 'Tambura', qanun: 'Qanun', oud: 'Oud', sarod: 'Sarod', koto: 'Koto', coralsitar: 'Coral electric sitar', sarangi: 'Sarangi', harp: 'Harp', autoharp: 'Autoharp', hammereddulcimer: 'Hammered dulcimer', cimbalom: 'Cimbalom', hurdygurdy: 'Hurdy-gurdy', dulcimer: 'Dulcimer',
  strings: 'Strings', violin: 'Violin', viola: 'Viola', cello: 'Cello', orchestra: 'Orchestra',
  // drums and percussion
  drums: 'Drums', timpani: 'Timpani', percussion: 'Percussion', snaredrum: 'Snare drum', bongos: 'Bongos', caja: 'Caja vallenata', guacharaca: 'Guacharaca', castanets: 'Castanets', bells: 'Bells', gong: 'Gong', tibetanbowl: 'Tibetan singing bowl', omnichord: 'Omnichord', marxophone: 'Marxophone', dulcimerguitar: 'Dulcimer guitar', tambourine: 'Tambourine', mallets: 'Vibraphone and marimba', glockenspiel: 'Glockenspiel', chimes: 'Chimes', sleighbells: 'Sleigh bells', steeldrums: 'Steel drums', handclaps: 'Handclaps', kalimba: 'Kalimba', tabla: 'Tabla', gobletdrum: 'Goblet drum (darbuka)',
  // winds
  brass: 'Brass', trumpet: 'Trumpet', cornet: 'Cornet', flugelhorn: 'Flugelhorn', trombone: 'Trombone', tuba: 'Tuba', saxophone: 'Saxophone', woodwinds: 'Woodwinds', flute: 'Flute', panflute: 'Pan flute', quena: 'Quena', rondador: 'Rondador', ocarina: 'Ocarina', jawharp: 'Jaw harp', bawu: 'Bawu', clarinet: 'Clarinet', oboe: 'Oboe', englishhorn: 'English horn', frenchhorn: 'French horn', bassoon: 'Bassoon', recorder: 'Recorder', harmonica: 'Harmonica', bagpipes: 'Bagpipes', uilleannpipes: 'Uilleann pipes', lowwhistle: 'Low whistle', whistle: 'Whistle', musicalsaw: 'Musical saw', kazoo: 'Kazoo',
}
export const INSTRUMENTS = new Set(Object.keys(INSTRUMENT_LABELS))
export const instrumentLabel = (i: string) => INSTRUMENT_LABELS[i] ?? i
