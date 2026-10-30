# Pino Daniele — phase 01: evidence notes

Branch `descriptors`, inspected 30 October 2026. `pinodaniele` exists in `catalog.ts`; `seed.ts` has no Pino Daniele entry. `docs/descriptors` does not contain `pinodaniele.csv`, so no existing rows were skipped. The four existing album IDs are formed by the repository's `slug()` function, which removes punctuation/spaces/accents. *Terra mia* is absent from the catalogue and needs adding with `pinodaniele-terramia`.

## Method and scales

All eight integer scales use the current descriptor-guide anchors. They assess the **entire album** from the independent assessments cited, not genre averages: stronger live groove in 1980–81, restrained first two records, increasing ensemble clarity. This is a research proposal for second-person validation; the scoring remains interpretive, not credited factual metadata. `electronic` 1–2 means primarily played instruments with some amplified/electronic keyboards, **not** drum machines or sequencers. No album-wide effect or specific hardware is added without a source. Unverified production techniques are intentionally left blank. `voice` left empty when sources did not clearly characterize the album's singing.

## Terra mia (1977) — `pinodaniele-terramia`

**Sound/genres.** OndaRock describes a new Neapolitan song built from traditional melody, blues, social narration and a tarantella/blues hybrid named *tarumbò/taramblù*; AllMusic describes the latter mix, including rhumba. Rockol's 2026 essay specifies dry folk-blues guitar, acoustic/jazz drums, piano and Neapolitan tradition for the first two LPs. `tarumbo`, `canzonenapoletana`, and `folkblues` need adding as genre tokens. Italian pop is sourced to AllMusic's album-specific styles. Jazz is a documented texture rather than the primary idiom.

**Personnel.** Official credits explicitly list guitar, mandolin and mandola (Pino), drums and percussion (Rosario Iermano, Roberto Spizzichino), bass and double bass (Rino Zurzolo, others), piano (Amedeo Forte), brass (Enzo Avitabile). OndaRock documents oboe (Luca Vignali) and the added string section on 'Napule è'. `stringarrangements` therefore records only this central song, **not** an assertion about the rest of the album; Antonio Sinagra arranged that song but is **not** a producer. Claudio Poggi is credited producer.

**Scales.** Energy 2, tempo 2 and groove 2: varied storytelling numbers and largely acoustic pulse; mood 2: socially angry and melancholy with some light and humorous songs; experimental 2: unusually fused language/idioms in conventional songs; polish 2: modest-budget first studio production; electronic 1: primarily played acoustic/electric instruments; theatrical 1: intimate, non-declamatory lead delivery, as described by Sinagra. Voice `soft` is supported by Sinagra's description of restrained, non-shouted singing.

**Lyrics and landmark.** OndaRock identifies urban social criticism in ''Na tazzulella 'e cafè', characters, irony and city nostalgia. Daniele's own note associates the album with generational social protest. OndaRock explicitly treats the debut as changing the norms of Neapolitan song: landmark 1 (independent assessment). The artist's album note names Luigi Tenco as a direct songwriting aspiration, hence `influenced_by=Luigi Tenco`. Other broad early influences remain in phase-one metadata, not automatically in the album cell.

## Pino Daniele (1979) — `pinodaniele-pinodaniele`

**Sound/genres.** Rockol calls this album more electric blues. OndaRock identifies the Napoli Centrale blues/rock and jazz-rock vocabulary, domestic storytelling and a samba on 'Chillo è nu buono guaglione' (last in genre list: one track of 12). SentireAscoltare discusses the funk-blues crossover, but its full text was intermittently inaccessible; medium confidence and no unsupported substyles. AllMusic supplies the album-specific Italian pop category. `canzonenapoletana` is grounded by Rockol's treatment of the first two LPs.

**Personnel.** Official credits: all guitars, mandolin, mandocello, harmonica and two bass performances by Pino; drums Marangolo/Jermano/Milano; Senese sax; Zurzolo bass/double bass; Jermano vibraphone and percussion; Cicco/Potter congas; keyboard/piano musicians. Independent Napoligrafia identifies **electric piano** on specific tracks; `electricpiano` supplements, does not replace, official `piano`. `mallets` is vibraphone, per token mapping. No named model or processing confirmed, so production field is empty.

**Producers — uncertainty.** Artist official discography explicitly says **'Recordings Produced by Marcello Todaro'** and lists Jermano's collaboration on three tracks. Some secondary lists credit Willy David instead. We prioritize the album's official reproduction of production credits. Do not turn Jermano's 'collaboration' into formal co-production. Recheck a scan of the first-press LP before assigning Willy David.

**Scales.** Energy 3 and groove 3 follow the driving 'Je so' pazzo' with gentler numbers; mood 3 from defiant versus tender songs. Tempo 3; polish 2 follows Rockol's low-compression, small-band portrait of the first two records; experimental 2 for fused blues/Neapolitan traditions; electronic 1 from primarily played instruments; theatrical 2 for some extroverted delivery without theatrical staging. No confidently sourced voice token. OndaRock calls the 1979 release a stylistic turning point, so landmark 1, but confidence medium due to disputed production credit.

**Links.** Miles Davis/Weather Report references in OndaRock describe the musician's accumulated jazz-rock vocabulary, without a verified explicit *album-specific* influence statement by Daniele or his producers; no influence links inserted. None of the named social-song contemporaries are sonic `sounds_like` evidence.

## Nero a metà (1980) — `pinodaniele-neroameta`

**Sound/genres.** OndaRock expressly describes jazz-rock phrasing linked to local melodies. Rockol's album review says 'A me me piace 'o blues' is actually funk, and discusses several slower blues pieces. Rockol 2026 hears a more focused bass/drum/percussion rhythm section and modern crisp definition compared with the first two LPs. Jazz and Italian pop documented elsewhere are subordinate to blues/funk/Neapolitan composition.

**Personnel.** Official: Pino guitars, Senese sax, Marangolo and Spina drums, De Rienzo and Mercurio bass, Vitolo keyboards, Jermano/Cercola percussion, Potter congas, De Filippi harmonica; Avitabile backing vocals (not a lead-voice type). No synth model is stated.

**Producers and effects.** Official credits say 'Produced by Pino Daniele and Marcello Todaro with collaboration of Gigi De Rienzo and Rosario Jermano'. An independent pressing-derived listing refers to the latter two as co-producers; the two roles are not identically documented. Keep the clearly credited two producer names, record the conflict and flag for Claude to inspect an original sleeve. OndaRock mentions **talk-box** on 'Nun me scoccià'; Rockol's separate review describes a **wah-wah pedal** on the same song, so we leave **both** out of production rather than assign the contested effect. Clear studio sound is not proof of any specific equipment or effect.

**Scales.** Energy 3: slow ballads and assertive funk; groove 4: extensive bass/drums-led rhythmic hooks; mood 3: 'Quanno chiove' and contemplative songs contrast 'A me me piace 'o blues'; electronic 2 because electric guitar and keyboards coexist with live rhythm; experimental 3 for unconventional idiom mixture; polish 3 with Carimate's clearer mix; tempo 3; theatrical 2. Rockol and OndaRock independently describe the third album as the national commercial/artistic breakthrough and a transformed band sound: landmark 1.

**Links.** OndaRock's mention of Dylan and other named cantautori is contextual/comparative *lyric writing*, not sonic resemblance or the artist declaring musical influences. `sounds_like` and `influenced_by` are blank.

## Vai mò (1981) — `pinodaniele-vaimo`

**Sound/genres.** OndaRock documents a complete band synthesis of jazz, folk, funk and black rhythm, with 'Viento 'e terra' termed fusion. Rockol explains why this represents the fullest expression of Neapolitan Power. The disc has rhythmic tracks ('Yes I Know My Way', 'Ma che te ne fotte', 'Ma che ho') and short mournful pieces ('Sulo pe' parlà', 'È sempe sera'). A swing flavor is directly named for 'Un giorno che non va' (one song only, placed last).

**Personnel/producers.** Official credits state Daniele (guitar/vocal), Senese (sax), De Piscopo (drums), Esposito (percussion), Zurzolo (bass), Amoruso (piano/keys), Forte (trombone); OndaRock also specifically lists Amoruso's melodica and Zurzolo's double bass. The official three producer credits are **Willy David, Pino Daniele, Totò Iacobone**. Allan Goldberg is separately credited for recording production, keyboard arrangements and engineering, so excluded from the primary `producers` list under the specified distinction. No specific machine or processing stated.

**Scales.** Energy 4, groove 4: band-driven syncopation with contrasting slow numbers; mood 3: celebratory hit songs and pieces about loss or alienation; tempo 3; electronic 2 from piano/keys but acoustic rhythm section; polish 3 and experimental 3 for elaborately blended jazz-funk style; theatrical 2 because no overt large-scale staging evidenced. Vocal type left empty.

**Similar sound.** OndaRock explicitly compares the *intro* to 'Ma che ho' with **The Police's 'Canary in a Coalmine'**, originally on *Zenyatta Mondatta*. This is a one-song sonic comparison out of the original 11, encoded `The Police (Zenyatta Mondatta) [1/11]`. It is **not** an influence. No other artist name is inserted based on guests, friends, or broad scene peers.

**Landmark.** OndaRock calls the record a creative watershed; Rockol identifies it as the peak of Neapolitan Power, satisfying an independent change/defining-sound criterion. It isn't marked 1 simply because of chart performance.

## Discography/edition caveats

* Full studio-audit list and catalogue statuses are in `pinodaniele_phase01_catalog-audit.csv`; MusicBrainz's release-group list and OndaRock/Rockol's discographies were reconciled. The catalogue currently has just four early titles. Later titles in the audit are **not described** in this phase.
* *Sotto 'o sole* (1991) has newly recorded reinterpretations and new film songs. Despite being referred to as an anthology by one review, the official artist credits document new studio sessions. It is classified **studio** pending edition verification, per project rule on rerecordings.
* *Boogie Boogie Man* (2010) includes rerecordings and covers and is retained for later verification as a separate studio project.
* *Common Ground* (1983) is billed to Richie Havens, with Pino Daniele credited as producer/co-writer/musician. It should **not** be duplicated as a Pino Daniele solo or co-billed release unless original billing says both. See https://pinodanieleonline.com/collaborazioni and https://www.allmusic.com/album/common-ground-mw0000845901.
* Soundtrack songs for Troisi's films are not automatically full soundtrack albums. Live albums, best-of and compilations are excluded per instruction.
* Note possible typographic spelling of `Vai mò` in the existing catalogue versus `Vai mo'` on album sleeves; title and ID in this ZIP preserve existing catalogue spelling exactly.
