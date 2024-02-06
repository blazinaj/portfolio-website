import {Technology} from "@/types/Technology";
import {ProjectFeature} from "@/types/ProjectFeature";

export type Project = {
    id: string | number;
    name: string;
    description: string;
    links?: string[];
    link?: string;
    technologies?: Technology[];
    icon?: string;
    features?: ProjectFeature[];
}