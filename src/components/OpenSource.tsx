import { motion } from 'framer-motion';
import { GitMerge, GitPullRequest, Package } from 'lucide-react';
import { resume } from '@/data/resume';
import { SectionHeader } from './SectionHeader';

export function OpenSource() {
  return (
    <section id="open-source" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <SectionHeader title="Open Source" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resume.packages.map((pkg, idx) => (
              <motion.a
                key={pkg.name}
                href={pkg.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)]"
              >
                <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-mono">
                  <Package className="w-5 h-5" />
                  {pkg.name}
                </h3>
                <p className="text-foreground/80 text-sm mt-3 mb-4">{pkg.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-accent mb-4">Upstream Contributions</h3>
            <ul className="space-y-3">
              {resume.pullRequests.map((pr) => {
                const Icon = pr.status === 'merged' ? GitMerge : GitPullRequest;
                return (
                  <li key={pr.url}>
                    <a
                      href={pr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-sm group"
                    >
                      <Icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                          <span className="font-mono text-primary break-all">{pr.repo}</span>
                          <span className="font-mono text-xs text-muted-foreground">
                            {pr.status} {pr.year}
                          </span>
                        </div>
                        <p className="text-foreground/80 group-hover:text-primary transition-colors break-words">{pr.title}</p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
