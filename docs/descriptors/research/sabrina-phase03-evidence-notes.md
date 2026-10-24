# Fandome — Sabrina Carpenter, Phase 03 (INCREMENTAL ONLY)

**Scope:** ONE NEW ROW, *Man’s Best Friend* (Island, 29 August 2025). This package deliberately contains no entries from Phases 01–02. The 12-track original edition is used, not the bonus-track versions (SC25-01, SC25-11). All fields are editorial draft judgments and not extracted numerical measurements.

## How the sources support the description

- **Identity:** seventh studio LP; original 12 tracks, 38 minutes, 29 August 2025, Island (SC25-01/02/11). Existing Fandome ID is `sabrina-mansbestfriend` (`sabrina` plus punctuation-stripped title).
- **Production:** licensed track-level credits (SC25-03) explicitly mark **Sabrina Carpenter**, **Jack Antonoff**, **John Ryan** as `Producer` across different songs. This is also reported by Island and NME (SC25-02/06). Amy Allen is principally credited `ComposerLyricist`/backing vocals in the inspected edition, not album producer; Serban Ghenea is `MixingEngineer`, **not producer**. Do not transfer collaborators' roles by implication.
- **Genre hierarchy:** `pop` first, with substantial retro `disco`, `country` textures and `rnb`; dance-pop and soft-rock accents. The tail tokens in the row are explicitly track-scoped. No arbitrary maximum on number of values. See `sabrina_phase03_genre_evidence.csv` for individual scope/source IDs. Source review dissent about quality (The Skinny versus Guardian/Pitchfork) is not used as a genre veto.
- **New genre tokens needing validator+scenes taxonomy updates before importing:** `discopop` (Slant on Tears), `yachtrock` (Slant on Never Getting Laid), `quietstorm` (Qobuz on Never Getting Laid). **Do not merge these with `disco`, `rock`, or `rnb` silently.** All other tokens appear in guide taxonomy as read on 2026-10-24. `countrypop` was not added merely from the phrase 'country-tinged'; the supported broader `country` is used.
- **Track-specific caveat:** `reggae` appears as the groove in **Nobody’s Son**, `newjackswing` as an inspiration for **House Tour**, `electrofunk` on **House Tour**; these are NOT claims the whole album belongs primarily to those genres (SC25-08/01/03). If Fandome's later editorial policy excludes track accents from album genres, review and remove them explicitly rather than assuming they were equally dominant.

## Scalar decisions (0–5, album-wide, editorial)

- **energy 3:** dance-forward singles against relaxed country-pop/R&B and ballad tempos (SC25-04/05/08/10).
- **electronic 3:** synthesizers and programming present, plus organic piano, guitars, horns, strings and live drums; not all-electronic (SC25-05/07/08/09).
- **mood 4:** sparkling, cheeky musical surface and witty delivery; lyrics about frustration and broken expectations complicate the brightness (SC25-04/08/09).
- **theatrical 4:** campy performance, sharply characterized vocals and showgirl artifice, contrasting with understated sections (SC25-04/05/08/09).
- **experimental 2:** melodic/structural surprises, especially Manchild, amid recognizably classic pop composition (SC25-07/04).
- **polish 5:** exceptionally detailed, dense but clear major-label arrangements described independently (SC25-07/09/10).
- **tempo 3:** mix of brisk disco, country shuffles, mid-tempo and slowed-down songs (SC25-04/05/06).
- **groove 4:** repeated dance/disco/R&B grooves, some relaxed songs; not continuous club music (SC25-01/04/05/08).
- **voice `soft|clear`:** light, controlled, conversational singing and audible projection, not sustained rap/choral delivery. The spoken intro and occasional asides do not justify `spoken` as a lead-vocal TYPE (SC25-05/08/09).
- **lyrics `love|heartbreak|irony|sensuality`:** relationships, disappointed lovers, sexuality, explicit innuendo and comic self-awareness recur across nearly all songs (SC25-04/05/08/09).
- **language `en`:** original album is performed in English (SC25-01/03).
- **scene `retro pop`:** editorial descriptor rather than a claimed actual geographic scene; 1970s/1980s influences described in most reviews.
- **sounds_like** ABBA, Dolly Parton, Donna Summer, Madonna, The Carpenters, Bee Gees: qualified critics/platform editorial make these sonic comparisons (SC25-01/04/05/08/09). This field is **editorial similarity, NOT proven artistic influence**.
- **influenced_by** Dolly Parton, ABBA, Bee Gees, The Carpenters: Apple Music editorial specifically identifies these acts as music heroes whose nostalgic sounds inform this album (SC25-01). This is an album-specific critical attribution, not an interview quote; retain as draft for editorial review.
- **landmark 1:** label confirms chart No. 1 follow-up in an era of mainstream breakout (SC25-02), reinforced by criticism of its consolidated artistic identity (SC25-04/07); not a scientific ranking.
- **confidence high:** broad convergence of independent critical reviews and original track credits, with traceable track-level caveats. No audio access assumed.

## Critical nuances

1. This is a retrospective studio LP, NOT an enlarged deluxe issue, compilation or remix album.
2. *Pitchfork* compares the sound of **Tears** to nu-disco and **House Tour** to Madonna references; a comparison is **not** a direct statement that Madonna produced the album.
3. Slant calls out the **relative absence of the pop-rock/acoustic folk edge** heard on *Short n’ Sweet*; do not automatically assign album-wide pop-rock/folk labels based on Sabrina's earlier LP (SC25-05).
4. Sonic appraisal diverges: *The Skinny* describes ambitious but uneven experiments (SC25-10), whereas Guardian stresses exceptional songcraft (SC25-07). Technical descriptors are supported without treating taste judgments as physical facts.
5. Identified new tokens are source-attested labels and should be added (not automatically recoded); no limit on sources, genres, voices, lyrical themes or influences per current guide. The guide nevertheless restricts `notes` to 15 words and numerical scales to 0–5.

## Sources

See `sabrina_phase03_sources.csv` for all bibliographic details and source-specific evidence. Use source IDs from that file when auditing attributes.
