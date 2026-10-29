# New descriptors batch 2: Adele 25, William Orbit Pieces in a Modern Style, Mirwais Production

All claims below were read on the linked page during this session (WebFetch or curl). Pages that would not open are marked; nothing in the rows rests only on them.

## Catalogue

- **adele**: already in `src/data/catalog.ts` with `['25', 2015]`; album id `adele-25`. There's no `docs/descriptors/adele.csv` yet.
- New artists (proposed rows):

```ts
['williamorbit', 'William Orbit', '#7fa3c4', 'Synth mist over old masters', [['Orbit', 1987], ['Strange Cargo', 1987], ['Strange Cargo II', 1990], ['Strange Cargo III', 1993], ['Strange Cargo Hinterland', 1995], ['Pieces in a Modern Style', 2000], ['Hello Waveforms', 2006], ['My Oracle Lives Uptown', 2009], ['Pieces in a Modern Style 2', 2010], ['Orbit Symphonic', 2014], ['Strange Cargo 5', 2014], ['The Painter', 2022]]],
['mirwais', 'Mirwais', '#c4513f', 'Disco science, Paris to the world', [['Mirwais', 1990], ['Production', 2000]]],
```

- Scenes (`src/data/scenes.ts`):
  - `williamorbit: 'GB en 1980 electronic,ambient'`. His career starts in the 1980s (Torch Song, *Orbit* 1987). His solo work is instrumental, so `en` only follows the convention, as for `aphextwin`.
  - `mirwais: 'FR en 1990 electronic,dance'`. The 1990 debut is sung in French, but *Production* is in English, so this is not a local-language discovery under `isLocalArtist`.
- Sources for the discographies:
  - Orbit: Wikipedia "Studio albums" table (https://en.wikipedia.org/wiki/William_Orbit). *Orbit Symphonic* and *Strange Cargo 5* were free SoundCloud releases, so drop them if the owner wants commercial releases only.
  - Mirwais: Wikipedia and the Discogs artist 16153 main releases (https://www.discogs.com/artist/16153). *The Retrofuture* was announced for 2021 but no release can be found (Discogs shows only the 2020 single "2016 – My Generation"). It is **not** listed, as an unreleased album.
- Pieces in a Modern Style year:
  - First issued in May 1995 as The Electric Chamber (N-Gram) and withdrawn after Arvo Pärt objected.
  - Reissued on WEA with a new tracklist on 17 Jan 2000 (UK, Discogs release 5824) and on Maverick on 22 Feb 2000 (US). The 2000 tracklist is the one described here.
- Caveat: Orbit died on 23 July 2026 (Wikipedia; Sonic State 7 Aug 2026). The tagline is written with that in mind.

## New tokens (to add to the lists)

- Genres:
  - `britishpop`: The Times, "puts British pop back at the heart of modern life". This is not `britpop`.
  - `electronicclassical`: Wikipedia infobox for Pieces in a Modern Style.
  - `glamtechno`: musiccritic.com, "glam-techno romps".
- Instruments:
  - `optigan`: Roger Manning Jr., track 4 of 25.
  - `preparedpiano`: Nico Muhly, track 4 of 25.
  - `basspedal`: NPR 2019 on Orbit's Adagio, "played on synthesizer with an added bass pedal".

## Artist-level influences (own words)

- **Adele**
  - Amy Winehouse (*Frank*): "If it wasn't for Amy and [her debut album] 'Frank', one hundred percent I wouldn't have picked up a guitar" (i-D 2015, via HuffPost UK). https://huffingtonpost.co.uk/amp/entry/adele-amy-winehouse-id-interview_n_8405550
  - Etta James and Ella Fitzgerald: "when I heard Etta James and Ella Fitzgerald, I started thinking about singing a lot more" (Hot Press, 26 Mar 2008). https://hotpress.com/music/london-girl-4515376
  - Karen Dalton: "I discovered a lot of music, like Karen Dalton for example" (same Hot Press piece).
  - Jeff Buckley (*Grace*): "Grace has always been around me"; when sad, "So mainly, Jeff Buckley" (SiriusXM 2015, via Rolling Stone India). https://rollingstoneindia.com/adele-talks-when-we-were-young-jeff-buckley-influence-in-new-interview/amp
- **William Orbit**
  - Tangerine Dream: asked whether he admired them, "Totally… I went to see them three times in London back then"; "There was something about the beauty of a wall of synthesizers and (electronic) cables" (Copley News / southjersey.com, 10 May 2000). https://www.southjersey.com/article/230/William-Orbit
  - Arvo Pärt and Henryk Górecki: "I love the geometric design of Part's music"; "I admire Part and Gorecki for going back to the old traditions" (Sound On Sound, Jan 1996). https://www.soundonsound.com/people/william-orbit-love-classical-music
    - Both are composers he covered, Pärt on the 1995 version and Górecki on the 2000 one, so they stay **out** of the album's influenced_by.
  - Negative mention: "I don't want to sound like Philip Glass" (same SOS piece).
- **Mirwais** (15 Questions, 26 Oct 2020, https://15questions.net/interview/fifteen-questions-interview-mirwais/)
  - "My influences were mostly Jimi Hendrix, The Doros [sic, The Doors], Velvet Underground, The Stooges, The Rolling Stones when I was 14."
  - "Then I started to listen to punk music and art school bands like Magazine, Stranglers and also Kraftwerk, Trans Europe Express, Man Machine, Devo, Blondie and some Disco Music too."
  - On Taxi Girl: "The music was a mix of Kraftwerk, of electronic music of the time, and punk music" (Phoenix New Times 2001).

## adele-25: per-cell sources

Sources (all opened):

- **Wiki**: Wikipedia (wikitext): infobox, Writing and recording, Musical style, Personnel. https://en.wikipedia.org/wiki/25_(Adele_album)
- **RS AU**: Rolling Stone cover story (B. Hiatt, Nov 2015) via the Rolling Stone AU mirror. https://au.rollingstone.com/?p=908
  - "Along with Madonna's Ray of Light, Moby's Play was a hidden influence on 25"
  - "There's something that I find really holy about that Play album… maybe the gospel samples."
- **Fader**: The Fader's summary of the RS story: "[O]ne of the chief inspirations for 25 was Madonna's Ray of Light… 'That's the record Madonna wrote after having her first child, and for me, it's her best'". https://www.thefader.com/2015/11/03/adele-rolling-stone-cover-story
- **Rayo**: MFR/Rayo, same RS quotes plus the "Frozen" line: "I took that song as 'I've gotten my confidence to come and do me again.'" https://hellorayo.co.uk/mfr/entertainment/music/adele-inspired-madonna-writing-25
- **Out**: Out, "Adele looked to Ray of Light … and to Moby's Play, with its powerful gospel samplings". https://www.out.com/popnography/2016/2/12/adele-strikes-pose-vogue
- **NPR**: NPR (Barry Walters). https://www.npr.org/2015/11/23/457081463/review-adele-25
- **Quietus**: The Quietus (Jude Rogers). https://thequietus.com/quietus-reviews/adele-25-review/
- **Paste**: Paste (Holly Gleason, 8.2). https://www.pastemagazine.com/articles/2015/11/adele-25-review.html
- **CoS**: Consequence. https://consequence.net/2015/11/album-review-adele-25/
- **List**: The List, track by track. https://list.co.uk/news/track-by-track-review-of-25-by-adele-10768
- **National**: The National, track by track. https://www.thenationalnews.com/arts/review-adeles-25-track-by-track-1.46074
- **Gigwise**: Gigwise, track by track. http://www.gigwise.com/photos/103869/adele-new-album-25-track-by-track-review-songs-lyrics
- **Spin**: Spin (6/10). https://spinmagazine.com/2015/11/review-adele-25/

Values, with the source key for each:

- **genres**
  - pop: Vanity Fair, via Wiki; List "pure pop".
  - soul: Billboard (Rosen), via Wiki.
  - britishpop: The Times (Hodgkinson), via Wiki.
  - ballad: Vanity Fair, via Wiki; NPR "focuses almost exclusively on piano balladry".
  - rnb: Vanity Fair "traditional R&B"; PopMatters "1980s R&B"; Us Weekly "R&B grooves" (all via Wiki).
  - gospel: Us Weekly, via Wiki; Quietus "woozy gospel backing vocals"; List.
  - torchsong: Wiki ("Love in the Dark"); Paste ("All I Ask").
  - powerballad: National, "Water Under the Bridge" is "straight from a 1980s power-ballad".
  - retrosoul: National, "I Miss You" is "post-Ronson retro soul".
  - jazz: NME "smoky jazz bar grooves", via Wiki; National, "Million Years Ago" is "jazzy".
  - blues: Us Weekly, via Wiki.
  - folk: Wiki ("I Miss You").
  - postpunk: NPR, "I Miss You" has an "overtly post-punk foundation".
  - chanson: Quietus, "Million Years Ago" is "done in the style of a chanson".
  - chillwave: List ("I Miss You").
  - triphop: Gigwise ("Water Under the Bridge").
  - afro: List, "vaguely discernible afro groove" ("Send My Love").
  - flamenco: List, "almost flamenco-style guitar".
  - country: List and National, "hint of a country twang" ("Sweetest Devotion").
  - Everything from powerballad down is one-track long tail.
- **scales**
  - energy 2: mostly piano ballads (NPR), a few up-tempo songs; anchor *21* = 1.
  - electronic 2: "added synths and drum pads", per RS via Wiki, but it is mainly piano, band and strings.
  - mood 2: EW "minor-key melancholy", nostalgia and regret.
  - theatrical 4: NPR "operatic vibe that spews Sturm und Drang"; Telegraph "wall of sound" on "Hello".
  - experimental 1: NME "did not take any risks"; EW "safe".
  - polish 5: big-budget hitmaker production; Spin "slick".
  - tempo 2: "When We Were Young" is 72 bpm; slow songs dominate (AllMusic "march of slow songs", via Wiki).
  - groove 1.
- **voice**: The 405 "thunderous roars… rib-cracking falsettos… fuzzy, warm lower-register rumblings"; Vanity Fair "brassy yet husky, smoky" (both via Wiki).
- **instruments**
  - Mostly the liner-note personnel (Wiki): piano, drums, bass, guitars, keyboards, organ, percussion, harmonium, glockenspiel, Optigan, prepared piano, synthesizers.
  - strings: the FILMharmonic Orchestra.
  - synthbass: Ryan Tedder's "Moog bass" on "Remedy".
  - drummachine: Gigwise "electro-drum beat" and Quietus "heavy synth drums".
  - Bonus-edition parts were left out (Rhodes and clavinet on track 14, tambourine on track 13).
- **production**
  - programming: credits.
  - layeredvocals and wallofsound: Telegraph on "Hello", via Wiki.
  - heavyreverb: Billboard "swathed in echo… cavernous cathedral"; NPR "reverb-drenched murk" ("I Miss You").
  - falsetto: The 405.
  - stringarrangements: Oliver Kraus, track 8.
  - moog: Moog bass.
- **lyrics**: Wiki themes are nostalgia, regret, ageing and motherhood ("getting to know who I've become"). Adds sensuality ("I Miss You", NPR "unabashed eroticism") and heartbreak (NPR, "heartbreak still lingers").
- **producers**: standard 11-track edition credits, ordered by number of tracks.
  - Adele is left out because she is the artist.
  - Linda Perry (track 12) and Mark Ronson (track 13, with Lil Silva as additional producer) produced bonus tracks only, so they are left out too.
- **sounds_like**
  - Dusty Springfield (whole album): Paste, "Harkening back to Dusty Springfield's large emotions…" on her singing.
  - Amy Winehouse [2/11]: National ("I Miss You") and List ("Million Years Ago").
  - Taylor Swift (Red) [1/11]: CoS, "Send My Love" "draws from Taylor Swift's 'I Knew You Were Trouble'"; Paste "Taylor Swift-aping".
  - Ed Sheeran [1/11]: National ("Send My Love").
  - Phil Collins (Face Value) [1/11]: List, "Phil Collins' 'In the Air Tonight' meets a frostily epic chillwave production" ("I Miss You").
  - Siouxsie and the Banshees (Juju) [1/11]: NPR, the drums on "I Miss You" echo Budgie and the guitar evokes McGeoch, referring to "Spellbound" (on *Juju*).
  - Burial [1/11]: Quietus ("I Miss You").
  - Edith Piaf [1/11]: Quietus ("Million Years Ago").
  - Madonna (Ray of Light) [1/11]: NPR, "background hums that suggest Madonna's 'Frozen'… this is also Adele's 'Drowned World/Substitute for Love'".
  - Ellie Goulding [1/11]: National ("River Lea").
  - Céline Dion and Whitney Houston [1/11 each]: National ("All I Ask").
  - Left out:
    - Vanity Fair's Winehouse/Dion vocal comparison: the original page wasn't found.
    - Bonnie Raitt: Paste compares only the song's subject.
    - Sade: Spin talks about career shorthand, not sound.
    - Florence + the Machine, Sam Smith, Lorde and Hozier: NPR names them as a "cathedral pop" trend, not a comparison with this album.
- **influenced_by**: Madonna (Ray of Light), confirmed in Adele's own words ("one of the chief inspirations"); Moby (Play) ("something… really holy about that Play album").
  - Not included: Taylor Swift's "I Knew You Were Trouble" led her to Max Martin (i-D via The Fader), but that is a producer choice, not a stated musical influence.

## williamorbit-piecesinamodernstyle: per-cell sources

Sources:

- **Wiki**: Wikipedia (genres electronic classical, classical crossover and ambient; "a fusion of classical music, electronica, ambient music and chill out music and contains no vocals"; ratings). https://en.wikipedia.org/wiki/Pieces_in_a_Modern_Style
- **Discogs**:
  - UK release 5824: styles Abstract, Modern Classical, Ambient. Credits: Orbit "Arranged By, Programmed By, Producer, Performer"; Sean Spuehler "Engineer, Programmed By [Pro Tools]"; Damian LeGassick "Programmed By, Keyboards [Additional]"; Rob Dickins executive producer. https://www.discogs.com/release/5824
  - US release 154019 adds the styles Downtempo and Trance. Trance comes from the bonus Ferry Corsten/ATB remix disc, so it sits last.
- **AV Club**: AV Club (Joshua Klein, 2002), "ambient techno", New Age, "sedate sequencer work and synth swooshes", "slick". Also: Ray of Light "sounds nearly identical to what Ørbit has been doing on his own". https://www.avclub.com/william-orbit-pieces-in-a-modern-style-1798194633
- **SOS 1996**: Sound On Sound, Jan 1996, on the 1995 Electric Chamber version, most of whose pieces are the same. The writer hears "hints of house, Tangerine Dream, and Pete Namlook" in electronically generated textures. https://www.soundonsound.com/people/william-orbit-love-classical-music
- **southjersey**: southjersey.com (2000): "gently undulating synthesizer textures and waves of glossy New Age-meets-ambient sound". https://www.southjersey.com/article/230/William-Orbit
- **NPR 2019**: NPR (2019) on the Adagio: "played on synthesizer with an added bass pedal". https://www.npr.org/2019/02/13/694388226/samuel-barber-adagio-for-strings-tiesto-william-orbit-american-anthem

Values:

- **genres**: Wiki, Discogs, AV Club and southjersey. `house` is only a texture hint (SOS); `trance` comes from the bonus remixes (Discogs US).
- **scales**: slow, beatless synth arrangements of adagios (energy 1, tempo 1, groove 1).
  - electronic 5: all synth/programming credits, with no acoustic players credited.
  - polish 4: AV Club "slick"; southjersey "glossy".
  - experimental 2: classical repertoire made "aural wallpaper" (AV Club), with the Cage piece as the outlier.
- **instruments**: synth and keyboards (credits, NPR, AV Club); sequencer (AV Club); basspedal (NPR).
- **production**: programming (credits); protools (Spuehler credit).
  - The Akai S3200 from SOS 1996 is studio gear in general, not tied to the album, so it is left out.
  - GearNews/Sonic State gear lists (Juno-106, MS-20…) are about the Ray of Light era, not this album, so they are left out too.
- **producers**: empty. William Orbit, the artist, is the only credited producer, and Rob Dickins is the executive producer.
- **sounds_like**: Tangerine Dream and Pete Namlook (SOS writer); Madonna (Ray of Light) (AV Club).
  - Composers (Barber, Cage, Satie, Mascagni, Ravel, Vivaldi, Beethoven, Handel, Górecki) are covered, never comparisons.
  - Not included: AV Club names Eno, Tangerine Dream and Wendy Carlos as New Age "background pop pioneers" in a general aside, not as a direct comparison.
- **influenced_by**: Tangerine Dream. Orbit confirms his admiration in first person ("Totally… I went to see them three times") in the 2000 interview about this album, where the writer links it to his synth layering. This is medium strength: the admiration is general, not explicitly said to be about this record.
- **Reception note**: chart data (UK #2, US Classical #4) comes from Wiki. The Telegraph 4/5 and Independent 2/5 ratings come from Wiki's ratings box (newspaper scans, not opened).

## mirwais-production: per-cell sources

Sources:

- **Wiki**: Wikipedia, genres Electro, house and electronica. Credits: Mirwais on programming, keyboards, guitars and bass; Madonna as producer of track 7; Cyril Morin's strings on tracks 7–8; Doubleuté's scratches on tracks 6 and 8. Samples: the Breeders' "Cannonball" and Gainsbourg's "Cargo Culte". Rob Sheffield in Rolling Stone: "a disco-science celebration of pop trash". https://en.wikipedia.org/wiki/Production_(album)
- **Discogs**: Discogs 543045, styles House and Electro; Madonna is a producer on track 7. https://www.discogs.com/release/543045
- **NME**: NME review. https://www.nme.com/reviews/2285
  - "In common with his Paris-based peers and fellow travellers Daft Punk, Air and The Micronauts, Mirwais has an irony-free appreciation of the past, and embellishes much of his album with… spacious, synthetic effects".
  - "Cher-like vocoder trickery ('Naive Song')"; "Disco Science" is "wild-pitched acid contortion".
  - "Depeche Mode covered similar sombre synth territory"; "'Da Funk' beats and chattering techno"; "cyber-balladry and acid-singed disco".
- **AV Club**: AV Club (Klein, 2002): "spacey echoes and even more vocoders", "acid-house hooks" ("Disco Science"), "subtle synth-pop" ("Naïve Song", "Never Young Again"), "half-baked electro". https://www.avclub.com/mirwais-production-1798197066
- **Hot Press**: Hot Press (Mark Kavanagh, 2001): "vocoded vocals over acoustic guitars" ("Naive Song"), "filtered synths" ("Paradise"), scratching with "sinister strings" ("Involution"). https://hotpress.com/music/production-417346
- **musiccritic**: musiccritic.com (60): "glam-techno romps"; "Definitive Beat" is "stripped-down drum-and-bass"; sirens and "grinding guitars" ("Disco Science"); acoustic guitar bursts. https://musiccritic.com/electronica/mirwais_production.htm
- **Crimson**: Harvard Crimson (negative): vocoder on "Naive Song"; the Leftfield "Phat Planet" mention is a contrast, so not used. https://thecrimson.com/article/2001/4/6/cest-mal-frenchman-mirwais-flops-pmirwaisppproductionppwarner
- **Phoenix**: Phoenix New Times (2001). https://www.phoenixnewtimes.com/music/music-response-6418059/
  - "Disco Science… relies heavily on nifty Devoesque whip cracks"; "vocorder-treated vocals".
  - Mirwais: "I don't use vintage — I use modern synths".
  - On "Disco Science": "something in reaction against the dictates of the bpm".
- **Dallas**: Dallas Observer (2001). https://www.dallasobserver.com/music/mirwais-6392517/
  - "softly strummed acoustic guitars… loads of vocoder"; Madonna "whispering French and stammering English over ambient grooves, laconic strings".
  - Production is "part of the… tradition that brought you Giorgio Moroder… and Black Box and Daft Punk and even Air"; "a deep, distorted voice moans" ("Junkie's Prayer").
- **State Hornet**: State Hornet (2001): "distorted guitar and synthesizer beats" ("Naive Song"). Mirwais: "dance music without the hedonist side… the energy of dance and the sadness and melancholy of pop". https://statehornet.com/2001/03/madonna-producer-mirwais-debuts-album

Values:

- **genres**
  - electro, house, electronica: Wiki and Discogs.
  - disco: Rolling Stone, via Wiki; NME "acid-singed disco".
  - acidhouse: AV Club and NME.
  - synthpop: AV Club.
  - techno: NME.
  - pop: Rolling Stone.
  - dance: NME "dance music".
  - electronic: Discogs.
  - drumandbass: musiccritic, one track.
  - glamtechno: musiccritic.
- **scales**
  - mood 2: Mirwais's own "sadness and melancholy of pop"; "Junkie's Prayer"; "Paradise" is a "lament" (NME).
  - tempo 3: "Disco Science" is deliberately slow (Phoenix), "Definitive Beat" is fast.
  - groove 3: disco/house, but "in no hurry to hit the dance floor" (Dallas).
  - experimental 3: "demo reel… bounding from style to style" (Dallas); "my album is not really easy" (Mirwais).
  - polish 4: Rolling Stone "meticulous".
- **voice**
  - soft: Madonna whispers on "Paradise".
  - spoken: the voice-over on "Junkie's Prayer" (Crimson).
  - clear: "a clear, sweet voice sings" (Dallas).
  - The vocoder goes in production.
- **instruments**
  - synth, keyboards, guitar, bass: credits.
  - acousticguitar: Dallas, Hot Press, musiccritic.
  - electricguitar: State Hornet "distorted guitar"; musiccritic "grinding guitars".
  - strings: Morin.
  - turntables: scratches.
  - vocoder: NME, AV Club, Phoenix.
  - sampler: the credited samples.
- **production**
  - vocoder: as above.
  - sampling: credited samples.
  - programming: credits.
  - stringarrangements: Morin.
  - distortedvocals: Dallas.
  - delay: AV Club "spacey echoes".
  - soundeffects: NME "spacious, synthetic effects"; musiccritic "sirens".
- **lyrics**: "Never Young Again" and Madonna's "I can't remember when I was young" (NME) give nostalgia; "V.I. (The Last Words She Said Before Leaving)" gives heartbreak; introspection comes from the melancholy framing. Low evidence.
- **language**: en|fr. Madonna whispers French (Dallas) and the Gainsbourg adaptation is in French.
- **producers**: Madonna, credited producer on track 7.
  - Mirwais is left out because he is the artist.
  - Craig Wedren produced only the deluxe bonus "Miss You", so he is left out.
- **sounds_like**
  - Daft Punk (Homework), Air, The Micronauts, Depeche Mode: NME.
  - Cher (Believe) [1/9]: NME on "Naive Song".
  - Giorgio Moroder, Black Box: Dallas; Daft Punk and Air there too.
  - Devo [1/9]: Phoenix on "Disco Science".
  - Not used:
    - Armand Van Helden and Basement Jaxx: AV Club calls them "peers", a ranking of quality, not sound.
    - Peter Frampton: Dallas's "Euro Frampton" is a joke about vocoder use.
    - The Breeders and Gainsbourg: sampled or covered.
- **influenced_by**: empty. No first-person statement ties a record to *Production*.
  - Candidate, not included: on "Disco Science" Mirwais cites 1970s dancing to slower tempos, "like the Bee Gees" (Phoenix). That is an example, not a stated influence.
  - His general influences are listed in the artist-level section.

## Thin-row check

- All three rows have at least 12 genres and at least 4 instruments.
- Pieces in a Modern Style has empty lyrics and language because it is instrumental.
- Mirwais lyrics are low confidence.
- Confidence: Adele high (many reviews and credits); Orbit and Mirwais medium. Original reviews for those two (Rolling Stone, Dotmusic, NME 2000) are reachable only through archive.org, which was blocked here.
