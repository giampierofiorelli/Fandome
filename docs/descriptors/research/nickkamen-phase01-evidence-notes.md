# Nick Kamen — Fandome album research and evidence notes (Phase 01)

**Scope:** All four original studio albums from 1987 to 1992. Original WEA/Sire/Atlantic configurations only; no bonus tracks or compilation/box-set remixes. Artist catalogue id `nickkamen` is proposed; no existing rows were found in `catalog.ts`, `seed.ts` or `docs/descriptors/nickkamen.csv` on the branch `descriptors` (28 October 2026).

**Methods:** Genres follow specific record-level listings, grouped with a broader style only where supported by a linked review or label. Eight numeric vectors and `sounds_like` are editorial assessments, not measured quantities. They reflect the records and reviews, not fame or chart peaks. Instrument credits are only retained when linked session/LP documentation names them. The `influenced_by` column is deliberately empty throughout; producer, cover writer, backing singer and similar-sounding artist do not constitute a documented influence. `status=draft` throughout. Scores for reception are editorial with brief sources; lack of a robust professional review means moderate uncertainty.

## Nick Kamen (1987)
- **Sources:** Sessiondays transcription of the original sleeve; original 1987 WEA pressing via Chartsurfer; The Second Disc and Attitude retrospective reviews.
- **Genre evidence:** The physical LP is classified electronic, synth-pop, downtempo; The Second Disc describes a debut conceived mainly as an R&B/Motown covers album. `rnb`/`soul` refer to the repertoire across most of the album, not to the sound of one Madonna single.
- **Scales (3/2/4/2/1/4/3/3):** Mid-brisk melodic pop with soft/slightly soul-derived singing; predominantly session players with one highly programmed pop single. Light tone, conservative structures, polished multi-studio production. Danceable in places, not a dance album. Mood generalises romantic brightness of the source repertoire.
- **Voice:** `soft|clear` from Stroude/Button's retrospective description of his gentle rather than belting register. Backing guests are excluded from lead voice category.
- **Instruments:** Sessiondays credits a rhythm section with guitar, keys, drums, bass, horns and congas/percussion; the *Each Time You Break My Heart* track specifically credits synthesiser and string parts. Lead instruments are live, followed by one prominent electronic single.
- **Production:** Stephen Bray's programmed drums on track 7, Jerry Hey's horn arrangements on tracks 1 and 4, and programming credited on another cut. Do not assume a Linn machine was used on this album simply because the later LP had one.
- **Producers:** Stewart Levine on all tracks except *Each Time You Break My Heart*; Madonna and Stephen Bray on the one exceptional song. Madonna's backing singing and writing do NOT imply she produced the entire debut.
- **Comparisons:** Simply Red/George Michael for bright R&B-pop; Rick Astley/Madonna for modern programmed late-1980s pop aspects. Sonic comparison only, not proof of inspiration.
- **Influences:** None documented by the performer/producer as an artist-level or album-specific influence. Sam Cooke, Four Tops, Bob Dylan and others are cover-song sources, **not** listed in `influenced_by`.
- **Reception:** Early-career defining album due to hit single; reviews see interesting vocal sound but a heavy reliance on older covers. `importance=4, acclaim=2, mainstream=4` (major-label covers-oriented concept). 

## Us (1988)
- **Sources:** Sessiondays original credits (track by track); Musicbase 1988 CD; AllMusic; The Second Disc; Attitude; HHV original LP description.
- **Genre evidence:** Synth-pop/electronic on the original CD; pop songwriting across danceable tracks and ballads. AllMusic's broad Pop/Rock category is recorded conservatively as low-weight `poprock` texture; secondary `rnb` from the retrospective note on classic R&B sound (lower-strength evidence). Genres should be re-checked if new album-specific reviews are found.
- **Scales (3/4/4/2/1/4/3/3):** Programmed Linndrum, synths and samplers accompany live guitar and drums. A sonically bright, streamlined late-eighties pop record with conventional song structures, some ballads, some danceable pieces.
- **Voice:** The gently delivered pop singing remains soft/clear. Madonna's appearance on *Tell Me* is backing vocals, not lead voice.
- **Instruments:** Drums (including live), keyboards, synth, guitar, sampler (J.J. Jeczalik), piano (Anne Dudley), percussion; programmed Linn drum on *Bring Me Your Love*. All specifically shown in the original credit transcription.
- **Production:** `linndrum` on track 1, additional drum programming on track 2, programming and sampler on tracks 5 and 9; latter supports `sampling` without assuming any particular sample content.
- **Producers:** Despite the intro sentence in Sessiondays calling it produced by Patrick Leonard, the original **track credits** actually give Jeff Pescetto (1–2), David Williams (3, 6), Gardner Cole (4, 7–8), J.J. Jeczalik (5, 9), Patrick Leonard (6). We use the granular credits, not a single blanket producer.
- **Conflicting editions:** Sessiondays lists nine tracks; the label edition/other sources also list *Better Be Good Tonite* on some configurations. Its contributor credits are not projected onto the canonical nine-track sequence; no producer guessed for that extra track. The imported row remains album-level, not a track list.
- **Influences:** No independently verifiable declared inspiration; Madonna/Patrick Leonard collaborators, not influences.
- **Reception:** A more original and cohesive follow-up (`importance=4, acclaim=3, mainstream=3`); score is an editorial judgement not a Metacritic aggregate.

## Move Until We Fly (1990)
- **Sources:** Original 1990 WEA pressings and producer notes at Chartsurfer; AllMusic credits/moods; Attitude 2020 retrospective; Spotify original tracklist. Further CD-credit copy via musicbase/rodny search result; its direct page has limited access.
- **Genre evidence:** Original edition: electronic/rock, `downtempo|poprock|synthpop`; first single is described as guitar-driven in the critical review. `pop` is a low-priority wider style given album pop categorisation, not a substitute for specific genres.
- **Scales (3/3/3/2/1/4/3/3):** Blends midtempo guitar rock and slick synthpop ballads, with changes of pace but an overwhelmingly melodic, romantic approach. These are album-level editorial estimates, not genre-only inference.
- **Instruments:** Only `guitar` is firmly evidenced for the individual recording in accessible reviews. Other possible keyboards, rhythm machines and bass are **not guessed** from genre or later-album credits. This is an explicit evidence gap, not a claim the album contains only guitar.
- **Production:** Empty. Original sleeve credits prove multiple producers but no sufficiently specific instrument/effect/technology link attributable to the whole LP was independently confirmed. Future research can fill this without overwriting the other columns.
- **Producers:** Different track teams: Paxman/Muggleton, Andy Richards, Guirey/Andersen/Kamen, Franglen and Phil Legg. *Lotown* is printed as a producer for three tracks but is also the studio and/or production collective; retained as billed and flagged, never treated as an individual. Mark Saunders is merely additional production on one song and is excluded.
- **Influences:** Edwin Starr and Curtis Mayfield songwriter credits are covers: do not put them in influenced_by. `sounds_like` are editorial synth-pop / melodic crossover comparisons only.
- **Reception:** The record is a central career point because of *I Promised Myself*, not because it sold in particular countries; review identifies its guitar-led single as especially strong. `importance=5, acclaim=3, mainstream=3`.

## Whatever, Whenever (1992)
- **Sources:** Original 1992 WEA CD reproduced at Musicbase and album-sleeve listings; Apple Music and Qobuz 1992 copyright; Attitude commentary.
- **Genre evidence:** Pressing identifies `poprock|downtempo|synthpop`, and the broad genres rock, pop and electronic. Review calls the album a hybrid attempt of indie with dance: `indie|dance` therefore sit at the end of the genre list, with their scope clearly **texture/selected tracks rather than unequivocal album-wide classification**.
- **Scales (3/3/2/2/2/4/3/2):** More guitar and percussion than a pure electronic set; midtempo and emotionally more reserved, diverse but with some stylistic indecision in criticism. Lyrics remain about attachment, separation and mutual reassurance; refrain from assigning a specific machine.
- **Voice and instruments:** Soft, clear lead singing; sleeve explicitly lists Nick Kamen, Mike Paxman, Paul Muggleton, Toby Andersen, Kadir Guirey, Bob Noble and bassist Stuart Knowler; instruments: keyboards, guitar, bass, drums, percussion. Backing vocalists Judie Tzuke and Lena Fiagbe are not lead voice classifications.
- **Production:** Empty: group members and studio locations are documented, but no named machine or record-wide effect is verifiably credited. Studio location is NOT a technique tag.
- **Producers:** Nick Kamen/Mike Paxman/Paul Muggleton, plus group *Lotown* on tracks 2–4 and 8–10. Lotown is an in-house team name and may represent a studio attribution. Its exact printed credit is retained, and no uncredited engineer promoted to producer.
- **Date/title discrepancy:** 1992 is documented by Apple Music/Qobuz/Cherry Red. The original is **Whatever, Whenever**. Some metadata calls it *Whatever, Wherever* (1995), and some secondary transcriptions carry a 1990 copyright line; both conflict with original album metadata and are not used. Track six in some databases reads *This Is Our Time* instead of *This Time Is Our Time*; track names are not part of imported album row.
- **Reception:** A final, less widely regarded move toward an indie/dance hybrid; `importance=2, acclaim=2, mainstream=4`. The number 4 reflects an attempted commercial change in production sound, not a judgment about popularity or revenue. No scores derived from the rating of the *compilation* box set.

## Artist-wide inspirations check
No reliable interview has yet been located in which Nick Kamen explicitly names recording artists who shaped his work. No `ARTIST INFLUENCES` link is being proposed. Song covers and the many credited collaborators are intentionally excluded.

## Research confidence and next steps
* 1987 and 1988: `high` for credits, instrument families, and broad styles. Not all individual values are independently reviewed.
* 1990 and 1992: `medium` because some instrumentation and production technologies are undocumented or producer aliases are unclear.
* `landmark=1` is an artist-relative relevance flag, not an external award.
* A future reviewer may supplement official WEA booklet scans and qualified contemporary critiques to refine late-album production and `influenced_by` without inventing undocumented attribution.
