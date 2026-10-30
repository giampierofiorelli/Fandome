# CLAUDE IMPORT — Gabriella Ferri, FASE 01 (solo nuove righe)

**Repository:** `giampierofiorelli/Fandome`, branch **`descriptors`**, controllo 30 ottobre 2026 (lettura soltanto).

**ID artista esistente**: `gabriellaferri` (catalog.ts); `seed.ts` non la elenca. `docs/descriptors/gabriellaferri.csv` non esiste ancora (404); la ricerca dei landmark non ha righe su Gabriella Ferri. Il catalogo contiene l'artista ma **zero album**. Non creare un secondo artista, non modificare righe di altri artisti.

## Questa fase: 4 album da aggiungere al catalogo, 4 descrittori nuovi

| album_id esatto | titolo | anno | tipo |
|---|---|---:|---|
| `gabriellaferri-gabriellaferri` | Gabriella Ferri | 1966 | studio |
| `gabriellaferri-gabriellaferri1970` | Gabriella Ferri | 1970 | studio |
| `gabriellaferri-lassatecepassa` | ...Lassatece passà | 1970 | studio |
| `gabriellaferri-esefumaronoazaza` | ...E se fumarono a Zazà | 1971 | studio |

**Collisione titoli:** due album omonimi; il 1966 mantiene `gabriellaferri-gabriellaferri`; il 1970, successivo, richiede il suffisso **1970**, esattamente come la logica `slug` del catalogo. Gli accenti del titolo non compaiono nell'ID. Non toccare gli ID esistenti di altri artisti. **Tutte e quattro le voci sono da aggiungere in `catalog.ts`.** Importare solo dopo aver verificato nuovamente che non siano state aggiunte nel frattempo.

## Discografia completa degli album in studio (per pianificazione/audit)

1. *Gabriella Ferri* (1966), Jolly/SAAR.
2. *Gabriella Ferri* (1970), RCA.
3. *...Lassatece passà* (1970), RCA.
4. *...E se fumarono a Zazà* (1971), RCA.
5. *L'amore è facile, non è difficile...* (1972).
6. *Sempre* (1973).
7. *Remedios* (1974).
8. *Mazzabubù* (1975).
9. *...E adesso andiamo a incominciare* (1977).
10. *Gabriella* (1981).
11. *Nostargia* (1987).
12. *Ritorno al futuro* (1997).
13. *Canti diVersi* (2000).

Fonti discografiche: https://www.ondarock.it/monografie/gabriellaferri/ ; https://musicbrainz.org/artist/4c4520be-0b34-4299-bd19-56b82f52abea ; https://www.rockol.it/artista/gabriella-ferri . **Non aggiungere automaticamente l'intera lista in questa fase**: i restanti nove titoli sono oggetto delle fasi successive e andranno verificati individualmente prima della loro importazione. Dettaglio ID/audit nel file CSV allegato.

**Edizioni escluse, perché già documentate in altra forma o fuori perimetro:** *Roma mia bella* è un'edizione alternativa/ristampa del 1966, **non** un altro album in studio; *Roma canta* (1969, anche con brani del duo Gabriella Ferri e Luisa De Santis) raccoglie precedenti registrazioni; altre raccolte, compilation e dischi dal vivo sono esclusi. *Canta en Español* appare con date divergenti nei cataloghi digitali, e include materiale pubblicato dopo il 1970; non trasformarlo in studio album del 1970 senza verifica delle matrici e delle date. Il duo precedente non va inventariato sotto la carriera solista della cantante.

## Metadati artista

L'artista **esiste** e il codice scena attuale è `IT it 1960 folk`. Non cambiare la scena solo per l'uso del dialetto napoletano in un album: le lingue del descrittore sono album-specifiche. Tagline esistente in catalogo: `The voice of Roman song`. Gabriella Ferri è **deceduta il 3 aprile 2004**: https://tg24.sky.it/spettacolo/musica/2024/04/03/gabriella-ferri-morte-anniversario . Non segnalare concerti attuali dell'artista.

**ARTIST INFLUENCES (solo fase 01):** nessun nome di musicista verificato da una dichiarazione attribuibile a Ferri, a suoi collaboratori nella produzione o a familiari come portavoce dell'artista per **la musica in generale**. L'intervista alla sorella documenta una ricerca negli archivi del folklore romano e la trasmissione familiare dei canti; compositori di canzoni tradizionali, autori reinterpretati e artisti accostati dai critici **non** sono automaticamente influenze: https://www.patriaindipendente.it/interviste/voce-de-roma/ . Non riempire per supposizione.

## Tokens da aggiungere

- **Genere `stornello`** — forma tradizionale dello stornello romano, esplicitamente descritta nei resoconti dei brani del debutto; suggerire parent `folk`, `neapolitansong` **non** è un parent appropriato per il genere romano. Source: https://www.ondarock.it/monografie/gabriellaferri/ e intervista Patria Indipendente.
- **Genere `psychedelicfolkpop`** — letteralmente *folk pop psichedelico*, definizione OndaRock di *I Close My Eyes* (1970); suggerire parents `folkpop`, `psychedelicpop`, `psychedelicfolk` dove presenti. Track-specific, non descrive tutto il disco.
- **Strumenti nuovi:** nessuno; `mallets` rappresenta il vibrafono effettivamente nominato nel 1970.
- **Produzione nuova:** nessuna; `choirvocals` e `scatsinging` sono già token validi.

La parola `stornello` non va sostituita con `folk` perché sono documentati sia il genere specifico sia quello più ampio. Evitare di inventare `tammurriata` per una canzone soltanto in virtù del titolo. Altri token usati nelle righe sono già previsti nelle liste del repo.

## Crediti e controversie (dettaglio nel file evidence-notes)

- **1966:** `Gianni Marchetti` è creditato *producer* nell'archivio dell'etichetta Jolly/SAAR. Sergio Balloni è direttore di produzione, ruolo distinto. La traccia comparata a Rosa Balistreri pesa **1/12** e non rappresenta un'influenza.
- **1970 (omonimo RCA):** `Roberto Formentini` è produttore secondo i crediti originali; i direttori d'orchestra e arrangiatori **non** diventano co-produttori.
- **1970 (...Lassatece):** Giacomo Simonelli è l'arrangiatore, **non** il produttore; senza credito verificabile il campo `producers` resta vuoto.
- **1971:** Guido e Maurizio De Angelis risultano **arrangiatori**, Roberto Formentini coordinatore di progetto; nessuno di questi ruoli prova chi ha prodotto il disco. `producers` vuoto.
- **Voce e strumenti:** solo elementi espressamente descritti per la registrazione; mai dedotti dalla tradizione romanesca/napoletana. Alcune scale electronic restano intenzionalmente vuote per insufficienza di documentazione.
- **Landmark**: 1966 e 1971 segnati `1` per il ruolo di prima formulazione della sua identità interpretativa e di successiva identificazione popolare con la rilettura teatrale napoletana, documentate dal critico OndaRock e da Rai Teche. Gli altri due `0`.

## Co-billing

**Nessun album incluso in questa fase è co-billed.** La precedente collaborazione discografica con Luisa De Santis non attribuisce all'artista un credito aggiuntivo sui quattro album solisti. Per l'album del 1977 potrebbero esserci edizioni con il gruppo Pandemonium; verificare nel corso della fase successiva prima di annotare in `coBilled.ts`.

## Contenuto esatto dell'archivio

1. `CLAUDE_IMPORT.md`: presente nota operativa.
2. `gabriellaferri_phase01_rows_ONLY.csv`: **4 nuove righe**, 27 colonne.
3. `gabriellaferri_phase01_sources.csv`: fonti identificabili e link di lavoro.
4. `gabriellaferri_phase01_genre_evidence.csv`: una prova e una portata per ciascun genere, anche quelli di singole tracce.
5. `gabriellaferri_phase01_evidence-notes.md`: scale, fonti, crediti e disaccordi per album.
6. `gabriellaferri_phase01_catalog-audit.csv`: stato catalogo e pianificazione dell'intera discografia.

**Prossima fase 02**: *L'amore è facile, non è difficile...* (1972), *Sempre* (1973), *Remedios* (1974), *Mazzabubù* (1975). Mai reiterare le righe delle fasi precedenti.
