import { ReactNode } from "react";
import { ColorType } from "../types/color";

interface TechCardProps {
  color?: ColorType | "slate" | "rose";
  headerLabel?: string;
  headerBadge?: string;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  glow?: boolean;
  onClick?: () => void;
  className?: string;
}

const CARD_STYLES = {
  slate: {
    bg: "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300",
    label: "text-slate-400",
    badge: "bg-slate-950/60 border-slate-800 text-slate-400",
    glow: "",
    border: "border-slate-800/80",
    focusRing: "focus-visible:ring-slate-400",
  },
  cyan: {
    bg: "bg-cyan-950/30 border-cyan-500/40 hover:border-cyan-500/70 text-slate-200 shadow-[0_0_25px_rgba(6,182,212,0.15)]",
    label: "text-cyan-400",
    badge: "bg-cyan-950/80 border-cyan-700/60 text-cyan-300",
    glow: "bg-cyan-500/10",
    border: "border-cyan-900/50",
    focusRing: "focus-visible:ring-cyan-400",
  },
  rose: {
    bg: "bg-slate-900/70 border-rose-500/30 hover:border-rose-500/60 text-slate-300 shadow-lg",
    label: "text-rose-400",
    badge: "bg-rose-950/60 border-rose-800/50 text-rose-400/80",
    glow: "bg-rose-500/10",
    border: "border-slate-800/80",
    focusRing: "focus-visible:ring-rose-400",
  },
  amber: {
    bg: "bg-amber-950/30 border-amber-500/40 hover:border-amber-500/70 text-slate-200 shadow-[0_0_25px_rgba(251,191,36,0.15)]",
    label: "text-amber-400",
    badge: "bg-amber-950/80 border-amber-700/60 text-amber-300",
    glow: "bg-amber-500/10",
    border: "border-amber-900/50",
    focusRing: "focus-visible:ring-amber-400",
  },
  emerald: {
    bg: "bg-emerald-950/30 border-emerald-500/40 hover:border-emerald-500/70 text-slate-200 shadow-[0_0_25px_rgba(16,185,129,0.15)]",
    label: "text-emerald-400",
    badge: "bg-emerald-950/80 border-emerald-700/60 text-emerald-300",
    glow: "bg-emerald-500/10",
    border: "border-emerald-900/50",
    focusRing: "focus-visible:ring-emerald-400",
  },
  violet: {
    bg: "bg-violet-950/30 border-violet-500/40 hover:border-violet-500/70 text-slate-200 shadow-[0_0_25px_rgba(139,92,246,0.15)]",
    label: "text-violet-400",
    badge: "bg-violet-950/80 border-violet-700/60 text-violet-300",
    glow: "bg-violet-500/10",
    border: "border-violet-900/50",
    focusRing: "focus-visible:ring-violet-400",
  },
};

export function TechCard({
  color = "cyan",
  headerLabel,
  headerBadge,
  title,
  children,
  footer,
  glow = false,
  onClick,
  className = "",
}: TechCardProps) {
  const style =
    CARD_STYLES[color as keyof typeof CARD_STYLES] || CARD_STYLES.slate;

  const isInteractive = Boolean(onClick);
  const Component = isInteractive ? "button" : "div";

  const interactiveClasses = isInteractive
    ? `cursor-pointer hover:scale-[1.02] text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${style.focusRing}`
    : "";

  return (
    <Component
      {...(isInteractive ? { type: "button", onClick } : {})}
      className={`border rounded-3xl p-5 sm:p-8 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group transition-all ${style.bg} ${interactiveClasses} ${className}`}
    >
      {glow && (
        <div
          aria-hidden="true"
          className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl pointer-events-none ${style.glow}`}
        />
      )}

      <div>
        {(headerLabel || headerBadge) && (
          <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10">
            {headerLabel && (
              <span
                className={`font-tech-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider ${style.label}`}
              >
                {headerLabel}
              </span>
            )}
            {headerBadge && (
              <span
                className={`font-tech-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase border ${style.badge}`}
              >
                {headerBadge}
              </span>
            )}
          </div>
        )}

        {title && (
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-10">
            {title}
          </h3>
        )}

        <div className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 relative z-10">
          {children}
        </div>
      </div>

      {footer && (
        <div className={`pt-3 sm:pt-4 border-t relative z-10 ${style.border}`}>
          {footer}
        </div>
      )}
    </Component>
  );
}
