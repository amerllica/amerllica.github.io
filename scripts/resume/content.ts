import { formatLocation, formatMonth, formatPeriod, resume, RESUME_BASE, type PullRequest } from '../../src/data/resume/index.ts';

export type Block =
  | { type: 'entry'; title: string; subtitle?: string; dates: string }
  | { type: 'text'; text: string }
  | { type: 'bullet'; text: string; url?: string }
  | { type: 'pair'; label: string; text: string };

export type Section = { title: string; blocks: Block[] };

export type DocumentLink = { text: string; url: string };

const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '');

const { profile } = resume;

export const outputPath = (extension: 'pdf' | 'docx') =>
  new URL(`../../public/${RESUME_BASE}.${extension}`, import.meta.url);

export const header = {
  name: profile.name,
  headline: profile.headline,
  contact: [formatLocation(profile), profile.email, profile.phone].join(' | '),
  links: [profile.website, ...profile.links.map((link) => link.url)].map(
    (url): DocumentLink => ({ text: displayUrl(url), url }),
  ),
};

const pullRequestNumber = (url: string) => url.split('/').pop();

const pullRequestList = (status: PullRequest['status']) =>
  resume.pullRequests
    .filter((pr) => pr.status === status)
    .map((pr) => `${pr.repo} #${pullRequestNumber(pr.url)} (${pr.year})`)
    .join('; ');

const experienceBlocks = resume.experience.flatMap((job): Block[] => [
  {
    type: 'entry',
    title: `${job.role} | ${job.company} | ${job.location}`,
    dates: formatPeriod(job.start, job.end),
  },
  ...(job.detail === 'full'
    ? job.bullets.map((text): Block => ({ type: 'bullet', text }))
    : [{ type: 'text', text: `${job.summary} ${job.printLine}.` } satisfies Block]),
]);

export const sections: Section[] = [
  {
    title: 'Professional Summary',
    blocks: resume.summary.map((text) => ({ type: 'text', text })),
  },
  {
    title: 'Skills',
    blocks: resume.skills.map((category) => ({ type: 'pair', label: category.title, text: category.skills.join(', ') })),
  },
  { title: 'Work Experience', blocks: experienceBlocks },
  {
    title: 'Open Source',
    blocks: [
      ...resume.packages.map(
        (pkg): Block => ({ type: 'bullet', text: `${pkg.name} (npm): ${pkg.description}`, url: pkg.url }),
      ),
      { type: 'pair', label: 'Merged upstream pull requests', text: pullRequestList('merged') },
      { type: 'pair', label: 'Open upstream pull requests', text: pullRequestList('open') },
    ],
  },
  {
    title: 'Publications',
    blocks: [
      ...resume.articles.map(
        (article): Block => ({ type: 'bullet', text: `${article.title}, Medium, ${formatMonth(article.published)}`, url: article.url }),
      ),
      {
        type: 'bullet',
        text: `Stack Overflow: ${resume.stackOverflow.reputation.toLocaleString('en-US')} reputation, ${resume.stackOverflow.answers} answers, ${resume.stackOverflow.peopleReached} people reached, ${resume.stackOverflow.gold} gold / ${resume.stackOverflow.silver} silver / ${resume.stackOverflow.bronze} bronze badges`,
        url: resume.stackOverflow.url,
      },
    ],
  },
  {
    title: 'Education',
    blocks: resume.education.map(
      (item): Block => ({
        type: 'entry',
        title: `${item.degree}, ${item.field}`,
        subtitle: `${item.institution}, ${item.location}`,
        dates: `${formatMonth(item.start)} - ${formatMonth(item.end)}`,
      }),
    ),
  },
  {
    title: 'Languages',
    blocks: [{ type: 'text', text: resume.languages.map((language) => `${language.name} (${language.level})`).join(', ') }],
  },
];
