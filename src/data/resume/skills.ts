import type { SkillCategory } from './types';

export const coreSkills = ['TypeScript', 'React', 'React Native', 'Next.js', 'Nitro Modules (Kotlin, Swift)', 'Node.js', 'NestJS', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Playwright', 'Claude Code'];

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'React', 'Next.js', 'Redux', 'Zustand', 'TanStack Query', 'Tailwind CSS', 'CSS3', 'Storybook', 'Server-Side Rendering', 'PWA', 'Web Accessibility', 'Responsive Design', 'i18n / RTL'],
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'Expo', 'Nitro Modules', 'New Architecture (Fabric, JSI)', 'Kotlin', 'Swift', 'iOS', 'Android'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'REST APIs', 'PostgreSQL', 'Redis', 'WebSockets'],
  },
  {
    title: 'Testing & DevOps',
    skills: ['Jest', 'Vitest', 'Playwright', 'React Testing Library', 'ESLint', 'Git', 'GitHub Actions', 'CI/CD', 'Docker', 'Monorepo (Nx)', 'Vite', 'Webpack'],
  },
  {
    title: 'Leadership & AI',
    skills: ['Team Leadership', 'Mentoring', 'Software Architecture', 'Code Review', 'Agile / Scrum', 'Claude Code', 'MCP (AI agents)'],
  },
];
