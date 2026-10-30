# CLAUDE_IMPORT — Riccardo Cocciante, Fase 01

Repository `giampierofiorelli/Fandome`; read-only check **2026-10-30**, branch `descriptors`. **Artist ID = `cocciante`**, not `riccardococciante`. Artist is listed in `src/data/catalog.ts` with only *Concerto per Margherita* (1976) and *Cervo a primavera* (1980); no `src/data/seed.ts` entry. Both `docs/descriptors/cocciante.csv` and `docs/descriptors/riccardococciante.csv` were 404. Recheck GitHub immediately before merge. Never duplicate a row already present. This ZIP is NOT yet merged.

## New albums, exactly four chronological original studio LPs

1. `cocciante-mu` — *Mu*, 1972 (original LP billed to **Richard Cocciante**, normalized to **Riccardo Cocciante** for existing Fandome artist)
2. `cocciante-poesia` — *Poesia*, 1973 (also originally **Richard**)
3. `cocciante-anima` — *Anima*, 1974
4. `cocciante-lalba` — *L'alba*, 1975

All **four missing in catalog**, ADD four studio entries to existing `cocciante` array in `src/data/catalog.ts` (keep chronological order). The slug is lowercase letters/digits with punctuation removed. All four rows `status=draft`, original dates, exactly 27 columns, 0–5 scales, notes no more than 15 words, 4+ album/track-supported genres ranked by prominence.

## Files inside ZIP (exactly six)

- `CLAUDE_IMPORT.md` (this guide and validation rules)
- `cocciante_phase01_rows_ONLY.csv` (exactly 4 rows, do NOT treat as a full-file replacement)
- `cocciante_phase01_sources.csv` (album-specific URL/source audit)
- `cocciante_phase01_genre_evidence.csv` (one documented line for every genre token)
- `cocciante_phase01_evidence-notes.md` (production, credited musicians, scale rationales, uncertainties)
- `cocciante_phase01_catalog-audit.csv` (new and previously present albums, releases excluded and future chronology)

## Classification and credits requiring care

- **Mu** original year 1972, **NOT 1990** shown by Sony Legacy’s remastered CD catalogue page. Original 1972 LP has 9 indexed pieces (introduction + four narrated sections). No ambiguity in artist ID despite old sleeve name **Richard**. The first studio LP is an explicitly supported `rockopera` and `symphonicprog` record; `prog`, `rockopera`, `symphonicprog`, `songwriter` already exist in `scenes.ts`.
- **Poesia** original year 1973, not the **1998** AllMusic reissue date. Original 10 tracks: *Noi* and *Soli* are independent songs, although Estatica compresses them as *Noi soli*. Original RCA/Sony credits confirm Paolo Dossena produced. The title track's original release by Patty Pravo is not an influence.
- **Anima** production conflict: original-album history names **Marco Luberti** and **Paolo Amerigo Cassella** as producers; contemporary Sony/Qobuz metadata gives **Franco Pisano** track-level **Producer** credit on at least 3 songs, yet older histories call him an arranger; include all three named producer roles with exact caveat. **Ennio Morricone** arranged four songs only. Check original 1974 sleeve if possible and correct ambiguous track-level production. This is a landmark original LP with Bella senz’anima and Quando finisce un amore.
- **L'alba** producer **Marco Luberti**; original record credits Niko Papathanassiou as *Project Coordinator* and Lucas Sideras/Sergio Rendine as arrangers. Specialist website calls Niko a producer, a contradiction that needs original LP verification; never add coordinator by inference. Do not assume Vangelis performed on this 1975 LP merely because he arranged the **1976** follow-up.
- **Voice and instruments**: on Poesia, singer-director relationship means vocal type blank absent broad evidence. On L’alba, only sourced piano rather than guessed entire rock band. Mu sleeve documents many unique textures but unusual santoor/flexatone tokens were withheld until source corroboration. The `mellotron` on Mu carries string simulations, so no separate literal `strings` token was added. `moog` in production requires original documented named Moog, present in Mu. `belting` on Anima and L’alba means documented aggressive crescendos, not opera training.
- **Critic-based sonic comparisons** on Mu to **King Crimson (In the Court of the Crimson King)** and **New Trolls (Concerto grosso per i New Trolls)** come from The Italian Song site; these are `sounds_like` only, not stated influences. All four `influenced_by` blank because no artist/producer testimony naming a musical influence on these particular albums.
- No new token additions are necessary for listed genres, instruments and production. Verify against existing `src/data/scenes.ts`, `src/data/instruments.ts`, `src/data/production.ts` at merge time.

**Next chronological phase:** *Concerto per Margherita* (1976; already catalogued), *Riccardo Cocciante* (1978; add), *...E io canto* (1979; add), *Cervo a primavera* (1980; already catalogued). *Q Concert* (1981) is live/co-billed and excluded. A new 2026 studio album exists, so the planned total-discography audit must eventually reach 2026 rather than stop at 2005.
