# Geolier — musical evidence notes, phase 01

**Research cutoff:** 2026-10-24. **Scope:** four original studio albums, each represented once. No prior artists or batches included.

**Source policy.** Reviews by named music critics and producers' testimony are used for sonic/thematic judgments; official label and store metadata for dates/credits. These integer 0–5 descriptors are **our editorial assessments**, not independently measured facts. The numbers are not derived from one single or remix. Conflicting criticism is preserved. Source URL for each observation is also in `geolier_phase01_sources.csv` and `geolier_phase01_genre_evidence.csv`. `status=draft`, not peer reviewed.

## 2019 — Emanuele (`geolier-emanuele`)

Original **16-track** BFM/Island/Universal release on 2019-10-10, confirmed by Universal Music. Riccardo Primavera's signed Rockol review (2019-10-21) analyses contrasts between hard/dark street tracks (e.g. Yacht), melodic romance (Na Catena, Vogl Sul A Te), introspective material and the Latin-inflected Como Te. Dat Boi Dee is explicitly confirmed as artistic director and principal producer. Genre order: `hiphop|trap|latin`, with **latin supported by one track, not an album-wide prevailing style**.

- `energy=4` (intense rap contrasted with more relaxed songs); `mood=2` (dark and introspective but contains love songs); `electronic=4` (trap/beat-driven original, estimate not instrument census).
- `theatrical=2` (direct autobiographical delivery); `experimental=1` (stylistic variations within conventional hip-hop forms); `polish=4` (producer-led professional contemporary production).
- `tempo=3`, `groove=3` reflect a mixed album: neither purely dancefloor nor slow ballads; **medium-confidence editorial estimates**.
- `voice=rap`, lyrics `storytelling|love|introspection|identity|social` (themes demonstrated by named examples in review).
- `producers` has **only verified principal** Dat Boi Dee; other named personnel not imported without reliable record-level producer evidence.
- `language=it` is an ISO-639-1 schema compromise: **the album is overwhelmingly in Neapolitan**, per Rockol. The dialect is not accurately conveyed by two-letter `it`; Claude should preserve `nap` in a future language model if permitted, rather than treat Neapolitan as ordinary standard Italian.
- `landmark=1` represents a significant debut; `confidence=medium` reflects limited independent audio-detail sources.
- Sources: https://www.rockol.it/recensioni-musicali/album/8887/geolier-emanuele; https://shop.universalmusic.it/products/geolier-emanuele-vinile; https://www.qobuz.com/se-en/album/emanuele-geolier/d1rfq1ea1mdva.

## 2023 — Il coraggio dei bambini (`geolier-ilcoraggiodeibambini`)

Use the **6 January original 18-track issue**, not the subsequent Atto II. Antonio Silvestri (OndaRock) explicitly names **hardcore hip-hop, pop, trap** and characterizes the record as pop-trap with alternating classic rap, heavily Auto-Tuned trap and melodically accessible songs. SentireAscoltare and Newsic confirm that reading while disagreeing in their evaluations. The critic says some Italian appears among predominantly Neapolitan delivery; again `it` is a lossy format compromise.

- `energy=4` street and trap bangers with quieter tracks; `electronic=4` programmed trap with occasional played instruments; `mood=2` prison, neighborhood and hardship against sentiment.
- `theatrical=3` narrative street storytelling; `experimental=2` classic/modern balance; `polish=4` intricate professional beat craft; `tempo=3`, `groove=3` editorial assessments.
- Genres `hiphop|trap|trappop|poprap|hardcorehiphop|pop|latin`; **hardcorehiphop** is a *new* identifier. The `latin` tag belongs to track *Monday* (secondary), not the album as a whole.
- Producer evidence: Rapologia's attended album preview and direct information from Dat Boi Dee supports `Dat Boi Dee|Poison Beatz|Takagi & Ketra|Michelangelo|Daves The Kid` on original issue. Note the producer Daves may be styled differently in primary credits; Claude should verify normalized spelling.
- `influenced_by=The Notorious B.I.G.` is based on critic Claudio Cabona (Rockol) explicitly describing him as Geolier's guiding musical reference when discussing this album; separate this from collaborators and sonic comparisons. Because an album-specific creative influence is difficult to establish precisely, **Claude should review this edge** before public use.
- Dissent: OndaRock 6/10 and SentireAscoltare's skeptical account vs supportive Newsic and Rockol; disagreement concerns assessment of quality, not basic genre or tracks.
- Sources: https://www.ondarock.it/recensioni/2023-geolier-ilcoraggiodeibambini/; https://www.sentireascoltare.com/album/geolier-il-coraggio-dei-bambini/; https://billboard.it/interviste/geolier-racconta-il-suo-nuovo-album-il-coraggio-dei-bambini/2023/01/0698797/; https://www.rapologia.it/il-coraggio-dei-bambini-geolier-album/; https://www.rockol.it/recensioni-musicali/album/10793/geolier-il-coraggio-dei-bambini; https://www.newsic.it/recensione-geolier-il-coraggio-dei-bambini/.

## 2024 — Dio lo sa (`geolier-diolosa`)

**Critical catalogue correction: release date 2024-06-07. Fandome `catalog.ts` currently says 2025 — incorrect. Preserve the existing album ID and update `year` in the catalogue.** The source is an original June 10 2024 Rockol review of the 21-track original release. Do not confuse its later 2024 Atto II reissue or the Rockol Awards retrospective published in December 2025 with an original 2025 album.

- Claudio Cabona, Rockol, provides specific production credits for **all 21 original tracks** and a close reading of gospel (`Per sempre`), country (`Una come te`), Latin (`Bella e brutta notizia`), funk (`Una vita fa`), jazz flourishes (`6 milioni di euro fa`, `357`) and pop-melodic rap. The album-level rap/pop-trap identity is independently corroborated by Antonio Silvestri, OndaRock. Both critical views are represented despite a positive vs skeptical overall verdict.
- `energy=3`, `electronic=3` reflect a more varied record with live-sounding piano/guitar/bass and beats, not uniformly electronic; `mood=2`, `theatrical=3` from inward-looking narrative and moments of big emotional production; `experimental=3` stylistic breadth; `polish=4`; `tempo=3`, `groove=3` broad approximations.
- `voice=rap|soft` for substantial spoken/rapped sections and softer sung refrains (qualified inference); main vocal is rap. `lyrics=love|introspection|identity|storytelling|social` per Rockol's close reading.
- Producer list is **long because each name is explicitly named in Rockol's track-by-track review**; `Takagi & Ketra` remains one duo field. Normalization note: Rockol spells the producer "Poison Beats" on one track and "Poison Beatz" elsewhere; standardized `Poison Beatz` once. AllMusic/original track personnel should resolve uncertain `Cerul67`/`Sewsi` credits if needed.
- `gospel`, `country`, `latin`, `funk`, `jazz` are **individual-track influences**, not the dominant genre of all 21 tracks. Their scope is documented in the separate genre evidence CSV.
- Sources: https://www.rockol.it/recensioni-musicali/album/11105/geolier-dio-lo-sa; https://www.ondarock.it/recensioni/2024-geolier-dio-lo-sa/; https://www.newsic.it/recensione-geolier-dio-lo-sa/.

## 2026 — Tutto è possibile (`geolier-tuttoepossibile`)

Fourth original studio album **2026-01-16** (16 tracks on original Spotify release). `TUTTO È POSSIBILE – ATTO II` released **2026-10-16** and adds later material: it should be **edition metadata**, not blindly created as a fifth studio album. Contemporary Newsic describes the reissue as its own second act, while Billboard refers to a new chapter/expanded edition. Claude may optionally model a linked edition after checking requirements.

- Claudio Cabona, Rockol (Jan 16), identifies **Poison Beatz and Sottomarino** as primary producers and calls the 2026 set notably more introspective and melancholic. "Sonnambulo", "Olè", "Desiderio", "1h", "Canzone d'amore" and "Arcobaleno" are separately described. Alternative assessment: Diego Muleri, SentireAscoltare, finds the record too eager to cover several audiences; record the disagreement rather than prefer a single verdict.
- `energy=3`, `mood=2`, `electronic=3` (emotional/hybrid mix: synthesizers/drum programming alongside guitar, piano, strings and harmonica), `theatrical=3`, `experimental=2`, `polish=4`, `tempo=3`, `groove=2` are editorial whole-album estimates; source Rockol plus track personnel support the instrumentation distinction. **No audio BPM or quantitative synth percentage measurements were available.**
- Genres include `latintrap` (*Arcobaleno*, Anuel AA feature), `westcoasthiphop` (*1h*), jazz (*Desiderio*) and indie (*Canzone d'amore*), each explicitly **track-specific**. `latintrap` and `westcoasthiphop` are **new** identifiers. The tags `hiphop|poprap|trap|pop` describe the broader rap/pop crossover.
- The full producer list reflects documented Qobuz track personnel and critic source for the **original** tracks. **Warning:** a recently updated Qobuz URL displays a 20-track listing with additional Atto II songs; no names were taken exclusively from later-only songs, and the original 16-track reference is Spotify. If an exact producer is uncertain, Claude should reconcile with original release credits.
- `landmark=0` means no settled retrospective landmark status yet, **not** low quality.
- Sources: https://www.rockol.it/recensioni-musicali/album/11709/geolier-tutto-e-possibile; https://www.newsic.it/recensione-geolier-tutto-e-possibile/; https://www.sentireascoltare.com/recensioni/geolier-tutto-e-possibile/; https://open.spotify.com/album/5EKYDOBrlVJlvMGEgdgytB; https://www.qobuz.com/it-it/album/tutto-e-possibile-geolier/gd9c39pu801oh; https://billboard.it/musica/hiphop/geolier-annuncia-tutto-e-possibile-atto-ii/; https://www.newsic.it/recensione-geolier-tutto-e-possibile-atto-ii/.

## Recommended review priorities
1. Correct `Dio lo sa` from **2025 to 2024** in the Fandome catalog independently from CSV import.
2. Add *Tutto è possibile* (2026) under artist `geolier`, keeping the dynamic slug `geolier-tuttoepossibile`.
3. Add genre identifiers **hardcorehiphop**, **latintrap**, **westcoasthiphop** before running the repository validator.
4. Check exact 2019 and 2026 producer exhaustiveness against label credits (existing CSV includes positively corroborated names; empty cells are allowed).
5. Validate Neapolitan dialect support; existing two-letter language constraint forces `it` placeholder.
6. Confirm that song-level stylistic influences should be included in album-level `genres` as the current guide requires; evidence scopes are explicit.
