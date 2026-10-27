# Duran Duran — Fandome descriptors, phase 01

## Import package (strictly incremental)

Artist: `Duran Duran`; **existing Fandome id `duranduran`**, confirmed in `src/data/catalog.ts`; not in the independently defined base artists of `src/data/seed.ts`.

**Rows in this ZIP only**:

1. `duranduran-duranduran` — *Duran Duran* (1981, studio, original UK nine-track programme)
2. `duranduran-rio` — *Rio* (1982, studio, original UK mix)
3. `duranduran-sevenandtheraggedtiger` — *Seven and the Ragged Tiger* (1983, studio)
4. `duranduran-notorious` — *Notorious* (1986, studio)

All four IDs already exist in `catalog.ts` and follow the repository's `slug()` ID generator. **Previously described rows skipped: none.** The `docs/descriptors/` directory listing contains no `duranduran.csv` (branch `descriptors`, checked 2026-10-27). The standalone landmark research document does not identify a Duran Duran row.

## Albums to add to `catalog.ts` (studio, released)

| Title | Year | Type | Intended ID |
|---|---:|---|---|
| Big Thing | 1988 | studio | `duranduran-bigthing` |
| Liberty | 1990 | studio | `duranduran-liberty` |
| Thank You | 1995 | studio | `duranduran-thankyou` |
| Medazzaland | 1997 | studio | `duranduran-medazzaland` |
| Pop Trash | 2000 | studio | `duranduran-poptrash` |
| Astronaut | 2004 | studio | `duranduran-astronaut` |
| Red Carpet Massacre | 2007 | studio | `duranduran-redcarpetmassacre` |
| All You Need Is Now | 2010 | studio | `duranduran-allyouneedisnow` |
| Paper Gods | 2015 | studio | `duranduran-papergods` |

The first album's original release date is retained; *All You Need Is Now* first appeared digitally in December 2010 (expanded physical edition 2011). See `duranduran_phase01_catalog-audit.csv` for all 16 studio albums. Source for discography: https://duranduran.com/releases/ and https://www.allmusic.com/album/rio-mw0000009815.

## Co-billed albums

**None in this phase.** Solo/side-project records by Arcadia or The Power Station are **not** Duran Duran albums and are not imported under this artist.

## New tokens requiring Claude import

- **Production:** `crumarperformer` — Crumar Performer string synthesizer. Nick Rhodes confirms its use in `Planet Earth`, `Rio`, and `New Moon on Monday`: https://duranduran.com/2002/pe-synth/ ; https://duranduran.com/2008/last-synth-question-on-rio-ever/ ; https://duranduran.com/2021/the-synths-in-new-moon-on-monday/ . Use distinct from the existing `jupiter4` and `jupiter8` tokens.
- **New genres:** none. `dancepunk`, `newromantic`, `funkrock`, `postdisco` etc. are already accepted in `scenes.ts`.
- **New instrument tokens:** none. Marimba and vibraphone are represented by the existing umbrella `mallets`; Fairlight uses existing `sampler` and the `fairlight` production model.

## ARTIST INFLUENCES (phase 01 only; statements by band members)

- **Roxy Music** — Simon Le Bon named the group directly as a source of Duran Duran's original synthesis (https://duranduran.com/2012/your-digital-daily-simon-le-bon/); Roger Taylor also identifies them as a strong early influence (https://duranduran.com/2012/a-conversation-with-duran-durans-roger-taylor/).
- **David Bowie** — Roger Taylor named him among the early musical influences (https://duranduran.com/2011/duran-durans-roger-taylor-tells-us-why-he-wishes-hed-kept-his-80s-wardrobe/).
- **Chic** — Le Bon described Chic's disco, together with punk, as part of the group's founding formula (https://duranduran.com/2012/your-digital-daily-simon-le-bon/); see also Nick Rhodes's account (https://duranduran.com/2022/the-most-ambitious-and-cinematic-of-duran-duran-according-to-john-taylor-and-nick-rhodes/).
- **Sex Pistols** — named by Simon Le Bon and Nick Rhodes as the punk half of the band's founding concept (https://duranduran.com/2012/your-digital-daily-simon-le-bon/ ; https://duranduran.com/2022/the-most-ambitious-and-cinematic-of-duran-duran-according-to-john-taylor-and-nick-rhodes/).
- **Giorgio Moroder** — Nick Rhodes explicitly identifies him as an inspiration (https://duranduran.com/2022/the-most-ambitious-and-cinematic-of-duran-duran-according-to-john-taylor-and-nick-rhodes/).
- **Japan** — Roger Taylor says Japan's sequenced writing influenced the group; Nick Rhodes was an admirer (https://duranduran.com/2012/a-conversation-with-duran-durans-roger-taylor/ ; https://duranduran.com/2021/how-70s-u-k-music-icons-inspired-duran-duran-book-excerpt/).
- **Kraftwerk** — Roger Taylor named them among the band's early influences (https://duranduran.com/2012/a-conversation-with-duran-durans-roger-taylor/).
- **Ultravox** — Roger Taylor directly named them (https://duranduran.com/2012/a-conversation-with-duran-durans-roger-taylor/).
- **The Human League** — Nick Rhodes says *Reproduction* inspired the group's choice of Colin Thurston (https://duranduran.com/2021/40-years-ago-duran-duran-take-first-steps-to-fame-on-debut-lp/).
- **T. Rex / Sparks / Siouxsie and the Banshees / The Cure / The Clash / The Damned** — the band mentions its shared enthusiasm for these in its interview with *Vogue*: https://duranduran.com/2021/duran-duran-on-punk-fashion-sacred-choral-music-from-the-renaissance-and-their-brilliant-new-album/ . These are broad formative references; do not mechanically assign them to every album.
- **AC/DC** — Roger Taylor identifies Andy Taylor's early heavy-rock influence (https://duranduran.com/2012/a-conversation-with-duran-durans-roger-taylor/). This is a member-specific influence, not a blanket claim about each record.

## Caveats and differences of critical opinion

1. **1981 reissues:** the original UK nine tracks exclude the 1983 single *Is There Something I Should Know?* and its producer Ian Little. The 1981 `producers` field must remain `Colin Thurston` (not the aggregate edition credits).
2. **Rio 1982/83 versions:** US reissues feature alternate mixes by David Kershenbaum. They are not another studio album, and the original album producer is Colin Thurston. The TR-808 is documented on the title song, **not** assumed across every track. `mallets` groups actual album vibraphone and marimba from two tracks.
3. **Seven 1983:** original sleeve says 'Produced by Alex Sadkin in association with Ian Little and Duran Duran'; some pressings and digital rights-holder metadata explicitly credit all three as producers. The CSV follows the latter producer metadata, with this conflict flagged for import review. The famous Nile Rodgers *The Reflex* 1984 sampling/stutter remix **is not the album mix**, so its production traits are excluded from this row.
4. **Notorious 1986:** the 1986 release date is given as 18 November (AllMusic/Apple) or 24 November (some secondary sources); year is uncontested. Nile Rodgers and Duran Duran are credited producers, not Steve Ferrone, Warren Cuccurullo, or Daniel Abraham. `saxophone`/`trumpet` rest on explicit title-track personnel, not generic 'horns' inference.
5. `sounds_like` denotes editorial *sonic comparison*, not proof of influence; `influenced_by` uses artist/producer statements and is narrower.
6. All numerical ratings are Fandome research judgments, not numerical claims in the sources. Genres qualified in `genre_evidence.csv` as `some tracks` / `texture` have deliberately lower album-wide prominence.

## Next phases (incremental, 4 each)

- **02:** *Big Thing* (1988); *Liberty* (1990); *Duran Duran (The Wedding Album)* (1993); *Thank You* (1995).
- **03:** *Medazzaland* (1997); *Pop Trash* (2000); *Astronaut* (2004); *Red Carpet Massacre* (2007).
- **04:** *All You Need Is Now* (2010); *Paper Gods* (2015); *Future Past* (2021); *Danse Macabre* (2023).

Do not import compilation *Decade*, *Greatest*, *Arena* (mostly live), or *The Greatest* reissue as studio albums. Deluxe reissues are versions, not additional studio albums. No unreleased album has been included.


## Claude import note (Oct 2026)
- sounds_like no longer repeats names already in influenced_by (Rio, Seven and the Ragged Tiger).
- Artist influences: AC/DC left out (Andy Taylor's own background, not the band's).
