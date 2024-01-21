import React from "react";
import { Icon } from "@iconify/react";
import { ProficiencyChipGrid } from "@/app/components/ProficiencyChipGrid";

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
export const TechnologiesGrid = ({ technologies = MOCK_TECHNOLOGIES }) => {
  return (
    <ProficiencyChipGrid
      chips={technologies.map((technology) => ({
        id: technology.id,
        label: technology.name,
        icon: technology.icon,
        proficiency: technology.proficiency,
      }))}
    />
  );
};

const MOCK_TECHNOLOGIES = [
  {
    id: 1,
    name: "Amazon Web Services",
    icon: <Icon icon="skill-icons:aws-light" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 2,
    name: "Jira",
    icon: <Icon icon="logos:jira" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 3,
    name: "GitHub",
    icon: <Icon icon="skill-icons:github-light" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 4,
    name: "Figma",
    icon: <Icon icon="skill-icons:figma-light" />,
    proficiency: 3, // out of 5 - 'familiar'
  },
  {
    id: 5,
    name: "Slack",
    icon: <Icon icon="logos:slack-icon" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 6,
    name: "Microsoft Office",
    icon: <Icon icon="logos:microsoft-icon" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 7,
    name: "Microsoft Teams",
    icon: <Icon icon="logos:microsoft-teams" />,
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 8,
    name: "Blender",
    icon: <Icon icon="skill-icons:blender-light" />,
    proficiency: 2, // out of 5 - 'familiar'
  },
  {
    id: 9,
    name: "Node.js / NPM",
    icon: <Icon icon="skill-icons:nodejs-light" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 10,
    name: "Sentry",
    icon: <Icon icon="skill-icons:sentry" />,
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 11,
    name: "Docker",
    icon: <Icon icon="skill-icons:docker" />,
    proficiency: 2, // out of 5 - 'familiar'
  },
];
