import { useTranslations } from "next-intl";

const navKeys = [
  { key: "home", href: "#inicio" },
  { key: "about", href: "#sobre-mi" },
  { key: "stack", href: "#stack" },
  { key: "experience", href: "#experiencia" },
  { key: "projects", href: "#colaboraciones" },
  { key: "education", href: "#educacion" },
] as const;

export function useNavItems() {
  const t = useTranslations("Nav");

  return navKeys.map(({ key, href }) => ({
    label: t(key),
    href,
  }));
}
