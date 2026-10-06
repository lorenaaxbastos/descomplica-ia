import { ReactNode } from "react";
import { ColorType } from "../types/color";

export interface IconCardData {
  title: string;
  subtitle: string;
  description: string;
  codeTag?: string;
  icon?: ReactNode;
}

interface IconCardProps extends IconCardData {
  color: ColorType;
}

const COLOR_STYLES: Record<
  ColorType,
  {
    iconText: string;
    codeTagText: string;
    subtitleText: string;
  }
> = {
  cyan: {
    iconText: "text-cyan-500",
    codeTagText: "text-cyan-400",
    subtitleText: "text-cyan-400/80",
  },
  violet: {
    iconText: "text-violet-500",
    codeTagText: "text-violet-400",
    subtitleText: "text-violet-300",
  },
  amber: {
    iconText: "text-amber-500",
    codeTagText: "text-amber-400",
    subtitleText: "text-amber-400/80",
  },
  emerald: {
    iconText: "text-emerald-500",
    codeTagText: "text-emerald-400",
    subtitleText: "text-emerald-400/80",
  },
  rose: {
    iconText: "text-rose-500",
    codeTagText: "text-rose-400",
    subtitleText: "text-rose-300",
  },
};

export function IconCard({
  title,
  subtitle,
  description,
  codeTag,
  icon,
  color,
}: IconCardProps) {
  const styles = COLOR_STYLES[color] || COLOR_STYLES.cyan;

  return (
    <div className="bg-slate-950/70 border border-slate-800 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden h-full">
      {icon && (
        <div
          aria-hidden="true"
          className={`absolute -top-4 -right-4 opacity-10 ${styles.iconText} pointer-events-none`}
        >
          {icon}
        </div>
      )}

      <div className="relative z-10">
        {codeTag && (
          <span
            className={`font-tech-mono text-[10px] font-bold ${styles.codeTagText} uppercase tracking-widest block mb-2`}
          >
            {codeTag}
          </span>
        )}
        <h3 className="text-lg font-bold text-white leading-snug mb-1">
          {title}
        </h3>
        <span
          className={`text-xs ${styles.subtitleText} font-tech-mono mb-4 block`}
        >
          {subtitle}
        </span>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
