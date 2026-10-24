// Where every artist comes from: country (ISO code), main singing language, the decade they
// started and their genres. It's the base of "Scenes" (discovering music from other countries)
// and of explainable suggestions. Adding a scene = adding rows here, no new code.
// Row format: 'COUNTRY lang decade genre,genre'

export type Genre =
  | 'pop' | 'dance' | 'electronic' | 'synthpop' | 'disco' | 'rock' | 'indie' | 'alt' | 'metal' | 'punk' | 'prog'
  | 'hiphop' | 'trap' | 'rnb' | 'soul' | 'funk' | 'jazz' | 'folk' | 'songwriter' | 'country' | 'latin' | 'reggaeton'
  | 'afro' | 'kpop' | 'sertanejo' | 'funkbr' | 'pagode' | 'forro' | 'classical' | 'soundtrack' | 'reggae' | 'opera'

export interface ArtistScene {
  country: string
  lang: string
  since: number // decade they started, e.g. 1980
  genres: Genre[]
}

export const COUNTRY_NAMES: Record<string, string> = {
  US: 'United States', GB: 'United Kingdom', IE: 'Ireland', IT: 'Italy', FR: 'France', BE: 'Belgium', CH: 'Switzerland',
  DE: 'Germany', NL: 'Netherlands', SE: 'Sweden', NO: 'Norway', DK: 'Denmark', IS: 'Iceland', FO: 'Faroe Islands',
  ES: 'Spain', PT: 'Portugal', BR: 'Brazil', MX: 'Mexico', CO: 'Colombia', PR: 'Puerto Rico', KR: 'South Korea',
  ZA: 'South Africa', JM: 'Jamaica', CA: 'Canada', AU: 'Australia', NZ: 'New Zealand', ST: 'São Tomé and Príncipe',
}

const ROWS: Record<string, string> = {
  madonna: 'US en 1980 pop,dance', kylie: 'AU en 1980 pop,dance', psb: 'GB en 1980 synthpop,dance', depeche: 'GB en 1980 synthpop,alt', gaga: 'US en 2000 pop,dance',
  sombr: 'US en 2020 indie,alt', harrystyles: 'GB en 2010 pop,rock', ariana: 'US en 2010 pop,rnb', beyonce: 'US en 2000 rnb,pop', sabrina: 'US en 2010 pop',
  charlixcx: 'GB en 2010 pop,electronic', robyn: 'SE en 1990 pop,electronic', adele: 'GB en 2000 pop,soul', bjork: 'IS en 1990 alt,electronic', dualipa: 'GB en 2010 pop,dance',
  feverray: 'SE en 2000 electronic,alt', florence: 'GB en 2000 indie,rock', franz: 'GB en 2000 indie,rock', jlo: 'US en 1990 pop,latin', bieber: 'CA en 2000 pop,rnb',
  katyperry: 'US en 2000 pop', kimpetras: 'DE en 2010 pop,dance', kraftwerk: 'DE de 1970 electronic,synthpop', lanadelrey: 'US en 2010 pop,alt', capaldi: 'GB en 2010 pop,songwriter',
  lorde: 'NZ en 2010 pop,alt', lykkeli: 'SE en 2000 indie,pop', maneskin: 'IT it 2010 rock,pop', garrix: 'NL en 2010 electronic,dance', massiveattack: 'GB en 1990 electronic,alt',
  miley: 'US en 2000 pop,rock', mo: 'DK en 2010 pop,electronic', moby: 'US en 1990 electronic', muse: 'GB en 1990 rock,alt', placebo: 'GB en 1990 rock,alt',
  prince: 'US en 1970 funk,pop', radiohead: 'GB en 1990 alt,rock', royksopp: 'NO en 1990 electronic', samsmith: 'GB en 2010 pop,soul', selena: 'US en 2000 pop',
  shawn: 'CA en 2010 pop', sia: 'AU en 1990 pop', sigurros: 'IS is 1990 alt,rock', takethat: 'GB en 1990 pop', tameimpala: 'AU en 2000 alt,rock',
  taylorswift: 'US en 2000 pop,country', mariah: 'US en 1990 pop,rnb', britney: 'US en 1990 pop,dance', cher: 'US en 1960 pop,dance', tinaturner: 'US en 1960 rock,soul',
  tovelo: 'SE en 2010 pop,electronic', u2: 'IE en 1970 rock', weeknd: 'CA en 2010 rnb,pop', celine: 'CA en 1980 pop', whitney: 'US en 1980 pop,soul',
  mj: 'US en 1970 pop,funk', zaralarsson: 'SE en 2010 pop,dance', the1975: 'GB en 2010 pop,indie', bts: 'KR ko 2010 kpop,pop', blackpink: 'KR ko 2010 kpop,pop',
  badbunny: 'PR es 2010 reggaeton,latin', billie: 'US en 2010 pop,alt', chappell: 'US en 2010 pop', benson: 'US en 2020 pop', teddyswims: 'US en 2010 soul,pop',
  gracie: 'US en 2010 pop,songwriter', tatemcrae: 'CA en 2010 pop', tyla: 'ZA en 2020 afro,pop', rose: 'KR en 2010 kpop,pop', alexwarren: 'US en 2020 pop',
  brunomars: 'US en 2010 pop,funk', kendrick: 'US en 2010 hiphop', shakira: 'CO es 1990 pop,latin', rosalia: 'ES es 2010 latin,pop', olivia: 'US en 2020 pop,rock',
  sza: 'US en 2010 rnb', morganwallen: 'US en 2010 country', beatles: 'GB en 1960 rock,pop', elvis: 'US en 1950 rock', queen: 'GB en 1970 rock',
  freddie: 'GB en 1980 rock,pop', bowie: 'GB en 1960 rock,alt', marley: 'JM en 1960 reggae', stones: 'GB en 1960 rock', aretha: 'US en 1960 soul',
  sinatra: 'US en 1940 jazz,pop', eltonjohn: 'GB en 1960 pop,rock', dylan: 'US en 1960 folk,songwriter', stevie: 'US en 1960 soul,funk', abba: 'SE en 1970 pop,disco',
  pinkfloyd: 'GB en 1960 prog,rock', hendrix: 'US en 1960 rock', ledzeppelin: 'GB en 1960 rock', piaf: 'FR fr 1930 songwriter', armstrong: 'US en 1920 jazz',
  streisand: 'US en 1960 pop', dianaross: 'US en 1960 soul,pop', donnasummer: 'US en 1970 disco', marvingaye: 'US en 1960 soul', georgemichael: 'GB en 1980 pop',
  fleetwood: 'GB en 1960 rock,pop', acdc: 'AU en 1970 rock,metal', thewho: 'GB en 1960 rock', sabbath: 'GB en 1960 metal', metallica: 'US en 1980 metal',
  nirvana: 'US en 1980 alt,rock', thecure: 'GB en 1970 alt,rock', janet: 'US en 1980 pop,rnb', spicegirls: 'GB en 1990 pop', eminem: 'US en 1990 hiphop',
  daftpunk: 'FR en 1990 electronic,dance', moroder: 'IT en 1970 electronic,disco', rihanna: 'US en 2000 pop,rnb', amy: 'GB en 2000 soul,jazz', oasis: 'GB en 1990 rock',
  blur: 'GB en 1990 rock,indie', gorillaz: 'GB en 2000 alt,hiphop', suede: 'GB en 1990 rock,alt', aha: 'NO en 1980 synthpop', agnesobel: 'DK en 2010 songwriter,classical',
  air: 'FR en 1990 electronic', alcazar: 'SE en 1990 pop,disco', aliciakeys: 'US en 2000 rnb,soul', goldfrapp: 'GB en 2000 electronic,synthpop', alliex: 'CA en 2010 pop,electronic',
  alphaville: 'DE en 1980 synthpop', altj: 'GB en 2010 indie,alt', annielennox: 'GB en 1990 pop,soul', arcadefire: 'CA en 2000 indie,rock', coldplay: 'GB en 1990 rock,pop',
  arcticmonkeys: 'GB en 2000 indie,rock', avicii: 'SE en 2010 electronic,dance', blondie: 'US en 1970 rock,punk', bobsinclar: 'FR en 1990 dance,electronic', boniver: 'US en 2000 indie,folk',
  boneym: 'DE en 1970 disco', eno: 'GB en 1970 electronic', chic: 'US en 1970 disco,funk', aguilera: 'US en 1990 pop,rnb', cliffrichard: 'GB en 1950 pop,rock',
  cranberries: 'IE en 1990 rock,alt', cyndi: 'US en 1980 pop', dido: 'GB en 1990 pop', direstraits: 'GB en 1970 rock', doors: 'US en 1960 rock',
  duranduran: 'GB en 1980 synthpop,pop', ewf: 'US en 1970 funk,soul', bunnymen: 'GB en 1970 alt,rock', ellie: 'GB en 2000 pop,electronic', morricone: 'IT it 1960 soundtrack,classical',
  mina: 'IT it 1950 pop', eurythmics: 'GB en 1980 synthpop,pop', fischerspooner: 'US en 1990 electronic', foofighters: 'US en 1990 rock', jamiroquai: 'GB en 1990 funk,dance',
  grimes: 'CA en 2010 electronic,pop', humanleague: 'GB en 1970 synthpop', hotchip: 'GB en 2000 electronic,indie', interpol: 'US en 1990 indie,rock', jeffbuckley: 'US en 1990 rock,songwriter',
  jessieware: 'GB en 2010 pop,disco', lennon: 'GB en 1970 rock,songwriter', katebush: 'GB en 1970 pop,alt', lcd: 'US en 2000 electronic,indie', cohen: 'CA en 1960 songwriter,folk',
  liza: 'US en 1960 pop', loreen: 'SE en 2010 pop,dance', ella: 'US en 1930 jazz', maccabees: 'GB en 2000 indie', macygray: 'US en 1990 soul,rnb',
  peggygou: 'KR en 2010 electronic,dance', majorlazer: 'US en 2000 electronic,dance', marina: 'GB en 2000 pop', maroon5: 'US en 2000 pop,rock', solveig: 'FR en 2000 dance,electronic',
  mazzystar: 'US en 1980 alt', mgmt: 'US en 2000 indie,electronic', mika: 'GB en 2000 pop', neworder: 'GB en 1980 synthpop,alt', notwist: 'DE en 1980 indie,electronic',
  olly: 'GB en 2010 pop,dance', yearsyears: 'GB en 2010 pop,electronic', mccartney: 'GB en 1970 rock,pop', paulyoung: 'GB en 1980 pop,soul', peaches: 'CA en 2000 electronic',
  perfumegenius: 'US en 2010 alt', gabriel: 'GB en 1970 rock,prog', philcollins: 'GB en 1980 pop,rock', pixies: 'US en 1980 alt,rock', police: 'GB en 1970 rock',
  carra: 'IT it 1970 pop,disco', berte: 'IT it 1970 rock,pop', pausini: 'IT it 1990 pop', annalisa: 'IT it 2010 pop,dance', elodie: 'IT it 2010 pop',
  blanco: 'IT it 2020 pop,rock', mahmood: 'IT it 2010 pop,rnb', rickymartin: 'PR es 1990 latin,pop', ritaora: 'GB en 2010 pop,dance', robbie: 'GB en 1990 pop',
  roxymusic: 'GB en 1970 rock,alt', sandra: 'DE en 1980 synthpop,pop', scissorsisters: 'US en 2000 pop,disco', sevdaliza: 'NL en 2010 electronic,alt', pumpkins: 'US en 1980 alt,rock',
  softcell: 'GB en 1970 synthpop', sophie: 'GB en 2000 pop,disco', stvincent: 'US en 2000 alt,rock', stevienicks: 'US en 1980 rock,pop', sting: 'GB en 1980 pop,rock',
  strokes: 'US en 1990 indie,rock', supertramp: 'GB en 1970 rock,prog', talkingheads: 'US en 1970 alt,rock', tff: 'GB en 1980 synthpop,pop', timbuckley: 'US en 1960 folk,songwriter',
  tiziano: 'IT it 2000 pop', baglioni: 'IT it 1970 songwriter,pop', venditti: 'IT it 1970 songwriter', annaoxa: 'IT it 1970 pop', toto: 'US en 1970 rock',
  trst: 'CA en 2010 electronic,synthpop', travis: 'GB en 1990 rock,indie', trentemoller: 'DK en 2000 electronic', troye: 'AU en 2010 pop', twodoor: 'GB en 2000 indie',
  ub40: 'GB en 1970 reggae,pop', vasco: 'IT it 1970 rock', battisti: 'IT it 1960 songwriter,pop', dalla: 'IT it 1960 songwriter', pattypravo: 'IT it 1960 pop',
  verve: 'GB en 1990 rock,alt', villagers: 'IE en 2010 folk,indie', yazoo: 'GB en 1980 synthpop', zucchero: 'IT it 1980 rock,soul', bocelli: 'IT it 1990 opera,pop',
  skunkanansie: 'GB en 1990 rock,alt', sinead: 'IE en 1980 alt,pop', achillelauro: 'IT it 2010 pop,rock', celentano: 'IT it 1950 rock,pop', dalida: 'FR fr 1950 pop,disco',
  agnes: 'SE en 2000 pop,disco', angelinamango: 'IT it 2020 pop', mango: 'IT it 1980 pop,songwriter', arisa: 'IT it 2000 pop', austra: 'CA en 2010 electronic,synthpop',
  beachhouse: 'US en 2000 indie,alt', billyocean: 'GB en 1970 pop,soul', matiabazar: 'IT it 1970 pop,synthpop', bronskibeat: 'GB en 1980 synthpop', carladalforno: 'AU en 2010 electronic,alt',
  carmenconsoli: 'IT it 1990 rock,songwriter', caselli: 'IT it 1960 pop', cerrone: 'FR en 1970 disco', perrelli: 'SE en 1990 pop', christine: 'FR fr 2010 pop,electronic',
  davena: 'IT it 1980 pop', dieantwoord: 'ZA en 2000 hiphop,electronic', ditonellapiaga: 'IT it 2020 pop,electronic', rettore: 'IT it 1970 pop,rock', modugno: 'IT it 1950 pop,songwriter',
  eivor: 'FO en 2000 folk,electronic', elisa: 'IT en 1990 pop,rock', emma: 'IT it 2010 pop,rock', deandre: 'IT it 1960 songwriter,folk', mannoia: 'IT it 1980 pop,songwriter',
  battiato: 'IT it 1970 songwriter,electronic', gabriellaferri: 'IT it 1960 folk', gazebo: 'IT en 1980 synthpop,disco', geolier: 'IT it 2010 hiphop,trap', georgeezra: 'GB en 2010 pop,folk',
  ghali: 'IT it 2010 hiphop,pop', nannini: 'IT it 1970 rock', grignani: 'IT it 1990 rock,pop', morandi: 'IT it 1960 pop', ionnalee: 'SE en 2010 electronic,synthpop',
  kolors: 'IT it 2010 pop,funk', lrdl: 'IT it 2010 pop,indie', madame: 'IT it 2010 hiphop,pop', maluma: 'CO es 2010 reggaeton,latin', miamartini: 'IT it 1970 pop',
  nickcave: 'AU en 1980 alt,rock', noemi: 'IT it 2000 pop,soul', vanoni: 'IT it 1950 pop,jazz', paolachiara: 'IT it 1990 pop,dance', rinogaetano: 'IT it 1970 songwriter',
  robertmiles: 'IT en 1990 electronic,dance', gala: 'IT en 1990 dance', bersani: 'IT it 1990 songwriter,pop', sangiovanni: 'IT it 2020 pop', santifrancesi: 'IT it 2010 indie,electronic',
  settembre: 'IT it 2020 pop', subsonica: 'IT it 1990 electronic,rock', tupac: 'US en 1990 hiphop', biggie: 'US en 1990 hiphop', oliviadean: 'GB en 2010 soul,pop',
  lolayoung: 'GB en 2010 pop,soul', raye: 'GB en 2010 pop,jazz', pinkpantheress: 'GB en 2020 pop,electronic', skyenewman: 'GB en 2020 pop', siennaspiro: 'GB en 2020 pop,soul',
  yungblud: 'GB en 2010 rock,punk', doechii: 'US en 2010 hiphop', addisonrae: 'US en 2020 pop', pooh: 'IT it 1960 pop,rock', ollyit: 'IT it 2020 pop',
  anna: 'IT it 2020 hiphop,dance', lazza: 'IT it 2010 hiphop,trap', tananai: 'IT it 2020 pop,indie', alfa: 'IT it 2010 pop', bresh: 'IT it 2010 hiphop,pop',
  luciocorsi: 'IT it 2010 rock,songwriter', sayf: 'IT it 2020 hiphop', serenabrancale: 'IT it 2010 soul,jazz', joanthiele: 'IT it 2010 pop,indie', sarahtoscano: 'IT it 2020 pop',
  gaia: 'IT it 2020 pop,latin', bigmama: 'IT it 2020 hiphop', ariete: 'IT it 2020 indie,pop', tonyeffe: 'IT it 2010 hiphop,trap', kidyugi: 'IT it 2020 hiphop',
  artie5ive: 'IT it 2020 hiphop,trap', tonyboy: 'IT it 2020 hiphop', shiva: 'IT it 2010 hiphop,trap', rhove: 'IT it 2020 hiphop', babygang: 'IT it 2020 hiphop,trap',
  mida: 'IT it 2020 pop', holden: 'IT it 2020 indie,pop', petit: 'IT it 2020 pop', filippucci: 'IT it 2020 pop', tredicipietro: 'IT it 2010 hiphop',
  samuraijay: 'IT it 2020 pop,latin', nayt: 'IT it 2010 hiphop', fulminacci: 'IT it 2010 songwriter,indie', chiello: 'IT it 2010 indie,songwriter', lanina: 'IT it 2020 electronic,folk',
  emmanolde: 'IT it 2020 indie,songwriter', glocky: 'IT it 2020 hiphop', angelicabove: 'IT it 2020 soul,pop', saragioielli: 'IT it 2020 pop', faccianuvola: 'IT it 2020 indie',
  primastanza: 'IT it 2020 indie', lda: 'IT it 2020 pop', aka7even: 'IT it 2020 pop,rnb', bamboledipezza: 'IT it 2000 punk,rock', comacose: 'IT it 2010 indie,pop',
  pinguini: 'IT it 2010 pop,indie', elataubert: 'CO es 2020 pop,latin', palomamorphy: 'ES es 2020 pop,latin', netonvega: 'MX es 2020 latin', beele: 'CO es 2020 afro,reggaeton',
  omarcourtz: 'PR es 2020 reggaeton', kapo: 'CO es 2020 reggaeton,latin', judeline: 'ES es 2020 latin,alt', rusowsky: 'ES es 2020 indie,electronic', anitta: 'BR pt 2010 funkbr,pop',
  aya: 'FR fr 2010 afro,pop', stromae: 'BE fr 2000 electronic,pop', plutonio: 'PT pt 2010 hiphop', calema: 'ST pt 2010 pop,afro', slowj: 'PT pt 2010 hiphop,songwriter',
  dillaz: 'PT pt 2010 hiphop', wetbedgang: 'PT pt 2010 hiphop', barbaratinoco: 'PT pt 2010 pop,songwriter', barbarabandeira: 'PT pt 2010 pop,rnb', gims: 'FR fr 2000 pop,hiphop',
  jul: 'FR fr 2010 hiphop', ninho: 'FR fr 2010 hiphop', indila: 'FR fr 2010 pop', tiakola: 'FR fr 2020 hiphop,afro', sdm: 'FR fr 2020 hiphop',
  damso: 'BE fr 2010 hiphop', gazo: 'FR fr 2020 hiphop,trap', werenoi: 'FR fr 2020 hiphop', plk: 'FR fr 2010 hiphop', hamza: 'BE fr 2010 hiphop,rnb',
  pnl: 'FR fr 2010 hiphop', soolking: 'FR fr 2010 hiphop,pop', tayc: 'FR fr 2010 rnb,afro', theodora: 'FR fr 2020 pop,hiphop', angele: 'BE fr 2010 pop',
  dadju: 'FR fr 2010 rnb', niska: 'FR fr 2010 hiphop', booba: 'FR fr 2000 hiphop', sch: 'FR fr 2010 hiphop', lamano19: 'FR fr 2020 hiphop',
  l2b: 'FR fr 2020 pop,hiphop', keblack: 'FR fr 2010 pop,afro', franglish: 'FR fr 2010 rnb,afro', djadjadinaz: 'FR fr 2010 hiphop', henriquejuliano: 'BR pt 2000 sertanejo',
  menosemais: 'BR pt 2010 pagode', mcryansp: 'BR pt 2020 funkbr', jorgemateus: 'BR pt 2000 sertanejo', mcig: 'BR pt 2020 funkbr', zenetocristiano: 'BR pt 2010 sertanejo',
  matheuskauan: 'BR pt 2010 sertanejo', mctuto: 'BR pt 2020 funkbr', natanzinho: 'BR pt 2020 forro', filiperet: 'BR pt 2010 hiphop', anacastela: 'BR pt 2020 sertanejo',
  marilia: 'BR pt 2010 sertanejo', gusttavo: 'BR pt 2010 sertanejo', simonemendes: 'BR pt 2010 sertanejo', ludmilla: 'BR pt 2010 funkbr,pagode', matue: 'BR pt 2010 trap,hiphop',
  luisasonza: 'BR pt 2010 pop,funkbr', maiaramaraisa: 'BR pt 2010 sertanejo', luansantana: 'BR pt 2000 sertanejo,pop', safadao: 'BR pt 2010 forro', pabllo: 'BR pt 2010 pop,dance',
  veigh: 'BR pt 2020 trap', mclivinho: 'BR pt 2010 funkbr', leofoguete: 'BR pt 2020 forro', lauanaprado: 'BR pt 2010 sertanejo', oruam: 'BR pt 2020 trap',
  hugoguilherme: 'BR pt 2010 sertanejo', renatozero: 'IT it 1970 pop,rock', eros: 'IT it 1980 pop', pavarotti: 'IT it 1960 opera,classical', gaber: 'IT it 1950 songwriter',
  ginopaoli: 'IT it 1960 songwriter', tenco: 'IT it 1960 songwriter', degregori: 'IT it 1970 songwriter,folk', pinodaniele: 'IT it 1970 songwriter,funk', vecchioni: 'IT it 1970 songwriter',
  cocciante: 'IT it 1970 pop,songwriter', tozzi: 'IT it 1970 pop', milva: 'IT it 1960 pop', giunirusso: 'IT it 1980 pop,synthpop', ritapavone: 'IT it 1960 pop',
  alice: 'IT it 1980 pop,songwriter', giorgia: 'IT it 1990 pop,soul', jovanotti: 'IT it 1980 pop,hiphop', ligabue: 'IT it 1990 rock', raf: 'IT it 1980 pop',
  masini: 'IT it 1990 pop', pezzali: 'IT it 2000 pop', cremonini: 'IT it 2000 pop,songwriter', mengoni: 'IT it 2000 pop,soul', '883': 'IT it 1990 pop',
  litfiba: 'IT it 1980 rock', negramaro: 'IT it 2000 rock,pop', elio: 'IT it 1980 rock,funk', bananarama: 'GB en 1980 pop,synthpop', bangles: 'US en 1980 pop,rock',
  sabrinasalerno: 'IT en 1980 pop,disco', tiromancino: 'IT it 1990 indie,pop', marlenekuntz: 'IT it 1990 alt,rock', bluvertigo: 'IT it 1990 synthpop,alt', baustelle: 'IT it 1990 indie,pop',
  verdena: 'IT it 1990 alt,rock', prozac: 'IT it 1990 punk,pop', mcr: 'IT it 1990 folk,rock', '99posse': 'IT it 1990 reggae,hiphop', almamegretta: 'IT it 1990 reggae,electronic',
  articolo31: 'IT it 1990 hiphop', eiffel65: 'IT en 1990 dance,electronic', righeira: 'IT it 1980 synthpop,disco', planetfunk: 'IT en 1990 electronic,dance', labionda: 'IT en 1970 disco',
  lunapop: 'IT it 1990 pop', gazosa: 'IT it 2000 pop', zeroassoluto: 'IT it 2000 pop', benjifede: 'IT it 2010 pop', ilvolo: 'IT it 2000 opera,pop',
  thegiornalisti: 'IT it 2010 indie,pop', lostatosociale: 'IT it 2000 indie,electronic', lacrus: 'IT it 1990 rock,songwriter', bandabardo: 'IT it 1990 folk,rock', goblin: 'IT en 1970 prog,soundtrack',
  ildivo: 'GB en 2000 opera,pop', gnr: 'US en 1980 rock,metal', pearljam: 'US en 1990 rock,alt',
}

export const SCENES: Record<string, ArtistScene> = Object.fromEntries(
  Object.entries(ROWS).map(([id, row]) => {
    const [country, lang, decade, genres] = row.split(' ')
    return [id, { country, lang, since: Number(decade), genres: genres.split(',') as Genre[] }]
  }),
)

export const sceneOf = (artistId: string): ArtistScene | undefined => SCENES[artistId]

export const GENRE_LABELS: Record<Genre, string> = {
  pop: 'Pop', dance: 'Dance', electronic: 'Electronic', synthpop: 'Synth-pop', disco: 'Disco', rock: 'Rock', indie: 'Indie',
  alt: 'Alternative', metal: 'Metal', punk: 'Punk', prog: 'Prog', hiphop: 'Hip-hop', trap: 'Trap', rnb: 'R&B', soul: 'Soul',
  funk: 'Funk', jazz: 'Jazz', folk: 'Folk', songwriter: 'Singer-songwriter', country: 'Country', latin: 'Latin', reggaeton: 'Reggaeton',
  afro: 'Afro', kpop: 'K-pop', sertanejo: 'Sertanejo', funkbr: 'Brazilian funk', pagode: 'Pagode', forro: 'Forró',
  classical: 'Classical', soundtrack: 'Soundtrack', reggae: 'Reggae', opera: 'Opera',
}

// "Italy · from the 1960s · Singer-songwriter, Pop"
export function sceneLine(artistId: string): string | null {
  const s = SCENES[artistId]
  if (!s) return null
  return `${COUNTRY_NAMES[s.country] ?? s.country} · from the ${s.since}s · ${s.genres.map((g) => GENRE_LABELS[g]).join(', ')}`
}
