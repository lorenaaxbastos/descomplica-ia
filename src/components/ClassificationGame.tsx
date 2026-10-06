import { useState, useRef, useEffect, forwardRef } from "react";
import { ColorType } from "../types/color";
import { Modal } from "./Modal";
import { Grid } from "./Grid";
import { TechCard } from "./TechCard";
import { SectionStatus } from "./Typography";

export interface GameCategory {
  id: string;
  label: string;
  color: ColorType;
}

export interface GameItem {
  id: string;
  title: string;
  correctCategoryId: string;
  feedback: string;
  example: string;
}

interface ClassificationGameProps {
  categories: GameCategory[];
  items: GameItem[];
  onComplete?: () => void;
}

interface CategoryStyle {
  bgLight: string;
  border: string;
  text: string;
  dot: string;
  button: string;
}

const CATEGORY_STYLES: Record<ColorType, CategoryStyle> = {
  cyan: {
    bgLight: "bg-cyan-950/20",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    dot: "bg-cyan-400",
    button:
      "bg-cyan-500 hover:bg-cyan-400 text-slate-950 focus-visible:ring-cyan-400",
  },
  rose: {
    bgLight: "bg-rose-950/20",
    border: "border-rose-500/30",
    text: "text-rose-400",
    dot: "bg-rose-500",
    button:
      "bg-rose-500 hover:bg-rose-400 text-white focus-visible:ring-rose-400",
  },
  amber: {
    bgLight: "bg-amber-950/20",
    border: "border-amber-500/30",
    text: "text-amber-400",
    dot: "bg-amber-400",
    button:
      "bg-amber-500 hover:bg-amber-400 text-slate-950 focus-visible:ring-amber-400",
  },
  emerald: {
    bgLight: "bg-emerald-950/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
    button:
      "bg-emerald-500 hover:bg-emerald-400 text-slate-950 focus-visible:ring-emerald-400",
  },
  violet: {
    bgLight: "bg-violet-950/20",
    border: "border-violet-500/30",
    text: "text-violet-400",
    dot: "bg-violet-400",
    button:
      "bg-violet-500 hover:bg-violet-400 text-white focus-visible:ring-violet-400",
  },
};

function GameOptionButton({
  item,
  isDone,
  isSelected,
  isCorrect,
  onClick,
}: {
  item: GameItem;
  isDone: boolean;
  isSelected: boolean;
  isCorrect?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={isDone}
      data-unclassified={!isDone ? "true" : "false"}
      className={`px-3.5 py-2 rounded-xl font-tech-mono text-xs transition-all duration-300 cursor-pointer border flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
        isDone
          ? isCorrect
            ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300 opacity-80 cursor-not-allowed"
            : "bg-rose-950/40 border-rose-500/40 text-rose-300 opacity-80 cursor-not-allowed"
          : isSelected
            ? "bg-cyan-500 text-slate-950 border-white font-bold scale-105 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
            : "bg-slate-900/80 border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
      }`}
    >
      <span>{item.title}</span>
    </button>
  );
}

const TerminalActionButton = forwardRef<
  HTMLButtonElement,
  {
    label: string;
    color: ColorType;
    tabIndex?: number;
    onClick: () => void;
    onKeyDown?: (e: React.KeyboardEvent) => void;
  }
>(({ label, color, tabIndex = 0, onClick, onKeyDown }, ref) => {
  const style = CATEGORY_STYLES[color] || CATEGORY_STYLES.cyan;
  return (
    <button
      ref={ref}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`px-5 py-2 font-tech-mono font-bold text-xs rounded-lg transition shadow-lg cursor-pointer uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${style.button}`}
    >
      [ {label} ]
    </button>
  );
});
TerminalActionButton.displayName = "TerminalActionButton";

function ClassifiedResultItem({
  title,
  color,
  onDetails,
}: {
  title: string;
  color: ColorType;
  onDetails: () => void;
}) {
  const style = CATEGORY_STYLES[color] || CATEGORY_STYLES.cyan;
  return (
    <div className="p-2.5 sm:p-3 bg-slate-950/60 border border-slate-700 rounded-xl text-xs text-slate-200 font-tech-mono flex justify-between items-center">
      <span className="truncate mr-2">{title}</span>
      <button
        onClick={onDetails}
        className={`${style.text} underline text-[10px] sm:text-xs cursor-pointer hover:text-white shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1`}
      >
        Detalhes
      </button>
    </div>
  );
}

export function ClassificationGame({
  categories,
  items,
  onComplete,
}: ClassificationGameProps) {
  const [classified, setClassified] = useState<{
    [key: string]: { categoryId: string; isCorrect: boolean };
  }>({});
  const [selectedItem, setSelectedItem] = useState<GameItem | null>(null);
  const [activeModalData, setActiveModalData] = useState<{
    item: GameItem;
    categoryId: string;
    isCorrect: boolean;
  } | null>(null);

  const [focusedCategoryIndex, setFocusedCategoryIndex] = useState(0);
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (selectedItem) {
      setFocusedCategoryIndex(0);
      setTimeout(() => {
        categoryRefs.current[0]?.focus();
      }, 50);
    }
  }, [selectedItem]);

  const handleClassify = (item: GameItem, categoryId: string) => {
    const isCorrect = categoryId === item.correctCategoryId;

    setClassified((prev) => {
      const newState = { ...prev, [item.id]: { categoryId, isCorrect } };
      if (Object.keys(newState).length === items.length && onComplete)
        onComplete();
      return newState;
    });

    setActiveModalData({ item, categoryId, isCorrect });
    setSelectedItem(null);
  };

  const handleCategoryKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (focusedCategoryIndex + 1) % categories.length;
      setFocusedCategoryIndex(nextIndex);
      categoryRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex =
        (focusedCategoryIndex - 1 + categories.length) % categories.length;
      setFocusedCategoryIndex(prevIndex);
      categoryRefs.current[prevIndex]?.focus();
    }
  };

  const handleCloseModal = () => {
    setActiveModalData(null);

    setTimeout(() => {
      if (document.activeElement === document.body || !document.activeElement) {
        const nextOption = document.querySelector(
          '[data-unclassified="true"]',
        ) as HTMLButtonElement;

        if (nextOption) {
          nextOption.focus();
        } else {
          const progressEl = document.getElementById("classification-progress");
          progressEl?.focus();
        }
      }
    }, 50);
  };

  const modalColor: ColorType = activeModalData?.isCorrect ? "emerald" : "rose";

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-2.5 mb-6 w-full max-w-4xl">
        {items.map((item) => (
          <GameOptionButton
            key={item.id}
            item={item}
            isDone={classified[item.id] !== undefined}
            isSelected={selectedItem?.id === item.id}
            isCorrect={classified[item.id]?.isCorrect}
            onClick={() => !classified[item.id] && setSelectedItem(item)}
          />
        ))}
      </div>

      {selectedItem && (
        <div className="mb-6 p-4 sm:p-5 bg-slate-900/90 border border-cyan-500/50 rounded-2xl backdrop-blur-xl animate-fade-in flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl w-full max-w-3xl">
          <div className="flex flex-col text-center sm:text-left flex-1">
            <span className="font-tech-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest mb-1">
              Classifique o item:
            </span>
            <span className="font-tech-mono text-sm sm:text-base text-cyan-300 font-bold leading-snug">
              &quot;{selectedItem.title}&quot;
            </span>
          </div>

          <div
            role="radiogroup"
            aria-label="Categorias de classificação"
            className="flex items-center justify-center gap-3 shrink-0"
          >
            {categories.map((cat, index) => (
              <TerminalActionButton
                key={cat.id}
                ref={(el) => {
                  categoryRefs.current[index] = el;
                }}
                tabIndex={focusedCategoryIndex === index ? 0 : -1}
                label={cat.label}
                color={cat.color}
                onClick={() => handleClassify(selectedItem, cat.id)}
                onKeyDown={handleCategoryKeyDown}
              />
            ))}
          </div>
        </div>
      )}

      <Grid cols={categories.length as any} maxWidth="6xl" className="mb-6">
        {categories.map((cat) => (
          <TechCard key={cat.id} color={cat.color}>
            <div className="mb-4">
              <SectionStatus color={cat.color}>{cat.label}</SectionStatus>
            </div>
            <div className="flex flex-col gap-2">
              {items
                .filter(
                  (i) =>
                    classified[i.id] !== undefined &&
                    i.correctCategoryId === cat.id,
                )
                .map((item) => {
                  const res = classified[item.id];

                  return (
                    <ClassifiedResultItem
                      key={item.id}
                      title={item.title}
                      color={cat.color}
                      onDetails={() =>
                        setActiveModalData({
                          item,
                          categoryId: res.categoryId,
                          isCorrect: res.isCorrect,
                        })
                      }
                    />
                  );
                })}
            </div>
          </TechCard>
        ))}
      </Grid>

      <span
        id="classification-progress"
        tabIndex={-1}
        className="text-xs font-tech-mono text-slate-400 mt-2 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-2"
      >
        Progresso: {Object.keys(classified).length}/{items.length} respondidos
      </span>

      <Modal
        isOpen={!!activeModalData}
        onClose={handleCloseModal}
        color={modalColor}
      >
        {activeModalData &&
          (() => {
            const userCat =
              categories.find((c) => c.id === activeModalData.categoryId) ||
              categories[0];
            const correctCat =
              categories.find(
                (c) => c.id === activeModalData.item.correctCategoryId,
              ) || categories[0];

            // Banner do resultado (Verde para Acerto / Vermelho para Erro)
            const feedbackStyle = activeModalData.isCorrect
              ? {
                  bannerBg:
                    "bg-emerald-950/80 border-emerald-500/50 text-emerald-300",
                  buttonBg:
                    "bg-emerald-500 hover:bg-emerald-400 text-slate-950 focus-visible:ring-emerald-400",
                }
              : {
                  bannerBg: "bg-rose-950/80 border-rose-500/50 text-rose-300",
                  buttonBg:
                    "bg-rose-500 hover:bg-rose-400 text-white focus-visible:ring-rose-400",
                };

            // Tag da Categoria (Sempre usa a cor semântica NATIVA da resposta correta)
            const categoryTagStyle =
              CATEGORY_STYLES[correctCat.color] || CATEGORY_STYLES.cyan;

            return (
              <div>
                <div
                  className={`p-4 rounded-2xl mb-6 font-tech-mono text-xs sm:text-sm font-bold flex items-center gap-3 border ${feedbackStyle.bannerBg}`}
                >
                  <p>
                    {activeModalData.isCorrect
                      ? "Você acertou!"
                      : `Ops! Você marcou ${userCat.label.toUpperCase()}, mas na verdade isso é ${correctCat.label.toUpperCase()}.`}
                  </p>
                </div>

                <div className="mb-4 border-b border-slate-800 pb-4">
                  <span
                    className={`inline-block font-tech-mono text-[10px] font-bold uppercase px-2 py-1 rounded border mb-2 ${categoryTagStyle.bgLight} ${categoryTagStyle.text} ${categoryTagStyle.border}`}
                  >
                    {correctCat.label}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activeModalData.item.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                    <span className="font-tech-mono text-xs font-bold text-cyan-400 block mb-2">
                      // Explicação:
                    </span>
                    <p className="text-sm text-slate-300 font-tech-mono leading-relaxed">
                      {activeModalData.item.feedback}
                    </p>
                  </div>
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                    <span className="font-tech-mono text-xs font-bold text-cyan-400 block mb-2">
                      // Exemplo prático:
                    </span>
                    <p className="text-sm text-slate-300 font-tech-mono leading-relaxed">
                      {activeModalData.item.example}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleCloseModal}
                    className={`w-full sm:w-auto px-8 py-3 font-tech-mono font-bold text-sm rounded-xl transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${feedbackStyle.buttonBg}`}
                  >
                    Entendi! Continuar
                  </button>
                </div>
              </div>
            );
          })()}
      </Modal>
    </div>
  );
}
