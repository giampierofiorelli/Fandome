# Elodie — Phase 01 evidence notes (2016, 2017, 2020)

Research date: 2026-10-24. Scope: **only three albums**. Authored descriptions and judgments, not borrowed review text. Each 0–5 number is a *reasoned editorial classification*, **not** an acoustic measurement or a published expert score. Confidence expresses the support for the row as a whole; `status=draft` until a different reviewer validates it. We deliberately leave unsupported cells empty.

## Catalogue & naming checks

- Repo artist id: `elodie`, already present in `src/data/catalog.ts`.
- `Un'altra vita` (2016) -> `elodie-unaltravita` — **new**.
- `Tutta colpa mia` (2017) -> `elodie-tuttacolpamia` — **new**.
- `This Is Elodie` (2020) -> `elodie-thisiselodie` — **already in catalog; keep same id and title**.
- Later **not included in this batch**: `OK. Respira` (2023, catalog id `elodie-okrespira`), `Mi ami mi odi` (2025, new id proposal `elodie-miamimiodi`). `Red Light` (2023) is a separately identified *clubtape/mixtape* and is not falsely classed as a studio album or EP. The current allowed `type` vocabulary has no `mixtape`; Claude should decide how to represent it.
- **Classificatory disagreement on 2016 debut:** MusicBrainz and retrospective discographies treat `Un'altra vita` as an Album / studio album; Universal Music's Feb 2017 release announcement and All Music Italia's 2016 text call it an EP. CSV `type=studio` is **provisional under the release-group convention**. Claude should resolve the project-wide classification rule using publisher and discographic evidence; do not silently treat the disagreement as settled.

## 2016 — Un'altra vita

Sources: Mattia Marzi, Rockol, 23 May 2016; All Music Italia release report, 7 May 2016; MusicBrainz artist discography; Universal retrospective 16 February 2017. See complete URLs in `elodie-phase01-sources.csv`.

- `genres=pop|soul`: Rockol calls it Italian pop and identifies soul elements in 'Amore avrai', plus soul/blues/jazz-inflected 'La bellezza del mondo'. **Not** a uniformly soul album.
- `energy=2`, `mood=2`: editorial album-level impressions informed by Rockol's account of several melancholic, emotionally charged ballads rather than sustained fast, driving music. Moderate certainty; Claude may prefer blank after independent audit.
- `experimental=1`: conventional radio-pop songwriting and largely standard arrangement approaches described by Rockol. Genre does not by itself determine this score.
- `electronic`, `tempo`, `groove`, `polish`, `theatrical`, `voice`: **blank**. Rockol's description of one song combining acoustic and electronic sounds cannot establish a whole-album fraction or full-album acoustic distribution. Neither an exact typical BPM nor main vocal delivery class is established from these sources.
- `lyrics=heartbreak|introspection`: emotionally troubled relationships and reflective personal writing dominate the songs specifically discussed by Rockol. Other themes may occur; no claim of exhaustive lyric-by-lyric verification.
- `scene=Italian talent-show pop`: contemporaneous industry context (Amici 2016); descriptive movement, not a genre.
- `producers=Luca Mattioni|Emma Marrone`: contemporaneous 2016 reporting and Rockol agree; do not confuse producer Emma with an influence.
- `landmark=0`: while historically significant as a debut, current evidence does not establish it among Elodie's *defining sound* albums; this is a subjective judgement and may be revised.
- `sounds_like` and `influenced_by`: intentionally blank. Rockol notes a resemblance to early Emma productions **for two songs**, which cannot safely be extrapolated to all eight tracks. Collaborators/authors also do not prove influence.
- **Editorial concern:** Rockol was critical of the record's uniformity and relative lack of emotional depth compared to live performances. Do not falsely present a unanimous endorsement.

## 2017 — Tutta colpa mia

Sources: Universal Music's 16 Feb 2017 release statement, Mattia Marzi's 17 Feb 2017 Rockol album review, and Elodie's first-person 17 Feb 2017 Ritratti di Note interview.

- `genres=pop|soul`: Universal describes 1960s pop blended with British new soul, and Elodie explicitly characterizes her own style as pop-soul rather than Emma's pop-rock. Terms are **style references**, not claims of 1960s recording dates.
- `energy=3`, `tempo=3`: 13-song sequence explicitly mixes acoustic ballads and energetic uptempo tracks, making a mid-scale *editorial* album summary more supportable than a constant fast tempo; no measured BPM.
- `electronic=1`: label identifies live in-session playing and vintage instruments, spring reverb and tape delay; Rockol notes occasional electronic touches. **Tape delay is not evidence of a predominantly electronic album.**
- `mood=3`: contrasts light retro songs with emotionally strained closing ballads and relationship anxieties; neither uniformly euphoric nor uniformly bleak.
- `experimental=1`, `polish=3`: carefully executed, recognizable retro/songcraft arrangements and produced studio sound, not raw field audio. Moderately interpretive scores, suitable for secondary review.
- `groove=2`: live soul/pop uptempo tracks alongside substantial ballad material; explicitly *not* a club-oriented continuous dance album.
- `lyrics=love|heartbreak`: supported by the artist's explicit remarks about feelings/relationships and song-by-song album review.
- `producers=Luca Mattioni|Emma Marrone`: contemporaneous label credit. Instrumentalist and songwriter lists are **not** producer lists.
- `voice`, `theatrical`: blank; the source says voice is warm and emotionally expressive, neither of which maps safely to the guide's fixed choices.
- `sounds_like` and `influenced_by`: blank. General 1960s and British new-soul aesthetics do not justify naming a particular musician as a documented influence.
- `landmark=0`: significant stylistic bridge but not firmly established as a defining later-career album.

## 2020 — This Is Elodie

Sources: Mattia Marzi, Rockol 31 Jan 2020; Tommaso Benelli, OndaRock 7 Feb 2020; All Music Italia 28 Jan 2020 detailed per-track credits; MusicBrainz record metadata.

- `genres=pop|rnb|hiphop`: both independently signed critics point to a broad mainstream/urban pop frame with R&B and significant rap/hip-hop participation. These three are a compromise forced by the **max three genres** guide, not a claim that all tracks share one style. Reggae-pop, funk and electropop appear on specific tracks and are detailed below rather than overstated as album-wide dominant genres.
- `energy=3`, `tempo=3`, `groove=3`: multi-producer sequence traverses beat-led urban cuts, pop choruses, reggae-pop/dancehall references and quieter/acoustic material. A mid-scale score reflects that variety; no tempo measurement and no assumption every song is dance-floor-oriented.
- `electronic=3`: critics explicitly distinguish urban/electropop and synth/beat-driven passages from acoustic songs ('In fondo non c'è'). `4` or `5` would falsely imply most of the whole album was strongly electronic.
- `mood=3`: reviewer-described tonal variety, not sustained euphoria or melancholy. Moderate editorial confidence on this individual cell.
- `experimental=2`: heterogeneity of genres and interludes does not automatically equal avant-garde techniques; critics describe contemporary mainstream structures.
- `polish=4`: multiple reviewed tracks have elaborate synthetic arrangements and clearly commercial studio finishes; this is a **qualitative** assessment, not a loudness/dynamic range reading.
- `lyrics=love`: strongly present across multiple reviewed titles; intentionally do not infer political or identity themes simply from the self-description in the album's title.
- `scene=Italian urban pop`: both named reviewers anchor it in that national scene.
- `producers`: the CSV lists **eight documented representative credits**, **not** the entire team (which includes additional producers like CanovA, Daddy's Groove, Francesco Catitti, Generic Animal, Davide Simonetta, among others). Full album-wide source list is in All Music Italia's track-level compilation and MusicBrainz. If the app expects *every* producer, Claude should choose an explicit, consistent policy.
- `landmark=1`: reviews frame it as a radical post-talent reinvention / opening of modern urban pop phase; this is an editorial importance label, not an independently measured popularity statistic.
- `sounds_like` intentionally blank: OndaRock mentions Robyn-like synth timbres on *one track* and hip-hop Beyoncé-like stabs on *Andromeda*; neither is a demonstrated album-wide sonic analogue.
- `influenced_by` intentionally blank: direct collaborators, the guest rappers and named producers are not automatically formative influences.
- `theatrical`, `voice`: blank rather than projecting performance or timbre from individual tracks onto a whole album.
- **Critical disagreement:** Rockol rates the record 7/10 but questions stylistic cohesion; OndaRock rates it 5.5/10 and questions the strength of the songs beyond the lead single. They agree broadly on urban-pop/R&B/rap stylistic diversity; disagreement about *quality* must not be concealed or converted into fabricated sonic metrics.
- **Variant caution:** Rockol reports that the initial 31 Jan 2020 digital version preceded inclusion of 'Andromeda', while the physical release followed in early Feb. MusicBrainz lists multiple releases. The descriptor adopts the standard, subsequently available album as a whole; Claude should check which release tracklist the app uses.

## Newly supported genres — correct spelling

The current guide and validator include `house`, `techno`, `ambient`, `triphop`, `artpop`, `gospel` (and other subsequently added codes). **None of those six are automatically assigned in this batch**: documentation of a house keyboard in a *single 2020 song* cannot establish `house` as one of the three primary genres for the **whole album**. For the next Elodie batch, multiple specialists describe the stronger house influence of `OK. Respira`.

## Import constraints

- Reviewers should inspect the raw expert sources (URLs supplied) and validate numeric scores independently. No claim of listening-based measurement is made.
- Merge ONLY these three input records. Do not replace any existing artist CSV, do not copy Madonna records, and do not modify `src/data/catalog.ts` without Claude's audit.
- Source material is citations and original paraphrase only; no reproduced review passages.
