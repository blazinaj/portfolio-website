import React, { useMemo } from "react";
import { GridView } from "../components/GridView";
import { Project } from "../types/Project";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, CardActionArea, Typography, Box, Chip, Stack, Badge, Divider, useTheme, Container } from "@mui/material";
import { IconComponent } from "../components/IconComponent";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";

interface ProjectsGridViewProps {
  projects: Project[];
}

export const ProjectsGridView = ({ projects }: ProjectsGridViewProps) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const { featuredProjects, otherProjects } = useMemo(() => {
    const featured = projects.filter(p => p.featured);
    const others = projects.filter(p => !p.featured);
    return { featuredProjects: featured, otherProjects: others };
  }, [projects]);

  const renderProjectCard = (project: Project, isFeatured: boolean = false) => (
    <Grid item xs={12} md={isFeatured ? 6 : 4} key={project.id}>
      <Card
        onClick={() => navigate(`/project/${project.id}`)}
        sx={{
          cursor: 'pointer',
          height: '100%',
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.primary.main}20`,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          position: 'relative',
          overflow: 'visible',
          "&:hover": {
            transform: "translateY(-12px)",
            boxShadow: `0 20px 40px ${theme.palette.primary.main}30`,
            borderColor: theme.palette.primary.main,
            '& .project-icon': {
              transform: 'scale(1.1) rotate(5deg)',
            },
            '& .project-tech-chip': {
              transform: 'translateY(-2px)',
            },
          }
        }}
      >
        {project.featured && (
          <Box
            sx={{
              position: 'absolute',
              top: -12,
              right: 20,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              color: 'white',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 700,
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              boxShadow: `0 4px 12px ${theme.palette.primary.main}50`,
            }}
          >
            <StarIcon sx={{ fontSize: 14 }} />
            Featured
          </Box>
        )}
        <CardActionArea sx={{ height: '100%' }}>
          <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              {project.logo ? (
                <Box
                  className="project-icon"
                  sx={{
                    transition: 'all 0.3s ease',
                  }}
                >
                  <img
                    src={`/${project.logo}`}
                    alt={project.name}
                    style={{ width: isFeatured ? 48 : 40, height: isFeatured ? 48 : 40, objectFit: "contain" }}
                  />
                </Box>
              ) : (
                <Box
                  className="project-icon"
                  sx={{
                    fontSize: isFeatured ? 48 : 40,
                    color: theme.palette.primary.main,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <IconComponent icon={project.icon} />
                </Box>
              )}
              <Typography
                variant={isFeatured ? "h4" : "h5"}
                component="div"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  flex: 1,
                }}
              >
                {project.name}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                lineHeight: 1.7,
                flex: 1,
                fontSize: isFeatured ? '0.95rem' : '0.875rem',
              }}
            >
              {project.description}
            </Typography>

            <Box sx={{ mt: 'auto' }}>
              {project.technologies && project.technologies.length > 0 && (
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                  {project.technologies.slice(0, isFeatured ? 5 : 3).map((tech) => (
                    <Chip
                      key={tech.id}
                      label={tech.name}
                      size="small"
                      className="project-tech-chip"
                      sx={{
                        backgroundColor: `${theme.palette.primary.main}15`,
                        color: theme.palette.primary.main,
                        border: `1px solid ${theme.palette.primary.main}30`,
                        fontSize: "0.75rem",
                        height: "28px",
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        "& .MuiChip-label": {
                          padding: "0 10px"
                        },
                      }}
                    />
                  ))}
                  {project.technologies.length > (isFeatured ? 5 : 3) && (
                    <Chip
                      label={`+${project.technologies.length - (isFeatured ? 5 : 3)}`}
                      size="small"
                      sx={{
                        backgroundColor: `${theme.palette.primary.main}10`,
                        color: theme.palette.text.secondary,
                        fontSize: "0.75rem",
                        height: "28px",
                        "& .MuiChip-label": {
                          padding: "0 10px"
                        }
                      }}
                    />
                  )}
                </Stack>
              )}

              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }} onClick={(e) => e.stopPropagation()}>
                {(project.githubLink || project.link) && (
                  <IconButton
                    component="a"
                    href={project.githubLink || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      color: theme.palette.text.secondary,
                      border: `1px solid ${theme.palette.text.secondary}30`,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        borderColor: theme.palette.primary.main,
                        backgroundColor: `${theme.palette.primary.main}10`,
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                )}

                {project.webLink && (
                  <IconButton
                    component="a"
                    href={project.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      color: theme.palette.text.secondary,
                      border: `1px solid ${theme.palette.text.secondary}30`,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: theme.palette.secondary.main,
                        borderColor: theme.palette.secondary.main,
                        backgroundColor: `${theme.palette.secondary.main}10`,
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    <LaunchIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {featuredProjects.length > 0 && (
          <Box sx={{ mb: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Featured Projects
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: '1.1rem',
                }}
              >
                Highlighted work showcasing my best projects
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {featuredProjects.map(project => renderProjectCard(project, true))}
            </Grid>
          </Box>
        )}

        {otherProjects.length > 0 && (
          <Box>
            {featuredProjects.length > 0 && (
              <Box sx={{ my: 8 }}>
                <Divider sx={{ borderColor: `${theme.palette.primary.main}20` }} />
              </Box>
            )}

            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                More Projects
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: '1.1rem',
                }}
              >
                Additional projects demonstrating my skills and experience
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {otherProjects.map(project => renderProjectCard(project, false))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};