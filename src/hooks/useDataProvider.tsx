import {useMemo} from "react";
import {LANGUAGES} from "@/data/LANGUAGES";
import {SKILLS} from "@/data/SKILLS";
import {PROJECTS} from "@/data/PROJECTS";
import {EXPERIENCE} from "@/data/EXPERIENCE";
import {EDUCATION} from "@/data/EDUCATION";
import {TECHNOLOGIES} from "@/data/TECHOLOGIES";
import {INTERESTS} from "@/data/INTERESTS";
import {CONTACT} from "@/data/CONTACT";

export interface DataProvider {
    LANGUAGES: typeof LANGUAGES,
    SKILLS: typeof SKILLS,
    PROJECTS: typeof PROJECTS,
    EXPERIENCE: typeof EXPERIENCE,
    EDUCATION: typeof EDUCATION,
    INTERESTS: typeof INTERESTS,
    CONTACT: typeof CONTACT,
    TECHNOLOGIES: typeof TECHNOLOGIES,
}

export const useDataProvider = () => {

    const mockData= useMemo(() => {
        return {
            LANGUAGES,
            SKILLS,
            PROJECTS,
            EXPERIENCE,
            EDUCATION,
            INTERESTS,
            CONTACT,
            TECHNOLOGIES,
        }
    }, [])

    return {
        ...mockData
    }

}