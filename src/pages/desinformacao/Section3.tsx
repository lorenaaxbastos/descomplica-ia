import { SectionProps, SectionLayout } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import { SectionTitle } from "../../components/Typography";

import { ContentCarousel } from "../../components/ContentCarousel";
import { casesData } from "../../data/casos-reais-fake-news";

export default function Section3({ id, step, label, color }: SectionProps) {
  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <div className="max-w-170">
        <SectionTitle>Casos reais que aconteceram no mundo</SectionTitle>
      </div>

      <ContentCarousel items={casesData} color={color} />
    </SectionLayout>
  );
}
