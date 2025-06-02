import { useParams, useNavigate } from "react-router-dom";
import { useDataProvider } from "../hooks/useDataProvider";
import { Box, Button, Stack, Typography, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMemo } from "react";
import { COURSES } from "../data/COURSES";
import { CourseCard } from "../components/CourseCard";
import ErrorBoundary from "../components/ErrorBoundary";

export default function EducationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { EDUCATION } = useDataProvider();

  const education = useMemo(() => {
    return EDUCATION.find((e) => e.id === id);
  }, [EDUCATION, id]);

  if (!education) {
    return <div>Education not found</div>;
  }

  const courses = COURSES[id as keyof typeof COURSES] || [];

  return (
    <ErrorBoundary>
      <Box sx={{ 
        p: 4, 
        maxWidth: "1200px", 
        margin: "0 auto",
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff"
      }}>
        <Button
          onClick={() => navigate('/#education')}
          startIcon={<ArrowBackIcon />}
          sx={{ 
            mb: 4,
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }
          }}
        >
          Back to Education
        </Button>

        <Stack spacing={4}>
          <Box>
            <Typography variant="h2" sx={{ color: "#fff" }}>{education.title}</Typography>
            <Typography variant="h4" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
              {education.subTitle}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
              {education.date}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ mb: 2, color: "#fff" }}>
              Notable Coursework
            </Typography>
            <Grid container spacing={2}>
              {courses.map((course) => (
                <Grid item xs={12} md={6} key={course.id}>
                  <CourseCard course={course} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </ErrorBoundary>
  );
}