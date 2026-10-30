# Claude research notes (Oct 2026, wave 3)

# Wave 3 / G: evidence notes

Albums: elvis-elvispresley, elvis-elvisisback, sinatra-intheweesmallhours, sinatra-songsforswinginlovers, armstrong-satchplaysfats. Titles and years match `src/data/catalog.ts` lines 82, 89 and 98. The Sinatra title keeps the catalogue's curly apostrophe: "Songs for Swingin’ Lovers!". The existing `docs/descriptors/elvis.csv` (From Elvis in Memphis) and its reception row were read. The voice tokens follow that row where the sources agree. Sinatra and Armstrong have no descriptor file. `armstrong-ellaandlouis` lives in `ella.csv`, where Armstrong's voice is `raspy`. I kept that.

Wikipedia was used only to find sources and is never cited. Credits come from the Discogs API, which transcribes sleeves (`https://api.discogs.com/releases/<id>`). Discogs genre and style tags are user tags and were not used.

**Could not open:** AllMusic (403, so no AllMusic rating is cited), the Telegraph "Elvis Presley: seven wonderful albums" (paywall 402; the auto-mode classifier refused an archive copy), the Express review of Elvis Is Back! (403), NYT 1998 and 2015 (403), The New Yorker (403), the Time All-TIME 100 entry (bad certificate; the archive connection was reset), Blender (archive reset), AnalogPlanet (Cloudflare), Jazz Music Archives (403), everythingjazz (403), altrockchick (429), classicpopicons (expired certificate), and keithflynn.com sessions (404). uDiscover (403 to curl) was read through WebFetch only. It is owned by Universal, the label, so it is used for nothing in legacy or landmark.

## New tokens
- `tapesplicing` (production): George Avakian built the Satch Plays Fats masters from spliced takes. His letter to Joe Glaser says "I had to do a great deal of splicing and editing to produce really good tapes" (quoted by Riccardi). No existing token covers tape splicing or editing; `digitalediting` is a different technique.
- `scatsinging` (production, vocal use): Avakian had Armstrong "overdub a scat obligato on top of his vocal" on "I've Got a Feeling I'm Falling". Riccardi also describes scat breaks throughout. If the owner prefers, drop it and keep only `overdubbing`.

---

## elvis-elvispresley: Elvis Presley (1956)
**Sources**
- Rolling Stone 500 (2012 ed., #56): https://www.rollingstone.com/music/music-lists/500-greatest-albums-of-all-time-156826/elvis-presley-elvis-presley-164191/
- Rolling Stone 500 (2020 ed., #332): https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/elvis-presley-elvis-presley-2-1062943/
- BBC Music, Chris Jones 2007: https://www.bbc.co.uk/music/reviews/6h25/
- Sputnikmusic, Dave de Sylvia (Emeritus), 5.0: https://www.sputnikmusic.com/review/7375/Elvis-Presley-Elvis-Presley/
- Matthew Puddister (Substack essay): https://matthewpuddister.substack.com/p/elvis-presleys-debut-album-still
- Daily Vault, Christopher Thelen, B+: https://beta.dailyvault.com/review/elvis-presley-christopher-thelen/
- Discogs LPM-1254 (release 4814324) and 1999 CD (867342). Neither sleeve credits a producer or musicians.

**Cells**
- **genres:**
  - rockandroll: RS, "the first rock & roll album to make it to Number One"; Puddister, "This is rock 'n' roll".
  - rockabilly: Puddister, "as definitive an example of the rockabilly sound as anything outside Elvis's legendary work at Sun".
  - country: RS, "revved-up country music"; Sputnik, "country ballads ('Blue Moon', 'I'm Gonna Sit Right Down…')"; Daily Vault, "equally comfortable in both worlds".
  - rnb: Sputnik, "r&b pop hits ('Money Honey' and 'I Got a Woman')"; BBC, "harder rhythm and blues tracks".
  - blues: Sputnik, "blues-heavy rock"; Puddister, "the bluesy 'Money Honey'".
  - pop: Sputnik, "straight-forward pop tracks".
  - ballad: Puddister, "the plaintive ballad 'I'm Counting on You'… the ballad 'I Love You Because'".
  - doowop: Sputnik, "the stripped down doo-wop of country standard 'Blue Moon'". It is one track, so it goes in the tail.
- **energy 4:** BBC, "Filled with the young, raw energy"; Puddister, "raucous", "rockers and ballads".
- **electronic 1:** a small acoustic and electric band.
- **mood 4:** Puddister, "raw youthful exuberance".
- **theatrical 3:** charisma, with intimate ballads alongside.
- **experimental 1:** covers and standards.
- **polish 2:** Sputnik, "very loose instrumentally, invariably recorded with very few takes and featuring many mistakes"; BBC, "sparse sessions".
- **tempo 3, groove 3:** a mix of rockers and ballads.
- **voice powerful|soft:** Puddister, "warm, intimate and powerful". Not raspy: Sputnik says "it wasn't until subsequent singles… that Elvis would develop a distinctive and convincing rasp".
- **instruments:** Sputnik: "guitar solo from Moore", "first use of piano in a Presley arrangement", "hard drumming", "bassist Bill Black". BBC: "Chet Atkins on guitar". Bill Black's upright bass is not stated in any source I opened, so it is `bass`.
- **production falsetto:** Puddister, "eerie falsetto on the standard 'Blue Moon'"; Sputnik, "reaching the falsetto cries with ease" ("Tutti Frutti").
- **lyrics:** empty. No opened source describes the themes.
- **producers:** empty. No credit appears on the LP or the 1999 CD. The CD credits Sam Phillips as engineer. BBC and Sputnik name Steve Sholes and Chet Atkins as RCA staff (Sputnik puts "producer" in quotes). That is not a credit.
- **sounds_like Slim Whitman [1/12]:** Daily Vault, "'Blue Moon,' a track which at times seems to channel Slim Whitman".
- **influenced_by:** empty. Covered artists (Perkins, Little Richard, Ray Charles) are excluded.
- **landmark 1:** BBC, "legendary first album", "rock's first album proper"; RS 500 #56.
- **Legacy 4:** Sputnik, "established rock n' roll no longer as a teenage fad but as a genuine cultural movement… established a degree of vocal primacy on a genre". The cover's link to The Clash's London Calling is artwork, not music, and was not counted.

## elvis-elvisisback: Elvis Is Back! (1960)
**Sources**
- Rolling Stone, Will Hermes, 2011: https://www.rollingstone.com/music/albumreviews/elvis-is-back-legacy-edition-20110308
- NPR Fresh Air, Milo Miles, 2011: https://www.npr.org/transcripts/137030802
- Record Collector, Gary von Tersch: http://recordcollectormag.com/reviews/elvis-is-backlegacy-edition
- PopMatters, Steve Horowitz, 7/10: https://www.popmatters.com/review/140085-elvis-presley-elvis-is-back/
- Blogcritics: https://blogcritics.org/music-review-elvis-is-back-legacy/
- Daily Vault, David Bowling, B+: https://beta.dailyvault.com/review/elvis-is-back-david-bowling/
- Elvis official site (Sony/Legacy), 2011 release note quoting Ernst Jørgensen: https://www.elvisthemusic.com/?p=349
- Discogs: LSP-2231 (3680964), 1999 CD (8653428), FTD 2005 (2803194).

**Cells**
- **genres:**
  - pop: Daily Vault, "predominantly pop-oriented"; Blogcritics, "mainstream pop recordings".
  - rnb: Record Collector, "heavy on the R&B"; Daily Vault on "Such A Night", "the old rhythm & blues classic".
  - blues: Daily Vault, "'Reconsider Baby' and 'It Feels So Right' are both given a gritty blues performance"; Hermes, "the hard-on blues".
  - ballad: Blogcritics, "showcase ballads 'I Will Be Home Again' and 'Soldier Boy'".
  - rockandroll: Daily Vault, "fusion of polished pop and his rock roots". Blogcritics disagrees ("not really rock and roll records"), so it sits low in the order.
  - doowop: PopMatters, "singing doo wop harmonies with the Jordanaires". That describes his post-Army work across both 1960–61 albums, so it goes in the tail.
- **energy 3, groove 2:** mostly pop, with a few gritty blues numbers.
- **polish 4:** Blogcritics, "smoother and more polished"; Hermes, "impeccable stereo sound"; Jørgensen, "the technical quality excellent".
- **experimental 1:** Jørgensen, "pointed in no one musical direction". The variety is of genre, not of form.
- **voice clear|powerful:** PopMatters, "Presley's voice was still strong and clear"; Record Collector, "sensual, often smouldering depth"; Jørgensen, "new depth to his voice".
- **instruments:** Discogs 1999 CD credits: guitar (Scotty Moore, Hank Garland, Elvis), bass (Bob Moore, Hank Garland), drums (D.J. Fontana, Buddy Harman), piano (Floyd Cramer), saxophone (Boots Randolph).
- **lyrics sensuality:** Daily Vault, "'Such A Night'… about a one night stand"; Hermes, "dude sounds like he could convert a nunnery".
- **producers:** empty. Steve Sholes and Chet Atkins are credited only as "A&R [Original]" on the FTD reissue. NPR: "he served as much as his own producer". The artist's own role is dropped.
- **sounds_like Frank Sinatra:** PopMatters, "The King's first album upon returning could have been made by the Chairman of the Board". Peggy Lee on "Fever" (Blogcritics, Daily Vault) is the version he covered, so it is excluded.
- **landmark 1:** Daily Vault, "may have been the most important album of his career"; Hermes, "greatest noncompilation LP".

## sinatra-intheweesmallhours: In the Wee Small Hours (1955)
**Sources**
- Rolling Stone 500 (2020 #282): https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/frank-sinatra-in-the-wee-small-hours-2-1062951/
- Rolling Stone 500 (2012 #101): https://www.rollingstone.com/music/music-lists/500-greatest-albums-of-all-time-156826/frank-sinatra-in-the-wee-small-hours-55052/
- Sputnikmusic, Iai (Emeritus), 5.0: https://www.sputnikmusic.com/review/7066/Frank-Sinatra-In-The-Wee-Small-Hours/
- The Cinch Review, Sean Curnyn 2015: https://cinchreview.com/review-frank-sinatra-in-the-wee-small-hours/62/
- Scott Yanow, Classic Rock History: https://www.classicrockhistory.com/10-essential-frank-sinatra-albums/
- Tom Waits, The Guardian 2005: https://www.theguardian.com/music/2005/mar/20/popandrock1
- Discogs W-581 (1376047): Nelson Riddle arranger and conductor. Capitol 1998 CD (509560): "Produced By Voyle Gilmore".

**Cells**
- **genres:**
  - ballad: Yanow, "ones focused on ballads".
  - standards: Yanow, "16 standards".
  - vocaljazz: Sputnik, "the influences here stem clearly from vocal jazz and film scores". This is weaker; it is phrased as an influence.
  - `traditionalpop` and `torchsong` are not named by any source I opened.
- **energy 1, tempo 1, groove 0, mood 1:** RS, "midnight mood of loneliness and lost love"; Yanow, "sounding a bit desolate but ultimately hopeful".
- **theatrical 1:** RS 2012, "you'll hear the soft intake of his breath"; Yanow, "quietly emotional interpretations".
- **polish 4:** Sputnik, "rich, textured, warm album"; Capitol studio orchestra.
- **voice soft:** the same RS and Yanow quotes.
- **instruments:**
  - celesta: RS 2020, "brought in on the bell tones of a celesta".
  - strings: Cinch, "Nelson Riddle's strings".
  - piano: Sputnik, "the distant, distracted piano intro".
  - orchestra: Riddle conducts (Discogs).
  - guitar is left out: Sputnik says "not a guitar in sight".
- **production stringarrangements:** Riddle's arrangements (Discogs, Cinch).
- **lyrics heartbreak|love|introspection:** RS, "loneliness and lost love"; Cinch, "love, loss and yearning"; Sputnik, "a man descending into depression, a man alone".
- **producers Voyle Gilmore:** Capitol 1998 CD credit.
- **influenced_by Billie Holiday:** Sputnik, "Sinatra himself quoted Billie Holiday as a major influence on proceedings". This is the artist's statement reported by a critic, with no primary quote, so it is medium strength.
- **landmark 1:** RS 500 entries; Tom Waits names it his #1 album.
- **Legacy 4:** Sputnik, "a serious contender for the most influential musical work of the 20th century"; "Holiday's 1958 album Lady In Satin was directly influenced by this album". RS adds "prototypical concept album". Wikipedia's B.B. King, Marvin Gaye and Claus Ogerman claims (from books) were not opened.

## sinatra-songsforswinginlovers: Songs for Swingin’ Lovers! (1956)
**Sources**
- Rolling Stone 500 (2012 #308): https://www.rollingstone.com/music/music-lists/500-greatest-albums-of-all-time-156826/frank-sinatra-songs-for-swingin-lovers-33458/
- Official Charts, Max Persad, July 2026: https://www.officialcharts.com/chart-news/first-ever-number-1-album-1956-frank-sinatra-songs-for-swingin-lovers/
- MusicWeb International, Tony Augarde: https://musicweb-international.com/jazz/2014/sinatra_swinging.htm (the personnel list is printed on this page)
- Salon, Charles Taylor 2002: https://www.salon.com/2002/07/08/swingin_lovers/
- Scott Yanow, Classic Rock History (above)
- Sputnikmusic user review, AugustWest1990 (a user, so minor): https://www.sputnikmusic.com/review/77320/frank-sinatra-songs-for-swingin-lovers!/
- Discogs W-653 (2018290): Riddle conductor. Capitol 1998 CD (509526): "Producer Voyle Gilmore".

**Cells**
- **genres:**
  - swing: Yanow, "One of Frank Sinatra's finest swing albums".
  - traditionalpop: Official Charts, "one of the defining traditional pop albums of its era".
  - bigband: MusicWeb, "The main sound was a big band".
  - jazz: MusicWeb, "deserves to find itself in the Jazz category".
  - standards: RS, "The songs were standards".
- **mood 5:** Sputnik user, "relentlessly upbeat"; Official Charts, "joyous".
- **energy 3, groove 3:** MusicWeb, "a big band which added punch"; Salon, "these records were all about rhythm".
- **polish 4:** MusicWeb, "the arrangements were so good that you could enjoy them for themselves"; studio big band and strings.
- **voice:** empty. Sources describe his phrasing ("conversational phrasing", Official Charts; "phrasing approach that of a real jazz singer", MusicWeb), not a voice type from the list.
- **instruments:** MusicWeb personnel: alto sax (Harry Klee), trumpets, trombones (Milt Bernhart, Juan Tizol), bass trombone, piano (Bill Miller), guitar (George Van Eps), bass (Joe Comfort), drums (Irv Cottler). Official Charts: "buoyant brass, sweeping strings"; MusicWeb, "used strings but not to excess".
- **production hornarrangements|stringarrangements:** Official Charts, "Riddle's arrangements wrapped Sinatra's… phrasing in buoyant brass, sweeping strings".
- **lyrics love:** Official Charts, "romance, with a spring in its step", "effortlessly romantic".
- **producers Voyle Gilmore:** Capitol 1998 CD credit, confirmed by Official Charts ("produced by Voyle Gilmore").
- **sounds_like, influenced_by:** empty. Official Charts says Sinatra "reportedly asked Riddle for a 'long crescendo'", but names no model artist.
- **landmark 1:** Official Charts, "defining traditional pop albums of its era"; MusicWeb, "a milestone in Sinatra's career".
- **Legacy 4:** MusicWeb, "This 1956 LP launched a thousand imitators: from Michael Bubl[é] to Kevin Fitzsimmons and the whole Rat Pack scenario." The page's encoding drops the é.

## armstrong-satchplaysfats: Satch Plays Fats (1955)
**Sources**
- Louis Armstrong House Museum virtual exhibit, Ricky Riccardi (Director of Research Collections), 2025. It reprints his Grammy-winning 2021 Mosaic notes: https://www.louisarmstronghouse.org/virtual-exhibits/satch-plays-fats-a-70th-anniversary-celebration/
- Riccardi, "60 Years of Satch Plays Fats", Dippermouth 2015 (quotes Avakian and Nat Hentoff's Down Beat review): https://dippermouth.blogspot.com/2015/05/60-years-of-satch-plays-fats.html
- Discogs CL 708 (2884216): Armstrong trumpet and vocals, Trummy Young trombone, Barney Bigard clarinet, Billy Kyle piano, Arvell Shaw string bass, Barrett Deems drums, Velma Middleton vocals on 3 tracks. Columbia 2000 CD (6046635): "Producer [Original Recordings] George Avakian".

**Cells**
- **genres:**
  - jazz: Riccardi and Hentoff ("The jazz world agreed").
  - ballad: Riccardi on "Blue Turning Grey", "interpret a ballad with as much maturity".
  - novelty: Avakian, "Of Fats's pre-R&B novelties… 'All That Meat and No Potatoes' was a natural for a duet".
  - Both ballad and novelty are single tracks, so they go in the tail. No opened source says "New Orleans" or "Dixieland" for this album. Jazz Music Archives (403) reportedly does, and it is a user review.
- **energy 3, tempo 3, groove 3:** a mix of the "seriously smoking" "Ain't Misbehavin'", "foot-patting tempos", and "Blue Turning Grey" "slowed down dramatically".
- **mood 4:** Riccardi, "Satch and Fats lived to bring joy"; the 1955 review quoted at LAHM says "filled with natural good humor".
- **theatrical 3:** comic duets with Middleton, plus dramatic open-horn choruses.
- **polish 3:** Avakian, "I had to do a great deal of splicing and editing to produce really good tapes". The band was tired, and the editing raised the result to normal studio level.
- **voice raspy:** Riccardi, "the warmth of the gravel pit of later years". This matches `armstrong-ellaandlouis`.
- **production:**
  - overdubbing: "Avakian having Louis overdub a scat obligato"; "have Armstrong record a trumpet obbligato behind his own vocal".
  - tapesplicing and scatsinging: new tokens, see above.
- **lyrics:** empty.
- **producers George Avakian.**
- **influenced_by:** empty. Fats Waller is the songwriter being covered, so he is excluded.
- **landmark 1:** LAHM, "this seminal album", "another masterpiece, one which… seems to have overtaken Handy in some circles". Riccardi is the Armstrong House's research director (a scholar, not a label), but this rests on one voice, so confidence is medium.
- **No legacy row.**
- **Reception:** Down Beat 4 stars at release. Hentoff said it was "not equal in quality" to the Handy album. LAHM: "positive reviews and strong sales". The Billboard #10 peak comes from Wikipedia only and was not cited.

