# Fandome — Spagna, Phase 01 evidence and decisions

Research date: 2026-10-27. Artist display name: **Spagna** (also Ivana Spagna). ID prefix proposed: `spagna`. Original releases: 1987, 1988, 1991, 1993. The repository `descriptors` branch at research time had no Spagna artist room in `src/data/catalog.ts` or `src/data/seed.ts`, and no `docs/descriptors/spagna.csv`. Rows are **draft** pending review.

## Selection / release identity

- **1987 Dedicated to the Moon** — 10-track CBS studio record, not a compilation. Qobuz lists the recording credits under a later digital issue; year confirmed from original CBS pressings and Hit Parade Italia.
- **1988 You Are My Energy** — original LP 10 tracks, 11-track CD/digital edition including “Don't Call It Love”. The second album is dated 1988, not 1989. The original release 1988 year governs Fandome.
- **1991 No Way Out** — original Epic 10-track album, recorded in the US. Album production is TRACK-SPECIFIC and not all credited producers should be understood as collaborating on every track.
- **1993 Matter of Time** — 1993 original Epic 474828 2 record, despite AllMusic listing a 1995 issue. DO NOT re-date to 1995.
- Excluded *Spagna & Spagna: Greatest Hits*, *Ballads*, *Dance Collection*, *E che mai sarà – Le mie più belle canzoni* as compilations. Do not include singles or later digital reissues as separate albums.

## Attribution standards

- `genres`: evidence file records which sources name each tag. `italodisco`, `synthpop`, `pop`, `dance`, `hinrg`, `electronic`, `europop`, `disco` are all existing tokens. All scale scores are **editorial 0–5 judgements**, not historical measurements. These are cross-album macro-profiles: songs can differ markedly.
- `instruments` (1987, 1988): **left blank**. Genre names imply electronic styling but the available original liner descriptions do not identify sufficiently specific instrument parts on those albums. The artist's live role as keyboardist does **not** establish an album keyboard credit. None of the named musicians is assigned an instrument by the discography; do not invent.
- `production` (1987, 1988): **left blank**. Credited vocal arrangement alone does not prove `layeredvocals`; 1987 US remixes should not be back-projected onto the original album. No specific hardware model was sourced.
- `No Way Out` instruments: AllMusic credits guitar, bass, synth-bass and keyboards. `programming` is evidenced by Qobuz track-level Giuseppe Isgrò credits for the title track. Do not assume drum machine brand.
- `Matter of Time` instruments: Qobuz/1993 Sony album track details credit Theo Spagna on keyboards, Davide Riva on piano, Larry Pignagnoli and Mark Goldenberg on electric guitar, Marco Soncini on guitar, Paolo Gianolio/Brian Adler on baritone acoustic guitar, and Joe Sublett on saxophone. Qobuz credits Theo Spagna on `drumprogramming` (Why Me), and track programming by Theo and CJ Vanston. The token `baritoneguitar` is an approximation of the credited acoustic baritone guitar (token list has no separate `acousticbaritoneguitar`); `guitar`/`electricguitar` are directly supported.
- `voice`: lead-delivery profiles (clear, powerful, soft) are editorial, not biomedical vocal classifications. Background vocalists are not tagged `choral` as a lead type.
- `lyrics`: themes represent high-level assessments drawn from credited track titles/available contextual descriptions, **not** audited lyric transcripts; treat as lower confidence than metadata/credits.
- `sounds_like`: intentionally editorial suggestions, NOT sourced direct stylistic influences. Madonna comparison on 1987 **Call Me** is reported by radio retrospective LOS40; others are analogies only, not claims that one artist influenced Spagna.
- `influenced_by`: intentionally EMPTY for all four. Spagna reports playing Donna Summer, Chic and Stevie Wonder songs early in her career (Sky TG24, Deabyday, 2026 interview). This is reliable career context but **does not establish they shaped a specific one of these albums** under Fandome's strict album-level rule. Covers, collaborations and producer affiliations do not become influences.
- `producers`: 1991 includes Qobuz, AllMusic and original 1991 release credits; production role for Diane Warren appears in AllMusic, but she primarily wrote “There's a Love”: handle with care on import. `Matter of Time` producer core is Larry Pignagnoli, Theo Spagna, C.J. Vanston. The discography mentions Davide Riva, Brian Adler et al. as arrangements/engineering; not all should be recast as album producers.

## Album-by-album descriptors

### Dedicated to the Moon (1987)
The original CBS LP is explicitly Italo disco and synth-pop (original-release style metadata and genre summaries). Energetic singles “Easy Lady”, “Call Me”, “Dance Dance Dance” justify dance-floor/groove=5; there are slower English-language tracks, so album is not uniformly euphoric. Self-production and early success inform landmark=1.

### You Are My Energy (1988)
1988 CBS record in same electronic Italo-disco style with a more melodic/reflective side (Hit Parade Italia). Groove and energy remain high, but slightly less relentlessly dance-driven than debut. Keep original issue vs 1998 reissue distinct.

### No Way Out (1991)
Album moves into US studio pop with numerous credited instrumentalists (AllMusic), while AllMusic surprisingly still categorizes it Club/Dance and Hi-NRG. Source labels are retained but not treated as proof that every song is Hi-NRG. The compositional and vocal tone is substantially more melodic. Multi-producer credits are track-specific.

### Matter of Time (1993)
Original pressing styles Pop/Europop/Disco, whereas Sony/Qobuz uses broad Pop/Rock. Specific 1993 Sony credited instruments, acoustic guitar parts, saxophone, piano and drum programming allow nuanced separation from 1987–1988. Score sits midway between ballads and the dance singles.

## Conflicts and limitations to preserve

1. Genre specificity is strong on the 1987–88 LPs and weaker for 1991/93, where source labels are broad or track heterogeneity is high.
2. The 1993 genre classification `europop|disco` depends on a release database original-styles snippet; independently verify on record sleeve where feasible. The `genre_evidence.csv` distinguishes source strength.
3. Different pressings and digitised rights pages occasionally disagree about who produced a single; priority given to original album credits and label track credits, not remix credits.
4. Some databases attribute separate musician producer/arranger responsibilities inconsistently. Prefer track-specific liner credits when reconciling.
5. Reception `acclaim` left empty across all 4: professional album-review evidence insufficient for a defensible numeric score. No unsupported rankings.

## Source URLs (primary support)

- HPI: https://www.hitparadeitalia.it/disco_old/spagnai_a.htm
- Q87: https://www.qobuz.com/es-es/album/dedicated-to-the-moon-spagna/5099749102323
- Q88: https://www.qobuz.com/es-es/album/you-are-my-energy-spagna/5099749102224
- Q91: https://www.qobuz.com/us-en/album/no-way-out-spagna/5099746862121
- Q93: https://www.qobuz.com/ca-fr/album/matter-of-time-spagna/5099747482823
- ALL91: https://www.allmusic.com/album/no-way-out-mw0000279012
- SIL91: https://readdork.com/album/ivana-spagna-no-way-out/pressing/1427167
- REC87: https://www.musik-sammler.de/release/spagna-dedicated-to-the-moon-lp-522805/
- CAT88: https://vinylzone.ru/catalog/net-v_nalichii/59032/
- WI87: https://en.wikipedia.org/wiki/Dedicated_to_the_Moon
- WI88: https://it.wikipedia.org/wiki/You_Are_My_Energy
- MG93: https://musicbase.net/cs/matter-of-time-099f93r
- CH93: https://www.hitparade.ch/album/Spagna/Matter-Of-Time-86813
- INTER: https://www.cinquantamila.it/storyTellerArticolo.php?storyId=69b6ca767b781
- CHIC: https://tg24.sky.it/spettacolo/musica/2024/12/12/ivana-spagna-nuzzle-intervista
- FUNK: https://www.deabyday.tv/hobby-e-tempo-libero/fun-people/article/7208/ivana-spagna-intervista-sanremo-easy-lady.html
- FANCD: https://www.fanclubivanaspagna.com/IvanaSpagna/discografia/cd.htm
