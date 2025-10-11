import { Download, Terminal, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import avatar from '@/assets/avatar.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 md:px-8 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Avatar with glow effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative inline-block"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary animate-pulse-glow">
              <img
                src={avatar}
                alt="Amer Lotfi Orimi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-3 rounded-full animate-float">
              <Terminal className="w-6 h-6" />
            </div>
          </motion.div>

          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-sm md:text-base text-muted-foreground"
          >
            <span className="text-primary">root@amerllica:~$</span> whoami
          </motion.div>

          {/* Name and title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold glow-text mb-4">
              Amer Lotfi Orimi
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-accent">
              <Code className="w-6 h-6" />
              <span className="font-mono">Full-Stack Engineer</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 leading-relaxed"
          >
            Passionate about building scalable web & mobile applications with{' '}
            <span className="text-primary font-semibold">React</span>,{' '}
            <span className="text-primary font-semibold">TypeScript</span>,{' '}
            <span className="text-primary font-semibold">Node.js</span>, and{' '}
            <span className="text-primary font-semibold">NestJS</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono gap-2 animate-pulse-glow"
              asChild
            >
              <a href="#contact">
                <Terminal className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-mono gap-2"
              asChild
            >
              <a href="/Amer_Lotfi-Orimi_Oct-2025.pdf" download>
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
