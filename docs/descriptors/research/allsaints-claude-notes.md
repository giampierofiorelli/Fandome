# Claude research notes (Oct 2026): shared file for Melanie C, All Saints, Nelly Furtado

# New descriptors: Melanie C, All Saints, Nelly Furtado (draft, Oct 2026)

Files: `rows.csv` (27-col v4 header), `reception.csv`, `legacy.csv`. None of the three artists is in `catalog.ts`/`seed.ts` yet (grep: no `melaniec`, `allsaints`, `nellyfurtado`); ids proposed below are unused.

Pages that could not be opened (403/blocked from here): Slant (Northern Star, Loose), AllMusic, Metacritic, AOTY, Rolling Stone 1999 review (archive only), web.archive.org, BBC News, newspapers.com, umusic.ca. Facts from those are marked "via Wikipedia" (the Wikipedia page itself was read in full as wikitext).

## Catalogue rows (studio albums only)

```ts
['melaniec', 'Melanie C', '#4a90a4', 'Sporty goes solo: Northern Star, I Turn to You', [['Northern Star', 1999], ['Reason', 2003], ['Beautiful Intentions', 2005], ['This Time', 2007], ['The Sea', 2011], ['Stages', 2012], ['Version of Me', 2016], ['Melanie C', 2020], ['Sweat', 2026]]],
['allsaints', 'All Saints', '#8a5fbf', 'Never Ever, Pure Shores and London cool', [['All Saints', 1997], ['Saints & Sinners', 2000], ['Studio 1', 2006], ['Red Flag', 2016], ['Testament', 2018]]],
['nellyfurtado', 'Nelly Furtado', '#c2703d', 'Like a Bird, then Maneater with Timbaland', [['Whoa, Nelly!', 2000], ['Folklore', 2003], ['Loose', 2006], ['Mi Plan', 2009], ['The Spirit Indestructible', 2012], ['The Ride', 2017], ['7', 2024]]],
```
Lists from each artist's Wikipedia "Studio albums" section. Sweat (Melanie C) was released 1 May 2026 (Wikipedia, Sweat (Melanie C album)), so it is out. Colours checked unused in catalog.ts.

## Scenes (`src/data/scenes.ts`)

```ts
melaniec: 'GB en 1990 pop,rock', allsaints: 'GB en 1990 pop,rnb', nellyfurtado: 'CA en 2000 pop,rnb',
```
All three are global-market (GB, CA) English-language pop: never discovery targets under the local-scene rule. Furtado has one Spanish album (Mi Plan) but sings mainly in English.

## Artist-level influences (own words)

- **Melanie C**
  - Madonna: "My biggest influence is... Madonna. She was a big inspiration when I was growing up." (Express, 2010) https://www.express.co.uk/expressyourself/213708/Spice-Girl-Melanie-C-Life-as-I-know-it
  - Annie Lennox / Eurythmics: "There were a lot of women that inspired me, and I think inspired all the Spice Girls, to feel very passionate about being powerful women, and Annie Lennox was one of them." (The Quietus, Bakers' Dozen) https://thequietus.com/interviews/bakers-dozen/melanie-c-interview-favourite-music-spice-girls/6/
  - Blur, Oasis (taste rather than influence): "So Blur and Oasis were my gateway into guitar music." https://thequietus.com/interviews/bakers-dozen/melanie-c-interview-favourite-music-spice-girls/10/
  - Not verified: Diana Ross (Rolling Out 2025, 403). The Digital Spy page Wikipedia cites for "she's inspired me a lot musically" doesn't contain that quote.
- **All Saints**: I found no first-person statement. Shaznay Lewis bios (Missy Elliott, Bob Marley, Johnny Mathis) come from fan or aggregator sites, so I left them out.
- **Nelly Furtado**
  - Mariah Carey: "I used to write R&B songs in my bedroom that sounded like Mariah Carey songs." (Billboard 2006) https://www.billboard.com/articles/news/58093/the-juice-is-loose
  - Hip-hop radio and mixtapes as her first revelation; ABBA and Blondie were her parents' records (Hot Press) https://www.hotpress.com/music/girls-from-brazil-1511264
  - Not verified: Ani DiFranco ("I wanted to be Ani DiFranco", Times 2006, page offline). The long Wikipedia list (Madonna, Blondie, Prince, The Police, Eurythmics, Talking Heads, TLC, Björk, Radiohead, U2…) cites a dead Universal Austria bio.

## Per-cell sources

### melaniec-northernstar
- **Genres**
  - Wikipedia: pop with rock, electronica, trance, trip hop and R&B elements.
  - AllMusic: pop (infobox, via Wikipedia).
  - Discogs master 87730: Electronic, Rock, Pop; Pop Rock, Soft Rock, Downtempo, Electro (API https://api.discogs.com/masters/87730).
  - Tinnitist (Darryl Sterdan): "swirling dance-pop production" and "Garbage-y, guitar-based alt-rock of Ga Ga" https://tinnitist.com/2024/10/28/classic-album-review-melanie-c-northern-star
  - Attitude: "an indie record inspired by Britpop chaps Blur and Suede" https://www.attitude.co.uk/culture/melanie-c-northern-star-retrospectively-reviewed-460213/
  - Albumism: "booming guitar-pop of Go!", "moody electronica of I Turn to You", "deluxe hip-hop soul of Never Be the Same Again", Goin' Down "a thunderous piece of punk pop".
  - Can't Stop the Pop: Goin' Down "an angry, grunge-rock track" https://www.cantstopthepop.com/2022/11/21/melanie-c-northern-star/
  - Wikipedia (citing RS and AllMusic): Goin' Down "distorto-punk"; I Turn to You electronica, disco, techno-inflected dance; Suddenly Monday Britpop and power pop; Ga Ga dance-rock; Closer samba (Furia: "the desultory samba").
  - Guardian, Petridis 2003 (via Wikipedia quote): "trance, Garbage-style techno-rock, R&B ballads and vaguely nu-metalish".
  - Crimson: "opening drum and bass notes".
  - Single-track genres sit from 4th place on. New token: `guitarpop`. `poppunk` stands for Albumism's "punk pop" (the same genre, reversed name).
- **Scales**: I judged them from reviews.
  - mood 2: "moody and melancholic", fragility (Daily Vault, Can't Stop the Pop).
  - electronic 3: Orbit-style electronica-lite next to fuzzy guitars (Daily Vault).
  - groove 2: a few dance numbers (I Turn to You) among many ballads.
  - polish 4: big-budget LA sessions, "slick" (EW).
- **voice**: powerful ("powerful vocals", Daily Vault; "fairly strong voice", AllMusic via Wikipedia). raspy: "scratchy" (Crimson).
- **instruments**: these come from reviews, because the Discogs credits list no players.
  - Furia (https://www.furia.com/page.cgi?type=twas&id=twas0250): "Spector-ish drums, percussively-gated guitar roar… synth-vibes" (Go!), "string runs" (Northern Star), "piano and horns" (Suddenly Monday), "mostly acoustic guitar and strings" (If That Were Me).
  - Pop Rescue: strings on Northern Star and Feel the Sun, "bouncy piano", "chirpy brass section" https://poprescue.com/2014/11/05/pop-rescue-northern-star-melanie-c-cd-2000
  - Steve Jones (Sex Pistols) plays guitar on 2 tracks (Wikipedia).
- **production**
  - programming: "Programmed By" credits (Discogs release 3430076).
  - drumloop: Furia, "a drum loop grimly pounds" on Goin' Down.
  - stringarrangements: Melanie C: "Craig Armstrong did some strings as well" (Quietus p.11); Pop Rescue "beautiful string arrangement".
  - sampling: "buzzy guitar-samples" (Furia).
  - vocalfilter: "vocals are processed through a blurry filter" (Daily Vault).
  - distortedvocals: "fuzzy and distorted" vocals (Wikipedia).
  - protools and digitalediting: "Pro Tools Editing" and "Additional Digital Editing" credits on I Turn to You (Discogs).
- **producers**: from the liner credits (Wikipedia tracklist and Discogs). De Vries 4 tracks, Rubin 3, Nowels 2, Orbit 1 (Go!), Lawrence 1, and Armstrong, McCarthy and LeGassick 1 (Feel the Sun). Rob Playford is credited as co-producer on I Turn to You (Discogs). Melanie C is not credited as producer.
- **sounds_like**: tracks are counted out of 12.
  - Madonna (Ray of Light), whole album: Tinnitist "Too bad that identity already has a name: Madonna… called it Ray Of Light"; Attitude "a dash of Madonna's magnum opus Ray of Light". Slant's "ballads sound like outtakes from Ray of Light" is only via Wikipedia (Slant returns 403).
  - Garbage, whole album: NZ Herald "the songs are warmed-over Madonna, Garbage or Alanis rejects" https://www.nzherald.co.nz/lifestyle/melanie-c-northern-star/TXPW7LXHFTTWU7LMAUHDVNF23Y/. Also the Guardian "Garbage-style techno-rock", and Daily Vault "impersonation of Shirley Manson".
  - Alanis Morissette: NZ Herald, as above.
  - Portishead [1/12] (Why): NME "Portishead-lite ('Why')" https://www.nme.com/reviews/1475; Slant (via Wikipedia).
  - Massive Attack [1/12] (Why): Slant via Wikipedia.
  - The Cardigans (Gran Turismo) [2/12]: Furia on Ga Ga; Pop Rescue on Goin' Down.
  - Roxette [2/12] and ABBA [1/12]: Furia on Northern Star and I Turn to You.
  - Pat Benatar [1/12]: Furia on I Turn to You.
  - Edie Brickell [1/12]: Be the One. Ben Folds [1/12]: Suddenly Monday. Natalie Imbruglia (Left of the Middle) [1/12]: If That Were Me ~ "Torn". Savage Garden and Backstreet Boys [1/12]: Never Be the Same Again. All from Furia.
  - Elastica (Justine Frischmann), Lauryn Hill, Robbie Williams, and Phil Collins (…But Seriously, "she's rewritten 'Another Day in Paradise'"), each [1/12]: NME's track-by-track list.
  - Left out: TLC (Lisa Lopes is a guest), Martha Reeves and Tina Turner (vocal comparisons only), and The Beatles and Bowie's Low (Rolling Stone 1999, archive unreachable).
- **influenced_by**: Madonna (Ray of Light). Melanie C: "I was very influenced by Ray Of Light for Northern Star. I was listening to it a lot when I was going into the studio" https://thequietus.com/interviews/bakers-dozen/melanie-c-interview-favourite-music-spice-girls/11/
  - Candidates left out: Blur, Oasis, Suede, The Cardigans and Hole, named by her as inspirations for the album in Q Magazine, Sept 1999 ("Mel C Rocks"). That's print only, cited by Wikipedia, and I couldn't open it. Add them if the owner accepts the Wikipedia citation.
- **Reception and legacy**: no source found on the album's influence on later music, so it has no legacy row (the validator needs 0–5 plus a source).

### allsaints-saintssinners
- **Genres**
  - Wikipedia infobox: pop, dance, R&B (Who Australia).
  - Discogs master 7142: Electronic, Funk/Soul, Pop; Synth-pop, Contemporary R&B, Downtempo, RnB/Swing (pressing 161169 and others).
  - Entertainment.ie: "vibrant R'n'B songs driven by swirling dance rhythms" (via Wikipedia).
  - Pure Shores: R&B with ambient and electronic production; "futuristic dream-pop" (Wikipedia); Apple Music "a near-perfect portion of dream pop"; Freaky Trigger "a pop take on ambient music", "chillout bubbles and ripples" https://freakytrigger.co.uk/popular/2015/02/all-saints-pure-shores/
  - Black Coffee: electropop, acid techno, ambient, R&B (Wikipedia song page); dance-pop, trip hop, electronica (Wikipedia album page).
  - All Hooked Up: hip hop, P-funk, R&B (Wikipedia).
  - Ready, Willing and Able: "a two-step beat (remember, 2-step and garage was raging…)" (Pop Rescue https://poprescue.com/2015/06/01/pop-rescue-saints-sinners-by-all-saints-ltd-edition-cd-2000).
  - New tokens: `twostep`, `rnbswing` (Discogs style "RnB/Swing").
- **Scales**: polish 4 (Spike Stent mixes, top studios). electronic 3 (Orbit's electronics on 4 of 12 tracks, R&B band sound elsewhere). groove 3 ("swirling dance rhythms").
- **voice**: clear (Apple Music "crystal-clear harmonies"); soft ("velvety vocals", Apple; "breathy vocals", Pop Rescue).
- **instruments**: from Discogs credits, release 161169 (https://api.discogs.com/releases/161169).
  - Orbit: guitar, keyboards, synth, drums.
  - Bass: Paul Turner, Derrick Taylor. Guitars: Andrew Smith and others.
  - Izzi Dunn: strings, a cellist (Pop Rescue "some cello lead the song out").
  - Steve Sidelnyk: vibraphone, drums and percussion on Surrender. Stuart Zender: keyboards, bass, percussion.
  - Jon Douglas: turntables. Acoustic guitars: Pop Rescue on Surrender.
  - New token: `vibraphone`.
- **production**
  - Pro Tools programming on every Orbit track (credits).
  - Pure Shores was recorded to a Sony 3348 digital multitrack and Pro Tools (Music Week via Wikipedia), with "syncopated synth delays" (Wikipedia).
  - String arrangements by Paul Simm and Izzi Dunn/Zender (credits).
  - Samples and vinyl crackle (Pop Rescue).
  - Orbit "Effects [FX]" credit, plus nature sounds on Ready, Willing and Able (Pop Rescue).
  - Close harmonies throughout.
- **producers**: Orbit 4 tracks, K-Gee 4, Jonny (Jon) Douglas 3. Dreams: McVey and Simm, with Orbit. I Feel You: Zender and Femi Fem.
- **sounds_like** (weak)
  - Madonna (Ray of Light) [2/12]: Pop Rescue on Dreams ("sounds like it's been left over from Ray Of Light") and Black Coffee ("plenty of sounds that you'll be familiar from the Madonna album").
  - En Vogue [1/12] (All Hooked Up) and Mis-Teeq [1/12] (Love Is Love): also Pop Rescue.
  - I found no professional critic who compares the whole album to Ray of Light. The Wikipedia lead claims it without a citation, and BBC, SMH, Mixmag and Dotmusic couldn't be opened.
- **influenced_by**: empty. I found no first-person statement.
- **landmark** 1: their only UK No.1 album and their two biggest Orbit singles.
- **legacy** 2: Warner press release and Neil Hannon (see legacy.csv).

### nellyfurtado-loose
- **Genres**
  - Wikipedia: pop with dance, reggaeton, Latin pop (AllMusic), hip hop (Blender), synth-pop and Middle Eastern (EW), R&B (Guardian), new wave and funk (Pitchfork), trip hop (AP).
  - Discogs master 130942: Hip Hop, Latin, Funk/Soul, Pop; Pop Rap, Contemporary R&B, Latin Pop.
  - AP/CBS: "trip-hop to '80s synth pop to Latin pop to R&B pillow ballads", "spacey-disco beat" (Afraid), "heavily synthesized dance rock" (Maneater) https://www.cbsnews.com/news/furtado-top-notch-in-loose/
  - Guardian: "1980s electro-soul drama of Shannon", "peculiar gothic R&B of Afraid".
  - Maneater: electro rock, electro synths, electropop and synth-pop (Wikipedia).
  - Say It Right: "moderate techno groove" (Wikipedia).
  - Showtime: "a proper R&B slow jam" (Furtado, RS 2006 via Wikipedia).
  - "punk-hop": Furtado's own name for the sound (RS 2006 https://www.rollingstone.com/music/news/nelly-furtado-brings-the-punk-hop-20060216). It's last; drop it if the owner wants critics' terms only.
  - New tokens: `middleeastern`, `electrosoul`, `gothicrnb`, `slowjam`, `punkhop`.
- **Scales**: energy 4 ("crazy loud beat", rock-volume mixing). electronic 4. groove 4 (NYT "mainly aimed at dance floors"). experimental 2 (FADER: "really unorthodox… didn't have that extra sheen"). polish 4.
- **voice**: clear; rap ("sing-rapped", Pitchfork; raps in Portuguese, Guardian); soft ("she coos", Pitchfork).
- **instruments**: from the Wikipedia personnel list (liner notes).
  - Timbaland: drums, keyboard, bass, percussion. Danja: drums, keyboards, piano.
  - Violins and cellos, conducted by David Campbell.
  - Acoustic and electric guitars: Juanes, Ramón Stagnaro, Rusty Anderson.
  - Percussion: Luis Conte and others. Piano: Hilario Durán.
  - Drum machine: Say It Right credit (Wikipedia song page). Synths: Maneater "1980s electro synths".
- **production**
  - distortion: "coughing, laughing, distorted basslines" kept on purpose; FADER: "The distortion, the weird shit, we left it all on there".
  - sampling: Do It samples "Acidjazzed Evening" (Wikipedia; Timbaland admitted it).
  - layeredvocals: NYT on Say It Right, "ghostly, multitracked voices" (via Wikipedia).
- **producers**: Timbaland, Danja, Nisan Stewart, Lester Mendez, Rick Nowels, all credited. Left out: Furtado (the artist, co-producer on In God's Hands), Jim Beanz (vocal producer) and the executive producers.
- **sounds_like**: tracks are counted out of the 12 core tracks.
  - Gwen Stefani (Love. Angel. Music. Baby.), whole album: Rolling Stone, "an omnipop multiformat blockbuster in the style of Gwen Stefani's Love Angel Music Baby".
  - Ready for the World, whole album: Rolling Stone, "his mostly Eighties beats — what's he been listening to, Ready for the World?" https://www.rollingstone.com/music/albumreviews/loose-20060615
  - Madonna and Shannon, whole album: Guardian, "the 1980s electro-soul drama of Shannon and the club-kid effervescence of a young Madonna". Also Pitchfork "the Madonna-aping swirler 'Glow'", and Vice 2016 on Do It, "a Timbaland re-fix of an early Madonna tune".
  - Prince [3/12]: musicOMH, "The opening three tracks… like Prince performing his own personal gig" https://www.musicomh.com/reviews/albums/nelly-furtado-loose
  - Aaliyah [1/12]: Pitchfork on Showtime, "comes so close to Aaliyah's understated grace".
  - TLC [1/12]: AP on Showtime, "sounds like a lost TLC tune".
  - Janet Jackson (Control) [1/12]: New Yorker on Promiscuous, "a playful update of… Janet Jackson's 'Nasty'" https://www.newyorker.com/magazine/2008/10/06/the-timbaland-era
  - Sting (Ten Summoner's Tales) [1/12]: musicOMH on Te Busqué, "starts off like Sting's Shape Of My Heart".
  - Paula Cole [1/12]: Pitchfork on In God's Hands.
  - Left out: Hall & Oates (a title nod, not a sound), J.J. Fad (Village Voice page empty), Peaches (Furtado reporting what others say).
- **influenced_by**
  - Madonna (Ray of Light): Furtado: "I used Madonna's Ray of Light as a template for Loose: she was smooth but sexy, universal, epic, iconic!" (FADER 2016 https://www.thefader.com/2016/11/23/nelly-furtado-timbaland-loose-interview)
  - Bloc Party and Death from Above 1979: Furtado: "I was personally totally obsessed with electro-rock. I loved Bloc Party and Death from Above [1979]… I really wanted it to have that kind of energy." (FADER)
  - Eurythmics: Furtado: "We call it 'punk-hop'… 'Let's do modern Eurythmics — You're Dave and I'm Annie.'" (RS 2006). Wikipedia names "Here Comes the Rain Again" for Say It Right, from umusic.ca, which I couldn't open, so I didn't add a bracketed album.
  - System of a Down: Furtado: "listening to all the same stuff as me — everything from System of a Down to Bloc Party and Death From Above 1979" (RS 2006). This one is weaker. I left Coldplay out because Chris Martin co-wrote a track.
  - Janet Jackson (janet.): Furtado: "Loose was inspired by many things, but just to name one influence: The self-confidence and empowerment of Janet Jackson's album janet." (Billboard 2020)
  - Controller.Controller: Furtado: "I noticed how sexually assertive the singers were on-stage, and I got influenced by that… some of the songs [on Loose] have that weight." (Georgia Straight https://www.straight.com/article/selling-the-sizzle-0)
  - TLC and Salt-N-Pepa [1/12]: Furtado on Promiscuous, "created in that tradition of a TLC or a Salt-N-Pepa song" (FADER).
- **legacy** 3: Vice 2016 (it made Timbaland the go-to producer for pop) and Gia Woods (Billboard). See legacy.csv.

## Thin-row check
No row is thin: each has 20+ genres and 7–12 instruments. Confidence: Loose high (many verified first-person and critic sources). Northern Star medium (key reviews only via Wikipedia). Saints & Sinners medium (comparisons come from blogs only).
