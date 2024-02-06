"use client";
import React from "react";
import { TimelineView } from "@/components/TimelineView";

interface WorkHistoryTimelineProps {
    experience: any[];
}

export const WorkHistoryTimeline = ({experience}: WorkHistoryTimelineProps) => {
  return <TimelineView events={experience} />;
};
