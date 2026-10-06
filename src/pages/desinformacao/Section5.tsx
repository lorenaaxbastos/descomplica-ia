import { useState } from "react";
import { SectionProps, SectionLayout } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import { SectionTitle, SectionText } from "../../components/Typography";
import { NextPageButton } from "../../components/NextPageButton";
import { toolsData } from "../../data/laboratorio-investigacao";
import { InvestigationLabGame } from "../../components/InvestigationLabGame";

export default function Section5({ id, step, label, color }: SectionProps) {
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>
        Laboratório de investigação: como checar uma mídia suspeita
      </SectionTitle>

      <SectionText align="center" className="mb-8">
        Analise o caso abaixo como um investigador digital. Use as ferramentas
        para verificar os fatos e depois emita o seu veredito final:
      </SectionText>

      <InvestigationLabGame
        tools={toolsData}
        color={color}
        onComplete={() => setIsGameCompleted(true)}
      />

      <NextPageButton
        to="/etica-e-responsabilidade"
        label="Avançar para Ética e Sociedade"
        isPulse={isGameCompleted}
        color={color}
      />
    </SectionLayout>
  );
}
