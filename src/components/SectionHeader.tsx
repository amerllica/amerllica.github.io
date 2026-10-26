import { Terminal } from 'lucide-react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <Terminal className="w-8 h-8 text-primary" />
      <h2 className="text-3xl md:text-4xl font-bold glow-text-subtle">
        <span className="text-muted-foreground">//</span> {title}
      </h2>
    </div>
  );
}
