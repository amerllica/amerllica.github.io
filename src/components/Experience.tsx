import { motion } from 'framer-motion';
import { Terminal, Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'XOLAB',
    location: 'Dubai (Remote)',
    period: '06/2025 - Present',
    description: 'VTUS is a web platform for law firms assisting immigrants in obtaining U.S. visas. Core developer responsible for frontend architecture and backend services.',
    highlights: [
      'React Router v7, TypeScript, Zustand, React Query, Radix UI, TailwindCSS',
      'NestJS backend with PostgreSQL, Redis, RabbitMQ',
      'Docker containerization and CI/CD pipelines with GitHub Actions'
    ],
    link: 'https://web.staging.xolab.io'
  },
  {
    role: 'Full Stack Engineer',
    company: 'Peykan',
    location: 'Dubai (Remote)',
    period: '05/2024 - 05/2025',
    description: 'Led comprehensive refactor to improve maintainability and scalability in early-stage project.',
    highlights: [
      'Architecture redesign emphasizing maintainability and scalability',
      'Integrated Zustand, theming, localization, and structured development',
      'Established ESLint, Prettier, testing, CI/CD best practices',
      'Frontend practices became company-wide reference standard'
    ]
  },
  {
    role: 'Frontend Team Lead',
    company: 'IT&T (Lobox)',
    location: 'San Francisco, CA (Remote)',
    period: '12/2020 - 07/2021',
    description: 'Built next-generation professional social platform to compete with LinkedIn.',
    highlights: [
      'Assembled and led skilled frontend and backend team',
      'Implemented ReactJS with SSR for performance and SEO',
      'Pure Node.js services for API, authentication, and real-time features',
      'Scalable architecture and modern engineering practices'
    ]
  },
  {
    role: 'Frontend Web Developer',
    company: 'Digikala.com',
    location: 'Tehran (Amazon of Iran)',
    period: '11/2016 - 12/2017',
    description: 'Enhanced Web UI for largest e-commerce platform in the Middle East.',
    highlights: [
      'Fixed critical mobile app bugs and refactored Firefox mobile layer',
      'Contributed to Partial Shipment project and Digikala Mag refactor',
      'Refactored search page into single-page React application',
      'Code still running after 8 years'
    ],
    link: 'https://digikala.com'
  }
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
