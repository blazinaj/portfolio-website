import { useParams, useNavigate } from "react-router-dom";
import { useDataProvider } from "../hooks/useDataProvider";
import { Box, Button, Chip, Stack, Typography, Card, CardContent, Grid, Container, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import { useMemo } from "react";
import { ProjectFeatures } from "../views/ProjectDetails";
import { IconComponent } from "../components/IconComponent";
import ErrorBoundary from "../components/ErrorBoundary";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
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
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        py: { xs: 4, md: 6 },
      }}>
        <Container maxWidth="lg">
        <Button
          onClick={() => navigate('/#projects')}
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          sx={{
            mb: 4,
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            "&:hover": {
              borderColor: theme.palette.primary.light,
              backgroundColor: `${theme.palette.primary.main}10`,
            }
          }}
        >
          Back to Projects
        </Button>

        <Stack spacing={5}>
          <Box sx={{ position: "relative" }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems="center">
              {project.logo ? (
                <img
                  src={`/${project.logo}`}
                  alt={project.name}
                  style={{ width: 80, height: 80, objectFit: "contain" }}
                />
              ) : (
                <Box sx={{ fontSize: 80, color: theme.palette.primary.main }}>
                  <IconComponent icon={project.icon} />
                </Box>
              )}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {project.name}
                </Typography>
                {project.featured && (
                  <Chip
                    icon={<StarIcon />}
                    label="Featured Project"
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />
                )}
              </Box>
            </Stack>
          </Box>

          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "1.125rem",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            {project.description}
          </Typography>

          {project.technologies && (
            <Box>
              <Typography variant="h5" sx={{ mb: 3, color: theme.palette.text.primary, fontWeight: 600 }}>
                Technologies Used
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1.5}>
                {project.technologies.map((tech) => (
                  <Chip
                    key={tech.id}
                    label={tech.name}
                    sx={{
                      backgroundColor: `${theme.palette.primary.main}15`,
                      color: theme.palette.primary.main,
                      border: `1px solid ${theme.palette.primary.main}40`,
                      fontSize: "0.95rem",
                      padding: "20px 12px",
                      fontWeight: 500,
                      "& .MuiChip-label": {
                        fontSize: "0.95rem",
                        padding: "0 12px"
                      },
                      "&:hover": {
                        backgroundColor: `${theme.palette.primary.main}25`,
                        borderColor: `${theme.palette.primary.main}60`,
                      }
                    }}
                  />
                ))}
              </Stack>
            </Box>
          )}

          {project.features && (
            <Box>
              <Typography variant="h5" sx={{ mb: 3, color: theme.palette.text.primary, fontWeight: 600 }}>
                Key Features
              </Typography>
              <Grid container spacing={3}>
                {project.features.map((feature) => (
                  <Grid item xs={12} md={4} key={feature.id}>
                    <Card sx={{
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.primary.main}20`,
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 8px 32px ${theme.palette.primary.main}20`,
                        transform: "translateY(-8px)"
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                          {feature.icon && (
                            <Box
                              sx={{
                                fontSize: 40,
                                color: theme.palette.primary.main,
                                width: 56,
                                height: 56,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '12px',
                                backgroundColor: `${theme.palette.primary.main}15`,
                              }}
                            >
                              <IconComponent icon={feature.icon} />
                            </Box>
                          )}
                        </Box>
                        <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 600, mb: 1 }}>
                          {feature.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            {project.githubLink || project.link ? (
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
                component="a"
                href={project.githubLink || project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: theme.palette.text.secondary,
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: `${theme.palette.primary.main}10`,
                    color: theme.palette.primary.main,
                  }
                }}
              >
                View on GitHub
              </Button>
            ) : null}

            {project.webLink && (
              <Button
                variant="contained"
                size="large"
                startIcon={<LaunchIcon />}
                component="a"
                href={project.webLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 24px ${theme.palette.primary.main}40`,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Live Site
              </Button>
            )}
          </Stack>
        </Stack>
        </Container>
      </Box>
    </ErrorBoundary>
  );
}