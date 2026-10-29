# CLAUDE_IMPORT — Run-D.M.C. phase 02 (FINAL)

## Contents (strictly incremental)

Import the **three** phase 02 descriptor rows from `rundmc_phase02_rows_ONLY.csv`, **never** the four phase 01 rows again:

| Album id | Studio album | Year |
|---|---|---:|
| `rundmc-backfromhell` | *Back from Hell* | 1990 |
| `rundmc-downwiththeking` | *Down with the King* | 1993 |
| `rundmc-crownroyal` | *Crown Royal* | 2001 |

**Artist ID:** `rundmc` (proposed in phase 01 after catalog.ts + seed.ts check; retain if imported). All three original studio records, not compilations or the soundtrack itself. Each row has exactly 27 columns, status `draft` and `notes` max 15 words.

## Catalogue changes

Phase 01 archive already proposed adding `rundmc` and **all seven studio albums** to catalog.ts (4 records described in phase 01; 3 described here). Do not create duplicate entries if phase 01 additions were performed. If Claude has NOT yet added the phase 02 albums, add exactly:

- `rundmc-backfromhell` (1990, studio)
- `rundmc-downwiththeking` (1993, studio)
- `rundmc-crownroyal` (2001, studio)

`rundmc_phase02_catalog-audit.csv` repeats the full catalogue audit solely for reconciliation; it is **not** a descriptor import file. The checked first-phase absence is a snapshot from 29 October 2026; refresh repository state before performing any writes. The phase 01 delivery supplied `rundmc-rundmc` and the other three original IDs.

## Already-described albums excluded

*Run-D.M.C.* (1984), *King of Rock* (1985), *Raising Hell* (1986), *Tougher Than Leather* (1988). Only phase 02 has new rows.

## New controlled tokens

- **Genre `jazzrap`**: third-party album-style tags use *Jazz Rap* on *Down with the King*, with corroborating jazz-sample reviews (see CSVs). **Check canonical Genre type first; if not already present, add `jazzrap`** as a new precise genre, do not silently relabel as `jazz`.
- **Instruments: none new.** `drums`, `keyboards`, `turntables`, `guitar`, `saxophone`, `bass`, `organ`, `piano`, `electricguitar` are already documented canonical instrument names.
- **Production: none new.** `sampling` and `programming` are canonical. Recording models not demonstrated for these particular albums have NOT been inserted.

## Co-billing

None of the three original LPs is co-billed as an album; featured collaborators (Nas, Pete Rock, Kid Rock, Sugar Ray, etc.) are track-level and do not belong in `coBilled.ts`. Credits for track-level producer contributions belong in `producers`.

## Influence field

**Artist-wide influences were documented in phase 01's `CLAUDE_IMPORT.md` only.** Do not repeat them here or equate features, samples, covers or contemporary sonic comparisons with first-person artistic influences. Album-specific `influenced_by` is left empty for the three records because no sufficiently direct independent claim was verified for these LPs. `sounds_like` is editorial and is a different relationship.

## Source/credit caveats

- **Back from Hell**: Original 1990 LP lists Run-D.M.C. and Jam Master Jay as producers, Russell Simmons as executive producer. Qobuz separately lists Russell and several others as genuine **co-producers of selected tracks**; the field includes these song-specific contributors. Preserve source provenance.
- **Down with the King**: long roster of album-wide/track producers across Qobuz, AllMusic and retrospective; different track attribution accounts sometimes disagree. The `producers` field includes all documented producers at least once, not unverified engineers or session players.
- **Crown Royal**: Its actual original public release was **2001**, despite the **1999** date mistakenly heading the AllMusic album record, and differing 2001 metadata dates elsewhere. Source: 25 Apr 2001 first-person Run interview, https://abcnews.com/Entertainment/story?id=106100&page=1 . Original album has **12 tracks**; later bonus tracks and 2003 remixes are **excluded**. D.M.C. contributes on only a small number of tracks. Check guest-producer credits against original release sleeve before marking reviewed.
- Genre evidence scope deliberately separates album-wide styles from single-track textures. Do not raise dancehall, New Jack Swing, rap-metal, rock, or R&B accents into the entire LP without qualification.
- Score columns 0–5 are research-based editorial assessments and still require second-person listening validation. Confidence is lower for *Crown Royal* due complex/partly conflicting track credits.

## Next phase

**None.** The seven original Run-D.M.C. studio albums are covered across **phase 01 (4)** and **phase 02 (3)**. This package is the final requested studio-discography phase. Unreleased, live, compilation, greatest-hits and separate film soundtrack releases remain out of scope.

## Claude import note (Oct 2026)

- New genre token `jazzrap` (parents hiphop, jazz).
- The group's own production credit dropped on all three.
- Crown Royal sounds_like emptied: Kid Rock, Sugar Ray and Third Eye Blind (Stephan Jenkins) are guests, Limp Bizkit is co-producer DJ Lethal's band. Down with the King: Naughty by Nature removed (producer Kay Gee's group).

## Claude enrichment (reception pass, Oct 2026)

- Reception rows appended to `docs/descriptors/reception/rundmc.csv`.
- Back from Hell sounds_like: Teddy Riley (Pierznik: Pause and Faces "capitalize on the hot sound of New Jack Swing"), N.W.A (The Quietus: "the Bomb Squad's productions and NWA's streetwise sermonising"); Public Enemy and Ice Cube left out (Chuck D and Ice Cube guest on the title-track remix).
- Down with the King: Onyx removed (guests on Get Open), Kris Kross removed (video cameo only); Das EFX confirmed (RapReviews) and Cypress Hill added (Washington Post, Gil Griffin, on 3 in the Head).
- Crown Royal: no non-guest sound comparison (Rob Base's It Takes Two is an appropriation); genre alternativerock replaced by numetal (Wikipedia: hip hop, rap rock, nu metal, rap metal). Year 2001 confirmed (Arista, 3 April 2001).
