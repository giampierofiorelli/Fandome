# Fandome import — Michael Jackson Phase 01

**Research date:** 2026-10-25. **Branch:** `descriptors`, read-only. **Artist ID:** `mj`. Four new, incremental studio-album rows only; do not reimport any other artist or phase.

## Phase contents and catalogue audit

| Fandome album ID | Title | Original year | Catalogue status |
| --- | --- | ---: | --- |
| `mj-gottobethere` | Got to Be There | 1972 | **ADD** |
| `mj-ben` | Ben | 1972 | **ADD** |
| `mj-musicme` | Music & Me | 1973 | **ADD** |
| `mj-forevermichael` | Forever, Michael | 1975 | **ADD** |

The current Fandome `mj` catalogue contains only *Off the Wall* (1979), *Thriller* (1982), *Bad* (1987), *Dangerous* (1991) and *HIStory* (1995). Insert the four records above **before Off the Wall**. Preserve all existing catalogue IDs and titles. Exact proposed IDs follow `mj-` + ASCII-only title slug.

## Source-sensitive import instructions

- **New genre token:** `ampop` (AllMusic explicitly classifies *Got to Be There* as **AM Pop**). Add to `scenes.ts`, its genre family (`pop`) in `genreFamilies.ts`, and update validator accepted values. Other supplied tokens already exist in guide/repository.
- **New instrument tokens:** none. **New production tokens:** none.
- **Co-billed:** none. Original Motown-era solo albums remain Michael Jackson solo releases, even where the Jackson 5 supplied backing vocals on individual recordings.
- **Ben is a studio album, not the 1972 movie's full soundtrack.** Only its title recording comes from the film. Do not set type `soundtrack` or add the original film soundtrack as a Jackson solo LP.
- **Producer roles:** Qobuz licensed Motown credits are track-level and do not necessarily agree with the much shorter album-global lists published elsewhere. `The Corporation` is a production team (Berry Gordy, Freddie Perren, Alphonso Mizell, Deke Richards). Do not double-count those names just because of membership. Berry Gordy was often credited as executive producer, but Qobuz identifies him as a track producer specifically on some 1972/1973 recordings; on `Music & Me` include him for those track-level producer credits. `Music & Me` Bob Gaudio is labeled `AdditionalProducer` on 'Morning Glow' and intentionally omitted from the producer list.
- **Forever, Michael:** Motown track credits identify Brian Holland as producer of the Holland brothers singles, while Edward Holland Jr. is consistently credited as songwriter, **not** a separate producer on these tracks. This contrasts with some album-level discographies; prefer granular label credits. Qobuz has a likely typo `Hal David, Producer` on 'We've Got Forever', while it identifies Hal Davis on several other album tracks.
- **Instruments:** the MJDb aggregates track-associated musicians across each album and can overstate individual track participation. Our instrument fields use only documented album-associated instrumentation and do not pretend to assign players to specific songs. Instruments never inferred from genre. `Music & Me` guitar on the sleeve **does not mean Jackson played guitar**; the personnel names David T. Walker as a guitarist.
- **Production:** intentionally empty on all four rows. Original credits and reliable reviews do not identify specific signal processing, named hardware/software or sufficiently secure record-by-record techniques. Do not infer `analogtape`, `belting`, `layeredvocals` or `overdubbing` merely from 1970s era, broad Motown practice, a big voice or backing singers.
- **Link access caveat:** AllMusic review pages were indexed with author, genre and review text in web search, but direct automated page opening returned HTTP 403. URLs are real publisher links; a human importer may need a normal browser. Qobuz, MusicBrainz and Motown label pages opened directly.
- **Genre scope:** *Ben*'s `funk` is confined to parts of the repertoire (notably 'My Girl'). *Music & Me*'s `showtunes|standards` refer to a few cover tracks, not the album majority. *Forever, Michael*'s `disco` is secondary and contested: AllMusic stresses the limited contemporary dance content. `phillysoul` is supported by a lower-strength secondary taxonomy; reassess independently before treating as a high-certainty influence.
- **Influences:** `Music & Me` cites Jackie Wilson only because Classic Motown specifically frames the cover of 'Doggin’ Around' as a tribute to Jackson's childhood hero. Mere covers, adjacent Motown acts, producers and editorial likenesses do **not** automatically become influences. Editorial parallels are `sounds_like` judgments.
- **Scales:** eight 0–5 values per album are evidence-informed editorial Fandome judgments anchored against documented styles, review descriptions, personnel and material, not numerical scores quoted by the sources. Empty `production` is intentional. Notes are original and under 15 words.
- **Validation:** CSV/ZIP shape and cross-file genre/source references tested locally. No GitHub write, repo validator or test suite executed by ChatGPT.

## Next phases (studio discography first)

**Phase 02:** *Off the Wall* (1979), *Thriller* (1982), *Bad* (1987), *Dangerous* (1991). Existing IDs in Fandome must be preserved. **Phase 03:** *HIStory: Past, Present and Future, Book I* (1995), *Blood on the Dance Floor: HIStory in the Mix* (1997; hybrid remix/New songs, evaluate landmark status), *Invincible* (2001), and separately evaluate the original *The Wiz* (1978) soundtrack as a co-billed cast project rather than silently classify it as a Jackson solo album. **Phase 04 if warranted:** released posthumous *Michael* (2010), *Xscape* (2014), and any other clearly qualified original-recording/posthumous project; original editions and authenticity disputes require separate research. Do not treat anniversary repackagings, unreleased albums, or Jackson 5/Jacksons studio albums as Michael Jackson's solo albums.
