# Fandome import — Donatella Rettore / Phase 01

- **GitHub reference**: `giampierofiorelli/Fandome`, branch `descriptors` (READ-ONLY). Artist ID: `rettore`.
- **Snapshot check**: `docs/descriptors/rettore.csv` and same-artist prior research did NOT exist during this research. Catalogue lists `Brivido divino` (1979), `Magnifico delirio` (1980), `Estasi clamorosa` (1981).
- **STRICTLY incremental**: 4 rows for 1974–1980 and no other artists. Do not import the first two rows a second time if another process already added them.

## This phase's exact album IDs

| ID | Title | Year | Type | Existing in catalogue? |
|---|---|---:|---|---|
| `rettore-ognigiornosicantanocanzonidamore` | Ogni giorno si cantano canzoni d'amore | 1974* | studio | no |
| `rettore-donatellarettore` | Donatella Rettore | 1977 | studio | no |
| `rettore-brividodivino` | Brivido divino | 1979 | studio | yes |
| `rettore-magnificodelirio` | Magnifico delirio | 1980 | studio | yes |

## Add to `catalog.ts`

- `['Ogni giorno si cantano canzoni d\'amore', 1974]` (correct TypeScript escaping; no literal double-backslash)
- `['Donatella Rettore', 1977]`
- Preserve the existing entries for the 1979 and 1980 albums exactly; do not create duplicates.

## New genre tokens

**None.** All values in rows use existing `src/data/scenes.ts` tokens. A song titled *Il tango della cantante* is **not enough evidence** that the recording is musically tango; thus there is no token to add on that basis. Where `orchestralpop`, `electronic`, `dancepop` appear only as a texture/track-level editorial mapping, treat their evidence strengths and scopes as part of the import.

## Essential caveats

1. **First album year:** Official artist discography and AllMusic place the album under **1974**; Rockol and HitParadeItalia call it **1975**. Other discography says pressed in Dec 1974 but circulated in Feb 1975. `year=1974` reflects the original pressing interpretation; do not erase disagreement.
2. Producers: Roberto Danè is a producer of the 1977, 1979, and 1980 LPs. Natale Massara, Pinuccio Pirazzoli and F. Valgrande are arrangers; Claudio Rego is principally composer. Early `Sviluppo Discografico del Mezzogiorno` is a corporate production credit, not the name of an individual producer.
3. Single **Lailolà** is not on the second album. German 1979 *Eroe* is an edition of *Brivido divino*, not a separate album.
4. *La mia più bella canzone d'amore* carries a Pirazzoli composition credit in 2023 label data; *Il granchio* carries additional composers/lyricists in label data. Double-check physical sleevenotes rather than assuming every track was written by Rettore/Rego.
5. The 1982 post-punk and synthpop **influences** Rettore explicitly names were connected to *Kamikaze Rock 'n' Roll Suicide*, not established as 1980 album influences. No unsupported artist names put in `influenced_by`.
6. Scales are provisional judgements and several cells intentionally blank. See detailed track audit (38 tracks) before making modifications.

## Next phase (02)

*Estasi clamorosa* (1981), *Kamikaze Rock 'n' Roll Suicide* (1982), *Far West* (1983), *Danceteria* (1985). Cover the recorded ska track *Donatella* separately from other 1981 material, and distinguish pop, new wave, electronic rock and ballad tracks within 1982. Exclude compilations and live albums unless qualified as a documented landmark.

## Claude import checklist

1. Add the two missing catalogue entries (taking care with 1974/75 ambiguity).
2. Append only these four rows to `docs/descriptors/rettore.csv`, preserving existing IDs.
3. Store evidence files under `docs/descriptors/research/` following existing naming.
4. Run `npx vite-node scripts/validate-descriptors.ts` and repository tests after additions. Do not mark `reviewed` without a human second pass.
