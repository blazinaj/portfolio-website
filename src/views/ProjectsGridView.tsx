import React from "react";
import { GridView } from "@/components/GridView";
import { Project } from "@/types/Project";
import { useRouter } from "next/navigation";

interface ProjectsGridViewProps {
  projects: Project[];
}

export const ProjectsGridView = ({ projects }: ProjectsGridViewProps) => {
  const router = useRouter();

  return (
    <GridView
      items={projects.map((project: Project) => ({
        id: project.id,
        title: project.name,
        subTitle: project.description,
        icon: project.icon,
        logo: project.logo,
        link: project.link,
        onClick: () => router.push(`/project/${project.id}`),
        gridProps: {
          lg: 6,
          sm: 12,
        },
      }))}
    />
  );
};