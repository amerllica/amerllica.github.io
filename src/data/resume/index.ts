import { experience } from './experience';
import { articles, stackOverflow } from './writing';
import { packages, pullRequests } from './open-source';
import { education, highlightTerms, languages, metrics, profile, summary, tagline } from './profile';
import { recommendations } from './recommendations';
import { skills } from './skills';
import type { Resume } from './types';

export const resume: Resume = {
  profile,
  tagline,
  highlightTerms,
  summary,
  metrics,
  experience,
  skills,
  education,
  languages,
  packages,
  pullRequests,
  articles,
  stackOverflow,
  recommendations,
};

export * from './types';
export * from './format';
export * from './files';
