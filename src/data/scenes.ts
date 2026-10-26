// Where every artist comes from: country (ISO code), main singing language, the decade they
// started and their genres. It's the base of "Scenes" (discovering music from other countries)
// and of explainable suggestions. Adding a scene = adding rows here, no new code.
// Row format: 'COUNTRY lang decade genre,genre'

export type Genre =
  | 'pop' | 'dance' | 'electronic' | 'synthpop' | 'disco' | 'rock' | 'indie' | 'alt' | 'metal' | 'punk' | 'prog'
  | 'hiphop' | 'trap' | 'rnb' | 'soul' | 'funk' | 'jazz' | 'folk' | 'songwriter' | 'country' | 'latin' | 'reggaeton'
  | 'afro' | 'kpop' | 'sertanejo' | 'funkbr' | 'pagode' | 'forro' | 'classical' | 'soundtrack' | 'reggae' | 'opera'
  | 'house' | 'techno' | 'ambient' | 'triphop' | 'artpop' | 'gospel' | 'fado' | 'caboverde' | 'gospelhouse'
  | 'flamenco' | 'ska' | 'dubstep' | 'ukgarage' | 'frenchtouch' | 'dancehall' | 'kuduro' | 'newjackswing' | 'acidhouse'
  | 'deephouse' | 'edm' | 'breakbeat' | 'hyperpop' | 'blues' | 'postdisco' | 'electrohouse' | 'britpop' | 'powerpop' | 'electropop' | 'tropicalhouse'
  | 'trappop' | 'italodisco' | 'dancepop' | 'eurodance'
  | 'gothpop' | 'darkwave' | 'poppunk' | 'newwave' | 'grunge' | 'experimentalpop' | 'industrial' | 'eurotrance' | 'grime'
  | 'footwork' | 'garage' | 'neorave' | 'gothtrap' | 'avantpop' | 'bubblegumbass'
  | 'clubpop' | 'wonkypop' | 'leftfieldpop' | 'popfunk' | 'electrofunk' | 'dreampop' | 'nudisco' | 'futurepop' | 'indiepop'
  | 'electroclash' | 'bloghouse' | 'pianohouse' | 'trance'
  | 'indierock' | 'slackerrock' | 'indietronica' | 'postpunkrevival' | 'alternativedance'
  | 'urbanpop' | 'bossanova' | 'folkpop' | 'afrobeat' | 'poprap' | 'posttrap' | 'poprock' | 'electrorock' | 'punkrock' | 'jungle'
  | 'hardcorehiphop' | 'latintrap' | 'westcoasthiphop' | 'nusoul' | 'alternativerock' | 'adultalternativepoprock' | 'electronica' | 'downtempo' | 'softrock' | 'classicalcrossover' | 'drumandbass' | 'itpop' | 'calypsopop' | 'hiprock' | 'drill' | 'contemporaryrnb' | 'hiphopsoul' | 'bubblegumpop' | 'europop' | 'chillout' | 'downbeat' | 'electro' | 'rave' | 'ambientbreakbeat' | 'bigbeat' | 'chillwave' | 'synthwave' | 'hardhouse' | 'techhouse' | 'acousticpop' | 'teenpop' | 'altpop' | 'countrypop' | 'gfunk' | 'bluegrass' | 'discopop' | 'yachtrock' | 'quietstorm' | 'dub' | 'experimental' | 'experimentaltechno' | 'gothabilly' | 'idm' | 'minimaltechno' | 'neofolk' | 'postpunk' | 'postrock' | 'shoegaze' | 'surfrock' | 'altcountry' | 'electrogaze' | 'electropunk' | 'gothicamericana' | 'indieelectronic' | 'krautrock' | 'neoambient' | 'postgoth' | 'slowcore' | 'indiedance' | 'noiserock' | 'spacerock' | 'psychedelicrock' | 'electrodisco' | 'glamrock' | 'hinrg' | 'technopop' | 'eurodisco' | 'postindustrial' | 'complextro' | 'melodicdubstep' | 'americana' | 'bigband' | 'bluesrock' | 'countryrock' | 'eurohouse' | 'pianorock' | 'swing' | 'traditionalpop' | 'vocaljazz' | 'deconstructedclub' | 'divahouse' | 'easylistening' | 'glitchpop' | 'showtunes' | 'standards' | 'surfpunk' | 'industrialdance' | 'electrogrunge' | 'techstep' | 'boogie' | 'aor' | 'powerballad' | 'hairmetal' | 'jazzpop' | 'adultcontemporary' | 'rockopera' | 'folktronica' | 'chamberpop' | 'baltimoreclub' | 'cloudpop' | 'doowop' | 'musicaltheatre' | 'neopsychedelia' | 'souljazz' | 'popsoul' | 'acidjazz' | 'northernsoul' | 'loversrock' | 'christmas' | 'smoothsoul' | 'synthfunk' | 'orchestralpop' | 'balearicbeat' | 'schlager' | 'folkrock' | 'baroquepop' | 'phillysoul' | 'progressivepop' | 'dancerock' | 'hardrock' | 'garagerock' | 'protodisco' | 'psychedelicpop' | 'sunshinepop' | 'rockandroll' | 'minimalsynth' | 'spacedisco' | 'progressiveelectronic' | 'darkambient' | 'modernclassical' | 'videogamemusic' | 'electronoir' | 'retrowave' | 'coldwave' | 'ebm' | 'ambientpop' | 'lounge' | 'spaceagepop' | 'spacepop' | 'experimentalelectronic' | 'artrock' | 'drone' | 'musiqueconcrete' | 'avantgarde' | 'berlinschool' | 'postminimalism' | 'experimentalrock' | 'protopunk' | 'boogiewoogie' | 'italianpop' | 'musicaleggera' | 'blueeyedsoul' | 'mpb' | 'samba' | 'tropicalia' | 'chanson' | 'ballad' | 'twist' | 'tango' | 'latinpop' | 'rumba' | 'tarantella' | 'childrensmusic' | 'liscio' | 'waltz' | 'pasodoble' | 'march' | 'polka' | 'sonjarocho' | 'freestyle' | 'alternativernb' | 'psychedelicsoul' | 'contemporarygospel' | 'retrosoul' | 'dreamtrance' | 'dreamhouse' | 'progressivehouse' | 'melodictrance' | 'newage' | 'worldmusic' | 'italodance' | 'acidtechno' | 'frenchhouse' | 'chicagohouse' | 'leftfieldhouse' | 'childrenspop' | 'novelty' | 'neoclassical' | 'microsound' | 'celtic' | 'celticfolk' | 'celticnewage' | 'celticpop' | 'contemporaryceltic' | 'contemporaryinstrumental' | 'etherealwave' | 'ethnicfusion' | 'neoclassicalnewage' | 'breakbeathardcore' | 'hardcoretechno' | 'breakbeattechno' | 'raggajungle' | 'funkybreaks' | 'acidbreaks' | 'worldbeat' | 'clubdance' | 'psychedelia' | 'darkjazz' | 'illbient' | 'turntablism' | 'spymusic' | 'jazzfusion' | 'raregroove' | 'ukhiphop' | 'ukstreetsoul' | 'alternativepoprock' | 'industrialrock' | 'ambienttechno' | 'hardcore' | 'happyhardcore' | 'afrohouse' | 'rockabilly' | 'alternativeindierock' | 'posthardcore' | 'contemporarypoprock' | 'ragga' | 'soulpop' | 'hippop' | 'southernhiphop' | 'newyorkpunk' | 'girlgrouppop' | 'motown' | 'filterhouse' | 'skapunk' | 'thirdwaveskarevival' | 'postgrunge' | 'twotone' | 'latinhouse' | 'salsa' | 'christianrock' | 'ccm' | 'pophouse' | 'vaporwave' | 'edmpop' | 'futurehouse' | 'italohouse' | 'poptrap' | 'rap' | 'cuban' | 'bolero' | 'cabaret' | 'neosoul' | 'funkrock' | 'acidrock' | 'urbano' | 'cumbia' | 'ranchera' | 'guaracha' | 'pasillo' | 'bhangra' | 'celticrock' | 'janglepop' | 'ampop' | 'adultcontemporaryrnb' | 'musichall' | 'progfolk' | 'psychfolk' | 'psychedelicfolkrock' | 'eurotechno' | 'albumrock' | 'avantgardejazz' | 'plasticsoul' | 'avantfunk' | 'sophistipop' | 'acidpop' | 'toytownpop' | 'psychedelicfolk' | 'symphonicprog' | 'symphonicrock' | 'baggy' | 'noisepop' | 'neoglam'

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
  robertmiles: 'IT en 1990 electronic,dance', enya: 'IE en 1980 folk,pop', prodigy: 'GB en 1990 electronic,dance', enigma: 'DE en 1990 electronic,dance', chemicalbrothers: 'GB en 1990 electronic,dance', portishead: 'GB en 1990 electronic,alt', fatboyslim: 'GB en 1990 electronic,dance', gwenstefani: 'US en 2000 pop,dance', nodoubt: 'US en 1990 rock,punk', alanis: 'CA en 1990 rock,pop', gala: 'IT en 1990 dance', bersani: 'IT it 1990 songwriter,pop', sangiovanni: 'IT it 2020 pop', santifrancesi: 'IT it 2010 indie,electronic',
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
  house: 'House', techno: 'Techno', ambient: 'Ambient', triphop: 'Trip-hop', artpop: 'Art pop', gospel: 'Gospel', fado: 'Fado', caboverde: 'Cape Verdean', gospelhouse: 'Gospel house',
  flamenco: 'Flamenco', ska: 'Ska', dubstep: 'Dubstep', ukgarage: 'UK garage', frenchtouch: 'French touch', dancehall: 'Dancehall',
  kuduro: 'Kuduro', newjackswing: 'New jack swing', acidhouse: 'Acid house', deephouse: 'Deep house', edm: 'EDM', breakbeat: 'Breakbeat',
  hyperpop: 'Hyperpop', blues: 'Blues', postdisco: 'Post-disco', electrohouse: 'Electro house', britpop: 'Britpop', powerpop: 'Power pop', electropop: 'Electropop', tropicalhouse: 'Tropical house',
  trappop: 'Trap-pop', italodisco: 'Italo disco', dancepop: 'Dance-pop', eurodance: 'Eurodance',
  gothpop: 'Goth pop', darkwave: 'Darkwave', poppunk: 'Pop punk', newwave: 'New wave', grunge: 'Grunge', experimentalpop: 'Experimental pop',
  industrial: 'Industrial', eurotrance: 'Eurotrance', grime: 'Grime', footwork: 'Footwork', garage: 'Garage', neorave: 'Neo-rave', gothtrap: 'Goth trap', avantpop: 'Avant-pop', bubblegumbass: 'Bubblegum bass',
  clubpop: 'Club pop', wonkypop: 'Wonky pop', leftfieldpop: 'Left-field pop', popfunk: 'Pop-funk', electrofunk: 'Electro-funk', dreampop: 'Dream pop',
  nudisco: 'Nu-disco', futurepop: 'Futurepop', indiepop: 'Indie pop', electroclash: 'Electroclash', bloghouse: 'Bloghouse', pianohouse: 'Piano house', trance: 'Trance',
  indierock: 'Indie rock', slackerrock: 'Slacker rock', indietronica: 'Indietronica', postpunkrevival: 'Post-punk revival', alternativedance: 'Alternative dance',
  urbanpop: 'Urban pop', bossanova: 'Bossa nova', folkpop: 'Folk pop', afrobeat: 'Afrobeat', poprap: 'Pop rap', posttrap: 'Post-trap', poprock: 'Pop rock',
  electrorock: 'Electro rock', punkrock: 'Punk rock', jungle: 'Jungle',
  hardcorehiphop: 'Hardcore hip-hop', latintrap: 'Latin trap', westcoasthiphop: 'West Coast hip-hop', nusoul: 'Nu soul', alternativerock: 'Alternative rock', adultalternativepoprock: 'Adult alternative pop/rock', electronica: 'Electronica', downtempo: 'Downtempo', softrock: 'Soft rock', classicalcrossover: 'Classical crossover', drumandbass: 'Drum and bass', itpop: 'It-pop', calypsopop: 'Calypso pop', hiprock: 'Hip-rock', drill: 'Drill', contemporaryrnb: 'Contemporary R&B', hiphopsoul: 'Hip-hop soul', bubblegumpop: 'Bubblegum pop', europop: 'Europop', chillout: 'Chill-out', downbeat: 'Downbeat', electro: 'Electro', rave: 'Rave', ambientbreakbeat: 'Ambient breakbeat',
  bigbeat: 'Big beat', chillwave: 'Chillwave', synthwave: 'Synthwave', hardhouse: 'Hard house', techhouse: 'Tech house', acousticpop: 'Acoustic pop', teenpop: 'Teen pop', altpop: 'Alt-pop', countrypop: 'Country pop', gfunk: 'G-funk', bluegrass: 'Bluegrass', discopop: 'Disco-pop', yachtrock: 'Yacht rock', quietstorm: 'Quiet storm',
  dub: 'Dub', experimental: 'Experimental', experimentaltechno: 'Experimental techno', gothabilly: 'Gothabilly', idm: 'IDM', minimaltechno: 'Minimal techno', neofolk: 'Neofolk', postpunk: 'Post-punk', postrock: 'Post-rock', shoegaze: 'Shoegaze', surfrock: 'Surf rock',
  altcountry: 'Alt-country', electrogaze: 'Electrogaze', electropunk: 'Electropunk', gothicamericana: 'Gothic Americana', indieelectronic: 'Indie electronic', krautrock: 'Krautrock', neoambient: 'Neo-ambient', postgoth: 'Post-goth', slowcore: 'Slowcore',
  indiedance: 'Indie dance', noiserock: 'Noise rock', spacerock: 'Space rock', psychedelicrock: 'Psychedelic rock',
  electrodisco: 'Electro-disco', glamrock: 'Glam rock', hinrg: 'Hi-NRG', technopop: 'Technopop', eurodisco: 'Euro disco', postindustrial: 'Post-industrial', complextro: 'Complextro', melodicdubstep: 'Melodic dubstep',
  americana: 'Americana', bigband: 'Big band', bluesrock: 'Blues rock', countryrock: 'Country rock', eurohouse: 'Euro house', pianorock: 'Piano rock', swing: 'Swing', traditionalpop: 'Traditional pop', vocaljazz: 'Vocal jazz',
  deconstructedclub: 'Deconstructed club', divahouse: 'Diva house', easylistening: 'Easy listening', glitchpop: 'Glitch pop', showtunes: 'Show tunes', standards: 'Standards', surfpunk: 'Surf punk',
  industrialdance: 'Industrial dance', electrogrunge: 'Electro-grunge', techstep: 'Techstep', boogie: 'Boogie', aor: 'AOR', powerballad: 'Power ballad', hairmetal: 'Hair metal',
  jazzpop: 'Jazz pop', adultcontemporary: 'Adult contemporary', rockopera: 'Rock opera',
  folktronica: 'Folktronica', chamberpop: 'Chamber pop',
  baltimoreclub: 'Baltimore club', cloudpop: 'Cloud pop', doowop: 'Doo-wop', musicaltheatre: 'Musical theatre', neopsychedelia: 'Neo-psychedelia',
  souljazz: 'Soul jazz', popsoul: 'Pop soul', acidjazz: 'Acid jazz', northernsoul: 'Northern soul', loversrock: 'Lovers rock',
  christmas: 'Christmas',
  smoothsoul: 'Smooth soul', synthfunk: 'Synth-funk',
  orchestralpop: 'Orchestral pop',
  balearicbeat: 'Balearic beat',
  schlager: 'Schlager', folkrock: 'Folk rock', baroquepop: 'Baroque pop', phillysoul: 'Philly soul',
  progressivepop: 'Progressive pop', dancerock: 'Dance-rock', hardrock: 'Hard rock',
  garagerock: 'Garage rock', protodisco: 'Proto-disco', psychedelicpop: 'Psychedelic pop', sunshinepop: 'Sunshine pop',
  rockandroll: 'Rock and roll', minimalsynth: 'Minimal synth', spacedisco: 'Space disco', progressiveelectronic: 'Progressive electronic',
  darkambient: 'Dark ambient',
  modernclassical: 'Modern classical',
  videogamemusic: 'Video game music', electronoir: 'Electro-noir', retrowave: 'Retrowave',
  coldwave: 'Coldwave', ebm: 'EBM',
  ambientpop: 'Ambient pop', lounge: 'Lounge', spaceagepop: 'Space age pop', spacepop: 'Space pop',
  experimentalelectronic: 'Experimental electronic', artrock: 'Art rock', drone: 'Drone', musiqueconcrete: 'Musique concrète', avantgarde: 'Avant-garde', berlinschool: 'Berlin School', postminimalism: 'Post-minimalism',
  experimentalrock: 'Experimental rock', protopunk: 'Proto-punk',
  boogiewoogie: 'Boogie-woogie', italianpop: 'Italian pop', musicaleggera: 'Musica leggera',
  blueeyedsoul: 'Blue-eyed soul',
  mpb: 'MPB', samba: 'Samba', tropicalia: 'Tropicália', chanson: 'Chanson', ballad: 'Ballad',
  twist: 'Twist', tango: 'Tango',
  latinpop: 'Latin pop', rumba: 'Rumba', tarantella: 'Tarantella',
  childrensmusic: "Children's music", liscio: "Liscio", waltz: "Waltz", pasodoble: "Pasodoble", march: "March", polka: "Polka", sonjarocho: "Son jarocho",
  freestyle: 'Freestyle',
  alternativernb: 'Alternative R&B', psychedelicsoul: 'Psychedelic soul', contemporarygospel: 'Contemporary gospel', retrosoul: 'Retro-soul', dreamtrance: 'Dream trance', dreamhouse: 'Dream house', progressivehouse: 'Progressive house', melodictrance: 'Melodic trance', newage: 'New age', worldmusic: 'World music', italodance: 'Italo dance', acidtechno: 'Acid techno', frenchhouse: 'French house', chicagohouse: 'Chicago house', leftfieldhouse: 'Leftfield house', childrenspop: 'Children’s pop', novelty: 'Novelty', neoclassical: 'Neoclassical', microsound: 'Microsound', celtic: 'Celtic', celticfolk: 'Celtic folk', celticnewage: 'Celtic new age', celticpop: 'Celtic pop', contemporaryceltic: 'Contemporary Celtic', contemporaryinstrumental: 'Contemporary instrumental', etherealwave: 'Ethereal wave', ethnicfusion: 'Ethnic fusion', neoclassicalnewage: 'Neoclassical new age', breakbeathardcore: 'Breakbeat hardcore', hardcoretechno: 'Hardcore techno', breakbeattechno: 'Breakbeat techno', raggajungle: 'Ragga jungle', funkybreaks: 'Funky breaks', acidbreaks: 'Acid breaks', worldbeat: 'Worldbeat', clubdance: 'Club/dance', psychedelia: 'Psychedelia', darkjazz: 'Dark jazz', illbient: 'Illbient', turntablism: 'Turntablism', spymusic: 'Spy music', jazzfusion: 'Jazz fusion', raregroove: 'Rare groove', ukhiphop: 'UK hip-hop', ukstreetsoul: 'UK street soul', alternativepoprock: 'Alternative pop/rock', industrialrock: 'Industrial rock', ambienttechno: 'Ambient techno', hardcore: 'Hardcore', happyhardcore: 'Happy hardcore', afrohouse: 'Afro house', rockabilly: 'Rockabilly', alternativeindierock: 'Alternative/indie rock', posthardcore: 'Post-hardcore', contemporarypoprock: 'Contemporary pop/rock', ragga: 'Ragga', soulpop: 'Soul-pop', hippop: 'Hip-pop', southernhiphop: 'Southern hip-hop', newyorkpunk: 'New York punk', girlgrouppop: 'Girl-group pop', motown: 'Motown', filterhouse: 'Filter house', skapunk: 'Ska punk', thirdwaveskarevival: 'Third-wave ska revival', postgrunge: 'Post-grunge', twotone: '2 Tone', latinhouse: 'Latin house', salsa: 'Salsa', christianrock: 'Christian rock', ccm: 'Contemporary Christian', pophouse: 'Pop house', vaporwave: 'Vaporwave', edmpop: 'EDM-pop', futurehouse: 'Future house', italohouse: 'Italo house', poptrap: 'Pop-trap', rap: 'Rap', cuban: 'Cuban music', bolero: 'Bolero', cabaret: 'Cabaret', neosoul: 'Neo-soul', funkrock: 'Funk rock', acidrock: 'Acid rock', urbano: 'Urbano', cumbia: 'Cumbia', ranchera: 'Ranchera', guaracha: 'Guaracha', pasillo: 'Pasillo', bhangra: 'Bhangra', celticrock: 'Celtic rock', janglepop: 'Jangle pop', ampop: 'AM pop', adultcontemporaryrnb: 'Adult contemporary R&B', musichall: 'Music hall', progfolk: 'Prog folk', psychfolk: 'Psych folk', psychedelicfolkrock: 'Psychedelic folk rock', eurotechno: 'Eurotechno', albumrock: 'Album rock', avantgardejazz: 'Avant-garde jazz', plasticsoul: 'Plastic soul', avantfunk: 'Avant-funk', sophistipop: 'Sophisti-pop', acidpop: 'Acid pop', toytownpop: 'Toytown pop', psychedelicfolk: 'Psychedelic folk', symphonicprog: 'Symphonic prog', symphonicrock: 'Symphonic rock', baggy: 'Baggy', noisepop: 'Noise pop', neoglam: 'Neo-glam',
}

// "Italy · from the 1960s · Singer-songwriter, Pop"
export function sceneLine(artistId: string): string | null {
  const s = SCENES[artistId]
  if (!s) return null
  return `${COUNTRY_NAMES[s.country] ?? s.country} · from the ${s.since}s · ${s.genres.map((g) => GENRE_LABELS[g]).join(', ')}`
}

// "from the United States", "from Italy".
export const fromCountry = (name: string) => `from ${/^(United|Netherlands|Philippines|Dominican|Czech|Bahamas)/.test(name) ? 'the ' : ''}${name}`

// Global English-language markets: everyone already hears them, so discovery never pushes towards
// them (no bonus, no Bridge, no "scene you don't know yet"). Discovery goes to local scenes
// (Italy, Brazil, Spain and Latin America, France, Afro, Korea… see ROADMAP "Scenes").
export const GLOBAL_MARKETS = new Set(['US', 'GB', 'CA', 'AU', 'IE'])
export const isLocalScene = (country?: string) => Boolean(country && !GLOBAL_MARKETS.has(country))
// The scenes of the owner's plan (Italy, Brazil, Spain and Latin America, France, Afro, Korea): always
// local, whatever the language (Afrobeats is often sung in English or Pidgin).
export const PLAN_SCENE_COUNTRIES = new Set(['IT', 'BR', 'ES', 'MX', 'CO', 'AR', 'PR', 'CL', 'PE', 'VE', 'CU', 'DO', 'UY', 'EC', 'PA', 'GT', 'FR', 'BE', 'CH', 'NG', 'ZA', 'GH', 'KR'])
// A local-scene artist: from a plan scene, or outside the global markets and singing mainly in a
// language other than English (Robyn or Kim Petras sing English pop: global, not a scene to discover).
export const isLocalArtist = (artistId?: string) => {
  const s = artistId ? SCENES[artistId] : undefined
  return Boolean(s && isLocalScene(s.country) && (PLAN_SCENE_COUNTRIES.has(s.country) || s.lang !== 'en'))
}
