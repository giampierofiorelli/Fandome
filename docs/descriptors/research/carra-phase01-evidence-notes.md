# Raffaella Carrà — Phase 01 replacement: album-by-album / song-by-song evidence

**Read first.** This is a corrective replacement of the original phase 01, NOT a new phase 05 or extra album release. Exactly the same four IDs exist in the `descriptors` branch. Replace their existing rows by `album_id` only; do not append, duplicate, or overwrite later phase 02–04 rows.

## Method and uncertainty

- Every original recording listed by the official Carrà archive has a separate line below. Album genres include documented minority genres, even one-song repertoire styles. Source and scope sit next to every genre in `carra_phase01_genre_evidence.csv`.
- **Crucial**: `repertoire origin` (known genre of an original composition), `source description of the Carrà recording`, and `instrument/arranger credits` are different grades of evidence. A folk source piece may be radically reworked in orchestral pop; a cover is not proof of musical influence or identical instrumentation.
- `reggae` is intentionally NOT in the 1971 debut genre list: despite the title *Reggae Rrrrr!*, one available song account describes it as closer to funky music. `funk` is supported at least at track level. The exact sonics need original recording inspection.
- Genres in album rows describe the set of styles present or traceable across the songs, not every song simultaneously. Some lower-confidence genre assignments are admitted because they retain important musical diversity; treat the evidence strength in the genre audit as a condition for recommending by that feature.
- No album-specific expert endorsement of influences, so `influenced_by` stays empty; covering Don Covay, Bacharach, Peret, the Rolling Stones or Luiz Bonfá is NOT evidence that those performers influenced Carrà’s arrangements.
- No source-auditable album-wide electronic ranking for 1971–72: `electronic` remains blank. On 1973 LP original sleeve transcription lists ARP and VCS synthesisers plus electric piano; `electronic=2` is an editorial low/modest estimate, not proof of electronic-music genre.
- Genre provenance is not always direct sonic evidence, particularly **folk, sonjarocho, easylistening, ballad, soul and standards**. Need listening/qualified analysis to promote to verified performance tags. Import with the accompanying uncertainty retained.
- Scales remain coarse editorial judgements of entire records. `energy`, `mood`, `tempo` and `groove` are not measured BPM or dynamics. Specifically do not assign album-level scoring from only Tuca Tuca or the rock medley.
- Arrangers are not producers: Paolo Ormi and Franco Pisano are not placed in `producers`. Qobuz credits Gianni Boncompagni as producer (on individually credited recordings); Roberto Formentini as project coordinator. Some LP-level archives instead name Formentini as producer: original sleeve should arbitrate. No speculative producer additions.
- Date dispute for debut: official 04/1971; RAI retrospective sometimes 1970 (the singles and Canzonissima year). Preserve catalogue 1971. `Senzarespiro` is a purposefully fabricated concert *recorded in studio*: preserve `type=studio` despite some live listings.
- Source metadata for some originals differs (e.g. La samba di Orfeo publisher; Borriquito and La Bamba original stylistic traditions); do not infer exact guitars, rhythms, timbres, or accents just from inherited genres.

## Raffaella (1971) — RCA PSL 10498
**Album-level proposed genres:** `pop|funk|soul|folk|ballad`. **Producer:** Gianni Boncompagni. **Confidence:** medium.

| Original-LP track | Music / form / song origin | What is established, and what remains uncertain |
|---|---|---|
| Chissà chi sei | soul/funk repertoire; Carrà rewriting of Don Covay Sookie Sookie | Treccani explicitly traces soul-funk original; confirmed original record and Italian reworking; not proof of identical arrangement. |
| Conta su di me (Footprints in the Moon) | pop cover; subgenre unverified | Sony credits identify original and Ormi orchestra but provide no sound analysis. |
| I Say a Little Prayer | Bacharach pop standard; soul repertoire connection | Original song recorded by Warwick and Franklin; Carrà recording-specific soul sound not established. |
| TOP | international pop adaptation; sound unverified | Qobuz identifies Oscar Harris and Frank Smith authors; no justified extra genre. |
| Pensami (Who Are We) | James Last melodic pop adaptation; arrangement unverified | Qobuz composer and arranger metadata only; easy listening as actual recording remains unproven. |
| Ma che musica maestro | orchestrated television theme; march-like pop | Hit Parade Italia calls it a marcetta; official RCA identifies Pisano orchestra and backing choir. |
| Dudulalà | adapted South African traditional/folk theme; children chorus | Original 1971 single documentation names folk theme and I Monelli; avoid adding afro as performance claim. |
| Non ti mettere con Bill | variety pop; rhythmic subgenre unverified | Official RCA singles and Qobuz identify Pisano; do not infer rock or funk. |
| If I Give My Heart to You | sentimental pop standard / ballad repertoire | Doris Day recorded classic 1954 version; Carrà recording treatment unverified. |
| Reggae Rrrrr! | funk-leaning dance novelty; NOT confirmed reggae | Available song-specific account explicitly says funkier than reggae despite title. |
| Domenica non è (Hum a Song) | international popular song adaptation; style unknown | Qobuz composer Richard Ross and Ormi orchestra; no secure further style diagnosis. |

**Eight-scale reasoning:** Energy 3, tempo 3 and groove 3 reflect alternation of full band dance novelties and calmer covers; mood 4 is variety-positive but not uniform. Theatrical 4 follows television stage material; experimental 1 and polish 3 are conservative, not independently measured. Electronic unknown.

**Album-wide critical limits:** Treccani specifically describes Sookie Sookie as soul-funk; it does not claim every Carrà arrangement is soul. Song Reggae Rrrrr! is described as funkier than reggae, unlike the misleading title. Historic original genres are tagged only at song level.

## Raffaella Carrà (1971) — RCA PSL 10518
**Album-level proposed genres:** `pop|dancepop|rumba|ballad|easylistening|childrensmusic`. **Producer:** Gianni Boncompagni. **Confidence:** medium.

| Original-LP track | Music / form / song origin | What is established, and what remains uncertain |
|---|---|---|
| Tuca Tuca | choreographed dance novelty / dance-pop | Original single and Canzonissima performances documented; do not retroject later disco. |
| Raindrops Keep Fallin’ on My Head | Bacharach/David song standard; potential easy listening | Sony credits confirm Ormi orchestra, original composers; exact sonic character not examined. |
| Vi dirò la verità | original Italian pop; subgenre unknown | Original Franco Pisano and Boncompagni writers; orchestral performance context only. |
| Maga Maghella | children-oriented song / TV character theme | Explicitly created for Canzonissima children segment; cannot generalize this style. |
| Close to You | Bacharach/David standard / easy-listening repertoire | Song identity confirmed; Carrà interpretation might differ substantially from Carpenters. |
| Chissà se va | Canzonissima television pop dance theme | Label metadata and show documentation; no invented funk/disco. |
| Perdono, non lo faccio più | Italian song / pop | No independent specific genre label; stylistic reading held at generic pop. |
| Papà | sentimental family song, vocal with backing chorus | Lyric and composer Boncompagni; rhythm and instrumental specifics not independently sourced. |
| Borriquito | Catalan rumba heritage, originally Peret | RTVE identifies Peret and rumba catalana; do not claim Carrà uses Peret guitar technique. |
| E penso a te | Battisti/Mogol relationship ballad / Italian pop | Composer and lyricist confirmed; soft/slow interpretation not verified directly. |

**Eight-scale reasoning:** Energy 3, tempo 3 and groove 3 balance Tuca Tuca and Borriquito against reflective Papà, E penso a te, Close to You and Raindrops. Mood 4 and theatrical 4 reflect television performance context; experimental 1 and polish 3 are conservative. Electronic unknown.

**Album-wide critical limits:** Peret is a rumba catalana reference, but no reliable isolated Carrà arrangement critique was located. The Bacharach compositions do not alone prove soft rock or lush easy listening, so associated tokens are low confidence. Childrensmusic refers only to Maga Maghella.

## Raffaella... Senzarespiro (1972) — RCA PSL 10537
**Album-level proposed genres:** `pop|italianpop|dancepop|soul|rnb|rumba`. **Producer:** Gianni Boncompagni. **Confidence:** medium.

| Original-LP track | Music / form / song origin | What is established, and what remains uncertain |
|---|---|---|
| Ma che sera | Italian stage variety-pop | Boncompagni composition in official original album; specific groove unknown. |
| Where Did Our Love Go | Motown / Supremes soul cover | Classic Motown identifies 1964 original; Carrà recording criticised but no arrangement analysis. |
| Harraff! | instrumental studio interlude | Track-specific discographic metadata names instrumental Paolo Ormi piece. |
| Presentazione orchestra | spoken introductions and orchestra riffs | Official original tracklist identifies separate riffs; spoken sections distinguish lead voice. |
| Sensazionale | show-stopper / Italian pop | Boncompagni original stage song; no defensible narrow genre. |
| Accidenti a quella sera | Italian popular song / performance piece | Documented 1972 single, no independent style label. |
| Fantasia (medley) | multiple earlier styles; Peret rumba element | Contains Ma che musica maestro, Perdono, Tuca Tuca, Borriquito, Chissà se va; do not flatten to single dance style. |
| Tuca Tuca, sì | choreographed dance-pop reprise | Official catalogue explicitly identifies new version of Tuca Tuca. |
| She’s Lookin’ Good | Rodger Collins/Wilson Pickett soul / R&B repertoire | Original soul-dance recording; Carrà interpretation style not established. |

**Eight-scale reasoning:** Energy 4, tempo 4, groove 4 and theatrical 5: revue runs through concert simulation, orchestra riffs, crowd edits and a fast-moving medley, interrupted by interludes; experimental 2 relates to staged fake-live conceit rather than adventurous harmony. Mood 4 and polish 3 approximate the mixed material. Electronic unknown.

**Album-wide critical limits:** Contemporary retrospective criticism finds manipulated crowd ambience; official Carrà archive confirms a studio recreation. Motown/Supremes and Rodger Collins give soul context to two English covers, but no track-by-track arranger account establishes that the Carrà takes preserve their rhythm sections.

## Scatola a sorpresa (1973) — CGD 69048
**Album-level proposed genres:** `pop|rockandroll|rock|twist|liscio|waltz|pasodoble|march|polka|tango|sonjarocho|samba|showtunes|standards|latin|folk`. **Producer:** Gianni Boncompagni. **Confidence:** medium.

| Original-LP track | Music / form / song origin | What is established, and what remains uncertain |
|---|---|---|
| Conosci Frankie | popular song; no validated narrow genre | Song credits on album and no genre-specific reliable source. |
| Satisfaction (I Can’t Get No) | Rolling Stones rock composition | Original song rock; Carrà arrangement could differ; preserve track-level heritage. |
| Quando, quando, quando | Italian/international pop standard | Renis/Testa repertoire; Carrà recording arrangement unverified. |
| Rock’n’roll medley | rock and roll medley | Original disc itself calls it rock’n’roll: Miss Molly, Long Tall Sally, Tutti Frutti, Whole Lotta Shakin.’ |
| Romagna mia | Romagna liscio / waltz repertoire | Liscio museum and historical newspaper discuss Casadei original; Carrà genre proof is repertorial. |
| España cañí | instrumental Spanish pasodoble | Original SGAE publisher score explicitly uses pasodoble; discographic sources document instrumental. |
| Flick Flock (La marcia dei bersaglieri) | instrumental military march | Exact original title explicitly a march; does not imply militaristic lyrics. |
| Let’s Twist Again | twist song | Rock & Roll Hall of Fame establishes Checker original twist classic; Carrà cover on LP. |
| Tea for Two | Broadway show tune / standard repertoire | From No No Nanette; not proof that Carrà performed swing/jazz improvisation. |
| Rosamunda | Czech polka source | Radio Prague and composer Vejvoda work history; Carrà version unanalysed. |
| La cumparsita | instrumental tango repertoire | Classic Gerardo Matos Rodríguez tango; actual adaptation style unconfirmed. |
| La Bamba | Veracruz son jarocho / Latin folk repertoire | Smithsonian work genealogy; do not assume Carrà uses jarana/requinto. |
| Lola | 1920s-era popular standard; specific subgenre unresolved | No track-specific performed-genre or instrumentation criticism. |
| Bumba mama | 1973 Carrà popular-song original | No specific genre independently verified; refrain from extrapolating from song name. |
| La samba di Orfeo | instrumental samba composition | Based on Luiz Bonfá Samba de Orfeu; recording-specific samba percussion not sourced. |

**Eight-scale reasoning:** Energy 4, groove 4 and tempo 4 reflect the official dance-history revue, but four instrumental titles and variable traditional dance tempi prevent treating every track as high energy. Theatrical 4, polish 3 and experimental 2 are cautious interpretations; electronic 2 is anchored in ARP/VCS/electric-piano sleeve credits. Mood 4 is broad positive dance selection.

**Album-wide critical limits:** Liscio, waltz, pasodoble, polka, tango, son jarocho and samba name individual dance compositions or their source traditions. For several tracks the exact recorded rhythm cannot be established without qualified listening. Do not drop minority traditions or falsely transfer them to all fifteen tracks.

## Key corrections compared with original Phase 01

- `carra-raffaella`: formerly `pop`; now adds source-linked `funk`, `soul`, `folk` and `ballad` with mixed evidence grades and full eleven-track review. Added choral vocal evidence.
- `carra-raffaellacarra`: formerly `pop|dancepop`; now identifies the Peret rumba, ballads, Bacharach easy-listening repertoire and a specific children-oriented track. Producer conflict documented, no unsupported producer copied.
- `carra-raffaellasenzarespiro`: formerly `pop|italianpop|dancepop`; now retains Motown/soul and R&B context, Borriquito rumba within Fantasia and the spoken/instrumental staging. Live/studio qualification retained.
- `carra-scatolaasorpresa`: formerly `pop|rockandroll|twist|tango|samba`; now also notes Stones rock, liscio waltz, pasodoble, march, polka, La Bamba son jarocho, Broadway standard, Latin and folk sources; instrumentals and group overdubs retained.

## Source map
All referenced working URLs, evidence strength and what each actually supports appear in the source CSV. A downstream review should be able to reject any weak genre WITHOUT losing the track information here.
