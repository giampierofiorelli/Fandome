# CLAUDE_IMPORT — Kool & the Gang / Fandome phase 03

Prepared: 29 October 2026. Four researched studio LPs from 1977–1980. Target branch: `descriptors` in `giampierofiorelli/Fandome`. **Read-only catalogue audit; do not assume a commit.**

## Included files (six)

- `koolandthegang_phase03_rows_ONLY.csv`: exactly four draft, 27-column album descriptors.
- `koolandthegang_phase03_sources.csv`: original LP, primary interview, professional review and label-credited sources.
- `koolandthegang_phase03_genre_evidence.csv`: every genre token linked to a specific source and album-or-hit scope.
- `koolandthegang_phase03_evidence-notes.md`: detailed justifications, credit discrepancies and uncertainties.
- `koolandthegang_phase03_catalog-audit.csv`: proposed artist/album registration actions.
- `CLAUDE_IMPORT.md`: this file.

## Integrate

1. On the target branch, **recheck** for the artist and albums before importing. Proposed artist ID `koolandthegang` (same as phases 01–02). Add artist room and albums only if absent. Preserve `album_id` as-is and never duplicate records.
2. Insert/append these four rows into `docs/descriptors/koolandthegang.csv` in chronological order **after** phase 02. Preserve column order. Keep phase 01 and phase 02 files separate until de-duplication is checked.
3. Verify `genres` against `src/data/scenes.ts`, `instruments` against `src/data/instruments.ts`, `production` against `src/data/production.ts`; run `scripts/validate-descriptors.ts` in the repository. The six-file ZIP itself is **not** a substitute for running the project validator.
4. Read notes before import: *The Force* has production company `K. & G. Productions` and George Brown co-producer; *Everybody's Dancin'* original jacket says Robert Bell and Dennis Thomas producers while **later Qobuz credits disagree**; *Ladies' Night* has Deodato producer and Kool & the Gang associate producer; *Celebrate!* credits Deodato, "in association with" the band. Preserve these distinctions and check scan if available.
5. Do not infer influence from genre, covers, producer collaboration, album thanks, or a reviewer's similarity. All four `influenced_by` are **empty by design**. `sounds_like` is the editorial recommendation judgment.
6. Make sure original studio albums only; no live records, greatest hits or bonus-track versions. `Celebrate!` is 1980; chronological next phase would start with *Something Special* (1981).
7. Leave all four `status=draft` until an independent check. No changes to existing source code are included in this package.

## Proposed catalogue rows

```text
koolandthegang-theforce         | The Force            | 1977
koolandthegang-everybodysdancin  | Everybody's Dancin'  | 1978
koolandthegang-ladiesnight       | Ladies' Night        | 1979
koolandthegang-celebrate         | Celebrate!           | 1980
```

## Checks built into this package

Four unique ids, ordered years, exactly 27 descriptor columns, valid scale/voice/type/lyrics flags, every assigned genre has an evidence row, every evidence URL appears in sources, no live/compilation types, single-level ZIP with no compression and six files. All files contain original editorial text; no review copy-pasting.

## Claude import note (Oct 2026)

- Band self-credits dropped from producers (K. & G. Productions; Celebrate!'s "in association with" the band); member credits kept (George Brown, Robert Bell, Dennis Thomas).

## Claude enrichment (reception pass, Oct 2026)

- Reception rows appended to `docs/descriptors/reception/koolandthegang.csv`.
- The Force sounds_like: Ohio Players, Commodores, Cameo, Earth, Wind & Fire (Soul Express, Ismo Tenkanen: "much closer to Ohio Players/Commodores-type 70s funk", "influenced by Earth Wind & Fire's soul/funk sound"), Sly and the Family Stone (Globe and Mail 1978); The J.B.s removed. Credits verified on Discogs r337047: confidence high.
- Everybody's Dancin': no critic comparison found (EWF, Trammps, Ohio Players removed); producers per the Discogs insert (Ronald Bell, Robert Bell, Dennis Thomas); confidence high (Discogs r6766809).
- Ladies' Night: Chic and Bee Gees (Apple Music editorial: "poppier and less hypnotic than Chic, but Blacker than the Bee Gees"); EWF and Commodores removed (only the band explaining why it hired a singer).
- Celebrate!: no sound comparison found (Stereogum's Chic line is about lyrics): emptied.
