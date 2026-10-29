# Fandome — Gruppo Italiano — Phase 01 (complete original studio catalogue)

Checked on **29 October 2026**, GitHub branch **`descriptors`**, read-only. Proposed new artist ID: **`gruppoitaliano`**. No Gruppo Italiano / gruppoitaliano entry was found in either `src/data/catalog.ts` or `src/data/seed.ts`; no `docs/descriptors/gruppoitaliano.csv` existed. **No previously described albums were skipped.** Recheck the current branch before applying this incremental import.

## Import these THREE new studio rows

| Album ID | Album | Year | Type | Action | Original pressing |
|---|---|---:|---|---|---|
| `gruppoitaliano-maccherock` | Maccherock | 1982 | studio | add artist + album | Mara&C / Dischi Ricordi SMRL 6288 (LP) |
| `gruppoitaliano-tapiocamanioca` | Tapioca manioca | 1984 | studio | add album | Dischi Ricordi SMRL 6310 (LP) |
| `gruppoitaliano-surfinitaly` | Surf in Italy | 1985 | studio | add album | Ricordi SMRL 6343 (LP) |

Do not add live recordings, a 2002 retrospective, or the unrelated earlier seven-member band **Randa**. `Tropicana` (1983) was a **standalone single** and should not be modelled as a 1983 studio album. The 1984 album **Tapioca manioca does NOT contain Tropicana**; the song does appear on 1985 *Surf in Italy*. A contemporary Hit Parade Italia account explicitly confirms its absence from the 1984 album: https://www.hitparadeitalia.it/schede/t/tropicana.htm .

## One ZIP containing six files

- `CLAUDE_IMPORT.md` — instructions, editions, credits, influences, uncertainty, completed scope
- `gruppoitaliano_phase01_rows_ONLY.csv` — exactly 3 NEW rows, 27 columns, UTF-8 BOM
- `gruppoitaliano_phase01_sources.csv` — supporting evidence links, album by album
- `gruppoitaliano_phase01_genre_evidence.csv` — all included genres, their track/album scope and sources
- `gruppoitaliano_phase01_evidence-notes.md` — reasoning, disputed metadata, scales and missing data
- `gruppoitaliano_phase01_catalog-audit.csv` — three catalogue additions and excluded 2002 compilation

## ARTIST INFLUENCES — entire group

**No named artist influence is sufficiently documented with a direct statement from a member or credited producer.** Leave `influenced_by` empty for all three rows. Contemporary Hit Parade Italia reporting says the earlier band Randa was keen on Frank Zappa-like sounds (https://www.hitparadeitalia.it/voli/articoli/ch830730.htm). This is **journalist testimony**, not a quotation by a member identifying Zappa as a formative influence on a particular Gruppo Italiano album; keep it here only as a research lead. A retrospective critic likens *Anni ruggenti* to The Beatles' *When I'm Sixty-Four* (https://www.hitparadeitalia.it/schede/t/tropicana.htm); this is not evidence that The Beatles influenced its creators. Do not list cover originals as influences: a covered composition is repertoire, not automatically a causal influence. `sounds_like` stays blank because no robust album-specific sonic comparator emerged.

## Catalogue / instruments / technology / producer caveats

- No new genre, instrument or production tokens are required by the three proposed rows. Valid genre tokens used: `poprock`, `rockabilly`, `italodisco`, `pop`, `dancepop`, `disco`, `latin`, `funk`, `rock`. The `latin` label is last and scoped only to tropical/Latin-styled tracks on *Tapioca manioca*, not a whole-record claim.
- **Maccherock** was published as a 1982 Gruppo Italiano album, not under the band's earlier name Randa; the first side comprises 5 originals and another 8 remade Italian-language songs (Alberto Salerno recounts the 1982 release: https://faremusic.it/2020/05/02/storie-di-musica-di-alberto-salerno-maccherock-il-primo-album-del-gruppo-italiano/). An album with fresh studio covers is `studio`, not a retrospective `compilation`.
- **1982 and 1984 producer**: Oscar Prudente is credited as producer by discographic references; **Mara Maionchi and Alberto Salerno** operated the Mara&C label for the debut. Distinguish *label ownership/executive guidance* from credited record production; do not add Maionchi or Salerno to `producers` without explicit original LP producer credits. A confirmation from LP sleeve is recommended.
- **Surf in Italy**: sources identify Chicco Santulli as the artistic producer after a change of direction; this is distinct from band-arranger credits on other albums. Surf in Italy is a 1985 newly made cover LP plus their earlier single `Tropicana`; it is NOT the 2002 hits compilation. Do not assume `Tropicana` was newly recorded on the 1985 LP: the master/re-recording status needs first-pressing inspection.
- Instruments are confined to the band line-up listed for the three LPs: guitars, bass, drums, percussion. Album-specific credits do **not** identify synth models or exact keyboards; *Anni ruggenti* has an electronic arrangement, but it does **not** justify inventing specific synthesizers, drum machines or effects. Thus `production` is blank on all three records. The whole-album `electronic` score is **blank** on Maccherock and Surf in Italy: a blank denotes unavailable evidence, not a zero.
- `status=draft` throughout; no second-person review. Confidence is **medium** owing to absence of direct scans of original sleeves and scarce contemporary reviews. The 0–5 scales are editorial research estimates, not track-by-track audio measurements. Sources are linked per album and genus.
- The original *Surf in Italy* cover repertory is primarily from the 1960s, plus *Tropicana* and a cover of the 1985 song *L'estate sta finendo*. No album-level co-billing or `coBilled.ts` changes.

## Exclusions and next phase

Exclude *I Grandi Successi Originali* (2002), a compilation. The 1983 single *Tropicana* and the 1985 single *Sole d'agosto* do not create standalone studio album rows. The discography comprises **only three original studio albums (1982, 1984, 1985)** as of this research date; **no Phase 02 planned** unless the artist publishes a new relevant record or non-studio releases are explicitly requested.

## Validation handoff

Run the Fandome descriptor validator in the GitHub project after adding the artist and the albums; reconcile against any newer commit. Append the three rows only, not the earlier artists' albums or other phases. The genre evidence entries may describe a secondary stylistic trait rather than the entire LP; preserve those scopes in editorial review.

## Claude import note

- New artist `gruppoitaliano` (catalogue, scene IT it 1980 pop,dance, legacy: no longer touring). Three studio albums; the 2002 compilation excluded.
- Producers as given (Oscar Prudente, Chicco Santulli) pending the credit check; sounds_like and influenced_by empty (none sourced).
- Maccherock and Surf in Italy include covers of Italian songs: originals on Fandome to be linked in `src/data/covers.ts` after the tracklist check.

## Claude enrichment

- Reception from hitparadeitalia.it (charts, song pages), open.online 2023, faremusic.it (Alberto Salerno), canzoncine.it, Music Map, Il Cittadino 2024 (Chicco Santulli interview). No period album review found.
- Producers: Oscar Prudente confirmed on Maccherock and Tapioca manioca (Discogs 3240176, 6166277). Surf in Italy has no credits on any pressing; Chicco Santulli kept from canzoncine.it ("prodotto artisticamente da Chicco Santulli") and his credit on the 1985 single Sole d'agosto, medium confidence.
- Maccherock: disco added (Discogs style). Tapioca manioca: latin removed (Santulli: "non definirei il gruppo un sodalizio di musica latina"); brass added (Claudio Pascoli arranged the horns). Surf in Italy: pop rock added (Discogs style), landmark 0, note corrected (covers range from 1940 to 1985).
- Covers: none of the originals is on Fandome yet (Eddie Cochran, Shocking Blue, Little Eva, Ian & Sylvia, CCR, The Troggs, Donovan, Equipe 84 on Maccherock; Los Hermanos Rigual, Caterina Caselli, Nico Fidenco, Carlo Buti, The Rokes, Rita Pavone, Fausto Leali, Righeira on Surf in Italy). Whether Tropicana on Surf in Italy is the 1983 master is unresolved.
- No album-level comparison; track-level only: Anni ruggenti vs The Beatles' When I'm Sixty-Four.
