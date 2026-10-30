# How experts judge musical influence: research notes for Fandome's trace (`src/lib/legacy.ts`)

October 2026. Every source below was checked by web search: it exists, and the bibliographic details are correct. Claims I could not verify are marked as such.

## 0. What the trace does today (for reference)

- Per album: `fresh` traits (genres `g:`, production `p:`, instruments `i:`) found in <15% of the area's albums in the 6 years before, plus rare **pairs** of traits.
- Each trait's **spread**: its highest share in the area in a 3-year window within the next 12 years, minus its share before (counted if the gain is ≥10 points). `lift` = the top 5 gains added together.
- **Pioneer** test: ≥80% of the area's adopters in the 3 years around the album came no earlier (`first`); lift ≥0.3; ≥10 adopters; and adopters resemble the album at least 0.05 more than they resemble its same-year contemporaries (`closer`).
- **Followers**: adopters documented as linked to the artist (sounds_like, influenced_by, shared producers, `ARTIST_INFLUENCES`).
- **findingOf**: pioneer + ≥100 catalogue albums in the 6 years before + trait ≤3% of all earlier albums + gain ≥25 points.
- Legacy 0–5 from sources (282 files in `docs/descriptors/legacy/`).

The fixed numbers `MIN_FIELD=10`, `MIN_CATALOGUE=100`, `RARE=0.15` and `NEW_ANYWHERE=0.03` are the parts that will behave differently once the catalogue grows (see §4.6).

---

## 1. Academic work that measures influence and innovation from data

| Work | What it measures | What Fandome can use |
|---|---|---|
| **Mauch, MacCallum, Levy, Leroi (2015)**, "The evolution of popular music: USA 1960–2010", *R. Soc. Open Sci.* 2:150081. https://doi.org/10.1098/rsos.150081 | Harmonic and timbral "topics" in 17,094 Billboard Hot 100 songs. They find continuous change, with three faster **"revolutions" around 1964, 1983 and 1991**, detected as peaks in year-to-year change (Foote novelty). | Revolution detection: take the yearly distribution of traits and find the years where it changes fastest. That gives a background against which each album's "new trait" can be read. |
| **Serrà, Corral, Boguñá, Haro, Arcos (2012)**, "Measuring the evolution of contemporary western popular music", *Sci. Rep.* 2:521. https://doi.org/10.1038/srep00521 | Over 50 years: pitch transitions become more restricted, the timbral palette becomes more uniform, loudness rises. | Warning: the baseline drifts over time. A "rare" trait threshold has to be relative to its own era. |
| **Askin & Mauskapf (2017)**, "What Makes Popular Culture Popular? Product Features and Optimal Differentiation in Music", *Am. Sociol. Rev.* 82(5):910–944. https://doi.org/10.1177/0003122417728662 | Typicality of each song against its contemporaries (about 27k Hot 100 songs). **Moderately atypical** songs chart best; very typical and very atypical songs do worse. | A per-album **typicality score** (mean similarity to same-window albums). Expected influential pattern: atypical at release, typical of what comes after. |
| **Shalit, Weinshall, Chechik (2013)**, "Modeling Musical Influence with Topic Models", ICML, PMLR 28(2):244–252. https://proceedings.mlr.press/v28/shalit13.html | Dynamic Topic Model and Document Influence Model on 24,941 songs (1922–2010). Influence = how far a song shifts later topic distributions toward itself. The scores correlate with a human-curated influence measure. **Influence and innovation are not monotonically correlated**: the most influential songs were especially innovative only in the early 1970s and mid-1990s. | Do not equate "new" with "influential". Fandome's `closer` test is a simple version of the document-influence idea (later albums move toward this one). |
| **Bryan & Wang (2011)**, "Musical Influence Network Analysis and Rank of Sample-Based Music", ISMIR. https://archives.ismir.net/ismir2011/paper/000017.pdf | Directed network built from 42,447 WhoSampled records. **Power-law** degree distribution. **Katz centrality** used as the influence rank. Funk, soul and disco dominate. Song-level edges are collapsed to artist and genre level. | Same graph method for our sounds_like / influenced_by edges, with the same collapse-and-sum from album to artist to genre. |
| **Figueiredo, Panoutsos, Andrade (2024)**, "Surprising Patterns in Musical Influence Networks", arXiv:2410.15996. https://arxiv.org/abs/2410.15996 | AllMusic editor-defined "influenced by" network: 32,568 artists, 119,961 edges. **PageRank** compared with **Disruption**, which barely correlates with it on AllMusic (Kendall 0.026). **Bayesian Surprise** tracks rank changes across snapshots over time. | PageRank and disruption are complementary signals. Re-ranking over time also captures delayed recognition. |
| **Park, Bae, Schich, Park (2015)**, "Topology and evolution of the network of western classical music composers", *EPJ Data Sci.* 4:2. https://doi.org/10.1140/epjds/s13688-015-0039-z | Composer network from CD co-recordings (ArkivMusic + AllMusic). Small-world and modular. Grows by superlinear preferential attachment. | Warning: rich-get-richer. Centrality partly measures fame, so normalise for it (§4.1). |
| **Interiano, Kazemi, Wang, Yang, Yu, Komarova (2018)**, "Musical trends and predictability of success in contemporary songs in and out of the top charts", *R. Soc. Open Sci.* 5:171274. https://doi.org/10.1098/rsos.171274 | About 500k UK songs, 1985–2015. Hits **lead** general trends in some features and **lag** in others. Adding a "superstar" variable greatly improves prediction. | Lead/lag between the mainstream and the rest is measurable (§4.4). Fame confounds success. |
| **Klimek, Kreuzbauer, Thurner (2019)**, "Fashion and art cycles are driven by counter-dominance signals of elite competition: quantitative evidence from music styles", *J. R. Soc. Interface* 16:20180731. https://doi.org/10.1098/rsif.2018.0731 | About 8M Discogs albums (1956–2015), 422 styles. Style changes are best explained by **counter-dominance**: new styles arise as challenges to the dominant ones. Elite copying and random drift explain them less well. | New traits tend to appear where they are *unlike* what dominates. This supports measuring novelty against the dominant sound of the period. |
| **Uzzi, Mukherjee, Stringer, Jones (2013)**, "Atypical Combinations and Scientific Impact", *Science* 342:468–472. https://doi.org/10.1126/science.1240474 | Work with highest impact = mostly **conventional combinations plus a small dose of atypical pairs**, scored with a z-score against a randomised baseline. | Our trait-pair test is the same idea. Uzzi's z-score (observed versus expected co-occurrence) is more robust than a flat 15% cutoff. |
| **Funk & Owen-Smith (2017)**, "A Dynamic Network Measure of Technological Change", *Management Science* 63(3):791–817. https://doi.org/10.1287/mnsc.2015.2366 | The **CD / disruption index**: do later works cite the focal work *instead of* its predecessors (disruptive) or *together with* them (consolidating)? Validation is mixed, and most values cluster near 0. | Disruption for albums: do followers name this album/artist *without* the artist's own influences? |
| **van Raan (2004)**, "Sleeping Beauties in science", *Scientometrics* 59(3):467–472. https://doi.org/10.1023/B:SCIE.0000018543.82441.f1; **Ke, Ferrara, Radicchi, Flammini (2015)**, "Defining and identifying Sleeping Beauties in science", *PNAS* 112(24):7426–7431. https://doi.org/10.1073/pnas.1424329112 | Delayed recognition. Ke et al.'s parameter-free **beauty coefficient B** compares the citation curve with the straight line from publication to peak. B follows a heavy-tailed, continuous distribution, so "sleepers" are not rare outliers. | The same formula applied to an album's adopter curve or follower curve over time (§4.2). |
| **Fraiberger, Sinatra, Resch, Riedl, Barabási (2018)**, "Quantifying reputation and success in art", *Science* 362:825–829. https://doi.org/10.1126/science.aau7224 | Network of co-exhibitions between institutions. An early start at central institutions predicts lasting success: strong path dependence. | Warning: a "legacy" score from sources inherits gatekeeper bias. Keep the data trace as an independent check (which Fandome already does). |

Not verified: I found no music-influence paper by "Gerlach" or "Jacoby" matching the brief. The closest verified works on novelty metrics are Uzzi et al. 2013 and Funk & Owen-Smith 2017 (above). A 2018 Harvard thesis, "Modeling Musical Influence Through Data", uses an AllMusic graph of 16,704 artists as ground truth (https://dash.harvard.edu/entities/publication/d87b0013-4954-4eec-8962-726deaf42659). I did not check its contents.

---

## 2. How critics, historians and musicologists argue influence

Below are the recurring arguments, with what each needs in our data.

1. **Priority / first use.** "The first album to…". It is weak alone: there are almost always earlier precedents. Historians usually say "first to make X prominent". Fandome's `earlier` count and `NEW_ANYWHERE` already encode this caution.
2. **Named followers.** The strongest evidence: later artists cite the record in interviews (our `influenced_by`), and critics compare later records to it (our `sounds_like`). This is the AllMusic "influenced by" model (Figueiredo et al. 2024).
3. **Underground influence versus sales.** The classic case is Brian Eno on the Velvet Underground's first album: only ~30,000 copies sold, but "everyone who bought one of those 30,000 copies started a band" (1982 interview; attribution and the sales figure are discussed by Quote Investigator, 2016, https://quoteinvestigator.com/2016/03/01/velvet/). Influence is measured by *who* adopted the sound, not by how many bought the record. This maps to: high legacy, low `mainstream`, and many followers who are themselves acclaimed.
4. **Genre creation.** The record is named as the origin of a style or a scene. Lena & Peterson (below) show that most genres begin as an avant-garde or a scene. In our data this means a new genre label that later becomes common.
5. **Production and technology firsts.** A new studio technique or instrument (sampler, Auto-Tune, drum machines, gated reverb) that spreads. Our `production` and `instruments` columns capture exactly this, which is why they carry the most weight in the trace.
6. **Longevity of the sound.** The trait is still present decades later, not a 3-year fad. Our 12-year window cuts this off (§4.3).
7. **Cross-genre spread.** The sound leaves its own area. We count only the album's own area: `anywhere` is computed only *before* the album, never after (§4.3).
8. **Sampling and covers.** The WhoSampled-type network (Bryan & Wang 2011). Fandome has no sample/cover data today. A possible future column.
9. **Canonisation and retrospective consecration.** Rankings such as best-albums lists. Schmutz (2005), "Retrospective cultural consecration in popular music", *Am. Behav. Sci.* 48(11):1510–1523 (https://doi.org/10.1177/0002764205276617), studies how albums enter the canon after the fact. Dowd, Ryan, Schmutz et al. (2021), *Am. Behav. Sci.* 65(1):116–139, study consecration *beyond the mainstream* (28,360 progressive rock albums). This is our `legacy` from sources.
10. **Distinction and the underground.** Thornton (1995), *Club Cultures: Music, Media and Subcultural Capital* (Polity): scenes define their worth *against* the "mainstream". Underground status and later mainstream absorption are part of how influence is narrated.

---

## 3. Patterns that repeat in music history

- **Genre lifecycles.** Lena & Peterson (2008), "Classification as Culture: Types and Trajectories of Music Genres", *Am. Sociol. Rev.* 73(5):697–718, https://doi.org/10.1177/000312240807300501. They analyse 60 US genres and find four forms: **Avant-garde → Scene-based → Industry-based → Traditionalist**. Most genres start as avant-garde, some as scenes, a few directly as industry products. So a genre's mainstream score rises over its life, and its pioneers sit at the low-mainstream, high-acclaim end.
- **Periodic revolutions.** Mauch et al. 2015: change is continuous, with bursts around 1964, 1983 and 1991.
- **Market cycles.** Peterson & Berger (1975), "Cycles in Symbol Production: The Case of Popular Music", *Am. Sociol. Rev.* 40(2):158–173, https://doi.org/10.2307/2094343. When the market is concentrated in a few labels, music is homogeneous; when competition opens up, diversity and innovation follow. The finding is contested for the 1980s (Burnett 1990; Lopes 1992).
- **Revival / nostalgia cycles.** Reynolds (2011), *Retromania: Pop Culture's Addiction to Its Own Past* (Faber), describes revivals going back to the 1969 Sha Na Na 1950s revival. Metzger (2017), "The Nostalgia Pendulum: A Rolling 30-Year Cycle of Pop Culture Trends", The Patterning, https://thepatterning.com/2017/02/13/the-nostalgia-pendulum-a-rolling-30-year-cycle-of-pop-culture-trends/: about 30 years, because people who consumed a culture as children later become its creators. The exact period is disputed: Slate (2012) lists 20-, 30- and 40-year claims, https://www.slate.com/blogs/browbeat/2012/04/17/_the_golden_forty_year_rule_and_other_nostalgia_cycles_could_trends_possibly_return_every_40_years_20_years_and_12_15_years_.html. **Treat the period as something to measure, not as a constant.**
- **Counter-dominance.** Klimek et al. 2019: new styles arise as challenges to the dominant ones.
- **Diffusion curves.** Rogers, *Diffusion of Innovations* (1962; 5th ed. 2003, Free Press): an S-curve, with innovators ~2.5% and early adopters ~13.5% of adopters. This roughly matches our "<15% = new" threshold, which is in effect "before the early majority".
- **Hits lead some trends and lag others.** Interiano et al. 2018.
- **Timbre narrows and loudness rises over time.** Serrà et al. 2012.

---

## 4. Proposals for Fandome's algorithm (mapped to existing fields)

### 4.1 Influence graph with time direction (sounds_like + influenced_by + producers)
- **Nodes** = albums (and artists, by collapse-and-sum as in Bryan & Wang 2011). **Edges** go from a later album to an earlier one. Possible weights: influenced_by = 1.0 (artist's own statement), sounds_like = 0.6 (critic comparison), shared producer = 0.3. These weights are proposals and need tuning. An edge is kept **only if the target is earlier**. Where the target is an artist, it points to that artist's albums released before the source album, weighted by `reception.importance`.
- **Score**: time-respecting PageRank or Katz centrality. **Normalise by year**: divide by the mean score of albums from the same 3-year window. Otherwise old albums and famous artists win by default (preferential attachment: Park et al. 2015).
- **Disruption** (Funk & Owen-Smith 2017): among albums that cite X, the share that do *not* also cite X's own influences. High = X opened a line of its own.
- This adds a signal independent of the trait trace and fits the "followers linked" idea already in the code.

### 4.2 Delayed adoption ("sleeping beauty")
- For each spreading trait, build the area's adoption curve `s(t)` for t = 0…30 years. Apply Ke et al.'s beauty coefficient: B = Σ over t ≤ peak of [ (s_peak − s_0)/t_peak · t + s_0 − s(t) ] / max(1, s(t)).
- Large B together with the pioneer test → "ahead of its time" (the Velvet Underground pattern). Do the same with the **follower-edge curve**: the years in which later albums name the artist.
- This requires extending the windows beyond 12 years when data exists (§4.3).

### 4.3 Longevity, cross-area spread, revival
- **Longevity**: the share in years +13…+30, alongside the current peak. A fad = high peak, then back to baseline.
- **Cross-area spread**: compute `after` in *other* areas (not only the artist's base genres) and count the areas where the gain is ≥10 points. Our `anywhere` currently looks only backward.
- **Revival detection**: a trait (or trait pair) with share s₁ in era A, then < s₁/3 for ≥10 years, then rising again. Credit the revival to its pioneer (same `first` / `closer` tests). Add a "returns to" link back to the original peak era. Measure the gap; do not assume 20 or 30 years.
- **Revolutions**: compute the yearly distance between trait distributions (e.g. Jensen–Shannon distance between year y and y−3) for each scene. Peaks = revolution years (Mauch et al. 2015). Albums that pioneer the traits behind a peak get more credit.

### 4.4 Diffusion from niche to mainstream (uses reception `mainstream`)
- For each spreading trait, find the first year it appears in albums with mainstream ≤2 and the first year it appears in albums with mainstream ≥4. The **lag** = the diffusion time.
- An album with low mainstream, acclaim ≥4, many acclaimed followers and a positive lag matches the "everyone started a band" pattern. A mainstream-5 album that *took* a trait after a long lag is an adopter, not a pioneer. This is consistent with the existing rule that the engine never leads from an auteur album to a packaged product.
- Lena & Peterson's trajectory: if a genre's mean `mainstream` rises over time, its earliest acclaimed albums are its avant-garde.

### 4.5 Better novelty statistics
- Replace the flat `RARE=0.15` with **expected-versus-observed** scores. For a pair: z = (observed − expected)/σ, with expected = p(a)·p(b)·N (Uzzi et al. 2013). For a single trait: a binomial test against the window's base rate.
- **Typicality** (Askin & Mauskapf 2017): the album's mean similarity to its contemporaries, using the existing `compareProfiles`. Influential albums should be **atypical at release and typical of the albums that follow**: typicality to adopters minus typicality to contemporaries. This is a continuous version of `closer`.

### 4.6 Scaling thresholds with catalogue size
- **Shares with confidence intervals**: use Wilson score intervals. "Rare" = upper bound < 15%; "spread" = lower bound of `after` minus upper bound of `before` ≥ 10 points. With 10 albums a window says little; with 1,000 it gets tight automatically. This replaces the hard `MIN_FIELD=10`.
- **Relative catalogue gate**: replace `MIN_CATALOGUE=100` with "coverage of this window ≥ k% of the catalogue's median window coverage". Alternatively, require the *field's* window to have ≥30 albums once the catalogue has more than 5,000.
- **Adaptive windows**: when the catalogue is large, use 1-year windows; when it is sparse, keep 3-year windows. Or use a fixed number of albums per window.
- **Rank-based outputs**: "top 2% of lift in its decade" rather than an absolute lift of 0.3, so meaning stays stable as N grows.
- **Performance**: the pair loop is O(traits²) per album and peers are refiltered per call. Precompute a year × area × trait count matrix once (sparse map), then every share is a lookup. Compute the PageRank once per build.

### 4.7 Pitfalls
- **Survivorship and selection bias**: the albums described are the famous ones, so their predecessors are under-described and a sound looks "new" when its sources are simply missing. The `MIN_CATALOGUE` gate addresses this partly. Also report, per window, the share of described albums by artists *not* already famous. Fraiberger et al. 2018 show how strongly fame is path-dependent.
- **Label inflation**: newer albums get more genre/production labels (sources are richer, and Discogs went from few styles to 422). Normalise by the mean number of labels per album in each window, or use a per-window base rate.
- **Retrospective labelling**: terms like "trip hop", "proto-punk" and "dream pop" were applied after the fact. The genre label can appear earlier than the scene itself. Production/instrument traits are less affected and should keep their higher weight.
- **Circularity**: critics' `sounds_like` already reflects reputation. Do not feed `legacy` into the graph score, so the two stay independent.
- **Homogenisation drift** (Serrà 2012): base rates move over time, so always compare within a window, never across eras.
- **Influence ≠ innovation** (Shalit et al. 2013): show both, separately.

---

## 5. Visualising the evolution of music

| Project | What it is | Phone fit |
|---|---|---|
| **Every Noise at Once** (Glenn McDonald, Echo Nest/Spotify; frozen after the Dec 2023 layoffs: TechCrunch 2024, https://techcrunch.com/2024/02/12/every-noise-shut-down-spotify-layoffs/) | A 2D scatter of ~6,000 genres placed by acoustic features, with a tap to play. | Poor: dense and pan/zoom heavy. Inspiring as a "map of everything". |
| **Musicmap** (Kwinten Crauwels, 2016, https://musicmap.info; Information is Beautiful Awards entry https://informationisbeautifulawards.com/showcase/1468-musicmap) | Genealogy of ~230 genres, 1870–2016, as a hand-drawn "city map" with lineage lines. | Medium: works as a zoomable image. Its lineage idea fits our influence graph. |
| **Google Music Timeline** (Google Research blog, 2014, https://research.google/blog/explore-the-history-of-pop-and-punk-jazz-and-folk-with-the-music-timeline/) | A **streamgraph** of genres by release year, based on library ownership. Known bias: it shows today's popularity of old albums, not popularity at release. | Good with a vertical time axis. |
| **Byron & Wattenberg (2008)**, "Stacked Graphs – Geometry & Aesthetics", *IEEE TVCG* 14(6), https://doi.org/10.1109/TVCG.2008.166 | The reference paper for streamgraphs (built on Last.fm listening data). | Method reference. |
| **The Pudding**: Colin Morris (2017), "Are Pop Lyrics Getting More Repetitive?", https://pudding.cool/2017/05/song-repetition/ | A **scrollytelling** essay with one chart per step. | Excellent: a phone-native format. |
| **Mauch et al. 2015** figures | Topic frequencies over time plus a novelty curve marking the "revolutions". | Good: one line chart with marked peaks. |

**What fits Fandome (one column, calm glass, big light numerals, Doto accents):**
1. **Vertical "river" per album**: a single trait's share in its area by year (time runs down the screen). The album is a dot at its year; the curve before is thin and grey, the curve after is in the accent colour. Revival = a second swell. This is the trace made visible and is cheap to render as SVG.
2. **Follower lineage**: a vertical list or tree. Above: influences (influenced_by). The album itself. Below: linked followers, by year. Tap to navigate. No force-directed graph is needed on a phone.
3. **Scene streamgraph**: genres/production traits of one scene over decades, vertical, with revolution years marked (from §4.3) as Doto labels.
4. **Embedding over time** (optional, heavier): a 2D projection (UMAP/PCA) of album profiles with a year slider; a scene's cloud drifts as time passes. Precompute the coordinates at build time (static JSON) and keep it behind a tap. This fits the GDPR rule because nothing third-party is loaded.

Avoid on phones: full network hairballs, 3D views that need two-finger orbiting, and Every-Noise-style dense scatters.
