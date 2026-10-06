import { useCallback } from "react";
import { SectionProps, SectionLayout } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import {
  SectionTitle,
  SectionText,
  SectionSmall,
  SectionBold,
} from "../../components/Typography";
import { DilemmaQuestion } from "../../components/DilemmaQuestion";
import { privacyDilemmaData } from "../../data/dilemas-eticos";
import { usePageProgress } from "../../context/PageProgressContext";

export default function Section3({ id, step, label, color }: SectionProps) {
  const { markSectionAsCompleted } = usePageProgress();

  const handleComplete = useCallback(() => {
    markSectionAsCompleted(id);
  }, [id, markSectionAsCompleted]);

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Privacidade e LGPD</SectionTitle>

      <SectionText align="center" className="mb-4">
        Para criar ferramentas como o ChatGPT ou o Midjourney, empresas
        &quot;varreram&quot; a internet coletando bilhões de textos, fotos e
        postagens públicas sem pedir autorização aos donos.
      </SectionText>

      <SectionSmall>
        No Brasil, a{" "}
        <SectionBold color={color}>Lei Geral de Proteção de Dados</SectionBold>{" "}
        garante que você é o dono das suas informações. Você tem o direito de
        saber se seus dados estão sendo usados para treinar IAs e pode solicitar
        a exclusão deles.
      </SectionSmall>

      <DilemmaQuestion
        data={privacyDilemmaData}
        color={color}
        onComplete={handleComplete}
      />
    </SectionLayout>
  );
}
