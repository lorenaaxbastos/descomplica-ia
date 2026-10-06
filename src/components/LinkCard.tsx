import { ColorType } from "../types/color";

export interface LinkCardData {
  title: string;
  description: string;
  link: string;
  linkLabel?: string;
}

interface LinkCardProps extends LinkCardData {
  color: ColorType;
}

export function LinkCard({
  title,
  description,
  link,
  color,
  linkLabel = "Acessar link",
}: LinkCardProps) {
  const STYLES: Record<
    string,
    {
      border: string;
      bg: string;
      title: string;
      text: string;
      focusRing: string;
    }
  > = {
    cyan: {
      border: "hover:border-cyan-400/80",
      bg: "bg-cyan-400",
      title: "group-hover:text-cyan-300",
      text: "text-cyan-500 group-hover:text-cyan-400",
      focusRing: "focus-visible:ring-cyan-400",
    },
    violet: {
      border: "hover:border-violet-400/80",
      bg: "bg-violet-400",
      title: "group-hover:text-violet-300",
      text: "text-violet-500 group-hover:text-violet-400",
      focusRing: "focus-visible:ring-violet-400",
    },
    amber: {
      border: "hover:border-amber-400/80",
      bg: "bg-amber-400",
      title: "group-hover:text-amber-300",
      text: "text-amber-500 group-hover:text-amber-400",
      focusRing: "focus-visible:ring-amber-400",
    },
    emerald: {
      border: "hover:border-emerald-400/80",
      bg: "bg-emerald-400",
      title: "group-hover:text-emerald-300",
      text: "text-emerald-500 group-hover:text-emerald-400",
      focusRing: "focus-visible:ring-emerald-400",
    },
    rose: {
      border: "hover:border-rose-400/80",
      bg: "bg-rose-400",
      title: "group-hover:text-rose-300",
      text: "text-rose-500 group-hover:text-rose-400",
      focusRing: "focus-visible:ring-rose-400",
    },
  };

  const style = STYLES[color] || STYLES.rose;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group bg-slate-900/60 border border-slate-800 ${style.border} rounded-2xl p-6 backdrop-blur-md transition-all hover:scale-[1.02] flex flex-col justify-between h-full text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${style.focusRing}`}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span
            aria-hidden="true"
            className={`w-2 h-2 rounded-full ${style.bg} group-hover:animate-ping shrink-0`}
          />
          <h3
            className={`text-xl font-bold text-white ${style.title} transition-colors`}
          >
            {title}
          </h3>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>

      <div
        className={`mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between ${style.text}`}
      >
        <span className="font-tech-mono text-[10px] uppercase tracking-wider">
          {linkLabel}
        </span>
        <svg
          aria-hidden="true"
          className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  );
}
