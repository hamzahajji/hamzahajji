type Props = { light?: boolean; className?: string };

export function Logo({ light = false, className = "" }: Props) {
  const primary = light ? "#f6efe2" : "#0a1a33";
  const accent = "#c9a24a";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 64 64" aria-hidden>
        <circle cx="32" cy="32" r="30" fill="none" stroke={accent} strokeOpacity="0.35" strokeWidth="1" />
        <path
          d="M14 32c0-6 4-10 9-10 4 0 7 3 9 6 2 3 5 6 9 6 5 0 9-4 9-10s-4-10-9-10c-4 0-7 3-9 6-2 3-5 6-9 6-5 0-9-4-9-10"
          fill="none"
          stroke={accent}
          strokeWidth="2.2"
          strokeLinecap="round"
          transform="translate(0 10)"
        />
        <path
          d="M14 42c0-6 4-10 9-10 4 0 7 3 9 6 2 3 5 6 9 6 5 0 9-4 9-10"
          fill="none"
          stroke={accent}
          strokeWidth="2.2"
          strokeLinecap="round"
          transform="rotate(180 32 32) translate(0 -10)"
        />
      </svg>
      <div className="leading-tight">
        <div className="font-display text-[17px] tracking-wide" style={{ color: primary }}>
          The Infinite Spirit Voice
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em]" style={{ color: accent }}>
          By Coach Lil
        </div>
      </div>
    </div>
  );
}
