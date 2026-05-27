import { profile } from "@/data/profile";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.tagline,
    description: profile.description,
    email: profile.email,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://franciscogalvan.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guadalajara",
      addressCountry: "MX",
    },
    sameAs: [profile.linkedin, profile.github],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
