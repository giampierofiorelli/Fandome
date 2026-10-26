# Franco Battiato — musician influences audit (26 October 2026)

This is a supplementary, read-only research package for Fandome. It contains ONLY artist-influence evidence and album-level influence suggestions. It DOES NOT repeat the 27-column Phase 01 album rows or mutate the earlier ZIP.

## Included files
- `battiato_artist_influences.csv`: musician/group influences identified in direct artist statements, collaborator interviews or criticism, with scope and uncertainties.
- `battiato_artist_influences_sources.csv`: one row per source and claim, with working public URLs and strength assessment.
- `battiato_phase01_influenced_by_ONLY.csv`: current Phase 01 values and cautious recommendations; album ID keys match the Phase 01 ZIP.

## Decision notes
1. **Stockhausen is contested as a SONIC influence.** In a 2007 interview Battiato says musicians hearing his early work identified Stockhausen-like aspects; he credits the later encounter with motivating study of composition. Roberto Juri Camisasca independently identifies the influence. But Stefano Pio, who witnessed Battiato and Giusto Pio discussing music, explicitly denies direct musical influence. Therefore attach a contested / period-level provenance note, never a universal 'proven disciple' narrative.
2. **Chronology**: Battiato says he met Stockhausen in Milan in 1972 and gave him *Pollution*; a 2013 interview dates the invitation to Stockhausen's home and teaching episode to **1975**. OndaRock's implication of private lessons before *Sulle corde di Aries* (1973) conflicts with this. Influence can precede a personal meeting, but the later instruction cannot cause an earlier album.
3. **Bach is direct borrowing**: Rockol identifies Bach's Orchestral Suite No. 3 on *Fetus*, with a presence in 'Meccanica' and inspiration of 'Anafase'. Treat this as directly supported on those tracks; not a blanket assignment to other albums.
4. **Cage**: Camisasca identifies an early-period influence; OndaRock calls Clic's particular collages Cage-like. This yields a medium-confidence proposed addition to *Clic*'s `influenced_by` only, not across every album.
5. **MEV**: Stefano Pio says Battiato listened to and compared his early electronic collage work with MEV. This is relevant at artist level, but no particular phase01 record is tied by date or track. The same recollection mentions a second 'M&M' collective whose identity is unresolved. MEV originated in Rome, contrary to how the geographical association is phrased there. Do not silently expand 'M&M' to 'AMM'.
6. **Bob Dylan** belongs to the pre-1970 protest-song phase. **Giusto Pio** becomes a direct teacher and collaborator around 1976–77 and belongs to later phases. Do not assign them to any of these four records.
7. **Exclude unsupported album-level influences**: Terry Riley, Can, Pink Floyd, Tangerine Dream and Brian Eno are valid critics' comparisons or musicians Battiato played alongside, not demonstrated direct sources for Phase01 albums. Aldous Huxley shaped the *Fetus* concept but is a writer, not a musician, and so not in `influenced_by`.

## Import guidance
Review `battiato_phase01_influenced_by_ONLY.csv` before editing the already-delivered Phase 01 CSV. The proposed John Cage addition to Clic is medium confidence; this file does not instruct automatic rewriting. Keep detailed disagreements in the evidence notes and provenance table rather than treating influence as certainty.
