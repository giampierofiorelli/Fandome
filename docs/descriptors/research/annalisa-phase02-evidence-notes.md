# Fandome — Annalisa: Phase 02 (2015–2018)

Research performed 2026-10-24. Exactly three new album rows; no previous batches or earlier records repeated. This is musicological/editorial coding **informed** by credited specialist criticism and release metadata, NOT measured audio-feature data. Every score remains `draft` until independently reviewed. Numeric 0–5 scores are transparent calibration estimates: no critic published these numerical scores.

The companion `annalisa_phase02.csv` contains exactly the project's 25 fields. The controlled `genres` vocabulary is unbounded; established tags are spelled exactly as in the GitHub guide. Genre tags that need adding to the validator: `powerpop`, `electropop`, `tropicalhouse`. These exact normalized lowercase spellings are discussed below. Do **not** remove them to make an outdated validator pass.

## Annalisa — Splende (2015), `annalisa-splende`

**Evidence:** Rockol's Mattia Marzi (24 Feb 2015), All Music Italia's published two-review feature by Fabio Fiume and Simone Caprioli (19 Feb 2015), the artist's own discography, and Qobuz/Warner credit data. See the source CSV for exact URLs.

- **Identity/type/credits**: Fourth studio album; original 2015 edition has 11 tracks. Annalisa's official discography credits producer Francesco “Kekko” Silvestre. Qobuz's album note also names Enrico Palmosi; its itemized credits often classify Silvestre as **executive producer** instead of `producer` for individual tracks. Producer field includes Silvestre and Palmosi as overall production team; Diego Calvetti's documented songwriting/arrangement roles do **not** by themselves prove a third album-wide primary-producer credit. Producer-credit nuances need cross-check when completing editorial review.
- **Genres in relative prominence:** `pop` (the whole melodic record), `rock` (Rockol explicitly identifies pop-rock tracks such as “Vincerò” and “Niente tranne noi”), **`powerpop`** (All Music Italia uses the precise term for “Sento solo il presente”), `electronic` (isolated electronic textures; the title track and “Ti sento” are closer to the shelved electronic direction). The record **was originally envisioned as electropop, but Rockol says Silvestre redirected it toward melodic pop**: do not tag the unreleased production concept as if it defines the completed album. One track features a reggae-band guest; that is not enough to classify the whole record reggae without audible corroboration.
- **Energy 3:** A mix of dynamic pop-rock tracks and reflective vocal ballads; neither uniform high energy nor uniformly subdued. Rockol distinguishes these two groups explicitly.
- **Electronic 2:** Production prioritizes piano, strings/orchestra, pop-rock backing; electronics present as a smaller accent. The ratio is an editorial assessment, not a measured count of instruments.
- **Mood 2:** Marzi describes melancholic songs (“L'ultimo addio”, “Posizione fetale”), along with uplifting tracks such as “Vincerò”; the melancholy-leaning average is uncertain, hence overall medium confidence.
- **Theatrical 4:** Several big orchestral/vocal crescendos, notably “Una finestra tra le stelle” and “Posizione fetale”; this is a scale interpretation grounded in written description.
- **Experimental 1 / polish 4:** Reviews describe conventional melodic construction, traditional Sanremo ballad arrangements and clean studio presentation, rather than unusual form or lo-fi texture.
- **Tempo 2 / groove 2:** All Music Italia's more critical reviewer says ballads dominate and slow the pacing; lively numbers prevent a zero. Track-level BPM and waveform features were not measured.
- **Voice clear / lyrics love|identity / language it:** Vocal clarity and romantic/introspective songs are discussed by Marzi; self-affirmation in “Vincerò” supports identity. The original core song sequence is Italian-language. No documented whole-album influence identified: `influenced_by` remains blank. `sounds_like` blank rather than deriving Modà from the producer's other project.
- **Landmark 0:** It represents a stylistic staging point in the later electronic shift, but retrospective career-defining status is debatable.
- **Critical disagreement:** Marzi sees a coherent mature collection; All Music Italia deliberately printed one sympathetic and one highly critical review. Do not convert their taste-based scores into objective acoustic variables.
- **Unlisted genre:** `powerpop` — All Music Italia's Fabio Fiume, 19 February 2015, uses the phrase for “Sento solo il presente”; peripheral track-level inclusion.

## Annalisa — Se avessi un cuore (2016), `annalisa-seavessiuncuore`

**Evidence:** Rockol's album review by Mattia Marzi (20 May 2016), Rockol's artist interview (18 May 2016), All Music Italia's review by Fabio Fiume (19 May), Warner-distributed Qobuz track-level credits, the artist's original tracklist and Warner's Apple Music album entry.

- **Identity/type/credits:** Fifth studio album, 20 May 2016, 12 tracks (not the April 2016 title-track single). Main producer credits: Fabrizio Ferraguzzo, Luca Chiaravalli, Diego Calvetti, Mace and Gadi Sassoon; Gadi is explicitly credited with Mace on “Le coincidenze” in the Qobuz album metadata. Distinguish instrumentalists and writers from producers. The CD includes “Used to You” in English in addition to Italian-language tracks.
- **Genres in relative prominence:** **`electropop`** (both Rockol and All Music Italia directly label the musical pivot), `electronic`, `pop`, `dance` (Rockol calls the predominant songs movement-oriented and danceable), `edm` and **`tropicalhouse`** (Rockol explicitly names EDM and tropical house keyboards on “Noi siamo un'isola”), `house` as the broader taxonomy for tropical house. The last two are track-level supporting elements, not a claim that all twelve cuts are house. No independent evidence for a dominant pure techno or trance album label.
- **Energy 4:** Much of the album is brisk/dance-oriented; “Il diluvio universale” is its prominent dramatic exception, as Rockol explains.
- **Electronic 4:** Rockol documents drum machines, synths, Nord Lead, electronic programming; an orchestra appears in “Il diluvio universale” and some session guitars are credited. Thus strongly electronic, not exclusively electronic.
- **Mood 3:** The lightweight energetic surfaces coexist with romantic/introspective storytelling and a dramatic ballad. The mid-scale assignment is interpretive.
- **Theatrical 3:** The Sanremo orchestral ballad has a strong dramatic climax, but it is exceptional within the electronic album.
- **Experimental 2 / polish 4:** A new direction for Annalisa, but existing radio-oriented EDM/electropop styles; production polished rather than avant-garde.
- **Tempo 4 / groove 4:** Rockol explicitly characterizes nearly all non-orchestral tracks as apt for dancing. No BPM measurement performed.
- **Voice clear / lyrics love|introspection:** Focus on direct vocal articulation, personal narratives and relationship subjects supported by interview and reviews. `language=it|en` due to “Used to You”.
- **`sounds_like=Sia|Lorde`:** Rockol's Marzi directly compares Sia's pop approach and Lorde's sound-world to this album. **These are critic sonic parallels, NOT documented causal influences:** `influenced_by` must remain empty.
- **Landmark 1:** It is explicitly described by Rockol and the artist herself as her decisive transition to electronic pop, a defining point in the artist's musical trajectory, not a commercial success metric.
- **Unlisted genres:** `electropop` and `tropicalhouse` (normalize electro-pop and tropical house). Both need whitelisting under the documented policy.

## Annalisa — Bye Bye (2018), `annalisa-byebye`

**Evidence:** Rockol (Mattia Marzi, 16 Feb), Recensiamo Musica (Ilario Luisetto, 26 Mar), All Music Italia (Fabio Fiume, 22 Feb), Inchiostro Sonoro (Riccardo Meloni, 23 Apr), Qobuz/Warner credits, original artist tracklist and ANSA's artist interview.

- **Identity/type/credits:** Sixth studio album, 16 February 2018, 13 original tracks. The Fandome catalog already includes this album ID; **preserve `annalisa-byebye`**. Qobuz repeatedly credits Michele Canova Iorfida as producer and mixer, and tracks session guitar (Tim Pierce), piano/Rhodes/synth (Alex Alessandroni Jr.), programmed rhythms (Canova and Patrizio Simonini). Patrizio Simonini is often credited **preproduction/programming/mixing**, not album primary producer; do not confuse roles.
- **Genres in relative prominence:** **`electropop`** (Recensiamo Musica's direct album categorization), `pop`, `electronic`, `dance` (Rockol's repeated references to rhythm/danceability), `edm` (“Le parole non mentono” and “Dimenticherai”, Rockol; “Il prossimo weekend”, Recensiamo Musica), `reggaeton` (“Direzione la vita”, “Ogni festa” are **near-reggaeton**, not pure reggaeton, in Marzi's wording), **`tropicalhouse`** (“Il prossimo weekend” according to Rockol), `house` (broader parent of tropical house), `trap` (Inchiostro Sonoro and Recensiamo Musica's observation of “Un domani”), `hiphop` (Onde Funky identifies electronic hip-hop on the album; predominantly guest-inflected, not the core). The ordered genre vector retains peripheral genres without elevating them to the album's primary identity.
- **Energy 4 / tempo 4 / groove 4:** Strong pop hooks, programmed beats and danceable sections across several cuts; retained ballads prevent all three scores reaching 5.
- **Electronic 4 / polish 5:** Verified synthesizers and programming dominate production, with live guitar/piano also documented; multiple specialist reviews describe a heavily produced radio-friendly sound. No claim of an all-synth album.
- **Mood 4:** ANSA's interview describes gratitude, optimism, self-renewal and positive movement toward the future, consistent with Rockol's discussion of new confidence, while romantic/introspective ballads remain.
- **Theatrical 3:** “Il mondo prima di te” builds into a stronger chorus; “Specchio” and “Superare” offer restrained intimate ballad sections. Album isn't uniformly theatrical.
- **Experimental 1:** Specialists generally agree the tracks draw on familiar mainstream contemporary genres rather than uncommon song structures.
- **Voice clear / lyrics identity|love / language it:** Lead vocal presentation clear, artist explains self-reinvention as overall theme, relationship songs also feature. Rap guest on “Un domani” does not make the main voice `rap`.
- **`sounds_like` left blank:** Rockol calls several tracks in the style of Diplo/Skrillex, but that is **track-specific**, not reliable as a whole-album artist comparison. Do not misfile Canova as `influenced_by`; `influenced_by` remains blank.
- **Landmark 1:** Multiple qualified reviews and the artist regard it as a deliberate new chapter; `landmark` encodes a defining stylistic moment, not an objective judgment that critics liked it.
- **Critical disagreement:** Rockol and Recensiamo Musica question whether the fashionable sounds fit her voice; other critics consider the reinvention coherent. They mostly agree on the actual arrangements. Confidence high for sonic categories, not for evaluative artistic quality.
- **Unlisted genres:** `electropop`, `tropicalhouse`. `edm`, `reggaeton`, `trap`, `hiphop`, `house` already exist.

## Policy boundaries / handoff

- Status of all three rows is `draft`; only a second qualified review can mark `reviewed`.
- New genres are included verbatim using ASCII lowercase `powerpop`, `electropop`, `tropicalhouse`. Claude should add them to genre controls and the site before running its validator; they must not be silently deleted to satisfy an old allowlist.
- `genres` is an **ordered unbounded list**. Peripheral styles named for individual songs sit behind album-wide core styles. They should not be treated as equally dominant by the recommendation engine.
- Scores are calibrated in context of the GitHub scale anchors. Evidence supports their broad positioning; exact integers are our provisional interpretation, not measured quantities.
- Never overwrite or repeat Annalisa Phase 01 rows; integrate these three IDs only by checked append/merge.
