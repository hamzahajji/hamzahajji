import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
};

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-cream-2)] via-[color:var(--color-paper)] to-[#f2e7cf]" />
        <div className="absolute -top-32 -right-24 w-[36rem] h-[36rem] rounded-full bg-[color:var(--color-gold)]/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 w-[32rem] h-[32rem] rounded-full bg-[color:var(--color-ink-3)]/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
        <p className="eyebrow flourish">{eyebrow}</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.03] text-[color:var(--color-ink)]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-[16px] leading-relaxed text-[color:var(--color-ink)]/75">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
