import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "December 2023 - Current",
    cardTitle: "Rivial Data Security (Current)",
    cardSubtitle: "AI Engineer",
  },
  {
    title: "September 2019 - December 2023",
    cardTitle: "Rivial Data Security",
    cardSubtitle: "Software Development Manager / Product Manager",
  },
  {
    title: "March 2018 - September 2019",
    cardTitle: "Rivial Data Security",
    cardSubtitle: "Cybersecurity Analyst",
  },
  {
    title: "September 2015 - March 2018",
    cardTitle: "Eastern Washington University JFK Library",
    cardSubtitle: "Equipment Desk Technician",
  },
];

export const WorkHistoryTimeline = () => {
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
