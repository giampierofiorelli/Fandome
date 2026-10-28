# Bros — phase 01 evidence notes (28 October 2026)

Scope: the **three original studio albums**, not the retrospective *The Best of Bros*, *I Owe You Nothing*, *12 Inch Mixes* or remixes. Genres below retain low-weight song-level categories at the end, in line with Fandome. Scores are original judgments, not source quotations.

## Push (1988) — `bros-push`

**Sound/genres:** AllMusic explicitly lists dance-pop and teen pop. The 1988 CBS LP transcription classifies the sound as synth-pop and pop; MusicBrainz has pop rock among its release-group user tags (weaker than physical sleeve credits). AllMusic's review of the later hits retrospective identifies an R&B-flavoured track (*Ten Out Of Ten*); this is an album **tail** genre only. No new jack swing or house claim is made. The record's broad 'Pop/Rock' AllMusic bucket is not the same as rock instrumentation as primary genre.

**Credits/instruments/production:** Original 1988 LP / MusicBrainz release credits name Nicky Graham (keyboards, keyboard programming, production and mixing), Craig Logan (bass), Luke Goss (drums), Pete Glenister (guitar), Jimmie Gallagher (saxophone), Andy Richards (Fairlight Series III synth). We record `keyboards|bass|drums|guitar|synth|saxophone`, and `programming|fairlight`. The explicit Fairlight model is Series III: `fairlight` means the family, do not claim Fairlight II. Backing vocal credits to Dee Lewis, Shirley Lewis and Helena Springs do **not** prove a particular vocal layering effect, so `layeredvocals` omitted. Nicky Graham, not manager Tom Watkins, is the album's credited producer.

**Numbers:** energy 4, tempo 4, groove 5 because the major singles are brisk and rhythm-forward while *Cat Among the Pigeons* is a slower ballad. Electronic 4: programmed keyboards and Fairlight over recorded drums/bass/guitar. Polish 5: radio-ready pop mix; experimentation 1: conventional hooks. Mood 4 with ballad/romance counterweight. Theatrical 3: anthemic frontman delivery but not concept-theatre. Voice `soft|clear`: the debut reviewer calls Matt's singing delicate. Themes are modestly assigned: aspiration/fame mapped to `identity` (imperfect predefined token), plus romantic songs (love and heartbreak). Do not treat fame as political commentary.

**Influences:** All album-specific `influenced_by` left blank: artist-wide claims about Stevie Wonder / Jackson 5 etc. are documented separately in `CLAUDE_IMPORT.md`; assigning particular source albums to *Push* would overstate evidence. `sounds_like` left blank where no specific album review comparison was established. Original 10-track 1988 release, excluding 1988/2010 bonus remixes and bonus *Silent Night*.

Key evidence:
- https://www.allmusic.com/album/push-mw0000200270
- https://musicbrainz.org/release/14d9c70c-b4e7-431c-a484-c7f5cddef731
- https://www.qobuz.com/gb-en/album/push-bros/0888880674319
- https://www.kupindo.com/Ploce/13525289_Push
- https://www.allmusic.com/album/i-owe-you-nothing-the-best-of-the-bros-mw0002102455

## The Time (1989) — `bros-thetime`

**Genres/sound:** AllMusic dance-pop/teen pop; original 1989 CBS pressings explicitly synth-pop; genre pop stated in album overview. Pop Rescue describes the long, groovy *Madly in Love* as disco-funk-like, while AllMusic's retrospective calls it acid-house-inspired. Both are **one-song** descriptions rather than the dominant album sound and placed last. *Chocolate Box* is compared to Michael Jackson by AllMusic: that is `sounds_like`, not documented musical influence. Nicky Graham remained producer although Matt and Luke started writing their own songs.

**Instruments and recording:** Physical UK CBS credits and label-supplied Qobuz: Luke (drums, percussion, keyboard programming and bass), Matt (vocals, keyboards, programmed parts and bass), Graham and Scott Davidson (keys/programming/bass), Paul Gendler (guitar), Jim Turner (sax), Kick Horns (brass arrangements). Synth is supported by original synth-pop styling and a critic's explicit mention of synths on *Madly in Love*, not assigned from genre alone. `programming|hornarrangements` supported by credits, with no named drum machine, sampler or recording format. Tom Lord-Alge mixed the record; **not** a producer. Ric Wake is credited as additional production on **some US album remixes** only, so omit him from the producer list.

**Lyrics/scoring:** *Sister* mourns the Goss twins' stepsister, giving the record a grief/reflective component, with romantic tracks and *Money*. Mood 3 rather than universally celebratory, energy 3/tempo 3 due to long midtempo groove and ballad contrast, groove 4, electronic 4, polish 5. Experimental 2 credits incremental house-adjacent touches but not boundary-pushing album overall. Theatrical 3. `lyrics=introspection` includes grief (no special grief token). Confidence high for credits, lower for genre tail; `landmark=0` because *Push* remains the defining record.

**Edition warning:** Original **UK 10-track vinyl** differs from certain CD/US configurations: US versions substitute an *I Owe You Nothing* remix on some copies. The descriptor is the 1989 original UK LP, not its bonus remix. Do **not** label a remix-only guest as co-producer.

Key evidence:
- https://www.chartsurfer.de/artist/bros/the-time-album_ffhhuu.html
- https://www.qobuz.com/ca-en/album/the-time-bros/0884977831139
- https://poprescue.com/2020/02/14/review-the-time-by-bros-vinyl-1989/
- https://www.allmusic.com/album/the-time-mw0000654353
- https://www.allmusic.com/album/i-owe-you-nothing-the-best-of-the-bros-mw0002102455

## Changing Faces (1991) — `bros-changingfaces`

**Genres:** Physical Columbia cassette/CD/vinyl style tags explicitly *pop rock* and *synth-pop* (not industrial rock). AllMusic gives dance-pop and teen pop; basic pop is supported by contemporary genre summaries. 1991 *Melody Maker* criticism described an album full of funk-like arrangements and lush ballads; AllMusic's retrospective independently names *Are You Mine?* a power ballad and *Try* a gospel attempt. Gospel and power ballad should stay **tail** genres. An album can be more guitar-led without being classified simply as `rock`.

**Credits/instruments/production:** Gary Stevenson is the original LP's **sole** album producer, replacing Nicky Graham. Credited instruments: Luke Goss drums/percussion and **drum programming**; Matt Goss keyboards, vocals and some guitars; Dave West keyboards; Jim Williams, Greg Bone, Paul Gendler and Hywell Maggs guitars; Mark King bass on *Try*; Gary Barnacle sax, John Thirkle trumpet, Pete Thomas trombone, Peter Hope Evans harmonica. Source-specific credits support `keyboards|guitar|drums|percussion|bass|saxophone|trumpet|trombone|harmonica` plus `drumprogramming`. No specific drum-machine model or synthesizer model documented. The fact that the *genre* is synthpop **does not itself authorize `synth` in instruments** without instrumental evidence. Horns play on some tracks; no formal 'horn arrangements by X' identified, so production tag omitted. John Gallen recorded and mixed, not co-produced.

**Critics & `sounds_like`:** Jimmy Nichol's contemporary *Q* review compared the album to George Michael, and the *Melody Maker* review described funk and heavily sentimental ballads critically. This comparison belongs in `sounds_like=George Michael`, **not** `influenced_by`. Retrospective and fan claims of a 'mature soulful album' are softer than original physical credits; avoid assigning `soul` as a whole-album genre from a user review. Critics were divided about the musical merits; notes describe sonics, not endorsement.

**Scales:** electronic 3 (keyboard/synthpop identity coexists with more guitars, real drums and brass); energy 3, tempo 3, groove 3 reflect more ballads; mood 2 and theatrical 4 cover emotive singing and lush arrangements; experimental 1 and polish 5 describe conventional sophisticated commercial production. `voice=clear|powerful` represents a frontman moving between restrained and more emphatic delivery; no operatic or choir lead. Confidence medium overall because sonic/genre tail is drawn partly from very negative period criticism. Songs about romance, separation and personal self-definition; avoid speculating about autobiographical meaning.

**Timing warning:** Qobuz/Spotify digital listings date the album 20 September 1991, Wikipedia 30 September, and Apple Music lists 30 August. The original 1991 year is secure but exact day is inconsistent; no day-level date supplied to the importer. Original ten 1991 tracks only; *Best Of* compilations are excluded.

Key evidence:
- https://www.chartsurfer.de/artist/bros/changing-faces-album_fhernp.html
- https://recordsale.de/en/artists/bros/albums/changing-faces?filter%5Bmedium%5D=ignore&filter%5Bsort_order%5D=age_desc
- https://www.allmusic.com/album/changing-faces-mw0000869334
- https://www.allmusic.com/album/i-owe-you-nothing-the-best-of-the-bros-mw0002102455
- https://en.wikipedia.org/wiki/Changing_Faces_(Bros_album)
- https://www.officialcharts.com/albums/bros-changing-faces/
