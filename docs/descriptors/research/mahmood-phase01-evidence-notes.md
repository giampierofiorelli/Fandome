# Mahmood: evidence notes — Phase 01 (2026-10-24)

## Scope and treatment
- Three **studio albums**, all already in `src/data/catalog.ts` (artist ID `mahmood`). Do not duplicate catalogue entries.
- **Source-based genre mentions** are included in the CSV even when they refer only to one track; `mahmood_phase01_genre_evidence.csv` documents the scope of each. Broad categories and finer categories can coexist.
- `confidence=medium` and `status=draft` for all three. These are editorial descriptors based on the cited evidence, **not signal-processing measurements**. The 0–5 values remain proposed until checked by Claude/editor.
- `sounds_like`: the artists listed are **critic-attributed comparisons**, not asserted musical influences. `influenced_by`: **only** the Ghali influence on the debut is supported by a named music critic; collaborators, producers and guest performers are not listed there.
- Exact new genre tokens for Claude to register: `urbanpop`, `bossanova`, `folkpop`, `afrobeat`. The source writes 'Afro-beat', which might refer to contemporary Afrobeats rather than Fela Kuti-style Afrobeat; do not silently equate the two. Cross-genre meaning must be reviewed.

## Gioventù bruciata (2019) — `mahmood-gioventubruciata`
**Edition**: 11-track full album (22 February 2019), **not** the shorter 2018 EP with the same title. Island/Universal Music label entry confirms date and tracklist [GB_LABEL]; Rockol explains EP-to-album expansion [GB_ROCKOL].

**Musical character.** Rockol's Claudio Todesco calls it urban pop, specifically resisting classification as a trap record. The pieces include song-based composition at the piano and digital beat-led pieces; nearly-rapped verses meet fully sung refrains [GB_ROCKOL]. OndaRock describes romantic R&B in 'Asia Occidente', Northern African rhythmic allusions across several tracks, pop hooks, and rap in the Fabri Fibra feature [GB_ONDA]. All Music Italia differs, emphasizing arrangements reminiscent of Italian rap and trap even though Mahmood mainly sings [GB_AMI]. Thus **`trap` is included only as a contested minor arrangement reference**, after the more salient genres. This is **not** the claim that the album as a whole is a trap album.

**Scale rationale (interpretive, not a test)**
- `energy=3`: mixed midtempo grooves and ballads with sharper rhythmic parts [GB_ROCKOL, GB_ONDA].
- `electronic=3`: prominent synthetic/digital backings, offset by piano-songwriter ballads [GB_ROCKOL, GB_AMI].
- `mood=1`: recurrent loneliness, absent father, relationship collapse and melancholy [GB_ROCKOL, GB_ONDA].
- `theatrical=3`: expressive vibrato and pronounced choruses, but less theatrical staging than later myth-driven releases [GB_ONDA, GB_AMI].
- `experimental=2`: an original hybrid for Italian radio; relatively coherent pop songwriting rather than radical formal experiments [GB_ROCKOL, GB_ONDA].
- `polish=4`: intentionally stylised digital studio sound [GB_ROCKOL, GB_AMI].
- `tempo=3`: predominantly midtempo, with faster beats interleaved with slow ballads [GB_ROCKOL, GB_ONDA].
- `groove=2`: prominent syncopated programmed rhythms, but numerous non-club ballads [GB_ONDA, GB_AMI].

`voice=clear|soft|rap`: lead singing and softer ballad interpretations; rapped/near-rap phrasing is intermittently described. `lyrics`: family rupture, identity, self-examination, urban memories, relationships [GB_ROCKOL, GB_ONDA]. `language=it`: predominant sung language; Arabic phrases do not make Arabic a main album language. `scene`: category shorthand, not an accredited affiliation. `sounds_like`: comparison artist names are explicitly discussed by Giuliano Delli Paoli [GB_ONDA]. `influenced_by=Ghali` is *album-era/song-level* based on a named critic's explicit causal description [GB_SA_RETRO]; Claude should remove it if not independently confirmed.

**Producers:** Dardust and Charlie Charles on 'Soldi'; MUUT (Francesco Fugazza + Marcello Grilli), Stefano Ceri, Francesco Katoo Catitti and Zef in Qobuz's record-by-record credits [GB_QOBUZ]. Universal also credits Mahmood as a producer on 'Remo' [GB_LABEL], whereas Qobuz lists Zef and Katoo (additional): preserve the attribution rather than masking the discrepancy. `Dardust` is a producer, **not** an influence; `MUUT` is a duo and should not be recast as an individual.

## Ghettolimpo (2021) — `mahmood-ghettolimpo`
**Edition**: first album recording (14 tracks on Universal's standard list), **not** the bonus Spanish version of 'Klan' that Qobuz includes in the 15-track digital version [GH_LABEL, GH_QOBUZ]. 2021 release date confirmed by label [GH_LABEL].

**Musical character.** Damiano Pandolfini describes this album as **avant-pop and electro-pop**, with unusual electronic effects and vocoder, denser and more restless than the debut. He compares sonic passages to Aisha Devi, Fatima Al Qadiri, A. G. Cook, Sevdaliza and Hannah Diamond, with *track-specific* relevance [GH_ONDA]. Other songs combine trap-derived bass ('Kobra', 'Klan'), more direct pop ballads, and Latin groove ('Dorado', 'Talata') [GH_ONDA, GH_WIRED]. Hyperpop is a *critic's relative description of production*, not evidence of a fully hyperpop album. Wired's Mahmood interview describes the Sardinian folk components of 'T'amo' and the emotional concept of the record [GH_WIRED]. The Arabic/Mediterranean melodic allusions are **not the same as assigning ethnicity as genre**.

**Scale rationale (interpretive)**
- `energy=4`: forceful percussion on several tracks, contrasted with sizeable softer stretches [GH_ONDA, GH_ROCKOL].
- `electronic=4`: synths, vocal processing and striking digital percussion across the work; folk recordings/ballads prevent score 5 [GH_ONDA, GH_WIRED].
- `mood=2`: many shadowy themes and sonics alongside tender/passionate material [GH_ONDA, GH_ROCKOL].
- `theatrical=4`: mythological arc, elaborate dynamics, unusual vocal range and choral passages [GH_WIRED, GH_ONDA].
- `experimental=4`: unusual structures and digital sound collage by mainstream-pop standards [GH_ONDA].
- `polish=4`: intricate high-end studio production with abrasive edges [GH_ONDA].
- `tempo=3`: brisk sequences offset by ample down-tempo ballads [GH_ONDA].
- `groove=3`: multiple rhythmically propulsive songs plus quieter dramatic performances [GH_WIRED, GH_ONDA].

`voice`: singing and sharp rhythmic/near-rap phrasing, dynamic delivery [GH_ONDA]. `lyrics`: mythology is an organising artistic frame, while personal relationships and self-identity provide the subjects [GH_WIRED, GH_ROCKOL]. `language=it|es`: Italian dominates, but the standard 'Dorado' includes a Spanish-language appearance by Feid; do **not** rely on the separately issued bonus Spanish 'Klan' to justify this. Compare with the standard recording credits. Producer set from 14-track label and licensed Qobuz metadata; treat `DRD` as the alias of **Dardust**, not as a separate person [GH_QOBUZ]. `Woodkid` and `TreP` are listed as producers on 'Karma', not as causal influences [GH_QOBUZ]. `influenced_by` remains blank; OndaRock's artist comparisons belong under sonic similarity, not documented influence.

## Nei letti degli altri (2024) — `mahmood-neilettideglialtri`
**Critical edition decision:** premiered as a **10-track digital album on February 16, 2024** and was **expanded on March 8, 2024 to 13 tracks**. Use the **13-track definitive standard edition**, not the June 13 `RA TA TA` rerelease [NL_SENTIRE, NL_LABEL, NL_ONDA]. This means the `bossanova`, `gospel` and `dancepop` genres below are valid in the 13-track version even if they were absent from original press-day coverage. Album **year remains 2024** and canonical album ID remains unchanged.

**Musical character.** OndaRock explicitly classes it as electro-pop and documents Brazilian baile funk ('NLDA INTRO', 'TUTA GOLD'), fleeting trap/reggaeton patterns (title track, 'NEVE SULLE JORDAN'), a more acoustic folk-pop passage ('TUTTI CONTRO TUTTI'), gospel fragments ('STELLA CADENTE'), and the March addition 'OVERDOSE' as bossa nova [NL_ONDA]. Billboard describes the vivid funk and soulful title track, plus club/Latin elements and softer ballads [NL_BILL]. Newsic calls out Afro-beat alongside contemporary urban, Brazilian funk, electronics, and pop [NL_NEWSIC]; as mentioned, meaning of `afrobeat` is unresolved until Claude reconciles genre terminology. These are **component genres**, not equal-volume classifications of the whole record.

**Scale rationale (interpretive)**
- `energy=3`: rhythm-heavy dance cuts balanced by quiet acoustic songs and ballads [NL_ONDA, NL_BILL].
- `electronic=3`: synthetic drum programming and sound design on numerous tracks, but more exposed acoustics than the preceding album [NL_ONDA, NL_ROCKOL].
- `mood=2`: emotional self-scrutiny and fractured relationships, some brighter club energy [NL_ROCKOL, NL_ONDA].
- `theatrical=3`: dramatic stylistic shifts and vocal emotion, but more personal and inward than Ghettolimpo [NL_ROCKOL, NL_ONDA].
- `experimental=3`: unconventional beat layering on 'BAKUGO', dance/Latin/R&B crossover, alongside melodic pop ballads [NL_ONDA, NL_BILL].
- `polish=4`: sophisticated multi-producer song-specific sound design [NL_LABEL, NL_BILL, NL_ROCKOL].
- `tempo=3`: club rhythms and slower ballads in a mixed album [NL_ONDA, NL_BILL].
- `groove=3`: TUTA GOLD and NLDA Intro dance-forward; title track and songs in expanded edition are not uniformly club oriented [NL_ONDA].

`voice`: broad dynamic sung lead with light and forceful moments; guest rap voices appear on 'PERSONALE' and 'PARADISO' in the 13-track edition, so `rap` is a secondary mode [NL_LABEL, NL_ROCKOL]. `language=it|fr`: Angèle sings French in the 13-track 'SEMPRE / JAMAIS'; the introductory English clip is not treated as a main singing language [NL_LABEL, NL_ONDA]. `sounds_like=Bad Bunny`: **weak single-track-only comparison** drawn from Billboard's own tentative 'NEVE SULLE JORDAN' parallel [NL_BILL]; not an album-wide soundalike nor evidence of influence. Claude may discard if too loose. `influenced_by`: empty for lack of direct documented album-making influence by other named artists; all collaborators remain in producer/feature credits only.

**Producers:** Universal provides 13-track credits; keep `Fugazza`/`Francesco Fugazza` and `Marcello Guava`/`Marcello Grilli` forms reconciled, and count collaborators only if credited specifically as **producers**. Slim Soledad is a named producer in the label's 'NLDA Intro' credits [NL_LABEL]. `Madfingerz`, `Katoo`, `BGRZ`, `Dardust`, `LUCASV`, `Drast`, `Golden Years`, `Michelangelo`, `Lvnar`, `d.whale` have direct track credits [NL_LABEL]. Distinguish production and songwriter credits [NL_IMF].

## Exclusions and audit
- The **2018 `Gioventù bruciata` EP** is a historical precursor under the same title; avoid auto-creating a second `mahmood-gioventubruciata` ID. If an EP entry is specifically desired, develop a unique distinct ID convention with Claude rather than overwrite studio disc.
- The 2026 **'Le cose non dette'** is a **song** on a soundtrack album primarily attributed to composer **Paolo Buonvino**, not a fourth Mahmood studio LP [SOUND_26]. His other soundtrack collaboration 'Mashooqa' is also a track, not an artist studio record.
- This package contains **only** the three Mahmood album rows and their supporting documentation. It does not contain earlier artists' CSVs.

## Source key (canonical full URLs and named authors in `mahmood_phase01_sources.csv`)
- [GB_LABEL] Universal Music Italia — Gioventù Bruciata — https://www.universalmusic.it/popular-music/album/gioventu-bruciata_33149565145/
- [GB_QOBUZ] Qobuz — Gioventù Bruciata, detailed track credits — https://www.qobuz.com/fi-en/album/gioventu-bruciata-mahmood/j28smrvq4n87b
- [GB_ROCKOL] Rockol — L’urban pop parla italiano — https://www.rockol.it/recensioni-musicali/album/8493/mahmood-gioventu-bruciata?amp=1
- [GB_ONDA] OndaRock — Gioventù bruciata — https://www.ondarock.it/recensioni/sullacrestadellonda/2019-mahmood-gioventubruciata/
- [GB_AMI] All Music Italia — Gioventù bruciata recensione — https://www.allmusicitalia.it/recensioni/mahmood-gioventu-bruciata-recensione.html
- [GB_MB] MusicBrainz — Gioventù bruciata — https://musicbrainz.org/release/ae9b58bd-f85e-47c5-a545-ee8c7400b46d
- [GB_SA_RETRO] SentireAscoltare — Nei letti degli altri (2019 Soldi retrospective) — https://www.sentireascoltare.com/recensioni/mahmood-nei-letti-degli-altri/
- [GH_LABEL] Universal Music Italia — Ghettolimpo — https://www.universalmusic.it/popular-music/album/ghettolimpo_34794126812/
- [GH_QOBUZ] Qobuz — Ghettolimpo, detailed track credits — https://www.qobuz.com/gb-en/album/ghettolimpo-mahmood/ou6y1e1nuio6b
- [GH_ONDA] OndaRock — Ghettolimpo — https://www.ondarock.it/recensioni/2021-mahmood-ghettolimpo/
- [GH_ROCKOL] Rockol — Ghettolimpo recensione — https://www.rockol.it/recensioni-musicali/album/9816/mahmood-ghettolimpo
- [GH_WIRED] Wired Italia — L’ho immaginato come un live — https://www.wired.it/play/musica/2021/06/11/ghettolimpo-nuovo-album-mahmood-recensione/
- [GH_NEWSIC] Newsic — Ghettolimpo recensione — https://www.newsic.it/recensione-mahmood-ghettolimpo/
- [NL_LABEL] Universal Music Italia — Nei letti degli altri — https://www.universalmusic.it/popular-music/album/nei-letti-degli-altri_36979314586/
- [NL_ONDA] OndaRock — Nei letti degli altri — https://www.ondarock.it/recensioni/2024-mahmood-nei-letti-degli-altri/
- [NL_BILL] Billboard Italia — Nei ritmi degli altri — https://billboard.it/top-story/mahmood-nuovo-album-nei-letti-degli-altri-recensione/2024/02/16154245/
- [NL_ROCKOL] Rockol — Nei letti degli altri — https://www.rockol.it/recensioni-musicali/album/11144/mahmood-nei-letti-degli-altri
- [NL_NEWSIC] Newsic — Nei letti degli altri — https://www.newsic.it/recensione-mahmood-nei-letti-degli-altri/
- [NL_SENTIRE] SentireAscoltare — Tre inediti aggiunti — https://www.sentireascoltare.com/news/mahmood-nei-letti-degli-altri-si-aggiungono-tre-inediti/
- [NL_IMF] iMusicFun — Tracklist e crediti — https://www.imusicfun.it/top-news/mahmood-tracklist-e-crediti-dellalbum-nei-letti-degli-altri/
- [NL_SA] SentireAscoltare — Nei letti degli altri review — https://www.sentireascoltare.com/recensioni/mahmood-nei-letti-degli-altri/
- [SOUND_26] Universal Music Publishing — Le cose non dette song — https://www.umusicpub.com/it/news/mahmood-wins-the-2026-nastro-d-argento-for-le-cose-non-dette
