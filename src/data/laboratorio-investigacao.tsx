import { ReactNode } from "react";

export interface ToolItem {
  id: "metadata" | "reverse_search" | "fact_checking";
  name: string;
  codeTag: string;
  resultTitle: string;
  resultText: string;
  icon: ReactNode;
}

export type VerdictType = "fake" | "real" | "inconclusive" | null;

export const investigationCaseData = {
  title: "A FALSA CONTAMINAÇÃO DA ÁGUA",
  tag: "ALERTA_DIGITAL",
  description:
    "Uma foto assustadora mostrando uma substância escura e viscosa vazando nos reservatórios principais de abastecimento da cidade viralizou em grupos de mensagens locais. O texto embutido pedia a interrupção imediata do uso de água potável, provocando corrida aos supermercados e pânico na população.",
  mission:
    "Clique nas ferramentas ao lado para obter relatórios forenses e checar se o boato é real ou fruto de manipulação algorítmica.",
};

export const toolsData: ToolItem[] = [
  {
    id: "metadata",
    name: "Verificar metadados e C2PA",
    codeTag: "// ANÁLISE FORENSE DE ARQUIVO",
    resultTitle: "Relatório de metadados do arquivo",
    resultText:
      "Metadados EXIF de câmera física ausentes (comum após recompressão em redes sociais). A análise de iluminação revela sombras na estrutura do reservatório com leve divergência no ângulo solar (12º) em relação ao fundo. O contêiner do arquivo não possui assinatura digital de proveniência C2PA.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    id: "reverse_search",
    name: "Executar busca reversa de imagem",
    codeTag: "// RASTREAMENTO WEB (GOOGLE LENS / TINEYE)",
    resultTitle: "Relatório de busca reversa",
    resultText:
      "Foram localizadas mídias de angulação semelhante de reservatórios industriais em registros de 2021. A imagem atual possui variação na textura do efluente e não possui registros em veículos de imprensa credenciados anteriores às últimas 6 horas.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    id: "fact_checking",
    name: "Consultar órgãos oficiais e agências",
    codeTag: "// CHECAGEM DE FONTES (DEFESA CIVIL / SANEAR)",
    resultTitle: "Relatório de checagem oficial",
    resultText:
      "A Companhia de Saneamento e a Vigilância Sanitária publicaram nota técnica informando que os testes laboratoriais em tempo real no reservatório central apresentam parâmetros de água 100% dentro da normalidade, sem chamados de emergência registrados.",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
  },
];
