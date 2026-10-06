import { SectionLayout, SectionProps } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import {
  SectionTitle,
  SectionHighlight,
  SectionText,
  SectionInlineCode,
  SectionUnderline,
} from "../../components/Typography";
import { TechCard } from "../../components/TechCard";
import { Grid } from "../../components/Grid";

export default function Section2({ id, step, label, color }: SectionProps) {
  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Como ela aprende?</SectionTitle>

      <SectionHighlight color={color}>
        (<em>Machine Learning</em> sem complicação)
      </SectionHighlight>

      <Grid maxWidth="4xl" className="mb-6 sm:mb-8">
        <TechCard color="slate" headerLabel="// Programação Tradicional">
          <p>
            O desenvolvedor escreve regras explícitas:
            <SectionInlineCode color={color}>
              &quot;se acontecer X, faça Y&quot;
            </SectionInlineCode>
          </p>
        </TechCard>

        <TechCard color={color} headerLabel="// Aprendizado de Máquina">
          <p>
            Em vez de dar as regras, os desenvolvedores fornecem{" "}
            <SectionUnderline color={color} variant="sans">
              milhares de exemplos.
            </SectionUnderline>
          </p>
        </TechCard>
      </Grid>

      <div className="bg-slate-900/50 border border-slate-800/90 rounded-2xl p-6 md:p-8 max-w-4xl w-full backdrop-blur-md">
        <SectionText align="center">
          O algoritmo analisa os dados fornecidos pelos desenvolvedores e
          descobre os padrões sozinho — exatamente como uma criança aprende a
          reconhecer um gato depois de ver centenas de fotos de gatos.
        </SectionText>
      </div>
    </SectionLayout>
  );
}
