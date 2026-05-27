import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "sirane",
    name: "SIRANE",
    description:
      "Sistema empresarial industrial para trazabilidad, QA y producción en planta.",
    stack: ["Next.js"],
    variant: "enterprise",
  },
  {
    id: "faceticket",
    name: "FaceTicket",
    description:
      "Sistema móvil para acceso a eventos mediante reconocimiento facial y validación QR.",
    stack: ["React", "Flutter", "APIs REST", "FastAPI"],
    variant: "mobile",
  },
  {
    id: "laurier",
    name: "Laurier",
    description:
      "Ecommerce y mayoreo con módulos empresariales para gestión de productos, clientes y pedidos.",
    stack: ["Next.js", "TypeScript", "APIs REST"],
    variant: "dashboard",
  },
  {
    id: "recommend",
    name: "Recommend",
    description:
      "Networking local con promociones y geolocalización para descubrimiento de negocios.",
    stack: ["Next.js", "Capacitor", "APIs REST"],
    variant: "network",
  },
  {
    id: "ballskore",
    name: "Ballskore",
    description:
      "Control de partidos en tiempo real mediante relojes BLE y hardware deportivo conectado.",
    stack: ["Flutter", "BLE"],
    variant: "hardware",
  },
];

/** Proyectos visibles solo en el CV impreso (sin Recommend). */
export const cvProjects = projects.filter((p) => p.id !== "recommend");
