import React from "react";
import { ProficiencyChipGrid } from "@/components/ProficiencyChipGrid";
import { Technology } from "@/types/Technology";

interface TechnologiesGridProps {
  technologies: Technology[];
}

/**
 * Grid of technologies and software applications with knowledge of.
 *
 * Each element has:
 * - name
 * - logo
 * - link
 * - proficiency (optional link to a certification)
 *
 * @param technologies
 * @constructor
 */
// @ts-ignore
export const TechnologiesGrid = ({ technologies }: TechnologiesGridProps) => {
  return (
    <ProficiencyChipGrid
      chips={technologies.map((technology: Technology) => ({
        id: technology.id,
        label: technology.name,
        icon: technology.icon,
        proficiency: technology.proficiency,
      }))}
    />
  );
};
