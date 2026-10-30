# Claude research notes (Oct 2026, wave 5)

# Wave 8 group A: evidence notes (King Crimson, Genesis, The Moody Blues, Emerson, Lake & Palmer)

Wikipedia never cited. AllMusic (403), Discogs website (403), Goldmine/Jazzwise Red reviews (403), Uncut Banks interview (403) could not be opened. Discogs data via the public API (api.discogs.com masters/releases); MusicBrainz via its web service.

## 1. Where our catalogue cites them
Script over docs/descriptors/*.csv (sounds_like, influenced_by) + src/data/artistInfluences.ts.
- **King Crimson** — named records: *In the Court of the Crimson King* (pfm-storiadiunminuto influenced_by; cocciante-mu sounds_like). Plain "King Crimson": area-arbeitmachtfrei [1/6], bowie-heroes, goblin-profondorosso, goblin-roller, goblin-nonhosonno, pfm-storiadiunminuto (sounds_like), pinkfloyd-asaucerfulofsecrets, -ummagumma, -atomheartmother, -meddle, -obscuredbyclouds, -animals, talkingheads-remaininlight. artistInfluences.ts: Pino Daniele, Goblin, Nada.
- **Genesis** — named: *Nursery Cryme* (pfm-storiadiunminuto sounds_like), *Selling England by the Pound* (pfm-perunamico sounds_like; Gazebo's source note in artistInfluences.ts). Plain: eros-musicae (influenced_by), mikeoldfield-crises, pinkfloyd-thewall, queen-queenii, -theworks, -akindofmagic, yes-closetotheedge. artistInfluences.ts: Goblin, Gazebo, Novecento, Simple Minds, Toto, Ligabue, Eros Ramazzotti.
- **The Moody Blues** — named: *On the Threshold of a Dream* (pfm-storiadiunminuto influenced_by). Plain: beegees ×7 (1st, horizontal, idea, odessa, 2yearson, trafalgar, towhomitmayconcern), moroder-knightsinwhitesatin (influenced_by), newtrolls-senzaorariosenzabandiera, pinkfloyd-asaucerfulofsecrets, -more, -atomheartmother, -meddle, -obscuredbyclouds.
- **Emerson, Lake & Palmer** — named: *Emerson, Lake & Palmer* (pfm-storiadiunminuto influenced_by [1/7]), *Tarkus* (banco-darwin sounds_like [2/7]). Plain: goblin-suspiria (influenced_by), goblin-ilfantasticoviaggiodelbagarozzomark, pfm-storiadiunminuto, pfm-perunamico. artistInfluences.ts: Goblin, Le Orme ("Collage nacque anche ispirandosi a loro"), Toto.
Choice: all named records described, plus Red, Discipline (for the Talking Heads/Bowie-era links) and Days of Future Passed (their most important album). Not described: Selling England's neighbours Foxtrot/Lamb, Brain Salad Surgery.

## 2. Sources opened (short keys)
- PF-COURT: Pitchfork, Ryan Reed, 2019, 10/10 https://pitchfork.com/reviews/albums/king-crimson-in-the-court-of-the-crimson-king-50th-anniversary/
- PF-RED: Pitchfork Sunday Review, Sam Sodomsky, 2017, 9.0 https://pitchfork.com/reviews/albums/king-crimson-red/
- PF-DISC: Pitchfork Sunday Review, Sam Sodomsky, Jan 2026, 8.8 https://pitchfork.com/reviews/albums/king-crimson-discipline/
- SG: Stereogum, 50th anniversary of ITCOTCK https://stereogum.com/2060790/king-crimson-debut-album-50th-anniversary-review/reviews/the-anniversary
- RS50: Rolling Stone 50 Greatest Prog Rock Albums (2015) https://au.rollingstone.com/music/music-news/50-greatest-prog-rock-albums-of-all-time-718/ (Court #2, Selling #6, Lamb #9, BSS #12, Foxtrot #14, Red #15, Larks #20)
- PROG100: Prog readers' 100 Greatest Prog Albums https://www.loudersound.com/features/the-100-greatest-prog-albums-of-all-time-20-1 (Court #2, Selling #3, Red #12)
- LOU-TBT: Louder, ITCOTCK track-by-track (McDonald, Sinfield) https://www.loudersound.com/features/in-the-court-of-the-crimson-king-track-by-track
- HH: Head Heritage, Nursery Cryme https://www.headheritage.co.uk/?p=7212
- SP-NC: Sputnikmusic Nursery Cryme https://www.sputnikmusic.com/review/4104/Genesis-Nursery-Cryme ; SP-SELL: https://www.sputnikmusic.com/review/49482/Genesis-Selling-England-By-The-Pound/ (Emeritus staff)
- GW: Grateful Web, Selling England 50th (with Hackett quotes) https://www.gratefulweb.com/articles/genesis-selling-england-pound-marks-its-50th-anniversary
- UCR-HACKETT: https://ultimateclassicrock.com/steve-hackett-genesis-king-crimson-interview/
- LOU-DOFP: Louder, John Aizlewood review https://loudersound.com/reviews/the-moody-blues-days-of-future-passed-album-review
- PROG-DOFP50: Kris Needs review https://loudersound.com/reviews/the-moody-blues-days-of-future-passed-50th-anniversary-edition-album-review
- PROG-DOFP-FEAT: Prog 2022 making-of (Lodge, Hayward, Pinder quotes) https://www.loudersound.com/music/albums/moody-blues-days-of-future-past
- UCR-THR: https://ultimateclassicrock.com/moody-blues-on-the-threshold-of-a-dream/
- RRG-THR: Rock and Roll Globe (Jordan Blum) https://rockandrollglobe.com/?p=6037
- UCR-ELP: https://ultimateclassicrock.com/emerson-lake-palmer-debut/
- LOU-TARKUS: Prog/Louder, Malcolm Dome (Emerson quotes) https://www.loudersound.com/features/elp-s-tarkus-the-story-behind-the-album
- Discogs API releases: Court 2287669, Red 702337, Discipline 172074, Nursery Cryme 1907830, Selling 1702230 + 29544277, DOFP 5723684, Threshold 7677173 + 5270491, ELP 819730, Tarkus 1345134 (credits, labels, dates; master styles).
- MusicBrainz release groups (dates, producer relations).

## 3. Per album

### kingcrimson-inthecourtofthecrimsonking (1969)
- genres: RS50 "a Mellotron-drenched mixture of jazz and classical influences, dragging psychedelia to a darker place"; PF-COURT "menacing rock, classical sophistication, pastoral psychedelia, and free-jazz mania", "nuclear proto-metal riffs, stuttering jazz-rock drum fills"; SG "surging, epic psychedelia with elements of jazz and classical", "stomping proto-metal ... blaring jazz-rock"; Discogs master styles Prog Rock, Symphonic Rock. freejazz = Moonchild/Schizoid passages (tail).
- scales: mood 1 (PF "designed to provoke and scare", "menace"; RS "darker place"); energy 3 (explosive opener vs two soft ballads and a 12-min improv, SG); theatrical 4 (epics, "Grand Canyon-sized mellotron", PF); experimental 4 (free improvisation on Moonchild, collage structure, SG/PF); electronic 2 (Mellotron/keyboards band); polish 3; tempo 2; groove 0.
- voice clear|powerful: PF Lake "Building from a fragile croon to a crackling, full-throated roar"; SG "Lake has a very nice voice".
- instruments: Discogs credits (Fripp guitar; McDonald reeds, woodwind, vibraphone, keyboards, Mellotron; Lake bass; Giles drums, percussion); SG acoustic guitars, flute, twin saxes; PF alto saxophone. Vibes → mallets.
- production: overdubbing (McDonald, LOU-TBT: "We did overdub some parts later"; SG "twin overdubbed saxes"); distortedvocals (PF "Lake’s distorted shriek"; SG "declaiming ... through a distorted speaker"). Schizoid Man recorded in one take (McDonald) — one track only, not tagged.
- lyrics political|social: PF Sinfield's "images of burning politicians and starving children to survey the destruction of the Vietnam War"; LOU-TBT Sinfield "against the Vietnam war".
- producers: King Crimson (Discogs, MusicBrainz). Tony Clarke's aborted sessions are not on the record (PF).
- sounds_like: PF "The Moody Blues’ symphonic grandeur, Brian Wilson’s expansive production, the psychedelic experiments of Pink Floyd and the Beatles—these are some of prog’s essential building blocks. But with their first record, King Crimson shaped those pieces into a monument" (medium: building blocks, not a direct likeness; Brian Wilson left out as a production comparison). Black Sabbath [1/5]: SG on the title track, Lake's bass "not unlike what Geezer Butler would soon be doing in Black Sabbath".
- influenced_by: LOU-TBT, lyricist Peter Sinfield (band member, speaks for the band) on the title track: "Ian took it and rewrote the music ... his references were not just The Beatles, but also big, sweeping things like Stravinsky, Mahler" → [1/5] each.
- landmark 1: PF "landmark debut", RS50 "set the tone and template for the coming prog revolution". confidence high.

### kingcrimson-red (1974)
- genres prog|metal: Bruford (band member) quoted in PF-RED: the band's "thick, intelligent Metal kind of sound"; RS50 "the most bone-crunchingly heavy music prog had yet heard"; Discogs Prog Rock. PF also "avant-garde blues-rock hybrids" (of Starless and Bible Black, not Red) — not used.
- scales: energy 4 ("one of classic rock’s heaviest", "vicious and vital"); mood 1 ("Red is a record about fear"); experimental 4 (live improvisation Providence, 13/8 finale, cymbal from a trash can); theatrical 3; electronic 1; polish 3 ("meticulous"); tempo 3; groove 1.
- voice powerful: PF Wetton "Crimson bluesiest, ballsiest frontman", lyrics "delivered solemnly".
- instruments: Discogs (Fripp guitar, Mellotron; Wetton bass; Bruford percussion; guests Cross violin, McDonald alto sax, Collins soprano sax, Charig cornet, Miller oboe).
- production: liverecording (PF "Providence ... recorded live at their ’74 tour stop"); distortion (PF "Wetton’s distorted bass").
- lyrics introspection|social: PF "fiery and anxious"; "Fallen Angel ... makes direct reference to gang violence in New York".
- producers: King Crimson (Discogs).
- sounds_like: Black Sabbath [1/5] — PF on Starless, "Wetton’s bass buzzes with Geezer Butler levels of menace".
- landmark 1: PF "the only [album] to match [the debut's] impact or influence"; PROG100 "The last truly legendary King Crimson album". high.

### kingcrimson-discipline (1981)
- genres: Stereogum (on the 1981–84 albums) "three albums of arty prog-funk"; PF-COURT "the interlocking guitars and new wave sheen of 1981’s Discipline"; Discogs Prog Rock. prog-funk split as prog + funk (no new token).
- scales: polish 4 (PF "transporting the heaviness of Red to a pristine studio environment"); electronic 3 (electronic drums, guitar synth, Chapman Stick); experimental 4 ("labyrinthian", polyrhythmic, Indiscipline "never finds resolution"); mood 2 ("restless and uneasy"); groove 2 (Levin's riff "could lead a funk song", "tap your foot"); energy 3; tempo 3; theatrical 2.
- voice clear|spoken: PF Belew "goes letter-by-letter listing synonyms" (Elephant Talk), "a spoken-word vocal part" (Indiscipline), sings/serenades on Matte Kudasai.
- instruments: Discogs (Belew guitar; Fripp guitar, devices; Levin Chapman Stick, bass; Bruford percussion); PF "Bruford played primarily on electronic drums", "Fripp filters his solo through a synthesizer" (guitarsynth), Belew "with a slide" (slideguitar).
- production sampling: PF "sampling a conversation about crime on the streets" (Thela Hun Ginjeet).
- lyrics: PF Indiscipline from his wife's letter on artistic struggle (introspection), Matte Kudasai serenade (love), Elephant Talk "music-nerd humor" (irony).
- producers: King Crimson | Rhett Davies (Discogs; MusicBrainz Rhett Davies).
- sounds_like: PF "The clearest inspiration is Talking Heads" (critic's view, so sounds_like not influenced_by). Stereogum on "a song like Frame by Frame": "doing the same thing as Talking Heads, the Police, or early ’80s Rush" → The Police [1/7], Rush [1/7].
- influenced_by: Fripp's interest in gamelan (PF, Fripp 1982 quote) is a genre/tradition, not an artist: left out.
- landmark 0 (no source calls it defining). high.

### genesis-nurserycryme (1971)
- genres: SP-NC "Influences from British folk and renaissance classical music blend with rock", "symphonic rock"; HH "baroque folky backing", "peculiarly English sound"; RS50 (Foxtrot entry) "the eccentric worldview and symphonic grandiosity of 1971’s Nursery Cryme"; Discogs Prog Rock.
- scales: theatrical 4 (HH Gabriel's theatricality, multi-narrator songs; SP "mini-musical"); polish 2 (SP "The production hasn't straightened all the wrinkles"; but "over-produced" on Salmacis — so 2, not 1); mood 3 (comic and sinister, HH/SP); experimental 3; energy 3; tempo 3; groove 1; electronic 2 (organ/Mellotron).
- voice powerful|soft: SP Gabriel "shouts ... very, very powerful"; HH Gabriel "gently singing", Collins' "vocal style in those days was quite soft" (For Absent Friends).
- instruments: Discogs credits (Banks organ, Mellotron, piano, electric piano, 12-string; Hackett electric guitar, 12-string; Rutherford bass, bass pedals, 12-string; Collins drums, percussion; Gabriel flute, bass drum, tambourine). SP "church organ".
- production distortion: HH Banks "put[ting] them [keyboards] through a distortion pedal". Hackett's two-hand tapping (HH, SP) has no token.
- lyrics storytelling|irony: HH "oddball storytelling", "inappropriately jaunty account of a suicide"; SP "lyrics are incredibly funny".
- producers: John Anthony (Discogs).
- sounds_like (HH, per song; 7 tracks): For Absent Friends "wouldn’t have been too out of place on Simon & Garfunkel’s Bookends album"; Seven Stones "a sort of twisted take on an early Bee Gees ballad before heading into Moody Blues territory ... The King Crimson mellotron"; Harold the Barrel "reminiscent of The Beatles trying to write something in the vein of The Kink’s ‘The Moneygoround’"; Musical Box: Collins' drumming "hints at the Keith Moon power" (The Who).
- influenced_by King Crimson (medium): UCR-HACKETT — KC's early work "became a major influence on Genesis during their early evolution" (UCR paraphrase), Hackett: "we bought our first Mellotron off them" (the Mellotron first used on this album, Hackett's first with the band). No specific record named.
- landmark 0 (HH: "the first true Genesis album" but "Unfairly Overshadowed"). confidence medium (no major-outlet review opened).

### genesis-sellingenglandbythepound (1973)
- genres: RS50/PROG100 prog; GW "volleys of zinging ‘70s fusion-flavored guitar" (Dancing with the Moonlit Knight) → jazzfusion tail; Discogs Prog Rock.
- scales: theatrical 4 (Gabriel voicing multiple characters "a la Monty Python", GW; SP "lives and breathes the characters"); mood 3 ("melancholy, social commentary, colorful word play, slapstick humor", GW); experimental 3; energy 3; polish 3; tempo 3; groove 1; electronic 2.
- voice powerful|soft: SP "Gabriel leads the charge with his powerful voice"; GW Collins on More Fool Me "tender ... sensitivity".
- instruments: Discogs (Banks keyboards, 12-string; Hackett electric, nylon guitar; Rutherford bass, 12-string, electric sitar; Collins drums, percussion; Gabriel flute, oboe, percussion); GW piano intro, "churchy organ", Mellotron, ARP Pro Soloist synth, Moog Taurus bass pedals.
- production: arp (GW "the ARP Pro Soloist synthesizer"), layeredvocals (GW "gorgeous, cascading harmonies", "CSN-style harmonies").
- lyrics social|irony|storytelling|nostalgia: RS50 "Dreams of Merrie Olde England turn into consumerist nightmares", "pillory and parody"; GW "commenting on the socioeconomic state of England and resistance to ... Americanization", "electrified kind of Victorian nostalgia".
- producers: John Burns | Genesis (Discogs).
- sounds_like (8 tracks): GW "Traffic-like, two-chord groove" (I Know What I Like), "Crimsonesque flute intervals" (Firth of Fifth), "CSN-style harmonies" (Cinema Show); SP Moonlit Knight "explodes into a rock song not dissimilar from the Rush masterpiece 2112".
- influenced_by: Hackett (GW): "There are classical music elements in these long pieces, and I’m proud of those influences" — no artist named, empty.
- landmark 1: RS50 #6, PROG100 #3 (topped the previous poll). high.

### moodyblues-daysoffuturepassed (1967)
- genres: Discogs master styles Psychedelic Rock, Symphonic Rock, Baroque Pop; PROG-DOFP50 "the work that launched the classical-prog crossover", "spirited freakbeat rockers like Twilight Time and Peak Hour"; PROG-DOFP-FEAT Nights In White Satin "an emotional folk ballad-turned-towering romantic opus", "birth of progressive rock". freakbeat = NEW token (mid-60s British mod/psych beat, distinct from `beat`).
- scales: theatrical 5 (PROG-DOFP50 "full-bore classical orchestration", "tumultuously grandiose"); polish 4 (Decca stereo showcase, "lavishly layered Dawn Is A Feeling", LOU-DOFP); electronic 1 (orchestra + Mellotron); mood 3 (melancholy Nights/haunting Tuesday Afternoon vs spirited rockers); experimental 2; energy 2; tempo 2; groove 1.
- voice: left empty (sources describe harmonies and Pinder's spoken narration of Edge's poems, not the lead singing).
- instruments: Discogs (London Festival Orchestra, Peter Knight conductor); PROG-DOFP-FEAT Pinder's Mellotron, Twilight Time's "pounding piano".
- production: stringarrangements (Knight's orchestral links, PROG-DOFP50/FEAT); layeredvocals ("the group’s plaintive massed harmonies", Hayward).
- lyrics introspection|love: concept of "a single day in an average worker’s life" (PROG-DOFP50); Nights written after a break-up and a new love (FEAT).
- producers: Tony Clarke | Michael Dacre-Barclay — Discogs credits both as "Realization", MusicBrainz as producers; FEAT calls Clarke "producer". Hugh Mendl = executive producer (dropped).
- sounds_like: The Zodiac (Cosmic Sounds) [2/7] — PROG-DOFP50 "Edge’s bookending poems (The Day Begins and Late Lament) show they’d heard The Zodiac’s Cosmic Sounds".
- influenced_by (band, PROG-DOFP-FEAT): Hayward "Sgt. Pepper and Strawberry Fields ... gave us the freedom to try anything" → The Beatles (Sgt. Pepper's Lonely Hearts Club Band); Pinder "I grew up listening to the music of Mantovani ... The Mellotron enabled me to create my own variations of string movements" → Mantovani; Hayward "listen to Holst’s The Planets suite – if you listen to Jupiter on that record you might hear Days Of Future Passed" → Gustav Holst. Dvořák: the label's abandoned original plan, not used.
- landmark 1: LOU-DOFP "launch[ed] ... glory years"; RRG "an influential masterpiece". high.

### moodyblues-onthethresholdofadream (1969)
- genres: Discogs styles Psychedelic Rock, Symphonic Rock; UCR-THR "ambitious compositions blending psychedelia and classical"; RRG "Never Comes the Day" "quite folksy and a little bluesy", "Dear Diary ... cryptically jazzy" (tail).
- scales: theatrical 4 (UCR "loaded with strings", RRG "symphonic elegance"); experimental 3 (RRG "disjointed brazenness", "computerized manipulation", "spacy isolation"); polish 4; mood 3 (joy and sadness juxtaposed, RRG); energy 2; tempo 2; groove 1; electronic 1.
- voice empty (no description of lead singing).
- instruments (RRG): swirling Mellotron, Thomas' flute, acoustic guitar arpeggios, "gruffer guitarwork", piano chords, walking bass lines, percussion.
- production layeredvocals: RRG "wistful harmonies".
- lyrics spiritual|introspection|love: Hayward (RRG) "something to do with enlightenment and the search for it"; dreams; "To Share Our Love" romantic.
- producers: Tony Clarke (Discogs; Edge in UCR: "Tony Clarke was the driving force behind that").
- sounds_like (13 tracks, RRG): Lovely to See You "reminiscent of Roy Orbison and Crosby, Stills, Nash & Young"; Dear Diary "reminiscent of Small Faces"; So Deep Within You "the vigorous, no-nonsense candor of a Guess Who track"; closing suite Have You Heard I/II "percussion that conjures The Beatles’ ‘A Day in the Life’" → The Beatles (Sgt. Pepper's...) [2/13].
- influenced_by empty (Edge's space-race theme and Clarke as producer are not artist influences).
- landmark 1: RRG "an enduring landmark", "a benchmark". confidence medium (critics split: UCR quotes Christgau and Rolling Stone negative).

### elp-emersonlakepalmer (1970)
- genres: Discogs Prog Rock; UCR "Carl Palmer’s jazzy percussion showcase, Tank, and the classical-jazz lunacy of The Three Fates" → jazz tail. "classical-rock insanity" refers to the Isle of Wight show, not used.
- scales: energy 4 ("volcanic Hammond organ", "battering ram fuzz bass", "bombastic technique"); tempo 4 ("million-notes-a-minute style"); theatrical 4 (bombast); experimental 3; electronic 2 (Hammond, synth climax on Lucky Man); polish 3; groove 1; mood empty (not described).
- voice empty.
- instruments (UCR): Hammond organ, piano ("piano-driven epic Take a Pebble", "Latin piano lines"), synth (Lucky Man), fuzz bass, percussion/drums.
- production: distortion (fuzz bass), panning ("stereo-panned harmonies"), layeredvocals (harmonies).
- producers: Greg Lake (Discogs, MusicBrainz).
- sounds_like: UCR hears King Crimson's "Moonchild" in Take a Pebble — dropped: Lake's own former band (wave-1 rule).
- influenced_by: Bartók (The Barbarian) and Janáček/Bach (Knife-Edge) are adaptations/quotations → not influences.
- landmark 0. medium.

### elp-tarkus (1971)
- genres: Discogs Prog Rock; LOU-TARKUS "Jeremy Bender, which has its roots in Americana" → americana [tail].
- scales: energy 4 (suite's frantic movements, Battlefield); electronic 3 (Moog solos, Hammond; Discogs Moog synthesiser); theatrical 4; experimental 4 (Emerson: no "key or time signatures", "musical Esperanto"); polish 3; groove 1; mood, tempo empty.
- instruments: Discogs (Emerson Hammond organ, St Mark's church organ, piano, celeste, Moog; Lake vocals, bass, electric and acoustic guitar; Palmer drums, percussion).
- production moog: Discogs "Synthesizer [Moog Synthesiser]".
- lyrics storytelling|spiritual: LOU-TARKUS the armadillo concept, "evolution in reverse"; The Only Way "Can you believe God makes you breathe".
- producers: Greg Lake (Discogs; Emerson: "he settled into producing it").
- influenced_by (Emerson, LOU-TARKUS, both on the title suite = 1 of 7 tracks): "I was a huge admirer of Frank Zappa ... Frank was of the opinion that there really should not be time signatures. That’s how I felt" → Frank Zappa [1/7]; "Behind it all I always carried Ginastera’s ideology in my head" → Alberto Ginastera [1/7]. Left out: Prokofiev (one transposed bar = quotation), Bach (The Only Way is built on Bach's music = quotation), King Crimson (Battlefield "inspired by" KC = Lake's own former band), Little Richard (Are You Ready Eddy? based on his song = derivative).
- landmark 0. medium.

## 4. Reception reasoning
- Mainstream: KC 2 (cult, uncompromising, Fripp "averse to trends", PF); Genesis/Moody/ELP 3 (band-written auteur records with chart singles/albums, compare Yes Close to the Edge = 3). Days of Future Passed began as a label demonstration-record idea (FEAT) but the band made its own concept: kept at 3.
- Acclaim: Court/Red/Selling 5 (top-15 placings in RS50 and/or Prog poll, Pitchfork 9–10); Discipline 4 (PF 8.8, Stereogum hostile); Threshold 3 (split critics).

## 5. New tokens
- genre `freakbeat` (Kris Needs, Prog, on Days of Future Passed: "spirited freakbeat rockers"). Not mapped to `beat` (different, later mod-psych sound).

## 6. Uncertain
- Court sounds_like (Moody Blues/Pink Floyd/Beatles) rests on Pitchfork's "building blocks" sentence.
- Nursery Cryme row has no major-outlet review (Head Heritage, Sputnik, RS mention); KC influence is a UCR paraphrase of Hackett.
- Works Volume 2 (ELP) in the discography is borderline compilation.
- Studio/recording locations left out of `scene` unless a source named them (Wessex for Court, Decca for Days).

