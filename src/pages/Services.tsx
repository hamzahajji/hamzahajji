import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { LINKS, SERVICES } from "../lib/site";
import { PageHeader } from "../components/PageHeader";
import { ServiceIcon, type IconName } from "../components/Icon";

export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Coaching Services"
        title={
          <>
            Sessions & plans, shaped for your <span className="italic text-[color:var(--color-gold)]">next chapter</span>.
          </>
        }
        intro="Book your session now and get the right consultation — from a single reading to full coaching plans, every offering meets you with warmth, depth and precision."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {SERVICES.map((s, i) => (
              <article
                id={s.slug}
                key={s.slug}
                className={`relative rounded-3xl overflow-hidden border border-[color:var(--color-ink)]/10 ${
                  i % 3 === 0
                    ? "bg-[color:var(--color-ink)] text-[color:var(--color-cream)]"
                    : "bg-[color:var(--color-cream-2)] text-[color:var(--color-ink)]"
                }`}
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <ServiceIcon name={s.icon as IconName} />
                      <h2 className={`mt-6 font-display text-3xl leading-tight ${i%3===0?"text-[color:var(--color-cream)]":""}`}>{s.title}</h2>
                      <div className={`mt-2 text-[11px] uppercase tracking-widest ${i%3===0?"text-[color:var(--color-gold-2)]":"text-[color:var(--color-muted)]"}`}>
                        {s.price}
                      </div>
                    </div>
                    <a
                      href={LINKS.bookOnline}
                      target="_blank"
                      rel="noreferrer"
                      className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${
                        i % 3 === 0 ? "text-[color:var(--color-gold-2)]" : "text-[color:var(--color-ink)]"
                      } hover:underline`}
                    >
                      Book this session <ArrowRight size={16} />
                    </a>
                  </div>
                  <div className={`md:col-span-3 p-8 md:p-10 border-t md:border-t-0 md:border-l ${i%3===0?"border-white/10":"border-[color:var(--color-ink)]/8"}`}>
                    <p className={`text-[15px] leading-relaxed ${i%3===0?"text-white/85":"text-[color:var(--color-ink)]/80"}`}>
                      {s.body}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {[
                        "Held in a soft, safe space",
                        "Actionable clarity you can use right away",
                        "Held online — worldwide",
                      ].map((b) => (
                        <li key={b} className={`flex items-center gap-3 text-sm ${i%3===0?"text-white/80":"text-[color:var(--color-ink)]/75"}`}>
                          <CheckCircle2 size={16} className={i%3===0?"text-[color:var(--color-gold-2)]":"text-[color:var(--color-gold)]"} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={LINKS.bookOnline}
              target="_blank"
              rel="noreferrer"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold"
            >
              <CalendarCheck size={18} /> Book an Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
