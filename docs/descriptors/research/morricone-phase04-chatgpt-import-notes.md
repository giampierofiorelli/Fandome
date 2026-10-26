# Fandome import — Ennio Morricone / Phase 04

**Source check:** 26 October 2026. GitHub `giampierofiorelli/Fandome` / branch `descriptors` read-only. Artist id **`morricone`**. Current repository `docs/descriptors/morricone.csv` contains Phase 01 and 02 eight rows; Phase 03 has separately been delivered but not yet imported. Append Phase 03 separately first as necessary. **Do not replace or duplicate those rows.**

This ZIP contains **exactly four NEW 27-column rows**, plus five supporting files. It is strictly incremental.

## Four new album descriptor rows

| album_id | Official title | First full LP | Type | Source of year |
|---|---|---:|---|---|
| `morricone-metello` | Metello | 1970 | soundtrack | RCA Italy KOLS 1009 original 10-track LP |
| `morricone-lacaliffa` | La Califfa | 1971 | soundtrack | CBS Italy S70090 original 14-track LP |
| `morricone-saccoevanzetti` | Sacco e Vanzetti | 1971 | soundtrack | RCA Italy OLS 4 / USA LSP-4612 10-track LP |
| `morricone-giulatesta` | Giù la testa | 1971 | soundtrack | Cinevox Italy MDF 33/50 original 11-track LP; October 1971 |

**ALL FOUR are absent from `src/data/catalog.ts`** and must be added before / with descriptor rows. Generated identifiers follow slug rules and all have the 27-column exact header. `morricone.csv` original Phase 01/02 eight IDs and previously delivered Phase 03 four IDs are excluded from this CSV.

### Edition, date and sequencing caveats

- Film-release year is **not automatically** LP release year. *La Califfa* film 1970, actual full CBS LP 1971. Do not take 1970 from AllMusic's *composition* metadata or 1971 streaming rights as the track date.
- Within year 1971 the relative month of first release of *La Califfa* vs *Sacco e Vanzetti* is **unverified**. *Giù la testa* original Italian LP identified as October 1971. Year-level sorting is reliable; exact chronology between same-year LPs isn't asserted.
- *Metello* first LP has **10 tracks**; later GDM expanded CD has **14**.
- *La Califfa* first LP **14** tracks, later expanded CDs **23/29**. Bonus *Requiem per un operaio* and other non-original cues should **not** drive this original-LP descriptor.
- *Sacco e Vanzetti* first LP **10** tracks, with four Joan Baez vocal selections among Morricone's instrumental cues.
- *Giù la testa* first LP **11** tracks; modern CD editions can append duplicate title theme, not counted.
- *Il gatto a nove code* (1971 FILM) is **not** in this phase because only a 45 rpm record came out with the film. Full score album appears decades later: original year must be verified for the future phase (publisher AMS/BTF: https://btf.it/prodotto/ennio-morricone-il-gatto-a-nove-code-soundtrack-lp/ ).
- *Indagine su un cittadino al di sopra di ogni sospetto* remains deferred to the original **1981** full LP per Phase 03 audit.

### Co-billed album

**`Sacco e Vanzetti`**: billed prominently to **Ennio Morricone & Joan Baez** on original 1971 RCA contexts. BNF RCA record and AllMusic indicate both are principal record artists; insert in `src/data/coBilled.ts` after matching exact 1971 issue credit. Joan Baez provided English **lyrics and lead vocal** for her four numbers, Ennio Morricone the score and music. **Neither artist is automatically a credited LP producer.** Source: https://catalogue.bnf.fr/ark:/12148/cb380118484 and https://www.allmusic.com/album/sacco-e-vanzetti-original-motion-picture-soundtrack--mw0000095322 .

### New controlled tokens

- **Genre NEW:** `contemporaryfolk` — directly named “Contemporary Folk” by AllMusic for the Sacco e Vanzetti original album. Add to `src/data/scenes.ts`, to `src/data/genreFamilies.ts` (parent: `folk`), and validator genre allowlist `scripts/validate-descriptors.ts`. Keep `folk` separately because broad and specific are both in evidence.
- Genres previously in allowed list: `classical`, `march`, `easylistening`, `jazz`, `avantgardejazz`, `folk`, `spaghettiwestern`, `avantgarde`, `lounge`, `soundtrack`.
- New instrument tokens: **none**; no inferred new machine/instrument model. **New production tokens: none**. All `production` and `producers` fields **intentionally blank**: original recording technique and producer credits not verified. Bruno Nicolai was a **conductor**, Joan Baez lyrics/voice, not enough to place them in producers.
- `avantgardejazz` for *La Califfa* is a MusicBrainz **community genre tag**, the least secure claim. Keep at tail, see evidence notes; curator should review before accepting.
- *Metello*: original track identifies `cembalo`, critic says `cimbalom`. Both instrument tokens left **out** pending authoritative original-recording personnel/score clarification.

### ARTIST INFLUENCES

**Phase 01 only.** Do not repeat artist-wide influences here. `influenced_by` remains blank: no documented album-specific creator attribution to external artist influences.

### Files

1. `CLAUDE_IMPORT.md` (this note, phase audit, caveats, next phase)
2. `morricone_phase04_rows_ONLY.csv` (exact header + four new records)
3. `morricone_phase04_sources.csv` (per-album source-support records)
4. `morricone_phase04_genre_evidence.csv` (one entry per assigned genre)
5. `morricone_phase04_evidence-notes.md` (field-by-field reasoning and disputes)
6. `morricone_phase04_catalog-audit.csv` (album ids, missing catalogue, deferrals)

### Proposed Phase 05

Continue **original LP chronology**, starting with early 1972–73 candidates; check first issue independently: **`La classe operaia va in paradiso`** (film 1971; original LP date to verify), **`La cosa buffa`** (1972 Cinevox MDF 33/60 first 9-track LP evidenced), **`Il diavolo nel cervello`** (1972; first album date to verify), and **`Questa specie d’amore`** (**1973 original LP**, even though the film is 1972, per original-label chronology Quartet Records). Avoid replacing these by soundtrack singles or posthumous archival releases; select exact four only after original LP checks. See https://quartetrecords.com/product/questa-specie-damore/ .
