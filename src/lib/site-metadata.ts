import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/routing";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://franciscogalvan.dev";

export async function getSiteMetadata(locale: Locale): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Meta" });
  const tp = await getTranslations({ locale, namespace: "Profile" });

  const description = tp("description");
  const tagline = t("tagline");
  const keywords = t("keywords").split(", ");

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: profile.name,
      template: `%s | ${profile.name}`,
    },
    description,
    keywords,
    authors: [{ name: profile.name }],
    creator: profile.name,
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_MX" : "en_US",
      url: `${siteUrl}/${locale}`,
      title: `${profile.name} — ${tagline}`,
      description,
      siteName: profile.name,
    },
    twitter: {
      card: "summary",
      title: `${profile.name} — ${tagline}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [{ url: "/logo.png", type: "image/png" }],
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
      },
    },
  };
}
