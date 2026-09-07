import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle, Music2 } from "lucide-react";
import { Logo } from "./Logo";
import { LINKS, NAV } from "../lib/site";

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--color-ink)] text-[color:var(--color-cream)] pt-20 pb-10 overflow-hidden">
      <div className="stars absolute inset-0 opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[color:var(--color-gold)]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-[color:var(--color-ink-3)]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo light />
          <p className="mt-5 max-w-sm text-[color:var(--color-cream)]/70 leading-relaxed">
            A safe space to find your own voice signature — coaching, energy healing,
            numerology and spiritual guidance to awaken your inner power.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={LINKS.instagram} target="_blank" rel="noreferrer"
              className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)] transition"
              aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href={LINKS.tiktok} target="_blank" rel="noreferrer"
              className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)] transition"
              aria-label="TikTok">
              <Music2 size={16} />
            </a>
            <a href={LINKS.forum} target="_blank" rel="noreferrer"
              className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)] transition"
              aria-label="Community">
              <MessageCircle size={16} />
            </a>
            <a href={LINKS.contact} target="_blank" rel="noreferrer"
              className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)] transition"
              aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-lg text-[color:var(--color-gold-2)]">Navigate</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/75 hover:text-[color:var(--color-gold-2)]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-lg text-[color:var(--color-gold-2)]">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href={LINKS.bookOnline} target="_blank" rel="noreferrer" className="text-white/75 hover:text-[color:var(--color-gold-2)]">Book Online</a></li>
            <li><a href={LINKS.bookStore} target="_blank" rel="noreferrer" className="text-white/75 hover:text-[color:var(--color-gold-2)]">Book Store</a></li>
            <li><a href={LINKS.events} target="_blank" rel="noreferrer" className="text-white/75 hover:text-[color:var(--color-gold-2)]">Events</a></li>
            <li><a href={LINKS.forum} target="_blank" rel="noreferrer" className="text-white/75 hover:text-[color:var(--color-gold-2)]">Community</a></li>
            <li><a href={LINKS.meditations} target="_blank" rel="noreferrer" className="text-white/75 hover:text-[color:var(--color-gold-2)]">Meditations</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-lg text-[color:var(--color-gold-2)]">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>Coach Lil</li>
            <li>Fadwa Erraihani</li>
            <li>
              <a href={LINKS.contact} target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-gold-2)]">
                Contact form →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <p>© {new Date().getFullYear()} The Infinite Spirit Voice — Coach Lil. All rights reserved.</p>
        <p className="tracking-widest uppercase">Awaken · Align · Ascend</p>
      </div>
    </footer>
  );
}
