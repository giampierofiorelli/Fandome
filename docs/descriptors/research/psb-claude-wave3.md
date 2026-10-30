# Claude research notes (Oct 2026, wave 3)

# Wave 3 / D: evidence notes

Albums: jessieware-whatsyourpleasure, roisinmurphy-hitparade, peggygou-ihearyou, weeknd-dawnfm, psb-hotspot. Every row is `status` draft. Titles and years are copied from `src/data/catalog.ts` / `seed.ts` (Ware's title uses the curly apostrophe `’`). Scene strings reuse the artist's existing file where it fits: Jessie Ware is "2020s UK disco revival" (from That! Feels Good!), The Weeknd is "2020s '80s-revival synth-pop and R&B" (from After Hours). The voices stay consistent with the existing rows (Weeknd soft|clear, PSB clear|spoken). Wikipedia was used only to find sources and is never cited. Discogs credits (official liner-note transcriptions) were read through the Discogs API for producers and instruments.

## Could not open (so not used)
- Metacritic (403 for curl and WebFetch) and AllMusic (403): no Metacritic or AllMusic scores are used.
- NYT (Ware: Lindsay Zoladz; 403), Under the Radar interview (403), Slant (403), Telegraph (402), Spin (403), DJ Mag (403), HMV PSB interview (403), petshopboys.co.uk (403), Paste Hotspot (404), NME Hit Parade review (404). The Stereogum Dawn FM and Peggy Gou pieces and the Christgau March 2020 Consumer Guide are paywalled (only the headers were read). The Saturday Paper returned 502. The AnyDecentMusic page for Hotspot returned 500.
- No certification databases were checked, so no certifications are used.

## New tokens
- genre `dubtechno` (Hit Parade). Guardian, Laura Snapes: "To DJ Koze's warped soul and dub techno"; You Knew is "a masterpiece of arid, throbbing, angry, forlorn dub-techno". This is not plain `techno` or `dub`.
- genre `postdubstep` (Hit Parade, last place, one track). Guardian: Koze "flipping country soul to skeletal post-dubstep".
- genre `khouse` (I Hear You, last place). Exclaim: "a masterful first full dose of Gou's kaleidoscopic 'K-house'"; Line of Best Fit: "the 'K-house' sound she coined". Owner may prefer to drop it as an artist-coined label.
- instrument `gayageum` (I Hear You). Pitchfork: "a folkish melody on Korean gayageum (probably played by Gou herself)"; Exclaim and RNZ also name it; Korea Times: "incorporates traditional Korean instruments like the gayageum".

---

## jessieware-whatsyourpleasure

Sources:
- Pitchfork, Owen Myers, 8.3: https://pitchfork.com/reviews/albums/jessie-ware-whats-your-pleasure/
- Guardian, Laura Snapes: https://www.theguardian.com/music/2020/jun/04/jessie-ware-whats-your-pleasure-review
- Observer, Tara Joshi: https://www.theguardian.com/music/2020/jun/28/jessie-ware-whats-your-pleasure-review-rooted-in-lustful-disco
- NME, Hannah Mylrea: https://www.nme.com/reviews/jessie-ware-whats-your-pleasure-review-future-facing-production-and-heady-80s-sounds-2694079
- Rolling Stone, Brittany Spanos: https://www.rollingstone.com/music/music-album-reviews/album-review-jessie-ware-whats-your-pleasure-1021769/
- Independent review, Roisin O'Connor, 4/5: https://www.independent.co.uk/arts-entertainment/music/reviews/jessie-ware-review-whats-your-pleasure-stream-khruangbin-mordechai-a9583306.html
- Independent interview, Kate Hutchinson: https://www.independent.co.uk/arts-entertainment/music/features/jessie-ware-interview-whats-your-pleasure-album-podcast-black-lives-matter-a9571011.html
- Irish Times, Louise Bruton: https://www.irishtimes.com/culture/music/album-reviews/jessie-ware-what-s-your-pleasure-review-one-of-the-best-albums-of-2020-so-far-1.4279468
- musicOMH, Nick Smith, 4.5/5: https://www.musicomh.com/reviews/albums/jessie-ware-whats-your-pleasure
- Line of Best Fit, 9/10: https://www.thelineofbestfit.com/reviews/albums/jessie-ware-whats-your-pleasure-album-review
- Gigwise: https://www.gigwise.com/reviews/3383372/album-review-jessie-ware-whats-your-pleasure
- Spectrum Culture, Jake Cole: https://spectrumculture.com/2020/07/07/jessie-ware-whats-your-pleasure-review/
- MuuMuse: https://muumuse.com/2020/06/jessie-ware-whats-your-pleasure-album-review.html
- Apple Music editorial: https://music.apple.com/gb/album/whats-your-pleasure/1498945382
- Discogs credits, Platinum Pleasure FLAC release 21614839 and LP 15515970.

Cells:
- **genres**
  - disco: Pitchfork "disco-inspired"; Observer "rooted in lustful disco".
  - postdisco: Guardian "plush post-disco"; RS "peak- and post-disco"; musicOMH "post-disco gratification".
  - funk: Pitchfork "disco-funk", "orchestral funk"; NME "euphoric disco, funk and groove"; Independent "funk, disco and house".
  - house: Independent; Irish Times "smoky disco and subtle house music"; Ware to Interview, quoted by MuuMuse: "It's dance, it's house, it's soul".
  - pop: Irish Times "Genre: Pop"; Gigwise "one of the best pop albums of the year".
  - hinrg: Pitchfork "vibrant Hi-NRG"; Spectrum Culture "Hi-NRG".
  - italodisco: Pitchfork "Italo disco daydream of a title track"; Spectrum Culture "Italo".
  - rnb: Irish Times "sensual R&B melodies"; musicOMH "R&B deep house crossover" (Adore You).
  - synthpop: Independent interview "grown-up, slick synth-pop of Robyn and Róisín Murphy".
  - electropop: Pitchfork "kinetic electropop" (Save a Kiss).
  - chicagohouse: Independent "small judders of Chicago house".
  - frenchtouch: Independent "undulations of French touch".
  - newwave: NME "new-wave laced" (Step Into My Life); LBF "New Wave synth line".
  - rave: Spectrum Culture "recall '90s rave".
  - triphop: Spectrum Culture, In Your Eyes "to the smooth, narcotized dance of trip-hop" (one track, last place).
- **energy 3, tempo 3**: Guardian says it is "all about anticipation", "mostly an understated" performance. Gigwise notes "mid-tempo pulsing synths". Ware herself (via MuuMuse) on Soul Control: "these are the highest tempos I've ever done".
- **electronic 3**: credits list James Ford on keyboards, synth and programming, plus live drums (Leo Taylor), guitar (Dave Okumu) and Abbey Road strings and brass arranged by Jules Buckley. Spectrum Culture: "pulsating drum machine beats".
- **mood 4**: Pitchfork "bolder, looser — and frankly, more fun", but "flecks of ennui". Gigwise "teetering on the edge of climax". RS "melancholic luxury".
- **theatrical 3**: LBF "the confidence to commit to her most theatrical tendencies"; Guardian "mostly an understated" performance.
- **experimental 1**: Gigwise says it "doesn't jump across genres"; it is a retro pastiche (NME "borrowing heavily from the past").
- **polish 5**: NME "sleek production"; strings and brass recorded at Abbey Road (Discogs).
- **groove 4**: NME "exhilarating floor-fillers"; Spectrum Culture "compulsively danceable", with slow tracks around them (RS "final slow jam").
- **voice soft|powerful**:
  - soft: Pitchfork "airy vocals feel like secrets whispered"; Guardian "silk drape of a voice"; Gigwise "soft vocals".
  - powerful: Pitchfork "a rare belting vocal"; Guardian "flashes her vocal power"; Gigwise "impressive soaring vocals".
- **instruments**: Discogs credits list keyboards, synth, bass, guitar, drums, percussion, programming (James Ford), drums (Leo Taylor), guitar (Dave Okumu), and an Abbey Road section: violin, viola, cello, double bass, trumpet and flugelhorn, tenor and bass trombone, French horn. drummachine comes from Spectrum Culture.
- **production**:
  - programming: Discogs "Programmed By".
  - stringarrangements and hornarrangements: Discogs "Arranged By [Strings And Brass]: Jules Buckley".
  - autotune: Pitchfork, Adore You "Auto-Tunes Ware's pristine voice".
  - soundeffects: Pitchfork "kissy sound effects", "tooting car horns"; RS "ambient traffic noise".
  - falsetto: Spectrum Culture "Born aloft by Ware's falsetto".
  - belting: Pitchfork, as above.
- **lyrics sensuality|love|party|heartbreak**: Ware wanted it to make "people want to dance, flirt and have sex" (Independent interview; Apple Music: "Will this make people want to have sex?"). Pitchfork: In Your Eyes "racked with insecurities". Guardian: "skin-to-skin account of mutual satisfaction".
- **producers**: Discogs "Producer: James Ford [all but A6], Morgan Geist [A4], Joseph Mount [A6], Adam Bainbridge [B2], Benji B [B4], Matthew A. Tavares [B4]". Midland, credited as "Producer [Additional]", is dropped.
- **sounds_like**:
  - Whole album:
    - Robyn (Honey): Guardian "It also probably couldn't exist without Robyn's Honey, another grown-up disco album". Robyn did not work on WYP; Mount and Bainbridge did, but the rule bars collaborators, not artists they once produced.
    - Róisín Murphy and Moloko: Guardian "closer to Moloko, or indeed Róisín Murphy in contemporary disco mode".
    - Diana Ross (Diana): Pitchfork "recalling Diana Ross's supple quiver over Nile Rogers and Bernard Edwards' beats". Diana is the Chic-produced album.
  - Donna Summer [5/12]: RS (Soul Control, Save a Kiss, Read My Lips, title track) "pull from dance floor greats like Donna Summer, Blondie and Klymaxx"; Pitchfork, Mirage "close to Donna Summer's orgasmic rapture"; musicOMH, title track.
  - Blondie [5/12]: the same four RS tracks, plus Guardian on Ooh La La: "echoes Rapture".
  - Klymaxx [4/12]: RS, as above.
  - Prince [2/12]: Spectrum Culture "'Ooh La La' and 'Soul Control' are a dead ringer for early Prince"; LBF on Soul Control, "Prince's The Revolution".
  - Anita Ward [2/12]: Pitchfork on Read My Lips, "Ring My Bell"; MuuMuse on Step Into My Life.
  - Janet Jackson [2/12]: Irish Times, Read My Lips "flashes of 1980s Janet Jackson"; MuuMuse, Soul Control.
  - Kylie Minogue [2/12]: MuuMuse, title track "any breathy Kylie come-on"; The Kill evokes "Kylie's 'Confide in Me'".
  - Jellybean [1/12]: Pitchfork "Jellybean-esque 'Soul Control'".
  - Tom Tom Club [1/12]: Guardian, Ooh La La "Wordy Rappinghood".
  - George Michael (Older) [1/12]: Independent, In Your Eyes "bass synth redolent of George Michael's 'Fastlove'".
  - George Michael (Listen Without Prejudice Vol. 1) [1/12] and Kamasi Washington [1/12]: Independent, Remember Where You Are "flits between Kamasi Washington chorals and Michael's 'Freedom' refrains".
  - Chic [1/12]: Independent, Save a Kiss "cheesy Chic motif".
  - Pantha du Prince [1/12]: Irish Times, Adore You.
  - musicOMH, one track each:
    - Toni Braxton [1/12]: Spotlight.
    - Sheila E. [1/12]: Soul Control.
    - Goldfrapp [1/12]: title track, "Alison Goldfrapp having a dance-off with Donna Summer"; MuuMuse also hears "some Goldfrapp".
    - Rose Royce [1/12]: Step Into My Life.
    - Dannii Minogue [1/12]: Save a Kiss, "Love Fight".
    - Bat for Lashes [1/12]: The Kill.
    - Minnie Riperton (Come to My Garden) [1/12]: Remember Where You Are, "echoing the celestial '70s classic Les Fleur". The song is on Come to My Garden; Apple Music also says "Minnie Riperton-esque outro".
  - Giorgio Moroder [1/12]: LBF "opening Giorgio Moroder synths of 'Spotlight'".
  - David Bowie [1/12]: LBF "'Ooh La La' some Bowie downturned guitar vamps".
  - Dua Lipa (Future Nostalgia) [1/12]: NME, Soul Control.
  - Grace Jones [1/12]: MuuMuse, Ooh La La "Pull Up to the Bumper".
  - Madonna (Hard Candy) [1/12]: MuuMuse, Step Into My Life.
  - Röyksopp [1/12] and Massive Attack [1/12]: MuuMuse, The Kill.
  - Excluded: Bananarama (Mirage interpolates Cruel Summer: Discogs "contains elements"; NME "borrows from Bananarama"); Lady Gaga (Guardian's career comparison, "lives on an entirely different dancefloor"); Whitney Houston (a single giggle).
- **influenced_by**:
  - Minnie Riperton, Mary Jane Girls, Lewis Taylor, Lisa Stansfield: Ware, quoted by MuuMuse, "It was everyone from Minnie Riperton to Mary Jane Girls, Louis Taylor, Lisa Stansfield, we went everywhere". MuuMuse later spells it Lewis Taylor ("In Your Eyes ... inspired by British soul singer Lewis Taylor and Lisa Stansfield").
  - Earth, Wind & Fire and Teena Marie: Guardian "Ware's references to Earth, Wind & Fire and US R&B staple Teena Marie". These are the artist's stated references as reported by Snapes. **Medium confidence**: the owner may drop them if "Ware's references" is read as the critic's.
  - Fern Kinney [1/12]: RS, "Ware cited Fern Kinney's 'Love Me Tonight' as a major influence ... in an interview with Gay Times"; MuuMuse ties it to Save a Kiss.
  - Janet Jackson [1/12]: Ware via MuuMuse, Soul Control "I had Janet Jackson in my head in this one".
  - Lisa Lisa and Cult Jam [1/12]: MuuMuse, Read My Lips, "which she describes as a nod to Lisa Lisa & Cult Jam's 1985 freestyle hit".
- **landmark 1**: Guardian "it's her best yet"; Irish Times "certainly Ware's finest"; RS "undeniably, the British pop star's best album yet"; Independent "a Jessie Ware rebooted".
- **confidence high**: many reviews agree; full credits are available.

## roisinmurphy-hitparade

Sources:
- Pitchfork, Harry Tafoya, 8.2: https://pitchfork.com/reviews/albums/roisin-murphy-hit-parade/
- Guardian, Laura Snapes: https://www.theguardian.com/music/2023/sep/07/roisin-murphy-hit-parade-review
- Clash, 9/10: https://www.clashmusic.com/reviews/roisin-murphy-hit-parade/
- PopMatters, 7/10: https://www.popmatters.com/roisin-murphy-hit-parade-review
- RTÉ, Alan Corr: https://www.rte.ie/entertainment/2023/0909/1404418-roisin-murphy-journeys-to-the-outer-reaches-of-weird/
- God Is in the TV: https://archive.godisinthetvzine.co.uk/2023/09/12/roisin-murphy-hit-parade-ninja-tune
- Albumism interview: https://albumism.com/interviews/cant-replicate-a-conversation-with-roisin-murphy
- Uproxx interview: https://uproxx.com/pop/roisin-murphy-interview-hit-parade-dj-koze
- Press statement via Line of Best Fit: https://www.thelineofbestfit.com/news/roisin-murphy-announces-her-forthcoming-album-hit-parade
- Pitchfork news: https://pitchfork.com/news/roisin-murphy-announces-dj-koze-produced-album-hit-parade-and-tour-shares-new-song-listen/
- Discogs CD 28203202: "Producer: DJ Koze".

Track count: 13 (Pitchfork news tracklist, with Spacetime).

Cells:
- **genres**
  - house and deephouse: Pitchfork "House bangers", "Can't Replicate ... a hypnotic deep house banger"; Clash "deep house melody"; GITV "pulsating house track".
  - soul: Guardian "warped soul"; PopMatters "looks to soul to elevate her music".
  - techno: Guardian "shadowy techno", "writhing techno".
  - dubtechno (new): see above.
  - funk: Pitchfork "detours into funk and disco"; RTÉ, The House "a loose funk workout".
  - disco: Pitchfork; PopMatters, Free Will "dazzling 1970s disco".
  - dub: Pitchfork "a constantly disintegrating dub"; Guardian "dubbed-out shudder".
  - electropop, synthpop and nudisco: PopMatters "her sound – a swirling cacophony of electropop, synthpop, and nu-disco".
  - dancepop: RTÉ "fluttering dance pop on CooCool".
  - pophouse: PopMatters, Can't Replicate "a fabulous, 1990-style house-pop cut". This maps "house-pop" to the existing token.
  - trap: Pitchfork, Two Ways "corroded mutant trap"; Clash "a trap inspired track"; GITV "Murphy's first engagement with trap music".
  - retrosoul: PopMatters "the retro-soul of 'Fader'".
  - neosoul: GITV "'Fader' ... is a neo-soul song".
  - balearic and lounge: Guardian, Free Will "from beatific lounge to what could be the theme tune to a Balearic soap opera then to twinkling house".
  - guitarpop: Pitchfork, The Universe "bluesy guitar-pop".
  - postdubstep (new): see above.
- **energy 3, tempo 3**: Guardian "lurches recklessly between soulful rhapsodies ... and shadowy techno". Eureka is "minimalistic" (GITV), set against seven-minute house tracks.
- **electronic 4**: Koze's processing throughout (Pitchfork "digitized slurries"), with guitar and strings.
- **mood 3**: Murphy: "It's a joyful record ... There are tinges of darkness, of the abyss, as well as all the joy" (LBF press statement). Guardian: "unrequited desire".
- **theatrical 4**: Pitchfork "put-on American accent", "creepy-camp", "brazen silliness"; RTÉ "mixtape skits".
- **experimental 4**: Pitchfork "very little on Hit Parade resembles any kind of a straightforward genre exercise", "chaotic alchemy", "how alienating it just so happens to be".
- **polish 4**: Guardian "The detail is immaculate".
- **groove 4**: Clash "so groovy, so danceable"; RTÉ "it would be a shame not to dance with her". Ballads and trap tracks keep it from 5.
- **voice soft|powerful|spoken**:
  - soft: Pitchfork "a performance built almost entirely from exhales"; RTÉ "Murphy's breathiest vocals since Moloko".
  - powerful: Pitchfork "how powerful Murphy can sound"; "Murphy belts".
  - spoken: Pitchfork "demented spoken word"; GITV "sped-up spoken word sections".
- **instruments**:
  - synth: Guardian "guitar and synth noodling"; PopMatters "stabs of icy synths".
  - keyboards: PopMatters "pounding keyboards".
  - bass: Clash "sumptuous bass".
  - guitar: RTÉ "ringing guitar chords"; Clash "crazy mini guitar riffs".
  - strings: Guardian "the strings that end ... Hurtz So Bad".
  - trumpet: GITV "trumpet sounds of 'CooCool'".
  - musicbox and flute: GITV "music box and flute sounds" (Two Ways).
  - xylophone: GITV "twinkling xylophone" (Eureka).
  - percussion: GITV "samba percussion".
  - drummachine: Clash "pounding 808".
- **production**:
  - sampling: Sharon Jones on Fader, Mike James Kirkland on CooCool, voicemails and TikTok clips (Guardian, GITV, RTÉ).
  - pitchedvocals: Pitchfork "pitched-shifted and sped up"; GITV "Grimes-like squeakiness".
  - vocoder: Pitchfork, The House "through a vocoder"; Clash, Two Ways "a vocoder".
  - distortedvocals and vocalfilter: GITV "heavily processed to the point where it can become unrecognisable", "the distorting of her vocals", "a disingenuous filter".
  - dubeffects: Guardian, Pitchfork, as above.
  - stutteredits: Pitchfork "Koze stutters and stops the beat".
  - tr808: Clash "pounding 808".
  - belting: Pitchfork, as above.
- **lyrics love|sensuality|heartbreak|introspection|spiritual**: Murphy: "the record is about love and sensuality ... There's contemplation of mortality". Guardian: "unrequited desire"; "Murphy's cosmic worldview, which perceives desire as a kind of fate".
- **producers**: DJ Koze (Discogs; Pitchfork news "produced by DJ Koze").
- **sounds_like**:
  - Grimes [3/13]: GITV, processed voice on The Universe, Crazy Ants Reprise and Two Ways.
  - Madonna (I'm Breathless) [1/13] and Björk (Debut) [1/13]: PopMatters, Can't Replicate "echoes of Madonna's 'Vogue' and Björk's 'Big Time Sensuality'".
  - Minnie Riperton [1/13] and Isaac Hayes [1/13]: RTÉ, CooCool "a breezy Mimi Ripperton meets Isaac Hayes vibe".
  - Kate Bush [1/13]: RTÉ, Eureka.
  - Macy Gray [1/13]: RTÉ, Fader vocal.
  - Millie Jackson [1/13] and Grace Jones [1/13]: RTÉ, What Not To Do.
  - Mad Professor [1/13]: RTÉ, You Knew.
  - Excluded:
    - Bowie and Grace Jones in Pitchfork (her persona tradition, not the sound).
    - Moloko (her own band).
    - XTC (Guardian means Koze's own track "XTC").
    - Sharon Jones (sampled).
    - "Leftfield eco-ambience" (RTÉ; unclear whether it means the band).
- **influenced_by**: empty. The interviews I opened (Albumism, Uproxx, press statement) name no artist influences. Two Ways began as "a nice country/soul thing" (Albumism), which is a genre, not an artist.
- **landmark 1**: Pitchfork "the best record of Murphy's career"; RTÉ "a career-best", "her best yet"; Clash "Perhaps her best solo album".
- **confidence high**.

## peggygou-ihearyou

Sources:
- Pitchfork, Chal Ravens, 6.2: https://pitchfork.com/reviews/albums/peggy-gou-i-hear-you/
- Exclaim!, Chris Bryson, 8/10: https://exclaim.ca/music/article/peggy-gou-i-hear-you-album-review
- NME, Skye Butchard: https://www.nme.com/reviews/album/peggy-gou-i-hear-you-debut-album-tracklist-review-radar-3761858
- Line of Best Fit, 9/10: https://www.thelineofbestfit.com/albums/peggy-gou-i-hear-you-takes-happiness-seriously
- RNZ: https://www.rnz.co.nz/news/thesampler/555063/review-i-hear-you-by-peggy-gou
- Korea Times: https://www.koreatimes.co.kr/entertainment/20240521/rising-global-star-peggy-gou-to-release-debut-album
- MusicTech (Zane Lowe interview): https://musictech.com/news/music/peggy-gou-influences-collaboration-lenny-kravitz
- Resident Advisor: https://ra.co/news/80520
- Mixmag: https://mixmag.net/read/peggy-gou-announces-debut-album-i-hear-you-news/
- Discogs FLAC 31890763: "Producer, Programmed By, Mixed By: Peggy Gou".

Cells:
- **genres**
  - house: RA "the carefree energy of '90s house"; Exclaim "'90s-inspired house, techno, disco"; Korea Times "reinterprets 1990s house music"; Gou: "rave, house music" (MusicTech).
  - eurodance: NME "her utopian vision of 90's Eurodance"; Exclaim, I Go "Eurodance-esque".
  - dancepop: NME "dance-pop blueprint".
  - pophouse: Exclaim "Gou's house-pop wheelhouse".
  - techno and disco: Exclaim, as above.
  - italodisco: Pitchfork "glassy Italo synths"; "Italo storm clouds" (Your Art).
  - breakbeat: Pitchfork "several saggy breakbeats".
  - jungle: Pitchfork "one tasty jungle loop"; RNZ "a jungle rhythm".
  - drumandbass: Exclaim "rapid-fire drum & bass"; NME "intercontinental drum'n'bass".
  - balearic: Pitchfork "plastic Balearica"; Exclaim "Balearic bounce".
  - pianohouse: NME "comforting piano house ('Purple Horizon')".
  - trance: Exclaim "euphoric trance" (1+1=11).
  - rave: Gou: "the inspiration came from '90s music, some rave, house music" (MusicTech).
  - rnb: NME "throwback R&B"; Gou: "this song is more like R&B '90s".
  - poprap: NME "a Spanglish pop-rap tune".
  - hiphop: Exclaim "twinkly old-school hip-hop beats".
  - acidbreaks and dub: Exclaim, Purple Horizon "gets dubby", "acid breakbeats".
  - exotica: Pitchfork "Moby's formula for melancholy exotica" (Purple Horizon).
  - khouse (new): see above.
- **energy 3, tempo 3**: NME "two mid-tempo tracks early on"; RNZ "Elsewhere the tempo slows"; Seoulsi is 150 BPM, "the fastest on the album" (Korea Times).
- **electronic 4**: mostly programmed. Kravitz's guitar and the gayageum keep it from 5 (Exclaim).
- **mood 4**: LBF "takes happiness seriously", "euphoric expression"; Pitchfork "rosy nostalgia", with a "portentous" opener.
- **theatrical 2**: NME "cool delivery"; Pitchfork "faux-naive speak-singing".
- **experimental 2**: Pitchfork "retro fantasia", with "slightly experimental ones like 'Seoulsi'" (RNZ).
- **polish 3**: RNZ "how rudimentary it is ... intentional crudity"; Pitchfork "plasticky MIDI horns"; LBF "immaculate debut".
- **groove 4**: dance album, but NME says the mid-tempo duets stall it ("odd pacing from a DJ").
- **voice soft|spoken**: RNZ "her smoky tone"; Pitchfork "speak-singing", Your Art "spoken-word"; LBF "recite lists of nonsensical words".
- **instruments**:
  - synth, syndrum, organ, drummachine: Pitchfork "glassy Italo synths, super-sized syndrums, pumping organs, plasticky MIDI horns, the fierce thwack of the TR-909".
  - piano: Exclaim "vintage piano licks"; NME "piano house".
  - bass: Exclaim "rubbery basslines".
  - guitarsynth: Pitchfork "a sparkly synth-guitar line".
  - guitar: Exclaim, Kravitz "lays down some guitar riffage".
  - mallets: Exclaim "vibraphone hooks".
  - percussion: Exclaim "techno percussion"; Zane Lowe on "upper register percussive instruments" (MusicTech).
  - keyboards: Exclaim "sprightly keys".
  - gayageum: new, see above.
- **production**:
  - tr909 and korgm1: Pitchfork "TR-909", "Korg M1 organs".
  - sampling: Exclaim "samples from Kevin Lyttle's 'Turn Me On'"; Pitchfork "a slowed-down 'Think' break".
  - drumloop: Pitchfork "jungle loop".
  - programming: Discogs.
- **lyrics party|love|identity|introspection**:
  - party: NME "connecting us through dance".
  - love: I Believe in Love Again (LBF).
  - identity: Korea Times "Gou's Korean identity is prominently featured"; "I feel most like myself when singing in Korean".
  - introspection: Gou: "a testament to the power of listening, to ourselves and to each other" (Mixmag, Pitchfork news).
- **language ko|en**: Exclaim "many tracks mixing Korean and English lyrics". The Spanish is only guest Villano Antillano's verse.
- **producers**: empty. The only credited producer is Peggy Gou herself (Discogs), dropped by rule.
- **sounds_like**:
  - A Touch of Class [1/10]: Pitchfork, Nanana "a polyglottal chorus a lot like A Touch of Class' ... 'Around the World'".
  - Daft Punk (Random Access Memories) [1/10]: Pitchfork, I Believe in Love Again "a vacant, Random Access Memories disco slinkiness".
  - Moby [1/10]: Pitchfork, Purple Horizon.
  - LTJ Bukem [1/10]: Pitchfork, Seoulsi "a jungle loop intelligent enough for LTJ Bukem".
  - Snap! (The Madman's Return) [1/10] and Robin S. (Show Me Love) [1/10]: NME on the Eurodance vision "as nailed on 'Nanana'. Some clear touchpoints are 'Rhythm is a Dancer', 'Show Me Love'".
  - Excluded: ATB (Nanana quotes the "pitch-bent lick from ATB's '9 PM'", a quotation); Lenny Kravitz (guest).
- **influenced_by**: empty. Gou names only eras and genres ("90s music"). Her favourite Kravitz album, 5 (MusicTech), is excluded because Kravitz is a guest.
- **landmark 0**: debut, but no source marks it as defining.
- **confidence medium**: credits are thin and the reviews are split.

## weeknd-dawnfm

Sources:
- Pitchfork review, Dani Blum, 8.0: https://pitchfork.com/reviews/albums/the-weeknd-dawn-fm/
- Pitchfork "5 takeaways", Quinn Moreland: https://pitchfork.com/thepitch/5-takeaways-from-the-weeknd-new-album-dawn-fm/
- Guardian, Alexis Petridis: https://www.theguardian.com/music/2022/jan/07/the-weeknd-dawn-fm-review
- NME, Rhian Daly: https://www.nme.com/reviews/album/the-weeknd-dawn-fm-review-3132463
- Rolling Stone, Will Dukes: https://www.rollingstone.com/music/music-album-reviews/weeknd-dawn-review-1278189/
- Variety, Jem Aswad: https://variety.com/2022/music/reviews/the-weeknd-dawn-fm-album-review-1235148729/
- Consequence: https://consequence.net/2022/01/the-weeknd-dawn-fm-review/
- Exclaim!: https://exclaim.ca/music/article/the_weeknd_dawn_fm_album_review
- Independent: https://www.independent.co.uk/arts-entertainment/music/reviews/the-weeknd-review-dawn-fm-b1988556.html
- Clash, 8/10: https://www.clashmusic.com/reviews/the-weeknd-dawn-fm
- Line of Best Fit: https://www.thelineofbestfit.com/reviews/albums/the-weeknd-dawn-fm-album-review
- NPR: https://www.npr.org/2022/01/09/1071706575/review-the-weeknd-dawn-fm
- NME news: https://www.nme.com/news/music/the-weeknd-reveals-artists-who-inspired-next-album-3017674
- Discogs digital release 21588934 (full credits).

Cells:
- **genres**
  - synthpop: NME "dark synth-pop"; Independent "Eighties synthpop world"; Exclaim.
  - rnb, hiphop, disco, newwave, electropop: Exclaim "fusing elements from R&B, hip-hop, disco, new wave, electropop and synthpop".
  - Supporting views for those: Guardian "mid-tempo tracks influenced by 80s R&B"; Pitchfork "euphoric disco and '80s R&B"; Variety "new-wave synth splashes".
  - pop: Guardian "2020s pop music so brilliantly crafted".
  - discohouse: Guardian, Take My Breath "five and half euphoric minutes of disco-house".
  - electro: Guardian "the wracked electro of How Do I Make You Love Me?".
  - boogie: RS, I Heard You're Married "this electro-boogie two-step staple".
  - citypop: LBF "the cheesiest whims of 1980s synth and city pop"; Pitchfork, the Tomoko Aran sample.
  - funk: Consequence "devoted to 1980s synth and funk".
  - ballad: Guardian "beautiful, beatless ballad", Out of Time "gorgeous ballad".
  - slowjam: Pitchfork 5 takeaways "spoken-word slow jam 'A Tale by Quincy'"; LBF "vintage Michael Jackson slow jam".
- **energy 3, tempo 3, groove 3**: Guardian, the first half has dance tracks and "a second half entirely consisting of mid-tempo tracks". Clash: Take My Breath is "a modern love letter to disco".
- **electronic 4**: credits show programming and keyboards by Martin, Holter and OPN on almost every track, with some live strings, guitar and bass. Clash notes "acoustically-driven instrumentation" on Don't Break My Heart.
- **mood 3**: Variety "as upbeat an album as he's ever made", but Pitchfork "Dawn FM is all about annihilation".
- **theatrical 4**: Pitchfork "biblical fantasia", "grandeur"; concept-radio narration by Jim Carrey.
- **experimental 2**: Pitchfork "Lopatin's abstractions and absurdity", "entropy built into the catchy dance tracks", yet it is chart pop.
- **polish 5**: Guardian "Brilliantly written, produced and sung"; mixed by Serban Ghenea (Discogs).
- **voice soft|clear**: kept from After Hours. LBF "pop's most in-demand falsetto singing in such low voice".
- **instruments**: Discogs credits list keyboards, programming, bass, drums, guitar, strings (Mattias Bylund), violin and Stroh violin (Mattias Johansson), cello (David Bukovinszky), trombone (Peter Noos Johansson), percussion (Magnus Sjölander). acousticguitar comes from the Guardian ("an acoustic guitar", Less Than Zero) and Clash ("gentle strums of a guitar").
- **production**:
  - programming: Discogs.
  - sampling: Pitchfork "a sample of the 1983 song 'Midnight Pretenders'", "borrows the guitar loop from ... Alicia Myers"; Independent, Michael Jackson's yelp.
  - stringarrangements: Discogs "Strings: Mattias Bylund".
  - falsetto: LBF, as above.
- **lyrics introspection|heartbreak|love|spiritual|sensuality**: NME "reckons with his past mistakes"; Pitchfork "purgatory", "afterlife"; Guardian "erotic asphyxiation", "creepy abusive relationships".
- **producers**: from Discogs Producer and Co-producer credits, main first by track count. Max Martin, Oscar Holter, Oneohtrix Point Never, Matt Cohn, Swedish House Mafia, Calvin Harris, DaHeala, Tommy Brown, Benny Bock, Brian Kennedy, Charlie Coffeen, Rex Kudo, Bruce Johnston, Peter Lee Johnson, Jeff Gitty. The Weeknd himself, and "Producer [Additional]" and "[Vocal]" credits, are dropped.
- **sounds_like**:
  - Michael Jackson (Off the Wall) and (Thriller): Consequence "owes a lot to Thriller or Off the Wall"; RS "Jackson's spirit is all over this project", Out of Time "recalls Off the Wall-era Michael Jackson"; Variety "Mid-period MJ is deep in the DNA".
  - Depeche Mode, Giorgio Moroder, Talking Heads: NME "pulling its references from the '80s (Giorgio Moroder, Michael Jackson, Depeche Mode, R.E.M., Talking Heads)". R.E.M. is dropped because it is a lyric mention ("dozing off to R.E.M."). Pitchfork also says "a Giorgio Moroder-influenced album", and LBF says Gasoline "could be slipped seamlessly into a Depeche Mode record".
  - Duran Duran: Independent "the darkly shimmering, Eighties synthpop world of Depeche Mode and Duran Duran".
  - Tangerine Dream (Thief): Consequence "Dawn FM evokes Michael Mann's Thief and its score by Tangerine Dream".
  - Love Unlimited Orchestra [1/16] and Barry White [1/16]: Guardian, Here We Go… Again's chord progression recalls "Love's Theme".
  - Prince [1/16] and T. Rex [1/16]: Guardian, Phantom Regret "nods to both Prince and Marc Bolan".
  - Daft Punk (Homework) [1/16]: Guardian, Take My Breath "a riff that recalls Daft Punk's Da Funk".
  - The Cure (Kiss Me, Kiss Me, Kiss Me) [1/16] and A Flock of Seagulls (A Flock of Seagulls) [1/16]: Variety, Less Than Zero, "Just Like Heaven", "Space Age Love Song".
  - The War on Drugs (A Deeper Understanding) [1/16]: Pitchfork 5 takeaways, Less Than Zero.
  - Stevie Wonder [1/16]: NPR "there's a Stevie Wonder moment after Tyler, the Creator's verse".
  - Excluded: the Beach Boys (Bruce Johnston works on the album); Quincy Jones (guest voice); samples (Tomoko Aran, Alicia Myers, MJ's yelp).
- **influenced_by**: Britney Spears (In the Zone), Nas, Kid Cudi, Kanye West. NME 12 Aug 2021: on his Apple Music 1 show "The Weeknd played 'a mix of music that showcases tracks inspiring the new Dawn era'", namely Britney's "Everytime" and "Toxic" from In the Zone, and songs by Nas, Swedish House Mafia, Kid Cudi, Kanye West and Tyler, the Creator. SHM and Tyler are dropped as collaborators. The Billboard 2021 "GTA: Vice City ... Hall & Oates and Michael Jackson" quote concerns Blinding Lights / After Hours, so it is not used.
- **landmark 0**: highly praised (Variety "possibly ... best", Exclaim "pivotal moment"), but no source sets it beside his defining records. Owner may revise.
- **confidence high**.

## psb-hotspot

Sources:
- Pitchfork, Alfred Soto, 6.1: https://pitchfork.com/reviews/albums/pet-shop-boys-hotspot/
- The Quietus, Canada Choate: https://thequietus.com/articles/27707-pet-shop-boys-hotspot-review
- Clash, 8/10: https://www.clashmusic.com/reviews/pet-shop-boys-hotspot
- Independent, 4/5: https://www.independent.co.uk/arts-entertainment/music/reviews/pet-shop-boys-review-hotspot-album-tracklist-neil-tennant-gengahr-sanctuary-a9298181.html
- NME, Gary Ryan: https://www.nme.com/reviews/pet-shop-boys-hotspot-review-2599853
- Line of Best Fit, 8/10: https://www.thelineofbestfit.com/reviews/albums/hotspot-pet-shop-boys-album-review
- DW: https://www.dw.com/en/pet-shop-boys-pay-tribute-to-berlin-in-hotspot/a-52126151
- Official Charts album search (peak 3).
- Discogs CD 14688287: "Producer, Mixed By: Stuart Price"; "Programmed By [Additional Programming], Bass Guitar: Stuart Price"; "Guitar: Bernard Butler [9]"; "Performer, Programmed By: Pet Shop Boys".

Cells:
- **genres**
  - synthpop: Independent "synth-pop duo"; NME "synth-pop banger".
  - electro: NME "electro juggernaut 'Will-o-the-Wisp'"; Clash "a subtly different shade of electro".
  - disco: NME "deliriously bonkers disco of 'Monkey Business'"; DW "1970s disco beat"; Independent "disco-fuelled 'Dreamland'".
  - hinrg: Clash "The HI-NRG fevered pop of tracks like 'Happy People'".
  - eurohouse and italodisco: NME, Happy People "a euphoric '90s euro-house/'80s italo-disco number".
  - house: Pitchfork "house keyboard patterns".
  - techno: NME "the techno of 'Wedding in Berlin'".
  - pop: LBF "perfect pop crown".
- **energy 3, tempo 3**: Pitchfork "The mid-tempo tunes keep their top buttons buttoned"; Clash "contrast of light and shade".
- **electronic 4**: Clash "the defining sound is electronic as ever", with acoustic guitar and horn on Burning the Heather.
- **mood 3**: Pitchfork "dampen the euphoria ... tuneful, wan"; Independent "an expression of hope for the future"; Clash "ruminative melancholy".
- **theatrical 3**: standard. Clash "trademark low key hilarious spoken word bridge".
- **experimental 2**: LBF "stylistically diverse, risk-taking"; NME "There's no jolting shock-of-the-new".
- **polish 5**: NME "gleaming pop sheen"; Stuart Price production.
- **groove 3**: dance tracks (Monkey Business "danciest", Quietus) alternate with ballads (Only the Dark, Burning the Heather).
- **voice clear|spoken**: Clash "spoken word bridge"; Quietus "spoken verses" (Happy People).
- **instruments**:
  - synth: NME "analogue-sounding synths"; Pitchfork "Lowe's orchestral synth chords".
  - synthbass: Pitchfork "bass synth".
  - bass: Discogs, Price on bass guitar.
  - strings: Pitchfork, Monkey Business "interplay between strings"; Quietus "string section punctuation".
  - acousticguitar and guitar: Clash "acoustic guitars provided by Bernard Butler"; Discogs.
  - brass: Clash "horn solo on single 'Burning The Heather'".
  - bells: Independent "the bells chime on 'Wedding in Berlin'".
  - keyboards: Pitchfork "house keyboard patterns"; Quietus "rave keyboards".
- **production**: programming (Discogs); sampling (Quietus "a repeated snippet of Wagner's Bridal Chorus"; Pitchfork and NME say Mendelssohn's "Wedding March").
- **lyrics love|political|party|social|identity|introspection**: NME "trenchant political message about Brexit"; DW "hedonistic declaration of love to Berlin"; Pitchfork "lonely queer boys", "Wedding in Berlin"; Quietus "an assimilationist anthem".
- **scene**: Berlin trilogy; Hansa Studios (Discogs notes, LBF, NME).
- **sounds_like**:
  - Madonna (Confessions on a Dance Floor) [1/10]: Quietus, Will-o-the-Wisp "redolent of Madonna's 'Hung Up'". Price produced that, but Madonna did not work on Hotspot.
  - Daft Punk (Discovery) [1/10]: Quietus, Monkey Business "would sound at home on Daft Punk's 'One More Time'"; NME "like Daft Punk producing Robbie Williams".
  - Chic [1/10]: Quietus, Monkey Business bassline "airlifted from a Chic composition".
  - Robbie Williams [1/10]: NME, as above.
  - Kraftwerk [1/10] and Tom Tom Club [1/10]: LBF "Kraftwerk-meets-Tom Tom Club bounce of 'Monkey Business'".
  - The Fall [1/10]: LBF "Tennant sounds like Mark E. Smith at his most unhinged".
  - Excluded: their own catalogue (Behaviour, Introspective, Release, Jealousy); Years & Years (guest); Bowie (only the studio's history).
- **influenced_by**: empty. No stated influence was found in what I could open. Pitchfork's "Giorgio Moroder's sequencer lines are lodestars" is the critic's career-wide view.
- **landmark 0**: NME "comfortably familiar business as usual".
- **confidence high**.

## Legacy
No row for any album: no professional source I opened says any of them influenced later music. Clash's "setting a precedent to be followed for decades to come" (Hit Parade) is a prediction made at release, so it is not used.

