# BLANCO — Research dossier, Phase 01 (all 3 studio albums, as of 2026-10-24)

## Method and safeguards
- Album-specific signed criticism prioritized (OndaRock Antonio Silvestri; Rockol Claudio Cabona and Mattia Marzi; Sentireascoltare named reviewers); original record-label pages anchor dates and music-production credits.
- **Every included genre has a separately cited album/track/album-context source** in `blanco_phase01_genre_evidence.csv`; album-wide and track-only scope deliberately kept separate. Ordered by musical importance as assessed from the album-spanning review; NOT ordered by streaming popularity. Genres are *not* unlimited evidence: no unsupported genres are inserted just because there is no field cap.
- The eight 0–5 descriptors are **editorial, non-instrumental estimates** grounded in the referenced music writing; they are not a measured tempo, BPM histogram, audio-feature extraction or objective consensus. All `status=draft`, `confidence=medium`. Reviewers may change values.
- Contributors featured on songs are not automatically producers, stylistic influences or sonic lookalikes. `influenced_by` deliberately empty on all 3: critics' analogies or the performer's general childhood listening are NOT album-specific causal proof.
- The guide permits unlimited multi-values in genre, voice, lyrics, producers, sounds_like and influenced_by. `notes` stays under 15 words in the latest guide.

## 2021 — Blu celeste (`blanco-bluceleste`, studio)
**Source base:** OndaRock (Silvestri, 2021-09-18), Rockol (Cabona, 2021-09-10), Sentireascoltare (Zagaglia), Universal label per-track credits and Qobuz. The album has 13 tracks in the cited physical/label listing, but a Qobuz digital entry displays 12 tracks: **do not infer the sound from a shortened digital edition alone**.

**Genre reading:** Crosses pop with pop-rap, trap/post-trap, R&B and punk/rock; OndaRock specifically calls Notti in bianco electro-rock, Figli di puttana post-trap, Paraocchi pop-punk and Pornografia punk-rock. The slow title song and Lucciole also contain cantautorato traits. The pop-rap label is a critic's category: Rockol explicitly says Blanco is **not technically rapping** in the ordinary sense; never extrapolate a `voice=rap` from pop-rap. `sounds_like=Achille Lauro|Mahmood` is a cautiously editorial similarity from critic comparisons to pop-rock and trap/pop/R&B crossover, **not documented influence**; Claude can remove it if it deems source linkage insufficient.

**Scores and rationale:** `energy=4` (punk/rhythmic passages + high-intensity singing balanced by ballads); `electronic=3` (trap programming/electro-rock plus rock instrumentation); `mood=2` (romantic melancholy and restlessness, also exuberant songs); `theatrical=4` (documented intense vocal leaps, screaming and whispers); `experimental=2` (hybrid genres but radio-accessible forms); `polish=3` (studio sonics intentionally more raw than fully glossy mainstream); `tempo=3` (fast cuts and slow melodic songs); `groove=2` (strong rhythms do NOT automatically mean dancefloor album). `voice=powerful|raspy|soft|clear` follows Silvestri's detailed discussion of singing, shouting, whispered passages and melodies. `landmark=1` because multiple critics describe it as breakthrough debut.

**Credits conflict/edition caution:** Label 2021 album page credits Michelangelo on almost all tracks, Greg Willen alongside Michelangelo on Figli di puttana and **d.whale** on *Paraocchi (New audio master)*. OndaRock and Rockol simplify producers to Michelangelo plus Greg Willen; `d.whale` is included because of the label's named production credit, but Claude should check whether that role applies to the original edition or a subsequently remastered track. Michelangelo is **Michele Zocca**; the name is not a stylistic influence.

## 2023 — Innamorato (`blanco-innamorato`, studio)
**Source base:** OndaRock (Silvestri, 2023-04-18), Rockol (Cabona, 2023-04-14), Billboard Italia Silvia Danielli's artist interview and Universal label per-track credits.

**Genres:** Critic album tags pop-punk/pop-rap; track-specific frantic jungle (Ancora, ancora, ancora), aggressive R&B (Fotocopia), electronic production (La mia famiglia), pop-funk (Un briciolo di allegria), acoustic/piano ballads and synth-heavy 1980s-pop episodes. Electronic is **not** 5 because studio synthesizers coexist with actual piano, guitar and stripped down songs. `influenced_by` empty: Mina is a featured duet artist on ONE song, not a demonstrated causal influence.

**Scores:** `energy=4` (frenetic opening and intense delivery but softer numbers), `electronic=3` (beat synths with live/acoustic piano/guitar), `mood=2` (torment and emotionally intense love, with lighter summer passages), `theatrical=4` (gothic-operatic opener and forceful singing), `experimental=3` (jungle/electronic experiments in selected cuts), `polish=4` (more elaborate arrangements with Michelangelo), `tempo=3` (fast and ballad sections), `groove=2` (not club-focused). `voice=powerful|raspy|soft|clear`; `lyrics=love|heartbreak|introspection|social|identity` (family plus explicitly social lyrics in La mia famiglia). `landmark=0` provisional relative to 2021's defining debut.

**Release-date metadata disagreement:** Universal album page lists original digital 13 April, some physical editions 18 April; multiple specialist reviews and artist press describe release 14 April. **CSV year is 2023, not a claim about exact day.** Distinguish 2023 original 12 core tracks described in contemporary critics from additional `Stella` listing in label variant. All tracks shown in label page attribute producer role to Michelangelo.

## 2026 — Ma’ (`blanco-ma`, studio)
**Source base:** Universal's 3 April 2026 album credits and official artist bio, OndaRock review by Antonio Silvestri, Rockol review by Claudio Cabona/Mattia Marzi, Sentireascoltare by Fabrizio Testa (critical opinion), All Music Italia reporting.

**Genres:** Primarily pop, broadened by rock/pop-rock passages and some pop-punk (Woo, Maledetta rabbia), the trap/synth opener Ti voglio bene uomo, and Sentireascoltare's industrial production suggestions. *Industrial* and *trap* are **minor track/production-level elements**, not album-wide genre dominance. `songwriter` is a normalization of specialist descriptions of cantautorato, **not a genre an expert literally named in English**; retain or remove on editorial review. Do not add `synthpop` merely because a track features synthesizers.

**Scores:** `energy=3` (much less impulsive than 2021, with a few energetic tracks), `electronic=3` (synth and beat programming remains with guitars and piano), `mood=2` (self-reflection, relationships and anxiety with warmer moments), `theatrical=3` (less unleashed delivery, but some soaring vocals), `experimental=2` (more conventional arrangements, strong opinion agreement despite mixed reviews), `polish=4` (dense, compressed and layered productions; NOT a quality/rating judgment), `tempo=2` (midtempo and slower ballad emphasis), `groove=2` (not positioned as club album); `voice=powerful|raspy|soft|clear` documents contrast with earlier raw delivery. Themes include identity, family and self-reflection (project titles and statements). `landmark=0` pending longer-term assessment; not an indicator of low artistic quality.

**Important label-vs-press naming issue:** Universal's individual-song credits list Michelangelo, ZAZU, d.whale, PARISI and `Luca Nardelli` (on Woo); All Music Italia's general introduction says `Federico Nardelli`, `PARISI`, `Simonetta`, `Zazu`. **Do not merge Nardelli identities or assume they mean the same producer.** The CSV uses the track-specific official credit `Luca Nardelli`. Claude should reconcile track credits before final review, and confirm if `d.whale` is also credited under alias `Simonetta` (not asserted here).

**Critical disagreement:** OndaRock questions the originality of the more conventional pop, while Rockol praises greater compositional sincerity and critiques a more constrained/compressed vocal presentation; Sentireascoltare finds the production too predictable. The **description** is supported; the musical *value judgment* is contested. None of these magazine ratings is imported into Fandome's technical scales.

## New genre IDs — ask Claude to add before validator
- `poprap` — hyphenated pop-rap in OndaRock, not the separate `pop` and `rap` as interchangeable.
- `posttrap` — OndaRock / Sentireascoltare: post-trap.
- `poprock` — pop-rock named by critics for BLANCO (2021/2023/2026).
- `electrorock` — OndaRock: electro-rock, track Notti in bianco.
- `punkrock` — OndaRock: punk-rock, track Pornografia.
- `jungle` — OndaRock: jungle on Ancora, ancora, ancora.
All are lowercase, letters-only; genre map provenance is included. Existing `poppunk`, `popfunk`, `industrial`, `trap`, `rnb` kept exact.
