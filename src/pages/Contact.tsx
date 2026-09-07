import { useState } from "react";
import { CalendarCheck, Mail, MessageCircle, Send, Instagram, Music2 } from "lucide-react";
import { LINKS } from "../lib/site";
import { PageHeader } from "../components/PageHeader";

export function ContactPage() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    const subject = encodeURIComponent(form.subject || "Hello Coach Lil");
    // Fallback: hand off to the existing Wix contact form as well
    setTimeout(() => {
      window.location.href = `mailto:contact@theinfinitelil.com?subject=${subject}&body=${body}`;
      setState("sent");
    }, 500);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's <span className="italic text-[color:var(--color-gold)]">keep in touch</span>.
          </>
        }
        intro="Reach out for guidance. Whether it's a session enquiry, a course question or a moment of support — your message is warmly welcomed."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[color:var(--color-ink)] text-[color:var(--color-cream)] p-8 md:p-10 relative overflow-hidden">
              <div className="stars absolute inset-0 opacity-40" />
              <div className="absolute -top-24 -right-16 w-64 h-64 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl" />

              <div className="relative">
                <h2 className="font-display text-3xl">Schedule a call today.</h2>
                <p className="mt-4 text-white/75 text-[14.5px] leading-relaxed">
                  Feel free to reach out for guidance; I'm here to help you navigate any
                  challenge. Whether it's professional advice or personal support, your
                  questions are always welcome.
                </p>

                <a
                  href={LINKS.bookOnline}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold"
                >
                  <CalendarCheck size={16} />
                  Book an Appointment
                </a>

                <div className="mt-10 space-y-4 text-sm">
                  <a href={LINKS.contact} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/85 hover:text-[color:var(--color-gold-2)]">
                    <span className="w-9 h-9 grid place-items-center rounded-full border border-white/20">
                      <Mail size={15} />
                    </span>
                    Send a message via the contact form
                  </a>
                  <a href={LINKS.forum} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/85 hover:text-[color:var(--color-gold-2)]">
                    <span className="w-9 h-9 grid place-items-center rounded-full border border-white/20">
                      <MessageCircle size={15} />
                    </span>
                    Join the community forum
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-3">
                  <a href={LINKS.instagram} target="_blank" rel="noreferrer"
                    className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-[color:var(--color-gold-2)] hover:text-[color:var(--color-gold-2)] transition"
                    aria-label="Instagram">
                    <Instagram size={16} />
                  </a>
                  <a href={LINKS.tiktok} target="_blank" rel="noreferrer"
                    className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-[color:var(--color-gold-2)] hover:text-[color:var(--color-gold-2)] transition"
                    aria-label="TikTok">
                    <Music2 size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-[color:var(--color-cream-2)] border border-[color:var(--color-ink)]/10 p-8 md:p-10"
            >
              <h2 className="font-display text-3xl text-[color:var(--color-ink)]">Share your thoughts</h2>
              <p className="mt-2 text-[14px] text-[color:var(--color-ink)]/70">
                Fill in the form and I will reply personally.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Field label="Your Name" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Field label="Email" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                <div className="md:col-span-2">
                  <Field label="Subject" name="subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] uppercase tracking-widest text-[color:var(--color-muted)] mb-2">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={6}
                    className="w-full rounded-2xl bg-[color:var(--color-paper)] border border-[color:var(--color-ink)]/12 px-4 py-3 text-[15px] outline-none focus:border-[color:var(--color-gold)] transition"
                    placeholder="How can I support you?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={state === "sending"}
                className="mt-8 btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold disabled:opacity-70"
              >
                {state === "sent" ? "Message sent ✓" : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
              <p className="mt-3 text-[12px] text-[color:var(--color-muted)]">
                Prefer another way? Use the <a href={LINKS.contact} target="_blank" rel="noreferrer" className="underline hover:text-[color:var(--color-gold)]">official contact form</a>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, value, onChange, type = "text", required = false,
}: {
  label: string; name: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-widest text-[color:var(--color-muted)] mb-2">{label}</label>
      <input
        required={required}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl bg-[color:var(--color-paper)] border border-[color:var(--color-ink)]/12 px-4 py-3 text-[15px] outline-none focus:border-[color:var(--color-gold)] transition"
      />
    </div>
  );
}
