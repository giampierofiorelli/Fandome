# Duran Duran — Fandome descriptors, phase 02

## Strictly incremental import

**Artist ID:** `duranduran`, as in `src/data/catalog.ts` (branch `descriptors`, checked 2026-10-27). This ZIP contains only these four new 27-column rows, no phase 01 rows:

1. `duranduran-bigthing` — *Big Thing* (1988; studio; **ADD to catalogue**)
2. `duranduran-liberty` — *Liberty* (1990; studio; **ADD to catalogue**)
3. `duranduran-durandurantheweddingalbum` — *Duran Duran (The Wedding Album)* (1993; studio; **existing catalogue ID**)
4. `duranduran-thankyou` — *Thank You* (1995; studio cover versions; **ADD to catalogue**)

The 1993 album is *officially self-titled*: `(The Wedding Album)` is the Fandome catalogue's existing clarification for the second self-titled album. Preserve the existing album ID rather than renaming it. All released studio records are enumerated in the audit; the previous ZIP already covered the first four.

## Catalogue changes

`catalog.ts` requires three additions from this ZIP: `['Big Thing', 1988]`, `['Liberty', 1990]`, and `['Thank You', 1995]`, inserted chronologically for artist `duranduran`. **Do not create a duplicate 1993 album.** The audit also carries the six remaining absent studio titles, destined for phases 03 and 04: Medazzaland (1997), Pop Trash (2000), Astronaut (2004), Red Carpet Massacre (2007), All You Need Is Now (2010), Paper Gods (2015).

## Co-billed releases

**None.** Credits to Milton Nascimento on *Breath After Breath*, Grandmaster Melle Mel and Grandmaster Flash/Furious Five on *White Lines*, or other guest musicians do **not** make the studio album a co-billed collaboration. *Thank You* is a covers **studio** album, not a various-artists compilation.

## New vocabulary tokens

- **Genres:** none. Used tags such as `alternativedance`, `adultalternativepoprock`, `experimentalrock`, `phillysoul`, `motown`, `triphop`, `bossanova`, and `poprock` are all in the branch's `Genre` type. `hiphop` on *Thank You* is restricted to tracks with documented rap; it does not imply all covers sound like hip-hop.
- **Instruments:** none. All recorded instruments in CSV are canonical tokens.
- **Production:** none. `digitalrecording` (digitally recorded/mixed on *Liberty*, direct-to-hard-drive on *Wedding*) and `moog` (instrument named on *Thank You* track *Crystal Ship*) exist; do **not** add unverified synthesizer model numbers. String players are credited on *Thank You*, but **no arrangement technique token** is added without an identified arranger credit.

## Artist-wide influences

Already supplied with primary/interview sources in **phase 01**. Not repeated in an incremental phase. An album's `influenced_by` values have deliberately been left blank here because available album-specific comparisons are **critics' associations**, and cover versions are not valid influence proof under project rules. `sounds_like` contains explicitly labelled editorial comparisons, **not** verified inspiration. *The Wedding Album* was inspired by the grunge/techno/rave-era context, but that names scenes, not source artists. No unsupported artist is introduced into `influenced_by`.

## Source and edition caveats (read before import)

- **Big Thing:** Sources call the debut single house-inspired and the album a house/rave transition, but much of the second side is sparse, atmospheric pop. Do not label the whole album acid house: `acidhouse` is **not** firmly documented for the original LP. The 1988 album *Drug (It's Just a State of Mind)* contains a remix; in the 2010 expanded set the band restored the previously less common original mix and moved the LP remix to the bonus content. Do not use the 2010 alternative programme as the 1988 evidence baseline. Credits list three co-producers: **Duran Duran, Jonathan Elias, Daniel Abraham**. No gear models were verified.
- **Liberty:** Original sleeve states produced by **Chris Kimsey in association with Duran Duran**, with John Jones doing programming/additional keyboards. Some digital rights-holder metadata credits all five group members as co-producers; their common group billing is `Duran Duran`. **John Jones is not producer** on this album. The sleeve explicitly documents digital recording and mixing. Reviews differ: *Spin* praised its rock/dance mix while *AllMusic* and *Classic Pop* criticised its lack of focus. Avoid classifying *Serious* as an album-wide Smiths sound.
- **The Wedding Album:** Official album title is **Duran Duran**, catalogue title is **Duran Duran (The Wedding Album)**. Producer John Jones confirms his role; **David Richards is a mixer**, not a producer. Nick Rhodes personally confirms the use of drum machines and Le Bon confirms direct-to-hard-drive recording. `sampling` is supported for *Come Undone* by documented use of a drum break from The Soul Searchers, not as proof of sampling everywhere. Milton Nascimento's duet on *Breath After Breath* is **Portuguese**, not Spanish, in addition to English. Genres `triphop` and `bossanova` apply only to parts of a diverse LP. The *Femme Fatale* recording is a **cover** of The Velvet Underground, and is not a confirmed influence.
- **Thank You:** An album of cover recordings released as an original Duran Duran studio LP; its source compositions retain multiple lyrical themes, but their **original genre does not automatically dictate the cover arrangement**. `rap` in `voice` comes from confirmed Grandmaster Melle Mel rapping *White Lines*; Le Bon is the principal lead. Original sleeve reproductions credit Duran Duran as producer throughout and **John Jones on two tracks** (sources disagree about exact numbering, notably #11/#12). Rights-holder Qobuz generally lists band members as producers; other personnel labelled **additional production** or mixer are not imported as producers. The original label's dates vary: 27 March 1995 (UK physical release) vs 4 April 1995 (site/US release); Fandome stores **1995** only. `moog` rests on Jonathan Elias on *Crystal Ship*; no other models claimed. `sounds_like` Beck/Gary Glitter/Chris de Burgh comes from explicitly attributed, track-specific critical comparisons; these are NOT influence claims.

## Field interpretation

All eight 0–5 scores are Fandome editorial judgments based on described albums and tracks, not sourced numeric facts. Scored album averages do not erase contrasting first/second sides or track-level styles. The `genres` order prioritizes album-defining styles; the attached `genre_evidence.csv` flags `some tracks` and `texture` where appropriate. `notes` are original descriptions of at most 15 words. Every imported row must retain `status=draft` until independent review.

## Next phase

**Phase 03:** *Medazzaland* (1997), *Pop Trash* (2000), *Astronaut* (2004), *Red Carpet Massacre* (2007). No live albums, compilations, greatest-hits or album-era reissues. Phase 04 follows with *All You Need Is Now*, *Paper Gods*, *Future Past*, *Danse Macabre*.
