/** Tecnologías extra solo en el CV impreso (no en la landing). */
export const cvStackExtras: Partial<
  Record<"frontend" | "backend" | "mobile" | "infra", readonly string[]>
> = {
  frontend: ["JavaScript", "HTML", "CSS"],
  backend: ["PHP"],
};
