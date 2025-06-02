import React from "react";
import { TimelineView } from "../components/TimelineView";
import { Education } from "../types/Education";
import { useNavigate } from "react-router-dom";

interface EducationTimelineProps {
  education: Education[];
}

export const EducationTimeline = ({ education }: EducationTimelineProps) => {
  const navigate = useNavigate();

  return (
    <TimelineView
      events={education.map((edu: Education) => ({
        id: edu.id,
        title: edu.title,
        subTitle: edu.subTitle,
        date: edu.date,
        onClick: () => navigate(`/education/${edu.id}`),
      }))}
    />
  );
};