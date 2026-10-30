# Claude research notes (Oct 2026, wave 3)

# Wave 3 / F — evidence notes

Albums: stones-aftermath, ledzeppelin-ledzeppelinii, doors-strangedays, tomze-grandeliquidacao, scottwalker-scott3. All `status` draft, `type` studio. Ids, titles and years copied from `src/data/catalog.ts`. Scene strings, artist spelling and producer spelling (Paul A. Rothchild, John Franz) follow the existing `docs/descriptors/<artist>.csv` rows. Wikipedia was used only to find sources; nothing is cited from it.

## Could not open (so not used)
- AllMusic (403), Metacritic (403), Pitchfork (fetch blocked), Treble (403), Slant (403), All About Jazz (403), Discogs (403), MusicBrainz release page (browser check), web.archive.org (blocked: Guitar Player "Mixing Led Zeppelin" not read), Rolling Stone (redirects to a paywall: RS 40th-anniversary LZ II piece, RS reissue review, RS 500 entries not read), Louder (article bodies truncated: Strange Days reviews, Whole Lotta Love feature), Inkl/Guardian Petridis ranking (403), Ticketone Manzarek article (503), Guitar World Page interview (body not served).
- Scores reached only through aggregators/lists I opened: Pitchfork 9.5 for LZ II remaster (musiccritic.com), Pitchfork 1960s list ranks (muzieklijstjes.nl: Aftermath #98, LZ II #37, Grande Liquidação #111; Strange Days and Scott 3 not on it).
- No certification database opened; no RIAA figures used.

## New tokens
- genre `jovemguarda` (Grande Liquidação). Freire (ANPPOM 2014): Tom Zé mixed "sonoridades da Jovem Guarda (com o uso de guitarra elétrica e órgão), ritmos brasileiros, arranjos de banda marcial e procedimentos experimentais da música erudita da vanguarda europeia"; Scaramuzzo (biography, quoted in RIEB/USP, Grandi 2025): "múltiplos estilos, que vão do iê-iê-iê ao samba". Jovem Guarda / iê-iê-iê is Brazil's 60s beat-pop movement, not covered by `beat`, `rockandroll` or `mpb`.
- genre `caipira` (Grande Liquidação). Scaramuzzo via RIEB: "da música caipira à experimental". Música caipira is the rural São Paulo/Minas folk that came before commercial `sertanejo`; following the guide's rule (similar names are different genres) I did not map it onto `sertanejo`.

---

## stones-aftermath (Aftermath, 1966; UK edition, 14 tracks)
Sources:
- Clash, Simon Harper, "Classic Album: The Rolling Stones – Aftermath", 12 Nov 2009, https://www.clashmusic.com/features/classic-album-the-rolling-stones-aftermath
- Guitars Exchange, Sergio Ariza, "The Rolling Stones – Aftermath (1966)", https://guitarsexchange.com/en/unplugged/1180/the-rolling-stones-aftermath-1966
- American Songwriter, Jim Beviglia, 27 May 2024, https://americansongwriter.com/ranking-the-5-best-songs-on-the-album-aftermath-by-the-rolling-stones/ ; and 4 Oct 2026, https://americansongwriter.com/remembering-when-the-rolling-stones-put-songwriting-at-the-forefront-of-a-surprising-album-in-1966/
- Noise11, Paul Cashmere, 15 Apr 2026, https://www.noise11.com/?p=200642
- NME, Rolling Stones top 10 albums ranked, https://www.nme.com/lists/the-rolling-stones-top-10-albums-ranked-1139
- Far Out, Jagger quote from Rolling Stone 1995, https://faroutmagazine.co.uk/mick-jagger-most-important-album-by-the-rolling-stones/
- Christgau, https://www.robertchristgau.com/get_artist.php?name=rolling+stones (Aftermath listed in CG70s Basic Record Library, no grade)
- PopMatters, Morgan Troper, 5 Feb 2021, https://www.popmatters.com/elvis-costello-this-years-model-2650329505.html/2

Cells:
- genres: pop (Guitars Exchange "inaugurated their pop phase", "poppiest ... album"; AS 2026 "a fantastic pop record"); blues and rock (Clash: "elaborating their dangerous and exciting blues roots through the medium of pop and rock"; GX "did not lack their beloved blues"); baroquepop (GX: Lady Jane shows "a band flirting with the baroque pop of the era"; AS 2024 "concise songs in a pop vein, often with baroque or psychedelic touches"); psychedelia (AS 2024 same quote; Noise11 "emerging psychedelic sounds"); folk, country (Noise11: "a broader palette of pop, folk, country and emerging psychedelic sounds"; Clash: High and Dry "country-folk"); soul (Clash: "'Out Of Time' is Motown soul", one track, so placed last).
- instruments: Clash "Sitars, dulcimers, marimbas and bells"; "Jones' dulcimer and Nitzsche's harpsichord"; GX "Bill Wyman with his fuzz bass", Richards' "black Les Paul Custom"; AS 2024 dulcimer vs "Keith Richards' acoustic guitar", "Charlie Watts' furious drumming"; AS 2026 "dulcimer, vibraphone, and harmonica parts" (marimba + vibraphone = `mallets`). Koto (only in a search snippet) not used.
- production: distortion = Wyman's fuzz bass (GX). Engineer Dave Hassinger and arranger Jack Nitzsche named by Noise11 (not producers).
- producers: Andrew Loog Oldham (Noise11 "Manager and producer Andrew Loog Oldham"; Clash quotes him on the sessions).
- sounds_like: GX on Mother's Little Helper: Aftermath "bears the imprint of the Beatles but also of another group that the Stones looked to a lot in this period, The Kinks" (one song of 14).
- lyrics: love (AS 2026 "mostly writing about their romantic relationships"); social (Clash Mother's Little Helper "a caustic dig at amphetamine-addicted housewives"; GX "the unhappiness of modern society"); irony (NME: Under My Thumb either sexist or satire, its "playful attitude").
- scales: energy 3, tempo 3 (mix of rockers and "prettiest" ballads Lady Jane / I Am Waiting, AS 2026); electronic 0 (guitars, exotic acoustic instruments; same as the band's other 60s rows); mood 2 (Clash "dark diatribe", "edgy decadence"; GX misogynistic attack, "unhappiness of modern society"); theatrical 2; experimental 2 (NME "rejecting and redefining rock'n'roll lore"; AS 2026 tracks that "tested the limits of the studio"); polish 3 (Jagger: "it was very well recorded"; Oldham "ran the tape until it felt right"); groove 3 (Motown soul, R&B roots).
- voice left empty: no source describes Jagger's voice on this record.
- landmark 1: Jagger to Rolling Stone 1995 "That was a big landmark record for me"; Clash "its importance is undisputed"; Noise11 "frequently cited as the first classic album by the Rolling Stones".
- influenced_by empty: Oldham's Rubber Soul remark and Margotin/Guesdon's McCartney fuzz-bass point are only in Wikipedia; not opened in the originals.
- reception: importance 4 (landmark but below Beggars/Exile), acclaim 4, mainstream 3 (UK #1 eight weeks, US #2 per Noise11; "poppiest" album, still band-written).
- legacy 2: PopMatters says Costello described This Year's Girl as an "answer" to Stupid Girl (one song). Costello's liner-note claim that the album was the main influence on This Year's Model was not found in a source I could open.

## ledzeppelin-ledzeppelinii (Led Zeppelin II, 1969; 9 tracks)
Sources:
- The Quietus, Julian Marszalek, "Led Zeppelin – I, II, III (Reissues)", 2 Jun 2014, https://thequietus.com/?p=15412
- Albumism, Sarah Paolantonio, 19 Oct 2024, http://albumism.com/features/led-zeppelin-led-zeppelin-ii-album-anniversary
- Far Out, Arun Starkey, 27 Apr 2026, https://faroutmagazine.co.uk/jimmy-page-song-proved-led-zeppelin-avant-garde/ (quotes Page from Guitar World/Rolling Stone and Eddie Kramer from Classic Rock 2008)
- Ultimate Classic Rock, Jeff Giles, 16 May 2014, https://ultimateclassicrock.com/jimmy-page-whole-lotta-love/ (Page to Guitar World)
- Paste, Ryan Reed, 19 Jun 2014, https://www.pastemagazine.com/article/led-zeppelin-led-zeppelin-led-zeppelin-ii-led-zepp (II remaster 9.5)
- Music Critic aggregate, https://www.musiccritic.com/led-zeppelin/led-zeppelin-ii-remastered (91; Pitchfork 9.5, American Songwriter 5/5, Consequence A-, Rolling Stone 4/5)
- Consequence, Jordan Blum, 22 Oct 2019, https://consequence.net/2019/10/50-reasons-we-still-love-led-zeppelin-ii
- Ritchie Yorke, https://ritchieyorke.com/?p=1014
- Tom Hull, "The Rekord Report", Overdose, Apr 1975, http://www.tomhull.com/ocston/arch/rekord4.php

Cells:
- genres: hardrock (Far Out: the album is a progenitor of hard rock and metal; Paste: a sound "often generically labeled 'hard rock'"); heavymetal (Albumism "among the forefathers of heavy metal"; Yorke "later called the blueprint for heavy metal"; Hull: Zeppelin practically invented heavy metal); blues (Albumism "As a blues band..."; Moby Dick "based on twelve-bar blues"; Far Out: move away from blues toward heavier music); psychedelia (Quietus: "The psychedelic mid-section", "further psychedelic play ... 'What Is And What Should Never Be'"; Albumism "a pulled, psychedelic turn"); funk (Quietus "increases the riffs, funk"); folkrock (Quietus: "the folk-rock of the Tolkien-infused 'Ramble On'", one track). `bluesrock` is only in Wikipedia's infobox / an unopened book (Zalkind), so not used.
- instruments: Page: "I created most of the sounds with a Theremin and my guitar" (UCR); Albumism: John Paul Jones' bass on The Lemon Song, Bonham's drums, "Plant's harmonica on 'Bring It On Home'", "Layered electric guitar". Organ and acoustic guitar only in Wikipedia: not used.
- production: reverseecho (Quietus on the rough mix: "the backwards delay to Plant's vocals" not yet added, i.e. present on the album); tapeeffects (Page: "using Low Frequency Oscillators on the tape machine"). Panning (Page; Albumism "pivots the sound from left to right") has no token.
- producers: empty. Jimmy Page is the credited producer (Albumism "Page himself was their producer") but he is a member of the artist, and the wave rule drops the artist's own credit. NOTE: the existing ledzeppelin.csv rows do list Jimmy Page; the owner may want the same here for consistency.
- voice powerful: Quietus "his vocals feel as if they're still reaching out for that glass-shattering quality" (on the rough mix).
- lyrics: sensuality (Quietus "This is an incredibly sexy album"); love (Thank You's "aching balladry"); storytelling ("Tolkien-infused 'Ramble On'").
- scales: energy 4 (Far Out: one of the band's heaviest records, "restless energy"; Albumism on volume; but Thank You ballad); electronic 1 (theremin); mood 3 (sexy, deep grooves, not dark); theatrical 3; experimental 3 (Page: the Whole Lotta Love middle "something no one had ever done before"); polish 3 (cut in many studios between dates, Kramer: "bizarre studios" yet "in the end it sounded bloody marvellous"); tempo 3; groove 3 (Quietus "the grooves contained within it are deep and wide").
- sounds_like empty: no critic comparison of this album's sound (Quietus's Jimmy Cliff line is about an outtake on the deluxe disc).
- influenced_by empty: borrowed lyrics/arrangements (Willie Dixon, Howlin' Wolf) are quotations, not influences, and only in Wikipedia.
- landmark 1: Hull: "The first album stated the ambition, the second honed it down to a singular entity, a sound, Led Zeppelin."
- reception: importance 5, acclaim 5 (Pitchfork 9.5, Paste 9.5, Music Critic 91, Pitchfork 1960s #37), mainstream 3 (first US #1 per Yorke; same reasoning as the debut row).
- legacy 4: Yorke "blueprint for heavy metal"; Hull; Albumism. AllMusic's "blueprint" wording is known only through Wikipedia, not opened.

## doors-strangedays (Strange Days, 1967; 10 tracks)
Sources:
- Sound On Sound, Richard Buskin, "Classic Tracks: The Doors 'Strange Days'", Dec 2003, https://www.soundonsound.com/node/4915916 (Bruce Botnick interview)
- Echoes, "The Doors' 'Strange Days', an Acid Rock Classic at 50", 27 Sep 2017, https://echoes.org/2017/09/27/the-doors-strange-days-an-acid-rock-classic-at-50/
- PopMatters, Richard Driver, 31 Jan 2018, 9/10, https://popmatters.com/doors-strange-days-50th-anniversary
- Guitars Exchange, Tom MacIntosh, https://guitarsexchange.com/en/unplugged/290/the-doors-strange-days-1967
- thedoors.com (official), https://thedoors.com/?p=1076

Cells:
- genres: psychedelicrock and bluesrock (PopMatters filed under acid rock, blues rock, psychedelic rock; "expanded expressively upon rock and roll"); acidrock (Echoes title; "one of the best acid-rock guitar solos ever"); cabaret (Guitars Exchange quoting AllMusic: "reflected the group's fascination with the theatrical music of European cabaret"); blues (Echoes "the acid blues slide solo"; Manzarek on Love Me Two Times "Robby's great rock/blues classic", one song).
- instruments: Echoes: Manzarek's organ ("Bach meets jazz phrasing"), "baroque boogie-woogie harpsichord", Krieger's "slide guitar on 'Unhappy Girl'", "double-tracked feedback guitar solo", Densmore's drumming; SOS: Paul Beaver's Moog on the title track, "backwards drums and piano"; GX: "They used Douglas Lubahn as bass player on this record." Marimba could not be confirmed: not used.
- production: moog (SOS: Morrison's voice fed into the Moog: "We created an envelope where we could feed Jim's track into the Moog"); delay, tapeeffects (SOS: "I then added a little delay and fed the whole thing into an infinite tape repeat"; backwards drums and piano); eighttrack (SOS "the first time that the Doors recorded on eight-track"; Echoes "a new 8-Track tape recorder"); overdubbing (thedoors.com: the eight-track allowed overdubs such as Krieger's double-tracked guitar).
- producers: Paul A. Rothchild (SOS; Echoes "a more polished and spacious sound courtesy of producer Paul Rothschild").
- influenced_by empty: SOS has Botnick (engineer) saying "Pepper convinced us that we could go forward", but he is neither a credited producer nor a spokesperson, and the article adds the band copied none of Pepper's innovations. Owner may decide otherwise.
- sounds_like empty: Echoes names Sgt. Pepper, Satanic Majesties and early Pink Floyd only as contrasts ("isn't like").
- lyrics: introspection (Echoes "This was a more alienated band", darkness "more psychological than pharmaceutical"; PopMatters: Horse Latitudes documents Morrison's poetry). Thin: only one token supported.
- voice empty: only "psychedelic Sinatra" (reputedly Morrison's own phrase, Echoes), too vague.
- scales: mood 1 (Echoes "darker than the debut"; GX "the creepiness is constant", Moog "eerie darkness, or carnival glee"); theatrical 4 (European cabaret theatre; When the Music's Over "apocalyptic"); experimental 3 (studio as instrument, Moog, backwards tapes; SOS: "a conscious effort to avoid overdoing any particular effect"); electronic 2 (organ, one Moog track, tape effects); polish 3 (Echoes "more polished and spacious"; SOS: mistakes often left in); energy 3, tempo 3, groove 2.
- landmark 0: praised (Echoes, PopMatters) but no source calls it one of their defining albums.
- reception: importance 4, acclaim 4, mainstream 3 (Billboard #3; sold less than the debut).
- legacy: no row (no professional source on its influence).

## tomze-grandeliquidacao (Grande Liquidação, 1968; 12 tracks)
Sources:
- Guilherme Araújo Freire (Unicamp), "Crítica da sociedade de consumo e do moralismo ideológico da ditadura militar em Grande liquidação de Tom Zé", XXIV Congresso ANPPOM, 2014, https://anppom.org.br/anais/anaiscongresso_anppom_2014/2624/public/2624-9918-1-PB.pdf
- Guilherme Grandi, "A cosmovisão tropicalista de Tom Zé", Revista do Instituto de Estudos Brasileiros (USP) n. 92, 2025, https://revistas.usp.br/rieb/article/download/243839/219543/800539 (quotes biographer Pietro Scaramuzzo, 2020, p. 137)
- Songlines, Peter Culshaw, Nov/Dec 2011, 4/5, https://www.songlines.co.uk/review/grande-liquidacao
- Paste, Savio Vilela, 31 May 2006, https://pastemagazine.com/music/tom-ze/the-brazilian-tragicomedy-of-tom-ze
- Catraca Livre, Gabriela Rassy, 13 Aug 2019, https://catracalivre.com.br/vila-mundo/tom-ze-celebra-tres-fases-da-sua-carreira-em-show-inedito/
- Diario de Pernambuco, Allan Lopes, 10 Oct 2026 (recorded in São Paulo, Mocambo/Rozenblit), https://www.diariodepernambuco.com.br/viver/2026/10/11726312-tom-ze-faz-90-anos-a-trajetoria-do-genio-rebelde-que-renasceu-no-palcos-recifenses.html
- Jornal da Unicamp n. 626 (on Freire's dissertation), https://www2.unicamp.br/unicamp/sites/default/files/jornal/paginas/ju_626_paginacor_12_web.pdf
- Brazilian press: no Folha, Estadão, O Globo or Rolling Stone Brasil review of this album came up in searches (Rolling Stone Brasil's 100-albums list entry is for Estudando o Samba). Brazilian sources used are the Unicamp/USP academic texts, Catraca Livre and Diario de Pernambuco.

Cells:
- genres: tropicalia (Paste "his first record is one of the movement's best examples"; Songlines places it in Tropicália); mpb, rockandroll, psychedelia (Paste: "All the ingredients are there: rock 'n' roll, psychedelic music and Brazilian popular music"); jovemguarda NEW (Freire "sonoridades da Jovem Guarda"; Scaramuzzo "iê-iê-iê"); samba, caipira NEW, experimental (Scaramuzzo: "múltiplos estilos, que vão do iê-iê-iê ao samba, da música caipira à experimental"); avantgarde (Songlines "avant-garde 'squeaky gate' music"; Freire: atonal oboe/bassoon solo, "procedimentos experimentais da música erudita da vanguarda europeia"); psychedelicrock (Scaramuzzo: backing band "Os Brazões, com seu rock psicodélico"); bossanova (Songlines "from the Beatles to bossa nova"); forro (Freire: the verses of Glória use "linhas de condução características do forró", one track).
- instruments: Freire: "guitarra elétrica e órgão"; Glória with "os Brasões e instrumentos de sopro; presumidamente trombone, trompete, sax e clarinete" (so only generic `brass`); "solo de oboé e fagote" (oboe, bassoon) on Curso Intensivo de Boas Maneiras; Songlines: opener with "bells and swelling choruses".
- production: hornarrangements (Freire: "arranjos de banda marcial"; arrangers Damiano Cozzella or Sandino Hohagen named as likely authors of the wind solo).
- producers empty: a reissue tracklist credits "João Araujo" on several tracks but the role is cut off; a blog (Rock Salted) calls him producer. Not confirmed by a source I could open fully.
- sounds_like: The Beatles (Songlines, critic: "with influences from the Beatles to bossa nova"). Rock Salted's comparisons (Rolling Stones/Oldham chamber pop, The Who Sell Out, Dylan) are from a blog and partly lyric-only: not used.
- influenced_by empty: Koellreutter's seminars are mentioned by Freire (scholar), not by Tom Zé about this album.
- lyrics: social, political, irony (Freire: satire of consumer society, urbanisation, "bons costumes" and the "moralismo ideológico" of the military regime; ironic title Curso Intensivo de Boas Maneiras).
- scales: energy 3, mood 3 (humour and satire, Songlines "a kind of wonder and freshness", against "Somos um povo infeliz" back-cover text), electronic 1 (electric guitar, organ), theatrical 3, experimental 3 (atonal solo, avant-garde procedures, but Songlines "marginally more normal than some of his later efforts"). polish/tempo/groove left empty (only a blog comments on the recording quality).
- voice empty.
- landmark 0: Paste and Pitchfork's list praise it, but no source calls it a defining Tom Zé album (Rough Trade's "arguably best" is a shop listing).
- reception: importance 4, acclaim 4, mainstream 2.
- legacy: no row (Songlines "a few decades ahead of its time" is praise, not influence).

## scottwalker-scott3 (Scott 3, 1969; 13 tracks)
Sources:
- God Is in the TV, Tim Russell, 16 Aug 2016, https://www.godisinthetvzine.co.uk/?p=75767
- The Second Disc, Joe Marchese, 22 Oct 2014, https://theseconddisc.com/2014/10/22/back-tracks-scott-walker-part-1-1967-1974/
- Hot Press, Joe Jackson, 26 Mar 2019, https://www.hotpress.com/music/scott-walker-profile-artist-part-2-22769732
- Far Out, Matthew Ingate, 29 Jun 2026, https://faroutmagazine.co.uk/did-scott-walkers-masterpiece-kill-his-career/
- Vinyl Writers, Mark Lager, 22 Jan 2022, https://vinylwriters.com/cinematic-genius-and-haunting-poetry-of-noel-scott-engel/

Cells:
- genres: chamberpop (GITV: "Wally Stott creating intricate chamber-pop arrangements"); avantgarde (Far Out: "the more conventional orchestration had become more bombastic and avant-garde"; Lager: "The avant-garde, experimental orchestrations by Wally Stott"). The existing scottwalker rows use orchestralpop/baroquepop, but for Scott 3 those terms appear only in Wikipedia's infobox: not used.
- instruments: Lager: "a string section of somber darkness", Copenhagen's "Christmas chimes", 30 Century Man has "only an acoustic guitar rhythm and his voice"; orchestra (Stott "arranged and conducted"; Hot Press on the "orchestral accompaniment").
- production: stringarrangements (Stott; Peter Knight on two Brel tracks).
- producers: John Franz (Second Disc "Walker and producer John Franz").
- sounds_like (critics, per song): Andy Williams [1/13] (Lager on Copenhagen: "His voice is reminiscent of crooner Andy Williams"); Erik Satie [1/13] and Claude Debussy [1/13] (Hot Press: Butterfly "opens like Satie's 'Trio Gymnopedies' before floating into that lace-like world inhabited by composers such as Debussy"); Bob Dylan [1/13] (GITV: "the Dylan mannerisms of 30 Century Man"). Not used: Leonard Cohen (Lager compares the lyrics only); Brel (covered on the album).
- influenced_by empty, flagged: Hot Press says that while recording Scott 3 Walker said "I feel I must become highly stylised in my own way" and "A highly stylised composer would be Rawsthorne, Gerhard or Shostakovich", and that he was "listening to classical music more than ever". These name models of a quality rather than stated influences, so I left them out; owner may decide. "Like having Delius writing for you" is figurative (about Stott): excluded.
- lyrics: introspection, nostalgia (Second Disc: It's Raining Today "a reflective, melodic journey through a sorrowful past"; Lager "recollections upon faraway childhood innocence"); storytelling (Second Disc "movies in miniature", Big Louise and Rosemary character studies); love (GITV: Copenhagen "the awakening of love"); heartbreak (GITV: Two Weeks Since You've Gone, "desolation and confusion that follows the end of a relationship").
- voice empty: "theatrical croon" (Second Disc) has no exact token; the existing rows' `powerful` is not supported by these sources.
- scales: energy 2, tempo 2 (GITV "a more restrained approach"; Lager "contemplative, delicate"; We Came Through the exception, "rapid"); mood 1 (Lager "somber darkness", "melancholy mood piece"; Far Out "nightmare landscapes ('Rosemary')"); theatrical 4 ("theatrical croon", but less bombastic than Scott 2); experimental 3 (Far Out "more experimental than its predecessor"; Hot Press: sprechgesang, free stanza forms); polish 4 (full Stott orchestra); electronic 1, groove 1 (in line with the sibling rows; no dance material).
- landmark 1: GITV "Walker's first great artistic statement"; Second Disc "the album where Walker came into his own".
- reception: importance 4, acclaim 4, mainstream 2.
- legacy: no row. Thom Yorke picking It's Raining Today on Desert Island Discs (via Wikipedia) and his general tribute to Walker are not a professional statement that this album influenced later music.

