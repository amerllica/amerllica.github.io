import { readFile } from 'node:fs/promises';
import { extractText, getDocumentProxy } from 'unpdf';
import { header, outputPath, sections } from './content.ts';

const MAX_PAGES = 2;
const MIN_KEYWORD_COVERAGE = 0.95;

const targetRoleKeywords = [
  'Senior Frontend Engineer', 'React', 'React Native', 'TypeScript', 'JavaScript', 'Next.js', 'Redux',
  'Zustand', 'TanStack Query', 'HTML5', 'CSS3', 'Tailwind CSS', 'Storybook', 'Design System',
  'Server-Side Rendering', 'Performance', 'Accessibility', 'Responsive', 'PWA', 'i18n', 'Node.js',
  'NestJS', 'REST APIs', 'WebSockets', 'PostgreSQL', 'Docker', 'CI/CD', 'GitHub Actions', 'Git',
  'Jest', 'Vitest', 'Playwright', 'React Testing Library', 'ESLint', 'Webpack', 'Vite', 'Monorepo',
  'Expo', 'iOS', 'Android', 'Architecture', 'Code Review', 'Mentoring', 'Team Leadership', 'Agile',
  'Figma', 'Jira', 'Open Source', 'AI', 'Remote',
];

const failures: string[] = [];
const expect = (condition: boolean, message: string) => condition || failures.push(message);

const bytes = await readFile(outputPath('pdf'));
const raw = bytes.toString('latin1');
const { totalPages, text } = await extractText(await getDocumentProxy(new Uint8Array(bytes)), { mergePages: true });
const flat = text.replace(/\s+/g, ' ');
const lower = flat.toLowerCase();

expect(totalPages <= MAX_PAGES, `PDF has ${totalPages} pages, max is ${MAX_PAGES}`);
expect(flat.trimStart().startsWith(header.name), 'Text layer does not start with the name');
expect(!/\/Subtype\s*\/Image/.test(raw), 'PDF contains images');

const headingPositions = sections.map((section) => lower.indexOf(section.title.toLowerCase()));
headingPositions.forEach((position, idx) => expect(position >= 0, `Missing heading: ${sections[idx].title}`));
expect(
  headingPositions.every((position, idx) => idx === 0 || position > headingPositions[idx - 1]),
  'Section headings are out of order',
);

[header.contact, ...header.links.map((link) => link.text)].forEach((value) =>
  expect(flat.includes(value), `Missing visible text: ${value}`),
);
header.links.forEach((link) => expect(raw.includes(link.url), `Missing link annotation: ${link.url}`));

const LATIN1_MAX = 0xff;
const BULLET = '•';
const nonLatin1 = [...new Set(JSON.stringify({ header, sections }))].filter(
  (char) => char !== BULLET && char.codePointAt(0)! > LATIN1_MAX,
);
expect(nonLatin1.length === 0, `Characters Helvetica cannot render: ${nonLatin1.join(' ')}`);

const missingKeywords = targetRoleKeywords.filter((keyword) => !lower.includes(keyword.toLowerCase()));
const coverage = 1 - missingKeywords.length / targetRoleKeywords.length;
console.log(`Pages: ${totalPages}`);
console.log(`Keyword coverage: ${(coverage * 100).toFixed(1)}% (${targetRoleKeywords.length - missingKeywords.length}/${targetRoleKeywords.length})`);
if (missingKeywords.length) console.log(`Missing keywords: ${missingKeywords.join(', ')}`);
expect(coverage >= MIN_KEYWORD_COVERAGE, `Keyword coverage below ${MIN_KEYWORD_COVERAGE * 100}%`);

if (failures.length) {
  console.error(failures.map((failure) => `FAIL ${failure}`).join('\n'));
  process.exit(1);
}
console.log('ATS check passed');
