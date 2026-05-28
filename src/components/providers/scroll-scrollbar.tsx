"use client";

import { useEffect } from "react";

const SCROLL_IDLE_MS = 900;

export function ScrollScrollbar() {
  useEffect(() => {
    const root = document.documentElement;
    let idleTimer: ReturnType<typeof setTimeout>;

    const showScrollbar = () => {
      root.classList.add("is-scrolling");
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        root.classList.remove("is-scrolling");
      }, SCROLL_IDLE_MS);
    };

    window.addEventListener("scroll", showScrollbar, { passive: true });
    return () => {
      window.removeEventListener("scroll", showScrollbar);
      clearTimeout(idleTimer);
      root.classList.remove("is-scrolling");
    };
  }, []);

  return null;
}
