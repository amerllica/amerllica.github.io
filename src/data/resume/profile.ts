import type { Education, Language, Metric, Profile } from './types';

export const profile: Profile = {
  name: 'Amer Lotfi Orimi',
  title: 'Senior Frontend Engineer | Full-Stack | AI-Powered',
  headline: 'Senior Frontend Engineer (React / React Native) | Full-Stack with Node.js & NestJS | AI-Powered Engineering',
  location: 'Tehran, Iran (Open to Remote)',
  email: 'amerllica@gmail.com',
  phone: '+98 920 201 6078',
  phoneHref: 'tel:+989202016078',
  website: 'https://amerllica.ir',
  links: [
    { label: 'LinkedIn', handle: '@amerllica', url: 'https://linkedin.com/in/amerllica' },
    { label: 'GitHub', handle: '@amerllica', url: 'https://github.com/amerllica' },
    { label: 'StackOverflow', handle: 'amerllica', url: 'https://stackoverflow.com/users/6877799/amerllica' },
    { label: 'Medium', handle: '@amerllica', url: 'https://medium.com/@amerllica' },
    { label: 'npm', handle: '~amerllica', url: 'https://www.npmjs.com/~amerllica' },
  ],
};

export const tagline =
  'Building fast, scalable web & mobile products with React, React Native, TypeScript, Node.js and NestJS, shipped faster with AI agent workflows';

export const highlightTerms = [
  'React Native',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'NestJS',
  'AI agent workflows',
  'Stack Overflow',
];

export const summary = [
  'Senior Frontend Engineer with 10+ years of production experience in JavaScript, TypeScript, React and React Native, and 15+ years in web development. Full-stack capable with Node.js, NestJS, PostgreSQL, Redis and Docker.',
  'Led frontend teams, designed scalable architectures for e-commerce, social networking, fintech and crypto exchange products, and set engineering standards (ESLint, testing, CI/CD) that became company-wide references.',
  'Open-source author of 5 npm packages, including rn-vlc-plyr, a VLC player built with Nitro Modules (Kotlin, Swift, C++). Upstream contributor to React Native, TanStack Query, DefinitelyTyped, react-native-config and tinode-js. Stack Overflow: 33K+ reputation, 476 answers, 40M+ people reached.',
  'Uses AI agent workflows (Claude Code, MCP) to automate the path from ticket to merge request, code review and design-to-code checks, and keeps type-safe, clean code across the stack.',
];

export const metrics: Metric[] = [
  { value: '15+', label: 'Years in web development' },
  { value: '33K+', label: 'Stack Overflow reputation' },
  { value: '40.8M', label: 'People reached on Stack Overflow' },
  { value: '5', label: 'Published npm packages' },
  { value: '10+', label: 'Upstream PRs merged' },
  { value: '5,300+', label: 'GitHub contributions since 2024' },
];

export const education: Education[] = [
  {
    degree: 'Master of Science (M.Sc.)',
    field: 'Knowledge Engineering and Decision Science',
    institution: 'Kharazmi University (formerly Tehran University of Economic Sciences)',
    location: 'Tehran, Iran',
    start: '2010-09',
    end: '2013-02',
    note: 'Artificial intelligence, data mining and decision analysis. Research project on bank data mining with ANFIS-GA and neural networks.',
  },
  {
    degree: 'Bachelor of Science (B.Sc.)',
    field: 'Applied Mathematics',
    institution: 'Damghan University',
    location: 'Damghan, Iran',
    start: '2004-09',
    end: '2009-07',
    note: 'Strong base in analysis, algorithms and careful problem solving.',
  },
];

export const languages: Language[] = [
  { name: 'English', level: 'Professional working' },
  { name: 'Persian', level: 'Native' },
  { name: 'Turkish', level: 'Elementary' },
  { name: 'German', level: 'Elementary' },
];
