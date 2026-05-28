"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/lib/utils";

const IDLE_MS = 1100;
const FADE_MS = 550;

export function ScrollScrollbar() {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  const [thumb, setThumb] = useState({ top: 0, height: 48 });
  const idleTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (isMobile) return;

    const root = document.documentElement;
    root.classList.add("custom-scrollbar-active");

    const updateThumb = () => {
      const scrollHeight = root.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setThumb({ top: 0, height: 48 });
        return;
      }
      const viewport = window.innerHeight;
      const height = Math.max(40, (viewport / root.scrollHeight) * viewport);
      const maxTop = viewport - height;
      const top = (window.scrollY / scrollHeight) * maxTop;
      setThumb({ top, height });
    };

    const scheduleHide = () => {
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setVisible(false), IDLE_MS);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        updateThumb();
        setVisible(true);
        scheduleHide();
      });
    };

    updateThumb();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateThumb);

    return () => {
      root.classList.remove("custom-scrollbar-active");
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateThumb);
      clearTimeout(idleTimer.current);
      cancelAnimationFrame(raf.current);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-y-0 right-1 z-[100] w-1.5 transition-opacity ease-out",
        visible ? "opacity-100" : "opacity-0",
      )}
      style={{ transitionDuration: `${FADE_MS}ms` }}
      aria-hidden
    >
      <div
        className={cn(
          "absolute right-0 w-full rounded-full bg-foreground/30 dark:bg-foreground/40",
          "transition-[top,height] duration-150 ease-out",
        )}
        style={{ top: thumb.top, height: thumb.height }}
      />
    </div>
  );
}
