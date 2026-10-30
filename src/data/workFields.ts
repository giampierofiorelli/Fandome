// Fields for works (classical and avant-garde pieces, operas), owner Oct 2026, research in
// docs/research/classical-research.md: experts keep apart what a work is (form), who performs it (forces), its
// harmonic language and its roles' voice types (Library of Congress genre/form and medium-of-performance terms,
// MusicBrainz, Wikidata, IMSLP). Stored in docs/descriptors/works/<artist-id>.csv next to the usual descriptor.
// Style periods (baroque, classicalera, impressionism, serialism, minimalism...) stay in `genres`.

export const FORM_LABELS: Record<string, string> = {
  symphony: 'Symphony', concerto: 'Concerto', concertogrosso: 'Concerto grosso', sonata: 'Sonata', triosonata: 'Trio sonata',
  stringquartet: 'String quartet', pianotrio: 'Piano trio', suite: 'Suite', partita: 'Partita', fugue: 'Fugue', canon: 'Canon',
  variations: 'Variations', prelude: 'Prelude', toccata: 'Toccata', etude: 'Étude', nocturne: 'Nocturne', overture: 'Overture',
  symphonicpoem: 'Symphonic poem', programsymphony: 'Programme symphony', ballet: 'Ballet', incidentalmusic: 'Incidental music',
  mass: 'Mass', requiem: 'Requiem', passion: 'Passion', oratorio: 'Oratorio', cantata: 'Cantata', motet: 'Motet', madrigal: 'Madrigal',
  anthem: 'Anthem', artsong: 'Art song', songcycle: 'Song cycle', opera: 'Opera', chamberopera: 'Chamber opera', operetta: 'Operetta',
  zarzuela: 'Zarzuela', singspiel: 'Singspiel', operaseria: 'Opera seria', operabuffa: 'Opera buffa', operacomique: 'Opéra comique',
  tragedielyrique: 'Tragédie lyrique', grandopera: 'Grand opéra', belcantoopera: 'Bel canto opera', musicdrama: 'Music drama',
  numbers: 'Number opera', throughcomposed: 'Through-composed', chamber: 'Chamber music', tapepiece: 'Tape piece',
  keyboardcycle: 'Keyboard cycle', processpiece: 'Process piece', filmscore: 'Film score', ragtime: 'Ragtime', rhapsody: 'Rhapsody',
}

export const FORCES_LABELS: Record<string, string> = {
  fullorchestra: 'Full orchestra', chamberorchestra: 'Chamber orchestra', stringorchestra: 'String orchestra', windensemble: 'Wind ensemble',
  brassensemble: 'Brass ensemble', percussionensemble: 'Percussion ensemble', instrumentalensemble: 'Instrumental ensemble',
  stringquartet: 'String quartet', pianotrio: 'Piano trio', solokeyboard: 'Solo keyboard', soloinstrument: 'Solo instrument',
  voiceandpiano: 'Voice and piano', solovoices: 'Solo voices', solovocalensemble: 'Solo vocal ensemble', mixedchorus: 'Mixed chorus',
  treblechorus: 'Treble chorus', boychorus: 'Boy chorus', malechorus: 'Male chorus', narrator: 'Narrator', continuo: 'Continuo',
  electronics: 'Electronics', tape: 'Tape', jazzband: 'Jazz band', openinstrumentation: 'Any instruments',
}

export const HARMONY_LABELS: Record<string, string> = {
  modal: 'Modal', tonal: 'Tonal', chromatic: 'Chromatic', extendedtonality: 'Extended tonality', wholetone: 'Whole-tone',
  pentatonic: 'Pentatonic', polytonal: 'Polytonal', atonal: 'Atonal', twelvetone: 'Twelve-tone', serial: 'Serial',
  microtonal: 'Microtonal', spectral: 'Spectral', drone: 'Drone', staticconsonance: 'Static consonance', bluesharmony: 'Blues harmony',
  indeterminate: 'Indeterminate',
}

export const TEXTURE_LABELS: Record<string, string> = { monophonic: 'Monophonic', homophonic: 'Homophonic', polyphonic: 'Polyphonic', imitative: 'Imitative' }

export const VOICE_TYPE_LABELS: Record<string, string> = {
  soprano: 'Soprano', coloraturasoprano: 'Coloratura soprano', lyricsoprano: 'Lyric soprano', spintosoprano: 'Spinto soprano',
  dramaticsoprano: 'Dramatic soprano', soubrette: 'Soubrette', mezzosoprano: 'Mezzo-soprano', contralto: 'Contralto',
  countertenor: 'Countertenor', boysoprano: 'Boy soprano', tenor: 'Tenor', tenorbuffo: 'Tenor buffo', lyrictenor: 'Lyric tenor',
  heldentenor: 'Heldentenor', charactertenor: 'Character tenor', baritone: 'Baritone', lyricbaritone: 'Lyric baritone',
  heldenbariton: 'Heldenbariton', bassbaritone: 'Bass-baritone', bass: 'Bass', bassobuffo: 'Basso buffo', seriousbass: 'Serious bass',
  narrator: 'Narrator',
}

export const WORK_LISTS = { form: FORM_LABELS, forces: FORCES_LABELS, harmony: HARMONY_LABELS, texture: TEXTURE_LABELS, voices: VOICE_TYPE_LABELS }
export const WORK_HEADER = 'album_id,form,forces,harmony,texture,voices,catalogue,key,text_by,premiere,sources'
