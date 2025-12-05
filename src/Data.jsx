// skills_images
import htmlLogo from "/src/assets/tech_logo/html.png";
import cssLogo from "/src/assets/tech_logo/css.png";
import javascriptLogo from "/src/assets/tech_logo/javascript.png";
import reactjsLogo from "/src/assets/tech_logo/reactjs.png";
import reduxLogo from "/src/assets/tech_logo/redux.png";
import tailwindcssLogo from "/src/assets/tech_logo/tailwindcss.png";
import materialuiLogo from "/src/assets/tech_logo/materialui.png";
import bootstrapLogo from "/src/assets/tech_logo/bootstrap.png";
import nodejsLogo from "/src/assets/tech_logo/nodejs.png";
import mysqlLogo from "/src/assets/tech_logo/mysql.png";
import cLogo from "/src/assets/tech_logo/c.png";
import gitLogo from "/src/assets/tech_logo/git.png";
import githubLogo from "/src/assets/tech_logo/github.png";
import vscodeLogo from "/src/assets/tech_logo/vscode.png";
import figmaLogo from "/src/assets/tech_logo/figma.png";
import netlifyLogo from "/src/assets/tech_logo/netlify.png";
import vercelLogo from "/src/assets/tech_logo/vercel.png";
import postgreLogo from "/src/assets/tech_logo/postgre.png";
import strapiLogo from "/src/assets/tech_logo/strapi.png";
import neondbLogo from "/src/assets/tech_logo/neondb.png";
import renderLogo from "/src/assets/tech_logo/render.png";

// lateer i willl add these and to achieve those are my target!
// import expressjsLogo from './assets/tech_logo/express.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
// import mongodbLogo from './assets/tech_logo/mongodb.png';
// import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

// project_images
import AIModelLogo from "/src/assets/project_logo/AIModelLogo.png";
import ResumeLogo from "/src/assets/project_logo/resumeLogo.png";
import WorldAtlasLogo from "/src/assets/project_logo/wordAtlasLogo.png";
import PortfolioLogo from "/src/assets/project_logo/MyPortfolioLogo.png";

//education_logo
import CollegeLogo from "/src/assets/education_logo/college_logo.jpg";
import XLogo from "/src/assets/education_logo/CbseBoard.png";
import XIILogo from "/src/assets/education_logo/UPBoard.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NodeJs", logo: nodejsLogo },
      { name: "Strapi", logo: strapiLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Neondb", logo: neondbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      {name:'Python', logo:pythonLogo},
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Render", logo: renderLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Resume Builder",
    description:
      "A modern, beautifully designed AI-powered Resume Builder built with React, featuring real-time resume editing, AI-generated summaries, theme customization, and seamless authentication.Users can create, edit, save, and download their resumes — completely free.This project is integrated with a Strapi backend, deployed on Render, uses Neon PostgreSQL as the database, and is hosted on Vercel for fast global access",
    image: ResumeLogo,
    tags: [
      "HTML",
      "Tailwind",
      "JavaScript",
      "React JS",
      "GEMINI API",
      "Strapi",
    ],
    github: "https://github.com/00AbhiChaunhan00/AI-Resume-Builder",
    webapp: "https://ai-resume-builder-00.vercel.app/",
  },
  {
    id: 1,
    title: "AI Model ",
    description:
      "Personal AI – JACKSON is a smart virtual assistant built using modern web technologies.It understands your voice commands, responds with accurate answers, and can perform real-time tasks like opening apps/websites, telling date & time, and much more — all with a clean and futuristic UI.",
    image: AIModelLogo,
    tags: ["React JS", "HTML", "GEMINI API", "CSS", "JavaScript"],
    github: "https://github.com/00AbhiChaunhan00/Personal-AI",
    webapp: "https://personal-ai-00.vercel.app/",
  },
  {
    id: 2,
    title: "World Atlas",
    description:
      "A modern, responsive React web application to explore countries of the world with key facts, flags, and details.This project fetches live data from APIs and presents it in a clean, user-friendly interface.",
    image: WorldAtlasLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "React-Router"],
    github: "https://github.com/00AbhiChaunhan00/world-atlas",
    webapp: "https://world-atlas-00.vercel.app/",
  },
  {
    id: 3,
    title: "My Portfolio",
    description:
      "A personal developer portfolio featuring a dynamic interface, gradient UI theme, and mobile-first design. Includes project showcasing, skill categorization, and easy navigation to demonstrate frontend development expertise. Hosted online with fast loading performance",
    image: PortfolioLogo,
    tags: ["React JS", "Tailwind", "React-Routes","E-mailJS", "Validation"],
    github: "https://github.com/00AbhiChaunhan00/Porfolio",
    webapp: "YOU_VERCEL_LINK",
  },
];

export const education = [
  {
    id: 0,
    img: CollegeLogo,
    school: "MIIT College, Meerut",
    date: "Aug 2023 - July 2027",
    grade: "Pursuing",
    desc: "I am pursuing  my Bachelor of Technology in Computer Science and Engineering (B.Tech) from MIIT College, Meerut. Throughout my studies, I am immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at MIIT College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - B.Tech (Computer Science & Engineering)",
  },
  {
    id: 1,
    img: XIILogo,
    school: "TLS Inter College, Etah",
    date: "Apr 2022 - Mar 2023",
    grade: "79%",
    desc: "I completed my class 12 education from TLS Inter College,Etah, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 2,
    img: XLogo,
    school: "U.S.M Public School Veena Enclave, Delhi",
    date: "Apr 2020 - March 2021",
    grade: "83%",
    desc: "I completed my class 10 education from U.S.M Public School, Nangloi, under the CBSE board, where I studied Science with IT.",
    degree: "CBSE(X), Science with Information Technology",
  },
];
