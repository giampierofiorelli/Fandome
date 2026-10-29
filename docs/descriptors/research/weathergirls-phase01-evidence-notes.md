# The Weather Girls — phase 01 research notes (Fandome)

Research scope: original studio albums issued under **The Weather Girls** name, 1983–1993. Read-only audit of `giampierofiorelli/Fandome` branch `descriptors` found no artist entry or descriptor CSV. Suggested catalog ID: `weathergirls`.

## Scope and aliases

* The original duo **Martha Wash and Izora Armstead** recorded *Two Tons o’ Fun* (1980) and *Backatcha* (1980) under their earlier billed name (Two Tons o' Fun / Two Tons). These are **not** compilations but should be handled in an alias-aware catalog decision, rather than silently attributed to the Weather Girls name. See S01–S03.
* Phase 01 contains four studio releases as **The Weather Girls**. *Double Tons of Fun* (1993) is a new studio album, **not** a reissue of *Two Tons o’ Fun* (1980). The 1993 group pairs Armstead with her daughter **Dynelle Rhodes** after the original group split. See S02, S22–S25.
* Exclude later compilation series such as *Super Hits*, *Greatest Hits*, and *Carry On: The Deluxe Collection 1982–1992*; use reissues only as evidence when their original-song credits are consistent.

## Album-by-album evidence

### Success (1983) — `weathergirls-success`
* Original Columbia 6-track studio record. 1983 is secure. **Exact release day disputed**: MusicBrainz gives 19 September 1983 for the US vinyl (S05); another general encyclopedia gives 22 January 1983. Do not import an exact day without physical release verification. S04–S05.
* This was *not* the duo's first recorded LP: they issued two LPs under the earlier name. Discography labels describing it as a debut are shorthand for their **new moniker** (S01–S04).
* Vocal arrangement and entertainment style are openly exuberant, with disco and Hi-NRG club grooves, soul and gospel-inflected lead vocals, theatrical songs and some tongue-in-cheek lyrics. Album-level genre evidence: S08–S10.
* **Producer distinction:** Paul Jabara produced most material. Bob Esty has a producer credit on “It's Raining Men”; Jerry Solomon is credited as **assistant producer / recording engineer**, not the lead producer. S06–S07 and S11.
* Instruments supported from track/session credits: keyboards and synths (Esty, Shaffer, Pendarvis, Walsh), bass (Sklar/Jason), drums (Vega/Parker/Williams), electric guitars, piano. `hornarrangements|stringarrangements` supported by arranger credits, but do not misread these as proof that every track has orchestral musicians. S06.
* No documented album-specific artist inspiration: `influenced_by` empty. Do not mistake Paul Jabara/Sylvester as artistic influences because of collaboration.

### Big Girls Don't Cry (1985) — `weathergirls-biggirlsdontcry`
* 8-track original Columbia LP. Some digital editions list **10 tracks** with remixes; do not classify bonus remixes as original album material. S12–S13.
* Producers **Hank Medress and Jeff Kent**. Joe Venneri's credit is **associate producer**; omit from main album producers per guide unless a source explicitly credits full production. S12–S15.
* Explicit instruments: piano, acoustic/electric guitar, alto saxophone on selected tracks (David Sanborn), synthesizer and programmed percussion; credited synthesizer/drum programming supports `synthprogramming|drumprogramming`. S13, S15.
* Pop-soul/dance treatment of 1960s songs and contemporary tunes, with central vocal delivery and lighter rhythmic material than *Success*. Reviewers describe some theatrical irony; genre evidence S12–S14.
* The existence of cover recordings is **not evidence of `influenced_by`** by the covered composers.

### The Weather Girls (1988) — `weathergirls-theweathergirls`
* Eight tracks on original CBS/Columbia LP. Credits: **Full Force**, **Reggie Lucas**, **Richard Scher** (S17–S19). Multiple production camps work on different songs; no one production team for all eight.
* Album catalog styles explicitly include **synth-pop, disco, electronic** (S17, S19). AllMusic describes the original duo as rooted in soul vocals (S28). No sufficiently documented album-level `sounds_like` comparison was retained.
* Instrument names are **left empty** rather than deduced from the genre “synth-pop.” Session-level documentation was insufficient for an accurate main-instrument list. Production tags likewise blank for unspecified devices or recording techniques. All other scores are editorial evaluations grounded in contemporary reviews and genre metadata, not measurements.
* Original Martha Wash/Izora Armstead lineup, last album prior to splitting (S02, S28).

### Double Tons of Fun (1993) — `weathergirls-doubletonsoffun`
* Twelve-track album, EastWest/Ultraphonic 4509-94018-2, original German 1993 CD (S22–S25). Includes **a 1993 new version** of “It's Raining Men”, not a pure old-master compilation.
* The revived group uses the Izora Armstead/Dynelle Rhodes lineup, not the 1983–88 Wash/Armstead duo (S02).
* Original liner transcription credits keyboard programming (Mr. Kalif), additional keyboards (Thorsten Brötzmann), saxophone (René Decker), and guitars (Peter Weihe/Frank Busch) on specific tracks (S23). Marking saxophone as an element of the record does not mean every track features it.
* **Producers:** Joachim Heider (shown as Mr. Hyder), Mr. Kalif, plus **Tantris and Thorsten Brötzmann on tracks 10 and 12 only**, per sleeves. S23–S24.
* Genre sources describe Euro House, Disco House and Disco (S24). Pop/soul are credited as general retail genre categories (S23), and weighted as less prominent.
* `influenced_by` left empty. The cover of “I Want to Take You Higher” and rerecording of “It's Raining Men” are **not** direct testimony of influence.

## Interpreting the numbers and data gaps

Whole-album 0–5 score fields are comparative editorial judgements, **not** audio-derived measurements. They're provisional (`status=draft`). `confidence=high` concerns corroborated metadata and genre/arrangement evidence; low-verification instrument and influence fields are left blank. All lyrics tags are album-level interpretive estimates and should be manually reviewed. Sources in `weathergirls_phase01_sources.csv` link every album to verifiable claims. Never import unverified sonic influences. Some source databases disagree on *Success*' exact day; the year is stable.

## Follow-on batch

Candidates: *Think Big!* (1995), *Puttin’ on the Hits* (1999), *Totally Wild!* (2005), *The Woman I Am* (2009). Validate whether later entries are re-recording albums or original studio releases, confirm exact dates, and keep historical lineups separate. The pre-1983 Two Tons o' Fun releases need a deliberate alias treatment.
