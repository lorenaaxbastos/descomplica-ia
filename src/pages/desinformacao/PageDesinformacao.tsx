import { PageLayout, PageSectionConfig } from "../../components/PageLayout";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const PAGE_SECTIONS: PageSectionConfig[] = [
  {
    id: "section-1",
    step: "01",
    label: "Economia da Desinformação",
    Component: Section1,
  },
  {
    id: "section-2",
    step: "02",
    label: "Quem Lucra",
    Component: Section2,
  },
  {
    id: "section-3",
    step: "03",
    label: "Casos Reais",
    Component: Section3,
  },
  {
    id: "section-4",
    step: "04",
    label: "Guia de Defesa",
    Component: Section4,
  },
  {
    id: "section-5",
    step: "05",
    label: "Desafio Interativo",
    Component: Section5,
  },
];

export default function PageDesinformacao() {
  return <PageLayout sections={PAGE_SECTIONS} color="amber" />;
}
