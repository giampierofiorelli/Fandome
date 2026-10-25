# ABBA — Fandome Phase 02, source-grounded evidence notes

**Research date:** 25 October 2026. **Scope:** three original studio albums, 1977–1980. Fandome `artistId=abba`. Research documentation in English for Claude. This is an *incremental* package: the four Phase 01 rows already exist in `docs/descriptors/abba.csv`; append **only** the three new rows from `abba_phase02_rows_ONLY.csv`. All three albums are **already** in `src/data/catalog.ts` in the descriptors branch. Do not add duplicate catalog entries.

**Field semantics:** All 0–5 scales are transparent **editorial judgments** anchored to `docs/album-descriptors-guide.md`, not raw acoustic measurements and not professional reviewers' numerical scores. Whole-album scores must not be extrapolated from one hit. One genre token can represent a localized stylistic feature; see `abba_phase02_genre_evidence.csv` for scope and strength. A new genre may require edits to scenes.ts, genreFamilies.ts, the guide and validator. `status=draft` until a second reviewer validates it. Use the *original editions*, not CD deluxe bonus tracks.

## 1977 — ABBA: The Album (`abba-thealbum`)

**Release identity:** ABBA official discography dates Swedish original to **12 Dec 1977** (nine songs). AllMusic US-market dates 1978; keep original year 1977. Although several songs are heard in ABBA: The Movie and three originated in a mini-musical, this is a **studio album**, not a film soundtrack or live album (A-O, A-F, A-P).

**Styles:** Core Europop/pop and harder guitar-led pop-rock. AllMusic's signed criticism specifically calls out **hard rock, dance-rock and progressive rock** among the strands; the Album of the Year genre taxonomy specifies **Progressive Pop**. The mini-musical *The Girl with the Golden Hair* informs `musicaltheatre` only for the three songs **Thank You for the Music**, **I Wonder (Departure)** and **I'm a Marionette**. Thus none of those specialized labels is an album-wide dominant claim (A-M, A-G, A-O, A-F).

**Scores:** `energy=3`, `tempo=3`, `groove=3`: driving Eagle, Take a Chance on Me and Hole in Your Soul coexist with deliberate ballad and theatrical sections. `electronic=2`: some clear synthesizer colour on Eagle, but electric guitars, live rhythm parts and orchestral sections matter extensively; the old-era analog recording alone does not imply purely acoustic or electronic. `mood=3`: romantic/exuberant numbers are offset by broken-relationship writing, fame anxieties and darker mini-musical chapters. `theatrical=4`: three mini-musical songs plus elaborate vocal arrangements, but not the whole album. `experimental=3`: expanded structures, quasi-progressive sections and the suite relative to their straightforward singles, without claiming avant-garde music. `polish=5`: tightly staged, overdubbed harmonies and studio arrangement depth (A-F, A-P, A-M, A-C). Scores are editorial syntheses and subject to reviewer adjustment.

**Voices:** `clear|powerful|choral|soft`, capturing mixed Agnetha/Frida leads, highly blended ensemble passages and expressive ballads; `choral` is used as a Fandome shorthand for dense vocal ensemble arrangements, **not** documented external choir employment. `lyrics=love|heartbreak|storytelling|introspection|identity`: major plot-like theatrical content, emotional tensions, fame/identity. Reassess the weaker album-wide `identity` theme if strict lyrics mapping warrants it.

**Producers:** Benny Andersson and Björn Ulvaeus **only**; Michael B. Tretow engineered, Lasse Wellander played guitar, Rutger Gunnarsson arranged strings; these credits are not independent album production credits (A-C).

**Influence precision:** Bruce Eder at AllMusic explicitly identifies **Fleetwood Mac** as an influence on the record's California pop-rock strand, and speaks of **Kurt Weill** on *I'm a Marionette*. Both in `influenced_by`, but the Kurt Weill association is **track-level critic attribution**, not a statement from ABBA that Kurt Weill shaped the entire project. The Fleetwood Mac sonic parallel is also marked in `sounds_like`, based on Eder's description; this is not a composer credit (A-M).

## 1979 — Voulez-Vous (`abba-voulezvous`)

**Release identity:** Original Swedish LP **23 Apr 1979**, ten tracks; separately released **Gimme! Gimme! Gimme! (A Man After Midnight)** and **Summer Night City** are not in this original album and are not counted in scores (V-O, V-D).

**Styles:** Most sustained disco on an ABBA album, but not a fully non-stop disco LP. `pop|disco|eurodisco|dancepop|europop` define major styles; `poprock|rock` are lower-scope traits of tracks such as *Does Your Mother Know*. The ballads have folk-rooted antecedents, but **do not** assign `folkpop` merely from the musicians' early biographies. This would mistake background for an explicit album genre (V-O, V-M, V-R, V-G, V-C).

**Scores:** `energy=4`, `tempo=4`, `groove=4`: several extended dance arrangements and strong propulsion, but *Chiquitita* and *I Have a Dream* slow the album. `electronic=3`: keyboard/synth contribution alongside band drums, bass, brass, and strings. `mood=3`: club pleasure, romance, infatuation, hurt and yearning; neither unrelenting celebration nor deep despair. `theatrical=2` (confident pop performances but no cohesive stage musical); `experimental=2` (disco stylistic change within conventional song forms); `polish=5` (dense, precisely staged studio arrangements). All interpretive, not direct measurements (V-F, V-M, V-C).

**Voice:** blended `clear|powerful|soft|choral`, mainly Agnetha and Frida, plus Björn's male lead on *Does Your Mother Know*. No `spoken` tag inferred solely from song lyrics. **Lyrical focus:** love, desire, club encounter, breakups and reflection; `storytelling` limited to ballad/narrative songs. Avoid asserting an explicit 'political' album just because Chiquitita was later linked to charitable activity.

**Producers:** Benny Andersson and Björn Ulvaeus alone. **Foxy** band members at Miami Criteria Studios are session players on the title track; neither Bee Gees nor Foxy are album producers (V-F, V-D, V-C).

**Influence precision:** Bruce Eder's signed AllMusic review expressly calls the 1979 Bee Gees disco recordings a substantial influence on the album, independently compatible with the recorded Miami session history. `influenced_by=Bee Gees` is a critic-attributed influence, **not** an invented first-person declaration by the band (V-R, V-F).

## 1980 — Super Trouper (`abba-supertrouper`)

**Release identity:** Original **3 Nov 1980** LP of **ten** tracks. *The Way Old Friends Do* was a 1979 Wembley live performance with subsequent overdubs and appears as the closing track on this **studio album**. The user's ban on live releases **does not delete a song from the standard studio album**, nor make the whole release `type=live`. Later *Elaine*, *Gimme! Gimme! Gimme!* and *Put on Your White Sombrero* bonus tracks **excluded** (S-O, S-D, S-T).

**Styles:** Pop/Europop/pop-rock core; `dancepop|disco|eurodisco|electrodisco` describe dance songs, concentrated especially in *Lay All Your Love on Me*. `synthpop` is a narrower track-level descriptor for **Me and I** and related electronic production, explicitly recognised by the specialist Classic Pop review. `rock` on *On and On and On*. `schlager` per Classic Pop's description of *Andante, Andante* and secondary album taxonomy. `folk` is a **track-local** classification based on the folk-like melody of *The Piper* in a signed review, not a full-album dominant genre. No claim that the album is entirely disco or electronic (S-M, S-CP, S-O, S-P, S-G).

**Scores:** `energy=3`, `tempo=3`, `groove=3`: several very strong beat-led songs but long reflective ballads. `electronic=3`: conspicuous synth timbres and experiments, though much of the record uses instruments and pop-rock arrangements. `mood=2` is crucial: *The Winner Takes It All*, *Our Last Summer*, *Happy New Year*, and title track touring fatigue outweigh occasional joyous choruses. High groove **does not equal** happy mood. `theatrical=3`: grand, layered harmonies and narratively staged songs; `experimental=2`: striking synth, vocoder and medieval touches but mainly familiar verse/chorus songcraft; `polish=5`: elaborate production and vocal layering (S-M, S-F, S-P, S-CP).

**Voices:** `clear|powerful|soft|choral`; broad textures, Frida/Agnetha alternate leads. `choral` represents harmonized ensemble layering including the concert-origin closing recording, not a claim of an external choir. Lyric tokens include `heartbreak|introspection|nostalgia|love|storytelling|irony|party`, with latter two more limited to tracks. The authoritative ABBA site explicitly connects the record with mature private-life reflections.

**Producers:** Andersson/Ulvaeus. Tretow is an engineer, not a separate album producer (S-C, S-D). **Documented critic-attributed influence:** Bruce Eder and Classic Pop specify The Beach Boys on the rocker *On and On and On*; this is a *track-specific* influence stored in `influenced_by`, not producer credit or a claim that their whole catalogue was recreated (S-M, S-CP).

## Decisions for Claude

1. Validate these three rows **after** the four Phase 01 rows in `docs/descriptors/abba.csv`. They are already catalogued with exact IDs in `src/data/catalog.ts`, so **no catalogue addition**.
2. Add three proposed exact normalized genre tokens **only if retained**: `progressivepop`, `dancerock`, `hardrock`, to the Genre union in `src/data/scenes.ts`, genre family mappings, guide and `scripts/validate-descriptors.ts`. Suggested families: `progressivepop -> pop|prog`, `dancerock -> rock|dance`, `hardrock -> rock`.
3. Consider pruning the marginal `folk` genre on Super Trouper if your threshold excludes single-track background associations. Genre completeness does not mean claiming a genre is dominant.
4. `sounds_like` is separate from documented `influenced_by`, which may have track-limited qualified-critic attribution. Do not add names inferred from collaborators alone.
5. Confirm the metadata granularity of `choral`: it refers to layered group vocal harmonies, not to a separately credited choir.
6. Review `mood` independently: The Album 3, Voulez-Vous 3, Super Trouper 2. Never infer positivity solely from `groove` or `disco`.

**Next:** Phase 03 — *The Visitors* (1981) and *Voyage* (2021). No live releases or reissues.
