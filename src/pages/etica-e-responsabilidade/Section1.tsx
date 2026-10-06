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

      <SectionTitle as="h1">
        Ética, sociedade e responsabilidade digital
      </SectionTitle>

      <SectionHighlight color={color}>
        A IA como um fenômeno social e humano
      </SectionHighlight>

      <SectionText align="center">
        A Inteligência Artificial não é apenas um avanço técnico; ela é um
        fenômeno social. O impacto de um algoritmo vai muito além da tela do
        computador — ele afeta contratações, julgamentos, o consumo de recursos
        naturais e os direitos fundamentais do cidadão.{" "}
        <SectionUnderline color={color}>
          Para navegar de forma consciente na era digital, não basta saber como
          usar a IA: precisamos entender quais são as consequências das escolhas
          que fazemos ao adotá-la.
        </SectionUnderline>
      </SectionText>
    </SectionLayout>
  );
}
