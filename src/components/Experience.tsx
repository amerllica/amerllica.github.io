import { motion } from 'framer-motion';
import { Terminal, Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'XOLAB',
    location: 'Dubai (Remote)',
    period: '06/2025 - Present',
    description:
        'VTUS is a web platform for law firms assisting immigrants in obtaining U.S. visas. Core developer responsible for frontend architecture, development, and backend service integration.',
    highlights: [
      'React Router v7, TypeScript, Zustand, Formik, React Query, Radix UI, TailwindCSS, Storybook',
      'NestJS backend with PostgreSQL, Redis, RabbitMQ for async communication',
      'Docker containerization for backend services and databases',
      'Automated CI/CD pipelines using GitHub Actions for frontend and backend',
    ],
    link: 'https://web.staging.xolab.io',
  },
  {
    role: 'Full Stack Engineer',
    company: 'Peykan',
    location: 'Dubai (Remote)',
    period: '05/2024 - 05/2025',
    description:
        'Led comprehensive refactor to improve maintainability and scalability in early-stage project.',
    highlights: [
      'Redesigned architecture focusing on maintainability, scalability, and readability',
      'Integrated Zustand for state management, theming, and localization',
      'Established ESLint, Prettier, testing, and CI/CD best practices with GitHub Actions',
      'Created dedicated build pipelines for production, internal, and development environments',
      'Frontend engineering standards adopted company-wide',
    ],
  },
  {
    role: 'Freelance Frontend Engineer',
    company: 'TRIBES',
    location: 'London, UK (Remote)',
    period: '06/2022 - 05/2024',
    description:
        'Served as a frontend developer for multiple client projects through Tribes, a developer-house agency partnering with external companies.',
    highlights: [
      'Delivered production-ready web and mobile apps for global clients',
      'Collaborated with distributed teams under agile methodologies',
      'Provided architectural consulting for React and React Native projects',
    ],
  },
  {
    role: 'React Native Developer (Contract)',
    company: 'TRIBES / Dubit',
    location: 'Leeds, UK (Remote)',
    period: '06/2022 - 03/2023',
    description:
        'Developed a kids’ podcast app with creative multimedia and painting features.',
    highlights: [
      'Built audio system with React Native Track Player (RNTP)',
      'Integrated React Native Skia for painting module',
      'Delivered end-to-end solution published on iOS and Android',
      'Shared development process in a Medium technical article',
    ],
  },
  {
    role: 'Frontend and Business Consultant',
    company: 'IT&T',
    location: 'San Francisco, CA (Remote)',
    period: '06/2022 - 05/2024',
    description:
        'Provided technical and business consultation to support IT&T’s product growth after Lobox social network phase.',
    highlights: [
      'Reviewed architecture and performance strategies',
      'Supported team onboarding and technology decisions',
    ],
  },
  {
    role: 'Frontend Web/App Engineer',
    company: 'IT&T',
    location: 'San Francisco, CA (Remote)',
    period: '07/2021 - 06/2022',
    description:
        'Continued development of the Lobox social network and assisted in team leadership transition.',
    highlights: [
      'Maintained large React-based codebase for social networking platform',
      'Guided junior developers and improved codebase modularity',
    ],
  },
  {
    role: 'Frontend Team Lead',
    company: 'IT&T (Lobox)',
    location: 'San Francisco, CA (Remote)',
    period: '12/2020 - 07/2021',
    description:
        'Built next-generation professional social platform to compete with LinkedIn.',
    highlights: [
      'Assembled and led skilled frontend and backend teams',
      'Implemented ReactJS with SSR for performance and SEO',
      'Developed pure Node.js services for APIs, authentication, and real-time communication',
      'Designed scalable architecture and modern engineering practices',
    ],
  },
  {
    role: 'Frontend App Engineer',
    company: 'Sibche',
    location: 'Tehran, Iran',
    period: '05/2020 - 12/2020',
    description:
        'Managed and developed React Native-based apps for the Sibche iOS store and external clients.',
    highlights: [
      'Maintained Sibche’s main iOS app using React Native and TypeScript',
      'Worked deeply on native module integration',
      'Enhanced app performance and usability',
    ],
  },
  {
    role: 'Frontend Web/App Engineer',
    company: 'Sheypoor',
    location: 'Tehran, Iran',
    period: '05/2018 - 05/2020',
    description:
        'Developed web and mobile app UIs for a major classifieds platform.',
    highlights: [
      'Developed reusable UI components with React and React Native',
      'Practiced pair programming and code reviews',
      'Configured Android/iOS builds and optimized Webpack and ESLint setup',
    ],
  },
  {
    role: 'Frontend Web/App Developer',
    company: 'Scann',
    location: 'Tehran, Iran',
    period: '12/2017 - 05/2018',
    description:
        'Designed and built three large-scale web apps from scratch using ReactJS and NestJS.',
    highlights: [
      'Built React boilerplate with routing, auth, and API integration',
      'Implemented Redux and Redux Thunk for predictable state flow',
      'Developed modular NestJS REST APIs with strong typing (TypeScript)',
      'Defined project-wide coding standards and architecture patterns',
    ],
  },
  {
    role: 'Frontend Web Developer',
    company: 'Digikala.com',
    location: 'Tehran, Iran',
    period: '11/2016 - 12/2017',
    description:
        'Enhanced web UI for the largest e-commerce platform in the Middle East.',
    highlights: [
      'Fixed critical mobile app bugs and refactored Firefox mobile layer',
      'Refactored search page into a single-page React application',
      'Contributed to Partial Shipment project and Digikala Mag refactor',
      'Code still running in production after 8 years',
    ],
    link: 'https://digikala.com',
  },
  {
    role: 'Technical Support Specialist and UI Developer',
    company: 'Douran.com',
    location: 'Tehran, Iran',
    period: '10/2010 - 11/2016',
    description:
        'Bridged technical support and frontend development across CMS deployments and client integrations.',
    highlights: [
      'Developed front-end interfaces using HTML, CSS (Less/SCSS), JavaScript, jQuery, and UIkit',
      'Configured DNS, hosting, NGINX, Apache, and IIS servers',
      'Improved UI/UX and client satisfaction through close collaboration with design teams',
    ],
  },
];


export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold glow-text-subtle">
              <span className="text-muted-foreground">//</span> Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-8px] md:left-[24px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background animate-pulse-glow"></div>

                  {/* Content card */}
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)]">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                          <Briefcase className="w-5 h-5" />
                          {exp.role}
                        </h3>
                        <p className="text-foreground/90 font-semibold mt-1">{exp.company}</p>
                        <p className="text-muted-foreground text-sm">{exp.location}</p>
                      </div>
                      <div className="text-accent font-mono text-sm">{exp.period}</div>
                    </div>

                    <p className="text-foreground/80 mb-4">{exp.description}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                          <span className="text-accent mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-mono"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
