"use client";

import { useCallback, useRef } from "react";
import { useTheme } from "next-themes";

/**
 * Devuelve { buttonRef, toggle }.
 * Al llamar toggle() con un clic el cambio de tema se revela
 * mediante una expansión circular (clip-path) que nace desde el botón,
 * usando la View Transitions API si está disponible.
 */
export function useThemeTransition() {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDark = resolvedTheme === "dark";

  const toggle = useCallback(() => {
    const next = resolvedTheme === "dark" ? "light" : "dark";

    /* Fallback: sin soporte o reduced-motion → cambio directo */
    const supportsVT = "startViewTransition" in document;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsVT || reducedMotion) {
      setTheme(next);
      return;
    }

    /* Posición del botón como origen de la animación */
    const btn = buttonRef.current;
    const x = btn ? btn.getBoundingClientRect().left + btn.offsetWidth / 2 : window.innerWidth / 2;
    const y = btn ? btn.getBoundingClientRect().top + btn.offsetHeight / 2 : 0;

    /* Radio hasta la esquina más lejana */
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);
    document.documentElement.style.setProperty("--vt-r", `${endRadius}px`);
    document.documentElement.setAttribute("data-vt-theme", next);

    const transition = document.startViewTransition(() => {
      setTheme(next);
    });

    transition.ready.catch(() => {
      /* Si la transición falla no hay efecto secundario */
    });
  }, [resolvedTheme, setTheme]);

  return { buttonRef, toggle, isDark };
}
