import { ProficiencyChipGrid } from "@/components/ProficiencyChipGrid";
import { Icon } from "@iconify/react";
import { Skill_T } from "@/types/Skill";

interface SkillsListProps {
  skills?: Skill_T[];
}

export const SkillsList = ({ skills = MOCK_SKILLS }: SkillsListProps) => {
  return (
    <ProficiencyChipGrid
      chips={skills.map((skill) => ({
        id: skill.id,
        label: skill.name,
        icon: skill.icon,
        proficiency: skill.proficiency,
      }))}
    />
  );
};


