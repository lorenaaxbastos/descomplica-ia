import { CategoryItem } from "../components/InteractiveCategoryGrid";

export const aiTypesData: CategoryItem[] = [
  {
    id: "vision",
    title: "Visão computacional",
    subtitle: 'A IA que "enxerga"',
    codeTag: "TIPO_01 // VISAO_COMPUTACIONAL",
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
        label: "Saúde",
        description:
          "Diagnóstico por imagem. Algoritmos identificam tumores e fraturas em exames de raio-X e ressonância com precisão similar ou superior à humana.",
      },
      {
        label: "Segurança e Finanças",
        description:
          "Reconhecimento facial e biometria para autorização de pagamentos ou segurança de ambientes.",
      },
      {
        label: "Mobilidade",
        description:
          "Visão computacional em carros autônomos e drones de entrega para identificar pedestres, placas e obstáculos em tempo real.",
      },
    ],
  },
  {
    id: "predictive",
    title: "Análise preditiva e ML",
    subtitle: 'A IA que "prevê"',
    codeTag: "TIPO_02 // MACHINE_LEARNING",
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
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    details: [
      {
        label: "Finanças",
        description:
          "Detecção de fraudes em tempo real e score de crédito individualizado com base no histórico comportamental.",
      },
      {
        label: "Agronegócio",
        description:
          "Preditividade do tempo e análise do solo para prever a produtividade da safra e evitar contaminações por pragas.",
      },
      {
        label: "Indústria",
        description:
          "Manutenção preditiva. A IA avisa que uma máquina de uma fábrica vai quebrar antes que ela pare, analisando vibração e temperatura.",
      },
    ],
  },
  {
    id: "nlp",
    title: "Processamento de Linguagem Natural",
    subtitle: 'A IA que "entende" linguagem',
    codeTag: "TIPO_03 // PNL",
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
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    details: [
      {
        label: "Educação e Acessibilidade",
        description:
          "Tradução simultânea de idiomas e conversão de texto para Língua Brasileira de Sinais (LIBRAS) em tempo real.",
      },
      {
        label: "Serviços e Negócios",
        description:
          "Análise de sentimento. Ferramentas que leem milhares de avaliações de clientes para medir a satisfação com um produto em segundos.",
      },
    ],
  },
  {
    id: "recommendation",
    title: "Sistemas de recomendação e otimização",
    subtitle: 'A IA que "organiza"',
    codeTag: "TIPO_04 // RECOMENDACAO",
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
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
    details: [
      {
        label: "Logística e Transporte",
        description:
          "Otimização de rotas de entrega de grandes e-commerces para reduzir consumo de combustível e tempo de frete.",
      },
      {
        label: "Mercado de Trabalho",
        description:
          "Triagem e cruzamento automatizado de perfis em processos seletivos gigantescos para encontrar os candidatos ideais.",
      },
    ],
  },
];
