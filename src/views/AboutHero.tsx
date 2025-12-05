import { IconButton, Stack, Typography, Box, Container, Chip, useTheme, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { Facebook } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useVisibilityContext } from "../context/VisibilityContext";
import { useDataProvider } from "../hooks/useDataProvider";

export const AboutHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const theme = useTheme();
  const { visibilityCallback } = useVisibilityContext();

  useEffect(() => {
    if (isVisible) {
      visibilityCallback("about-hero", isVisible);
    }
  }, [isVisible, visibilityCallback]);

  const { CONTACT } = useDataProvider();
  const [imgError, setImgError] = useState(false);

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 50%, ${theme.palette.primary.main}15 0%, transparent 50%),
                       radial-gradient(circle at 80% 80%, ${theme.palette.secondary.main}15 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Stack spacing={6} sx={{ alignItems: "center", position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '240px',
                height: '240px',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
                borderRadius: '50%',
                filter: 'blur(40px)',
                zIndex: -1,
              },
            }}
          >
            <Box
              sx={{
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                width: { xs: 160, md: 200 },
                height: { xs: 160, md: 200 },
                border: `4px solid ${theme.palette.primary.main}`,
                boxShadow: `0 0 40px ${theme.palette.primary.main}40`,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <img
                src="/Profile.jpg"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={() => setImgError(true)}
              />
            </Box>
          </Box>

          <Stack spacing={3} sx={{ alignItems: "center", maxWidth: '800px', textAlign: 'center' }}>
            <Box>
              <Chip
                icon={<CodeIcon />}
                label="Software Developer"
                sx={{
                  mb: 2,
                  backgroundColor: `${theme.palette.primary.main}20`,
                  color: theme.palette.primary.main,
                  border: `1px solid ${theme.palette.primary.main}40`,
                  fontWeight: 500,
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Jacob Blazina
              </Typography>
            </Box>

            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.6,
                maxWidth: '700px',
              }}
            >
              {CONTACT.bio}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 2,
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                startIcon={<RocketLaunchIcon />}
                href="#projects"
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 24px ${theme.palette.primary.main}40`,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                href={`mailto:${CONTACT.email}`}
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: theme.palette.primary.light,
                    backgroundColor: `${theme.palette.primary.main}10`,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get In Touch
              </Button>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              '& .MuiIconButton-root': {
                color: theme.palette.text.secondary,
                border: `1px solid ${theme.palette.text.secondary}30`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  backgroundColor: `${theme.palette.primary.main}10`,
                  transform: 'translateY(-3px)',
                },
              },
            }}
          >
            <IconButton
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
            >
              <Facebook />
            </IconButton>

            <IconButton
              href={CONTACT.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              href={CONTACT.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};