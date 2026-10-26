# CLAUDE_IMPORT — Franco Battiato, Phase 08 (incremental only)

**Research date:** 26 October 2026. **Artist ID:** `battiato`. **Branch:** `descriptors` (READ ONLY). No repository writes from this archive.

## Rows to import

| ID | Title | Original year | Type | Catalogue action |
|---|---|---:|---|---|
| `battiato-diecistratagemmi` | Dieci stratagemmi | 2004 | studio | ADD |
| `battiato-ilvuoto` | Il vuoto | 2007 | studio | ADD |
| `battiato-fleurs2` | Fleurs 2 | 2008 | studio (new cover recordings) | ADD |
| `battiato-inneresauge` | Inneres Auge | 2009 | compilation (re-recordings + new) | ADD |

**STRICT INCREMENTAL:** the CSV contains exactly four Phase 08 rows with the mandated 27-column header. Never use it to replace or rebuild Phase 01–07. Existing public `battiato.csv` currently shows only a partial imported set; phase boundary refers to what was **delivered**, not what is already on GitHub. When importing, append only genuinely missing IDs and avoid overwriting previous work.

## Contents
- `CLAUDE_IMPORT.md`: these instructions and caveats
- `battiato_phase08_rows_ONLY.csv`: only four new descriptors
- `battiato_phase08_sources.csv`: 33 rows of album-specific citations with direct URLs
- `battiato_phase08_genre_evidence.csv`: 28 per-genre evidence records; album/track/texture/metadata scope
- `battiato_phase08_evidence-notes.md`: instrument/production credits, scale reasoning, controversies, linguistic scope
- `battiato_phase08_catalog-audit.csv`: original catalogue state / import status

## Producer and collaboration rules
- `Dieci stratagemmi`: Franco Battiato producer, Francesco Cattini **executive producer**, Angelo Privitera pre-production; production field never includes an executive-only credit.
- `Il vuoto`: Franco Battiato producer; Pino Pischetola rhythm engineer, not a co-producer.
- `Fleurs 2`: Franco Battiato producer; Cattini executive producer; Carmen Consoli, Antony, Anne Ducros, Sepideh Raissadat, Juri Camisasca are track duet guests, NOT album co-billing.
- `Inneres Auge`: Franco Battiato artistic producer, as credited in period specialist musician list; record title includes subtitle `Il tutto è più della somma delle sue parti` but CSV short title maps to natural Fandome ID.

## New tokens
**Genre tokens:** none requiring insertion. `chamberpop`, `alternativeindierock`, `experimentalrock`, `electropop` and all other used genre tokens already exist in guide/`scenes.ts` vocabulary. `chamberpop` is an interpretive mapping of a qualified critic's explicit **chamber music arrangements** (not a quoted taxonomy) and can be challenged on conservative import. `alternativeindierock` and `experimentalrock` are low-relevance **AllMusic catalog tags** for *Fleurs 2*, included only to obey no-limit/each-source genre rule; their evidentiary scope is **provider metadata**, not whole-album sound. Keep them last or omit only with a documented editorial decision.

**Instrument tokens:** none. `guitar`, `synth`, `doublebass`, `saxophone`, `organ`, `trumpet` etc already in guide; the abbreviated request list allowed `guitar` via repository guide, so no unsupported instrument subtype was guessed.

**Production tokens:** none. `drumprogramming` and `stringarrangements` are present in current `production.ts`. No model/software was inferred from 2000s electronic sound.

**Additional genre claim:** original *Dieci stratagemmi* disc style is explicitly Pop Rock/Experimental/Electronic/Rock. *Il vuoto* AllMusic gives Neo-Classical (small texture); *Fleurs 2* critics strongly dispute AllMusic rock/experimental tagging. All genre–source–scope details are in evidence CSV.

**Co-billed albums in this phase:** none; features/guest appearances are not album-level joint artist credits.

## Release and evidence caveats
1. *Il vuoto*: originally reported as released **9 February 2007** by Rockol; AllMusic shows **6 March 2007** (different market or catalogue date); keep year 2007.
2. *Fleurs 2*: original release **14 November 2008** from Universal; later AllMusic market release listed December 23.
3. *Inneres Auge*: original full CD is **13 November 2009**, not its **30 October** preceding single. `Tibet` was reportedly on an earlier digital bonus edition; 4 "new tracks" / 3 "new originals" is edition-specific.
4. *Inneres Auge* editorial classification `compilation` reflects re-recordings/rarities; if Fandome considers new studio re-recordings all `studio`, flag and retain original type as an auditable decision. Do not mark as standard old-master greatest hits.
5. *Dieci stratagemmi* direct Stockhausen citation: track 8 quotation/resemblance *Gesang der Jünglinge* confirmed by Battiato site; do not automatically set `sampling`.
6. Fleurs cover originals are **not** documented album-level musical influences; therefore `influenced_by` stays empty for both *Fleurs 2* and *Inneres Auge*. Track-original composer Tchaikovsky qualifies for *Il vuoto* with a narrow note.

## Next Phase 09 (provisional; validate special-release eligibility first)
- *Apriti sesamo* (2012)
- *Joe Patti's Experimental Group* (2014), featuring co-billing/production with Pino “Pinaxa” Pischetola
- *Le nostre anime* (2015), anthology with documented new recordings
- *Torneremo ancora* (2019), last orchestral release containing new material

Also separately audit 2011 *Telesio* for an actual distributed full audio album and 2013 *Del suo veloce volo* for landmark-live exception (with Antony and the Johnsons), before finalising those choices. No unreleased material included.

Claude imports IDs/tokens where necessary, validates with `scripts/validate-descriptors.ts`, and runs its own tests. This archive has no scripts.
