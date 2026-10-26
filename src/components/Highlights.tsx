import { motion } from 'framer-motion';
import { resume } from '@/data/resume';

export function Highlights() {
  return (
    <section id="highlights" className="px-4 md:px-8 pb-10">
      <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {resume.metrics.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors"
          >
            <p className="text-2xl md:text-3xl font-bold text-primary glow-text-subtle font-mono">{metric.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
