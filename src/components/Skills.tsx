import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const skills = [
  'JavaScript', 'TypeScript', 'ReactJS', 'React Native',
  'Node.js', 'NestJS', 'Express.js', 'Next.js',
  'HTML5', 'CSS3', 'Tailwind CSS', 'SCSS/Sass',
  'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker',
  'Git', 'GitHub Actions', 'CI/CD', 'Webpack',
  'Zustand', 'Redux', 'React Query', 'Formik',
  'Storybook', 'Jest', 'Testing', 'REST APIs',
  'GraphQL', 'WebSockets', 'Microservices', 'AWS'
];

const categories = [
  {
    title: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'ReactJS', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS'],
    color: 'primary'
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    color: 'accent'
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Webpack', 'AWS'],
    color: 'primary'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-secondary/30">
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
              <span className="text-muted-foreground">//</span> Skills & Tech Stack
            </h2>
          </div>

          {/* Terminal-style display */}
          <div className="bg-card border-2 border-primary/30 rounded-lg overflow-hidden">
            <div className="bg-primary/10 px-4 py-2 border-b border-primary/30 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <span className="text-sm text-muted-foreground font-mono ml-2">
                skills.sh
              </span>
            </div>
            <div className="p-6 font-mono text-sm space-y-2">
              <div className="text-primary">$ cat tech_stack.txt</div>
              <div className="pl-4 space-y-1 text-foreground/80">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-accent">▸</span>
                    <span className="hover:text-primary transition-colors cursor-default">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="text-primary mt-4">
                $ <span className="terminal-cursor">█</span>
              </div>
            </div>
          </div>

          {/* Categorized skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className={`text-xl font-bold mb-4 text-${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-sm text-primary hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
