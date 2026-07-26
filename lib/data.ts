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
    title: "Associate Software Engineer",
    location: "Flocci Technologies Private Ltd, Bangalore",
    description:
      "Developed backend services for a real-time audience engagement platform using Spring Boot. Built REST APIs, implemented WebSocket-based live communication, secured APIs with JWT, and worked with MongoDB to support scalable real-time features ",
    icon: React.createElement(CgWorkAlt),
    date: "2024(jan) - 2024(nov)",
  },
  {
    title: "Software Engineer",
    location: "LTIMindtree, Delhi",
    description:
      "Developed and maintained Spring Boot backend services for a fintech loan origination platform. Built secure REST APIs, integrated Kafka for asynchronous event processing, optimized database performance, and collaborated with cross-functional teams to deliver production-ready features",
    icon: React.createElement(CgWorkAlt)/*(FaReact)*/,
    date: "2024(dec) - Present",
  }, 
] as const;

export const projectsData = [
  {
    title: "FLocci Polls",
    description:
      "Developed a full-stack real-time polling platform using React, Spring Boot, WebSocket/STOMP, and MongoDB. Built responsive frontend interfaces, secure REST APIs, and real-time vote synchronization to deliver live polling and analytics",
    tags: ["React.js", "SpringBoot", "Spring MVC", "WebSocket" ,  "MongoDB", "JWT" , "Docker"],
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
  "Java",
  "Spring Boot",
  "JWT",
  "JavaScript",
  "React.js",
  "Node.js",
  "Next.js",
  "Redux",
  "Express.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git"
] as const;
