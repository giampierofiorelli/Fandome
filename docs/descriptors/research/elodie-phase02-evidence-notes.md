# Fandome Elodie — Phase 02: evidence and uncertainty

Researched 24 October 2026. Includes **only** 2023 *OK. Respira*, 2025 *Mi Ami Mi Odi*, and a separately held 2023 *Red Light* clubtape. No phase-01 rows or older files are duplicated.

## Editorial method

Each numeric value is a source-informed **ordinal editorial assessment**, not a published critic's numeric value, acoustic measurement, or Spotify audio-feature. Compare signed whole-album reviews and release/track credits. The `confidence` flag belongs to the row (not every claim); `draft` means an independent editorial check is still needed. A blank is an explicit abstention. The maximum 3 genres requires choosing dominant or recurring album styles; a one-track style does not automatically become the album's genre. Review scores from critics are **not** copied into Fandome's feature scales.

### OK. Respira — 2023 (`elodie-okrespira`)

**Core sources:** Vassilios Karagiannis, OndaRock 6 Mar 2023; Claudio Cabona, Rockol 25 Dec 2023 republication; Qobuz Universal track-by-track credits; MusicBrainz. Full URLs and claim-to-source mapping appear in `elodie-phase02-sources.csv`.

- `type=studio`, year 2023 and exact ID/title: repository `src/data/catalog.ts` already has `['OK. Respira',2023]`. Keep this ID unchanged.
- `genres=dance|pop|house`: OndaRock explicitly tags dance-pop, house, R&B, and details electro-house *Purple in the Sky*, French-touch *Danse la vie*, and later electro-R&B. We retain house as a substantial album strand, but **do not** claim every track is house. Rockol independently emphasizes pop/dance. Note `house` is now accepted literally by validator.
- `energy=4`, `electronic=4`, `groove=4`: deliberate high-but-not-maximum editorial values. Reviewers document a continuous driving first section and later slower material, which prevents a simplistic 5/5 description of the **whole** album.
- `mood=3`: the club-oriented opening contrasts with darker relationship lyrics and slow ending. Mixed album-level mood rather than assumed euphoria from its singles.
- `experimental=2`: reviewers describe several distinctive transitions yet note largely mainstream hooks and conventional tracks. This is an interpretive summary, not an experimentalism measurement.
- `polish=4`: extensive credited professional production, tight transitions and highly polished sonic presentation in specialist reviews; subjective judgment not production-budget evidence.
- `tempo`, `theatrical`, `voice`: **empty**; evidence does not establish a reliable dominant tempo, a fixed mode of vocal timbre, or a distinct album-wide theatrical score under this schema. We have **not** inferred tempo from `dance`.
- `lyrics=love|identity`: Rockol reports the artist's explicit explanation that she expresses independence through love songs. Do not equate production style with lyric theme.
- `producers=Dardust|ITACA|Katoo|Joan Thiele`: verified track-level credits in Qobuz (DRD is an alias used for Dardust); selective, *not an exhaustive credits claim*. Credits writers like Mahmood, Federica Abbate and Elisa are not automatically producers.
- `sounds_like=Madonna|Kylie Minogue`: Rockol identifies both as album-level sound comparisons; OndaRock separately evokes Madonna's dance-pop continuity. These are **editorial similarities**; no claim the artist personally stated direct influence.
- `influenced_by`: **empty**. A review calls *Purple in the Sky* a sonic homage to Madonna and critics draw comparisons, but this does not establish a documented album-wide causal influence in the strict schema. Claude can reassess if a direct primary statement is found.
- `landmark=1`: editorial career-defining marker because both specialist critics consider the album a consolidated turn towards dance-pop and a coherent stage identity.
- **Disagreement:** Rockol generally praises the project; OndaRock sees the second half as stylistically weaker. Consequently there is no assertion of uniform sonic quality or uninterrupted mixing across **all** tracks.

### Mi Ami Mi Odi — 2025 (`elodie-miamimiodi`)

**Core sources:** Mattia Marzi, Rockol 7 May 2025; Qobuz / Universal track credits; MusicBrainz standard CD; SentireAscoltare album entry (full review inaccessible); RaiNews. The last two are secondary factual reinforcement, not the sole basis for high confidence.

- `type=studio`, `title=Mi Ami Mi Odi`, `year=2025`. This is **not yet listed** in the GitHub `elodie` artist albums; add to catalog without changing previous IDs.
- **Edition choice:** default to the **12-track standard album (2 May 2025)** documented by Rockol and MusicBrainz. One Qobuz edition lists a 13th track, *Raro*, running approximately 40 minutes; do not silently combine edition-specific descriptors.
- `genres=pop|rnb|electronic`: Mattia Marzi explicitly describes a collection with pop, R&B, electronic and urban tracks. The category `urban` does not exist in the guide, so we choose permitted identifiers and **do not introduce `house` simply because Elodie used it on Red Light**.
- `energy=3`, `electronic=3`, `groove=3`: mid-scale editorial scores reflecting a multi-producer, mixed pop/R&B/electronic sequence rather than the continuous nightclub focus of *Red Light*. These are holistic interpretations, not arithmetic means of track audio features.
- `mood=3`: alternating themes of desire, affection, conflict, and softer emotional passages; **not** a uniformly happy or melancholic record.
- `experimental=2`: reviewed as a collection of compact, radio-focused, catchy song forms rather than unusual composition techniques. This reflects the critic's observations, not a blanket dismissal of the album.
- `polish=4`: critic documents numerous prominent mainstream producers and tightly structured commercial production. Does not claim precise loudness, price or production budget.
- `tempo`, `theatrical`, `voice`: empty; no sufficiently reliable whole-album basis with the supplied 0–5 anchors or single voice-label taxonomy.
- `lyrics=love|identity`: review describes contrasting emotional/persona facets; direct song titles and highlighted lines reinforce relationship themes. `identity` is a broader editorial interpretation, therefore a secondary reviewer should verify it.
- `producers=Dardust|ITACA|Golden Years|Lvnar|Wolvs`: each supported by Rockol and Qobuz track-level credits. This is **representative**, not complete; Rockol counts fourteen producers for twelve songs. No writer/guest singer is included merely for being featured.
- `sounds_like`, `influenced_by`: empty. Rockol likens the *single track* *Feeling* to early-2000s American R&B including Mary J. Blige; that is not sufficiently demonstrated as an **album-wide** artist resemblance/influence.
- `landmark=1`: cautiously interpretative contemporary-career marker: Rockol describes the album as consolidating her established 2020–2025 artistic identity; it is **not** a statement of critical consensus or classic status. Second reviewer may reasonably change to 0.
- **Disagreement / limitation:** Rockol is not uniformly approving (6/10) and questions its album cohesion; the 2025 SentireAscoltare record describes mainstream dance-pop, but its complete review could not be inspected (403). Its excerpt is not treated as independent verification of our more granular values.

### Red Light — 2023 (`elodie-redlight`) — HOLD, NOT IMPORTED

**Official artist/industry designation:** Elodie explicitly describes this seven-track release as a **clubtape**, neither a conventional album nor an EP (Rockol, Billboard Italia). MusicBrainz also classifies one release as `Album + Mixtape/Street`; the taxonomy varies by external database. Under Fandome's six allowed `type` values (`studio`, `soundtrack`, `compilation`, `live`, `remix`, `ep`) **no truthful value exists**. Assigning `ep` or `studio` would misstate documented release identity.

Sound research nevertheless supports `dance|house|rnb`: OndaRock explicitly labels these styles and describes seamless club-focused tracks; Billboard reports heavy bass, propulsive rhythms, and some comparisons to Madonna and Beyoncé. A dance-floor `groove=5` would be plausible from multiple independent reviews, but any complete 25-field descriptor is being withheld until the type issue is resolved. Credits from Qobuz: B-CROMA, Simon Says!, Dardust, Lvnar, Marz and Zef across seven tracks. The vocals and lyrics are principally Italian. Candidate ID `elodie-redlight` follows the slug rule and is not in the catalog as checked this phase.

**Suggested Claude action:** add a distinct `mixtape` enum to type validation, guide, UI and catalog if that classification fits the broader product model. Do **not** force it as an EP, and do not include this release in the five-studio-album count. The structured JSON `elodie-phase02-redlight-HELD.json` preserves the draft work without creating an invalid import CSV row; convert to CSV *only after* a consistent schema decision.

### Evidence/reuse caveats

- The 0–5 rating values do not come from direct audio analysis and are **not** supported by acoustic feature measurements; they are transparent second-order syntheses of reviewed album descriptions.
- Track producer credits identify credits, not necessarily a sole artistic director, and different editions may have different credit lists.
- Never infer direct influence from a guest performer, collaborator, or album-art visual reference.
- Use exactly normalized style IDs such as `house` and `triphop`; do not create `trip-hop`, `art pop` or `electro-house` as CSV genre tokens.
