# Describing Western art music and opera as works: research report and proposal for Fandome

Prepared for the "back to the origins" extension (type `work`, year = when written). Research date: 30 Oct 2026.
Fandome code read (read only): `docs/album-descriptors-guide.md`, `src/lib/similar.ts`, `src/lib/influence.ts`, `src/lib/legacy.ts`, `src/data/genreFamilies.ts` and `src/data/instruments.ts` / `production.ts` on branch `descriptors`, and the wave 7 pilot row `philipglass.csv`.

**How to read this.** Every factual claim has a source key in square brackets, listed at the end with its URL. Everything marked **Proposal** is my own recommendation for Fandome, not something a source states. Wikipedia was not cited. The section "What I could not open" lists the gaps; Grove/Oxford Music Online was blocked (HTTP 403), so I relied on peer-reviewed articles, library standards, MIR papers and an open university textbook.

---

## 0. Executive summary

1. **Experts keep apart things that Fandome's pop schema blends together.** Library standards separate *genre/form* (what a work is: symphony, opera, fugue) from *medium of performance* (who performs it), and they explicitly exclude *time period*, *nationality of the creator* and *medium* from genre/form terms [LCGFT-intro]. LC built a separate thesaurus just for medium [LCMPT-intro]. IMSLP tags works by "work type ; instrumentation ; language" and gives the period ("Piece Style") as its own field [IMSLP-tagging][IMSLP-goldberg]. DOREMUS, the French national linked-data model for classical catalogues, adds key, genre, tempo, medium of performance and catalogue as separate properties [DOREMUS]. MusicBrainz and Wikidata do the same for work type/form, key, catalogue number, librettist and language [MB-work][WD-music][WD-P7937][WD-P528].
2. **Period labels are useful but disputed.** Musicologists have criticised them for decades; style changes slowly, overlaps and splits by place and by composer [Heartz][Weiss2019]. Data-driven studies still find stable boundaries around 1750, 1820 and 1900 (and 1760/1825/1895 in an independent melodic study), but individual pieces vary more than periods do [Weiss2019]. **Proposal:** treat period and style as weighted tokens (like genres now), never as hard bins, and let a work carry two of them when it sits on a boundary.
3. **Voice in opera has two systems.** A singer's *voice type* is physiological (timbre, weight, agility, tessitura). A *Fach* groups *roles* and shifts with taste over time [Festeu]. Works should be described by the **roles' Fach/voice types**, as Wikidata does on opera characters (Violetta: lyric soprano, soprano) [WD-violetta][WD-P412].
4. **Influence must be documented, not inferred from likeness.** The largest composer-influence dataset (Classical Music Navigator) required about five corroborating sources per link and separated person-to-person influence from "style" influence and "ecological" features [Georges2022]. Theories of influence in musicology range from "immaturity" through "generosity" to Bloom-style "anxiety", and the Bloomian school is itself contested [Brown-Straus][Krims]. Borrowing (quotation, paraphrase, modelling) is a separate field of study [Burkholder-typology]. A court record shows the evidence tiers clearly: musicians' sworn statements about which Bach works they drew on, and a musicologist identifying a third Bach source by analysis [FisherBrooker].
5. **Proposal (short version):** keep the 27 columns. Re-anchor six scales for works. Leave `polish` and `producers` empty. Add **five similarity fields**: `period` (style/movement tokens; or keep them in `genres`, see §B.1), `form`, `forces`, `harmony`, `voices`. Add **five metadata fields** that never weigh in similarity: `catalogue`, `key`, `text_by` (librettist/poet), `based_on`, `premiere`. Log borrowing (`based_on`) apart from influence, in line with Fandome's rule that quotations are never influences. Widen the year windows for works in `influence.ts` and `legacy.ts`.

---

## 1. How experts segment styles

### 1.1 The standard periods and why they are contested

- Teaching texts still organise the repertoire by Middle Ages, Renaissance, Baroque, Classical, Nineteenth century/Romanticism and Twentieth century, then split the twentieth century into "-isms": Impressionism, Expressionism and serialism, Primitivism, Neoclassicism, Minimalism, electronic music [UM-toc][UM-7.01]. The same textbook warns that "we now categorize these musical approaches with fancy terms ending in '-ism'" [UM-7.01], and treats verismo as a bridge that "could justifiably be studied as part of either period" [Lumen-verismo].
- **Critique.** Heartz argues that the terms musicology attached to the pre- and post-1750 "eras" "are as misleading as the periodization itself", deriving from outdated art-historical concepts, and that "Baroque" and "Classical" are "traps for the unsuspecting". He also reports Blume's view that Classical and Romantic are "two complementary tendencies within the same style" [Heartz]. He shows the Bach/Handel → Haydn/Mozart split is false as history: the Classical style grew from Italian opera (Vinci, Leo, Pergolesi, Hasse), and Bach and Handel mattered to Mozart and Haydn only "after 1780 … in the manner of a revelation" [Heartz].
- Weiß, Mauch, Dixon and Müller summarise the consensus: a few periods "cannot reflect the complex structure of musical style's continuous and interlaced evolution". There are long transitions, parallel trends, regional differences and composers whose style changed during their lives (Beethoven, Schoenberg). Musicologists now prefer to analyse individual composers or small regional groups [Weiss2019].
- **Data-driven check.** Clustering 2,000 recordings by tonal features, they found stable boundaries at about 1750, 1820 and 1900, a split within the Baroque around 1700, and an "intermediate period" between Classical and Romantic. An earlier melodic-interval study found 1760, 1825 and 1895 [Weiss2019]. However, "the individuality of pieces is stronger than the stylistic homogeneity within a period", and averaging over a composer's works brings out the composer's style [Weiss2019]. A 2023 study of key transitions over 400 years confirms several musicological trends: harmonic innovation dips early in the Classical era and rises steeply in the late Classical [GonzalezPlotkin].
- **Catalogue practice.** IMSLP records "Composer Time Period" and "Piece Style" per work (e.g. Goldberg Variations: Baroque) [IMSLP-goldberg]. Its style categories include Medieval, Baroque, Romantic, Early 20th century and Modern [IMSLP-romantic]. LCGFT refuses period as a genre/form term [LCGFT-intro].

**What this means for Fandome.** A period is a probabilistic attribute of a *work*, not of a composer. Stravinsky's *Rite* and his neoclassical works belong to different style tokens, and so do Schoenberg's tonal, atonal and twelve-tone works [Weiss2019].

### 1.2 Movements, schools and techniques (style tokens)

The twentieth-century labels experts use name a **technique or aesthetic**, not a time span. Each has a definition that can be checked:

- *Impressionism* (Debussy, Ravel): new chords, scales and colours, ambiguous key centres [UM-7.01].
- *Expressionism / atonality / twelve-tone*: Schoenberg's row and its transformations, from which all melody and harmony derive [UM-7.02].
- *Minimalism*: consonant, triadic, steady meter, repetition as the focus, very slow change. The textbook's example is Reich's *Music for 18 Musicians*, with "only the texture changes" [UM-7.05].
- *Musique concrète* (recorded sounds) vs *elektronische Musik* (only electronically produced sounds, e.g. Stockhausen's *Kontakte*) [UM-7.07].
- LCGFT form/technique terms: *Aleatory music* ("created by chance methods or … performed in random or indeterminate style"), *Minimal music*, *Microtonal music* ("intervals smaller than a semitone"), *Spectral music* ("uses the acoustic properties of sound itself … as the basis for its compositional material"), *Stochastic music*, *Program music*, *Third stream*, *Musique concrète* [LCGFT].

**National schools and circles.** Nineteenth-century nationalism "is marked by the use of folk songs or nationalist themes in operas or instrumental music" [UM-6.10]. Heartz names the Mannheim group and French traditions as parallel currents within the eighteenth century [Heartz]. The Second Viennese School is the standard name for Schoenberg's circle that used Sprechstimme [Lumen-sprech]. LCGFT keeps nationality out of genre/form [LCGFT-intro], so schools belong in Fandome's existing free-text `scene` column, not in `genres`.

---

## 2. Analytical dimensions used to characterise a work

The open textbook *Understanding Music: Past and Present* (University of North Georgia Press, CC BY-SA) describes works in its listening guides with a fixed set of fields: **Composer, Composition, Date, Genre, Form, Nature of Text, Performing Forces, Melody, Texture**. For example: *A Survivor from Warsaw*, 1947, genre "12-tone composition for small orchestra, male chorus, and narrator", form "through-composed" [UM-7.02]; *The Valkyrie* finale, genre "music drama", form "through-composed, using Leitmotivs" [UM-6.16]. That is close to a ready-made schema.

| Dimension | What experts use | Source |
|---|---|---|
| Genre / form | symphony, concerto (solo, grosso), sonata, trio sonata, string quartet, suite, fugue, opera (seria, buffa), oratorio, cantata, madrigal, motet, mass, art song/Lied, song cycle, symphonic poem, program symphony; forms: sonata form, ritornello, binary, ternary, theme and variations, minuet and trio, rondo, double-exposition concerto form, strophic, through-composed | [UM-4.02][UM-5.07][UM-6.18] |
| Work types in databases | Aria, Ballet, Cantata, Concerto, Sonata, Suite, Madrigal, Mass, Motet, Opera, Oratorio, Overture, Partita, Quartet, Song-cycle, Symphony, Song, Symphonic poem, Zarzuela, Étude, Operetta, Musical, Incidental music, Soundtrack… | [MB-types] |
| Scoring / forces | instruments, voices, ensembles, with counts per medium and total performers; hierarchy follows Sachs–Hornbostel | [LCMPT-intro] |
| Texture | monophony (one line), homophony (melody + chords), polyphony ("two or more relatively independent … lines"); much repertoire lies between homophony and polyphony | [UM-1.08] |
| Imitative polyphony / continuo | Baroque: imitative polyphony continues; homophony and basso continuo rise | [UM-4.02][UM-4.03] |
| Harmony / tonality | consonance and dissonance, triads, seventh chords, keys and modes; Romantic: "more chromatic and dissonant harmonies with increasingly delayed resolutions"; atonality; twelve-tone; minimalist consonance | [UM-1.06][UM-6.02][UM-7.02][UM-7.05] |
| Rhythm / meter | Baroque "motor rhythm" and prominent bar lines; Romantic rubato; minimalism's steady meter | [UM-4.02][UM-6.02][UM-7.05] |
| Dynamics / colour | Baroque terraced dynamics; Classical crescendos; Romantic "larger performing forces using more diverse registers, dynamic ranges, and timbres" | [UM-4.02][UM-6.02] |
| Text | nature of text, word painting, text–music relation; language is tagged separately | [UM-4.02][IMSLP-tagging] |
| Sacred / secular | LCGFT: *Masses* BT *Sacred music*; for sacred cantatas "assign the additional term Sacred music" | [LCGFT] |
| Programme vs absolute | *Program music*: "a suggestive title, a text, program, or other extra-musical device" | [LCGFT][UM-6.02] |
| Key, catalogue, tempo | DOREMUS adds key, genre, tempo, medium of performance and catalogue as properties | [DOREMUS] |

MIR work confirms which dimensions *discriminate* styles. On the Cross-Era dataset (Baroque/Classical/Romantic/Modern; piano and orchestra subsets; global key labels for 1,200 pieces), tonal features alone (chord transitions, interval categories, tonal complexity) separate eras [CrossEra][Weiss2019]. Composer identity can be classified from symbolic piano data (13 composers, F1 0.83 on MAESTRO) [Kim2020]. **Proposal:** this supports giving `harmony` (harmonic language) real weight for works. Fandome cannot compute audio features, so the field must be filled from sources.

**Duration and scale.** None of the open sources gives a standard scale. **Proposal:** record typical duration in minutes as metadata (it helps users), but do not use it for similarity.

---

## 3. Voice and singing

### 3.1 Ranges (scoring) vs Fach (roles)

- **Ranges.** The basic four are soprano, alto, tenor and bass [UM-1.02]. LCMPT terms are range-based: *soprano voice, mezzo-soprano voice, alto voice, contralto voice, countertenor voice, tenor voice, baritone voice, bass-baritone voice, bass voice, boy soprano voice, child soprano voice, treble voice, high/medium/low voice, changing voice* (UF "soprano (singer)" → *soprano voice*, BT *high voice*) [LCMPT].
- **Choral forces** (LCMPT): *mixed chorus, treble chorus, boy chorus, boychoir, tenor bass chorus, unison chorus, equal voices, spoken chorus, solo vocal ensemble, vocal ensemble* [LCMPT]. Counts are given per medium ($n) and in total ($s) [LCMPT-intro].
- **Fach.** Festeu (Royal Academy of Music; peer-reviewed) traces the history. Early opera named roles after their first singers. Weber in 1817 proposed thirteen role "types" for a German company. Score editions after 1850 used intricate national labels. Kloiber's *Taschenbuch/Handbuch der Oper* (1951) made the Fach the central debate. The broad consensus is that **voice classification is physiological** (timbre, weight, agility, tessitura, maybe range), while **Fach groups roles** by acting, musical and vocal demands and "is subject to socio-temporal tastes" [Festeu]. "Zwischenfach" is used inconsistently. Festeu proposes treating it as timbre, not as a category; the soprano already has *spinto* between lyric and dramatic [Festeu].
- **Fach list with reference roles** (German encyclopedia wissen.de) [wissen-Fach]:
  - *Soprano:* Soubrette (Ännchen), Koloratursopran (Queen of the Night), lyrischer Sopran, jugendlich-dramatischer Sopran (Mimì), dramatischer Koloratursopran, dramatischer Sopran (Leonore), Charaktersopran (Carmen), hochdramatischer Sopran (Kundry).
  - *Mezzo and contralto:* dramatic and lyric mezzo (Eboli; Emilia), dramatic and deep contralto (Erda; Quickly).
  - *Tenor:* Tenorbuffo (Pedrillo), lyric tenor (Tamino), jugendlicher Heldentenor (Parsifal), Charaktertenor, Heldentenor (Siegfried).
  - *Baritone:* lyric baritone (Figaro), Kavaliersbariton (Marcello), Charakterbariton (Pizarro), Heldenbariton (Orest).
  - *Bass:* Spielbass/buffo (Bartolo), schwerer Buffo (Falstaff, Nicolai), Charakterbass, seriöser Bass (Sarastro).
- A practitioner series based on Kloiber's *Handbuch der Oper* (9th ed.) gives further reference roles, e.g. lyric coloratura: Zerbinetta, Blonde, Norina, Olympia [IPA-Fach]. **Proposal:** use it only to check lists, never as primary evidence.
- **Data models.** Wikidata P412 "voice type" accepts soprano, mezzo-soprano, contralto, countertenor, tenor, baritone, bass, bass-baritone, light tenor and derivatives. It is allowed on operatic characters [WD-P412], and opera characters carry it: Violetta Valéry has lyric soprano and soprano; Alfredo has tenor [WD-violetta][WD-traviata].

### 3.2 Vocal styles

- **Recitative vs aria.** Recitative follows "the inflections and rhythms of speech" over basso continuo and lets the singer speed up and slow down. Arias are metrical, phrase-regular and increasingly virtuosic, written "to impress the audience with the skills of the singer" [UM-4.03]. In 19th-century Italian opera the *scena ed aria* (recitative plus two-part aria, slow cantabile then fast cabaletta) is the standard unit [UM-6.18].
- **Sprechstimme / Sprechgesang.** First used in Humperdinck's *Königskinder* (1897). Associated with the Second Viennese School: Schoenberg (*Gurre-Lieder* Speaker, *Pierrot lunaire* throughout), Berg (*Wozzeck*, *Lulu*) [Lumen-sprech].
- **Narrator / speaker** is a performing force in its own right (e.g. *A Survivor from Warsaw*: orchestra, male chorus, narrator) [UM-7.02].
- **Bel canto, coloratura, castrato roles.** I found no open scholarly definition I could verify (Grove was blocked). **Proposal:** use them as tokens, but each row must cite a source that applies the term to *that work*.

---

## 4. Opera

### 4.1 Subgenres and traditions

- **Origins.** The Florentine Camerata's recitative. Early opera combined recitatives, arias, choruses, dances, interludes and an overture [UM-4.03].
- **Opera seria and opera buffa.** Seria is the "serious style of eighteenth-century opera made famous by Handel", with "mythology or high-born characters". Buffa is the comic style "made famous by Mozart", with middle-class characters, and it grew in the Classical period [UM-5.07][UM-5.02]. Regional comic types include *Singspiel* and *opéra comique* [Lumen-buffa (remixed CC text; used only as a pointer)].
- **Nineteenth century.** Verdi's operas range from myth and history to works in *verismo* ("realism") [UM-6.15]. Verismo depicts "the struggles and drama of common people" in reaction against Romantic grandiosity [Lumen-verismo]. Wagner called his works **music dramas**, *Gesamtkunstwerk*, through-composed with **Leitmotivs** ("musical motives … associated with a specific character, theme, or locale"), and his chromatic harmony influenced the French [UM-6.16][UM-6.18].
- **Catalogue view.** LCGFT folds Opera buffas, Opera serias, Opéras comiques, Singspiels, Operettas, Intermezzos, Burlettas and Comic/Light operas into the single term *Operas* (BT *Dramatic music*), with narrower *Chamber operas*, *One-act operas*, *Radio/Television operas*. *Zarzuelas* (NT *Sainetes*), *Musicals* and *Incidental music* are separate terms under *Dramatic music* [LCGFT]. MusicBrainz has separate work types *Opera*, *Operetta*, *Zarzuela*, *Musical*, *Incidental music*, *Beijing opera* [MB-types].
- **Takeaway.** Libraries stay coarse. Subgenre (seria, buffa, Singspiel, tragédie lyrique, grand opéra, bel canto opera, verismo, music drama, operetta, zarzuela, minimalist opera) is a scholarly style judgment. **Proposal:** keep it as a token in `form` (or `genres`) that needs a source.
- **Grand opéra and tragédie lyrique.** I could not open an authoritative definition. **Proposal:** use the tokens only with a source per row.

### 4.2 Structure: number opera vs through-composed

The textbook defines through-composed as "new music throughout, without repetition of internal sections" [UM-6.18]. It contrasts the recitative/aria/chorus "numbers" of early opera [UM-4.03] with Wagner's through-composed music drama [UM-6.16]. MusicBrainz models an opera as **Number within Act within Opera**, with numbers optional for unnumbered (through-composed) operas [MB-classical-works]. **Proposal:** add `numbers` vs `throughcomposed` as `form` tokens.

### 4.3 Libretto, librettist, language, source, premiere

- MusicBrainz work relationships include librettist, lyricist, translator, part-of and derivative ("based on", "other version", "musical quotation"), and a *premiere* place with date. *La traviata*: librettist Francesco Maria Piave; premiere Teatro La Fenice, 1853-03-06 [MB-traviata].
- Wikidata *La traviata* (Q186162): form of creative work = opera (P7937), genre = tragedy and opera (P136), librettist (P87), **based on** (P144, a literary source), language of work (P407), inception 1852 (P571), date of first performance 1853-03-06 (P1191), location of first performance (P4647), characters (P674, each with voice type) [WD-traviata].
- Wikidata lists composer (P86), librettist (P87), tonality (P826), instrumentation (P870), genre (P136), language (P407), inception (P571), first performance (P1191) and based on (P144) as core properties for compositions [WD-music].

### 4.4 Tracing influence between operas

Heartz's eighteenth-century account is an example of how historians trace an operatic lineage. He follows a stylistic chain from Neapolitan opera seria and Metastasian poetry to Mozart, with French tradition as counterpoint [Heartz]. Computational opera research works on *motifs* inside works. The Wagner *Ring* leitmotif dataset annotates 20 leitmotifs over 16 recordings (about 200 hours, over 50,000 instances), with positions tied to measures of a public-domain piano score [Leitmotif]. Operabase publishes performance statistics by title and composer [Operabase]. That measures how often works are staged, not influence. **Proposal:** use it at most for Fandome's `importance`/`mainstream` reception fields, never as influence evidence.

---

## 5. How influence is established, and how to keep it evidence-based

### 5.1 What musicologists treat as evidence

1. **Person-to-person (personal) influence**: teacher–pupil, documented study, a composer's own statements, letters. Georges & Seckin, describing the Classical Music Navigator: influences were compiled from "more than 20,000 opinions" in biographical and critical sources, with about **five sources corroborating each composer-to-composer link**. Lower standards were accepted for less-studied composers, and the authors weigh errors of commission against errors of omission [Georges2022]. Influence "is not strictly limited to a composition teacher"; teachers are among "the most personal and profound influences" [Georges2022].
2. **Style influences** (e.g. "African music") are kept apart from **personal influences**. Composer **"ecological" features** (period, place, school, instrumentation emphases; 298 categories) are kept apart too. Similarity is computed on the combination [Georges2022]. This matches Fandome's split between `influenced_by` (who) and the descriptive columns (what).
3. **Model works and structural modelling.** Rosen's "Influence: Plagiarism and Inspiration" (*19th-Century Music*, 1980) is the classic statement. I could not open it.
4. **Theories of influence.** Straus (1990) sets out three:
   - *immaturity*: influence fades as a composer matures;
   - *generosity*: composers keep drawing on an evolving tradition;
   - *anxiety*: after Bloom, strong composers "misread" precursors through eight strategies: motivicization, generalization, marginalization, centralization, compression, fragmentation, neutralization, symmetricization [Brown-Straus].

   The Bloomian approach is contested (Taruskin's review; Krims's critique) [Krims]. **Proposal:** these are interpretive frameworks. They do not count as evidence that a link exists.
5. **Borrowing** is a separate field. Burkholder's typology asks:
   - what the source is and how it relates to the new work;
   - which elements are borrowed (melody, harmony, form, texture, colour…);
   - how they are placed and changed (quotation, paraphrase, fragment, allusion);
   - what function and associative meaning they have (homage, critique…) [Burkholder-typology].

   MusicBrainz models this as work-to-work "based on", "other version", "medley" and "musical quotation" relations (e.g. later fantasias "based on" *La traviata*) [MB-traviata].
6. **Reception history.** Bach's and Handel's importance for Haydn and Mozart came "after 1780" [Heartz]. Reception is dated, so it fits Fandome's year logic.

### 5.2 A worked example of evidence tiers (pop ← Bach)

*Fisher v Brooker* [2006] EWHC 3239 (Ch) [FisherBrooker]:
- **Creator testimony, naming works:** the vocal part and descending bass of "A Whiter Shade of Pale" were "inspired by JS Bach's Air on a G String". The organist "found inspiration for the organ solo in … 'Wachet auf, ruft uns die Stimme'" and "adapted it, by small changes in note value and pitch".
- **Expert analysis:** a musicologist identified a further source, "the second movement of Bach's Keyboard Concerto No 5 in F Minor (BWV 1056)" (the judgment misprints "BMV").
- **Fandome mapping:**
  - Air → `influenced_by` (artist's own account, names the work);
  - Wachet auf adaptation → **borrowing/quotation** (`based_on`, not influence, per Fandome's rule);
  - BWV 1056 → `sounds_like`-level (expert analogy), unless the musicians confirm it.

### 5.3 Mapping onto Fandome's columns

| Evidence | Fandome column | Weight in `influence.ts` today |
|---|---|---|
| Composer/artist names the work or composer (interview, letter, programme note, memoir, sworn statement) | `influenced_by`, with `(Work title)` when named | 1 |
| Documented study or copying of a specific score (e.g. a copied manuscript, a documented model) | `influenced_by (Work)` | 1 |
| Teacher–pupil, membership in a circle, documented study with no work named | `artistInfluences.ts` (career-wide) | 0.25 |
| Musicologist or critic hears a resemblance (analysis, review) | `sounds_like` | 0.5 |
| Quotation, paraphrase, arrangement, variations on, parody, sample | **new `based_on`** (not an influence) | 0 (shown, not counted) |
| Later works shaped by it (history books, "most influential" lists) | `legacy` file | separate |

---

## 6. Existing data models and corpora to align with

| Standard | What it offers for works | Key facts |
|---|---|---|
| **MusicBrainz** | Work: canonical title in original language, type, lyrics languages, ISWC, attributes (e.g. **Key = G major** on *Goldberg-Variationen, BWV 988*), relationships (composer, librettist, part-of, based on, musical quotation, premiere) | [MB-work][MB-goldberg][MB-traviata]; work types [MB-types]; classical guide: works entered "as printed in the score"; opera = Number/Act/Opera; ballet scenes are works [MB-classical-works] |
| **Wikidata** | composer P86, librettist P87, lyricist P676, tonality P826, instrumentation P870, genre P136, form of creative work P7937, language P407, inception P571, first performance P1191, place P4647, based on P144, catalog code P528 + catalog P972 (e.g. "K. 550", Köchel), voice type P412 on characters | [WD-music][WD-P7937][WD-P528][WD-P412][WD-traviata] |
| **IMSLP** | Tags "work type ; instrumentation ; language" with a controlled list of plural work types derived from the Music Library Association's *Types of Compositions*; work page fields: Opus/Catalogue No., Key, Movements, Year of composition, First publication, Genre categories, Piece Style, Instrumentation. Site content CC BY-SA 4.0 (page footer) | [IMSLP-tagging][IMSLP-goldberg] |
| **RISM** | Over 1.5 million records of manuscripts, printed music, theory writings and libretti, with locations | [RISM] |
| **LCMPT** | Medium-of-performance thesaurus (about 800 initial terms in 2014), three hierarchies (ensemble, performer, visuals), Sachs–Hornbostel based; counts per medium in MARC 382 | [LCMPT-intro][LCMPT] |
| **LCGFT** | Genre/form terms for art music (about 570 music terms approved 2015); excludes period, creator nationality and medium | [LCGFT-intro][LCGFT] |
| **DOREMUS** | FRBRoo/CIDOC-CRM extension with key, genre, tempo, medium of performance; 17 SKOS vocabularies in 7 categories (keys, derivation types, modes, thematic catalogues, functions, genres, MoP), CC BY 4.0; aligned BnF, Radio France and Philharmonie de Paris data | [DOREMUS] |
| **MIR** | Cross-Era (2,000 tracks, 4 eras + transitional, chroma and chord features, global keys) [CrossEra]; style evolution [Weiss2019]; key-transition novelty [GonzalezPlotkin]; composer classification [Kim2020]; Wagner leitmotifs [Leitmotif]; composer maps from influence data, explicitly as an alternative to "recommendation algorithms" [Georges2022] | — |
| **Opera databases** | Operabase performance statistics by title and composer | [Operabase] (table content did not render for me) |

**Proposal: identifiers.** Store a MusicBrainz work MBID and/or Wikidata QID per work row (optional). This makes later enrichment of key, catalogue number, librettist and premiere mechanical and checkable.

---

## 7. Pop-to-classical bridges: how they are documented

- **Steve Reich → Brian Eno.** Eno says *It's Gonna Rain* "opened a door for me" and describes the listener completing the piece (2025 interview) [Nonesuch-Eno]. That is first-hand, so `influenced_by: Steve Reich (It's Gonna Rain)` on Eno's ambient albums, with the source.
- **Terry Riley → The Who.** "Baba O'Riley" took its title from Meher Baba and Terry Riley, who did "a lot of repeating figure music and tape loops, something Pete was experimenting with at the same time" (Mix, 2021, quoting Kehew) [Mix-Baba]. A title homage plus a documented shared technique counts as influence. The specific Riley work (*A Rainbow in Curved Air*) needs Townshend's own words; the Uncut article that may have them was blocked.
- **Bach → Procol Harum.** See §5.2: creator testimony names *Air* and *Wachet auf*; a musicologist names BWV 1056 [FisherBrooker].
- **Messiaen and Penderecki → Jonny Greenwood (Radiohead).** He "latched on to" Messiaen after hearing *Turangalîla* at 15 or 16, praises the ondes Martenot, and heard Penderecki at music college (2007) [Nonesuch-Greenwood]. This supports career-level `artistInfluences` for Greenwood, plus `instruments: ondesmartenot` on the albums where it is credited. The work-level link to *Turangalîla* is first-hand.
- **Progressive rock.** Macan's *Rocking the Classics* (OUP) is a musicologist's book-length study of English progressive rock and its classical/rock fusion; it is the next source to read for prog ← classical links [Macan] (seen only as a catalogue listing).
- **Pattern.** The strongest bridges are musicians naming a work. Critics' "Bach-like" or "Wagnerian" remarks are analogies (`sounds_like`). Samples and quotations belong in `based_on`.

---

## Proposal for Fandome

### A. The 27 existing columns applied to works

| Column | For works | Change |
|---|---|---|
| album_id, artist (composer), title, year, type=`work` | as now; year = completion (or first performance/publication when that is what sources date) | Add a rule for revised works: year of the version described; mention others in notes |
| genres | keep `classical`/`opera` plus **style/movement tokens** (baroque, impressionism, serialism, minimalism, spectralism…) | See B.1 (or move style tokens to `period`) |
| energy | applies, judged from score and standard performance practice | **New anchors:** 0 Satie *Gymnopédies*; 1 Pärt *Spiegel im Spiegel*; 3 a Mozart symphony; 5 Stravinsky *Rite of Spring* (Danse sacrale) |
| electronic | 0 for acoustic works | **Anchors:** 0 any acoustic score; 2 work with an electronic instrument (ondes Martenot); 3 live instruments + tape (Reich *Different Trains*); 5 tape only (Stockhausen *Studie II*) |
| mood | applies | Anchors from works: 1 Barber *Adagio*; 5 Rossini overture (judgment; tie to sources) |
| theatrical | applies strongly | **Anchors:** 0 solo keyboard; 2 Lied; 3 concert oratorio; 5 staged grand opera/music drama (Verdi *Aida*, Wagner *Ring*) |
| experimental | **listener-facing, absolute** (not "for its time") | **Anchors:** 0 common-practice tonal; 2 Debussy; 3 Stravinsky *Rite*; 4 Schoenberg twelve-tone; 5 Cage *4′33″*, Stockhausen tape. Innovation in its own time belongs to `legacy` and the trace, not here |
| polish | **does not apply** (a recording property) | Leave empty |
| tempo | applies (overall/typical, from markings) | Note: multi-movement works = weighted overall; leave empty if it varies too much |
| groove | **redefine for works: pulse/dance character** | 0 unmeasured/free (chant, Feldman); 3 dance-derived movements (suite, waltz, ballet); 5 relentless steady pulse (Reich, Glass, Ravel *Boléro*). This is where minimalism meets electronic dance music |
| voice | keep tokens (`operatic`, `choral`, `spoken`, `instrumental`) | Detail goes to the new `voices` |
| instruments | applies (scoring from the score) | **Add tokens:** `marimba, vibraphone, lute, theorbo, violadagamba, fortepiano, continuo, cornett, sackbut, cymbals, contrabassoon, bassethorn, electronics, tape` (LCMPT terms where possible) |
| production | for works = **techniques written into the work** | **Add tokens:** `sprechstimme, coloratura, melisma, extendedtechniques, preparedpiano` (already an instrument), `tapeloops` (exists), `phasing` (exists), `liveelectronics`, `aleatory`, `graphicnotation`, `microtonality`; never performance or recording facts |
| lyrics | applies to texted works | Map: sacred texts → `spiritual`; narrative opera → `storytelling` |
| language | text language (ISO, `la` for Latin) | Weight stays near zero |
| scene | **national school / circle** (Neapolitan school, Mannheim school, The Five, Second Viennese School, Les Six, Darmstadt, New York minimalism) | Free text as now |
| producers | **does not apply** | Leave empty (premiere conductors are not producers) |
| sounds_like / influenced_by | apply; names = composers or artists, `(Work)` in brackets | Evidence rules in §5.3 |
| landmark, confidence, status, notes | apply | `landmark` from sources naming principal works |

### B. New fields and controlled vocabularies

#### B.1 Similarity fields (lists, main first, `|`-separated)

1. **`period`**: style period / movement / technique-aesthetic.
   - *Seed:* `medieval, arsnova, renaissance, baroque, earlybaroque, latebaroque, galant, classicalera, romantic, earlyromantic, lateromantic, nationalism, verismo, impressionism, expressionism, atonal, secondvienneseschool, neoclassicism, serialism, twelvetone, totalserialism, musiqueconcrete, elektronischemusik, aleatory, minimalism, postminimalism, spectralism, newcomplexity, holyminimalism, polystylism, neoromanticism, postmodern` (from §1; LCGFT technique terms where they exist [LCGFT]).
   - **Name clashes:** use `classicalera`, never `classical`, which is the umbrella genre. Use `neoclassicism` (Stravinsky) apart from the existing `neoclassical` token (new-age/piano "neo-classical").
   - **Weight:** like genres (heaviest), with a family tree (`latebaroque → baroque → classical`; `twelvetone → serialism → modernclassical`).
   - **Simplest implementation:** keep these tokens in `genres` (the engine and `genreFamilies.ts` already handle weighted, ordered tokens with parents) and add only the parents.
2. **`form`**: genre/form and subgenre.
   - *Seed* (MusicBrainz types + LCGFT + IMSLP) [MB-types][LCGFT][IMSLP-tagging]: `symphony, concerto, concertogrosso, sonata, triosonata, stringquartet, pianotrio, suite, partita, fugue, canon, variations, prelude, toccata, etude, nocturne, overture, symphonicpoem, programsymphony, ballet, incidentalmusic, mass, requiem, passion, oratorio, cantata, motet, madrigal, anthem, artsong, songcycle, opera, chamberopera, operetta, zarzuela, singspiel, operaseria, operabuffa, operacomique, tragedielyrique, grandopera, belcantoopera, musicdrama, numbers, throughcomposed, chamber`.
   - **Weight:** high (about as high as instruments). Two string quartets are closer than a quartet and an opera from the same year.
3. **`forces`**: ensemble type, from LCMPT [LCMPT].
   - *Seed:* `fullorchestra, chamberorchestra, stringorchestra, windensemble, brassensemble, percussionensemble, instrumentalensemble, stringquartet, pianotrio, solokeyboard, soloinstrument, voiceandpiano, solovoices, solovocalensemble, mixedchorus, treblechorus, boychorus, malechorus, narrator, continuo, electronics, tape`.
   - Optional count, e.g. `fullorchestra|mixedchorus|solovoices[4]`.
   - **Weight:** medium-high; it captures scale (chamber vs orchestral).
4. **`harmony`**: harmonic language.
   - *Seed:* `modal, tonal, chromatic, extendedtonality, wholetone, pentatonic, polytonal, atonal, twelvetone, serial, microtonal, spectral, drone, staticconsonance`.
   - **Weight:** medium (MIR shows tonal features separate eras [Weiss2019][CrossEra]).
   - Optional second field `texture`: `monophonic, homophonic, polyphonic, imitative` [UM-1.08], low weight.
5. **`voices`**: roles' voice types/Fach, main role first.
   - *Seed* (LCMPT ranges + wissen.de Fach + Wikidata P412) [LCMPT][wissen-Fach][WD-P412]: `soprano, coloraturasoprano, lyricsoprano, spintosoprano, dramaticsoprano, soubrette, mezzosoprano, contralto, countertenor, boysoprano, tenor, tenorbuffo, lyrictenor, heldentenor, charactertenor, baritone, lyricbaritone, heldenbariton, bassbaritone, bass, bassobuffo, seriousbass, narrator`.
   - **Weight:** medium, only when both sides are sung.

#### B.2 Metadata fields (shown, filterable, never in similarity)

- `catalogue`: e.g. `BWV 988`, `K. 550`, `Op. 67` (Wikidata P528 + catalog P972) [WD-P528].
- `key`: e.g. `G major`, as a MusicBrainz attribute / Wikidata P826; empty for atonal works [MB-goldberg][WD-music].
- `text_by`: librettist or poet (P87/P676) [WD-music][MB-traviata].
- `based_on`: literary or musical source, plus borrowings (P144; MusicBrainz "based on"/"musical quotation"). Musical sources use the `Artist (Work)` syntax so the page can link them [WD-traviata][MB-traviata].
- `premiere`: `1853-03-06 Venice, La Fenice` (P1191/P4647) [WD-traviata].
- Optional: `mbid`/`qid`, `duration` (minutes), `sacred` (`sacred|liturgical|secular`, from LCGFT) [LCGFT], `programme` (`absolute|programme`, from LCGFT) [LCGFT].

#### B.3 Weights in `extrasSimilarity` for work↔work pairs

**Proposal:** starting values to calibrate against `docs/similarity-judgments.csv` and `recQuality.test.ts`, following the owner's rule (general rules, no special cases).

| Field | Weight |
|---|---|
| instruments | 0.16 |
| forces | 0.14 |
| form | 0.16 |
| harmony | 0.12 |
| voices | 0.08 |
| lyrics (themes) | 0.08 |
| production (techniques) | 0.06 |
| era | 0.10 |
| scene (school) | 0.06 |
| texture | 0.03 |
| language | 0.01 |

- Era for works should use a **wider window**, e.g. `1 - |Δy|/80` instead of `/30`, because style generations in art music are longer (period boundaries roughly 70 years apart [Weiss2019]).
- Album↔work pairs keep the current formula, since the new fields are empty on albums. The genre gate already blocks false matches.

### C. Influence links with composition years

1. **Direction.** Links always go later → earlier by `year`. For works, that is the **completion** year (or the year of the version described). Use first performance only when sources date the work that way. The strict `<` in `influence.ts` already blocks same-year links.
2. **Work ← work.** `influenced_by: Claude Debussy (Pelléas et Mélisande)` only with a documented first-hand or study source. Teacher–pupil without a named work goes to `artistInfluences.ts` (0.25). Musicologists' analogies go to `sounds_like` (0.5).
3. **Album ← work.** Pop rows name `Composer (Work)` when the musician names the work (Eno ← *It's Gonna Rain*). When only the composer is named, `targets()` today picks the three earlier works most similar to the album. A pop album and a Bach fugue score near zero, and the fallback `before.slice(-1)` then picks the composer's **latest** work, which is arbitrary. **Fix (general rule):** when likeness is ~0 for all candidates, rank by career weight (`importance`/`landmark`). Apply it to every artist, not only composers.
4. **Work ← album** never happens (time order).
5. **Borrowing** (`based_on`: quotations, paraphrases, variations on, arrangements, samples) is shown as "Based on" and does **not** feed PageRank, consistent with "covers, samples, quotations … are never influences".
6. **Legacy trace (`legacy.ts`).** The 6-year look-back and 12-year spread windows, and `percentile` (±5 years) in `influence.ts`, are calibrated for pop release cycles.
   - **Proposal:** for `type=work`, scale windows to generations (e.g. 25 years before, 50 after; percentile ±25 years).
   - Or show "too few works described" until the field reaches `MIN_FIELD`; the Wilson interval already shrinks claims with few items.
   - The legacy *score* from sources (0–5) works unchanged. Sources: music histories, Grove, "most influential works" lists.
7. **Reception file for works.**
   - `importance`: the work's place in the composer's output.
   - `acclaim`: critical standing.
   - `mainstream`: 0 avant-garde … 3 repertory classic … 4–5 light/occasional music. Performance counts (Operabase) are context only, as with sales for pop.

### D. ChatGPT-ready rules for works and operas

- One row per **work** as written, not per recording. `type=work`. Year = completion (state if first performance/publication is used). For revised works, describe one version and name it in notes.
- `artist` = composer. Never put performers, conductors or labels in any column. Leave `producers` and `polish` empty.
- **genres/period:** umbrella `classical` (or `opera` for staged sung drama), then the style tokens a source applies to *this work* (e.g. `latebaroque`, `impressionism`, `twelvetone`, `minimalism`). Use `classicalera`, never `classical`, for Haydn/Mozart-era style. A work on a boundary may carry two styles. Never infer style from the composer's dates alone.
- **form:** the work type first (from the score's title or the standard reference), then subtype (`opera|operabuffa|numbers`).
- **forces:** the ensemble as scored (LCMPT terms); **instruments:** main instruments in order of prominence, from the score.
- **voices:** each main role's voice type/Fach as given in the score or a role reference (e.g. Violetta = `lyricsoprano`). Choral forces in `forces`.
- **harmony:** the harmonic language a source states (tonal, modal, chromatic, atonal, twelvetone, serial, microtonal, spectral). Add `key` only for tonal works with a stated key.
- **Scales** use the work anchors: energy, mood, tempo from markings and standard performance practice; theatrical high only for staged or dramatic works; electronic 0 unless electronics are scored; `experimental` = how unusual it sounds to a listener today; groove = steady pulse / dance character.
- **production** = techniques written into the work (sprechstimme, coloratura, aleatory, tape loops, phasing, prepared piano), never recording facts.
- **lyrics/language:** text themes and text language (`la` for Latin, `de`, `it`, `fr`, `ru`…); `text_by` = librettist/poet; `based_on` = literary source and any musical borrowing.
- **scene** = school or circle (Neapolitan school, Second Viennese School, The Five, Les Six, Darmstadt, New York minimalism).
- **influenced_by** only with the composer's own words, letters, documented study or copying of a named score, or a statement by someone speaking for them. Teacher–pupil without a named work is not a work-level influence. Name the work in brackets when known. A musicologist's or critic's comparison goes in `sounds_like`. Quotations, variations on, arrangements and parodies go in `based_on`, never in `influenced_by`.
- **Sources:** prefer Grove/Oxford, peer-reviewed musicology, critical editions and prefaces, composers' letters, publisher work pages, MusicBrainz/Wikidata/IMSLP for factual metadata (key, catalogue, premiere, librettist, scoring). Never Wikipedia, except to find the original source. Leave a cell empty when no source supports it, and lower `confidence`.

---

## What I could not open (and what that means)

- **Grove Music Online / Oxford Reference / Britannica:** HTTP 403. Definitions of bel canto, grand opéra, tragédie lyrique and the Grove "Periodization", "Borrowing" (Burkholder) and "Influence" articles were not verified. Tokens for them are proposed, but each row needs its own source.
- **Paywalled or blocked articles:**
  - Rosen, "Influence: Plagiarism and Inspiration" (*19th-Century Music*, 1980);
  - Korsyn (1991) and Straus's book (known only via reviews [Brown-Straus][Krims]);
  - Burkholder (1994, *Notes*) (typology via a course page [Burkholder-typology]);
  - Mueller, "Javanese Influence on Debussy's *Fantaisie* and Beyond" (*19th-Century Music*, 1986; 503);
  - College Music Symposium articles on style periods (Godt 1984) and "Claude Debussy's Gamelan" (403);
  - the *19th-Century Music* "First Viennese Modernism" article (403).
- **Library and data services:**
  - id.loc.gov (403): LCMPT/LCGFT were read from the official LoC PDFs instead;
  - MLA *Best Practices for Using LCGFT for Music* PDF (connection reset);
  - Classical Music Navigator site (503): described via Georges & Seckin [Georges2022];
  - Open Music Theory (403);
  - NEA and BYU opera glossaries (certificate error / 403);
  - Uncut article on Townshend and Riley (403);
  - Operabase statistics table did not render.
- **Seen only in search snippets, so not cited as evidence:** Park et al., "Topology and evolution of the network of western classical music composers" (*EPJ Data Science*, 2015).
- **Wikidata:** the API rate-limited me (HTTP 429). Entity data was read via `Special:EntityData` JSON instead.

---

## Sources (all opened unless noted above)

- [Heartz] Daniel Heartz, "Approaching a History of 18th-Century Music", *Current Musicology* (Columbia). https://journals.library.columbia.edu/index.php/currentmusicology/article/download/3800/1598/6521
- [Weiss2019] C. Weiß, M. Mauch, S. Dixon, M. Müller, "Investigating Style Evolution of Western Classical Music: A Computational Approach", *Musicae Scientiae* 23(4): 486–507, 2019 (accepted manuscript). https://webspace.eecs.qmul.ac.uk/s.e.dixon/pub/2018/2017_WeissMDM_StyleClustering_MS.pdf
- [CrossEra] AudioLabs Erlangen, Cross-Era Dataset. https://www.audiolabs-erlangen.de/resources/MIR/cross-era/
- [GonzalezPlotkin] A. González-Espinoza, J. B. Plotkin, "Quantifying the evolution of harmony and novelty in western classical music", arXiv:2308.03224 (2023). https://arxiv.org/abs/2308.03224
- [Kim2020] S. Kim et al., "Deep Composer Classification Using Symbolic Representation", arXiv:2010.00823 (ISMIR 2020 LBD). https://arxiv.org/abs/2010.00823
- [Leitmotif] M. Krause, M. Müller, C. Weiß, "Towards Leitmotif Activity Detection in Opera Recordings", TISMIR 4(1), 2021, dataset page. https://www.audiolabs-erlangen.de/resources/MIR/2021-TISMIR-TowardsLeitmotifDetection
- [Georges2022] P. Georges, A. Seckin, "Music information visualization and classical composers discovery…", *Scientometrics* 127: 2277–2311 (2022). https://link.springer.com/content/pdf/10.1007/s11192-022-04331-8.pdf
- [Brown-Straus] Matthew Brown, review of J. N. Straus, *Remaking the Past* (Harvard UP, 1990), *Integral* 5 (1991). https://theory.esm.rochester.edu/integral/wp-content/uploads/2019/06/INTEGRAL_5_brown.pdf
- [Krims] Adam P. Krims, "Bloom, Post-Structuralism(s), and Music Theory", *Music Theory Online* 0.11 (1994). https://mtosmt.org/classic/mto.94.0.11/mto.94.0.11.krims.html
- [Burkholder-typology] "Typology of Musical Borrowing" (after J. P. Burkholder, "The Uses of Existing Music: Musical Borrowing as a Field", 1994), *Reinventions* course page. https://www.paulj.myzen.co.uk/blog/teaching/reinventions/?p=2505
- [FisherBrooker] *Fisher v Brooker & Ors* [2006] EWHC 3239 (Ch), BAILII. https://www.bailii.org/ew/cases/EWHC/Ch/2006/3239.html
- [Festeu] Adriana Festeu, "Voice classification: terminology and practicality", *Bulletin of the Transilvania University of Braşov*, Series VIII, 11(60) no. 2, 2018. https://webbut.unitbv.ro/index.php/Series_VIII/article/download/2658/2093/4978
- [wissen-Fach] wissen.de (Konradin Mediengruppe), "Stimmfächer". https://www.wissen.de/lexikon/stimmfaecher
- [IPA-Fach] IPA Source, "The Fach System: The Soprano Voice, part one" (based on Kloiber, *Handbuch der Oper*, 9th ed.). https://www.ipasource.com/the-fach-system-the-soprano-voice-part-one/
- [LCMPT-intro] Library of Congress, *Introduction to LC Medium of Performance Thesaurus for Music* (2026 ed.). https://www.loc.gov/aba/publications/FreeLCMPT/LCMPT-intro.pdf
- [LCMPT] Library of Congress, *Medium of Performance Thesaurus for Music* (PDF). https://www.loc.gov/aba/publications/FreeLCMPT/MEDIUM.pdf
- [LCGFT-intro] Library of Congress, *Introduction to LC Genre/Form Terms*. https://www.loc.gov/aba/publications/FreeLCGFT/2022-LCGFT-intro.pdf
- [LCGFT] Library of Congress, *Genre/Form Terms* (PDF). https://www.loc.gov/aba/publications/FreeLCGFT/GENRE-FORM.pdf
- [MB-work] MusicBrainz, "Work". https://musicbrainz.org/doc/Work
- [MB-classical-works] MusicBrainz Classical Style Guide, "Works". https://musicbrainz.org/doc/Style/Classical/Works
- [MB-types] Django MusicBrainz Connector docs, "work type" (table mirroring MusicBrainz work types). https://django-musicbrainz-connector.readthedocs.io/en/latest/work_type.html
- [MB-goldberg] MusicBrainz API, *Goldberg-Variationen, BWV 988* (Key attribute). https://musicbrainz.org/ws/2/work/1d51e560-2a59-4e97-8943-13052b6adc03?inc=work-rels+artist-rels&fmt=json
- [MB-traviata] MusicBrainz API, *La traviata* (relationships). https://musicbrainz.org/ws/2/work/24df0a9b-7977-4ff6-a4dc-7ad71db6972c?inc=artist-rels+work-rels+url-rels+place-rels&fmt=json
- [WD-music] Wikidata: WikiProject Music. https://www.wikidata.org/wiki/Wikidata:WikiProject_Music
- [WD-P412] Wikidata, Property P412 (voice type). https://www.wikidata.org/wiki/Property:P412
- [WD-P528] Wikidata, Property P528 (catalog code). https://www.wikidata.org/wiki/Property:P528
- [WD-P7937] Wikidata, Property P7937 (form of creative work). https://www.wikidata.org/wiki/Property:P7937
- [WD-traviata] Wikidata, Q186162 *La traviata* (entity JSON). https://www.wikidata.org/wiki/Special:EntityData/Q186162.json
- [WD-violetta] Wikidata, Q50391147 Violetta Valéry (voice types Q1401208 lyric soprano, Q30903 soprano); Q50391176 Alfredo Germont (tenor). https://www.wikidata.org/wiki/Special:EntityData/Q50391147.json
- [IMSLP-tagging] IMSLP, "IMSLP:Tagging". https://imslp.org/wiki/IMSLP:Tagging
- [IMSLP-goldberg] IMSLP, *Goldberg-Variationen, BWV 988* work page. https://imslp.org/wiki/Goldberg-Variationen,_BWV_988_(Bach,_Johann_Sebastian)
- [IMSLP-romantic] IMSLP, "Category:Romantic style" (also Medieval_style, Baroque_style, Early_20th_century_style, Modern_style). https://imslp.org/wiki/Category:Romantic_style
- [RISM] RISM, home page. https://rism.info/
- [DOREMUS] M. Achichi, P. Lisena, K. Todorov, R. Troncy, J. Delahousse, "DOREMUS: A Graph of Linked Musical Works", ISWC 2018 (HAL). https://hal.archives-ouvertes.fr/hal-01894663/document
- [UM-*] N. A. Clark, T. Heflin, J. Kluball, E. Kramer, *Understanding Music: Past and Present* (University of North Georgia Press, CC BY-SA), LibreTexts edition. Base URL: https://human.libretexts.org/Bookshelves/Music/Music_Appreciation/Understanding_Music_-_Past_and_Present_(Clark_et_al.)
  - [UM-toc] book index (above).
  - [UM-1.02] /01%3A_Music_Fundamentals/1.02%3A_Performing_Forces_for_Music
  - [UM-1.06] /01%3A_Music_Fundamentals/1.06%3A_Harmony
  - [UM-1.08] /01%3A_Music_Fundamentals/1.08%3A_Texture
  - [UM-4.02] /04%3A_Music_of_the_Baroque_Period/4.02%3A_Music_in_the_Baroque_Period
  - [UM-4.03] /04%3A_Music_of_the_Baroque_Period/4.03%3A_Birth_of_Opera
  - [UM-5.02] /05%3A_Music_of_the_Classical_Period/5.02%3A_Music_in_the_Classical_period
  - [UM-5.07] /05%3A_Music_of_the_Classical_Period/5.07%3A_Glossary
  - [UM-6.02] /06%3A_Nineteenth-Century_Music_and_Romanticism/6.02%3A_Music_in_the_Nineteenth_Century
  - [UM-6.10] /06%3A_Nineteenth-Century_Music_and_Romanticism/6.10%3A_Music_of_Nationalism
  - [UM-6.15] /06%3A_Nineteenth-Century_Music_and_Romanticism/6.15%3A_Music_of_Guiseppe_Verdi
  - [UM-6.16] /06%3A_Nineteenth-Century_Music_and_Romanticism/6.16%3A_Music_of_Richard_Wagner
  - [UM-6.18] /06%3A_Nineteenth-Century_Music_and_Romanticism/6.18%3A_Glossary
  - [UM-7.01] /07%3A_The_Twentieth_Century_and_Beyond/7.01%3A_Introduction_and_Historical_Context-_1900_to_today
  - [UM-7.02] /07%3A_The_Twentieth_Century_and_Beyond/7.02%3A_Expressionism_and_Serialism
  - [UM-7.05] /07%3A_The_Twentieth_Century_and_Beyond/7.05%3A_Minimalism
  - [UM-7.07] /07%3A_The_Twentieth_Century_and_Beyond/7.07%3A_The_Late_Twentieth_Century
- [Lumen-sprech] Lumen Learning, *Music 101*, "Sprechstimme" (open course; remixed CC content). https://courses.lumenlearning.com/suny-musicapp-medieval-modern/chapter/sprechstimme/
- [Lumen-verismo] Lumen Learning, *Music 101*, "Verismo". https://courses.lumenlearning.com/suny-musicapp-medieval-modern/chapter/verismo/
- [Lumen-buffa] Lumen Learning, *Music 101*, "Opera Buffa" (body text is remixed encyclopedia text; used only as a pointer). https://courses.lumenlearning.com/suny-musicapp-medieval-modern/chapter/opera-buffa/
- [Operabase] Operabase, statistics. https://www.operabase.com/statistics/en
- [Nonesuch-Eno] Nonesuch Journal, "Watch: Brian Eno Talks Steve Reich with the New York Times' Ezra Klein" (5 Oct 2025). https://www.nonesuch.com/journal/watch-brian-eno-steve-reich-new-york-times-ezra-klein-2025-10-05
- [Nonesuch-Greenwood] Nonesuch Journal, exclusive interview with Jonny Greenwood (6 Dec 2007). https://nonesuch.com/journal/nonesuch-journal-exclusive-interview-jonny-greenwood
- [Mix-Baba] Matt Hurwitz, "Classic Tracks: The Who's 'Baba O'Riley'", *Mix* (21 Jul 2021). https://www.mixonline.com/recording/classic-tracks/the-whos-baba-oriley-classic-tracks
- [Macan] E. Macan, *Rocking the Classics: English Progressive Rock and the Counterculture* (Oxford UP), publisher page (seen in search results only, not opened). https://academic.oup.com/book/9223
