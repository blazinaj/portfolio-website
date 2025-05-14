"use client";

import styles from "@/app/page.module.css";
import { AboutHero } from "@/views/AboutHero";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { SkillsList } from "@/views/SkillsList";
import { ProjectsGridView } from "@/views/ProjectsGridView";
import { TechnologiesGrid } from "@/views/TechnologiesGrid";
import { WorkHistoryTimeline } from "@/views/WorkHistoryTimeline";
import { PageStack } from "@/components/PageStack";
import { DisciplinesGridView } from "@/views/DisciplinesGridView";
import { HobbiesGridView } from "@/views/HobbiesGridView";
import { NavigationSpeedDial } from "@/components/NavigationSpeedDial";
import { EducationTimeline } from "@/views/EducationTimeline";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TableViewIcon from "@mui/icons-material/TableView";
import TerminalIcon from "@mui/icons-material/Terminal";
import EngineeringIcon from "@mui/icons-material/Engineering";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import { ProgrammingLanguagesGrid } from "@/views/ProgrammingLanguagesGrid";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import { Suspense, useEffect, useState } from "react";
import {
  useVisibilityContextState,
  VisibilityContextProvider,
} from "@/context/VisibilityContext";
import { useDataProvider } from "@/hooks/useDataProvider";

// Separate loading component for better error boundary handling
function LoadingFallback() {
  return <div>Loading...</div>;
}

function PageContent({ visibilityContextState, pageSections }) {
  // Ensure data is only rendered on client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingFallback />;
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <PageStack
        homeSection={<AboutHero />}
        pageSections={pageSections}
        visibilityCallback={visibilityContextState.visibilityCallback}
      />
      <NavigationSpeedDial pages={pageSections} />
    </Suspense>
  );
}

export default function Home() {
  const visibilityContextState = useVisibilityContextState();
  
  const {
    LANGUAGES,
    SKILLS,
    PROJECTS,
    EXPERIENCE,
    EDUCATION,
    TECHNOLOGIES,
    INTERESTS,
    CONTACT,
    DISCIPLINES,
  } = useDataProvider();

  const pageSections = [
    {
      id: "work-history",
      title: "Work History",
      subTitle: "Timeline view of my relevant employment history",
      icon: <WorkHistoryIcon />,
      component: <WorkHistoryTimeline experience={EXPERIENCE} />,
      href: "#work-history",
    },
    {
      id: "disciplines",
      title: "Disciplines",
      subTitle: "My experience in various software development roles",
      icon: <EngineeringIcon />,
      component: <DisciplinesGridView disciplines={DISCIPLINES} />,
      href: "#disciplines",
    },
    {
      id: "education",
      title: "Education",
      subTitle: "My formal university education",
      icon: <SchoolIcon />,
      component: <EducationTimeline education={EDUCATION} />,
      href: "#education",
    },
    {
      id: "projects",
      title: "Projects",
      subTitle: "Personal projects that I've worked on in my free time",
      icon: <TableViewIcon />,
      component: <ProjectsGridView projects={PROJECTS} />,
      href: "#projects",
    },
    {
      id: "programming-languages",
      title: "Languages",
      subTitle: "Programming languages that I'm more or less familiar with",
      icon: <TerminalIcon />,
      component: <ProgrammingLanguagesGrid languages={LANGUAGES} />,
      href: "#programming-languages",
    },
    {
      id: "technologies",
      title: "Technologies",
      subTitle:
        "Applications and technologies that I've used throughout my career",
      icon: <DisplaySettingsIcon />,
      component: <TechnologiesGrid technologies={TECHNOLOGIES} />,
      href: "#technologies",
    },
    {
      id: "skills",
      title: "Skills",
      subTitle: "Proficiencies that I've developed over the years",
      icon: <AutoAwesomeIcon />,
      component: <SkillsList skills={SKILLS} />,
      href: "#skills",
    },
    {
      id: "hobbies",
      title: "Hobbies",
      subTitle: "The things that I like to do, that make me who I am",
      icon: <DirectionsBikeIcon />,
      component: <HobbiesGridView hobbies={INTERESTS} />,
      href: "#hobbies",
    },
  ];

  return (
    <main className={styles.main}>
      <VisibilityContextProvider value={visibilityContextState}>
        <PageContent 
          visibilityContextState={visibilityContextState}
          pageSections={pageSections}
        />
      </VisibilityContextProvider>
    </main>
  );
}