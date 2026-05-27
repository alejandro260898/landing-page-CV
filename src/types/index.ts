export type NavItem = {
  label: string;
  href: string;
};

export type StackCategory = {
  id: string;
  title: string;
  technologies: string[];
};

export type ExperienceItem = {
  role: string;
  company?: string;
  period: string;
  location: string;
  highlights: string[];
};

export type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  variant: "dashboard" | "mobile" | "enterprise" | "network" | "hardware";
  href?: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

export type Profile = {
  name: string;
  displayName: string;
  /** Subtítulo en CV impreso (evita repetir el rol de experiencia). */
  cvHeadline: string;
  tagline: string;
  description: string;
  summary: string;
  location: string;
  locationShort: string;
  availability: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
};
