# Blur — Fandome Phase 01 — evidence notes

Research cutoff: 26 October 2026. Existing `docs/descriptors/blur.csv` was absent on read-only `descriptors` branch. All 4 albums were already in `src/data/catalog.ts`.

**Scale key:** Fandome guide, 0–5 integer; values are interpretive judgements anchored in cited album-specific criticism, not measurements. Genres are scoped per album vs individual tracks in `genre_evidence.csv`. `sounds_like` is an independent editorial similarity judgment and **not** evidence of direct influence. `influenced_by` uses documented artistic reference or qualified-critical comparison.

**Access qualification:** AllMusic's indexed pages were returned with detailed content by search, but direct automated opens can be restricted. MusicBrainz credits refer to particular UK standard editions. Original editions differ from expanded reissues and some US track lists. No invented software, effect boxes, or instruments are used.

## Leisure (1991) — `blur-leisure`
- **Genres:** Shoegaze and baggy are album-defining in the AllMusic and Guardian accounts; neo-psychedelia chiefly in guitar/atmospheric parts. `noisepop` is a style-database label (medium confidence), not a definitive critical consensus. The AllMusic Britpop tag is retrospective; Blur did not adopt the defining Britpop style until the next album. Style tokens preserved faithfully rather than replacing `baggy` with dance.
- **Scale judgements:** energy 3 and tempo 3 reflect mixed uptempo baggy singles and slower drones; electronic 1: four-piece guitars, bass and kit with keyboards, no evidence of electronics dominating; mood 3: melodic singles balanced by gloomy, languid sections; theatrical 2: largely understated lead; experimental 2: feedback/psychedelic vignettes but conventional arrangements; polish 3: multitrack pop-rock studio; groove 3: dance beats in leading singles but not an entire dance album.
- **Credits:** MusicBrainz distinguishes Stephen Street, Mike Thorne, Steve Lovell, Steve Power and band production on different tracks. The personnel evidence is strong for guitars, bass, drums and keyboards; model-specific machines and recording techniques **left blank**.
- **Influences:** comparison to Syd Barrett or Velvet Underground in the AllMusic review is framed as sonic analogy, not explicit direct-album influence, so `influenced_by` empty.
- **Sources:** AllMusic 1991 review, MusicBrainz original release credits, Guardian 2003 retrospective, Album of the Year genres.

## Modern Life Is Rubbish (1993) — `blur-modernlifeisrubbish`
- **Genres:** AllMusic gives Britpop and guitar-based indie/alternative and pop-rock tags; secondary dance-rock style applies narrowly. Avoid retaining baggy/shoegaze as the dominant style, because the review explicitly describes abandoning them.
- **Scale judgements:** energy 3 and tempo 3 varied power-pop vs ballads; electronic 1 is predominantly guitar-band but contains explicit synthesizers/loops; mood 3 combines wistful songs and jaunty satire; theatrical 4 for character pieces and narrated tannoy snippets; experimental 3 for stylistic shifts and studio experiments; polish 3 moderately elaborate without the Parklife level; groove 2 seldom dance-centred.
- **Credits:** 1993 MusicBrainz original UK pressing provides track-specific Stephen Street, Blur, John Smith and Steve Lovell production. John Smith counts as producer ONLY of designated band co-production tracks, not merely as engineer elsewhere. Sources vary for the Chemical World US mix: do not count its Langer & Winstanley producers toward the original UK album. The synthesizer Moog on Star Shaped and S1000 sampler on Colin Zeal are traceable; `moog|akais1000` deliberately refers to individual tracks. Strings on For Tomorrow, Kick Horns on Sunday Sunday, melodica and drum loops on Blue Jeans/Coping. `voice` includes spoken tannoy vocal. `synth` refers to verified song-specific Moog/Jupiter-8 lines; not all tracks.
- **Influences:** Erlewine names Kinks, Bowie, Beatles, Syd Barrett as actual homages/models; Guardian supplies context for the declared Englishness. Not to be confused with artists producing the album.

## Parklife (1994) — `blur-parklife`
- **Genres:** Britpop primary. AllMusic explicitly notes song-level disco (Girls & Boys), synth-pop, new wave, punk, music hall and psychedelia, none of which should imply the entire LP is of that genre. Genre-evidence rows retain this scope.
- **Scales:** energy 3, tempo 3 from contrast of Bank Holiday/Parklife vs To the End/This Is a Low; electronic 2: guitars/drums dominate but Girls & Boys synthesizers and programming are documented; mood 3: exuberant music and bittersweet social observation; theatrical 4 for characters, Phil Daniels monologue and theatrical interludes; experimental 4 broad style switching; polish 4 well-defined arrangements; groove 3 given the dance-pop tracks but not every song.
- **Credits:** Street principal producer; To the End has credited Blur/John Smith/Stephen Hague collaboration (MusicBrainz), with Hague accordion; not a basis for claiming Hague produced the entire record. Strings include Duke Strings, John Metcalfe arrangement on Tracy Jacks. Programmed parts are in album credits, so `programming|drumprogramming` supported; `stringarrangements` specific to Tracy Jacks. Instrument list spans the album, does not imply all instruments on every song.
- **Influences:** Guardian 2012 interviews quote Graham Coxon's Wire and Alex James's Duran Duran ambitions; Stephen Street explicitly mentions the Kinks as a reference shaping Albarn's writing. Phil Daniels and Laetitia Sadier are guests, not producers or direct influences by default.

## The Great Escape (1995) — `blur-thegreatescape`
- **Genres:** AllMusic labels Britpop, indie and alternative pop-rock / dance-rock. The electronic ballad Yuko & Hiro is song-specific; **no album-wide electropop or synthpop label** without qualified genre evidence.
- **Scales:** energy 3, tempo 3 for hook-heavy songs offset by quiet passages; electronic 2 for verified synth usage amid live rhythm section; mood 2 because Erlewine notes disillusionment and dark suburban themes under the brightness; theatrical 4 for elaborate character studies; experimental 3 for varied synth, horn and string writing; polish 4 for highly arranged studio production; groove 2 because dance songs are a minority.
- **Credits:** original 1995 package credits Stephen Street alone as producer; John Smith engineer. Coxon electric/acoustic guitars, sax, banjo; Albarn organ/piano/synth; Kick Horns and Duke Strings explicitly documented. No named machine, software or recording process established to the necessary standard: `production` blank, rather than inferring string-arrangement technology or sampling.
- **Influences:** AllMusic's qualified critic explicitly describes Scott Walker homage on The Universal, XTC-flavoured It Could Be You, Fun Boy Three reference and Ray Davies-style lyric writing. These are critic-documented references, not unverified artist testimony.
- **Sources:** AllMusic 1995 review, MusicBrainz pressing, scanned booklet transcription at 45cat, Guardian retrospective.

## Disagreements / cautions
- **Leisure** is often retroactively labelled Britpop; phase-one recommendation should principally weigh shoegaze/baggy.
- **Modern Life** alternative releases use different Chemical World masters and production credits; track-level UK album source takes priority.
- **Parklife** Phil Daniels narrated the single; he is not the main musical producer. Stephen Hague is a track-specific co-producer.
- **The Great Escape** high-gloss/pop surfaces must not be equated to positive lyrical mood.
- Strong claims about exact studio machines for the first and last album are intentionally avoided.
