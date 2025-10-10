import { motion } from 'framer-motion';
import { Terminal, Code2, Zap } from 'lucide-react';

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
            <div className="flex items-start gap-4">
              <Code2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <p className="text-foreground/90 text-lg leading-relaxed">
                I'm a passionate full-stack engineer with a strong foundation in front-end 
                technologies like <span className="text-primary font-semibold">JavaScript</span>,{' '}
                <span className="text-primary font-semibold">TypeScript</span>,{' '}
                <span className="text-primary font-semibold">ReactJS</span>, and{' '}
                <span className="text-primary font-semibold">React Native</span>, complemented 
                by solid back-end experience with{' '}
                <span className="text-primary font-semibold">Node.js</span> and the{' '}
                <span className="text-primary font-semibold">NestJS</span> framework.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <p className="text-foreground/90 text-lg leading-relaxed">
                My work spans building and maintaining scalable web and mobile applications, 
                modernising legacy systems, and designing efficient architectures. I thrive on 
                solving complex problems end-to-end, from crafting intuitive UIs to developing 
                robust APIs.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-foreground/90 text-lg leading-relaxed italic">
                Outside of work, I enjoy writing technical blog posts, contributing to{' '}
                <a 
                  href="https://stackoverflow.com/users/6877799/amerllica" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 underline transition-colors"
                >
                  Stack Overflow
                </a>, and advocating for clean, type-safe code across the stack.
              </p>
            </div>
          </div>

          {/* Location & Contact info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-secondary border border-border rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Location</p>
              <p className="text-primary font-semibold">Tehran, Iran</p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Email</p>
              <a 
                href="mailto:amerllica@gmail.com"
                className="text-primary font-semibold hover:text-accent transition-colors"
              >
                amerllica@gmail.com
              </a>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Phone</p>
              <a 
                href="tel:+989202016078"
                className="text-primary font-semibold hover:text-accent transition-colors"
              >
                +98 920 201 6078
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
