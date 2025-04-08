import React from "react";
import { GridView } from "@/components/GridView";
import { Project } from "@/types/Project";
import { ProjectDetails } from "@/views/ProjectDetails";

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
        logo: project.logo,
        link: project.link,
        component: <ProjectDetails projectId={project.id} />,
        gridProps: {
          lg: 6,
          sm: 12,
        },
      }))}
    />
  );
};
