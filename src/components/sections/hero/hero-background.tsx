"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";
import { HeroGrid } from "./hero-grid";

export function HeroBackground() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 22, damping: 22, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 22, damping: 22, mass: 1 });
  const springXSlow = useSpring(mouseX, { stiffness: 14, damping: 26, mass: 1.2 });

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 22);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 16);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY, reduceMotion]);

  const blueLeftStyle = reduceMotion ? undefined : { x: springX, y: springY };
  const blueRightStyle = reduceMotion ? undefined : { x: springXSlow, y: springY };
  const blueBottomStyle = reduceMotion ? undefined : { x: springX };

  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 h-full w-screen max-w-none -translate-x-1/2 overflow-hidden"
      aria-hidden
    >
      <div className="hero-gradient-base absolute inset-0" />
      {!reduceMotion && <HeroGrid />}

      {/* Deep blue orb — upper left */}
      <motion.div
        className="absolute -left-[25%] -top-[30%] h-[90%] w-[80%] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.32) 0%, transparent 70%)",
          ...blueLeftStyle,
        }}
      />

      {/* Bright blue-white orb — upper right (focal point del mockup) */}
      <motion.div
        className="absolute -right-[15%] -top-[25%] h-[80%] w-[70%] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(59,130,246,0.22) 40%, transparent 70%)",
          ...blueRightStyle,
        }}
      />

      {/* Blue orb — bottom center */}
      <motion.div
        className="absolute -bottom-[15%] left-[20%] h-[60%] w-[60%] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)",
          ...blueBottomStyle,
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
