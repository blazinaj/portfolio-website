import React from "react";
import { GridView } from "../components/GridView";
import SchoolIcon from "@mui/icons-material/School";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

/**
 * Vertical list of projects.
 *
 * Each element has:
 * - icon
 * - name
 * - chips for the technologies used in the project.
 *
 * @param projects
 * @constructor
 */
export const ProjectsGridView = ({ projects = MOCK_PROJECTS }) => {
  return (
    <GridView
      items={projects.map((project) => ({
        id: project.id,
        title: project.name,
        subTitle: project.description,
        icon: project.icon,
        link: project.link,
        gridProps: {
          lg: 12,
          sm: 12,
        },
      }))}
    />
  );
};

const MOCK_PROJECTS = [
  {
    id: 0,
    name: "Porfolio Website",
    description: "This website! A Next.js app hosted on AWS Amplify.",
    technologies: [
      {
        id: 0,
        name: "React",
      },
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "Next.js",
      },
      {
        id: 3,
        name: "AWS Amplify",
      },
      {
        id: 4,
        name: "AWS DynamoDB",
      },
      {
        id: 5,
        name: "AWS CloudFront",
      },
      {
        id: 6,
        name: "AWS WAF",
      },
    ],
    link: "https://github.com/blazinaj/portfolio-website",
  },
  {
    id: 1,
    name: "Edify",
    description:
      "A web app that uses generative AI to create Lesson Content, Quizzes, and Tutors for students and teachers.",
    icon: <SchoolIcon />,
    technologies: [
      {
        id: 0,
        name: "React",
      },
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "Node.js",
      },
      {
        id: 3,
        name: "OpenAI GPT3.5, GPT4, and DALL-E",
      },
      {
        id: 4,
        name: "AWS Amplify",
      },
      {
        id: 5,
        name: "AWS DynamoDB",
      },
      {
        id: 6,
        name: "AWS CloudFront",
      },
      {
        id: 7,
        name: "AWS WAF",
      },
      {
        id: 8,
        name: "AWS Lambda",
      },
      {
        id: 9,
        name: "AWS S3",
      },
      {
        id: 10,
        name: "AWS Cognito",
      },
      {
        id: 11,
        name: "AWS AppSync",
      },
      {
        id: 12,
        name: "",
      },
    ],
    link: "https://edify.mobi",
  },
  {
    id: 2,
    name: "Thoughtify",
    description:
      "An AI-powered web application for journaling and self-reflection. Extracts insights, emotions, and topics from journal entries. Generate journals, health reports, and biographies.",
    icon: <HistoryEduIcon />,
    link: "https://thoughts.mobi",
  },
  {
    id: 3,
    name: "Smart Mirror",
    description:
      "Computer Science undergrad senior project. A smart mirror that displays the time, weather, and news headlines. Face recognition login, voice commands, and gesture controls.",
    icon: <SmartphoneIcon />,
  },
];
