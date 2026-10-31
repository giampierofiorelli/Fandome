# How "Fandome's data shows" decides: an audit of every number (Oct 2026)

The owner asked whether we are building an algorithm or tuning by trial and error. This audit lists every number the
trace and the findings use (`src/lib/legacy.ts`), where it came from and whether it is justified. Verdicts wait for the
research on methods (`docs/research/findings-method-research.md`, done Oct 31) and are then applied as rules chosen
for a reason, before looking at which albums come out. The press stays a comparison (Findings page: "Critics agree"
or "Our finding"), never a target.

## What the algorithm tries to say

1. **First appearance** of a sound (a genre, an instrument, a technique, or a pair): the first album in our data that
   has it, in any position; position matters only between albums of the same year (owner, Oct 2026).
2. **Becomes the main sound**: the first album where it is among the main genres (first three).
3. **Spreads from**: the album after which other albums take it up, and that those albums resemble ("pioneer").

Until Oct 31 the code only answered (3), and mixed (1) into it. The owner's example: the story of synth-pop in our data
is "it appears with Kraftwerk's Ralf und Florian (1973, a minor genre), becomes their main sound with The Man-Machine
(1978), and spreads from there": three facts, not one winner.

## Every number, where it came from

| Name | Value | What it does | Origin | Justified? |
|---|---|---|---|---|
| `BEFORE` | 6 years | the "before" window | chosen at the start (Oct 29), no study | no: arbitrary |
| `RARE` | 0.15 | a trait in fewer than 15% of the area's albums before is "new" there | chosen at the start | no: arbitrary |
| `MIN_FIELD` | 10 albums | smallest window that may say anything | chosen at the start | partly: some minimum is needed, the value is arbitrary |
| windows | +1, +4, +7, +10 years, 3 years each | where the spread is measured after the album | chosen at the start | no: arbitrary |
| spread filter | gain ≥ 0.10 | a trait "spreads" if it rises by 10 points | chosen at the start | no: arbitrary |
| `Z` | 1.645 (90% Wilson interval) | margin of error on each share | standard statistics | yes: a stated confidence; the choice of 90% is a convention |
| `NEW_ANYWHERE` | 0.03 | new to the whole catalogue: at most 3% of all earlier albums | chosen Oct 30 | no: arbitrary |
| `MIN_SURE_GAIN` | 0.12 | the gain after the margin of error must be 12+ points | **tuned Oct 30 on the press-sourced legacy scores** (so that Dummy, Moby, Dare, Nevermind came in and Ziggy, Fetus stayed out) | **no: tuned on the press**, exactly what the owner feared |
| `COVERAGE` | 0.3 | the 6 years before must be described at 30% of our best-described 6 years | **tuned Oct 30 the same way**; the idea (relative, not a fixed count) is sound | idea yes, value tuned on the press |
| `lift` | ≥ 0.3 | the five strongest spreads must add up to 30 points | chosen Oct 29 | no: arbitrary |
| `first` | ≥ 0.8 | 80% of the albums with the sound in the year before, same year and year after are from its year on | chosen Oct 29 | no: arbitrary |
| `closer` | ≥ 0.05 | the albums after resemble it 5 points more than its contemporaries | chosen Oct 29 | no: arbitrary |
| adopters window | 10 years | who counts as having taken it up | chosen Oct 29 | no: arbitrary |
| `MAIN_GENRES` | 3 | main genres vs the long tail | the descriptor guide ("a genre heard on one track goes from 4th place on") | yes: it comes from how the data is written |
| tail weight | 0.5 | a genre in the long tail counts half | chosen Oct 31 | no: arbitrary (owner: the tail must count; how much is open) |
| "drew on me" | rule | an album that names the artist as an influence (or is compared to it) cannot precede it | Oct 30, logic | yes: documented evidence; checked Oct 31 that no result depends on it alone |

## Known weaknesses (to fix by method, not by thresholds)

- **Many tests per album.** Each album tests dozens of traits and trait pairs; over ~1,850 albums some will pass by
  chance. Nothing controls this today (no false-discovery control, no null model).
- **Uneven description.** Some albums list 11 genres, others 4: a richer description "wins" firsts by listing more.
- **Famous records are described first**, so a sound can look new because its earlier records are not described yet
  (the reason for `COVERAGE`).
- **Pairs of traits** (e.g. "Bass guitar + Synthesizers") multiply the tests and produce findings that are hard to
  read.

## Next

1. Apply the research's verdict to every row above: keep with a reason, replace with a rule from the data's own
   uncertainty, or drop.
2. Build the three outputs (first appearance, becomes main, spreads from) and show them as one story on the album page.
3. Sensitivity analysis: show how the results move when each remaining number moves, and publish it.
4. Compare with the press only at the end, and report the agreement as it is.

## Method v1: rules fixed before running (pre-registered, Oct 31 2026)

Written and committed before the code runs, from `findings-method-research.md`. Not to be changed after seeing which
albums come out; a change needs a musical or statistical reason written here first, and applies to every album.

**Data.** Traits are single: a genre, an instrument, a production technique (pairs dropped in v1: most were the rise of
one part, see research §3). An album carries a trait *in full* when it is an instrument, a technique or one of its first
three genres (the guide's main sound), *partly* when it is a genre from 4th place on. A field is a base genre of the
artist's scene (as today); an album belongs to every field of its artist.

**Output 1, first appearance (descriptive, no test).** The earliest album in the catalogue that carries the trait at
all; between albums of the same year, a full presence comes before a partial one, then the higher position. Shown as
"earliest in Fandome's catalogue" with its presence (main sound or minor). Said to be new at the time only when at
least 76 albums of any area are described in the 6 years before (the number needed to see a 3% sound with 90%
confidence: ln 0.10 / ln 0.97); otherwise "earlier records are thin".

**Output 2, becomes a main sound (one test per field and trait).** For each field × trait, the yearly share of the
field's albums carrying it in full. Change point: the split year that best separates a lower share before from a higher
share after (binomial likelihood, at least 10 albums on each side). Significance: the same best-split statistic on 200
catalogues with release years shuffled among the field's albums gives an empirical p-value; false discovery rate
controlled with Benjamini–Hochberg at q = 0.10 across all field × trait series that have at least 5 full carriers.
The rise must also reach critical mass: the lower 90% Wilson bound of the share after is at least 16% (Rogers' share of
innovators and early adopters). Partial presence is reported as a second curve, never mixed with weights.

**Output 3, the album it spread from (attribution).** For a rise that passed Output 2, candidates are the field's
albums carrying the trait in full, released no later than the split year. A pioneer must: be among the first 16% of
the series' full carriers by year (ties by year all qualify); have at least 76 albums described in the 6 years before;
not name as an influence, or be compared by critics to, an artist with an earlier full carrier in the series (it drew
on them); and be closer to the albums that carried it in the 10 years after than its contemporaries are: its mean
likeness to them ranks in the top 10% of the field's albums of the same year ±1 (permutation rank). Several pioneers
may pass. An earlier minor appearance is shown as an earlier trace; it does not block the credit. The same artist's
later albums are not credited again for the same trait.

**Reporting.** Every run writes: series tested, q, the false discovery rate estimated on shuffled catalogues, and for
each finding the share of a parameter grid (q 0.05/0.10/0.20; window 4/6/8/10 years before; 16% floor 10/16/25%;
priority 10/16/25%) in which it appears: "robust" from 80%, otherwise "fragile". Agreement with the press is measured
on a sealed benchmark written before the run (see below) and reported as it is.

**Benchmark (to write before the run).** Innovations credited by experts, from sources independent of our
descriptors: album, sound, year, source. Split by a fixed rule (alternate rows by year) into a development half (used
only to find bugs, never to choose numbers) and a sealed half (read once per method version).

## Method v2 (Oct 31 2026): two corrections found on the first run, written before applying them

The first run of v1 (1,302 series tested, 164 rises, 66 with pioneers) showed two flaws in the rules, not in the data:

1. **One change point over 70 years mixes phases.** A sound can appear, fade and come back (synth-pop in the 1980s and
   again in the 2000s). With a single split, the electronic field's synth-pop rise came out in 2005 and averaged
   decades. v2 uses several change points, as the research recommends (PELT-style segmentation with a BIC penalty,
   Killick et al. 2012): segments are added while each new split improves the log-likelihood by more than
   ½·ln(n) per added parameter (BIC), with at least 10 albums per segment. Each rising segment (a higher share than
   the segment before) is a candidate rise, tested as in v1: the gain of the segmentation over a single share,
   compared with 200 shuffled catalogues, Benjamini–Hochberg at q = 0.10, and critical mass on the rising segment.
2. **Pioneers were picked among the earliest carriers of all time**, so The Man-Machine (1978) was credited for a
   2005 rise. In v2 the candidates for a rise are the full carriers from the start of the segment before it to the
   first year of the rising segment, and priority (first 16%) is counted among the carriers of the rising segment and
   the one before it, not of all time.

Everything else in v1 stays as written.

## Method v3 (Oct 31 2026): one correction found on the v2 run, written before applying it

1. **A pioneer decades before its rise.** v2 counts priority among the carriers of the segment before the rise, and that
   segment can span decades: Meddle (1971) came out as a pioneer of a 2022 rise. By the method's own definition an album
   spreads a sound to the albums of the 10 years after it (`followYears`), so a rise that starts more than 10 years
   after an album cannot have spread from it. v3: a pioneer must be released at most 10 years before the rise's first
   year. No new number: the same 10-year window already used for followers.
2. **Reporting fix (not a rule):** the robustness share counted a credit twice when one series had two rises in the
   same grid run; each credit now counts once per run.

## Benchmark and scoring (written Oct 31 2026, before scoring)

`docs/research/benchmark/innovations.csv`: 62 innovations credited by experts (sources outside our descriptors, quote
and URL per row, no Wikipedia), built by a separate research pass that never opened our results. Sorted by year, then
album id, then sound; even rows are the development half, odd rows the sealed half (31 each).

Scoring, fixed now: the sound is matched to our token (genre, instrument or technique of the same name). A **first**
row agrees when the album is our first appearance or our first main sound of that token; a **spread** row agrees when
the album is credited as a pioneer of a rise of that token in any field (robust credits counted separately). Same
artist, other album, is reported as a near miss, not as agreement. A row whose token we never use, or whose album has
no descriptor, is "not scorable". Rows the experts dispute (several albums credited) are scored as they are. The
agreement is reported as it is; it never changes a rule (owner: trust the data, look for errors first).

## Results of method v3 (Oct 31 2026), as they are

- 1,463 series tested, 483 pass Benjamini–Hochberg at q = 0.10, 194 rises reach critical mass, 65 have at least one
  pioneer (104 credits, 57 robust: present in 80%+ of the parameter grid).
- False discoveries estimated on 5 catalogues with shuffled years: 0 rises in each, so the estimated rate is ≈ 0.
- Benchmark (`npx vite-node scripts/score-benchmark.ts`):
  - **first appearance:** 4 of 13 scorable rows agree in the development half, 4 of 11 in the sealed half (1 near miss
    each: same artist, other album). Most disagreements are an earlier album in our catalogue (e.g. My Generation
    before The Stooges for proto-punk), which is what the data says; none was traced to a bug.
  - **spread from:** 0 of 12 (development) and 0 of 13 (sealed). In nearly every case we name no pioneer at all: the
    rise is not detected in any field (few full carriers per field) or no candidate passes the closer test. The method
    is silent rather than contradicting the experts; how to make it see these rises is the next question, to be
    answered by a written rule, not by these rows.

**Owner (Oct 31 2026):** the old "Fandome's data shows" box stays next to the story of a sound until we are fully sure
the new method is right.

## Why "spread from" names no pioneer (diagnosis on the development half only, Oct 31 2026)

1. **The 1960s are below the detection floor.** The 6 years before 1967 hold 55 described albums, fewer than the 76
   needed to see a 3% sound; every year up to 1968 is "thin", so no 1960s album can be credited (mellotron in rock and
   pop does rise in 1967, with no admissible pioneer). Not a rule to relax: the catalogue needs more 1955–67 albums.
2. **Too few carriers per field.** Salsa, jùjú, morna, French house, amapiano have fewer than 5 full carriers in their
   artist's fields, so they are not tested; big beat (9) shows no change point. Same answer: more data.
3. **A false precision in the candidates (a rule problem).** Candidates must be released no later than the split year,
   but the split year is an estimate: with 10 carriers its position is uncertain by several years. Grunge rises in rock
   from 1989, and Nevermind (1991) is excluded by the cutoff, not by the method's own earliness test.

## Method v4 (Oct 31 2026), written before applying it

- The cutoff "no later than the split year" is dropped. Earliness is decided by the rule already written for it:
  a pioneer is among the first 16% of the full carriers of the rise (the rising segment and the one before it), and
  at most 10 years before the rise starts (v3). Everything else stays.

**v4 result:** 194 rises, 83 with pioneers (65 in v3), false discoveries ≈ 0; benchmark unchanged (first appearance
4/13 and 4/11; spread 0/12 and 0/13). Traced on grunge (development half): it reaches 10 of 79 rock albums in
1989–95 (13%), below critical mass in the broad rock field, so no rise; and where it would pass, priority picks
Bleach (1989), and Nevermind is excluded as the same artist's later album. The experts' "spread" rows name the album
that **made a sound popular**, our pioneer is the **earliest** album others follow: two different questions. Whether
to add "made it popular" as its own output is for the owner to decide.

## Method v5 (Oct 31 2026): "made it popular", written before applying it (owner approved the output)

A fourth output, separate from the pioneer: the album that **made a sound popular**. Reception's `mainstream` is not
used (it measures how commercial a record is in its making, not its reach). Reach is measured by documented links.

- Only for rises that passed (Benjamini–Hochberg and critical mass, as for pioneers).
- Candidates: the rise's early adopters, Rogers' first 16% of its full carriers by year, ties by year all in (the
  same pool as pioneers, without the novelty conditions: no "thin" check, no "drew on" check, and an artist's later
  album may be chosen).
- The album chosen is the candidate drawn on (influence named by an artist, critic comparison, sample/quote/cover,
  shared producer: the documented network) by the most later carriers of the rise, other artists, within 10 years
  after it; at least one is needed. Ties: the one drawn on by more later albums overall, then the earlier one.
- Benchmark scoring for v5, fixed before scoring: a **spread** row also agrees when the album is the "made it popular"
  album of a rise of that token in any field. Implementation note: the candidates also respect the v3 window (at most
  10 years before the rise), as the pioneers' pool does; the first build had left it out (Sgt. Pepper came out for a
  2011 rise).

**v5 result:** 106 rises name an album that made the sound popular (e.g. In the Court of the Crimson King for prog in
rock, Tommy for art rock, Stand! for funk in soul, Bringing It All Back Home for folk). Benchmark "spread" rows: 1 of
12 (development) and 1 of 13 (sealed). First appearance unchanged (4/13 and 4/11). Popularity credits are not tested
on the parameter grid, so the page shows them as tentative unless the album is also a robust pioneer. To see the
1960s, 1955–67 albums are being added (`docs/next-artists-1955-1967.md`).
