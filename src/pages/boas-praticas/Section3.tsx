import { useState, useCallback } from "react";
import { SectionProps, SectionLayout } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import {
  SectionTitle,
  SectionText,
  SectionUnderline,
} from "../../components/Typography";
import { FormCard } from "../../components/FormCard";
import {
  FormLabel,
  FormChoiceGroup,
  TextArea,
} from "../../components/FormComponents";

const Q2_OPTIONS = ["Sim", "Parcialmente", "Não"];
const Q3_OPTIONS = [
  "O que é IA",
  "Tipos de IA",
  "Desinformação",
  "Ética e Sociedade",
];

export default function Section3({ id, step, label, color }: SectionProps) {
  const [q1Rating, setQ1Rating] = useState<number | null>(null);
  const [q2Preparedness, setQ2Preparedness] = useState<string | null>(null);
  const [q3Section, setQ3Section] = useState<string | null>(null);
  const [q4Comment, setQ4Comment] = useState("");

  const handleReset = useCallback(() => {
    setQ1Rating(null);
    setQ2Preparedness(null);
    setQ3Section(null);
    setQ4Comment("");
  }, []);

  const isFormValid =
    q1Rating !== null && q2Preparedness !== null && q3Section !== null;

  const surveyData = {
    q1Nota: String(q1Rating ?? ""),
    q2Preparado: q2Preparedness ?? "",
    q3SecaoFavorita: q3Section ?? "",
    q4Comentario: q4Comment,
  };

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Chegamos ao fim da nossa jornada interativa</SectionTitle>

      <SectionText align="center" className="mb-6 max-w-3xl">
        Para que esta atividade de extensão cumpra seu papel social e acadêmico,
        preciso da sua ajuda. Responda ao formulário abaixo — leva menos de 1
        minuto e as respostas são totalmente anônimas.
      </SectionText>

      <div className="mb-8 max-w-120">
        <SectionText align="center">
          <SectionUnderline color={color}>
            Seu feedback é essencial para medir o impacto educativo deste
            projeto!
          </SectionUnderline>
        </SectionText>
      </div>

      <FormCard
        formName="pesquisa-impacto"
        color={color}
        formData={surveyData}
        isSubmitDisabled={!isFormValid}
        onReset={handleReset}
        headerTitle="// AVALIAÇÃO_DO_PROJETO"
        headerSubtitle="[ PESQUISA DE IMPACTO ]"
        successTitle="Muito obrigada pela contribuição!"
        successMessage="Sua resposta foi registrada com sucesso e ajudará diretamente a validar os resultados desta pesquisa acadêmica."
      >
        <div>
          <FormLabel color={color}>
            1. O site ajudou a esclarecer o que é e como funciona a Inteligência
            Artificial? (1 a 5)
          </FormLabel>
          <FormChoiceGroup
            options={[1, 2, 3, 4, 5]}
            selectedValue={q1Rating}
            onChange={setQ1Rating}
            color={color}
            containerClass="flex items-center gap-2 sm:gap-4"
            buttonClass="flex-1 py-3 text-sm sm:text-base"
          />
        </div>

        <div>
          <FormLabel color={color}>
            2. Você se sente mais preparado(a) para identificar fake news,
            deepfakes e usar a IA de forma segura?
          </FormLabel>
          <FormChoiceGroup
            options={Q2_OPTIONS}
            selectedValue={q2Preparedness}
            onChange={setQ2Preparedness}
            color={color}
            containerClass="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3"
            buttonClass="py-3 px-2 text-xs sm:text-sm"
          />
        </div>

        <div>
          <FormLabel color={color}>
            3. Qual assunto provocou maior reflexão em você?
          </FormLabel>
          <FormChoiceGroup
            options={Q3_OPTIONS}
            selectedValue={q3Section}
            onChange={setQ3Section}
            color={color}
            containerClass="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            buttonClass="p-3.5 text-xs text-left"
            prefix="// "
          />
        </div>

        <div>
          <FormLabel color={color}>
            4. Deixe um comentário sobre a experiência educativa (opcional):
          </FormLabel>
          <TextArea
            value={q4Comment}
            onChange={(e) => setQ4Comment(e.target.value)}
            placeholder="Sua opinião ou sugestão..."
            rows={3}
            color={color}
          />
        </div>
      </FormCard>
    </SectionLayout>
  );
}
