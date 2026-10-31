# How "Fandome's data shows" decides: an audit of every number (Oct 2026)

The owner asked whether we are building an algorithm or tuning by trial and error. This audit lists every number the
trace and the findings use (`src/lib/legacy.ts`), where it came from and whether it is justified. Verdicts wait for the
research on methods (`docs/research/findings-method-research.md`, in progress) and are then applied as rules chosen
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
