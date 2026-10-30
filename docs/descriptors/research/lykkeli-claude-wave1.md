# Claude research notes (Oct 2026, wave 1)

# Wave 1 / D: evidence notes

Five albums: maneskin-teatrodiravoli, lanadelrey-normanfuckingrockwell, florence-ceremonials, lykkeli-woundedrhymes, muse-drones.
Titles and years match `src/data/catalog.ts` exactly (Måneskin title uses the curly apostrophe: `Teatro d’ira: Vol. I`).
All quotes below come from pages I opened (curl text dumps). No Wikipedia is cited: I used it only to find review and chart URLs.
Credits (producers, instruments) come from MusicBrainz release credits, read through the MusicBrainz web-service API (the HTML site has a browser check).

**Couldn't open (blocked, paywalled or 403):** Metacritic (every album; so no Metascores are cited), AllMusic (every album), Rockol review of Teatro d'ira (403; a search snippet said 8.5/10, **not used**), Slant (Wounded Rhymes, NFR), Spin, EW (402), NYT (403), LA Times, Telegraph, Under the Radar, musicOMH, Discogs, Album of the Year. Where I give AllMusic/RS/Guardian star scores for Wounded Rhymes and Drones, they come from the MusicCritic aggregator pages, which reprint the scores with an excerpt and the original link (marked as such in reception.csv).

---

## maneskin-teatrodiravoli: Måneskin, Teatro d’ira: Vol. I (2021)

Sources opened:
- OndaRock, Antonio Silvestri, 19/03/2021, vote 5 (genre header "pop, rock") https://www.ondarock.it/recensioni/2021-maneskin-teatrodiravoli/
- Rolling Stone Italia, Claudio Todesco, "il meglio e il peggio di 'Teatro d'ira Vol. 1'" https://www.rollingstone.it/musica/storie-musica/maneskin-il-meglio-e-il-peggio-di-teatro-dira-vol-1/555136/
- Rolling Stone Italia interview "Domani spacchiamo tutto" https://www.rollingstone.it/musica/interviste-musica/maneskin-domani-spacchiamo-tutto/553278/
- TV Sorrisi e Canzoni, "Non siamo i Led Zeppelin… ma dateci tempo!" https://www.sorrisi.com/musica/album/maneskin-non-siamo-i-led-zeppelin-ma-dateci-tempo/
- Panorama, "Maneskin, Teatro d'ira: il rock torna in classifica" https://www.panorama.it/lifestyle/maneskin-recensione-teatro-dira
- Sony Music Europe news https://www.sonymusic.eu/?p=25949
- Clash, "In Conversation: Måneskin" https://www.clashmusic.com/?p=20701

Cells:
- genres `rock|pop|hardrock|powerballad`: OndaRock header genres "pop, rock"; Clash "an Italian rock group"; OndaRock on I Wanna Be Your Slave (the big international single) "un movimentato hard-rock da ballo"; Vent'anni "una dolente power ballad" (OndaRock), "la rock ballad 'Vent'anni'" (Sorrisi). Zitti e buoni "rievoca il rock novantiano, urlato e assordante" (OndaRock).
- energy 4: OndaRock "urlato e assordante", "fragoroso… riff di chitarra", "mettere il volume al massimo"; but the album alternates "graffi e carezze" (two ballads), so 4 not 5.
- electronic 1: RS Italia "sfogo generazionale espresso con chitarra, basso e batteria"; Panorama "Niente autotune, basi musicali di plastica". A guitar band, no keyboards documented.
- mood 2: theme is "ira catartica" (Sorrisi, Damiano); OndaRock "dolenti sfumature patetiche".
- theatrical 4: RS Italia "Quanta enfasi", "rabbia e malessere sono teatralizzati", "se ne fregano di risultare sopra le righe"; title concept "contrasto tra teatro e ira" (Sorrisi).
- experimental 1: OndaRock "ancora molto formulaico"; RS Italia "Le canzoni sembrano la copia di mille riassunti".
- polish 3: RS Italia "suonato e prodotto (con Fabrizio Ferraguzzo) bene. Trasmette il feeling di un gruppo che suona dal vivo"; band: "suono crudo e contemporaneo" (Sorrisi). Normal studio, raw live feel.
- tempo 3, groove 2: hard-rock "da ballo" and "anima da club inglese" on I Wanna Be Your Slave (OndaRock; Panorama quoting the band), the rest rock and ballads.
- voice `powerful`: RS Italia: Damiano "canta ogni parola come se fosse l'ultima della sua vita"; OndaRock "irrequieto e talentuoso frontman". No source calls the voice raspy, so not used. (Lowest-confidence cell of this row.)
- instruments `electricguitar|bass|drums`: RS Italia "chitarra, basso e batteria"; OndaRock "fanno ruggire chitarre".
- production `liverecording`: Panorama "registrato in presa diretta al Mulino Recording Studio di Acquapendente (VT) guardando alle atmosfere analogiche degli album 70's"; Thomas (RS Italia interview) "Lo abbiamo fatto in presa diretta… Una cosa molto 70s". The band says "Volevamo sentire gli strumenti in maniera analogica" (Sorrisi) but no source says analog tape, so `analogtape` is not used.
- lyrics: Clash "explores the dynamic between oppressors and the oppressed; encouraging those to rebel against and break away from any type of conformity" (social, identity); Panorama, band on I Wanna Be Your Slave: "raccontare la sessualità in tutte le sue sfaccettature" (sensuality); Coraline "il racconto onirico di una bambina prodigio" (storytelling); In nome del padre "come il successo abbia influito sulla nostra vita" (introspection); RS Italia "diversità, fragilità, fobie, sesso, voglia di rivalsa".
- language `it|en`: Sorrisi "un mix di brani in inglese e in italiano"; RS Italia: English "in un paio di pezzi".
- producers: Fabrizio Ferraguzzo (RS Italia).
- sounds_like: OndaRock: Vent'anni "deve qualcosa al suono emotivo e maestoso dei Metallica più ruffiani" → `Metallica [1/8]`; "'Coraline', a rievocare la struttura e il climax di 'Stairway To Heaven'" → `Led Zeppelin (Led Zeppelin IV) [1/8]`. Eight tracks ("appena otto brani"). Not used: RS Italia's "pare di sentire Emma" (it is about Damiano's oversinging, a delivery comparison, not the record's sound).
- influenced_by: empty. The band only cites a general "analog vibe of '70s bootlegs" (Sony) and "Non siamo i Led Zeppelin… Non vogliamo imitare nessuno" (Sorrisi), which rejects the comparison. Clash calls Harry Styles "one of Måneskin's biggest inspirations" but not for this album, so not used.
- landmark 0: no source calls it their defining album.
- Reception: importance 5 (Clash: album and singles charted across Europe, I Wanna Be Your Slave "the first song by an Italian rock band to reach the Top 10 in the UK"; Sony: #1 in Italy, #6 Spotify global album debuts); acclaim 2 (OndaRock 5/10 "senza particolari entusiasmi"; RS Italia "Non sarà un gran disco", with pluses; Rockol could not be opened, and a positive Rockol score would raise this to 3); mainstream 3 (talent-show band, but "i Måneskin hanno composto tutto da soli", "Non è uno di quei dischi da talent assemblati alla bell'e meglio", RS Italia; Clash: all lyrics by the four).

## lanadelrey-normanfuckingrockwell: Lana Del Rey, Norman Fucking Rockwell! (2019)

Sources opened:
- Pitchfork, Jenn Pelly, Sep 3 2019, 9.4, Best New Music https://pitchfork.com/reviews/albums/lana-del-rey-norman-fucking-rockwell/
- Rolling Stone, Rob Sheffield https://www.rollingstone.com/music/music-album-reviews/lana-del-reys-norman-fucking-rockwell-878534/
- The Observer/Guardian, Kitty Empire https://www.theguardian.com/music/2019/aug/31/lana-del-rey-norman-fucking-rockwell-review-venice-bitch-hope-the-greatest
- NME https://www.nme.com/reviews/lana-del-rey-norman-fucking-rockwell-review-2543488
- Consequence https://consequence.net/2019/09/album-review-lana-del-rey-norman-rockwell/
- Vulture https://www.vulture.com/2019/08/album-review-lana-del-rey-norman-fucking-rockwell.html
- The Independent https://www.independent.co.uk/arts-entertainment/music/reviews/lana-del-rey-review-norman-fucking-rockwell-album-tracklist-venice-beach-mariners-apartment-complex-a9083666.html
- The A.V. Club https://www.avclub.com/lana-del-rey-goes-confessional-on-the-meandering-norman-1837833339
- FLOOD http://floodmagazine.com/67474/lana-del-rey-norman-fucking-rockwell/
- Billboard cover story 2019 https://www.billboard.com/music/pop/lana-del-rey-billboard-cover-story-2019-8527901/
- Lists: RS 500 https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/lana-del-rey-norman-fucking-rockwell-4-1062912/ ; RS best of 2010s https://www.rollingstone.com/music/music-lists/best-albums-2010s-ranked-913997/lana-del-rey-norman-fucking-rockwell-2-917452/ ; Pitchfork 200 best of 2010s (#19) https://pitchfork.com/features/lists-and-guides/the-200-best-albums-of-the-2010s/
- Credits: MusicBrainz release 330994f3-f7b1-44f6-aeca-15a228f29b51 (https://musicbrainz.org/release/330994f3-f7b1-44f6-aeca-15a228f29b51)

Cells:
- genres: RS "her Laurel Canyon 1970s soft-rock fantasies" and FLOOD "a mellow soft rock sound" (softrock); Vulture "an hour of contemplative folk-rock tunes and lovelorn piano ballads" (folkrock, ballad); Pitchfork "baroque piano ballads and dazzling folk", AV Club "gentle folk haze" and Lana herself: "A folk record with a little surf twist" (Billboard) (folk); Vulture: Venice Bitch "a nearly ten-minute psychedelic rock workout" (psychedelicrock); AV Club "her version of a confessional singer-songwriter record" (songwriter); CoS "hip-hop-inflected torch-song wave… still surfing that swell", RS "torch ballads" (torchsong); Independent "between the minimalist trip-hop of Del Rey's early days, and the scuzzy desert rock" (triphop, desertrock); CoS "expansive psych-pop lullabies" (psychedelicpop); Pitchfork Venice Bitch "a neo-psychedelic ballad" (neopsychedelia); Pitchfork "the easy pop-rock breeze of Carole King" (poprock); RS "she's finally made her pop classic" (pop). Not mapped: Pitchfork's "baroque piano ballads" (not "baroque pop"), "surf twist" (no exact token), RS "G-funk synths" (instrument colour on one song).
- energy 1, tempo 2, groove 1: CoS "NFR! is aggressively mid-tempo start to finish"; AV Club "one of Del Rey's sleepiest albums yet"; Independent "sultry and soporific"; RS "the languid groove".
- electronic 2: CoS "gently picked acoustic guitar, steady piano, and tasteful strings"; AV Club "crisp, unadorned instrumentation: wistful piano, light horns and string accents"; some synths ("long-haired analogue synth territory", Guardian; "washes of keyboards").
- mood 1: Pitchfork "the sound of a heart shattering and reforming"; "despondency of existence"; hope only at the close.
- theatrical 2: Pitchfork "minimalism… it sounds like Lana alone", "for all the spectral harmonies and cinematic splendor"; AV Club "confessional".
- experimental 2: classic songwriting (Brill Building, Laurel Canyon per Pitchfork) with one long "psychedelic prog freak-out" (AV Club, Venice Bitch).
- polish 3: Pitchfork "You can hear the room everywhere"; arrangements "lush as ever, yet less muddled" (CoS).
- voice `clear`: CoS "her voice has rarely sounded so sharp, central, and clear". (Pitchfork's "piercing falsetto" is on one song only; not used.)
- instruments (MusicBrainz credits + reviews): piano (Antonoff on 12 tracks; "3am bar pianos", Guardian), acoustic/electric guitar, strings (cello, violin; "Disney strings", Guardian), keyboards, synth, drums, saxophone, harp (credits; Independent "the piano, harp, and Guns N' Roses guitar solos are many"), mellotron, flute, bells (Guardian: How to Disappear "this waltz with Christmas bells").
- production `roomambience|stringarrangements`: engineer Laura Sisk (Billboard): "how much of the energy of the room we're able to record… We often don't use a vocal booth"; Pitchfork "You can hear the room everywhere"; CoS "tasteful strings in arrangements".
- lyrics: love/heartbreak (Pitchfork "troubled people attempting to navigate the mess of love"), nostalgia (Independent "a sound rooted in nostalgia"), social (Pitchfork: reviving and exposing American myths, "our crumbling world"), identity, irony (RS "lethally funny"; CoS "gallows humor"), introspection, storytelling (Pitchfork "exquisitely narrated songs").
- producers (MusicBrainz track credits; the artist's own credit dropped, "additional" producers Mighty Mike and Nowels-on-13 dropped): Jack Antonoff (11 tracks), Rick Nowels (2), Zachary Dawes (California), Andrew Watt and Happy Perez (Doin' Time), Dean Reid and Kieron Menzies (The Next Best American Record). Billboard: Antonoff "co-producing almost the whole project, alongside longtime collaborator Rick Nowels".
- sounds_like: Pitchfork "The languor of Mazzy Star and downbeat skitter of Portishead meet the easy pop-rock breeze of Carole King on 1971's Tapestry, or the searching resilience of Joni Mitchell on 1972's For the Roses"; CoS "the connective tissue to past collaborators Stevie Nicks and Cat Power, as well as spiritual links to artists like Laura Nyro, SZA, and H.E.R." (SZA, H.E.R. left out: "spiritual" link, not sound); Independent "Guns N' Roses guitar solos"; AV Club: the closer "conjures both the cadences of Leonard Cohen's 'Famous Blue Raincoat' and Cat Power's most intimate moments" → Leonard Cohen (Songs of Love and Hate) [1/14]; Guardian: Cinnamon Girl's coda "an electronic-tinged echo of Young's famous meandering" → Neil Young [1/14]; Independent: Love Song "sounds like an alternative universe 'Wonderwall'" → Oasis [1/14]; Vulture: Venice Bitch like "the Doors' 'When the Music's Over'" → The Doors (Strange Days) [1/14]; FLOOD: "recalling The Beach Boys' latter period" on The Greatest → The Beach Boys [1/14]. 14 tracks. Lyric references (Eagles, CSN, Led Zeppelin's Houses of the Holy, Bowie) are not sound comparisons: not used.
- influenced_by: empty. Lana only describes the record ("folk record with a little surf twist"); no artist named as an influence in sources I opened.
- landmark 1: RS 500 Greatest Albums; RS "her fifth and finest album… she's finally made her pop classic"; Pitchfork "the apotheosis of Lana Del Rey".
- Reception 5/5/3: see reception.csv. Mainstream 3 (auteur record on a major; RS: Antonoff "adapts to her musical world, barely leaving any of his own fingerprints"; Guardian "the music barely bothers to present itself as pop").
- Legacy: none (no professional source found saying NFR influenced later music; the Billboard legacy quotes in the repo are about Born to Die).

## florence-ceremonials: Florence + The Machine, Ceremonials (2011)

Sources opened:
- Pitchfork, Ryan Dombal, 6.0 https://pitchfork.com/reviews/albums/16004-ceremonials/
- Rolling Stone, Jody Rosen https://www.rollingstone.com/music/albumreviews/ceremonials-20111101
- The Guardian, Michael Hann https://www.theguardian.com/music/2011/oct/27/florence-and-the-machine-ceremonials-review
- NME http://www.nme.com/reviews/florence-and-the-machine/12419
- PopMatters http://www.popmatters.com/review/150687-florence-and-the-machine-ceremonials/
- Clash http://www.clashmusic.com/reviews/florence-and-the-machine-ceremonials
- Drowned in Sound http://drownedinsound.com/releases/16620/reviews/4143919
- Cokemachineglow http://cokemachineglow.com/records/florenceandthemachine-ceremonials-2011/
- The Independent https://www.independent.co.uk/arts-entertainment/music/reviews/album-florence--the-machine-ceremonials-island-2376712.html
- Billboard critics' 10 best albums of 2011 (#8) http://www.billboard.com/articles/list/464746/critics-picks-10-best-albums-of-2011
- TIME Top 10 Albums of 2011 (#2) https://content.time.com/time/specials/packages/article/0,28804,2101344_2101364_2101582,00.html
- Rolling Stone 50 Best Albums of 2011 https://www.rollingstone.com/music/lists/50-best-albums-of-2011-20111207/florence-and-the-machine-ceremonials-19691231
- Music Week UK chart analysis http://www.musicweek.com/news/read/uk-album-chart-analysis-florences-ceremonials-sells-94k/047235
- Interviews: Irish Times "Behind the machine" https://www.irishtimes.com/culture/music/rock-pop/behind-the-machine-1.633355 ; RTÉ https://www.rte.ie/entertainment/2011/1114/433631-florenceandthemachine ; Alan Cross, A Journal of Musical Things http://ajournalofmusicalthings.com/florence-and-the-machines-ceremonials-an-exercise-in-big-soul-and-big-drums/
- Credits: MusicBrainz release d87718e2-0e68-44c9-8ac9-e6e793f91534

Cells:
- genres: NME "a near-great pop record" (pop); Billboard "the British chamber-pop group" (chamberpop); RS "a ballad somewhere between classic soul and midnight-on-the-moors English art rock" (soul, artrock), "nods to goth and gospel", "Celtic melodies" (gospel, celtic); PopMatters "Welch's sheer art-pop hubris", "soulful R&B and electro-pop", "a surprise plunge into glammy Britpop" (artpop, rnb, electropop, britpop); NME "a distinct R&B flavour"; Clash "the power balladry of first single 'Shake It Out'" (powerballad, lead single); DiS "a mainstream act taking a leftfield approach to modern indie-pop" (indiepop); CMG Lover to Lover "a delicious Motown strut", RS list "the arena-scale Motown of 'Lover to Lover'" (motown); Spectrum: DiS "a fantastic house-beat kick", Independent "the Krautrock-disco motorik of 'Spectrum'" (house, krautrock, disco, tail). Not mapped: CMG "baroque power pop" (no exact token; neither baroquepop nor powerpop alone); Welch's "chamber soul" is reported only on Wikipedia from a Guardian interview I could not find, so not used.
- energy 4: NME "everything is (of course) bigger, grander, more dramatic"; Pitchfork "endless crescendos"; Clash: some songs "take the energy down a few notches".
- electronic 2: Clash "string arrangements, subtle electro touches, and gospel choirs"; DiS "doused in more synthesiser".
- mood 2: Guardian "a gothic fever dream of romance"; TIME "her tales of heartache can be oddly uplifting".
- theatrical 5: NME "this is an album that's absorbed every kitchen sink"; RS "turbulent ballads… banshee wails", "melodrama"; Independent "dramatic and really huge and kind of spooky" (Welch's aim).
- experimental 2: Pitchfork "the heaven's-crescendo formula"; Clash "The only real criticism… relentlessly, Florence".
- polish 5: CMG "a sumptuously produced album"; NME "grandiose production"; Pitchfork "the album whitewashes at every turn".
- tempo 3, groove 2: PopMatters on What the Water Gave Me "keeps the sound dancefloor-ready"; Spectrum house beat; mostly anthems and ballads.
- voice `powerful`: Pitchfork "That Voice… blaring"; RS "a vocalist with extra horsepower"; TIME "Welch's full-bodied wails".
- instruments: credits (harp on all 12 tracks by Tom Moth, drums, guitar, bass, keyboards, piano, strings: violin/viola/cello, celesta, synth, percussion, Hammond and reed organ); CMG "insistent piano and church organ, pounding kettle drums, harps" (timpani, organ); DiS "rumbling toms, swishing chimes, plucked harps" (chimes).
- production `stringarrangements|layeredvocals`: string arrangements credited to Sally Herbert (MusicBrainz), Clash "augment it with string arrangements"; CMG "an oft-used multi-tracking vocal effect where a multitude of Florences sing a chorus line".
- lyrics: Billboard "a relatable album about love… the fine line between Christian spirituality and otherworldly voodoo"; RS "Shake It Out, a treatise on heartbreak and spiritual rebirth"; RTÉ: songs on death, ghosts, Joan of Arc (storytelling); Irish Times/RTÉ grandmother visitation (introspection).
- producers: Paul Epworth on every track (MusicBrainz); Irish Times "Welch brought Paul Epworth… on board to oversee the entire album, which was recorded in the plush surrounds of Abbey Road".
- sounds_like: Billboard "channeling avant-pop luminaries like Annie Lennox and Kate Bush"; CMG "she, actually, sonically hews closer to Lennox… Think of Ceremonials as a 21st century update on the latter's Diva (1992)" → Annie Lennox (Diva); RS "drawing on a tradition… from Kate Bush and Siouxsie and the Banshees to PJ Harvey", "The rock band most forcefully evoked on Ceremonials is… U2"; Guardian "the shadow of Siouxsie and the Banshees crops up repeatedly", Never Let Me Go like "the This Mortal Coil songs fronted by Liz Fraser" [1/12]; CMG What the Water Gave Me "mystic soul that out-Toris Tori Amos" [1/12], Shake It Out "resembling the best bits of Arcade Fire's Neon Bible" [1/12]; PopMatters Breaking Down "something you'd expect from the mid-'90s heyday of Pulp and Suede" [1/12 each]; RS Lover to Lover "Adele, anyone?" [1/12]; Pitchfork Breaking Down "could be an outtake from MGMT's career-stalling Congratulations" [1/12]; NME Spectrum "like having your eyes angrily jabbed out by an irate Beyoncé" [1/12]; DiS Leave My Body "recalls Like A Prayer era Madonna channelling Peter Gabriel" [1/12 each]. 12 tracks (standard edition). Not used: Pitchfork's the xx comparison (bonus track only); DiS "Stock/Aitken/Waterman simplicity" (producers, not an artist).
- influenced_by: empty. Welch: the album "was influenced by hymns and poems and sounds of church bells" (Alan Cross), no artists.
- landmark 0: well listed (TIME #2 of 2011) but no source calls it her defining album.
- Reception 4/4/3: UK #1 debut (Music Week), year-end lists (TIME #2, Billboard #8, RS top 50), but mixed reviews (Pitchfork 6.0, Guardian "it never really satsifies" [sic], DiS "a regression"). Mainstream 3: NME, Welch refused "a phalanx of exorbitantly priced R&B producers" in the US; Irish Times "I really need to stay here and write with the people I started off with".

## lykkeli-woundedrhymes: Lykke Li, Wounded Rhymes (2011)

Sources opened:
- Pitchfork, Stephen M. Deusner, 8.3 https://pitchfork.com/reviews/albums/15167-wounded-rhymes/
- Rolling Stone, Jody Rosen http://www.rollingstone.com/music/albumreviews/wounded-rhymes-20110301
- The Guardian, Michael Cragg https://www.theguardian.com/music/2011/feb/24/lykke-li-wounded-rhymes-review
- BBC Music, Lou Thomas https://www.bbc.co.uk/music/reviews/8cx2/
- Consequence of Sound https://consequence.net/2011/02/album-review-lykke-li-wounded-rhymes/
- Paste https://www.pastemagazine.com/articles/2011/02/lykke-li-wounded-rhymes.html
- Tiny Mix Tapes https://www.tinymixtapes.com/music-review/lykke-li-wounded-rhymes
- The Line of Best Fit https://www.thelineofbestfit.com/reviews/albums/lykke-li-wounded-rhymes-48111
- MusicCritic aggregator (score list + excerpts of EW, Slant, AllMusic, Austin Chronicle) https://musiccritic.com/lykke-li/wounded-rhymes
- Interviews: Clash "Lykke Minded" https://www.clashmusic.com/?p=208073 ; NPR transcript https://www.npr.org/transcripts/134661077 ; 7x7 https://www.7x7.com/amp/10-questions-for-swedish-pop-songstress-lykke-li-1781352818
- Warner Music press release (10th anniversary) https://mediarhino.wmg-gardens.com/press-release/lykke-li-announces-10th-anniversary-deluxe-editions-wounded-rhymes
- Credits: MusicBrainz release 4c837cd6-4e42-4805-83e6-c69cb0f70477

Cells:
- genres: CoS "superb pop songs"; Paste "the Swedish princess of off-beat art-pop" (artpop); TMT "committing to a soulful throwback sound… This is soul music" (soul), "the gospel harmonies" on Silent My Song (gospel); Slant "still an expert dabbler in gravelly electro-pop" (electropop); RS "torchy love songs", "girl-group-style romantic melodrama", "Li dips into garage rock and wintry folk" (torchsong, girlgrouppop, garagerock, folk); BBC "the doo-wop lament of Unrequited Love" (doowop). Not mapped: RS "weird-pop".
- energy 3: anthems ("Youth Knows No Pain", "Get Some") next to stripped ballads (Pitchfork "Audacious anthems jostle next to heartbreak ballads").
- electronic 2: Austin Chronicle (via MusicCritic) "rich electronic and organic instrumentation"; Lykke Li (NPR): "real instruments, live takes… there were Hammonds and… drummers".
- mood 1: Guardian "the bleak post-breakup laments"; Pitchfork "depressive without being depressing, dark without being bleak".
- theatrical 3: Pitchfork "a surprisingly dramatic singer"; BBC "the sound's sheer size is almost overwhelming"; but intimate tracks (Unrequited Love recorded "just me and the mic", Clash).
- experimental 3: RS "an ingenious oddball… a weird-pop gem… stretched into all kinds of shapes"; Paste "off-beat art-pop".
- polish 3: Pitchfork "still rough around the edges"; CoS "crisp and clean".
- tempo 2, groove 2: Pitchfork "The biggest moments on Wounded Rhymes take the form of slower ballads"; AllMusic excerpt "hip-shaking drums"; CoS "we'll just keep dancing".
- voice `powerful|soft`: Pitchfork "a powerful voice and strong phrasing"; Line of Best Fit "a darker mood and deeper voice that fully commands"; CoS "a breathy chorus" (Jerome), TMT "the breathy mid-song breakdown".
- instruments: credits (drums, percussion, organ, guitar, bass, piano); BBC "much ominous pounding of kettle drums", Paste "kettle drums popping holes in the mix over deadpan synths" (timpani, synth); CoS "strumming acoustic guitar" (I Know Places), "heavy reverb and handclaps"; AllMusic excerpt "in-the-red handclaps, hip-shaking drums and tambourines, and downright nasty, psych-damaged organ"; Guardian "a desolate whistle solo"; Line of Best Fit "an almost inaudible glockenspiel".
- production: BBC "the tunes resemble a haunted wall of sound, like Phil Spector hijacking a ghost train" (wallofsound); NPR, Li: "real instruments, live takes" (liverecording); RS "reverb-swathed guitars", CoS "heavy reverb" (heavyreverb); CoS "frequent layered harmonies", "harmonies are piled on in choruses" (layeredvocals).
- lyrics: Guardian "recorded in the aftermath of an unrequited love affair"; CoS "sexually charged" (sensuality); Pitchfork "uncomfortably eager to shed or adopt new identities" (identity).
- scene: Swedish artist, written in Los Angeles/desert (Pitchfork; 7x7), produced in Sweden by Björn Yttling.
- producers: Björn Yttling on every track (MusicBrainz; Guardian "producer Björn Yttling (he of Peter Björn and John fame)").
- sounds_like: RS "her guiding spirit seems to be Phil Spector"; BBC "like Phil Spector hijacking a ghost train", "Lykke's voice occasionally recalls that of Dusty Springfield", Silent My Song "the only time fellow Swede alt-heroes The Knife are an overt influence" [1/10]; EW (via MusicCritic) "sounding like a Nordic hybrid of Lou Reed and Darlene Love"; Paste "a bit of Kate Bush's alien whine, a pinch of Bat for Lashes smoke-screen atmospherics, even a hint of… Robyn's sassy croon", and Bat for Lashes and Charlotte Gainsbourg "released excellent albums (Two Suns and IRM, respectively) that mined a similar sonic trajectory"; TMT Unrequited Love "Righteous Brotherly — doo-wop melodies" [1/10], Sadness Is a Blessing "might first bring The Ronettes to mind… homage to The Supremes" [1/10 each], Love Out of Lust "sounds more like 'Maps' than Motown" → Yeah Yeah Yeahs (Fever to Tell) [1/10]. 10 tracks. Not used: RS "neo-Shangri-Las sentiments" (lyrics), TMT's Amy Winehouse (hypothetical), Sinéad O'Connor (approach, not sound).
- influenced_by: empty. In Clash she names "Neil Young, The Shangri-Las, This Mortal Coil, The Beatles, Rolling Stones… That kind of music influences me", but as her general taste, not this album: left out on purpose (owner may decide to add).
- landmark 1: Warner press release calls it "her seminal album" and lists best-of-2011 lists (NYT, Pitchfork, EW, Guardian, Clash, Paste, SPIN); Exclaim calls I Follow Rivers "the hit". The landmark evidence is a label statement, so it is the softest cell of this row.
- Reception 5/4/2: importance 5 rests on the label's "seminal" plus the hit single and the critics' "transformation" framing (Slant excerpt "a stark transformation of mood"); acclaim 4 (Pitchfork 8.3, RS 5/5, Guardian 4/5, BBC "outstanding"; DiS 6/10, NOW 2/5); mainstream 2 (own label: "I set up LL Recordings just for me to have freedom", Clash; indie producer).

## muse-drones: Muse, Drones (2015)

Sources opened:
- Pitchfork, Ian Cohen, 4.5 https://pitchfork.com/reviews/albums/20520-drones/
- Rolling Stone, David Fricke http://www.rollingstone.com/music/albumreviews/muse-drones-20150609
- The Guardian, Gwilym Mumford https://www.theguardian.com/music/2015/jun/04/muse-drones-review-the-bands-most-focused-work-in-a-decade
- The Observer, Kitty Empire https://www.theguardian.com/music/2015/jun/07/muse-drones-album-review-kitty-empire
- Consequence of Sound https://consequence.net/2015/06/album-review-muse-drones/
- Paste https://www.pastemagazine.com/articles/2015/06/muse-drones-review.html
- Drowned in Sound http://drownedinsound.com/releases/18847/reviews/4149076
- NME news (Bellamy "best album"; "everything we know") https://www.nme.com/news/music/muse-61-1220072 ; https://www.nme.com/news/music/muse-65-1209518
- Louder (Mutt Lange fears; Grammy) https://loudersound.com/news/muse-mutt-lange-fears-drones ; https://www.loudersound.com/news/muse-roger-waters-win-grammys
- MusicCritic aggregator https://musiccritic.com/muse/drones
- Credits: MusicBrainz release 40888c66-4f02-486f-9708-bc008f4e46d4

Cells:
- genres: Pitchfork "Muse's down-and-dirty rock record" (rock); RS "this progressive-metal holocaust" and CoS "a British prog-metal band" (progmetal); Observer "hard rock has enjoyed warily eyeing the interface between robotics and warfare… Muse have grasped this paranoid sub-genre", "Never a band to shy away from a prog-rock statement" (hardrock, prog); CoS "the bluesy heavy metal of Led Zeppelin and Deep Purple ('Psycho', 'Reapers')" (heavymetal); Paste "a lighter-waving arena-rock climax" (arenarock, Dead Inside); DiS "a sci-fi rock opera" (rockopera); RS "the stark opening electro-funk of 'Dead Inside'" (electrofunk); CoS "the pummelling synthpop of Depeche Mode on 'Dead Inside'" (synthpop); Paste "the Gary Glitter glam-metal of 'Psycho'" and "the art-disco death march of 'Dead Inside'" (new tokens glammetal, artdisco). Bellamy (NME): "go back to a more 'rock' sound".
- energy 4: Guardian "It's the heaviest the band has sounded in some time"; ballads Aftermath and The Globalist keep it off 5.
- electronic 2: Observer "confining their often elaborate sound to just drums, bass, guitar and the odd electronic flourish"; Bellamy (NME) "standard three-piece rock band with guitar, bass and drums".
- mood 1: concept of indoctrination and drone killing; Pitchfork "a cryptocratic nightmare".
- theatrical 5: CoS "crank the bombast to 11", "the overblown theatrics of Queen"; DiS "a sci-fi rock opera"; concept album with drill-sergeant and JFK interludes.
- experimental 2: DiS "still just Muse colouring inside carefully-drawn stock lines"; one 10-minute suite.
- polish 5: Guardian "a more polished variant of their early, unkempt sound"; Pitchfork "CGI'd production"; RS on Lange "famous for stuffing every air pocket on Def Leppard's Hysteria".
- tempo 3, groove 2: Observer "a thwacking beat" (Dead Inside); Pitchfork "Metallica's boogie" (Psycho).
- voice `powerful`: RS "Bellamy wails"; Paste "shrieks and croons", CoS "his flexible tenor". (`operatic` not used: critics call him operatic but he is not classically trained.)
- instruments: credits (guitar, bass, drums, synth, piano, Hammond organ; EdoDea ensemble orchestra on Aftermath and The Globalist); NME/Instagram "Milan strings"; Paste "orchestral simmer… canned strings".
- production: Observer "operatic – Bellamy's falsetto" (falsetto); RS "a choir of Bellamys", Pitchfork "an a cappella chorale of a thousand Matt Bellamys" (layeredvocals); Guardian "samples of JFK speeches", Paste "sampled rain drops and TV commercials" (sampling); RS "loaded with fuzz", Paste "fuzz-bass clatter", NME (band Instagram) "listening to some FAT bass distortion" (distortion).
- lyrics: Bellamy (NME) "the journey of a human… to their indoctrination by the system to be a human drone, to their eventual defection" (political, storytelling, social); Observer "an Orwellian breakup album", NME/Q "a relationship ending" (heartbreak).
- producers: Robert John "Mutt" Lange (MusicBrainz; NME "co-produced by Robert John 'Mutt' Lange"). Dropped: Muse (own credit), Rich Costey and Tommaso Colliva (credited as additional producers).
- sounds_like: Observer "the grand gestures of Queen", CoS "the overblown theatrics of Queen" and "the band Muse most resembles on Drones is a latter-day U2", "all executed with a rhinestone-studded swagger reminiscent of Bowie and T. Rex" (whole album); Depeche Mode: RS Dead Inside "suggest a totalitarian Depeche Mode", CoS Dead Inside "more than a passing resemblance to 'Personal Jesus'", Observer Psycho "recalls both Depeche Mode (say, Personal Jesus) and Marilyn Manson" → Depeche Mode (Violator) [2/12], Marilyn Manson [1/12]; CoS "the dirty riffage of Black Sabbath ('The Handler')" [1/12], "the bluesy heavy metal of Led Zeppelin and Deep Purple ('Psycho', 'Reapers')" [2/12 each]; Pitchfork "'Psycho' itself splices Metallica's boogie '2x4'…" → Metallica (Load) [1/12]; Guardian and DiS: The Globalist veers "from Morricone to Metallica/metal" → Ennio Morricone [1/12]; Observer Reapers "his inner Yngwie Malmsteen" [1/12]; Paste "the Gary Glitter glam-metal of 'Psycho'" [1/12]. 12 tracks. Not used: comparisons with Muse's own Origin of Symmetry; Pitchfork's Rush/Queensrÿche/Pink Floyd line (about the band's career, not this album).
- influenced_by: empty. Bellamy only cites a book (Predators: The CIA's Drone War on al Qaeda, NME) and the band's own early records ("go back to how we made music in the early stages of our career"), which is a self-reference.
- landmark 0.
- Reception 3/3/3: Grammy Best Rock Album (Louder); reviews mixed (RS 4/5, NME 3.5/5, Guardian and Observer 3/5, Paste 5.8, CoS C, Pitchfork 4.5). Mainstream 3 is a judgement call: Mutt Lange is a hit producer and CoS hears "almost palpable yearning to be played on commercial rock radio" on Mercy (case for 4), but Bellamy says Lange "wasn't like that at all – he was totally into the concept" and the record is a band-written concept album (Louder).

---

## New tokens

- `glammetal` (genre): Paste on Drones, "the Gary Glitter glam-metal of 'Psycho'". Not the same as `hairmetal`.
- `artdisco` (genre): Paste on Drones, "the art-disco death march of 'Dead Inside'".

## Uncertain / for the owner

- Måneskin acclaim 2 rests on OndaRock (5/10) and RS Italia (mixed). Rockol (positive, 8.5 per a search snippet) could not be opened: if verified, acclaim should be 3. Voice `powerful` is thin (only RS Italia's description of the oversinging).
- Lykke Li landmark 1 and importance 5 rest on the label's "seminal album" and the I Follow Rivers hit; no independent critic calls it her defining record.
- Lykke Li's general influences (Neil Young, The Shangri-Las, This Mortal Coil, The Beatles, Rolling Stones; Clash 2011) were left out of influenced_by because she does not tie them to this album.
- Muse mainstream 3 vs 4 (see above).
- Florence: Welch's own "chamber soul" label (Guardian interview, cited only on Wikipedia) not verified, so not used.
- No legacy rows: I found no professional source saying any of these five albums influenced later music.

