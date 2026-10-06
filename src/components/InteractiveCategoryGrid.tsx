import { useState, ReactNode } from "react";
import { ColorType } from "../types/color";
import { Grid } from "./Grid";
import { Modal, ModalCloseButton } from "./Modal";
import { CategoryCard } from "./CategoryCard";

export interface CategoryDetail {
  label: string;
  description: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  codeTag: string;
  icon: ReactNode;
  details: CategoryDetail[];
}

interface InteractiveCategoryGridProps {
  items: CategoryItem[];
  color: ColorType;
  cols?: 1 | 2 | 3 | 4;
}

const COLOR_STYLES: Record<
  ColorType,
  {
    glowBg: string;
    codeTagText: string;
    subtitleText: string;
    detailDot: string;
    detailTitle: string;
    buttonBg: string;
  }
> = {
  cyan: {
    glowBg: "bg-cyan-600/10",
    codeTagText: "text-cyan-400",
    subtitleText: "text-cyan-300",
    detailDot: "bg-cyan-400",
    detailTitle: "text-cyan-300",
    buttonBg:
      "bg-cyan-500 hover:bg-cyan-400 text-slate-950 focus-visible:ring-cyan-400",
  },
  amber: {
    glowBg: "bg-amber-600/10",
    codeTagText: "text-amber-400",
    subtitleText: "text-amber-300",
    detailDot: "bg-amber-400",
    detailTitle: "text-amber-300",
    buttonBg:
      "bg-amber-500 hover:bg-amber-400 text-slate-950 focus-visible:ring-amber-400",
  },
  emerald: {
    glowBg: "bg-emerald-600/10",
    codeTagText: "text-emerald-400",
    subtitleText: "text-emerald-300",
    detailDot: "bg-emerald-400",
    detailTitle: "text-emerald-300",
    buttonBg:
      "bg-emerald-500 hover:bg-emerald-400 text-slate-950 focus-visible:ring-emerald-400",
  },
  violet: {
    glowBg: "bg-violet-600/10",
    codeTagText: "text-violet-400",
    subtitleText: "text-violet-300",
    detailDot: "bg-violet-400",
    detailTitle: "text-violet-300",
    buttonBg:
      "bg-violet-500 hover:bg-violet-400 text-white focus-visible:ring-violet-400",
  },
  rose: {
    glowBg: "bg-rose-600/10",
    codeTagText: "text-rose-400",
    subtitleText: "text-rose-300",
    detailDot: "bg-rose-400",
    detailTitle: "text-rose-300",
    buttonBg:
      "bg-rose-500 hover:bg-rose-400 text-white focus-visible:ring-rose-400",
  },
};

export function InteractiveCategoryGrid({
  items,
  color,
  cols = 4,
}: InteractiveCategoryGridProps) {
  const [selectedItem, setSelectedItem] = useState<CategoryItem | null>(null);
  const styles = COLOR_STYLES[color] || COLOR_STYLES.cyan;

  return (
    <>
      <Grid cols={cols} maxWidth="5xl" className="mb-6 sm:mb-8">
        {items.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            codeTag={`// ${item.codeTag.split("//")[1]?.trim() || item.codeTag}`}
            icon={item.icon}
            color={color}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </Grid>

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        color={color}
        className="animate-scale-up"
      >
        {selectedItem && (
          <div>
            <div
              className={`absolute top-0 right-0 w-72 h-72 ${styles.glowBg} rounded-full blur-3xl pointer-events-none`}
            />

            <div className="flex justify-between items-start mb-5 sm:mb-6 border-b border-slate-800 pb-3.5 sm:pb-4 relative z-10">
              <div>
                <span
                  className={`font-tech-mono text-[10px] sm:text-xs font-bold ${styles.codeTagText} uppercase tracking-widest block mb-6`}
                >
                  {selectedItem.codeTag}
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-white">
                  {selectedItem.title}
                </h3>
                <p
                  className={`${styles.subtitleText} font-tech-mono text-xs sm:text-sm mt-3`}
                >
                  {selectedItem.subtitle}
                </p>
              </div>
              <ModalCloseButton
                onClose={() => setSelectedItem(null)}
                color={color}
              />
            </div>

            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6 relative z-10">
              {selectedItem.details.map((detail, index) => (
                <div
                  key={index}
                  className="bg-slate-950/80 border border-slate-800 p-3.5 sm:p-5 rounded-2xl"
                >
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <span
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${styles.detailDot} shrink-0`}
                    />
                    <h4
                      className={`font-tech-mono text-xs sm:text-sm font-bold ${styles.detailTitle} uppercase tracking-wider`}
                    >
                      {detail.label}
                    </h4>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-tech-mono">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-right relative z-10">
              <button
                onClick={() => setSelectedItem(null)}
                className={`w-full sm:w-auto px-6 py-3 font-tech-mono font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${styles.buttonBg}`}
              >
                Fechar Ficha
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
