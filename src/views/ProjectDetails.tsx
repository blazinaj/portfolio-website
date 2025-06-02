import { useDataProvider } from "../hooks/useDataProvider";
import React, { useMemo } from "react";
import { ProjectFeature } from "../types/ProjectFeature";
import { Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";

interface ProjectDetailsProps {
  projectId: string;
}

/**
 * Displays detailed information about a specific portfolio project.
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
 */
export const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  if (!features || features.length === 0) {
    return null;
  }
  
  return (
    <Carousel autoPlay={false}>
      {features.map((feature, index) => (
        <div key={index} style={{ width: "100%" }}>
          <Stack style={{ width: "100%" }} spacing={2}>
            <h2 className="carouselItemTitle">{feature.name}</h2>
            <h4
              style={{ width: "100%" }}
              className="carouselItemDescription"
            >
              {feature.description}
            </h4>
            {feature.image && (
              <img
                src={feature.image}
                alt={feature.name}
                className="carouselItemImage"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          </Stack>
        </div>
      ))}
    </Carousel>
  );
};