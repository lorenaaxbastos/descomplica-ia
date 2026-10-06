import { PageLayout, PageSectionConfig } from "../../components/PageLayout";
import { PageProgressProvider } from "../../context/PageProgressContext";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const PAGE_SECTIONS: PageSectionConfig[] = [
  {
    id: "section-1",
    step: "01",
    label: "Ética e IA",
    Component: Section1,
  },
  {
    id: "section-2",
    step: "02",
    label: "Viés Algorítmico",
    Component: Section2,
  },
  {
    id: "section-3",
    step: "03",
    label: "Privacidade e LGPD",
    Component: Section3,
  },
  {
    id: "section-4",
    step: "04",
    label: "Impacto Ambiental",
    Component: Section4,
  },
  {
    id: "section-5",
    step: "05",
    label: "Regulação",
    Component: Section5,
  },
];

export default function PageEticaEResponsabilidade() {
  return (
    <PageProgressProvider>
      <PageLayout sections={PAGE_SECTIONS} color="emerald" />
    </PageProgressProvider>
  );
}
