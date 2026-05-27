import { PrintCv } from "@/components/cv/print-cv";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";
import { InitialLoader } from "@/components/shared/initial-loader";

export default function HomePage() {
  return (
    <>
      <InitialLoader />
      <div className="screen-content flex min-h-full flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <StackSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <PrintCv />
    </>
  );
}
