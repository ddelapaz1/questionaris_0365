# Qüestionaris de Radiocomunicacions

Qüestionaris d'autoavaluació del **mòdul 0365 – Radiocomunicacions** (EE30), convertits des de bancs de preguntes de Moodle.

- Retroacció immediata amb l'explicació de cada resposta i, si n'hi ha, per què l'opció triada no és correcta.
- Nota final sobre 10 en acabar: +1 per encert, −0,25 per error (com al Moodle) i puntuació proporcional a les preguntes d'aparellar i d'ordenar.
- Preguntes, opcions i elements barrejats a cada intent.

Web: https://ddelapaz1.github.io/questionaris_0365/

Encara no hi ha cap qüestionari publicat. El de modulacions i desmodulacions (tema 1.5) és al repositori [0365_questionari_T15](https://github.com/ddelapaz1/0365_questionari_T15).

## Afegir un qüestionari nou

1. Exporta les preguntes de Moodle en format XML i desa-les a `moodle/`.
2. Si cal, escriu les explicacions a `moodle/<nom>.explicacions.json`: una llista en l'ordre de l'XML amb, per a cada pregunta, un text o bé `{"explicacio": "...", "opcions": [null, "per què no...", ...]}` amb una justificació per opció en l'ordre de l'XML (`null` per a la correcta). Si no hi és, s'aprofiten la retroacció general i la de cada opció de l'XML.
3. Genera les dades:

   ```bash
   python3 tools/moodle2quiz.py moodle/<nom>.xml data/<id>.js --id <id> --title "Títol" [--explicacions moodle/<nom>.explicacions.json]
   ```

4. Crea la carpeta `<id>/` amb un `index.html` que carregui `../assets/quiz.css`, `../data/<id>.js`, `../assets/quiz.js` i `../assets/fullscreen.js` (pots partir de la pàgina d'exemple de l'historial: `git show 50cbcaf:t1-2-modulacio/index.html`), i afegeix-ne l'enllaç a `index.html`.

Tipus de pregunta suportats: opció múltiple (resposta única), aparellament (també amb una imatge a cada element), ordenació (es tria la posició de cada element) i arrossegar sobre imatge (`ddimageortext`, que es converteix en un aparellament amb les caselles numerades sobre la imatge). Les imatges es desen a `img/<id>/`.
