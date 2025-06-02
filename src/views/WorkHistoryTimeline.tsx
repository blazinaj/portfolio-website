import React from "react";
import { TimelineView } from "../components/TimelineView";
import { useNavigate } from "react-router-dom";
import { TimelineEvent_T } from "../types/TimelineEvent";

interface WorkHistoryTimelineProps {
  experience: TimelineEvent_T[];
}

export const WorkHistoryTimeline = ({
  experience,
}: WorkHistoryTimelineProps) => {
  const navigate = useNavigate();
  
  return (
    <TimelineView
      events={experience.map((exp) => ({
        ...exp,
        onClick: () => navigate(`/work/${exp.id}`),
      }))}
    />
  );
};