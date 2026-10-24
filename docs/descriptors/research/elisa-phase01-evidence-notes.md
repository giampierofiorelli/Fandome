# Elisa — Fandome Phase 01: album-specific research

This is a **strictly incremental** dossier comprising the first three original studio releases, not a retrospective roll-up. The data in the 25-column CSV are editorial hypotheses based on the cited musical assessments and documented recordings; the 0–5 values are **not measured acoustic values**.

## Discography, identity and edition safeguards

- Existing Fandome IDs are **`elisa-pipesflowers`** (1997), **`elisa-asilesworld`** (2000) and **`elisa-thencomesthesun`** (2001). Existing Fandome spelling of the second title is **`Asile’s World`** (curly right apostrophe). CSV deliberately preserves that **exact** catalog title; reviewers and external records frequently print the ASCII `Asile's World`. Keep internal identity separate from publication typography.
- *Pipes & Flowers* was released in **Italy September 1997**, although AllMusic prominently displays a later **1998 international issue** [P97_RO,P97_MB,P97_AM]. Original record co-produced by **Corrado Rustici and Darren Allison**, not simply Rustici [P97_MB,P97_AM].
- *Asile’s World* first released **5 May 2000** with 13 tracks [A00_RO,A00_PRESS]. The 2001 **16-track reissue** added three tracks including **Luce (tramonti a nord est)** (Italian), confirmed **explicitly by label Sugar** [A00_SUGAR] and distributor Universal [A00_UNI]. Hence **language=en** here for the *original 2000 album*: do not infer `it` from reissue or from the late-2001 streaming bundle. AllMusic itself groups several releases under the same page and its producer credits may merge those editions [A00_AM].
- *Then Comes the Sun* was released **9 November 2001** in Europe [T01_MB,T01_RO]; AllMusic currently displays a regional **11 December 2001** date [T01_AM]. Recorded at The Plant, Sausalito, with guitar, piano, synthesizer/programming, rock rhythm players and some strings. **Corrado Rustici** is named producer [T01_RO2,T01_MB2]. Do not count later U.S. compilation *Elisa* as a new Italian studio successor.
- On **2026-10-24**, *Kintsugi* is **announced** for release on **2026-11-27** [K26_ANSA] and must **not be added as a released album or given sonic scores**. Other published Elisa albums between 2003 and 2022 (including missing 2009/2010/2016 catalog entries) are out of scope for the first increment.

## Pipes & Flowers — elisa-pipesflowers

Qualified critic Bradley Torreano [P97_AM] describes guitar-based alternative pop/rock, British-leaning pop hooks and a strongly expressive lead voice, comparing the record specifically to **Alanis Morissette**. His sonic comparison supports `sounds_like=Alanis Morissette`, **not** a claim of demonstrable artistic influence; `influenced_by` remains empty. MusicBrainz original-sleeve derived track relationships [P97_MB] verify drums, bass, keyboards, programming, and **both** producers. Signed review, label history and 1997 contemporary press [P97_RO,P97_AM] independently support original year and arrangements.

**Editorial 0–5 anchors:**
- `energy=3`: driving rock arrangements, ballads and measured songs [P97_AM].
- `electronic=1`: mainly live rhythm section, electric guitars; synth/keyboard accents and programming also credited, so not purely acoustic [P97_MB].
- `mood=2`: angsty delivery and intense emotional lyrics, with melodic bright choruses [P97_AM].
- `theatrical=3`: emphatic and soaring vocals but mainstream studio format [P97_AM].
- `experimental=1`: recognisable alternative rock song structures, largely conventional arrangements [P97_AM].
- `polish=4`: US studio production and coordinated multi-player recordings with producers Rustici/Allison [P97_MB].
- `tempo=3`: moderate-to-driving tracks counterbalanced by emotional ballads [P97_AM].
- `groove=2`: rock rhythm propels several songs; not predominantly dance-oriented [P97_AM].
- `voice=powerful|clear`: review highlights expressive strength of voice, with articulated hooks [P97_AM]; no mandatory rap/rasp assumption.
- `lyrics=introspection|heartbreak|love|identity`: editorial classification of emotional and relationship-oriented rock writing, **less certain** for identity than other columns; Claude may prune if primary lyric review insufficient.
- Genre scope line-by-line in `genre_evidence.csv`; `adultalternativepoprock` and `alternativerock` reflect exact specialist categories in normalized ASCII.

## Asile’s World — elisa-asilesworld

Rockol's May 2000 original review [A00_RO] and album-press reporting [A00_PRESS] describe a warmer, more electronic and intimate direction, explicitly singling out Howie B, Roberto Vernetti, and Leo Z, while AllMusic [A00_AM] highlights the clear **Björk** sonic influence and voice experimentation. `influenced_by=Björk` is an **attributed qualified critic inference**, *not* a statement that Elisa verbally named her; if the application requires explicit creator self-declaration, remove it, but do not turn artist collaborator Howie B into an influence. `sounds_like=Björk` is grounded separately by the contemporaneous Rockol reviewer. AllMusic [A00_AM] credits **Elisa**, **Howie B**, **Corrado Rustici** and **Leo Z** as producers; Rockol documents original **Roberto Vernetti** production for two tracks [A00_PRESS]. **Mauro Malavasi** is a *production supervisor/composer* in AllMusic, not necessarily the track producer; do **not** add him as producer without additional direct credit verification. Enrico Colombo/Fred Ventura show up on credits for remixes in the **expanded release**; these are excluded from the original core producer list pending track-level verification [A00_AM,A00_SUGAR].

**Editorial 0–5 anchors:**
- `energy=2`: flowing, slow-to-mid-range material with occasional firmer beats [A00_RO,A00_AOTY].
- `electronic=4`: extensive electronic arrangement and programming, with voice/acoustic contributions [A00_RO,A00_AM].
- `mood=2`: contemplative, intimate reflection rather than a sunny/sustained dance mood [A00_RO,A00_AM].
- `theatrical=2`: expressive but more restrained and detailed, not necessarily epic performance [A00_RO].
- `experimental=3`: notable stylistic departure, unusual electronic collaborations, vocal experiments [A00_AM,A00_RO].
- `polish=4`: several credited specialist producers and sophisticated layered electronics [A00_AM].
- `tempo=2`: trip-hop/downbeat tendencies, not whole-album club tempo [A00_AM_STYLE,A00_AOTY].
- `groove=2`: trip-hop pulses and alternative-dance elements amid quieter songs [A00_AM_STYLE,A00_RO].
- `voice=clear|soft|powerful`: her delivery moves from intimate singing to climactic lines [A00_RO]; subjective stylistic descriptors.
- `lyrics=introspection|love|identity|storytelling`: self-reflection and personal narrative are reviewed [A00_RO]; specific relationship/identity labels are tentative, not track-by-track content analysis.
- Lower-confidence secondary album tags `downtempo`, `artpop`, and peripheral `indierock` are explicitly scoped in genre evidence; do not mistake an AllMusic tag for a uniform sonic character.

## Then Comes the Sun — elisa-thencomesthesun

AllMusic genres [T01_AM] are pop/rock and adult alternative/indie rock, while a longform track-sensitive music review [T01_SPUT] documents guitar/synth/piano/drums combinations and emotional progressions. Rockol's original album presentation [T01_RO] identifies her hope/sun motifs and shows an acoustic side; MusicBrainz credits [T01_MB] show both a working band and programming, plus selective strings. Rockol explicitly attributes album production to Corrado Rustici [T01_RO2]. The songs *Rainbow*, *Heaven Out of Hell*, *Dancing* and *Rock Your Soul* point to different intensities, so do not score from only the single *Dancing*.

**Editorial 0–5 anchors:**
- `energy=3`: rock numbers and dynamic peaks, balanced by restrained ballads [T01_SPUT,T01_MB].
- `electronic=2`: programmed keyboards and samples, but full band and piano/guitars are central [T01_MB].
- `mood=3`: mixture of melancholy and hopeful recovery, not uniformly euphoric [T01_RO,T01_SPUT,T01_DEB].
- `theatrical=3`: broad and emotionally dynamic vocal climbs, sometimes choral or string-augmented [T01_SPUT,T01_MB].
- `experimental=2`: creative sonic textures within intelligible pop-rock frameworks [T01_SPUT,T01_AM].
- `polish=4`: accomplished Rustici studio arrangement, recorded at California professional facilities [T01_MB,T01_RO2].
- `tempo=2`: measured, ballad-heavy album with rock-midtempo lift [T01_SPUT].
- `groove=1`: listening-oriented introspective structures outweigh dancefloor cuts [T01_SPUT,T01_AM].
- `voice=powerful|clear|soft`: strong dramatic crescendos contrast with intimate quiet phrasing [T01_SPUT].
- `lyrics=introspection|love|heartbreak|identity|spiritual`: the song-cycle is associated with hope, restoration and personal connection [T01_SPUT,T01_DEB]; `spiritual` here is thematic reflection rather than formal religious gospel.
- `sounds_like` and `influenced_by` are **blank** because album-specific sonic comparisons are not independently solid enough to assert. The signed community critic [T01_SPUT] mentions U2/Björk/Aretha influences but does not trace a demonstrable production pathway and is not used as proof of causation.

## Research limits, taxonomy and QA

Sources have non-identical strength: AllMusic and contemporary Rockol reviews weigh more heavily than community reviews or aggregator editorial metadata. Producer names require explicit *producer* credits; do not equate composer, guitarist, production supervisor or remixing with producer of the original album. The lead vocalist's sound can support `sounds_like` but cannot prove influence. **No arbitrary cap** on multi-valued columns. `notes` are limited to 15 words only as the current guide explicitly states.

New normalized genre tokens not in guide checked October 24: **adultalternativepoprock, alternativerock, downtempo, electronica**. Only assign genre labels with individual traceable genre-evidence rows, preserving relative importance and track/peripheral caveats. Leave unknowns empty rather than infer. All three records remain `draft`; these tests are local, not the project's repository validator.

## Indexed research URLs
- [P97_AM] AllMusic — Pipes & Flowers, review and credits — https://www.allmusic.com/album/pipes-flowers-mw0000430897
- [P97_MB] MusicBrainz — 1997 Pipes & Flowers release and recording relations — https://musicbrainz.org/release/759c2d27-cc4c-40fc-92cb-975ffb11e4f6
- [P97_RO] Rockol — Elisa comunica le sue emozioni con credibilità — https://www.rockol.it/news-741290/elisa-compleanno-album-pipes-and-flowers-recensione-video
- [P97_AOTY] Album of the Year — Pipes & Flowers album overview — https://www.albumoftheyear.org/album/341976-elisa-pipes-flowers.php
- [P97_BIO] AllMusic — Elisa biography — https://www.allmusic.com/artist/elisa-mn0000176256
- [A00_AM] AllMusic — Asile's World, Bradley Torreano review and credits — https://www.allmusic.com/album/asiles-world-mw0000424080
- [A00_AM_STYLE] AllMusic — Asile's World, styles and release history — https://www.allmusic.com/album/r571137
- [A00_RO] Rockol — Asile's World, original contemporary review — https://www.rockol.it/recensioni-musicali/album/947/elisa-asile-s-world
- [A00_PRESS] Rockol — Elisa, il mio mondo in un disco — https://www.rockol.it/news-18278/elisa-il-mio-mondo-in-un-disco
- [A00_AOTY] Album of the Year — Asile's World editorial overview — https://www.albumoftheyear.org/album/341978-elisa-asiles-world.php
- [A00_SUGAR] Sugar Music Store — Asile's World CD — https://shop.sugarmusic.com/products/elisa-asiles-world-cd
- [A00_UNI] Universal Music Italia — Asile's World CD — https://shop.universalmusic.it/products/elisa-asile-s-world-cd
- [T01_AM] AllMusic — Then Comes the Sun album, genre and styles — https://www.allmusic.com/album/then-comes-the-sun-mw0000700435
- [T01_MB] MusicBrainz — Then Comes the Sun, original European CD — https://musicbrainz.org/release/1ad5aafd-7ce4-43e6-816c-5018bc3a732c
- [T01_MB2] MusicBrainz — Then Comes the Sun, 2001 cassette credits — https://musicbrainz.org/release/9e6386d4-6415-4a77-9940-26e484b238e5
- [T01_RO] Rockol — C'è il sole nel mio nuovo album — https://www.rockol.it/news-37860/elisa-br-c-e-il-sole-nel-mio-nuovo-album
- [T01_RO2] Rockol — Sugar catalogue reissue and credits — https://www.rockol.it/news-682625/elisa-negramaro-e-raphael-gualazzi-da-oggi-gli-album-in-vinile
- [T01_SPUT] Sputnikmusic — Then Comes the Sun longform album review — https://www.sputnikmusic.com/review/77308/Elisa-ITA-Then-Comes-the-Sun/
- [T01_DEB] DeBaser — Then Comes the Sun critical discussion — https://www.debaser.it/elisa/then-comes-the-sun
- [K26_ANSA] ANSA — Elisa album Kintsugi scheduled November 27 — https://www.ansa.it/sito/notizie/cultura/musica/2026/09/09/elisa-dall11-settembre-il-nuovo-singolo-kintsugi_974b581f-1614-4e84-a2d4-a471b4aa2029.html
