# CLAUDE IMPORT — Pino Daniele, phase 03 (incremental)

**Date checked:** 30 October 2026, branch `descriptors`, read-only. Artist id is **`pinodaniele`** (present `src/data/catalog.ts`, absent `src/data/seed.ts`). No current `docs/descriptors/pinodaniele.csv` was found. The previous phase 01 and 02 deliverables are already handed over to the owner. They **must be imported separately** and are **not repeated here**. This ZIP contains exactly **four NEW rows**.

## Phase-03 contents (chronological)

| album_id | Title | Year | Type | Catalogue |
|---|---|---:|---|---|
| `pinodaniele-leviedelsignoresonofinite` | Le vie del Signore sono finite | 1988 | soundtrack | ADD |
| `pinodaniele-schizzecheawithlove` | Schizzechea With Love | 1988 | studio | ADD |
| `pinodaniele-mascalzonelatino` | Mascalzone latino | 1989 | studio | ADD |
| `pinodaniele-unuomoinblues` | Un uomo in blues | 1991 | studio | ADD |

**All four are missing** from the current `catalog.ts` list of four Pino albums (Pino Daniele, Nero a metà, Vai mò, Bella ’mbriana), so Claude must add the album objects and exact proposed IDs before running tests. The artist itself must **not** be added again. Original 1988 soundtrack album appears as a separately published Bagaria mini-LP credited to Pino Daniele; classify as `soundtrack` despite one online seller's generic compilation flag.

## Already described/delivered; skip

- Phase 01 delivered: Terra mia (1977); Pino Daniele (1979); Nero a metà (1980); Vai mò (1981).
- Phase 02 delivered: Bella ’mbriana (1982); Musicante (1984); Ferryboat (1985); Bonne soirée (1987).
- `docs/descriptors/pinodaniele.csv` remains absent in checked remote repository; do not confuse prior delivered ZIPs with already merged rows. No rows from those phases appear in this ZIP.

## Excluded

- *Sotto ’o sole* (original **1991** according to artist official; **1992** in AllMusic later-edition chronology) is treated as an **antologia** by OndaRock, mostly new arrangements of 1977–80 songs with two new Troisi-film pieces; **excluded under owner's compilation policy**. `https://www.ondarock.it/monografie/pinodaniele/`, `https://www.pinodaniele.com/music/sotto-o-sole-1991/`.
- `Sciò Live` (1984), `E sona mo'` (1993/94) and other live discs excluded as live. Greatest-hits compilations excluded. One-song appearances on movie score compilations not treated as full albums.

## New catalogue additions (title / year / type)

1. Le vie del Signore sono finite — 1988 — soundtrack — `pinodaniele-leviedelsignoresonofinite`.
2. Schizzechea With Love — 1988 — studio — `pinodaniele-schizzecheawithlove`.
3. Mascalzone latino — 1989 — studio — `pinodaniele-mascalzonelatino`.
4. Un uomo in blues — 1991 — studio — `pinodaniele-unuomoinblues`.

## New tokens to add before validation

**Genres**:
- `soulrock` — critic OndaRock's actual “soul-rock” of *Al Capone* on Schizzechea; **one-track only**, low weight. Proposed family `soul|rock`.
- `popblues` — OndaRock's actual “pop-blues elettrico” of the **lead single** *'O scarrafone* on Un uomo in blues. Proposed family `pop|blues`; ranks within first three as the major hit.

**Instruments:** none. `sampler`, `acousticguitar`, `electricguitar`, `strings`, `harmonica` etc. are existing valid tokens.

**Production:** none. `sampling`, `programming`, `processedguitar` already exist.

**Older-phase token note:** Phase 02 requested new instruments `chitarrabattente`, `tammorra` and genres `arabrock`, `ethnometal`; this new phase adds none of those rows, and does not duplicate the phase 02 proposals.

## Co-billed albums

None. The Troisi film was directed by Massimo Troisi but *Le vie del Signore sono finite* LP is credited **solely to Pino Daniele**. Troisi is **not** a co-billed musician; Orixàs as guests on Mascalzone and Mick Goodrick as guest soloist on Un uomo in blues do not make co-billed records.

## Artist-wide influences

Provided with phase 01 only, **not repeated** in this incremental phase.

## Important evidence / credit caveats

- **Soundtrack:** Film issued 1987; stand-alone six-piece score LP issued 1988. Despite source showing “mini-album”, project `type` list has no mini-LP; `soundtrack` matches the release. Official soundtrack credits guitarist Daniele, keyboardist Kevin McAlea and Romano Bais “computer”, but no named **record producer**, so `producers` **empty**. Four of the six genre labels beyond soundtrack are grounded only in main song / single-track descriptions; scopes in evidence CSV, not assertions of a full jazz or blues score.
- **Schizzechea:** Official page credits **Pino Daniele as overall producer and Greg Jackman as “recording produced”**. Following phase 02's explicit inclusion of named recording producers, the row includes `Pino Daniele|Gregg Jackman` (artist page alternates Greg/Gregg); please settle the policy consistently. It documents Daniele beginning sampling: use `sampler` and `sampling`, no inferred manufacturer. No named actual sonic influence; no critical peer artist sound comparison.
- **Mascalzone:** Daniele's first-person description says **acoustic/electronic** blend made at home; Illiano credited programming. Only Daniele is credited overall producer; no evidence Illiano was co-producer. R&B, Soul, Funk and Blues album genre labels are supported by an opened original 1989 Bagaria LP seller listing and 1994 CGD CD reissue; original Discogs sleeve/style verification remains welcome. OndaRock specifically mentions *flamenco* on only several songs.
- **Un uomo:** Some official staff credits inconsistently identify **Guido vs Giulio Clementi** for additional keyboards / programming; no person named in `producers` from this credit. Guest Mick Goodrick's contribution to Daniele's guitar harmony is acknowledged in the artist's retrospective, but the user excludes **guests** as album musical influences; no `influenced_by` field. `popblues` tied to lead hit only; `landmark=1` because **independent** OndaRock/DeBaser call this a new career/pop-electric phase, not because a label praises it.
- **No artist-like comparisons fabricated** from guests, band personnel, or allusions to Daniele's own records. `sounds_like` and `influenced_by` therefore blank for all four. Non-musical dedication to Anna Magnani cannot become an artist influence.

## Next — phase 04 (provisional; new albums only)

1. **Che Dio ti benedica** (1993) — studio.
2. **Non calpestare i fiori nel deserto** (1995) — studio.
3. **Dimmi cosa succede sulla Terra** (1997) — studio.
4. **Come un gelato all'Equatore** (1999) — studio.

Check remote descriptors again before phase 04; only missing rows. Do not insert *Sotto ’o sole* or live/compilation titles merely to fill a four-album batch.

## Contents — exactly six files

- `CLAUDE_IMPORT.md`
- `pinodaniele_phase03_rows_ONLY.csv`
- `pinodaniele_phase03_sources.csv`
- `pinodaniele_phase03_genre_evidence.csv`
- `pinodaniele_phase03_evidence-notes.md`
- `pinodaniele_phase03_catalog-audit.csv`
