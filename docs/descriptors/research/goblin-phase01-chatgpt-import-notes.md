# CLAUDE_IMPORT — Goblin / Phase 01 (original recordings)

**Research date:** 2026-10-26. **Status:** draft. **Write target:** `docs/descriptors/goblin.csv` after the required catalogue/token updates. Source branch: `descriptors` (read-only research). This ZIP is **strictly incremental**: it contains only these four new Goblin descriptor rows.

## Import order

1. Check for later changes to `docs/descriptors/goblin.csv`: direct raw-path check on 26 Oct returned HTTP 404. **Do not duplicate any row** introduced after that check.
2. Add missing album title to the `goblin` album array of `src/data/catalog.ts` with original release year 1978; generator will make the id below.
3. Add the four new genre tokens below to `src/data/scenes.ts` **and** ancestry to `src/data/genreFamilies.ts` **and** validator allowed tokens (or the existing canonical vocabulary mechanism), then run the repository checker. These tokens are source-anchored, not spelling variants of an existing different genre.
4. Merge ONLY `goblin_phase01_rows_ONLY.csv`, keeping all 27 columns and `status=draft`, then validate; audit new album and any unresolved instruments if the validator has changed.
5. Keep all phase evidence files together under the appropriate `docs/descriptors/research` location according to project convention; do not treat research CSVs as main descriptor CSVs for validation.

## Phase 01 rows

| Fandome album id | Original album | Year | Type | Catalogue |
|---|---|---:|---|---|
| `goblin-profondorosso` | Profondo rosso | 1975 | soundtrack | exists |
| `goblin-roller` | Roller | 1976 | studio | exists |
| `goblin-suspiria` | Suspiria | 1977 | soundtrack | exists |
| `goblin-ilfantasticoviaggiodelbagarozzomark` | Il fantastico viaggio del bagarozzo Mark | 1978 | studio | **ADD** |

**Catalogue insertion:** `['Il fantastico viaggio del bagarozzo Mark', 1978]` under `goblin`. Original first edition established by [ItalianProg Cinevox SC 33.37](https://www.italianprog.com/a_goblin.htm).

## New genre tokens (genuinely distinct; add to allowed values)

| Token | Why required | Proposed parent(s) |
|---|---|---|
| `jazzrock` | Critic specifically names jazz-rock, distinct from `jazzfusion` | `jazz`, `rock` |
| `heavymetal` | AllMusic explicitly names heavy metal on *Profondo rosso*, rather than generic metal | `metal`, `rock` |
| `gothicprog` | Critic explicitly calls *Profondo rosso* gothic-prog | `prog`, `rock` |
| `instrumentalrock` | Label tags *Roller* instrumental rock | `rock` |

**New instrument tokens:** none. **New production tokens:** none.

## Albums billed to other artists / disputed recording identities

- The 1975 *Cherry Five* LP is credited **Cherry Five**, a precursor ensemble; do not silently describe it under Goblin. Separate artist/catalogue decision required. [GDM](https://www.archiviocolonnesonore.com/goblin/biografia/).
- *Perché si uccidono* (1976) is credited **Il Reale Impero Britannico**, with music/other contributors; check the actual sleeve and compositions before deciding whether to add a dedicated alias room or a co-billed album. It must not be labelled as a standard Goblin original. [OndaRock](https://www.ondarock.it/monografie/goblin/).
- *Tenebre* (1982) original credit **Simonetti–Pignatelli–Morante**, not automatically `Goblin`. Defer to its own audit. [Claudio Simonetti's Goblin discography](https://www.goblinsimonetti.com/discography).
- *Squadra antimafia* (1978) has no confirmed issued original Goblin LP, and a subsequently released recreation is **Girodivite** playing Goblin music. Do not count as an original Goblin record. [Label/release description](https://www.soundtrackcorner.de/squadra-antimafia-performed-by-girodivite-p9434.htm).
- Other legacy derivative groups such as **Claudio Simonetti's Goblin**, **New Goblin**, and **Goblin Rebirth** are not the same recording artist. Co-billing is not inferred from overlap in membership.
- **Required `coBilled.ts` entries for phase 01:** none verified.

## ARTIST INFLUENCES — for the original group, phase 01 only

These are **musical formative influences named by founding keyboardist Claudio Simonetti** in first-person accounts. Not all are assigned automatically to specific album rows. The general influence field is separate from sound-alikes and work-by-work evidence.

| Artist | Direct supporting evidence | Link |
|---|---|---|
| Genesis | Simonetti explicitly says 1970s rock groups “like Genesis” influenced Goblin; also names them among formative listening | [Red Bull Music Academy, 2004](https://www.redbullmusicacademy.com/lectures/claudio-simonetti-gothic-disco-godfather/) |
| King Crimson | Simonetti cites King Crimson among bands shaping his musical culture and his desire to play | [Red Bull Music Academy, 2004](https://www.redbullmusicacademy.com/lectures/claudio-simonetti-gothic-disco-godfather/) |
| The Beatles | Simonetti names the Beatles as formative late-1960s listening that renewed his enthusiasm for music | [Red Bull Music Academy, 2004](https://www.redbullmusicacademy.com/lectures/claudio-simonetti-gothic-disco-godfather/) |
| The Rolling Stones | Named alongside the Beatles among his formative rock listening | [Red Bull Music Academy, 2004](https://www.redbullmusicacademy.com/lectures/claudio-simonetti-gothic-disco-godfather/) |
| Emerson, Lake & Palmer / Keith Emerson | Simonetti cites ELP as part of classical/prog background and explicitly says the Moog in *Suspiria* was chosen because he admired Keith Emerson | [RBMA](https://www.redbullmusicacademy.com/lectures/claudio-simonetti-gothic-disco-godfather/); [FACT, 2014](https://www.factmag.com/2014/10/31/suspiria-is-the-masterpiece-of-goblin-claudio-simonetti-reflects-on-the-best-horror-soundtrack-of-all-time/) |
| Yes | Simonetti includes Yes when describing the prog/classical background he brought into his music; less explicit causal claim than Genesis | [Red Bull Music Academy, 2004](https://www.redbullmusicacademy.com/lectures/claudio-simonetti-gothic-disco-godfather/) |

**Not artist influences:** Dario Argento (film director/collaborator); Giorgio Gaslini (composer, arranged on debut); John Carpenter (artist influenced by Goblin, *reverse* direction); Mike Oldfield (sonic comparison and director-requested *Tubular Bells*-type cue, not direct group influence); Kraftwerk (critical sonic comparison and Argento’s idea for album demos, not claimed by Simonetti as a general personal influence). [FACT](https://www.factmag.com/2014/10/31/suspiria-is-the-masterpiece-of-goblin-claudio-simonetti-reflects-on-the-best-horror-soundtrack-of-all-time/); [OndaRock](https://ondarock.com/reviews/italian-milestones/goblin-suspiria/).

## Cautions before import

- The record producer credit is **intentionally blank** throughout this phase. Please don't promote composer, engineer, arranger, director, executive producer, artistic director, movie producer or record-label manager to producer.
- *Profondo rosso* means **original seven-track 1975 LP**. Later bonus material, alt celesta recordings and modern Simonetti remakes are outside the phase.
- *Suspiria*: conflicting *System 50* versus *System 55* testimony, so leave model out; `moog` and `minimoog` alone are backed. Guarini's involvement is contested by Simonetti and later criticism; see notes.
- *Roller*: later promotional copy mentions Mellotron, but first-edition credits do not. We left it out. Sax in a track-based review requires an original-credit cross-check if confidence requirements tighten.
- *Bagarozzo Mark*: Morante vocalises in Italian. Voice **timbre** is not well enough evidenced for the restricted `voice` vocabulary, hence that cell is empty rather than a fabricated label. `production` is also empty.
- *La via della droga*: 1977 **film score**, 1990s **first official album issue**, according to AMS; digital metadata backdates releases to the film date. Preserve both film year and actual album issue as separate facts in the subsequent catalogue audit. See [AMS](https://ams-music.it/wp/la-via-della-droga-crystal-vinyl/?lang=it).

## Scope and next chronological releases

**Phase 02 (next ZIP):** `Zombi` (1978), `Squadra antigangsters` (1979), `Amo non amo` (1979), `Patrick` (1979). They are original commercial Goblin LPs according to [ItalianProg original release discography](https://www.italianprog.com/a_goblin.htm). Same-year order is indicative until first-sale dates are confirmed.

Further audit (not already described here): *Buio omega*, *Contamination*, *Volo*, *Notturno*, *Non ho sonno*, *Back to the Goblin*, *Four of a Kind*, *Fearless (37513 Zombie Ave.)*, and separate checks for album appearances of *La via della droga*, *Phenomena*, *La chiesa*, *Tenebre* and important additional soundtracks. The original group vs separately billed composers rule remains in force. Reissues and ordinary best-of compilations are excluded; original landmark remix/collaboration/EPs only if independently supported.

## Files in this phase

- `goblin_phase01_rows_ONLY.csv` — header + **4** complete 27-column rows
- `goblin_phase01_sources.csv` — sourced evidence per album, source roles and strength
- `goblin_phase01_genre_evidence.csv` — one row per album genre, ordered consistently with descriptor CSV, and scope
- `goblin_phase01_evidence-notes.md` — defensible reasoning, caveats, uncertainties and disagreements
- `goblin_phase01_catalog-audit.csv` — three existing albums; one addition
