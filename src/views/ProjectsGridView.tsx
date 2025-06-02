import React, { useMemo } from "react";
import { GridView } from "../components/GridView";
import { Project } from "../types/Project";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, CardActionArea, Typography, Box, Chip, Stack, Badge, Divider } from "@mui/material";
import { IconComponent } from "../components/IconComponent";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import IconButton from "@mui/material/IconButton";

interface ProjectsGridViewProps {
  projects: Project[];
}

export const ProjectsGridView = ({ projects }: ProjectsGridViewProps) => {
  const navigate = useNavigate();

  const { featuredProjects, otherProjects } = useMemo(() => {
    const featured = projects.filter(p => p.featured);
    const others = projects.filter(p => !p.featured);
    return { featuredProjects: featured, otherProjects: others };
  }, [projects]);

  const renderProjectCard = (project: Project) => (
    <Grid item xs={12} md={6} key={project.id}>
      <Card 
        className="project-card" 
        onClick={() => navigate(`/project/${project.id}`)}
        sx={{ 
          cursor: 'pointer',
          backgroundColor: "#111",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s ease",
          position: 'relative',
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
            borderColor: "rgba(255, 255, 255, 0.2)"
          }
        }}
      >
        {project.featured && (
          <Box 
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: '#6649ae',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              zIndex: 1,
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Featured
          </Box>
        )}
        <CardActionArea>
          <CardContent className="project-card-content">
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              {project.logo ? (
                <img
                  src={`/${project.logo}`}
                  alt={project.name}
                  style={{ width: 40, height: 40, objectFit: "contain" }}
                />
              ) : (
                <Box sx={{ fontSize: 40, color: "#fff" }}>
                  <IconComponent icon={project.icon} />
                </Box>
              )}
              <Typography 
                variant="h5" 
                component="div" 
                sx={{ 
                  color: "#fff",
                  fontWeight: 600
                }}
              >
                {project.name}
              </Typography>
            </Box>
            
            <Typography 
              variant="body2" 
              sx={{ 
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: 2,
                lineHeight: 1.5
              }}
            >
              {project.description}
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 1 }}>
              {project.technologies && project.technologies.length > 0 && (
                <Stack direction="row\" spacing={1} flexWrap="wrap" gap={1} className="project-card-tech" sx={{ flex: 1 }}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Chip 
                      key={tech.id} 
                      label={tech.name} 
                      size="small"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "#fff",
                        fontSize: "0.7rem",
                        height: "24px",
                        "& .MuiChip-label": {
                          padding: "0 8px"
                        },
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.2)"
                        }
                      }}
                    />
                  ))}
                  {project.technologies.length > 3 && (
                    <Chip 
                      label={`+${project.technologies.length - 3}`} 
                      size="small"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "0.7rem",
                        height: "24px",
                        "& .MuiChip-label": {
                          padding: "0 8px"
                        }
                      }}
                    />
                  )}
                </Stack>
              )}
              
              <Box sx={{ display: 'flex', gap: 1 }} onClick={(e) => e.stopPropagation()}>
                {(project.githubLink || project.link) && (
                  <IconButton 
                    component="a"
                    href={project.githubLink || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      '&:hover': { 
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)' 
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
                      color: 'rgba(255, 255, 255, 0.7)',
                      '&:hover': { 
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)' 
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
    <Box>
      {featuredProjects.length > 0 && (
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 3, 
              color: "#fff",
              position: "relative",
              display: "inline-block",
              "&:after": {
                content: '""',
                position: "absolute",
                width: "60%",
                height: "3px",
                bottom: "-8px",
                left: "0",
                backgroundColor: "#6649ae",
                borderRadius: "2px"
              }
            }}
          >
            Featured Projects
          </Typography>
          <Grid container spacing={3}>
            {featuredProjects.map(renderProjectCard)}
          </Grid>
        </Box>
      )}

      {otherProjects.length > 0 && (
        <Box>
          {featuredProjects.length > 0 && (
            <Box sx={{ my: 4 }}>
              <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            </Box>
          )}
          
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 3, 
              color: "#fff",
              position: "relative",
              display: "inline-block",
              "&:after": {
                content: '""',
                position: "absolute",
                width: "60%",
                height: "3px",
                bottom: "-8px",
                left: "0",
                backgroundColor: "#6649ae",
                borderRadius: "2px"
              }
            }}
          >
            Other Projects
          </Typography>
          <Grid container spacing={3}>
            {otherProjects.map(renderProjectCard)}
          </Grid>
        </Box>
      )}
    </Box>
  );
};