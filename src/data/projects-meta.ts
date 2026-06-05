import type { Project } from "@/types";

/** Metadatos de proyectos (nombre, stack y fechas sin traducir). */
export const projectsMeta: Omit<Project, "description">[] = [
  {
    id: "sirane",
    name: "SIRANE",
    stack: ["Next.js"],
    variant: "enterprise",
    period: "Feb 2026 — May 2026",
  },
  {
    id: "faceticket",
    name: "FaceTicket",
    stack: ["React", "Flutter", "APIs REST", "FastAPI"],
    variant: "mobile",
    period: "Nov 2024 — Apr 2026",
  },
  {
    id: "laurier",
    name: "Laurier",
    stack: ["Next.js", "TypeScript", "APIs REST"],
    variant: "dashboard",
    period: "Jan 2026 — May 2026",
  },
  {
    id: "recommend",
    name: "Recommend",
    stack: ["Next.js", "Capacitor", "APIs REST"],
    variant: "network",
    period: "Jun 2025 — May 2026",
  },
  {
    id: "ballskore",
    name: "Ballskore",
    stack: ["Flutter", "BLE"],
    variant: "hardware",
    period: "Jan 2025 — Aug 2025",
  },
];
