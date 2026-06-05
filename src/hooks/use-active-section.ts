"use client";

import { useEffect, useState } from "react";
import { sectionHrefs } from "@/data/section-hrefs";

/** Appbar (64px) + margen de activación */
const ACTIVATION_LINE = 96;
const TOP_THRESHOLD = 48;

export function useActiveSection() {
  const [active, setActive] = useState<string>(sectionHrefs[0] ?? "");

  useEffect(() => {
    let frame = 0;

    const updateActive = () => {
      if (window.scrollY < TOP_THRESHOLD) {
        setActive("#inicio");
        return;
      }

      const sections = sectionHrefs
        .map((href) => {
          const id = href.replace("#", "");
          const el = document.getElementById(id);
          return el ? { href, el } : null;
        })
        .filter(
          (s): s is { href: (typeof sectionHrefs)[number]; el: HTMLElement } =>
            s !== null,
        );

      if (sections.length === 0) return;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 64;

      if (nearBottom) {
        setActive(sections[sections.length - 1]!.href);
        return;
      }

      let current = sections[0]!.href;

      for (const { href, el } of sections) {
        const { top } = el.getBoundingClientRect();
        if (top <= ACTIVATION_LINE) {
          current = href;
        }
      }

      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return active;
}
