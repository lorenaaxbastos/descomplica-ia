import { ColorType } from "../types/color";

interface SectionBadgeProps {
  label: string;
  step: string;
  color?: ColorType;
}

const BADGE_STYLES: Record<ColorType, { bg: string; dot: string }> = {
  cyan: {
    bg: "bg-cyan-950/80 border-cyan-500/40 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]",
    dot: "bg-cyan-400",
  },
  violet: {
    bg: "bg-violet-950/80 border-violet-500/40 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.25)]",
    dot: "bg-violet-400",
  },
  amber: {
    bg: "bg-amber-950/80 border-amber-500/40 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.25)]",
    dot: "bg-amber-400",
  },
  emerald: {
    bg: "bg-emerald-950/80 border-emerald-500/40 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    dot: "bg-emerald-400",
  },
  rose: {
    bg: "bg-rose-950/80 border-rose-500/40 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.25)]",
    dot: "bg-rose-400",
  },
};

export function SectionBadge({
  label,
  step,
  color = "cyan",
}: SectionBadgeProps) {
  const style = BADGE_STYLES[color] || BADGE_STYLES.cyan;

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] sm:text-xs font-tech-mono font-bold mb-4 sm:mb-6 tracking-widest uppercase backdrop-blur-md shrink-0 ${style.bg}`}
    >
      <span
        aria-hidden="true"
        className={`w-2 h-2 rounded-full motion-safe:animate-ping mr-1 ${style.dot}`}
      />
      {step} // {label.split(" ").join("_")}
    </div>
  );
}
