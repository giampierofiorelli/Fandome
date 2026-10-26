# Kylie Minogue — Fandome Phase 05

**Research date: 26 October 2026.** Read-only GitHub inspection, branch `descriptors`. One phase, **exactly three new album rows**, header has 27 columns. Do not replace or repeat phases 01–04. This phase completes the 17 core studio albums listed in Fandome's 2026 seed, through *Tension II* (2024).

## Phase contents

| album_id (KEEP EXACTLY) | Title | Original release | Type |
| --- | --- | --- | --- |
| `k-disco` | DISCO | 2020 | studio |
| `k-tension` | Tension | 2023 | studio |
| `kylie-tensionii` | Tension II | 2024 | studio |

## Files (six)

1. `CLAUDE_IMPORT.md`
2. `kylie_phase05_rows_ONLY.csv`
3. `kylie_phase05_sources.csv`
4. `kylie_phase05_genre_evidence.csv`
5. `kylie_phase05_evidence-notes.md`
6. `kylie_phase05_catalog-audit.csv`

## Catalogue and previous research audit

All three albums are already listed in [`src/data/seed.ts`](https://github.com/giampierofiorelli/Fandome/blob/descriptors/src/data/seed.ts) under the IDs above. They are **not present** in the committed [`docs/descriptors/kylie.csv`](https://github.com/giampierofiorelli/Fandome/blob/descriptors/docs/descriptors/kylie.csv) as inspected today; it currently covers only 1988–2001. Phase-03 and phase-04 imports, although delivered to the user, were not visible in that committed CSV; Claude must handle them separately. **No catalogue addition** in this phase; no co-billed album.

## Add tokens BEFORE validation

- **Genre `discohouse`**: review explicitly describes disco house on *DISCO*, not simply a blanket `house` alias. (The Music, 2020.)
- **Genre `filterdisco`**: Slant identifies filter disco on *Miss a Thing* / *I Love It*. `filterhouse` is a separate existing genre token, so do not silently map.
- **Genre `slaphouse`**: album genre index for *Tension II* explicitly lists slap house (Album of the Year); low-scope/secondary, source strength medium.
- **Genre `balearichouse`**: The Line of Best Fit specifically describes *Good as Gone* as Balearic house. Distinct from existing `balearicbeat` (a regional umbrella), so preserve the name.
- **Production `garageband`**: Kylie explicitly describes GarageBand recording setup while making 2020 *DISCO*; she later used Logic. Distinct software models, no assumption about versions.

No new instrument tokens. `nudisco` and `neodisco` are separately present in the guide: AllMusic calls the 2020 album Neo-Disco, while a 2024 source labels Tension II Nu-Disco. The newly referenced genres *discohouse*, *filterdisco*, *slaphouse*, and *balearichouse* must be added to both scene/genre validation definitions as required, without replacing their exact textual form.

## Original editions and reissued recordings

- *DISCO* is the original **12-track** November 2020 album, not later Guest List or deluxe material. The deluxe Apple Music text is used only to corroborate an artist interview about original 2020 tracks, not to import bonus tracks.
- *Tension* is the original **11-track** September 2023 album; exclude its deluxe extras and 2023 *Extension: The Extended Mixes*.
- *Tension II* is the **13-track** October 2024 studio sequel. It includes **nine newly released Kylie studio recordings** and **four earlier 2024 collaborative singles**. The single recordings remain part of the official album, but the scale and main genre weighting foreground the nine fresh tracks to avoid amplifying reused music. Do not create separate co-billed ALBUM records for the four guest-track credits.

## Influences

**ARTIST INFLUENCES belongs in Phase 01 only and is not repeated here.** In phase 05 `influenced_by` is nonblank for *DISCO* because 2020 artist interviews explicitly relate ABBA, the Bee Gees, Donna Summer and Chic to her disco inspirations and she names *Last Chance* specifically. No unverified artist inspiration is asserted for *Tension* or *Tension II*. Covers, samples and guest appearances are not influences.

## Name variants and disambiguation

- Producer **Richard 'Biff' Stannard** is consistently written **Richard Stannard** in CSV; his nickname is noted in the evidence notes.
- **LOSTBOY = Peter Rycroft**; choose credited artist/producer moniker, not a second duplicate person.
- **PhD** is the studio duo **Peter Wallevik and Daniel Davidsen**; the individuals are listed once.
- **TMS** is a creditable production team and kept as TMS (not supplemented with individual writers without direct production support).
- **Punctual**, the production duo, kept as its credited production name.
- **Tension II**: On *Good As Gone*, Qobuz credits Tommy D as recording engineer, whereas a MusicBrainz entry lists Tommy Danvers as producer. Exclude disputed Tommy Danvers; keep clearly credited TMS.
- **DISCO**: Duck Blackwell receives an additional-producer credit on *Say Something*, but a primary producer credit on another original album track, so does belong in the record-level producers list.
- **Tension**: *10 Out of 10* bears Oliver Heldens' single billing, but he is a credited full producer. Martin Bijelić is an additional producer and remains excluded.

## Next phase

None for the chronological **core studio discography released by 26 October 2026**. If wanted later, independently assess landmark remix/collaborative EPs or newly released recordings, without live releases or greatest-hits compilations. *Kylie Christmas (Fully Wrapped)* is an expanded reissue of the previously researched 2015 album rather than an additional core studio album; do not duplicate.
