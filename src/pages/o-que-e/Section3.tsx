import { SectionLayout, SectionProps } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import { SectionTitle, SectionStatus } from "../../components/Typography";
import { TechCard } from "../../components/TechCard";
import { Grid } from "../../components/Grid";

export default function Section3({ id, step, label, color }: SectionProps) {
  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Ficção científica vs. Realidade</SectionTitle>

      <Grid maxWidth="5xl">
        <TechCard
          color="rose"
          glow
          headerLabel="// IA Geral (AGI)"
          headerBadge="Ficção"
          title="IA da ficção"
          footer={<SectionStatus color="rose">Não existe.</SectionStatus>}
        >
          <p>
            Máquinas conscientes, com sentimentos, intenções próprias e
            capacidade de raciocinar sobre qualquer assunto.
          </p>
        </TechCard>

        <TechCard
          color={color}
          glow
          headerLabel="// IA Restrita (ANI)"
          headerBadge="Realidade"
          title="IA da realidade"
          footer={
            <SectionStatus color={color} pulse>
              É a IA que usamos hoje.
            </SectionStatus>
          }
        >
          <p>
            Algoritmos focados em resolver uma tarefa específica com extrema
            eficiência (como traduzir um texto, sugerir uma rota no GPS ou
            recomendar uma música).
          </p>
        </TechCard>
      </Grid>
    </SectionLayout>
  );
}
