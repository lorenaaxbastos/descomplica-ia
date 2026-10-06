import { ReactNode } from "react";
import { ColorType } from "../types/color";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  codeTag: string;
  icon: ReactNode;
  color: ColorType;
  onClick: () => void;
}

export function CategoryCard({
  title,
  subtitle,
  codeTag,
  icon,
  color,
  onClick,
}: CategoryCardProps) {
  const STYLES: Record<
    ColorType,
    {
      cardBorder: string;
      iconBox: string;
      iconHover: string;
      textHighlight: string;
      shadow: string;
      focusRing: string;
    }
  > = {
    cyan: {
      cardBorder: "hover:border-cyan-400",
      iconBox:
        "bg-cyan-950/80 border-cyan-500/40 text-cyan-300 group-hover:bg-cyan-500",
      iconHover: "group-hover:text-slate-950",
      textHighlight: "text-cyan-400 group-hover:text-cyan-300",
      shadow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
      focusRing: "focus-visible:ring-cyan-400",
    },
    amber: {
      cardBorder: "hover:border-amber-400",
      iconBox:
        "bg-amber-950/80 border-amber-500/40 text-amber-300 group-hover:bg-amber-500",
      iconHover: "group-hover:text-slate-950",
      textHighlight: "text-amber-400 group-hover:text-amber-300",
      shadow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]",
      focusRing: "focus-visible:ring-amber-400",
    },
    emerald: {
      cardBorder: "hover:border-emerald-400",
      iconBox:
        "bg-emerald-950/80 border-emerald-500/40 text-emerald-300 group-hover:bg-emerald-500",
      iconHover: "group-hover:text-slate-950",
      textHighlight: "text-emerald-400 group-hover:text-emerald-300",
      shadow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]",
      focusRing: "focus-visible:ring-emerald-400",
    },
    violet: {
      cardBorder: "hover:border-violet-400",
      iconBox:
        "bg-violet-950/80 border-violet-500/40 text-violet-300 group-hover:bg-violet-500",
      iconHover: "group-hover:text-white",
      textHighlight: "text-violet-400 group-hover:text-violet-300",
      shadow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
      focusRing: "focus-visible:ring-violet-400",
    },
    rose: {
      cardBorder: "hover:border-rose-400",
      iconBox:
        "bg-rose-950/80 border-rose-500/40 text-rose-300 group-hover:bg-rose-500",
      iconHover: "group-hover:text-white",
      textHighlight: "text-rose-400 group-hover:text-rose-300",
      shadow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]",
      focusRing: "focus-visible:ring-rose-400",
    },
  };

  const style = STYLES[color] || STYLES.cyan;

  return (
    <button
      onClick={onClick}
      className={`group relative p-5 sm:p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${style.cardBorder} ${style.shadow} ${style.focusRing}`}
    >
      <div
        className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 mb-6 sm:mb-6 shadow-inner ${style.iconBox} ${style.iconHover}`}
      >
        {icon}
      </div>

      <span
        className={`font-tech-mono text-[10px] font-bold block uppercase mb-3 ${style.textHighlight}`}
      >
        {codeTag}
      </span>

      <h3 className="font-bold text-sm sm:text-base text-white mb-1.5 leading-snug">
        {title}
      </h3>

      <span className="text-xs text-slate-400 font-tech-mono mb-4">
        {subtitle}
      </span>

      <div
        className={`mt-auto pt-3 border-t border-slate-800/80 w-full flex items-center justify-center gap-1.5 text-xs font-tech-mono transition-colors ${style.textHighlight}`}
      >
        <span>EXPLORAR</span>
        <svg
          aria-hidden="true"
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </button>
  );
}
