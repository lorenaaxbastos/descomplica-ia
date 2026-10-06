import { PageLayout, PageSectionConfig } from "../../components/PageLayout";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const PAGE_SECTIONS: PageSectionConfig[] = [
  {
    id: "section-1",
    step: "01",
    label: "O que é IA",
    Component: Section1,
  },
  {
    id: "section-2",
    step: "02",
    label: "Aprendizado de Máquina",
    Component: Section2,
  },
  {
    id: "section-3",
    step: "03",
    label: "Ficção vs Realidade",
    Component: Section3,
  },
  {
    id: "section-4",
    step: "04",
    label: "Desafio Interativo",
    Component: Section4,
  },
];

export default function PageOQueE() {
  return <PageLayout sections={PAGE_SECTIONS} color="cyan" />;
}
