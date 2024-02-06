import React from "react";
import {GridView} from "@/components/GridView";
import {Discipline} from "@/types/Discipline";

interface DisciplineGridViewProps {
    disciplines: Discipline[];
}

/**
 * Vertical list of projects.
 *
 * Each element has:
 * - icon
 * - name
 * - chips for the technologies used in the project.
 *
 * @param projects
 * @constructor
 */
export const DisciplinesGridView = ({ disciplines }: DisciplineGridViewProps) => {
  return (
    <GridView
      items={disciplines.map((discipline) => ({
        id: discipline.id,
        title: discipline.name,
        subTitle: discipline.description,
        icon: discipline.icon,
      }))}
    />
  );
};
