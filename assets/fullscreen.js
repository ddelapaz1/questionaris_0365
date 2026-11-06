// Botó de pantalla completa (pissarra digital): amaga la barra d'adreces en projectar.
// Drecera: F. Igual que el botó del portal ddelapazhub.
(function () {
  "use strict";
  const btn = document.getElementById("btn-fs");
  const root = document.documentElement;
  if (!btn || !(root.requestFullscreen || root.webkitRequestFullscreen)) return;

  const fsEl = () => document.fullscreenElement || document.webkitFullscreenElement;
  const toggle = () => {
    if (fsEl()) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    else (root.requestFullscreen || root.webkitRequestFullscreen).call(root);
  };
  const sync = () => {
    const on = !!fsEl();
    btn.classList.toggle("is-fs", on);
    btn.setAttribute("aria-label", on ? "Surt de la pantalla completa" : "Pantalla completa");
    btn.title = on ? "Surt de la pantalla completa (F o Esc)" : "Pantalla completa (F)";
  };

  btn.hidden = false;
  btn.addEventListener("click", toggle);
  document.addEventListener("fullscreenchange", sync);
  document.addEventListener("webkitfullscreenchange", sync);
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === "f" || e.key === "F") toggle();
  });
})();
