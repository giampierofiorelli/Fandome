# SKUNK ANANSIE — FANDOME PHASE 01 — CLAUDE IMPORT

## Strictly incremental contents

Read `skunkanansie_phase01_rows_ONLY.csv` and the other five included documents. **Import only the four new album rows**; neither previous artists nor unrelated editions are included. One album row = 27 fields; empty `influenced_by` is intentional for lack of *album-specific* evidence. Scales are editorial 0–5 integers following `docs/album-descriptors-guide.md`, not mechanical genre-derived estimates.

| album_id | original title | year | type | catalog check (`descriptors` branch) |
|---|---|---:|---|---|
| skunkanansie-paranoidsunburnt | Paranoid & Sunburnt | 1995 | studio | already listed |
| skunkanansie-stoosh | Stoosh | 1996 | studio | already listed |
| skunkanansie-postorgasmicchill | Post Orgasmic Chill | 1999 | studio | already listed |
| skunkanansie-wonderlustre | Wonderlustre | 2010 | studio | already listed |

**Artist ID confirmed:** `skunkanansie`, artist `Skunk Anansie`, exact existing entry in `src/data/catalog.ts`; do not create a duplicate artist or change ID. At research time no `docs/descriptors/skunkanansie.csv` was present, so none of these four overlap an existing descriptor file. `skunkanansie_phase01_catalog-audit.csv` lists all catalogue gaps. Catalogue ID slug removes non-letters / non-digits from original titles; ampersand is deleted rather than turned into `and`.

## Studio discography and catalogue corrections

Seven studio albums through 27 October 2026: *Paranoid & Sunburnt* (1995); *Stoosh* (1996); *Post Orgasmic Chill* (1999); *Wonderlustre* (2010); *Black Traffic* (2012); *Anarchytecture* (2016); *The Painful Truth* (2025). Catalogue currently lists first five. **Add to `catalog.ts` now**: `Anarchytecture`, 2016, studio, expected id `skunkanansie-anarchytecture`; and `The Painful Truth`, 2025, studio, expected id `skunkanansie-thepainfultruth`. Do not pre-create descriptor rows for them in Phase 01. Verified with [MusicBrainz artist catalog](https://musicbrainz.org/artist/e212efdf-98b2-4dce-92ed-62cfc1e29854), [AllMusic discography](https://www.allmusic.com/artist/skunk-anansie-mn0000019831) and [the band’s official Bandcamp](https://skunkanansie.bandcamp.com/music).

*Smashes and Trashes* (2009) is a hits compilation containing three previously unreleased songs; skip it under the instruction excluding ordinary compilations. *An Acoustic Skunk Anansie (Live in London)* (2013) and *25Live@25* (2019) are live records and not demonstrated to be essential landmark original albums; exclude, pending explicit exception request. Regional/single-based or reissue entries styled *You'll Follow Me Down* (1999), *Skunk Anansie* (2018), and the 2024 anniversary *Post Orgasmic Chill* are NOT separate studio albums. No standalone co-billed album was found in these phases; `coBilled.ts` needs no addition.

## Add one new genre token

- `alternativemetal` = **Alternative Metal**, explicitly used in AllMusic's style labels for 1995, 1996 and 1999 albums: https://www.allmusic.com/album/paranoid-and-sunburnt-mw0000645356 ; https://www.allmusic.com/album/stoosh-mw0000021285 ; https://www.allmusic.com/album/post-orgasmic-chill-mw0000243100 . It is **not** interchangeable with `metal`, `heavymetal`, or `alternativerock`: retain the new exact token and add to Genre and genreFamilies.ts. Suggested parents `metal` and `alt` (Claude to select correct taxonomy; neither represents a source rename). Existing tokens cover every other genre used.

No new instrument token and no new production token. Specifically `theremin`, `mallets`, `strings`, `programming`, `stringarrangements`, and `liverecording` already exist in the branch guide and token files. No named machine/software manufacturer was documented for these original albums; do not add inferred units.

## ARTIST INFLUENCES — phase 01 only, firsthand sources

These are **the band's broadly acknowledged influences**, NOT claims that a specific one of the four album recordings was modeled on any particular artist. **Do not mass-copy these to `influenced_by` album columns.**

- **Nirvana** — Skin explicitly says Skunk Anansie were influenced by American grunge and Nirvana were a band favourite: [Skin, Louder, 8 Dec 2015](https://www.loudersound.com/features/thinking-out-loud-skunk-anansie-s-skin); corroborated by [Skin, Kerrang! interview](https://www.kerrang.com/skunk-anansies-skin-you-dont-have-to-be-nice-be-a-c-nt-if-thats-who-you-are/).
- **Rage Against the Machine** — Skin includes them in the band's main influences: [Kerrang!](https://www.kerrang.com/skunk-anansies-skin-you-dont-have-to-be-nice-be-a-c-nt-if-thats-who-you-are/) and [Radio X](https://www.radiox.co.uk/news/music/skunk-anansie-skin-story-whitewashed-britpop/).
- **The Smashing Pumpkins** — Skin cites them with Nirvana and RATM: [Louder, Skin interview](https://www.loudersound.com/features/thinking-out-loud-skunk-anansie-s-skin) and [Kerrang!](https://www.kerrang.com/skunk-anansies-skin-you-dont-have-to-be-nice-be-a-c-nt-if-thats-who-you-are/).
- **Tool** — Skin directly names them among band influences, with caveat that Skunk Anansie's songs were more direct: [Kerrang!](https://www.kerrang.com/skunk-anansies-skin-you-dont-have-to-be-nice-be-a-c-nt-if-thats-who-you-are/).
- **The Prodigy** — Skin says this band influenced all members of Skunk Anansie: [Radio X, Skin interview](https://www.radiox.co.uk/news/music/skunk-anansie-skin-story-whitewashed-britpop/).
- **Led Zeppelin** — Skin calls them an early important musical discovery; drummer Richardson directly mentions them among the band's influences: [Renowned for Sound, Mark Richardson](https://renownedforsound.com/qa-skunk-anansie/) and [Ticketmaster interview](https://discover.ticketmaster.co.uk/music/skin-skunk-anansie-interview-52597/).
- **Parliament** — drummer Mark Richardson names them as a group influence: [Renowned for Sound interview](https://renownedforsound.com/qa-skunk-anansie/).
- **Sex Pistols** — drummer Mark Richardson names them as a group influence: [Renowned for Sound interview](https://renownedforsound.com/qa-skunk-anansie/).
- **Blondie / Debbie Harry** — Skin identifies Blondie as her first musical icon and important *performer/identity* inspiration; does **not** establish direct riff borrowing: [Louder, Skin](https://www.loudersound.com/features/thinking-out-loud-skunk-anansie-s-skin).
- **Nina Simone** — Skin describes her music as formative and recounts owning her records; qualifies as *voice and artistic inspiration* rather than a verified guitar-band sonic model: [Ticketmaster, My Greatest Hits](https://discover.ticketmaster.co.uk/interview/my-greatest-hits-skin-of-skunk-anansie-64137/) and [Help Musicians interview](https://www.helpmusicians.org.uk/about-us/news/skunk-anansies-skin-joins-chris-difford-on-i-never-thought-it-would-happen).

**General admiration, weaker than claimed influence:** Skin also says she loved Bob Dylan, Marvin Gaye, The Rolling Stones and David Bowie in [Ticketmaster](https://discover.ticketmaster.co.uk/music/skin-skunk-anansie-interview-52597/), but that alone does not confirm a causal influence on a Skunk Anansie *album*. Stevie Wonder's *Songs in the Key of Life* informed Skin's harmony singing ([Ticketmaster](https://discover.ticketmaster.co.uk/interview/my-greatest-hits-skin-of-skunk-anansie-64137/)); this is a more specific voice-training influence, not a direct source for one album. Grace Jones is cited as cultural representation, NOT a declared musical influence. Mark Richardson mentions actress Bette Davis when broadly listing inspirations; do **not** treat her as a musical artist influence.

## Credit, source and edition caveats

1. The 1995 debut has original drummer **Robbie France**, not Mark Richardson; AllMusic/MusicBrainz confirm.
2. Garth Richardson and **GGGarth** in the *Stoosh* credits are one person, not two producers. Joe Barresi is mixer.
3. The 1999 record credits Andy Wallace as both producer and mixer; some all-platform personnel feeds confusingly label member Ace as **Ace Frehley**, likely name conflation. Do not use this to add a guest.
4. `Stoosh` original Bandcamp's Jan 1 date is a digitized placeholder; use year 1996. Pressing-specific pregap/hidden track markers must not become extra albums.
5. For *Wonderlustre*, bracket producer roles by original **track**. Brio Taliaferro and Jeremy Wheatley both fully produce tracks 2,4,9,10; their 'additional production' alone on song 1 would not qualify. Chris Sheldon is an engineer, not producer. Firsthand drummer interview's approximate count differs from the sleeve. Preferred exact track-list credits: https://www.chartsurfer.de/artist/skunk-anansie/wonderlustre-album_ffeeee.html
6. AllMusic tags *Wonderlustre* as Britpop, whereas Skin explicitly distances the band from that movement. Keep low-ranked sourced style, annotate dispute, and avoid labelling artist scene Britpop.
7. `influenced_by` album column intentionally empty across four releases. Broad artist inspirations are separately documented above. `sounds_like` is *editorial* comparison, not causal historical evidence.
8. Scale and landmark values are research-informed editorial inferences, not quantified claims by review outlets; all remain `draft`.

## Next phase

**Phase 02**: *Black Traffic* (2012); *Anarchytecture* (2016); *The Painful Truth* (2025). Three studio albums, separate incremental ZIP. At 27 Oct 2026 these are already released.
