import { useMemo } from "react";
import { SectionProps, SectionLayout } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import {
  SectionTitle,
  SectionText,
  SectionBold,
} from "../../components/Typography";
import { Tabs, TabItem } from "../../components/Tabs";
import { Grid } from "../../components/Grid";
import { LinkCard } from "../../components/LinkCard";
import { IconCard } from "../../components/IconCard";

import { agenciesData, toolsData } from "../../data/guia-defesa";

export default function Section4({ id, step, label, color }: SectionProps) {
  const guiTabs: TabItem[] = useMemo(
    () => [
      {
        id: "agencias",
        label: "Agências (Brasil)",
        content: (
          <Grid cols={2} maxWidth="full">
            {agenciesData.map((agency, idx) => (
              <LinkCard key={idx} {...agency} color={color} />
            ))}
          </Grid>
        ),
      },
      {
        id: "ferramentas",
        label: "Ferramentas",
        content: (
          <Grid cols={3} maxWidth="full">
            {toolsData.map((tool, idx) => (
              <IconCard key={idx} {...tool} color={color} />
            ))}
          </Grid>
        ),
      },
    ],
    [color],
  );

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <div className="max-w-130">
        <SectionTitle>Guia de defesa: em quem confiar?</SectionTitle>
      </div>

      <SectionText align="center" className="mb-8">
        Para não cair em golpes ou propagar desinformação, o usuário deve
        consultar agências independentes de checagem de fatos (
        <SectionBold color={color}>fact-checking</SectionBold>) e utilizar
        ferramentas de verificação.
      </SectionText>

      <Tabs tabs={guiTabs} color={color} />
    </SectionLayout>
  );
}
