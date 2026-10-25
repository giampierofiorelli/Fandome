// How an album is made (descriptor column `production`, main first): vocal treatment and use, recording and
// production techniques, signature machines and software. Only what sources state; empty = unknown, ignored.
// A source naming something not listed: the researcher uses it anyway (lowercase, letters and digits) and Claude adds it.
export const PRODUCTION_LABELS: Record<string, string> = {
  // vocal treatment and use
  autotune: 'Auto-Tune', vocoder: 'Vocoder', harmonizer: 'Harmonizer', talkbox: 'Talk box', pitchedvocals: 'Pitch-shifted vocals', vocalfilter: 'Filtered vocals',
  distortedvocals: 'Distorted vocals', vocalchops: 'Chopped vocals', layeredvocals: 'Layered vocals', falsetto: 'Falsetto',
  whistleregister: 'Whistle register', belting: 'Belting',
  // recording and production techniques
  sampling: 'Sampling', analogtape: 'Analog tape', lofi: 'Lo-fi', wallofsound: 'Wall of sound', heavyreverb: 'Heavy reverb',
  sidechain: 'Sidechain pumping', distortion: 'Distortion', liverecording: 'Recorded live in the studio', fieldrecordings: 'Field recordings', tapeeffects: 'Tape effects', datrecording: 'Recorded to DAT',
  // machines and software
  tr808: 'TR-808', tr909: 'TR-909', linndrum: 'LinnDrum', mpc: 'MPC', moog: 'Moog', prophet5: 'Prophet-5', prophet2002: 'Prophet 2002 sampler', oberheim: 'Oberheim',
  dx7: 'DX7', fairlight: 'Fairlight', synclavier: 'Synclavier', protools: 'Pro Tools', logic: 'Logic', ableton: 'Ableton Live', flstudio: 'FL Studio',
  tr707: 'TR-707', tb303: 'TB-303', juno106: 'Juno-106', sp1200: 'E-mu SP-1200', rolands760: 'Roland S-760', alesis3630: 'Alesis 3630 compressor', rolandsvc350: 'Roland SVC-350 vocoder',
  kurzweilk2000: 'Kurzweil K2000', akais3200: 'Akai S3200', korg01w: 'Korg 01/W',
}
export const PRODUCTION = new Set(Object.keys(PRODUCTION_LABELS))
export const productionLabel = (p: string) => PRODUCTION_LABELS[p] ?? p
