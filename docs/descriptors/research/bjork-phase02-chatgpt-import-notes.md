# CLAUDE_IMPORT — Björk Phase 02

## Incremental contract

Only the **four** Phase 02 rows in `bjork_phase02_rows_ONLY.csv`. Do **not** append Phase 01's 1977 *Björk*, 1990 *Gling-Gló*, 1993 *Debut* or 1995 *Post* again. Read-only GitHub `descriptors` was checked on 25 October 2026; `docs/descriptors/bjork.csv` was absent at this stage; check it again **immediately before merging**, since Claude may have imported Phase 01 in the meantime. Preserve existing rows and identities. Strict 27 columns, status `draft`.

## Phase 02 rows

1. `bjork-telegram` — *Telegram* (1996), `remix` — **ADD** catalogue record.
2. `bjork-homogenic` — *Homogenic* (1997), `studio` — **EXISTS** catalogue.
3. `bjork-selmasongs` — *Selmasongs* (2000), `soundtrack` — **ADD** catalogue record.
4. `bjork-vespertine` — *Vespertine* (2001), `studio` — **EXISTS** catalogue.

Both additions to `src/data/catalog.ts` precede descriptor validation. No co-billed record in this phase: *Selmasongs* guest features Thom Yorke/Catherine Deneuve, not a joint album credit. `Telegram` is titled and credited to Björk even though the remixers are prominent.

## New tokens to register (and genre-family parents)

**Genres:** `neoclassical` (Pitchfork names neoclassical passages on *Homogenic*; suggested parents `classical`/`modernclassical`); `microsound` (album genre identified in a secondary index and supported independently by musicological analysis of microbeats; suggested parents `electronic`/`experimental`). The genre evidence file marks track scope. All other genre tokens in rows match allowed Fandome genre list read on 25 October 2026. Some identified parent mappings such as `orchestralpop` is a **qualified editorial sonic mapping** rather than a literal genre label. `chamberpop` is named by Sputnikmusic, while `glitchpop`, `ambientpop` and `folktronica` appear in secondary genre listings. Evaluate the evidence rows before approving imports.

**Instruments:** `clavichord` (Guy Sigsworth, *Homogenic* / *Vespertine*); `glassharmonica` (Alasdair Malloy, *Homogenic*); `musicbox` (custom *Vespertine* instrument), `glockenspiel` (*Vespertine*). They are **not** synths or generalized `mallets`; `glassharmonica` is a rubbed-glass musical instrument, distinct from harmonica.

**Production:** `akais3000` (Homogenic sampler), `yamahaqy20` (Björk composition sequencer; precursor to recorded arrangements), `microbeats` (pointillistic small sound beat construction, *Vespertine*), `sibelius` (notation software for strings and music boxes, confirmed by Björk). `tr909`, `sampling`, `layeredvocals`, `distortion`, `fieldrecordings`, `protools` are existing allowed values.

**Token syntax:** lowercase ASCII alphanumeric only. Update `src/data/scenes.ts`, `src/data/genreFamilies.ts`, `src/data/instruments.ts`, `src/data/production.ts` and the validator's genre-token list as required by project validation. `neoclassical` is a genre, `sibelius` production software, `glockenspiel` an instrument.

## Credit, edition, and methodology caveats

- **Telegram:** UK November 1996 versus US January 1997. Official store calls it a remix *compilation*; `type=remix` to fit Fandome taxonomy. Original UK 10 tracks; later/US 11 tracks. Producer names reflect *credited original/additional producers* on component tracks, **not** a list of remixers. `rap` is low-weight/edition-specific; check if accepted for core UK selection.
- **Homogenic:** Eumir Deodato string arranger, **not producer**; Guy Sigsworth, Howie B, Mark Bell and Björk have production credits. **Markus Dravs** is described as a producer by the label Bandcamp page but engineer/programmer by much granular music metadata; reconcile before final approval. `yamahaqy20` is a composition device, not proof of final studio signal chain. Piano-like timbres do not automatically justify a piano instrument tag.
- **Selmasongs:** Film score/fantasy musical, seven-track original UK album. Original recording differs lyrically from film. Machine and train sounds explicitly named by label; field recording means sourced everyday sound, not field-mic rig knowledge. Guy Sigsworth celesta/performance does not make him a producer; Jake Davies has an explicit Pro Tools technical credit.
- **Vespertine:** **Björk and Thomas Knak** directly appear as producers in the album credits. Marius de Vries is production assistant; Matmos and Matthew Herbert credited programming; a Pitchfork review casually calls Matmos co-producers, but the source hierarchy favors original credits. A later Björk statement referencing a **MOTU 828** describes a new favorite she *recently* got after Vespertine; therefore **do not insert MOTU 828**. `sibelius` used in compositional notation, not mixing/mastering. Microbeats not evidence for MPC/TR-808/TR-909.
- `sounds_like`: editorial comparisons, explicitly not verified historical influence. `influenced_by` only Aphex Twin and Arvo Pärt for *Homogenic*, supported by Pitchfork critic; all other album influences left empty.
- Scales are **editorial values** supported by particular album criticism, not numerical measurements. Check `bjork_phase02_evidence-notes.md` for per-album reasoning and contrary reviews.

## Next phase (strictly after 2001)

- *Medúlla* (2004), `studio`.
- *Drawing Restraint 9* (2005), `soundtrack`.
- *Volta* (2007), `studio`.
- *Biophilia* (2011), `studio`.

Separately audit *Army of Me: Remixes and Covers* (2005) for the project rule on landmark/remix collections; do not silently insert it out of chronology. Exclude ordinary live and repeated archival issues.
