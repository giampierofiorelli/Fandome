# Fandome — Suede, Phase 01 (import handoff)

**Branch audited:** `descriptors` (read-only); no GitHub changes made.  
**Artist ID:** `suede`; **artist:** Suede.  
**Incrementality:** 4 new 27-column rows, original UK studio album releases, 1993–1999. `docs/descriptors/suede.csv` was absent at the audit; do not overwrite any subsequently imported rows. Re-check before merging.

## Albums (IDs already resolve via catalog.ts)

| Fandome album_id | Title | Year | Type | Catalogue action |
|---|---|---:|---|---|
| `suede-suede` | Suede | 1993 | studio | none |
| `suede-dogmanstar` | Dog Man Star | 1994 | studio | none |
| `suede-comingup` | Coming Up | 1996 | studio | none |
| `suede-headmusic` | Head Music | 1999 | studio | none |

Do not derive any new id from US branding **The London Suede**. That is the same band, not a new artist room. The label's UK original-release years take precedence over later American issues (e.g. *Coming Up* 1996 UK, not 1997 US).

## Files included

1. `CLAUDE_IMPORT.md` — this handoff.
2. `suede_phase01_rows_ONLY.csv` — only these four new rows, **27 exact columns**, status draft.
3. `suede_phase01_sources.csv` — named sources and exact support.
4. `suede_phase01_genre_evidence.csv` — **one row per genre per album** with album-vs-track scope.
5. `suede_phase01_evidence-notes.md` — the reasoning and uncertainty.
6. `suede_phase01_catalog-audit.csv` — confirmed catalogue membership.

## New tokens to consider (do not silently map to nearby tokens)

- **Genres:** `neoglam` — AllMusic's **Neo-Glam** label on these albums; separate from the already available `glamrock`. Other genre tokens in rows are already in the current Genre set, including `noisepop`.
- **Instruments:** `viola` (1993 debut; original string personnel); `cimbalom` and `bawu` (*Dog Man Star*, original credits to Andrew Cronshaw). Ba-wu is explicitly named as a type of flute in the liner credits; `flute` also captures conventional flute parts. Keep exact new instrument name `bawu` for search specificity.
- **Production:** no new tokens. `stringarrangements` is documented for the 1993 debut (track *Sleeping Pills*), *Dog Man Star* (orchestra arrangements by Brian Gascoigne), and *Coming Up* (Craig Armstrong). `drumprogramming` on *Head Music* is supported by Anderson describing writing via drum machines in his 1999 NME interview. No machine model, effects chain, or DAW was presumed.

## Credits and source caveats

- Producers: Ed Buller on *Suede*, *Dog Man Star*, and *Coming Up*; Steve **Osborne** (not Osborne + Oakenfold) on *Head Music*. The other engineers, mixers, string arrangers, players, and mastering personnel are **not** additional producers.
- The *Dog Man Star* orchestral parts are credited to the Sinfonia of London and orchestrated/conducted by Brian Gascoigne, not a production credit. `cimbalom` and `bawu` are niche textures, not pervasive instrumentation.
- Neil Codling joins for *Coming Up*; guitarist Richard Oakes replaced Bernard Butler. Do not attribute Butler to *Coming Up* or *Head Music*.
- Review aggregators' **neo-psychedelia / noise pop / prog** labels may apply only to parts of an album; see the genre-evidence `scope` column. Do not infer production instruments from genre.
- Some sites show the later US release of *Coming Up* as 1997; the UK first release was **2 September 1996**, documented by Nude Records.
- `sounds_like` is editorial similarity, **not a collaboration or influence claim**. `influenced_by` is limited to sources naming musical influence (Bowie, Smiths, Scott Walker), and stays empty for *Head Music* where an album-level direct influence could not be securely established.
- Instrument source for debut says viola in the original credit list. Several sources have typographical discrepancies in musician names; tokens report instruments, not artist names.

## Next phase

Phase 02, in chronological studio order: *A New Morning* (2002), *Bloodsports* (2013), *Night Thoughts* (2016), *The Blue Hour* (2018). Then *Autofiction* (2022), *Antidepressants* (2025). *Sci-Fi Lullabies* (1997) is a highly regarded B-sides compilation; **review separately** as a potential qualifying compilation rather than duplicating album tracks. Do not import it automatically without explicit compilation audit.

## Import validation

Read and append only novel `album_id` entries. Check the allowed genre/instrument/production lists; add the new tokens documented above, update the type and genre family mapping where appropriate, and run `scripts/validate-descriptors.ts`. No repository validation has been run by this research deliverable. Keep `status=draft` until a second-person review.
