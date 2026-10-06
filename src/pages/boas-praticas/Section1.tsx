import { useState } from "react";
import { SectionLayout, SectionProps } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import { SectionTitle, SectionText } from "../../components/Typography";
import { Grid } from "../../components/Grid";
import { Modal, ModalCloseButton } from "../../components/Modal";
import { TechCard } from "../../components/TechCard";
import { doItems, dontItems } from "../../data/boas-praticas";

type ModalType = "fazer" | "evitar" | null;

const MODAL_THEMES = {
  fazer: {
    color: "emerald" as const,
    iconBg: "bg-emerald-500/20 text-emerald-400",
    headerText: "text-emerald-400",
    itemTag: "text-emerald-300",
    button:
      "bg-emerald-500 hover:bg-emerald-400 text-slate-950 focus-visible:ring-emerald-400",
  },
  evitar: {
    color: "rose" as const,
    iconBg: "bg-rose-500/20 text-rose-400",
    headerText: "text-rose-400",
    itemTag: "text-rose-300",
    button:
      "bg-rose-500 hover:bg-rose-400 text-white focus-visible:ring-rose-400",
  },
};

export default function Section1({ id, step, label, color }: SectionProps) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const activeData = activeModal === "fazer" ? doItems : dontItems;
  const activeTheme = activeModal
    ? MODAL_THEMES[activeModal]
    : MODAL_THEMES.fazer;

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />
      <SectionTitle>Boas práticas para seu dia a dia</SectionTitle>
      <SectionText align="center" className="mb-8 max-w-2xl">
        Selecione uma das categorias abaixo para explorar as diretrizes
        essenciais de uso consciente da tecnologia:
      </SectionText>

      <Grid cols={2} maxWidth="4xl" className="text-left shrink-0 mb-6">
        <TechCard
          color="emerald"
          glow={true}
          onClick={() => setActiveModal("fazer")}
          footer={
            <div className="flex items-center justify-between text-emerald-400 font-tech-mono text-xs font-bold group-hover:text-emerald-300">
              <span>VER DIRETRIZES ({doItems.length})</span>
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
          }
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <h2 className="font-tech-mono text-lg font-bold text-emerald-400 uppercase tracking-wider">
              O que FAZER
            </h2>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed font-tech-mono">
            Diretrizes cruciais de validação, privacidade, transparência e
            desenvolvimento de senso crítico.
          </p>
        </TechCard>

        <TechCard
          color="rose"
          glow={true}
          onClick={() => setActiveModal("evitar")}
          footer={
            <div className="flex items-center justify-between text-rose-400 font-tech-mono text-xs font-bold group-hover:text-rose-300">
              <span>VER ALERTAS ({dontItems.length})</span>
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
          }
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-xl bg-rose-500/20 text-rose-400 shrink-0">
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            <h2 className="font-tech-mono text-lg font-bold text-rose-400 uppercase tracking-wider">
              O que EVITAR
            </h2>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed font-tech-mono">
            Alertas sobre alucinações da IA, armadilhas de desinformação e
            automação não ética.
          </p>
        </TechCard>
      </Grid>

      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        color={activeTheme.color}
      >
        {activeModal && (
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 sm:pb-4 mb-5 sm:mb-6 shrink-0">
              <div className="flex items-center gap-3">
                <span
                  className={`p-2 rounded-xl shrink-0 ${activeTheme.iconBg}`}
                >
                  {activeModal === "fazer" ? (
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </span>
                <div>
                  <span
                    className={`font-tech-mono text-[10px] sm:text-xs font-bold uppercase block ${activeTheme.headerText}`}
                  >
                    // DIRETIVAS // 01
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    {activeModal === "fazer" ? "O que FAZER" : "O que EVITAR"}
                  </h3>
                </div>
              </div>
              <ModalCloseButton
                onClose={() => setActiveModal(null)}
                color={activeTheme.color}
              />
            </div>

            <div className="space-y-3.5 sm:space-y-4 mb-5 sm:mb-6">
              {activeData.map((item, index) => (
                <div
                  key={item.title || index}
                  className="bg-slate-950/80 border border-slate-800 p-3.5 sm:p-5 rounded-2xl"
                >
                  <span
                    className={`font-tech-mono text-xs font-bold block mb-1 uppercase shrink-0 ${activeTheme.itemTag}`}
                  >
                    // {item.title}
                  </span>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-tech-mono">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-right shrink-0">
              <button
                onClick={() => setActiveModal(null)}
                className={`w-full sm:w-auto px-6 py-3 font-tech-mono font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${activeTheme.button}`}
              >
                Fechar Ficha
              </button>
            </div>
          </div>
        )}
      </Modal>
    </SectionLayout>
  );
}
