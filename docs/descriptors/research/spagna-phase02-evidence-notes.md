# Spagna — Fandome Phase 02: evidence and methodology

Research date: 27 October 2026. Repository branch: `descriptors` (read only). Research corpus: original/archived CD releases, track-level Sony/Epic credits and retrospective music journalism.

## Scope

Four **original studio albums**: *Siamo in due* (1995), *Lupi solitari* (1996), *Indivisibili* (1997), *Domani* (2000). These follow the four studio albums in Phase 01. *E che mai sarà – Le mie più belle canzoni* (1998) is excluded as a hits compilation **even though it adds five new songs**. The 2001 *La nostra canzone* is an all-new studio-recorded set of cover performances (different from a reused-tracks compilation); assess for Phase 03.

## Case-sensitive sources and uncertainty

### Siamo in due (1995)
- Primary anchor: Epic/Sony track-level metadata at https://www.qobuz.com/es-es/album/siamo-in-due-ivana-spagna/0888880526984; Valsiglio and Marco Marati named producers, not Fio Zanotti or Theo merely because they perform/arrange.
- Instruments: piano/keyboards (Valsiglio, Fio Zanotti, Theo), guitar (Gianni Salvatori), bass (Cesare Chiodo), live drums (Massimo Pacciani), saxophone (Stefano Cantini). Electronic programming explicitly Lele Barbera / Theo. Not an all-synth album despite the discographic synth-pop genre tag.
- Italian language and shift toward ballads, dramatic Sanremo pop supported by https://www.fanclubivanaspagna.com/IvanaSpagna/musica_e_parole.htm. *Il cerchio della vita* is the Italian recording of a Disney/Elton John–Tim Rice song; this is **a cover**, not documented Elton John artistic influence on the album.
- Source https://musicbase.net/siamo-in-due describes a subset of styles, with less weight assigned to synth-pop than the dominant pop classification from Sony/Qobuz.

### Lupi solitari (1996)
- Direct 10-track Sony/Epic per-song credits: https://www.qobuz.com/be-nl/album/lupi-solitari-spagna/5099748382320. Guitar players Phil Palmer, Marco Soncini, Gianni Salvatori, Riccardo Galardini; bass Marco Zanoni and Cesare Chiodo; drums Gianbattista Merlinzoli and Massimo Pacciani; Theo keyboards/programming; final piece Arriverà has Spagna piano.
- Ivana Spagna credited **artistic and executive producer**; Ottavio Bacciocchi is the production director, not automatically an album-wide creative producer. Some external infoboxes conflate roles; prefer original credits.
- https://musicbase.net/lupi-solitari labels soft-rock / ballad / Europop / AOR. AOR is placed last because broad album sounds do not necessarily follow one FM-rock formula.
- Mood/energy/groove are Fandome editorial 0–5 estimates for album averages (not measurements).

### Indivisibili (1997)
- Original Italian disc: Epic EPC 487583 2. Ten compositions plus *Mercedes Benz* as hidden cover within final track: https://recordsale.de/en/artists/ivana-spagna/albums/indivisibili and https://www.hitparadeitalia.it/disco_old/spagnai_a.htm.
- Spagna artistic/executive producer; Ottavio Bacciocchi production director; Theo arrangements. Pino Palladino/Paolo Costa bass; Steve Ferrone/Lele Melotti/Robby Piccione drums; Phil Palmer/Marco Soncini guitars; keyboards and programming Theo and Claudio Tarantola; sax by Michael Grassi/Piero Vallero. Spagna piano/harmonica: https://it.wikipedia.org/wiki/Indivisibili_%28album%29.
- Instrument uncertainty: the official **fan archive** claims Spagna plays **accordion** on *Cipolle e fragole* at https://www.fanclubivanaspagna.com/IvanaSpagna/musica_e_parole.htm; separate secondary personnel list assigns her **harmonica** at https://it.wikipedia.org/wiki/Indivisibili_%28album%29. Both are listed as documented at different tracks, but no primary sleeve scan verified their individual appearances. Flag for manual review.
- *Mercedes Benz* is a Janis Joplin recording of a song credited to Joplin, Michael McClure and Bob Neuwirth; a **cover is not automatically a direct artistic influence**. `influenced_by` intentionally empty.
- Apple Music's 1999 digital display date **does not change the original 1997 release year**; https://recensiamomusica.com/ivana-spagna-venticinque-anni-di-indivisibili/ says 10 April 1997.
- `poprock` classification is a cautious stylistic extrapolation (full-band rhythm section), not a source naming this genre for the whole album; remove if strict direct-only genre policy is enforced.

### Domani (2000)
- Original Epic CD, 13 songs, producer credit to Ivana and Theo Spagna: https://www.hitparadeitalia.it/disco_old/spagnai_a.htm, https://www.ibs.it/domani-cd-ivana-spagna/e/5099749765023 and https://www.hitparade.ch/song/Spagna/Domani-444948.
- Source disagreement about exact original release date: Italian CD retail page gives 22 Feb 2000, European chart album 13 March 2000. **Year 2000 is secure; no unsupported single day is claimed**.
- The professional-archive fanclub at https://www.fanclubivanaspagna.com/IvanaSpagna/musica_e_parole.htm distinguishes dance on *Un po’ d’amore*, Latin rhythms on *Mi amor*, orchestral pop on *Con il tuo nome*, and melodic tracks elsewhere. Genres after `pop` are **specific track-level colors**: not claims that the whole album is Latin, orchestral or dance.
- Conservatively include `guitar|saxophone`: Phil Palmer is among credited players and is a known session guitarist (https://www.allmusic.com/artist/mn0000331733); a detailed fan account at https://danielagalli.ru/mirror/dhany.ru/disco/albums/domani/index.html attributes guitar to Marco Soncini and saxophone to Alle Benassi. **Other listed players do not establish their exact instrumental roles on this album**; instruments deliberately omitted rather than inferred by profession.
- *Claire de lune* adapts Debussy's composition; adaptation/quotation is not evidence that Claude Debussy directly influenced the album as declared by artist or producer. `influenced_by` empty.
- `language=it` describes the dominant language. *Messages of Love* appears in the track list but English-language sung lyrics have **not** been independently verified here; a track's English title alone does not justify album-level `en`.
- `production` empty for Domani because no specific music-technology machine, digital technique or production effect is documented at album level. Arranging personnel or electronic timbres are not enough to assert programming.

## Shared interpretation

- `sounds_like` is an original editorial similarity suggestion in this batch (contemporary vocal-oriented Italian melodic pop), **not** a claim that named musicians inspired the albums. Avoid attributing influence to producer collaborators or covered songwriters.
- `influenced_by` left blank in all four records, as no directly attested album-specific declared influence was found.
- Values 0–5 are independent Fandome estimates anchored to the provided guide; do not treat them as listening lab measurements.
- `status=draft`; no independent second reviewer. `confidence=medium` where instrumentation or genre attribution carries caveats. Genres may refer to narrower stylistic contributions rather than an identical identity on every track.
- Reception importance based on career context; `acclaim` left blank for lack of broadly comparable qualified critics. `mainstream=3` denotes authored/pop work, **not sales**.

## Source quality

Sony/Epic credits delivered by Qobuz and original-release catalogues: strongest for personnel/years. Hit Parade Italia: strong detailed historical discographic transcription. Original CD listings: track identities and edition. Fanclub: useful for sonic color and career events, not primary proof for individual machines. Journalistic reviews: only one strong album review found for *Indivisibili*; not sufficient for four-album acclaim comparison. All web links duplicated in `spagna_phase02_sources.csv`.
