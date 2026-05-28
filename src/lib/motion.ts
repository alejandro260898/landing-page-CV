export const easePremium = [0.22, 1, 0.36, 1] as const;

export const transitionFast = {
  duration: 0.45,
  ease: easePremium,
} as const;

export const transitionMedium = {
  duration: 0.6,
  ease: easePremium,
} as const;

export const transitionSlow = {
  duration: 0.75,
  ease: easePremium,
} as const;
