# Claude import: Kool & the Gang, Fandome phase 02

Research prepared 29 October 2026 for the `descriptors` branch of `giampierofiorelli/Fandome`. **Proposal only; no repository modification occurred.** All files are self-contained. Research not automatic approval.

## Files in this ZIP

1. `koolandthegang_phase02_rows_ONLY.csv`: exactly four new **27-column** draft descriptors.
2. `koolandthegang_phase02_sources.csv`: original/official/discographic, audio-press and credit sources for album-level claims.
3. `koolandthegang_phase02_genre_evidence.csv`: every assigned genre with supporting URL and scope.
4. `koolandthegang_phase02_evidence-notes.md`: detailed credits and sonic reasoning, disputed styles, hybrid studio/concert caution.
5. `koolandthegang_phase02_catalog-audit.csv`: proposed album IDs and catalog merge actions.
6. `CLAUDE_IMPORT.md`: this file.

## Before importing

- Load up-to-date `docs/album-descriptors-guide.md`, `src/data/scenes.ts`, `src/data/genreFamilies.ts`, `src/data/instruments.ts`, `src/data/production.ts` and `scripts/validate-descriptors.ts`.
- Confirm `koolandthegang` artist ID is present; phase 01 proposed it but the phase 02 research cannot assume it has been merged. Add missing artist only once.
- Add to the original chronological catalog: *Light of Worlds* (1974), *Spirit of the Boogie* (1975), *Love & Understanding* (1976), *Open Sesame* (1976). Canonical IDs are in `rows_ONLY.csv`. Do not overwrite phase 01 rows.
- **Classify Love & Understanding as studio** because the artist's official catalogue does. Mark clearly that exactly three tracks of the original eight are Rainbow Theatre concert recordings. This is a mixed-original LP, not a separate live album. Don't remove the album simply for the three live tracks, and don't remove the disclosure to meet the no-live rule.
- Original producer wording: 1974 `K. & G. Productions`, 1975 `Kool & the Gang`, 1976 *Love & Understanding* `K. & G. Productions`, 1976 *Open Sesame* `K. & G. Productions|George Brown` (co-producer). Source transcriptions and alternative band-level credits are explained in evidence notes. Never count `executive producer` as a record-production role automatically.
- Genre tokens present in guide / `scenes.ts` in checked branch: `funk`, `jazzfunk`, `soul`, `rnb`, `disco`, `discofunk` (all existing). `discofunk` on 1975 *Spirit* is a lower-weight dissenting critic label, explicitly annotated; reconsider only after qualified review.
- Production/instrument tokens in batch are checked against the guide. `concertrecording` in *Love* applies to three specified tracks only. No digital remaster or hypothetical drum machines are included.
- `sounds_like` is an editorial hypothesis, not documented direct influence. `influenced_by` remains empty: general band ancestry is insufficient to tie names specifically to these LPs, and cover tracks / later samplers don't count.
- Keep `status=draft`; run `scripts/validate-descriptors.ts` and relevant repo tests against the merged file. Preserve empty unknown cells. Confirm no duplicates against live catalogue.
- Import without copyrighted art or reproduced review passages. Source URLs and original paraphrased assessments only.

## Next phase

After this phase, the chronological candidates are *The Force* (1977), *Everybody's Dancin'* (1978), *Ladies' Night* (1979) and *Celebrate!* (1980), subject to original studio-status verification.

## Claude import note (Oct 2026)

- Band self-credits dropped from producers (K. & G. Productions is the band's company); Open Sesame keeps George Brown. Love & Understanding kept as studio (3 of 8 tracks live, flagged with concertrecording).

## Claude enrichment (reception pass, Oct 2026)

- Reception rows appended to `docs/descriptors/reception/koolandthegang.csv`.
- sounds_like (ChatGPT's editorial hypotheses) checked: only Earth, Wind & Fire on Light of Worlds has support (Apple Music editorial: "Even as Earth, Wind & Fire married rock-inspired funk to jazz-informed playing, Kool & the Gang… an even harder amalgam of similar styles"). The J.B.s, Sly, James Brown, War, The Meters, Ohio Players not found for these albums: removed.
