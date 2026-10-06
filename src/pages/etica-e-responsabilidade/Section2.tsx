import { useCallback } from "react";
import { SectionLayout, SectionProps } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import {
  SectionTitle,
  SectionText,
  SectionSmall,
} from "../../components/Typography";
import { DilemmaQuestion } from "../../components/DilemmaQuestion";
import { biasDilemmaData } from "../../data/dilemas-eticos";
import { usePageProgress } from "../../context/PageProgressContext";

export default function Section2({ id, step, label, color }: SectionProps) {
  const { markSectionAsCompleted } = usePageProgress();

  const handleComplete = useCallback(() => {
    markSectionAsCompleted(id);
  }, [id, markSectionAsCompleted]);

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Viés algorítmico</SectionTitle>

      <SectionText align="center" className="mb-4">
        Os modelos de IA não têm opiniões próprias; eles aprendem analisando
        históricos de dados humanos. Se a sociedade cometeu injustiças no
        passado (discriminação racial, de gênero ou social), a IA entende esses
        preconceitos históricos como &quot;regras&quot; e passa a repeti-los em
        escala.
      </SectionText>

      <SectionSmall>
        Isso afeta diretamente a vida das pessoas em análises de crédito
        bancário, seleção de empregos por currículo e sistemas de reconhecimento
        facial usados pela polícia que falham mais ao identificar pessoas
        negras.
      </SectionSmall>

      <DilemmaQuestion
        data={biasDilemmaData}
        color={color}
        onComplete={handleComplete}
      />
    </SectionLayout>
  );
}
