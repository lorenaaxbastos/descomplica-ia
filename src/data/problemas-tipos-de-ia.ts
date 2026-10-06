export interface ProblemaIa {
  id: number;
  title: string;
  description: string;
  correctOption: string;
  feedback: string;
}

export const IA_OPTIONS = [
  "Visão computacional",
  "Processamento de Linguagem Natural (PLN)",
  "Análise preditiva e ML (Machine Learning)",
  "Sistemas de recomendação e otimização",
];

export const problemasIaData: ProblemaIa[] = [
  {
    id: 1,
    title: "Diagnóstico Médico",
    description:
      "Um hospital precisa analisar 10.000 exames de tomografia para identificar sinais precoces de alterações nos pulmões.",
    correctOption: "Visão computacional",
    feedback:
      "A visão computacional analisa matrizes de pixels em imagens para identificar alterações sutis.",
  },
  {
    id: 2,
    title: "Acessibilidade na Educação",
    description:
      "Uma plataforma quer converter a fala de um professor ao vivo em texto e traduzir automaticamente para LIBRAS.",
    correctOption: "Processamento de Linguagem Natural (PLN)",
    feedback:
      "O PLN interpreta a estrutura da linguagem falada e traduz seu significado para outros sistemas de comunicação.",
  },
  {
    id: 3,
    title: "Prevenção no Agronegócio",
    description:
      "Um produtor rural quer saber a probabilidade de uma praga atingir sua lavoura nos próximos 3 meses, com base na umidade e temperatura do solo.",
    correctOption: "Análise preditiva e ML (Machine Learning)",
    feedback:
      "Modelos preditivos cruzam dados históricos e condições atuais para calcular cenários futuros.",
  },
  {
    id: 4,
    title: "Logística e Frota",
    description:
      "Uma transportadora precisa traçar a rota diária de 50 caminhões de entrega no trânsito para gastar o mínimo de combustível possível.",
    correctOption: "Sistemas de recomendação e otimização",
    feedback:
      "Algoritmos de otimização calculam combinações de trajetos em milissegundos para encontrar a rota mais eficiente.",
  },
  {
    id: 5,
    title: "Segurança Financeira",
    description:
      "Uma operadora de cartão precisa decidir em 1 segundo se uma compra de R$ 5.000 feita de madrugada é uma fraude.",
    correctOption: "Análise preditiva e ML (Machine Learning)",
    feedback:
      "A IA calcula o desvio no padrão de consumo do cliente para barrar transações suspeitas.",
  },
];
