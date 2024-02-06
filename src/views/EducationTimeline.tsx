import React from "react";
import {TimelineView} from "@/components/TimelineView";

const items = [
  {
    id: "1",
    date: "December 2023 - Current ",
    subTitle: "Colorado State University Global",
    title: "Master of Science - Artificial Intelligence and Machine Learning",
  },
  {
    id: "2",
    date: "September 2017 - March 2021",
    subTitle: "Central Washington University",
    title: "Bachelor of Science - Computer Science",
  },
];

export const EducationTimeline = () => {
  return <TimelineView events={items} />;
};
