/** Altura del appbar fijo (h-16 = 64px). */
const HEADER_OFFSET = 64;

/** Desplazamiento suave a una sección del landing (fiable con hash y pushState). */
export function scrollToSection(href: string) {
  const id = href.replace("#", "");

  if (id === "inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const el = document.getElementById(id);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  }

  const hash = href.startsWith("#") ? href : `#${id}`;
  window.history.pushState(null, "", hash);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}
