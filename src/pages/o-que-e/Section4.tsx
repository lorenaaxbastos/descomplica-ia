import { useState, useMemo, useCallback } from "react";
import { mitosRealidadesData } from "../../data/realidades-vs-mitos";
import { SectionLayout, SectionProps } from "../../components/SectionLayout";
import { SectionBadge } from "../../components/SectionBadge";
import { SectionTitle, SectionText } from "../../components/Typography";
import { NextPageButton } from "../../components/NextPageButton";
import {
  ClassificationGame,
  GameCategory,
  GameItem,
} from "../../components/ClassificationGame";

const GAME_CATEGORIES: GameCategory[] = [
  { id: "realidade", label: "Realidade", color: "cyan" },
  { id: "mito", label: "Mito", color: "rose" },
];

export default function Section4({ id, step, label, color }: SectionProps) {
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  const mappedItems: GameItem[] = useMemo(
    () =>
      mitosRealidadesData.map((item) => ({
        id: item.id,
        title: item.title,
        correctCategoryId: item.type,
        feedback: item.feedback,
        example: item.example,
      })),
    [],
  );

  const handleGameComplete = useCallback(() => {
    setIsGameCompleted(true);
  }, []);

  return (
    <SectionLayout id={id}>
      <SectionBadge label={label} step={step} color={color} />

      <SectionTitle>Realidade vs. Mitos</SectionTitle>

      <SectionText align="center" className="mb-6">
        Selecione uma opção e teste se ela é{" "}
        <span className="text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
          REALIDADE
        </span>{" "}
        ou{" "}
        <span className="text-rose-400 font-bold drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]">
          MITO
        </span>
        :
      </SectionText>

      <ClassificationGame
        categories={GAME_CATEGORIES}
        items={mappedItems}
        onComplete={handleGameComplete}
      />

      <div className="mt-4">
        <NextPageButton
          to="/tipos-de-ia"
          label="Avançar para Tipos de IA"
          isPulse={isGameCompleted}
          color={color}
        />
      </div>
    </SectionLayout>
  );
}
