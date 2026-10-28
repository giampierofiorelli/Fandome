# CLAUDE_IMPORT — Scorpions — Fandome Phase 01

Research date: **28 October 2026**. Repository checked read-only: `giampierofiorelli/Fandome`, branch `descriptors`.

## Exact phase 01 album rows (four NEW rows only)

| ID | Album | Year | Type | Production |
|---|---|---:|---|---|
| `scorpions-lonesomecrow` | Lonesome Crow | 1972 | studio | Conny Plank |
| `scorpions-flytotherainbow` | Fly to the Rainbow | 1974 | studio | Frank Bornemann, Scorpions |
| `scorpions-intrance` | In Trance | 1975 | studio | Dieter Dierks |
| `scorpions-virginkiller` | Virgin Killer | 1976 | studio | Dieter Dierks |

No compilation or concert LP is present. **Do not add** Tokyo Tapes or World Wide Live just because AllMusic lists them in the chronology. Lonesome Crow was also used as film music but is treated as the band's original standalone studio album, not two duplicate releases. Original issue dates take precedence over reissues. No copyrighted artwork of any album is included.

## Catalog audit and import prerequisites

Checked both `src/data/catalog.ts` and `src/data/seed.ts`: neither mentions Scorpions. Also checked `src/data/coBilled.ts` and `docs/descriptors/scorpions.csv`; the latter was not found. Proposed artist ID **`scorpions`**; no collision was found in the files inspected. Every album in this ZIP requires adding an artist room and album entry before the validator can accept the IDs. `catalog-audit.csv` distinguishes the four phase 01 rows from later unresearched titles. Recheck against live repo at import time.

New genre, instrument and production tokens needed: **none**. All used tokens come from the inspected Fandome guide and published genre/instrument/production lists. Use `prog` as the Fandome canonical token for sources saying progressive rock; no new synonym introduced.

## ARTIST INFLUENCES — documented first-person statements; NOT automatically assigned to album rows

- **Elvis Presley; Little Richard; Jerry Lee Lewis; The Rolling Stones; The Beatles; The Pretty Things.** Founding guitarist Rudolf Schenker explicitly names the early rock'n'roll performers and the British bands, calling The Pretty Things especially important for the direction of his own band's music. [Music Insider, first-person interview](https://musicinsidermagazine.com/rudolf-schenker-scorpions/). The Rolling Stones and Beatles were also a model for forming a band. Only specifically supported early stylistic influences are transferred into Lonesome Crow's `influenced_by`.
- **Led Zeppelin; The Who; The Rolling Stones; The Beatles; Taste; Colosseum; Roger Daltrey.** Klaus Meine names these rock acts/performers among the influences shaping the band's original style and remembers playing Led Zeppelin and Taste songs before the first album. [Klaus Meine, The Circle interview](https://thecircle.de/blogs/features/scorpions-im-exklusiv-interview-der-harte-weg-zum-welterfolg). A cover alone is not proof; this source also contains the singer's explicit statement about influence. Do not infer that all seven shaped every LP.
- **Jimi Hendrix; Eric Clapton; Jeff Beck.** Guitarist Uli Jon Roth identifies these among his formative electric-guitar influences. [Roth first-person interview](https://rockmusicstar.com/2019/03/22/uli-jon-roth-interview/). [Rudolf Schenker on the group's contrasting Roth/Hendrix sound](https://www.vice.com/en/article/scorpions-rudolf-schenker-interview/). Hendrix is specifically connected to Roth's *Fly to the Rainbow* guitar by the contemporary retrospective [AllMusic](https://www.allmusic.com/album/fly-to-the-rainbow-mw0000199910) and carries into the subsequent Roth-era sound; Clapton and Beck remain career-level rather than automatic row links.
- **The Beatles; Bee Gees.** Rudolf Schenker says Klaus Meine arrived with a particularly melodic British-pop background and names both. [Vice interview](https://www.vice.com/en/article/scorpions-rudolf-schenker-interview/). This is a description of the band's songwriter dynamic, not evidence each album was influenced by a Bee Gees recording.

## Credit, genre and source caveats

1. **Lonesome Crow:** `liverecording` is justified by drummer Wolfgang Dziony's account: complete ensemble takes recorded together at Star Studios in October 1971, no individual band overdubs. [His recollection](https://scorpscollector.wordpress.com/2016/10/05/from-osnabruck-to-hamburg/) is reproduced by a specialist collector, so evidence strength is **medium**, even though the account is first-person. This does NOT mean a concert recording. Producer Conny Plank confirmed on original-release discography and band biography. The period's Krautrock genre is widely used as an editorial classification, but **Klaus Meine expressly rejects Scorpions belonging to the Krautrock movement** in [The Circle](https://thecircle.de/blogs/features/scorpions-im-exklusiv-interview-der-harte-weg-zum-welterfolg); retain the source-labelled genre with this prominent caveat. AOTY's release-day date conflicts with the official 9 Feb 1972 date; the row uses year only.
2. **Fly to the Rainbow:** Co-produced by **Frank Bornemann and Scorpions** per the band's own 1974 album page. Credit Mack as engineer/recording staff, **not as an album-wide producer**, notwithstanding some liner transcription discrepancies. MusicBrainz track credit supports Scorpions on certain tracks, while the official album page assigns both producers album-wide. **Achim Kirschning** on Mellotron, organ, synthesizer confirmed by original pressing / MusicBrainz. The `wahwah` tag comes from a specific [track-description](https://theultimatemusiclibrary.net/2022/09/19/scorpions-fly-to-the-rainbow-1974/), not an asserted pedal model. `flamenco` is a narrow Spanish-guitar/rhythm colour on They Need a Million; `folkrock` primarily Far Away; neither characterises the entire record. The debut-to-Roth transition is substantial but the psychedelia remains.
3. **In Trance:** Produced by Dieter Dierks (official discography, pressing). MusicBrainz shows **Snuff Garrett as an additional producer for the song Dark Lady** in a specific edition, which is not backed by the primary album credits: excluded from album-wide producers pending original-sleeve verification. `bluesrock` is track-scoped per specialist retrospective; album emphasis is hard rock/heavy metal. `arenarock` and `albumrock` are retrospective AllMusic style tags, not contemporaneous claims about performing in arenas. No machine model or guitar processing is assumed: **production column intentionally blank**.
4. **Virgin Killer:** Producer Dierks confirmed on original pressing and the band's website; 32-track studio recording (original LP records), but that fact alone is not proof of a specific production token, so **production column intentionally blank**. Original cover is **not included**; the record's cover has a disturbing sexualised image of a child, later replaced on some releases. No image files or cover URLs in the ZIP. `psychedelicrock` is residual and low-ranked: band's retrospective explicitly frames the record as moving from psychedelic rock toward hard rock. On one specific pressing some sources date the U.S. issue in 1977, but original year is 1976.
5. **No invented recording equipment:** Neither a generic analog tape assumption nor a remaster-era machine is inserted as a 1970s original-session fact. Empty cells encode insufficient evidence, not zero.
6. **Voice/scales/lyrics:** Our eight 0–5 scores are explicit Fandome editorial interpretations of recordings and consistent reviews, **not externally measured facts**. Voice classes describe predominant singing, not band members. English is the lead-song language. No more than 15 words per `notes` field. Status always `draft`.
7. **Comparisons are not influences.** Black Sabbath/Led Zeppelin/Rolling Stones in Lonesome Crow `sounds_like` are from AllMusic's critical comparison. Fly's Hendrix link is both direct influence on Roth and independently documented sonic similarity; it belongs in BOTH fields. A reference to Jimi Hendrix's song Spanish Castle Magic resolves to his studio album *Axis: Bold as Love*, not an invented song-as-album ID. Do not transfer shared lineup, covers or later influence on other bands into `influenced_by`.

## Files to import

- `scorpions_phase01_rows_ONLY.csv`: 4 and only 4 new rows, 27 header columns.
- `scorpions_phase01_sources.csv`: 33 individually described source records.
- `scorpions_phase01_genre_evidence.csv`: 23 per-genre pieces of evidence, scopes and links.
- `scorpions_phase01_evidence-notes.md`: full per-album analytical reasoning.
- `scorpions_phase01_catalog-audit.csv`: current + future album catalogue plan.
- `CLAUDE_IMPORT.md`: this file.

When adding artist and album IDs to the catalogue, keep this phase incremental. Run `scripts/validate-descriptors.ts` and Fandome tests after changes. No need to add tokens. Do not mark rows `reviewed` without a second independent reviewer. 

## Next phase (phase 02, new rows only)

1. *Taken by Force* (1977)
2. *Lovedrive* (1979)
3. *Animal Magnetism* (1980)
4. *Blackout* (1982)

Later phases cover the remainder. The 2000 *Moment of Glory* album involves the **Berliner Philharmoniker** and will require co-billing and a joint-release classification when that phase is reached; 2011 *Comeblack* is a studio re-recording/cover project, not a greatest-hits compilation.

## Claude import note (Oct 2026)

- Fly to the Rainbow: Rainbow removed from sounds_like (the evidence notes themselves find no source for it); producers Frank Bornemann only (the band's own credit dropped).
- Artist added with the full studio discography (21 albums, Moment of Glory and Comeblack included; co-billing for Moment of Glory to be set when it is described). Scene DE en 1970 rock,metal; still touring.
- Artist influences from Schenker, Meine and Roth; Roger Daltrey folded into The Who.

## Claude enrichment (reception pass, Oct 2026)

- Reception rows in `docs/descriptors/reception/scorpions.csv`.
- sounds_like checked: Lonesome Crow's Black Sabbath, Led Zeppelin, Rolling Stones confirmed (AllMusic, Barry Weber); Fly to the Rainbow's Hendrix confirmed (AllMusic, Rivadavia; Ultimate Classic Rock); In Trance's Hendrix kept (Sputnikmusic contributor); Virgin Killer adds Jimi Hendrix (Sputnikmusic: "an intriguing meeting of Hendrix and Anatolia"); Lovedrive adds Van Halen (AllMusic), AC/DC and Aerosmith (Classic Rock/Louder), Led Zeppelin (Apple Music: Holiday "a sort of Stairway to Heaven"); Animal Magnetism's Boston confirmed (Apple Music); Blackout adds Iron Maiden (Apple Music on Dynamite). UFO and MSG excluded (members' bands); Eleanor Rigby interpolation is borrowed material.
