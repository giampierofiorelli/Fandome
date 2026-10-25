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
