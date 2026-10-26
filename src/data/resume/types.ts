export type Month = `${number}-${number}`;

export type LinkLabel = 'LinkedIn' | 'GitHub' | 'StackOverflow' | 'Medium' | 'npm';

export type Link = {
  label: LinkLabel;
  handle: string;
  url: string;
};

export type Profile = {
  name: string;
  title: string;
  headline: string;
  description: string;
  city: string;
  country: string;
  countryCode: string;
  workMode: string;
  email: string;
  phone: string;
  website: string;
  links: Link[];
};

type ExperienceBase = {
  role: string;
  company: string;
  location: string;
  start: Month;
  end: Month | 'Present';
  summary: string;
  bullets: string[];
  link?: string;
};

export type Experience = ExperienceBase & ({ detail: 'full' } | { detail: 'brief'; printLine: string });

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Education = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  start: Month;
  end: Month;
  note: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Package = {
  name: string;
  url: string;
  description: string;
  tags: string[];
};

export type PullRequest = {
  repo: string;
  title: string;
  url: string;
  year: number;
  status: 'merged' | 'open';
};

export type Article = {
  title: string;
  url: string;
  published: Month;
};

export type StackOverflowStats = {
  url: string;
  flairUrl: string;
  reputation: number;
  peopleReached: string;
  answers: number;
  gold: number;
  silver: number;
  bronze: number;
  topTags: string[];
  memberSince: Month;
};

export type Metric = {
  value: string;
  label: string;
};

export type Recommendation = {
  name: string;
  text: string;
  image: string;
};

export type Resume = {
  profile: Profile;
  tagline: string;
  highlightTerms: string[];
  summary: string[];
  metrics: Metric[];
  experience: Experience[];
  coreSkills: string[];
  skills: SkillCategory[];
  education: Education[];
  languages: Language[];
  packages: Package[];
  pullRequests: PullRequest[];
  articles: Article[];
  stackOverflow: StackOverflowStats;
  recommendations: Recommendation[];
};
