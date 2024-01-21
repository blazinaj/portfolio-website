import React from "react";
import { GridView } from "../components/GridView";
import CategoryIcon from "@mui/icons-material/Category";
import GroupsIcon from "@mui/icons-material/Groups";
import EngineeringIcon from "@mui/icons-material/Engineering";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import StorageIcon from "@mui/icons-material/Storage";
import PreviewIcon from "@mui/icons-material/Preview";
import GppGoodIcon from "@mui/icons-material/GppGood";

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
export const DisciplinesGridView = ({ disciplines = MOCK_DISCIPLINES }) => {
  return (
    <GridView
      // @ts-ignore
      items={disciplines.map((discipline) => ({
        title: discipline.name,
        subTitle: discipline.description,
        icon: discipline.icon,
      }))}
    />
  );
};

const MOCK_DISCIPLINES = [
  {
    id: 0,
    name: "Product Management",
    description:
      "Collaborating with internal and external stakeholders to define product vision, strategy, and roadmap. Being a subject matter expert for the product and bridging between business people and technical teams.",
    icon: <CategoryIcon />,
  },
  {
    id: 1,
    name: "Software Development Management",
    description:
      "Managing a team of software engineers, designers, and testers. Planning and executing software development projects. Managing budgets, timelines, and resources.",
    icon: <GroupsIcon />,
  },
  {
    id: 2,
    name: "Software Engineering",
    description:
      "Building software applications to solve real problems. Writing code, designing user interfaces, and architecting cloud infrastructure. Working with other engineers to build large scale software systems.",
    icon: <EngineeringIcon />,
  },
  {
    id: 3,
    name: "Quality Assurance",
    description:
      "Testing software and features to ensure that they meet the requirements and are free of bugs. Writing automated tests to ensure that software continues to work as it is updated. Maintaining world-class quality standards.",
    icon: <DomainVerificationIcon />,
  },
  {
    id: 4,
    name: "User Support",
    description:
      "Helping users to understand how to use software applications. Troubleshooting issues and providing solutions. Working with users to understand their needs and how to improve the software.",
    icon: <SupportAgentIcon />,
  },
  {
    id: 5,
    name: "DevOps",
    description:
      "Building and maintaining cloud infrastructure to support software applications. Automating the deployment of software applications. Monitoring and maintaining the health of software applications.",
    icon: <StorageIcon />,
  },
  {
    id: 6,
    name: "User Experience Design",
    description:
      "Designing user interfaces and user experiences to ensure that software applications are easy to use and intuitive. Working with users to understand their needs and how to improve the software.",
    icon: <PreviewIcon />,
  },
  {
    id: 7,
    name: "Cybersecurity",
    description:
      "Ensuring that software applications are secure and that user data is protected. Working with security teams to ensure that software applications meet security standards.",
    icon: <GppGoodIcon />,
  },
];
