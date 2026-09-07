import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, Sparkles, Heart, Compass } from "lucide-react";
import { HERO_IMG, LINKS } from "../lib/site";
import { PageHeader } from "../components/PageHeader";

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Coach Lil"
        title={
          <>
            The voice within, <span className="italic text-[color:var(--color-gold)]">brought forward</span>.
          </>
        }
        intro="Fadwa Erraihani — Coach Lil — is a certified life and awareness coach, energy healer and numerologist. Her practice is a bridge between the practical and the mystical."
      />

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[color:var(--color-gold)]/30 to-transparent blur-xl" />
              <div className="relative rounded-[1.75rem] overflow-hidden border border-[color:var(--color-ink)]/10 shadow-xl">
                <img src={HERO_IMG} alt="Coach Lil" className="w-full h-[560px] object-cover object-[70%_center]" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { k: "Certified", v: "Life Coach" },
                { k: "Energy", v: "Healer" },
                { k: "Numerologist", v: "& Reader" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl bg-[color:var(--color-cream)] border border-[color:var(--color-ink)]/8 px-3 py-3 text-center">
                  <div className="font-display text-lg text-[color:var(--color-ink)]">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--color-muted)] mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5 text-[15.5px] leading-relaxed text-[color:var(--color-ink)]/80">
              <p>
                <strong>Fadwa Erraihani (Coach Lil)</strong> is a certified life and awareness
                coach, energy healer and numerologist. Her work invites you to find the voice
                within — the voice of your truth and certainty.
              </p>
              <p>
                Every service she offers is designed to guide you into tapping your
                authenticity, channeling your higher consciousness and creating a safe space
                to find your own voice signature — so you can vibrate at the frequency
                of your soul.
              </p>
              <p>
                Lil's practice is both grounded and mystical. She blends coaching for the
                everyday mind with energy work for the body that carries your story, and
                numerology for the soul that remembers why it came. It is spiritual work
                you can act on.
              </p>
              <p>
                Whether you come for a single session, a full coaching plan, or a course,
                you will meet a practitioner who holds space with devotion, precision and
                a deep, unwavering warmth.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Compass, t: "Guidance", d: "Life coaching that meets you where you are." },
                { icon: Sparkles, t: "Depth", d: "Numerology, energy and Akashic work." },
                { icon: Heart, t: "Warmth", d: "A softness that lets real change land." },
              ].map((v) => (
                <div key={v.t} className="rounded-2xl bg-[color:var(--color-cream-2)] border border-[color:var(--color-ink)]/8 p-5">
                  <v.icon size={20} className="text-[color:var(--color-gold)]" />
                  <div className="mt-3 font-display text-lg text-[color:var(--color-ink)]">{v.t}</div>
                  <div className="text-[13px] text-[color:var(--color-ink)]/70">{v.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={LINKS.bookOnline}
                target="_blank"
                rel="noreferrer"
                className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold"
              >
                <CalendarCheck size={18} /> Book an Appointment
              </a>
              <Link
                to="/services"
                className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
