import { useParams, useNavigate } from "react-router-dom";
import { useDataProvider } from "../hooks/useDataProvider";
import { Box, Button, Stack, Typography, Chip, Grid, Card, CardContent } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMemo } from "react";
import { WORK_EXPERIENCES } from "../data/WORK_EXPERIENCES";
import ErrorBoundary from "../components/ErrorBoundary";

export default function WorkPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { EXPERIENCE } = useDataProvider();

  const work = useMemo(() => {
    return EXPERIENCE.find((e) => e.id === id);
  }, [EXPERIENCE, id]);

  if (!work) {
    return <div>Work experience not found</div>;
  }

  const experiences = WORK_EXPERIENCES[work.id as keyof typeof WORK_EXPERIENCES] || [];

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
          onClick={() => navigate('/#work-history')}
          startIcon={<ArrowBackIcon />}
          sx={{ 
            mb: 4,
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }
          }}
        >
          Back to Work History
        </Button>

        <Stack spacing={4}>
          <Box>
            <Typography variant="h2" sx={{ color: "#fff" }}>{work.title}</Typography>
            <Typography variant="h4" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
              {work.subTitle}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
              {work.date}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ mb: 3, color: "#fff" }}>
              Key Responsibilities & Achievements
            </Typography>
            <Grid container spacing={3}>
              {experiences.map((exp) => (
                <Grid item xs={12} md={6} key={exp.id}>
                  <Card sx={{ 
                    backgroundColor: "#111",
                    color: "#fff",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    "&:hover": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
                    }
                  }}>
                    <CardContent>
                      <Stack spacing={2}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          {exp.description}
                        </Typography>

                        {exp.technologies && exp.technologies.length > 0 && (
                          <Box>
                            <Typography 
                              variant="subtitle2" 
                              gutterBottom
                              sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                            >
                              Technologies:
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                              {exp.technologies.map((tech) => (
                                <Chip 
                                  key={tech} 
                                  label={tech} 
                                  size="small" 
                                  variant="outlined"
                                  sx={{
                                    color: "#fff",
                                    borderColor: "rgba(255, 255, 255, 0.3)",
                                    fontSize: "0.8rem",
                                    "& .MuiChip-label": {
                                      fontSize: "0.8rem"
                                    },
                                    "&:hover": {
                                      borderColor: "rgba(255, 255, 255, 0.5)"
                                    }
                                  }}
                                />
                              ))}
                            </Stack>
                          </Box>
                        )}

                        {exp.skills && exp.skills.length > 0 && (
                          <Box>
                            <Typography 
                              variant="subtitle2" 
                              gutterBottom
                              sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                            >
                              Skills:
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                              {exp.skills.map((skill) => (
                                <Chip 
                                  key={skill} 
                                  label={skill} 
                                  size="small"
                                  sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    color: "#fff",
                                    fontSize: "0.8rem",
                                    "& .MuiChip-label": {
                                      fontSize: "0.8rem"
                                    },
                                    "&:hover": {
                                      backgroundColor: "rgba(255, 255, 255, 0.2)"
                                    }
                                  }}
                                />
                              ))}
                            </Stack>
                          </Box>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </ErrorBoundary>
  );
}