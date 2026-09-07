import { ArrowRight, PlayCircle } from "lucide-react";
import { COURSES, LINKS } from "../lib/site";
import { PageHeader } from "../components/PageHeader";

export function CoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Online Courses"
        title={
          <>
            Deep journeys, <span className="italic text-[color:var(--color-gold)]">designed with precision</span>.
          </>
        }
        intro="These courses are designed for you with extreme professionalism and precision to meet your needs — self-paced, cinematic and profoundly transformative."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {COURSES.map((c, i) => (
              <article
                id={c.slug}
                key={c.slug}
                className="group relative rounded-3xl overflow-hidden bg-[color:var(--color-cream-2)] border border-[color:var(--color-ink)]/8 hover:border-[color:var(--color-gold)]/40 transition"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-72 md:h-full overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-[color:var(--color-paper)]/95 text-[color:var(--color-ink)] px-3 py-1.5 rounded-full">
                      {c.tag}
                    </span>
                    <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-white/85 flex items-center gap-2">
                      Module {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-2xl text-[color:var(--color-ink)]">{c.title}</h3>
                      <p className="mt-4 text-[14.5px] leading-relaxed text-[color:var(--color-ink)]/75">
                        {c.excerpt}
                      </p>
                      <ul className="mt-6 space-y-2 text-[13.5px] text-[color:var(--color-ink)]/75">
                        <li className="flex items-center gap-2">
                          <PlayCircle size={14} className="text-[color:var(--color-gold)]" />
                          Video-based lessons
                        </li>
                        <li className="flex items-center gap-2">
                          <PlayCircle size={14} className="text-[color:var(--color-gold)]" />
                          Guided meditations & practice
                        </li>
                        <li className="flex items-center gap-2">
                          <PlayCircle size={14} className="text-[color:var(--color-gold)]" />
                          Self-paced, lifetime access
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <a
                        href={LINKS.courses}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold"
                      >
                        Learn More <ArrowRight size={14} />
                      </a>
                      <a
                        href={LINKS.bookOnline}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[12px] font-semibold text-[color:var(--color-gold)] hover:underline"
                      >
                        Enquire →
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
