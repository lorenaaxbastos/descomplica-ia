import { useState, ReactNode, useRef, KeyboardEvent } from "react";
import { ColorType } from "../types/color";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  color: ColorType;
  defaultActiveId?: string;
}

const TAB_STYLES: Record<
  ColorType,
  { active: string; inactive: string; focusRing: string }
> = {
  cyan: {
    active:
      "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105 font-bold border-transparent",
    inactive: "text-slate-400 hover:text-cyan-300 border-transparent",
    focusRing: "focus-visible:ring-cyan-400",
  },
  violet: {
    active:
      "bg-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] scale-105 font-bold border-transparent",
    inactive: "text-slate-400 hover:text-violet-300 border-transparent",
    focusRing: "focus-visible:ring-violet-400",
  },
  amber: {
    active:
      "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105 font-bold border-transparent",
    inactive: "text-slate-400 hover:text-amber-300 border-transparent",
    focusRing: "focus-visible:ring-amber-400",
  },
  emerald: {
    active:
      "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-105 font-bold border-transparent",
    inactive: "text-slate-400 hover:text-emerald-300 border-transparent",
    focusRing: "focus-visible:ring-emerald-400",
  },
  rose: {
    active:
      "bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)] scale-105 font-bold border-transparent",
    inactive: "text-slate-400 hover:text-rose-300 border-transparent",
    focusRing: "focus-visible:ring-rose-400",
  },
};

export function Tabs({ tabs, color, defaultActiveId }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveId || tabs[0]?.id,
  );
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const style = TAB_STYLES[color] || TAB_STYLES.cyan;

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;

    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    }

    if (nextIndex !== index) {
      e.preventDefault();
      tabRefs.current[nextIndex]?.focus();
      setActiveTab(tabs[nextIndex].id);
    }
  };

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className="w-full flex flex-col items-center">
      <div
        role="tablist"
        aria-label="Navegação de conteúdo por abas"
        className="flex flex-wrap justify-center bg-slate-900/80 border border-slate-700 p-1.5 rounded-2xl mb-8 shrink-0 backdrop-blur-md"
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`px-6 sm:px-8 py-2.5 w-full sm:w-fit rounded-xl font-tech-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${style.focusRing} ${
                isActive ? style.active : style.inactive
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
        className={`w-full max-w-5xl shrink-0 min-h-[300px] animate-fade-in text-left rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-8 focus-visible:ring-offset-slate-950 ${style.focusRing}`}
      >
        {activeContent}
      </div>
    </div>
  );
}
