DEV CHALLENGE
===============================

### Test di sviluppo

Lo scopo della prova è realizzare una semplicissima webapp. Così semplice che è funzionalmente inutile!

### Task

L’interfaccia è fatta da una sola pagina HTML.

Sì al CSS, ma bastano piccole rifiniture grafiche, importante che si utilizzino i DIV e che ci si attenga alla visualizzazione mobile first.

La pagina HTML elenca gli ordini disposti per data.

La tupla ordine contiene la data dell'ordine e nome del cliente, nessun altro dato.

La pagina HTML contiene una select che permette di cambiare l'ordinamento sulla data: "newest first" o "oldest first".

Al cambio dell’ordinamento, la pagina ricarica la lista degli ordini via AJAX, comunicando con un endpoint REST.

L’endpoint REST recupera i dati dal database restituendoli nell'ordinamento richiesto.

Il database è MySQL con una sola tabella, contenente i soli campi data e nome cliente.

Proibiti frameworks backend e ORM.

Permessi packet-manager (Composer, npm) e framework javascript frontend (jQuery, React).

Questa app dovrà essere espansa in futuro con nuove funzionalità, è dunque importante separare bene gli interessi in modo che sia pronta per essere evoluta.
