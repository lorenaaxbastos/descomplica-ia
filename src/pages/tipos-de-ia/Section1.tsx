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

      <SectionTitle as="h1">Muito além da IA generativa</SectionTitle>

      <div className="max-w-170">
        <SectionHighlight color={color}>
          A Inteligência Artificial não se resume a gerar imagens ou textos no
          ChatGPT.
        </SectionHighlight>
      </div>

      <SectionText align="center">
        Existem diferentes tipos de IAs especializadas resolvendo problemas
        complexos no mundo real —{" "}
        <SectionUnderline color={color}>
          desde o diagnóstico adiantado de um câncer até a prevenção de fraudes
          bancárias globais.
        </SectionUnderline>
      </SectionText>
    </SectionLayout>
  );
}
