# Chappell Roan — Phase 01 evidence and scale audit

Scope frozen: 25 October 2026. Exactly two independent releases: *School Nights* (5-track 2017 EP) and *The Rise and Fall of a Midwest Princess* (14-track 2023 studio LP). Live albums, reissues, subsequent standalone singles and featured appearances are **excluded**. No additional 2026 studio LP verified (Apple Music and official site); later releases must be newly verified before adding.

## Method and restrictions

All 0–5 figures are **editorial album-wide, ordinal estimates** informed by reviews, not audio feature measurements. A source tagging a song or track does not establish a dominant album-wide genre: `genre_evidence.csv` records scope and strength for every token, with `low` rows requiring a second review. Genre ordering foregrounds dominant and strongly grounded components, then qualified textures. No genre cap. `voice` is the *vocal delivery*, not the artist's gender or the persona. The `mood` score is NOT groove or energy; bittersweet lyric themes can coexist with bright synth hooks. Genre names use existing guide tokens only.

## School Nights — chappell-schoolnights

Release: 22 September 2017, Atlantic EP; five tracks, independently corroborated by label link, MusicBrainz and Qobuz. Qobuz directly credits Andrew Wells and Jennifer Decilveo as co-producers of **Good Hurt**. Album of the Year additionally lists producer Phili Stelios, but Qobuz only shows him as writer on **Sugar High**: mark Phili as an **unresolved producer credit** for Claude to verify, not as independently proved from Qobuz. No reason to label Chappell herself an album producer solely because she wrote all songs.

Genres: first-person retrospective calls the project **dark, angsty pop** (NME), Qobuz classifies alternative/indie and AllMusic pop. Secondary genre source includes alt-pop, contemporary R&B and adult contemporary; last two are weak taxonomic additions and should not drive sonic similarity at the same weight as pop. `downtempo` is an album-era Pitchfork retrospective rather than precise EP-wide sonic analysis; audit before retaining.

Voice: `raspy|soft|powerful` maps a contemporary review's lower husky/alto presentation and powerful phrasing into coarse permitted categories. These are NOT formal voice types; `raspy` is an imperfect mapping from 'husky', which Claude should verify. `mood=1` supported by artist calling it dark and angsty, and independent reviews identifying sombre material. `energy=2`, `tempo=2`, `groove=1` are low-movement editorial inferences, not BPM; lower confidence if challenged. `theatrical=1` reflects artist's own distinction between vocal emphasis and later invented persona, NOT a proven 2017 staging measurement. `electronic` and `polish` abstain: no reviewed whole-EP balance of electronic/acoustic instrumentation or production finish. `experimental=1` tentative conventional slow-pop structures. Primary lyrical `heartbreak|love|introspection` qualified by Good Hurt and the contemporaneous EP synopsis.

`sounds_like=Lorde|Lana Del Rey` describes critical similarity from 2017-era discussion, **not** artist-stated album influence. `influenced_by` intentionally blank because her later long career influences cannot be causally assigned to this EP without dated evidence. `landmark=0`: early important release, but later album defines widely documented breakthrough.

## The Rise and Fall of a Midwest Princess — chappell-theriseandfallofamidwestprincess

The 2023 original has 14 tracks. Its official credits distinguish main productions (Daniel Nigro, Ryan Linvill, Mike Wise) and additional productions (Noah Conrad, LIXA, Jonah Shy). All six qualify as production credits, not only songwriting; some appear only on one or two recordings. No credit is inferred from recording, mixing, vocal performance, or horn arrangement (e.g. Ryan Linvill's *California* arranger role does not count as production for that song).

Genres: dominant `pop|dancepop|synthpop`; multiple specialized album classifications and critical comparisons confirm `altpop|electropop|disco|poprock|rock`. `electroclash` clearly applies to songs Femininomenon/HOT TO GO!, `house` is a one-song reviewer framing, `country` is **vocal inflection** in two songs rather than a predominantly country backing band, `rnb` comes from Pitchfork Pop/R&B desk label, `songwriter` from AllMusic metadata. A second reviewer may remove `house`, `country` and/or `rnb` if they are too tenuous for the album's similarity algorithm. Keep individual supporting context in genre file even if a token is pruned.

`energy=4`, `electronic=4`, `groove=4`: electronically driven club choruses are important but ballads Coffee/Kaleidoscope/California interrupt the dance sequences. Never set a flat 5 by extrapolating HOT TO GO!. `mood=3` explicitly balances euphoric humour and liberated identity against pain, sadness, homesickness and relationship frustration across 14 tracks. `theatrical=5` reflects highly deliberate camp/drag delivery, spoken monologues and chants; it is a quality of the **recording**, not merely wardrobe. `experimental=2`: critic Pitchfork notes conventional hook-led structures amid unusual switch-ups, so theatrical flair is not experimental composition. `polish=4` strong professional detailed arrangements; `tempo=3` mid/fast album overall with significant ballads.

`voice=powerful|clear|spoken|soft|choral` combines Pitchfork dynamic belt and quieter register, explicitly spoken introductions, and group/chant vocals; `choral` here means gang vocals, not a classical choir. Document lyrics as `identity|love|sensuality|heartbreak|irony|party|nostalgia`. Neither sexually frank text nor prominent queer identity implies an album is always 'bright': `mood=3`.

Influences: `Katy Perry|Lady Gaga|Kesha|Nicki Minaj` are named by Roan in interviews as formative early-2010s pop listening, and Gaga explicitly informs her spoken delivery on Midwest Princess tracks. They are **better-supported formative influences** than comparisons with other singers. A narrower causal standard may retain only Lady Gaga and Katy Perry; other artists' direct impact on *specific tracks* is not proven. `sounds_like` are critical/editorial sonic similarities, not literal production partnerships. **Never treat Dan Nigro or Olivia Rodrigo as an artistic influence merely because they share a producer.** Madonna and RuPaul comparisons for *Super Graphic* are critic-level sonic connections, not first-person proof of direct album influence.

## Remaining risks for Claude

1. Verify 2017 Phili Stelios production credit against liner/source of record; AOTY lists producer whereas Qobuz only says writer. If not independently verified, remove producer from 25-field row.
2. Review low-strength 2017 genres `contemporaryrnb`, `adultcontemporary`, `downtempo` before they affect similarity.
3. Review `country`, `house` and `rnb` in 2023 to decide whether artist matching should include track-level colour.
4. `influenced_by` requires traceable artistic shaping, not merely shared childhood taste. Narrow conservatively if needed.
5. The official catalogue does not have a second studio LP by 2026-10-25. Do not create one from a single or social rumour.
6. Both rows remain `status=draft`; no direct audio analysis or second independent human review occurred.
