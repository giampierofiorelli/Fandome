# Claude research notes (Oct 2026, wave 5)

## Wave 5, folder E: Tenco *Luigi Tenco* (1962), Gaber *Far finta di essere sani* (1973), Vanoni *La voglia la pazzia l'incoscienza l'allegria* (1976), Pravo *Concerto per Patty* (1969)

I opened every source below in this session. I used curl, except for WebFetch where noted. Wikipedia was not cited.

**Not described:** *Gino Paoli allo Studio A* (1965). It is a live album: DDS says "Registrato dal vivo allo Studio 'A' della RCA Italiana il 4 Febbraio 1965", and the sleeve says "Dallo spettacolo allo Studio A". See artists.md. Under the CLAUDE.md scope rule I gave it no row.

**Couldn't open:**
- Rockol's review of *Far finta di essere sani* (403 with both curl and WebFetch). I did not use it.
- AllMusic: I did not try.
- Il Post's 2012 Rolling Stone Italia list opened, but it gives only the ranks, with no text about any album. So did L'Unità's 2023 reproduction (https://www.unita.it/2023/05/15/i-migliori-100-dischi-italiani-di-sempre-la-storica-classifica-di-rolling-stone/ and https://www.ilpost.it/2012/01/30/i-100-dischi-italiani-piu-belli-di-sempre-per-rolling-stone/).

**New tokens:**
- `teatrocanzone` (genre). Sorrisi: the album "ha dato vita a un genere musicale, il Teatro Canzone". Velvet Music: "primo vero esempio di Teatro Canzone". It is a really different genre: theatre-song alternating songs and monologues. No instrument or production token is new.

**Canon file correction:** docs/canon/italy-1950s-70s.csv says "OndaRock Pietre miliari italiane: Luigi Tenco". That OndaRock pietra miliare (https://www.ondarock.it/recensioni/pietremiliariitaliane/tenco_tenco/) is *Tenco*, the 2002 BMG anthology ("Questa antologia della Bmg uscita nel 2002"), not the 1962 LP.

---

### tenco-luigitenco (Luigi Tenco, 1962)

Sources:
- OndaRock monograph "Luigi Tenco – Una storia sbagliata", Simone Coacci (discography rating 6.5). https://www.ondarock.it/monografie/luigitenco/
- DDS record page (Ricordi MRL 6023, Nov 1962). http://discografia.dds.it/scheda_discografia.php?ida=671 (record idt from that page)
- Discogs release 3167781 (credits: "Conductor [Orchestra] – Giampiero Boneschi"; genre Pop, styles Ballad, Chanson). https://www.discogs.com/release/3167781-Luigi-Tenco-Luigi-Tenco
- Linkiesta, "Il poeta dalle mille parole" (Nov 2021). https://www.linkiesta.it/2021/11/luigi-tenco-musica/
- Roma in Jazz, "Mi sono innamorato di te". https://www.romainjazz.it/editoriale/718-luigi-tenco-mi-sono-innamorato-di-te-le-parole-della-musica.html
- Radio Città Aperta, on the album's release date. https://www.radiocittaperta.it/musica/luigi-tenco-il-suo-primo-album-omonimo-usci-l11-novembre-1962/

Type studio. The monograph calls the record "una raccolta che… compendia alcuni singoli già pubblicati… insieme ad altre composizioni più recenti". DDS adds that "Quando", "Il mio regno" and "Angela" are "in nuove registrazioni rispetto alle precedenti". It is his first LP, not an anthology.

Cells:
- **genres**
  - canzonedautore: OndaRock "uno dei migliori prodotti della 'scuola genovese' e un interessante precursore del cantautorato italiano".
  - chanson: Discogs style Chanson. OndaRock compares the songs to Brassens and Brel.
  - pop: Discogs genre.
  - jazzpop: OndaRock, on his early style, "il pop-jazz da camera degli esordi". Linkiesta: arranger Boneschi "veniva dal jazz".
  - ballad: Discogs style.
  - swing: "lo swing di 'Una Brava Ragazza'" (1 track).
  - waltz: "La Mia Valle (su un valzer di Ciaikovski)" and "a tempo di valzer di 'Come Mi Vedono Gli Altri'" (2 tracks).
  - cabaret: "l'epica cabarettistica e boulevardien di 'Angela'" (1 track).
  - politicalfolk: OndaRock's pietra miliare on the anthology, "folk di protesta come 'Cara maestra'" (1 track).
  - neoclassical: "l'arrangiamento cameristico, 'neoclassico' diremmo oggi" (2 tracks, last).
- **energy 2, tempo 2, groove 1**: mostly ballads and chamber arrangements, with a swing track and Io sì "ritmato da un accattivante tema sirtaki".
- **electronic 0**: orchestra, strings, piano and guitar picking only.
- **mood 2**: existential songs ("il torpido esistenzialismo alla Sagan di 'Mi sono innamorato di te'"), the lost childhood of "Il tempo passò", and cutting irony in "Una brava ragazza".
- **theatrical 2**: mostly intimate chamber songs ("cantata pianistica con accompagnamento d'archi"). Angela is cabaret-like.
- **experimental 1**: some songs go into "territori fino ad allora pressoché inesplorati dal pop italiano", but the others are "brani melodici e tradizionali".
- **polish 3**: an orchestral studio LP with Boneschi conducting (Discogs). OndaRock finds the chamber arrangements "un po' stucchevole".
- **voice**: empty. Linkiesta calls him "un crooner, un Nat King Cole all'italiana", but that is about his career, not this album.
- **instruments**: orchestra (Discogs, Boneschi conducting the orchestra); strings and piano ("cantata pianistica con accompagnamento d'archi"); guitar ("col picking sferzante… d'un Brassens" in Cara maestra).
- **production**: stringarrangements, from "accompagnamento d'archi" and "arrangiamento cameristico".
- **lyrics**:
  - love: Mi sono innamorato di te, Quando.
  - social and political: Cara maestra mocks "la società classista dell'epoca", "i pilastri del potere democristiano" and recycled fascist officials.
  - irony: "sottile ma cocente ironia sui luoghi comuni del perbenismo borghese".
  - introspection: "la fuga dal presente".
  - nostalgia: "l'infanzia perduta di 'Il Tempo Passò'".
  - sensuality: Io sì, "licenzioso e tormentato elogio dell'adulterio".
- **language**: it.
- **producers**: empty. Linkiesta names Nanni Ricordi only as the Genoese group's "riferimento". No credit I opened names a producer.
- **sounds_like**: all three comparisons are about the sound or delivery of named tracks.
  - Jacques Brel [2/10]: Io sì "quasi un Brel apocrifo"; Angela "misto di Brel e Weill".
  - Kurt Weill [1/10]: Angela.
  - Georges Brassens [1/10]: Cara maestra "col picking sferzante e l'ironia irriverente d'un Brassens".
  - The tracklist has 10 tracks (DDS).
- **influenced_by**: empty. No statement by Tenco or the label is about this album.
- **landmark 0**: no source I opened calls the album defining.
  - OndaRock praises it in hindsight but says it "cade presto nel dimenticatoio".
  - Rolling Stone Italia's 2012 list has "TENCO, Luigi: Luigi Tenco" at #22, but it does not say which of the 1962 and 1965 self-titled LPs it means.
  - If the owner confirms the 1962 LP, landmark could be 1.
- **Reception 4/4/2**:
  - OndaRock 6.5 with the praise quoted above.
  - Rolling Stone Italia #22 (ambiguous, see landmark).
  - mainstream 2: an auteur record. OndaRock: "un seguito limitato"; RAI banned "Cara Maestra", "Una Brava Ragazza" and "Io Sì".
  - There is no album chart for 1962.
- **Legacy**: no row. OndaRock's influence claim ("antesignano degli eroi tormentati e 'maledetti' del rock alternativo") is about Tenco as an artist, not this album.

### gaber-farfintadiesseresani (Far finta di essere sani, 1973)

**Studio or live?** Studio.
- DDS (Carosello CLP 23015/16, Oct 1973): "Registrazione in studio delle canzoni presentate lo stesso anno nello spettacolo omonimo… Registrato presso gli Studi Fonorama di Milano da Mario Carulli tra il 12 e il 20 Settembre 1973". DDS also describes the 2002 CD as "Inedita registrazione dal vivo dello spettacolo omonimo; il titolo è diverso dall'omonimo pubblicato nel 1973… essendo quest'ultimo un album di studio".
- The Fondazione Gaber archive titles each track "dal disco in studio 'Far finta di essere sani' (1973)" (https://archivio.giorgiogaber.it/risorsa/174). It also has a separate theatre disc (https://archivio.giorgiogaber.it/risorsa/7545): "Registrazione teatrale edita per la prima volta nella serie 'Gaber a Teatro' del 2002".
- The Fondazione's 2023 remaster news (https://www.giorgiogaber.it/news/remaster-g) calls "Far finta di essere sani (1973)" a "registrazione live dello spettacolo". That refers to the 2002 theatre-recording catalogue it remastered, not to the 1973 LP.

Sources:
- Sorrisi e Canzoni TV, 20 Dec 2017, on Sky Arte's "33 giri – Italian Masters". https://www.sorrisi.com/tv/news-e-anticipazioni/33-giri-italian-masters-sky-arte-celebra-giorgio-gaber/
- Fondazione Gaber, show page. https://archivio.giorgiogaber.it/risorsa/5659
- giorgiogaber.org show page (Gaber and Luporini text). https://www.giorgiogaber.org/archivio/index.php-44.htm?page=s_far-finta-di-essere-sani
- OndaRock monograph "La poetica del Signor G", Gianluca Veltri. https://www.ondarock.it/monografie/giorgiogaber/
- Discogs release 2821581 ("Arranged By – Giorgio Casellato"; "Recorded at 'Fonorama', Milano"; genres Pop, Stage & Screen; styles Chanson, Music Hall). https://www.discogs.com/release/2821581-Giorgio-Gaber-Far-Finta-Di-Essere-Sani
- Velvet Music "Disc-History" (2013). This is a blog, and it says itself it is not a registered outlet, so it is weak. https://www.velvetmusic.it/2013/03/07/disc-history-giorgio-gaber-far-finta-di-essere-sani-1973/
- R3M (2020). A blog, also weak. https://www.r3m.it/2020/12/14/giorgio-gaber-la-storia-di-far-finta-di-essere-sani/
- Hit Parade Italia 1973 year-end chart (#89, peak 24). https://hitparadeitalia.it/hp_yenda/lpe1973.htm

Cells:
- **genres**
  - teatrocanzone (new token): Sorrisi "ha dato vita a un genere musicale, il Teatro Canzone".
  - chanson and musichall: Discogs styles. These are user-contributed tags, so they are weak. Velvet Music sets Gaber beside "grandi chansonnier europei".
  - pop: Discogs genre.
- **mood 2**: Gaber and Luporini (giorgiogaber.org): "L'analisi, anche se alleggerita dall'ironia, può sembrare pessimistica".
- **theatrical 4**: songs from a theatre show. "l'ironia si fa più preponderante e a volte anche un po' aggressiva" (Fondazione).
- **Other scales empty**: energy, electronic, experimental, polish, tempo and groove. No source I opened describes the sound of the record.
- **voice**: empty, for the same reason.
- **instruments guitar|drums**, flagged as implied. Sorrisi: "Al mixer, a riascoltare il master originale… ci saranno il chitarrista Sergio Farina e il batterista Tullio De Piscopo". This implies they played on the record but does not say so. Drop it if that reads as too thin.
- **production**: empty. Sorrisi says the album's backing tracks ("basi strumentali") were then used on tour. That is a fact about the tour, not a production technique.
- **lyrics**:
  - social and political: Sorrisi "I temi… risentono molto dell'attualità", antipsychiatry (Laing, Cooper, Basaglia). OndaRock: "smascherando le contraffazioni e l'ipocrisia delle ideologie".
  - irony: Fondazione.
  - introspection and identity: OndaRock "la propria inadeguatezza, la propria insufficienza"; Gaber/Luporini "l'interezza", "il proprio corpo risulta essere assai distante da certi slanci ideali".
- **producers**: empty. DDS and Discogs credit only the arranger (Casellato) and engineer (Carulli).
- **sounds_like** and **influenced_by**: empty. The antipsychiatrists are thinkers behind the lyrics, not musical influences.
- **landmark 1**: Sorrisi "il capolavoro «Far finta di essere sani»", "ha segnato una svolta nella carriera di Giorgio Gaber". Rolling Stone Italia 2012 #48.
- **confidence low**: most sonic cells are empty.
- **Reception 5/4/2**:
  - importance 5: Sorrisi's "svolta"; the Fondazione: "Questo spettacolo consacra definitivamente Gaber".
  - acclaim 4: Rolling Stone Italia #48 and Sorrisi's "capolavoro". OndaRock's pietra miliare is *Il signor G*, not this album.
  - mainstream 2: a theatre-song double LP of an ironic show; HPI peak only 24.
- **Legacy 3**: Sorrisi credits this album with founding the Teatro Canzone genre. The quote and URL are in legacy.csv.

### vanoni-lavoglialapazzialincoscienzalallegria (La voglia la pazzia l'incoscienza l'allegria, 1976)

Sources:
- OndaRock Pietra miliare, Vassilios Karagiannis (labels: "bossa nova, música popular brasileira"). https://www.ondarock.it/recensioni/pietremiliariitaliane/ornellavanoniviniciusdemoraestoquinho-lavoglialapazzialincoscienzalallegria/
- OndaRock news on the 50th-anniversary reissue (2026). https://www.ondarock.it/news/ornella-vanoni-toquinho-e-vinicius-de-moraes-esce-una-nuova-edizione-di-la-voglia-la-pazzia-lincoscienza-lallegria-con-registrazioni-inedite/
- DDS record page (Vanilla OVL 2005, April 1976). Credits: "ProduttorE Sergio Bardotti", "OrchestrA Gianfranco Lombardi", musicians "Azeitona basso, Musicals coro, Mutinho batteria, Toquinho chitarra". Notes: "Assenza" and "L'assente" are poems "lette dall'autore"; recorded at Fonit Cetra Roma, with "Orchestra e cori registrati presso gli Studi Fonit Cetra di Milano". http://discografia.dds.it/scheda_discografia.php?ida=555
- Discogs release 3184460 (Producer Sergio Bardotti; genres Jazz, Latin; style Bossanova). https://www.discogs.com/release/3184460
- Hit Parade Italia 1976 year-end chart (#20, peak 6). https://hitparadeitalia.it/hp_yenda/lpe1976.htm

Cells:
- **genres**
  - bossanova and mpb: OndaRock labels; news "due figure centrali della bossa nova e della Música Popular Brasileira"; Discogs Bossanova.
  - latin and jazz: Discogs genres.
- **energy 2, tempo 2, groove 2**: the trio plays "con estrema intimità, quasi fosse un ritrovo spontaneo". The title track "tracima di vibrante energia carioca"; tracks like "Lo so che ti amerò" are slowed down ("forza rallentamenti").
- **electronic 0**: guitar, bass, drums, orchestra and choir.
- **mood 2**: OndaRock dwells on "abbandono, rimpianto", "accorata disperazione, che solo una lieve speranza tende a stemperare". The title track is a "festante tentativo di congelare… un istante di pura gioia".
- **theatrical 1**: arrangements "scevro di barocchismi o inopportuni slanci sonori"; a "serata trascorsa tra amici fidati".
- **experimental 1**: a selection from the classic bossa nova repertoire.
- **polish 3**: recorded "in presa diretta", with orchestra and choirs added afterwards. OndaRock: the production "accentua la sofisticata ricerca espressiva".
- **voice soft**: OndaRock "una voce dalle mille sottigliezze", "il suo canto pieno di quella sottigliezza"; news "la cantante sensuale".
- **instruments**:
  - guitar (Toquinho), bass (Azeitona), drums (Mutinho) and orchestra (Lombardi): DDS.
  - woodwinds: OndaRock "Una brevissima apertura di legni" on La rosa spogliata, one track.
- **production**:
  - liverecording: news "registrato in presa diretta dai tre interpreti"; OndaRock "registrazioni in presa diretta".
  - overdubbing: "con cori e parti orchestrali aggiunti successivamente".
  - choirvocals: DDS "Musicals coro"; OndaRock "parti corali".
- **lyrics**: heartbreak ("il rimpianto di un amore appassito"), love ("passione"), nostalgia ("soltanto nostalgia", "rimpianto").
- **language it|nap**:
  - Italian: Bardotti's adaptations (DDS authors).
  - Neapolitan: "Anema e core", the classic by D'Esposito and Manlio (OndaRock "il classico di Salve d'Esposito e Tito Manlio"). Uncertain: no source says it is sung in Neapolitan here.
  - Portuguese is not added: de Moraes's two poems are recited, not sung.
- **producers**: Sergio Bardotti (DDS, Discogs, OndaRock news "il produttore Sergio Bardotti").
- **Arranger name**: the OndaRock review writes "Gianfranco Bardotti", which looks like a slip. DDS and OndaRock's own news give Gianfranco Lombardi.
- **sounds_like**: empty. OndaRock's Nara Leão and Maria Bethânia comparison is about her earlier *Dettagli*.
- **influenced_by**: empty. De Moraes and Toquinho are collaborators, so they are excluded.
- **landmark 1**: OndaRock "rimane punto di snodo fondamentale nel lunghissimo percorso artistico della Signora della canzone".
- **Reception 5/5/3**:
  - OndaRock Pietra miliare; Rolling Stone Italia #76.
  - Gold disc: OndaRock news, "conquistando il disco d'oro poche settimane dopo la pubblicazione".
  - mainstream 3: a producer-led quality commercial record.

### pattypravo-concertoperpatty (Concerto per Patty, 1969)

The album is not yet in pattypravo's catalogue row: add `['Concerto per Patty', 1969]` (see artists.md).

Sources:
- OndaRock Pietra miliare, Fabio Pierangeli, 21/06/2009 (label "pop orchestrale"). https://www.ondarock.it/recensioni/pietremiliariitaliane/pattypravo_concertoperpatty/
- OndaRock monograph "Mistero stupendo" (discography rating "Concerto per Patty (Rca, 1969) 8"). https://www.ondarock.it/monografie/pattypravo/
- Discogs release 3451736 (per-track orchestras, choirs and backing bands; genre Pop, style Chanson). https://www.discogs.com/release/3451736-Patty-Pravo-Concerto-Per-Patty
- Hit Parade Italia 1969 year-end chart (#7, peak 5). https://hitparadeitalia.it/hp_yenda/lpe1969.htm

Cells:
- **genres**
  - orchestralpop: OndaRock label "pop orchestrale".
  - pop: Discogs.
  - symphonicprog: OndaRock "già classical progressive", "classical-progressive". I mapped this synonym to symphonicprog as the closest token. It could be a new token `classicalprogressive` if the owner prefers.
  - chanson: Discogs style.
  - beat: Il Paradiso "dai vaghi sapori beat" (1 track).
  - march: Tripoli '69 "con un andamento da marcia guerresca" (1 track).
- **energy 2, tempo 2, groove 1**: "la musica aleggia lieve"; ballads and a suite. Side B is lighter.
- **electronic 1**: orchestra, plus a Hammond organ ("un organo hammond") and harp "effetti 'elettronici'". OndaRock puts "elettronici" in quotes.
- **mood 1**: "Non mi piace questa canzone… è troppo triste"; "l'amore romantico che strugge e distrugge"; "canzone davvero pessimista".
- **theatrical 4**: "una orchestra di ben 90 elementi", "fatica orchestrale di 12 minuti", "arte melodrammatica" (monograph).
- **experimental 3**: "esperimento unico nel suo genere", "audace, rivoluzionario per il panorama pop italiano". Side B "sembra muoversi su canoni più tradizionali".
- **polish 4**: "orchestrato e arrangiato superbamente dal maestro Franco Pisano".
- **voice powerful**: OndaRock "Con la sua voce possente, aliena, provocante". This line is the monograph blurb shown on the page. It keeps the voice used in pattypravo.csv.
- **instruments**:
  - orchestra (Pisano, Pintucci and Trombetti orchestras on Discogs); harp ("Una intro d'arpa"); violin ("lasciare il campo al violino").
  - cello, guitar and organ: "un violoncello e una chitarra, accompagnata da un organo hammond".
  - piano: With a Little Help "che Patty esegue al pianoforte" (Discogs "Piano – Patty Pravo").
  - brass and trombone: Tripoli '69 "una sezione fiati ben spiegata e tromboni".
- **production**:
  - choirvocals: Discogs "I Cantori Moderni di Alessandroni", "4 + 4 di Nora Orlandi"; OndaRock "i cori a fare da contrappunto".
  - stringarrangements: Pisano's orchestration of the suite.
  - hornarrangements: Tripoli '69's brass section.
- **lyrics**: heartbreak ("le amarezze di un amore andato"), nostalgia ("le ore del passato", "i ricordi"), love ("l'amore romantico"), introspection ("il suo romanzo di formazione").
- **language**: it.
- **producers**: empty. OndaRock: the record was produced "nel senso economico più che musicale, da Crocetta (il produttore esecutivo è Lilli Greco…)". Executive producers are dropped. Discogs credits no producer.
- **sounds_like**: empty. OndaRock's "È il suo 'Tapestry'" compares themes and the concept, not sound. Aphrodite's Child, the Bee Gees and the Beatles are covered artists.
- **influenced_by**: empty.
- **landmark 1**: monograph "Concerto per Patty è l'opera più rivoluzionaria di Patty Pravo"; the album is a pietra miliare.
- **Reception 4/5/3**:
  - acclaim 5: OndaRock pietra miliare and monograph 8/10.
  - importance 4: HPI #7 for 1969. The monograph says the album ended her partnership with Crocetta.
  - mainstream 3: an RCA pop LP, but its A-side "scioccò anche l'avvocato Crocetta, che… voleva fare di Patty… una più rassicurante e vendibile cantante".
- **Legacy**: no row. "Battisti ancora non era arrivato a tanto, i New Trolls neppure" claims precedence, not influence.


# Artist research (catalogue, scene, influences)

# Wave 5, folder E: discographies for tenco, gaber, vanoni, ginopaoli (+ pattypravo album)

These four artists are already in `src/data/catalog.ts` with an empty album list, and their scene strings already exist in `src/data/scenes.ts`. Below is the album list to put into each existing row. The id, name, colour and tagline stay as they are.

The list covers studio albums and EPs only. It leaves out compilations, theatre and concert recordings, film and stage soundtracks, foreign-language remakes and records made under pseudonyms.

**Main source.** The *Discografia Nazionale della Canzone Italiana* (Istituto Centrale per i Beni Sonori ed Audiovisivi, http://discografia.dds.it/). It is the state discography: release month, label and recording notes for each LP. The artist pages I opened:
- Tenco: http://discografia.dds.it/scheda_discografia.php?ida=671
- Gaber: http://discografia.dds.it/scheda_discografia.php?ida=6
- Vanoni: http://discografia.dds.it/scheda_discografia.php?ida=555
- Paoli: http://discografia.dds.it/scheda_discografia.php?ida=2659

**Other sources.** Its coverage is thin after about 1995. For later releases I used MusicBrainz release groups and Discogs (API: formats and notes). For Gaber I also used the Fondazione Giorgio Gaber archive (https://archivio.giorgiogaber.it/), which speaks for the artist: it labels each record "disco in studio" or "registrazione spettacolo".

## Catalogue rows (replace the empty lists)

```ts
  ['tenco', 'Luigi Tenco', '#4a5a6a', 'Songs that changed Italian music', [['Luigi Tenco', 1962], ['Luigi Tenco', 1965], ['Tenco', 1966]]],
  ['gaber', 'Giorgio Gaber', '#6f6f7a', 'Theatre-song and sharp irony', [['Giorgio Gaber', 1961], ['Le canzoni di Giorgio Gaber', 1964], ['L’asse d’equilibrio', 1968], ['Sai com’è', 1968], ['Sexus et politica', 1970], ['Il signor G', 1970], ['I borghesi', 1971], ['Far finta di essere sani', 1973], ['Pressione bassa', 1980], ['Anni affollati', 1981], ['Ja-Ga Brothers', 1983], ['Gaber', 1984], ['Piccoli spostamenti del cuore', 1987], ['La mia generazione ha perso', 2001], ['Io non mi sento italiano', 2003]]],
  ['vanoni', 'Ornella Vanoni', '#b5a3c9', 'The elegant lady of Italian song', [['Ornella Vanoni', 1961], ['Le canzoni di Ornella Vanoni', 1963], ['Caldo', 1965], ['Ornella', 1966], ['Ornella Vanoni', 1967], ['Ai miei amici cantautori', 1968], ['Io sì – Ai miei amici cantautori n. 2', 1969], ['Appuntamento con Ornella Vanoni', 1970], ['Un gioco senza età', 1972], ['Dettagli', 1973], ['E altre storie', 1973], ['A un certo punto', 1974], ['La voglia di sognare', 1974], ['Quei giorni insieme a te', 1974], ['Uomo mio bambino mio', 1975], ['La voglia la pazzia l’incoscienza l’allegria', 1976], ['Più', 1976], ['Vanoni', 1978], ['Ricetta di donna', 1980], ['Duemilatrecentouno parole', 1981], ['Mari del Sud', 1982], ['Uomini', 1983], ['Ornella &...', 1986], ['O', 1987], ['Il giro del mio mondo', 1989], ['Quante storie', 1990], ['Stella nascente', 1992], ['Sheherazade', 1995], ['Argilla', 1997], ['Un panino una birra e poi...', 2001], ['E poi... la tua bocca da baciare', 2001], ['Sogni proibiti', 2002], ['Noi, le donne noi', 2003], ['Ti ricordi? No non mi ricordo', 2004], ['Più di me', 2008], ['Più di te', 2009], ['Meticci (Io mi fermo qui)', 2013], ['Unica', 2021], ['Diverse', 2024]]],
  ['ginopaoli', 'Gino Paoli', '#5a7a9a', 'Genoa’s songwriting gentleman', [['Gino Paoli', 1961], ['Le cose dell’amore', 1962], ['Basta chiudere gli occhi', 1964], ['Gino Paoli and the Casuals', 1967], ['Le due facce dell’amore', 1971], ['Rileggendo vecchie lettere d’amore', 1971], ['Amare per vivere', 1972], ['I semafori rossi non sono Dio', 1974], ['Ciao, salutime un po’ Zena', 1975], ['Il mio mestiere', 1977], ['Ha tutte le carte in regola', 1980], ['La luna e il sig. Hyde', 1984], ['Cosa farò da grande', 1986], ['L’ufficio delle cose perdute', 1988], ['Matto come un gatto', 1991], ['Senza contorno solo... per un’ora', 1992], ['King Kong', 1994], ['Amori dispari', 1995], ['Appropriazione indebita', 1996], ['Pomodori', 1998], ['Per una storia', 2000], ['Se', 2002], ['Ti ricordi? No non mi ricordo', 2004], ['Storie', 2009], ['Un incontro in jazz', 2011], ['Due come noi che...', 2012], ['Napoli con amore', 2012], ['3', 2017], ['Appunti di un lungo viaggio', 2019], ['Groovin’ with Paoli', 2021]]],
```

**Patty Pravo** (`pattypravo`) already has a row: `[['Patty Pravo', 1968], ['Pazza idea', 1973]]`. *Concerto per Patty* is not in it, so the row's album list needs `['Concerto per Patty', 1969]` added between them. Release: RCA/ARC ALPS 11013, 1969 (Discogs https://www.discogs.com/release/3451736). Its id becomes `pattypravo-concertoperpatty`.

### Album ids in rows.csv

These follow the slug rule in catalog.ts:
- `tenco-luigitenco`: the 1962 LP. The 1965 Jolly LP with the same title becomes `tenco-luigitenco1965`.
- `gaber-farfintadiesseresani`
- `vanoni-lavoglialapazzialincoscienzalallegria`
- `pattypravo-concertoperpatty`

`artistOf.json` (read by merge.py) is not in the wave5 folder. It needs these four ids.

## Choices and evidence per artist

### Luigi Tenco

DDS lists three LPs of new recordings:
- **Luigi Tenco** (Ricordi MRL 6023, November 1962).
- **Luigi Tenco** (Jolly LPJ 5045, May 1965).
- **Tenco** (RCA Italiana S 3, 1966).

OndaRock's monograph also says "tre soli album" (https://www.ondarock.it/monografie/luigitenco/).

Left out:
- *I Cavalieri vol. 1* (1959 EP): Tenco is credited only as the vocalist of the band I Cavalieri (DDS).
- *Sophisticated Rock* (1959 EP): DDS says "Inciso come Gigi Mai", so it was made under a pseudonym.
- *(Quando)* (1961 EP): it gathers 1961 singles.
- *Ti ricorderai di me...* and *Se stasera sono qui* (1967): anthologies. DDS calls the second "Antologia del periodo Ricordi con quattro inediti".

### Giorgio Gaber

Kept, as DDS notes "registrato presso gli studi…" or the Fondazione archive labels the tracks "dal disco in studio":
- *Giorgio Gaber* (1961), *Le canzoni di Giorgio Gaber* (1964), *L'asse d'equilibrio* (1968), *Sai com'è* (1968), *Sexus et politica* (1970), *I borghesi* (1971).
- *Far finta di essere sani* (1973). DDS: "Registrazione in studio delle canzoni presentate lo stesso anno nello spettacolo omonimo… Registrato presso gli Studi Fonorama di Milano da Mario Carulli tra il 12 e il 20 Settembre 1973". The Fondazione archive (https://archivio.giorgiogaber.it/risorsa/174) titles every track "dal disco in studio 'Far finta di essere sani' (1973)".
- *Pressione bassa* (1980, Studi Ricordi), *Anni affollati* (1981, Studi Regson), *Gaber* (1984, Studio Clan), *Piccoli spostamenti del cuore* (1987), *La mia generazione ha perso* (2001), *Io non mi sento italiano* (2003).

**Uncertain: *Il signor G* (1970).**
- DDS: "Registrazione dal vivo dell'omonimo spettacolo effettuata negli Studi Regson di Milano il 6 Ottobre 1970".
- The Fondazione labels it "dal disco in studio … registrazione con pubblico" (https://archivio.giorgiogaber.it/risorsa/183).
- I kept it because the Fondazione, which speaks for the artist, calls it a studio disc. It is the same situation as Paoli's *Allo Studio A* (see below), and the owner may want both treated the same way.

***Ja-Ga Brothers* (1983).** A four-track EP with Enzo Jannacci, new recordings of their Due Corsari songs (DDS, Fondazione). I kept it as a documented collaboration.

Left out:
- Every "Recital" theatre recording that DDS marks "Registrazione dal vivo": *Dialogo tra un impegnato e un non so* (1972), *Anche per oggi non si vola* (1974), *Libertà obbligatoria* (1976), *Polli d'allevamento* (1978), *Io se fossi Gaber* (1985), *Parlami d'amore Mariù* (1987), *Il grigio* (1989), *Il teatro canzone* (1992), *Io come persona* (1994), *E pensare che c'era il pensiero* (1994/95), and the 1997–2000 foyer CDs.
- *Io se fossi Dio* (1980): half an LP, called a "singolo" by the Fondazione.
- Anthologies: *Questo & Quello*, *Barbera e champagne*, *Un'ora con loro*, *Recital Mina-Gaber*.
- *Gaber canta Gaber* (1967) and *G come Gaber* (1973). They appear only in OndaRock's discography list and I could not check them.

### Ornella Vanoni

Sources:
- DDS for 1961–1992. It marks *L'amore* (1972) and both *Ornella sempre* as anthologies, and *Ah! L'amore l'amore…* (1971) as "Registrato dal vivo".
- MusicBrainz and Discogs for the rest (Discogs gives an "Album" format for each one kept).

Left out:
- Live albums: *Ah! L'amore…* (1971), *Live – Milano 1971*, *...adesso* (1999), the RTSI and Blue Note live sets.
- Foreign-language remakes: *Más: en castellano* (1977), *Licht und Schatten* (1982).
- *Ornella mai...* (1974): mostly new versions of older songs (DDS).
- *Amori miei* (1976): songs from a stage comedy.
- *Album* (1977): Discogs gives no album descriptor, so I could not tell what it is.
- All the "Oggi le canto così" collections.

Uncertain:
- *Io sì – Ai miei amici cantautori n. 2*: MusicBrainz gives 1969, the Discogs master 1970. It sits in the Hit Parade Italia 1970 year-end chart. I kept 1969.
- *Insieme* (1985, with Gino Paoli): MusicBrainz lists it twice, once as live and once as studio, so I left it out of both lists.

### Gino Paoli

Sources: DDS for 1961–2002. Discogs and MusicBrainz after that.

Left out:
- **Gino Paoli allo Studio A (1965) is a live album.**
  - DDS (http://discografia.dds.it/scheda_titolo.php?idt=3955): "Registrato dal vivo allo Studio 'A' della RCA Italiana il 4 Febbraio 1965".
  - The sleeve, quoted by Discogs (https://www.discogs.com/release/5577515): "Dallo spettacolo allo Studio 'A' della RCA Italiana il 4 Febbraio 1965".
  - MusicBrainz types it Live.
  - DDS's note on the anthology *Le origini* adds that four of its songs "sono stati registrati dal vivo allo studio A della RCA".
  - It is therefore not in the studio list and has no descriptor row. Under CLAUDE.md's scope rule, live albums are not researched for now. The owner may decide otherwise, since it is in Rolling Stone Italia's 100 (#80).
- Anthologies: *Il gioco della vita* (1979, a Discogs compilation), *Sempre* (1988) and *Ieri, oggi…* (1991). The last two are sequenced from the 1984–86 Five Record tracks, judging by the DDS tracklists.
- *Averti addosso* (1984): a four-track 12-inch. *Le canzoni per "Emmeti"* (1966): a stage-comedy record shared with Lea Massari and Piero Soffici.
- Live albums: *'89 dal vivo*, *Live @ RTSI*, *Milestones* (2007), *L'unica volta insieme* (2012), *Lisinski*.

Uncertain:
- *Un incontro in jazz* (2011): Discogs says "Album", but it may be a live set. The 2007/08 *Milestones* with the same musicians is marked live in MusicBrainz.
- *Appunti di un lungo viaggio*: Discogs gives 2019, MusicBrainz 2021. I used 2019.
- *Napoli con amore*: Discogs gives Oct 2012, MusicBrainz 2013. I used 2012.

## Artist-level influences in their own words

None found for the four artists in their own words:
- **Tenco.** Radio Città Aperta quotes him on Brel: "Credo anch'io [come Jacques Brel] che un uomo debba essere interamente quello che vuole essere". This is a view on life, not on music, and the bracket was added by the site. OndaRock lists his youthful jazz idols (Jelly Roll Morton, Chet Baker, Gerry Mulligan, Paul Desmond), but that is the critic's account, not his own words.
- **Gaber.** The Fondazione biography names only Sandro Luporini as his main influence, and Luporini is his co-author, so he is excluded.
