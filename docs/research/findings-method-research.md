# From thresholds to a method: what the literature says about "Fandome's data shows" (Oct 31, 2026)

Research commissioned after the owner asked whether `src/lib/legacy.ts` is an algorithm or trial and error. Figures
were checked by running the code on the catalogue (1,839 described albums). Companion audit:
[`findings-method.md`](findings-method.md).

## 0. Answer to the owner's question

Part algorithm, part trial and error. Sound: the Wilson interval, and the idea that uncertainty should shrink a claim.
Ad hoc: about a dozen fixed numbers, with no stated error rate and no sensitivity check. Three structural problems
matter more than any single threshold:

1. **Multiplicity is not controlled.** The code runs 95,333 trait tests (on average 63 traits or trait pairs for each
   of 1,515 albums; 16,175 distinct traits: 842 single, 15,333 pairs) and keeps the best of 4 windows after the album.
   On the same tests (Fisher exact, ×4 for the window choice): Bonferroni 0.05 passes 399; Benjamini–Yekutieli 0.05
   passes 878; Benjamini–Hochberg q = 0.05 passes 1,780; BH q = 0.10 passes 2,294; the current rule (sure ≥ 0.12 and
   gain ≥ 0.10) passes 1,447. So the current rule lets through about as much as a 5% false discovery rate, but by
   accident, not by a stated rate.
2. **The unit of test is wrong.** "Did trip-hop rise in its field after 1991?" is a question about a trait in a field,
   not about one album, yet the code re-tests that rise for every album of the field and year (trip-hop alone 19 times).
   The literature separates detecting the change (Mauch et al. 2015; Kleinberg 2003; change-point methods) from
   attributing it to a pioneer (Golder & Tellis 1993).
3. **Interval overlap is the wrong test for a difference.** `sure` (lower bound after minus upper bound before) is
   conservative (Schenker & Gentleman 2001); Newcombe's (1998) hybrid score interval builds the difference from the
   same two Wilson intervals with the right coverage.

**Blue Lines worked through.** Trip-hop is on 0 of 38 field albums before 1991 and 6 of 19 in the window after.
Current `sure` 0.107; Newcombe one-sided 95% lower bound of the increase 0.158; Bayesian (Jeffreys) P(increase > 0) =
0.9999, 5% quantile 0.151; Fisher exact one-sided p = 0.00075. The rise is not in doubt; whether it survives
multiplicity is borderline (best of 4 windows: p = 0.003, needs BH q ≈ 0.117; one window fixed in advance passes
q = 0.10, not 0.05). The fix is describing more albums of that era, not lowering 0.12.

## 1. Detecting the onset of a rise in small, uneven samples

- Intervals for a share: Wilson or Jeffreys for n ≤ 40, Agresti–Coull above (Brown, Cai & DasGupta 2001). Our windows
  have a median of 15 albums after and 72 before: keep Wilson or Jeffreys.
- Difference: Newcombe hybrid score, L = d − √((p₂−l₂)² + (u₁−p₁)²). Bayesian: Beta(k+½, n−k+½) posteriors, report
  P(after > before); handles 0/n with no extra rule.
- Zero counts: with 0 of n, the upper 95% bound is 1−0.05^(1/n) ≈ 3/n (Hanley & Lippman-Hand 1983), so "new at rate r*"
  needs n ≥ ln α / ln(1−r*) earlier albums.
- Mauch et al. 2015 (Hot 100): "revolutions" by Foote novelty at every half-width from 1 to 12.5 years, significance
  from 1,000 permutations, results read at 3 years and trusted when they persist across widths; "no significant
  changes at small time scales (<2 years)". The null comes from the data, not a fixed effect size.
- Kleinberg 2003 burst detection: base rate p₀ = R/D, burst rate s·p₀, each upward change costs γ·ln n: the effect is
  relative to the trait's own base rate.
- Change points: PELT with a BIC penalty (Killick, Fearnhead & Eckley 2012); Bayesian online change point (Adams &
  MacKay 2007) gives the probability of a change in a given year.
- Takeoff (Golder & Tellis 1997): growth crossing a threshold relative to the base: the model for "becomes main".
- Equal-count bins and drift: Newberry, Ahern, Clark & Plotkin; random copying alone produces turnover (Bentley, Hahn &
  Shennan 2004; Crema, Kandler & Shennan 2016), so a trait can rise with no pioneer at all.
- Setting thresholds from the data: fix an error rate in advance, apply it to the lower bound of the increase, adjust
  for multiplicity; define the effect relative to the base rate. A minimum relevant size is legitimate if stated once
  with a reason; it must not double as the significance filter (what `MIN_SURE_GAIN` does now).

## 2. Multiple comparisons

- Benjamini–Hochberg (1995) controls the false discovery rate; it stays valid under positive dependence (Benjamini &
  Yekutieli 2001), our case.
- Discrete tests (Tarone; Llinares-López et al. 2015): count only tests that can reach significance: our effective
  number is about 11,500–19,000, not 95,333.
- Filtering before correction (Bourgon, Gentleman & Huber 2010) is allowed only if independent of the test statistic
  under the null: the trait's total count qualifies; the share before does not, so `RARE` as a pre-filter is invalid.
- Null models: shuffle release years among albums of the same field (keeping each year's count) and rerun the whole
  pipeline; the findings in shuffled catalogues estimate the real false discovery rate (as Mauch permutes quarters and
  Uzzi et al. 2013 randomise networks).
- Garden of forking paths (Gelman & Loken 2013): choosing the best window, or retuning after looking at one album, are
  hidden extra tests.

## 3. Novelty and pioneers in music and culture

- Mauch et al.: the analysis "does not reveal the origins of musical styles; rather, it shows when changes in style
  frequency affect" the charts; detect the population change first, then test whether a candidate anticipates it.
- Shalit, Weinshall & Chechik 2013: influence and innovation are "not monotonically correlated": report first
  appearance and pioneer separately.
- Golder & Tellis 1993: inventor, product pioneer and market pioneer are different roles; "more than one firm may be
  an inventor"; survivorship bias inflates pioneers.
- Uzzi et al. 2013: a combination is novel only if rarer than chance (z-score against randomised networks). Fandome's
  pairs fail this: bass guitar goes from 57% to 82% of albums (1964–69 to 1975–85) and synthesizers from 6% to 61%;
  under independence the pair should reach about 0.50, observed 0.56–0.60. So "Bass guitar + Synthesizers" and "Pop
  rock + Keyboards" are credited for the rise of one component.
- Disruption index (Funk & Owen-Smith 2017; Park, Leahey & Funk 2023); Holst et al. 2024: missing records manufacture
  "novelty".
- Palaeontology (Signor–Lipps; Wang & Marshall 2016): the first observed occurrence is biased late; our first
  appearance is an upper bound on the true date.

## 4. Weighting partial presence

- Mauch uses continuous topic proportions; diffusion studies count adoption as any use; Waltman & van Eck 2015:
  fractional counting when some records carry more labels.
- Proposal: first appearance counts any presence, by date (agrees with the owner), with the presence level shown;
  spread uses two binary curves, "any presence" and "main presence" (top 3 genres; instrument or production credited),
  instead of 1/0.5 weights (half weights break exact tests); pioneer credit requires main presence, and a minor
  earlier appearance is shown as an "earlier trace" that does not block the credit.

## 5. Validation without overfitting

- Pre-registration (Nosek et al. 2018); leakage (Kapoor & Narayanan 2023): press credits and named albums must never
  select parameters.
- Specification curve (Simonsohn, Simmons & Nelson 2020), multiverse (Steegen et al. 2016), stability selection
  (Meinshausen & Bühlmann 2010), robustness of novelty measures (Park et al. 2023; Holst et al. 2024).

## 6. Proposal

### 6a. Parameter by parameter

| Parameter | Verdict | Replacement and justification |
|---|---|---|
| Z = 1.645 | Replace | One-sided bounds at a level set by a stated FDR (BH q = 0.10; sensitivity 0.05, 0.20); 90% fine for display |
| Wilson interval | Keep | Recommended for n ≤ 40; Jeffreys equally good |
| `sure` (overlap) | Replace | Newcombe hybrid lower bound, or Fisher / Beta-binomial test |
| MIN_SURE_GAIN 0.12 | Drop as significance | Significance = passes BH; a relevance size, if wanted, stated once relative to the base rate (at least doubles, Kleinberg s = 2, plus a stated musical floor), in the sensitivity analysis; never retuned on one album |
| gain ≥ 0.10 | Drop | Redundant |
| RARE 0.15 | Replace | Base rate inside the test, not a pre-filter; "new" for wording = share before < 16% of the later peak (Rogers) |
| NEW_ANYWHERE 0.03 | Replace | Upper 95% bound of the earlier share across the catalogue < r* = 3% (close to Rogers' 2.5% innovators); demands enough earlier albums by itself |
| COVERAGE 0.3 × busiest | Replace, merge | Absolute detectability: n_before ≥ ln α / ln(1−r*) = 76 albums (r* 3%, α 0.10); the relative rule drifts and penalises older eras |
| MIN_FIELD 10 | Replace | Equal-count bins, n_min from the precision wanted (≈ 25 for ±0.15 at p = 0.3) |
| BEFORE 6 | Keep as a stated choice | Base rates drift; sensitivity 4, 6, 8, 10 |
| windows +1/+4/+7/+10, best taken | Replace | Binomial change point per (field, trait) (PELT/BIC, Bayesian, or Kleinberg); or one window fixed in advance |
| first ≥ 0.8 | Replace | Adopter rank: among the first 16% of the field's carriers (Rogers); several pioneers allowed; keep excluding albums that drew on it |
| closer ≥ 0.05 | Replace | Permutation rank against same-field contemporaries (empirical p), BH across candidates |
| lift ≥ 0.3 | Drop | Sums correlated tests into a score with no scale |
| adopters ≥ MIN_FIELD | Replace | Implied by the tests |
| MAIN_GENRES 3 / tail 0.5 | Keep 3, drop 0.5 | 3 is the guide's definition; two binary curves instead of 0.5 |
| Pairs | Replace | Only if co-occurrence exceeds what the parts predict (observed vs expected, log-odds), before and after |
| Followers linked | Keep and test | Hypergeometric enrichment vs contemporaries: evidence not from our descriptors |
| Earlier own finding blocks; remix excluded | Keep | Attribution rules, not thresholds |

### 6b. Method for the three outputs

- **Stage 0 (counts):** one table field × trait × year with n (described), any (trait anywhere), main (main sound);
  pairs as excess co-occurrence.
- **Output 1, first appearance (descriptive):** earliest year and album(s) with any presence, catalogue-wide and in the
  field; ties all shown with the presence level and the albums described in the 6 years before. Wording: "earliest in
  Fandome's catalogue"; "new at the time" only when the detectability rule holds, else "earlier records are thin".
- **Output 2, becomes a main sound (detection per field and trait):** binomial change point on the "main" curve in
  equal-count bins; onset year with interval, rates before and after; significant rise (Newcombe lower bound > 0 or
  posterior) reaching a stated floor (e.g. 16%); one test per series; BH q = 0.10 on testable series; calibrated with
  the shuffled-year null.
- **Output 3, the pioneer it spread from (attribution):** candidates with main presence no later than the end of the
  onset interval; required: the rise passed Output 2; priority among the first 16% of carriers; detectability; the
  closer permutation passes BH. Supporting: enrichment of documented followers. "First trace" and "Pioneer it spread
  from" shown separately; several pioneers when several pass. Uneven coverage: detectability rule, leave-one-artist-out
  check, explicit wording.

### 6c. Sensitivity and evaluation

- Specification curve over q (0.05/0.10/0.20), BEFORE (4–10), bins (n_min 15/25/40 or 3-year), detector, r*
  (2/3/5%), priority share (10/16/25%), main genres (2/3/4), floor (10/16/25%), weighting; each finding reports the
  share of specifications where it appears: robust ≥ 80%, else "fragile".
- Bootstrap within field and year, leave-one-artist-out; stability selection.
- Global null: shuffle years within each field 200 times; empirical FDR = mean null findings ÷ real findings; if it
  exceeds q, tighten q globally, never for a named album.
- Evaluation: freeze rules and reasons in the docs before running; a fixed benchmark of expert-credited innovations
  (album, trait, year, source), independent of our descriptors, written before the run and split into a development
  half (bugs only) and a sealed half (reported once per method version); never tune on the benchmark, the press or a
  named album; every new import is an out-of-sample test; every report lists tests run, q, null FDR, robustness,
  stability, sealed agreement and the findings that disagree with critics.

## Sources (all opened; † = abstract or landing page only)

- Brown, Cai, DasGupta 2001, *Stat. Sci.* 16:101 †: https://projecteuclid.org/euclid.ss/1009213286
- Newcombe 1998, *Stat. Med.* 17:873 †: https://pubmed.ncbi.nlm.nih.gov/9595617/
- Schenker & Gentleman 2001, *Am. Stat.* 55:182 †: https://jpsm.umd.edu/publication/schenker%2C-n%2C-and-gentleman%2C-jf-%282001%29%2C-judging-significance-differences-examining
- Hanley & Lippman-Hand 1983, *JAMA* 249:1743 †: https://pubmed.ncbi.nlm.nih.gov/6827763/
- Killick, Fearnhead, Eckley 2012 (PELT): https://arxiv.org/abs/1101.1438
- Adams & MacKay 2007: https://arxiv.org/abs/0710.3742
- Kleinberg 2003, *DMKD* 7:373: https://sites.cs.ucsb.edu/~xyan/classes/CS290D-2009spring/reviews/bhs.pdf
- Golder & Tellis 1997, *Marketing Sci.* 16:256 †: https://econpapers.repec.org/RePEc:inm:ormksc:v:16:y:1997:i:3:p:256-270
- Ahern, Newberry, Clark, Plotkin 2016: https://arxiv.org/abs/1608.00938
- Bentley, Hahn, Shennan 2004 †: https://pmc.ncbi.nlm.nih.gov/articles/PMC1691747/
- Crema, Kandler, Shennan 2016, *Sci. Rep.* 6:39122: https://www.nature.com/articles/srep39122
- Benjamini & Hochberg 1995: https://doi.org/10.1111/j.2517-6161.1995.tb02031.x
- Benjamini & Yekutieli 2001: https://www.math.tau.ac.il/~ybenja/MyPapers/benjamini_yekutieli_ANNSTAT2001.pdf
- Efron 2008: https://arxiv.org/abs/0808.0572
- Llinares-López et al. 2015: https://arxiv.org/abs/1502.04315
- Bourgon, Gentleman, Huber 2010, *PNAS*: https://pmc.ncbi.nlm.nih.gov/articles/PMC2906865/
- Gelman & Loken 2013: http://www.stat.columbia.edu/~gelman/research/unpublished/p_hacking.pdf
- Mauch, MacCallum, Levy, Leroi 2015: https://arxiv.org/abs/1502.05417
- Shalit, Weinshall, Chechik 2013: https://proceedings.mlr.press/v28/shalit13.html
- Uzzi et al. 2013: https://www.kellogg.northwestern.edu/faculty/jones-ben/htm/atypical_combinations_and_scientific_impact.pdf
- Park, Leahey, Funk 2023: https://arxiv.org/abs/2106.11184
- Funk & Owen-Smith 2017: https://doi.org/10.1287/mnsc.2015.2366
- Holst et al. 2024: https://arxiv.org/abs/2402.14583
- Figueiredo et al. 2024: https://arxiv.org/abs/2410.15996
- Golder & Tellis 1993, *JMR* 30:158: https://people.duke.edu/~moorman/Marketing-Strategy-Seminar-2015/Session%205/Golder%20and%20Tellis.pdf
- Wang & Marshall 2016: https://pmc.ncbi.nlm.nih.gov/articles/PMC4881338/
- Waltman & van Eck 2015: https://arxiv.org/abs/1501.04431
- Nosek et al. 2018, *PNAS*: https://pmc.ncbi.nlm.nih.gov/articles/PMC5856500/
- Kapoor & Narayanan 2023: https://arxiv.org/abs/2207.07048
- Simonsohn, Simmons, Nelson 2020: https://www.gwern.net/doc/statistics/meta-analysis/2020-simonsohn.pdf
- Meinshausen & Bühlmann 2010: https://arxiv.org/abs/0809.2932
- Steegen et al. 2016 (not opened, cited for the term "multiverse"): https://doi.org/10.1177/1745691616658637
- Rogers, *Diffusion of Innovations* (2003), adopter categories, as cited in `docs/research/influence-research.md`.
