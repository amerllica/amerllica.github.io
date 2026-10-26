import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { formatMonth, resume } from '@/data/resume';
import { SectionHeader } from './SectionHeader';

export function Writing() {
  return (
    <section id="writing" className="py-20 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <SectionHeader title="Writing" />

          <div className="space-y-4">
            {resume.articles.map((article, idx) => (
              <motion.a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 group"
              >
                <span className="font-mono text-sm text-accent whitespace-nowrap">{formatMonth(article.published)}</span>
                <span className="text-foreground/90 group-hover:text-primary transition-colors flex-1">{article.title}</span>
                <ExternalLink className="hidden md:block w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
