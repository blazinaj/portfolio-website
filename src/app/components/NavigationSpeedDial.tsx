"use client";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import { useVisibilityContext } from "@/app/context/VisibilityContext";
import { PageSection_T } from "@/app/types/PageSection";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

interface NavigationSpeedDialProps {
  pages: PageSection_T[];
}

/**
 * A floating action button that is designed to be used as a simple section-based navigation menu.
 *
 * @param {PageSection_T[]} pages - The pages to display for the speed dial
 * @constructor
 */
export const NavigationSpeedDial = ({ pages }: NavigationSpeedDialProps) => {
  const router = useRouter();

  const { visibleSection } = useVisibilityContext();

  return (
    <Box
      sx={{
        height: 550,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        top: 16,
        right: 16,
      }}
    >
      <motion.nav
        animate={visibleSection === "about-hero"}
        variants={variants}
        whileInView={{ opacity: 1 }}
      >
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          icon={<HomeIcon />}
          open={visibleSection !== "about-hero"}
          direction={"down"}
          hidden={visibleSection === "about-hero"}
          FabProps={{
            onClick: () => {
              router.push("/#about-hero");
            },
          }}
        >
          {pages.map((page) => (
            <SpeedDialAction
              key={page.id}
              icon={page.icon}
              tooltipTitle={page.title}
              tooltipOpen={false}
              sx={{
                color: page.id === visibleSection ? "black" : undefined,
              }}
              onClick={() => {
                router.push(`/${page.href}`);
              }}
            />
          ))}
        </SpeedDial>
      </motion.nav>
    </Box>
  );
};
