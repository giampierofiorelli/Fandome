// Artist rooms beyond the first five. Names identify topics only (no official artwork,
// logos or content); taglines are our own words. Main studio albums are listed so fans can
// rate them; later they can come from MusicBrainz automatically.
import type { Album, Artist } from './types'

type Row = [id: string, name: string, color: string, tagline: string, albums: [title: string, year: number][]]

const ROWS: Row[] = [
  ['sombr', 'sombr', '#6f7fa8', 'Bedroom heartbreak, stadium choruses', [['I Barely Know Her', 2025]]],
  ['harrystyles', 'Harry Styles', '#e0705a', 'Treat people with kindness, talk about the setlist', [['Harry Styles', 2017], ['Fine Line', 2019], ['Harry’s House', 2022]]],
  ['ariana', 'Ariana Grande', '#b98ad6', 'High notes and higher ponytails', [['Yours Truly', 2013], ['My Everything', 2014], ['Dangerous Woman', 2016], ['Sweetener', 2018], ['thank u, next', 2019], ['Positions', 2020], ['Eternal Sunshine', 2024]]],
  ['beyonce', 'Beyoncé', '#d4a537', 'Every era a world of its own', [['Dangerously in Love', 2003], ['B’Day', 2006], ['I Am… Sasha Fierce', 2008], ['4', 2011], ['Beyoncé', 2013], ['Lemonade', 2016], ['Renaissance', 2022], ['Cowboy Carter', 2024]]],
  ['sabrina', 'Sabrina Carpenter', '#f08bb0', 'Short, sweet and very quotable', [['emails i can’t send', 2022], ['Short n’ Sweet', 2024], ['Man’s Best Friend', 2025]]],
  ['charlixcx', 'Charli xcx', '#8ccf2f', 'Club classics and brat summers', [['True Romance', 2013], ['Sucker', 2014], ['Charli', 2019], ['how i’m feeling now', 2020], ['Crash', 2022], ['Brat', 2024]]],
  ['robyn', 'Robyn', '#5a9de0', 'Dancing on our own, together', [['Robyn', 2005], ['Body Talk', 2010], ['Honey', 2018]]],
  ['adele', 'Adele', '#8a6f5c', 'Big voice, bigger feelings', [['19', 2008], ['21', 2011], ['25', 2015], ['30', 2021]]],
  ['bjork', 'Björk', '#3fb8a6', 'Volcanic, orchestral, unrepeatable', [['Debut', 1993], ['Post', 1995], ['Homogenic', 1997], ['Vespertine', 2001], ['Medúlla', 2004], ['Volta', 2007], ['Biophilia', 2011], ['Vulnicura', 2015], ['Utopia', 2017], ['Fossora', 2022]]],
  ['dualipa', 'Dua Lipa', '#e5484d', 'Future nostalgia, present dancing', [['Dua Lipa', 2017], ['Future Nostalgia', 2020], ['Radical Optimism', 2024]]],
  ['feverray', 'Fever Ray', '#7d5ba6', 'Strange, tender, electronic', [['Fever Ray', 2009], ['Plunge', 2017], ['Radical Romantics', 2023]]],
  ['florence', 'Florence + The Machine', '#c2523c', 'Harps, howls and barefoot stages', [['Lungs', 2009], ['Ceremonials', 2011], ['How Big, How Blue, How Beautiful', 2015], ['High as Hope', 2018], ['Dance Fever', 2022], ['Everybody Scream', 2025]]],
  ['franz', 'Franz Ferdinand', '#d9472b', 'Angular guitars for dancing', [['Franz Ferdinand', 2004], ['You Could Have It So Much Better', 2005], ['Tonight', 2009], ['Right Thoughts, Right Words, Right Action', 2013], ['Always Ascending', 2018], ['The Human Fear', 2025]]],
  ['jlo', 'Jennifer Lopez', '#e7a04f', 'From the block to the dance floor', [['On the 6', 1999], ['J.Lo', 2001], ['This Is Me… Then', 2002], ['Love?', 2011], ['This Is Me… Now', 2024]]],
  ['bieber', 'Justin Bieber', '#5f86c9', 'Grown up with his fans', [['My World 2.0', 2010], ['Believe', 2012], ['Purpose', 2015], ['Changes', 2020], ['Justice', 2021], ['Swag', 2025]]],
  ['katyperry', 'Katy Perry', '#e85d9f', 'Candy-coloured pop, loud choruses', [['One of the Boys', 2008], ['Teenage Dream', 2010], ['Prism', 2013], ['Witness', 2017], ['Smile', 2020], ['143', 2024]]],
  ['kimpetras', 'Kim Petras', '#ff6fb5', 'Pure pop, no apologies', [['Clarity', 2019], ['Turn Off the Light', 2019], ['Feed the Beast', 2023]]],
  ['kraftwerk', 'Kraftwerk', '#c93a3a', 'Where electronic music started', [['Autobahn', 1974], ['Radio-Activity', 1975], ['Trans-Europe Express', 1977], ['The Man-Machine', 1978], ['Computer World', 1981], ['Tour de France Soundtracks', 2003]]],
  ['lanadelrey', 'Lana Del Rey', '#8fa9c4', 'Cinematic sadness, Americana dreams', [['Born to Die', 2012], ['Ultraviolence', 2014], ['Honeymoon', 2015], ['Lust for Life', 2017], ['Norman Fucking Rockwell!', 2019], ['Chemtrails over the Country Club', 2021], ['Blue Banisters', 2021], ['Did You Know That There’s a Tunnel Under Ocean Blvd', 2023]]],
  ['capaldi', 'Lewis Capaldi', '#6b9f7a', 'Ballads and jokes in equal measure', [['Divinely Uninspired to a Hellish Extent', 2019], ['Broken by Desire to Be Heavenly Sent', 2023]]],
  ['lorde', 'Lorde', '#4d6b8a', 'Melodrama for the thoughtful', [['Pure Heroine', 2013], ['Melodrama', 2017], ['Solar Power', 2021], ['Virgin', 2025]]],
  ['lykkeli', 'Lykke Li', '#9b8bb5', 'Sad songs you can dance to', [['Youth Novels', 2008], ['Wounded Rhymes', 2011], ['I Never Learn', 2014], ['So Sad So Sexy', 2018], ['EYEYE', 2022]]],
  ['maneskin', 'Måneskin', '#b8233a', 'Rock is back, and it’s Roman', [['Il ballo della vita', 2018], ['Teatro d’ira: Vol. I', 2021], ['Rush!', 2023]]],
  ['garrix', 'Martin Garrix', '#2bb3e0', 'Festival drops and main-stage nights', [['Sentio', 2022]]],
  ['massiveattack', 'Massive Attack', '#4a4f5a', 'Bristol’s dark, slow heartbeat', [['Blue Lines', 1991], ['Protection', 1994], ['Mezzanine', 1998], ['100th Window', 2003], ['Heligoland', 2010]]],
  ['miley', 'Miley Cyrus', '#d65fa0', 'Every reinvention welcome', [['Bangerz', 2013], ['Younger Now', 2017], ['Plastic Hearts', 2020], ['Endless Summer Vacation', 2023], ['Something Beautiful', 2025]]],
  ['mo', 'MØ', '#f2b33d', 'Danish pop with a punk heart', [['No Mythologies to Follow', 2014], ['Forever Neverland', 2018], ['Motordrome', 2022], ['Plæygirl', 2024]]],
  ['moby', 'Moby', '#63a3c7', 'Ambient, techno and everything in between', [['Everything Is Wrong', 1995], ['Play', 1999], ['18', 2002], ['Hotel', 2005], ['Wait for Me', 2009]]],
  ['muse', 'Muse', '#7a3fd1', 'Riffs, falsetto and big ideas', [['Showbiz', 1999], ['Origin of Symmetry', 2001], ['Absolution', 2003], ['Black Holes and Revelations', 2006], ['The Resistance', 2009], ['The 2nd Law', 2012], ['Drones', 2015], ['Simulation Theory', 2018], ['Will of the People', 2022]]],
  ['placebo', 'Placebo', '#5c5f8f', 'Glam, guitars and late nights', [['Placebo', 1996], ['Without You I’m Nothing', 1998], ['Black Market Music', 2000], ['Sleeping with Ghosts', 2003], ['Meds', 2006], ['Never Let Me Go', 2022]]],
  ['prince', 'Prince', '#7b3fa0', 'The purple archive, decoded together', [['Dirty Mind', 1980], ['1999', 1982], ['Purple Rain', 1984], ['Parade', 1986], ['Sign o’ the Times', 1987], ['Lovesexy', 1988]]],
  ['radiohead', 'Radiohead', '#3d8f8a', 'Overthinking every note, happily', [['Pablo Honey', 1993], ['The Bends', 1995], ['OK Computer', 1997], ['Kid A', 2000], ['Amnesiac', 2001], ['Hail to the Thief', 2003], ['In Rainbows', 2007], ['The King of Limbs', 2011], ['A Moon Shaped Pool', 2016]]],
  ['royksopp', 'Röyksopp', '#2f9e8f', 'Nordic electronic mysteries', [['Melody A.M.', 2001], ['The Understanding', 2005], ['Junior', 2009], ['The Inevitable End', 2014], ['Profound Mysteries', 2022]]],
  ['samsmith', 'Sam Smith', '#d98aa8', 'From lonely hours to Gloria', [['In the Lonely Hour', 2014], ['The Thrill of It All', 2017], ['Love Goes', 2020], ['Gloria', 2023]]],
  ['selena', 'Selena Gomez', '#c77dba', 'Soft pop, real stories', [['Stars Dance', 2013], ['Revival', 2015], ['Rare', 2020], ['I Said I Love You First', 2025]]],
  ['shawn', 'Shawn Mendes', '#5d8fb5', 'Guitar pop and big singalongs', [['Handwritten', 2015], ['Illuminate', 2016], ['Shawn Mendes', 2018], ['Wonder', 2020], ['Shawn', 2024]]],
  ['sia', 'Sia', '#e8c547', 'Huge hooks behind the wig', [['Colour the Small One', 2004], ['Some People Have Real Problems', 2008], ['We Are Born', 2010], ['1000 Forms of Fear', 2014], ['This Is Acting', 2016], ['Reasonable Woman', 2024]]],
  ['sigurros', 'Sigur Rós', '#7fa7b8', 'Glacial, bowed and beautiful', [['Ágætis byrjun', 1999], ['( )', 2002], ['Takk…', 2005], ['Með suð í eyrum við spilum endalaust', 2008], ['Átta', 2023]]],
  ['takethat', 'Take That', '#3f7fd1', 'Never forget the dance routines', [['Everything Changes', 1993], ['Nobody Else', 1995], ['Beautiful World', 2006], ['The Circus', 2008], ['Progress', 2010], ['This Life', 2023]]],
  ['tameimpala', 'Tame Impala', '#e07b39', 'Psychedelic grooves, endless reverb', [['Innerspeaker', 2010], ['Lonerism', 2012], ['Currents', 2015], ['The Slow Rush', 2020], ['Deadbeat', 2025]]],
  ['taylorswift', 'Taylor Swift', '#9f8ad9', 'Easter eggs, eras and friendship bracelets', [['Fearless', 2008], ['Speak Now', 2010], ['Red', 2012], ['1989', 2014], ['Reputation', 2017], ['Lover', 2019], ['Folklore', 2020], ['Evermore', 2020], ['Midnights', 2022], ['The Tortured Poets Department', 2024], ['The Life of a Showgirl', 2025]]],
  ['mariah', 'Mariah Carey', '#e7a6c4', 'Whistle notes and butterflies', [['Mariah Carey', 1990], ['Music Box', 1993], ['Daydream', 1995], ['Butterfly', 1997], ['The Emancipation of Mimi', 2005], ['Here for It All', 2025]]],
  ['britney', 'Britney Spears', '#e86a8d', 'Pop royalty, forever', [['…Baby One More Time', 1999], ['Oops!… I Did It Again', 2000], ['Britney', 2001], ['In the Zone', 2003], ['Blackout', 2007], ['Circus', 2008], ['Femme Fatale', 2011]]],
  ['cher', 'Cher', '#c0498f', 'Six decades of believing', [['Believe', 1998], ['Living Proof', 2001], ['Closer to the Truth', 2013], ['Dancing Queen', 2018]]],
  ['tinaturner', 'Tina Turner', '#d9542b', 'Simply the best, remembered together', [['Private Dancer', 1984], ['Break Every Rule', 1986], ['Foreign Affair', 1989], ['Wildest Dreams', 1996]]],
  ['tovelo', 'Tove Lo', '#e0577a', 'Honest pop from Stockholm', [['Queen of the Clouds', 2014], ['Lady Wood', 2016], ['Sunshine Kitty', 2019], ['Dirt Femme', 2022]]],
  ['u2', 'U2', '#5b7f9e', 'Stadiums, streets and still running', [['Boy', 1980], ['War', 1983], ['The Joshua Tree', 1987], ['Achtung Baby', 1991], ['Zooropa', 1993], ['All That You Can’t Leave Behind', 2000], ['How to Dismantle an Atomic Bomb', 2004]]],
  ['weeknd', 'The Weeknd', '#c23b3b', 'After hours, neon nights', [['Kiss Land', 2013], ['Beauty Behind the Madness', 2015], ['Starboy', 2016], ['After Hours', 2020], ['Dawn FM', 2022], ['Hurry Up Tomorrow', 2025]]],
  ['celine', 'Celine Dion', '#c9a2d8', 'The power ballad room', [['Unison', 1990], ['Celine Dion', 1992], ['The Colour of My Love', 1993], ['Falling into You', 1996], ['Let’s Talk About Love', 1997], ['Courage', 2019]]],
  ['whitney', 'Whitney Houston', '#d9a066', 'The voice, celebrated together', [['Whitney Houston', 1985], ['Whitney', 1987], ['I’m Your Baby Tonight', 1990], ['My Love Is Your Love', 1998]]],
  ['mj', 'Michael Jackson', '#b5893a', 'Moonwalks, eras and endless archives', [['Off the Wall', 1979], ['Thriller', 1982], ['Bad', 1987], ['Dangerous', 1991], ['HIStory', 1995]]],
  ['zaralarsson', 'Zara Larsson', '#f07a4a', 'Swedish pop with summer energy', [['So Good', 2017], ['Poster Girl', 2021], ['Venus', 2024], ['Midnight Sun', 2025]]],
  ['the1975', 'The 1975', '#9aa0a8', 'Long album titles, longer discussions', [['The 1975', 2013], ['I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It', 2016], ['A Brief Inquiry into Online Relationships', 2018], ['Notes on a Conditional Form', 2020], ['Being Funny in a Foreign Language', 2022]]],
]

const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')

export const catalogArtists: Artist[] = ROWS.map(([id, name, color, tagline, albums]) => ({
  id,
  name,
  color,
  tagline,
  feeds: [
    { id: 'live', label: 'Live', tags: ['live', 'tour', 'setlist'] },
    { id: 'eras', label: 'Eras', tags: [...albums.map(([t]) => slug(t)).filter((t) => t.length > 2), 'eras'] },
  ],
}))

export const catalogAlbums: Album[] = ROWS.flatMap(([id, , , , albums]) => albums.map(([title, year]) => ({ id: `${id}-${slug(title) || year}`, artistId: id, title, year })))
