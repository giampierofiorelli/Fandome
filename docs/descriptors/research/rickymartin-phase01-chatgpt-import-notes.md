# Fandome — Ricky Martin, phase 01 — Claude import

**Research date:** 29 October 2026. Read-only references: Fandome GitHub branch `descriptors`, descriptor guide, genre/instrument/production token lists and validator. This release has **four new draft rows** (27 columns) and five supporting files. It has not modified GitHub. Open `*_rows_ONLY.csv` as UTF-8-SIG.

## Repository ID and catalogue audit

- `src/data/catalog.ts` already has artist `rickymartin`, with `Vuelve` (1998), `Ricky Martin` (1999), `Sound Loaded` (2000), `Life` (2005), and `Música + Alma + Sexo` (2011). `src/data/seed.ts` has no separate Ricky Martin artist or album ID. Do NOT propose another artist ID.
- `docs/descriptors/rickymartin.csv` returned 404 (not yet described) at research time. No previous Ricky Martin descriptor rows to skip.
- The existing 1999 *Ricky Martin* is currently generated as **`rickymartin-rickymartin`**. To **preserve that existing ID**, add the debut with catalogue title **`Ricky Martin (1991)`** rather than `Ricky Martin`; generated new ID is **`rickymartin-rickymartin1991`**. Original art still calls it *Ricky Martin*. It is an intentional exception to the later-same-title suffix convention caused by current catalogue chronology. Never replace the 1999 ID with the 1991 album.

| album_id | Year | Album | Catalogue | Action |
|---|---:|---|---|---|
| `rickymartin-rickymartin1991` | 1991 | Ricky Martin (1991) | absent | add |
| `rickymartin-meamaras` | 1993 | Me amarás | absent | add |
| `rickymartin-amediovivir` | 1995 | A medio vivir | absent | add |
| `rickymartin-vuelve` | 1998 | Vuelve | existing | preserve, attach descriptor |

Full audit CSV also lists later studio releases and two relevant EPs; **only these four rows** are in the current descriptor CSV. No co-billed albums in this phase. No compilation, greatest hits, concert album, or Menudo recordings are added. *MTV Unplugged* (2006) is **live**, excluded even though critically significant. The 2026 *ReVivo: Los Hits* release is a compilation, excluded.

## ARTIST INFLUENCES — first-person statement, whole career (phase 01 only)

**Directly claimed musical influences:**

- **Led Zeppelin** — Ricky Martin says in a 2024 interview he loved their rock music and that they influenced him greatly. Source: **Numéro Netherlands**, *In Conversation with Ricky Martin*, interview by Jana Letonja, paragraph answering 'who or what has always been the biggest inspiration'. https://www.numeronetherlands.com/interviews1/in-conversation-with-ricky-martin
- **Bon Jovi** — exactly the same first-person source, where Martin specifically says both Led Zeppelin and Bon Jovi influenced him. https://www.numeronetherlands.com/interviews1/in-conversation-with-ricky-martin

**Respected earlier Latin artists, not unequivocally direct sonic influences:** In that same interview he names **Celia Cruz, Gloria Estefan (Miami Sound Machine), José Feliciano, Carlos Santana** as internationally influential *predecessors* who paved the way. Preserve this distinction. These four names must **not** be inserted into an album's `influenced_by` just because of a tribute or career-history statement. In all four rows, the `influenced_by` field remains blank because there is no reliable *album-specific* artistic attribution. Producers, band collaborators, and artists covered are also not influences per guide.

## Credits, tokens and caveats to resolve

- **New instrument token requested:** `cuatro` (documented in *Vuelve* personnel, Leo Quintero). It is not present in Fandome's instrument token list; add it before validation. `tres`, `hurdygurdy`, `brass`, `electricpiano`, `handclaps` are already recognised tokens.
- **New genre tokens:** none. Genres used in rows are existing `scenes.ts` tokens (including `contemporarypoprock`, `contemporaryrnb`, `europop`, `samba`). **New production tokens:** none.
- **1991 instrumentation not source-verified** despite checks of AllMusic, original-issue MusicBrainz and Sony/Qobuz metadata. Both `instruments` and `production` are blank intentionally. **Request scan of the original 1991 booklet before marking complete**. This is an explicit evidence gap; never copy credits from the 1999 self-titled album. Confidence = low.
- **1993 producers contested:** Spanish issue documentation attributes production to **Juan Carlos Calderón**; AllMusic names **José L. Quintana** producer and Calderón composer/arranger, so both retained as candidate producers with **medium** confidence and a required original sleeve check. Javier del Moral is executive-only and excluded. If physical credits clarify roles, correct the row.
- **1993 language** includes English song *Hooray! Hooray! It's a Holi-Holiday*, plus Spanish songs, on the cited edition. Verify original-vs-reissue bonus duplication: AllMusic appears to repeat it in tracklist.
- **1995** producer KC Porter plus co-producer Ian Blake. Robi Rosa co-wrote songs, but writing alone is not a production credit.
- **1998** some editions replace instrumental 14th track with a Spanglish remix: cite edition in importing track mapping. Lead recordings are Spanish; instruments are album credits, not live-band credits. `hornarrangements` refers to credited brass arrangements.
- **No cover-induced false influences:** Elton John `[2/11]`, Laura Branigan `[1/10]` in `sounds_like` are limited editorial/critic comparisons (the latter is a cover); never place those artists in `influenced_by`.
- **Dates:** conflicting day/month dates occur across original pressings and streaming services; only 1991, 1993, 1995 and 1998 years are stored.

## Import sequence

1. Add the three missing albums to existing Ricky Martin catalogue list while **preserving existing 1999 album ID** via disambiguated title for 1991. No GitHub data has been modified by this ZIP.
2. Add `cuatro` to instrument vocabulary (ensure proper genre-family mapping already supports all genre tokens).
3. Append only four phase-01 CSV rows to artist descriptors; maintain existing rows if added independently since research.
4. Run `scripts/validate-descriptors.ts` and project tests. If strict validation requires instruments not blank, treat first album as **BLOCKED FOR ORIGINAL SLEEVE EVIDENCE**, never manufacture a musician credit merely to satisfy tests.
5. Review original *Me amarás* physical producer credits before approving `reviewed`. All rows are `draft`, not second-person verified.

## Next phase 02 (chronological, four studios)

*Ricky Martin* (1999), *Sound Loaded* (2000), *Almas del silencio* (2003), *Life* (2005). The 1999 title already has its existing plain-title ID `rickymartin-rickymartin` (do not reassign); 1999 is distinctly **not** in this phase. Phase 03: *Música + alma + sexo* (2011), *A quien quiera escuchar* (2015), *Pausa* (EP, 2020), *Play* (EP, 2022). EPs included because they are substantive original post-2015 releases, not compilations; any decision to drop one should be recorded.
