# CLAUDE IMPORT — Ennio Morricone, Phase 07

**Research date:** 26 October 2026. GitHub branch read-only: `descriptors`; artist ID: `morricone`. This ZIP adds **four new rows only** and contains exactly six requested files.

## Phase contents (chronology by album issue, not by film premiere)

| Album ID | Original album (catalogue title) | Original album year | First independent LP |
|---|---|---:|---|
| `morricone-ilserpente` | Il serpente | 1973 | General Music ZSLGE 55495, 10 tracks; film internationally titled *Le serpent* |
| `morricone-sepoltaviva` | Sepolta viva | 1973 | Beat Records LPF 021, 13 tracks |
| `morricone-giordanobruno` | Giordano Bruno | 1973 | RCA Original Cast OLS 21, December 1973, 11 tracks |
| `morricone-ilsorrisodelgrandetentatore` | Il sorriso del grande tentatore | 1974 | Beat Records LPF 026, 6 tracks |

The three 1973 titles are kept together. Only *Giordano Bruno* has a confirmed month (December); relative month ordering of the other 1973 releases was not established. The 1974 score *Il sorriso del grande tentatore* was composed for a film listed under 1973 in the estate filmography, and first issued on a 1974 LP. Do not substitute film year for album year.

## Catalogue and import

- **Add all four soundtrack albums to `src/data/catalog.ts`** at the verified original album years. Exact IDs are above.
- At the check during this phase, `catalog.ts` included Morricone through Phase 04 plus *The Mission* and *Nuovo Cinema Paradiso*. **Phase 05 and Phase 06 had been delivered in separate ZIPs**, but some had not yet been merged into GitHub; merge them separately. The 4 rows here do not include either phase.
- Existing `docs/descriptors/morricone.csv` (checked) contained 16 earlier rows, through Phase 04, and none of these four new IDs. Never import Phase 01–06 data from this package.
- No co-billed album in this phase was verified: four original LPs credit Ennio Morricone as their soundtrack artist. Bruno Nicolai's conducting or orchestration elsewhere is **not** a co-artist or producer credit.
- **New genre token:** `psychedelic` (literal English descriptor used by Reece Crothers on *Il serpente* and by Roundtable for *Il sorriso*). Add it to `scenes.ts`, `genreFamilies.ts` and the validator GENRES set; **do not silently map to** `psychedelia`.
- **New instrument token:** `englishhorn` (corno inglese) for *Giordano Bruno*: Roberto Pugliese documents it as the thematic solo instrument. Add to `instruments.ts`; do not silently substitute `oboe` (a distinct instrument).
- **No new production tokens.** Instruments, credited production methods and machines are kept distinct. No album-specific credited record **producer/co-producer** was established, so all `producers` fields remain empty. This does not mean the recording had no producer.
- **Artist influences:** Phase 01 only. Do not repeat artist-wide influence inventory here. `Giordano Bruno` `influenced_by=Giovanni Pierluigi da Palestrina` is **album-specific**, anchored to Pugliese's description of Palestrina-style writing. The Roundtable comparisons to The Electric Prunes and William Sheller on *Il sorriso* describe sonic resemblance, **not** documented influence.

## Edition, instrument and genre cautions

1. *Il serpente*: original Italian LP has **10 tracks**; French RCA also issued a **2-track 45 rpm** in 1973; GDM 2009 digital/CD has **21 tracks**. `musiqueconcrete` is grounded in specialist criticism of the film score and side-B sonic evidence; the word *psychedelic* appears in a detailed LP review. No source proves particular synthesizer models or mixing processes on the LP.
2. *Sepolta viva*: original Beat 13 tracks; the expanded 2025 Beat issue combines it with *L'Anticristo*, a **different Morricone/Nicolai co-composition**; those cues must not enter this row. One female a cappella Latin cue is described in a review, so `choral` and `la` are warranted despite the rest being largely instrumental. No evidence for specific recording machines.
3. *Giordano Bruno*: RCA **11 tracks** versus GDM's **21-track** 2009 expansion. Review mentions some instrument variants only on the expanded nine bonus cues. The row uses only instruments traceable to titles present on the original LP. The critic's Ligeti/Penderecki comparisons are **sounds_like**, not influences. The reference to Palestrina musical forms is sufficiently explicit for the `influenced_by` field.
4. *Il sorriso del grande tentatore*: Beat **six original tracks** versus **16** on 2010 and 2024 reissues; the 2015/2019 Roundtable pressing adds two tracks. Different references say female versus children's choir; row records only **choral**. The archival label and music reference document orchestra, but not identifiable instrument models; no guitar or synth inferred. Roundtable's `electronic` and `jazz` tags are treated as **textures**, and its `library music` tag is deliberately **excluded** as a marketing classification rather than verified music style. The cited description of 'distorted-sounding' voices does **not** prove `vocalfilter`/`distortedvocals` studio treatment.
5. Sound-like comparisons (`Lalo Schifrin`, `Piero Piccioni`) for *Il serpente* are **editorial**, based on jazz-inflected thriller scoring; not sources of influence. No unverified producers, mixing techniques or machine names are supplied.

## Next phase (Phase 08, verify original issues before import)

Potential next four: *Le trio infernal* (1974 original Yuki LP), *Mosè / Moses* (1974 RCA LP), *Spasmo* (verify first standalone album), and *Le tour du monde des amoureux de Peynet* (1974, including co-credit review for Alessandro Alessandroni). Only include those with verifiable original records; if an album was first issued later, use the later release year or replace it with the next chronologically supported LP. Do **not** treat *Milano odia: la polizia non può sparare* as a 1974 LP: the proposed original album was reportedly cancelled, despite a 1974 film and later soundtrack issues (see https://gpreport.it/canali/o-s-t-original-soundtrack/ennio-morricone-milano-odia/).

## Files and method

- `morricone_phase07_rows_ONLY.csv`: 27-column header plus 4 new rows, no old phases.
- `morricone_phase07_sources.csv`: working editorial/archival/label/source URLs and support.
- `morricone_phase07_genre_evidence.csv`: each assigned token, source and whole/some-tracks/texture scope.
- `morricone_phase07_evidence-notes.md`: explicit original-LP and uncertain-field rationale.
- `morricone_phase07_catalog-audit.csv`: required new catalogue entries.
- `CLAUDE_IMPORT.md`: this file.

All values are **draft**, no algorithmic or historical certainty is inferred from the 0–5 ordinal scores. The only token additions are `psychedelic` and `englishhorn`; apply those additions before validator/tests. Verify after import; no GitHub changes were made by this research.
