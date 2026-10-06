import { PageLayout, PageSectionConfig } from "../../components/PageLayout";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const PAGE_SECTIONS: PageSectionConfig[] = [
  {
    id: "section-1",
    step: "01",
    label: "Boas Práticas",
    Component: Section1,
  },
  {
    id: "section-2",
    step: "02",
    label: "Dúvidas",
    Component: Section2,
  },
  {
    id: "section-3",
    step: "03",
    label: "Pesquisa",
    Component: Section3,
  },
  {
    id: "section-4",
    step: "04",
    label: "Agradecimento",
    Component: Section4,
  },
];

export default function PageBoasPraticas() {
  return <PageLayout sections={PAGE_SECTIONS} color="rose" />;
}
