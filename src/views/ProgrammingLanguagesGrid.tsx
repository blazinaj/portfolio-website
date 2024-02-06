import React from "react";
import {ProficiencyChipGrid} from "@/components/ProficiencyChipGrid";

interface ProgrammingLanguagesGridProps {
    languages: Language[];
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
 */
export const ProgrammingLanguagesGrid = ({ languages }: ProgrammingLanguagesGridProps) => {
  return (
    <ProficiencyChipGrid
      chips={languages.map((language: Language) => ({
        id: language.id,
        label: language.name,
        icon: language.icon,
        proficiency: language.proficiency,
      }))}
    />
  );
};


