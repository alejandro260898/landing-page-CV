/** IDs y tecnologías del stack (nombres de tech no se traducen). */
export const stackCategoryMeta = [
  {
    id: "frontend",
    technologies: ["React", "Next.js", "Angular", "TypeScript", "TailwindCSS"],
  },
  {
    id: "mobile",
    technologies: ["Flutter", "Dart", "Kotlin", "Capacitor", "PWAs", "BLE"],
  },
  {
    id: "backend",
    technologies: ["Laravel", "Node.js", "REST APIs", "Python", "PostgreSQL", "MySQL"],
  },
  {
    id: "infra",
    technologies: ["Docker", "Kubernetes", "Vercel", "Neon", "Git", "GitHub", "DockerHub"],
  },
] as const;
