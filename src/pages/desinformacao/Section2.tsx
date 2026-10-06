import { SectionProps, SectionLayout } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import {
  SectionTitle,
  SectionText,
  SectionBold,
} from "../../components/Typography";
import { InteractiveCategoryGrid } from "../../components/InteractiveCategoryGrid";
import { aiMotives } from "../../data/quem-lucra-desinformacao";

export default function Section2({ id, step, label, color }: SectionProps) {
  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Quem ganha com conteúdo falso?</SectionTitle>

      <div className="max-w-170">
        <SectionText align="center" className="mb-6 sm:mb-8">
          A proliferação de mídias sintéticas não é acidental; ela responde a{" "}
          <SectionBold color={color}>
            incentivos financeiros e políticos claros:
          </SectionBold>
        </SectionText>
      </div>

      <InteractiveCategoryGrid items={aiMotives} color={color} cols={3} />
    </SectionLayout>
  );
}
