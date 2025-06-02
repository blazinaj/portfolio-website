import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import DisciplinePage from './pages/DisciplinePage';
import WorkPage from './pages/WorkPage';
import EducationPage from './pages/EducationPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const defaultTheme = createTheme();
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/discipline/:id" element={<DisciplinePage />} />
            <Route path="/work/:id" element={<WorkPage />} />
            <Route path="/education/:id" element={<EducationPage />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;