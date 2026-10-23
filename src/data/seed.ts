// Demo data for the prototype. Artist names identify topics only:
// no official artwork, logos or content. Upcoming dates are fictional.
import type { Album, Artist, ChatMessage, Concert, Party, Post, StarterPack, User } from './types'

export const artists: Artist[] = [
  {
    id: 'madonna',
    name: 'Madonna',
    color: '#e8457c',
    tagline: '40+ years of reinvention, one room',
    feeds: [
      { id: 'live', label: 'Live', tags: ['live', 'tour', 'setlist'] },
      { id: 'eras', label: 'Eras', tags: ['rayoflight', 'confessions', 'likeaprayer', 'eras'] },
      { id: 'collectors', label: 'Collectors', tags: ['vinyl', 'collection', 'rare'] },
    ],
  },
  {
    id: 'kylie',
    name: 'Kylie Minogue',
    color: '#f0a43a',
    tagline: 'Pop, disco and lovers',
    feeds: [
      { id: 'live', label: 'Live', tags: ['live', 'tour'] },
      { id: 'eras', label: 'Eras', tags: ['fever', 'disco', 'tension', 'eras'] },
    ],
  },
  {
    id: 'psb',
    name: 'Pet Shop Boys',
    color: '#3ab5f0',
    tagline: 'Synth-pop for clever people',
    feeds: [
      { id: 'live', label: 'Live', tags: ['live', 'tour'] },
      { id: 'eras', label: 'Eras', tags: ['actually', 'very', 'eras'] },
    ],
  },
  {
    id: 'depeche',
    name: 'Depeche Mode',
    color: '#9b7cf0',
    tagline: 'Devotees welcome',
    feeds: [
      { id: 'live', label: 'Live', tags: ['live', 'tour', 'setlist'] },
      { id: 'eras', label: 'Eras', tags: ['violator', '101', 'eras'] },
    ],
  },
  {
    id: 'gaga',
    name: 'Lady Gaga',
    color: '#5fd38d',
    tagline: 'Little monsters, big room',
    feeds: [
      { id: 'live', label: 'Live', tags: ['live', 'tour'] },
      { id: 'eras', label: 'Eras', tags: ['thefame', 'bornthisway', 'mayhem', 'eras'] },
    ],
  },
]

export const albums: Album[] = [
  { id: 'm-virgin', artistId: 'madonna', title: 'Like a Virgin', year: 1984 },
  { id: 'm-trueblue', artistId: 'madonna', title: 'True Blue', year: 1986 },
  { id: 'm-prayer', artistId: 'madonna', title: 'Like a Prayer', year: 1989 },
  { id: 'm-ray', artistId: 'madonna', title: 'Ray of Light', year: 1998 },
  { id: 'm-music', artistId: 'madonna', title: 'Music', year: 2000 },
  { id: 'm-confessions', artistId: 'madonna', title: 'Confessions on a Dance Floor', year: 2005 },
  { id: 'k-lightyears', artistId: 'kylie', title: 'Light Years', year: 2000 },
  { id: 'k-fever', artistId: 'kylie', title: 'Fever', year: 2001 },
  { id: 'k-disco', artistId: 'kylie', title: 'Disco', year: 2020 },
  { id: 'k-tension', artistId: 'kylie', title: 'Tension', year: 2023 },
  { id: 'p-actually', artistId: 'psb', title: 'Actually', year: 1987 },
  { id: 'p-behaviour', artistId: 'psb', title: 'Behaviour', year: 1990 },
  { id: 'p-very', artistId: 'psb', title: 'Very', year: 1993 },
  { id: 'p-nonetheless', artistId: 'psb', title: 'Nonetheless', year: 2024 },
  { id: 'd-masses', artistId: 'depeche', title: 'Music for the Masses', year: 1987 },
  { id: 'd-violator', artistId: 'depeche', title: 'Violator', year: 1990 },
  { id: 'd-sofad', artistId: 'depeche', title: 'Songs of Faith and Devotion', year: 1993 },
  { id: 'd-memento', artistId: 'depeche', title: 'Memento Mori', year: 2023 },
  { id: 'g-fame', artistId: 'gaga', title: 'The Fame', year: 2008 },
  { id: 'g-btw', artistId: 'gaga', title: 'Born This Way', year: 2011 },
  { id: 'g-chromatica', artistId: 'gaga', title: 'Chromatica', year: 2020 },
  { id: 'g-mayhem', artistId: 'gaga', title: 'Mayhem', year: 2025 },
]

export const concerts: Concert[] = [
  {
    id: 'm-turin-1987',
    artistId: 'madonna',
    tour: "Who's That Girl World Tour",
    venue: 'Stadio Comunale',
    city: 'Turin',
    country: 'Italy',
    date: '1987-09-04',
    setlist: ['Open Your Heart', 'Lucky Star', 'True Blue', 'Papa Don’t Preach', 'White Heat', 'Causing a Commotion', 'Like a Virgin', 'Live to Tell', 'Into the Groove', 'La Isla Bonita', 'Who’s That Girl', 'Holiday'],
  },
  {
    id: 'm-rio-2024',
    artistId: 'madonna',
    tour: 'The Celebration Tour',
    venue: 'Copacabana Beach',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    date: '2024-05-04',
    setlist: ['Nothing Really Matters', 'Everybody', 'Into the Groove', 'Burning Up', 'Open Your Heart', 'Holiday', 'Live to Tell', 'Like a Prayer', 'Erotica', 'Hung Up', 'Bitch I’m Madonna', 'Celebration'],
  },
  {
    id: 'm-milan-2027',
    artistId: 'madonna',
    tour: 'Demo Tour 2027',
    venue: 'San Siro',
    city: 'Milan',
    country: 'Italy',
    date: '2027-06-14',
    setlist: [],
  },
  {
    id: 'k-glasto-2019',
    artistId: 'kylie',
    tour: 'Glastonbury Festival',
    venue: 'Pyramid Stage',
    city: 'Pilton',
    country: 'UK',
    date: '2019-06-30',
    setlist: ['Love at First Sight', 'In Your Eyes', 'Get Outta My Way', 'Spinning Around', 'I Should Be So Lucky', 'Can’t Get You Out of My Head', 'Better the Devil You Know'],
  },
  {
    id: 'd-rosebowl-1988',
    artistId: 'depeche',
    tour: 'Music for the Masses Tour',
    venue: 'Rose Bowl',
    city: 'Pasadena',
    country: 'USA',
    date: '1988-06-18',
    setlist: ['Pimpf', 'Behind the Wheel', 'Strangelove', 'Something to Do', 'Blasphemous Rumours', 'Stripped', 'Somebody', 'Things You Said', 'Never Let Me Down Again', 'Black Celebration', 'Just Can’t Get Enough', 'Everything Counts'],
  },
  {
    id: 'p-london-2027',
    artistId: 'psb',
    tour: 'Demo Tour 2027',
    venue: 'O2 Arena',
    city: 'London',
    country: 'UK',
    date: '2027-03-20',
    setlist: [],
  },
]

const blank = { attended: [], going: [], ratings: {}, top4: [], fanSince: {}, following: [] }

export const seedUsers: User[] = [
  { ...blank, id: 'u-giulia', handle: 'giulia_vogue', name: 'Giulia', color: '#e8457c', bio: 'Turin ’87 changed my life. Collector of 12" remixes.', location: 'Turin, IT', fanSince: { madonna: 1984 }, top4: ['m-trueblue', 'm-prayer', 'm-ray', 'm-confessions'], attended: ['m-turin-1987', 'm-rio-2024'], going: ['m-milan-2027'], ratings: { 'm-ray': 5, 'm-prayer': 5, 'm-music': 4 } },
  { ...blank, id: 'u-rafa', handle: 'rafa.celebration', name: 'Rafael', color: '#5fd38d', bio: 'Copacabana, 1.6M of us. I was there.', location: 'Rio de Janeiro, BR', fanSince: { madonna: 2005, gaga: 2008 }, top4: ['m-confessions', 'm-music', 'g-btw', 'g-chromatica'], attended: ['m-rio-2024'], ratings: { 'm-confessions': 5, 'g-btw': 4.5 } },
  { ...blank, id: 'u-sam', handle: 'samdevotee', name: 'Sam', color: '#9b7cf0', bio: 'Rose Bowl ’88 kid. Synths > everything.', location: 'Los Angeles, US', fanSince: { depeche: 1986, psb: 1987 }, top4: ['d-violator', 'd-masses', 'p-actually', 'p-very'], attended: ['d-rosebowl-1988'], going: ['p-london-2027'], ratings: { 'd-violator': 5, 'p-very': 4.5 } },
  { ...blank, id: 'u-emma', handle: 'emmaspinning', name: 'Emma', color: '#f0a43a', bio: 'Kylie at Glasto, crying in a field.', location: 'Manchester, UK', fanSince: { kylie: 2001, madonna: 2005 }, top4: ['k-fever', 'k-disco', 'k-lightyears', 'm-confessions'], attended: ['k-glasto-2019'], ratings: { 'k-fever': 5, 'k-tension': 4 } },
  { ...blank, id: 'u-kenji', handle: 'kenji_ray', name: 'Kenji', color: '#3ab5f0', bio: 'Ray of Light is a perfect album. Tokyo.', location: 'Tokyo, JP', fanSince: { madonna: 1998 }, top4: ['m-ray', 'm-music', 'm-confessions', 'm-prayer'], ratings: { 'm-ray': 5 } },
  { ...blank, id: 'u-lucia', handle: 'lucia.monster', name: 'Lucía', color: '#5fd38d', bio: 'Little monster from Madrid. Mayhem era.', location: 'Madrid, ES', fanSince: { gaga: 2009, madonna: 2012 }, top4: ['g-mayhem', 'g-btw', 'g-fame', 'm-ray'], ratings: { 'g-mayhem': 4.5 } },
  { ...blank, id: 'u-claire', handle: 'claire_vinyl', name: 'Claire', color: '#e8457c', bio: 'Vinyl, picture discs, promo CDs. Paris.', location: 'Paris, FR', fanSince: { madonna: 1986, psb: 1990 }, top4: ['m-trueblue', 'p-behaviour', 'm-virgin', 'm-prayer'], ratings: { 'm-trueblue': 4.5 } },
  { ...blank, id: 'u-jonas', handle: 'jonas101', name: 'Jonas', color: '#9b7cf0', bio: 'Berlin. Every DM tour since 1990.', location: 'Berlin, DE', fanSince: { depeche: 1990 }, top4: ['d-sofad', 'd-violator', 'd-memento', 'd-masses'], ratings: { 'd-sofad': 5 } },
  { ...blank, id: 'u-ana', handle: 'ana_newfan', name: 'Ana', color: '#f0a43a', bio: 'New here! Found Madonna through TikTok. Where do I start?', location: 'Lisbon, PT', fanSince: { madonna: 2026 } },
  { ...blank, id: 'u-mod', handle: 'fandome', name: 'Fandome Team', color: '#ffffff', bio: 'Independent fan platform. Not affiliated with any artist.', location: 'Everywhere' },
]

const MIN = 60_000
const HOUR = 60 * MIN

export function seedPosts(now: number): Post[] {
  const p = (o: Partial<Post> & Pick<Post, 'id' | 'authorId' | 'text'>, agoMin: number): Post => ({
    lang: 'en',
    likes: [],
    reposts: [],
    ...o,
    createdAt: now - agoMin * MIN,
  })
  return [
    p({ id: 'p1', authorId: 'u-giulia', artistId: 'madonna', concertId: 'm-turin-1987', text: 'Ancora oggi ricordo il caldo di Torino, 4 settembre 1987. Il mio primo concerto in assoluto. #live #turin87', lang: 'it', translation: 'I still remember the heat in Turin, 4 September 1987. My very first concert ever. #live #turin87', likes: ['u-rafa', 'u-claire', 'u-kenji'], image: 'linear-gradient(135deg,#ff6a88,#ff99ac 40%,#2a1a3a)' }, 25),
    p({ id: 'p2', authorId: 'u-rafa', artistId: 'madonna', text: 'Hot take: Confessions is the best pop album of the 2000s and it’s not close. #confessions #eras', likes: ['u-emma', 'u-lucia'], reposts: [{ userId: 'u-emma', at: now - 20 * MIN, tags: ['correct', 'disco never died'] }] }, 50),
    p({ id: 'p3', authorId: 'u-ana', artistId: 'madonna', text: 'Okay I’m new. Where do I start after Hung Up? Be nice 🙏 #newfan', likes: ['u-giulia'] }, 70),
    p({ id: 'p4', authorId: 'u-giulia', replyTo: 'p3', artistId: 'madonna', text: 'Welcome! Ray of Light front to back, then Like a Prayer. Then come tell us everything 💗', likes: ['u-ana', 'u-kenji'] }, 65),
    p({ id: 'p5', authorId: 'u-kenji', replyTo: 'p3', artistId: 'madonna', text: 'Ray of Light. Headphones. Night time. Trust me.', likes: ['u-ana'] }, 60),
    p({ id: 'p6', authorId: 'u-kenji', artistId: 'madonna', review: { albumId: 'm-ray', rating: 5 }, text: 'Sounds like the future even now. "Frozen" with headphones at 2am is a religious experience. #rayoflight', likes: ['u-giulia', 'u-claire', 'u-rafa', 'u-ana'] }, 3 * 60),
    p({ id: 'p7', authorId: 'u-lucia', artistId: 'madonna', text: '¿Cuál es la mejor era? Votad 👇 #eras', lang: 'es', translation: 'Which is the best era? Vote 👇 #eras', poll: { options: [{ label: 'Like a Prayer', votes: ['u-claire', 'u-giulia'] }, { label: 'Ray of Light', votes: ['u-kenji', 'u-ana', 'u-sam'] }, { label: 'Confessions', votes: ['u-rafa', 'u-emma', 'u-lucia'] }] }, likes: ['u-rafa'] }, 4 * 60),
    p({ id: 'p8', authorId: 'u-claire', artistId: 'madonna', text: 'Ma nouvelle trouvaille : le picture disc de True Blue, édition 1986. #vinyl #collection', lang: 'fr', translation: 'My new find: the True Blue picture disc, 1986 edition. #vinyl #collection', image: 'linear-gradient(135deg,#7fd6ff,#2e5bff 55%,#0b1440)', likes: ['u-giulia', 'u-kenji'] }, 5 * 60),
    p({ id: 'p9', authorId: 'u-emma', artistId: 'kylie', concertId: 'k-glasto-2019', text: 'Five years on and I still think about the Pyramid Stage crowd singing every word of Better the Devil You Know. #live', likes: ['u-rafa'] }, 6 * 60),
    p({ id: 'p10', authorId: 'u-emma', artistId: 'kylie', review: { albumId: 'k-fever', rating: 5 }, text: 'Not one skip. Perfectly engineered joy. #fever', likes: ['u-lucia', 'u-rafa'] }, 8 * 60),
    p({ id: 'p11', authorId: 'u-sam', artistId: 'depeche', concertId: 'd-rosebowl-1988', text: '60,000 people. Never Let Me Down Again. The arms. If you know, you know. #live #101', likes: ['u-jonas'], image: 'linear-gradient(135deg,#1b1b2f,#5b3fb0 60%,#c9b6ff)' }, 9 * 60),
    p({ id: 'p12', authorId: 'u-jonas', artistId: 'depeche', text: 'Songs of Faith and Devotion ist unterschätzt. Punkt. #eras', lang: 'de', translation: 'Songs of Faith and Devotion is underrated. Full stop. #eras', likes: ['u-sam'] }, 11 * 60),
    p({ id: 'p13', authorId: 'u-sam', artistId: 'psb', text: 'Who’s going to London in March? Thinking a pre-show meetup near the venue. #tour', concertId: 'p-london-2027', likes: ['u-claire'] }, 13 * 60),
    p({ id: 'p14', authorId: 'u-lucia', artistId: 'gaga', review: { albumId: 'g-mayhem', rating: 4.5 }, text: 'Chaos, but make it couture. Best opening run since The Fame Monster. #mayhem', likes: ['u-rafa'] }, 15 * 60),
    p({ id: 'p15', authorId: 'u-rafa', quoteOf: 'p1', artistId: 'madonna', text: 'From Turin ’87 to Copacabana ’24 — this fandom spans generations and I love it.', likes: ['u-giulia', 'u-ana'] }, 18 * 60),
    p({ id: 'p16', authorId: 'u-mod', text: 'Welcome to Fandome (prototype). Independent fan community — not affiliated with, authorised or sponsored by any artist. Be kind, credit creators, post only what you have the right to share.', likes: [] }, 30 * 60),
    p({ id: 'p17', authorId: 'u-giulia', artistId: 'madonna', concertId: 'm-milan-2027', text: 'Milan 2027 crew forming 🇮🇹 who’s in? #tour', likes: ['u-claire', 'u-kenji'] }, 26 * 60),
    p({ id: 'p18', authorId: 'u-claire', artistId: 'psb', review: { albumId: 'p-behaviour', rating: 4.5 }, text: 'Their most melancholic and beautiful record. "Being Boring" still wrecks me. #eras', likes: ['u-sam'] }, 28 * 60),
  ]
}

export const starterPacks: StarterPack[] = [
  { id: 'sp-madonna', artistId: 'madonna', title: 'Madonna Starter Pack', curatorId: 'u-giulia', userIds: ['u-giulia', 'u-rafa', 'u-kenji', 'u-claire', 'u-ana'] },
  { id: 'sp-kylie', artistId: 'kylie', title: 'Kylie Starter Pack', curatorId: 'u-emma', userIds: ['u-emma', 'u-rafa'] },
  { id: 'sp-psb', artistId: 'psb', title: 'Pet Shop Boys Starter Pack', curatorId: 'u-sam', userIds: ['u-sam', 'u-claire'] },
  { id: 'sp-depeche', artistId: 'depeche', title: 'Devotees Starter Pack', curatorId: 'u-jonas', userIds: ['u-jonas', 'u-sam'] },
  { id: 'sp-gaga', artistId: 'gaga', title: 'Little Monsters Starter Pack', curatorId: 'u-lucia', userIds: ['u-lucia', 'u-rafa'] },
]

export const parties: Party[] = [
  {
    id: 'party-confessions',
    artistId: 'madonna',
    title: 'Confessions on a Dance Floor — full album listening party',
    hostId: 'u-rafa',
    tracks: [
      { title: 'Hung Up', seconds: 337 },
      { title: 'Get Together', seconds: 330 },
      { title: 'Sorry', seconds: 283 },
      { title: 'Future Lovers', seconds: 291 },
      { title: 'I Love New York', seconds: 251 },
      { title: 'Let It Will Be', seconds: 258 },
      { title: 'Forbidden Love', seconds: 262 },
      { title: 'Jump', seconds: 226 },
      { title: 'How High', seconds: 280 },
      { title: 'Isaac', seconds: 363 },
      { title: 'Push', seconds: 237 },
      { title: 'Like It or Not', seconds: 271 },
    ],
  },
]

export function seedChats(now: number): Record<string, ChatMessage[]> {
  const m = (id: string, userId: string, text: string, agoMin: number): ChatMessage => ({ id, userId, text, at: now - agoMin * MIN })
  return {
    'concert:m-turin-1987': [
      m('c1', 'u-giulia', 'Anyone else here was in the curva? 🙋‍♀️', 3 * HOUR / MIN),
      m('c2', 'u-claire', 'I was in Paris that summer, so jealous', 2 * HOUR / MIN),
    ],
    'concert:m-milan-2027': [
      m('c3', 'u-giulia', 'Pre-show meetup at a public spot near the stadium?', 90),
      m('c4', 'u-kenji', 'Flying in from Tokyo if it happens!', 40),
    ],
    'party:party-confessions': [
      m('c5', 'u-rafa', 'Welcome everyone! Press play on your own app and sync with the timer 💃', 15),
      m('c6', 'u-emma', 'HUNG UP INTRO 😭', 12),
    ],
  }
}
