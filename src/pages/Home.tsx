import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, CalendarCheck, Star, Sparkles, Quote, PlayCircle,
} from "lucide-react";
import { LINKS, HERO_IMG, SERVICES, COURSES, TESTIMONIALS } from "../lib/site";
import { ServiceIcon, type IconName } from "../components/Icon";

export function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <EnergyFeature />
      <Courses />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

/* ---------------------------- HERO ---------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-cream-2)] via-[color:var(--color-paper)] to-[#f0e6d1]" />
        <div className="absolute -top-40 -right-32 w-[42rem] h-[42rem] rounded-full bg-[color:var(--color-gold)]/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-[color:var(--color-ink-3)]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Copy */}
        <div className="lg:col-span-7 relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            Coach Lil · Life & Awareness Coach
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-[color:var(--color-ink)]"
          >
            The Infinite <br />
            <span className="italic text-[color:var(--color-gold)]">Spirit Voice</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 text-lg md:text-xl font-display italic text-[color:var(--color-ink)]/80"
          >
            Awaken your inner power and create a more fulfilling life.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-[color:var(--color-ink)]/70"
          >
            A safe space to find your own voice signature. Through life coaching,
            energy healing, numerology and spiritual guidance, Coach Lil helps you
            channel your higher consciousness, break old patterns and vibrate at
            the frequency of your truth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-10 flex items-center gap-4 text-sm text-[color:var(--color-ink)]/60"
          >
            <div className="flex -space-x-2">
              {[0,1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[color:var(--color-paper)] bg-gradient-to-br from-[color:var(--color-gold-2)] to-[color:var(--color-rose)]" />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-[color:var(--color-gold)]">
                {[...Array(5)].map((_,i)=>(<Star key={i} size={14} fill="currentColor" strokeWidth={0} />))}
              </div>
              <span>Trusted by souls across the globe</span>
            </div>
          </motion.div>
        </div>

        {/* Portrait card */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[color:var(--color-gold)]/40 to-transparent blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-[color:var(--color-gold)]/40 bg-[color:var(--color-ink)]">
              <img
                src={HERO_IMG}
                alt="Coach Lil — Fadwa Erraihani"
                className="w-full h-[520px] md:h-[600px] object-cover object-[70%_center]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/60 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4 text-[color:var(--color-cream)]">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-gold-2)]">Founder</div>
                  <div className="mt-1 font-display text-2xl">Fadwa Erraihani</div>
                  <div className="text-xs opacity-80">Certified Life & Awareness Coach</div>
                </div>
                <a
                  href={LINKS.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full grid place-items-center bg-white/10 border border-white/25 backdrop-blur hover:bg-white/20"
                  aria-label="Watch on TikTok"
                >
                  <PlayCircle size={20} />
                </a>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.55 }}
              className="hidden md:flex absolute -left-8 top-14 bg-[color:var(--color-paper)] rounded-2xl shadow-2xl border border-[color:var(--color-ink)]/8 px-5 py-4 items-center gap-3 float"
            >
              <div className="w-11 h-11 rounded-xl grid place-items-center bg-[color:var(--color-ink)] text-[color:var(--color-gold-2)]">
                <Sparkles size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[color:var(--color-muted)]">Practice since</div>
                <div className="font-display text-xl text-[color:var(--color-ink)]">2019</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="hidden md:flex absolute -right-6 bottom-24 bg-[color:var(--color-ink)] text-[color:var(--color-cream)] rounded-2xl shadow-2xl px-5 py-4 items-center gap-3"
            >
              <div className="text-3xl font-display text-[color:var(--color-gold-2)]">∞</div>
              <div>
                <div className="text-xs uppercase tracking-widest opacity-70">Modalities</div>
                <div className="text-sm">Coaching · Energy · Numerology</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- TRUST STRIP ---------------------------- */
function TrustStrip() {
  const items = [
    "Life & Awareness Coaching",
    "Energy Healing",
    "Numerology",
    "Akashic Reading",
    "Spiritual Guidance",
    "Inner Child Healing",
  ];
  return (
    <section className="border-y border-[color:var(--color-ink)]/8 bg-[color:var(--color-ink)]/[0.02]">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-5 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-ink)]/60">
          {items.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              {t}
              {i < items.length - 1 && <span className="text-[color:var(--color-gold)]">✦</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- ABOUT ---------------------------- */
function About() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6 relative order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full border border-[color:var(--color-gold)]/40" />
            <div className="absolute -bottom-6 -right-6 w-56 h-56 rounded-full bg-[color:var(--color-ink)]/[0.04]" />
            <div className="relative rounded-[1.75rem] overflow-hidden border border-[color:var(--color-ink)]/10 shadow-xl">
              <img
                src={HERO_IMG}
                alt="Coach Lil"
                className="w-full h-[520px] object-cover object-[70%_center]"
                loading="lazy"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-6 bg-[color:var(--color-paper)] rounded-2xl shadow-2xl border border-[color:var(--color-ink)]/10 px-5 py-4 max-w-[220px]">
              <div className="flex items-center gap-0.5 text-[color:var(--color-gold)]">
                {[...Array(5)].map((_,i)=>(<Star key={i} size={14} fill="currentColor" strokeWidth={0}/>))}
              </div>
              <p className="mt-2 text-[13px] text-[color:var(--color-ink)]/80 italic">
                "A safe space to find your own voice signature."
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <p className="eyebrow flourish-left">About Coach Lil</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-[color:var(--color-ink)]">
            A soft, powerful voice for your <span className="italic text-[color:var(--color-gold)]">awakening</span>.
          </h2>
          <div className="mt-6 space-y-5 text-[15.5px] leading-relaxed text-[color:var(--color-ink)]/75">
            <p>
              <strong className="text-[color:var(--color-ink)]">Fadwa Erraihani — Coach Lil</strong> is a
              certified life and awareness coach, energy healer and numerologist.
              For years she has guided seekers into the deep, quiet places within,
              where truth and certainty live.
            </p>
            <p>
              Her work is a bridge between the practical and the mystical:
              coaching for the mind you live with every day, energy work for the
              body that carries your story, and numerology for the soul remembering
              why it came.
            </p>
            <p>
              This is your safe space to find your own voice signature — to vibrate
              your truth, channel your higher consciousness and step into a more
              fulfilling life.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "1:1", v: "Coaching" },
              { k: "∞", v: "Guidance" },
              { k: "6+", v: "Courses" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-[color:var(--color-cream)] border border-[color:var(--color-ink)]/8 px-4 py-4 text-center">
                <div className="font-display text-2xl text-[color:var(--color-gold)]">{s.k}</div>
                <div className="text-[11px] uppercase tracking-widest text-[color:var(--color-muted)] mt-1">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
            >
              Learn More <ArrowRight size={16} />
            </Link>
            <a
              href={LINKS.bookOnline}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)] hover:text-[color:var(--color-gold)] transition"
            >
              Or start with a session <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- SERVICES ---------------------------- */
function Services() {
  const shown = SERVICES.slice(0, 6);
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[color:var(--color-cream-2)]">
      <div className="absolute inset-x-0 -top-px h-24 bg-gradient-to-b from-[color:var(--color-paper)] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow flourish">Coaching Services</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-[color:var(--color-ink)]">
            Guidance shaped around <span className="italic text-[color:var(--color-gold)]">you</span>.
          </h2>
          <p className="mt-5 text-[15.5px] text-[color:var(--color-ink)]/70">
            Every session and plan is designed to meet you exactly where you are — with
            professionalism, warmth and the depth of true spiritual work.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="card group relative rounded-3xl bg-[color:var(--color-paper)] border border-[color:var(--color-ink)]/8 p-8 hover:border-[color:var(--color-gold)]/50 hover:shadow-xl"
            >
              <ServiceIcon name={s.icon as IconName} />
              <h3 className="mt-6 font-display text-2xl text-[color:var(--color-ink)]">{s.title}</h3>
              <p className="mt-3 text-[14.5px] text-[color:var(--color-ink)]/70 leading-relaxed">{s.excerpt}</p>
              <div className="mt-6 pt-5 border-t border-dashed border-[color:var(--color-ink)]/10 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-[color:var(--color-muted)]">{s.price}</span>
                <Link
                  to={`/services#${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-gold)]"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
          >
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- ENERGY FEATURE ---------------------------- */
function EnergyFeature() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
      <div className="stars absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-ink)] via-[color:var(--color-ink-2)] to-[color:var(--color-ink)]" />
      <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-[color:var(--color-gold)]/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#2a4a86]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow flourish-left text-[color:var(--color-gold-2)]">Energy & Numerology</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.02]">
            Read the signal <br /> beneath the <span className="italic text-[color:var(--color-gold-2)]">noise</span>.
          </h2>
          <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-white/75">
            Your energy tells a story your mind hasn't yet learned to translate — and
            your numbers hold the map. Together they reveal the cycle you are in,
            the gifts you carry and the next right step.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl">
            {[
              { t: "Personal Year", d: "Where you truly are in your soul's calendar." },
              { t: "Life Path", d: "The number that shapes how you meet the world." },
              { t: "Energy Field", d: "The subtle currents guiding your present." },
              { t: "Akashic Data", d: "What your soul carries across lifetimes." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4">
                <div className="text-[11px] tracking-widest uppercase text-[color:var(--color-gold-2)]">{c.t}</div>
                <div className="mt-1 text-sm text-white/85 leading-snug">{c.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={LINKS.bookOnline}
              target="_blank"
              rel="noreferrer"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold"
            >
              Explore Energy & Numerology <ArrowRight size={16} />
            </a>
            <Link
              to="/services"
              className="btn-ghost-light inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold"
            >
              See readings
            </Link>
          </div>
        </div>

        {/* Orb visualization */}
        <div className="lg:col-span-5 relative h-[420px] md:h-[520px]">
          <div className="absolute inset-0 grid place-items-center">
            {[380, 300, 220, 140].map((size, i) => (
              <div
                key={size}
                className={`absolute rounded-full border border-[color:var(--color-gold-2)]/25 ${i%2? "float": ""}`}
                style={{ width: size, height: size, animationDelay: `${i * 0.4}s` }}
              />
            ))}
            <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-[color:var(--color-gold-2)] via-[color:var(--color-gold)] to-[#8f6620] blur-2xl opacity-70 float" />
            <div className="relative w-52 h-52 rounded-full bg-gradient-to-br from-[color:var(--color-gold-2)] to-[#8f6620] grid place-items-center shadow-2xl">
              <div className="absolute inset-2 rounded-full bg-[color:var(--color-ink)] grid place-items-center">
                <span className="font-display text-6xl text-[color:var(--color-gold-2)]">∞</span>
              </div>
            </div>
            {/* twinkles */}
            {[
              [10,20],[80,30],[20,80],[75,75],[50,10],[90,55],[5,55],[45,90]
            ].map(([x,y], i) => (
              <span
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-white twinkle"
                style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- COURSES ---------------------------- */
function Courses() {
  const shown = COURSES.slice(0, 6);
  return (
    <section className="relative py-24 md:py-32 bg-[color:var(--color-paper)]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow flourish-left">Online Courses</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-[color:var(--color-ink)]">
              Deep, self-paced journeys.
            </h2>
            <p className="mt-4 text-[15.5px] text-[color:var(--color-ink)]/70">
              Designed with extreme professionalism and precision to meet you where you are —
              and to take you exactly where your soul is asking to go.
            </p>
          </div>
          <Link
            to="/courses"
            className="btn-ghost self-start md:self-auto inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
          >
            All courses <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="card group rounded-3xl overflow-hidden bg-[color:var(--color-cream-2)] border border-[color:var(--color-ink)]/8 hover:border-[color:var(--color-gold)]/50 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
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
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-[color:var(--color-ink)]">{c.title}</h3>
                <p className="mt-3 text-[14px] text-[color:var(--color-ink)]/70 leading-relaxed">{c.excerpt}</p>
                <Link
                  to={`/courses#${c.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-gold)]"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- TESTIMONIALS ---------------------------- */
function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-[color:var(--color-cream-2)]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow flourish">Voices of the Journey</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-[color:var(--color-ink)]">
            What clients are <span className="italic text-[color:var(--color-gold)]">saying</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="relative rounded-3xl bg-[color:var(--color-paper)] border border-[color:var(--color-ink)]/8 p-7"
            >
              <Quote className="absolute -top-3 left-6 text-[color:var(--color-gold)] bg-[color:var(--color-cream-2)] rounded-full p-1" size={28} />
              <div className="flex items-center gap-1 text-[color:var(--color-gold)]">
                {[...Array(5)].map((_,i)=>(<Star key={i} size={14} fill="currentColor" strokeWidth={0} />))}
              </div>
              <blockquote className="mt-4 text-[14.5px] text-[color:var(--color-ink)]/80 leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[color:var(--color-gold-2)] to-[color:var(--color-rose)] grid place-items-center text-[color:var(--color-ink)] font-display">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[color:var(--color-ink)]">{t.name}</div>
                  <div className="text-[11px] uppercase tracking-widest text-[color:var(--color-muted)]">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- FINAL CTA ---------------------------- */
function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-[color:var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[color:var(--color-ink)] text-[color:var(--color-cream)] p-10 md:p-16">
          <div className="stars absolute inset-0 opacity-50" />
          <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-[color:var(--color-ink-3)]/60 blur-3xl" />

          <div className="relative grid md:grid-cols-12 items-center gap-8">
            <div className="md:col-span-8">
              <p className="eyebrow text-[color:var(--color-gold-2)]">Begin</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.03]">
                Ready to begin your <span className="italic text-[color:var(--color-gold-2)]">journey</span>?
              </h2>
              <p className="mt-5 max-w-xl text-white/75 text-[15.5px] leading-relaxed">
                Whether it's a single conversation, a full coaching plan, or the deep
                work of a course — this is your invitation. The rest of your life
                begins with the first session.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href={LINKS.bookOnline}
                target="_blank"
                rel="noreferrer"
                className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold"
              >
                <CalendarCheck size={18} />
                Book an Appointment
              </a>
              <div className="mt-4 text-xs text-white/60 tracking-widest uppercase">
                Sessions online · Worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
