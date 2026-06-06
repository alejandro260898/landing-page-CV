import { profile } from "@/data/profile";

export type CvFormat = "normal" | "ats";

function applyPrintVisibility(format: CvFormat) {
  const normal = document.getElementById("cv-print");
  const ats = document.getElementById("cv-print-ats");
  if (!normal || !ats) return;

  const show = format === "normal" ? normal : ats;
  const hide = format === "normal" ? ats : normal;

  document.body.classList.remove("cv-print-normal", "cv-print-ats");
  document.body.classList.add(format === "normal" ? "cv-print-normal" : "cv-print-ats");
  document.body.dataset.cvMode = format;

  show.style.setProperty("display", "block", "important");
  show.style.setProperty("visibility", "visible", "important");
  hide.style.setProperty("display", "none", "important");
  hide.style.setProperty("visibility", "hidden", "important");
}

function clearPrintVisibility() {
  const normal = document.getElementById("cv-print");
  const ats = document.getElementById("cv-print-ats");

  document.body.classList.remove("cv-print-normal", "cv-print-ats");
  delete document.body.dataset.cvMode;

  for (const el of [normal, ats]) {
    if (!el) continue;
    el.style.removeProperty("display");
    el.style.removeProperty("visibility");
  }
}

/** Abre el diálogo de impresión con el CV seleccionado. */
export function printCv(format: CvFormat) {
  const previousTitle = document.title;
  document.title = profile.displayName;

  applyPrintVisibility(format);

  const cleanup = () => {
    document.title = previousTitle;
    clearPrintVisibility();
  };

  window.addEventListener("afterprint", cleanup, { once: true });

  // Doble rAF: en móvil los estilos deben aplicarse antes del snapshot de impresión
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.print();
    });
  });
}
