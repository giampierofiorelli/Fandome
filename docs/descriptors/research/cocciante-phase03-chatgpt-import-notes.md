# CLAUDE_IMPORT — Riccardo Cocciante / phase 03 (incremental)

**Repository** `giampierofiorelli/Fandome`, branch `descriptors`. **Existing artist ID `cocciante`** (not `riccardococciante`); found in `src/data/catalog.ts` but not in `src/data/seed.ts`. GitHub `docs/descriptors/cocciante.csv` returned **404 at 2026-10-30 check**. This does **NOT** mean already-delivered phase01 and phase02 rows should be repeated. Verify branch again just before import and append only genuinely absent rows.

## Four rows — all missing from current catalog and descriptor file

| Album ID | Original album | Year | Form | Catalog action |
|---|---|---:|---|---|
| `cocciante-cocciante` | Cocciante | 1982 | studio | ADD |
| `cocciante-sincerita` | Sincerità | 1983 | studio | ADD |
| `cocciante-ilmaredeipapaveri` | Il mare dei papaveri | 1985 | studio | ADD |
| `cocciante-lagrandeavventura` | La grande avventura | 1987 | studio | ADD |

Album in earlier phases, **DO NOT DUPLICATE**: phase01 (`Mu`, `Poesia`, `Anima`, `L'alba`) and phase02 (`Concerto per Margherita`, `Riccardo Cocciante` [1978], `...E io canto`, `Cervo a primavera`). The 1981 `Q Concert` is a live/co-billed record, not this studio-genre phase.

**Catalog:** add the four albums to `src/data/catalog.ts` under the *existing* artist, after `Cervo a primavera` (1980). Existing catalog currently has only `Concerto per Margherita` (1976) and `Cervo a primavera` (1980); preserve imports or earlier phase additions if already present. **ID warning**: future `Cocciante` (1991) has the same title. Reserve `cocciante-cocciante` for 1982 and use disambiguation for 1991, e.g. `cocciante-cocciante1991`. Do not overwrite or fuse them.

## Token additions (verify at import)

- Genre **`westcoastpop`**: album *Sincerità* (1983) explicitly named 'Westcoast Pop' by a specialist website on the whole Italian LP, supporting precise differentiation from generic pop. Token absent in `src/data/scenes.ts`. Add it with suitable display label/family under pop.
- Genre **`technosoul`**: one of ten tracks (the title cut of *La grande avventura*) called 'techno soul' by OndaRock; place in last position, not as whole-album character. Token absent in `src/data/scenes.ts`; add if accepted as legitimate microgenre.
- All instruments and production tokens in rows match current definitions; `synclavier` and `fairlight` are *production* tokens already registered (the machines used/programmed), not newly created instruments.
- `artpop` and `orchestralpop` are **deliberately omitted** because arrangements alone do not prove a named genre. `aor` on 1983 follows a secondary album-oriented-rock classification and should be rechecked by Claude; `pop|westcoastpop|poprock|songwriter` are separately sourced even without it. Every album retains at least four tagged genres.

## Producers, instrumentation and integrity checks

- **1982** Shel Shapiro is the production credit; Sony meta uses the birth name **Norman David Shapiro**: same person, never list twice. Paul Buckmaster mainly arranger, not producer. Original personnel list transcribed from a secondary entry (including synthesizers, cello, accordion, clarinet etc.) is documented as provisional in notes; verify sleeve if available.
- **1983** James Newton Howard and Elliot Scheiner are both credited as producers in original LP transcription and Sony, so keep both. Richie Zito is a guitarist (some secondary metadata incorrectly calls him a third producer). Original LP specifically credits **Synclavier II** programming by Steve DeFuria, strings on *Sally* and *Sulla terra io e lei*, brass on *Di notte*. These music credits substantiate `synclavier|stringarrangements|hornarrangements`.
- **1985** Paul Buckmaster is listed producer on the original sleeve; Sony/Qobuz and Apple original track credits add **Riccardo Cocciante** explicitly. Both kept because the album contains those tracks. Mina is duet singer on *Questione di feeling*, not an album-wide co-billed artist/producer/influence. No invented bass/drums/synth from unrelated 1986 live personnel.
- **1987** Geoff Westley is the **sole producer**, arranger, pianist, programmer. Original Virgin VRC88 runout and Apple/Sony original original phonogram are dated **December 19, 1987**. Some discographies assign 1988, presumably due to promotional cycle; 1987 is first issue. Recorded at Parsifal Studio (London). The *Fairlight* is directly named in contemporary full-length critical discussion; `fairlight|programming` is documented.
- **Sounds_like** only one independently written comparison for 1982 (*Celeste nostalgia* resembles Lucio Battisti, `[1/8]`) and one on 1987 (*La grande avventura* resembles Vangelis synth/fiati model, `[1/10]`). **No named influenced_by:** producer/songwriter/guest involvement or artist admiration for Geoff Westley's work on a Battisti album is not a verified album-level influence by Battisti.
- **Landmark:** 1982 album `1` supported by record's multiple enduring songs and No. 2 1982 year-end; 1983 and 1985 `0` (a famous single/innovation by itself does not establish album), 1987 `1` (OndaRock 2026 *pietra miliare italiana*, independent album-level evaluation).
- **Languages:** all four rows refer to original Italian-language albums, not French/Spanish/English translations or alternate versions. Co-writing a text with French-born Étienne Roda-Gil does not change the original LP’s singing language.

## Contents (exactly 6 files)

1. `CLAUDE_IMPORT.md`
2. `cocciante_phase03_rows_ONLY.csv`: **four** original studio LPs, exact **27-column** guide header and `draft` statuses
3. `cocciante_phase03_sources.csv`: traceable source links for track/album credits, chronology, genres, comparisons and cases of conflicting metadata
4. `cocciante_phase03_genre_evidence.csv`: one referenced evidence row per genre tag, includes evidence scope
5. `cocciante_phase03_evidence-notes.md`: four detailed rationale sections with each of 8 scales justified, instrument and production credit granularity
6. `cocciante_phase03_catalog-audit.csv`: complete import instructions and exclusions

Run `scripts/validate-descriptors.ts` after catalog additions, scenes-token update and incremental import. Never replace the existing descriptor file with `rows_ONLY`, and do not remove prior phase rows.

**Next chronological phase 04 (expected):** *Cocciante* (1991), *Eventi e mutamenti* (1993), *Un uomo felice* (1994), *Innamorato* (1997). Audit any intermediate separately named studio recording before choosing four.
