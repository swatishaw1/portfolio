// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import intellijLogo from "./assets/tech_logo/intellij.png";
import eclipseLogo from "./assets/tech_logo/eclipse.png";
import requestlyLogo from "./assets/tech_logo/requestly.png";

// Experience Section Logo's
import eRevmaxLogo from "./assets/company_logo/eRevMax_logo.jpg";

// Education Section Logo's
import uemiemLogo from "./assets/education_logo/uem_iem_logo.png";
import BDLogo from "./assets/education_logo/bd_logo.jpg";
import lakeTownLogo from "./assets/education_logo/lakeTown_logo.jpeg";

// Project Section Logo's
import multitenantLogo from "./assets/project_work_logo/multitenant_logo.png";
import dropbgLogo from "./assets/project_work_logo/dropbg_logo.png";
import emailWriterLogo from "./assets/project_work_logo/email_writer_ai.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      // { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      // { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "IntelliJ IDEA", logo: intellijLogo },
      { name: "Eclipse", logo: eclipseLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Requestly", logo: requestlyLogo },
    ],
  },
];

export const experiences = [
  {
  id: 0,
  img: eRevmaxLogo,
  role: "Summer Intern",
  company: "eRevMax - RateTiger Hotel Channel Manager, Kolkata, India",
  date: "May 2026 - July 2026",

  desc: [
  "Enhanced an existing Customer Portal prototype by developing 20+ REST APIs for hotel management workflows using Spring Boot and Spring Security.",
  "Implemented JWT authentication, RBAC, and OAuth2, with role-based authorization across 10+ secured endpoints.",
  "Implemented refresh-token rotation to strengthen session security and protect authenticated resources.",
  "Refactored backend components into a layered architecture with reusable service components, improving code organization and maintainability.",
],

  skills: [
    "CSS",
    "React JS",
    "Spring Boot",
    "MySQL",
    "Spring Security",
    "JWT",
    "OAuth2",
    "RBAC",
    "RESTful APIs",
    "Postman",
    "Spring Data JPA",
  ],
}
];

export const education = [
  {
    id: 0,
    img: uemiemLogo,
    school: "Institute of Engineering & Management, Kolkata",
    date: "Jun 2023 - Jun 2027",
    grade: "8.67 CGPA",
    desc: "I completed my B.Tech in Computer Science & Engineering from the Institute of Engineering & Management, Kolkata, building a strong foundation in programming, software development, and core computer science concepts.",
    degree:
      "Bachelor of Technology(Btech) - Computer Science and Engineering (CSE)",
  },
  {
    id: 1,
    img: BDLogo,
    school: "Bidhannagar Government High School, Kolkata",
    date: "May 2022 - May 2023",
    grade: "79.8%",
    desc: "I completed my class 12 education from Bidhannagar Government High School, Kolkata, under the WBCHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "WBCHSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: lakeTownLogo,
    school: "Lake Town Govt. Sponsored Girls High School, Kolkata",
    date: "Jan 2020 - May 2021",
    grade: "84.85%",
    desc: "I completed my class 10 education from Lake Town Govt. Sponsored Girls High School, Kolkata under the WBBSE board, where I studied Science with Computer.",
    degree: "WBBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Multi-Tenant Authentication System",
    description:
      "A secure multi-tenant authentication system built with Spring Boot and React.js, featuring JWT, OAuth2, RBAC, refresh-token rotation, and tenant-aware access control.",
    image: multitenantLogo,
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "MySQL",
      "JWT",
      "OAuth2",
      "JPA",
      "Hibernate",
    ],
    github: "https://github.com/swatishaw1/Multitenant_Auth_System",
  },

  {
    id: 1,
    title: "DropBG - AI Background Remover",
    description:
      "A full-stack AI image background remover built with React.js and Spring Boot, featuring secure authentication, image processing, credit tracking, and REST APIs.",
    image: dropbgLogo,
    tags: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Clerk",
      "REST API",
      "MySQL",
      "Feign Client",
      "AI API",
    ],
    github: "https://github.com/swatishaw1/DropBG",
    webapp:
      "https://drive.google.com/file/d/1TjgrmTm39unoY1HEZNavkuby_8SF83n-/view",
  },

  {
    id: 2,
    title: "Email Writer AI - Chrome Extension",
    description:
      "An AI-powered Chrome extension that generates, improves, and rewrites professional emails using user-provided context and tone.",
    image: emailWriterLogo,
    tags: [
      "JavaScript",
      "Chrome Extension",
      "React.js",
      "Gemini API",
      "REST API",
      "Spring Boot",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/swatishaw1/Email-Writer-Ai",
    webapp:
      "https://drive.google.com/file/d/1e7uYdv4-5jmPrHoYp9bQpgvI_E6vgtyv/view",
  },
];