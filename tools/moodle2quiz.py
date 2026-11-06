#!/usr/bin/env python3
"""Converteix un banc de preguntes de Moodle (XML) en un fitxer de dades per al qüestionari web.

Ús:
  python3 tools/moodle2quiz.py moodle/preguntes.xml data/id.js \
      --id t1-1 --title "Títol" [--explicacions moodle/preguntes.explicacions.json]

Tipus suportats: multichoice (resposta única), matching (també amb una imatge a cada element),
ordering (es converteix en un aparellament de cada element amb la seva posició) i ddimageortext
(es converteix en un aparellament sobre la imatge, amb les caselles numerades).
Les explicacions són una llista JSON amb un element per pregunta, en el mateix ordre que l'XML:
un text, o bé {"explicacio": "...", "opcions": [null, "per què no...", ...]} amb una
justificació per a cada opció en l'ordre de l'XML (null per a la correcta).
Si no se'n dona cap, s'aprofiten la retroacció general de Moodle i la de cada opció (si n'hi ha).
Les imatges de les preguntes es desen a img/<id>/.
"""
import argparse
import base64
import html
import json
import os
import re
import struct
import xml.etree.ElementTree as ET


def clean(text):
    text = text or ""
    text = re.sub(r"</p>\s*<p>", "\n", text)
    text = re.sub(r"<br\s*/?>", "\n", text)
    text = re.sub(r"<[^>]+>", "", text)
    return html.unescape(text).strip()


def image_size(data):
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        return struct.unpack(">II", data[16:24])
    i = 2  # JPEG: busca el marcador SOF
    while i < len(data):
        marker, length = data[i + 1], struct.unpack(">H", data[i + 2:i + 4])[0]
        if 0xC0 <= marker <= 0xCF and marker not in (0xC4, 0xC8, 0xCC):
            h, w = struct.unpack(">HH", data[i + 5:i + 9])
            return w, h
        i += 2 + length
    raise SystemExit("Format d'imatge no reconegut")


def save_image(node, quiz_id):
    """Desa la primera imatge referenciada al text del node (enunciat o subpregunta)
    i en retorna (ruta relativa, mida)."""
    html_text = node.findtext("text") or ""
    files = {f.get("name"): f for f in node.findall("file")}
    names = re.findall(r'@@PLUGINFILE@@/([^"]+)', html_text) or list(files)
    if not names:
        return None, None
    data = base64.b64decode(files[names[0]].text)
    rel = f"img/{quiz_id}/{names[0]}"
    os.makedirs(os.path.dirname(rel), exist_ok=True)
    with open(rel, "wb") as f:
        f.write(data)
    return "../" + rel, image_size(data)


def parse(path, quiz_id):
    questions = []
    for q in ET.parse(path).getroot().findall("question"):
        kind = q.get("type")
        if kind == "category":
            continue
        item = {
            "type": kind,
            "text": clean(q.findtext("questiontext/text")),
            "explanation": clean(q.findtext("generalfeedback/text")),
        }
        image, size = save_image(q.find("questiontext"), quiz_id)
        if image:
            item["image"] = image
        if kind == "ddimageortext":
            # cada casella de la imatge es numera de dalt a baix i es converteix en una parella
            drags = {d.findtext("no"): clean(d.findtext("text")) for d in q.findall("drag")}
            drops = sorted(q.findall("drop"), key=lambda d: (int(d.findtext("ytop")), int(d.findtext("xleft"))))
            w, h = size
            item["type"] = "matching"
            item["text"] = re.sub(r"^Arrossega\b", "Assigna", item["text"])  # al web es tria amb desplegables
            item["pairs"] = [[f"Casella {i}", drags[d.findtext("choice")]] for i, d in enumerate(drops, 1)]
            item["markers"] = [[round(int(d.findtext("xleft")) / w * 100, 2), round(int(d.findtext("ytop")) / h * 100, 2)]
                               for d in drops]
            item["distractors"] = [t for t in drags.values() if t not in {p[1] for p in item["pairs"]}]
        elif kind == "multichoice":
            if q.findtext("single") != "true":
                raise SystemExit(f"Pregunta de resposta múltiple no suportada: {item['text']}")
            answers = q.findall("answer")
            item["options"] = [clean(a.findtext("text")) for a in answers]
            item["correct"] = next(i for i, a in enumerate(answers) if float(a.get("fraction")) == 100)
            # penalització de Moodle per resposta errònia (p. ex. -25 %)
            item["penalty"] = -min(float(a.get("fraction")) for a in answers) / 100
            feedback = [clean(a.findtext("feedback/text")) for a in answers]
            if any(f for i, f in enumerate(feedback) if i != item["correct"]):
                item["optionFeedback"] = [None if i == item["correct"] else f or None
                                          for i, f in enumerate(feedback)]
        elif kind == "matching":
            subs = q.findall("subquestion")
            pairs, distractors = [], []
            for s in subs:
                term, answer = clean(s.findtext("text")), clean(s.findtext("answer/text"))
                term_image, _ = save_image(s, quiz_id) if s.findall("file") else (None, None)
                if term_image:
                    pairs.append([term_image, answer])
                    item["imageTerms"] = True
                elif term:
                    pairs.append([term, answer])
                else:
                    distractors.append(answer)
            item["pairs"], item["distractors"] = pairs, distractors
        elif kind == "ordering":
            # cada element s'aparella amb la seva posició; l'ordre correcte és el de l'XML
            steps = sorted(q.findall("answer"), key=lambda a: float(a.get("fraction")))
            item["type"] = "matching"
            item["ordering"] = True
            item["pairs"] = [[clean(a.findtext("text")), str(i)] for i, a in enumerate(steps, 1)]
            item["distractors"] = []
        else:
            raise SystemExit(f"Tipus de pregunta no suportat: {kind}")
        questions.append(item)
    return questions


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("xml")
    ap.add_argument("out")
    ap.add_argument("--id", required=True)
    ap.add_argument("--title", required=True)
    ap.add_argument("--explicacions")
    args = ap.parse_args()

    questions = parse(args.xml, args.id)
    if args.explicacions:
        with open(args.explicacions, encoding="utf-8") as f:
            explanations = json.load(f)
        if len(explanations) != len(questions):
            raise SystemExit(f"{len(explanations)} explicacions per a {len(questions)} preguntes")
        for q, e in zip(questions, explanations):
            if isinstance(e, dict):
                q["explanation"] = e["explicacio"]
                if len(e["opcions"]) != len(q["options"]) or e["opcions"][q["correct"]] is not None:
                    raise SystemExit(f"Justificacions d'opcions mal alineades: {q['text']}")
                q["optionFeedback"] = e["opcions"]
            else:
                q["explanation"] = e

    quiz = {"id": args.id, "title": args.title, "questions": questions}
    with open(args.out, "w", encoding="utf-8") as f:
        f.write("// Generat amb tools/moodle2quiz.py — no editar a mà.\n")
        f.write("window.QUIZ = " + json.dumps(quiz, ensure_ascii=False, indent=1) + ";\n")
    print(f"{len(questions)} preguntes → {args.out}")


if __name__ == "__main__":
    main()
