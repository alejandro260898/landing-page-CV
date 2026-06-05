import { CalendarDays, Globe, Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { GitHubIcon } from "@/components/cv/cv-icons";
import { educationMeta } from "@/data/education-meta";
import { experienceMeta } from "@/data/experience-meta";
import { cvStackExtras } from "@/data/cv-stack-extra";
import { profile } from "@/data/profile";
import { stackCategoryMeta } from "@/data/stack-meta";
import { formatStackLabel } from "@/lib/format";

const ICON = 11;

export async function PrintCvAts() {
  const tp = await getTranslations("Profile");
  const te = await getTranslations("Experience");
  const ted = await getTranslations("Education");
  const ts = await getTranslations("Stack");
  const tv = await getTranslations("Cv");

  return (
    <div
      id="cv-print-ats"
      className="print-only cv-ats-document"
      aria-label={tv("printAriaLabelAts")}
    >
      {/* ── Header ── */}
      <header className="cv-ats2-header">
        <h1 className="cv-ats2-name">{profile.displayName}</h1>
        <p className="cv-ats2-role">{tp("cvHeadline")}</p>
        <ul className="cv-ats2-contact-list">
          <li className="cv-ats2-contact-item">
            <Phone size={ICON} strokeWidth={1.8} className="cv-ats2-contact-icon" />
            <span>{profile.phone}</span>
          </li>
          <li className="cv-ats2-contact-item">
            <Mail size={ICON} strokeWidth={1.8} className="cv-ats2-contact-icon" />
            <span>{profile.email}</span>
          </li>
          <li className="cv-ats2-contact-item">
            <GitHubIcon size={ICON} />
            <span>{profile.githubDisplay}</span>
          </li>
          <li className="cv-ats2-contact-item">
            <Globe size={ICON} strokeWidth={1.8} className="cv-ats2-contact-icon" />
            <span>{profile.websiteDisplay}</span>
          </li>
          <li className="cv-ats2-contact-item">
            <MapPin size={ICON} strokeWidth={1.8} className="cv-ats2-contact-icon" />
            <span>{tp("locationShort")}</span>
          </li>
        </ul>
      </header>

      {/* ── Body: two columns ── */}
      <div className="cv-ats2-body">

        {/* Left — Experiencia */}
        <div className="cv-ats2-left">
          <section className="cv-ats2-section">
            <h2 className="cv-ats2-section-title">{tv("atsExperienceTitle")}</h2>
            {experienceMeta.map((item) => {
              const highlights = te.raw(`items.${item.id}.highlights`) as string[];
              return (
                <article key={item.id} className="cv-ats2-exp-entry">
                  <p className="cv-ats2-exp-role">{te(`items.${item.id}.role`)}</p>
                  <p className="cv-ats2-exp-company">
                    <span className="cv-ats2-exp-company-name">{item.company}</span>
                    <span className="cv-ats2-exp-location"> · {te(`items.${item.id}.location`)}</span>
                  </p>
                  <p className="cv-ats2-exp-period">
                    <CalendarDays size={8} strokeWidth={1.8} className="cv-ats2-period-icon" />
                    {item.period}
                  </p>
                  <ul className="cv-ats2-exp-list">
                    {highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </section>
        </div>

        {/* Right — Resumen + Educación + Habilidades */}
        <div className="cv-ats2-right">

          <section className="cv-ats2-section">
            <h2 className="cv-ats2-section-title">{tv("atsResumeTitle")}</h2>
            <p className="cv-ats2-profile-text">{tp("summary")}</p>
          </section>

          <section className="cv-ats2-section">
            <h2 className="cv-ats2-section-title">{tv("atsEducationTitle")}</h2>
            {educationMeta.map((item) => (
              <div key={item.id} className="cv-ats2-edu-item">
                <p className="cv-ats2-edu-degree">{ted(`items.${item.id}.degree`)}</p>
                <p className="cv-ats2-edu-school">{ted(`items.${item.id}.institution`)}</p>
                <p className="cv-ats2-edu-year">{ted(`items.${item.id}.period`)}</p>
              </div>
            ))}
          </section>

          <section className="cv-ats2-section">
            <h2 className="cv-ats2-section-title">{tv("atsSkillsTitle")}</h2>
            <div className="cv-ats2-skills">
              {stackCategoryMeta.map((cat) => {
                const technologies = [
                  ...cat.technologies,
                  ...(cvStackExtras[cat.id] ?? []),
                ];
                return (
                  <div key={cat.id} className="cv-ats2-skill-group">
                    <p className="cv-ats2-skill-cat">{ts(`categories.${cat.id}.title`)}</p>
                    <div className="cv-ats2-skill-chips">
                      {technologies.map((tech) => (
                        <span key={tech} className="cv-ats2-chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
