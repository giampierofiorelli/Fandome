# CLAUDE IMPORT — Zucchero phase 02

**Date:** 2026-10-29. **Artist ID:** `zucchero` (existing `catalog.ts`; not standalone in `seed.ts`). **Scope:** 4 original releases, 1988–1995. **STRICTLY INCREMENTAL:** none of the 4 phase 01 rows appears in the new CSV. At research time `docs/descriptors/zucchero.csv` was still absent on GitHub `descriptors` branch; do not assume the previous ZIP has been imported.

## This ZIP's four album rows

| album_id | Original title | Year | Type | Catalog |
|---|---|---:|---|---|
| `zucchero-snackbarbudapestoriginalmoviesoundtrack` | Snack Bar Budapest Original Movie Soundtrack | 1988 | soundtrack | **ADD** |
| `zucchero-oroincensobirra` | Oro incenso & birra | 1989 | studio | **EXISTS** |
| `zucchero-miserere` | Miserere | 1992 | studio | **EXISTS** |
| `zucchero-spiritodivino` | Spirito DiVino | 1995 | studio | **EXISTS** |

**Catalogue addition:** insert `['Snack Bar Budapest Original Movie Soundtrack', 1988]` in Zucchero's `src/data/catalog.ts` list. Use the exact case and accent-stripping ID rule of `catalog.ts`; the result is `zucchero-snackbarbudapestoriginalmoviesoundtrack`. The original 1988 cover **credits Zucchero Sugar Fornaciari**, and CD tracks include David Sancious, Lisa Hunt and Nina Simone as distinct performers. **No confirmed album-wide co-billed credit** (such as "Zucchero & David Sancious") exists in original cover metadata. Do not add `coBilled.ts` falsely; optional manual audit if alternate editions credit them together.

## NEW TOKENS

- **Instrument `synthaxe`** for *Miserere* (1992): AllMusic's original album personnel list Rustici's **Synthaxe**, a specific guitar-like MIDI controller. Must add to `src/data/instruments.ts` (label `Synthaxe`) before validation, or after careful engineering review map it transparently to an existing token such as `guitarsynth`. **Do not silently rewrite it.** Source: https://www.allmusic.com/artist/corrado-rustici-mn0000125719
- **New genre `modernelectricblues`** (AllMusic calls *Oro incenso & birra* Modern Electric Blues). The token is absent from the present `src/data/scenes.ts` Genre enum. Before importing, add it to `scenes.ts` and define it in `src/data/genreFamilies.ts` with `blues` as parent; do not silently convert the source-defined style into a different genre. `synthpop`, `popsoul`, and `musicaleggera` already exist.
- **Production:** No new tokens. `drumprogramming`, `ebow`, `lesliespeaker`, `hornarrangements`, `stringarrangements`, `programming` exist already.
- Note: Phase 01 introduced `pianoblues` (not in this ZIP); ensure Claude validates phase 01 separately.

## Credit caveats for importer

1. *Snack Bar Budapest*: review identifies **David Sancious** as a score producer, whereas another discography lists **Corrado Rustici** as album producer. Both in draft `producers`; inspect 1988 original insert to confirm track-specific scope, do not mis-credit Nina Simone's old standard as a new 1988 session.
2. *Oro incenso & birra*: Rustici is **album producer**, while Universal specifically labels **Zucchero and Luciano Luisi** as producers of track *A Wonderful World*. Both track-limited credits included in `producers`; verify original 1989 liner before converting to `reviewed`.
3. *Miserere*: Universal 2023 digital album track metadata names **Michele Torpedine** producer for tracks 3 and 4, but original *Miserere* single liner labels him **executive producer**. Row retains Torpedine provisionally as a **track-specific credit only**; if original album booklet says executive only, remove him. Michael Kamen was orchestral/string **arranger**, Bono a lyricist, Pavarotti a vocalist. None is an album producer or influence because of that participation.
4. *Spirito DiVino*: Rustici only as producer; Zucchero, Luisi and other personnel have arrangement or executive roles. No unverified production technique supplied.
5. The primary release chronology **1988/1989/1992/1995** is verified against Zucchero's official discography. Online AllMusic or reissue label dates (e.g. 1992 for *Oro*) are **not** original releases.
6. No direct **album-specific artist influences** were confirmed. `influenced_by` deliberately empty; do not import generic artist-wide influences automatically. Artist-wide influences are in phase 01 only.

## Next phase 03

1. *Bluesugar* (1998), studio — missing catalog
2. *Shake* (2001), studio — missing catalog
3. *Fly* (2006), studio — missing catalog
4. *Chocabeck* (2010), studio — missing catalog

Avoid *Diamante* compilation (1994), *The Best of Zucchero...* (1996), *Zu & Co.* (2004; compilation of remade collaborations), *Live at the Kremlin* (1991), *Inacustico* re-recording compilation; excluded as live/compilations for now.

## File inventory

- `zucchero_phase02_rows_ONLY.csv` — 27-column descriptors (4 new rows)
- `zucchero_phase02_sources.csv` — primary, original pressing, label, specialist and critic URLs
- `zucchero_phase02_genre_evidence.csv` — one row per ranked genre per album, including track-vs-album scope
- `zucchero_phase02_evidence-notes.md` — full reasoning and disputed claims
- `zucchero_phase02_catalog-audit.csv` — current album presence and next-phase missing releases

Claude should add the new album to `catalog.ts`, the two new tokens (`modernelectricblues` and `synthaxe`), import only these rows, run `scripts/validate-descriptors.ts` and tests. Repository treated **read-only** by this researcher.

## Claude import note

- Added Snack Bar Budapest Original Movie Soundtrack (1988) to the catalogue; no co-billing (cover credits Zucchero Sugar Fornaciari).
- New tokens: genre `modernelectricblues` (parent blues), instrument `synthaxe` (SynthAxe, kept as its own instrument, not mapped to guitarsynth).
- Producers: Zucchero dropped as self-credit (Oro incenso & birra).
- Snack Bar Budapest sounds_like (Vangelis, Jan Hammer, Éric Serra) comes from a critic's review (KQEK, Mark R. Hasan 2013). The other sounds_like lists are editorial and are checked against critics in the reception pass.
