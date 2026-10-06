import { ColorType } from "../types/color";

interface TopNavBarProps {
  pageNumber: number;
  totalPages: number;
  color: ColorType;
  onPrev: () => void;
  onNext: () => void;
}

const BAR_STYLES: Record<
  ColorType,
  { text: string; bar: string; focusRing: string }
> = {
  cyan: {
    text: "text-cyan-400",
    bar: "from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_15px_rgba(34,211,238,0.8)]",
    focusRing: "focus-visible:ring-cyan-400",
  },
  violet: {
    text: "text-violet-400",
    bar: "from-violet-400 via-purple-400 to-fuchsia-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]",
    focusRing: "focus-visible:ring-violet-400",
  },
  amber: {
    text: "text-amber-400",
    bar: "from-amber-400 via-orange-400 to-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.8)]",
    focusRing: "focus-visible:ring-amber-400",
  },
  emerald: {
    text: "text-emerald-400",
    bar: "from-emerald-400 via-teal-400 to-emerald-500 shadow-[0_0_15px_rgba(52,211,153,0.8)]",
    focusRing: "focus-visible:ring-emerald-400",
  },
  rose: {
    text: "text-rose-400",
    bar: "from-rose-400 via-pink-400 to-rose-500 shadow-[0_0_15px_rgba(251,113,133,0.8)]",
    focusRing: "focus-visible:ring-rose-400",
  },
};

export function TopNavBar({
  pageNumber,
  totalPages,
  color,
  onPrev,
  onNext,
}: TopNavBarProps) {
  const pagePercentage = (pageNumber / totalPages) * 100;
  const style = BAR_STYLES[color] || BAR_STYLES.cyan;

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === totalPages;

  return (
    <nav
      aria-label="Navegação superior de páginas"
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 backdrop-blur-xl bg-slate-950/80 border border-slate-800/90 px-5 py-2.5 rounded-full shadow-2xl"
    >
      <button
        onClick={onPrev}
        disabled={isFirstPage}
        className={`p-1 rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${style.focusRing} ${
          isFirstPage
            ? "opacity-20 cursor-not-allowed text-slate-600"
            : "hover:bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
        }`}
        aria-label="Página anterior"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="flex flex-col items-center gap-1.5">
        <span
          className={`text-[11px] font-tech-mono font-bold tracking-widest uppercase transition-colors duration-500 ${style.text}`}
        >
          PÁGINA {pageNumber} DE {totalPages}
        </span>
        <div
          role="progressbar"
          aria-valuenow={pageNumber}
          aria-valuemin={1}
          aria-valuemax={totalPages}
          aria-valuetext={`Página ${pageNumber} de ${totalPages}`}
          className="w-40 sm:w-56 h-2 bg-slate-900 border border-slate-800 rounded-full overflow-hidden p-0.5"
        >
          <div
            className={`h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-in-out ${style.bar}`}
            style={{ width: `${pagePercentage}%` }}
          />
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={isLastPage}
        className={`p-1 rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${style.focusRing} ${
          isLastPage
            ? "opacity-20 cursor-not-allowed text-slate-600"
            : "hover:bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
        }`}
        aria-label="Próxima página"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </nav>
  );
}
