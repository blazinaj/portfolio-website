import { Project } from "@/types/Project";

export const PROJECTS: Project[] = [
  {
    id: "11",
    name: "Super Quest",
    description: "A browser-based fantasy role-playing game built with React and TypeScript, featuring turn-based combat, inventory management, and an isometric world map.",
    technologies: [
      { id: 0, name: "React" },
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Material UI" },
    ],
    link: "https://github.com/blazinaj/super-quest",
    icon: "material-symbols:sports-esports",
    features: [
      {
        id: 0,
        name: "Turn-based Combat",
        description: "Strategic combat system with various abilities and effects",
        icon: "material-symbols:swords"
      },
      {
        id: 1,
        name: "Inventory System",
        description: "Comprehensive item management with equipment and consumables",
        icon: "material-symbols:inventory-2"
      },
      {
        id: 2,
        name: "World Map",
        description: "Isometric world exploration with interactive elements",
        icon: "material-symbols:map"
      }
    ]
  },
  {
    id: "12",
    name: "Vision Frame",
    description: "A modern e-commerce platform that revolutionizes how people shop for eyewear by combining cutting-edge AR technology with a seamless shopping experience.",
    technologies: [
      { id: 0, name: "React" },
      { id: 1, name: "TypeScript" },
      { id: 2, name: "AR.js" },
    ],
    link: "https://github.com/blazinaj/vision-frame",
    icon: "material-symbols:glasses",
    features: [
      {
        id: 0,
        name: "Virtual Try-On",
        description: "AR-powered eyewear visualization",
        icon: "material-symbols:face"
      },
      {
        id: 1,
        name: "Product Catalog",
        description: "Extensive collection of eyewear with detailed specifications",
        icon: "material-symbols:menu-book"
      },
      {
        id: 2,
        name: "Prescription Management",
        description: "Digital prescription upload and management",
        icon: "material-symbols:description"
      }
    ]
  },
  {
    id: "13",
    name: "Open House",
    description: "A web-based CAD application for designing house floor plans and estimating construction costs. Built with modern web technologies, it provides an intuitive interface for architects.",
    technologies: [
      { id: 0, name: "React" },
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Three.js" },
    ],
    link: "https://github.com/blazinaj/open-house",
    icon: "material-symbols:house",
    features: [
      {
        id: 0,
        name: "Floor Plan Editor",
        description: "Intuitive drag-and-drop floor plan creation",
        icon: "material-symbols:grid-on"
      },
      {
        id: 1,
        name: "3D Visualization",
        description: "Real-time 3D rendering of floor plans",
        icon: "material-symbols:3d-rotation"
      },
      {
        id: 2,
        name: "Cost Estimation",
        description: "Automated construction cost calculation",
        icon: "material-symbols:calculate"
      }
    ]
  },
  {
    id: "0",
    name: "Portfolio Website",
    description: "This website! A Next.js app hosted on AWS Amplify.",
    technologies: [
      { id: 0, name: "React" },
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "AWS Amplify" },
      { id: 4, name: "AWS DynamoDB" },
      { id: 5, name: "AWS CloudFront" },
      { id: 6, name: "AWS WAF" },
    ],
    link: "https://github.com/blazinaj/portfolio-website",
    logo: "Profile.jpg",
    features: [
      {
        id: 0,
        name: "Dynamic Navigation",
        description: "Smooth scrolling navigation with visual feedback and section tracking",
        icon: "material-symbols:navigation"
      },
      {
        id: 1,
        name: "Responsive Design",
        description: "Fully responsive layout that works on all device sizes",
        icon: "material-symbols:devices"
      },
      {
        id: 2,
        name: "AWS Integration",
        description: "Seamless deployment and hosting using AWS Amplify and CloudFront",
        icon: "material-symbols:cloud"
      }
    ]
  },
  {
    id: "1",
    name: "Edify",
    description: "A web app that uses generative AI to create Lesson Content, Quizzes, and Tutors for students and teachers.",
    logo: "images/EdifyLogo.png",
    technologies: [
      { id: 0, name: "React" },
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "OpenAI GPT3.5, GPT4, and DALL-E" },
      { id: 4, name: "AWS Amplify" },
      { id: 5, name: "AWS DynamoDB" },
      { id: 6, name: "AWS CloudFront" },
      { id: 7, name: "AWS WAF" },
      { id: 8, name: "AWS Lambda" },
      { id: 9, name: "AWS S3" },
      { id: 10, name: "AWS Cognito" },
      { id: 11, name: "AWS AppSync" },
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
        description: "Generate Lesson materials, manage lessons, award certificates.",
        image: "images/Edify Create Lesson.gif",
      },
      {
        id: 2,
        name: "For Students",
        description: "Explore lessons, create lesson plans, and interact with personalized tutors.",
        image: "images/Edify Take Lesson.gif",
      },
    ],
  },
  {
    id: "2",
    name: "Persona",
    description: "Create, customize, and manage AI agents with different personalities and skill sets.",
    technologies: [
      { id: 0, name: "React" },
      { id: 1, name: "TypeScript" },
      { id: 2, name: "OpenAI" },
    ],
    link: "https://github.com/blazinaj/persona",
    icon: "material-symbols:person",
    features: [
      {
        id: 0,
        name: "AI Agent Creation",
        description: "Create and customize AI agents with unique personalities",
        icon: "material-symbols:person-add"
      },
      {
        id: 1,
        name: "Skill Management",
        description: "Define and manage agent capabilities and knowledge domains",
        icon: "material-symbols:psychology"
      },
      {
        id: 2,
        name: "Conversation History",
        description: "Track and analyze interactions with AI agents",
        icon: "material-symbols:history"
      }
    ]
  },
  {
    id: "3",
    name: "Project Tracker",
    description: "A modern project and task management application inspired by Jira.",
    technologies: [
      { id: 0, name: "React" },
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Material UI" },
    ],
    link: "https://github.com/blazinaj/project-tracker",
    icon: "material-symbols:track-changes",
    features: [
      {
        id: 0,
        name: "Kanban Board",
        description: "Visual task management with drag-and-drop functionality",
        icon: "material-symbols:view-kanban"
      },
      {
        id: 1,
        name: "Time Tracking",
        description: "Built-in time tracking for tasks and projects",
        icon: "material-symbols:timer"
      },
      {
        id: 2,
        name: "Team Collaboration",
        description: "Real-time updates and team member assignment",
        icon: "material-symbols:group"
      }
    ]
  },
  {
    id: "4",
    name: "EV Application Demo",
    description: "A Svelte frontend application demo for electric vehicle management.",
    technologies: [
      { id: 0, name: "Svelte" },
      { id: 1, name: "TypeScript" },
    ],
    link: "https://github.com/blazinaj/svelte-ev-application-demo",
    icon: "material-symbols:electric-car",
    features: [
      {
        id: 0,
        name: "Charging Management",
        description: "Monitor and control EV charging sessions",
        icon: "material-symbols:ev-station"
      },
      {
        id: 1,
        name: "Range Estimation",
        description: "Calculate and display estimated driving range",
        icon: "material-symbols:speed"
      },
      {
        id: 2,
        name: "Charging History",
        description: "Track charging sessions and energy consumption",
        icon: "material-symbols:history"
      }
    ]
  },
  {
    id: "5",
    name: "RoboConfig",
    description: "A modern web application for managing and assessing robotics systems, components, and their associated risks.",
    technologies: [
      { id: 0, name: "React" },
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Material UI" },
    ],
    link: "https://github.com/blazinaj/roboconfig",
    icon: "material-symbols:smart-toy",
    features: [
      {
        id: 0,
        name: "Component Management",
        description: "Track and manage robotic system components",
        icon: "material-symbols:settings"
      },
      {
        id: 1,
        name: "Risk Assessment",
        description: "Evaluate and monitor potential risks and hazards",
        icon: "material-symbols:warning"
      },
      {
        id: 2,
        name: "Documentation",
        description: "Generate and maintain system documentation",
        icon: "material-symbols:description"
      }
    ]
  },
  {
    id: "6",
    name: "Invest",
    description: "A modern, responsive investment platform with real-time market data, portfolio management, and trading capabilities.",
    technologies: [
      { id: 0, name: "React" },
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Material UI" },
    ],
    link: "https://github.com/blazinaj/invest",
    icon: "material-symbols:monitoring",
    features: [
      {
        id: 0,
        name: "Portfolio Tracking",
        description: "Real-time monitoring of investment portfolios",
        icon: "material-symbols:account-balance"
      },
      {
        id: 1,
        name: "Market Analysis",
        description: "Advanced charting and technical analysis tools",
        icon: "material-symbols:analytics"
      },
      {
        id: 2,
        name: "Trading Platform",
        description: "Execute trades and manage orders",
        icon: "material-symbols:currency-exchange"
      }
    ]
  },
  {
    id: "7",
    name: "MyMidwife",
    description: "A comprehensive pregnancy care and support application built with React Native and Expo.",
    technologies: [
      { id: 0, name: "React Native" },
      { id: 1, name: "Expo" },
      { id: 2, name: "TypeScript" },
    ],
    link: "https://github.com/blazinaj/mymidwife",
    icon: "material-symbols:pregnant-woman",
    features: [
      {
        id: 0,
        name: "Appointment Tracking",
        description: "Schedule and manage prenatal appointments",
        icon: "material-symbols:calendar"
      },
      {
        id: 1,
        name: "Health Monitoring",
        description: "Track vital signs and pregnancy milestones",
        icon: "material-symbols:monitor-heart"
      },
      {
        id: 2,
        name: "Resource Library",
        description: "Access pregnancy and childbirth information",
        icon: "material-symbols:library-books"
      }
    ]
  },
  {
    id: "8",
    name: "Thoughtify",
    description: "An AI-powered web application for journaling and self-reflection. Extracts insights, emotions, and topics from journal entries. Generate journals, health reports, and biographies.",
    icon: "history-icon",
    link: "https://thoughts.mobi",
    logo: "images/ThoughtifyLogo.png",
    features: [
      {
        id: 0,
        name: "AI Analysis",
        description: "Extract emotions and insights from journal entries",
        icon: "material-symbols:psychology"
      },
      {
        id: 1,
        name: "Health Reports",
        description: "Generate mental health trends and patterns",
        icon: "material-symbols:health-metrics"
      },
      {
        id: 2,
        name: "Biography Generation",
        description: "Create life stories from journal entries",
        icon: "material-symbols:auto-stories"
      }
    ]
  },
  {
    id: "9",
    name: "Smart Mirror",
    description: "Computer Science undergrad senior project. A smart mirror that displays the time, weather, and news headlines. Face recognition login, voice commands, and gesture controls.",
    icon: "mirror-icon",
    features: [
      {
        id: 0,
        name: "Face Recognition",
        description: "Personalized display based on user recognition",
        icon: "material-symbols:face"
      },
      {
        id: 1,
        name: "Voice Control",
        description: "Hands-free interface control using voice commands",
        icon: "material-symbols:mic"
      },
      {
        id: 2,
        name: "Gesture Control",
        description: "Navigate interface using hand gestures",
        icon: "material-symbols:gesture"
      }
    ]
  },
  {
    id: "10",
    name: "Equipment Manager",
    description: "Track maintenance, upgrades, and expenses for Vehicles, Motorcycles, and more",
    technologies: [
      { id: 0, name: "React" },
      { id: 1, name: "TypeScript" },
    ],
    link: "https://github.com/blazinaj/equipment-manager",
    icon: "material-symbols:handyman",
    features: [
      {
        id: 0,
        name: "Equipment Tracking",
        description: "Manage and track various types of equipment including vehicles and motorcycles",
        icon: "material-symbols:garage"
      },
      {
        id: 1,
        name: "Maintenance Logs",
        description: "Record and track maintenance history, schedules, and costs",
        icon: "material-symbols:build"
      },
      {
        id: 2,
        name: "Expense Management",
        description: "Track all equipment-related expenses and generate reports",
        icon: "material-symbols:payments"
      }
    ]
  },
];