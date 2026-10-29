# Nada — Fandome phase 01 | Claude import instructions

Scope: **only four new rows**, in chronological order. All are original studio albums, not compilations/live. This ZIP contains the six specified deliverables, all CSV in UTF-8 with BOM for Excel compatibility, and exactly 27 fields in each descriptor row.

## Artist and catalogue

- Fandome proposed artist ID: `nada` (checked for exact ID/name in both `src/data/catalog.ts` and `src/data/seed.ts`, branch `descriptors`, 29 October 2026). **Neither file has Nada.** No `docs/descriptors/nada.csv` exists as of that check. No row in the existing research landmarks notes names Nada.
- Create an artist entry before importing rows. Album rows to add:
  1. `nada-nada`: **Nada**, 1969, `studio`. Original RCA Talent TSL 10444 (12 tracks).
  2. `nada-iolhofattoperamore`: **Io l'ho fatto per amore**, 1970, `studio`. RCA PSL 10484 (12 tracks, with one medley).
  3. `nada-hoscopertocheesistoanchio`: **Ho scoperto che esisto anch'io**, 1973, `studio`. Original RCA DPSL 10619 (10 tracks). Ignore the two 1977 bonus recordings added to the 1995 CD.
  4. `nada-1930ildomatoredellescimmie`: **1930: Il domatore delle scimmie**, 1975, `studio`. The actual machine ID in CSV is **`nada-1930ildomatoredellescimmie`**. Original RCA TPL1 1157 (12 tracks).
- **No albums were skipped because previously described.** All four are missing from the catalogue.
- 1930 / Reale Accademia di Musica: original physical-release artist billing is *Nada*; multiple sources credit the band for accompaniment. Treat as Nada's studio album. **Do not create a co-billed record automatically** from accompanist credits. If the original sleeve proves an equal billing, discuss a `src/data/coBilled.ts` entry during editorial review. No new co-billed row provided.

## Editorial decisions

- The album *1930: Il domatore delle scimmie* is dated **1975** using the original RCA pressing, Hit Parade Italia, ItalianProg and physical listings. Some secondary encyclopedias and biographies list **1974**; document the dispute rather than changing the primary pressing year. Reviewer/producer chronology can conflict further.
- In 1973, `Piero Ciampi|Gianni Marchetti` are documented *producers*. Pino Pavone is a writer, not to be automatically added as producer. For 1969/1970, Franco Migliacci is the producer, while Coggio, Cini, Pintucci, Mimms and Ormi appear as arrangers/conductors, **not** producers.
- The early two LPs are mixed orchestral and beat-era pop; `beat` and `ballad` are explicitly **track-level / editorial**, not claimed as full-album reviewer labels. The whole album is more melodic than beat. `orchestralpop` is an inference from original conductor and arranger documentation, not an external quoted taxonomic tag.
- The 1973 record is substantial orchestral canzone d'autore with electric guitars, documented tremolo/distortion and harmonica. Avoid confusing Gianni Marchetti as a guest only: original metadata explicitly credits production.
- The 1975 record is **not simply a progressive-rock album** just because the performers came from Reale Accademia di Musica. ItalianProg calls the sound canzonettistico and the detailed L'Isola review finds actual progressive passages primarily in *Idea comune* and *Cinema*. Hence `prog` is fourth, and `italianpop|poprock` come first. Do not extend `folk` beyond *Lady Onion*. Piano, keyboards, electric band and acoustic guitar/percussion are directly described by personnel and review; no unverified synth or studio machines.
- Musical-resemblance fields are **not** auto-filled from cover versions. `sounds_like=Piero Ciampi` on the 1973 record is a narrow sonic editorial judgment reinforced by the catalogue's shared repertoire; this is **not** an `influenced_by` claim. Review comparisons to Pink Floyd, Rino Gaetano or other acts are primarily *track* comparisons; do not turn them into direct influences.
- Missing exact instrument models or recording processes are blank deliberately. No new genre, instrument or production tokens are proposed; all the used tokens are in Fandome's `Genre` type and instrument/production lists.

## ARTIST INFLUENCES (only phase 01; directly named by Nada)

- **Led Zeppelin** — Nada lists them as music she liked after she began listening seriously in the 1970s; says she absorbed this less-conventional rock approach into composing. [Rolling Stone Italia interview, 6 Oct 2022](https://www.rollingstone.it/musica/interviste-musica/nada-voglio-un-altro-mondo-migliore-di-questo/672958/).
- **Pink Floyd** — same direct first-person interview and explanation, independently of the critic's *1973 title-track* resemblance in SentireAscoltare. [Rolling Stone Italia, 2022](https://www.rollingstone.it/musica/interviste-musica/nada-voglio-un-altro-mondo-migliore-di-questo/672958/).
- **King Crimson** — cited alongside her formative rock listening. [Rolling Stone Italia, 2022](https://www.rollingstone.it/musica/interviste-musica/nada-voglio-un-altro-mondo-migliore-di-questo/672958/).
- **Janis Joplin** — directly named among formative listening, not inferred from critics comparing Nada's singing to Joplin. [Rolling Stone Italia, 2022](https://www.rollingstone.it/musica/interviste-musica/nada-voglio-un-altro-mondo-migliore-di-questo/672958/).
- **The Velvet Underground** — directly named among the rock records/artists that influenced her songwriting approach. [Rolling Stone Italia, 2022](https://www.rollingstone.it/musica/interviste-musica/nada-voglio-un-altro-mondo-migliore-di-questo/672958/).
- **Piero Ciampi** — specifically credits his mentoring with helping her develop her own language and become an author; this is an artist-level influence **even though he is also a collaborator/producer on the 1973 LP**. Do not simply copy his name into the album's influenced_by field, which has a collaborator exclusion. [Nada's interview, Il Fatto Quotidiano 15 May 2025 via Cinquantamila](https://www.cinquantamila.it/storyTellerArticolo.php?storyId=6825cd0568994); also [2014 Nada interview](https://tonyface.blogspot.com/2014/03/intervista-nada.html).

**Important period boundary:** Nada says she **started** listening to the above rock artists in the seventies, after her earliest commercial successes. Therefore these references must **not** be retroactively assigned to the 1969 or 1970 albums without album-specific evidence.

## Excluded releases and later phases

- No retrospective compilations (*Malanima: successi ed inediti 1969–1994*, *Ti stringerò & successi* 1982), repackages, live albums or 1977 reissue variation. The 1976 eponymous original and its 1977 amended edition refer to the *same* project; do not import both as separate studio records.
- **Phase 02:** *Nada* (1976; original RCA promo/initial issue, commercial reissue 1977), *Nada* (1979; a different Polydor record), *Smalto* (1983), *Noi non cresceremo mai* (1984). IDs must be `nada-nada1976` and `nada-nada1979` because two later records share the 1969 title.
- Further phases cover *Baci rossi* (1986), *L'anime nere* (1992), *Dove sei sei* (1999), and onwards, except live/compilations. Note *Nitrito* (2025) is out and belongs in a future phase.

Import only `nada_phase01_rows_ONLY.csv` into descriptor store. Validate genre scopes with `nada_phase01_genre_evidence.csv`, and run Fandome's official descriptor validator/tests after adding the artist and albums. Every row remains `draft`, awaiting a human reviewer.

## Claude import note

- New artist `nada` (catalogue, scene IT it 1960 pop,songwriter) with the four 1969–1975 studio albums.
- sounds_like emptied on 1973: Piero Ciampi is the album's producer and songwriter, not a comparison.
- Artist influences from her own words: Led Zeppelin, Pink Floyd, King Crimson, Janis Joplin, The Velvet Underground (from the seventies on), Piero Ciampi.

## Claude enrichment

- Reception from hitparadeitalia.it, it.wikipedia, OndaRock (Piero Ciampi monografia), Tomtomrock, Rockit, Rolling Stone Italia, VICE Italia (2014, 2019), Kalporz, italianprog.com.
- Credits confirmed from Discogs (5636022, 3857367, 3151765, 3155872): Franco Migliacci (1969, 1970), Piero Ciampi and Gianni Marchetti (1973; Roberto Gianolio's "realizzazione" left out), Henryk Topel Cabanes (1975). The 1975 sleeve bills Nada alone: no co-billing with Reale Accademia di Musica. 1975 is the right year.
- 1973: sounds_like Pink Floyd (VICE 2019: "Quel disco ha degli aspetti che ricordano anche la psichedelia. Per essere precisi, i Pink Floyd"); psychedelic pop added (VICE 2014: "arrangiamenti orchestrali psichedelici di Gianni Marchetti"). Nada's own Pink Floyd statement (The Dark Side of the Moon behind Esisto anch'io) is about one track: not in influenced_by.
- 1975: R&B added at the tail (Kalporz: "passaggi r'n'b"; "non è un disco prog").
