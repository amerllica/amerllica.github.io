import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';
import { formatPeriod, resume } from '@/data/resume';
import { SectionHeader } from './SectionHeader';

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
          <SectionHeader title="Experience" />

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            <div className="space-y-12">
              {resume.experience.map((exp, idx) => (
                <motion.div
                  key={`${exp.company}-${exp.start}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: Math.min(idx * 0.1, 0.4), duration: 0.6 }}
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
                      <div className="text-accent font-mono text-sm">{formatPeriod(exp.start, exp.end)}</div>
                    </div>

                    <p className="text-foreground/80 mb-4">{exp.summary}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((highlight, i) => (
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
