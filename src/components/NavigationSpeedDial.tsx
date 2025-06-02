import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import { useVisibilityContext } from "../context/VisibilityContext";
import { PageSection_T } from "../types/PageSection";
import { IconComponent } from "./IconComponent";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

interface NavigationSpeedDialProps {
  pages: PageSection_T[];
}

/**
 * A floating action button that is designed to be used as a simple section-based navigation menu.
 */
export const NavigationSpeedDial = ({ pages }: NavigationSpeedDialProps) => {
  const navigate = useNavigate();
  const { visibleSection } = useVisibilityContext();

  const handleNavigation = (href: string | undefined) => {
    if (!href) return;
    
    // Handle navigation to anchor links
    if (href.startsWith('#')) {
      // Navigate to the root with the hash
      navigate('/');
      
      // Wait for navigation to complete then scroll to element
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Normal navigation
      navigate(href);
    }
  };

  return (
    <Box
      sx={{
        height: 550,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <motion.nav
        animate={visibleSection === "about-hero"}
        variants={variants}
        whileInView={{ opacity: 1 }}
      >
        <SpeedDial
          ariaLabel="Navigation SpeedDial"
          icon={<HomeIcon />}
          open={visibleSection !== "about-hero"}
          direction={"down"}
          hidden={visibleSection === "about-hero"}
          FabProps={{
            onClick: () => {
              handleNavigation("#about-hero");
            },
          }}
        >
          {pages.map((page) => (
            <SpeedDialAction
              key={page.id}
              icon={<IconComponent icon={page.icon} />}
              tooltipTitle={page.title}
              tooltipOpen={false}
              sx={{
                color: page.id === visibleSection ? "black" : undefined,
              }}
              onClick={() => {
                handleNavigation(page.href);
              }}
            />
          ))}
        </SpeedDial>
      </motion.nav>
    </Box>
  );
};