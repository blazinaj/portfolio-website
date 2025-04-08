"use client";

import { Stack } from "@mui/system";
import React from "react";
import { PageSection } from "./PageSection";
import { PageSection_T } from "@/types/PageSection";
import { NavigationLinkGrid } from "@/components/NavigationLinkGrid";
import { Grid } from "@mui/material";

interface PageStackProps {
  /**
   * The section to display at the top of the page
   */
  homeSection: React.ReactElement;

  /**
   * The sections to display in a vertical stack
   */
  pageSections: PageSection_T[];

  /**
   * Visibility callback to pass to each PageSection to determine when it is visible
   */
  visibilityCallback: Function;
}

/**
 * Displays the stack of PageSections for the page. Stacked and centered vertically.
 */
export const PageStack = ({
  homeSection,
  pageSections,
  visibilityCallback,
}: PageStackProps) => {
  return (
    <Stack direction={"column"} spacing={2} alignItems={"center"}>
      <PageSection id={"about-hero"}>
        <Grid container spacing={4}>
          <Grid item lg={12}>
            {homeSection}
          </Grid>
          <Grid item lg={12}>
            <NavigationLinkGrid links={pageSections} />
          </Grid>
        </Grid>
      </PageSection>
      {pageSections.map((pageSection: PageSection_T) => (
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
