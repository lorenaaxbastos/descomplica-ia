import { useState } from "react";
import { ColorType } from "../types/color";
import {
  ToolItem,
  VerdictType,
  investigationCaseData,
} from "../data/laboratorio-investigacao";
import { Modal, ModalCloseButton } from "./Modal";

const COLOR_STYLES: Record<
  ColorType,
  {
    borderContainer: string;
    glowBg: string;
    textPrimary: string;
    textSecondary: string;
    dotBg: string;
    testedBtn: string;
    badge: string;
    modalHeaderBg: string;
    modalBtn: string;
  }
> = {
  cyan: {
    borderContainer: "border-cyan-500/30",
    glowBg: "bg-cyan-600/10",
    textPrimary: "text-cyan-400",
    textSecondary: "text-cyan-300",
    dotBg: "bg-cyan-400",
    testedBtn:
      "bg-cyan-950/40 border-cyan-500/50 text-cyan-300 hover:border-cyan-400",
    badge: "text-cyan-400/70 border-cyan-500/30",
    modalHeaderBg: "bg-cyan-500/20",
    modalBtn:
      "bg-cyan-500 hover:bg-cyan-400 text-slate-950 focus-visible:ring-cyan-400",
  },
  amber: {
    borderContainer: "border-amber-500/30",
    glowBg: "bg-amber-600/10",
    textPrimary: "text-amber-400",
    textSecondary: "text-amber-300",
    dotBg: "bg-amber-400",
    testedBtn:
      "bg-amber-950/40 border-amber-500/50 text-amber-300 hover:border-amber-400",
    badge: "text-amber-400/70 border-amber-500/30",
    modalHeaderBg: "bg-amber-500/20",
    modalBtn:
      "bg-amber-500 hover:bg-amber-400 text-slate-950 focus-visible:ring-amber-400",
  },
  emerald: {
    borderContainer: "border-emerald-500/30",
    glowBg: "bg-emerald-600/10",
    textPrimary: "text-emerald-400",
    textSecondary: "text-emerald-300",
    dotBg: "bg-emerald-400",
    testedBtn:
      "bg-emerald-950/40 border-emerald-500/50 text-emerald-300 hover:border-emerald-400",
    badge: "text-emerald-400/70 border-emerald-500/30",
    modalHeaderBg: "bg-emerald-500/20",
    modalBtn:
      "bg-emerald-500 hover:bg-emerald-400 text-slate-950 focus-visible:ring-emerald-400",
  },
  violet: {
    borderContainer: "border-violet-500/30",
    glowBg: "bg-violet-600/10",
    textPrimary: "text-violet-400",
    textSecondary: "text-violet-300",
    dotBg: "bg-violet-400",
    testedBtn:
      "bg-violet-950/40 border-violet-500/50 text-violet-300 hover:border-violet-400",
    badge: "text-violet-400/70 border-violet-500/30",
    modalHeaderBg: "bg-violet-500/20",
    modalBtn:
      "bg-violet-500 hover:bg-violet-400 text-white focus-visible:ring-violet-400",
  },
  rose: {
    borderContainer: "border-rose-500/30",
    glowBg: "bg-rose-600/10",
    textPrimary: "text-rose-400",
    textSecondary: "text-rose-300",
    dotBg: "bg-rose-400",
    testedBtn:
      "bg-rose-950/40 border-rose-500/50 text-rose-300 hover:border-rose-400",
    badge: "text-rose-400/70 border-rose-500/30",
    modalHeaderBg: "bg-rose-500/20",
    modalBtn:
      "bg-rose-500 hover:bg-rose-400 text-white focus-visible:ring-rose-400",
  },
};

function DossierPanel({ color }: { color: ColorType }) {
  const styles = COLOR_STYLES[color] || COLOR_STYLES.cyan;

  return (
    <div
      className={`lg:col-span-7 bg-slate-900/80 border ${styles.borderContainer} rounded-3xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-between`}
    >
      <div
        className={`absolute top-0 left-0 w-48 h-48 ${styles.glowBg} rounded-full blur-3xl pointer-events-none`}
      />
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 shrink-0">
          <span
            className={`font-tech-mono text-xs font-bold ${styles.textPrimary} uppercase tracking-wider shrink-0`}
          >
            [ CASO ] {investigationCaseData.title}
          </span>
          <span className="font-tech-mono text-[10px] text-slate-400 shrink-0">
            {investigationCaseData.tag}
          </span>
        </div>
        <div className="mb-5 relative z-10">
          <span className="font-tech-mono text-xs font-bold text-slate-400 block mb-1 uppercase shrink-0">
            // O Boato:
          </span>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-tech-mono">
            {investigationCaseData.description}
          </p>
        </div>
      </div>
      <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl relative z-10">
        <span
          className={`font-tech-mono text-xs font-bold ${styles.textSecondary} block mb-1 uppercase flex items-center gap-2 shrink-0`}
        >
          <span className={`w-2 h-2 rounded-full ${styles.dotBg} shrink-0`} />
          Sua Missão:
        </span>
        <p className="text-slate-400 text-xs sm:text-sm font-tech-mono">
          {investigationCaseData.mission}
        </p>
      </div>
    </div>
  );
}

function ToolButton({
  tool,
  isTested,
  color,
  onClick,
}: {
  tool: ToolItem;
  isTested: boolean;
  color: ColorType;
  onClick: () => void;
}) {
  const styles = COLOR_STYLES[color] || COLOR_STYLES.cyan;

  return (
    <button
      onClick={onClick}
      className={`flex-1 p-5 rounded-2xl font-tech-mono text-xs sm:text-sm text-left transition-all duration-300 cursor-pointer border flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
        isTested
          ? styles.testedBtn
          : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-amber-400 hover:text-white hover:scale-[1.01]"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2.5 rounded-xl shrink-0 bg-slate-950/60 ${styles.textPrimary} group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors`}
        >
          {tool.icon}
        </div>
        <span className="leading-snug">{tool.name}</span>
      </div>
      {isTested ? (
        <svg
          aria-hidden="true"
          className={`w-5 h-5 shrink-0 ${styles.textPrimary}`}
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
        <span
          className={`text-[10px] font-bold border px-2.5 py-1 rounded uppercase shrink-0 ${styles.badge}`}
        >
          Testar
        </span>
      )}
    </button>
  );
}

function VerdictPanel({
  isAllTested,
  selectedVerdict,
  color,
  toolsCount,
  onChooseVerdict,
}: {
  isAllTested: boolean;
  selectedVerdict: VerdictType;
  color: ColorType;
  toolsCount: number;
  onChooseVerdict: (v: VerdictType) => void;
}) {
  const styles = COLOR_STYLES[color] || COLOR_STYLES.cyan;

  if (!isAllTested) {
    return (
      <div className="w-full max-w-5xl bg-slate-900/40 border border-dashed border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center mb-4 shrink-0 transition-all duration-500">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-slate-600 mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <p className="text-slate-500 font-tech-mono text-sm uppercase tracking-wider">
          Execute todas as {toolsCount} análises forenses acima para liberar o
          painel de veredito.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-5xl bg-slate-900/90 border border-dashed ${styles.borderContainer} rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-left relative overflow-hidden shrink-0 mb-4 animate-fade-in`}
    >
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 shrink-0">
        <span
          className={`font-tech-mono text-xs font-bold ${styles.textPrimary} uppercase tracking-wider shrink-0 flex items-center gap-2`}
        >
          <span className={`w-2 h-2 rounded-full ${styles.dotBg} shrink-0`} />{" "}
          // EMITA SEU VEREDITO
        </span>
        <span className="font-tech-mono text-[10px] text-slate-400 shrink-0">
          {selectedVerdict !== null
            ? "[ AVALIAÇÃO REGISTRADA ]"
            : "[ AGUARDANDO DECISÃO ]"}
        </span>
      </div>
      <p className="text-slate-300 text-xs sm:text-sm mb-5 font-tech-mono leading-relaxed">
        Com base nos relatórios fornecidos pelas ferramentas de checagem, qual é
        a sua conclusão sobre a imagem?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => onChooseVerdict("fake")}
          className={`p-4 rounded-2xl font-tech-mono text-xs sm:text-sm font-bold border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
            selectedVerdict === "fake"
              ? "bg-emerald-500 text-slate-950 border-white shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-[1.02]"
              : "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-950/20"
          }`}
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>É FALSO (IA)</span>
        </button>

        <button
          onClick={() => onChooseVerdict("real")}
          className={`p-4 rounded-2xl font-tech-mono text-xs sm:text-sm font-bold border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
            selectedVerdict === "real"
              ? "bg-rose-500 text-slate-950 border-white shadow-[0_0_20px_rgba(244,63,94,0.5)] scale-[1.02]"
              : "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-950/20"
          }`}
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>É REAL</span>
        </button>

        <button
          onClick={() => onChooseVerdict("inconclusive")}
          className={`p-4 rounded-2xl font-tech-mono text-xs sm:text-sm font-bold border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
            selectedVerdict === "inconclusive"
              ? "bg-rose-500 text-slate-950 border-white shadow-[0_0_20px_rgba(244,63,94,0.5)] scale-[1.02]"
              : "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-950/20"
          }`}
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>INCONCLUSIVO</span>
        </button>
      </div>
    </div>
  );
}

interface InvestigationLabGameProps {
  tools: ToolItem[];
  color: ColorType;
  onComplete?: () => void;
}

export function InvestigationLabGame({
  tools,
  color,
  onComplete,
}: InvestigationLabGameProps) {
  const [activeTool, setActiveTool] = useState<ToolItem["id"] | null>(null);
  const [testedTools, setTestedTools] = useState<string[]>([]);
  const [selectedVerdict, setSelectedVerdict] = useState<VerdictType>(null);
  const [isVerdictModalOpen, setIsVerdictModalOpen] = useState(false);

  const handleSelectTool = (id: ToolItem["id"]) => {
    setActiveTool(id);
    if (!testedTools.includes(id)) {
      setTestedTools((prev) => [...prev, id]);
    }
  };

  const handleChooseVerdict = (verdict: VerdictType) => {
    setSelectedVerdict(verdict);
    setIsVerdictModalOpen(true);
    if (onComplete) onComplete();
  };

  const activeToolData = tools.find((t) => t.id === activeTool);
  const isAllTested = testedTools.length === tools.length;
  const styles = COLOR_STYLES[color] || COLOR_STYLES.cyan;
  const verdictModalColor: ColorType =
    selectedVerdict === "fake" ? "emerald" : "rose";

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-5xl mb-6 shrink-0 text-left">
        <DossierPanel color={color} />

        <div className="lg:col-span-5 flex flex-col gap-3 p-2">
          <span
            className={`font-tech-mono text-xs font-bold ${styles.textPrimary} uppercase tracking-wider block px-1 shrink-0`}
          >
            // FERRAMENTAS DE CHECAGEM:
          </span>
          {tools.map((tool) => (
            <ToolButton
              key={tool.id}
              tool={tool}
              isTested={testedTools.includes(tool.id)}
              color={color}
              onClick={() => handleSelectTool(tool.id)}
            />
          ))}
        </div>
      </div>

      <VerdictPanel
        isAllTested={isAllTested}
        selectedVerdict={selectedVerdict}
        color={color}
        toolsCount={tools.length}
        onChooseVerdict={handleChooseVerdict}
      />

      <Modal
        isOpen={!!activeToolData}
        onClose={() => setActiveTool(null)}
        color={color}
      >
        {activeToolData && (
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 sm:pb-4 mb-5 sm:mb-6 shrink-0">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-xl shrink-0 ${styles.modalHeaderBg} ${styles.textPrimary}`}
                >
                  {activeToolData.icon}
                </div>
                <div>
                  <span
                    className={`font-tech-mono text-[10px] sm:text-xs font-bold uppercase block ${styles.textPrimary}`}
                  >
                    {activeToolData.codeTag}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    {activeToolData.resultTitle}
                  </h3>
                </div>
              </div>
              <ModalCloseButton
                onClose={() => setActiveTool(null)}
                color={color}
              />
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-4 sm:p-5 rounded-2xl mb-5 sm:mb-6">
              <span
                className={`font-tech-mono text-xs font-bold block mb-2 uppercase shrink-0 ${styles.textSecondary}`}
              >
                // RELATORIO_DE_EVIDENCIA:
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-tech-mono">
                {activeToolData.resultText}
              </p>
            </div>
            <div className="text-right shrink-0">
              <button
                onClick={() => setActiveTool(null)}
                className={`w-full sm:w-auto px-6 py-3 font-tech-mono font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${styles.modalBtn}`}
              >
                Fechar Relatório
              </button>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={isVerdictModalOpen && !!selectedVerdict}
        onClose={() => setIsVerdictModalOpen(false)}
        color={verdictModalColor}
      >
        {selectedVerdict && (
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 sm:pb-4 mb-5 sm:mb-6 shrink-0">
              <div className="flex items-center gap-3">
                <span
                  className={`p-2 rounded-xl shrink-0 ${
                    selectedVerdict === "fake"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-rose-500/20 text-rose-400"
                  }`}
                >
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
                      d={
                        selectedVerdict === "fake"
                          ? "M5 13l4 4L19 7"
                          : "M6 18L18 6M6 6l12 12"
                      }
                    />
                  </svg>
                </span>
                <div>
                  <span
                    className={`font-tech-mono text-[10px] sm:text-xs font-bold uppercase block ${
                      selectedVerdict === "fake"
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    // AVALIACAO_DO_INVESTIGADOR
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    {selectedVerdict === "fake"
                      ? "Excelente investigação!"
                      : selectedVerdict === "real"
                        ? "Alerta de risco"
                        : "Atenção aos sinais"}
                  </h3>
                </div>
              </div>
              <ModalCloseButton
                onClose={() => setIsVerdictModalOpen(false)}
                color={verdictModalColor}
              />
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-4 sm:p-5 rounded-2xl mb-5 sm:mb-6">
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-tech-mono">
                {selectedVerdict === "fake" && (
                  <>
                    <strong className="text-emerald-400 block mb-2 font-bold">
                      Veredito correto: a imagem é fruto de manipulação
                      sintética.
                    </strong>{" "}
                    Cruzando os indícios sutis — a divergência na física das
                    sombras, a ausência de certificado C2PA, a falta de
                    histórico anterior a 6 horas e a nota da Defesa Civil —,
                    você provou que se trata de desinformação.
                  </>
                )}
                {selectedVerdict === "real" && (
                  <>
                    <strong className="text-rose-400 block mb-2 font-bold">
                      Atenção: a imagem é falsa.
                    </strong>{" "}
                    Acreditar em mídias alarmistas sem cruzar os relatórios pode
                    levar ao compartilhamento involuntário de desinformação.
                  </>
                )}
                {selectedVerdict === "inconclusive" && (
                  <>
                    <strong className="text-amber-400 block mb-2 font-bold">
                      Análise parcial.
                    </strong>{" "}
                    A cautela em não opinar sem certeza é boa, mas ao conectar a
                    nota oficial da Vigilância Sanitária com as falhas na
                    iluminação e na busca reversa, já temos evidências técnicas
                    suficientes para classificar a mídia como Falsa.
                  </>
                )}
              </p>
            </div>
            <div className="text-right shrink-0">
              <button
                onClick={() => setIsVerdictModalOpen(false)}
                className={`w-full sm:w-auto px-6 py-3 font-tech-mono font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer uppercase tracking-wider text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  selectedVerdict === "fake"
                    ? "bg-emerald-500 hover:bg-emerald-400 focus-visible:ring-emerald-400"
                    : "bg-amber-500 hover:bg-amber-400 focus-visible:ring-amber-400"
                }`}
              >
                Entendi! Continuar
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
