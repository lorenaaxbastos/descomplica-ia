import { useState } from "react";
import { ColorType } from "../../types/color";
import { SectionProps, SectionLayout } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import {
  SectionTitle,
  SectionText,
  SectionBold,
} from "../../components/Typography";
import { LinkCard } from "../../components/LinkCard";
import { NextPageButton } from "../../components/NextPageButton";
import { Modal, ModalCloseButton } from "../../components/Modal";
import { Grid } from "../../components/Grid";

const REFERENCIAS = [
  {
    autor: "BARROSO, Luís Roberto; MELLO, Patrícia Perrone Campos.",
    obra: "Inteligência artificial: promessas, riscos e regulação. Algo de novo debaixo do sol.",
    detalhes:
      "Revista Direito e Práxis, Rio de Janeiro, v. 15, n. 4, p. 1-45, 2024.",
  },
  {
    autor: "BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos.",
    obra: "Guia de uso de Inteligência Artificial (IA) Generativa no Governo Federal.",
    detalhes: "Brasília: MGI, 2023.",
  },
  {
    autor: "BURLE, Caroline; CORTIZ, Diogo.",
    obra: "Mapeamento de princípios de inteligência artificial.",
    detalhes: "São Paulo: Comitê Gestor da Internet no Brasil (CGI.br), 2019.",
  },
  {
    autor: "CARVALHO, André Carlos Ponce de Leon Ferreira de.",
    obra: "Inteligência Artificial: riscos, benefícios e uso responsável.",
    detalhes: "Estudos Avançados, São Paulo, v. 35, n. 101, p. 21-36, 2021.",
  },
  {
    autor:
      "HEGGLER, João Marcos; SZMOSKI, Romeu Miqueias; MIQUELIN, Awdry Feisser.",
    obra: "As dualidades entre o uso da inteligência artificial na educação e os riscos de vieses algorítmicos.",
    detalhes: "Educação & Sociedade, Campinas, v. 46, e289323, 2025.",
  },
  {
    autor: "UNIVERSIDADE FEDERAL DE MINAS GERAIS (UFMG).",
    obra: "Guia de Inteligência Artificial: Princípios e diretrizes para o uso responsável na UFMG.",
    detalhes: "Belo Horizonte: UFMG, 2024.",
  },
  {
    autor: "UNESCO.",
    obra: "Recomendação sobre a Ética da Inteligência Artificial.",
    detalhes: "Paris: UNESCO, 2022.",
  },
];

const COLOR_THEMES: Record<
  ColorType,
  {
    iconBg: string;
    text: string;
    hoverText: string;
    hoverBorder: string;
    button: string;
  }
> = {
  cyan: {
    iconBg: "bg-cyan-500/20 text-cyan-400",
    text: "text-cyan-400",
    hoverText: "hover:text-cyan-400",
    hoverBorder: "hover:border-cyan-400/50",
    button:
      "bg-cyan-500 hover:bg-cyan-400 text-slate-950 focus-visible:ring-cyan-400",
  },
  violet: {
    iconBg: "bg-violet-500/20 text-violet-400",
    text: "text-violet-400",
    hoverText: "hover:text-violet-400",
    hoverBorder: "hover:border-violet-400/50",
    button:
      "bg-violet-500 hover:bg-violet-400 text-white focus-visible:ring-violet-400",
  },
  amber: {
    iconBg: "bg-amber-500/20 text-amber-400",
    text: "text-amber-400",
    hoverText: "hover:text-amber-400",
    hoverBorder: "hover:border-amber-400/50",
    button:
      "bg-amber-500 hover:bg-amber-400 text-slate-950 focus-visible:ring-amber-400",
  },
  emerald: {
    iconBg: "bg-emerald-500/20 text-emerald-400",
    text: "text-emerald-400",
    hoverText: "hover:text-emerald-400",
    hoverBorder: "hover:border-emerald-400/50",
    button:
      "bg-emerald-500 hover:bg-emerald-400 text-slate-950 focus-visible:ring-emerald-400",
  },
  rose: {
    iconBg: "bg-rose-500/20 text-rose-400",
    text: "text-rose-400",
    hoverText: "hover:text-rose-400",
    hoverBorder: "hover:border-rose-400/50",
    button:
      "bg-rose-500 hover:bg-rose-400 text-white focus-visible:ring-rose-400",
  },
};

export default function Section4({ id, step, label, color }: SectionProps) {
  const [isRefModalOpen, setIsRefModalOpen] = useState(false);

  const theme = COLOR_THEMES[color] || COLOR_THEMES.cyan;

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Muito obrigada por fazer parte desta jornada!</SectionTitle>

      <SectionText align="center" className="mb-10 max-w-3xl">
        Espero que este espaço tenha ajudado a desmistificar a Inteligência
        Artificial e a tornar sua navegação digital mais{" "}
        <SectionBold color={color}>segura, consciente e crítica</SectionBold>. A
        tecnologia evolui em ritmo acelerado, mas a capacidade de reflexão do
        cidadão deve acompanhar esse ritmo.
      </SectionText>

      <Grid cols={2} maxWidth="4xl" className="mb-12 text-left">
        <LinkCard
          title="LinkedIn"
          description="Vamos nos conectar! Acompanhe minhas publicações sobre tecnologia, design, educação e o desenvolvimento deste projeto."
          link="https://www.linkedin.com/in/lorenaaxbastos/"
          linkLabel="linkedin.com/in/lorenaaxbastos"
          color={color}
        />
        <LinkCard
          title="GitHub"
          description="Confira o repositório deste projeto e outros trabalhos em desenvolvimento front-end, acessibilidade web, design de interfaces e experimentos com tecnologia."
          link="https://github.com/lorenaaxbastos"
          linkLabel="github.com/lorenaaxbastos"
          color={color}
        />
      </Grid>

      <div className="w-full flex flex-col items-center">
        <NextPageButton
          to="/"
          label="Voltar para o Início"
          isPulse={true}
          color={color}
          icon={
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-slate-950"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          }
        />
      </div>

      <button
        onClick={() => setIsRefModalOpen(true)}
        className={`mt-4 text-[10px] sm:text-xs font-tech-mono text-slate-500 ${theme.hoverText} transition-colors uppercase tracking-widest cursor-pointer border-b border-transparent ${theme.hoverBorder} pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded px-1`}
      >
        [ Acessar Referências Bibliográficas ]
      </button>

      <Modal
        isOpen={isRefModalOpen}
        onClose={() => setIsRefModalOpen(false)}
        color={color}
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 sm:pb-4 mb-5 sm:mb-6 shrink-0">
          <div className="flex items-center gap-3">
            <span className={`p-2 rounded-xl shrink-0 ${theme.iconBg}`}>
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
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </span>
            <div>
              <span
                className={`font-tech-mono text-[10px] sm:text-xs font-bold uppercase block ${theme.text} tracking-wider`}
              >
                // EXTENSÃO UNIVERSITÁRIA
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Referências Bibliográficas
              </h3>
            </div>
          </div>
          <ModalCloseButton
            onClose={() => setIsRefModalOpen(false)}
            color={color}
          />
        </div>

        <div className="space-y-4 mb-6 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar-slate text-left">
          {REFERENCIAS.map((ref, idx) => (
            <div
              key={ref.obra || idx}
              className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 text-sm font-tech-mono leading-relaxed text-slate-300"
            >
              <span className="uppercase text-slate-400">{ref.autor}</span>{" "}
              <span className="font-bold text-slate-200">{ref.obra}</span>{" "}
              <span className="text-slate-400">{ref.detalhes}</span>
            </div>
          ))}
        </div>

        <div className="text-right shrink-0">
          <button
            onClick={() => setIsRefModalOpen(false)}
            className={`px-6 py-2.5 font-tech-mono font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${theme.button}`}
          >
            Fechar
          </button>
        </div>
      </Modal>
    </SectionLayout>
  );
}
