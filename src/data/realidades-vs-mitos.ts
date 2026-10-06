export interface MitoRealidadeItem {
  id: string;
  title: string;
  type: "realidade" | "mito";
  feedback: string;
  example: string;
}

export const mitosRealidadesData: MitoRealidadeItem[] = [
  {
    id: "1",
    title: "Identifica padrões em transações",
    type: "realidade",
    feedback:
      "Realidade! A IA analisa milhares de transações históricas para evitar fraudes.",
    example:
      "Sabe quando o seu cartão de crédito é bloqueado em uma compra suspeita de madrugada em outro estado? Não foi um gerente do banco que viu isso, foi uma IA que em milissegundos percebeu que aquela transação fugia do seu padrão normal de gastos e disparou um alerta.",
  },
  {
    id: "2",
    title: "Tem consciência ou sentimentos",
    type: "mito",
    feedback:
      "Mito! A IA não sente nada, nem raiva nem alegria. Ela apenas processa probabilidades de dados.",
    example:
      'Se você xingar a Alexa ou a Siri, elas podem responder com um "Sinto muito se te chateei", mas elas não estão tristes. Elas foram programadas para identificar palavras agressivas e rodar um código que seleciona uma frase de "desculpas" em seu banco de dados.',
  },
  {
    id: "3",
    title: "Tem compreensão da realidade",
    type: "mito",
    feedback:
      'Mito! A IA não "sabe" o sentido do que você digitou, apenas prevê estatisticamente a próxima palavra.',
    example:
      'Quando o corretor do seu celular sugere a próxima palavra, ele não sabe o que você quer dizer. Ele apenas calcula estatisticamente que após "feliz", a palavra "aniversário" tem alta probabilidade de aparecer. O ChatGPT faz isso em escala gigante.',
  },
  {
    id: "4",
    title: "Gera conteúdos baseados no passado",
    type: "realidade",
    feedback:
      "Realidade! A IA cria textos, imagens e códigos combinando dados com os quais foi treinada.",
    example:
      'Quando a IA gera a imagem de um "gato astronauta andando de skate", ela não está imaginando isso. Ela está combinando a informação de milhares de imagens de gatos, astronautas e skates que foram inseridas no seu banco de treinamento.',
  },
  {
    id: "5",
    title: "Possui julgamento ético ou moral",
    type: "mito",
    feedback:
      'Mito! A IA não sabe o que é "certo" ou "errado", apenas reflete os vieses das pessoas que a treinaram.',
    example:
      "Em 2018, uma grande empresa usou IA para selecionar currículos. A IA começou a rejeitar currículos de mulheres porque percebeu que nos últimos 10 anos a empresa contratava majoritariamente homens. Ela não tinha má intenção, apenas copiou um padrão humano errado.",
  },
  {
    id: "6",
    title: "Automatiza tarefas repetitivas",
    type: "realidade",
    feedback:
      "Realidade! A IA organiza planilhas, filtra spam e otimiza rotas de tráfego em tempo real.",
    example:
      "O Waze não sabe apenas o caminho mais curto. Ele analisa a velocidade de milhares de motoristas em tempo real. Se calcula congestionamento no trecho X, a IA redireciona sua rota automaticamente para uma rua mais rápida.",
  },
];
