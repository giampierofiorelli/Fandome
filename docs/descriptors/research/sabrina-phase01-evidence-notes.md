# Sabrina Carpenter — Phase 01 | research & evaluation log

## Scope and safeguards
- This batch has exactly **3 unique NEW album IDs**: `sabrina-eyeswideopen`, `sabrina-evolution`, `sabrina-singularacti`. The files contain **no rows from earlier artists or batches**.
- Fandome catalog (`src/data/catalog.ts`, inspected 2026-10-24) currently lists only *emails i can’t send* (2022), *Short n’ Sweet* (2024), and *Man’s Best Friend* (2025) for Sabrina; these new albums therefore require explicit catalog identity additions before descriptor import.
- MusicBrainz and AllMusic list **seven studio albums through 2025**, with *Singular: Act II* (2019) as fourth; 2014 *Can't Blame a Girl for Trying* and 2023 *fruitcake* are EPs. *Clouds* (2020) is a multi-artist film soundtrack, not an eighth Carpenter studio album. See https://musicbrainz.org/artist/1882fe91-cdd9-49c9-9956-8e06a3810bd4 and https://www.allmusic.com/artist/sabrina-carpenter-mn0002814181. No later studio album was corroborated as of 2026-10-24.
- All numeric scales are **editorial qualitative ratings**, NOT technical measurements. `status=draft` until independent review. The guide has no arbitrary limit on multi-valued columns; its **notes field explicitly has a 15-word cap**. Do not invent influences merely from association, personnel, or similarity.
- Genres from genre catalogues are not as strong as an authored music critic's album-specific sonic analysis. Each non-core genre is assigned a clear confidence and album/track scope in `genre_evidence.csv`.

## sabrina-eyeswideopen: Eyes Wide Open (2015)
Primary: AllMusic/Matt Collar, Apple Music album editorial and AllMusic *producer*-role credits; MusicBrainz recording credits confirm specific persons, Dork cross-checks roles; The Line of Best Fit's retrospective describes the earlier folk-flecked pop.
- **Album identity:** original Hollywood Records 2015 album of 12 tracks. 2014 *Can't Blame a Girl for Trying* is a separate EP; don't treat it as a second album or include EP-only recordings.
- **Genre ranking:** first and strongest is `pop`; AllMusic calls the core `acoustic pop` and tags `teen pop`/`contemporary pop-rock`/`dance-pop`. Apple describes acoustic guitar strumming and ukulele; The Line of Best Fit later says folk-flecked. Hence `acousticpop`, `teenpop`, `poprock` and `folkpop` coexist as clearly tiered finer labels, with `dancepop` secondary rather than defining the whole record.
- **energy 3 / tempo 3 / groove 2:** melodic, brisk songs exist but the whole 12-track set has many medium-tempo/acoustic or ballad passages; no full-album club pulse.
- **electronic 1:** guitar/ukulele-forward arrangement and light pop programming per Apple, music review, and AllMusic instrumental credits.
- **mood 4 / theatrical 2:** youthful brightness mixed with longing and personal vulnerability; generally direct rather than stage-theatrical.
- **experimental 1 / polish 3:** mainstream, conventional pop songcraft, clean commercial production but less highly synthetic than the 2018 disc.
- **voice clear|soft:** album descriptions emphasize a bright, relatively delicate lead, not constantly forceful belts.
- **lyrics love|heartbreak|identity|introspection:** Apple identifies teen romance/uncertainty, intimate expression, defiance and emotional growing pains.
- **production:** all values in the row correspond to `Producer` role in AllMusic full credits (cross-checked against Dork); names credited only as writer, vocalist, mixer or `Additional Production` are excluded. Album-wide list does not imply each producer worked on every track.
- **sounds_like/influenced_by empty:** no sufficiently album-specific documented artist influence or defensible named comparable was verified. No guesses based on Disney peers.
- **landmark 0:** important debut, but the `landmark` criterion means an artist's defining recorded work, not simply an artist's first record.

## sabrina-evolution: EVOLution (2016)
Primary: Matt Collar / AllMusic, Qobuz label feed with **ten track-level producer credits**, Apple Music original album, Album of the Year catalogued tags.
- **Album identity:** original 10-track release October 14, 2016; not a deluxe edition.
- **Genre ranking:** `dancepop` dominant in authored review; `pop` broad umbrella. `electropop` and `teenpop` specifically named in album metadata, R&B-influenced pop in authored review. AOTY also labels `contemporaryrnb` and `altpop`, but those are secondary/low-confidence and are not equivalents of mainstream dance-pop.
- **energy 3 / tempo 3 / groove 3:** stronger dance beat than the debut, but still includes ballads and R&B-ish midtempos. Do not extrapolate from 'Thumbs' or 'On Purpose' alone.
- **electronic 3 / polish 4:** synthesizer/drum programming paired with mainstream pop production; the album is not fully electronic or radically processed.
- **mood 4 / theatrical 2 / experimental 1:** catchy anthems, mixed romantic material, largely conventional pop structures; limited theatrical soundworld.
- **voice clear|powerful:** clear main lead with stronger projected passages; secondary powerful is not a claim of constant belting.
- **lyrics love|heartbreak|identity|social:** love/romance recurs, with self-determination; 'Thumbs' supplies a bounded social-observation component. This last theme has narrower track scope than romance.
- **producer credits:** Qobuz album lists Ido Zmishlany, Steve Mac, Jimmy Robbins, Ryan Ogren, Halatrax, Rob Persaud, Daylight, NONFICTION (AFSHeeN + Josh Cumbee), with per-track Producer roles. Personnel such as Mitch Allan on 'Thumbs' are marked *Recording Engineer* and NOT added as producers.
- **sounds_like/influenced_by empty:** no direct evidence for causal influences, refrain from invented references.
- **landmark 0:** developmental step rather than a defining classic.

## sabrina-singularacti: Singular: Act I (2018)
Primary: Rich Wilson / AllMusic, Julian Baldsing / The Line of Best Fit, Larisha Paul / EARMILK, Apple Music original-edition editorial, detailed Qobuz label feed.
- **Album identity:** original November 9, 2018 **eight-track studio album**, 25 minutes. Do not append Japanese-edition bonuses 'Why'/'Alien' or conflate with *Singular: Act II* (2019).
- **Genres:** `dancepop` clearly dominant across AllMusic/Apple; `pop` umbrella. AOTY tags `electropop`, `contemporaryrnb`, `altpop`, `trap`; professional accounts support the synthesizers, slow-jam R&B accent and guest rapper, but do NOT establish that the whole album is trap or hip-hop. The lower-confidence album-catalogued subgenres are preserved at the end of `genres` with their scope disclosed.
- **energy 4 / tempo 4 / groove 4:** punchy sequenced beats, club-ready singles, other songs slower; not uninterrupted dance music.
- **electronic 4 / polish 5:** prominent synths/drum programming and meticulously polished mainstream production described across 3 authored reviews; not a purely synthetic sound.
- **mood 4 / theatrical 3 / experimental 2:** bright and audacious with combative break-up material; 'Diamonds Are Forever' theatrical vocal passages; recognizable pop arrangements despite variety.
- **voice clear|powerful:** review specifically describes explosive, soul-filled vocal performances; clear lead remains primary.
- **lyrics identity|love|heartbreak|irony|sensuality:** independence and self-worth are thematic core, with flirtation, romantic frustration, cheeky language and assertive breakups; sensuality peripheral, not the dominant subject.
- **language en only:** 'Paris' contains a short **French spoken/sung phrase**; not sufficient to classify the album as substantively bilingual. This is documented rather than inflated to `en|fr`.
- **producer credits:** Qobuz differentiates `Producer` and `CoProducer` track-by-track: Stargate, Jason Evigan, Mike Sabath, Oak Felder, Downtown Trevor Brown, Zaire Koalo, Rob Persaud, Oscar Görres, German, The Monsters & Strangerz, Johan Carlsson. Source `Brett McLaughlin` is credited to songwriting but not Producer on Qobuz. `Uhmeer` is a featured rapper, not a producer.
- **sounds_like/influenced_by empty:** comparisons to specific artists weren't documented as enough of an album-wide sonic match, while working with producers of other stars is not proof of inspiration.
- **landmark 1 (editorial):** a distinctive transition to assertive adult dance-pop as recognized by both EARMILK and The Line of Best Fit. Reviewers might disagree on whether her career-defining breakthroughs came later; landmark is subjective.

## Genre vocabulary alignment — Claude must review before validation
**New token proposals:** `acousticpop`, `teenpop`, `contemporaryrnb`, `altpop`. `folkpop`, `poprock`, `electropop`, `dancepop`, `rnb` already exist in the verified guide. The guide requires adding new documented tokens to **both** the validator and the type/scene vocabulary, rather than deleting documented genres from a row to make validation pass.

## Source-quality caveats
- Original editions and album-level production data are stronger evidence than isolated tracks or deluxe editions.
- AllMusic and Qobuz sometimes syndicate the same AllMusic/TiVo review text; treat as ONE critic, not two independent reviewers.
- Album of the Year genre tags are curated metadata, not new independently reported professional reviews. Supporting styles are appropriately rated medium/low.
- Do not promote artist's 2014 EP or 2023 Christmas EP to full studio albums; `Clouds` is a multi-artist soundtrack, not part of the solo studio run.
