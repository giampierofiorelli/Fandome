# Charli xcx — Phase 02 ONLY (musicology/editorial evidence)

Data provenance: researched from signed expert reviews and first-party recording credits current as of 24 October 2026. Each descriptor is an **editorial assessment**, not an acoustic measurement. All 3 rows remain `draft` until an independent review. The research scope is **original 2017 mixtapes and original 2019 album**, not 2025 reissues or later expanded packages. Catalogue IDs were checked against `src/data/catalog.ts` and the current ID slug rule.

## 1. Number 1 Angel (2017) — `charlixcx-number1angel`

**Release status:** Despite the 2017 Pitchfork review questioning whether a paid 'project' is truly a mixtape, AllMusic, NME and Apple's album editorial call it a mixtape. `type=mixtape`, not `studio`. This is a genuine contemporary terminology disagreement worth preserving. The distinctive ten-track release is verified by Apple's label-side metadata.

**Production:** A. G. Cook and associates were central, but not the only makers. Katherine St. Asaph (Pitchfork, 2017-03-27) independently identifies Patrik Berger on **Emotional**, Klas Åhlund on **Roll With Me**, and A. G. Cook on **Blame It on U**. NME directly reports electronic programming, heavily manipulated synths and vocals. Production lists in the CSV are documented people, **not alleged musical influences**; note different tracks were made by different teams.

**Scales (0–5):**
- `energy=4`: NME hears rapid, forceful beats and energetic pop singles; slower tracks such as White Roses prevent a 5.
- `electronic=5`: NME and AllMusic describe pervasive synthetic timbres and electronic production. This is a qualitative scale, not a claim that no acoustic instrument exists.
- `mood=2`: Charli told The FADER she was feeling lost and raw when making the record; Pitchfork highlights frustrated and sometimes sorrowful romantic writing despite upbeat production. Audible brightness does not mean uniformly happy subject matter.
- `theatrical=3`: NME and Pitchfork discuss bold pop hooks, guest appearances and dramatic late-night scenarios; neither documents an entire theatrical concept or staged narrative.
- `experimental=3`: warped/chopped vocals and unconventional production coexist with fairly straightforward radio-pop song structures (NME, Pitchfork).
- `polish=4`: tightly produced, carefully stylised studio electronics; aggressive textures should not be mistaken for lo-fi recording.
- `tempo=3`: some driving club songs, alongside midtempo/slow sections. No aggregate measured BPM was available; editorial estimate only.
- `groove=4`: many club-oriented songs, several non-dance-oriented emotional sections (NME, Pitchfork, Apple).
- `voice` **left blank**: vocal timbre is often transposed/warped; Fandome's one-word taxonomy fails to express this without risking misleading annotation.
- `lyrics=heartbreak|party`: the two strongest recurring perspectives in specialist accounts, especially Pitchfork and artist interview.
- `landmark=0`: an intermediate but important mixtape, as distinct from the more canonically highlighted *Pop 2*. This is an editorial contextual decision, not a chart/sales measurement; Claude may reassess.

**Genres:** see genre evidence CSV. `dancehall` and `tropicalhouse` are explicitly **3AM song-level** terms, not the fundamental style of all ten tracks. `hiphop` applies particularly to Dreamer; the album remains primarily electronic pop. Do not interpret the genre list as claiming each tag dominates the whole release.

**Comparisons/influences:** Pitchfork likens one track's production to Robyn, but a track-level comparison is insufficient for album-wide `sounds_like`. There is no independently established album-level historical causal influence in the researched sources; both relationship fields remain unknown (blank).

Sources: Pitchfork St. Asaph, NME Daly, AllMusic Yeung, Apple Music editorial, The FADER interview (full URLs in `sources.csv`).

## 2. Pop 2 (2017) — `charlixcx-pop2`

**Release status:** Both The FADER's 2017 interview with Charli and A. G. Cook and Pitchfork's contemporary review unequivocally call it a mixtape. The original issue comprises ten tracks (Apple Music). Avoid treating the later 2025 double-mixtape vinyl as its creation date.

**Production:** A. G. Cook served as creative lead/executive producer, supported by a documented network including EASYFUN, SOPHIE, umru, Life Sim, King Henry, Lil Data and Ö (The Line of Best Fit and MusicBrainz). A production credit is **not** an assertion that the named producer was a stylistic inspiration.

**Scales:**
- `energy=4`: forceful, vivid dance structures alternate with fragile and spacious moments such as Lucky (Pitchfork, The FADER).
- `electronic=5`: Pitchfork documents densely programmed synthesis, glitch processing and radically treated vocals throughout.
- `mood=3`: the music is frequently ecstatic, yet the theme of loneliness and romantic unease is pervasive. Charli calls this project more joyous than Number 1 Angel (FADER interview).
- `theatrical=4`: hyperdramatic vocal processing and huge emotional climaxes coexist with dance-oriented pop structures (Pitchfork).
- `experimental=5`: deliberate sound destruction, structurally disruptive guest handoffs and heavily warped voices are core organising techniques (The FADER primary interview, Pitchfork, Guardian).
- `polish=4`: elaborate digital editing is highly crafted but intentionally abrasive rather than polished to conventional radio-pop smoothness.
- `tempo=4`: frequent fast-feeling dance arrangements; no measured median BPM is claimed.
- `groove=4`: many dancefloor tracks offset by intimate, slow, pensive material.
- `voice` **left blank** due to aggressive processing across many singers; don't mistake this for an unprocessed `clear` voice.
- `lyrics=heartbreak|party`: strongly documented in Pitchfork and FADER.
- `landmark=1`: widespread contemporaneous critical characterisation of a formative artist/PC Music release (Pitchfork, Guardian, NME); editorial classification.

**Genres:** primary `pop|electronic|dancepop` are well supported by NME/Guardian/Pitchfork. `hyperpop` is **retrospective** (The SHFL), and `bubblegumbass` indicates collective/production milieu, not necessarily all song-level arrangements. `eurodance` named by Pitchfork as incorporated historical template; `rnb|hiphop` are especially **track-level** comparisons. The `genre_evidence.csv` scopes each tag for Claude.

**Sounds like:** Pitchfork explicitly likens aspects of the project to Aqua, Crystal Castles and Britney Spears. These are **editorial sonic comparisons**, not factual claims of direct influence: `influenced_by` remains blank. Japanese pop arrangements are referenced by the critic, but `jpop` is intentionally not included as album genre because no source describes Pop 2 as a Japanese-pop release.

## 3. Charli (2019) — `charlixcx-charli`

**Release status:** This is the third officially designated studio album, dated 13 September 2019, confirmed by NME, The Guardian and the original record-credits listings. Its title and existing slug `charlixcx-charli` match the repository.

**Production:** A. G. Cook executive-produced. Qobuz's Warner-supplied credits and MusicBrainz detail separate song-level production teams: Cook, Lotus IV, Ö, Dylan Brady, Stargate, Oscar Holter and others. The CSV **does not** mistake singers featured on tracks (e.g. Christine and the Queens, Haim, Lizzo) or credited songwriters for record producers. These are a documented selection of **main and important contributing** producers, not exhaustive contributors.

**Scales:**
- `energy=4`: high-impact songs like Gone, Click and Shake It contrast with White Mercedes and Official (Pitchfork, NME).
- `electronic=5`: synthesizers, distorted samples, digital processing and dance production are prominent album-wide (Pitchfork). Qualitative dominance, not a statement that no guitars or live drums occur.
- `mood=3`: euphoric club moments against intense anxiety, self-doubt and romantic sincerity (Pitchfork, Guardian).
- `theatrical=4`: maximalist production and ensemble vocal arrangements create dramatic peaks, despite some intimate cuts.
- `experimental=4`: abrasive sonic interventions and avant-garde sensibility, balanced with conventional choruses and ballads (Guardian, NME, Pitchfork).
- `polish=5`: radio-ready, heavily produced multi-collaborator major-label release, even when distortion is intentional; judgement not a literal dynamic-range analysis.
- `tempo=3`: no substantiated quantitative BPM profile; mixture of club music, mid-tempo pop and slow tracks motivates a cautious editorial estimate.
- `groove=3`: dance tracks are prominent but slower lyric-forward tracks occupy meaningful space. A more dance-heavy assessment based on singles alone would violate the guide.
- `voice` left blank because broad pitch-processing and the many contrasting guests make a single qualitative category insufficient.
- `lyrics=introspection|love`: Pitchfork and Guardian highlight anxieties, relationships, self-scrutiny and genuine emotional connection.
- `landmark=1`: the first post-mixtape major studio LP integrating her avant-pop work, consistently discussed as a defining step in reviews.

**Genres:** `synthpop` specifically named for Gone; `edm` specifically for Blame It on Your Love; `rock` refers to some stylised arena-rock percussion, **not dominant guitar-rock**. `bubblegumbass` comes from the weaker AOTY genre metadata rather than two independently signed reviews; Claude should decide whether to keep it. `avantpop` is the NME journalist's name for her post-2014/2019 artistic direction. `rnb|hiphop` are marginal/source-scope tags. The musical evidence is in the genre ledger, not inferred solely from the artist's usual sound.

**Provenance and uncertainty:** confidence high signals agreement between qualified reviewers on the overall artistic character. It does NOT convert individual 0–5 choices into experimentally measured truth. `status=draft` across all rows. Uncertainty belongs here and in `confidence`, never in '(unsure)' notes. Any new genre IDs (see importer note) must be added to the project's genre enumerations before validation.
