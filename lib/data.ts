import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import linklist from "@/public/linklist.png";
import { link } from "fs";

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
    title: "Full Stack Developer",
    location: "Westgate Resorts, FL",
    description:
      "Drive significant sales growth by designing and maintaining a customized WordPress marketing site, directly impacting lead collection and promotions. Secure over 50,000 organic leads during a five-city trial by implementing an Android app with gamification and sales presentation features for NFL and NASCAR events.",
    icon: React.createElement(CgWorkAlt),
    date: "2020-2024",
  },
  {
    title: "Project Manager - Application Support",
    location: "Westgate Resorts, FL",
    description:
      "Increased team member productivity by 60% through the overhaul and optimization of the Quality Assurance workflow, including the development of a new Customer Service Quality Assurance application.",
    icon: React.createElement(CgWorkAlt),
    date: "2004 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "LinkList",
    description:
      "Full Stack Next.js project that users can use to create a landing page for all their links.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Vercel"],
    imageUrl: linklist,
  } /*
  {
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
  }, */,
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vite",
  "Node.js",
  "RESTFul API",
  "SQL",
  "Python",
  "HTML",
  "CSS",
  "Laravel",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Android",
  "Express",
  "PostgreSQL",
  "SQLite",
  "Django",
  "Framer Motion",
  "SharePoint",
  "Excel",
  "WordPress",
] as const;
