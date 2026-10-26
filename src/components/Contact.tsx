import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, type LucideIcon } from 'lucide-react';
import { FaStackOverflow, FaMedium, FaNpm } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { Button } from '@/components/ui/button';
import { resume, type LinkLabel } from '@/data/resume';
import { SectionHeader } from './SectionHeader';

const { email, phone, phoneHref, links } = resume.profile;

const socialIcons: Record<LinkLabel, IconType | LucideIcon> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  StackOverflow: FaStackOverflow,
  Medium: FaMedium,
  npm: FaNpm,
};

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
          <SectionHeader title="Get In Touch" />

          {/* Contact grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Direct contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">Direct Contact</h3>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)] group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-mono">{email}</p>
                </div>
              </a>

              <a
                href={phoneHref}
                className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)] group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-mono">{phone}</p>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">Social Profiles</h3>

              {links.map((social, idx) => {
                const Icon = socialIcons[social.label];
                return (
                  <motion.a
                    key={social.label}
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
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{social.label}</p>
                      <p className="text-foreground font-mono">{social.handle}</p>
                    </div>
                    <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

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
              <a href={`mailto:${email}`}>
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
