import { useState, useMemo } from "react";
import { ColorType } from "../types/color";
import { Modal } from "./Modal";

export interface QuizCase {
  id: number;
  title: string;
  description: string;
  correctOption: string;
  feedback: string;
}

interface ScenarioQuizGameProps {
  cases: QuizCase[];
  options: string[];
  color: ColorType;
  onComplete?: () => void;
}

interface FeedbackState {
  item: QuizCase;
  selectedOption: string;
  isCorrect: boolean;
}

function shuffleArray<T>(array: T[], seed: number): T[] {
  const arr = [...array];
  let m = arr.length;
  let t;
  let i;
  let currentSeed = seed;

  const random = () => {
    const x = Math.sin(currentSeed++) * 10000;
    return x - Math.floor(x);
  };

  while (m) {
    i = Math.floor(random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}

const NAV_ACTIVE_STYLES: Record<
  ColorType,
  { bg: string; iconCurrent: string; focusRing: string }
> = {
  cyan: {
    bg: "bg-cyan-500 text-slate-950 border-white font-bold scale-105 shadow-[0_0_15px_rgba(34,211,238,0.5)]",
    iconCurrent: "text-slate-950",
    focusRing: "focus-visible:ring-cyan-400",
  },
  amber: {
    bg: "bg-amber-500 text-slate-950 border-white font-bold scale-105 shadow-[0_0_15px_rgba(251,191,36,0.5)]",
    iconCurrent: "text-slate-950",
    focusRing: "focus-visible:ring-amber-400",
  },
  emerald: {
    bg: "bg-emerald-500 text-slate-950 border-white font-bold scale-105 shadow-[0_0_15px_rgba(52,211,153,0.5)]",
    iconCurrent: "text-slate-950",
    focusRing: "focus-visible:ring-emerald-400",
  },
  violet: {
    bg: "bg-violet-500 text-white border-white font-bold scale-105 shadow-[0_0_15px_rgba(139,92,246,0.5)]",
    iconCurrent: "text-white",
    focusRing: "focus-visible:ring-violet-400",
  },
  rose: {
    bg: "bg-rose-500 text-white border-white shadow-[0_0_15px_rgba(244,63,94,0.5)]",
    iconCurrent: "text-white",
    focusRing: "focus-visible:ring-rose-400",
  },
};

const OPTION_STYLES: Record<
  ColorType,
  { borderHover: string; iconText: string; focusRing: string }
> = {
  cyan: {
    borderHover: "hover:border-cyan-400",
    iconText: "text-cyan-400",
    focusRing: "focus-visible:ring-cyan-400",
  },
  amber: {
    borderHover: "hover:border-amber-400",
    iconText: "text-amber-400",
    focusRing: "focus-visible:ring-amber-400",
  },
  emerald: {
    borderHover: "hover:border-emerald-400",
    iconText: "text-emerald-400",
    focusRing: "focus-visible:ring-emerald-400",
  },
  violet: {
    borderHover: "hover:border-violet-400",
    iconText: "text-violet-400",
    focusRing: "focus-visible:ring-violet-400",
  },
  rose: {
    borderHover: "hover:border-rose-400",
    iconText: "text-rose-400",
    focusRing: "focus-visible:ring-rose-400",
  },
};

const GAME_THEMES: Record<
  ColorType,
  {
    borderDashed: string;
    glowBg: string;
    headerText: string;
    modalBtn: string;
  }
> = {
  cyan: {
    borderDashed: "border-cyan-500/50",
    glowBg: "bg-cyan-600/10",
    headerText: "text-cyan-400",
    modalBtn:
      "bg-cyan-500 hover:bg-cyan-400 text-slate-950 focus-visible:ring-cyan-400",
  },
  amber: {
    borderDashed: "border-amber-500/50",
    glowBg: "bg-amber-600/10",
    headerText: "text-amber-400",
    modalBtn:
      "bg-amber-500 hover:bg-amber-400 text-slate-950 focus-visible:ring-amber-400",
  },
  emerald: {
    borderDashed: "border-emerald-500/50",
    glowBg: "bg-emerald-600/10",
    headerText: "text-emerald-400",
    modalBtn:
      "bg-emerald-500 hover:bg-emerald-400 text-slate-950 focus-visible:ring-emerald-400",
  },
  violet: {
    borderDashed: "border-violet-500/50",
    glowBg: "bg-violet-600/10",
    headerText: "text-violet-400",
    modalBtn:
      "bg-violet-500 hover:bg-violet-400 text-white focus-visible:ring-violet-400",
  },
  rose: {
    borderDashed: "border-rose-500/50",
    glowBg: "bg-rose-600/10",
    headerText: "text-rose-400",
    modalBtn:
      "bg-rose-500 hover:bg-rose-400 text-white focus-visible:ring-rose-400",
  },
};

function CaseNavButton({
  caseId,
  isCurrent,
  isAnswered,
  isRight,
  color,
  onClick,
}: {
  caseId: number;
  isCurrent: boolean;
  isAnswered: boolean;
  isRight: boolean;
  color: ColorType;
  onClick: () => void;
}) {
  const activeStyle = NAV_ACTIVE_STYLES[color] || NAV_ACTIVE_STYLES.cyan;

  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-xl font-tech-mono text-xs transition-all cursor-pointer flex items-center gap-1.5 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${activeStyle.focusRing} ${
        isCurrent
          ? activeStyle.bg
          : isAnswered
            ? isRight
              ? "bg-emerald-950/60 border-emerald-500/50 text-emerald-300"
              : "bg-rose-950/60 border-rose-500/50 text-rose-300"
            : "bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white"
      }`}
    >
      <span>Caso 0{caseId}</span>
      {isAnswered && (
        <svg
          aria-hidden="true"
          className={`w-3.5 h-3.5 shrink-0 ${
            isCurrent
              ? activeStyle.iconCurrent
              : isRight
                ? "text-emerald-400"
                : "text-rose-400"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d={isRight ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}
          />
        </svg>
      )}
    </button>
  );
}

function QuizOptionButton({
  option,
  color,
  onClick,
}: {
  option: string;
  color: ColorType;
  onClick: () => void;
}) {
  const optStyle = OPTION_STYLES[color] || OPTION_STYLES.cyan;

  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl bg-slate-950/80 border border-slate-800 ${optStyle.borderHover} text-slate-200 hover:text-white font-tech-mono text-xs sm:text-sm text-left transition-all duration-300 hover:scale-[1.01] cursor-pointer flex items-center justify-between group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${optStyle.focusRing}`}
    >
      <span>{option}</span>
      <svg
        aria-hidden="true"
        className={`w-4 h-4 ${optStyle.iconText} opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-3`}
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
  );
}

export function ScenarioQuizGame({
  cases,
  options,
  color,
  onComplete,
}: ScenarioQuizGameProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: boolean }>({});
  const [activeFeedback, setActiveFeedback] = useState<FeedbackState | null>(
    null,
  );

  const currentCase = cases[currentIndex];
  const totalCases = cases.length;
  const gameTheme = GAME_THEMES[color] || GAME_THEMES.cyan;

  const shuffledOptionsMap = useMemo(() => {
    const map: { [key: number]: string[] } = {};
    cases.forEach((p) => {
      map[p.id] = shuffleArray(options, p.id * 17);
    });
    return map;
  }, [cases, options]);

  const currentOptions = shuffledOptionsMap[currentCase.id] || options;

  const handleSelectOption = (option: string) => {
    const isCorrect = option === currentCase.correctOption;
    setAnswers((prev) => {
      const newAnswers = { ...prev, [currentCase.id]: isCorrect };
      if (Object.keys(newAnswers).length === totalCases && onComplete)
        onComplete();
      return newAnswers;
    });
    setActiveFeedback({ item: currentCase, selectedOption: option, isCorrect });
  };

  const handleNextCase = () => {
    setActiveFeedback(null);
    if (currentIndex < totalCases - 1) setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-wrap justify-center items-center gap-2 mb-4 sm:mb-6 w-full">
        {cases.map((p, idx) => (
          <CaseNavButton
            key={p.id}
            caseId={p.id}
            isCurrent={idx === currentIndex}
            isAnswered={answers[p.id] !== undefined}
            isRight={answers[p.id] === true}
            color={color}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>

      <div
        className={`w-full max-w-4xl bg-slate-900/80 border border-dashed ${gameTheme.borderDashed} rounded-3xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl text-left relative overflow-hidden mb-2`}
      >
        <div
          className={`absolute top-0 right-0 w-64 h-64 ${gameTheme.glowBg} rounded-full blur-3xl pointer-events-none`}
        />

        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 sm:mb-5 relative z-10">
          <span
            className={`font-tech-mono text-[10px] sm:text-xs font-bold ${gameTheme.headerText} uppercase tracking-wider`}
          >
            // CASO {currentCase.id} DE {totalCases}:{" "}
            {currentCase.title.toUpperCase()}
          </span>
          <span className="font-tech-mono text-[10px] sm:text-xs text-slate-400">
            {answers[currentCase.id] !== undefined
              ? "[ CONCLUÍDO ]"
              : "[ PENDENTE ]"}
          </span>
        </div>

        <p className="text-sm sm:text-lg md:text-xl text-slate-200 leading-relaxed font-medium mb-6 sm:mb-8 relative z-10">
          {currentCase.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-10">
          {currentOptions.map((option, idx) => (
            <QuizOptionButton
              key={idx}
              option={option}
              color={color}
              onClick={() => handleSelectOption(option)}
            />
          ))}
        </div>
      </div>

      <span className="text-xs font-tech-mono text-slate-400 mt-4 mb-2">
        Progresso: {Object.keys(answers).length}/{totalCases} desafios
        respondidos
      </span>

      <Modal
        isOpen={!!activeFeedback}
        onClose={() => setActiveFeedback(null)}
        color={activeFeedback?.isCorrect ? "emerald" : "rose"}
      >
        {activeFeedback &&
          (() => {
            const style = activeFeedback.isCorrect
              ? {
                  text: "text-emerald-400",
                  banner:
                    "bg-emerald-950/80 border-emerald-500/50 text-emerald-300",
                  icon: "bg-emerald-500/20 text-emerald-400",
                }
              : {
                  text: "text-rose-400",
                  banner: "bg-rose-950/80 border-rose-500/50 text-rose-300",
                  icon: "bg-rose-500/20 text-rose-400",
                };

            return (
              <div>
                <div
                  className={`p-4 rounded-2xl mb-6 font-tech-mono text-xs sm:text-base font-bold flex items-center gap-3 border ${style.banner}`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${style.icon}`}>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d={
                          activeFeedback.isCorrect
                            ? "M5 13l4 4L19 7"
                            : "M6 18L18 6M6 6l12 12"
                        }
                      />
                    </svg>
                  </div>
                  <p>
                    {activeFeedback.isCorrect
                      ? "Resposta correta!"
                      : `Incorreto. A opção correta é "${activeFeedback.item.correctOption}".`}
                  </p>
                </div>

                <div className="bg-slate-950/70 p-4 sm:p-5 rounded-2xl border border-slate-800 mb-6">
                  <span
                    className={`font-tech-mono text-xs font-bold ${style.text} block mb-2`}
                  >
                    // Explicação Técnica:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-tech-mono">
                    {activeFeedback.item.feedback}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 pt-2 border-t border-slate-800/80 sm:border-none">
                  <span className="font-tech-mono text-[11px] sm:text-xs text-slate-400">
                    Caso {activeFeedback.item.id} de {totalCases}
                  </span>
                  <button
                    onClick={handleNextCase}
                    className={`w-full sm:w-auto px-6 py-3 font-tech-mono font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${gameTheme.modalBtn}`}
                  >
                    <span>
                      {currentIndex < totalCases - 1
                        ? "Próximo Caso"
                        : "Concluir Desafio"}
                    </span>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
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
                  </button>
                </div>
              </div>
            );
          })()}
      </Modal>
    </div>
  );
}
