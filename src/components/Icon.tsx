import {
  Compass, Layers, Sparkles, Hash, Sun, BookOpen, Moon, Heart, Feather
} from "lucide-react";

const MAP = {
  compass: Compass,
  layers: Layers,
  sparkles: Sparkles,
  hash: Hash,
  sun: Sun,
  book: BookOpen,
  moon: Moon,
  heart: Heart,
  feather: Feather,
} as const;

export type IconName = keyof typeof MAP;

export function ServiceIcon({ name, className = "" }: { name: IconName; className?: string }) {
  const Ico = MAP[name] ?? Sparkles;
  return (
    <div className={`relative inline-grid place-items-center w-14 h-14 rounded-2xl bg-[color:var(--color-cream)] border border-[color:var(--color-gold)]/30 text-[color:var(--color-ink)] ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-[color:var(--color-gold)]/8" />
      <Ico size={22} strokeWidth={1.6} className="relative text-[color:var(--color-gold)]" />
    </div>
  );
}
