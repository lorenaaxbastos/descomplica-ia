import { useCallback } from "react";
import { SectionLayout, SectionProps } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import {
  SectionTitle,
  SectionText,
  SectionSmall,
} from "../../components/Typography";
import { DilemmaQuestion } from "../../components/DilemmaQuestion";
import { environmentDilemmaData } from "../../data/dilemas-eticos";
import { usePageProgress } from "../../context/PageProgressContext";

export default function Section4({ id, step, label, color }: SectionProps) {
  const { markSectionAsCompleted } = usePageProgress();

  const handleComplete = useCallback(() => {
    markSectionAsCompleted(id);
  }, [id, markSectionAsCompleted]);

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Impacto ambiental</SectionTitle>

      <SectionText align="center" className="mb-4">
        Manter os servidores (<i>data centers</i>) rodando milhares de placas de
        vídeo para responder a prompts de IA consome uma quantidade massiva de
        energia elétrica e exige milhões de litros de água potável para resfriar
        os equipamentos.
      </SectionText>

      <SectionSmall>
        Gerar uma única imagem por IA consome a mesma energia necessária para
        carregar a bateria de um smartphone até 100%, além de gastar cerca de
        250ml de água para resfriar os servidores.
      </SectionSmall>

      <DilemmaQuestion
        data={environmentDilemmaData}
        color={color}
        onComplete={handleComplete}
      />
    </SectionLayout>
  );
}
