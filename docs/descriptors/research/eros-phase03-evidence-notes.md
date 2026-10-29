# Eros Ramazzotti — phase 03: research notes

These notes document the judgments behind the four 27-column `draft` rows and distinguish primary personnel/edition credits from database tags, critical observations and editorial scoring. Always consult the album-specific source URLs in `eros_phase03_sources.csv`, and genre-level references in `eros_phase03_genre_evidence.csv`.

## 9 (2003)

**Release and language.** The 13-track Italian original is distinct from the separately marketed Spanish recordings. The artist discography confirms the programme. The Qobuz original-label credits and original CD pressing identify **Eros Ramazzotti and Claudio Guidetti** as producers and **Celso Valli** as co-producer. Valli is also responsible for strings and parts of the keyboard orchestration. All three are valid producer credits rather than a generic guess from arranger credits.

**Genres.** Contemporary *Suono* identifies melodic pop-rock. The original pressings use Soft Rock, while AllMusic attributes Italian Pop and Adult Contemporary; contemporary Rockol repeatedly describes a song-first ballad record. The lower-weight genre tail (`aor`, `europop`, `adultalternativepoprock`, `latinpop`) comes from music-database taxonomy, not claims that the Italian original is a Latin-rhythm record or alternative-rock album. Genre ordering deliberately privileges original-era descriptions over broad international classification.

**Instruments and production.** AllMusic's personnel and Qobuz track credits include Eros/Guidetti acoustic, electric and baritone guitars, piano, organ, Fender Rhodes/electric piano, bass and synth bass, drum kit, keyboard programming, bouzouki and mandolin, strings and violin. Guidetti and Eros are explicitly credited for drum programming; keyboard/loop programming appears for Max Costa and Michele Canova. Valli credited string arrangements. Do not add Fairlight, Autotune or Pro Tools without record-specific evidence. All eight numerical values are qualitative, with mood 2 for predominant reflective/breakup material, polish 5 for multistudio precision, experimental 0 for conventional pop songwriting.

**Sonic comparisons:** Richard Marx and Bryan Adams are editorial sound-alike pointers, not direct inspiration claims. `influenced_by` deliberately empty.

## Calma apparente (2005)

**Producers and format.** Rockol announced the October 28 original and discussed Eros producing with Claudio Guidetti and Celso Valli contributing. AllMusic calls the three producers; label Qobuz track credits give actual producer roles, including Valli (some tracks). The source notes specify that not every person produced every track. The Anastacia bilingual duet makes Italian and English the original recording's two singing languages; the entire album should not be tagged Spanish merely because a parallel Spanish edition exists.

**Sound and genre.** Original CD style classification uses Soft Rock / Pop Rock / AOR. AllMusic uses Italian Pop, Adult Contemporary and Adult Alternative Pop/Rock. MusicBrainz broadens to Pop, Ballad and Europop. `europop` here is classification and last place, **not evidence of dance production across all songs**. Lyrical themes are associated with original songs and Sony Legacy's retrospective, and the arrangement texture balances guitars, keyboards, band drums, string arrangements and drum programming.

**Production validation.** Album credits explicitly list **Pro Tools editing** by Guidetti, Bignardi, D'Agostino and Canova. AllMusic identifies E-Bow from Guidetti, and digital editing. `drumprogramming|programming|digitalediting|protools|ebow` is evidence-based. Generalized guesses about mastering devices and plug-ins were excluded. Bassists, drummers, keyboards, strings/violin and electric/acoustic/steel guitars/harmonica are supported by professional discographic credits. `confidence=medium` reflects thin detailed critical discussion, not doubt about the release.

## Ali e radici (2009)

**Original track-count conflict.** AllMusic's 2009 original is **11 songs**, ending with “Come gioielli”. Original CD marketplace entries agree. The modern `ramazzotti.com` discography lists **12** with “Linda e il mare”, which was initially a digital/iTunes bonus and later appeared on CD in the *Eros 30* reissue according to retrospective reporting. Use **11-track original** for main analysis, but preserve the version difference in the import note.

**Two sonic branches.** A May 2009 contemporary interview distinguishes a classic “Radici” component led by long-term collaborator Claudio Guidetti from more contemporary programmed “Ali” tracks with Michele Canova, documented as six Canova productions. A detailed AllMusic review identifies warm piano/strings and live rhythm sections alongside a conspicuous electro-rock track “Non possiamo chiudere gli occhi”, a symphonic-rock song “Bucaneve” and the title power ballad. Because these describe particular songs, `electrorock`, `symphonicrock`, and `powerballad` go at the END. Genre order continues to foreground album-level Pop Rock / Soft Rock and Italian Pop. `latinpop` and `adultalternativepoprock` are AllMusic labels and should be treated as less specific.

**Personnel.** AllMusic and original CD credits list acoustic/electric/slide guitars, bass, real drums, piano, Rhodes/Wurlitzer, Hammond organ, synths, percussion, Eros mandolin, London Session Orchestra and Paul Buckmaster string direction. The credited Michele Canova studio work explicitly mentions **rhythm/modular synthesizer programming**, hence `programming|modularsynth|stringarrangements`. It would be inaccurate to claim an identifiable vintage drum machine model; none is given.

**Attribution conflict.** Most sources agree on Eros Ramazzotti, Claudio Guidetti, Michele Canova Iorfida as producers, while **Paul Buckmaster** is a producer/credited co-producer only for a track subset (AllMusic says Producer in generic credits). Musicbase's original-CD-style transcription labels his co-production as *track 4*, while Qobuz lists it against *track 11*. These cannot be reconciled from the available evidence; the album-level producer inclusion is supported, the exact track is an import review flag. String arranger is confirmed independently.

## Noi (2012)

**Release and editions.** Universal Music Italy's **13 November 2012** press release is primary evidence for the 14-track Italian original, label transition, producer Eros with Luca Chiaravalli, and exact thematic intent. The international editions differ at “Io sono te” spoken passage: actor **Giancarlo Giannini** for Italian, **Andy Garcia** for international and Spanish. This is version-specific spoken narration, not proof of a voice on every song. Original “Fino all'estasi” features Nicole Scherzinger singing English, making `it|en` appropriate. *Somos* is a separate Spanish-language counterpart and intentionally not a second row.

**Genre and guest scope.** The first three broad genre tags (Pop Rock, Soft Rock, Italian Pop) reflect 2012 physical-release styles, MusicBrainz metadata and AllMusic. `ballad` identifies the strong album-wide ballad component and original pressing classification; `pop` is confirmed by Universal's digital label. Club Dogo's explicitly described RAP section on “Testa o cuore” merits `rap` genre in the *last* position and `rap` in the voice field, rather than falsely changing the entire album to hip-hop. Other guests include Hooverphonic and Italian classical-crossover vocal trio Il Volo (the latter justifies `choral` voice texture, but not album-wide operatic genre). Spoken word is from one song only.

**Production and instruments.** Universal specifically gives producer Eros Ramazzotti with Luca Chiaravalli, while Jeremy Wheatley is *mixing* collaborator, not an album producer. Session-musician transcriptions list electric/acoustic guitars, bass, drums, piano, electric piano, keyboards, organ, synth, strings/violin, saxophone, flute, trumpet and trombone. Because recording method/equipment wasn't verified with primary enough support, the row `production` is **empty** rather than generic studio-technique guesswork. No autotune claim. Original Italian label release explicitly explains the songs' love, friendships, family, social equity, remembrance and self-definition themes; the positive/upbeat mood score should not be applied to each track individually.

## Cross-cutting editorial rules

- All `genres` are attributable to album sources. Individual-track subgenres appear after dominant album genre tags.
- Sourced instruments/production and producers are kept separate; executive producers, sound mixers, guests, string arrangers without actual production credits are not added as album producers.
- `sounds_like` comparisons are our editorial suggestion only. **Album-specific influenced_by stays empty** (none demonstrated by sources).
- Eight scales are estimates from the evidence and are not factual measurements. All rows remain `draft` pending human approval; medium confidence reflects mixed original/retrospective evidence.
- No live, retrospective hits, remix set or Spanish parallel editions are included.
