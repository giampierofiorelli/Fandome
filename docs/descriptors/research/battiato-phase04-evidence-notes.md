# Fandome — Franco Battiato Phase 04: evidence and critical decisions

Research date: **26 October 2026**. Scope: exactly four new chronological releases, not the earlier three phases. Sources and genre scopes can be joined through `album_id` and URL. All scales are editorial judgments anchored 0–5 by the repository guide; they are **not** numerical statements made by critics.

## 1. Orizzonti perduti (1983) — `battiato-orizzontiperduti`

### Year, type, producer
Original Italian EMI studio LP, released December 1983. The album is already represented in `catalog.ts` with this title; keep its existing ID. Original LP transcription, 2008 EMI digital metadata and 2023 La Stampa account all attribute the **production** to **Angelo Carrara**. Giusto Pio, technicians, engineer Enzo Denna and final mixer Alberto Radius are **not** to be imported as producers. The digital distribution page may state January 1, 1983 as a default platform date: this is not the actual day of first sale. Historical reports conflict on chart peak; we do not encode it.

### Genre order and dispute
- `synthpop`: original LP's musicbase genre/style tag; programmed song arrangements are central (medium). `electropop` is supported by music criticism's “pop-elettronico” label (not assumed synonymous with synthpop). `pop` by 8 concise verse/refrain structures on artist's page.
- `electronic`: official source stresses electronic instrumentation; `songwriter`: OndaRock calls this an increasingly *cantautorale* period (overall).
- `poprock|rock`: listed in release marketplace metadata, **texture and low strength only**. La Stampa says Battiato eliminated conventional guitars and drum kit; this is not genuinely rock-led. If downstream policy excludes unrepresentative shelf genres, drop these two with documented reason instead of treating them as primary recommendations.

### Instrument and production provenance
La Stampa names **Filippo Destrieri** (keyboards), **Gigi/Luigi Tonet** (sequencing), **Simone Majocchi/Maiocchi** (keyboard computer programming), **Gianfranco D'Adda** (percussion), **Giusto Pio** (violin). The original EMI LP metadata names their individual roles. Sources specify a **PPG Wave** synthesizer (secondary personnel documentation), so `ppgwave` is a proposed production token; `synth` covers its instrument. La Stampa mentions electronic drums; `drummachine` accepted as instrument without claiming a LinnDrum, TR-808 or other unsupported model. First-person Destrieri interview discusses **Fairlight** in the 1982–85 sequence and is relevant but is not a per-track technical log: `fairlight` carried at medium specificity; Claude may remove if requiring original LP model ID. `programming|synthprogramming` supported by original programmer credits. Do **not** add `digitaltape`, `analogtape`, `sampling`, `overdubbing`, `autotune` without more specific sources.

**Official-vs-session disagreement:** artist site says the album relies *only* on electronic instruments, but credits/La Stampa name violin and percussion. Treat official characterization as **arrangement predominance**, not proof that the credited players were absent. The electronic scale is **4**, not 5, because real violin and percussion are separately documented.

### Voice, text, language, related music
`soft|clear`: restrained lead delivery reported in 1983–2023 criticism; contrast with earlier theatrical records. `it` sung Italian. Themes `nostalgia|introspection|social|love|irony|identity`: *La stagione dell'amore* and *Campane tibetane* (memory/affection); *Zone depresse*, *Gente in progresso* and *Un'altra vita* (urban alienation/social introspection). `sounds_like` is editorial only (Alice, Peter Gabriel, Roxy Music), **not documented musical influence**; hence `influenced_by` deliberately empty.

### Scales
`energy=2` (mostly measured), `electronic=4` (mostly programmed with occasional acoustic violin/percussion), `mood=2` (wistful), `theatrical=2` (intimate), `experimental=3` (new early-80s computer approach), `polish=4` (precise production), `tempo=3` (medium song tempos), `groove=2` (some programmed rhythm but not club-led). `landmark=1` for the signature *La stagione dell'amore* and unusually radical synthesis of pop with new electronics.

## 2. Mondi lontanissimi (1985) — `battiato-mondilontanissimi`

### Record identity
Official artist site identifies original 1985 EMI studio work, despite **several newly recorded versions of previously released songs** (e.g. *I treni di Tozeur*, *Il re del mondo*, *Chan-son egocentrique*). It is not merely a compilation assembled from identical earlier masters. In 1984 the recordings were made at Studio Radius, with some mixing at Capitol Tower in Los Angeles; **Angelo Carrara** credited producer in detailed sleeve transcription and modern release metadata. Giusto Pio arranges/conducts choir/orchestra. David Cole is **mix engineer**, not producer. Some digital distributors assign a placeholder January 1 release day: retain 1985.

### Genre and review disagreement
- Primary `synthpop|electropop|pop|artpop|electronic`; AOTY community tags cite synthpop/artpop while Metallized and OndaRock identify electronic pop and named *Chan-son egocentrique* as electro-pop.
- `newwave|songwriter` have qualified critic support; the more contemplative songs are explicitly *cantautore* work.
- AllMusic assigns `europop|classicalpop|neoclassical`, with mainstream (`easylistening|newage|poprock`) breadth; the latter are **low-strength metadata categories** and placed after central styles.
- Metallized lists `worldmusic|rock` among a broad album spectrum, weaker as *dominant genres*. Novel `classicalpop` must be added to taxonomy if retained (previous Phase 03 also proposed it).
- `electropop` and `synthpop` are not synonyms. `newage` is not necessarily evidence of esoteric instrumentation merely because of lyrics; it is included because AllMusic explicitly catalogues it.

### Instruments, production
The album’s musician credits (Musica & Memoria original notes, Metallized): **Filippo Destrieri keyboards and computer**, **Giusto Pio orchestra and chorus direction**, **Alberto Radius guitar**, **Alfredo Riccardi cello**, **Gianfranco D'Adda drums**, **Lino Capra Vaccina tabla**. Strings/orchestra therefore real alongside synths, not purely digital. The 2025 Il Giornale retrospective explicitly mentions electronic synthesizers and computerized percussion; Destrieri’s interview independently details **Fairlight** use in this period. Production `programming|fairlight|stringarrangements`: first corresponds to exact player role, latter to credited live orchestral/string arranging/conducting; `fairlight` is an informed period-specific corroboration, not an inventory of each track's device. `drummachine` was **not** included because historical review mentions electronic percussion but original session has live drums, and particular per-track sources remain unclear.

### Voice and multilingual details
Battiato primarily `clear|soft`; album also has documented **choral** performances. The source includes English portions/songs (`No Time No Space`, `Temporary Road` and/or fragments), French in *Chan-son egocentrique*, with Italian dominant. This uses `it|en|fr`, but should be rechecked from the original 1985 vocal master, not foreign editions. Themes `spiritual|introspection|identity|love|social|nostalgia`, notably metaphysical time/space and *L'animale*’s human intimacy. No musician explicitly names an album-specific formative influence in checked reliable sources, so `influenced_by` empty; comparisons `Alice|Giuni Russo|Peter Gabriel|David Bowie` describe sound only.

### Scales
`energy=3, electronic=4, mood=3, theatrical=3, experimental=2, polish=5, tempo=3, groove=3`. Electronic keyboards and orchestral spectacle coexist in accessible concise songs. `landmark=1`: definitive mid-decade technology/space phase; several lasting repertory songs. Some reviewers praise futurism while others fault excessive synthetic sound and re-recordings: recorded disagreement, no forced consensus.

## 3. Genesi (1987) — `battiato-genesi`

### Why `live` despite a main-album discography entry
Original work: **first opera**, three acts. Official artist site credits the 26 April 1987 première; Fonit Cetra album recorded during theatrical performances at Teatro Regio Parma **29 April, 3 and 5 May 1987**, explicitly **live digitally**, confirmed by original sleeve reproduction and Warner archival reissue. There is no independent studio cast album in 1987. `type=live` is the most precise permitted format and `landmark=1` justifies the user's express exception allowing genuinely important live albums. This is NOT an unrelated compilation of concert versions and should not be deleted as an ordinary retrospective live record. Another route, type=`studio` as “original cast recording,” obscures documented origins and is not recommended. NOT `soundtrack`: an opera is not film/TV scoring.

### Producer accuracy
**Leave `producers` EMPTY.** Original sleeve says the theatrical work was “Produced by Teatro Regio di Parma with Milano Suono,” and official site describes Ricordi/BMG production/publication; neither is a *named record music producer or co-producer*. Composer Franco Battiato, stage conductor **Alessandro Nidi**, and mixers Battiato/Ezio De Rosa cannot be promoted into credited record producers on this evidence alone.

### Genres, instruments and recording
Core genres `opera|classical|modernclassical`; Rai Cultura specifically describes *contemporary opera* mixing sacred/symphonic and electronic music, translated to repository modern classical token; Warner original reissue also explicitly describes `electronic|pop` components. An avant-garde approach is discussed in the notes, but `avantgarde` genre was not entered: available sources describe unusual collage rather than assigning the album that specific named genre.

Original record lists **Orchestra Sinfonica dell’Emilia-Romagna Arturo Toscanini**, **Coro del Teatro Regio di Parma**, soprano **Donatella Saccardi and Louisa Kennedy**, tenor **Vincenzo La Scola**, baritone **Nicolas Christou**, reciting/solo **Juri Camisasca**, conductor **Alessandro Nidi**. Original recorded program additionally documents **Filippo Destrieri's sampler**, **Michele Fedrigotti piano/keyboard/sampler**, percussionists and orchestral brass. Performer Fedrigotti confirms direct participation in album sessions. `orchestra|strings|piano|keyboards|sampler|percussion|brass` are tied to these specific printed/program musician lists, not presumed from opera genre. `concertrecording|sampling|programming|digitalediting`: original 1987 sleeve documents live digital concert recording and digital editing; Destrieri in 2021 directly attests extensive vocal sampling and electronic programming in *Genesi*. New production token `digitalediting` requires Claude vocabulary update; **digital editing is not proof of specific Pro Tools, digital tape transport or DAW**.

### Text-language precision
Original work draws on **Sanskrit, Persian, Greek and Turkish texts**, adapted by Battiato; original text sections by Battiato and Tommaso Tramonti. Warner lists actual mixed text languages **Italian, Sanskrit, Persian, Turkish, English, French**. Latin (*Rorate Coeli*) and Greek (*Kyrie Eleison*) appear in titles/liturgical phrases, but may not prove a *full sung section* in those original tongues. Proposed `language=it|sa|fa|tr|el|fr|en|la` is **broader than fully audibly established sung languages**, and is marked for second-person libretto/audio validation. For strict confirmed vocal-language-only use `it|sa|fa|tr|en|fr` until checking the published libretto line by line. Do not confuse source text's original language with language of performed translation.

Themes: mythic/sacred quest `spiritual|storytelling|identity|social`; `voice=choral|powerful|spoken`; other choices may capture recitative but current voice taxonomy lacks operatic soprano or tenor subtypes. The comparisons to Glass/Stockhausen in `sounds_like` are **editorial analogies only**; leave `influenced_by` blank.

### Scale anchors and disagreement
`energy=3, electronic=2, mood=2, theatrical=5, experimental=4, polish=4, tempo=2, groove=0`. This is a full staged opera with singers/choir and intermittent electronics. The 2021 Warner reissue emphasizes popular acclaim and genre novelty; some traditional operatic critics did not apply standard opera measures. Do not mistake this retrospective marketing narrative for independent consensus. Overall `confidence=medium` because original provenance is strong but multilingual annotation and musical genre boundaries remain uncertain.

## 4. Nómadas (1987) — `battiato-nomadas`

### Standalone release, not a reissue of Mondi lontanissimi
An original **1987 Spanish EMI-Odeon LP** (catalogue **066-1187741**, copyright ℗1986) with nine Spanish-language tracks: **Nómadas** (Juri Camisasca composition), **Bandera blanca, Yo quiero verte danzar, Vía Láctea, La era del jabalí blanco, Perspectiva Nevskj, Despertar en primavera, Mal de África, Otra vida**. It is **not identical** to the nine tracks of *Mondi lontanissimi*. Eight songs are Castilian reworkings of songs from 1979–85, plus the title song in Spanish. **Aurora Tagle** is named for Spanish lyric translations on original label; avoid inaccurate fan-discography blanket “all lyrics by Battiato.” Distinct language arrangements/vocals and independent release justify inclusion as `type=studio` **under the user's material re-recording rule**, but it is **not nine brand-new 1987 compositions**. If a later cataloguing rule treats language-variant/re-recording albums as `compilation`, document that as a policy change before import; discographic LP entry categorizes it as `Album`.

### Credited producer vs arranger
Original 1987 LP explicitly lists **Arranged By – Battiato, Pio** but does **not** name a music producer. AllMusic's **1987 Nomadas** album listing directly lists Franco Battiato as **Producer**, so `producers=Franco Battiato` is accepted at **medium** confidence, with an instruction to inspect original EMI session/booklet if available. **Do not** import **Giusto Pio** as producer from arrangement, nor copy **Angelo Carrara** from the older base recordings as record producer for the 1987 album without a direct credit. Genre `latin` reflects marketplace classification, **not** a claim of salsa/cumbia/Latin rhythmic form.

### Genre classification and deliberately empty evidence fields
Spanish 1987 LP lists **Pop, Latin, Ballad**: only **`pop|ballad|latin`** are entered because they are directly named for this album. Synth-pop and electro-pop may describe some of its reused songs, but existing evidence does **not** establish these as documented genres of this specific 1987 recording. The uneven reuse of arrangements is debated in fan forum, which is recorded as a research caveat, not used to invent a genre or instrument.

**`instruments` and `production` intentionally EMPTY.** The original Spanish sleeve transcribed online has no record-specific players, keyboard machines or engineering/mix chain; it would be wrong to copy *Mondi lontanissimi* Destrieri, Radius, Fairlight or strings credits wholesale. “Bandera blanca” is said to have a new electronic treatment in secondary discography; this confirms a difference, **not** which synth or production hardware recorded it. More original documentation is needed.

`language=es` applies to the whole album. `voice=clear|soft` is singer's audible delivery (not a claim of pitch correction). Themes `introspection|spiritual|social|nostalgia|identity` recur through texts. `landmark=1` denotes its **major Spanish-language breakthrough** (OndaRock and Spanish journalism), **not** a claim that Nómadas is Battiato's most original new-composition album. All numerical scales moderate; `confidence=medium` because record type and lyric translations are strong but fresh-session sonic documentation limited. No album-specific verified artist influences: blank `influenced_by`.

## Common taxonomy and validator observations

- `classicalpop` is a **new genre token**, directly specified in AllMusic on *Mondi lontanissimi*. Prior Phase 03 proposed it; Claude should check whether it has already been imported before adding a duplicate enum/member. Suggested parents `pop|classical`.
- `ppgwave` is a **new production token** for the PPG Wave programming reported for *Orizzonti perduti*; avoid inferring an exact model version. `digitalediting` is a **new production token** for original *Genesi* sleeve's credited Digital Editing. Other instrument/production tokens are in the repository's current guide and source lists.
- When importing, `genesi` is labelled `type=live` because the original release is the **recorded first stage production**, not because Fandome should generally import live albums.
- All four `influenced_by` deliberately blank. Literary sources, sacred texts and soundalike critics' comparisons belong in notes, not that field. Refer to separate prior artist-influence package for historically documented general background.
- Sonic similarity in `sounds_like` is an editorial comparison, not documentary influence; no evidence of producer transmission is asserted.
- We have not edited GitHub. A CSV structure/type/token check is possible here; **the repository TypeScript validator and test suite must be run after catalogue/taxonomy updates by Claude**. Do not state it has been run here.
