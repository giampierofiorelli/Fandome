# Fandome import: Ennio Morricone, phase 01 (research draft)

Research compiled 26 October 2026. **Incremental**: exactly four new descriptor rows; no earlier phase data; no commits made. Artist ID from `src/data/catalog.ts` on branch `descriptors`: **`morricone`**. `docs/descriptors/morricone.csv` did not exist when checked (GitHub 404). Original soundtrack albums are dated by the **first securely documented LP issue**, not the premiere year of the film. This is a selection of landmark film scores, not a claim of complete coverage of Morricone's hundreds of soundtrack compositions; secondary / non-landmark film scores are intentionally excluded.

## Phase contents

1. `morricone-perunpugnodidollari` — **Per un pugno di dollari** (1966, soundtrack; film 1964; soundtrack single 1964). **ADD**.
2. `morricone-perqualchedollaroinpiu` — **Per qualche dollaro in più** (1966, soundtrack; film 1965). **ADD**.
3. `morricone-labattagliadialgeri` — **La battaglia di Algeri** (1966, soundtrack; film 1966). **ADD**.
4. `morricone-ilbuonoilbruttoilcattivo` — **Il buono, il brutto, il cattivo** (1966, soundtrack). **EXISTS**: preserve catalogue ID and title.

Scores are ordered by original **film-score chronology** for the 1966 LP-date tie. The 1966 RCA Italiana LP PML 10414 is commercially one **combined** album: side A contains *Per qualche dollaro in più*, side B *Per un pugno di dollari*. Fandome's track-level matching benefits from two separate **score identities**. Importer should decide whether to record an additional combined LP parent relationship instead of claiming these were independent Italian LPs in 1966. Beat Records' description of an initial **1965** release conflicts with the firmly documented **1966 first combined LP**; the 1964 seven-inch single is not treated as an album. If your product defines “year” as film score first issued **in any format** rather than first album release, the Fistful year becomes 1964. The present 1966 field deliberately tracks the full LP format.

## Missing catalogue entries (add before validating)

| ID | Official title | Album year | Type | Film year |
|---|---|---:|---|---:|
| `morricone-perunpugnodidollari` | Per un pugno di dollari | 1966 | soundtrack | 1964 |
| `morricone-perqualchedollaroinpiu` | Per qualche dollaro in più | 1966 | soundtrack | 1965 |
| `morricone-labattagliadialgeri` | La battaglia di Algeri | 1966 | soundtrack | 1966 |

## Multi-artist / co-billed work

- **La battaglia di Algeri**: music credit is jointly **Ennio Morricone e Gillo Pontecorvo**, verified by La Biennale di Venezia and original-film metadata. Some CD editions also print `Ennio Morricone E Gillo Pontecorvo`. Preserve `artist=Ennio Morricone` for Fandome's artist row and add the correct co-composer/album billing in the co-billed index if supported. Do **not** put Gillo Pontecorvo in `producers`: these are film music/composition credits, not sound-record producer credits.
- **Per qualche dollaro in più**: Alessandroni, Edda Dell’Orso, Bruno Nicolai, etc. are performers/conductor; no proof of co-billed album-artist status. Do not co-bill them or tag as musical influences.

## New tokens for Claude to register **before validation**

- Genre: `spaghettiwestern`, `contemporaryclassical` (the latter is an explicit album-level genre label in The SHFL; do not silently map it to `modernclassical`). `march`, `musiqueconcrete`, `classical`, `rock`, `folk`, `rockandroll`, `avantgarde`, `soundtrack` already exist in the guide.
- Instrument: `bells`, `jawharp`, `ocarina`, `castanets`, `snaredrum`, `panflute` (register exact spellings; `whistle` and `recorder` already exist in latest guide and are NOT new). `electricguitar`, `timpani`, `musicbox`, `organ`, etc. already exist.
- Production: no new tokens. Only documented-specific production for *Il buono...*: `layeredvocals|falsetto|distortion`. The excerpt from Morricone documents **light** reverb, so do not misuse `heavyreverb`. No unverified brand, model, tape or DAW tokens.

**Genre editorial review:** `spaghettiwestern` is stylistic shorthand for Morricone's score language, not only the film's type; `march` is supported at *Battle of Algiers* as a military piece and at *Good, Bad, Ugly* on two tracks. `folk` and `avantgarde` are limited to some passages / textural origin, as flagged in genre_evidence.csv. If Claude applies a strict “named **musical** genre verbatim in a source” requirement, consider abstaining on the lower-confidence ones rather than equating instrumental timbres with genre classifications.

## ARTIST INFLUENCES (phase 01 ONLY)

These are **artist-wide**, not album-specific. Evidence is attached and should not automatically populate `influenced_by` on these four records.

1. **Carl Maria von Weber** — BFI documents Weber as the inspiration behind Morricone's earliest childhood attempts at composition. Source: https://www.bfi.org.uk/lists/ennio-morricone-10-scores
2. **Igor Stravinsky** — Morricone directly acknowledges learning from Stravinsky and especially values Stravinsky's use of folk music. Source: https://www.the-independent.com/arts-entertainment/music/features/ennio-morricone-they-shoot-he-scores-565871.html
3. **Goffredo Petrassi** — Morricone directly names him as his composition teacher and one of his admired composers; academic analysis documents a profound impact on his compositional discipline. Sources: https://messaggerosantantonio.it/content/lintervista-ennio-morricone-la-musica-e-come-un-sogno 

Christopher Frayling documents Morricone's attendance at a John Cage seminar and experimental sonic connections (https://freshairarchive.org/segments/appreciating-music-ennio-morricone), but this is not a direct first-person naming of Cage as his own influence, so Cage is withheld from the influence list. Morricone also names Palestrina and Monteverdi among composers he admires; admiration alone is *not* entered as influence, and a cover, reused arrangement or sonic similarity is not an influence. BFI compares Fistful's trumpet passage with Dimitri Tiomkin's `El degüello`: represented as `sounds_like`, not `influenced_by`. Score composer =/= record producer; `producers` intentionally blank unless proven by original LP/production credit.

## Scope, conflict and caveats

- Italy/USA soundtrack releases sometimes have different dates, titles, bonus tracks and mixes. Avoid combining details of 2001, 2004 or 2024 expanded editions with the **original LP repertoire**. For *Il buono...* use only the original 11-track Parade EPL 2890(S) LP, dated 23 December 1966 by MusicBrainz; the later 21-track version is **not** the 1966 LP.
- Fistful album and Few album are intentionally separate *score objects* derived from different sides of a combined LP, not assertions of two unique first-release LP packages.
- Original film **The Battle of Algiers** (1966) has an audioscape that mingles conventional score, Algerian percussion and director-led sound design. MoMA describes this as `musiqueconcrete`, but some film sound-effects may not be on the RCA LP. Keep this genre at the *texture* level with medium confidence; production methods remain empty.
- BFI hears an ocarina for certain *Good, Bad, Ugly* motifs; another film historian identifies an `arghilofono` for Angel Eyes. Ocarina is established in the coyote title motif. We did **not** assert `arghilofono` in the row pending corroboration of that exact instrument/model.
- No unsupported `producers` field values. The often named Bruno Nicolai is a *conductor*, Morricone composer/orchestrator; neither automatically equals a credited sound-record producer.
- English `en` and `storytelling` on *Il buono...* are **track-limited** to original LP song `La storia di un soldato` (Tommie Connor credited as English lyricist), NOT a claim that the score as a whole contains conventional lyrics.
- Scales are conservative editorial 0–5 estimates of these specific releases from cited criticism; `polish` left blank for *Battle of Algiers*. All rows `draft` and require import-side human review.

## Next phase (proposed)

**Phase 02 — four original scores associated with the 1966–1968 films**, pending a fresh check of **first LP** dates and early issue track lists: **La resa dei conti** (film 1966), **Il grande silenzio** (film 1968), **Il mercenario** (film 1968), **C’era una volta il West** (film 1968; already in Fandome). This does not presuppose all four first LP issues were in the film release year; the next research phase must determine original record dates and preserve the catalogue ID for West.
