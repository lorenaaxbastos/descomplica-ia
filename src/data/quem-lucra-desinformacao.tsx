import { CategoryItem } from "../components/InteractiveCategoryGrid";

export const aiMotives: CategoryItem[] = [
  {
    id: "finance",
    title: "Lucro e golpes",
    subtitle: "A indústria do clique",
    codeTag: "MOTIVO_01 // FINANCAS",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    details: [
      {
        label: "AdSense e Monetização",
        description:
          "Sites caça-cliques usam IA para gerar centenas de matérias sensacionalistas em minutos, atraindo tráfego para faturar com anúncios.",
      },
      {
        label: "Engenharia Social e Extorsão",
        description:
          "Golpistas usam clonagem de voz (bastam 3 segundos de áudio tirados do Instagram) para simular sequestros ou pedir PIX de emergência a familiares.",
      },
    ],
  },
  {
    id: "politics",
    title: "Ataques políticos",
    subtitle: "Guerra psicológica",
    codeTag: "MOTIVO_02 // POLITICA",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
    details: [
      {
        label: "Manipulação Eleitoral",
        description:
          "Lançamento de áudios falsos de candidatos na véspera da votação (quando não há tempo hábil para a checagem ser divulgada).",
      },
      {
        label: "Destruição de Reputação",
        description:
          "Uso de ferramentas de IA para criar nudes não consentidos (deepfakes pornográficos), afetando desproporcionalmente mulheres e adolescentes.",
      },
    ],
  },
  {
    id: "attention",
    title: "Atenção dos algoritmos",
    subtitle: "A economia da atenção",
    codeTag: "MOTIVO_03 // RETENCAO",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    details: [
      {
        label: "Viralização a Qualquer Custo",
        description:
          'As redes sociais priorizam conteúdos que geram fortes emoções (raiva, medo, indignação). A IA generativa permite criar a imagem ou o vídeo "perfeito" para disparar esses gatilhos emocionais, garantindo retenção e viralização de conteúdo.',
      },
    ],
  },
];
