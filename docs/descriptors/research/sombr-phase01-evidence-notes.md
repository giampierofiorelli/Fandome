# sombr — Fandome Phase 01 evidence notes

## Editorial scope and identity

Only **two eligible releases** are documented through 26 October 2026: the September 2023 eight-track **EP** *in another life*, and the August 2025 ten-track **studio album** *I Barely Know Her*. Several 2026 songs are singles, not another album. The artist already exists in `catalog.ts` as `sombr`; only the 2025 album is currently present there. Explicit EP designation: MusicBrainz release group. Sources are joined by album_id in the CSVs.

## 1. in another life (2023) — sombr-inanotherlife

**Status / confidence:** `ep`, `medium`. Apple Music and Qobuz list this as eight tracks, while MusicBrainz specifically labels it EP. Do not classify as an eight-track studio album merely because the stores group albums and EPs in one view.

**Album-specific musical evidence:** Apple Music gives Indie Rock; Qobuz lists Alternative & Indie, Pop/Rock and Rock. MOOD's reporting places the EP in indie pop, identifying the electronic character of “why are we like this” and the lush arrangement of “ivy.” Album of the Year's album-specific *Alt-Pop / Downtempo / Alternative Rock / Singer-Songwriter* labels are lower-authority metadata: not a replacement for critic consensus. Each appears with qualified scope in genre_evidence.csv. Do not infer shoegaze, dream pop or folk rock from individual readers' comparisons.

**Eight numeric ratings (album-level editorial judgments against Fandome anchors):**
- `energy=2`: mainly subdued and introspective passages despite bursts of live rhythm section, per EP personnel and MOOD.
- `electronic=2`: documented synths/keyboards and electro-laced production sit alongside clearly credited guitars, piano and drums.
- `mood=1`: romantic anxiety, yearning and strained relationships outweigh bright moments.
- `theatrical=2`: emotive delivery remains relatively close and personal rather than arena-scale.
- `experimental=2`: electronic textures and changing arrangements but conventional melodies and songs.
- `polish=3`: Warner-era sessions, multimusician lineups and strings make the result developed rather than raw demos.
- `tempo=2`: mixed restrained and midtempo arrangements rather than sustained uptempo rock.
- `groove=1`: even electro-touched songs do not constitute a dance album.

**Voice / lyrics:** soft and clear vocal delivery with moments of more powerful emphasis. `heartbreak|love|introspection|identity` is broad editorial abstraction from the song titles and artist's profile. Do not claim particular lyrical storylines without lyric/artist verification. English throughout.

**Instruments:** Qobuz original eight-song credits document sombr, Tony Berg and session players on guitars, bass, drums, acoustic/electric-like guitars (the source simply specifies *guitar*, so electric/acoustic split has to be approached cautiously), piano, keyboards, synthesizer, strings (Rob Moose), Nate Walcott's trumpet on “burner phone”, and marimba by Will Maclellan on “ivy”. Map marimba to approved `mallets`, while documenting the instrument precisely here. Because the credits say only **guitar**, the descriptor uses `guitar` rather than inventing acoustic/electric subtypes. No named hardware or studio effects verified for this EP; **production cell intentionally blank**, not an omission.

**Production credits:** sombr and Tony Berg co-produce the tracks per Qobuz; Bob Ludwig is mastering, Will Maclellan mixing/recording and **not** an album producer. Collaborating players are not producers.

**sounds_like vs influenced_by:** The similarity links are editorial, not a factual account of influences; *influenced_by* remains blank because statements by sombr about Radiohead, Jeff Buckley and other influences were generally made in relation to his upbringing or 2025 album, not definitively to this 2023 EP. Marked as an editorial choice.

**Critical difference:** Qobuz stores call the release an “album”; MusicBrainz release-type EP takes precedence. Online user reviews offer contrasting genre analogies; they were deliberately not elevated to high-confidence evidence.

## 2. I Barely Know Her (2025) — sombr-ibarelyknowher

**Status / confidence:** `studio`, `high`. Warner Records, Official Charts, MusicBrainz, Qobuz, Apple and specialist critics agree on 2025 original release and 10 tracks. The 2025 LP/CD manufactured release dates do not replace the original **22 August 2025** date.

**Album-wide genres vs local textures:** Apple and Dork describe Indie Rock, AllMusic Alternative/Indie and Contemporary Singer/Songwriter; NME notes indie pop, big pop-rock, rock, and genre variation. `disco`, `newwave`, `synthpop`, `funk` only scope **“12 to 12”**, supported by NME and the direct MusicRadar/Mix with the Masters interview. `country` only refers to “dime”; `glamrock` to “under the mat”. Their presence in the pipe list does **not** imply the album primarily belongs to those styles. `altpop` is a broad classification of modern pop-facing indie, editorially mapped from Pitchfork rather than an explicitly named genre by that publication.

**Eight numeric ratings:**
- `energy=3`: mix of subdued heartbreak ballads and driving, euphoric singles; not an all-out hard-rock record.
- `electronic=2`: rhythm programming, synths and a Korg workstation coexist with prominent actual guitar/bass/drums; one disco single must not dominate the rating.
- `mood=2`: grief, vulnerability and nostalgia dominate lyrics despite brightly arranged “come closer” and “12 to 12”.
- `theatrical=4`: big soaring choruses, high emotional pitch and arena-oriented arrangements, confirmed by NME, Apple and Pitchfork.
- `experimental=2`: some sonic variety (disco/new-wave/country accents) within accessible pop songwriting.
- `polish=4`: professional large-studio co-production, dense harmonies and substantial live-band layering, not early bedroom-demo quality.
- `tempo=3`: more balance of midtempo and upbeat tracks than the earlier EP.
- `groove=3`: the disco rhythm and lively indie cuts matter, offset by slower reflective material.

**Voice and lyrics:** prominent, dynamic lead vocals, softer verses, stronger belts and occasional distorted/raspy character; Pitchfork explicitly identifies saturated opener and multi-part choruses, Apple describes lightly distorted voice. Lyrical topics: heartbreak, love, introspection, identity, old New York memories and storytelling; sarcasm in “Dime” confirmed by the artist to i-D. Main singing language English.

**Instruments:** Qobuz track-by-track licensed credits identify lead guitar, bass, drums, piano, keyboards/synths, percussion, cello (“canal street”), and Mason Stoops on **autoharp** (“we never dated”). Because the guide says record documented instruments not in the list, `autoharp` must be added to `src/data/instruments.ts`. Exact guitar subtypes are not consistently given in source credits, so this descriptor uses the source-exact instrument token `guitar`.

**Production techniques:** `layeredvocals` (polyphonic choruses per Pitchfork and NME), `distortedvocals` (lightly distorted/saturated vocals in Apple/Pitchfork), `programming` (Qobuz's credits), `drumprogramming` (four-on-floor demo loop of “12 to 12”), `springreverb` (Pitchfork specifically notes on “undressed”), `korgtriton` (Sombr's direct testimony on “12 to 12”, reported by MusicRadar). No `overdubbing` tag is added because an explicit engineer statement is lacking. The gear model is supported for one track, not the whole album's every piano sound. The Korg Triton is a keyboard/workstation, not a stand-in for all synth sounds. Add `korgtriton` to production vocabulary, never to the instrument list.

**Production credits:** *sombr* is producer of all 10 tracks, *Tony Berg* co-produces 8 (MusicBrainz/Qobuz; 2024 “back to friends” and “we never dated” credit sombr alone). Shawn Everett/Rich Costey are mixers, not producers. Wendy Melvoin is an actual session **bassist** on “12 to 12” and some other tracks: her role with Prince does not make Prince a guest performer. Source is MusicRadar interview plus licensed Qobuz credits.

**Influence versus sonic likeness:** sombr directly describes current listening to Radiohead, Jeff Buckley, The Rolling Stones, Bob Dylan, Prince and Phoebe Bridgers in an i-D interview ahead of the album; GRAMMY's album interview specifically frames Buckley/Prince/Rolling Stones as inspirations. These fit `influenced_by` but do **not** prove one-to-one influence on every song. Pitchfork independently compares the sonic results with Neighbourhood, Del Water Gap, Wallows, Foster the People and Mazzy Star; those are `sounds_like`, **not** verified authorial inspirations. Critical disagreement: NME praises variety and vitality, whereas Pitchfork questions lyrical characterization and perceived derivativeness. Preserve both; don't convert aesthetic opinion into fact.

**Landmark:** one studio album as of Oct 2026 and breakout release, therefore `1`. The 2023 EP gets `0` as a non-defining early document, without reducing its musical value.

## Source hierarchy and limitations

Release/type: MusicBrainz and Warner, original metadata. Producer and instruments: Qobuz track credits, cross-checked with MusicBrainz. Genre/sonic characteristics: Apple, AllMusic, Pitchfork, NME, MOOD; fan tags at weaker evidence strength. Scores are Fandome's own listening-oriented *editorial judgments anchored in album-specific sources*, not measurements. Specific audio synthesis machine: Korg Triton on “12 to 12” only. No verified DAW/software **used for these particular sessions**: do not invent Ableton, Logic or GarageBand tags simply because sombr knows those platforms.
