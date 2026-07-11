import { profile } from "@/data/profile";

export type CvFormat = "normal" | "ats" | "rec";

const FORMAT_CLASS: Record<CvFormat, string> = {
  normal: "cv-print-normal",
  ats: "cv-print-ats",
  rec: "cv-print-rec",
};

const ALL_FORMAT_CLASSES = Object.values(FORMAT_CLASS);

export function applyPrintMode(format: CvFormat) {
  document.body.classList.remove(...ALL_FORMAT_CLASSES);
  document.body.classList.add(FORMAT_CLASS[format]);
  document.body.dataset.cvMode = format;
}

export function clearPrintMode() {
  document.body.classList.remove(...ALL_FORMAT_CLASSES);
  delete document.body.dataset.cvMode;
}

/** Abre el diálogo de impresión con el documento seleccionado. */
export function printCv(format: CvFormat) {
  const previousTitle = document.title;
  document.title = profile.displayName;
  applyPrintMode(format);

  let cleaned = false;
  let printEngaged = false;
  let engagedAt = 0;

  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    document.title = previousTitle;
    clearPrintMode();
  };

  const mediaQuery = window.matchMedia("print");

  const onPrintChange = (event: MediaQueryListEvent) => {
    if (event.matches) {
      printEngaged = true;
      engagedAt = Date.now();
      return;
    }

    if (!printEngaged) return;

    // Android a veces dispara matches=false al abrir el diálogo
    if (Date.now() - engagedAt < 1500) return;

    mediaQuery.removeEventListener("change", onPrintChange);
    setTimeout(cleanup, 400);
  };

  mediaQuery.addEventListener("change", onPrintChange);

  window.setTimeout(() => {
    mediaQuery.removeEventListener("change", onPrintChange);
    cleanup();
  }, 120_000);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.print();
    });
  });
}
