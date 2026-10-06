import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ColorType } from "../types/color";

interface NextPageButtonProps {
  to: string;
  label: string;
  progressText?: string;
  isPulse?: boolean;
  color?: ColorType;
  icon?: ReactNode;
}

const THEME_STYLES: Record<
  ColorType,
  {
    gradient: string;
    text: string;
    glow: string;
    focusRing: string;
  }
> = {
  cyan: {
    gradient: "from-cyan-500 to-blue-600",
    text: "text-slate-950",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.6)]",
    focusRing: "focus-visible:ring-cyan-400",
  },
  amber: {
    gradient: "from-amber-500 to-orange-600",
    text: "text-slate-950",
    glow: "shadow-[0_0_30px_rgba(251,191,36,0.6)]",
    focusRing: "focus-visible:ring-amber-400",
  },
  emerald: {
    gradient: "from-emerald-500 to-teal-600",
    text: "text-slate-950",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.6)]",
    focusRing: "focus-visible:ring-emerald-400",
  },
  violet: {
    gradient: "from-violet-500 to-purple-600",
    text: "text-white",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.6)]",
    focusRing: "focus-visible:ring-violet-400",
  },
  rose: {
    gradient: "from-rose-500 to-pink-600",
    text: "text-white",
    glow: "shadow-[0_0_30px_rgba(244,63,94,0.6)]",
    focusRing: "focus-visible:ring-rose-400",
  },
};

export function NextPageButton({
  to,
  label,
  progressText,
  isPulse = false,
  color = "cyan",
  icon,
}: NextPageButtonProps) {
  const navigate = useNavigate();
  const theme = THEME_STYLES[color] || THEME_STYLES.cyan;

  const defaultIcon = (
    <svg
      aria-hidden="true"
      className={`w-5 h-5 ${theme.text}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );

  return (
    <div className="flex flex-col items-center gap-3 shrink-0 py-6 px-4 mt-8">
      {progressText && (
        <span className="text-xs font-tech-mono text-slate-400">
          {progressText}
        </span>
      )}
      <button
        onClick={() => navigate(to)}
        className={`px-8 py-4 bg-gradient-to-r ${theme.gradient} ${theme.text} font-tech-mono font-black text-base sm:text-lg rounded-2xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-wider flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${theme.focusRing} ${
          isPulse
            ? `motion-safe:animate-pulse ${theme.glow}`
            : "opacity-90 shadow-lg"
        }`}
      >
        <span>{label}</span>

        {icon !== undefined ? icon : defaultIcon}
      </button>
    </div>
  );
}
