import { motion } from 'framer-motion';
import { FaStackOverflow } from 'react-icons/fa6';
import { formatMonth, resume } from '@/data/resume';
import { cn } from '@/lib/utils';
import { SectionHeader } from './SectionHeader';

const so = resume.stackOverflow;

const stats = [
  { label: 'Reputation', value: so.reputation.toLocaleString('en-US') },
  { label: 'People reached', value: so.peopleReached },
  { label: 'Answers', value: so.answers.toLocaleString('en-US') },
  { label: 'Member since', value: formatMonth(so.memberSince) },
];

const badges = [
  { label: 'gold', count: so.gold, className: 'bg-yellow-500' },
  { label: 'silver', count: so.silver, className: 'bg-gray-300' },
  { label: 'bronze', count: so.bronze, className: 'bg-orange-700' },
];

export function StackOverflowCard() {
  return (
    <section id="stack-overflow" className="py-20 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <SectionHeader title="Stack Overflow" />

          <div className="bg-card border-2 border-primary/30 rounded-lg p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-secondary border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary font-mono">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 justify-center">
              {badges.map((badge) => (
                <span key={badge.label} className="flex items-center gap-2 font-mono text-sm text-foreground/80">
                  <span className={cn('w-3 h-3 rounded-full', badge.className)} />
                  {badge.count} {badge.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {so.topTags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs text-primary font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4">
              <a
                href={so.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex transition-opacity rounded-md',
                  'border border-primary/30 hover:border-primary overflow-hidden',
                  'min-w-[210px] min-h-[60px] max-w-[210px] max-h-[60px] relative',
                )}
              >
                <img
                  src={so.flairUrl}
                  alt="Stack Exchange Flair"
                  className="absolute w-[214px] h-[62px] top-[-2px] left-[-2px] object-cover"
                />
              </a>
              <a
                href={so.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-mono"
              >
                <FaStackOverflow className="w-4 h-4" />
                View profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
