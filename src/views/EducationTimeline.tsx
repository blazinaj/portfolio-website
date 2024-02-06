import React from "react";
import {TimelineView} from "@/components/TimelineView";
import {Education} from "@/types/Education";

interface EducationTimelineProps {
    education: Education[];
}

export const EducationTimeline = ({education}: EducationTimelineProps) => {
  return <TimelineView
      events={education.map((edu: Education) => ({
        id: edu.id,
        title: edu.title,
        subTitle: edu.subTitle,
        date: edu.date,
      }))}
  />;
};
