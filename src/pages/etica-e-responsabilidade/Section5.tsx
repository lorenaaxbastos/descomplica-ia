import { useCallback } from "react";
import { SectionLayout, SectionProps } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import {
  SectionTitle,
  SectionText,
  SectionSmall,
  SectionBold,
} from "../../components/Typography";
import { NextPageButton } from "../../components/NextPageButton";
import { DilemmaQuestion } from "../../components/DilemmaQuestion";
import { regulationDilemmaData } from "../../data/dilemas-eticos";
import { usePageProgress } from "../../context/PageProgressContext";

export default function Section5({ id, step, label, color }: SectionProps) {
  const { markSectionAsCompleted, completedSections } = usePageProgress();

  const isAllGameCompleted = completedSections.length >= 4;

  const handleComplete = useCallback(() => {
    markSectionAsCompleted(id);
  }, [id, markSectionAsCompleted]);

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Regulação</SectionTitle>

      <SectionText align="center" className="mb-4">
        Sem leis claras, a IA pode ser usada para vigilância em massa, golpes e
        substituição desordenada de empregos sem amparo ao trabalhador.
      </SectionText>

      <SectionSmall>
        Leis como o <SectionBold color={color}>EU AI Act</SectionBold> na Europa
        e o <SectionBold color={color}>Marco Legal</SectionBold> da IA no Brasil
        buscam classificar os riscos da tecnologia, banir usos perigosos e
        exigir transparência das empresas de tecnologia.
      </SectionSmall>

      <DilemmaQuestion
        data={regulationDilemmaData}
        color={color}
        onComplete={handleComplete}
      />

      <span className="text-xs font-tech-mono text-slate-400 mt-2 mb-4">
        Progresso: {completedSections.length}/4 respondidos
      </span>

      <NextPageButton
        to="/boas-praticas"
        label="Avançar para Boas Práticas"
        isPulse={isAllGameCompleted}
        color={color}
      />
    </SectionLayout>
  );
}
