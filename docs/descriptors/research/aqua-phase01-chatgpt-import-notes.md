# Fandome import — Aqua — Phase 01 (complete studio-album discography)

Checked 28 October 2026 against public `giampierofiorelli/Fandome`, branch `descriptors` (read-only). `aqua` absent in `src/data/catalog.ts` **and** `src/data/seed.ts`; `docs/descriptors/aqua.csv` not found. Proposed **new artist ID `aqua`**. No duplicate descriptor rows found. All three existing studio albums are in this *single phase*, so no Phase 02 is required for studio albums.

| album_id | album | year | type | catalogue action |
|---|---|---:|---|---|
| aqua-aquarium | Aquarium | 1997 | studio | add original album and draft descriptor |
| aqua-aquarius | Aquarius | 2000 | studio | add original album and draft descriptor |
| aqua-megalomania | Megalomania | 2011 | studio | add original album and draft descriptor |

**Catalogue:** Add the artist and all three albums (same IDs and original release years) before descriptor validation. No multi-artist/co-billed albums were identified among these three studio albums. DO NOT add 2002 *Cartoon Heroes* or 2009 *Greatest Hits*, either being a compilation; exclude remixes, soundtrack appearances and standalone later singles. The original editions, not bonuses and remixes, determine the descriptor rows.

**New controlled-vocabulary additions needed:**
- `bubblegumdance`: new **genre**, named explicitly by album-level sources for Aquarium/Aquarius. Not equivalent to existing `bubblegumpop`.
- `rolandjv2080`: new **production** model token, directly documented as used extensively on Aquarium. Distinct from existing `rolandjv1080`.
- No new instrument tokens required. Check the repository's current types again before applying; vocabularies may have changed since inspection.

**ARTIST INFLUENCES — member statements with sources (not automatically album-level):**
- Søren Rasted: Simple Minds; David Bowie; U2. His direct account of early listening is in the Rolling Stone oral history: https://rollingstoneindia.com/people-probably-want-to-kill-us-the-oral-history-of-aquas-barbie-girl/
- Claus Norreen: Depeche Mode. Identified by Søren Rasted in that same interview as Norreen's earlier musical interest.
- René Dif: Erasure; Depeche Mode; Rick Astley. Directly names records/acts he played as a DJ and a personal favourite in the same oral history. These may be formative musical interests, but **DJ selections do not by themselves establish album-level influences**.
- Lene Nystrøm directly describes the collective studio invention of the voice-led bubblegum sound and original reluctance to use an unnaturally high register: https://www.theaureview.com/music/lene-nystrom-of-90s-iconic-pop-band-aqua-norway-speaks-about-touring-and-being-called-a-barbie-girl/ . This is creative process, not a named musical artist influence.
- As none of these direct statements unambiguously attributes a specific record's sound to a named musician, **all three album-level `influenced_by` fields are empty**. Do not promote critical comparisons in `sounds_like` to `influenced_by`.

**Essential production and edition caveats:**
1. Aquarium: March 1997 original in Europe vs September 1997 in USA; track-specific additional producers; Roland JV-2080 documented. Lene's high register **does not prove digital pitch shifting**.
2. Aquarius: February 2000 original vs March USA; Norreen and Rasted sole album producers; real piano/strings/banjo/guitar and limited scratch/programming; country parody is a one-song tail genre, not an album label.
3. Megalomania: original October 2011 studio album, not Greatest Hits (2009). Norreen/Rasted plus Bjørke, Secon, Thaae and Troelsen produced specific tracks; Nicolaj Rasted is *additional production* / engineer only and does not meet the producers-column rule. Avoid claiming Aqua used Auto-Tune simply from critical comparison with Kesha.

## ZIP file manifest

1. `aqua_phase01_rows_ONLY.csv` — exactly 3 records, 27 columns, status `draft`, 0–5 editorial scales.
2. `aqua_phase01_sources.csv` — traceable source references and claim scopes.
3. `aqua_phase01_genre_evidence.csv` — exactly one row for each listed genre token, noting track-only genre tails.
4. `aqua_phase01_evidence-notes.md` — nuanced rationale, credit splits and rating justification.
5. `aqua_phase01_catalog-audit.csv` — all three catalogue additions and exclusions.
6. `CLAUDE_IMPORT.md` — this file.

No phase 02 for current studio albums. If later asked to cover EPs, notable remixes, or collaboration/soundtrack items, first check original release status and whether Fandome policy admits them. Run `npx vite-node scripts/validate-descriptors.ts` and the site tests before merging. Research is read-only; no GitHub change was made.


## Claude import note

- 3 rows imported as delivered; full studio discography in the catalogue.
- New genre bubblegumdance (parents eurodance, bubblegumpop); new production token rolandjv2080.
- Scene DK en 1990 dance,pop: sung in English, so never a local discovery.
- No artist influences entry: the oral history names what members listened to as teenagers or played as DJs, not influences.
- Reception researched by Claude (Wikipedia ratings boxes, Danish press, Discogs 3818374, 3140894). rolandjv2080 checked: uDiscover Music, 'The Roland JV-2080 synth ... was all over Aquarium'.
