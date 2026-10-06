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
        A economia da desinformação e o impacto das Deepfakes
      </SectionTitle>

      <SectionHighlight color={color}>
        A ruptura da IA Generativa gratuita
      </SectionHighlight>

      <SectionText align="center">
        Antigamente, criar um vídeo ou áudio falso exigia estúdios de Hollywood,
        orçamentos milionários e semanas de pós-produção. Hoje, a popularização
        de ferramentas gratuitas ou de baixíssimo custo (como Midjourney,
        ElevenLabs, Suno e ChatGPT) eliminou a barreira técnica.{" "}
        <SectionUnderline color={color}>
          O custo para produzir uma mentira altamente convincente caiu para
          zero, enquanto o custo e o tempo para checar essa informação continuam
          altos.
        </SectionUnderline>
      </SectionText>
    </SectionLayout>
  );
}
