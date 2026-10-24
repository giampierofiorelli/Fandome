# Robyn — phase 03: evidence, decisions and uncertainties

## Scope, attribution and discography
- **Four new rows ONLY**: *Do It Again* (2014 EP, official main artist **Röyksopp & Robyn**), *Love Is Free* (2015 EP, official main artist **Robyn & La Bagatelle Magique**), *Honey* (2018 studio), *Sexistential* (2026 studio). Album dates, official billing, releases and critic verification are documented in `robyn_phase03_sources.csv`.
- Fandome has `robyn` as an artist and uses `artist=Robyn` for every Robyn-room CSV row; **the two EPs are not solo Robyn albums**. Do not silently misrepresent their ownership. Preferred durable design is a featured/co-billed artist field or collaboration credit in catalog; until available, retain current owner + explicit co-billing in catalog audit and source notes. Do not duplicate `Do It Again` as a second, identical Röyksopp full-length row.
- `robyn-doitagain` and `robyn-loveisfree` are **missing** from main Fandome catalog on checked commit. `robyn-honey`, `robyn-sexistential` already exist. Add only missing identities after deciding proper co-billing.
- This is not a retrospective re-analysis of early Robyn projects. No earlier phase 01–02 CSV rows are present.

## Do It Again (2014)
Sources: [DA_PF] Pitchfork album review; [DA_TR] Pitchfork song analysis; [DA_MB] original MusicBrainz physical credits.
- **type ep**: Contemporary reviews explicitly call it a five-track mini-album/EP. Original songs: Monument, Sayit, Do It Again, Every Little Thing, Inside the Idle Hour Club. Do not confuse with Röyksopp's 2014 album *The Inevitable End* or latter-day remixes.
- **genres**: dominant electronic, with driving electropop/dance-pop on title track and striking longer atmospheric instrumentals. **House/techno are lower-certainty stylistic identifications**, rather than the source's primary album tag. R&B is broad Pitchfork taxonomy, not a uniform groove. If audit requires genre word-for-word, drop weak tags instead of extrapolating.
- **scores**: energy 4, groove 4 (pulsing singles contrasted with extended ambient instrumental sections); electronic 5 (synth-constructed); mood 2 (melancholy tension despite euphoria); experimental 4 (unusually long pop/instrumental contrasts); polish 5; theatrical 3; tempo 4. These are calibrated judgments, not measurements.
- **voice** clear/spoken/soft/instrumental (various lead and largely instrumental stretches). **lyrics** love, heartbreak, nightlife release, desire and reflection; review in line with actual tracks.
- **producers** Röyksopp and Robyn, in different song-level combinations verified by MusicBrainz. Collaborators are producers here, not causal inspirations; influenced_by blank.

## Love Is Free (2015)
Sources: [LF_PF] full EP review, [LF_PFT] single review, [LF_APPLE] licensed credits, [LF_LABEL] actual group/track listing, [LF_MC] style summary, [LF_GU] band formation.
- **type ep**: Five original tracks. Later deluxe vinyl includes Mr Tophat remixes; not in original descriptor scoring.
- **genres**: house is foundation; acid house specifically on title track, disco on Arthur Russell/Loose Joints cover, **big beat explicitly on 'Got to Work It Out'**. Bigbeat is a *new* validator genre token, only used with that track caveat.
- **scores**: driving dance energy 4, electronics 4 (samples plus horns/percussion), groove 5, mood 4, theatrical 2, experimental 3 (eccentric loose sample collage), polish 4, tempo 4. Voice may include spoken/rap phrasing, not an entire rap album.
- **producers**: Group's Robyn, Christian Falk, Markus Jägerstedt; additional producer role credits (Klas Åhlund, Carli, Niklas Flyckt) explicitly relate to at least the title track [LF_APPLE]. Claude should confirm each name across the *full EP* and may refine per-track scope. The group membership does not guarantee each member produced every track.
- Explicit **co-billing** Robyn & La Bagatelle Magique matters for credit ethics. [LF_PF] and [LF_LABEL].

## Honey (2018)
Sources: [H_PF], [H_INTER], [H_GU], [H_MB], [H_Q], [H_OFF]. Original nine-track album only.
- **genres**: house/pop/dance as general; Pitchfork specifically calls it post-disco; 'Send to Robin Immediately' synth-pop, 'Because It's in the Music' disco, tropical house mentioned in specific fragments — not the entire record.
- **scores**: energy 3 rather than typical high-energy Body Talk; electronic 4; mood 3 because mourning and sensuous hope coexist; theatrical 1 (intimacy), experimental 3 (looser open-ended song structures), polish 4, tempo 3 and groove 4 (less aggressive but steady house dance basis).
- **voice** clear and softer/breathier textures. Themes grief/heartbreak, resilience/identity, romantic reconnection, sensuality, nostalgia [H_PF].
- **producers** Joseph Mount, Klas Åhlund, Mr Tophat, Adam Bainbridge/Kindness, and Robyn as confirmed co-producer on original tracks; avoid treating music engineers and Zhala guest singer as producers. Influenced_by left blank: citing artists in critical comparisons is not documented *causal influence*.

## Sexistential (2026)
Sources: [S_RA], [S_PF], [S_GU], [S_NME], [S_ALL], [S_MB], [S_Q], [S_AOTY]. Original 9-track, March 27, 2026.
- **genres**: synth-pop/electropop/dance-pop dominate. Alternative dance, left-field pop, post-disco from AllMusic whole-album taxonomy. Trance RA heading; 'Light Up' eurotrance, 'Into the Sun' electro-disco, 'It Don't Mean A Thing' funk, 'Blow My Mind' chillwave — **track-local**. Synthwave is secondary aggregator metadata; it is not to be presented as unanimously agreed main sound.
- **scores**: energy 4, electronic 5, groove 4, tempo 4, polish 5, mood 3 (pleasure mixed with vulnerability), theatrical 3, experimental 3 (incorporates minimalist club rap and big 80s choruses within familiar electronic-pop structures).
- **voice** primarily clear pop vocal plus intimate soft, spoken/rap phrasing on title track. **lyrics** mothering/identity, dating/sensuality, recovery, reflection, irony, desire; motherhood maps to `identity` and `introspection` rather than inventing a new lyric token.
- **producers** from release credits: Klas Åhlund, Robyn, Oscar Holter, Elvira Anderfjärd; Joseph Mount and Jonathan Bates explicitly identified as *additional producers* on Really Real and further tracks. They are included because guide requires all documented producers, no arbitrary number cap. **Max Martin is a co-writer of Talk to Me, NOT a verified track producer** [S_MB, S_Q]; exclude him from producers; never convert songwriting into production.
- **disagreements**: Several critics frame it as a high-energy return to Body Talk, but RA and Pitchfork also emphasize eccentric spoken rap and emotional range. Use whole album rather than just Dopamine/Talk to Me.

## New genre tokens
- `bigbeat` [LF_PF] (one song in 2015 EP)
- `chillwave` [S_RA] (one song in 2026 album)
- `synthwave` [S_AOTY] (secondary aggregator tag; scrutinize before addition)
No column has an arbitrary cap on number of values; `notes` still follows the guide's 15-word standalone constraint. Missing evidence is abstained; `sounds_like` and `influenced_by` are blank rather than inventing artist comparisons.
