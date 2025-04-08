import { Project } from "@/types/Project";

export const PROJECTS: Project[] = [
  {
    id: "0",
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
    logo: "Profile.jpg",
  },
  {
    id: "1",
    name: "Edify",
    description:
      "A web app that uses generative AI to create Lesson Content, Quizzes, and Tutors for students and teachers.",
    logo: "images/EdifyLogo.png",
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
    features: [
      {
        id: 0,
        name: "AI Tutors",
        description: "Customized chatbots tailored to specific subjects.",
        image: "images/Edify AI Tutor.gif",
      },
      {
        id: 1,
        name: "For Teachers",
        description:
          "Generate Lesson materials, manage lessons, award certificates.",
        image: "images/Edify Create Lesson.gif",
      },
      {
        id: 2,
        name: "For Students",
        description:
          "Explore lessons, create lesson plans, and interact with personalized tutors.",
        image: "images/Edify Take Lesson.gif",
      },
    ],
  },
  {
    id: "2",
    name: "Thoughtify",
    description:
      "An AI-powered web application for journaling and self-reflection. Extracts insights, emotions, and topics from journal entries. Generate journals, health reports, and biographies.",
    icon: "history-icon",
    link: "https://thoughts.mobi",
    logo: "images/ThoughtifyLogo.png",
  },
  {
    id: "3",
    name: "Smart Mirror",
    description:
      "Computer Science undergrad senior project. A smart mirror that displays the time, weather, and news headlines. Face recognition login, voice commands, and gesture controls.",
    icon: "mirror-icon",
  },
];
