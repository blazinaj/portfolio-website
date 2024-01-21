import React from "react";
import {ProficiencyChipGrid} from "@/app/components/ProficiencyChipGrid";
import {Icon} from "@iconify/react";

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
export const ProgrammingLanguagesGrid = ({ languages = MOCK_LANGUAGES }) => {
  return (
    <ProficiencyChipGrid
      chips={languages.map((language) => ({
        id: language.id,
        label: language.name,
        icon: language.icon,
        proficiency: language.proficiency,
      }))}
    />
  );
};

const MOCK_LANGUAGES = [
  {
    id: 1,
    name: "Typescript",
    proficiency: 3, // out of 5 - 'comfortable'
    icon: <Icon icon="skill-icons:typescript" />,
  },
  {
    id: 2,
    name: "Javascript",
    icon: <Icon icon="skill-icons:javascript" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 3,
    name: "Python",
    icon: <Icon icon="skill-icons:python-light" />,
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 4,
    name: "Java",
    icon: <Icon icon="skill-icons:java-light" />,
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 5,
    name: "C#",
    icon: <Icon icon="skill-icons:cs" />,
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 6,
    name: "C++",
    icon: <Icon icon="skill-icons:cpp" />,
    proficiency: 2, // out of 5 - 'familiar'
  },
  {
    id: 7,
    name: "C",
    icon: <Icon icon="skill-icons:c" />,
    proficiency: 1, // out of 5 - 'novice'
  },
  {
    id: 8,
    name: "Go",
    icon: <Icon icon="skill-icons:golang" />,
    proficiency: 1, // out of 5 - 'novice'
  },
  {
    id: 9,
    name: "PHP",
    icon: <Icon icon="skill-icons:php-light" />,
    proficiency: 2, // out of 5 - 'familiar'
  },
  {
    id: 10,
    name: "SQL",
    icon: <Icon icon="skill-icons:mysql-light" />,
    proficiency: 2, // out of 5 - 'familiar'
  },
  {
    id: 11,
    name: "HTML",
    icon: <Icon icon="skill-icons:html" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 12,
    name: "GraphQL",
    icon: <Icon icon="skill-icons:graphql-light" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
];
