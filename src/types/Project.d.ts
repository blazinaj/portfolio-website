import { Technology } from "@/types/Technology";
import { ProjectFeature } from "@/types/ProjectFeature";

export type Project = {
  id: string;
  name: string;
  description: string;
  links?: string[];
  link?: string;
  githubLink?: string;
  webLink?: string;
  technologies?: Technology[];
  icon?: string;
  features?: ProjectFeature[];
  logo?: string;
  featured?: boolean;
};