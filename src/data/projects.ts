import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "sirane",
    name: "SIRANE",
    description:
      "Sistema empresarial industrial para trazabilidad, QA y producción en planta.",
    stack: ["Next.js"],
    variant: "enterprise",
    period: "Febrero 2026 — Mayo 2026",
  },
  {
    id: "faceticket",
    name: "FaceTicket",
    description:
      "Sistema móvil para acceso a eventos mediante reconocimiento facial y validación QR.",
    stack: ["React", "Flutter", "APIs REST", "FastAPI"],
    variant: "mobile",
    period: "Noviembre 2024 — Abril 2026",
  },
  {
    id: "laurier",
    name: "Laurier",
    description:
      "Ecommerce y mayoreo con módulos empresariales para gestión de productos, clientes y pedidos.",
    stack: ["Next.js", "TypeScript", "APIs REST"],
    variant: "dashboard",
    period: "Enero 2026 — Mayo 2026",
  },
  {
    id: "recommend",
    name: "Recommend",
    description:
      "Networking local con promociones y geolocalización para descubrimiento de negocios.",
    stack: ["Next.js", "Capacitor", "APIs REST"],
    variant: "network",
    period: "Junio 2025 — Mayo 2026",
  },
  {
    id: "ballskore",
    name: "Ballskore",
    description:
      "Control de partidos en tiempo real mediante relojes BLE y hardware deportivo conectado.",
    stack: ["Flutter", "BLE"],
    variant: "hardware",
    period: "Enero 2025 — Agosto 2025",
  },
];

/** Proyectos visibles solo en el CV impreso (sin Recommend). */
export const cvProjects = projects.filter((p) => p.id !== "recommend");
