import { DilemmaData } from "../components/DilemmaQuestion";

export const biasDilemmaData: DilemmaData = {
  title: "// DILEMA DO CIDADÃO",
  scenario:
    "Você se candidata a uma vaga de emprego e descobre que a primeira fase da entrevista é gravada e avaliada por um algoritmo de IA, que analisa suas expressões faciais e tom de voz para decidir se você passa ou não.",
  options: [
    {
      id: 1,
      label: "[ Opção 1 ]",
      text: "Acho aceitável. Se o sistema for mais rápido e neutro, não vejo problema.",
      feedbackTitle: "Pense sobre a suposta neutralidade:",
      feedbackText:
        "Entendemos a busca por eficiência e velocidade, mas vale o alerta: algoritmos de análise facial e vocal não são neutros. Eles aprendem com históricos humanos e falham desproporcionalmente ao avaliar pessoas neurodivergentes, idosos ou pessoas com sotaques e traços regionais específicos.",
      isAlert: true,
    },
    {
      id: 2,
      label: "[ Opção 2 ]",
      text: "Acho injusto e invasivo. Expressões culturais e traços faciais variam muito. Uma IA não deve julgar traços humanos.",
      feedbackTitle: "Visão alinhada com os direitos humanos:",
      feedbackText:
        "Exatamente! A avaliação de expressões faciais por IA é uma das áreas mais criticadas e banidas mundialmente. Cientistas apontam falta de comprovação científica na relação entre expressões faciais automáticas e competência profissional.",
    },
  ],
};

export const privacyDilemmaData: DilemmaData = {
  title: "// DILEMA DO CIDADÃO",
  scenario:
    "Você publica fotos da sua família e artes autorais no seu perfil público das redes sociais. Uma grande empresa de tecnologia usou suas fotos para treinar um sistema comercial de IA sem te pagar ou pedir licença.",
  options: [
    {
      id: 1,
      label: "[ Opção 1 ]",
      text: "Se publiquei na internet, é público. Qualquer empresa tem o direito de usar para treinar sistemas.",
      feedbackTitle: "Uma reflexão sobre o ambiente digital:",
      feedbackText:
        'Embora os dados estejam acessíveis na internet, do ponto de vista ético e legal, "disponível publicamente" não significa "livre para exploração comercial sem autorização". Leis como a LGPD exigem finalidade clara e autorização para o tratamento de dados pessoais.',
      isAlert: true,
    },
    {
      id: 2,
      label: "[ Opção 2 ]",
      text: "Público não significa gratuito para exploração. Meus dados e minhas criações continuam sendo meus e exigem consentimento.",
      feedbackTitle: "Visão alinhada com as legislações modernas:",
      feedbackText:
        "Perfeito! Este é um dos maiores embates judiciais do mundo hoje. Artistas e cidadãos comuns estão processando empresas de IA porque suas criações e dados pessoais foram usados para gerar lucro corporativo sem qualquer repasse ou pedido de licença.",
    },
  ],
};

export const environmentDilemmaData: DilemmaData = {
  title: "// DILEMA DO CIDADÃO",
  scenario:
    "Você precisa fazer uma tarefa simples (como resumir um texto pequeno ou escrever um e-mail curto). Você pode fazer isso manualmente em 2 minutos ou usar uma IA generativa em 5 segundos.",
  options: [
    {
      id: 1,
      label: "[ Opção 1 ]",
      text: "Uso com moderação. Deixo a IA apenas para tarefas complexas e evito o uso desnecessário para reduzir meu impacto ambiental digital.",
      feedbackTitle: "Visão alinhada com a sustentabilidade digital:",
      feedbackText:
        "Exatamente! O uso consciente da tecnologia envolve entender que toda chamada de API ou prompt em nuvem tem um custo de recursos naturais no mundo físico. Reservar a IA para problemas complexos ajuda a reduzir nossa pegada de carbono digital.",
    },
    {
      id: 2,
      label: "[ Opção 2 ]",
      text: "Uso a IA sempre. A praticidade do meu tempo é prioridade, independentemente do consumo de energia do servidor.",
      feedbackTitle: "Uma reflexão sobre a pegada ecológica digital:",
      feedbackText:
        "A praticidade do tempo imediato é muito atraente, mas é importante lembrar que data centers exigem resfriamento constante com água potável e alto consumo de energia elétrica. Avaliar quando a IA é realmente necessária faz toda a diferença para o meio ambiente.",
      isAlert: true,
    },
  ],
};

export const regulationDilemmaData: DilemmaData = {
  title: "// DILEMA DO CIDADÃO",
  scenario:
    "Um concurso de artes visuais premiou em 1º lugar uma imagem criada por uma pessoa que apenas digitou um comando de texto em uma IA, superando artistas que passaram meses desenhando manualmente.",
  options: [
    {
      id: 1,
      label: "[ Opção 1 ]",
      text: "O resultado é o que importa. Saber usar a ferramenta certa (prompt) também é uma forma de arte.",
      feedbackTitle: "Uma reflexão sobre autoria e esforço:",
      feedbackText:
        "Embora a engenharia de prompt exija criatividade, os algoritmos de imagem foram treinados raspando bilhões de obras humanas sem consentimento. Equiparar a geração algorítmica ao processo artístico manual gera grande controvérsia sobre equidade e direitos autorais.",
      isAlert: true,
    },
    {
      id: 2,
      label: "[ Opção 2 ]",
      text: "A categoria deve ser separada. Ferramentas que geram artes a partir de trabalhos de terceiros não devem competir com o esforço humano direto.",
      feedbackTitle: "Visão alinhada com as novas regulamentações:",
      feedbackText:
        "Perfeito! A discussão sobre direitos autorais, transparência no treinamento dos modelos e a valorização do trabalho humano direto é pilar central nas leis e regulamentações de IA em todo o mundo.",
    },
  ],
};
