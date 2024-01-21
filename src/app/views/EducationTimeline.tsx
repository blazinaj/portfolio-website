import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "December 2023 - Current ",
    cardSubtitle: "Colorado State University Global",
    cardTitle:
      "Master of Science - Artificial Intelligence and Machine Learning",
  },
  {
    title: "September 2017 - March 2021",
    cardSubtitle: "Central Washington University",
    cardTitle: "Bachelor of Science - Computer Science",
  },
];

export const EducationTimeline = () => {
  return (
    <Chrono
      items={items}
      mode="VERTICAL"
      hideControls
      cardHeight="150px"
      allowDynamicUpdate
      borderLessCards
      disableAutoScrollOnClick
      disableInteraction
      theme={{
        primary: "#ffffff",
        secondary: "#ffffff",
        cardBgColor: "#000000",
        cardForeColor: "#ffffff",
        cardDetailsColor: "#ffffff",
        cardSubtitleColor: "#ffffff",
      }}
    />
  );
};
