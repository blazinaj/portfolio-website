"use client";

import { ProjectDetails } from "@/views/ProjectDetails";
import { useRouter } from "next/router";

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
const ProjectDetailsPage = () => {
  const router = useRouter();

  return ProjectDetails({
    projectId: router.query.slug as string,
  });
};

export default ProjectDetailsPage;
