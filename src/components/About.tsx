import { motion } from 'framer-motion';
import { Terminal, Code2, Zap, Rocket, Bot } from 'lucide-react';
import { resume } from '@/data/resume';
import { Highlight } from '@/lib/highlight';

const summaryIcons = [Code2, Zap, Rocket, Bot];

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold glow-text-subtle">
              <span className="text-muted-foreground">//</span> About Me
            </h2>
          </div>

          {/* Content */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-6">
            {resume.summary.map((paragraph, idx) => {
              const Icon = summaryIcons[idx % summaryIcons.length];
              return (
                <div key={idx} className="flex items-start gap-4">
                  <Icon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-foreground/90 text-lg leading-relaxed">
                    <Highlight text={paragraph} terms={resume.highlightTerms} />
                  </p>
                </div>
              );
            })}
          </div>

          {/* Location & Contact info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-secondary border border-border rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Location</p>
              <p className="text-primary font-semibold">{resume.profile.location}</p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Email</p>
              <a 
                href={`mailto:${resume.profile.email}`}
                className="text-primary font-semibold hover:text-accent transition-colors"
              >
                {resume.profile.email}
              </a>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Phone</p>
              <a 
                href={resume.profile.phoneHref}
                className="text-primary font-semibold hover:text-accent transition-colors"
              >
                {resume.profile.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
