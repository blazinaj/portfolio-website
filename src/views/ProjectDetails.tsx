import styles from "@/app/page.module.css";
import { useDataProvider } from "@/hooks/useDataProvider";
import React, { useMemo } from "react";
import { ProjectFeature } from "@/types/ProjectFeature";
import { Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";

interface ProjectDetailsProps {
  projectId: string;
}

/**
 * Displays detailed information about a specific portfolio project.
 *
 * Includes:
 *
 * - Project name
 * - Project description
 * - Project status
 * - Project start date
 * - Project end date
 * - Technologies used
 * - Project Logo
 * - Project Board
 * - Project Designs
 * - Project Features
 *
 * @constructor
 */
export const ProjectDetails = ({ projectId }: ProjectDetailsProps) => {
  const { PROJECTS } = useDataProvider();

  const project = useMemo(() => {
    return PROJECTS.find((project) => project.id === projectId);
  }, [projectId, PROJECTS]);

  if (!project) {
    return <div>Project Not Found</div>;
  }

  return <ProjectFeatures features={project.features} />;
};

export interface ProjectFeaturesProps {
  features?: ProjectFeature[];
}

/**
 * Carousel view of Project Features
 * @constructor
 */
export const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  return (
    <Carousel autoPlay={false}>
      {features?.map((feature, index) => (
        <div key={index} style={{ width: "100%" }}>
          <Stack style={{ width: "100%" }} spacing={2}>
            <h2 className={styles.carouselItemTitle}>{feature.name}</h2>
            <h4
              style={{ width: "100%" }}
              className={styles.carouselItemDescription}
            >
              {feature.description}
            </h4>
            <img
              src={feature.image}
              alt={feature.name}
              className={styles.carouselItemImage}
            />
          </Stack>
        </div>
      ))}
    </Carousel>
  );
};
