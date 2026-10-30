# CLAUDE IMPORT — Gabriella Ferri, phase 02 (incremental)

**Source:** public repository `giampierofiorelli/Fandome`, read-only branch `descriptors`, checked 30 October 2026. Existing artist ID: **`gabriellaferri`** in both `src/data/catalog.ts` and `src/data/scenes.ts`; **not in `seed.ts`**. The current catalogue has **no album rows** for Gabriella Ferri. `docs/descriptors/gabriellaferri.csv` returned **404** at the check. This does **not** mean phase 01 can be repeated: the four earlier descriptors were delivered to the user independently and could still be awaiting import.

## This phase — exactly four new studio albums

| id (copy as written) | Original release | year | type | catalogue action |
| --- | --- | --- | --- | --- |
| `gabriellaferri-lamoreefacilenonedifficile` | L'amore è facile, non è difficile... | 1972 | studio | ADD |
| `gabriellaferri-sempre` | Sempre | 1973 | studio | ADD |
| `gabriellaferri-remedios` | Remedios | 1974 | studio | ADD |
| `gabriellaferri-mazzabubu` | Mazzabubù | 1975 | studio | ADD |

IDs follow existing catalog's `slug` rule: accented characters removed, all non-alphanumerics deleted. Verify after additions that no collisions occur, and run the normal descriptor validator/tests. **No already-existing IDs are changed.**

## Skipped / already covered

**Already delivered in phase 01, never repeat:**
- `gabriellaferri-gabriellaferri` — *Gabriella Ferri* (1966)
- `gabriellaferri-gabriellaferri1970` — *Gabriella Ferri* (1970)
- `gabriellaferri-lassatecepassa` — *...Lassatece passà* (1970)
- `gabriellaferri-esefumaronoazaza` — *...E se fumarono a Zazà* (1971)

*Gabriella, i suoi amici... e tanto folk* (Amico, ZSKF 55083, 1972) is a **multi-artist compilation** featuring Otello Profazio, Laura Betti and Luisa De Santis as well as Ferri; it repackages existing repertoire and is **excluded** by the owner's Oct 2026 no-compilations instruction. Do not treat it as a fifth new studio LP or duplicate an original song. It can be catalogued later only if requested.

**No co-billed records in phase 02.** This anthology is out of scope, and the album's composers, session players, TV co-stars and arrangers are not co-billed credited artists.

## Genre / instrument / production vocabulary

- **NEW GENRE:** `habanera` (the explicitly named historical genre of *La paloma*, album *Remedios*, 1/11 tracks). Proposed family relationships: `latin`, `cuban`/`soncubano` where appropriate; preserve source's exact term, do **not** silently substitute a neighbouring style. It is ranked 7th, not presented as a whole-LP genre.
- **No new instrument tokens** or production tokens. All recorded physical instruments and production processes already exist in the repository's `instruments.ts` and `production.ts`.
- `ska` on *Remedios* is only a brief **'almost ska' rhythmic texture**, in last position, not a claim that the entire record is ska.
- `polka` and `waltz` on *Sempre* document specific tracks and are ranked below the three major full-album descriptors; `polka` on the earlier album is top-three because **Rosamunda is the major lead number**.
- As required, the genre evidence CSV contains a separate row for every genre token in every descriptor.

## Credits / editions / caveats

1. **1972 and 1973 producers:** original RCA LP credits explicitly name **Roberto Formentini**. The De Angelis brothers, Gianni Oddi, Flavio Bocci and Franco Pisano are arrangers/orchestral staff, not producers unless separately credited. The 1972 engineer Sergio Patucchi is not a producer.
2. **1974 Remedios producer left EMPTY:** original RCA sleeve says **'realizzazione di Cesare De Natale'**, later Sony song metadata says **'Project Coordinator'**; the owner excludes executive/coordination roles and there is no unambiguous album **Producer** credit in opened original documentation. Some secondary discographies call him producer, so this conflict is logged for Claude, not silently reconciled by invention.
3. **1975 Mazzabubù:** original RCA LP metadata **does explicitly** credit **Cesare De Natale as Producer** in the original pressing transcription; later metadata says Project Coordinator. Claude should verify the first-pressing credit against physical sleeves if necessary, without importing the TV orchestra as an album credit.
4. **1975 original has 11 tracks** (RCA pressing, period 1975 press and original Sony/Apple LP). Spotify's later digital programme shows **12** with *Mazza Bubù* as an extra. The row describes the **original 11-track LP**, not expanded streaming.
5. `influenced_by` deliberately empty for all four. Violeta Parra, Renato Carosone, Fred Buscaglione, Adriano Celentano, Totò, Beethoven, Liszt, Verdi and Glenn Miller are cited in reviews as **covered/quoted composers or recordings**, not documented artist- or producer-stated influences on these albums. A borrowed musical passage is not a critic's *sonic sounds_like* comparison either.
6. Instrument claims are deliberately conservative: 1972 only guitar from original credit; 1975 only piano from critical description. These sparse instrument fields **do not invite filling with genre stereotypes**. Production fields left blank where no album technique was documented.
7. `landmark=1` on the 1972 career breakthrough (*L'amore è facile*), 1973's career-defining TV/LP breakthrough (*Sempre*) and 1974's explicit independently designated OndaRock *Pietra Miliare* (*Remedios*). `landmark=0` on 1975 *Mazzabubù*.
8. Fandome's scene record already contains `gabriellaferri: 'IT it 1960 folk'`, so **no new artist scene, tagline or overall influences** are needed in this second phase. Phase 01 already supplied the artist-global influences; do not repeat them.

## ZIP content (six files, no scripts)

- `CLAUDE_IMPORT.md`
- `gabriellaferri_phase02_rows_ONLY.csv` — exactly four 27-column rows
- `gabriellaferri_phase02_sources.csv` — album-specific credited and critical sources with direct URLs
- `gabriellaferri_phase02_genre_evidence.csv` — exactly one genre row per album/genre, with scope
- `gabriellaferri_phase02_evidence-notes.md` — album scales, personnel, exclusions and critic conflicts
- `gabriellaferri_phase02_catalog-audit.csv` — missing catalogue additions

## Next phase 03 (planned)

1. *...E adesso andiamo a incominciare* (1977): check **original album vs separate 1977 two-disc Pandemonium edition**; if the two-disc version is a live expansion or alternate pressing, do not duplicate material or add a co-billed new studio album merely because of the band credit.
2. *Gabriella* (1981)
3. *Nostargia* (1987)
4. *Ritorno al futuro* (1997)

Phase 04 would then cover *Canti diVersi* (2000) and any other eligible, **source-verifiable** released record missed in prior chronological checks. Exclude compilations and live sets for now.
