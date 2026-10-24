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
  songwriter: ['pop', 'folk'], soundtrack: ['classical'], opera: ['classical'],
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
}
