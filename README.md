## Portfolio Website


![image](https://badgen.net/static/React/18/blue)
![image](https://badgen.net/static/Next.js/14.1.0/blue)
![image](https://badgen.net/static/Typescript/5/blue)
![image](https://badgen.net/static/MUI/5.15.4/blue)
![image](https://badgen.net/static/Prettier/3.2.4/blue)
![image](https://badgen.net/static/ESLint/8/blue)
![image](https://badgen.net/static/AWS-Amplify/6.0.5/blue)

This is an opinionated portfolio website. 

It is built with Next.js and TypeScript. 

This website is designed to be easily hosted through AWS CloudFront and S3 using AWS Amplify. But it can be hosted on any server.

The website is available at [jacob.blazina.family](https://jacob.blazina.family).

### AWS Amplify

This project is created with AWS Amplify. You can quickly host and deploy your own version of this website by clicking the button below.

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/blazinaj/portfolio-website-template)

If you would like to skip the Amplify setup, you can clone this repository and host it on your own server.

See `src/data` to manually update the content of the website. If an Amplify deployment is used, the content will be automatically pulled through Amplify DataStore.


### Views

The website is composed of the following views:

- About Me
- Work Experience
- Disciplines
- Education
- Projects
- Languages
- Technologies
- Skills
- Hobbies

### Components

The views are made up of the following components:

- `<PageStack />`
- `<ChipGrid />`
- `<GridView />`
- `<NavigationLinkGrid />`
- `<NavigationSpeedDial />`
- `<TimelineView />`
- `<ProficiencyChipGrid />`

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
