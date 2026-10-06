import { SectionProps, SectionLayout } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import { SectionTitle, SectionText } from "../../components/Typography";
import { InteractiveCategoryGrid } from "../../components/InteractiveCategoryGrid";
import { aiTypesData } from "../../data/tipos-de-ia";

export default function Section2({ id, step, label, color }: SectionProps) {
  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Tipos de IA e suas aplicações por área</SectionTitle>

      <SectionText align="center" className="mb-6 sm:mb-8">
        Selecione uma das categorias para abrir sua ficha:
      </SectionText>

      <InteractiveCategoryGrid items={aiTypesData} color={color} cols={4} />
    </SectionLayout>
  );
}
