import React from "react";
import { TimelineView } from "@/components/TimelineView";
import { Education } from "@/types/Education";
import { useRouter } from "next/navigation";

interface EducationTimelineProps {
  education: Education[];
}

export const EducationTimeline = ({ education }: EducationTimelineProps) => {
  const router = useRouter();

  return (
    <TimelineView
      events={education.map((edu: Education) => ({
        id: edu.id,
        title: edu.title,
        subTitle: edu.subTitle,
        date: edu.date,
        onClick: () => router.push(`/education/${edu.id}`),
      }))}
    />
  );
};