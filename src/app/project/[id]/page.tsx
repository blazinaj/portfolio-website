"use client";

import { useParams } from "next/navigation";
import { useDataProvider } from "@/hooks/useDataProvider";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMemo } from "react";
import { ProjectFeatures } from "@/views/ProjectDetails";
import { IconComponent } from "@/components/IconComponent";

export default function ProjectPage() {
  const { id } = useParams();
  const { PROJECTS } = useDataProvider();

  const project = useMemo(() => {
    return PROJECTS.find((p) => p.id === id);
  }, [PROJECTS, id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Box sx={{ p: 4, maxWidth: "1200px", margin: "0 auto" }}>
      <Button
        component={Link}
        href="/#projects"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
      >
        Back to Projects
      </Button>

      <Stack spacing={4}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {project.logo ? (
            <img
              src={`/${project.logo}`}
              alt={project.name}
              style={{ width: 64, height: 64, objectFit: "contain" }}
            />
          ) : (
            <Box sx={{ fontSize: 48 }}>
              <IconComponent icon={project.icon} />
            </Box>
          )}
          <Typography variant="h2">{project.name}</Typography>
        </Box>

        <Typography variant="body1">{project.description}</Typography>

        {project.technologies && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Technologies Used
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {project.technologies.map((tech) => (
                <Chip 
                  key={tech.id} 
                  label={tech.name} 
                  variant="outlined"
                  sx={{
                    color: "white",
                    fontSize: "1rem",
                    padding: "16px 8px",
                    "& .MuiChip-label": {
                      fontSize: "1rem"
                    }
                  }}
                />
              ))}
            </Stack>
          </Box>
        )}

        {project.features && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Features
            </Typography>
            <ProjectFeatures features={project.features} />
          </Box>
        )}

        {project.link && (
          <Button
            variant="contained"
            component={Link}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </Button>
        )}
      </Stack>
    </Box>
  );
}