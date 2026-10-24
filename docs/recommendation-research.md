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
| **MusicBrainz** | artists, releases, labels, areas, members, relations, community tags and genres | CC0 (public domain) | Facts and tags for every artist: free, no permission needed. |
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
2. **Descriptors** for ~80 artists (50 from Italy, Brazil, France, Spain/Latin, plus 30 international "bridges"), editorial; import MusicBrainz tags for all.
3. **Graph v1**: editorial edges for those 80 + MusicBrainz relations; ListenBrainz similar artists (after checking the licence).
4. **Scoring + explanations**: Bridge in artist rooms, Scenes page in Explore, feedback buttons.
5. **Tune with data**: weights from what fans actually follow; extend descriptors to all rooms with moderators.
6. Later: albums and songs get the same treatment (song catalogue from MusicBrainz).

Needs a backend for the data imports and shared signals (MusicBrainz dumps, ListenBrainz); the scoring itself can run in the browser for a few hundred artists.

## Sources

- Spotify approach (secondary sources): [attractgroup](https://attractgroup.com/blog/how-spotify-algorithm-works-for-music-recommendation/), [Music Pulse](https://www.musicpulse.app/blog/how-the-spotify-algorithm-really-works-in-2026), [scaleengineer](https://scaleengineer.com/blog/how-spotify-optimized-their-recommendation-system)
- Music Genome Project: [Pandora](https://www.pandora.com/corporate/mgp.shtml), [Wikipedia](https://en.wikipedia.org/wiki/Music_Genome_Project), [Rolling Stone](https://www.rollingstone.com/culture/culture-news/pandora-and-intel-decode-the-dna-of-your-favorite-songs-243113/), [WashU](https://source.washu.edu/?p=311017)
- Surveys: [ACM survey](https://dl.acm.org/doi/fullHtml/10.1145/3671151.3671243), [Content-driven music recommendation](https://arxiv.org/pdf/2107.11803), [Challenges in music recommender research](https://ciir-publications.cs.umass.edu/getpdf.php?id=1289), [Popularity bias survey](https://arxiv.org/pdf/2308.01118), [User-centered popularity bias](https://arxiv.org/pdf/2103.06364)
- Knowledge graphs: [IPSIM, ISMIR 2021](https://arxiv.org/pdf/2108.01632), [EARS](https://www.sciencedirect.com/science/article/pii/S0957417423008497), [Collaborative music KG dataset](https://zenodo.org/records/20394102), [GraphAware](https://graphaware.com/blog/building-and-exploring-music-knowledge-graph/)
- Audio features: [Spotify deprecation](https://dev.to/birrings/spotifys-audiofeatures-api-died-in-2024-heres-what-i-built-to-replace-it-3dn3), [AcousticBrainz](https://freqblog.com/blog/acousticbrainz-alternative/)
- Open data: [ListenBrainz API](https://listenbrainz.readthedocs.io/en/latest/users/api/core.html), [How similar artists work](https://community.metabrainz.org/t/how-does-similar-artists-work/678642), [MusicBrainz dumps](https://metabrainz.org/datasets/postgres-dumps), [Last.fm API terms](https://www.last.fm/api/tos)
