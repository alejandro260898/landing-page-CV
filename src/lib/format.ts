import { profile } from "@/data/profile";

export function formatEmail(email: string) {
  return email;
}

export function formatLinkedInHandle() {
  return profile.linkedinDisplay;
}

export function formatGitHubHandle() {
  return "github.com/alejandro260898";
}

export function formatStackLabel(technologies: string[]) {
  return technologies.join(" · ");
}
