"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

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

  const purpleStyle = reduceMotion ? undefined : { x: springX, y: springY };
  const pinkStyle = reduceMotion ? undefined : { x: springXSlow, y: springY };
  const blueStyle = reduceMotion ? undefined : { x: springX };

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="hero-gradient-base absolute inset-0" />

      {/* Purple orb — upper left */}
      <motion.div
        className="absolute -left-[25%] -top-[30%] h-[90%] w-[80%] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)",
          ...purpleStyle,
        }}
      />

      {/* Pink orb — upper right */}
      <motion.div
        className="absolute -right-[20%] -top-[20%] h-[70%] w-[65%] rounded-full blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)",
          ...pinkStyle,
        }}
      />

      {/* Blue orb — bottom center */}
      <motion.div
        className="absolute -bottom-[15%] left-[20%] h-[60%] w-[60%] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
          ...blueStyle,
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
