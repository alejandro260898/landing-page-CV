/**
 * Calcula la duración entre dos fechas en años y meses.
 * @param startDate  ISO 8601 string (e.g. "2022-09-01")
 * @param endDate    ISO 8601 string o null (presente)
 * @param locale     "es" | "en"
 */
export function calculateTenure(
  startDate: string,
  endDate: string | null,
  locale: "es" | "en" = "es",
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const labels =
    locale === "es"
      ? {
          year: "año",
          years: "años",
          month: "mes",
          months: "meses",
        }
      : {
          year: "year",
          years: "years",
          month: "month",
          months: "months",
        };

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? labels.year : labels.years}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? labels.month : labels.months}`);
  }
  if (parts.length === 0) {
    parts.push(locale === "es" ? "menos de 1 mes" : "less than 1 month");
  }

  return parts.join(", ");
}
