# Claude research notes (Oct 2026, wave 2)

# Wave 2 / F: evidence notes

Albums: pattypravo-pattypravo, celentano-ilragazzodellaviagluck, scottwalker-scott2, felakuti-felaransomekutiandhiskoolalobitos, elvis-fromelvisinmemphis. Titles, artists and years match `src/data/catalog.ts` (lines 248, 257, 644, 668, 82). The existing descriptor files were read: `scottwalker.csv` (Scott 4) and `felakuti.csv` (Zombie), plus their reception and legacy files. The scene strings and voice choices follow them. Patty Pravo, Celentano and Elvis have no descriptor files yet.

Wikipedia was used only to find sources. It is never cited. Credits come from the Discogs API (`https://api.discogs.com/releases/<id>`), which transcribes the sleeves, and from MusicBrainz. Discogs genre/style tags are user tags and were not used.

**Could not open:** AllMusic (403 everywhere), Rockol (403), AlbumOfTheYear (403), Jazzwise (SSL error), Treble and Sounds of the Universe (403), 45worlds (502), clancelentano.it (bad certificate), and ilmondodiadriano.it (500). As a result, no AllMusic rating is cited, including the ratings Wikipedia shows: Scott 2 4.5, From Elvis in Memphis 5, Gluck 3. The Pitchfork 9.1 for Scott 2 that Wikipedia shows was not found either. The Pitchfork page I did open is the 2013 box-set review (8.7).

## New tokens
- `highlifejazz` (genre): Fela's own name for the Koola Lobitos music, "Fela called the music 'highlife jazz'" (felakuti.com). It is not the same as `highlife` or `jazz`.
- `dixieland` (genre): OndaRock on "Five Foot Two Eyes Of Blue" (one track, so it sits at the tail).

---

## pattypravo-pattypravo: Patty Pravo (1968)
**Sources**
- OndaRock monograph, Claudio Fabretti and Giuliano Delli Paoli: https://www.ondarock.it/italia/pattypravo.htm (album score 7)
- Discogs release 1981913, Arc ALP 11009: https://api.discogs.com/releases/1981913
- HitParadeItalia: weekly Top Album, 7 Sep 1968 (https://hitparadeitalia.it/hp_weeka/1968/hpa19680907.html) and 1968 year-end (https://www.hitparadeitalia.it/hp_yenda/lpe1968.html)
- Panorama: https://www.panorama.it/tempo-libero/musica/patty-pravo-la-ragazza-del-piper-biografia-canzoni-album-belle-famose

**Cells**
- **type studio:** her first LP. OndaRock: "spinge la casa discografica a pubblicare il primo album omonimo… Il disco raccoglie i 45 giri finora pubblicati, più tutte le sue migliori interpretazioni del momento, in gran parte cover". It collects her singles, so it is close to a compilation, but it is her debut album.
- **genres:**
  - pop: OndaRock, "il pop non è il suo unico campo".
  - beat: OndaRock on "Qui e là", "ammiccando ancora a sonorità beat", and on 1966-69, "look e canzoni beat".
  - rumba: the lead hit "La bambola" is "una rumba sensuale e disperata". It is the biggest hit, so it goes in the top three.
  - ballad: "Se perdo te", "una struggente ballata".
  - dixieland: "Five Foot Two", "si diverte a giocare con il dixieland".
- **voice powerful:** OndaRock, "voce possente" and "ugola robusta, teatrale". This describes her career, not this album only, hence the low confidence.
- **instruments:**
  - orchestra: Discogs credits Ruggero Cini e la sua Orchestra (A1–B1, B5), Orchestra Gian Piero Reverberi (B2), Piero Pintucci e la sua Orchestra (B4), and Carlo Pes e il suo Complesso (B3). The choirs are 4+4 di Nora Orlandi and I Cantori Moderni di Alessandroni.
  - guitar: OndaRock on La bambola, "attorcigliata attorno alle corde di una chitarra spagnoleggiante".
- **lyrics:**
  - identity: La bambola is "una canzone sulla donna-oggetto" (OndaRock), and the song "parla di una donna che chiede rispetto" (Panorama). "Qui e là" has the lines "io amo la libertà".
  - love and heartbreak: "Se perdo te" and the love covers.
- **language it:** the three English-titled covers (Yesterday, Five Foot Two, Old Man River) were not confirmed as sung in English, so `en` was left out.
- **producers:** empty. Discogs credits only the recording technicians (Franco Patrignani, Giorgio Agazzi) and the liner notes by Renzo Arbore.
- **scales:**
  - energy 3: a mix of beat singles and ballads.
  - electronic 1: orchestra plus band.
  - mood 3: sensual, desperate, and playful songs side by side.
  - experimental 1: mostly covers.
  - theatrical, polish, tempo and groove: left empty, as there is not enough evidence.
- **landmark 0:** no source marks this album as defining. The breakthrough is credited to the single.
- **sounds_like and influenced_by:** none found.

## celentano-ilragazzodellaviagluck: Il ragazzo della via Gluck (1966)
**Sources**
- Discogs release 2297698, Clan ACC S/LP 40007: https://api.discogs.com/releases/2297698
- Discografia Nazionale della Canzone Italiana (ICBSA): http://discografia.dds.it/scheda_titolo.php?idt=4334 (release September 1966; Orchestra Mariano Detto)
- Rolling Stone Italia artist page: https://www.rollingstone.it/artista/adriano-celentano/
- HitParadeItalia 1966 year-end: https://www.hitparadeitalia.it/hp_yenda/lpe1966.html

**Cells**
- **instruments orchestra:** Discogs credits "Arranged By, Directed By: Detto Mariano" and "Backing Band: I Ribelli"; ICBSA lists "Orchestra Mariano Detto". The individual Ribelli instruments come only from it.wikipedia, so they were not used.
- **lyrics social and nostalgia:** Rolling Stone Italia on the title song, the lead hit: it "racconta dettagli dell'infanzia e dell'adolescenza di Celentano e affronta il tema dell'ecologia e della speculazione edilizia".
- **genres:** EMPTY. I found no opened source that describes the album's music. The only album page with a rating is AllMusic 3/5, which would not open. Rolling Stone Italia's "rock and roll" describes the artist, not this record.
- **scales and voice:** empty for the same reason.
- **producers:** empty. it.wikipedia names Miki Del Prete, but Discogs and ICBSA credit no producer.
- **chart:** HPI peak #9, 15 weeks (27/08 to 03/12/1966), year-end #34.
- **Flag:** this is the thinnest row. It needs a real review (AllMusic, or a Rockol or Musica e Dischi retrospective) before its genres and scales can be filled.

## scottwalker-scott2: Scott 2 (1968)
**Sources**
- Pitchfork, Mike Powell, 20 Jun 2013, review of *Scott: The Collection 1967-1970* (8.7): https://pitchfork.com/reviews/albums/18088-scott-walker-scott-walker-the-collection-1967-1970/
- The Second Disc, "Back Tracks: Scott Walker Part 1" (2014): https://theseconddisc.com/2014/10/22/back-tracks-scott-walker-part-1-1967-1974/
- God Is in the TV, Collection box review (2016): https://godisinthetvzine.co.uk/2016/08/16/scott-walker-collection-boxset
- Incendiary, "back catalogue part 2": https://incendiarymag.com/wordpress/?p=615
- Far Out, Six definitive songs: https://faroutmagazine.co.uk/scott-walker-six-best-songs/
- The Music Aficionado: https://musicaficionado.blog/2019/06/11/scott-walkers-solo-albums-1967-1969/
- Discogs release 2403028, Philips SBL 7840: https://api.discogs.com/releases/2403028
- Official Charts search: https://www.officialcharts.com/search/albums/Scott%202

**Cells**
- **genres:**
  - orchestralpop: Pitchfork, "these highly arranged and orchestrated pop records".
  - baroquepop: GITV on the Scott albums, "superficially smooth baroque pop".
  - easylistening: Pitchfork, "The essential contrast in his late-60s albums is between easy-listening music and forbiddingly difficult subject matter"; Incendiary on Scott 2, "his pop / easy listening audience".
  - chanson: Far Out, "the troubadour and English version of the chanson character that he had created with his first four solo albums".
- **influenced_by "Jacques Brel [4/12]":** Walker himself (Far Out): "When I heard Brel, it showed me that it could be done. I'd never anyone else who could write like that… 'That's for me'". Also "Brel was a reflection of the times I was going through… My intention was to take the material and try and do something else with it." The three Brel covers are not counted as influence. The share is the 4 Walker originals out of 12 tracks; GITV calls "The Girls From the Streets" "a laboured Brel pastiche".
- **producers John Franz:** Discogs. The arrangers and conductors were Wally Stott (A1, A2, B6), Reg Guest (A3, A4, B3) and Peter Knight (A6, B4); the engineer was Peter Olliff.
- **instruments:**
  - orchestra and strings: Discogs credits the arranger/conductors; Pitchfork, "string-heavy music".
  - violin: Pitchfork on Humphrey Plugg, "sailing away on a tide of violins".
  - trombone: Pitchfork on "The Girls and the Dogs", "a choir of trombones".
- **production:**
  - stringarrangements: the arranger credits.
  - liverecording: Walker, quoted by Music Aficionado: "when I was doing those Philips records it was in the contract that you had to go in and do four tunes in a three-hour session. And they had to be done live. That's how it worked with the Walker Brothers and in my solo records".
- **voice powerful:** Pitchfork, "his rich, mocking baritone"; Second Disc, "his expressive, deep voice". This matches the Scott 4 row.
- **lyrics:**
  - storytelling and sensuality: Second Disc on Jackie, "opium dens and whorehouses"; GITV on "The Bridge", "tales of sailors on shore leave".
  - irony: Pitchfork, "pitch-black sense of humor"; Second Disc, "darkly comedic 'The Girls and the Dogs'".
  - love: "Best of Both Worlds" and "The Girls and the Dogs".
- **scales:**
  - theatrical 5: Pitchfork, "four theatrical and increasingly dark albums"; GITV, "bombastic orchestral backing and big choruses of yore" (Scott 1-2, as opposed to Scott 3). Incendiary calls Next "ridiculously OTT".
  - mood 2: dark subjects, with black humour.
  - experimental 2: GITV, "little progression"; Plastic Palace People's "bizarre lyrics".
  - polish 4: "conventionally gorgeous, string-heavy".
  - energy 2, tempo 2, groove 1: mostly orchestral ballads and waltzes. Jackie is "performed at a galloping pace".
- **landmark 0:** critics rank it below Scott 3 and Scott 4. Walker himself called it "the work of a lazy, self-indulgent man" (GITV).
- **sounds_like:** empty. An Art Gallery Clothing blog compares "Wait Until Dark" to Nat King Cole, but that is a shop blog, not a critic, so it was not used.
- **legacy:** no professional source names a later influence of Scott 2 specifically.

## felakuti-felaransomekutiandhiskoolalobitos: Fela Ransome Kuti and His Koola Lobitos (1969)
**Identity of the record:** Afrobeat! (IFRA-Nigeria / OpenEdition) discography, https://books.openedition.org/ifra/529, lists it under 1969: "Fela Ransome-Kuti and the Koola Lobitos (PNL 1002 EMI Nig.) Great Kids / Lagos Baby / Lai Se / Wa Dele / Mi O Mo / Ajo / Iya Mi Oshe O! / Araba's Delight". Sources disagree on two points:
- The date: the Vinyl Exchange reissue page says "originally issued in 1968 on Parlophone Records"; Monolith Cocktail says "the full Koola Lobitos debut LP, recorded for EMI in 1965".
- The type: Vinyl Exchange calls it "a compilation album of Koola Lobitos' singles and probably Fela Kuti's first LP".

I kept `studio` because critics call it the debut LP. **Flag for the owner:** it may count as a compilation.

**Sources**
- Monolith Cocktail review of *Highlife-Jazz and Afro-Soul (1963-1969)*. Disc two is this LP. https://monolithcocktail.com/2016-posts/odb-206-fela-ransome-kuti-and-his-koola-lobitos-highlife-jazz-and-afro-soul-1963-1969/
- Rough Trade product page for the LP reissue: https://shop.roughtrade.com/products/fela-ransome-kuti-and-his-koola-lobitos
- Clash review of the 3CD compilation: https://www.clashmusic.com/reviews/fela-ransome-kuti-and-his-koola-lobitos/
- felakuti.com (official), Koola Lobitos notes: https://felakuti.com/products/142315-koola-lobitos-1964-68-the-69-los-angeles-sessions-1969
- OkayAfrica, quoting Chris May: https://www.okayafrica.com/fela-kuti-highlife-recordings-koola-lobitos-new-compilation
- Vinyl Exchange: https://www.vinylexchange.co.uk/products/fela-ransome-kuti-and-his-koola-lobitos-fela-ransome-kuti-and-his-koola-lobitos

**Cells**
- **genres:**
  - highlifejazz: felakuti.com, "Fela called the music 'highlife jazz'".
  - highlife and jazz: Rough Trade, "incorporating jazz chords into highlife arrangements"; "highlife rhythms fuse with Fela's jazz licks on the trumpet".
  - blues: Monolith on this LP, "wafts towards the jazzy-blues of New Orleans on 'Omuti'… and 'Ololufe'" (two tracks, tail).
- **instruments:**
  - The second-phase lineup (Vinyl Exchange): "Tony Allen (drums), Ojo Okeji (bass), Yinka Roberts (guitar), Isaac Olasugba (sax), Tunde Williams (trumpet)…".
  - Fela "almost exclusively playing the trumpet" (OkayAfrica).
  - Rough Trade: "snaky saxophone lines", "percussion-led brass".
- **production hornarrangements:** Rough Trade, "The horn blasts around the extended dance rhythms of 'Obinrin Le'… closest to the kind of arrangements that would be developed later".
- **lyrics love:** Monolith, "Fela plays out some tried and tested love tropes on the laidback paean 'Lagos Baby'". Chris May: "lyrics dealing mainly with family, romantic or moral issues".
- **language yo:** Chris May, "still singing mainly in Yoruba".
- **scales:**
  - energy 4: Monolith, "a raw energy"; Clash, "a bit manic in places".
  - groove 4: Rough Trade, "how the group could ignite a dancefloor"; felakuti.com, "good-time dance music".
  - mood 4: "good-time".
  - experimental 1: "uncomplicated" (felakuti.com).
  - polish 2: Clash, "a rough-and-ready affair". That remark is on the early singles.
  - theatrical and tempo: empty.
- **voice, producers, sounds_like and influenced_by:** empty. Rough Trade's "inspired by Charlie Parker, Miles Davis and Dizzy Gillespie" is a shop's claim, not Fela's statement.
- **Reception:** there is no review of this LP alone. Acclaim is empty.

## elvis-fromelvisinmemphis: From Elvis in Memphis (1969)
**Sources**
- Rolling Stone, James Hunter, 10 Jul 2001 (reissue): https://www.rollingstone.com/music/albumreviews/from-elvis-in-memphis-reissue-20010710
- Rolling Stone 2009 (Legacy edition): https://www.rollingstone.com/music/albumreviews/from-elvis-in-memphis-20090805
- Rolling Stone 500 Greatest Albums entry: https://www.rollingstone.com/music/music-lists/500-greatest-albums-of-all-time-156826/elvis-presley-from-elvis-in-memphis-163721/ (the rank was not visible in the text)
- Memphis Magazine, 40th Anniversary review: https://memphismagazine.com/arts/record-review-from-elvis-in-memphis-40th-anniversary-edition/
- Sputnikmusic review: https://www.sputnikmusic.com/review/8412/Elvis-Presley-From-Elvis-In-Memphis/
- Elvis Information Network, Legacy edition review: https://elvisinfonet.com/cdreview_feim_2009.htm
- MusicBrainz release 7393dc7e-0123-4d83-9b61-582c4dfa8a30 (credits)
- Official Charts search: https://www.officialcharts.com/search/albums/From%20Elvis%20in%20Memphis

**Cells**
- **genres:**
  - country, gospel, soul and pop: RS500, "masterfully tackles country, gospel, soul, pop and… message songs".
  - memphissoul: RS 2001, "the Memphis soul-recording-studio method"; Sputnik, "Memphis soul ruled the roost".
  - blues and rockandroll: RS 2001, "a bluesy Elvis", "savage like rock & roll"; Sputnik, "pop, blues, soul, rock and country all at once".
  - funk: Sputnik on "I'm Movin' On", "the funky jam that follows"; EIN on "Wearin'", "this funky number".
  - rnb: Sputnik, "contemporary r&b numbers like Jerry Butler's 'Only the Strong Survive'".
  - Plain rock was not used.
- **producers Chips Moman and Felton Jarvis:** MusicBrainz producer credits.
- **instruments:** MusicBrainz lists guitar (Reggie Young), bass (Leech, Cogbill), drums (Chrisman), piano (Wood, and Elvis on #3), organ (Emmons), steel guitar (Hughey), harmonica (Kollis), trumpet, trombone, saxophone and French horn. EIN adds "the bow as it plays across the cello strings" on In the Ghetto, and Sputnik, "the slick string-heavy arrangement".
- **production:**
  - overdubbing: EIN, "Post production work would see Chips add… superb overdubs by the Memphis Horns".
  - hornarrangements and stringarrangements: EIN, Sputnik ("beefy rhythmic horns").
- **voice powerful|raspy:** EIN, "searing vocals"; EIN, "suffering from an obvious cold which at times made his voice quite raspy"; Sputnik, "impassioned delivery".
- **lyrics:**
  - social: RS500 on "message songs"; In the Ghetto.
  - heartbreak and love: Sputnik on "Wearin'", "superficially words to an unfaithful lover".
  - nostalgia: Memphis Magazine, songs "all evoking Presley's homecoming".
  - storytelling: EIN, "visual storytelling".
- **sounds_like:** RS 2001, "the Memphis soul-recording-studio method, which also produced Aretha Franklin's and Dusty Springfield's work with Jerry Wexler, and Al Green's classic records with Willie Mitchell". Dusty Springfield's Wexler record is Dusty in Memphis.
- **influenced_by:** empty. "I'll never sing another song I don't believe in" is a statement of intent, not an influence.
- **scales:**
  - polish 4: RS 2001, "meticulous arrangements"; Sputnik, "slicker and more professional".
  - groove 2: only a few funky tracks.
  - experimental 1: classic song forms, despite Sputnik's "innovation".
  - energy 3, mood 3, theatrical 3, tempo 3: mixed.
- **landmark 1:** RS 2009, "The first was a classic"; RS 2001, "the studio sine qua non of his late-Sixties comeback"; RS500 entry.
- **Reception:**
  - UK #1, 14 weeks (Official Charts).
  - Importance 4: the comeback record, though not the record that made him.
  - Acclaim 5.
  - Mainstream 3: Sputnik notes Elvis "believed in each and every track".
- **Legacy:** none found.

