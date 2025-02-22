import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import PollsImg from "@/public/Polls.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master of Computer Applications",
    location: "Bangalore, India",
    description:
      "I came across to learn an advanced curicullum and upskilled myself in various technical aspects",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Software Development Intern",
    location: "Flocci Technologies Private Ltd, Bangalore",
    description:
      "I used to build full-stack applications from scratch, I also upskilled myslef to deploying applications on cloud server",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "Software Developer",
    location: "LTIMindtree, Navi Mumbai",
    description:
      "Currently Working as an SAP ABAP developer",
    icon: React.createElement(CgWorkAlt)/*(FaReact)*/,
    date: "2024(dec) - Present",
  }, 
] as const;

export const projectsData = [
  {
    title: "FLocci Polls",
    description:
      "I worked as a full-stack developer on this startup project for 4 months. Users can create poll and surveys which can be shared across multiple platforms.",
    tags: ["React.js", "Node.js", "MongoDB", "PSQL", "Express.js" , "Socket.io"],
    imageUrl: PollsImg,
  },
  /*{
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  }, */
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Next.js",
  "Redux",
  "Express.js",
  "C++",
  "Java",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git"
] as const;
