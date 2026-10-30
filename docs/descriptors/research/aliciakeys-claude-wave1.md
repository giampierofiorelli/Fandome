# Claude research notes (Oct 2026, wave 1)

# Wave 1 / F: evidence notes

Albums: aliciakeys-songsinaminor, adele-19, adele-21, sza-ctrl, weeknd-afterhours. Titles, artists and years match `src/data/catalog.ts` (lines 16, 56, 79, 141).

Wikipedia was used only to find the original sources. It is not cited anywhere. **Credits** (producers and instruments) come from the Discogs database API, which transcribes the liner notes:
- Songs in A Minor: release 946140
- 19: release 1267060
- 21: release 2664589
- Ctrl: CD releases 10417987 / 10564809, standard 14-track edition
- After Hours: vinyl release 28568005

Each one is at `https://api.discogs.com/releases/<id>`. Discogs genre/style tags (user-contributed) were **not** used for `genres`.

**Could not open:** Metacritic, AllMusic, Slant, Spin and AnyDecentMusic returned 403. Entertainment Weekly and The Telegraph returned 402 (paywall). The NYT returned 403. The BBC News 2008 story and the Library of Congress page also returned 403; the LoC press release was read through its infoDOCKET reproduction. archive.org reset the connection. As a result, no Metacritic score is cited, and Rolling Stone star ratings were not visible in the page HTML, so they are not stated. Pitchfork scores come from the page JSON (`"rating"`).

## New tokens
None. Every genre, instrument and production token is already in `scenes.ts`, `instruments.ts` and `production.ts`.

---

## aliciakeys-songsinaminor: Songs in A Minor (2001)

**Main sources**
- Pitchfork Sunday Review, Clover Hope, 28 Mar 2021, 8.5: https://pitchfork.com/reviews/albums/alicia-keys-songs-in-a-minor/
- Rolling Stone, Barry Walters, 25 Jun 2001: https://www.rollingstone.com/music/music-album-reviews/songs-in-a-minor-251297/
- Robert Christgau, A−: https://www.robertchristgau.com/get_artist.php?name=Alicia+Keys
- Rolling Stone 100 Best Debut Albums 2022, #46: https://www.rollingstone.com/music/music-lists/100-best-debut-albums-of-all-time-143608/
- Stereogum "The Anniversary", 3 Jun 2021: https://www.stereogum.com/2149317/alicia-keys-songs-in-a-minor/reviews/the-anniversary/
- Audacy "Run That Back": https://www.audacy.com/national/music/run-that-back-alicia-keys-debut-songs-in-a-minor
- Library of Congress NRR 2022 press release (infoDOCKET): https://www.infodocket.com/2022/04/13/national-recording-registry-inducts-music-from-alicia-keys-ricky-martin-journey-and-more-in-2022/

**genres**
- **rnb:** Pitchfork, "Chopin-inspired R&B album".
- **classical / soul:** Pitchfork, "a dexterous blend of classical music and soul".
- **neosoul:** Pitchfork, "the new ambassadors of neo-soul"; Audacy, "a love letter comprised of neo-soul and contemporary R&B".
- **contemporaryrnb:** the same Audacy quote.
- **retrosoul:** Pitchfork, "the retro-soul sound that separated artists like Erykah Badu ... and Keys".
- **hiphop:** Rolling Stone, "steers her into contemporary hip-hop mode" ("Girlfriend"); Stereogum, "flips Beethoven ... into a hip-hop vibe".
- **jazz:** Rolling Stone, "complex jazz harmonies".
- **boombap:** RS debut list, "classical piano and strings in a laid-back New York boom-bap setting" ("Fallin'").
- **newjackswing:** Pitchfork, "'Girlfriend,' a throbbing, New Jack Swing number" (1 track).
- **gospel:** Pitchfork, "the shiny gospel soul of 'Lovin U'" (1 track).
- **funk:** Pitchfork, the Prince cover "honors the original's seductive funk" (1 track).

**Scales**
- **energy 2, tempo 2:** largely ballads and mid-tempo. Pitchfork names "Fallin'" a ballad and "Girlfriend" throbbing.
- **electronic 2:** Discogs credits drum programming (Kerry Brothers, album-wide "Programmed By"), against "organic instrumentation" (Rolling Stone).
- **mood 2:** Pitchfork, "the album's most melancholy parts", "wounded refrains", "a dark time".
- **theatrical 3:** classical intros and a "pompous bass" on "Rock wit U", against "more vocal restraint" (Pitchfork).
- **experimental 2:** classical/hip-hop fusion, but with song forms.
- **polish 3:** Rolling Stone, "self-consciously retro arrangements and sometimes thin sonics"; Pitchfork, Columbia execs said it "sounded like one long demo".
- **groove 2:** a few beat-driven tracks ("Girlfriend", "Jane Doe").

**voice raspy|soft:** Pitchfork, "a swelling falsetto ... to a hoarse alto", "tender, sometimes sanctified moans, her vocals neither straining nor very robust". The falsetto goes in production.

**instruments**
- piano is the core (Pitchfork "Chopin-inspired compositions", "bravado on the piano"; RS list "classical piano and strings").
- Discogs credits strings (Miri Ben-Ari), flute and strings arranged by Isaac Hayes (track 6), Rhodes (Isaac Hayes, listed as electricpiano), bass and upright bass (Richie Goods, listed as doublebass), organ (John Peters), violin, keyboards (Bryan-Michael Cox, Arden Altino), guitar (Arty White, Gerald Flowers) and percussion (Norman Hedman).
- Pitchfork confirms "strings and flute dashes performed by Isaac Hayes".
- drums: drum programming credits. "drums" means the beat, as in "jolting drums" (Pitchfork, "Piano & I").

**production**
- drumprogramming / programming: Discogs.
- sampling: Stereogum, "Girlfriend" "sampled the 1995 Ol' Dirty Bastard cut 'Brooklyn Zoo'".
- stringarrangements: Discogs, "Arranged By [Strings] Isaac Hayes".
- falsetto: Pitchfork.

**lyrics love|heartbreak|introspection|identity:** Pitchfork, "compositions about self-worth, survival, and practical pursuits of happiness. She sang of profound love and desire"; "a clear-eyed meditation on the familiarity of heartbreak"; "A Woman's Worth", "a feminist anthem".

**scene:** Pitchfork's neo-soul framing and Keys raised in Hell's Kitchen, New York.

**producers:** Discogs. Alicia Keys is dropped (artist's own credit). Kerry "Krucial" Brothers is credited as producer (additional on track 10 only). Also Jermaine Dupri (2), Kandi (8), Brian McKnight (9), Arden Altino, Jimmy Cozier and Miri Ben-Ari (11).

**sounds_like**
- Jill Scott: Rolling Stone, "suggests down-home R&B contemporaries like Jill Scott as well as yesteryear's soul sophisticates" (album level).
- Aretha Franklin [1/16]: Rolling Stone, "the serious early Aretha vibe permeating the current hit 'Fallin''".
- Not used: Christgau's Donny Hathaway line is about her training, not her sound. The Wikipedia claim that Pitchfork compares "Lovin' U" to the Supremes is not in the Pitchfork text.

**influenced_by**
- Pitchfork quotes Keys to Rolling Stone 2001: "Biggie and Marvin told me, write what you know". That gives Marvin Gaye and The Notorious B.I.G.
- The LoC release quotes Keys on the album as a "fusion of my classical training, meshed with what I grew up listening to". This names no artists, so it is not used.
- Chopin is called her "dawg" only by Songfacts, and the "Chopin-inspired" label is the critic's. Not used. Beethoven is quoted (Moonlight Sonata) and Prince is covered, so neither counts as an influence.

**landmark 1:** Pitchfork, "outstanding 2001 debut ... that blazed a unique path to mainstream superstardom"; National Recording Registry.

**confidence:** high.

---

## adele-19: 19 (2008)

**Main sources**
- BBC Music, Chris Long, 2008: https://www.bbc.co.uk/music/reviews/6pf9/
- Variety, Phil Gallo: https://variety.com/2008/music/reviews/adele-19-1200521839/
- Observer, Caspar Llewellyn Smith, 20 Jan 2008: https://www.theguardian.com/music/2008/jan/20/popandrock.shopping1
- Guardian, Dorian Lynskey, 25 Jan 2008: https://www.theguardian.com/music/2008/jan/25/popandrock.shopping6
- PopMatters, Ron Hart: https://www.popmatters.com/adele-19-2496145198.html
- Independent, Andy Gill, 24 Jan 2008: https://www.independent.co.uk/arts-entertainment/music/reviews/album-adele-773517.html
- Rolling Stone: https://www.rollingstone.com/music/albumreviews/19-20080128
- NME, Priya Elan, 1 Feb 2008: https://www.nme.com/reviews/adele/9433
- Paste on 21, looking back at 19: https://www.pastemagazine.com/music/adele/adele-21

**genres**
- **soul:** Variety, "a most agreeable, soulful album"; Observer, "her wonderful soulful phrasing"; Guardian on soul vs MOR.
- **rnb:** Variety, "assimilating various pre-disco R&B styles"; Rolling Stone, "retro-modern R&B exercises".
- **jazz / blues / folk:** BBC, "Pitching up somewhere between blues, folk and jazz"; Observer, "finger-popping jazz of 'My Same'"; Rolling Stone, "'Cold Shoulder,' a lover's blues".
- **pop:** Variety, "a varied mix of classic pop textures".
- **retrosoul:** Rolling Stone's 21 review, "Adele Adkins' retro-soul debut, 19".
- **ballad:** Observer, "gorgeous balladry"; NME, "getting-up-from-your-stool balladry".
- **bigband / indierock:** Paste, on "Chasing Pavements" (the lead single), "an instrumentally-dense arrangement equally referencing big-band and indie-rock".
- PopMatters' "blue-eyed R&B" was not mapped to `blueeyedsoul`, because the source's term differs.

**Scales**
- **energy 1, tempo 2:** Paste, "Several tracks on 19 are stripped way back, eschewing hooks in favor of coffee-house atmosphere"; PopMatters, "beautifully spare arrangements, using nothing more than bass, acoustic guitars and piano".
- **electronic 1:** acoustic band and strings; one programming credit (Liam Howe).
- **mood 2:** NME, "heart-as-smoking-gun lyrics"; Variety, "dwell on romance gone wrong", but "'Right as Rain' is as perfect a summer jam".
- **theatrical 2:** Observer, "an artistically focused stillness at the centre"; Eg White's strings are bigger.
- **experimental 1:** NME, "plays it dead safe".
- **polish 3:** spare Abbiss production against White's "lush string arrangements" (PopMatters).
- **groove 1:** "Cold Shoulder, the funkiest track" (Variety) and "Right as Rain"; the rest are ballads.

**voice powerful|raspy:** PopMatters, "her powerhouse vocal delivery"; NME, "the roughest, most charming thing here; tunefully bruised"; Paste, "a raspy, aged-beyond-its-years thing".

**instruments:** Discogs credits piano (Neil Cowley), guitar and rhythm guitar (Adele, Ben Thomas and others), bass (Adele, Stuart Zender, Tom Driessler), strings (London Studio Orchestra, Wired Strings; arranged by Rosie Danvers, Wil Malone and Chris Elliott), drums, Hammond and Wurlitzer (listed as organ and electricpiano), keys, glockenspiel, celesta, cowbell, percussion and tambourine. "acousticguitar" comes from PopMatters ("acoustic guitars"). The Observer has Adele playing guitar on "Daydreamer".

**production**
- stringarrangements: Discogs string arrangers.
- programming: Liam Howe, B4.

**lyrics heartbreak|love:** Independent, "a narrow, youthful focus on romantic themes ... teenage crushes, brush-offs and frustrations"; Observer, "bruising love songs".

**scene:** Variety, "The female edition of the latest British Invasion"; NME, "record companies have been busying themselves by bankrolling several Winehouse-style prodigies".

**producers:** Jim Abbiss, Eg White, Mark Ronson ("Cold Shoulder" only). Source: Discogs; the Observer and PopMatters name all three.

**sounds_like**
- **Variety:** "a bit of Dionne Warwick, Minnie Ripperton [sic] and Dusty Springfield"; "Amy Winehouse comparisons are justified in spots"; "'Crazy for You' draws on Leonard Cohen's 'Hallelujah'" (Various Positions) [1/12].
- **Observer:** "Very Joni Mitchell of N17" ("Daydreamer") [1/12]; "'Chasing Pavements' ... starts out sounding almost like vintage Portishead" [1/12]; "think Dusty or Aretha" (album).
- **BBC:** "Cold Shoulder (which is unexpectedly reminiscent of Shara Nelson-era Massive Attack)" [1/12].
- **PopMatters:** "the crackle of old vinyl copies of Carole King's Tapestry and Roberta Flack's First Take" ("Daydreamer" and "Best for Last") [2/12 each]; "seemingly Randy Newman-inspired rendition" ("Make You Feel My Love") [1/12].
- **NME:** "takes her cue from the formulaic, Jamie Cullum-led set"; "her voice (which bounds between Alison Moyet, Rickie Lee Jones and Antony Hegarty)"; "less 'Dusty In Memphis' and more 'Melua In Morden'" (Katie Melua, "Make You Feel My Love") [1/12].
- **Independent:** "a convenient blending of Winehouse's R&B chops with Nash's mockney mannerisms" (Kate Nash).

**influenced_by:** empty. No statement by Adele naming influences for *19* specifically was opened. The Irish Times 2008 profile (https://www.irishtimes.com/culture/music/from-the-archive-adele-on-why-she-ll-be-a-rubbish-celebrity-1.2436797) has her discovering Ella Fitzgerald and Etta James ("two CDs for a fiver"), but that is background, not this album. NME's "eclectic range of influences (from ... Jill Scott to ... Billy Bragg)" is second-hand.

**landmark 0:** no source marks it as defining. It is the debut, overshadowed by 21.

**confidence:** high.

---

## adele-21: 21 (2011)

Consistent with `docs/descriptors/adele.csv` (25): same artist spelling, same scene string ("2010s British pop and soul balladry"), and the same voice family (powerful|raspy).

**Main sources**
- Pitchfork Sunday Review, Dani Blum, 27 Sep 2020, 8.2: https://pitchfork.com/reviews/albums/adele-21/
- Rolling Stone, Will Hermes, 17 Feb 2011: https://www.rollingstone.com/music/music-album-reviews/21-252006/
- Guardian, Will Dean, 20 Jan 2011: https://www.theguardian.com/music/2011/jan/20/adele-21-review
- Paste, Ryan Reed, 22 Feb 2011: https://www.pastemagazine.com/music/adele/adele-21
- NPR Fresh Air, Ken Tucker, 9 Mar 2011: https://www.npr.org/2011/03/09/134168484/on-21-adeles-voice-is-wise-beyond-her-years
- Interview Magazine: https://www.interviewmagazine.com/music/adele-21
- Tony Clayton-Lea interview (his site, 2011): https://tonyclaytonlea.com/?p=182
- Taste of Country, Amanda Hensel, 22 Feb 2011: https://tasteofcountry.com/adele-21-country-music/
- Illinois Entertainer, Tom Lanham: https://illinoisentertainer.com/?p=8819

**genres**
- **soul / blues / country / gospel / pop:** Clayton-Lea, "a stirring mixture of stripped-down, subtle soul, blues, country, gospel and pop".
- **rnb:** Rolling Stone, "the R&B co-write 'He Won't Go'".
- **gospel:** Rolling Stone, "the gospel-powered 'One and Only'"; NPR, "the gospel and soul inflections that dominate".
- **torchsong:** Pitchfork, "the British torch singer".
- **jazz:** Pitchfork, "She swirled together soul and pop and jazz".
- **powerballad:** Rolling Stone, "Dan Wilson, whose power ballads..."; NPR, "Turning Tables", "a power ballad".
- **retrosoul:** Paste, "a sensual modern pop-noir landscape, heavy on retro textures"; also "soul-throwback".
- **country:** Pitchfork, "Adele said she turned to country while writing the record". Kept at the tail: NPR says "you wouldn't know it".
- **bossanova:** Rolling Stone, "Her cover of the Cure's 'Lovesong' is a nice idea lost in bossa nova fluff" (1 track).

**Scales**
- **energy 2:** ballads plus stompers. Rolling Stone, "a soul burner with hand claps and a kick drum whumping like a fist on a sandbag"; Paste, "opening soul stomper". The guide's energy-1 anchor is the *21* ballads, so the whole album gets 2, as with 25.
- **electronic 1:** NPR, "instrumentation is heavy on drums, piano and horns"; live players in the Rubin sessions (Discogs).
- **mood 1:** Pitchfork quotes Adele: "I was miserable, I was lonely, I was sad, I was angry, I was bitter".
- **theatrical 4:** Pitchfork, "colossal songs", "titanic high notes that roar over cinematic piano", "melodrama"; Paste, "a cinematic pop anthem laced with Broadway-worthy strings".
- **experimental 1:** classic song forms.
- **polish 4:** Paste, "a well-manicured batch of songs"; A-list producers; Rubin's "lean production".
- **tempo 2.**
- **groove 2:** Rolling Stone, "when the grooves are fierce"; "Rumour Has It" "shimmies" (Pitchfork).

**voice powerful|raspy:** Pitchfork, "the gritty, growled vocals that could stretch into big belted notes"; Paste, "husky belt".

**production**
- belting: same quotes.
- falsetto: Interview Magazine, "her voice artfully cracks in a falsetto on the song 'Someone Like You'".
- stringarrangements: Discogs credits Rosie Danvers, David Campbell and Chris Elliott.
- hornarrangements: Discogs, "Arranged By [Trombone And Horn] Harry Brown".
- programming: Ryan Tedder.
- A "wall of sound" claim appears on Wikipedia only and was not used.

**instruments:** Discogs credits piano (Neil Cowley, James Poyser, Dan Wilson), drums (Chris Dave, Leo Taylor, Ash Soan), bass (Pino Palladino, Paul Epworth), acoustic and electric guitar, strings and violins, B3 organ, percussion (Lenny Castro), harp (Stephanie Bennett), banjo and accordion (David Hidalgo), tenor sax (Ray Carless) and trumpet (Noel Langley). Rolling Stone confirms the hand claps.

**lyrics heartbreak|love|introspection|identity|nostalgia:** Pitchfork, "the dissolution of what she would call a 'rubbish relationship'"; "she tries to articulate identity through the shape of a lover's absence"; "Her portraits of despair also involve surging between the past and present".

**producers:** Discogs. Rick Rubin (4 tracks), Paul Epworth (2), Jim Abbiss (2), Ryan Tedder, Fraser T Smith and Dan Wilson (1 each). Adele's own credit on "Someone Like You" is dropped.

**sounds_like**
- Amy Winehouse: Pitchfork, "Adele's voice, which sounds like Amy Winehouse mashed with opera"; "the similarities to Winehouse ... the gritty, growled vocals ... over jazzy piano".
- Dusty Springfield: NPR places her in the "From Dusty Springfield to Amy Winehouse" line of British singers of American soul; Guardian, "the immediately familiar, Dusty-does-Dulwich sound of I'll Be Waiting".
- Sufjan Stevens [1/11]: Guardian, "a Sufjanesque takedown of the Cure's Lovesong".
- Aretha Franklin [1/11]: Paste, "Aretha-esque back-up vocalists" on "Rolling in the Deep".

**influenced_by**
- Clayton-Lea interview: Adele says "My primary inspirations for this record were the likes of Etta James, Carole King, Roberta Flack". The context is 21 ("As on 19, the songs on 21 ring true"). The original outlet is probably the Irish Times; it was read on the author's own site.
- Illinois Entertainer: "So I got into Garth Brooks, Loretta Lynn, early Dolly Parton, The Carter Family, Johnny Cash stuff", given as one of "two key factors" in the making of 21.
- Taste of Country quotes Adele naming "the Steel Drivers, early Dolly Parton and the Carter Family" as inspiration found on tour.
- Not added: Wanda Jackson (not found in an opened source) and Mumford & Sons (the writer calls them influential on her career, not on the album). The Cure is a cover, so not an influence.

**landmark 1:** Pitchfork, the album granted her "entrée into the pantheon of iconic pop vocalists"; "21 would loom over her for the rest of her career".

**confidence:** high.

---

## sza-ctrl: Ctrl (2017)

**Main sources**
- Pitchfork, Claire Lobenfeld, 13 Jun 2017, 8.4: https://pitchfork.com/reviews/albums/sza-ctrl/
- Exclaim!, Ryan B. Patrick, 13 Jun 2017, 9: https://exclaim.ca/music/article/sza-ctrl
- NME, Jamie Milton, 15 Jun 2017: https://www.nme.com/reviews/sza-ctrl-album-review-2088587
- Paste, Nastia Voynovskaya: https://www.pastemagazine.com/articles/2017/06/sza-ctrl-review.html
- Rolling Stone interview, Katherine St. Asaph, 14 Jun 2017: https://www.rollingstone.com/music/features/sza-breakout-rb-star-conquers-self-doubt-and-takes-ctrl-w487994
- RS 100 Best Debut Albums (#28): https://www.rollingstone.com/music/music-lists/100-best-debut-albums-of-all-time-143608/sza-cntrl-2018-1376483/
- RS 500 Greatest Albums 2020 (#472): https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/

**genres**
- **rnb:** all sources.
- **neosoul:** Exclaim!, "'new neo-soul' personified"; Pitchfork, "indie rock and neo-soul flourishes".
- **alternativernb:** Pitchfork, "the undefinable 'alt-R&B' tag".
- **indierock:** Pitchfork, "adds indie rock ... flourishes"; Paste, "elements of indie rock, R&B and hip-hop".
- **hiphop / pop / electronic:** Exclaim!, "drawing on pop, hip-hop and electronic genre influences".
- **soul:** Exclaim!, "notes of straight-up soul".
- **jazz:** Exclaim!, "'Pretty Little Birds' ... an electronic jazz groove" (1 track); Paste, "a robust timbre steeped in jazz and soul".
- **trap:** Pitchfork, "trap percussion, like on 'Garden'" (1 track).
- **triphop:** Exclaim!, "'Anything' trucks on a trip-hop futurism approach" (1 track).
- **boombap:** Exclaim!, "over a dank boom-bap beat" ("Doves in the Wind", 1 track).

**Scales**
- **energy 2, tempo 1:** RS debut list, "spacey, low-key songs that took their sweet, slow time"; Pitchfork, "woozy", "cottony production".
- **electronic 3:** hip-hop production and electronic influences (Exclaim!) against guitar-led tracks ("Supermodel", "Prom").
- **mood 2:** Pitchfork, "a tone of both freedom and a muted sadness"; "heartbreaking 'Normal Girl'". Paste, "as intimate and fun as a slumber party".
- **theatrical 2:** RS list, "conversational intimacy".
- **experimental 3:** Pitchfork, "constantly tests the borders of the genre", "pushes against the borders of R&B"; Paste, "genre-bending".
- **polish 3:** Pitchfork, "opulent, raw".
- **groove 2.**

**voice soft|raspy:** Pitchfork, "her honeyed voice". SZA herself (Rolling Stone): "When I sing full voice ... I get nasal and abrasive and a little scratchy".

**instruments**
- electricguitar: Pitchfork, "a lonely electric guitar riff on ... 'Supermodel'".
- guitar: NME, "The Police-like muted guitars" ("Prom").
- synth: SZA in Rolling Stone, "Then we'd listen to synths. It was an analog process".
- bass: Peter Cottontale, Discogs.
- drums: Stix, additional drums, Discogs.
- strings: Macie Stewart, Discogs.

**production**
- sampling: Exclaim!, "'Broken Clocks' cribs from River Tiber and Daniel Caesar's 'West'".

**lyrics love|heartbreak|sensuality|introspection|identity:** Pitchfork, "CTRL is about sexual freedom while still having your hunger for intimacy be taken seriously"; "the existential worry of youthful aging"; Exclaim!, "knowing your value post-breakup".

**producers:** Discogs (standard edition). Carter Lang, Scum, ThankGod4Cody, Cam O'bi, Bēkon, Prophit, Josef Leimberg. Additional-production credits are dropped: Craig Balmoris, Frank Dukes, The Donuts. Wikipedia also lists Tyler, the Creator, Michael Uzowuru, The Antydote and others; these were not in the standard-edition credits opened, so they were left out.

**sounds_like**
- Amy Winehouse / Billie Holiday: Paste, "a robust timbre steeped in jazz and soul, evoking Amy Winehouse and earlier predecessors like Billie Holiday".
- The Police [1/14]: NME, "built from The Police-like muted guitars" ("Prom").
- Jimmy Eat World [1/14]: Pitchfork, "'Supermodel' ... more in line with old Jimmy Eat World".
- Not used: Pitchfork's "The Forbidden Love EP-era" for "Prom", because the artist could not be confirmed.

**influenced_by**
- Exclaim!: "SZA herself cites the music of Sade, Lauryn Hill, Purity Ring, Yuki, Björk and Billie Holiday as touchstones".
- Pitchfork: "SZA cites artists like Jamiroquai and Björk as influences".
- Rolling Stone, SZA on making Ctrl: "Listening to Alabama Shakes made me less self-conscious about my voice ... Same with Amy Winehouse ... Listening to Modest Mouse, listening to Tame Impala, listening to Brazilian jazz, listening to a lot of Wu-Tang, listening to old Jay Z, listening to The Chronic" (Dr. Dre).
- On the "Nineties theme in tracks like 'Drew Barrymore' ... 'Go Gina,' or the instrumental to 'Prom'": "We love Limp Bizkit! ... And fucking Gorillaz and Korn ... a whole day listening to Nirvana". These are marked [3/14].

**landmark 1:** RS 500 (#472) and RS 100 Best Debuts (#28); Okayplayer, "a peerless piece of work".

**confidence:** high.

---

## weeknd-afterhours: After Hours (2020)

**Main sources**
- Pitchfork, Isabelia Herrera, 24 Mar 2020, 7.9: https://pitchfork.com/reviews/albums/the-weeknd-after-hours/
- Guardian, Michael Cragg, 20 Mar 2020: https://www.theguardian.com/music/2020/mar/20/the-weeknd-after-hours-album-review-abel-tesfaye
- Rolling Stone, Jon Dolan: https://www.rollingstone.com/music/music-album-reviews/the-weeknd-after-hours-971129/
- Variety review / best of 2020 #4: https://variety.com/lists/best-albums-2020-taylor-swift-dua-lipa-weeknd-phoebe-bridgers/
- Independent, Roisin O'Connor: https://www.independent.co.uk/arts-entertainment/music/reviews/the-weeknd-album-review-after-hours-stream-tracklist-max-martin-features-lyrics-a9413706.html
- NME, Luke Morgan Britton: https://www.nme.com/reviews/album/the-weeknd-after-hours-review-his-most-all-encompassing-record-to-date-is-also-an-existential-quandary-2632591
- Consequence, Candace McDuffie: https://consequence.net/2020/03/album-review-the-weeknd-after-hours/
- PopMatters: https://www.popmatters.com/weeknd-after-hours-review-2645576658.html
- Exclaim!, Jacob Carey: https://exclaim.ca/music/article/the_weeknd-after_hours
- Variety track-by-track interview, Jem Aswad, 8 Apr 2020: https://variety.com/2020/music/news/the-weeknd-after-hours-track-by-track-1234574136/

**genres**
- **synthpop:** Guardian, "the glorious 80s synthpop explosion of lead single Blinding Lights"; Pitchfork, "He draws on synth-pop nostalgia"; Consequence, "he can completely devour the genre of synth-pop".
- **newwave / dreampop / rnb:** Pitchfork, "his most satisfying collision of new wave, dream pop, and R&B"; PopMatters, "new wave vibes".
- **synthwave:** the Weeknd (Variety), "I was finding that alt-rock synthwave character".
- **pop:** Guardian, "Max Martin-assisted bangers"; Pitchfork, "a mainstream pop format".
- **drumandbass:** Guardian, "(on Too Late and Hardest to Love), splashes of drum'n'bass and UK garage"; Rolling Stone, "a Nineties-evoking drum 'n' bass feel".
- **ukgarage:** the same Guardian quote; Pitchfork, "mutate UK garage's syncopated kicks".
- **jungle:** Pitchfork, "'Hardest to Love' couples a sharp jungle break" (1 track).
- **powerballad:** Rolling Stone, "Repeat After Me (Interlude)" is "a wounded power ballad".
- **ballad:** Guardian, "the Phil Collins-esque ballad Scared to Live".

**Scales**
- **energy 3:** Variety, "hard beats (which are seldom danceable)"; ballads alongside "Blinding Lights".
- **electronic 4:** Variety, "ultra-cinematic keyboards, pulsating sub-bass, hard beats, '80s synthesizer flourishes"; also sax, guitars and horns.
- **mood 2:** Independent, "moody introspection"; Pitchfork, "tortured, empty melancholy"; but "In Your Eyes" is "jaunty" with a "euphoric, joyous" sax solo (NME).
- **theatrical 4:** Pitchfork, "an irresistible, cinematic narrative"; Guardian, "the widescreen expanse of the excellent Faith".
- **experimental 2:** Consequence, "sonic fearlessness"; Pitchfork, "There is not a single song on the album that colors outside the lines".
- **polish 5:** Max Martin productions; NME, "glossy, cinematic feel".
- **tempo 3:** mixed.
- **groove 2:** Independent, "After Hours abandons the danceability of its predecessor"; but "Heartless ... makes sure there's a club banger" (NME).

**voice soft|clear:** Variety, "his high, angelic voice"; Guardian, "his best choirboy voice"; Rolling Stone, "his signature feathery falsetto athleticism".

**production**
- falsetto: Rolling Stone and Independent ("that piercing falsetto").
- autotune: PopMatters, "feathery Auto-Tuned melodies".
- vocoder: Pitchfork, "psychedelic wooshes and Vocoder dubs" ("Repeat After Me").
- sampling: Guardian, "a hilarious sample from Elton John's Your Song".
- hornarrangements: Discogs, Nils-Petter Ankarblom and Mattias Bylund, "Arranged By [Horns]".
- programming: Discogs, "Programmed By" on most tracks.
- heavyreverb: Variety, "caverns of echo"; Consequence, "saturated in echoey chambers". Reverb is inferred from "echo"; this is the least certain production token.

**instruments:** Discogs credits keyboards (most producers), guitar (Rickard Göransson, Max Grahn, Michael McTaggart, Patrick Greenaway), bass, drums, alto and tenor sax, trumpet, trombone and percussion. "synth" comes from Variety and Exclaim ("'80s synth, occasional saxophone").

**lyrics heartbreak|introspection|sensuality|party|love:** Exclaim!, "themes of sex, infidelity, substance abuse"; Pitchfork, "bacchanalian excess, loneliness as rapture"; NME, "full of probing self-reflection"; Independent, "a tinge of remorse".

**producers:** Discogs vinyl credits. Max Martin, Oscar Holter, Illangelo, DaHeala (Jason Quenneville), Metro Boomin, Ricky Reed, Oneohtrix Point Never, Kevin Parker, Notinbed, Prince 85, and Frank Dukes (credited co-producer). Dropped: the Weeknd (artist), and Mario Winans and Nate Mercereau (additional production).

**sounds_like**
- Depeche Mode / The Human League [1/14]: Rolling Stone, "Blinding Lights", "evoking Depeche Mode and the Human League".
- Wham! [1/14]: Pitchfork, "the plinking synths and slick hand-claps of 'Save Your Tears' evoke a long-lost Wham! track".
- Limahl [1/14]: Guardian, "The featherlight, Limahl-esque Save Your Tears".
- Phil Collins [1/14]: Guardian, "the Phil Collins-esque ballad Scared to Live".
- a-ha (Hunting High and Low, which contains "Take On Me") [1/14]: PopMatters, "a nod to a-ha's 'Take on Me'".
- Daft Punk (Homework) [1/14]: Independent, "a moody bassline that recalls Daft Punk's Homework".
- Not used: OPN's *R Plus Seven* (Pitchfork), because OPN is a producer here; The Smiths and Prince's "Purple Rain", because those are lyric references.

**influenced_by** (all from the Variety track-by-track)
- "Kraftwerk was a huuuge influence on this album, like 'Man Machine' — Egyptian Lover, Human League, Strawberry Switchblade, lots of electronic stuff… and Rick Astley!" Rick Astley is said with a laugh but sits in the same list; the owner may drop it.
- "being an '80s connoisseur and hearing the Pretenders or Roxy Music or Hall & Oates. I was finding that alt-rock synthwave character".
- Roxy Music's "More Than This" (on Avalon): "The reason I keep using it as a reference on this album".
- "I was listening to things like Roxy and A-Ha" for "In Your Eyes" and "Blinding Lights": a-ha [2/14].
- "Alone Again": "it's like some Cocteau Twins sh–" [1/14].

**landmark 1:** Variety, "his most fully realized album yet"; Pitchfork, "finally delivers on his long-running vision".

**confidence:** high.

---

## Reception and legacy reasoning
See `reception.csv` and `legacy.csv`.

- Mainstream is 3 for all five albums. They are artist-led records. 21 and After Hours lean on hitmakers but critics don't call them formulaic. 19 is called "safe/formulaic" by NME, but it is spare and artist-written.
- No legacy row for 19 or After Hours, because no professional source said they influenced later music.
- The 21 legacy value (2) rests on a hedged Pitchfork line. It could be dropped.

