# CLAUDE_IMPORT — Franco Battiato Phase 05 (STRICTLY incremental)

Research as of **26 October 2026**, Fandome `descriptors` branch read-only. Deliver **one** ZIP and import **only its four new rows**; do not recreate, replace or duplicate Phase 01–04.

## Phase contents

| album_id | title | year | type | catalog action |
|---|---|---:|---|---|
| `battiato-fisiognomica` | Fisiognomica | 1988 | studio | existing in `catalog.ts`, retain ID |
| `battiato-comeuncammelloinunagrondaia` | Come un cammello in una grondaia | 1991 | studio | ADD |
| `battiato-gilgamesh` | Gilgamesh | 1992 | **studio** | ADD (studio cast/operatic recording, NOT live) |
| `battiato-caffedelapaix` | Caffè de la Paix | 1993 | studio | ADD |

Artist Fandome ID: `battiato`. Its published `docs/descriptors/battiato.csv` currently shows the four Phase 01 rows only; previous Phase 02–04 ZIPs delivered here may not yet be merged. **Check by key against both GitHub and previously imported batches.**

## Contents

- `CLAUDE_IMPORT.md` — instructions and caveats.
- `battiato_phase05_rows_ONLY.csv` — exact **27-column** header, **4 fresh album rows only**, no old rows.
- `battiato_phase05_sources.csv` — 36 per-album links, source types, claims, strength.
- `battiato_phase05_genre_evidence.csv` — 20 one-token-per-album lines, including scope (whole album/some tracks/texture).
- `battiato_phase05_evidence-notes.md` — reasoning for instruments, techniques, scales, language, producers, editorial disagreements.
- `battiato_phase05_catalog-audit.csv` — original current catalog membership and IDs.

## Catalog / co-billed / taxonomy instructions

1. Retain the existing `battiato-fisiognomica` catalog ID verbatim. Add the other three titles and years as shown. No album in this phase is co-billed: **no** change to `coBilled.ts`.
2. New genre token **`lieder`**: album *Come un cammello in una grondaia* includes four original recordings of nineteenth-century lieder; source calls them *lieder*. Proposed parents `['classical']`.
3. New genre token **`arabicmusic`**: for traditional Arabic vocal song *Fogh in Nakhal* and some stylistic gestures of *Caffè de la Paix*, **scope some tracks** only. Proposed parents `['worldmusic']`. Not a synonym for the whole album's world music classification.
4. New instrument tokens in Phase 05: **`quanoon`**, **`sarod`**, **`tampoura`** (exact spellings explicitly printed in the official artist album essay). `tabla` already exists in the live repository `instruments.ts`, though it is not in some earlier abbreviated user token lists. If a preferred canonical transliteration is `qanun` or `tanpura`, add alias normalization **explicitly**; do not silently replace tokens. No new production tokens.
5. Make genre parent mappings and validator genre allowlist consistent before running `scripts/validate-descriptors.ts`. The score/descriptor scales do not require new enums. User-specified `status=draft` is preserved.

## Caveats / important credits

- **Fisiognomica (1988)**: early `catalog.ts` already includes it. Enrico Maghenzani is the credited producer; Battiato and Giusto Pio are arrangers/conductor, **not** album co-producers on the surviving release evidence. `Veni l’autunnu` combines Sicilian and Arabic; *L’oceano di silenzio* closes with German text from Fleur Jaeggy. The 1988 studio instrumentation is confirmed separately (not inferred from the 1988 tour). `programming` is from Destrieri's credit. `stringarrangements` refers to documented scored orchestral passages, not to a named effect box.
- **Come un cammello in una grondaia (1991)**: eight tracks, four new compositions and **four re-recorded classical lieder**. Abbey Road 1991 / Astarte Orchestra of London, Ambrosian Singers, Antonio Ballista, Giusto Pio, string quartet players and Destrieri keyboards. Original booklet/label metadata credit **Enrico Maghenzani** as music producer. Qobuz/Apple reissue exports call additional people `production coordinator`/`music production`; this is not enough to include them as music producer. No bass, drums, electric guitar: official artist essay explicitly excludes pop rhythm instruments. The `influenced_by` column lists composers **whose work was recorded in the four classical covers**, with this limited meaning; not an independent interview claiming a lifelong formative influence. If using a strict stated-influences-only interpretation, move these to song-level credits and clear this field instead.
- **Gilgamesh (1992)**: stage premiere at Teatro dell'Opera di Roma on 5 June 1992, but **commercial record separately recorded/mixed at Forum Studios** per first-release documentation and witness Filippo Destrieri; `type=studio` notwithstanding operatic nature. Enrico Maghenzani credited music producer in discography-derived original credits; main first-party website doesn't list record producer, so **confidence medium**. Electronics (keyboards/computer) evidenced; no model or software named, so `production` **empty**. Native language is Italian per opera archive; Latin passages from act 2. The character music/arrangements credited to Battiato/Pio do NOT imply `coBilled.ts` with Pio. Scholarly argument that the later two operas combine experimental and contemporary music is a qualified assessment, not direct machine evidence.
- **Caffè de la Paix (1993)**: the official album essay spells `quanoon` and `tampoura`; keep these lexemes. Label-derived Qobuz credits consistently list **Enrico Maghenzani — Producer** and **Saro Cosentino — Production Coordinator**. An original 1993 vinyl credit via release database uses `Producer [Hall Producer]` for Cosentino; a major OndaRock review broadly describes Cosentino's production; some encyclopedic summaries call him producer. **Disagreement unresolved: only explicit primary music producer Maghenzani is in `producers`; do not conflate coordinator/hall role.** `sound_like` De André refers only to qualified critic's comparison with *Crêuza de mä*, never to documented influence; `influenced_by` blank. The title references Gurdjieff's philosophy: Gurdjieff is **not** a music-artist influence token. Songs include Arabic, Latin and Persian as well as Italian. The original period instrument credits name rock band players; non-Western instruments are explicit in artist essay and qualified review, not extrapolated from worldmusic tag.

## Other releases omitted (no accidental discography gaps)

- *Giubbe rosse* (1989) and *Unprotected* (1994): live; no automatic album row, pending evidence of a **landmark-level** exception.
- *Benvenuto Cellini – Una vita scellerata* (1990): separately issued film/TV score; excluded here because landmark status unverified. Reconsider only with score-specific evidence.
- *Como un camello en un canalón* (Spanish re-recordings): original issue year needs edition-level verification (sources disagree 1991 vs 1993). Audit as possible **separate studio-language album** in a future incremental supplement; not silently merged with Italian album.
- *Il Cavaliere dell'intelletto* (premiered 1994) not commercially released (artist official explicit), so exclude even if some studio tape reportedly exists.
- *Messa arcaica* concert premiere 1993 and separately listed CD 1994 (Estatica); later partly repackaged as *Shadow, Light* (1995/1996). Verify original CD and studio status before next phase to avoid duplicate releases.

## Validator / next phase

Inspect missing `lieder`, `arabicmusic`, `quanoon`, `sarod`, `tampoura`; add documented tokens and parent relations as above (or record an explicit reviewer change). Check duplicates by `album_id`, verify Unicode UTF-8 handling, then run validator and project tests in GitHub worktree; this ZIP **cannot itself execute repository tests**.

**Next Phase 06, after audit of the first-issued original releases:** *Messa arcaica* (original CD believed 1994, verify), *L’ombrello e la macchina da cucire* (1995), *L’imboscata* (1996), *Gommalacca* (1998). The 1995/1996 *Shadow, Light* overlap with *Messa arcaica* must not produce duplicate primary descriptors. If *Messa arcaica* is a reissue-only duplicate, promote *Fleurs* (1999) to the fourth slot.
