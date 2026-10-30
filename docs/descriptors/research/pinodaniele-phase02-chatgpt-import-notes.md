# CLAUDE IMPORT — Pino Daniele, phase 02 (incremental)

Checked `descriptors` branch, 30 October 2026. Artist `pinodaniele` is present in `catalog.ts` and absent from `seed.ts`. The artist descriptor file `docs/descriptors/pinodaniele.csv` **does not exist** at checkout time. The 4 albums in phase 01 (Terra mia, Pino Daniele, Nero a metà, Vai mò) **were already delivered in the previous ZIP and are intentionally skipped** here. **Only 4 new rows** are contained here; append them to the phase-01 rows without overwriting them. No earlier rows or other artists are repeated.

## Phase 02 contents

1. `pinodaniele-bellambriana` — **Bella ’mbriana** (1982), studio; **already in catalogue**, existing ID and title preserved.
2. `pinodaniele-musicante` — **Musicante** (1984), studio; **ADD TO CATALOGUE**.
3. `pinodaniele-ferryboat` — **Ferryboat** (1985), studio; **ADD TO CATALOGUE**.
4. `pinodaniele-bonnesoiree` — **Bonne soirée** (1987), studio; **ADD TO CATALOGUE**.

## Catalogue additions required for this phase

| Title | Original year | Type | New proposed ID |
|---|---:|---|---|
| Musicante | 1984 | studio | `pinodaniele-musicante` |
| Ferryboat | 1985 | studio | `pinodaniele-ferryboat` |
| Bonne soirée | 1987 | studio | `pinodaniele-bonnesoiree` |

**Do not create another Bella ’mbriana entry.** The catalogue already has it under the canonical album ID `pinodaniele-bellambriana`. Existing catalogue discography still also lacks *Terra mia* and many subsequent releases; these were audited in phase 01. If that previous import hasn't happened, import it first and add `pinodaniele-terramia` separately per phase 01. No future albums are silently pre-imported in this ZIP.

## New token requests (confirm and add before validation)

**Genres:**
- `arabrock` — Pino's own term “rock-arabe / Arab rock” for *Bonne soirée*, independently recognized as a stylistic break by OndaRock. Suggested families: `rock|worldmusic|ethnorock`.
- `ethnometal` — OndaRock's etno-metal description **of “Mama, E!” only** on *Bonne soirée*; low-weight long-tail token. Suggested families: `metal|worldmusic|ethnorock`.

**Instruments:**
- `chitarrabattente` — southern Italian steel-string, five double-course *chitarra battente*, acoustic and electric versions named on *Musicante*. Suggested close group `guitar|acousticguitar` but preserve separate identity.
- `tammorra` — Neapolitan large frame drum, explicitly credited to Franco Faraldo on *Musicante*. Suggested `percussion|framedrum`.

**Production:** no newly required token. `synclavier`, `fairlight`, `programming`, `layeredvocals`, `overdubbing`, `hornarrangements`, `stringarrangements`, `liverecording` are on the current list. Original sleeves name “PPG” without a specific model; **do not substitute `ppgwave`**, so the instrument's unresolved model is left out.

**Catalogue token correction for phase 01:** the current genre list already has **`neapolitansong`** (display label *Canzone napoletana*), so that existing token is used in phase 02. Phase 01 suggested a redundant new token `canzonenapoletana` for the same name; Claude should map the phase-01 term to `neapolitansong` on import, leaving those prior albums' research and scales unchanged. The previously proposed `tarumbo` token remains separate.

## Co-billed records

None in phase 02. **All four are solo Pino Daniele releases**, despite famous guests. Guest credits for Wayne Shorter, Alphonso Johnson, Naná Vasconcelos, Steve Gadd, Gato Barbieri, etc. do not constitute co-billing or musical influences.

## Caveats for Claude review

- **Bella ’mbriana:** official website lists computer programmer **Aldo Bassi**, original-LP-derived transcription **Aldo Banfi** and Synclavier II. The row includes generic `synclavier|programming` on instrumental evidence; verify original sleeve and attributed person. Official Amoruso **harmonica** vs original transcription **melodica** also unresolved: neither is asserted in this row pending confirmation.
- **Musicante:** original sleeve transcriptions explicitly credit **Fairlight** and **PPG** programming, but give no PPG model. `fairlight` included; `ppgwave` excluded. `chitarrabattente` and `tammorra` are **new instruments**. Critic Carlo Pasceri denies dominant blues/funk on the whole LP, whereas OndaRock names blues/funk in individual tracks; both views recorded in genre evidence.
- **Ferryboat:** `producers` includes **Pino Daniele, Luciano Torani, Rino Zurzolo**, because the official site separately calls the latter two “Recordings produced by”. Confirm if Claude's import policy treats *recording production* as full credited production; the main “Produced and arranged by” credit names Pino alone. `liverecording` describes the direct studio recording of “Quaccosa”, NOT a concert. Fender piano model cannot be confirmed, so `electricpiano` excluded.
- **Bonne soirée:** official site reports an **original 10-song vinyl** and **11-song cassette/CD** with “Watch Out”. Lyrics/genre evidence include the widely available 11-track edition; [1/11] applies if any one-track sounds_like link is later found. Short French greeting and Spanish phrases are not principal singing languages. The artist's original album note says “rock-arabe”; strong genre evidence, but it names no specific influential performer.
- **OndaRock comparison controls:** Bella “Mo basta” → Talking Heads *Remain in Light* [1/11], “Io vivo come te” → George Benson [1/11]; Musicante “Just in Mi” → Lucio Dalla [1/10]; Ferryboat “Bona Jurnata” → Public Image Ltd. “Rise” on *Album* (1986) [1/10] and “Che ore so” → Paul Young [1/10]. A 1986 sonic comparison to a 1985 album is **retrospective, not an influence**. No automatic comparisons from guests or label bios.
- `landmark=1` for *Bella ’mbriana*, *Musicante*, *Bonne soirée* rests on **independent assessments of a defining early cycle / distinct world-music shift / Arab-rock rupture**, respectively. *Ferryboat* stays 0 for lack of a comparably clear whole-career impact assertion. All statuses are `draft`.
- The **phase-01** full audit tentatively dated *Sotto 'o sole* 1991; independent OndaRock and AllMusic show **1992**, so reconcile the edition before that later-phase catalogue addition. No phase-01 album row has been amended here.

## Next phase — phase 03 (provisional)

Chronological candidates: **Schizzechea With Love (1988)**, **Mascalzone latino (1989)**, **Un uomo in blues (1991)**, **Sotto 'o sole (1992; check edition)**. Before planning, inspect whether the film soundtrack *Le vie del Signore sono finite* (record issued 1988) merits its own descriptor and whether it precedes any of these in sequence. If yes, use the earliest 3–4 qualifying missing records, not an inflexible list. Live recordings including *Sciò Live* remain excluded.

## Six files in this ZIP

- `CLAUDE_IMPORT.md`
- `pinodaniele_phase02_rows_ONLY.csv`
- `pinodaniele_phase02_sources.csv`
- `pinodaniele_phase02_genre_evidence.csv`
- `pinodaniele_phase02_evidence-notes.md`
- `pinodaniele_phase02_catalog-audit.csv`
