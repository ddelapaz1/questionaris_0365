// Motor del qüestionari: llegeix window.QUIZ (generat per tools/moodle2quiz.py)
// i el mostra pregunta a pregunta amb retroacció immediata i nota final sobre 10.
(function () {
  "use strict";

  const QUIZ = window.QUIZ;
  const app = document.getElementById("app");
  const LETTERS = "abcdefghij";
  const PASS = 5;

  let state = null;

  // ---------- utilitats ----------

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "class") node.className = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? "" : v);
    }
    for (const c of children.flat()) {
      if (c == null || c === false) continue;
      node.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const fmt = (n, d = 2) => (Math.round(n * 10 ** d) / 10 ** d).toLocaleString("ca", { maximumFractionDigits: d });
  const signed = (n) => (n > 0 ? "+" : n < 0 ? "−" : "") + fmt(Math.abs(n));

  // scroll: "top" (pantalla nova), "keep" (mateixa pregunta) o "feedback" (fa visible l'explicació)
  function show(nodes, scroll = "top") {
    const y = window.scrollY;
    app.replaceChildren(...nodes);
    if (scroll === "top") window.scrollTo({ top: 0 });
    else window.scrollTo({ top: y });
    if (scroll === "feedback") app.querySelector(".actions").scrollIntoView({ block: "nearest", behavior: "smooth" });
    const focus = app.querySelector("[data-autofocus]");
    if (focus) focus.focus({ preventScroll: true });
  }

  // ---------- puntuació ----------

  function grade(item, response) {
    const q = item.q;
    if (q.type === "multichoice") {
      const ok = response === q.correct;
      return { points: ok ? 1 : -(q.penalty || 0), status: ok ? "ok" : "ko" };
    }
    const hits = q.pairs.filter((p, i) => response[i] === p[1]).length;
    const points = hits / q.pairs.length;
    return { points, hits, status: hits === q.pairs.length ? "ok" : hits === 0 ? "ko" : "part" };
  }

  // ---------- pantalles ----------

  function intro() {
    const n = QUIZ.questions.length;
    const penalty = QUIZ.questions.find((q) => q.penalty)?.penalty || 0;
    const hasMatching = QUIZ.questions.some((q) => q.type === "matching");
    const hasOrdering = QUIZ.questions.some((q) => q.ordering);
    show([el("section", { class: "card" },
      el("p", { class: "eyebrow" }, "Qüestionari · ", n, " preguntes"),
      el("h1", {}, QUIZ.title),
      el("p", { class: "lead" },
        "Respon cada pregunta i prem «Comprova»: veuràs al moment si és correcta i per què. ",
        "En acabar les ", n, " preguntes obtindràs la nota final sobre 10."),
      el("ul", { class: "rules" },
        el("li", {}, el("span", { class: "k ok" }, "+1"), el("span", {}, el("b", {}, "Resposta correcta."))),
        penalty ? el("li", {}, el("span", { class: "k ko" }, signed(-penalty)),
          el("span", {}, el("b", {}, "Resposta incorrecta."), " Com al Moodle, els errors resten: si no ho saps, pensa-hi bé.")) : null,
        hasMatching ? el("li", {}, el("span", { class: "k part" }, "0 – 1"),
          el("span", {}, el("b", {}, hasOrdering ? "Preguntes d'aparellar i d'ordenar." : "Preguntes d'aparellar."), " Puntuen la part proporcional de parelles correctes.")) : null,
        el("li", {}, el("span", { class: "k" }, "/ 10"),
          el("span", {}, el("b", {}, "Nota final."), " Punts obtinguts ÷ ", n, " × 10 (mínim 0)."))),
      el("div", { class: "actions" },
        el("button", { class: "btn", onclick: start, "data-autofocus": true }, "Comença el qüestionari →")))]);
  }

  function start() {
    state = {
      index: 0,
      items: shuffle(QUIZ.questions).map((q) => ({
        q,
        order: q.type === "multichoice" ? shuffle(q.options.map((_, i) => i)) : null,
        // a les d'ordenar, les posicions es mostren en ordre i el que es barreja són els elements
        choices: q.type !== "matching" ? null
          : q.ordering ? q.pairs.map((p) => p[1])
          : shuffle(q.pairs.map((p) => p[1]).concat(q.distractors || [])),
        rows: q.type === "matching" ? shuffle(q.pairs.map((_, i) => i)) : null,
        response: q.type === "matching" ? q.pairs.map(() => null) : null,
        result: null,
      })),
    };
    question();
  }

  function progressBar() {
    const total = state.items.length;
    const done = state.items.filter((it) => it.result).length;
    return el("div", { class: "progress" },
      el("span", { class: "num" }, "Pregunta ", el("b", {}, state.index + 1), " de ", total),
      el("div", { class: "bar", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": total, "aria-valuenow": done },
        el("div", { class: "fill", style: `width:${(done / total) * 100}%` })));
  }

  function question(scroll = "top") {
    const item = state.items[state.index];
    const q = item.q;
    const checked = !!item.result;
    const isLast = state.index === state.items.length - 1;

    const checkBtn = el("button", { class: "btn", onclick: check, disabled: !ready(item) }, "Comprova");
    const nextBtn = el("button", { class: "btn", onclick: next, "data-autofocus": checked }, isLast ? "Veure la nota →" : "Següent →");

    let body;
    if (q.type === "multichoice") {
      body = el("ul", { class: "opts" }, item.order.map((optIndex, pos) => {
        let cls = "opt";
        if (checked) {
          if (optIndex === q.correct) cls += " is-correct";
          else if (optIndex === item.response) cls += " is-wrong";
          else cls += " is-dim";
        }
        return el("li", {}, el("button", {
          class: cls,
          disabled: checked,
          "aria-pressed": String(item.response === optIndex),
          onclick: () => { item.response = optIndex; question("keep"); },
        }, el("span", { class: "letter", "aria-hidden": "true" }, LETTERS[pos]), el("span", {}, q.options[optIndex])));
      }));
    } else {
      body = el("div", { class: "match" + (q.imageTerms ? " img-terms" : "") }, item.rows.map((i) => {
        const [term, answer] = q.pairs[i];
        const id = `m${i}`;
        const right = item.response[i] === answer;
        const select = el("select", {
          id,
          disabled: checked,
          onchange: (e) => {
            item.response[i] = e.target.value || null;
            checkBtn.disabled = !ready(item);
          },
        },
          el("option", { value: "" }, q.ordering ? "Posició…" : "Tria una opció…"),
          item.choices.map((c) => el("option", { value: c, selected: item.response[i] === c }, q.ordering ? `${c}a posició` : c)));
        return el("div", { class: "match-row" + (checked ? (right ? " is-correct" : " is-wrong") : "") },
          el("label", { class: "term", for: id }, termNode(q, term)),
          select,
          checked && !right ? el("div", { class: "fix" }, q.ordering ? `${answer}a posició` : answer) : null);
      }));
    }

    show([
      progressBar(),
      el("section", { class: "card" },
        el("p", { class: "eyebrow" }, q.markers ? "Relaciona cada casella de la imatge"
          : q.ordering ? "Ordena: tria la posició de cada element"
          : q.type === "matching" ? "Relaciona" : "Tria la resposta correcta"),
        el("h2", {}, q.text),
        figure(q),
        body,
        checked ? feedback(item) : null,
        el("div", { class: "actions" },
          el("span", { class: "hint" }, checked ? "Prem Retorn per continuar" : q.type === "multichoice" ? "Tecles a–e per triar · Retorn per comprovar" : ""),
          checked ? nextBtn : checkBtn))], scroll);
  }

  // imatge de la pregunta; si en té, les caselles numerades es dibuixen a sobre (en % de la imatge)
  function figure(q) {
    if (!q.image) return null;
    return el("figure", { class: "qimg" },
      el("div", { class: "frame" },
        el("img", { src: q.image, alt: "" }),
        (q.markers || []).map(([x, y], i) =>
          el("span", { class: "marker", style: `left:${x}%;top:${y}%`, "aria-hidden": "true" }, i + 1))));
  }

  // element de l'esquerra d'un aparellament: un text o, si la pregunta en porta, una imatge
  function termNode(q, term, cls) {
    return q.imageTerms ? el("img", { class: cls, src: term, alt: "" }) : term;
  }

  function ready(item) {
    return item.q.type === "multichoice" ? item.response != null : item.response.every((r) => r);
  }

  function feedback(item) {
    const { q, result } = item;
    const title = { ok: "Correcte!", ko: "Incorrecte", part: "Parcialment correcte" }[result.status];
    const detail = q.type !== "matching" ? ""
      : q.ordering ? ` · ${result.hits} de ${q.pairs.length} en la posició correcta`
      : ` · ${result.hits} de ${q.pairs.length} parelles`;
    return el("div", { class: `feedback ${result.status}`, role: "status" },
      el("p", { class: "verdict" },
        el("span", {}, title, detail),
        el("span", { class: "pts" }, signed(result.points), " punt", Math.abs(result.points) === 1 ? "" : "s")),
      q.type === "multichoice" && result.status === "ko" ? whyNot(q, item.response, "why") : null,
      q.type === "multichoice" && result.status === "ko"
        ? el("p", { class: "answer" }, "La resposta correcta és: ", el("b", {}, q.options[q.correct]))
        : null,
      q.explanation ? el("p", { class: "exp" }, q.explanation) : null);
  }

  // justificació de per què l'opció triada no és la correcta (si n'hi ha)
  function whyNot(q, response, cls) {
    const why = q.optionFeedback && q.optionFeedback[response];
    return why ? el("p", { class: cls }, el("b", {}, "Per què no: "), why) : null;
  }

  function check() {
    const item = state.items[state.index];
    if (item.result || !ready(item)) return;
    item.result = grade(item, item.response);
    question("feedback");
  }

  function next() {
    if (state.index < state.items.length - 1) {
      state.index++;
      question();
    } else {
      results();
    }
  }

  function results() {
    const items = state.items;
    const total = items.length;
    const raw = items.reduce((s, it) => s + it.result.points, 0);
    const mark = Math.max(0, raw) / total * 10;
    const count = (s) => items.filter((it) => it.result.status === s).length;
    const pass = mark >= PASS;
    const message = mark >= 9 ? "Excel·lent! Domines el tema."
      : mark >= 7 ? "Molt bé! Repassa les preguntes que has fallat."
      : mark >= PASS ? "Aprovat. Revisa les explicacions de les errades per consolidar-ho."
      : "No arribes al 5. Repassa el tema i torna-ho a provar.";

    state.finished = true;

    show([el("section", { class: "card" },
      el("p", { class: "eyebrow" }, "Resultat · ", QUIZ.title),
      el("div", { class: "score " + (pass ? "pass" : "fail") },
        el("span", { class: "big" }, fmt(mark)),
        el("span", { class: "of" }, "/ 10")),
      el("p", { class: "verdict-text" }, message),
      el("div", { class: "stats" },
        el("div", { class: "stat ok" }, el("div", { class: "n" }, count("ok")), el("div", { class: "l" }, "correctes")),
        el("div", { class: "stat ko" }, el("div", { class: "n" }, count("ko")), el("div", { class: "l" }, "incorrectes")),
        count("part") ? el("div", { class: "stat part" }, el("div", { class: "n" }, count("part")), el("div", { class: "l" }, "parcials")) : null,
        el("div", { class: "stat" }, el("div", { class: "n" }, fmt(raw)), el("div", { class: "l" }, "punts de ", total))),
      el("div", { class: "actions" },
        el("a", { class: "btn ghost", href: "../", style: "text-decoration:none" }, "Altres qüestionaris"),
        el("button", { class: "btn", onclick: start, "data-autofocus": true }, "Torna-ho a provar")),
      el("div", { class: "review" },
        el("h3", {}, "Revisió de les preguntes"),
        items.map((it, i) => reviewItem(it, i))))]);
  }

  function reviewItem(item, i) {
    const { q, result, response } = item;
    let answerInfo;
    if (q.type === "multichoice") {
      answerInfo = result.status === "ok"
        ? el("p", {}, "La teva resposta: ", el("b", { class: "ok" }, q.options[response]))
        : [el("p", {}, "La teva resposta: ", el("b", { class: "ko" }, q.options[response])),
           whyNot(q, response, null),
           el("p", {}, "Correcta: ", el("b", { class: "ok" }, q.options[q.correct]))];
    } else {
      const label = (a) => (q.ordering ? `${a}a posició` : a);
      answerInfo = el("ul", { class: q.imageTerms ? "img-terms" : null }, q.pairs.map(([term, answer], j) =>
        el("li", {}, termNode(q, term, "term-thumb"), " → ", response[j] === answer
          ? el("b", { class: "ok" }, label(answer))
          : [el("b", { class: "ko" }, label(response[j])), " (correcta: ", el("b", { class: "ok" }, label(answer)), ")"])));
    }
    return el("details", { class: result.status, open: result.status !== "ok" },
      el("summary", {},
        el("span", { class: "q" }, `${i + 1}. ${q.text}`),
        el("span", { class: "pts" }, signed(result.points))),
      el("div", { class: "body" },
        q.image ? el("img", { class: "thumb", src: q.image, alt: "" }) : null,
        answerInfo, q.explanation ? el("p", {}, q.explanation) : null));
  }

  // ---------- teclat ----------

  document.addEventListener("keydown", (e) => {
    if (!state || state.finished || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target.tagName === "SELECT") return;
    const item = state.items[state.index];
    if (e.key === "Enter") {
      if (e.target.tagName === "BUTTON" && e.target.classList.contains("opt") === false) return; // el botó ja respon
      e.preventDefault();
      item.result ? next() : check();
      return;
    }
    if (item.result || item.q.type !== "multichoice") return;
    if (e.key.toLowerCase() === "f") return; // F: pantalla completa (fullscreen.js)
    const pos = LETTERS.indexOf(e.key.toLowerCase());
    const num = Number(e.key) - 1;
    const idx = pos >= 0 ? pos : num >= 0 ? num : -1;
    if (idx >= 0 && idx < item.order.length) {
      item.response = item.order[idx];
      question("keep");
    }
  });

  window.addEventListener("beforeunload", (e) => {
    if (state && !state.finished && state.items.some((it) => it.result)) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  intro();
})();
