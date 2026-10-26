# Fandome import — Ennio Morricone, phase 02

Research checked 26 October 2026. **Exactly four new descriptor rows.** Six files in this ZIP. Research and phase status `draft` only; no GitHub changes. Existing repository: `giampierofiorelli/Fandome`, read-only branch `descriptors`. Artist id `morricone`; descriptor file `docs/descriptors/morricone.csv` still returned **404** when rechecked. Keep Phase 01 data separately; do **not** reimport its rows.

## Phase contents, chronological by first evidenced **long-playing album**

| id | title | year | type | Fandome catalogue |
| --- | --- | ---: | --- | --- |
| `morricone-laresadeiconti` | La resa dei conti | 1967 | soundtrack | **ADD** |
| `morricone-ilgrandesilenzio` | Il grande silenzio | 1968 | soundtrack | **ADD** |
| `morricone-ilmercenario` | Il mercenario | 1969 | soundtrack | **ADD** |
| `morricone-ceraunavoltailwest` | C’era una volta il West | 1969 | soundtrack | **EXISTING: retain id; review YEAR change** |

**Album-year conflict triage** (detailed links in sources.csv and evidence-notes.md):
- *La resa dei conti*: **1967** original seller-described Eureka-Parade LP EPL 2891(S) and 1967 original-release database; some label reissues instead say **1968**. Italian 1967 LP includes **both** English *Run Man Run* and Italian *Corri uomo corri*. The 1968 *The Big Gundown* U.S. LP has a different program. Film production generally 1966 (composer's foundation sorts as 1967).
- *Il grande silenzio*: **1968** Parade FPR 317 13-track Italian original LP, confirmed in separate discographies.
- *Il mercenario*: **1968** soundtrack single UA 3153 and film, **1969** French United Artists UAS 29 005 first reliably catalogued full LP. A dealer dates a German LP **1968** and modern Apple Music dates its **16-track** digital issue 1968: first-LP year remains **qualified**, so use **1969** tentatively. Expanded 16-track editions are **not** conflated with 15-track early LP.
- *C’era una volta il West*: **1968 film** and catalogue year, **1969** full 13-track French RCA LP, some Italian sources date RCA OLS 3 **1969** and others **1970**. The existing Fandome `album_id` is **unchanged**. Claude should review correction of catalogue album-year to **1969** so the descriptor and catalogue agree.

## Catalog additions and identifiers

Insert **three** new soundtrack album objects (see catalog-audit.csv); preserve `morricone-ceraunavoltailwest` and its Fandome title `C’era una volta il West`. Do not create the alternate English-title IDs, and do not merge the separate *La resa dei conti* **score** with the track called *La resa dei conti* belonging to *Per qualche dollaro in più* (phase 01).

## New tokens / pre-import validator warnings

- **Genres to register:** `mariachi` (new for this phase, Mexican festive instrumental cues), `spaghettiwestern` (already proposed **in phase 01** but **still missing on the checked branch**). `avantgarde`, `classical`, `experimental`, `folk`, `country`, `opera`, `samba`, `march`, `waltz`, `soundtrack` are currently on the guide's list.
- **Instrument:** `ocarina` used for *La resa dei conti*: **proposed by phase 01 and still absent from current `instruments.ts`**; the source is a specialist doctoral thesis at Nottingham accessible only as a search excerpt (page 179). Review this single instrument against primary evidence before promotion. All other Phase 02 instruments appear in the present `instruments.ts` list.
- **Production:** no new token. `distortion` already exists and is supported only for the guitar timbre on *C’era una volta il West*. No inferred analog tape, microphones, software or signal-chain models.
- `genreFamilies.ts` and the validator's genre whitelist also need corresponding updates when adding **new** `mariachi` and the phase-01 carry-over `spaghettiwestern`. The validator's embedded `GENRES` set must recognize each new token, or Claude's test will fail.

## Co-billed works and record producers

- **No verified co-billed album artists.** Morricone is the principal album artist for all four; Christy and Edda Dell’Orso are recorded vocal performers, **not** co-billed album artists. Bruno Nicolai is documented as **conductor** (and characterized ambiguously as a collaborator in one retrospective) but no authenticated original album-artist co-billing with Morricone was identified. Do not add to `coBilled.ts`.
- **No authenticated original-LP recording producers found:** every `producers` cell is deliberately empty. Film producer, music arranger, conductor and reissue producer credits were excluded.

## ARTIST INFLUENCES

**Not repeated in Phase 02.** The phase-01 `CLAUDE_IMPORT.md` contains sourced, artist-wide statements (Weber, Stravinsky, Petrassi). Do not infer per-album `influenced_by` from cross-artist style resemblance, collaboration or Morricone's schooling. All four per-album `influenced_by` remain blank.

## Risk / uncertainty requiring import review

- The two conflicting LP dates should be represented in Fandome's catalogue audit notes, especially **La resa dei conti 1967 vs 1968** and **West 1969 vs 1970 (Italy)**.
- Western genre label `spaghettiwestern` describes this group's recognisable musical score language, not a sole claim about film category; more specific rhythm labels are `some tracks` in genre_evidence.csv, not album-wide.
- `La resa dei conti` English and Italian title songs and `Il mercenario` Spanish vocal selections are small parts of mostly instrumental albums; `language` and `lyrics` apply to **those tracks only**.
- A 2002 GDM 16-track reissue of *Il mercenario* is commonly reviewed in full. Some cues, particularly the extended *L'Arena*, cannot be demonstrated on the French 1969 **15-track** LP and were **not** used as sole support for album-level instrument/production tags.
- Original Italian *Il grande silenzio* LP track order and names differ from certain reissues (*Voci nel vento* vs *Voci nel deserto*). No bonus reissue tracks were added.
- `dulcimer` for West remains withheld: different specialist authors call parts of Jill's texture dulcimer, celesta, harpsichord or vibraphone; preserve disputed identification in evidence notes.
- All eight scales are conservative editorial evaluations of **each selected original LP**; `polish` is blank in each due to insufficient contemporaneous recording-quality proof.

## Next: Phase 03 (proposed; no new rows in this ZIP)

Continue key late-1960s / early-1970s original albums, verifying LP chronology afresh:
1. **Il clan dei siciliani** (film 1969)
2. **Metti, una sera a cena** (film 1969)
3. **Indagine su un cittadino al di sopra di ogni sospetto** (film 1970)
4. **L’uccello dalle piume di cristallo** (film 1970)

Film year is for planning only, **not** the definitive album `year`. Morricone's enormous commissioned-film output is curated here according to the user's landmark / documented-importance criterion; non-landmark cue releases, live performances and anthology re-recordings remain excluded.
