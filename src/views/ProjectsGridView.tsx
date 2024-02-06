import React from "react";
import { GridView } from "../components/GridView";
import SchoolIcon from "@mui/icons-material/School";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import {Project} from "@/types/Project";

interface ProjectsGridViewProps {
    projects: Project[];
}

/**
 * Vertical list of projects.
 *
 * Each element has:
 * - icon
 * - name
 * - chips for the technologies used in the project.
 */
export const ProjectsGridView = ({ projects }: ProjectsGridViewProps) => {
  return (
    <GridView
      items={projects.map((project: Project) => ({
        id: project.id,
        title: project.name,
        subTitle: project.description,
        icon: project.icon,
        link: project.link,
        gridProps: {
          lg: 12,
          sm: 12,
        },
      }))}
    />
  );
};


