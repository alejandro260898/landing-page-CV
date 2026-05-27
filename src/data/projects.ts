import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "sirane",
    name: "SIRANE",
    description:
      "Sistema empresarial industrial para trazabilidad, QA y producción en planta.",
    stack: ["Next.js"],
    variant: "enterprise",
    period: "Feb 2026 — May 2026",
  },
  {
    id: "faceticket",
    name: "FaceTicket",
    description:
      "Desarrollé un sistema móvil de acceso para eventos utilizando reconocimiento facial y validación QR, optimizando tiempos de ingreso y validación de asistentes.",
    stack: ["React", "Flutter", "APIs REST", "FastAPI"],
    variant: "mobile",
    period: "Nov 2024 — Abr 2026",
  },
  {
    id: "laurier",
    name: "Laurier",
    description:
      "Ecommerce y mayoreo con módulos empresariales para gestión de productos, clientes y pedidos.",
    stack: ["Next.js", "TypeScript", "APIs REST"],
    variant: "dashboard",
    period: "Ene 2026 — May 2026",
  },
  {
    id: "recommend",
    name: "Recommend",
    description:
      "Networking local con promociones y geolocalización para descubrimiento de negocios, ayudando a los usuarios a encontrar negocios cercanos y promociones relevantes.",
    stack: ["Next.js", "Capacitor", "APIs REST"],
    variant: "network",
    period: "Jun 2025 — May 2026",
  },
  {
    id: "ballskore",
    name: "Ballskore",
    description:
      "Sistema de monitoreo deportivo en tiempo real mediante dispositivos BLE.",
    stack: ["Flutter", "BLE"],
    variant: "hardware",
    period: "Ene 2025 — Ago 2025",
  },
];

/** Proyectos visibles solo en el CV impreso (sin Recommend). */
export const cvProjects = projects.filter((p) => p.id !== "recommend");
