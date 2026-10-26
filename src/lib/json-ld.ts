import { resume } from '@/data/resume';

const { profile, experience, education, skills } = resume;

const currentJob = experience.find((job) => job.end === 'Present');

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: profile.website,
  email: `mailto:${profile.email}`,
  jobTitle: 'Senior Frontend Engineer',
  description: profile.headline,
  address: { '@type': 'PostalAddress', addressLocality: 'Tehran', addressCountry: 'IR' },
  worksFor: currentJob && { '@type': 'Organization', name: currentJob.company },
  alumniOf: education.map((item) => ({ '@type': 'CollegeOrUniversity', name: item.institution })),
  knowsAbout: skills.flatMap((category) => category.skills),
  knowsLanguage: resume.languages.map((language) => language.name),
  sameAs: profile.links.map((link) => link.url),
};
