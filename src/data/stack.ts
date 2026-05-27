import type { StackCategory } from "@/types";

export const stackCategories: StackCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    id: "mobile",
    title: "Mobile",
    technologies: ["Flutter", "Capacitor", "PWAs", "BLE"],
  },
  {
    id: "backend",
    title: "Backend",
    technologies: ["Laravel", "Node.js", "REST APIs", "FastAPI"],
  },
  {
    id: "infra",
    title: "Infraestructura",
    technologies: ["Docker", "Kubernetes", "Vercel", "Neon"],
  },
];
