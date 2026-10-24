# Madonna — incremental Phase 04: evidence and scoring notes

**Date:** 2026-10-24  
**Scope:** exactly three new descriptor rows: *Confessions on a Dance Floor* (2005), *Hard Candy* (2008), *MDNA* (2012).  
**Schema:** 25 columns, following the current `docs/album-descriptors-guide.md`.  
**Editorial state:** `draft` throughout. Sources support observable descriptions; the integers are independently reasoned **editorial encodings**, not numbers given by reviewers or objectively measured loudness, BPM or spectrum. **No listening/acoustic analysis was conducted.**

## General evidence rules

- Signed criticism supplies track-level observations; producer accounts and release credits support production facts. Press-release adjectives are *not* used alone for numeric scores.
- The scores describe the **album as a whole**. A few counterexample tracks prevent single-driven overgeneralization.
- Genre tags are constrained to the guide's 1–3 controlled terms. The `scene` string is short and descriptive, not a verified membership in a specific movement.
- `sounds_like` stays empty in all three rows. Comparisons by critics are often about individual tracks or shared producers, not a defensible whole-album similarity relationship. This is a deliberate abstention.
- `influenced_by` holds only `ABBA` for *Confessions*: producer Stuart Price directly describes the sampled ABBA record as a starting point for *Hung Up* and for the broader album direction. Other artists were **not** inferred from producer names or sonic analogies.
- `confidence` expresses research strength **for the album row**, not mathematical score certainty; `status=draft` requires Claude's independent review. No '(unsure)' suffixes.
- `landmark` is an editorial classification; quality judgments and album historicity are different concepts.

## 1. Confessions on a Dance Floor (2005) — `m-confessions`

**Direct sources:** [C1] Stuart Price first-person interview, Music Week; [C2] Price interview on Madonna's official site; [C3] Billboard/Price, published on official site; [C4] Deusner/Pitchfork; [C5] Cinquemani/Slant; [C6] Petridis/Guardian; [C7–C8] release credits on Qobuz and Amoeba. Exact URLs are in `madonna-phase04-sources.csv`.

**Album identity & sound:** Producer Price reports the 12-track record was deliberately mixed as a continuous DJ sequence, mostly made in his home studio [C2–C3]. The reviews independently describe sustained dance beats, synthesizers, basslines and disco references [C4–C6]. Price says the sample of ABBA's *Gimme! Gimme! Gimme!* for *Hung Up* started as a DJ edit and that Madonna's request for an ABBA/Studio 54 direction set the album's course [C1]. This supports the one positive `influenced_by` link. The album does include exceptions: acoustic guitar and other non-synthetic instruments, plus moments of darker or reflective writing [C5–C6].

| Descriptor | Draft value | Album-specific rationale |
|---|---:|---|
| genres | `dance|disco|electronic` | DJ-sequenced electronic disco production across the record [C3–C6]. |
| energy | 4 | Persistent propulsive dance drive with reflective passages; 5 reserved for near-unbroken maximum intensity [C4–C6]. |
| electronic | 4 | Synth/programmed-dominant but non-electronic guitar, tablas and other textures occur [C4,C6]; do not set 5 = fully electronic. |
| mood | 4 | Club exhilaration frequently coexists with longing and spiritual/material concerns, so not a uniformly euphoric 5 [C4–C6]. |
| theatrical | 3 | Conceptual DJ journey and confident projected lead voice; delivery remains pop-oriented rather than a staged dramatic work [C4–C6]. |
| experimental | 3 | Seamless mix form and repurposed ABBA sample are adventurous within otherwise accessible pop structures [C1,C3,C4]. |
| polish | 5 | Carefully layered synth/bass arrangements and tightly sequenced transitions create an overtly designed production [C3–C6]. |
| tempo | 4 | Predominantly brisk club pulse (ordinal estimate, **not measured BPM**) [C3–C6]. |
| groove | 5 | The project's explicitly designed continuous dance-floor function, also the rubric's own anchor case [C3–C6]. |
| voice | `clear` | Main lead vocal is sung; spoken/chant sections are exceptions, not the predominant type [C4–C5]. |
| lyrics | `love|spiritual` | Relationships on *Hung Up/Get Together*; spiritual framing on *Future Lovers/Isaac* [C4–C5]. |
| scene | `electro-disco club` | Short shorthand for sequenced electronic/disco dance-pop, not a claimed historical geographic scene [C3–C6]. |
| producers | `Madonna|Stuart Price|Mirwais Ahmadzaï|Bloodshy & Avant` | Credited main album production roles; some additional collaborators/original productions on individual tracks [C7–C8]. |
| landmark | 1 | Recognizable landmark in Madonna's post-*American Life* dance-focused discography; interpretive, not a popularity metric [C1,C4–C6]. |
| confidence | `high` | Several independent reviews plus two producer accounts and credits agree on principal sound; high does not mean acoustic measurement. |

**Metadata caveat:** One Qobuz listing for *Confessions* appears to attribute 1994-*Bedtime Stories* personnel to a track named “Forbidden Love,” a title reused in 2005. Do **not** derive 2005 track personnel from that ambiguous Qobuz entry. Other album/track producer fields have been cross-checked against Amoeba's album credits and published reviews [C7–C8].

**Critical disagreement:** Reviewers are not unanimous about the lyrical success or consistency of the second half. Their disagreement is acknowledged; it is not silently converted into a numeric mood/quality score [C4–C6].

## 2. Hard Candy (2008) — `madonna-hardcandy`

**Direct sources:** [H1] Tom Ewing/Pitchfork; [H2] Sal Cinquemani/Slant; [H3] Stephen Thomas Erlewine/AllMusic; [H4] NME reporting producer Danja; [H5] Warner original press release; [H6] Qobuz track credits; [H7] Rolling Stone review.

**Album identity & sound:** The production changes from European-focused club collaboration to US hitmaker teams, including the Neptunes, Timbaland/Timberlake and Danja [H1,H4–H6]. The specialist reviews specifically hear beat-first pop/R&B, hip-hop rhythmic programming, 1970s/1980s funk/disco colors, and a mixture of party/sensual tracks and darker songs like *Miles Away* and *Voices* [H1–H3]. Danja confirms Madonna requested uptempo dance/club work grounded in hip-hop [H4]; this testimony does not prove the entire finished record sounds identical.

| Descriptor | Draft value | Album-specific rationale |
|---|---:|---|
| genres | `pop|rnb|dance` | Pop structures over US R&B/hip-hop rhythm production and danceable funk/disco [H1–H3]. |
| energy | 4 | Broadly high-energy club direction, with reflective slower tracks [H1,H3,H4]. |
| electronic | 4 | Synths, programmed rhythmic hooks and processed production dominate; disco guitar/strings are documented counterexamples [H1,H2]. |
| mood | 3 | Sensual and playful dance tracks contrast with cold, emotionally distant and melancholy passages [H1,H3]. |
| theatrical | 2 | Generally direct rhythmic pop delivery; guests and occasional vocal characters, but little album-wide dramatic staging [H1,H2]. |
| experimental | 1 | Reviewers largely hear conventional or familiar mainstream producer techniques rather than unusual forms [H1,H3]; this is **not** a critical-quality score. |
| polish | 4 | Heavily manufactured major-studio grooves, though densely arranged/cluttered elements argue against consistently pristine polish [H1,H3,H6]. |
| tempo | 4 | Uptempo club aim and many fast dance tracks; mixed with lower-key numbers (ordinal, not BPM measurement) [H1,H3,H4]. |
| groove | 4 | Strong groove-first conception without *Confessions*' uninterrupted DJ-mix structure [H1–H4]. |
| voice | `clear` | Primarily sung lead, with featured male vocal/rap guest appearances not replacing main voice [H1,H2]. |
| lyrics | `sensuality|party` | Sexual imagery and dance/club self-assertion recur prominently [H1,H2]. |
| scene | `US urban dance-pop` | US crossover producer palette; 4-word descriptor is descriptive, not claimed formal scene membership [H1,H4]. |
| producers | `Madonna|The Neptunes|Timbaland|Justin Timberlake|Danja` | Release/track credits confirm production or co-production; label calls Neptunes member Pharrell by name [H5,H6]. |
| landmark | 0 | Not selected as a defining sonic reinvention relative to *Confessions* or *Ray of Light*; editorial judgement informed by [H1–H3]. |
| confidence | `medium` | Production facts high confidence, but single album-wide scalar scores bridge diverse songs and contradictory critical reception. |

**Influence abstention:** Slant notes Chic-like guitar details and disco influences, but there is no strong album-wide creator-confirmed `influenced_by` link from the available references. Producer/featured guest names must not fill that column. `sounds_like` left blank (Pitchfork/AllMusic comparisons are narrow and often refer to production, not equivalence).

## 3. MDNA (2012) — `madonna-mdna`

**Direct sources:** [M1] Matthew Perpetua/Pitchfork; [M2] Sal Cinquemani/Slant; [M3] Alexis Petridis/Guardian; [M4] Observer/Guardian; [M5] track-by-track Billboard credits reproduced by Madonnarama; [M6] standard edition Qobuz label credits; [M7] NME reporting Madonna's studio statements; [M8] translated interview with Martin Solveig.

**Album identity & sound:** EDM-style synths, four-on-the-floor programming and club tracks feature strongly, but this is **not** a uniformly club-focused album: critics single out the abrasive, darker *Gang Bang* and the much more acoustic/strings-oriented *Falling Free* [M1–M4]. Multiple producer teams bring contrasting arrangements; several personal breakup songs coexist with escapist pop [M1–M4]. Label track credits [M5–M6] establish principal producers and prove that album-wide style is a simplification.

| Descriptor | Draft value | Album-specific rationale |
|---|---:|---|
| genres | `dance|electronic|pop` | Predominant electronic pop and dance programming; some quieter pop songs [M1–M4]. |
| energy | 4 | Driving, beat-forward opening tracks counterbalanced by delicate ballads [M3,M4,M7]. |
| electronic | 4 | Multiple synthesized club productions, but conventional strings and restrained arrangements persist [M1–M4]. |
| mood | 3 | Euphoric pop and energetic club chants offset by divorce-related anger, regret and vulnerability [M1–M4]. |
| theatrical | 3 | Narrative violence, stylized recitations and dramatic tonal contrasts occur, but aren't the entire record [M1–M3]. |
| experimental | 2 | Some dubstep/abrasive rhythmic elements (*Gang Bang*) amid generally familiar radio/dance pop [M1,M3]. |
| polish | 4 | Glossy mainstream electronic mixes with occasional deliberately harsh/clattering arrangements [M1,M3]. |
| tempo | 4 | Predominantly uptempo dance numbers with slow ballad exceptions (ordinal, not BPM measurement) [M3,M4,M7]. |
| groove | 4 | Substantial four-to-the-floor club program, less uniform than *Confessions* [M3,M4]. |
| voice | `clear` | Dominant sung lead across album; spoken and guest rap passages do not set the main type [M1–M3]. |
| lyrics | `heartbreak|party` | Relationship breakup and revenge themes alongside dance-floor release [M1–M4]. |
| scene | `2010s EDM pop` | Contemporaneous mainstream EDM/pop crossover, not a named local scene [M1–M4]. |
| producers | `Madonna|William Orbit|Martin Solveig|Benny Benassi|Alle Benassi` | Repeated standard-track co-production roles explicitly documented [M5,M6]; further contributors exist. |
| landmark | 0 | Not marked as a defining album; contemporary critics disagree markedly on individual tracks and artistic outcome [M1–M4]. |
| confidence | `medium` | Track credits and electronic/dance direction agree; whole-album mood/style is especially mixed, limiting one-row precision. |

**Track-variant boundary:** Sources often include deluxe bonus tracks. The descriptor is based on **the core 12-track studio album** where possible; bonus-track production credits must not be presumed representative.

## Outstanding independent review tasks for Claude

1. Confirm the existing `m-confessions` ID and presence in `seed.ts` and whether `madonna-hardcandy` / `madonna-mdna` have already been added by another branch.
2. Check field count and 25-column canonical format. Older phase files may still be 21-column; **migrate those separately** rather than accepting a mixed-schema CSV.
3. Confirm only genre tokens from guide and notes <=15 words; keep `confidence=medium` vs `high` under editorial review.
4. Reassess contentious subjective values (particularly `electronic`, `mood`, `experimental`) with a second independent critic / album-wide listen if feasible; do not mark `reviewed` automatically.
5. Verify attribution of one *Confessions* Qobuz 'Forbidden Love' entry before using track-level instrumental claims; possible cross-album credit collision.
6. Keep sources and interpretive logic with the CSV; do not paste review language into public display or treat the numeric scores as measured quantities.
