# Mariah Carey — Fandome Phase 01: evidence and scoring notes

Scope: 1990 **Mariah Carey**, 1991 **Emotions**, 1993 **Music Box**, and 1994 **Merry Christmas**. Research cutoff 2026-10-25. Sources cited using keys embedded in `source` column of companion CSV. All 0–5 values are *source-informed editorial assessments*, not measurements or critic scores. The album edition is the first commercially issued standard album, not a remix, live, deluxe or anniversary reissue.

## General constraints and cross-album calibration

- `voice` is a vocabulary-limited **performance quality**, not a measurement of range. Whistle register, melisma, breathy register, belting, and multi-track harmonies are distinct techniques that the current voice enum **cannot faithfully represent**. We use `powerful`, `soft`, `clear`, and `choral` only when album evidence supports them; these are not exclusive labels. Recommend adding a separate future technical vocal capability field rather than overloading voice.
- `mood` is emotional brightness (0 dark → 5 euphoric); it is NOT equivalent to drive, rhythmic intensity or a happy chart single. `Music Box` is mostly slow but alternates tender reassurance and heartbreak; `Emotions` has joyous house grooves and painful loss. Hence both remain mood 3, with different groove scores.
- `electronic` is an **arrangement / source mix** assessment; synth strings, drum programming, and sampled beats count, while lavish production alone does not. `Music Box` synth-soaked ballads merit electronic 3 even though groove is 1.
- `theatrical` measures album-level dramatic presentation, not merely the singer's extraordinary vocal register. High gospel congregational arrangements justify 4 on *Merry Christmas*; the other records are 3 despite virtuosic vocal peaks.
- Genres have NO numerical limit; each is accompanied by album vs track vs texture scope. `gospel` on the debut is partly a VOCAL STYLE; `jazz` on *Emotions* is one closing track; `dancepop` on *Music Box* is two songs. Don't weight these equally with dominant genres.
- `influenced_by` requires explicit artist/producer/qualified critic support for **a record or its compositions**. Names present only as credited collaborators or sonic parallels do not count. If evidence is only broad career context, the notes disclose it, and importers may prefer omission under the strictest album-specific standard.
- `sounds_like` is a curator's resemblance inference and less strict than `influenced_by`, but not a claim of participation or plagiarism.

## 1990 — Mariah Carey (`mariah-mariahcarey`)

**Original LP**, June 12 1990, 11 songs; sources D90_ALL, D90_LAT, D90_ALB, D90_MB, D90_SESS, D90_AOTY, D90_RM, D90_NYT, D90_INTER.

- `genres`: R&B and crossover pop dominate, contemporary R&B is AllMusic's specific style; pop-soul is contemporaneously named by LA Times. Gospel is a strong *stylistic and technical foundation* of singing (Dennis Hunt), **not** a claim that this is a gospel album. Record Mirror names a doo-wop sound specifically for **Vision of Love** only. Dance-pop is a secondary strand of individual upbeat songs.
- `energy=3`: dynamic peaks on Vision of Love, Someday and Prisoner contrast with several slower love ballads (AllMusic). `electronic=3`: original credits confirm Fairlight and drum/synth programming alongside instrumental session players (D90_MB, D90_SESS); do not equate a sequencer with an entirely electronic album.
- `mood=3`: buoyant dance/R&B and spiritual uplift alternate with regret, loneliness, relationship songs. `theatrical=3`: arranged pop climax without overall theatrical showtune format. `experimental=1`: accessible classic pop/R&B construction. `polish=4`: multistudio major-label production documented in original credits. `tempo=3`, `groove=2`: upbeat tracks exist but substantial ballad material prevents dance-floor emphasis.
- `voice=powerful|clear|soft`: Albumism directly details powerful chest-register singing on Prisoner, a clear tone and whistle on All In Your Mind; slower songs bring softer voice (D90_ALB). "Whistle" cannot be captured in current enum.
- `lyrics=love|heartbreak|social|spiritual`: romantic texts dominate; There’s Got to Be a Way explicitly addresses social hardship, while Vision of Love evokes spiritual gratitude. `scene` is US 1990 pop/R&B, not gospel-only.
- `producers`: original LP identifies Carey, Rhett Lawrence, Ric Wake, Narada Michael Walden, Ben Margulies and Walter Afanasieff across tracks. **Do not include Tommy Mottola as music producer**; he is executive producer. Margulies is included as an original track producer, not merely a co-writer (D90_SESS).
- `sounds_like=Whitney Houston`: contemporaneous press and Slant compare their adult-pop vocal idioms, but not a documented personal influence.
- `influenced_by`: *historical, contemporaneously documented formative references* Stevie Wonder, Aretha Franklin, Gladys Knight, Al Green, Minnie Riperton from Carey's own 1993 interview (D90_INTER) and period New York Times account (D90_NYT). These explain vocal/songwriting origins but do **not** show that any individual track imitates those people. Reassess against strict track-specific rules before final publication.
- `landmark=1`: commercially and artistically defining debut (four No.1 singles). Sources disagree on whether arrangements prioritize songwriting or virtuosity; D90_ALB more affirmative, D90_LAT notes gospel prowess underused in otherwise pop-soul music.

## 1991 — Emotions (`mariah-emotions`)

Sources E91_ALL, E91_SLA, E91_ALB, E91_APP, E91_SESS, E91_HAR, E91_SLA2, E91_AOTY.

- `genres`: sustained pop and soul/R&B; gospel-tinged ballads and Hammond on If It's Over; Clivillés/Cole house/disco on Emotions and Make It Happen; jazz tag **only for closing track The Wind**, a Russell Freeman composition associated with Chet Baker (E91_ALB).
- `energy=3`, `tempo=3`, `groove=3`: record mixes soaring club cuts with slow long ballads; do not treat the title track as the album average. `electronic=3`: dance cuts use programmed dance rhythm while ballads feature piano/brass/gospel and acoustic players (E91_SLA, E91_SESS).
- `mood=3`: joy on title song, pain on Can't Let Go, and grief/mortality on The Wind; genuinely mixed tone. `theatrical=3`: vocal peaks in You're So Cold, but no full theatrical conception. `experimental=2`: inventive tonal juxtapositions, still accessible 1991 R&B/pop. `polish=4`: detailed professional layered production.
- `voice=powerful|soft|clear`: Slant details conspicuous whistle singing alongside soft midrange in Can't Let Go. `lyrics=love|heartbreak|spiritual|introspection`: love and breakup narrative plus Make It Happen resilience/faith, reflective The Wind. No political claim.
- `producers`: **Carey, Afanasieff, Robert Clivillés, David Cole** track credits (E91_SESS); no Carole King, who co-wrote If It's Over, but is not thereby producer.
- `sounds_like=The Emotions|Cheryl Lynn|Whitney Houston`: Slant critics identify title-song resemblances to The Emotions' Best of My Love and Cheryl Lynn's Got to Be Real; Whitney is an era vocal comparison. **Track and genre comparisons, not proven samples/influence statements** (E91_SLA2, E91_SLA).
- `influenced_by` empty: the reviews' "sounds like" references cannot be upgraded to artist-confirmed album influence; no unique album-level direct artist statement established. `landmark=1`: a defining extension of soul and self-production identity despite initially mixed critical response.
- **Disagreement:** period critics criticized technical showiness; later Slant and Albumism articulate emotional meaning and compositional intent. Don't interpret retrospective praise as a change in observed audio features.

## 1993 — Music Box (`mariah-musicbox`)

Sources M93_ALL, M93_APP, M93_RS, M93_MB, M93_SESS, M93_WALT, M93_AOTY.

- `genres`: adult contemporary/pop ballads primary (AllMusic, Rolling Stone); contemporary R&B/soul remains; gospel backing on certain ballads; only **Now That I Know** and **I've Been Thinking About You** clearly danceable (Apple editorial).
- `energy=2`, `tempo=2`, `groove=1`: slow and gentle record with a few driving outliers; no generic inference from Mariah's power. `electronic=3`: review explicitly states synth-soaked ballads and original credits show synth bass, programmed percussion and keyboards (M93_APP, M93_MB).
- `mood=3`: romantic longing/heartbreak alongside warm assurance, Dreamlover and Hero; a mellow album is NOT necessarily a dark album. `theatrical=3`: dramatic ballad crescendos without musical theatre format. `experimental=1`: restrained, radio-tailored, highly conventional arrangements. `polish=5`: unusually pristine, elaborate major-label adult contemporary layers in 1993 source criticism. Not a quantified budget.
- `voice=soft|powerful|clear`: critics note **intentionally reined-in singing** relative to Emotions; big peaks and polished clarity remain (M93_ALL, M93_RS).
- `lyrics=love|heartbreak|identity`: relationship longing and loss, plus Hero's self-belief / self-reliance. `scene`: American adult-contemporary/pop crossover. `landmark=1` as globally definitive breakthrough.
- `producers`: original credits: Carey, Afanasieff, Dave Hall (Dreamlover), Babyface and Daryl Simmons (Never Forget You), C+C Music Factory's Robert Clivillés and David Cole (Now That I Know, I've Been Thinking About You). Credits from M93_SESS and M93_MB; do not merge writers/mixers into producer field.
- `sounds_like=Whitney Houston`: contemporary Rolling Stone critic explicitly compares ballad arrangements and vocal approach. `influenced_by=Whitney Houston` is **critic-attributed** on Hero, Just to Hold You Once Again, and All I've Ever Wanted — *not* a quotation of Carey acknowledging influence. Qualify in UI or consider leaving blank under a stricter direct-influence rule.
- **Debate:** Erlewine regards the restraint as a musical strength; Rolling Stone worries about overly formulaic and calculated ballads. Similar sonics, different critical valuation.

## 1994 — Merry Christmas (`mariah-merrychristmas`)

Sources C94_ALL, C94_APP, C94_BB, C94_MB, C94_SESS, C94_BG, C94_AOTY, C94_MOB.

- `type=studio`: this is Carey's fourth original studio album, *not a compilation*. 1994 source issue has 10–11 song variation due to regional variants, or silent encoding of medleys; we use **original 1994 standard 10-track programme** where release editions differ. No 2019 or 2024 deluxe/live additions.
- `genres`: `christmas` is **new seasonal genre token**, included to preserve the explicitly named record category. Christmas is a programming/use-case genre, **not a single acoustic style**. Gospel and pop dominate the full sequence; traditional/pop song styling, soul, R&B, adult-contemporary and limited rhythmic dancing appear with varying scope (C94_ALL, C94_APP, C94_AOTY).
- `energy=3`, `tempo=3`, `groove=2`: exuberant All I Want for Christmas Is You, Joy to the World and live church grooves counter solemn carols and slow ballad Miss You Most. `electronic=2`: studio keyboards/programming coexist with real gospel ensembles, choir, live drums, percussion and Hammond organ (C94_BB, C94_SESS).
- `mood=4`: predominantly celebratory, communal and grateful **but** the yearning in Miss You Most and the reverence of Silent Night/Oh Holy Night prevent euphoria 5. `theatrical=4`: large choirs, gospel call-and-response, wall-of-voices and dramatic festive arrangements. `experimental=1`: tradition-conscious holiday originals/standards; `polish=4`: glossy professional arrangements with deliberately live gospel feel in some tracks.
- `voice=powerful|choral|soft|clear`: strong solo and vocal layering, group singing important to many songs; `choral` is descriptive of prominent backing ensembles and **not** the only lead voice type. `lyrics=spiritual|love|heartbreak|nostalgia` supported by sacred carols, seasonal romance, Miss You Most, and familiar holiday standards. The last is a curatorial inference from seasonal nostalgic settings; Claude may omit if requiring explicit text evidence.
- `producers=Mariah Carey|Walter Afanasieff|Loris Holland`: original 1994 producer and co-producer credits (C94_MB, C94_SESS). Note contemporary Billboard interview with Carey confirms Holland's role for gospel sound. No false addition of Phil Spector as actual 1994 producer.
- `sounds_like=The Ronettes|The Beach Boys`: AllMusic hears Phil Spector wall-of-sound and Beach Boys-like harmonies on **one new seasonal hit**. Ronettes link is *curatorial resemblance* to girl-group Wall of Sound, not independently named by the review as an album-wide analogue. Drop Ronettes if no extra confirmation in further review.
- `influenced_by=Phil Spector|Aretha Franklin`: **Phil Spector**: AllMusic explicitly identifies a production tribute on All I Want for Christmas Is You; **Aretha Franklin**: Carey's directly stated earlier formative gospel/vocal inspiration and same album's gospel techniques; the former track-specific, latter artist-level. Gospel influence is not proof of sampling or collaboration.
- **Contemporaneous evidence:** Billboard described original releases for R&B/adult contemporary and gospel radio, Carey explained working with church players and co-producer Holland. Critic context vs actual producer recollections is separated. `landmark=1` as distinctive perennial career-defining album.

## Import precautions

1. Preserve existing catalog IDs (`mariah-mariahcarey`, `mariah-musicbox`), add missing `mariah-emotions`, `mariah-merrychristmas`; don't rerun earlier artist research.
2. Add `popsoul` and `christmas` to Genre union / family map / static validator and guide **before validation**. Suggested `popsoul: ['pop','soul']`. `christmas` is a thematic/seasonal category: avoid forcing all Christmas genres to be acoustic `traditionalpop`; use `christmas: ['pop']` only as app-specific broad fallback after discussing cross-category semantics.
3. Merge CSV rows into `docs/descriptors/mariah.csv` (new artist), source files into `docs/descriptors/research/`. Ensure no duplicate IDs and run `npx vite-node scripts/validate-descriptors.ts` and tests.
4. Keep `status=draft`: no second-person review conducted. Do not copy these source descriptions into published on-site editorial text verbatim.
5. Original producer credit sources sometimes differ in *co-producer* vs *additional producer* categories. This package includes credited track producers and formal co-producers only, never an executive-only producer.
