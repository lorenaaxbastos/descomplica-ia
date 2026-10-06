import { useState } from "react";
import { ColorType } from "../types/color";

export interface DilemmaOption {
  id: number;
  label: string;
  text: string;
  feedbackTitle: string;
  feedbackText: string;
  isAlert?: boolean;
}

export interface DilemmaData {
  title?: string;
  scenario: string;
  options: DilemmaOption[];
}

interface DilemmaQuestionProps {
  data: DilemmaData;
  color: ColorType;
  onComplete?: () => void;
}

const THEME_STYLES: Record<
  ColorType,
  {
    headerText: string;
    scenarioText: string;
    borderDashed: string;
    glowBg: string;
  }
> = {
  cyan: {
    headerText: "text-cyan-400",
    scenarioText: "text-cyan-300",
    borderDashed: "border-cyan-500/50",
    glowBg: "bg-cyan-600/10",
  },
  violet: {
    headerText: "text-violet-400",
    scenarioText: "text-violet-300",
    borderDashed: "border-violet-500/50",
    glowBg: "bg-violet-600/10",
  },
  amber: {
    headerText: "text-amber-400",
    scenarioText: "text-amber-300",
    borderDashed: "border-amber-500/50",
    glowBg: "bg-amber-600/10",
  },
  emerald: {
    headerText: "text-emerald-400",
    scenarioText: "text-emerald-300",
    borderDashed: "border-emerald-500/50",
    glowBg: "bg-emerald-600/10",
  },
  rose: {
    headerText: "text-rose-400",
    scenarioText: "text-rose-300",
    borderDashed: "border-rose-500/50",
    glowBg: "bg-rose-600/10",
  },
};

function DilemmaHeader({
  title,
  hasSelection,
  color,
}: {
  title?: string;
  hasSelection: boolean;
  color: ColorType;
}) {
  const theme = THEME_STYLES[color] || THEME_STYLES.cyan;
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 relative z-10">
      <span
        className={`font-tech-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider ${theme.headerText}`}
      >
        {title || "// DILEMA DO CIDADÃO (REFLEXÃO INTERATIVA)"}
      </span>
      <span className="font-tech-mono text-[10px] sm:text-xs text-slate-400">
        {hasSelection ? "[ POSICIONAMENTO REGISTRADO ]" : "[ PENDENTE ]"}
      </span>
    </div>
  );
}

function DilemmaScenario({
  scenario,
  color,
}: {
  scenario: string;
  color: ColorType;
}) {
  const theme = THEME_STYLES[color] || THEME_STYLES.cyan;
  return (
    <div className="mb-6 relative z-10">
      <span
        className={`font-tech-mono text-xs font-bold block mb-2 uppercase ${theme.scenarioText}`}
      >
        Cenário:
      </span>
      <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-medium">
        {scenario}
      </p>
    </div>
  );
}

function DilemmaOptionButton({
  opt,
  isSelected,
  hasSelection,
  pageColor,
  onClick,
}: {
  opt: DilemmaOption;
  isSelected: boolean;
  hasSelection: boolean;
  pageColor: ColorType;
  onClick: () => void;
}) {
  const optColor = opt.isAlert && hasSelection ? "amber" : pageColor;

  const BUTTON_STYLES: Record<
    string,
    { selected: string; unselected: string }
  > = {
    cyan: {
      selected:
        "bg-cyan-500 text-slate-950 border-transparent font-bold shadow-[0_0_20px] shadow-cyan-500/50 scale-[1.02] focus-visible:ring-cyan-400",
      unselected:
        "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-cyan-400 hover:text-white focus-visible:ring-cyan-400",
    },
    violet: {
      selected:
        "bg-violet-500 text-white border-transparent font-bold shadow-[0_0_20px] shadow-violet-500/50 scale-[1.02] focus-visible:ring-violet-400",
      unselected:
        "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-violet-400 hover:text-white focus-visible:ring-violet-400",
    },
    amber: {
      selected:
        "bg-amber-500 text-slate-950 border-transparent font-bold shadow-[0_0_20px] shadow-amber-500/50 scale-[1.02] focus-visible:ring-amber-400",
      unselected:
        "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-amber-400 hover:text-white focus-visible:ring-amber-400",
    },
    emerald: {
      selected:
        "bg-emerald-500 text-slate-950 border-transparent font-bold shadow-[0_0_20px] shadow-emerald-500/50 scale-[1.02] focus-visible:ring-emerald-400",
      unselected:
        "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-emerald-400 hover:text-white focus-visible:ring-emerald-400",
    },
    rose: {
      selected:
        "bg-rose-500 text-white border-transparent font-bold shadow-[0_0_20px] shadow-rose-500/50 scale-[1.02] focus-visible:ring-rose-400",
      unselected:
        "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-rose-400 hover:text-white focus-visible:ring-rose-400",
    },
  };

  const currentStyle = BUTTON_STYLES[optColor] || BUTTON_STYLES.cyan;

  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-2xl font-tech-mono text-xs sm:text-sm text-left transition-all duration-300 cursor-pointer border flex flex-col justify-start gap-2 group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
        isSelected ? currentStyle.selected : currentStyle.unselected
      }`}
    >
      <span className="font-bold uppercase tracking-wider text-[11px] opacity-80 shrink-0">
        {opt.label}
      </span>
      <span>{opt.text}</span>
    </button>
  );
}

function DilemmaFeedback({
  option,
  pageColor,
}: {
  option: DilemmaOption;
  pageColor: ColorType;
}) {
  const feedbackColor = option.isAlert ? "amber" : pageColor;

  const FEEDBACK_STYLES: Record<
    string,
    { border: string; text: string; bg: string }
  > = {
    cyan: {
      border: "border-cyan-500/40",
      text: "text-cyan-400",
      bg: "bg-cyan-400",
    },
    violet: {
      border: "border-violet-500/40",
      text: "text-violet-400",
      bg: "bg-violet-400",
    },
    amber: {
      border: "border-amber-500/40",
      text: "text-amber-400",
      bg: "bg-amber-400",
    },
    emerald: {
      border: "border-emerald-500/40",
      text: "text-emerald-400",
      bg: "bg-emerald-400",
    },
    rose: {
      border: "border-rose-500/40",
      text: "text-rose-400",
      bg: "bg-rose-400",
    },
  };

  const style = FEEDBACK_STYLES[feedbackColor] || FEEDBACK_STYLES.cyan;

  return (
    <div
      className={`bg-slate-950/90 border ${style.border} p-5 rounded-2xl animate-fade-in relative z-10`}
    >
      <span
        className={`font-tech-mono text-xs font-bold ${style.text} block mb-2 uppercase tracking-wider flex items-center gap-2`}
      >
        <span className={`shrink-0 w-2 h-2 rounded-full ${style.bg}`} />
        // {option.feedbackTitle}
      </span>
      <p className="text-slate-200 text-sm leading-relaxed font-tech-mono">
        {option.feedbackText}
      </p>
    </div>
  );
}

export function DilemmaQuestion({
  data,
  color,
  onComplete,
}: DilemmaQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<DilemmaOption | null>(
    null,
  );

  const handleSelectOption = (opt: DilemmaOption) => {
    setSelectedOption(opt);
    if (onComplete) onComplete();
  };

  const theme = THEME_STYLES[color] || THEME_STYLES.cyan;

  return (
    <div
      className={`w-full bg-slate-900/80 border border-dashed ${theme.borderDashed} rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-left relative overflow-hidden mb-6 shrink-0`}
    >
      <div
        className={`absolute top-0 right-0 w-64 h-64 ${theme.glowBg} rounded-full blur-3xl pointer-events-none`}
      />

      <DilemmaHeader
        title={data.title}
        hasSelection={selectedOption !== null}
        color={color}
      />

      <DilemmaScenario scenario={data.scenario} color={color} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 relative z-10">
        {data.options.map((opt) => (
          <DilemmaOptionButton
            key={opt.id}
            opt={opt}
            isSelected={selectedOption?.id === opt.id}
            hasSelection={selectedOption !== null}
            pageColor={color}
            onClick={() => handleSelectOption(opt)}
          />
        ))}
      </div>

      {selectedOption !== null && (
        <DilemmaFeedback option={selectedOption} pageColor={color} />
      )}
    </div>
  );
}
