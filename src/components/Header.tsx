import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Logo } from "./Logo";
import { LINKS, NAV } from "../lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--color-paper)]/90 backdrop-blur-md border-b border-[color:var(--color-ink)]/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between gap-6">
        <Link to="/" aria-label="The Infinite Spirit Voice — Home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors relative py-2 ${
                  isActive
                    ? "text-[color:var(--color-ink)]"
                    : "text-[color:var(--color-ink)]/70 hover:text-[color:var(--color-ink)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-[color:var(--color-gold)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={LINKS.bookOnline}
            target="_blank"
            rel="noreferrer"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
          >
            <CalendarCheck size={16} strokeWidth={2.2} />
            Book an Appointment
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[color:var(--color-ink)]/20 text-[color:var(--color-ink)]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl border border-[color:var(--color-ink)]/10 bg-[color:var(--color-paper)] shadow-xl">
          <div className="px-5 py-3 flex flex-col divide-y divide-[color:var(--color-ink)]/8">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `flex items-center justify-between py-4 text-[17px] ${
                    isActive
                      ? "text-[color:var(--color-ink)]"
                      : "text-[color:var(--color-ink)]/80"
                  }`
                }
              >
                {n.label}
                <span className="text-[color:var(--color-gold)]">→</span>
              </NavLink>
            ))}
          </div>
          <div className="p-4 border-t border-[color:var(--color-ink)]/10">
            <a
              href={LINKS.bookOnline}
              target="_blank"
              rel="noreferrer"
              className="btn-gold w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-[15px] font-semibold"
            >
              <CalendarCheck size={18} />
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
