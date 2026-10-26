# MARINA — Fandome phase 01 import

**Import this ZIP only; append its four rows to** `docs/descriptors/marina.csv` **or create the file with its 27-column header.** It contains **only this phase's four albums**, not data from other phases. Data compiled 26 October 2026. All rows `draft`, requiring Claude's catalogue validator.

## Artist identity
- Existing Fandome artist id: `marina` (display label `MARINA`) verified in [`catalog.ts`](https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/catalog.ts).
- The records from 2010, 2012, 2015 originally credit **Marina and the Diamonds**. Beginning with *Love + Fear* (2019) her release credit is **MARINA**. All rows use existing catalog display name `MARINA` for stable import, with historical credit explained rather than adding a second artist.
- Existing `docs/descriptors/marina.csv`: absent at research time. All phase 01 records are new *descriptor rows*, but their **catalogue entries already exist**.

## Phase 01 — exact albums and ids
1. `marina-thefamilyjewels` — *The Family Jewels* (2010), studio.
2. `marina-electraheart` — *Electra Heart* (2012), studio.
3. `marina-froot` — *Froot* (2015), studio.
4. `marina-lovefear` — *Love + Fear* (2019), studio.

**Albums to add to catalog.ts this phase: none.** Original album IDs retained (see `marina_phase01_catalog-audit.csv`). **Co-billed albums this phase: none.** *Love + Fear* includes “Baby” with Clean Bandit and Luis Fonsi but this is a track, not an album co-billing.

**New genre tokens required: none.** **New instrument tokens required: none.** **New production tokens required: none.** Existing tokens matched the branch's genre, instrument and production files. Sparse or empty value = no sufficient album-specific verification; do not auto-fill from genre.

## ARTIST INFLUENCES (phase 01 only)
These were **named by Marina herself** as musical inspirations across her career, distinct from editorial `sounds_like`. Per-album `influenced_by` is narrower and based on evidence specific to that album.

- **Kate Bush** — Marina names her as a major early songwriting influence. [Glitter 2015](https://glittermagazine.co/2015/04/15/interview-marina-and-the-diamonds/); [Irish Times 2012](https://www.irishtimes.com/culture/music/rock-pop/hollywood-pop-1.500811).
- **PJ Harvey** — major formative songwriter and a model for band-led production on *Froot*. [Glitter 2015](https://glittermagazine.co/2015/04/15/interview-marina-and-the-diamonds/); [VICE 2015](https://www.vice.com/da/article/froot-marina-and-the-diamonds-interview/).
- **Fiona Apple** — early discovery with major songwriting influence. [Glitter 2015](https://glittermagazine.co/2015/04/15/interview-marina-and-the-diamonds/); [Drowned in Sound 2012](https://drownedinsound.com/in_depth/4145550-dis-does-pop-interviews--marina-and-the-diamonds-jessie-ware-and-ruby-goe).
- **The Distillers / Brody Dalle** — major early influence and later rougher-sound model. [Glitter 2015](https://glittermagazine.co/2015/04/15/interview-marina-and-the-diamonds/); [Line of Best Fit](https://www.thelineofbestfit.com/features/longread/marina-and-the-diamonds-froot).
- **The Dresden Dolls** — major formative act named directly. [Glitter 2015](https://glittermagazine.co/2015/04/15/interview-marina-and-the-diamonds/).
- **Daniel Johnston** — cited by Marina for DIY/lo-fi songwriting on first album. [Drowned in Sound 2012](https://drownedinsound.com/in_depth/4145550-dis-does-pop-interviews--marina-and-the-diamonds-jessie-ware-and-ruby-goe); [Line of Best Fit](https://www.thelineofbestfit.com/features/longread/marina-and-the-diamonds-froot).
- **Madonna** — explicit formative pop-star and musical reference for *Electra Heart*, especially *Ray of Light*. [Drowned in Sound 2012](https://drownedinsound.com/in_depth/4145550-dis-does-pop-interviews--marina-and-the-diamonds-jessie-ware-and-ruby-goe); [FaceCulture 2012 interview transcript](https://marinaandthediamonds.fandom.com/wiki/Interview/FaceCulture/2012).
- **Britney Spears** — formative pop inspiration; “Toxic” named as dark-chord sonic touchstone and Electra Heart pop-machine model. [Drowned in Sound 2012](https://drownedinsound.com/in_depth/4145550-dis-does-pop-interviews--marina-and-the-diamonds-jessie-ware-and-ruby-goe); [Glamour interview](https://www.glamour.com/story/marina-and-the-diamonds-interv).
- **Emily Haines** — Marina lists among her keenest musical influences. [Wonderland 2012](https://cpcontacts.wonderlandmagazine.com/2012/04/30/marina-and-the-diamonds-favourite-prima-donnas/).
- **The Shangri-Las** — Marina directly names the group among favourite music influences. [Wonderland 2012](https://cpcontacts.wonderlandmagazine.com/2012/04/30/marina-and-the-diamonds-favourite-prima-donnas/).
- **Röyksopp** — named in the same five-artist list. [Wonderland 2012](https://cpcontacts.wonderlandmagazine.com/2012/04/30/marina-and-the-diamonds-favourite-prima-donnas/).
- **Garbage / Shirley Manson** — named a sonic role model for making *Froot* rougher. [Line of Best Fit](https://www.thelineofbestfit.com/features/longread/marina-and-the-diamonds-froot).
- **Patti Smith** — mentioned as an example for songwriter-led band production during *Froot*. [VICE 2015](https://www.vice.com/da/article/froot-marina-and-the-diamonds-interview/).

## Caveats and disagreements
- **Froot credits conflict:** musicOMH erroneously names Greg Kurstin as collaborator; authoritative MusicBrainz original track credits and direct interviews confirm **Marina Diamandis + David Kosten**. Do not transfer earlier Kurstin credits to *Froot*.
- **Electra Heart editions:** original standard UK 12 tracks; deluxe / platinum editions include bonuses and remixes; NME explicitly says *Radioactive* wasn't on the original album. Diplo is retained as co-producer of standard track “Lies”, not via bonus-only credit. Advance press mentions Stargate/Guy Sigsworth/Benny Blanco without firm producer confirmation on original 12 tracks: exclude.
- **The Crown Jewels (2009)** and *Mermaid vs. Sailor* (2007) are not included: promotional/early EPs with many songs subsequently appearing on *The Family Jewels*; insufficient distinct landmark status for this album-recommendation use case. The EP contains some variant/non-album material, but duplicative album descriptors would distort similarity matching. [EP listing](https://www.albumoftheyear.org/artist/1373-marina/?type=ep); [contemporary-track history](https://marinaandthediamonds.fandom.com/wiki/The_Family_Jewels/Timeline/2009).
- No live, compilation or re-recording release, no *Froot* anniversary edition, no *Love + Fear (Acoustic)* duplicate. The user's no-repeat directive takes precedence over including every version.
- *Love + Fear* is one double-concept album (LOVE / FEAR) and should be one row. Its “Baby” collaboration does not create an album-level co-bill.
- Instrument and production values **only** traceable to track credits, critics, artist interviews, or technical documentation; models are omitted when unspecified. `liverecording` is omitted from *Froot* despite band emphasis, because simultaneous real-time studio takes were not verified.
- AOTY genre tags are aggregated classification rather than quotes from a single critic; source scope and relative weight are explicit in genre-evidence CSV. *Froot* `tango`, *The Family Jewels* `ska|poppunk`, and *Love + Fear* `afrobeats|tropicalhouse` are **track-level or secondary** tags, placed last.

## Next phase 02 (final studio phase through 26 October 2026)
- **Ancient Dreams in a Modern Land** (2021), studio, existing `marina-ancientdreamsinamodernland`.
- **Princess of Power** (2025), studio, existing `marina-princessofpower`.

No new unreleased studio album is inserted; if the catalog changes later re-check then. A phase of two is appropriate to avoid including duplicated or ineligible EP/live material.

## Files in this ZIP
- `CLAUDE_IMPORT.md` (this document)
- `marina_phase01_rows_ONLY.csv` (27-column header plus **four** rows)
- `marina_phase01_sources.csv` (claims and direct URLs; producer and genre evidence)
- `marina_phase01_genre_evidence.csv` (one row per genre assignment including scope)
- `marina_phase01_evidence-notes.md` (album-specific reasoning and conflicts)
- `marina_phase01_catalog-audit.csv` (already present vs additions)
