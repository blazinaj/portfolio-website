"use client";

import styles from "./page.module.css";
import { AboutHero } from "@/app/views/AboutHero";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { SkillsList } from "@/app/views/SkillsList";
import { ProjectsGridView } from "@/app/views/ProjectsGridView";
import { TechnologiesGrid } from "@/app/views/TechnologiesGrid";
import { WorkHistoryTimeline } from "@/app/views/WorkHistoryTimeline";
import { Box } from "@mui/system";
import { PageStack } from "@/app/components/PageStack";
import { DisciplinesGridView } from "@/app/views/DisciplinesGridView";
import { HobbiesGridView } from "@/app/views/HobbiesGridView";
import { NavigationLinkGrid } from "@/app/components/NavigationLinkGrid";
import { NavigationSpeedDial } from "@/app/components/NavigationSpeedDial";
import { EducationTimeline } from "@/app/views/EducationTimeline";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TableViewIcon from "@mui/icons-material/TableView";
import TerminalIcon from "@mui/icons-material/Terminal";
import EngineeringIcon from "@mui/icons-material/Engineering";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import { ProgrammingLanguagesGrid } from "@/app/views/ProgrammingLanguagesGrid";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import {
  useVisibilityContextState,
  VisibilityContextProvider,
} from "@/app/context/VisibilityContext";

/**
 * About me: linked in profile picture and link, bio with background
 *
 * Work History: timeline view of work history with links to the companies
 *
 * Projects: Radial or List View of projects with links to the project overview page. Edify, Thoughtify, Printify, Smart Mirror
 *
 * Skills: list of skills and languages, with some sort of proficiency indicator
 *
 * Technologies: List of software applications and tools such as AWS, Jira, GitHub, etc
 *
 */
export default function Home() {
  const visibilityContextState = useVisibilityContextState();

  const pageSections = [
    {
      id: "work-history",
      title: "Work History",
      subTitle: "Timeline view of my relevant employment history",
      icon: <WorkHistoryIcon />,
      component: <WorkHistoryTimeline />,
      href: "#work-history",
    },
    {
      id: "disciplines",
      title: "Disciplines",
      subTitle: "My experience in various software development roles",
      icon: <EngineeringIcon />,
      component: <DisciplinesGridView />,
      href: "#disciplines",
    },
    {
      id: "education",
      title: "Education",
      subTitle: "My formal university education",
      icon: <SchoolIcon />,
      component: <EducationTimeline />,
      href: "#education",
    },
    {
      id: "projects",
      title: "Projects",
      subTitle: "Personal projects that I've worked on in my free time",
      icon: <TableViewIcon />,
      component: <ProjectsGridView />,
      href: "#projects",
    },
    {
      id: "programming-languages",
      title: "Languages",
      subTitle: "Programming languages that I'm more or less familiar with",
      icon: <TerminalIcon />,
      component: <ProgrammingLanguagesGrid />,
      href: "#programming-languages",
    },
    {
      id: "technologies",
      title: "Technologies",
      subTitle:
        "Applications and technologies that I've used throughout my career",
      icon: <DisplaySettingsIcon />,
      component: <TechnologiesGrid />,
      href: "#technologies",
    },
    {
      id: "skills",
      title: "Skills",
      subTitle: "Skills and proficiencies that I've developed over the years",
      icon: <AutoAwesomeIcon />,
      component: <SkillsList />,
      href: "#skills",
    },
    {
      id: "hobbies",
      title: "Hobbies",
      subTitle: "The things that I like to do, that make me who I am",
      icon: <DirectionsBikeIcon />,
      component: <HobbiesGridView />,
      href: "#hobbies",
    },
  ];

  return (
    <main className={styles.main}>
      <VisibilityContextProvider value={visibilityContextState}>
        <Box sx={{ height: "100vh", maxWidth: "750px" }}>
          <AboutHero />
          <NavigationLinkGrid
            links={pageSections}
            sx={{
              position: "absolute",
              bottom: "2em",
              left: "4em",
              right: "4em",
            }}
          />
        </Box>

        <PageStack
          pagesSections={pageSections}
          visibilityCallback={visibilityContextState.visibilityCallback}
        />

        <NavigationSpeedDial pages={pageSections} />
      </VisibilityContextProvider>
    </main>
  );
}
