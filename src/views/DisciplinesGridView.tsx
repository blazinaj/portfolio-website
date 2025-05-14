import React from "react";
import { GridView } from "@/components/GridView";
import { Discipline } from "@/types/Discipline";
import { useRouter } from "next/navigation";

interface DisciplineGridViewProps {
  disciplines: Discipline[];
}

export const DisciplinesGridView = ({
  disciplines,
}: DisciplineGridViewProps) => {
  const router = useRouter();

  return (
    <GridView
      items={disciplines.map((discipline) => ({
        id: discipline.id,
        title: discipline.name,
        subTitle: discipline.description,
        icon: discipline.icon,
        onClick: () => router.push(`/discipline/${discipline.id}`),
      }))}
    />
  );
};