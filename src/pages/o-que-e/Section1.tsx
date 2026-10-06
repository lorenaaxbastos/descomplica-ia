import { SectionLayout, SectionProps } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import {
  SectionTitle,
  SectionHighlight,
  SectionText,
  SectionUnderline,
} from "../../components/Typography";

export default function Section1({ id, step, label, color }: SectionProps) {
  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle as="h1">O que é Inteligência Artificial?</SectionTitle>

      <SectionHighlight color={color}>
        A tecnologia que aprende com padrões para resolver problemas.
      </SectionHighlight>

      <SectionText align="center">
        Na prática, a IA é um conjunto de códigos e modelos matemáticos capazes
        de analisar grandes volumes de dados, identificar padrões e tomar
        decisões ou fazer previsões com base neles.{" "}
      </SectionText>

      <SectionText align="center">
        <SectionUnderline color={color}>
          Ela não &quot;pensa&quot;, ela calcula.
        </SectionUnderline>
      </SectionText>
    </SectionLayout>
  );
}
