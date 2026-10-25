# CLAUDE_IMPORT — Kraftwerk / Phase 02

This is a **read-only handoff** for Claude to import into Fandome branch `descriptors` after reviewing the evidence. The ZIP contains **exactly six** files, four new album rows (CSV header + four rows) and no Phase 01 rows.

## Six files

1. `CLAUDE_IMPORT.md`
2. `kraftwerk_phase02_rows_ONLY.csv`
3. `kraftwerk_phase02_sources.csv`
4. `kraftwerk_phase02_genre_evidence.csv`
5. `kraftwerk_phase02_evidence-notes.md`
6. `kraftwerk_phase02_catalog-audit.csv`

## Albums — preserve existing IDs

- `kraftwerk-radioactivity` — Radio-Activity (1975)
- `kraftwerk-transeuropeexpress` — Trans-Europe Express (1977)
- `kraftwerk-themanmachine` — The Man-Machine (1978)
- `kraftwerk-computerworld` — Computer World (1981)

All four are **already** in `src/data/catalog.ts` on branch `descriptors`; do **not** add new album records or alter their original IDs. `docs/descriptors/kraftwerk.csv` was absent at Phase 01 research kickoff. Recheck current import state now; if Phase 01 has not been imported, **do not fabricate or re-create it**. Import both phase packages separately, append the Phase 02 rows only, dedupe by ID. Do not overwrite previous rows.

## Mandatory fidelity

- **25 columns**, exactly; genre, voice, lyrics, producers, sounds_like and influenced_by use `|` with **no cap on item count**. Only notes have **15-word maximum**. Every score 0–5 integer or deliberately empty, status `draft`.
- Prior 1970–74 rows remain untouched. Original LPs exclusively (12 / German 8 and English 7 / 6 / 7 indexed tracks), never 1991 album The Mix versions or later re-recordings.
- **Language editions**: Radio-Activity (1975) original recordings have both German and English on one release, title differences are packaging. 1977–81 translated albums can have distinct German and English vocals; one album ID each, `de|en` records repertoire-level bilingual availability. Explain that metadata nuance in app if needed.
- **Producers** of all four are only `Ralf Hütter|Florian Schneider`; engineers, assistants, artwork/lyric authors and electronic drummers must not be promoted to producer. Do **not** automatically include Conny Plank, who last worked as producer/engineer on Autobahn era.
- New genre tokens **provisional and very weak**: `experimentalrock` (Experimental Rock), `protopunk` (Proto-Punk), both tagged only via AllMusic's broad genre taxonomy for *The Man-Machine*. Add to `src/data/scenes.ts` `Genre` union/display, `src/data/genreFamilies.ts`, and accepted genre validator **only if** Claude decides they meet source quality; otherwise document exclusion and remove those tags from row and genre evidence together. `experimentalrock` family experimental|rock; `protopunk` family punk|rock.
- Album-specific **source named genres** include retroactive tags `minimalsynth` and `progressiveelectronic` for 1975 and 1977 from AOTY. Unsupported extrapolations `ambient` (1975), `ambient|disco` (1977) and `technopop` (1981) have been deliberately omitted from descriptor genres.
- `influenced_by`: The Man-Machine's Fritz Lang image inspiration is not a sonic influence. Karl Bartos, Emil Schult, Conny Plank are not genre influences just because they worked with Kraftwerk. Trans-Europe Express has named homage to Franz Schubert on only one song and is flagged as such.
- Run `npx vite-node scripts/validate-descriptors.ts` (or current project validation command) and current test suite after merge. Do not mark `reviewed` without second-person check.

## Next phase

**Phase 03**: `Electric Café` (1986; originally released under this title, remastered later as *Techno Pop*), `The Mix` (1991, reworkings/remix landmark; evaluate inclusion), and `Tour de France Soundtracks` (2003). *Minimum–Maximum* (2005) live recordings excluded absent an independent landmark decision. Four slots are not compulsory if only three qualify.

Research date: 2026-10-25. Source details and controversies are in evidence notes and the evidence CSV. Import from ZIP only, no GitHub modification by ChatGPT.
