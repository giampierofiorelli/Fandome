# Madame — Fandome evidence notes (phase 01)

_Date of research: 2026-10-24. Exactly three studio albums; no catalog editions conflated. Every CSV row is a **draft**, not an independently reviewed measurement. Source keys point to `madame-sources.csv`; every genre has an individual entry in `madame-genre-evidence.csv`._

## Discography and ID audit

- Repository `src/data/catalog.ts` has `['madame', 'Madame', ..., [['Madame', 2021], ['L’amore', 2023]]]`. Existing generated IDs must remain `madame-madame`, `madame-lamore` (slug strips the apostrophe).
- `Disincanto` (2026) is the third studio album, officially listed by Sugar. Proposed correct new ID: `madame-disincanto`. **Claude must add it to the catalog before enabling recommendations.**
- Date conflict: Sugar's official site and All Music Italia say release **17 April 2026**. Some licensed stores, including Qobuz, show 16 April (digital storefront/territory or ingestion date). The `year=2026` is unaffected. Do not overwrite the official original release date on the basis of a storefront timestamp. [26_LABEL,26_AMI,26_QOBUZ]
- 2021 baseline is the **original 16-track** album. Qobuz also lists 17/18-track extended versions with *Marea* and *Tu mi hai capito*: do not use additional Charlie Charles production or track mood to describe the original. [21_LABEL,21_QOBUZ]
- 2023 baseline is the **original 14-track CD/LP** album; *Tekno pokè* exists as a digital bonus and is excluded from the central sonic scoring. [23_LABEL,23_ONDA,23_QOBUZ]
- 2026 baseline is the **14-track standard** album on Sugar's store. [26_SUGARSHOP]

## Madame (2021) — `madame-madame`

### Verified sounds and classification
OndaRock (Antonio Silvestri) directly classifies hip-hop and R&B, naming trap and the variety between quick rap delivery, melodic hooks, autotuned robotic timbres and direct confessional singing. Rockol (Claudio Cabona) notes electronic production on *Mami papi*, funk on *Il mio amico*, soul-like chorus on *Dimmi ora*, plus personal lyrics, body/sexuality, self-acceptance, family and mortality. These subordinate tags are retained because the current guide has **no genre count cap**, but are not called the dominant album style. [21_ONDA,21_ROCKOL]

### Production
Credited core (order prioritizes recurring names, not invented weights): Bias, Crookers, Dardust, Zef, Mr. Monkey, Shablo, 2nd Roof, Enrico Brun, Estremo, Nic Sarno, Michelangelo, Garelli. Note that **DRD is Dardust's alias**: do not store the same producer twice. Source credits appear song-by-song in OndaRock, Universal and Qobuz. [21_ONDA,21_LABEL,21_QOBUZ]

### Proposed 0–5 reasoning
- `energy=3`: moves among urgent rap, melodic pop and softer confession; no uniform fast/loud profile. [21_ONDA,21_ROCKOL]
- `electronic=3`: substantial programmed production, auto-tune and digital sound, but diverse organic pop arrangements; refrain from a fully-electronic rating. [21_ONDA,21_ROCKOL]
- `mood=2`: lyrical vulnerability, shame, mortality and family concerns outweigh sunny outliers. [21_ROCKOL]
- `theatrical=3`: highly expressive alter-ego/flow variation, without an album-length staged character narrative. [21_ROCKOL]
- `experimental=3`: distinctive vocal and production risk beside conventional pop/feature-driven tracks. [21_SA,21_ONDA]
- `polish=4`: multiple established producers, layered modern studio sound, and careful arrangements. [21_ONDA,21_ROCKOL]
- `tempo=3`: mid-tempo mixture; source reviews describe ballads and brisk rap cuts but provide no measured BPM distribution. [21_ONDA]
- `groove=3`: some danceable/electronic tracks, but substantial non-dance, lyrical material. [21_ROCKOL]
- `voice=rap|clear|soft`: she moves from agile rapped phrasing to sung intimate lines. [21_ONDA]
- `lyrics=identity|introspection|love|sensuality|storytelling|social`: themes documented in critic track-by-track analysis; not made to imply equal frequency. [21_ROCKOL]
- `sounds_like` and `influenced_by` left empty: guest artists/producers **are not influences**; generic genre similarities are not enough. `landmark=1` is editorial, supported by debut's Tenco recognition and sustained specialist discussion. [21_SUGAR,21_ONDA]
- **Critical disagreement:** Rockol calls it highly successful, whereas SentireAscoltare notes compromises in album-making and too many guests. This justifies retaining `draft` even though source agreement on sound is strong. [21_ROCKOL,21_SA]

## L'amore (2023) — `madame-lamore`

### Verified sounds and classification
OndaRock tags `hiphop|pop|songwriter|trap`. Its reviewer describes traditional piano/chamber music on *Milagro*, bossa nova in *Nimpha*, classically flavoured folk in *Per il tuo bene*, and electronic cuts *Il bene nel male*, *La festa della cruda verità*, *L'onda*. Rockol stresses the ambitious concept, dramatic alter-ego storytelling, Mediterranean/Latin shades, and emotional complexity. The precise named sonic genres are all represented; a chamber arrangement is **not automatically the classical genre**. [23_ONDA,23_ROCKOL]

### Documented influences
Madame herself identifies **Fabrizio De André** and **Franco Battiato** as relevant inspirations in interviews around the album. This supports `influenced_by` (unlike collaborators, who are excluded). The artist separately mentions Latin music for *Nimpha*, which supports `latin` only as a secondary song-specific thread. [23_LASTAMPA,23_REPUBBLICA]

### Production
Release-credited producers verified by MusicBrainz, with selected tracks matched to Universal/Qobuz: Shablo, Luca Faraone, Bias, Dardust, Chris Nolan, Brail, Nazzaro, Dario Pruneddu, Antonio Filippelli, Gianmarco Manilardi. Dardust credited on *La festa della cruda verità* and *L'onda*; Chris Nolan on *Come voglio l'amore*; Nazzaro on the skit. These are not 'influences'. [23_MB,23_LABEL,23_QOBUZ]

### Proposed 0–5 reasoning
- `energy=2`, `tempo=2`, `groove=2`: album favors slower, reflective and intimate episodes, though it includes electronic/sensual beats and more animated tracks; not a club record. [23_ONDA,23_ROCKOL]
- `electronic=3`: diverse instrumentation spans digital electronic tracks and natural orchestral, folk and piano-led songs. [23_ONDA]
- `mood=1`: heavily sombre treatment of harmful, desperate or conflicted relationships; some irony, not euphoric overall. [23_ROCKOL]
- `theatrical=4`: lyric persona and character-based narratives across many women, ambitious concept through multiple perspectives. [23_ROCKOL]
- `experimental=4`: unusually heterogeneous song structures, contrast between electronics, bossa nova, folk and chamber music. [23_ONDA]
- `polish=4`: prominent producers, articulated studio arrangement choices, despite stylistic unevenness. [23_ONDA,23_MB]
- `voice=clear|rap|soft|spoken`: sung delivery dominates, with rap turns and spoken skit; keep in source order of prevalence. [23_ONDA]
- `lyrics=love|sensuality|identity|heartbreak|storytelling|social|introspection|irony`: multidimensional concept mapped to guideline vocabulary. [23_ROCKOL]
- `landmark=1`: one of the artist's defining stylistic/personal records per multiple critics. `sounds_like` empty because no adequately supported full-album sonic comparison. [23_ONDA,23_ROCKOL]
- **Critical disagreement:** OndaRock finds sequencing uneven and some of the songwriter material less inspired; Rockol instead admires the sustained artistic gamble. This is not erased by the shared recognition of genre and arrangement choices. [23_ONDA,23_ROCKOL]
- **New genre token:** `bossanova` on *Nimpha*, critic-documented. Add to Claude's list/validator before validation. [23_ONDA]

## Disincanto (2026) — `madame-disincanto`

### Verified sounds and classification
OndaRock explicitly heads its review with pop-rap and R&B, describing electronically processed R&B, haunted synths and a low-spirited, introspective atmosphere. SentireAscoltare calls the production minimal synth-electronic and highlights its personal confessional approach. OndaRock labels *Puttana svizzera* pop-trap, and *Bestia* nu soul. Both are **track-specific** subordinate categories; include original and broader normalized tags (`trappop|trap`, `nusoul|soul`) without pretending the whole album is trap or soul. [26_ONDA,26_SA]

### Production, credits and disputed specificity
Bias/Nicolas Biasin leads the production on practically every cut. All Music Italia song-by-song credited co-producers include Mr. Monkey, Lester Nowhere, Oddsphere. Qobuz additionally marks Madame as producer on *Bestia*. She is included in the CSV only for that verified producer credit, **not** merely as vocalist, composer or executive producer. Verify whether this licensed credit is available on the matching standard edition before merging. [26_AMI,26_QOBUZ]

### Proposed 0–5 reasoning
- `energy=3`, `tempo=3`: subdued sonic minimalism alternates with sharp rhythmic rap and brighter dance-tempo moments. [26_ONDA,26_SA]
- `electronic=4`: synth and drum programming central across the LP, contrasted with isolated piano/horn arrangements. [26_SA,26_ONDA]
- `mood=1`: critics repeatedly emphasize emotional and social darkness rather than euphoric tone. [26_ONDA,26_SA]
- `theatrical=3`: intense vocal/confessional staging, but a more consistent first-person lens than L'amore's multiple imagined characters. [26_ONDA]
- `experimental=3`: atypical electronic R&B craft and deeply personal writing within recognizable pop-rap structures. [26_ONDA]
- `polish=4`: restrained, deliberate sound design with consistent Bias-led production. [26_AMI,26_SA]
- `groove=2`: some rhythmic tracks but not a dance-oriented album. [26_ONDA]
- `voice=rap|clear|soft|spoken`: sung-rap hybrid, direct intimate delivery, some conversational/spoken phrases. [26_ONDA]
- `lyrics=introspection|identity|social|heartbreak|storytelling|irony|love|sensuality`: reflection on self-definition, scrutiny, industry, suffering, relationships; individual themes vary by track. [26_ROCKOL,26_ONDA]
- `landmark=1`: recent, critically discussed consolidation of earlier paths; value is editorial and should be reconsidered as discography grows. [26_ONDA,26_ROCKOL]
- `sounds_like`/`influenced_by` empty: references to other rappers in reviews are not necessarily claimed inspiration for this album.
- **New genre token:** `nusoul` (OndaRock's term for *Bestia*); add to allowed genres before validation. [26_ONDA]

## Provenance, uncertainty and import constraints
1. Numeric scales are expert-guided **editorial inferences**, not measured physical signals or claims that any reviewed outlet assigned our 0–5 scale.
2. Genre provenance is track/album scoped in `madame-genre-evidence.csv`; DO NOT automatically elevate one-song details to majority-of-album sound.
3. All 3 rows have `confidence=high` for robust source agreement on overall sound/credits, **but** individual values have different uncertainty; the per-dimension notes convey this. All rows `draft`, not reviewed.
4. No attempts to copy critic prose; descriptions and rationale are own paraphrases. Do not import review text into the app.
5. Claude must read the currently committed guide, add `bossanova`/`nusoul`/`poprap` to the genre registry and validator (if not already supported), add new album `Disincanto` to catalog, then import and run tests.
