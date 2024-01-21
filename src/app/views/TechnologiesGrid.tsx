import React from "react";
import { Icon } from "@iconify/react";
import { ProficiencyChipGrid } from "@/app/components/ProficiencyChipGrid";

/**
 * Grid of technologies and software applications with knowledge of.
 *
 * Each element has:
 * - name
 * - logo
 * - link
 * - proficiency (optional link to a certification)
 *
 * @param technologies
 * @constructor
 */
// @ts-ignore
export const TechnologiesGrid = ({ technologies = MOCK_TECHNOLOGIES }) => {
  return (
    <ProficiencyChipGrid
      chips={technologies.map((technology) => ({
        id: technology.id,
        label: technology.name,
        icon: technology.icon,
        proficiency: technology.proficiency,
      }))}
    />
  );
};

const MOCK_TECHNOLOGIES = [
  {
    id: 1,
    name: "Amazon Web Services",
    icon: <Icon icon="skill-icons:aws-light" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 2,
    name: "Jira",
    icon: <Icon icon="logos:jira" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 3,
    name: "GitHub",
    icon: <Icon icon="skill-icons:github-light" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 4,
    name: "Figma",
    icon: <Icon icon="skill-icons:figma-light" />,
    proficiency: 3, // out of 5 - 'familiar'
  },
  {
    id: 5,
    name: "Slack",
    icon: <Icon icon="logos:slack-icon" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 6,
    name: "Microsoft Office",
    icon: <Icon icon="logos:microsoft-icon" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 7,
    name: "Microsoft Teams",
    icon: <Icon icon="logos:microsoft-teams" />,
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 8,
    name: "Blender",
    icon: <Icon icon="skill-icons:blender-light" />,
    proficiency: 2, // out of 5 - 'familiar'
  },
  {
    id: 9,
    name: "Node.js / NPM",
    icon: <Icon icon="skill-icons:nodejs-light" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 10,
    name: "Sentry",
    icon: <Icon icon="skill-icons:sentry" />,
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 11,
    name: "Docker",
    icon: <Icon icon="skill-icons:docker" />,
    proficiency: 2, // out of 5 - 'familiar'
  },
  {
    id: 12,
    name: "MUI",
    icon: <Icon icon="skill-icons:material-ui" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 13,
    name: "React",
    icon: <Icon icon="logos:react" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 14,
    name: "Next.js",
    icon: <Icon icon="logos:nextjs" />,
    proficiency: 3,
  },
  {
    id: 15,
    name: "GitKraken",
    icon: <Icon icon="logos:gitkraken" />,
    proficiency: 4, // out of 5 - 'skilled'
  },
  {
    id: 16,
    name: "Jest",
    icon: <Icon icon="logos:jest" />,
    proficiency: 3, // out of 5 - 'comfortable'
  },
  {
    id: 17,
    name: "Prettier",
    icon: <Icon icon="logos:prettier" />,
    proficiency: 3,
  },
  {
    id: 18,
    name: "ESLint",
    icon: <Icon icon="logos:eslint" />,
    proficiency: 4,
  },
  {
    id: 19,
    name: "AWS DynamoDB",
    icon: <Icon icon="logos:dynamodb" />,
    proficiency: 4,
  },
  {
    id: 20,
    name: "AWS CloudFront",
    icon: <Icon icon="logos:cloudfront" />,
    proficiency: 4,
  },
  {
    id: 21,
    name: "AWS Amplify",
    icon: <Icon icon="logos:aws-amplify" />,
    proficiency: 4,
  },
  {
    id: 22,
    name: "AWS Lambda",
    icon: <Icon icon="logos:aws-lambda" />,
    proficiency: 4,
  },
  {
    id: 23,
    name: "AWS S3",
    icon: <Icon icon="logos:aws-s3" />,
    proficiency: 4,
  },
  {
    id: 24,
    name: "AWS Cognito",
    icon: <Icon icon="logos:aws-cognito" />,
    proficiency: 4,
  },
  {
    id: 25,
    name: "AWS AppSync",
    icon: <Icon icon="logos:aws-appsync" />,
    proficiency: 4,
  },
  {
    id: 26,
    name: "AWS WAF",
    icon: <Icon icon="logos:aws-waf" />,
    proficiency: 3,
  },
  {
    id: 27,
    name: "AWS Route 53",
    icon: <Icon icon="logos:aws-route53" />,
    proficiency: 3,
  },
  {
    id: 28,
    name: "AWS CloudFormation",
    icon: <Icon icon="logos:aws-cloudformation" />,
    proficiency: 3,
  },
  {
    id: 29,
    name: "AWS CloudWatch",
    icon: <Icon icon="logos:aws-cloudwatch" />,
    proficiency: 3,
  },
  {
    id: 30,
    name: "AWS CodePipeline",
    icon: <Icon icon="logos:aws-codepipeline" />,
    proficiency: 3,
  },
  {
    id: 31,
    name: "AWS EC2",
    icon: <Icon icon="logos:aws-ec2" />,
    proficiency: 3,
  },
  {
    id: 32,
    name: "AWS SageMaker",
    icon: <Icon icon="logos:aws-sagemaker" />,
    proficiency: 2,
  },
  {
    id: 33,
    name: "AWS GuardDuty",
    icon: <Icon icon="logos:aws-guardduty" />,
    proficiency: 3,
  },
];
