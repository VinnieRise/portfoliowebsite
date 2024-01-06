import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import myfirstsite from "@/public/myfirstsite.png";
import mysecondsite from "@/public/mysecondsite.png";

export const links = [
  {
    name: "Главная",
    hash: "#home",
  },
  {
    name: "Автор",
    hash: "#about",
  },
  {
    name: "Проекты",
    hash: "#projects",
  },
  {
    name: "Скилы",
    hash: "#skills",
  },
  {
    name: "Опыт",
    hash: "#experience",
  },
  {
    name: "Контакты",
    hash: "#contact",
  },
] as const;

export const link = [
  {
    name: "Мой первый сайт",
    url: "https://mygitproject-vinnierise.vercel.app",
  },
  {
    name: "Сайт Портфолио",
    url: "https://mygitproject-vinnierise.vercel.app",
  },
  {
    name: "Будущий проект",
    url: "https://mygitproject-vinnierise.vercel.app",
  },
] as const;

export const experiencesData = [
  {
    title: "Самообучение",
    location: "JS, React, Next.js, TS, Tailwindcss",
    description:
      "Сам обучался в течение года. Изучил много материалов и сделал 6-7 проектов, но только два из них были выпущены.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Устроится на работу",
    description:
      "В этом году я планирую искать работу и одновременно заниматься своим коммерческим проектом.",
    icon: React.createElement(CgWorkAlt),
    date: "планы - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Буду изучать Back-end developers",
    description:
      "На данный момент я еще не знаю, какие именно технологии я буду изучать.",
    icon: React.createElement(FaReact),
    date: "план на - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Мой первый сайт",
    description:
      "Данный сайт работает как документация часто используемых компонентов, для создания сайта.",
    name: "Мой первый сайт",
    url: "https://mygitproject-vinnierise.vercel.app",
    tags: ["React", "Next.js", "ui.shadcn", "Tailwind", "mdxjs"],
    imageUrl: myfirstsite,
  },
  {
    title: "Сайт Портфолио",
    description:
      "Свежий сайт портфолио на React (приложение Next.js, Framer Motion, TypeScript, Tailwind CSS)",
    name: "Сайт Портфолио",
    url: "#",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: mysecondsite,
  },
  {
    title: "Будущий проект",
    description:
      "Скорее всего будет коммерческий проект по Dota 2, но пока это не точно! Время покажет",
    name: "Будущий проект",
    url: "#",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MDXJS"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Shadcn/ui",
  "MDXJS",
] as const;
