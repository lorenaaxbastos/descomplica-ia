import { ColorType } from "../types/color";

interface SideTrackerProps {
  activeSection: number;
  totalSections: number;
  sectionTitles: string[];
  color: ColorType;
  onSelect: (section: number) => void;
}

const DOT_STYLES: Record<ColorType, { active: string; focusRing: string }> = {
  cyan: {
    active: "bg-cyan-400 border-white shadow-[0_0_18px_rgba(34,211,238,1)]",
    focusRing: "focus-visible:ring-cyan-400",
  },
  violet: {
    active: "bg-violet-400 border-white shadow-[0_0_18px_rgba(168,85,247,1)]",
    focusRing: "focus-visible:ring-violet-400",
  },
  amber: {
    active: "bg-amber-400 border-white shadow-[0_0_18px_rgba(251,191,36,1)]",
    focusRing: "focus-visible:ring-amber-400",
  },
  emerald: {
    active: "bg-emerald-400 border-white shadow-[0_0_18px_rgba(52,211,153,1)]",
    focusRing: "focus-visible:ring-emerald-400",
  },
  rose: {
    active: "bg-rose-400 border-white shadow-[0_0_18px_rgba(251,113,133,1)]",
    focusRing: "focus-visible:ring-rose-400",
  },
};

export function SideTracker({
  activeSection,
  totalSections,
  sectionTitles,
  color,
  onSelect,
}: SideTrackerProps) {
  const style = DOT_STYLES[color] || DOT_STYLES.cyan;

  return (
    <nav
      aria-label="Navegação lateral de seções"
      className="hidden md:flex fixed left-6 sm:left-10 top-1/2 -translate-y-1/2 z-50 flex-col gap-3"
    >
      {Array.from({ length: totalSections }).map((_, index) => {
        const sectionNumber = index + 1;
        const isActive = sectionNumber === activeSection;
        const titleText = sectionTitles[index] || `Seção 0${sectionNumber}`;

        return (
          <button
            key={index}
            onClick={() => onSelect(sectionNumber)}
            aria-current={isActive ? "step" : undefined}
            aria-label={`Ir para a seção ${sectionNumber}: ${titleText}`}
            className={`group relative flex items-center justify-center w-6 h-6 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${style.focusRing}`}
          >
            <span className="absolute left-8 px-3 py-1 bg-slate-900/95 text-slate-200 border border-slate-700 text-xs font-tech-mono rounded-md shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 group-focus-visible:translate-x-0 backdrop-blur-md">
              {titleText}
            </span>

            <div
              aria-hidden="true"
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? `w-4 h-4 border-2 scale-110 ${style.active}`
                  : "w-3 h-3 bg-slate-800 border border-slate-600 group-hover:scale-110"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
