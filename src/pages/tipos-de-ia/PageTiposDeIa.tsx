import { PageLayout, PageSectionConfig } from "../../components/PageLayout";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const PAGE_SECTIONS: PageSectionConfig[] = [
  {
    id: "section-1",
    step: "01",
    label: "Além da IA Generativa",
    Component: Section1,
  },
  {
    id: "section-2",
    step: "02",
    label: "Tipos de IA e Aplicações",
    Component: Section2,
  },
  {
    id: "section-3",
    step: "03",
    label: "Desafio Interativo",
    Component: Section3,
  },
];

export default function PageTiposDeIa() {
  return <PageLayout sections={PAGE_SECTIONS} color="violet" />;
}
