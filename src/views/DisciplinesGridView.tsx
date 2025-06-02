import React from "react";
import { GridView } from "../components/GridView";
import { Discipline } from "../types/Discipline";
import { useNavigate } from "react-router-dom";

interface DisciplineGridViewProps {
  disciplines: Discipline[];
}

export const DisciplinesGridView = ({
  disciplines,
}: DisciplineGridViewProps) => {
  const navigate = useNavigate();

  return (
    <GridView
      items={disciplines.map((discipline) => ({
        id: discipline.id,
        title: discipline.name,
        subTitle: discipline.description,
        icon: discipline.icon,
        onClick: () => navigate(`/discipline/${discipline.id}`),
      }))}
    />
  );
};