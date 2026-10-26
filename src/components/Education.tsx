import { motion } from 'framer-motion';
import { GraduationCap, Languages } from 'lucide-react';
import { formatMonth, resume } from '@/data/resume';
import { SectionHeader } from './SectionHeader';

export function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <SectionHeader title="Education & Languages" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {resume.education.map((item) => (
                <div key={item.degree} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                        <GraduationCap className="w-5 h-5" />
                        {item.degree}
                      </h3>
                      <p className="text-foreground/90 font-semibold mt-1">{item.field}</p>
                      <p className="text-muted-foreground text-sm">{item.institution}, {item.location}</p>
                    </div>
                    <div className="text-accent font-mono text-sm">
                      {formatMonth(item.start)} - {formatMonth(item.end)}
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-accent flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5" />
                Languages
              </h3>
              <ul className="space-y-3">
                {resume.languages.map((language) => (
                  <li key={language.name} className="flex items-center justify-between text-sm">
                    <span className="text-foreground/90">{language.name}</span>
                    <span className="font-mono text-muted-foreground">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
