import { setRequestLocale } from "next-intl/server";
import { PrintCv } from "@/components/cv/print-cv";
import { PrintCvAts } from "@/components/cv/print-cv-ats";
import { PrintRecommendation } from "@/components/cv/print-recommendation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";
import { InitialLoader } from "@/components/shared/initial-loader";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <InitialLoader />
      <div className="screen-content flex min-h-full flex-col select-none">
        <Header />
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <StackSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
        </main>
        <Footer />
      </div>
      <PrintCv />
      <PrintCvAts />
      <PrintRecommendation />
    </>
  );
}
