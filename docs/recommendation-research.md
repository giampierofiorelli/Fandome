# How to build Fandome's recommendations (research, October 2026)

Goal: suggest artists (and later albums and songs) from other scenes and countries, starting from what a fan already follows and rates, in a way that is **explainable** and brings **discovery**, not just more of the most popular names (see the manifesto in `CLAUDE.md`).

## 1. How the big players do it

| Approach | Who | How it works | Strengths | Weaknesses |
|---|---|---|---|---|
| **Collaborative filtering** | Spotify, Last.fm, ListenBrainz | "People who listen to A also listen to B": a big user × item matrix (plays, playlist co-occurrence, sessions), compressed with matrix factorisation into vectors. | Very good once there are many users. | Cold start (new artists, new users), **popularity bias**: the popular get more popular, the long tail stays unheard. Hard to explain. |
| **Content-based (audio)** | Spotify (neural networks on the audio signal), Essentia | Describes the sound itself (tempo, energy, timbre…) and finds similar-sounding tracks. | Works for new music, not biased by popularity. | Needs the audio files. Spotify closed its public audio-features API on 27 Nov 2024; AcousticBrainz stopped in 2022 (frozen dump). |
| **Content-based (human)** | Pandora's Music Genome Project | Trained musicians score each song on up to ~400 attributes ("genes", 0–5 in half steps), grouped by theme (e.g. voice has ~30: range, timbre, ornamentation…); 20–30 minutes per song; 10% double-checked. No machine listening. | Precise, explainable, great for discovery. | Expensive, slow to scale. |
| **Text / NLP** | Spotify | Reads bios, reviews, playlist titles, press, to learn how music is described. | Captures culture and context. | Noisy; needs lots of text. |
| **Knowledge graph** | Research (IPSIM, ISMIR 2021; EARS 2023) | Artists, genres, labels, places, members, influences as a graph (MusicBrainz + Wikidata). Similarity = interesting paths between two artists; the best path becomes the explanation ("both produced by…, both from the Bristol scene"). | Explainable by design, works without users, handles diversity. | Plain shortest paths are misleading (sharing a country is weak evidence): edges need types and weights. Wikidata "influenced by" is often unsourced. |
| **Hybrid + editors** | Spotify calls it "algotorial" | Algorithms + human editors together. | Best results on accuracy *and* diversity/novelty in the research surveys. | Needs editorial time. |

What the research agrees on:
- **Hybrids beat single methods**, especially on "beyond-accuracy" goals: novelty, diversity, serendipity, coverage.
- **Popularity bias** is the main known problem of collaborative filtering; content and graph signals reduce it. But removing it too aggressively annoys people who like popular music: balance familiar and new.
- **Explanations raise trust and engagement.**
- Evaluate with more than accuracy: coverage, novelty, diversity, serendipity, plus user studies.

## 2. What data we can use (and what not)

| Source | What | Licence | Use for Fandome |
|---|---|---|---|
| **Our own fans' signals** | follows, album ratings, saves, posts that link albums, co-follows | ours | Collaborative part. Already used ("fans of X also follow"). Grows with users. |
| **MusicBrainz** | artists, releases, labels, areas, members, relations (core data); community tags, genres and ratings (supplementary data) | core data CC0 (any use); tags, genres, ratings CC BY-NC-SA 3.0 (non-commercial, credit, share-alike; commercial licence from MetaBrainz) | Core facts and relations for every artist, free. Tags/genres fine while Fandome is non-commercial; commercial licence needed later. No account needed to read (User-Agent, max 1 request/second). |
| **ListenBrainz** | similar artists from listening sessions, tag-based radio | listens CC0; similar-artists licence to confirm | Open "people who listen to A also listen to B" before we have our own users. |
| **Wikidata** | genres, influences, awards, country, images | CC0 | Extra facts; weight "influenced by" low unless sourced. |
| **Editorial tagging** | sound scales, mood, scene, "sounds like", "precursor" | ours | Our Music-Genome-lite: the heart of explainable cross-scene suggestions. |
| Last.fm API | similar artists, tags | non-commercial only, no sublicensing, they may ask a revenue share | Avoid (blocks any future business). |
| Spotify audio features | tempo, energy, danceability… | closed since Nov 2024 | Not available. |
| Audio analysis (Essentia) | sound descriptors | open source | Needs the audio files: not for us now. |
| Generative AI | | | Not to decide what to recommend (manifesto). At most a helper to propose tags that an editor checks. |

## 3. Proposed design for Fandome

### 3.1 Descriptors per artist (Music-Genome-lite)

Genre alone isn't enough. Each artist gets, besides country / language / decade / genres (done, `src/data/scenes.ts`):

- **Sound scales** (0–5): energy; acoustic ↔ electronic; dark ↔ bright mood; intimate ↔ theatrical; accessible ↔ experimental; raw ↔ polished production; tempo feel (slow ↔ fast); groove/danceability.
- **Voice**: lead voice type (soft/breathy, powerful, raspy, rap/spoken, choral); language mix.
- **Lyrics focus**: love, introspection, social/political, storytelling, party, irony.
- **Scene and roots**: city/scene, movement (e.g. cantautori, Britpop, Italo disco, funk carioca), era of peak.
- **Influences / heirs**: hand-checked edges.
- **Audience signals**: mainstream ↔ niche (for discovery balance), still touring.

About 20–25 values per artist, ~5 minutes each by someone who knows the music (Pandora needs 20–30 minutes per song; we score artists, not songs). Moderators of each fandom can help (they're already volunteers per artist).

### 3.1b Albums carry the descriptors, not only artists (owner's point)

An artist like Madonna has made very different records (dance-pop, Ray of Light's electronic and spiritual sound, Erotica's house, Music's electro-folk…). Describing her only as "pop, dance" loses most of that. So:

- **Each album gets the descriptors** (sound scales, genres, mood, voice, lyrics focus). The ~300 albums we have are a manageable start.
- **The artist profile is computed from the albums**: a weighted average, where a trait that repeats across many albums weighs more (the "pattern" that comes back), and landmark/most-rated albums weigh a bit more. The artist page shows the traits that repeat most ("pop, dance"), but matching keeps the full spread.
- **The fan's seed is album-level too**: we already know which albums each fan rated. Someone who rates Ray of Light 10/10 gets electronic, atmospheric suggestions; someone who loves Like a Prayer gets classic pop. Same artist, different paths.
- Explanations can then name the album: "Because you loved Ray of Light: atmospheric electronic pop, like…".
- Songs can come later with the same model.
- **How to fill them**: [`album-descriptors-guide.md`](album-descriptors-guide.md) (columns, scale anchors, example, ChatGPT prompt). Filling them ourselves is enough to start: they're our own judgments, no licence needed.

### 3.1c One engine for every suggestion

The same scores power everything, with different filters:
- **Artists you might like** (Explore, today based only on co-follows) → full hybrid score, any country.
- **Bridge / Go deeper / A scene you don't know yet** → same score, with a filter or bonus on country and scene.
- **Starter packs, album page "if you like this album", onboarding suggestions** → same engine.

So the work on scenes improves international suggestions too, and vice versa.

### 3.2 The graph

Nodes: artists, albums, genres, scenes, countries, decades. Typed, weighted edges:

| Edge | Source | Weight idea |
|---|---|---|
| sounds like | editorial | high |
| influenced by / precursor of | editorial, Wikidata (sourced only) | medium-high |
| same scene / movement | editorial, MusicBrainz | medium |
| collaborated / same producer | MusicBrainz relations | medium |
| listened together | ListenBrainz similar artists | medium |
| followed together | our fans' co-follows | grows with data |
| same country / same decade | scenes.ts | low (context, not similarity) |

### 3.3 Scoring (explainable hybrid)

For a fan, the seed is the set of artists they follow and albums they rated highly (we never need to ask).

```
score(candidate) =
    a · sound similarity (cosine over the sound scales, vs. the fan's seed artists)
  + b · graph score (best typed paths from seed artists, IPSIM-style)
  + c · co-follow score (our fans, then ListenBrainz while we're small)
  + d · discovery bonus (other scene/country than the seed, less mainstream)
  − e · already-known penalty (already followed, or top-popular)
```

Then a **diversity re-rank** (maximal marginal relevance): don't show five artists from the same scene; mix one familiar-feeling, a few new, one wildcard.

**Explanation** = the strongest contributors, written in plain words:
- "Electronic, theatrical pop like Charli XCX"
- "From the Bristol trip-hop scene, like Massive Attack"
- "Influenced by Lucio Battisti, whom you follow"
- "Fans of Annalisa also follow"

### 3.4 The three paths (from the Scenes plan)
- **Bridge**: candidates from another country than the seed artist, ranked by sound + graph.
- **Go deeper**: candidates from the same scene as an artist the fan already follows from abroad.
- **A scene you don't know yet**: weekly, a scene with zero follows, entered through its most "bridgeable" artist for that fan.

### 3.5 Cold start
- New fan: they pick artists at sign-up → seed exists from minute one.
- New artist room: needs descriptors (editorial) and MusicBrainz tags; graph and co-follow arrive later.

### 3.6 Measuring if it works
- **"New to me"** tap on a suggestion; follows from suggestions; "not for me" hides.
- Offline checks: coverage (how many artists ever get suggested), novelty, diversity across scenes, popularity share.
- Watch the balance: some fans want familiar names; keep a familiar slot.

## 4. Phases

1. **Done**: country, language, decade, genres for all rooms.
2. **Descriptors on albums** for ~80 artists (50 from Italy, Brazil, France, Spain/Latin, plus 30 international "bridges"); artist profiles computed from their albums; import MusicBrainz core data for all (tags too while non-commercial).
3. **Graph v1**: editorial edges for those 80 + MusicBrainz relations; ListenBrainz similar artists (after checking the licence).
4. **Scoring + explanations**: Bridge in artist rooms, Scenes page in Explore, feedback buttons.
5. **Tune with data**: weights from what fans actually follow; extend descriptors to all rooms with moderators.
6. Later: albums and songs get the same treatment (song catalogue from MusicBrainz).

Needs a backend for the data imports and shared signals (MusicBrainz dumps, ListenBrainz); the scoring itself can run in the browser for a few hundred artists.

## 5. What is built (October 2026)

- Album descriptors for 6 artists (47 releases) in `docs/descriptors/`, loaded by `src/lib/descriptors.ts`.
- Score between two albums (`compareProfiles`): genres with families (45%; each genre weighs 1/position, so a long tail of one-track genres weighs little), sound scales (30%), voice/themes/era/scene/language (25%), each only where both are known; sound and extras count fully only when genres are close (gate 0.4 + genre/0.25); plus documented links (direct sounds-like/influence scaled by genre fit, zero below genre 0.15, shared producers, influences, comparisons, two-step connections). Multiplied by the row's confidence. Genres are also weighted by rarity (inverse document frequency over described albums: sharing country or big band counts more than sharing pop), and an album is suggested only with genre similarity ≥ 0.15 or a documented link. Album lists drop matches under 60% of the best score (Oct 2026, after I'm Breathless was matched to Gaga's dance albums through an artist-level "sounds like Madonna").
- Ranking: discovery bonus for other countries, penalty for what is similar to albums rated low or hidden, MMR for variety, max 2 per artist.
- Uses: album pages, artist pages (profiles from albums), Explore (artists you might like = 50% people + 50% sound; Because you rated…; Discover paths).
- Quality check in `src/lib/recQuality.ts`, enforced by tests.

## Sources

- Spotify approach (secondary sources): [attractgroup](https://attractgroup.com/blog/how-spotify-algorithm-works-for-music-recommendation/), [Music Pulse](https://www.musicpulse.app/blog/how-the-spotify-algorithm-really-works-in-2026), [scaleengineer](https://scaleengineer.com/blog/how-spotify-optimized-their-recommendation-system)
- Music Genome Project: [Pandora](https://www.pandora.com/corporate/mgp.shtml), [Wikipedia](https://en.wikipedia.org/wiki/Music_Genome_Project), [Rolling Stone](https://www.rollingstone.com/culture/culture-news/pandora-and-intel-decode-the-dna-of-your-favorite-songs-243113/), [WashU](https://source.washu.edu/?p=311017)
- Surveys: [ACM survey](https://dl.acm.org/doi/fullHtml/10.1145/3671151.3671243), [Content-driven music recommendation](https://arxiv.org/pdf/2107.11803), [Challenges in music recommender research](https://ciir-publications.cs.umass.edu/getpdf.php?id=1289), [Popularity bias survey](https://arxiv.org/pdf/2308.01118), [User-centered popularity bias](https://arxiv.org/pdf/2103.06364)
- Knowledge graphs: [IPSIM, ISMIR 2021](https://arxiv.org/pdf/2108.01632), [EARS](https://www.sciencedirect.com/science/article/pii/S0957417423008497), [Collaborative music KG dataset](https://zenodo.org/records/20394102), [GraphAware](https://graphaware.com/blog/building-and-exploring-music-knowledge-graph/)
- Audio features: [Spotify deprecation](https://dev.to/birrings/spotifys-audiofeatures-api-died-in-2024-heres-what-i-built-to-replace-it-3dn3), [AcousticBrainz](https://freqblog.com/blog/acousticbrainz-alternative/)
- Open data: [ListenBrainz API](https://listenbrainz.readthedocs.io/en/latest/users/api/core.html), [How similar artists work](https://community.metabrainz.org/t/how-does-similar-artists-work/678642), [MusicBrainz dumps](https://metabrainz.org/datasets/postgres-dumps), [Last.fm API terms](https://www.last.fm/api/tos)

## 6. Expert practice check (Oct 2026, after owner feedback on I'm Breathless and Joanne)

The owner asked to check that fixes follow expert practice instead of patching single cases.

- **Rare tags count more (tf-idf).** On tag/metadata-based song similarity, tf-idf vectors with nearest neighbours outperformed Word2Vec and other models (Cunha et al. 2017, https://arxiv.org/abs/1704.03844); tf-idf is the standard baseline in learned-similarity work (https://arxiv.org/pdf/1105.2344). Our genre weights now use position × rarity (IDF).
- **A cut-off, not always top-N.** Without a threshold a system returns top-N items that are merely lower-scored; cut-offs should be calibrated on labelled data (https://docs.curiosity.ai/workspace-build/ai-and-agents/ai-integrations/semantic-similarity). Similarities built on little shared evidence are unreliable and are filtered out in the literature (Matuszyk & Spiliopoulou, https://kmd.cs.ovgu.de/pub/matuszyk/MatuszykSpiliopoulou14.pdf). We now require score ≥ 0.30 and genre similarity ≥ 0.15 (or a documented link); lists may be empty.
- **Evaluate on human judgments, not anecdotes.** MIREX music-similarity evaluation uses human-graded query/candidate pairs as ground truth (https://archives.ismir.net/ismir2007/paper/000539.pdf); inter-rater agreement limits how far any algorithm can go (Flexer, https://transactions.ismir.net/articles/107). Owner judgments live in `docs/similarity-judgments.csv`; `src/lib/judgments.test.ts` checks pairwise agreement (≥ 80%) and that no pair judged bad is ever suggested. The 0.30 cut-off was set from these pairs; with only 10 pairs it is provisional and should be re-checked as judgments grow.
- **Known disagreement:** Joanne → Music is judged good but scores low (0.23): the descriptors describe Music as electronic and danceable, Joanne as acoustic; the country touch is a tail genre. Left as is rather than forced.
- **Second round (same day, 16 judged pairs, agreement 86%):** documented links no longer stack without limit (cap +0.3: "sounds like X" and "draws on X" are largely the same evidence); shared producers/influences/comparisons also scale with genre closeness (a quarter of their weight across genres, shown only when genres are close: Jeff Bhasker produced both Joanne and Madame X); the relative cut (60% of the best) was removed, as the calibrated absolute cut replaces it; a documented influence or comparison naming a described artist reserves a place for that artist's closest album above the cut (Gaga's early albums → Madonna). Lists may be empty (6 of 124 albums).
- **Format genres (Oct 2026, owner):** `soundtrack` says what a record is for, not how it sounds (a soundtrack can be disco, orchestral, rock or a musical). It now weighs 10% in genre similarity, is never given as a shared-genre reason, and is no longer a family parent (showtunes and musical theatre sit under traditional pop). Owner-judged agreement 81% → 90% (21 pairs); Foxes no longer suggests the Wicked soundtracks.
- **Instruments (Oct 2026, owner):** new descriptor column `instruments` (main first, list in `src/data/instruments.ts`), compared with order and rarity weights like genres (sharing a harpsichord says more than sharing drums), and shown as a reason ("Both built on piano and strings"). Instrumentation is a core attribute family in expert-built similarity (Pandora's Music Genome Project: melody, harmony, instrumentation, rhythm, vocals, lyrics — https://blogs.cornell.edu/info2040/2012/09/23/the-inner-workings-of-the-music-genome-project ; ISMIR 2015 modelled genre from instrumentation, timbre and rhythm attributes — https://www.ismir2015.uma.es/articles/276_Paper.pdf). Extras weights now: themes 30%, instruments 25%, voice 20%, era 15%, scene 8%, language 2% (owner: language should count almost nothing). Older albums get instruments through `<artist-id>_instruments.csv` backfills.
- **Production (Oct 2026, owner):** new column `production` (list in `src/data/production.ts`): vocal treatment and use (auto-tune, vocoder, filtered/pitched/layered vocals, falsetto, whistle register…), techniques (sampling, analog tape, wall of sound…), signature machines and software (TR-808, LinnDrum, Moog, Fairlight, Pro Tools…). Same order × rarity comparison; reason "Both use …". Extras weights: themes 26%, instruments 22%, production 16%, voice 16%, era 12%, scene 6%, language 2%.
- **Genres only one artist has (Oct 2026, owner flagged Dreamland with no suggestions):** a new artist brings very specific genres (dream trance, dream house, progressive house, melodic trance, new age) that no other described album has. Rarity weighting gave them the highest weight, yet they can never be shared, so they only diluted every match. Rule, as `min_df = 2` in tf-idf: a genre held by fewer than two artists weighs 0 and counts through its parent genres (trance, house, ambient) until a second artist has it. Whole catalogue: empty lists 17 → 9, coverage 0.79 → 0.83, judged-pair agreement unchanged (0.90).
- **Engine (Oct 2026, owner):** (1) an artist credited as producer of an album is a direct link to that artist's albums ("Prince worked on Like a Prayer"), same weight as a documented influence, same genre condition; 17 such links in the catalogue today (Lazza ↔ Geolier, Röyksopp ↔ Robyn). (2) "If you like this album" shows up to 10 albums instead of 5, only as a maximum: 160 of 338 albums fill 10, the rest show what passes the cut (0–9). Quality metrics now measured at 10: coverage 0.83 → 0.91, top share 0.023 → 0.017, judged-pair agreement 0.91.
- **Long genre lists (Oct 2026, four owner cases: Post → Asile's World, Ray of Light → Massive Attack, Music → Daft Punk, Like a Virgin → She's So Unusual):** the owner's rule "every genre a source names" makes genre lists long (10–20), and weighted Jaccard divides the shared weight by the union, so a long list lowered every match even when the core genres were shared. The genre test for a suggestion now uses sqrt(Jaccard × coverage), where coverage is the share of the seed album's genre weight the candidate has (asymmetric, the seed decides what matters). Threshold unchanged (0.17): the highest owner-judged bad pair stays below it (0.14). Whole catalogue: empty lists 10 → 6, coverage 0.91 → 0.93, judged-pair agreement 0.92. Scores and ranking are unchanged; only the gate.
- **Similar artists: documented links get a place (Oct 2026, owner: Madonna never came up for the Spice Girls):** an artist profile is computed from all their albums, so a broad discography (Madonna, 17 albums from big band to trip-hop) is diluted and resembles nobody strongly (Madonna was 26th for the Spice Girls). Same rule as album suggestions: an artist named as a documented influence or comparison of one of the seed artist's albums gets one of up to two reserved places, if still above the cut, with the link as the reason. Data: Madonna added as a documented influence of Spice and Spiceworld (Halliwell, Melanie C, sources in the research notes).
- **Artist-level influences (Oct 2026, owner: Madonna missing for Katy Perry):** `influenced_by` is per album, but many artists name influences for their whole work (Katy Perry: "I want to evolve like Madonna", MTV). New file `src/data/artistInfluences.ts` (names + source); in "If you like this artist" these rank first for the reserved places (three of ten since Oct 2026), then album influences, then album comparisons. ChatGPT now delivers them in phase 01 (prompt updated).
- **Album suggestions: up to three places for documented links, influences first (Oct 2026, owner: Like a Virgin without Chic and Michael Jackson):** two places were taken by comparisons (Cyndi Lauper, the Pointer Sisters) before a documented influence (Chic, via Nile Rodgers and the Chic rhythm section). Now up to three of the ten places, documented influences before comparisons, then by score; same order as similar artists.
- **Documented influences have a lower cut (Oct 2026, owner: American Life must be much richer):** with accurate data (folktronica, Eurotechno, electroclash, electro-folk) American Life has almost no neighbour in the catalogue, and the influence Madonna named herself (Massive Attack) scored 0.26, below the 0.3 cut. An influence the album documents is strong evidence on its own: the closest album of that artist now needs 0.2 (only for the reserved places, never for the rest of the list). Whole catalogue: 5 more suggestions, all documented influences (American Life → Massive Attack, Annalisa → Mina, three Lady Gaga albums → Bowie); judged-pair agreement and the other metrics unchanged.
- **Opposite ends of a scale (Oct 2026, found while importing Battiato's 1977 minimalist piano album):** it came up next to a big orchestral film score (both "modern classical") and an electronic Kraftwerk album (both "avant-garde"), though one is experimental 5 and the other 1, or acoustic 0 and electronic 5. An average of the sound scales hides one gap that wide. Rule: two albums 4 or more apart on any scale are not suggested for each other unless a documented link joins them (influence, comparison, producer, a shared name). It removed 19 of 4,529 suggestions across the catalogue (e.g. Mina canta o Brasil → Radical Optimism, an ambient Röyksopp album → Club Future Nostalgia), none of the owner's judged pairs; agreement with the judgments unchanged (0.933).
- **Thin descriptors back off to the artist (Oct 2026, owner: Nómadas suggested Raffaella Carrà, Christina Aguilera and Mina canta o Brasil):** the row had only "pop, ballad, latin", no instruments, experimental 1, so any Spanish-flavoured pop ballad matched; "singing in Spanish is not enough". Two causes, two fixes. Data: the album is Battiato's 1979-85 synth new-wave songs re-recorded in Spanish (Progarchives, Discogs styles New Wave and Synth-pop, RYM Singer-Songwriter, Pop / New Wave); the row was revised and the ChatGPT prompt now says a thin row must be researched further and a re-recording keeps the sound of the songs. Engine (general, standard shrinkage/backoff): an album with fewer than 6 genre, instrument and production values and no instruments or production is completed with the artist's other albums, the closest in time weighing most, in proportion to how little it says (half for three genres). Its own values stay first. Affects the 31 thinnest rows; judged-pair agreement unchanged (0.933, now including the three Nómadas pairs).
- **At least two things in common (Oct 2026, found importing Morricone):** Per qualche dollaro in più (spaghetti western, a genre no other artist has yet, so it weighs nothing under the min_df rule) came out next to Elisa and Annalisa albums whose only common ground was "rock". Rule: a suggestion needs at least two separate pieces of evidence (two shared genres, or a genre plus a shared sound trait, themes, instruments, production or a documented link). Two other fixes were tried and dropped: counting artist-only genres in the coverage total, even only the main one, removed good pairs (Protection → Debut, Prodigy → Chemical Brothers, No Doubt → Blondie) because it penalises precise data. The rule removed 9 of 4,798 suggestions (all single-genre matches, e.g. Geolier → a Prodigy mix, It → In a Dream); judged pairs unchanged (0.933).
- **✕ keeps the list in place (Oct 2026, owner):** tapping ✕ ("Not for me") used to reshuffle the whole list, because the hidden album also became a negative signal that pushed its neighbours down, and its removal changed the variety (MMR) picks after it. Now the album and artist lists are ranked as if nothing on them had been hidden, then hidden items are taken out and the next eligible candidates (above the same cut) join at the bottom (`similarAlbumsStable`, `similarArtistsStable`). The "not for me" still pushes similar albums down on every other page.
- **Artist aliases (Oct 2026):** names are matched folded and exactly, so a source citing "Marina and the Diamonds" missed the MARINA room (Hit Me Hard and Soft's documented influence), and "Dixie Chicks" missed The Chicks. `src/data/artistAliases.ts` lists other credited names; they fold to the main one everywhere links are compared. Judged pairs unchanged.
- **True Blue and the artist-level link (Oct 2026, owner: Madonna's debut came up for every Madonna link, True Blue is her defining sound and closer to Marina):** two causes. Data: True Blue listed only pop and dance-pop before seven one-track genres (latin pop, girl group, motown, flamenco, cuban, bossa nova…), and the rarity weighting let those rare tail labels dominate its genre vector; AllMusic (Dance-Pop, Pop, Adult Contemporary, Contemporary Pop/Rock), Album of the Year and Discogs (Dance-Pop, Synth-pop) were added and the track-level labels moved last. Engine (general): a documented link names an artist, not a record, so among that artist's close albums the place now goes to the one that best stands for the artist (score × (1 + typicality), typicality = similarity to the artist's whole catalogue profile). Tried and dropped: more weight for era (no effect, agreement down) and a sublinear rarity (agreement up but less variety and the debut won even more). Result: True Blue takes 16 of the Madonna links (debut 3); Latin albums no longer reach True Blue through La Isla Bonita. Owner judgments recorded (Electra Heart → True Blue good, → debut bad).
- **Reception: career importance and critical standing (Oct 2026, owner):** two values per album, 0–5, in `docs/descriptors/reception/<artist-id>.csv`. `importance` breaks near ties when a documented link names an artist (the career-defining album wins); `acclaim` is the critical standing today, whether earned at release or later (owner: when doesn't matter). A suggestion 2 points below the album you're on is pushed down, 3 or more is removed, even with a documented link. Missing values change nothing, so the catalogue behaves as before until the data arrives. Test: no suggestion is 3+ acclaim points below its album.
- **Artist links weigh the whole career (Oct 2026, owner: Mariah Carey first for Madonna, ahead of Kylie, because one Madonna album drew on her):** the three reserved places in "If you like this artist" went to any link found on any album, so one of Madonna's 17 albums (Bedtime Stories → Dreamlover) put Mariah first. Rule: album-level links (influences, comparisons) count for the artist only when they cover at least a quarter of their described albums; and links work both ways, so artists who name this one as a career influence (Kylie Minogue, Katy Perry, Spice Girls → Madonna) rank right after this artist's own named influences. Mariah stays in the list on similarity (7th). Test added.
- **An influence leads one way (Oct 2026, owner: Katy Perry first on Queen's page because she names Queen as an influence):** an influence goes from the artist to the ones they draw on, never back. Artist pages no longer reserve a place for artists who name this one (`ARTIST_INFLUENCES` or a quarter of their albums), and an album no longer gains score on another album's page because it draws on that album's artist. A comparison ("sounds like") is a likeness and still counts both ways (Kylie stays on Madonna's page through Rhythm of Love sounding like Madonna).
- **A named record leads to that record (Oct 2026, owner: Fontaines D.C.'s Dopamine Chamber linked to a random Mina album):** in `sounds_like` / `influenced_by` a source that names a specific record or song is written `Artist (Album)` (for a song, its first studio album). The link then goes to that album, ahead of the artist's other albums and without the score cut (the critics' rule still applies). The name before the brackets works everywhere else as before.
- **Critical standing between artists (Oct 2026, owner: No Doubt suggested for R.E.M. and other acclaimed, more niche artists):** "If you like this artist" ignored critics entirely. Each artist now has a standing, the average acclaim (0-5) of their described albums (no rated album counts as 3, mixed). When a candidate stands more than half a point below the artist of the page, its score drops by 0.15 per point beyond that. Documented links keep their reserved places. Effects: No Doubt leaves R.E.M., Katy Perry leaves many pop pages, and nothing close but much less acclaimed is shown for Fela Kuti or Morricone.
- **Standing rule refined, and catalogue buckets weigh little (Oct 2026, owner):** the standing penalty works only downward and only past a full point: artists of similar standing, or rated higher, are not affected (Katy Perry for Harry Styles is fine; No Doubt for R.E.M. is not). The real cause of R.E.M. ↔ No Doubt was in the genres: they shared only AllMusic's catalogue buckets (alternative pop/rock, alternative/indie rock, contemporary pop/rock, adult alternative, album rock, adult contemporary, college rock, American underground), which name a market, not a sound. These `UMBRELLA_GENRES` now weigh 0.3 and are given as a reason only when nothing more specific is shared. 240 of 748 album lists and 44 of 105 artist lists changed; all owner judgments still hold.

### Discovery place: the album's language, and no longer first (Oct 2026)
Owner flagged Shakira's *Oral Fixation, Vol. 2* at the top of Tiromancino's *La descrizione di un attimo*. Root cause: the
discovery place (closest album from a local scene abroad) checked only the artist (Colombia, Spanish), not the album, which
is her English-language crossover; and that place was always shown first, so it read as the best match. Rules now: an album
counts as a local-scene discovery only if its main language is the scene's language; the discovery place keeps its slot but
sits where its score puts it, after documented links. Catalogue effect: local-abroad share 21% → 20%, other metrics unchanged.
Follow-up (owner): Shakira is an international star whatever language she sings in, and she kept turning up as the
discovery place at the end of Italian lists (Elisa, Subsonica, Paola & Chiara, Rettore, Tiromancino…, 16 lists). New
general rule in `src/lib/local.ts`: an artist with two or more key albums (importance ≥ 4, soundtracks excluded) sung mainly
in English is a global crossover, not a local scene, everywhere discovery is used (album and artist suggestions, Bridge,
scene paths, Artists). In today's catalogue it applies to Shakira only. Local-abroad share 20% → 19%; tests unchanged.
