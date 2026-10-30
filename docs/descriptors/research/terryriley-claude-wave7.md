# Claude research notes (Oct 2026, wave 7: works)

# Wave 7 final: 39 works (Bach, Gershwin, Debussy, Ravel, Satie, Stravinsky, Stockhausen, Cage, Riley, Reich, Glass)

Merged from drafts A–D (their per-cell evidence stays in `wave7/{A,B,C,D}/notes.md`, all sourced links kept) and
revised to the works schema (docs/research/classical-research.md §A, §B, §D; src/data/workFields.ts; guide
"Works" and "Borrowings"). Wikipedia never cited. Validated with `w7tools/validate.py` (python3 -I, csv): 27 columns,
11 in works.csv, tokens read from scenes.ts / instruments.ts / production.ts / workFields.ts, notes ≤15 words.

## What changed from the drafts (rows.csv)

- **genres:** `classical` umbrella first, then the style token a source applies to the work. Form-like genre
  proposals dropped (now in works.csv `form`): `concerto`, `keyboardmusic`, `oratorio`, `tonepoem`,
  `symphonicpoem`, `symphony`, `ballet`. `indeterminacy` → `aleatory` (research name, LCGFT "Aleatory music").
  Reich `tapemusic` → `electroacoustic`. Suite bergamasque `romantic` → `lateromantic` (Interlude: "a late
  Romantic menuet"). Existing sourced tokens kept (baroque, sacredmusic, chambermusic, minimalism, avantgarde,
  experimental, musiqueconcrete, ambient, jazz, blues...). `latebaroque` NOT used: no opened source says "late
  Baroque" for these works (NBS, IMSLP say "Baroque"); add it only if the owner accepts it by date.
- **experimental** re-anchored (listener today): all Bach 2→0 (common-practice tonal); Gershwin 2→1; Faune,
  Préludes 3→2; Boléro 3→1; Gymnopédies 2→1, Gnossiennes 3→2, Vexations 5→4, Parade 4→3, Musique
  d'ameublement 4→2; Firebird 2→1, Petrushka 3→2, Rite 4→3 (anchor); Cage Sonatas 4→3; In C, Rainbow 4→3;
  It's Gonna Rain, Come Out 5→4; Music for 18 3→2; Twelve Parts 4→3; Einstein 5→4. Innovation in its own
  time stays in landmark/legacy.
- **electronic** (0 acoustic / 2 electronic instrument / 3 live + tape / 5 tape only): Kontakte (Nr. 12½,
  piano + percussion + tape) 4→3; Hymnen (tape) 4→5; It's Gonna Rain, Come Out 4→5; Stimmung 1→0
  (amplification only); Twelve Parts, Einstein 3→2 (electric organs/synths).
- **groove** (pulse/dance character): Boléro 3→5, In C 2→5, Drumming 2→5, Music for 18 2→5, Twelve Parts
  1→5, Einstein 1→4, Rainbow 2→4, Rite 2→4; dance-derived 3: Brandenburgs, Cello Suites, Rhapsody, An
  American in Paris, Daphnis, Parade, Firebird, Petrushka; small +1 elsewhere (WTC, Goldberg, St Matthew,
  Suite bergamasque, La mer, Pavane, Gymnopédies, Musique d'ameublement, Cage Sonatas, Reich tape pieces 0/1→2,
  Koyaanisqatsi 0→3).
- **theatrical** (0 solo keyboard … 3 concert oratorio … 5 staged opera): WTC, Goldberg, Cello Suites,
  Suite bergamasque, Gnossiennes 1→0; St Matthew 5→4; Brandenburgs 3→2; Rhapsody, American in Paris, La mer
  4→3; Préludes 2→1; Daphnis 5→4; Boléro 4→3; Firebird, Petrushka 5→4 (ballet, not opera); Koyaanisqatsi 4→3.
- **production:** Reich `phaseshifting` → existing `phasing` (as asked; the phaser-effect meaning is close
  enough and a new token isn't justified); `phasing` added to Drumming (Boosey: "refinement of the phasing
  process"). `aleatory` added to In C (players choose repeats), Imaginary Landscape No. 4 and 4′33″.
- **scene:** school/circle, period words removed (they're in genres): Bach "Baroque, …" → "Köthen court…",
  "Leipzig…"; Debussy and Ravel's Pavane "French Impressionism, Paris" → "French school, Paris"; Rite
  "…; musical modernism" and Stravinsky "(Russian)" dropped → "Ballets Russes, Paris"; Porgy → "Broadway
  (Theatre Guild, Alvin Theatre)". The rest unchanged.
- **voice:** Koyaanisqatsi reordered `instrumental|choral` (instrumental is the main voice).
- **polish, producers:** empty everywhere (checked).
- **Review decisions:** "Antonio Vivaldi" removed from the Brandenburgs' influenced_by (CMS wording is a
  scholar's). Tribute titles don't count: the In C and Rainbow legacy evidence no longer rests on Baba O'Riley's
  title (In C stays 5 on NPR 2009 "influenced… The Who and Soft Machine" + The World; Rainbow stays 4 on
  NewMusicBox "quoted Riley's arpeggiated keyboard style"). No other tribute-title link was in the drafts.
  Debussy's gamelan: no link anywhere (also not for Cage's Sonatas or Reich's Music for 18).
- Kept as drafted, sourced: Cage Sonatas influenced_by Gita Sarabhai (Cage's own words); Music for 18
  influenced_by Pérotin (Reich's own structural model); Twelve Parts influenced_by Ravi Shankar | Alla Rakha
  (Glass's own account via Rockwell); sounds_like: Wagner (Faune, La mer [1/3]), Stravinsky [1/3] (Daphnis),
  Prokofiev (Le pas d'acier) (Boléro), Rimsky-Korsakov | Glinka | Debussy (Firebird), Varèse [1/4] (Hymnen).

## works.csv: how values were set

- Catalogue/key/premiere/text_by from IMSLP work pages, MusicBrainz, Wikidata, IRCAM (resources.ircam.fr),
  Boosey & Hawkes, philipglass.com, ZHdK, New World Records, programme notes; each row's `sources` lists them.
- `key` only for single-key tonal works with a stated key: Goldberg G major, Pavane G major, Boléro C major.
  Sets in many keys (WTC, Cello Suites, Brandenburgs, Suite bergamasque, Gymnopédies, Préludes) left empty.
- `text_by` for ballets = scenario author as Wikidata's librettist (P87) gives it, marked "(scenario)".
  For Reich's tape pieces = the recorded speaker, marked.
- Harmony/texture: from the source wording quoted in `sources` (chromatic, pentatonic, whole-tone, Greek
  modes, "Petrushka chord" → polytonal, serialised → serial, harmonics/one chord → drone|staticconsonance|spectral,
  blues → bluesharmony, fugues/canons → polyphonic|imitative, phasing canon → imitative).

## New work tokens (proposals for workFields.ts)

- form `characterpiece` (single short instrumental piece: Pavane, Vexations). Form left EMPTY there rather than
  forcing a wrong token.
- form `conceptualpiece` or similar for 4′33″ (no form fits; left empty). Imaginary Landscape No. 4 and
  Musique d'ameublement: form empty (no fitting token; furniture music could be `incidentalmusic` if the
  owner accepts it, sources didn't support it).
- form for A Rainbow in Curved Air: empty (studio improvisation; propose `improvisation`).
- forces `radios` not needed: Imaginary Landscape No. 4 uses `electronics` (IRCAM: real-time electronic set-up,
  12 radios).
- Stimmung form `chamber` used as closest (vocal sextet); a `vocalensemble` form would be more exact.

## New tokens for the existing lists (genres / instruments / production)

- genres: `impressionism`, `lateromantic`, `modernism`, `serialism`, `electroacoustic`, `aleatory`, `ragtime`
  (Parade, 1 number of 8: placed last). Dropped vs drafts: `concerto`, `keyboardmusic`, `oratorio`, `tonepoem`,
  `symphonicpoem`, `symphony`, `ballet`, `romantic`, `indeterminacy`, `tapemusic`.
- instruments: `violadagamba`, `violone`, `taxihorns`, `crotales`, `windmachine`, `siren`, `pistol`, `tape`,
  `sinewavegenerator`, `radio`.
- production: `spatialization` (multichannel loudspeaker projection: Gesang, Kontakte, Hymnen), `aleatory`
  (research list), `emssynthi100` (WDR Synthi 100 in Hymnen; same pattern as `emssynthia`, `emssynthiaks`).
  Dropped: `phaseshifting` (→ `phasing`).

## borrowings.csv (work → earlier piece)

- St Matthew Passion ← Nicolaus Decius (O Lamm Gottes, unschuldig), quotation 1/68 (IMSLP: cantus firmus of No. 1;
  Hymnary for Decius). Found in IMSLP, not in the drafts: drop it if only drafts' finds are wanted.
- Nothing else in the drafts qualifies: Firebird/Petrushka/Rite folk tunes, Goldberg quodlibet folk songs, Hymnen's
  national anthems (no artist named in the drafts), Gesang's biblical text, the Reich speakers (not pieces) are skipped.
  Not sourced, to verify later: Parade's "Rag-time du paquebot" and Irving Berlin; Musique d'ameublement quoting
  Saint-Saëns and Ambroise Thomas; Debussy's "Hommage à S. Pickwick" quoting God Save the King.

## Borrowings FROM catalogue albums TO these works (for the owner to add)

| album_id | source | kind | songs | evidence |
|---|---|---|---|---|
| beatles-thebeatles | Johann Sebastian Bach (Lute Suite in E minor, BWV 996) | adaptation | 1/30 | McCartney on Blackbird: "based on the Bach piece" (Miles 1997, in docs/descriptors/research/beatles-claude-wave3.md); the work is not in this wave. Today it's an influenced_by [1/30]: owner decides. |
| battiato-fetus | Johann Sebastian Bach (Orchestral Suite No. 3, BWV 1068) | quotation | 1/? | Rockol, Rebustini 2018 https://www.rockol.it/recensioni-musicali/album/2449/franco-battiato-fetus ("Meccanica"); today an influenced_by; work not in wave. |
| battiato-diecistratagemmi | Karlheinz Stockhausen (Gesang der Jünglinge) | quotation | 1/10? | battiato.it https://www.battiato.it/dieci-stratagemmi/ (track 8; repo notes say "quotation/resemblance", not a sample). Check the track count. |
| wendycarlos-switchedonbach | Johann Sebastian Bach (Brandenburg Concertos), Johann Sebastian Bach (The Well-Tempered Clavier, Book I) | arrangement | share per track | Columbia MS 7194 credits (already in borrowings/wendycarlos.csv as plain "Johann Sebastian Bach": can now point to the works). |
| bacalov-ilvangelosecondomatteo | Johann Sebastian Bach (St Matthew Passion) | arrangement | | already in borrowings/bacalov.csv: will now link to bach-stmatthewpassion. |
| spagna-domani | Claude Debussy (Suite bergamasque) | adaptation | 1/13 | already in borrowings/spagna.csv: links to debussy-suitebergamasque. |
| janet-allforyou | Erik Satie (Gymnopédies) | sample | 1/? | Pitchfork https://pitchfork.com/reviews/janet-jackson-all-for-you/ ("Someone to Call My Lover" samples Gymnopédie No. 1; repo janet-phase02 notes). |
| ella-porgyandbess | George Gershwin (Porgy and Bess) | cover | | the album is the opera's songs (Ella & Louis, 1958); credits. |
| rondoveneziano-odisseaveneziana | Johann Sebastian Bach (Toccata and Fugue in D minor, BWV 565) | interpolation | 1/? | secondary source only (repo rondoveneziano-phase02 notes): weak; work not in wave and attribution disputed. |
| cocciante-unuomofelice | Johann Sebastian Bach | interpolation | 1/? | song "Sopra un preludio di Bach": prelude not identified, no source opened. |
| williamorbit-piecesinamodernstyle | Erik Satie, Maurice Ravel | cover/arrangement | | repo notes: covers of Satie and Ravel; pieces not identified in our notes (check the track list). |

Not in the catalogue (no album id), for later: Jeff Beck "Beck's Bolero" ← Boléro (YourClassical 2023:
"based on Maurice Ravel's famous Bolero"); Blood, Sweat & Tears 1968 ← Gymnopédies (YourClassical); Miles Davis
& Gil Evans *Porgy and Bess* ← Porgy (milesdavis.com, BBC MM; only Kind of Blue/Sketches of Spain are in the
catalogue); Charlie Parker "Ko-Ko" quotes The Firebird (Guardian 2019). Beatles "Revolution 9" ← Hymnen: Irish
Times says Lennon "used Stockhausen's Hymnen as the basis": an influence more than a borrowing (beatles-thebeatles;
owner decides).

## reception.csv / legacy.csv

Merged (39 / 24 rows). Mainstream re-anchored to the research scale for works (0 avant-garde … 3 repertory
classic … 4–5 light): Brandenburgs, Cello Suites, Porgy, Suite bergamasque, Boléro, Gymnopédies, Firebird 4→3;
Préludes 2→3; Parade 1→2; Gesang, Stimmung 1→0; 4′33″ 2→0. Rhapsody and An American in Paris stay 4 (light
jazz-concert crossover). Legacy: only the In C / Rainbow wording (tribute title), values unchanged.

## Uncertain values

- Boléro catalogue `M. 81`: IMSLP page title says M.81, its field says "M.107 ; O.81". 
- Kontakte premiere 1960-06-11 Cologne (ZHdK; a web summary agrees); IRCAM's page gives 21 Nov 1960 Stockholm
  for the 12½ version: sources disagree.
- St Matthew premiere 1727-04-11 (LA Phil); IMSLP's BWV 244 page dates the revised 1736 version; scoring and
  forces follow IMSLP (later version). IMSLP lists the Evangelist as alto: used LA Phil (tenor Evangelist, bass Jesus).
- Sonatas and Interludes premiere = first complete New York performance (New World Records); an earlier
  complete performance may exist.
- In C `key` left empty although Wikidata says C major (modal pulse on C, not functional C major).
- `staticconsonance` for Glass and Music for 18 / In C rests on the sources calling them minimalist plus the
  research's textbook definition (consonant, triadic): medium confidence. Twelve Parts, Einstein, Koyaanisqatsi.
- Faune `extendedtonality`; Firebird `chromatic` (octatonic "magic scale" has no token); Rite `extendedtonality`
  (Guardian "extended harmonies"; no opened source says bitonal for the Rite).
- Einstein `text_by` empty: Wikidata names Glass and Wilson as librettists, but the texts are by others; no
  opened source settled it. Daphnis/Parade/Petrushka/Rite text_by are scenario authors (Wikidata P87).
- Satie's Musique d'ameublement: forces/form empty (IMSLP says "orchestra", drafts couldn't confirm scoring).
- Bach scenes, Cage "New York avant-garde" (not "New York School": no source opened for the label).
