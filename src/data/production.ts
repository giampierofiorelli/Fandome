// How an album is made (descriptor column `production`, main first): vocal treatment and use, recording and
// production techniques, signature machines and software. Only what sources state; empty = unknown, ignored.
// A source naming something not listed: the researcher uses it anyway (lowercase, letters and digits) and Claude adds it.
export const PRODUCTION_LABELS: Record<string, string> = {
  // vocal treatment and use
  autotune: 'Auto-Tune', vocoder: 'Vocoder', harmonizer: 'Harmonizer', talkbox: 'Talk box', pitchedvocals: 'Pitch-shifted vocals', vocalfilter: 'Filtered vocals',
  distortedvocals: 'Distorted vocals', vocalphasing: 'Phased vocals', vocalchops: 'Chopped vocals', layeredvocals: 'Layered vocals', falsetto: 'Falsetto',
  whistleregister: 'Whistle register', belting: 'Belting',
  // recording and production techniques
  sampling: 'Sampling', analogtape: 'Analog tape', lofi: 'Lo-fi', wallofsound: 'Wall of sound', heavyreverb: 'Heavy reverb',
  sidechain: 'Sidechain pumping', distortion: 'Distortion', liverecording: 'Recorded live in the studio', fieldrecordings: 'Field recordings', tapeeffects: 'Tape effects', datrecording: 'Recorded to DAT', digitaltape: 'Digital multitrack tape', concertrecording: 'Recorded in concert', springreverb: 'Spring reverb', backmasking: 'Backmasking', overdubbing: 'Overdubbing', onetake: 'One-take recording', adatrecording: 'Recorded to ADAT', microbeats: 'Microbeats',
  // machines and software
  tr808: 'TR-808', tr909: 'TR-909', linndrum: 'LinnDrum', mpc: 'MPC', moog: 'Moog', prophet5: 'Prophet-5', prophet2002: 'Prophet 2002 sampler', oberheim: 'Oberheim',
  dx7: 'DX7', fairlight: 'Fairlight', synclavier: 'Synclavier', protools: 'Pro Tools', logic: 'Logic', ableton: 'Ableton Live', flstudio: 'FL Studio',
  tr707: 'TR-707', tb303: 'TB-303', juno106: 'Juno-106', sp1200: 'E-mu SP-1200', rolands760: 'Roland S-760', alesis3630: 'Alesis 3630 compressor', rolandsvc350: 'Roland SVC-350 vocoder', akais3000: 'Akai S3000', yamahaqy20: 'Yamaha QY20', sibelius: 'Sibelius', juno60: 'Juno-60', emulatorii: 'Emulator II', rolandd50: 'Roland D-50', rolandw30: 'Roland W-30', akais1000: 'Akai S1000', mackiecr1604: 'Mackie CR1604 mixer', mackie8bus: 'Mackie 8-Bus console', korgprophecy: 'Korg Prophecy', cubase: 'Cubase', recycle: 'ReCycle', radar24: 'RADAR 24', korgms20: 'Korg MS-20', emsvcs3: 'EMS VCS3', arp2600: 'ARP 2600', orlatiffany4: 'Orla Tiffany 4 drum unit', altiverb: 'Altiverb', sy22: 'Yamaha SY22', sy35: 'Yamaha SY35', sy85: 'Yamaha SY85', jupiter6: 'Roland Jupiter-6', bossse50: 'Boss SE-50', akais950: 'Akai S950', atarist: 'Atari ST', clabcreator: 'C-Lab Creator', emuproformance: 'E-mu Proformance', spx900: 'Yamaha SPX900', polymoog: 'Polymoog', rolandcr78: 'Roland CR-78',
  kurzweilk2000: 'Kurzweil K2000', akais3200: 'Akai S3200', korg01w: 'Korg 01/W',
}
export const PRODUCTION = new Set(Object.keys(PRODUCTION_LABELS))
export const productionLabel = (p: string) => PRODUCTION_LABELS[p] ?? p
