# Amy Winehouse — Fandome Phase 01: evidence and editorial judgments

Research completed 2026-10-25. Branch `descriptors`, read-only audit. Three new rows for Amy Winehouse (artist id `amy`): original UK studio albums 2003 and 2006, plus the 2011 archival compilation. No live albums. All scores 0–5 are **source-informed original editorial judgments**, not measured acoustic characteristics or published reviewers’ ratings. `status=draft` pending Claude second review. Descriptors are assessed for original full album, not singles or reissues.

## Identity, type and edition decisions

- `amy-frank` and `amy-backtoblack`: exact IDs derived from the **existing** entries in `src/data/catalog.ts`; do not change.
- `amy-lionesshiddentreasures`: proposed new catalogue entry, original title **Lioness: Hidden Treasures**, `compilation`, 2011. The official label/estate (L01,L02,L09) confirms 12 tracks selected from various 2002–2011 sessions. Despite promotional wording calling it her third album, it is NOT her third studio LP (L03,L04).
- **Not included:** *Frank* expanded US 2007 configuration and deluxe reissues; *Back to Black* 2007 deluxe and 20th-anniversary 2026 reissue; *Amy Winehouse at the BBC* / *I Told You I Was Trouble* live material; *Amy* film soundtrack and various greatest-hits collections. Source B08 documents anniversary distinction.
- Studio album catalogue has only two Amy entries. Check package **before** importing alongside any concurrent Claude edits.

## 2003 — Frank (`amy-frank`)

**Whole album:** `jazz|soul|nusoul|rnb|vocaljazz` lead, with adjacent `souljazz|jazzpop|contemporaryrnb|popsoul|hiphop`. `acidjazz` is *only* a qualified critic comparison (F08), not a whole-album claim. `nusoul` is the existing Fandome normalization for the sourced term *neo-soul*. F01/F02/F05/F06 establish the mixture, not a single genre. F05 is a secondary aggregation, weaker than signed reviews.

- `energy=2`: relatively relaxed jazz/neo-soul repertoire with expressive peaks rather than sustained driving intensity (F01,F02).
- `electronic=2`: live guitar, horns, piano and soul rhythm sections combined with hip-hop-inflected programmed beats, not primarily synthesis (F03,F04,F09).
- `mood=3`: heartbreak/relationship pain coexist with sharp humour and jaunty grooves; neither consistently depressive nor bright (F01,F02).
- `theatrical=2`: close-mic jazz-club intimacy with occasional bold dramatic vocal phrasing (F01,F06); editorial.
- `experimental=2`: fusion of jazz phrasing with hip-hop-informed rhythms is distinctive but familiar idioms predominate (F02,F08).
- `polish=3`: produced but not overwhelmingly shiny, with studio players and comparatively organic mixes (F03,F04).
- `tempo=2`: several leisurely ballads and mid-tempo grooves; NO BPM measurement; use with caution (F01,F02).
- `groove=2`: rhythmic R&B/hip-hop pulse on some titles, mostly not designed for the dance floor (F02,F03).
- `voice=raspy|clear|soft|powerful`: critics consistently describe strong contralto-like brassy expression, flexible jazz ornamentation, close intimate lines, and an expansive upper-range delivery (F01,F02,F06). Multiple descriptors capture dynamic variation; not a vocal-range measurement.
- `lyrics=love|heartbreak|introspection|irony|social|sensuality`: relationship scenes and heartbreak, direct speech, witty cultural/social sketches, and romantic desire (F01,F02); `social` based specifically on *Fuck Me Pumps* and remains peripheral.
- `sounds_like=Erykah Badu|Nina Simone|Billie Holiday|Lauryn Hill`: first two named as vocal/sound comparisons by F01; Holiday and Hill by F02 and retrospective reading; editorial sonics, not proven influences.
- `influenced_by=Sarah Vaughan|Dinah Washington|Thelonious Monk|Frank Sinatra`: first three are supported by Amy's comments on learning vocal delivery (F06,F07); Abbey Road explicitly names Sinatra as an important influence and the album title reference (F10). **Do not** infer influence simply from a critic's comparison to Erykah Badu or Billie Holiday.
- `producers` enumerates producers explicitly named for tracks in F03/F04/F09 and F05; some are track-specific. In particular `Amy Winehouse` is credited as a producer on *Take the Box* (F03/F04); `Jony Rockstar` is an additional producer. Verify secondary roles carefully before final review.
- `landmark=1`: substantial debut and origin of her distinct jazz/hip-hop identity despite its mixed contemporary reception (F01,F02,F08).
- **Edition caution:** Pitchfork's 2007 US review describes a modified sequencing; do not extrapolate that tracklist to the original 2003 UK version.

## 2006 — Back to Black (`amy-backtoblack`)

**Whole album:** soulful revival with contemporary R&B/neo-soul, vintage female vocal-group pop. `doowop`, `northernsoul`, `ska`, `reggae` are **documented by critics only as recurring / track-level references** (B02,B05) and must remain lower rank than soul/R&B. `jazz` is residual vocal phrasing (B03,B06), NOT a return to *Frank* jazz focus. `nusoul` normalizes *neo-soul*.

- `energy=3`: band-driven accents on *Rehab* and *Tears Dry on Their Own* against sombre ballads (B01,B02).
- `electronic=1`: primarily vintage live drums, horns, bass, guitars, pianos and analogue-style arrangements with little synthesis (B04,B07).
- `mood=1`: predominant themes of desolation, regret, isolation and romantic collapse **despite** several buoyant rhythms (B01,B02). Do not confuse groove with emotional valence.
- `theatrical=3`: girl-group orchestration and forceful delivery, sometimes dramatic, without all-song spectacle (B01,B06).
- `experimental=2`: vintage revival rebuilt with distinctly modern frank lyrical style and minor structural departures (B01,B02).
- `polish=4`: consciously worked Ronson/Dap-Kings and Remi arrangements, horns, strings and controlled recording (B04,B07); not a modern electronic glossy 5.
- `tempo=3`: predominantly mid-tempo swing with both slow heartbreak pieces and lively songs (B01,B02). Not a measured BPM summary.
- `groove=3`: recurring highly rhythmic Motown-style drums/bass, but never an all-club sequence (B02,B04).
- `voice=raspy|powerful|soft|clear`: B01/B02/B06 describe powerful, brassy, sometimes bruised timbre contrasted with vulnerable softer deliveries. Songwriting, not stage persona, determines the scale.
- `lyrics=heartbreak|love|introspection|irony|sensuality|identity`: relationship breakdown and bitter humour dominate; minor relationship and independence material (B01,B02).
- `sounds_like=The Ronettes|The Shangri-Las|Etta James|Lauryn Hill`: audibly defensible sonic/editorial comparisons based on contemporary critics and production idiom (B01,B02,B05). This is NOT a list of collaborators.
- `influenced_by=The Shangri-Las|Otis Redding|Aretha Franklin`: Amy personally identifies girl groups and those singers as listening/inspiration in B05 (and lyrics/production resemble girl-group textures). Aretha gospel remark is not evidence *Back to Black* is itself gospel.
- `producers=Mark Ronson|Salaam Remi|P*Nut`: original standard-edition track metadata B04/B09 credits Ronson and Remi throughout and P*Nut on *He Can Only Hold Her*. Qobuz's older metadata for the same track also credits John Harrison as producer; this is an **unresolved label discrepancy**: prefer the current normalized P*Nut credit, flag for Claude rather than adding ambiguous names uncritically.
- `landmark=1`: defining commercial and critically prominent Amy studio album.
- **Temporal caveat:** retrospective 20th-anniversary reviews may describe added demos; do not use them to score the **2006 original**.

## 2011 — Lioness: Hidden Treasures (`amy-lionesshiddentreasures`)

**Compilation, not third studio album**. Source L01/L02 confirms varied original session dates, posthumous curation and newly completed mixes. Original voice capture and 2011 arrangement belong to different creative moments: an album-level score cannot imply a consistent artist-approved aesthetic. More than half the tracks are covers/alternate takes. `nusoul` concerns *Half Time*, `reggae` and `loversrock` the specific opening track, `bossanova` the *Girl from Ipanema*, `hiphop` guest Nas on *Like Smoke*, `doowop` the source era and *Between the Cheats*. These are real but mostly **track-level** styles. Standards/jazz/soul are a substantial share (L01,L03,L05,L07,L08).

- `energy=2`: subdued ballads and standard performances outweigh rhythmic tracks (L03,L04).
- `electronic=1`: studio players and retro soul/jazz dominate; one or two production additions not 2010s electro (L01,L06).
- `mood=2`: predominantly wistful/mournful with warmer jazz/covers and a few light tracks; avoid deriving album sadness simply from artist's death (L03,L05,L07).
- `theatrical=2`: intimate archive and demo material plus some lush strings; not a staged concept album (L03,L04).
- `experimental=1`: largely familiar standards, covers and abandoned album sessions. Posthumous assembly is not experimental songwriting (L03,L04).
- `polish=3`: finished professional band and string arrangements coexist with rough early recordings and a home voice capture; editorial mid-value (L04,L06,L08).
- `tempo=2`: ballad/standards weighted with reggae and pop/soul exceptions (L01,L08).
- `groove=2`: some inviting reggae/soul, but subdued album balance (L01,L03).
- `voice=raspy|soft|clear|powerful`: **mixed eras**, earlier precise jazz phrasing vs later cracked and rough expressive performances explicitly noted by L04; not a uniform timbre or one vocal recording session.
- `lyrics=love|heartbreak|introspection`: love, devotion and melancholy across the song selection; covers should not be misrepresented as Amy's own confessional writing (L01,L03,L05).
- `influenced_by=Donny Hathaway`: Amy Winehouse Foundation states her interpretation of *A Song for You* was modeled on Hathaway and he was her favourite artist (L01). This is a **track-specific documented link**, not proof he influenced every compilation track.
- `sounds_like=Erykah Badu|Dinah Washington|Donny Hathaway|The Shirelles`: sonic editorial comparisons for selected songs, not direct causality (L03,L05,L07).
- `producers=Salaam Remi|Mark Ronson|Paul O’Duffy|Phil Ramone|Dae Bennett`: from track-by-track original and archival production credits (L01,L06,L10). Names are not all executive compilers. The duet *Body and Soul* credits both Phil Ramone and Dae Bennett in MusicBrainz. Other arrangements were recorded or edited posthumously.
- `landmark=0`: substantial archival album warrants inclusion but is **not** a canon-defining studio statement comparable to 2003/2006; editable subjective judgment.
- **Disagreement:** some reviews see the collection as tasteful preservation, others criticise an overly polite mainstream reshaping and incomplete material (L03,L04,L05,L08). `confidence=medium` due to mixed dates/recording provenance.

## New tokens for Claude (taxonomy update)

**Existing token** `nusoul` is used for documented *neo-soul* rather than introducing duplicate `neosoul`.

Five additional genre tokens in this batch, all lowercase letters only and cited in genre-evidence CSV: `souljazz` (Soul Jazz), `popsoul` (Pop Soul), `acidjazz` (Acid Jazz; critic comparison only), `northernsoul` (Northern Soul; cited stylistic reference only), `loversrock` (Lovers Rock; specific reggae arrangement comparison only). Register in `src/data/scenes.ts` Genre; `src/data/genreFamilies.ts` with relations `souljazz:[soul,jazz]`, `popsoul:[pop,soul]`, `acidjazz:[jazz,funk]`, `northernsoul:[soul]`, `loversrock:[reggae,soul]`, and in the hard-coded `GENRES` of `scripts/validate-descriptors.ts`; update guide. No genre count limits. **Critic-comparison only styles may be removed upon second-review** if app requires album-level strictness; evidence file discloses their weaker scopes.

## Import / quality gates

1. Append only these three rows to `docs/descriptors/amy.csv` (new file on branch `descriptors`); no live albums.
2. Add just *Lioness: Hidden Treasures* (2011) to Amy's `src/data/catalog.ts` album list; keep existing Frank/Back IDs identical.
3. Keep source/evidence notes in `docs/descriptors/research/`; never replace other artists' files.
4. Add new Genre codes and family mapping, amend validator hardcoded code list, update guide.
5. Validate with `npx vite-node scripts/validate-descriptors.ts` and full project tests before publishing.
6. Preserve unknowns, inspect edition ambiguities and production discrepancies before marking `reviewed`.
