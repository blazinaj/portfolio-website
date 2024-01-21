"use client";

import { Stack } from "@mui/system";
import React from "react";
import { PageSection } from "./PageSection";
import { PageSection_T } from "../types/PageSection";

interface PageStackProps {
  pagesSections: PageSection_T[];
  visibilityCallback: Function;
};

/**
 * Displays the stack of PageSections for the page. Stacked and centered vertically.
 *
 * @param {PageSection_T} pagesSections - The sections to display in a vertical stack
 * @param {Function} visibilityCallback - Visibility callback to pass to each PageSection to determine when it is visible
 * @constructor
 */
export const PageStack = ({
  pagesSections,
  visibilityCallback,
}: PageStackProps) => {
  return (
    <Stack direction={"column"} spacing={2} alignItems={"center"}>
      {pagesSections.map((pageSection: PageSection_T) => (
        <PageSection
          key={pageSection.id}
          id={pageSection.id}
          title={pageSection.title}
          subTitle={pageSection.subTitle}
          icon={pageSection.icon}
        >
          {React.cloneElement(pageSection.component, {
            visibilityCallback,
          })}
        </PageSection>
      ))}
    </Stack>
  );
};
