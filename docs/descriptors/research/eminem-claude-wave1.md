# Claude research notes (Oct 2026, wave 1)

# Wave 1 — group G: evidence notes

Albums: eminem-themarshallmatherslp, eminem-theeminemshow, gorillaz-gorillaz, gorillaz-demondays, kendrick-goodkidmaadcity. Titles, years and ids match `src/data/catalog.ts` (lines 75, 114, 121). The repo has no descriptor, reception or legacy file yet for eminem, gorillaz or kendrick. Scene strings follow `src/data/scenes.ts` (eminem `US en 1990 hiphop`, gorillaz `GB en 2000 alt,hiphop`, kendrick `US en 2010 hiphop`).

Wikipedia was not cited anywhere. Credits come from Discogs release pages, which transcribe the liner notes. Discogs "styles" were **not** used for genres.

## Sources opened (key)

- P-MMLP: Pitchfork Sunday Review, Jeremy D. Larson, 15 Apr 2018, 9.4. https://pitchfork.com/reviews/albums/eminem-the-marshall-mathers-lp/
- RS-MMLP: Rolling Stone, Touré, 6 Jul 2000. https://www.rollingstone.com/music/music-album-reviews/the-marshall-mathers-lp-203914/
- CG: Robert Christgau, Consumer Guide (MMLP A, Eminem Show A−). https://www.robertchristgau.com/get_artist.php?id=423
- CG-ES: Christgau, "White American: Eminem Makes His Rock Move", Village Voice, 11 Jun 2002. https://www.robertchristgau.com/xg/rock/eminem-02.php
- P-ES: Pitchfork, Ethan P., 3 Jun 2002, 9.1. https://pitchfork.com/reviews/albums/2771-the-eminem-show/
- SG-ES: Stereogum, Tom Breihan, 26 May 2022. https://stereogum.com/2187999/the-eminem-show-turns-20/reviews/the-anniversary
- RTE-ES: RTÉ, Luke McManus, 2002. https://www.rte.ie/entertainment/music-reviews/2002/0604/448712-eminemshow/
- P-GZ: Pitchfork, Rich Juzwiak, 31 May 2001, 7.0. https://pitchfork.com/reviews/albums/3524-gorillaz/
- SG-GZ: Stereogum, Ryan Leas, 26 Mar 2021. https://stereogum.com/2121690/gorillaz-turns-20/reviews/the-anniversary
- RO-GZ: Roland Articles, Jordan Blum, 2021. https://articles.roland.com/gorillaz-at-20-the-story-of-the-virtual-bands-debut/
- P-DD: Pitchfork, Rob Mitchum, 22 May 2005, 6.9. https://pitchfork.com/reviews/albums/3526-demon-days/
- SG-DD: Stereogum, Ryan Leas, 8 May 2025. https://stereogum.com/2307166/gorillaz-demon-days-turns-20/reviews/the-anniversary
- VICE-DD: Vice/Noisey, Angus Harrison, 26 Aug 2016. https://www.vice.com/en/article/gorillaz-demon-days-retrospective/
- RTE-DD: RTÉ review, 9 Jun 2005. https://www.rte.ie/entertainment/music-reviews/2005/0609/449296-gorillaz/
- DIS-DD: Drowned in Sound, Anthony Gibbons, 23 May 2005, 7/10. https://www.drownedinsound.org/archive-album-review-gorillaz-demon-days-12332/
- P-GK: Pitchfork, Jayson Greene, 23 Oct 2012, 9.5 BNM. https://pitchfork.com/reviews/albums/17253-good-kid-maad-city/
- CX-GK: Complex, David Drake, 23 Oct 2012. https://www.complex.com/music/a/david-drake/kendrick-lamar-good-kid-maad-city-review
- CXM-GK: Complex, "The Making of good kid, m.A.A.d city" (Insanul Ahmed). https://www.complex.com/music/a/insanul-ahmed/the-making-of-kendrick-lamars-good-kid-maad-city
- GR-GK: GRAMMY.com, 10-year anniversary feature, 2022. https://www.grammy.com/news/for-the-record-kendrick-lamar-good-kid-maad-city-ushered-in-new-era-for-west-coast-rap-storytelling-10-year-anniversary
- RS500: Rolling Stone 500 Greatest Albums (2020), Rolling Stone Japan reprint: "115. Kendrick Lamar 'good kid, m.A.A.d city'", "145. Eminem 'The Marshall Mathers LP'". https://rollingstonejapan.com/articles/detail/35155/15/1/1
- Discogs credits: MMLP https://www.discogs.com/release/223754 · Eminem Show https://www.discogs.com/release/356963 · Gorillaz https://www.discogs.com/release/99819 · Demon Days https://www.discogs.com/release/5369331 · GKMC deluxe https://www.discogs.com/release/4166261

**Could not open:** AllMusic (403), Metacritic (403, Wayback blocked too), Slant (403), Spin (403), AOTY (403), and the Rolling Stone reviews of The Eminem Show and GKMC (not found). So the reception rows have no Metacritic scores. The Eminem Show's "best rap-rock album in history" (Rolling Stone, Kris Ex) is known only second-hand, so it was **not used**. The same goes for Eminem's interview in The Face, which I know only through Christgau's paraphrase.

---

## eminem-themarshallmatherslp

- **genres**
  - `hiphop|rap`: Pitchfork genre "Rap". RS-MMLP: "outrageous-bass hardcore raw hip-hop made for cruising in lowriders ('Amityville,' 'I'm Back')", so `hardcorehiphop`.
  - `funk|rnb`: RS-MMLP: "slick, bright, melodic funk that's so R&B-ish, you can dance to it ('Who Knew,' 'The Real Slim Shady')".
  - `horrorcore` (NEW token): P-MMLP: "the horrorcore of 'Remember Me?'". One track, so it goes last.
- **energy 4**: RS-MMLP: "a car-crash record: loud, wild, dangerous, out of control".
- **electronic 3**: Dre's programmed beats with live bass, guitar and keys in the credits.
- **mood 1**: P-MMLP: the label found it "macabre, morose, reflexive, and unflinchingly personal".
- **theatrical 4**: RS-MMLP: "he uses six different voices in one stretch of 'Criminal'". P-MMLP mentions "histrionic flair" and horrorcore.
- **experimental 2**: classic rap structures. The novelty is in the rhyme schemes, not the form.
- **polish 4**: RS-MMLP: Dre "slick, bright".
- **tempo 3**: RS-MMLP describes a mix of danceable funk and "slow, driving" cruising tracks.
- **groove 3**: some tracks "you can dance to" (RS-MMLP).
- **voice** `rap`.
- **instruments**: Discogs credits list Bass (Mike Elizondo), Keyboards (Tommy Coster Jr., Camara Kambon) and Guitar (John Bigham, Sean Cruse). P-MMLP: "Dr. Dre's gooey bass and ornamented harpsichord" ('The Real Slim Shady') and "the three-note piano rhythm" ('The Way I Am').
- **production**:
  - `drumprogramming`: Discogs "Drum Programming: DJ Head".
  - `sampling`: P-MMLP: 'Stan' was "built from a beat made by the 45 King after he heard the Dido song 'Thank You'". Discogs lists Dido as a writer.
- **lyrics**:
  - Fame and identity: P-MMLP: "fame-drenched persecution complex". Storytelling: 'Stan'. Irony/satire: P-MMLP calls him a "prototypical troll".
  - Social: P-MMLP: "hypocritical gun legislation … Columbine".
  - Introspection: "unflinchingly personal".
  - Heartbreak: RS-MMLP calls 'Kim' "the most harrowing sick-love song".
- **producers**: Discogs track credits list Dr. Dre, Mel-Man, F.B.T. (Jeff Bass, Mark Bass) and The 45 King. Eminem's own credit was dropped. Dre is also executive producer.
- **sounds_like**: empty. RS compares Eminem with Biggie, Howard Stern and Tupac on lyrics and energy, not sound.
- **influenced_by**: empty. Pitchfork names Big Daddy Kane, Masta Ace and Nas, but only for The Slim Shady LP and as career loves.
- **landmark 1**: P-MMLP "monumental album". CG-ES: "makes The Marshall Mathers LP a stone classic".
- **confidence**: high.

## eminem-theeminemshow

- **genres**
  - `hiphop|rap`: Pitchfork genre "Rap".
  - `rock`: CG-ES title "Eminem Makes His Rock Move" and "the music of The Eminem Show … owes more to '70s rock than to any strain of black music … in an interview in The Face, he asserts it". SG-ES: "his music was full of distorted guitars and classic-rock samples". Uncertain: plain `rock` was chosen because Christgau frames the whole album as a rock move. A `raprock` source (RS) could not be opened.
  - `disco`: CG-ES: lead single 'Without Me' "moves like the most mechanical kind of '70s disco". SG-ES: "self-produced cartoon-disco beat". It is the lead single, so it sits within the first places.
  - `funk`: CG-ES: "Dre's funk" on 'Business'.
  - `techno`: SG-ES: the 'Without Me' beat "was at least 75% techno".
  - `metal`: CG-ES: 'Square Dance' has "ominous soundtrack-symphony metal chords". One track.
  - `powerballad`: RTE-ES: 'Hailie's Song' "sounds like the hideous descendant of an 1980s power ballad". One track.
- **energy 4**: distorted guitars. CG-ES: "rhythms march, stride, and vaunt; they stomp".
- **electronic 3**: synth hooks and programmed drums alongside guitars and bass.
- **mood 2**: SG-ES: "pointedly no fun at all", "the record sounds like it's got a stick up its ass"; 'Without Me' is a fun exception.
- **theatrical 4**: show-business concept with curtains (SG-ES) and a "tender orchestral prelude" (P-ES). CG-ES: "rock self-importance".
- **experimental 2**.
- **polish 4**.
- **tempo 2**: CG-ES: the rhythms "march … stomp … plod". 'Cleanin' Out My Closet' and 'Soldier' are "jumpier".
- **groove 2**: CG-ES: Dre's tracks are the light relief, the rest rock-marching.
- **voice** `rap`. P-ES notes he "sings" on 'Hailie's Song', but rap is the lead voice.
- **instruments**:
  - Discogs: Keyboards (Jeff Bass, Luis Resto, Mike Elizondo, Neff-U), Guitar and Bass (Jeff Bass, Steve King, Elizondo), "Guitar [Solo]: Joe Perry" on 'Sing for the Moment'.
  - SG-ES mentions "distorted guitars", so `electricguitar`. SG-ES's "icy synth riff" and CG-ES's "simplistic synth hook" give `synth`.
  - `drums`: SG-ES: "'Til I Collapse" deploys Queen's 'We Will Rock You' drums.
- **production**:
  - `drumprogramming`: Discogs (DJ Head, Mel-Man, Denaun Porter).
  - `sampling`: SG-ES: "the grating sample of Aerosmith's 'Dream On'".
  - `distortion`: SG-ES "distorted guitars".
- **lyrics**:
  - Fame and race: SG-ES on 'White America'. Introspection: "attempted to grapple with what had happened in his life".
  - Political: SG-ES: "sneering at George W. Bush and his Iraq war".
  - Love: 'Hailie's Song', "a heartwarming little ditty".
  - Irony: CG-ES "tongue-in-cheek".
- **producers**: Discogs lists Dr. Dre ('Business', 'Say What You Say', 'My Dad's Gone Crazy'), Jeff Bass (producer on 'Cleanin' Out My Closet', co-producer on four more) and Denaun Porter (co-producer, 'When the Music Stops'). Dropped: Eminem's own credit, DJ Head and Jeff Bass "additional", and the executive credits.
- **sounds_like** (P-ES, track-level; 20 tracks including skits):
  - "lame linkin park riffs rev up" on 'White America': `Linkin Park [1/20]`.
  - "the bounciriffic everlast-dreams-about-the-big-tymers 'superman'": `Everlast [1/20]|Big Tymers [1/20]`.
  - Excluded: Aerosmith and Queen (sampled or interpolated), Dr. Dre ("ersatz-Dre", RTE-ES; he is a producer on the album), Lexicon of Love (the cover art, not the sound).
- **influenced_by**: empty. Eminem's statement to The Face, as Christgau reports it, names '70s rock in general, no artist.
- **landmark 0**: SG-ES: "can't be considered a classic on the level of Em's first two albums". No source calls it defining.
- **confidence**: high.

## gorillaz-gorillaz

- **genres**
  - `triphop`: P-GZ: "'New Genious (Brother)' is gloomy trip-hop". RO-GZ: "Gorillaz fused styles—trip-hop, punk, electronica, art pop". RO-GZ also hears a "trip-hop/alternative rock influence" on 'Clint Eastwood'.
  - `dub`: SG-GZ: "a lot of trippy dub stylings". P-GZ: "dub-lite, 'Slow Country'".
  - `hiphop`: P-GZ: "the same brooding backpacker hip-hop". SG-GZ: "a couple rap songs", hence `rap`.
  - `pop`: SG-GZ: "pop songs both ramshackle and giddily animated".
  - `artpop`, `electronica`, `punk`: RO-GZ. SG-GZ also has "a handful of punk fervor outbursts".
  - `britpop`: SG-GZ: "'Re-Hash' and '5/4' and 'M1A1' are all not too far removed from the Britpop idiom".
  - `acousticpop`: P-GZ: 'Re-Hash' is "a generic marriage of acoustic pop and stock hip-hop beats".
  - `reggae`: SG-GZ: Albarn "wanted to expand his palette into reggae, dub, hip-hop".
  - `twostep`: P-GZ: "Ed Case's two-step-meets-raga remix of 'Clint Eastwood'".
  - Not used: Pitchfork's site genre tag "Rock" (P-GZ itself talks of only "the record's few rock tracks").
- **energy 2**: SG-GZ: "strung-out, druggy mood", "nodding-out sonic experiments", with some punk outbursts.
- **electronic 3**: SG-GZ: "material based on beats and synths". P-GZ: "the Automator throwing down beats, manipulating samples", plus guitars on the rock tracks.
- **mood 2**: SG-GZ: "melancholic city drift", "downer pop", against the "technicolor pop" of '19-2000'.
- **theatrical 2**: P-GZ: "laconic vocal haze". SG-GZ: Albarn "drawling and bleary".
- **experimental 3**: SG-GZ "sonic experiments". P-GZ: "small-scale experimentation", "successfully eclectic".
- **polish 2**: SG-GZ: "ramshackle", "rougher around the edges". RO-GZ: "lo-fi catharsis".
- **tempo**: empty, not enough evidence.
- **groove 3**: P-GZ: "a sunny groove" on 'Slow Country'.
- **voice** `soft|rap`: Albarn's "croon … laconic vocal haze" (P-GZ) and Del's rap verses.
- **instruments**:
  - `synth`: SG-GZ.
  - `sampler`: P-GZ "manipulating samples".
  - `turntables`: P-GZ "Kid Koala's scratches". SG-GZ: Kid Koala provides "turntables".
  - `piano`: P-GZ "a light, Latin-tinged piano".
  - `brass`: SG-GZ "an infectious horn part" on 'Rock the House'. "Horn" was mapped to `brass`.
- **production**:
  - `sampling`: P-GZ.
  - `falsetto`: P-GZ "Albarn's falsetto" on 'New Genious'.
  - `lofi`: RO-GZ "lo-fi catharsis of 'Tomorrow Comes Today'".
  - Not used: Discogs "Performer [Portions of 'Hit or Miss']: Bo Diddley" (a sample, so no influence).
- **lyrics**: empty. Reviews describe a mood, not themes.
- **producers**: Discogs lists Dan the Automator (tracks 1–12 and 14–16), Jason Cox and Tom Girling (co-producers, and producers of track 13). Dropped: the "Gorillaz" credit, the Ed Case remix, and Damien Mendis (producer of track 17 on this European edition, which looks like a bonus track; not verified).
- **sounds_like** `Blur (13)`: SG-GZ: "it had the same strung-out, druggy mood of Blur and 13". UNCERTAIN: Blur is Albarn's own band. The rules only bar own bands from influenced_by, so the owner should decide.
  - Excluded: Deltron 3030 (P-GZ: "the similar Deltron 3030 LP"), because that group is the album's producer (Automator) plus guests (Del, Kid Koala).
- **influenced_by**: empty. No Albarn statement naming artists was found.
- **landmark 1**: SG-GZ: "the self-titled album marked a giant pivot in his career".
- **confidence**: medium. Few full contemporary reviews could be opened.

## gorillaz-demondays

- **genres**
  - `hiphop`: SG-DD: "few vestiges of rock music, instead replaced by hip-hop beats, squelching synths".
  - `triphop`, `alternativerock`, `reggae`, `psychedelia`: VICE-DD: "an album that flits between UK rap, alternative rock, piano-pop, trip-hop, reggae and Beach Boys psychedelia".
  - `ukhiphop`: from VICE-DD's "UK rap", treated as the same genre. Flag if the owner wants a separate `ukrap` token.
  - `pianopop` (NEW token): from VICE-DD's "piano-pop".
  - `dub`: SG-DD: "dubby choir refrains", "dub-synth-pop" ('Last Living Souls'). RTE-DD: "dub foundations".
  - `synthpop`: SG-DD "dub-synth-pop".
  - `poprap`: SG-DD: "funky pop-rap hybrids".
  - `dancepop`: SG-DD: "the slithering dance-pop of 'DARE'". DARE is a single.
  - `punk`: P-DD: "the robo-punk 'White Light'". One track.
- **energy 3**.
- **electronic 4**: SG-DD "hip-hop beats, squelching synths"; P-DD "his fleet of retro keyboards"; live strings in the credits.
- **mood 1**: SG-DD: "a project about end times", "darkened atmosphere". Albarn: "the world in a state of night". P-DD: "'foreboding,' 'ominous,' and 'sinister'".
- **theatrical 4**: choirs, Hopper's narration. SG-DD: "a concept album in style and theme".
- **experimental 3**: P-DD: "experiments", "genre sketches".
- **polish 4**: P-DD: Danger Mouse's "colorfully dense production". SG-DD: "muscular, intricate sound", "big-budget endeavor".
- **tempo**: empty.
- **groove 3**: P-DD: "Albarn can't help making his haunted house a discotheque", "dance-floor bounce".
- **voice** `soft|rap|spoken`: Albarn is the lead; RTE-DD notes "an incongruous semi-rap from Albarn" plus the rap guests; Hopper's spoken word (P-DD).
- **instruments**:
  - Discogs credits: Cello, Viola, Violin, Double Bass, Guitar (Simon Tong), Piano solo (Ike Turner).
  - `synth`: SG-DD "squelching synths". `keyboards`: P-DD "retro keyboards".
  - `bass`: SG-DD "rubbery basslines"; P-DD "an anxious bassline".
  - `piano`, `percussion`: RTE-DD "torrent of piano, percussion and pounding bass".
  - `strings`: RTE-DD "vibey strings".
- **production**:
  - `sampling`: P-DD "sampled zombie-flick scores". VICE-DD: Danger Mouse "treated each organic element … like a sample".
  - `programming`: Discogs "Programmed By: James Dring".
  - `wahwah`: DIS-DD "porno style wah wah ('Every Planet We Reach Is Dead')".
  - `soundeffects`: RTE-DD "videogame effects" ('Kids With Guns').
  - `falsetto`: P-DD "Prince's synths and falsettos" ('DARE').
- **lyrics**:
  - Political: VICE-DD covers the Iraq war and Bush.
  - Social: environmental collapse and children with guns.
  - Storytelling: Hopper's fable. SG-DD: "the whole album kind of tells the story of the night".
- **producers**: Discogs "Producer: Danger Mouse, Gorillaz, James Dring, Jason Cox". The Gorillaz credit was dropped.
- **sounds_like**:
  - `Goblin`: P-DD: "For most of the album, Danger Mouse & Albarn make like they're Dario Argento & Goblin".
  - `Prince [1/15]`: P-DD 'DARE'.
  - `The Beach Boys [1/15]`: P-DD "Beach Boys replicant 'Don't Get Lost in Heaven'"; DIS-DD "the Beach Boys-tinged 'Don't Get Lost In Heaven'".
  - `Ennio Morricone [1/15]`: RTE-DD "'O Green World' sees Albarn making a fair stab at a wordless pastiche of Ennio Morricone".
  - Excluded: The Specials (P-DD's 'Ghost Town' line is hypothetical) and Coxon/Blur riffing (Albarn's own band).
- **influenced_by**: empty.
- **landmark 1**: SG-DD: "it didn't just establish Gorillaz as an ongoing prospect".
- **confidence**: high.

## kendrick-goodkidmaadcity

- **genres**
  - `hiphop|rap`: Pitchfork genre "Rap". CX-GK: "a truly original, compelling rap record".
  - `westcoasthiphop`: GR-GK: "a new era for West Coast rap storytelling".
  - `gangstarap`: P-GK: "ghosts of West Coast gangsta-rap haunt this album's edges".
  - `gfunk`: P-GK: on 'The Art of Peer Pressure' "the music downshifts into menacing G-funk mode". One track.
- **energy 3**.
- **electronic 3**: sampled and programmed beats with live bass, guitars and strings (credits; CXM-GK, Tha Bizness: "There was live instruments, live bass").
- **mood 2**: gang violence and terror ('m.A.A.d city'), set against celebratory singles. CXM-GK, on 'Swimming Pools': "It sounds like we are celebrating having a good time before you actually dive into what he's saying".
- **theatrical 4**: P-GK: "A Short Film … you could … build a set for a three-act play". CX-GK: "widescreen, cinematic presentation".
- **experimental 2**: CX-GK: power "not from its difficulty or any formal innovation".
- **polish 4**: P-GK "pulverizing beats", "radio-ready single". CXM-GK: Dr. Dre mixed it.
- **tempo**: empty.
- **groove 3**.
- **voice** `rap`: P-GK: "Kendrick rapping in three voices".
- **instruments**:
  - Discogs: Guitar and Bass (Marlon Williams, Daniel Seeff), live string arrangement (Charly and Margaux), Violin (Mary Keating), Piano (Gabriel Stevenson).
  - CXM-GK, Sounwave: "the extra guitars, strings".
  - `sampler`: Tha Bizness: "Native Instruments Maschine".
- **production**:
  - `sampling`: P-GK "a highly recognizable Janet Jackson sample ('Poetic Justice')". CX-GK: "the sample from Ice Cube's 'Bird in the Hand'".
  - `vocoder`: CXM-GK, Just Blaze on 'Compton': "I went back and added that whole synth and vocoder at the end". One track.
- **lyrics**:
  - Storytelling: the "short film". Social: gang violence. Identity and introspection: P-GK "unvarnished … peek into the rapper's inner life".
  - Spiritual: P-GK: "family and faith". Sensuality: P-GK "young lust".
- **producers**: Discogs credits for the 12-track standard edition: Tha Bizness, Sounwave, Hit-Boy, Tabu, DJ Dahi, Scoop DeVille, Pharrell Williams, Like, Skhye Hutch, T-Minus, Terrace Martin, Just Blaze.
  - Dropped: "additional production" (Sounwave, Terrace Martin), associate producers and the executive producers (Dr. Dre, Anthony Tiffith).
  - Deluxe-only producers left out: Rahki, Dawaun Parker, Jack Splash, DJ Khalil.
- **sounds_like** `OutKast`: CX-GK: "Musically, the album is obviously indebted to Outkast (see his delivery throughout; the hook on 'Money Trees'; the general interrogative vibe)".
- **influenced_by** `Tupac Shakur (The Don Killuminati: The 7 Day Theory)`: GR-GK quotes Lamar in DubCNN (March 2013): "I always knew my first album [would] be a concept simply because I looked at all the best albums that I grew up to," "citing The Chronic and Tupac's Makaveli".
  - EXCLUDED, owner to decide: Dr. Dre (The Chronic). Lamar cites it in that same quote, and TDE president Punch says "We've always been big on albums with skits like The Chronic" (CXM-GK). But Dre is a guest on 'Compton' and the executive producer, and the rules say "not collaborators".
  - MC Eiht ("MC Eiht is a great influence on me", Lamar in CXM-GK) is excluded for the same reason: he is a guest on 'm.A.A.d city'.
- **landmark 1**: GR-GK: "an instant classic"; Rolling Stone's best concept album of all time.
- **confidence**: high.

---

## Reception (reasoning)

- **MMLP 5/5/3**: Pitchfork 9.4; Christgau A ("stone classic"); RS 500 (2020) No. 145. It is the career peak. Mainstream 3: an artist-led record with Dre beats, not formula.
- **Eminem Show 4/4/3**: Pitchfork 9.1; Christgau A−; Stereogum says it falls short of the first two; RTÉ is negative. Mainstream 3: self-produced, though critics note a rock-radio bid.
- **Gorillaz 5/4/3**: the record that made the project (Stereogum's "giant pivot"). Pitchfork 7.0, praised overall. Mainstream 3: auteur eclecticism inside a gimmick concept.
- **Demon Days 5/4/3**: Pitchfork 6.9, DiS 7, RTÉ positive; Stereogum and Vice rate it higher in retrospect. Mainstream 3.
- **GKMC 5/5/3**: Pitchfork 9.5 Best New Music; RS 500 No. 115; Album of the Year Grammy nominee; GRAMMY.com: "no focus group-engineered collection".

## Legacy (reasoning)

- **MMLP 4**: Tone Deaf says later artists, Kendrick Lamar and Tyler, The Creator by name, cite it as a key influence.
- **Gorillaz 3**: Roland Articles names acts it inspired (Flatbush Zombies, Tyler, the Creator…).
- **Demon Days 3**: Stereogum says it set "the stage for genre elision becoming the norm".
- **GKMC 4**: GRAMMY.com: "inspired a wide range of artists", "influence on creating conceptual work over singles".
- **Eminem Show**: no row; no professional source on influence was found.

## New tokens

- Genre `horrorcore` (Pitchfork on 'Remember Me?', MMLP).
- Genre `pianopop` (Vice on Demon Days, "piano-pop").

Mapping choices to check:
- "UK rap" was written as the existing `ukhiphop`.
- "horn part" was written as the instrument `brass`.
- Native Instruments Maschine was written as `sampler`; a `maschine` production token could be added if wanted.

## Uncertain

- The Eminem Show `rock`: plain rock rests on Christgau's framing of the album as a rock move. The Rolling Stone "rap-rock" review could not be opened.
- `Blur (13)` as sounds_like for Gorillaz: Blur is Albarn's own band.
- Dr. Dre (The Chronic) is left out of GKMC influenced_by because he is a collaborator.
- There are no Metacritic or AllMusic values anywhere (sites blocked).
- Gorillaz confidence is medium; its lyrics are empty.
- Tempo is empty for the three non-Eminem albums.

