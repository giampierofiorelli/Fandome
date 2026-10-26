# CLAUDE IMPORT — Franco Battiato Phase 03 (incremental)

**Scope:** one ZIP only, four new original studio album rows from 1979–1982. Research prepared **26 October 2026**. The `descriptors` branch has been read only; **no repository changes were performed**. Files are independently UTF-8 CSV/Markdown with no scripts required for import.

## Phase contents and catalogue actions

| Fandome album ID | Title | Year | Type | `catalog.ts` | Action |
|---|---|---|---|---|---|
| `battiato-leradelcinghialebianco` | L’era del cinghiale bianco | 1979 | studio | absent | **ADD** |
| `battiato-patriots` | Patriots | 1980 | studio | absent | **ADD** |
| `battiato-lavocedelpadrone` | La voce del padrone | 1981 | studio | present | retain |
| `battiato-larcadinoe` | L’arca di Noè | 1982 | studio | present | retain |

`battiato` is the official Fandome artist ID. The catalogue's published artist row currently contains *Fetus* (1972), *Pollution* (1973), *Sulle corde di Aries* (1973), *Clic* (1974), *La voce del padrone* (1981), *L’arca di Noè* (1982), *Orizzonti perduti* (1983), *Fisiognomica* (1988), *Gommalacca* (1998). The earlier Phase 01/02 ZIPs are **not repeated** in any Phase 03 CSV. **No live, compilation or bonus recordings included.**

## Exactly six files

1. `CLAUDE_IMPORT.md`
2. `battiato_phase03_rows_ONLY.csv`: prescribed 27-column header + exactly four new rows (status=`draft`).
3. `battiato_phase03_sources.csv`: source name/type, working URL, claim and evidence strength.
4. `battiato_phase03_genre_evidence.csv`: all listed genres individually linked to specific source/scope and caveats.
5. `battiato_phase03_evidence-notes.md`: precise rationale for voice/lyrics/languages/instruments/production/scales and critical disputes.
6. `battiato_phase03_catalog-audit.csv`: current catalogue entries vs additions.

## Taxonomy proposals (must review and import if retained)

**Genre tokens absent from the checked genre list:**

- `canzonedautore` — specialist AOTY album-level categorization for *L’era del cinghiale bianco* and *La voce del padrone*. Recommend new parent `['songwriter','pop']` (or under Italian-pop where project policy prefers; decide locally).
- `classicalpop` — named AllMusic genre/style for *Patriots*. Recommend parent `['pop','classical']`; unlike `neoclassical`, it denotes a pop recording with classicizing elements.

**Instrument tokens:** none. Original `violin`, `mallets` (for credited vibraphone), `harp`, `woodwinds`, etc. are already in the live instrument list/guide. If the narrower example list from initial prompt is enforced, keep original fully-qualified instrument tokens because they are already sanctioned by the repository guide.

**Production tokens absent from checked list:**

- `arp` — ARP synthesizer branded family on *Patriots* (source says `ARP` but **does not reliably identify model ARP 2600**). Suggest label “ARP synthesizer (unspecified model)”.
- `ems` — EMS synthesizer branded family on *Patriots* (original credits say EMS; source does not certify VCS3). Suggest label “EMS synthesizer (unspecified model)”.

`oberheim`, `stringarrangements` already exist. Production blank for *L’arca di Noè* is intentional: 2008 digital `Programmer` credits must not be backdated to the 1982 session.

**Caveat:** `italodisco` is named in a crowd-edited genre catalogue for **1981** *La voce del padrone* and retained near end at **low** strength with `some tracks` scope; this is disputed, not a claim that the whole LP is a canonical Italo-disco release. `prog` at the very end of *L’arca di Noè* is weak and may be dropped by Claude's strict second-person gate because clear named-album critical evidence is scant. Details in genre evidence and notes.

## Producer and source quality notes

- Original EMI LP / Universal record notes credit **Angelo Carrara** as producer on all four. Giusto Pio is composer, violinist, string arranger and/or conductor, not automatically producer.
- Some newer digital *La voce del padrone* and *Patriots* anniversary metadata reassign Battiato as producer/co-producer or Carrara as executive producer. The original credits take precedence in `producers`; disagreements remain exposed for human review.
- All 4 `influenced_by` cells are deliberately **blank** due to lack of **album-specific documented musical influence**. Literary/spiritual quotations and critic analogies are not evidence of musical influence. `sounds_like` is only suggested similarity, not a documented genealogy.
- **No co-billed album** in these four, hence no `coBilled.ts` updates.
- Language: Sicilian `scn` on *Stranizza d’amuri*; Arabic `ar` on *Arabian Song*; English in *Summer on a Solitary Beach* refrain. These are sourced on the album level with scope clarified in research notes.

## Import to Fandome

1. Insert only the four rows into `docs/descriptors/battiato.csv` after checking that someone has not already imported them. Preserve prior Phase 01/02 rows, do not append this ZIP as a new entire catalogue file.
2. Add two catalogue albums exactly as listed above, without duplicating *La voce del padrone* and *L’arca di Noè*.
3. Register new taxonomy tokens or drop them after review in `scenes.ts` / `genreFamilies.ts` / `production.ts` and any validator allowlists. Check `italodisco` and final `prog` specifically.
4. Run `scripts/validate-descriptors.ts` and tests in the GitHub checkout. Import package local structural validation only does **not** claim the full TypeScript validator has run.

## Planned Phase 04 (research targets)

1. *Orizzonti perduti* (1983) — original studio album.
2. *Mondi lontanissimi* (1985) — original studio album.
3. *Genesi* (1987) — original opera/recorded classical work, assess soundtrack vs studio before import.
4. *Nómadas* (1987) — Spanish-language versions; include only if this materially distinct studio-language release qualifies, else replace with next original studio album *Fisiognomica* (1988). The 1985 *Echoes of Sufi Dances* is widely indexed as a compilation/foreign-language reworking; audit but **do not automatically count as another original studio album**.

Next phase remains strictly incremental. No earlier albums are carried over.
