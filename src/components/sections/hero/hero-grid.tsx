"use client";

import { useEffect, useRef } from "react";

const EDGE_PAD_X = 12;
const EDGE_PAD_Y = 20;
const CELL = 72; // px entre nodos
const INFLUENCE_RADIUS = 0.2;
const MAX_SHIFT = 14;
const SPRING = 0.08;

type Node = {
  bx: number;
  by: number;
  cx: number;
  cy: number;
  vx: number;
  vy: number;
};

type GridLayout = {
  cols: number;
  rows: number;
};

export function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const nodes = useRef<Node[]>([]);
  const layout = useRef<GridLayout>({ cols: 0, rows: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = () =>
      document.documentElement.classList.contains("dark");

    const build = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;

      const usableW = Math.max(W - EDGE_PAD_X * 2, CELL);
      const usableH = Math.max(H - EDGE_PAD_Y * 2, CELL);
      const cols = Math.max(2, Math.round(usableW / CELL) + 1);
      const rows = Math.max(2, Math.round(usableH / CELL) + 1);

      layout.current = { cols, rows };
      nodes.current = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const bx =
            cols === 1
              ? W / 2
              : EDGE_PAD_X + (c / (cols - 1)) * (W - EDGE_PAD_X * 2);
          const by =
            rows === 1
              ? H / 2
              : EDGE_PAD_Y + (r / (rows - 1)) * (H - EDGE_PAD_Y * 2);
          nodes.current.push({ bx, by, cx: bx, cy: by, vx: 0, vy: 0 });
        }
      }
    };

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const W = canvas.width;
      const H = canvas.height;
      const dark = isDark();
      const lineColor = dark
        ? "rgba(147,197,253,0.15)"
        : "rgba(59,130,246,0.13)";
      const dotColor = dark
        ? "rgba(147,197,253,0.42)"
        : "rgba(59,130,246,0.34)";

      ctx.clearRect(0, 0, W, H);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const radius = Math.min(W, H) * INFLUENCE_RADIUS;

      for (const n of nodes.current) {
        const dx = n.cx - mx;
        const dy = n.cy - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let tx = n.bx;
        let ty = n.by;

        if (dist < radius && dist > 0) {
          const strength = (1 - dist / radius) ** 1.8;
          tx = n.bx + (dx / dist) * strength * MAX_SHIFT;
          ty = n.by + (dy / dist) * strength * MAX_SHIFT;
        }

        n.vx += (tx - n.cx) * SPRING;
        n.vy += (ty - n.cy) * SPRING;
        n.vx *= 0.72;
        n.vy *= 0.72;
        n.cx += n.vx;
        n.cy += n.vy;
      }

      const { cols } = layout.current;
      const total = nodes.current.length;

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < total; i++) {
        const n = nodes.current[i];
        if ((i + 1) % cols !== 0) {
          const right = nodes.current[i + 1];
          ctx.moveTo(n.cx, n.cy);
          ctx.lineTo(right.cx, right.cy);
        }
        if (i + cols < total) {
          const below = nodes.current[i + cols];
          ctx.moveTo(n.cx, n.cy);
          ctx.lineTo(below.cx, below.cy);
        }
      }
      ctx.stroke();

      ctx.fillStyle = dotColor;
      for (const n of nodes.current) {
        ctx.beginPath();
        ctx.arc(n.cx, n.cy, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    build();
    raf.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => build());
    ro.observe(canvas);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full min-w-full"
      aria-hidden
    />
  );
}
