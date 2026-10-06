import { LinkCardData } from "../components/LinkCard";
import { IconCardData } from "../components/IconCard";

export const agenciesData: LinkCardData[] = [
  {
    title: "Agência Lupa",
    description: "A primeira agência de fact-checking do Brasil.",
    link: "https://lupa.uol.com.br/",
  },
  {
    title: "Aos Fatos",
    description:
      "Especializada em checagem de discursos políticos e redes digitais.",
    link: "https://aosfatos.org/",
  },
  {
    title: "Projeto Comprova",
    description:
      "Coalizão de veículos de imprensa para combater a desinformação.",
    link: "https://projetocomprova.com.br/",
  },
  {
    title: "Fato ou Fake (G1)",
    description: "Serviço do grupo Globo dedicado a checar boatos virais.",
    link: "https://g1.globo.com/fato-ou-fake/",
  },
];

const DefaultWatermarkIcon = (
  <svg
    className="w-24 h-24"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export const toolsData: IconCardData[] = [
  {
    title: "Busca reversa de imagens",
    subtitle: "(Google Lens / TinEye)",
    description:
      "Permite descobrir onde e quando uma imagem apareceu pela primeira vez na web, revelando se uma foto antiga está sendo usada fora de contexto.",
    codeTag: "// METODO_DE_ANALISE",
    icon: DefaultWatermarkIcon,
  },
  {
    title: "Inspeção de credenciais C2PA",
    subtitle: "(Content Authenticity / Verify)",
    description:
      'Ferramentas que leem a "certidão de nascimento digital" do arquivo para verificar se há assinaturas de softwares de IA (como Midjourney ou Photoshop) nos dados ocultos da imagem.',
    codeTag: "// METODO_DE_ANALISE",
    icon: DefaultWatermarkIcon,
  },
  {
    title: "Análise EXIF",
    subtitle: "(ExifTool / InVID)",
    description:
      "Extensões e leitores que extraem dados técnicos do arquivo, como modelo da câmera, coordenadas de GPS, data de criação e parâmetros de edição.",
    codeTag: "// METODO_DE_ANALISE",
    icon: DefaultWatermarkIcon,
  },
];
