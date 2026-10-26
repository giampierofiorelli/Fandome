// Broader parent genres, so related genres count as close (deep house → house → dance).
// Typed against Genre: every genre added to scenes.ts must get its parents here (or [] for a root).
import type { Genre } from './scenes'

export const GENRE_PARENTS: Record<Genre, Genre[]> = {
  // roots
  pop: [], dance: [], electronic: [], rock: [], hiphop: [], rnb: [], jazz: [], folk: [], country: [], latin: [], afro: [], classical: [], reggae: [],
  // pop family
  synthpop: ['pop', 'electronic'], electropop: ['pop', 'electronic'], dancepop: ['pop', 'dance'], artpop: ['pop'], experimentalpop: ['pop'],
  avantpop: ['experimentalpop'], leftfieldpop: ['experimentalpop'], hyperpop: ['experimentalpop', 'electronic'], bubblegumbass: ['hyperpop'],
  clubpop: ['pop', 'dance'], wonkypop: ['experimentalpop', 'electronic'], futurepop: ['synthpop'], indiepop: ['indie', 'pop'], dreampop: ['indie', 'pop'],
  gothpop: ['pop', 'darkwave'], urbanpop: ['pop', 'rnb', 'hiphop'], folkpop: ['folk', 'pop'], powerpop: ['pop', 'rock'], kpop: ['pop'],
  songwriter: ['pop', 'folk'], soundtrack: [], opera: ['classical'], // soundtrack is a format, not a sound (FORMAT_GENRES in similar.ts)
  // dance / electronic
  disco: ['dance', 'funk'], nudisco: ['disco'], italodisco: ['disco', 'synthpop'], postdisco: ['disco'], eurodance: ['dance', 'pop'],
  house: ['dance', 'electronic'], deephouse: ['house'], acidhouse: ['house'], gospelhouse: ['house', 'gospel'], pianohouse: ['house'],
  tropicalhouse: ['house'], electrohouse: ['house'], bloghouse: ['house', 'electroclash'], frenchtouch: ['house', 'disco'],
  techno: ['electronic', 'dance'], trance: ['electronic', 'dance'], eurotrance: ['trance', 'eurodance'], edm: ['electronic', 'dance'],
  electroclash: ['electronic', 'dance'], ambient: ['electronic'], triphop: ['electronic', 'hiphop'], dubstep: ['electronic'],
  breakbeat: ['electronic'], jungle: ['breakbeat'], garage: ['dance'], ukgarage: ['garage', 'electronic'], footwork: ['electronic', 'dance'],
  neorave: ['electronic', 'dance'], industrial: ['electronic', 'rock'], alternativedance: ['dance', 'indie'], indietronica: ['indie', 'electronic'],
  // rock family
  alt: ['rock'], indie: ['alt'], metal: ['rock'], punk: ['rock'], prog: ['rock'], grunge: ['alt'], britpop: ['rock', 'pop'],
  poprock: ['rock', 'pop'], poppunk: ['punk', 'pop'], punkrock: ['punk'], indierock: ['indie', 'rock'], slackerrock: ['indierock'],
  postpunkrevival: ['indierock', 'punk'], electrorock: ['rock', 'electronic'], newwave: ['rock', 'synthpop'], darkwave: ['newwave', 'electronic'],
  // soul / r&b / hip-hop
  soul: ['rnb'], funk: ['soul'], gospel: ['soul'], blues: ['soul'], popfunk: ['funk', 'pop'], electrofunk: ['funk', 'electronic'],
  newjackswing: ['rnb', 'hiphop'], trap: ['hiphop'], trappop: ['trap', 'pop'], gothtrap: ['trap'], posttrap: ['trap'], poprap: ['hiphop', 'pop'],
  grime: ['hiphop', 'electronic'],
  // regional
  reggaeton: ['latin', 'dance'], dancehall: ['reggae', 'dance'], ska: ['reggae', 'punk'], kuduro: ['afro', 'dance'], afrobeat: ['afro'],
  funkbr: ['dance', 'hiphop'], bossanova: ['jazz', 'latin'], flamenco: ['folk', 'latin'], fado: ['folk'], caboverde: ['afro', 'folk'],
  sertanejo: ['country'], pagode: ['folk'], forro: ['folk'],
  // added Oct 2026 (Elisa, Lazza, Röyksopp, Robyn, Geolier, Madame research)
  hardcorehiphop: ['hiphop'], latintrap: ['trap', 'latin'], westcoasthiphop: ['hiphop'], nusoul: ['soul'],
  alternativerock: ['alt'], adultalternativepoprock: ['poprock', 'alt'], electronica: ['electronic'], downtempo: ['electronic'],
  softrock: ['rock', 'pop'], classicalcrossover: ['classical', 'pop'], drumandbass: ['breakbeat'], itpop: ['indiepop'],
  calypsopop: ['pop', 'reggae'], hiprock: ['hiphop', 'rock'], drill: ['trap'], contemporaryrnb: ['rnb'],
  hiphopsoul: ['rnb', 'hiphop'], bubblegumpop: ['pop'], europop: ['pop', 'dance'], chillout: ['downtempo', 'ambient'],
  downbeat: ['downtempo'], electro: ['electronic', 'dance'], rave: ['electronic', 'dance'], ambientbreakbeat: ['ambient', 'breakbeat'],
  bigbeat: ['breakbeat', 'electronic'], chillwave: ['synthpop', 'indie'], synthwave: ['synthpop', 'electronic'], hardhouse: ['house'], techhouse: ['house', 'techno'], acousticpop: ['pop', 'folk'], teenpop: ['pop'], altpop: ['pop', 'alt'], countrypop: ['country', 'pop'], gfunk: ['hiphop', 'funk'], bluegrass: ['country', 'folk'], discopop: ['disco', 'pop'], yachtrock: ['softrock'], quietstorm: ['rnb', 'soul'],
  dub: ['reggae', 'electronic'], experimental: ['electronic'], experimentaltechno: ['techno'], gothabilly: ['rock'], idm: ['electronic'], minimaltechno: ['techno'], neofolk: ['folk'], postpunk: ['punk', 'rock'], postrock: ['rock'], shoegaze: ['indie', 'rock'], surfrock: ['rock'],
  altcountry: ['country', 'alt'], electrogaze: ['electronic', 'shoegaze'], electropunk: ['electronic', 'punk'], gothicamericana: ['rock', 'folk'], indieelectronic: ['indie', 'electronic'], krautrock: ['rock', 'experimental'], neoambient: ['ambient'], postgoth: ['postpunk', 'darkwave'], slowcore: ['indie', 'rock'],
  indiedance: ['dance', 'indie'], noiserock: ['rock'], spacerock: ['rock'], psychedelicrock: ['rock'],
  electrodisco: ['disco', 'electronic'], glamrock: ['rock'], hinrg: ['dance', 'disco'], technopop: ['electronic', 'pop'], eurodisco: ['disco'], postindustrial: ['industrial'], complextro: ['electrohouse', 'electronic'], melodicdubstep: ['dubstep'],
  americana: ['country', 'folk', 'rock'], bigband: ['jazz'], bluesrock: ['blues', 'rock'], countryrock: ['country', 'rock'], eurohouse: ['house', 'eurodance'], pianorock: ['rock', 'pop'], swing: ['jazz'], traditionalpop: ['pop', 'jazz'], vocaljazz: ['jazz'],
  deconstructedclub: ['electronic', 'experimental'], divahouse: ['house', 'dance'], easylistening: ['pop'], glitchpop: ['electropop', 'experimentalpop'], showtunes: ['traditionalpop'], standards: ['traditionalpop', 'jazz'], surfpunk: ['surfrock', 'punk'],
  industrialdance: ['industrial', 'dance'], electrogrunge: ['electronic', 'grunge'], techstep: ['drumandbass'], boogie: ['funk', 'disco'], aor: ['rock', 'softrock'], powerballad: ['rock', 'pop'], hairmetal: ['metal', 'rock'],
  jazzpop: ['jazz', 'pop'], adultcontemporary: ['pop'], rockopera: ['rock', 'showtunes'],
  folktronica: ['folk', 'electronic'], chamberpop: ['pop'],
  baltimoreclub: ['house', 'breakbeat'], cloudpop: ['pop', 'electronic'], doowop: ['rnb', 'pop'], musicaltheatre: ['showtunes'], neopsychedelia: ['psychedelicrock', 'indie'],
  souljazz: ['jazz', 'soul'], popsoul: ['pop', 'soul'], acidjazz: ['jazz', 'funk'], northernsoul: ['soul'], loversrock: ['reggae'],
  christmas: ['traditionalpop'], // sleigh bells, orchestras, standards: close to traditional pop
  smoothsoul: ['soul', 'rnb'], synthfunk: ['funk', 'electronic'],
  orchestralpop: ['pop'],
  balearicbeat: ['dance', 'electronic'],
  schlager: ['pop', 'traditionalpop'], folkrock: ['folk', 'rock'], baroquepop: ['pop'], phillysoul: ['soul', 'disco'],
  progressivepop: ['pop', 'prog'], dancerock: ['dance', 'rock'], hardrock: ['rock'],
  garagerock: ['rock'], protodisco: ['disco'], psychedelicpop: ['pop'], sunshinepop: ['pop'],
  rockandroll: ['rock'], minimalsynth: ['electronic'], spacedisco: ['disco', 'electronic'], progressiveelectronic: ['electronic', 'prog'],
  darkambient: ['ambient'],
  modernclassical: ['classical'],
  videogamemusic: [], electronoir: ['electronic'], retrowave: ['synthwave'], // video game music is a format, like soundtrack
  coldwave: ['postpunk', 'darkwave'], ebm: ['industrial', 'electronic'],
  ambientpop: ['ambient', 'pop'], lounge: ['easylistening', 'jazz'], spaceagepop: ['easylistening'], spacepop: ['pop', 'psychedelicpop'],
  experimentalelectronic: ['electronic', 'experimental'], artrock: ['rock', 'experimental'], drone: ['experimental', 'ambient'], musiqueconcrete: ['experimental', 'avantgarde'], avantgarde: ['experimental'], berlinschool: ['progressiveelectronic', 'ambient'], postminimalism: ['modernclassical'],
  experimentalrock: ['rock', 'experimental'], protopunk: ['punk', 'rock'],
  boogiewoogie: ['blues', 'rockandroll'], italianpop: ['pop'], musicaleggera: ['italianpop', 'traditionalpop'],
  blueeyedsoul: ['soul', 'pop'],
  mpb: ['latin', 'pop'], samba: ['latin'], tropicalia: ['mpb', 'psychedelicrock'], chanson: ['traditionalpop', 'songwriter'], ballad: ['pop'],
  twist: ['rockandroll', 'dance'], tango: ['latin'],
  latinpop: ['latin', 'pop'], rumba: ['latin'], tarantella: ['folk'],
  childrensmusic: ['pop'], liscio: ['folk', 'dance'], waltz: ['dance'], pasodoble: ['dance', 'latin'], march: ['classical'], polka: ['folk', 'dance'], sonjarocho: ['folk', 'latin'],
  freestyle: ['dance', 'latin'],
  alternativernb: ['rnb', 'alt'], psychedelicsoul: ['soul', 'psychedelicrock'], contemporarygospel: ['gospel', 'rnb'], retrosoul: ['soul'], dreamtrance: ['trance'], dreamhouse: ['house', 'trance'], progressivehouse: ['house'], melodictrance: ['trance'], newage: ['ambient'], worldmusic: ['folk'], italodance: ['eurodance', 'dance'], acidtechno: ['techno', 'acidhouse'], frenchhouse: ['house', 'disco'], chicagohouse: ['house'], leftfieldhouse: ['house', 'experimentalelectronic'], childrenspop: ['childrensmusic', 'pop'], novelty: ['pop'], neoclassical: ['modernclassical', 'classical'], microsound: ['experimentalelectronic', 'ambient'], celtic: ['folk'], celticfolk: ['celtic', 'folk'], celticnewage: ['newage', 'celtic'], celticpop: ['celtic', 'pop'], contemporaryceltic: ['celtic'], contemporaryinstrumental: ['newage'], etherealwave: ['darkwave', 'dreampop'], ethnicfusion: ['worldmusic'], neoclassicalnewage: ['newage', 'neoclassical'], breakbeathardcore: ['breakbeat', 'rave'], hardcoretechno: ['techno', 'rave'], breakbeattechno: ['breakbeat', 'techno'], raggajungle: ['jungle', 'reggae'], funkybreaks: ['breakbeat', 'funk'], acidbreaks: ['breakbeat', 'acidhouse'], worldbeat: ['worldmusic', 'pop'], clubdance: ['dance', 'electronic'], psychedelia: ['psychedelicrock'], darkjazz: ['jazz', 'ambient'], illbient: ['ambient', 'hiphop'], turntablism: ['hiphop'], spymusic: ['jazz', 'easylistening'], jazzfusion: ['jazz', 'funk'], raregroove: ['funk', 'soul'], ukhiphop: ['hiphop'], ukstreetsoul: ['rnb', 'soul'], alternativepoprock: ['alt', 'pop', 'rock'], industrialrock: ['industrial', 'rock'], ambienttechno: ['ambient', 'techno'], hardcore: ['punk', 'rave'], happyhardcore: ['rave', 'electronic'], afrohouse: ['house', 'afro'], rockabilly: ['rockandroll', 'country'], alternativeindierock: ['alternativerock', 'indierock'], posthardcore: ['punkrock', 'hardcore'], contemporarypoprock: ['pop', 'rock'], ragga: ['reggae', 'dancehall'], soulpop: ['pop', 'soul'], hippop: ['pop', 'hiphop'], southernhiphop: ['hiphop'], newyorkpunk: ['punk'], girlgrouppop: ['pop', 'doowop'], motown: ['soul'], filterhouse: ['frenchhouse', 'house'], skapunk: ['ska', 'punk'], thirdwaveskarevival: ['ska', 'punk'], postgrunge: ['grunge', 'alternativerock'], twotone: ['ska', 'newwave'], latinhouse: ['house', 'latin'], salsa: ['latin', 'dance'], christianrock: ['rock', 'gospel'], ccm: ['gospel', 'pop'], pophouse: ['house', 'pop'], vaporwave: ['chillwave', 'electronic'], edmpop: ['edm', 'pop'], futurehouse: ['house', 'edm'], italohouse: ['house', 'italodance'], poptrap: ['trap', 'pop'], rap: ['hiphop'], cuban: ['latin'], bolero: ['latin', 'traditionalpop'], cabaret: ['traditionalpop', 'jazz'], neosoul: ['nusoul', 'soul'], funkrock: ['funk', 'rock'], acidrock: ['psychedelicrock', 'rock'], urbano: ['latin', 'hiphop'], cumbia: ['latin'], ranchera: ['latin', 'folk'], guaracha: ['latin'], pasillo: ['latin', 'folk'], bhangra: ['worldmusic', 'dance'], celticrock: ['celtic', 'rock'], janglepop: ['indiepop', 'poprock'], ampop: ['pop', 'softrock'], adultcontemporaryrnb: ['contemporaryrnb', 'adultcontemporary'], musichall: ['traditionalpop'], progfolk: ['folk', 'prog'], psychfolk: ['folk', 'psychedelia'], psychedelicfolkrock: ['folkrock', 'psychedelicrock'], eurotechno: ['techno', 'eurodance'], albumrock: ['rock'], avantgardejazz: ['jazz', 'avantgarde'], plasticsoul: ['blueeyedsoul', 'soul'], avantfunk: ['funk', 'experimental'], sophistipop: ['pop', 'jazzpop'], acidpop: ['psychedelicpop', 'pop'], toytownpop: ['psychedelicpop', 'pop'], psychedelicfolk: ['folk', 'psychedelia'],
}
