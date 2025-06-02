import { useState, useEffect, ReactElement } from 'react';
import { Box, CircularProgress } from '@mui/material';
import styles from '../styles/Home.module.css';
import { AboutHero } from '../views/AboutHero';
import { SkillsList } from '../views/SkillsList';
import { ProjectsGridView } from '../views/ProjectsGridView';
import { TechnologiesGrid } from '../views/TechnologiesGrid';
import { WorkHistoryTimeline } from '../views/WorkHistoryTimeline';
import { PageStack } from '../components/PageStack';
import { DisciplinesGridView } from '../views/DisciplinesGridView';
import { HobbiesGridView } from '../views/HobbiesGridView';
import { NavigationSpeedDial } from '../components/NavigationSpeedDial';
import { EducationTimeline } from '../views/EducationTimeline';
import { ProgrammingLanguagesGrid } from '../views/ProgrammingLanguagesGrid';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TableViewIcon from '@mui/icons-material/TableView';
import TerminalIcon from '@mui/icons-material/Terminal';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { Suspense } from 'react';
import {
  useVisibilityContextState,
  VisibilityContextProvider,
} from '../context/VisibilityContext';
import { useDataProvider } from '../hooks/useDataProvider';
import { PageSection_T } from '../types/PageSection';
import ErrorBoundary from '../components/ErrorBoundary';

// Separate loading component for better error boundary handling
function LoadingFallback() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </Box>
  );
}

// Error fallback component
function ErrorFallback() {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      padding: 3,
      backgroundColor: '#000',
      color: '#fff'
    }}>
      <h4>Something went wrong</h4>
      <p>
        We&apos;re having trouble loading the portfolio. Please try refreshing the page.
      </p>
    </Box>
  );
}

interface PageContentProps {
  visibilityContextState: {
    visibilityCallback: (id: string | number, isVisible: boolean) => void;
  };
  pageSections: PageSection_T[];
}

function PageContent({ visibilityContextState, pageSections }: PageContentProps) {
  // Ensure data is only rendered on client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingFallback />;
  }

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<LoadingFallback />}>
        <PageStack
          homeSection={<AboutHero />}
          pageSections={pageSections}
          visibilityCallback={visibilityContextState.visibilityCallback}
        />
        <NavigationSpeedDial pages={pageSections} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default function HomePage() {
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
      icon: <WorkHistoryIcon /> as ReactElement,
      component: <WorkHistoryTimeline experience={EXPERIENCE} />,
      href: "#work-history",
    },
    {
      id: "disciplines",
      title: "Disciplines",
      subTitle: "My experience in various software development roles",
      icon: <EngineeringIcon /> as ReactElement,
      component: <DisciplinesGridView disciplines={DISCIPLINES} />,
      href: "#disciplines",
    },
    {
      id: "education",
      title: "Education",
      subTitle: "My formal university education",
      icon: <SchoolIcon /> as ReactElement,
      component: <EducationTimeline education={EDUCATION} />,
      href: "#education",
    },
    {
      id: "projects",
      title: "Projects",
      subTitle: "Personal projects that I've worked on in my free time",
      icon: <TableViewIcon /> as ReactElement,
      component: <ProjectsGridView projects={PROJECTS} />,
      href: "#projects",
    },
    {
      id: "programming-languages",
      title: "Languages",
      subTitle: "Programming languages that I'm more or less familiar with",
      icon: <TerminalIcon /> as ReactElement,
      component: <ProgrammingLanguagesGrid languages={LANGUAGES} />,
      href: "#programming-languages",
    },
    {
      id: "technologies",
      title: "Technologies",
      subTitle:
        "Applications and technologies that I've used throughout my career",
      icon: <DisplaySettingsIcon /> as ReactElement,
      component: <TechnologiesGrid technologies={TECHNOLOGIES} />,
      href: "#technologies",
    },
    {
      id: "skills",
      title: "Skills",
      subTitle: "Proficiencies that I've developed over the years",
      icon: <AutoAwesomeIcon /> as ReactElement,
      component: <SkillsList skills={SKILLS} />,
      href: "#skills",
    },
    {
      id: "hobbies",
      title: "Hobbies",
      subTitle: "The things that I like to do, that make me who I am",
      icon: <DirectionsBikeIcon /> as ReactElement,
      component: <HobbiesGridView hobbies={INTERESTS} />,
      href: "#hobbies",
    },
  ];

  return (
    <main className="main">
      <ErrorBoundary>
        <VisibilityContextProvider value={visibilityContextState}>
          <PageContent 
            visibilityContextState={visibilityContextState}
            pageSections={pageSections}
          />
        </VisibilityContextProvider>
      </ErrorBoundary>
    </main>
  );
}