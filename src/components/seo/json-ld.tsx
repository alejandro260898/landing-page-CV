"use client";

import { useEffect } from "react";
import { profile } from "@/data/profile";

const jsonLd = {
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

const SCRIPT_ID = "person-json-ld";

/**
 * Inyecta el JSON-LD en <head> vía DOM en lugar de renderizar un <script>
 * dentro del árbol de React. Así evitamos el aviso "Encountered a script tag
 * while rendering React component" al navegar en cliente (cambio de idioma).
 */
export function JsonLd() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, []);

  return null;
}
