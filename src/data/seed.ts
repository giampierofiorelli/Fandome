// Demo data for the prototype. Artist names identify topics only:
// no official artwork, logos or content. Upcoming dates are fictional.
import { catalogAlbums, catalogArtists } from './catalog'
import type { Album, Artist, ChatMessage, Concert, DirectMessage, Party, Post, Story, User, Report, TicketListing } from './types'

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
  ...catalogArtists,
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
  ...catalogAlbums,
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
    id: 'm-florence-1987',
    artistId: 'madonna',
    tour: "Who's That Girl World Tour",
    venue: 'Stadio Comunale',
    city: 'Florence',
    country: 'Italy',
    date: '1987-09-06',
    setlist: [],
  },
  {
    id: 'm-london-2023',
    artistId: 'madonna',
    tour: 'The Celebration Tour',
    venue: 'O2 Arena',
    city: 'London',
    country: 'UK',
    date: '2023-10-14',
    setlist: [],
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
    announcedAt: Date.now() - 2 * 86_400_000, // demo: shows the "New date announced" card
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
  { ...blank, id: 'u-giulia', handle: 'giulia_vogue', name: 'Giulia', color: '#e8457c', bio: 'Turin ’87 changed my life. Collector of 12" remixes.', location: 'Turin, IT', fanSince: { madonna: 1984 }, mod: { artistIds: ['madonna'], since: 1767225600000 }, collection: [
    { id: 'c1', title: 'Like a Prayer', artistId: 'madonna', format: 'Picture disc', year: 1989, note: 'Found it at a market in Turin in 1995 for 15,000 lire. The sleeve still smells of patchouli.', image: 'linear-gradient(135deg,#3a1f5c,#b9519c 55%,#f3c8dc)', at: 1700000000000 },
    { id: 'c2', title: 'Who’s That Girl World Tour, Turin', artistId: 'madonna', format: 'Ticket stub', year: 1987, note: 'My first concert ever. 4 September 1987, Stadio Comunale. I kept it in a book for years.', image: 'linear-gradient(135deg,#ff6a88,#ffb199 50%,#2a1a3a)', at: 1700000000001 },
    { id: 'c3', title: 'Erotica', artistId: 'madonna', format: 'CD', year: 1992, note: 'Italian pressing with the parental advisory sticker.', image: 'linear-gradient(135deg,#111,#3b3b3b 60%,#9b9b9b)', at: 1700000000002 },
  ], links: [{ id: 'l1', url: 'https://www.instagram.com/giulia_vogue87', clicks: 214 }, { id: 'l2', url: 'https://open.spotify.com/playlist/37i9dQZF1DX7bH6kUa7nLd', label: 'My Madonna deep cuts', clicks: 96 }, { id: 'l3', url: 'https://www.discogs.com/user/giuliavogue/collection', label: '12" collection', clicks: 41 }], top4: ['m-trueblue', 'm-prayer', 'm-ray', 'm-confessions'], attended: ['m-turin-1987', 'm-rio-2024'], going: ['m-milan-2027'], ratings: { 'm-ray': 5, 'm-prayer': 5, 'm-music': 4 } },
  { ...blank, id: 'u-rafa', handle: 'rafa.celebration', name: 'Rafael', color: '#5fd38d', bio: 'Copacabana, 1.6M of us. I was there.', location: 'Rio de Janeiro, BR', fanSince: { madonna: 2005, gaga: 2008 }, top4: ['m-confessions', 'm-music', 'g-btw', 'g-chromatica'], attended: ['m-rio-2024'], ratings: { 'm-confessions': 5, 'g-btw': 4.5 } },
  { ...blank, id: 'u-sam', handle: 'samdevotee', name: 'Sam', color: '#9b7cf0', bio: 'Rose Bowl ’88 kid. Synths > everything.', location: 'Los Angeles, US', fanSince: { depeche: 1986, psb: 1987 }, top4: ['d-violator', 'd-masses', 'p-actually', 'p-very'], attended: ['d-rosebowl-1988'], going: ['p-london-2027'], ratings: { 'd-violator': 5, 'p-very': 4.5 } },
  { ...blank, id: 'u-emma', handle: 'emmaspinning', name: 'Emma', color: '#f0a43a', bio: 'Kylie at Glasto, crying in a field.', location: 'Manchester, UK', fanSince: { kylie: 2001, madonna: 2005 }, top4: ['k-fever', 'k-disco', 'k-lightyears', 'm-confessions'], attended: ['k-glasto-2019'], ratings: { 'k-fever': 5, 'k-tension': 4 } },
  { ...blank, id: 'u-kenji', handle: 'kenji_ray', name: 'Kenji', color: '#3ab5f0', bio: 'Ray of Light is a perfect album. Tokyo.', location: 'Tokyo, JP', fanSince: { madonna: 1998 }, modRequest: { artistIds: ['madonna'], reason: 'I answer new fans every day and know the community well.', at: 1792700000000, status: 'pending' }, top4: ['m-ray', 'm-music', 'm-confessions', 'm-prayer'], ratings: { 'm-ray': 5 } },
  { ...blank, id: 'u-lucia', handle: 'lucia.monster', name: 'Lucía', color: '#5fd38d', bio: 'Little monster from Madrid. Mayhem era.', location: 'Madrid, ES', fanSince: { gaga: 2009, madonna: 2012 }, top4: ['g-mayhem', 'g-btw', 'g-fame', 'm-ray'], ratings: { 'g-mayhem': 4.5 } },
  { ...blank, id: 'u-claire', handle: 'claire_vinyl', name: 'Claire', color: '#e8457c', bio: 'Vinyl, picture discs, promo CDs. Paris.', location: 'Paris, FR', fanSince: { madonna: 1986, psb: 1990 }, top4: ['m-trueblue', 'p-behaviour', 'm-virgin', 'm-prayer'], ratings: { 'm-trueblue': 4.5 } },
  { ...blank, id: 'u-jonas', handle: 'jonas101', name: 'Jonas', color: '#9b7cf0', bio: 'Berlin. Every DM tour since 1990.', location: 'Berlin, DE', fanSince: { depeche: 1990 }, top4: ['d-sofad', 'd-violator', 'd-memento', 'd-masses'], ratings: { 'd-sofad': 5 } },
  { ...blank, id: 'u-ana', handle: 'ana_newfan', name: 'Ana', color: '#f0a43a', bio: 'New here! Found Madonna through TikTok. Where do I start?', location: 'Lisbon, PT', fanSince: { madonna: 2026 } },
  // Demo Page: a fictional fan website run by Giulia. It has a pending invite for you ("me").
  {
    ...blank,
    id: 'pg-archive',
    kind: 'page',
    handle: 'rayoflightarchive',
    name: 'Ray of Light Archive',
    color: '#7a8cff',
    bio: 'Fan-run archive of the Ray of Light era: tour dates, press scans, remix credits.',
    location: '',
    page: {
      website: 'https://rayoflight-archive.example',
      category: 'Fan website',
      verification: 'verified',
      verifyCode: 'fdm-demo-archive',
      members: [{ userId: 'u-giulia', role: 'owner', since: 0 }, { userId: 'u-kenji', role: 'admin', since: 0 }],
      invites: [{ id: 'inv-demo', code: 'demo-invite-ray', role: 'admin', toUserId: 'me', invitedBy: 'u-giulia', createdAt: 0, status: 'pending' }],
    },
  },
  { ...blank, id: 'u-promo', handle: 'tix_deals_247', name: 'Ticket Deals', color: '#888888', bio: 'Best prices!!!', location: '', fanSince: { madonna: 2026 } },
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
    p({ id: 'p2', albumIds: ['m-confessions'], authorId: 'u-rafa', artistId: 'madonna', text: 'Hot take: Confessions is the best pop album of the 2000s and it’s not close. #confessions #eras', likes: ['u-emma', 'u-lucia'], reposts: [{ userId: 'u-emma', at: now - 20 * MIN, tags: ['correct', 'disco never died'] }] }, 50),
    p({ id: 'p-collab', authorId: 'u-emma', artistId: 'kylie', artistIds: ['kylie', 'madonna', 'gaga'], text: 'Dream collab nobody asked for but everyone needs: Kylie, Madonna and Gaga on one disco track. Who produces it? #collab', likes: ['u-rafa', 'u-lucia', 'u-giulia'] }, 35),
    p({ id: 'p-spam', authorId: 'u-promo', artistId: 'madonna', text: 'CHEAP Madonna tickets 💸💸 DM me now, pay by gift card only!!! #madonna', likes: [] }, 15),
    p({ id: 'p-collab2', authorId: 'u-giulia', collab: [{ userId: 'u-claire', status: 'accepted' }], artistId: 'madonna', text: 'Claire and I compared our True Blue pressings: Italian vs French. Spot the difference in the sleeve colour! #collectors', likes: ['u-rafa', 'u-emma', 'u-kenji'], image: 'linear-gradient(135deg,#7fb0d8,#e9eef5 50%,#2a5d8a)' }, 95),
    p({ id: 'p-collab-invite', authorId: 'u-rafa', collab: [{ userId: 'me', status: 'pending' }], artistId: 'madonna', text: 'Our Confessions listening party playlist, made together. Add your favourite remix in the replies! #confessions', likes: ['u-lucia'] }, 40),
    p({ id: 'p3', authorId: 'u-ana', artistId: 'madonna', text: 'Okay I’m new. Where do I start after Hung Up? Be nice 🙏 #newfan', likes: ['u-giulia'] }, 70),
    p({ id: 'p4', albumIds: ['m-ray', 'm-prayer'], authorId: 'u-giulia', replyTo: 'p3', artistId: 'madonna', text: 'Welcome! Ray of Light front to back, then Like a Prayer. Then come tell us everything 💗', likes: ['u-ana', 'u-kenji'] }, 65),
    p({ id: 'p5', albumIds: ['m-ray'], authorId: 'u-kenji', replyTo: 'p3', artistId: 'madonna', text: 'Ray of Light. Headphones. Night time. Trust me.', likes: ['u-ana'] }, 60),
    p({ id: 'p6', authorId: 'u-kenji', artistId: 'madonna', review: { albumId: 'm-ray', rating: 5 }, text: 'Sounds like the future even now. "Frozen" with headphones at 2am is a religious experience. #rayoflight', likes: ['u-giulia', 'u-claire', 'u-rafa', 'u-ana'] }, 3 * 60),
    p({ id: 'p7', authorId: 'u-lucia', artistId: 'madonna', text: '¿Cuál es la mejor era? Votad 👇 #eras', lang: 'es', translation: 'Which is the best era? Vote 👇 #eras', poll: { options: [{ label: 'Like a Prayer', votes: ['u-claire', 'u-giulia'] }, { label: 'Ray of Light', votes: ['u-kenji', 'u-ana', 'u-sam'] }, { label: 'Confessions', votes: ['u-rafa', 'u-emma', 'u-lucia'] }] }, likes: ['u-rafa'] }, 4 * 60),
    p({ id: 'p8', authorId: 'u-claire', artistId: 'madonna', text: 'Ma nouvelle trouvaille : le picture disc de True Blue, édition 1986. #vinyl #collection', lang: 'fr', translation: 'My new find: the True Blue picture disc, 1986 edition. #vinyl #collection', image: 'linear-gradient(135deg,#7fd6ff,#2e5bff 55%,#0b1440)', likes: ['u-giulia', 'u-kenji'] }, 5 * 60),
    p({ id: 'p9', authorId: 'u-emma', artistId: 'kylie', concertId: 'k-glasto-2019', text: 'Five years on and I still think about the Pyramid Stage crowd singing every word of Better the Devil You Know. #live', likes: ['u-rafa'] }, 6 * 60),
    p({ id: 'p10', authorId: 'u-emma', artistId: 'kylie', review: { albumId: 'k-fever', rating: 5 }, text: 'Not one skip. Perfectly engineered joy. #fever', likes: ['u-lucia', 'u-rafa'] }, 8 * 60),
    p({ id: 'p11', authorId: 'u-sam', artistId: 'depeche', concertId: 'd-rosebowl-1988', text: '60,000 people. Never Let Me Down Again. The arms. If you know, you know. #live #101', likes: ['u-jonas'], image: 'linear-gradient(135deg,#1b1b2f,#5b3fb0 60%,#c9b6ff)' }, 9 * 60),
    p({ id: 'p12', authorId: 'u-jonas', artistId: 'depeche', text: 'Songs of Faith and Devotion ist unterschätzt. Punkt. #eras', lang: 'de', translation: 'Songs of Faith and Devotion is underrated. Full stop. #eras', likes: ['u-sam'] }, 40 * 24 * 60), // Jonas has been away for a while (inactive-account demo)
    p({ id: 'p13', authorId: 'u-sam', artistId: 'psb', text: 'Who’s going to London in March? Thinking a pre-show meetup near the venue. #tour', concertId: 'p-london-2027', likes: ['u-claire'] }, 13 * 60),
    p({ id: 'p14', authorId: 'u-lucia', artistId: 'gaga', review: { albumId: 'g-mayhem', rating: 4.5 }, text: 'Chaos, but make it couture. Best opening run since The Fame Monster. #mayhem', likes: ['u-rafa'] }, 15 * 60),
    p({ id: 'p15', authorId: 'u-rafa', quoteOf: 'p1', artistId: 'madonna', text: 'From Turin ’87 to Copacabana ’24 — this fandom spans generations and I love it.', likes: ['u-giulia', 'u-ana'] }, 18 * 60),
    p({ id: 'p16', authorId: 'u-mod', text: 'Welcome to Fandome (prototype). Independent fan community — not affiliated with, authorised or sponsored by any artist. Be kind, credit creators, post only what you have the right to share.', likes: [] }, 30 * 60),
    p({ id: 'p17', authorId: 'u-giulia', artistId: 'madonna', concertId: 'm-milan-2027', text: 'Milan 2027 crew forming 🇮🇹 who’s in? #tour', likes: ['u-claire', 'u-kenji'] }, 26 * 60),
    p({ id: 'p19', authorId: 'pg-archive', artistId: 'madonna', text: 'New in the archive: every Drowned World Tour date with venue notes, sourced from fan reports. Corrections welcome! https://rayoflight-archive.example/drowned-world #rayoflight', likes: ['u-giulia', 'u-kenji', 'u-claire'] }, 7 * 60),
    p({ id: 'p18', authorId: 'u-claire', artistId: 'psb', review: { albumId: 'p-behaviour', rating: 4.5 }, text: 'Their most melancholic and beautiful record. "Being Boring" still wrecks me. #eras', likes: ['u-sam'] }, 28 * 60),
    // Demo: talk about albums by different artists (feeds "Most discussed albums").
    p({ id: 'pa-1', authorId: 'u-emma', artistId: 'taylorswift', artistIds: ['taylorswift'], albumIds: ['taylorswift-thelifeofashowgirl'], text: 'The Life of a Showgirl on repeat since this morning. The bridge on track 3 is unreal ✨', likes: ['u-ana', 'u-claire', 'u-sam', 'u-lucia'] }, 35),
    p({ id: 'pa-2', authorId: 'u-sam', artistId: 'charlixcx', artistIds: ['charlixcx'], albumIds: ['charlixcx-brat'], text: 'Brat still sounds like the future. Which track would you play first at a party?', likes: ['u-rafa', 'u-emma', 'u-kenji'] }, 70),
    p({ id: 'pa-3', authorId: 'u-rafa', artistId: 'kendrick', artistIds: ['kendrick'], albumIds: ['kendrick-gnx'], text: 'GNX front to back on the train. The production is so sharp.', likes: ['u-sam', 'u-kenji'] }, 110),
    p({ id: 'pa-4', authorId: 'u-lucia', artistId: 'badbunny', artistIds: ['badbunny'], albumIds: ['badbunny-debitirarmasfotos'], text: 'Debí Tirar Más Fotos me hace llorar cada vez 🇵🇷', lang: 'es', translation: 'Debí Tirar Más Fotos makes me cry every time 🇵🇷', likes: ['u-ana', 'u-rafa', 'u-claire'] }, 150),
    p({ id: 'pa-5', authorId: 'u-claire', artistId: 'gaga', artistIds: ['gaga'], albumIds: ['g-mayhem'], text: 'Mayhem is her best album in ten years. Fight me (nicely) 💚', likes: ['u-emma', 'u-giulia'] }, 200),
    p({ id: 'pa-6', authorId: 'u-ana', artistId: 'beyonce', artistIds: ['beyonce'], albumIds: ['beyonce-renaissance'], text: 'Renaissance is a whole club night in one album. Favourite transition?', likes: ['u-lucia', 'u-sam'] }, 260),
    p({ id: 'pa-7', authorId: 'u-giulia', artistId: 'sabrina', artistIds: ['sabrina'], albumIds: ['sabrina-shortnsweet'], text: 'Short n’ Sweet is the perfect summer record, even in October.', likes: ['u-emma'] }, 320),
    p({ id: 'pa-r1', authorId: 'u-claire', replyTo: 'pa-1', artistId: 'taylorswift', text: 'That bridge!! Easter eggs everywhere 👀' }, 25),
    p({ id: 'pa-r2', authorId: 'u-kenji', replyTo: 'pa-2', artistId: 'charlixcx', text: '360, no question.' }, 60),
    p({ id: 'pa-r3', authorId: 'u-rafa', replyTo: 'pa-4', artistId: 'badbunny', text: 'Same. That album is a love letter.' }, 140),
  ]
}

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

export function seedStories(now: number): Story[] {
  const h = (n: number) => now - n * 3_600_000
  const t = (id: string, authorId: string, at: number, text: string, bg: string): Story => ({ id, authorId, createdAt: at, kind: 'text', text, bg, viewers: [] })
  return [
    t('s1', 'u-giulia', h(2), 'Turin, 4 Sept 1987. 39 years ago this week. Still not over it.', 'linear-gradient(160deg,#ff6a88,#7a2a6a)'),
    t('s2', 'u-giulia', h(1), 'Found my ticket stub in a book 🎟️', 'linear-gradient(160deg,#f3c8dc,#a9c0d8)'),
    t('s3', 'u-rafa', h(5), 'Confessions listening party tonight. Who’s in?', 'linear-gradient(140deg,#6fc3cf,#e9b48c 50%,#b99be6)'),
    t('s4', 'u-kenji', h(9), 'Ray of Light at 2am. Headphones on.', 'linear-gradient(160deg,#1e3048,#3ab5f0)'),
    t('s5', 'u-emma', h(14), 'Kylie on the radio in a taxi in Manchester. Sign from the universe?', 'linear-gradient(160deg,#f0a43a,#e8457c)'),
    t('s6', 'u-sam', h(20), 'Rose Bowl ’88 VHS digitised. Crying.', 'linear-gradient(160deg,#1b1b2f,#9b7cf0)'),
  ]
}

export function seedDms(now: number): DirectMessage[] {
  const m = (n: number) => now - n * 60_000
  return [
    { id: 'd1', from: 'u-giulia', to: 'me', at: m(40), text: 'Ciao! Saw you joined the Madonna room 💗' },
    { id: 'd2', from: 'u-giulia', to: 'me', at: m(39), text: 'Are you thinking about Milan 2027? We’re organising a meetup.' },
    { id: 'd3', from: 'u-kenji', to: 'me', at: m(300), text: 'Welcome! If you need a Ray of Light listening order, ask me 😄' },
  ]
}

// Demo: two fans on the ticket board for Milan.
export function seedTickets(now: number): TicketListing[] {
  return [
    { id: 't1', concertId: 'm-milan-2027', userId: 'u-giulia', kind: 'need', qty: 1, note: 'Pit if possible, happy with any seat. I can do the official name change.', at: now - 5 * 3_600_000 },
    { id: 't2', concertId: 'm-milan-2027', userId: 'u-rafa', kind: 'spare', qty: 2, note: 'My friends can’t come. Face value, official name change only.', at: now - 26 * 3_600_000 },
  ]
}

// Demo: a report waiting in the moderation queue.
export function seedReports(now: number): Report[] {
  return [{ id: 'r1', at: now - 10 * 60_000, by: 'u-rafa', target: { kind: 'post', id: 'p-spam' }, reason: 'spam', note: 'Asks for gift-card payments: classic ticket scam.', goodFaith: true, status: 'open' }]
}

// Demo only: extra people "talking" about some albums, so the chart looks like a lively site.
// Remove when real users arrive (the backend will count real conversations).
export const demoAlbumBuzz: Record<string, number> = {
  'taylorswift-thelifeofashowgirl': 184,
  'charlixcx-brat': 141,
  'kendrick-gnx': 126,
  'badbunny-debitirarmasfotos': 117,
  'g-mayhem': 96,
  'beyonce-renaissance': 74,
  'm-ray': 63,
  'sabrina-shortnsweet': 58,
}
