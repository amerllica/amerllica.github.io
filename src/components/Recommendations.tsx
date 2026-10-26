import { motion } from 'framer-motion';
import { Terminal, Quote } from 'lucide-react';
import { resume } from '@/data/resume';

export function Recommendations() {
  return (
    <section id="recommendations" className="py-20 px-4 md:px-8 bg-secondary/30">
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
              <span className="text-muted-foreground">//</span> LinkedIn Recommendations
            </h2>
          </div>

          {/* Recommendations grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {resume.recommendations.map((rec, idx) => (
              <motion.div
                key={rec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)] relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(rec.name) + '&background=00ff66&color=1c1c1c&size=128';
                    }}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-primary">{rec.name}</h3>
                    <p className="text-sm text-muted-foreground">LinkedIn Colleague</p>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed text-sm italic">
                  "{rec.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
