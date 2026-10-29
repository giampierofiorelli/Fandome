# RAF — Fandome phase 01 research and decision notes

Date checked: 2026-10-29. Repository: giampierofiorelli/Fandome, `descriptors` branch, read-only. Scope: first four **original studio** records (1984, 1988, 1989, 1991). All four rows are proposals (`status=draft`), not second-person reviewed.

## Research principles

- 27-column CSV in Fandome guide order. Numeric scales 0–5 are editorial judgements anchored to production/instrumental evidence, not externally measured quantities.
- Song-level genre mentions cannot define the whole album; secondary sounds are lower in the genre list. `italianpop` is a broad category, not a substitute for the record's documented production style.
- `influenced_by` is **empty** throughout: Raf explicitly cites the Beatles as a formative influence and describes his punk/new-wave background, but no reliable direct quote connects a specific influence to one of these four **albums**. Do not conflate his band Café Caracas, collaborators, or Laura Branigan's cover with his creative influences. Reference: https://www.cinquantamila.it/storyTellerArticolo.php?storyId=62d7996091dc1 and https://www.wired.it/article/self-control-raf-anniversario-concerto-forum-intervista-storia/ .
- `sounds_like` is left empty except on `Svegliarsi` (Umberto Tozzi) and `Sogni` (Eros Ramazzotti), conservative **editorial** similarities to peer melodic Italian pop/rock records rather than claimed documented influences. These links can be removed at review if the listening comparison is considered too broad.
- Absence of a machine name, mix effect, sampler or recording technique in a source means it is absent from `production` regardless of period plausibility. `programming` is explicitly credited in 1984 and 1991; `drumprogramming` is directly credited in 1989.

## `raf-raf` — *Raf* (1984)

- Source hierarchy: artist management dates album 1984; MusicBrainz calls the original 1984 release group *Change Your Mind*; physical/regional variants include *Raf*, *Change Your Mind* and *Raff*. The 1987 *Self Control* release has 11 tracks, including previously issued songs, and MusicBrainz classifies it as an **album + compilation**. Represent **one original 1984 LP**, not two albums. Evidence: https://www.friendsandpartners.it/artisti/raf ; https://musicbrainz.org/artist/12f0c921-2318-4abd-9802-5fe1bdf41679 ; https://musicbrainz.org/release-group/96bf0533-8a67-3392-96fa-2810dbca9ded ; https://it.wikipedia.org/wiki/Raf_%28album_1984%29 .
- Production credit nuance: Wired describes **Celso Valli as album producer/arranger**; Raf and label credits identify **Giancarlo Bigazzi producing Self Control and Change Your Mind**. Both names appear in producers, but they do not have interchangeable roles across all nine tracks. Sources: https://www.wired.it/article/self-control-raf-anniversario-concerto-forum-intervista-storia/ and https://recordsale.de/it/artists/raf/albums/self-control .
- Instrumentation: Raf bass/electric guitar, Primadei guitar/keyboards, Parisini keys/piano, Bruno Bergonzi drums on Self Control and Stephen Head programming, supporting `electronic=4`; this does not establish a specific drum machine or synthesizer model.
- Sonic descriptors `energy=4`, `groove=4`, `mood=3`, `theatrical=3`, `experimental=2`, `polish=4` are judgement values: driving dance rhythm and rock riff coexist with emotional, tense songs. Album-level language is **en**, not Italian.

## `raf-svegliarsiunannofa` — *Svegliarsi un anno fa* (1988)

- Original CGD 20835 LP credits Bigazzi (producer), Dado Parisini (arrangement), Raf and other guitars, Maurizio Bozzi bass, Massimo Pacciani drums/percussion, Cantini saxophones, Gistri trumpet and Scalzi trombone. Flute/strings are documented for side A track 4, not the entire LP. Reference: https://musicbase.net/svegliarsi-un-anno-fa .
- Sound shifts away from Italo-disco toward Italian melodic pop/pop-rock; live band and brass are central. `electronic=1` is conservative since source does not establish widespread synth programming. `stringarrangements` reflects a **specific track's** orchestral string credit and should not be interpreted as album-wide strings.
- The title song addresses HIV/social stigma (secondary album thematic feature), while other tracks examine desire, intimacy and emotional unease. References: https://it.wikipedia.org/wiki/Svegliarsi_un_anno_fa ; https://www.friendsandpartners.it/artisti/raf .
- Review note: album `landmark=0` because it is important as the Italian-language pivot but `Self Control`, *Cosa resterà...* and *Sogni* better mark the major sound/career phases.

## `raf-cosarestera` — *Cosa resterà...* (1989)

- 8-track LP. Original sleeve credits producer Bigazzi, Parisini arrangement, Raf **drum programming**, Masini sound/programming, Pacciani acoustic drums and percussion, Galardini acoustic guitar, Manzani electric guitar and Cantini saxophone: https://musicbase.net/cosa-restera and https://recordsale.de/de/kuenstler/raf/albums/cosa-restera-degli-anni-80 .
- Electronic/Europop/Italo-disco style is documented on vinyl; the dynamic sound keeps live players. This justifies `electronic=3`, `groove=4`; do not call the entire record conventional synth-pop without dedicated evidence.
- Main themes: wistful memory of a passing decade, desire and romance, sex-war irony. *Do I Need Your Love* is English-language amid Italian tracks, hence `it|en` (Italian first). Sources: original LP credits and track list.

## `raf-sognietuttoquellochece` — *Sogni... è tutto quello che c'è* (1991)

- Original 1991 CD credits Dado Parisini and Raf as producers, with Parisini arrangements; Eros Ramazzotti provides a duet vocal on *Anche tu*, **not** producer or musical influence. Sources: https://www.vinileria.it/negozio/cd/raf-5-%E2%80%8E-sogni-e-tutto-quello-che-ce/ ; https://open.spotify.com/intl-it/album/6JY7v8ADmSYesnnl9aguZt .
- Credited personnel: Raf guitar, harmonica and programming, Parisini keyboard/programming, Pacciani drums/percussion, Allegra bass, Galardini acoustic guitar, Braido electric guitar, Demo Morselli brass, Cantini saxophone. Reference (secondary): https://it.wikipedia.org/wiki/Sogni..._%C3%A8_tutto_quello_che_c%27%C3%A8 .
- The style combines synth/Europop with highly prominent ballads and introspective/spiritual lyrics (*Oggi un Dio non ho*). A single ballad cannot dictate album genre; `ballad` goes last. The 1991 CD calls the record Electronic/Pop, Italo-Disco, Europop, Synth-pop. Scale judgements reflect this blend.

## Caveats for reviewer

1. The 1984 production credit is multi-layered: check the original Carrère LP rear sleeve before promoting `producers` to reviewed; Bigazzi's song credits and Valli's album credit are deliberately distinguished.
2. The 1988 `stringarrangements` and `strings|flute` instruments are based on one song; keep only if the album descriptor is permitted to include album-long-tail sounds. The global Fandome guide allows instrument mentions from credited tracks without a threshold.
3. Genre tags in music databases and dealer transcriptions are evidence of source labels, **not** independent critical consensus; 1984 and 1991 genre confidence is conservative.
4. Please retain original label-side title and spelling, and make `catalog.ts` match the exact CSV title strings so new IDs pass the slug validator.
5. Data source links and exact claim scopes are in `raf_phase01_sources.csv` and `raf_phase01_genre_evidence.csv`. No online repository writes were performed.
