# Lipps, Inc. — Phase 01: sourced album descriptor rationale

Research date: **2026-10-29**. Branch **`descriptors`** read-only. Four studio albums, original releases only. Original years are 1979/1980/1981/1983. This is a single, complete album-phase for the artist.

## Evidence standard

- Scores (0–5) are editorial judgments calibrated to Fandome anchors, not facts taken from an outside numerical database. Distinguish judgment from documented personnel, genres and production methods.
- `sounds_like` is an editorial sonic comparison; `influenced_by` is *not* equivalent. **All four `influenced_by` fields are deliberately empty**: available sources do not record a specific artist or producer expressly naming other artists as album-shaping influences.
- Do not infer sampling, drum-machine models, vocoders, synth models, or particular effects from the era alone. Hardware claims require an album/session credit. Do not call the original record a remaster or digital recording because a streaming reissue is digital.
- Only the 1979 four-song original **Mouth to Mouth** is scored, not later reissue bonus tracks. All other albums use their original track lists.

## Mouth to Mouth (1979) · `lippsinc-mouthtomouth`

Sources:
- Qobuz original-year/label metadata: https://www.qobuz.com/us-en/album/mouth-to-mouth-lipps-inc/fazl5lhh2yl1a
- AllMusic album and session credits: https://www.allmusic.com/album/mouth-to-mouth-mw0000843781
- 1980 original LP personnel transcription: https://www.chartsurfer.de/artist/lipps-inc/mouth-to-mouth-album_frpfvv.html
- First-person interview with Steven Greenberg, ROUTES, June 1980: https://routes-mag.com/issue-1980-6-1/
- Bob Moog Foundation / Moogseum, synth lead and bass on Funkytown: https://artsandculture.google.com/story/discovering-moog-in-funk-and-r-amp-b-moogseum/MgVhhcFJU45HHQ?hl=en
- Tom Breihan, Stereogum 25 March 2020, Funkytown retrospective: https://stereogum.com/2077732/the-number-ones-lipps-inc-s-funkytown/columns/the-number-ones

Genre `disco|funk|electronic`: first two named for the album by reference/album sources; the original LP release is also filed Electronic and contains synth parts. Synthetic bass/hook dominates the biggest song. High groove 5, strong electronic 4. Acoustic instruments are documented too: Terry Grant electric bass, guitars, horns, Ivan Rafowitz piano, a violin section. Hence electronic is **not** 5. Greenberg says he overdubbed his own drum, bass, guitar, piano and synth playing; Roger Dumas is credited for synthesizer programming. `overdubbing|synthprogramming` supported, no uncredited drum-machine brand or vocoder.

Cynthia Johnson's high, cutting lead and presence warrant clear/powerful. Lyrics `party` and `sensuality` reflect the dance/club songs; `storytelling` reflects escape imagined in *Funkytown*. Her first LP with an international hit is `landmark=1`. Producer **Steven Greenberg**, not engineer David Rivkin. `sounds_like` and `influenced_by` empty because record-level supporting comparisons and artist-declared inspirations were not verified.

## Pucker Up (1980) · `lippsinc-puckerup`

Sources:
- Amy Hanson / AllMusic: https://www.allmusic.com/album/pucker-up-mw0000853010
- Casablanca original sleeve and track detail: https://www.chartsurfer.de/artist/lipps-inc/pucker-up-album_fvvrpc.html
- 1980 Casablanca original label metadata: https://www.highfidelityla.com/release/9120236/lipps-inc-pucker-up
- Track-level personnel in original album article: https://en.wikipedia.org/wiki/Pucker_Up

Genres disco and funk are explicit AllMusic tags. AllMusic additionally labels the album contemporary R&B (retrospective category; mark as such when importing). *Tight Pair* is described as jazz-influenced, so **jazz is fourth**, track-level tail, not an album-wide jazz classification. Amy Hanson calls the synth style **Giorgio Moroder-esque**, which substantiates `sounds_like=Giorgio Moroder`, **not** an `influenced_by` credit. Her review also mentions Motown-style songwriting on *The Gossip Song*, but Motown is a label/style and not an artist influence.

Greenberg, Johnson, synthesizer programmer Roger Dumas and session musicians are documented. Credits separately list piano, organ, guitar, saxophone and horns. Greenberg is sole producer. `synthprogramming` is credited on particular tracks; uncredited model-specific tokens omitted. The 1974 Ace song *How Long* is a **cover** and Ace is excluded from `influenced_by`. Energetic/disco yet less defining than first LP: `landmark=0`. Scores are editorial, and AllMusic's weak reception is not converted to an unearned album landmark.

## Designer Music (1981) · `lippsinc-designermusic`

Sources:
- AllMusic record and musician credits: https://www.allmusic.com/album/designer-music-mw0000843653
- Original LP listing with precise singer, instrument and string arrangement credits: https://rectangletriangle.com/products/designer-music-lipps-inc
- MusicBrainz edition metadata / genre tags: https://musicbrainz.org/release-group/5b2a36b0-22cf-4ed9-b4b5-9a4624666f32
- Album overview: https://en.wikipedia.org/wiki/Designer_Music

**Genre disagreement is preserved**. The album overview uses `postdisco|newwave|synthpop`, while AllMusic tags `disco|funk|contemporaryrnb` and LP metadata lists Electronic. Post-disco/synth-pop/new wave are treated as **medium-confidence taxonomy from a weaker secondary source**; this explains overall `confidence=medium`, not 'high'. AllMusic's genre reference is included for the funk/disco tail; `electronic` is from the original LP indexing and synthesizer credits. `contemporaryrnb` is not added simply by reading the AllMusic stylistic subheading, to avoid a less useful album-level inference; Claude may revisit if it has stronger evidence. Album-era LP still features **Cynthia Johnson as lead**, with Melanie Rosales among backing vocalists. **Do not change primary lead to Rosales here.** Herb Pilhofer credited for string arranging and conducting => `stringarrangements`. Roger Dumas synthesizers are credited, not a brand name.

`experimental=3` signals a wider stylistic palette, not an assertion of avant-garde methods. `social|irony` reflects titles and themes such as *I Need Some Cash* and *Background Singer*, but finer lyrical claims remain editorial and deserve a second pass. `influenced_by` empty.

## 4 (1983) · `lippsinc-4`

Sources:
- Original US Casablanca 1983 LP catalog and personnel: https://recordsale.de/de/kuenstler/lipps-inc/albums/4
- Further 1983 LP transcription, original genre and track musicians: https://www.etsy.com/listing/1028214836/lipps-4-album-lp-casablanca-records-1983
- MusicBrainz album release and eight-track order: https://musicbrainz.org/release/2f8dac23-0c80-4fc9-a4f4-48bbc861b496
- Steve Huey, AllMusic band history: https://www.allmusic.com/artist/lipps-inc-mn0000243932/biography

Margie Cox (also credited **Margaret Cox**) is the lead-vocal credit on original LP. *4* is an **album title consisting of the digit 4** (not a fourth volume of a compilation). Original pressing is 1983; the eight-song program is distinct from reissues. Greenberg is producer, player (bass, drums, keyboards, guitar) and programmer; Paul Stark is engineer, not producer. Bobby Schnitzer plays guitar. One original-LP transcription explicitly credits a Moog synth on *Funk 108* (Roger Dumas) and saxophone on *Never Could Be Sorry* (David Eiland): used to support album's `synth|saxophone` list, **not** to imply every track has these instruments. `programming` documented generically. No proprietary hardware model token inserted because unclear beyond one track. Genres `funk|disco|electronic` are from that original-disc catalog transcription; `electronic` should be reviewed if source tagging is not deemed album-wide evidence. `voice` deliberately blank: singers documented but a specific timbral voice-type description was not found. Similarity and influences likewise left empty.

## Album-artist identity and disambiguation

Recommended Fandome ID `lippsinc` (name exactly **Lipps, Inc.**). Do not split Cynthia Johnson, Margie Cox, Roger Dumas, Prince/The Revolution, or Rockie Robbins into co-billed album artists. They are musicians/collaborators here. Avoid adding a fifth 1985 studio LP: *Does Anybody Know Me?* appears as a single and *Funkyworld* is a 1992 **compilation**, not studio albums. Other sources list some original 1979 titles as 1980 because territorial pressings differ; use **1979** per Qobuz original ℗ and AllMusic. No unsupported sample/interpolation or direct artist-influence credits.

## Checks / unknowns

- No recorded exact drum-machine hardware across this batch. Synth instrumentation is well supported; no proven LinnDrum/TR-808/Fairlight claims.
- Sound comparison to Giorgio Moroder for *Pucker Up* is a critic's **sonic comparison**, not a quote from Greenberg identifying an inspiration; kept in `sounds_like` only.
- `voice` for *4* intentionally empty until sourced timbral evidence.
- `status=draft` on all rows; a second-person check and local TypeScript validation are still required. Instruments and production tokens checked against the live Fandome guide and repository type labels; scores are our proposals.
