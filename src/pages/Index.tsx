import { ThreeBackground } from '@/components/ThreeBackground';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Recommendations } from '@/components/Recommendations';
import { Contact } from '@/components/Contact';
import { getVersion } from '@/lib/utils';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Three.js animated background */}
      <ThreeBackground />

      {/* Scanline effect overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[100px] scanline"></div>
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Recommendations />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/30 py-8 px-4 text-center">
        <div className="container mx-auto">
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary">root@amerllica:~$</span> Built with{' '}
            <span className="text-accent">React</span>,{' '}
            <span className="text-accent">TypeScript</span>,{' '}
            <span className="text-accent">Tailwind</span> &{' '}
            <span className="text-accent">Three.js</span>
          </p>
          <p className="text-muted-foreground font-mono text-xs mt-2">
            © 2025 Amer Lotfi Orimi. All rights reserved.
          </p>
          <p className="text-muted-foreground font-mono text-xs mt-2">
            version: {getVersion()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
