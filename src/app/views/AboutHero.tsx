"use client";

import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import { useOnScreen } from "@/app/hooks/useOnScreen";
import { Facebook } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { useVisibilityContext } from "@/app/context/VisibilityContext";

/**
 * Displays the following elements:
 * - A title
 * - A subtitle
 * - A profile image (pulled from linkedIn)
 * - A short bio
 * - Social Links
 *
 * @constructor
 */
export const AboutHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const { visibilityCallback } = useVisibilityContext();

  useEffect(() => {
    if (isVisible) {
      visibilityCallback("about-hero", isVisible);
    }
  }, [isVisible, visibilityCallback]);

  return (
    <div
      style={{
        alignItems: "center",
      }}
    >
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        {/*Profile Image*/}
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            // className={styles.logo}
            src="/Profile.jpg"
            alt="Next.js Logo"
            width={180}
            height={180}
            priority
          />
        </div>

        {/*Bio*/}
        <h1 className="about-hero__title">Jacob Blazina</h1>
        <p ref={ref} className="about-hero__subtitle">
          I`&apos;m a software engineer with a passion for building things.
        </p>

        {/*Social Links*/}
        <Stack direction={"row"}>
          <IconButton
            color={"primary"}
            component={Link}
            href={"https://www.facebook.com/jacob.blazina/"}
            target={"_blank"}
          >
            <Facebook />
          </IconButton>

          <IconButton
            color={"primary"}
            component={Link}
            href={"www.linkedin.com/in/jacob-blazina"}
            target={"_blank"}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            color={"primary"}
            component={Link}
            href={"https://github.com/blazinaj"}
            target={"_blank"}
          >
            <GitHubIcon />
          </IconButton>
        </Stack>
      </Stack>
    </div>
  );
};
