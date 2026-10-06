import { useState } from "react";
import { SectionProps, SectionLayout } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import { SectionTitle, SectionText } from "../../components/Typography";
import { FormCard } from "../../components/FormCard";
import { TextArea } from "../../components/FormComponents.tsx";

export default function Section2({ id, step, label, color }: SectionProps) {
  const [message, setMessage] = useState("");

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />
      <SectionTitle>Ficou com alguma dúvida?</SectionTitle>
      <SectionText align="center" className="mb-6">
        Deixe sua pergunta abaixo:
      </SectionText>

      <FormCard
        formName="duvidas-feedback"
        color={color}
        formData={{ mensagem: message }}
        isSubmitDisabled={!message.trim()}
        onReset={() => setMessage("")}
        headerTitle="// MENSAGEM_DO_USUARIO"
        headerSubtitle="[ CANAL DE FEEDBACK ]"
      >
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua dúvida aqui..."
          color={color}
          required
        />
      </FormCard>
    </SectionLayout>
  );
}
