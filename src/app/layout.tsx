import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import { ScrollScrollbar } from "@/components/providers/scroll-scrollbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { siteMetadata } from "@/lib/site-metadata";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd />
        <ThemeProvider>
          <ScrollScrollbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
