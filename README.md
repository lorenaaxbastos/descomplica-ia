# Descomplica IA | Guia Interativo sobre Inteligência Artificial

> **Projeto de extensão universitária** focado na democratização do acesso à informação sobre Inteligência Artificial, letramento digital e combate à desinformação.

---

![React](https://img.shields.io/badge/React-18.x-cyan?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-sky?style=for-the-badge&logo=tailwind-css)

---

## Sobre o projeto

O **Descomplica IA** é uma aplicação web interativa (SPA) desenvolvida para traduzir conceitos complexos de Inteligência Artificial para o público geral. Diferente de artigos estáticos, o projeto utiliza **letramento digital ativo**, colocando o usuário no centro da aprendizagem através de gamificação, resolução de dilemas éticos e simulações práticas.

A jornada aborda:

1. **O que é Inteligência Artificial:** conceitos base, funcionamento e desmistificação da tecnologia no cotidiano.
2. **Tipos de IA e suas aplicações:** aplicações reais e suas diferenças (Visão Computacional, Processamento de Linguagem Natural, Machine Learning).
3. **Desinformação:** quem lucra com a desinformação, ferramentas de checagem, conscientização sobre o viés de confirmação (como a IA explora emoções)
4. **Ética e Sociedade:** discussões sobre viés algorítmico, privacidade de dados, o impacto ambiental e regulação.
5. **Boas Práticas:** como usar a IA generativa com segurança e higiene de dados.

## Principais funcionalidades

- **Componentes gamificados:** jogos de classificação, atividades de múltipla escolha, laboratório de investigação de fake news e painéis de dilemas morais.
- **Design system dinâmico:** cada módulo da jornada possui uma identidade visual própria estruturada em 5 cores (`cyan`, `violet`, `amber`, `emerald`, `rose`), com efeitos de *glassmorphism* e *glow*.
- **Navegação inteligente (scroll tracking):** uso avançado de `IntersectionObserver` aliado à Context API para rastrear a leitura do usuário e atualizar os indicadores laterais em tempo real.
- **Responsividade total:** interface perfeitamente adaptada para dispositivos móveis, tablets e monitores *ultrawide*.
- **Acessibilidade nativa (WCAG 2.1 / WAI-ARIA):** navegação completa via teclado (*roving tabindex*, setas e recuperação inteligente de foco pós-modal), suporte a leitores de tela com regiões dinâmicas (`aria-live`) e respeito às preferências de movimento reduzido (`motion-safe`).
- **Rigor acadêmico:** modal discreto e acessível contendo todas as referências bibliográficas estruturadas nas normas ABNT.

## Arquitetura e padrões técnicos

Este projeto adota boas práticas de Engenharia de Software no ecossistema React:

* **Atomic design:** componentes altamente reutilizáveis (`FormCard`, `LinkCard`, `Tabs`, `NextPageButton`) que aceitam propriedades dinâmicas de cor e conteúdo.
* **Tailwind JIT shielding:** implementação de "dicionários de estilo" (`Record<ColorType, string>`) para garantir a compilação correta das classes dinâmicas pelo JIT Compiler do Tailwind, prevenindo falhas de *rendering* em produção.
* **Global state management:** gerenciamento centralizado de navegação e progresso via Context API (`NavigationContext`).
* **Router & scroll control:** solução robusta contra as *race conditions* de Single Page Applications, garantindo *Scroll to Top* automático e reinício de estado na transição entre rotas usando `useLayoutEffect`.

## Acesse a aplicação online

A plataforma está no ar e pode ser acessada diretamente pelo endereço: **[descomplicaia.dev.br](https://descomplicaia.dev.br/)**

## Como executar localmente

Se deseja rodar o código-fonte em sua máquina para testes ou desenvolvimento:

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes (`npm`, `yarn` ou `pnpm`)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/lorenaaxbastos/descomplica-ia.git
```

2. Acesse a pasta do projeto:

```bash
cd NOME_DO_REPOSITORIO
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra o navegador em `http://localhost:5173.`

## Licença e uso educacional

Este projeto é um **recurso educacional aberto** desenvolvido como atividade de extensão universitária.

Sinta-se livre para utilizar, compartilhar e adaptar este material para fins educativos, salas de aula ou workshops, **desde que mantidos os devidos créditos à autora**.

Distribuído sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
