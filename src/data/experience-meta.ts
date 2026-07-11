/** Metadatos de experiencia (fechas y empresa sin traducir). */
export const experienceMeta = [
  {
    id: "sistemacng",
    company: "Sistema CNG",
    /** ISO 8601 — null = presente */
    startDate: "2026-06-01",
    endDate: null as string | null,
    period: "Jun 2026 – Presente",
  },
  {
    id: "eurekasigma",
    company: "EurekaSigma",
    /** ISO 8601 — null = presente */
    startDate: "2022-09-01",
    endDate: "2026-05-01" as string | null,
    period: "Sep 2022 – May 2026",
  },
] as const;
