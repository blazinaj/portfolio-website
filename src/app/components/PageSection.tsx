"use client";

import * as React from "react";
import {ReactElement, useEffect, useRef} from "react";
import { useOnScreen } from "@/app/hooks/useOnScreen";
import { Box } from "@mui/system";
import { useVisibilityContext } from "@/app/context/VisibilityContext";

interface PageSectionProps {
  icon?: ReactElement;
  title: string;
  subTitle?: string;
  children: ReactElement;
  id: string | number;
}

/**
 * Displays a section of the page. By default, sections are designed to take up at least 100vh of space.
 * @constructor
 */
export const PageSection = ({
  icon,
  title,
  subTitle,
  children,
  id,
}: PageSectionProps) => {
  // get visibility context
  const { visibilityCallback } = useVisibilityContext();

  // create a ref to bind to the section header for the useOnScreen hook
  const ref = useRef<HTMLDivElement>(null);

  // use the useOnScreen hook to determine if the section header is visible to the user
  const isVisible = useOnScreen(ref);

  // call the visibility callback when the section header becomes visible
  useEffect(() => {
    if (isVisible) {
      visibilityCallback(id, isVisible);
    }
  }, [isVisible]);

  return (
    <div
      style={{ paddingTop: "5vh" }}
      className={"page-section-container"}
    >
      <div
        className="page-section"
        style={{ minHeight: "90vh", textAlign: "center" }}
      >
        <h2
          className={"page-section-header"}
          style={{
            marginBottom: "8px",
          }}
          ref={ref}
        >
          {icon && (
            <span
              className={"page-section-icon-wrapper"}
              style={{
                marginRight: "0.5em",
              }}
            >
              {icon}
            </span>
          )}
          {title}
        </h2>
        {subTitle && <p className={"page-section-subtitle"}>{subTitle}</p>}
        <Box
          className={"page-section-content-wrapper"}
          sx={{ marginTop: "2em" }}
        >
          {children}
        </Box>
      </div>
    </div>
  );
};
