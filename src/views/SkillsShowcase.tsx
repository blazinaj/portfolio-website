import { Box, Container, Typography, Grid, Card, CardContent, useTheme, Chip, Stack } from "@mui/material";
import { IconComponent } from "../components/IconComponent";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

interface Skill {
  name: string;
  icon?: string;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

export const SkillsShowcase = () => {
  const theme = useTheme();

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: <DesignServicesIcon />,
      color: theme.palette.primary.main,
      skills: ["React", "TypeScript", "Next.js", "Material-UI", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Backend",
      icon: <CodeIcon />,
      color: theme.palette.secondary.main,
      skills: ["Node.js", "Python", "REST APIs", "GraphQL", "Express", "FastAPI"],
    },
    {
      title: "Database",
      icon: <StorageIcon />,
      color: "#10b981",
      skills: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "SQL", "NoSQL"],
    },
    {
      title: "Cloud & DevOps",
      icon: <CloudIcon />,
      color: "#f59e0b",
      skills: ["AWS", "Docker", "CI/CD", "Git", "GitHub Actions", "Netlify"],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technical Skills
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '1.1rem',
            }}
          >
            Technologies and tools I use to bring ideas to life
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${category.color}30`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 32px ${category.color}20`,
                    borderColor: `${category.color}60`,
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: `${category.color}20`,
                      color: category.color,
                      mb: 2,
                      '& svg': {
                        fontSize: 32,
                      },
                    }}
                  >
                    {category.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Stack spacing={1}>
                    {category.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: `${category.color}15`,
                          color: theme.palette.text.primary,
                          border: `1px solid ${category.color}30`,
                          fontWeight: 500,
                          justifyContent: 'flex-start',
                          '&:hover': {
                            backgroundColor: `${category.color}25`,
                            borderColor: `${category.color}50`,
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
