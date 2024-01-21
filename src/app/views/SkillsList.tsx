import { ProficiencyChipGrid } from "@/app/components/ProficiencyChipGrid";
import { Icon } from "@iconify/react";
import { Skill_T } from "@/app/types/Skill";

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

const MOCK_SKILLS = [
  {
    id: 0,
    name: "Cybersecurity",
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 1,
    name: "Written Communication",
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 2,
    name: "Verbal Communication",
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 3,
    name: "Unit Testing",
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 4,
    name: "CI / CD",
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 5,
    name: "Agile",
    proficiency: 4, // out of 5 - 'skilled',
    icon: <Icon icon="fluent:arrow-sprint-16-regular" />,
  },
  {
    id: 6,
    name: "Scrum",
    proficiency: 4, // out of 5 - 'skilled',
    icon: <Icon icon="material-symbols:area-chart-rounded" />,
  },
  {
    id: 7,
    name: "Kanban",
    proficiency: 4, // out of 5 - 'skilled',
    icon: <Icon icon="bi:kanban" />,
  },
  {
    id: 8,
    name: "Project Management",
    proficiency: 4, // out of 5 - 'skilled',
    icon: <Icon icon="fluent:gantt-chart-24-filled" />,
  },
  {
    id: 9,
    name: "Leadership",
    proficiency: 4, // out of 5 - 'skilled',
    icon: <Icon icon="carbon:airline-manage-gates" />,
  },
  {
    id: 10,
    name: "UI/UX Design",
    proficiency: 3, // out of 5 - 'comfortable',
    icon: <Icon icon="fluent:card-ui-24-regular" />,
  },
  {
    id: 11,
    name: "Technical Writing",
    proficiency: 4, // out of 5 - 'skilled',
    icon: <Icon icon="tabler:writing" />,
  },
  {
    id: 12,
    name: "Public Speaking",
    proficiency: 3, // out of 5 - 'comfortable',
    icon: <Icon icon="mdi:speaking" />,
  },
  {
    id: 13,
    name: "Software Architecture",
    proficiency: 4,
    icon: <Icon icon="carbon:reference-architecture" />,
  },
  {
    id: 14,
    name: "IT Audits",
    proficiency: 4,
  },
  {
    id: 15,
    name: "Risk Assessment",
    proficiency: 4,
  },
  {
    id: 15,
    name: "Vulnerability Management",
    proficiency: 3,
  },
  {
    id: 16,
    name: "Vendor Management",
    proficiency: 3,
  },
  {
    id: 17,
    name: "Incident Response",
    proficiency: 3,
  },
  {
    id: 18,
    name: "User Support",
    proficiency: 4,
  },
  {
    id: 19,
    name: "Integrations",
    proficiency: 4,
  },
];
