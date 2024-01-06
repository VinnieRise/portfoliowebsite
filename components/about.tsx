"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Автор");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>О себе</SectionHeading>
      <p className="mb-3">
        Все написанное ниже - стандартное описание самого себя, которое не несет
        большого смысла, поскольку оценивать себя -{" "}
        <span className="font-medium">странная штука</span>. Моя самая любимая
        цитата -{" "}
        <span className="font-medium">
          «Ибо кто почитает себя чем-нибудь, будучи ничто, тот обольщает сам
          себя» (Послание Святого Апостола Павла к Галатам, 6:3)
        </span>
        . Я решил продолжить обучение в области веб-разработки, и мое основное
        направление - это разработка сайтов и изучение всего, что касается
        frontend-разработчика. Главные направления моей работы -{" "}
        <span className="font-medium">
          React, Next.js, TypeScript и Tailwindcss
        </span>
        . Сейчас я изучаю эти технологии, а затем буду углубляться в
        бэкенд-разработку. На данный момент я ищу полную занятость в качестве
        разработчика программного обеспечения.
      </p>
      <p>
        <span className="italic">Когда не занимаюсь программированием</span>,
        люблю смотреть фильмы, читать книги и размышлять. Мне также интересно
        узнавать что-то новое: например, я учусь играть на гитаре (говорят, что
        игра на музыкальных инструментах помогает в изучении иностранных
        языков).
      </p>
      <p></p>
    </motion.section>
  );
}
