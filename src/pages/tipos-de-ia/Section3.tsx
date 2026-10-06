import { useState } from "react";
import { SectionProps, SectionLayout } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import { SectionTitle, SectionText } from "../../components/Typography";
import { NextPageButton } from "../../components/NextPageButton";
import { problemasIaData, IA_OPTIONS } from "../../data/problemas-tipos-de-ia";
import { ScenarioQuizGame } from "../../components/ScenarioQuizGame";

export default function Section3({ id, step, label, color }: SectionProps) {
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Qual IA resolve o problema?</SectionTitle>

      <SectionText align="center" className="mb-4 sm:mb-6">
        Leia o cenário abaixo e selecione o tipo de tecnologia mais adequado:
      </SectionText>

      <ScenarioQuizGame
        cases={problemasIaData}
        options={IA_OPTIONS}
        color={color}
        onComplete={() => setIsGameCompleted(true)}
      />

      <div className="mt-2">
        <NextPageButton
          to="/desinformacao"
          label="Avançar para Desinformação"
          isPulse={isGameCompleted}
          color={color}
        />
      </div>
    </SectionLayout>
  );
}
