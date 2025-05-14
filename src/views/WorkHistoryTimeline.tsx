"use client";
import React from "react";
import { TimelineView } from "@/components/TimelineView";
import { useRouter } from "next/navigation";

interface WorkHistoryTimelineProps {
  experience: any[];
}

export const WorkHistoryTimeline = ({
  experience,
}: WorkHistoryTimelineProps) => {
  const router = useRouter();
  
  return (
    <TimelineView
      events={experience.map((exp) => ({
        ...exp,
        onClick: () => router.push(`/work/${exp.id}`),
      }))}
    />
  );
};