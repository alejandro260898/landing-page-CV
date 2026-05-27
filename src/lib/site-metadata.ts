import type { Metadata } from "next";
import { profile } from "@/data/profile";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://franciscogalvan.dev";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.tagline}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Flutter",
    "TypeScript",
    "Guadalajara",
    "Desarrollo de software",
    "PWAs",
    "Laravel",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.description,
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
};
