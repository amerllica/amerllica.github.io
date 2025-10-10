import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { FaStackOverflow, FaMedium } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/amerllica',
    icon: Linkedin,
    username: '@amerllica'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/amerllica',
    icon: Github,
    username: '@amerllica'
  },
  {
    name: 'StackOverflow',
    url: 'https://stackoverflow.com/users/6877799/amerllica',
    icon: FaStackOverflow,
    username: 'amerllica'
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@amerllica',
    icon: FaMedium,
    username: '@amerllica'
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
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
              <span className="text-muted-foreground">//</span> Get In Touch
            </h2>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Direct contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">Direct Contact</h3>

              <a
                href="mailto:amerllica@gmail.com"
                className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)] group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-mono">amerllica@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+989202016078"
                className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)] group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-mono">+98 920 201 6078</p>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">Social Profiles</h3>

              {socials.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)] group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <social.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{social.name}</p>
                    <p className="text-foreground font-mono">{social.username}</p>
                  </div>
                  <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* StackOverflow Flair */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-primary/30 rounded-lg p-6 text-center"
          >
            <h3 className="text-xl font-bold text-primary mb-4">Stack Exchange Reputation</h3>
            <a
              href="https://stackoverflow.com/users/6877799/amerllica"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("inline-flex transition-opacity rounded-md",
                  "border border-primary/30 hover:border-primary overflow-hidden",
                  "min-w-[210px] min-h-[60px] max-w-[210px] max-h-[60px] relative"
              )}
            >
              <img
                src="https://stackexchange.com/users/flair/1948645.png?theme=dark&latest"
                alt="Stack Exchange Flair"
                className="absolute w-[214px] h-[62px] top-[-2px] left-[-2px] object-cover"
              />
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-foreground/80 mb-6">
              Let's build something amazing together!
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono animate-pulse-glow"
              asChild
            >
              <a href="mailto:amerllica@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
