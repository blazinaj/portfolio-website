import { IconButton, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { Facebook } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useVisibilityContext } from "../context/VisibilityContext";
import { useDataProvider } from "../hooks/useDataProvider";

/**
 * Displays the following elements:
 * - A title
 * - A subtitle
 * - A profile image (pulled from linkedIn)
 * - A short bio
 * - Social Links
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

  const { CONTACT } = useDataProvider();
  const [imgError, setImgError] = useState(false);

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
            position: "relative",
            width: 180,
            height: 180
          }}
        >
          <img
            src="/Profile.jpg"
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
            onError={() => setImgError(true)}
          />
        </div>

        {/*Bio*/}
        <h1 className="about-hero__title">Jacob Blazina</h1>
        <p ref={ref} className="about-hero__subtitle">
          {CONTACT.bio}
        </p>

        {/*Social Links*/}
        <Stack direction={"row"}>
          <IconButton
            color={"primary"}
            href={CONTACT.facebook}
            target={"_blank"}
            component="a"
          >
            <Facebook />
          </IconButton>

          <IconButton
            color={"primary"}
            href={CONTACT.linkedIn}
            target={"_blank"}
            component="a"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            color={"primary"}
            href={CONTACT.gitHub}
            target={"_blank"}
            component="a"
          >
            <GitHubIcon />
          </IconButton>
        </Stack>
      </Stack>
    </div>
  );
};