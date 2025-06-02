import { useParams, useNavigate } from "react-router-dom";
import { useDataProvider } from "../hooks/useDataProvider";
import { Box, Button, Chip, Stack, Typography, Card, CardContent, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useMemo } from "react";
import { ProjectFeatures } from "../views/ProjectDetails";
import { IconComponent } from "../components/IconComponent";
import ErrorBoundary from "../components/ErrorBoundary";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { PROJECTS } = useDataProvider();

  const project = useMemo(() => {
    return PROJECTS.find((p) => p.id === id);
  }, [PROJECTS, id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ErrorBoundary>
      <Box sx={{ 
        p: { xs: 2, md: 4 }, 
        maxWidth: "1200px", 
        margin: "0 auto",
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff" 
      }}>
        <Button
          onClick={() => navigate('/#projects')}
          startIcon={<ArrowBackIcon />}
          sx={{ 
            mb: 4,
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }
          }}
        >
          Back to Projects
        </Button>

        <Stack spacing={4}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, position: "relative" }}>
            {project.logo ? (
              <img
                src={`/${project.logo}`}
                alt={project.name}
                style={{ width: 64, height: 64, objectFit: "contain" }}
              />
            ) : (
              <Box sx={{ fontSize: 64, color: "#fff" }}>
                <IconComponent icon={project.icon} />
              </Box>
            )}
            <Typography variant="h2" sx={{ color: "#fff", fontWeight: 600 }}>{project.name}</Typography>
            
            {project.featured && (
              <Box 
                sx={{
                  position: 'absolute',
                  top: '-12px',
                  right: '0',
                  backgroundColor: '#6649ae',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Featured Project
              </Box>
            )}
          </Box>

          <Typography variant="body1" sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "1.1rem", lineHeight: 1.6 }}>
            {project.description}
          </Typography>

          {project.technologies && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2, color: "#fff", fontWeight: 500 }}>
                Technologies Used
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {project.technologies.map((tech) => (
                  <Chip 
                    key={tech.id} 
                    label={tech.name} 
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                      fontSize: "0.9rem",
                      padding: "16px 8px",
                      "& .MuiChip-label": {
                        fontSize: "0.9rem",
                        padding: "0 12px"
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

          {project.features && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2, color: "#fff", fontWeight: 500 }}>
                Features
              </Typography>
              <Grid container spacing={3}>
                {project.features.map((feature) => (
                  <Grid item xs={12} md={4} key={feature.id}>
                    <Card sx={{ 
                      backgroundColor: "#111",
                      color: "#fff",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      height: "100%",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                        transform: "translateY(-3px)"
                      }
                    }}>
                      <CardContent>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                          {feature.icon && (
                            <Box sx={{ fontSize: 32, color: "#fff" }}>
                              <IconComponent icon={feature.icon} />
                            </Box>
                          )}
                          <Typography variant="h6" sx={{ color: "#fff", fontWeight: 500 }}>
                            {feature.name}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          <Stack direction="row" spacing={2}>
            {project.githubLink || project.link ? (
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                component="a"
                href={project.githubLink || project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#24292e",
                  fontWeight: 500,
                  padding: "10px 24px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#2f363d"
                  }
                }}
              >
                View on GitHub
              </Button>
            ) : null}

            {project.webLink && (
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                component="a"
                href={project.webLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#6649ae",
                  fontWeight: 500,
                  padding: "10px 24px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#7a5dc7"
                  }
                }}
              >
                View Live Site
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
    </ErrorBoundary>
  );
}