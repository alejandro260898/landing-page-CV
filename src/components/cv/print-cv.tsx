import { Globe, GraduationCap, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { GitHubIcon, LinkedInIcon } from "@/components/cv/cv-icons";
import { educationMeta } from "@/data/education-meta";
import { experienceMeta } from "@/data/experience-meta";
import { profile } from "@/data/profile";
import { cvStackExtras } from "@/data/cv-stack-extra";
import { stackCategoryMeta } from "@/data/stack-meta";
import { formatStackLabel } from "@/lib/format";

const ICON_SIZE = 13;

function SidebarTitle({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <h2 className="cv-sidebar-title">
      <span className="cv-title-icon" aria-hidden>
        {icon}
      </span>
      {children}
    </h2>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="cv-contact-item">
      <span className="cv-contact-icon" aria-hidden>
        {icon}
      </span>
      <div className="cv-contact-body">
        <span className="cv-contact-label">{label}</span>
        {children}
      </div>
    </li>
  );
}

export async function PrintCv() {
  const tc = await getTranslations("Common");
  const tp = await getTranslations("Profile");
  const tn = await getTranslations("Nav");
  const te = await getTranslations("Experience");
  const ted = await getTranslations("Education");
  const ts = await getTranslations("Stack");
  const tv = await getTranslations("Cv");

  return (
    <div id="cv-print" className="print-only cv-document" aria-label={tv("printAriaLabel")}>
      <div className="cv-layout">
        <aside className="cv-sidebar">
          <div className="cv-logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Logo FG"
              width={112}
              height={112}
              className="cv-logo-img"
            />
          </div>

          <div className="cv-sidebar-stack">
            <section className="cv-sidebar-block">
              <SidebarTitle icon={<UserRound size={ICON_SIZE} strokeWidth={2} />}>
                {tc("contact")}
              </SidebarTitle>
              <ul className="cv-contact-list">
                <ContactRow icon={<Phone size={ICON_SIZE} strokeWidth={2} />} label={tc("phone")}>
                  <a href={`tel:${profile.phone.replace(/\D/g, "")}`}>{profile.phone}</a>
                </ContactRow>
                <ContactRow icon={<Mail size={ICON_SIZE} strokeWidth={2} />} label={tc("email")}>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </ContactRow>
                <ContactRow icon={<LinkedInIcon size={ICON_SIZE} />} label={tc("linkedin")}>
                  <a href={profile.linkedin}>{profile.linkedinDisplay}</a>
                </ContactRow>
                <ContactRow icon={<GitHubIcon size={ICON_SIZE} />} label={tc("github")}>
                  <a href={profile.github}>{profile.githubDisplay}</a>
                </ContactRow>
                <ContactRow icon={<Globe size={ICON_SIZE} strokeWidth={2} />} label={tc("website")}>
                  <a href={profile.website}>{profile.websiteDisplay}</a>
                </ContactRow>
                <ContactRow icon={<MapPin size={ICON_SIZE} strokeWidth={2} />} label={tc("location")}>
                  <span>{tp("locationShort")}</span>
                </ContactRow>
              </ul>
            </section>

            <section className="cv-sidebar-block">
              <SidebarTitle icon={<GraduationCap size={ICON_SIZE} strokeWidth={2} />}>
                {tn("education")}
              </SidebarTitle>
              {educationMeta.map((item) => (
                <article key={item.id} className="cv-edu-item">
                  <strong className="cv-edu-degree">{ted(`items.${item.id}.degree`)}</strong>
                  <p className="cv-edu-school">{ted(`items.${item.id}.institution`)}</p>
                  <p className="cv-edu-year">{ted(`items.${item.id}.period`)}</p>
                </article>
              ))}
            </section>
          </div>
        </aside>

        <main className="cv-main">
          <header className="cv-main-header">
            <h1 className="cv-main-name">{profile.displayName}</h1>
            <p className="cv-main-role">{tp("cvHeadline").toUpperCase()}</p>
          </header>

          <section className="cv-main-section">
            <h2 className="cv-main-section-title">{tv("professionalProfile")}</h2>
            <p className="cv-profile-text">{tp("summary")}</p>
          </section>

          <section className="cv-main-section">
            <h2 className="cv-main-section-title">{tv("workExperience")}</h2>
            {experienceMeta.map((item) => {
              const highlights = te.raw(`items.${item.id}.highlights`) as string[];

              return (
                <article key={item.id} className="cv-exp-entry">
                  <h3 className="cv-exp-role">{te(`items.${item.id}.role`)}</h3>
                  <p className="cv-exp-company">
                    {item.company ? (
                      <>
                        <strong>{item.company}</strong>
                        <span className="cv-exp-sep"> - </span>
                      </>
                    ) : null}
                    <span>{item.period}</span>
                  </p>
                  <ul className="cv-exp-list">
                    {highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </section>

          <section className="cv-main-section cv-stack-section">
            <h2 className="cv-main-section-title">{tv("techStack")}</h2>
            <div className="cv-stack-rows">
              {stackCategoryMeta.map((cat) => {
                const technologies = [
                  ...cat.technologies,
                  ...(cvStackExtras[cat.id] ?? []),
                ];

                return (
                <div key={cat.id} className="cv-stack-row">
                  <span className="cv-stack-cat">{ts(`categories.${cat.id}.title`)}</span>
                  <span className="cv-stack-techs">
                    {formatStackLabel(technologies)}
                  </span>
                </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
