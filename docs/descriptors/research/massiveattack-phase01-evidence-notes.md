# Massive Attack — Phase 01 research and evidence notes

Evidence links are indexed in `massiveattack_phase01_sources.csv`; genre-by-genre traceability is in `massiveattack_phase01_genre_evidence.csv`. Every score below is a judgment about the **album as a whole**, not an average of hit singles. Scale 0–5 follows `docs/album-descriptors-guide.md`.

## Blue Lines (1991) — `massiveattack-bluelines`

**Album & producer evidence:** MusicBrainz original-release track production attributes production to Massive Attack and Jonny Dollar. Slant, Pitchfork, the Guardian and AllMusic corroborate the Bristol sound-system setting. Jonny Dollar's work is producer/co-producer rather than merely an arranger's credit.

**Genre evidence / dispute:** AllMusic's trip-hop tag is retrospective. Pitchfork argues that the album's core is hip-hop rather than an independent genre, though both sources describe dub, soul and dance ingredients. The Guardian identifies funk and jazz-fusion antecedents; Slant explicitly uses R&B and house. `jazzfusion`, `raregroove`, `chillout` and `psychedelicrock` are *secondary* track/texture evidence, not claims of a uniformly jazz-rock/chill-out record. Later Bristol records make a valid `sounds_like` comparison but cannot have been influences on the earlier Blue Lines.

**Instruments:** Classic Pop identifies DJ decks (turntables), Ensoniq EPS sample synthesizer (`sampler` and `synth`), a Yamaha drum machine (`drummachine`) and Paul Johnson's credited live bass. AllMusic hears electric piano in One Love and percussion/guitar in Five Man Army; Classic Pop documents real orchestral strings on Unfinished Sympathy, arranged by Will Malone and recorded at Abbey Road. Do not assume sampled bass in another song means a distinct credited player.

**Production:** `sampling` is documented by music-making accounts, credited sample uses and original gear. Specific gear such as Ensoniq EPS or Yamaha drum-machine **model** is deliberately not assigned a new machine token without stronger device-identification evidence. Pitchfork notes chopped vocal effects on Safe from Harm; we did not promote this localized treatment to the album's dominant production trait.

**Voice and themes:** Shara Nelson and Horace Andy provide soul/reggae singing, while the group's spoken/rapped lines and Tricky justify `rap`. Lyrics traverse protection, romantic longing, social unease and the spiritual outlook of Hymn of the Big Wheel. `soft` and `clear` are aggregate classifications, not claims that every singer shares one timbre.

**Scores:** energy 3 (steady heavy beats, selected energetic singles); electronic 3 (samplers and drum machines balanced with live bass and full strings); mood 2 (nocturnal and often uneasy, with warmth and uplift); theatrical 2 (mostly restrained delivery; one large orchestral swell); experimental 3 (hybrid production, but melodic); polish 4 (structured, meticulously layered studio album); tempo 2 (typically relaxed to mid-tempo); groove 3 (danceable passages without being a straight club album).

**Influence:** Pitchfork explicitly identifies Neneh Cherry's *Raw Like Sushi* as a musical inspiration for the group before this album. Del Naja's historical reminiscences of the Wild Bunch and PiL are broader contexts and not appended as additional album-specific influence names here.

**Landmark/confidence:** 1/high. Retrospective album reviews and primary studio/credit evidence strongly converge.

## Protection (1994) — `massiveattack-protection`

**Album and producers:** Massive Attack and Nellee Hooper are directly credited as producers. Robert Del Naja's self-titled interview confirms the Hooper working relationship, but **collaborating vocalist Tracey Thorn is not listed as a producer**. Guest contributors also include Tricky, Nicolette and Horace Andy.

**Genres and dispute:** AllMusic categorizes the album under trip-hop/electronica/alternative dance and is cooler in its assessment than some later listeners. Album of the Year additionally labels it UK hip-hop, UK street soul and dub. Craig Armstrong describes the dubbed-out qualities from participant experience. Daily Vault notes ambient/downtempo arrangements; those are not a mandate to classify all tracks as ambient. Critic and artist evaluations diverge: Del Naja himself said Protection did not deliver the reggae/punk/hip-hop intensity he sought; more sympathetic assessments praise its vocal warmth and consistency.

**Instruments:** AllMusic credits Craig Armstrong (piano and arrangement), Chester Kamen (guitar) and Rob Merrill (drums); the string contribution on Sly is attributed to Armstrong's arrangement, not assumed for every track. Qobuz and MusicBrainz identify programmed backing. `guitar` is used in its source-level generic form because credits do not specify electric versus acoustic. This album's credited *programming* does not prove a particular synthesizer or sampler hardware model.

**Production:** `sampling` rests on documented source sampling for the title track / Karmacoma. The album uses programmed arrangements, but `programming` is not a supported production token and should not be substituted with a guessed machine model. No unverified Auto-Tune, tape process or heavy-sidechain is assigned.

**Voice and themes:** soft/clear guest singing plus audible group/Tricky rap; recurrent attachment, caring, vulnerability, social watching and relationship instability. Some instrumental material means themes are not uniform.

**Scores:** energy 2 (predominantly measured); electronic 3 (programmed electronica plus credited acoustic keys, guitar and drums); mood 2 (wistful and guarded); theatrical 1 (quiet close delivery); experimental 2 (genre blending, mostly accessible songs); polish 4 (clean, smooth and studio-detailed); tempo 2 (relaxed); groove 2 (subtle and swaying, less overt dance-floor emphasis than Blue Lines).

**Influence:** Blank. No sufficiently precise artist-level claim for this exact album survived the collaborators-versus-influences filter.

**Landmark/confidence:** 1/high. Second original studio record is essential to understanding the group's progression despite mixed critical response.

## No Protection (1995) — `massiveattack-noprotection`

**Object and credited bill:** MusicBrainz documents the original release as **Massive Attack v Mad Professor** with eight reorganized tracks. This is an independently issued remix album recorded/mixed at Ariwa Studios, not the same object as *Protection*. MusicBrainz gives original production to Massive Attack and Nellee Hooper; selected track data specifically credits Mad Professor with **additional producer**, as well as remixer. The CSV keeps all three but does not misrepresent the origin of the multitracks.

**Genre evidence and criticism:** AllMusic genre is reggae, with dub, trip-hop, alternative dance. Qobuz and critics describe electronic sampling/cut-and-paste and hip-hop roots; these latter elements are secondary rather than defining the record. Robert Christgau's A- for the record supplies independent positive evaluation and helps justify its inclusion under the exception for important remix releases. It is less song-oriented than its source album.

**Instruments:** MusicBrainz documents William the Conqueror on keyboards, Nolan Irie / Mad Professor on drums/percussion, Craig Armstrong's piano on reconstructed tracks and Chester Kamen's guitar on Moving Dub. Do not infer synth bass or a specific delay hardware unit from a powerful bass-heavy mix.

**Production:** AllMusic documents substantial reconstruction of the Protection material, which supports `sampling` as material reuse / collage, though this need not imply a new sampler instrument was used; `heavyreverb` is supported by the dub-remix production and period descriptions. DJ Mag's producer interview independently describes the importance of reverb and delays in his dub practice. **No specific tape-effects machine** is asserted without documentation of this session.

**Voice/lyrics:** Most tracks are dub instrumentals with occasional vocal fragments (Tracey Thorn, Nicolette, Horace Andy, Tricky). Hence `instrumental` leads the voice field; English is the surviving sung/spoken language. The `lyrics` field is intentionally **blank** rather than mechanically inheriting all of *Protection*'s themes.

**Scores:** energy 2 (restrained but weighted pulses); electronic 3 (electronic dub reconstruction of mixed sourced recordings); mood 1 (deep, nocturnal and sombre); theatrical 1 (minimal voice fronting); experimental 4 (profound rearrangement of the existing songs); polish 3 (deliberately rough-edged, exposed dub treatment, not sloppy); tempo 1 (slower and more spacious); groove 2 (strong bass pulse but not continuously club-driven).

**Landmark/confidence:** 1/high for independent, documented collaboration and influence within this discography; do not confuse with the main studio-album sequence.

## Mezzanine (1998) — `massiveattack-mezzanine`

**Studio credits:** Original-edition MusicBrainz identifies Massive Attack and Neil Davidge as producers. Do not elevate mixer Mark 'Spike' Stent or engineer Lee Shepherd into the producers list. Credits identify Andy Gangadeen on drums, Angelo Bruschini on guitar, several credited bassists, Michael Timothy/Dave Jenkins on keyboards, and Neil Davidge for keyboard/sampling work. A direct Davidge interview specifies the harpsichord part retained on Teardrop.

**Genres and disagreements:** Pitchfork treats it as the group's defining trip-hop artifact yet describes a serious attempt to escape the genre through post-punk, dub and hip-hop/R&B fragments. Pitchfork's production documentary emphasizes rock samples, distressed electric guitar, recorded drums and reggae; AllMusic also classifies it electronica, alternative dance and alternative pop/rock. Album of the Year's post-industrial, illbient and industrial rock tags are retained as **secondary, medium-strength** tags rather than overriding high-confidence trip-hop/electronic evidence. Terms `industrialrock` and `alternativepoprock` need token additions; `illbient` already exists in `scenes.ts`.

**Sound and techniques:** Pitchfork and WIRED document the contrast between live guitars/drums and heavily manipulated loops. Davidge confirms rebuilding sampled material, frequently discarding the initial loop. `sampling`, `distortion`, `heavyreverb`, and `layeredvocals` follow critics' specific track/album descriptions. There is no sourced exact hardware model on the whole album that warrants a TB-303, MPC, Pro Tools or software tag.

**Vocals/lyrics:** Horace Andy, Elizabeth Fraser, Sarah Jay Hawley and Robert Del Naja create a contrast between warm/ethereal singing and weary, raspy delivery plus occasional spoken/rap phrasing. Pitchfork details themes of isolation, damaged relationships, surveillance, bodily intimacy and dread; the 0 mood score signifies intensely dark **overall**, not absence of beautiful passages such as Teardrop.

**Scores:** energy 3 (heavy and sometimes forceful yet slow); electronic 4 (sampled/programmed construction heavily fused with a live band); mood 0 (persistent claustrophobia); theatrical 3 (large dark dramatic swells alongside close voices); experimental 4 (post-punk/rock/dub/sample transformations); polish 4 (densely revised, controlled studio detail); tempo 2 (mid-slow beats); groove 2 (hypnotic rhythm rather than club-forward tracks).

**Influenced_by:** In ABC Double J reporting, Del Naja directly describes exploring music and formative records including Gang of Four, Wire, The Cure, Public Image Ltd, The Clash and The Slits for this project. These are distinct from incidental sample-clearance credits (Isaac Hayes, Led Zeppelin). `sounds_like` is editorial similarity; Elizabeth Fraser is a guest, not an influence simply because of her appearance.

**Landmark/confidence:** 1/high. Strong primary producer testimony, verifiable release credits, multiple deep reviews; greatest uncertainty is in very narrow secondary genre labels and subjective 0–5 scores.
