# Fandome — Billie Eilish — Phase 02: Evidence notes (26 October 2026)

## Scope / method

Exactly two **new** descriptor rows. Separate from Phase 01, which already covered `dont smile at me` (2017), `When We All Fall Asleep, Where Do We Go?` (2019) and `Happier Than Ever` (2021). Evaluations concern complete standard releases rather than remixes, singles or live reissues. Scales are editor judgments cross-checked against described song-level events. The more speculative genre labels are retained only where a named source labels the genre and are sorted behind prominent album-wide characteristics.

Sources are keyed to URLs in `billie_phase02_sources.csv`; every retained genre has its own `billie_phase02_genre_evidence.csv` record. **A media comparison is not evidence of an artistic influence.** Instruments and production tags follow credits and contemporary reporting, not sound inferred from genre.

## billie-guitarsongs — *Guitar Songs* (21 July 2022, EP)

### Catalogue / editions / official credit

- Apple Music groups this release under **Single** and assigns Alternative as the store category (https://music.apple.com/us/album/guitar-songs-single/1635388716). Pitchfork, the Guardian, the FADER, and MusicBrainz call the two-song creative package an **EP** (https://pitchfork.com/news/billie-eilish-releases-new-songs-tv-and-the-30th-listen/, https://www.theguardian.com/music/2022/jul/21/billie-eilish-guitar-songs-ep-review-developing-at-warp-speed, https://musicbrainz.org/release-group/9e29849f-8da8-4e3c-8287-9d86dda6fbf3). Fandome should classify the project as `ep`; the service disagreement is metadata, not a musical disagreement. The original release comprises only **TV** and **The 30th**. This is *not* a live album, despite one embedded concert recording.
- Billie and FINNEAS wrote both songs; **FINNEAS** produced both. MusicBrainz, Qobuz and AllMusic independently distinguish him from mixer Rob Kinelski, assistant mixer Eli Heisler and mastering engineer David Kutch (https://musicbrainz.org/release/aa32de76-359c-4db1-95f1-3b3d97216cf5, https://www.qobuz.com/au-en/album/guitar-songs-billie-eilish/lss4wn4mj1wdb, https://www.allmusic.com/album/guitar-songs-mw0003783828). Billie receives vocal editing/engineering credit, **not** album producer.

### Genres and ranking

- First, `indiefolk|contemporaryfolk|songwriter`: AOTY categorizes the release Indie Folk, Contemporary Folk, Singer-Songwriter; both tracks are fingerpicked acoustic compositions, reviewed as self-contained singer-songwriter cuts by the FADER and Guardian (https://www.albumoftheyear.org/album/527956-billie-eilish-guitar-songs.php, https://www.thefader.com/2022/07/21/billie-eilish-surprise-songs-tv-the-30th, https://www.theguardian.com/music/2022/jul/21/billie-eilish-guitar-songs-ep-review-developing-at-warp-speed). `songwriter` is the existing Fandome conventional token for singer-songwriter genre, not a novel token inferred from lyrical authorship.
- `folkpop` comes from MusicBrainz release-group genre metadata and is weaker evidence than the specialist review (https://musicbrainz.org/release-group/9e29849f-8da8-4e3c-8287-9d86dda6fbf3); put later. `alt` comes specifically from Apple Music's **Alternative** store category, not from a guess that this is alt-pop (https://music.apple.com/us/album/guitar-songs-single/1635388716). No synthetic `electropop`/`bedroompop` merely because Billie recorded it.

### Main instrumentation (descending profile)

- `acousticguitar`: *both tracks*, explicitly named by Apple Music, MusicRadar, Guardian, Guitar.com. Dominant instrument. `piano`: subtle but explicitly reported beneath The 30th (https://www.theguardian.com/music/2022/jul/21/billie-eilish-guitar-songs-ep-review-developing-at-warp-speed).
- `bass|drums|synth`: FINNEAS credited with these instruments for the two recordings in MusicBrainz/AllMusic (https://musicbrainz.org/release/aa32de76-359c-4db1-95f1-3b3d97216cf5, https://www.allmusic.com/album/guitar-songs-mw0003783828); they are minor and **must not be read as proof** that either track is a synth-driven/dance song. This is an album-level instrumentation inventory supported by performance credits, not an assertion that each sound is equally audible. Guitar credit is refined to acoustic guitar because contemporaneous critics explicitly establish the type.
- No machine models, plugins, named effects chains or guessed sample libraries: insufficient release-specific evidence.

### Production and vocals

- `layeredvocals`: Guardian documents stacked vocal harmonies in The 30th crescendo and felty harmonies on TV. `concertrecording`: **part of TV** uses the crowd captured during the earlier Manchester debut, confirmed by Guardian/FADER/MusicRadar; this does *not* change the EP type to `live`. `programming`: FINNEAS explicitly credited on both cuts in Qobuz/MusicBrainz; do not infer prominent drum-machine sound.
- `logic` **left out**: FINNEAS often uses Logic but there is no instrumented statement firmly attaching a particular DAW to the 2022 EP master sessions. `falsetto`, autotune, room ambience and named processing likewise unproven; not carried across from Phase 01.
- `voice=soft|clear`: both songs are intimate, murmured and legible, with a brief more forceful climax on The 30th; keep the dominant voice first. Lyrics `storytelling|social|political|introspection|love|heartbreak`: Guardian/artist interview support personal crisis, TV references US abortion rights and entertainment culture; The 30th recounts a real person's car crash (https://www.theguardian.com/music/2022/jul/21/billie-eilish-guitar-songs-ep-review-developing-at-warp-speed, https://www.thefader.com/2022/07/21/billie-eilish-surprise-songs-tv-the-30th). `heartbreak` relatively secondary to public concern and survival.

### Scale reasoning (whole two-track EP, rather than dramatic seconds)

- **energy 1**, **tempo 1**, **groove 0**: near-ballad pacing and essentially non-dance instrumental approach; The 30th builds but does not overturn their overall quietness.
- **electronic 1**: credits include synth/programming in a distinctly acoustic mix; 0 would incorrectly claim completely acoustic as if supplementary credited signals absent.
- **mood 1**: anxiety, dread, political helplessness and distress despite a note of survival.
- **theatrical 1**: close delivery dominates; crowd and one dramatic middle eight do not make it a stage-spectacle project.
- **experimental 1**: conventional verse/buildup songwriting, unusual crowd sample gives limited structural variation.
- **polish 3**: controlled professional acoustic arrangements, mixed by Kinelski rather than deliberately raw demo. No inference of a specific mastering aesthetic beyond documented credits.

### Influence vs sonic parallels / disagreement

- `sounds_like=Lana Del Rey|Pink Floyd`: Laura Snapes explicitly compares TV's social-detail perspective to Lana Del Rey's *The Greatest* and Finneas's guitar breadth to Pink Floyd. These are **critical analogies**, not admissions of direct musical influence. Therefore `influenced_by` is **empty**.
- `landmark=0`: not one of her three defining studio albums or original breakout EP, although a useful distinctive acoustic release for similarity. Confidence `high` for content/credits, with folk-pop subgenre and format flagged as lower certainty in the specific evidence.

## billie-hitmehardandsoft — *Hit Me Hard and Soft* (17 May 2024, studio)

### Catalogue / release / personnel

- Fandome `billie-hitmehardandsoft` already exists in `catalog.ts` as *Hit Me Hard and Soft* (2024); preserve that case and ID. Standard release **10 tracks**, not isolated-vocals issue, deluxe tracks, or tour/live versions (https://musicbrainz.org/release-group/02a544b3-0459-42c7-bd9c-047162e7b67a, https://music.apple.com/us/artist/billie-eilish/1065981054).
- **FINNEAS** receives producer credit across the record, per Qobuz's credits, Uproxx's Apple Music track-by-track transcript, MusicBrainz and AOTY (https://www.qobuz.com/us-en/album/hit-me-hard-and-soft-billie-eilish/gvcirtodd95kc, https://uproxx.com/pop/billie-eilish-hit-me-hard-and-soft-album-credits/, https://musicbrainz.org/release/9723e88a-1460-4493-9633-729a4a679253, https://www.albumoftheyear.org/album/924853-billie-eilish-hit-me-hard-and-soft.php). Billie is credited with vocal editing, engineering and creative/production contributions, and did some of the work herself, per her interview, but **no formal producer/co-producer album credit**. Describing the collaboration as 'produced by Billie and Finneas' in a critic's narrative does not supersede formal liner credits for the `producers` column. Jon Castelli/Aron Forbes mix, Dale Becker masters; none is added as a producer.
- The quartet consists of Amy Schroeder and Domenic Salerni (violins), Nathan Schram (viola), Andrew Yee (cello); Andrew Marshall contributes actual drums and percussion; FINNEAS arranges strings, David Campbell orchestrates (https://uproxx.com/pop/billie-eilish-hit-me-hard-and-soft-album-credits/, https://musicbrainz.org/release/9723e88a-1460-4493-9633-729a4a679253).

### Genre evidence — separate album classification from episode/texture

- Primary, album-wide families from MusicBrainz and AllMusic: `altpop|pop|artpop|indietronica|indiepop|leftfieldpop|indieelectronic` (https://musicbrainz.org/release-group/02a544b3-0459-42c7-bd9c-047162e7b67a, https://www.allmusic.com/album/hit-me-hard-and-soft-mw0004265561). **Do not conflate** `indietronica` with `indieelectronic`: each is separately named. `electropop|poprock|songwriter|indiefolk` are specifically named by AOTY (https://www.albumoftheyear.org/album/924853-billie-eilish-hit-me-hard-and-soft.php); indie folk mainly applies to acoustic passages, thus appears later.
- `bedroompop` is an **already proposed Phase 01 new token**. This phase does not create it twice. It appears in secondary published album genre descriptions, but is marked *texture* rather than assuming bedroom recording alone establishes the genre. The shift to a new home studio, quartet and live drummer are counterweights to treating it as uniformly bedroom-produced.
- Specific/distant variants: `synthpop` (Guardian calls Lunch synth-pop, NME identifies L'Amour's 80s synth pop); `house` (Guardian calls Chihiro a midtempo house pulse); `electronica` (ABC's indie-sleaze-period electronica); `softrock` (Guardian L'Amour initial section); `rock` (LA Times calls The Greatest thrashing rock); `funk` (ABC on Chihiro); `trance` (ABC says L'Amour's Over Now section evokes late-90s trance); `hyperpop` (Guardian's L'Amour coda); `rave` (LA Times L'Amour coda); `reggae`/`ska` (reggae-esque Diner groove/ska-inflected Lunch guitar, **textures**, not primary genres); `jazz` (ABC's 'jazzy' L'Amour opening, texture); `edm` (Guardian says Lunch EDM-inspired bass, texture); `showtunes` (Guardian's eerie Diner theatrical section). Genre evidence CSV preserves narrow scopes; **these do not make the entire album a reggae, EDM, or show-tune record.**
- Review disagreements: Hannah Jocelyn in Pitchfork sees recycled sonics and bulky structures, whereas Alexis Petridis in the Guardian praises unusual episodic transitions; both detect large dynamics. None establishes a literal 5/5 experimental avant-garde work (https://pitchfork.com/reviews/albums/billie-eilish-hit-me-hard-and-soft/, https://www.theguardian.com/music/article/2024/may/16/billie-eilish-hit-me-hard-and-soft-review).

### Instruments — source-specific, ordered by significance

- **Synth and low end:** `synth|bass|keyboards|guitar` are formally credited to FINNEAS across tracks, Billie additional keyboard parts. `synthbass` is explicitly described in L'Amour by Guardian and present elsewhere. The in-song dark moving synths and prominent bass account for `electronic 3`, not `5` because recordings also feature live drum kit, guitars and chamber strings (https://uproxx.com/pop/billie-eilish-hit-me-hard-and-soft-album-credits/, https://www.theguardian.com/music/article/2024/may/16/billie-eilish-hit-me-hard-and-soft-review).
- **Live rhythm section** `drums|percussion`: FINNEAS and drummer Andrew Marshall, track-level musician credits. **`drummachine`** from Guardian's explicit discussion of distorted drum-machine rhythm on Lunch; no exact hardware make/model was proven. Some drum parts are played live rather than all programmed.
- **Guitars** `acousticguitar|electricguitar`: album critics explicitly discuss softly strummed/fingerpicked acoustic passages and the amplified-electric character of Skinny and The Greatest. Generic `guitar` is retained because credits cover both types and not all track-by-track guitars have a provable subtype (https://www.theguardian.com/music/article/2024/may/16/billie-eilish-hit-me-hard-and-soft-review, https://www.latimes.com/entertainment-arts/music/story/2024-05-17/billie-eilish-hit-me-hard-and-soft-review, https://www.nme.com/reviews/album/billie-eilish-hit-me-hard-and-soft-review-tracklist-lyrics-3756826).
- **Acoustic/orchestral** `piano|strings|violin|viola|cello|glockenspiel`: piano in Grammy editorial and 2024 reviews; recorded string quartet and distinct instrument credits, FINNEAS glockenspiel across the recording. `orchestra` **not** entered: this is an **Attacca string quartet**, even if it sounds cinematic. No unsupported brass, woodwind, detailed sampler model or guessed analog synth model.

### Production — verified techniques, not generic habits

- `programming`: FINNEAS credited on all tracks; `logic`: FINNEAS explicitly mentions the duo using Logic Pro together at the desk in the project-specific MusicRadar account of the Apple interview (https://www.musicradar.com/news/billie-eilish-vocal-comping).
- `digitalediting`: Eilish learned to compile/choose and splice her own vocal takes on these album sessions, per ABC/MusicRadar. **This is deliberately separate from artistic co-production or vocal-producer credit.** `layeredvocals`: dense stacked harmonies discussed in Pitchfork and Rolling Stone; `stringarrangements`: FINNEAS formally credited for arrangements on Skinny and The Greatest (https://uproxx.com/pop/billie-eilish-hit-me-hard-and-soft-album-credits/).
- `belting`: described by LA Times and Eilish in MusicRadar on 2024 work, especially The Greatest; `pitchedvocals`: documented pitch-shifting in the L'Amour coda by ABC; `vocalfilter`: processed/warped singer in Guardian's L'Amour discussion (descriptive rather than exact plug-in); `distortion`: distorted drum machine/bass texture in Guardian and amplified rock section; `drumprogramming`: programmed rhythmic passages named by Guardian and credits of FINNEAS programming. No unsupported Auto-Tune, TR-808, sample pack, tape brand, vintage synthesizer model or hardware-specific setting.

### Vocal character, themes, aesthetic scales

- `voice=soft|clear|powerful`: signature soft close singing dominant (Skinny/Wildflower), clean articulate melody (Birds of a Feather), forceful belt The Greatest, as described by NME, LA Times and ELLE. Not `rap`, `operatic`, or `spoken` merely because a narrative is unsettling.
- Lyrics: `love|heartbreak|introspection|identity|sensuality|storytelling|social`. LUNCH openly explores queer desire, Skinny body image/media scrutiny; Wildflower love triangle/betrayal; Diner stalker fictional scenario; The Greatest unequal investment in a relationship (https://www.nme.com/reviews/album/billie-eilish-hit-me-hard-and-soft-review-tracklist-lyrics-3756826, https://www.latimes.com/entertainment-arts/music/story/2024-05-17/billie-eilish-hit-me-hard-and-soft-review, https://www.theguardian.com/music/article/2024/may/16/billie-eilish-hit-me-hard-and-soft-review). `political` not automatically assigned just because her 2022 EP was political.
- **energy 3**, **tempo 3**: contrast between quiet songs and more propulsive Chihiro/Lunch/Bittersuite/rock climaxes; moderate across ten tracks.
- **electronic 3**: synthesizers and club beat elements interleaved with real drums, guitars and quartet. **mood 2**: relationship anxieties, fame and distorted desire outweigh euphoric songs like Birds of a Feather, mixed not purely bleak.
- **theatrical 3**: sudden climaxes, multipart structures and dramatic string arrangements. **experimental 3**: episodic, genre-crossing form with accessible melodies; critic disagreement about novelty is documented rather than hidden.
- **polish 5**: professionally edited and carefully constructed high-production studio sound, dense arrangements, formal mixing and mastering. This is a production finish judgment not a claim of exceptionally expensive hardware.
- **groove 3**: four dance-oriented passages (e.g. Chihiro / Lunch / L'Amour / Bittersuite) but not a nonstop floor-focused set.

### `sounds_like` and *documented* album influences

- `sounds_like=Lana Del Rey|Daft Punk|Laufey|Joe Jackson`. The Guardian compares the approach to Del Rey; Kitty Empire names Daft Punk-ish electronics; NME likens L'Amour's vocal tint to Laufey; Petridis compares the synth bass movement to Joe Jackson's 'Steppin' Out'. These are **critical sonic parallels**, *not* evidence those acts made this album.
- `influenced_by=Coldplay|Lana Del Rey|Tyler, the Creator|Marina and the Diamonds|Vince Staples`: **Rolling Stone's 26 April 2024 album-making interview** directly names *Viva La Vida*, *Born to Die*, *Goblin*, *Electra Heart* and *Big Fish Theory* as models for the **integrated world of a full-length album** (https://au.rollingstone.com/music/music-features/billie-eilish-hit-me-hard-and-soft-album-interview-58457/). That is a musical *album-construction* influence, not a claim that the 2024 tracks use those artists' sonic timbres or have sampled them. If the importer construes `influenced_by` as **strictly timbral**, omit this column rather than incorrectly converting design influence into auditory similarity; the evidence notes preserve the documented distinction.
- The *L'Amour* synth motif sounding like Joe Jackson or a Daft Punk moment is insufficient to call either an influence. The Attacca Quartet, Andrew Marshall, FINNEAS and Billie are contributors; none is placed in `influenced_by` simply for performing.

### Confidence and excluded material

- `landmark=1`: defining third studio album, multiple critical analyses and substantial formal credits; `confidence=high` for core/production. **Weak portions** are flagged at genre level, particularly `bedroompop`, reggae, ska and jazz texture tags.
- The 2024 **Isolated Vocals** mix and the 2026 **HIT ME HARD AND SOFT: THE TOUR (LIVE)** contain pre-existing repertoire and do not create genuinely new album-level sound profiles. 2026 tour-intro single is not an album. Future unreleased projects excluded.
