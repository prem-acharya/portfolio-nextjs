"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

export function TimelineItem() {

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Credsoft Technologies",
      date: "February 2024 - Present",
      description: "At Credsoft Technologies, I work as a Full Stack Developer, building functional and user-friendly web applications using tools like React, Next, Node and many more.",
    },
    {
      title: "React JS Intern",
      company: "InfiniteAI Technology Private Limited",
      date: "2022 ( 2 Months )",
      description: "I completed an internship at InfiniteAI Technology Private Limited, where I worked with React.js and Tailwind CSS. During this time, I gained hands-on experience and learned the fundamentals of React JS.",
    },
    // {
    //   title: "Junior Developer",
    //   company: "StartUp Labs",
    //   date: "2018 - 2019",
    //   description: "Collaborated on various web development projects and gained expertise in modern JavaScript frameworks.",
    // },
  ];
  
  const data = [
    {
      title: experiences[0].title,
      content: (
        <div className="space-y-2">
          <span className="text-sm text-foreground">{experiences[0].date}</span>
          <h3 className="text-lg text-blue-500 dark:text-blue-400 font-medium ">{experiences[0].company}</h3>
          <p className="text-muted-foreground">{experiences[0].description}</p>
        </div>
      ),
    },
    {
      title: experiences[1].title,
      content: (
        <div className="space-y-2">
          <span className="text-sm text-foreground">{experiences[1].date}</span>
          <h3 className="text-lg text-blue-500 dark:text-blue-400 font-medium ">{experiences[1].company}</h3>
          <p className="text-muted-foreground">{experiences[1].description}</p>
        </div>
      ),
    },
    // {
    //   title: experiences[2].title,
    //   content: (
    //     <div className="space-y-2">
    //       <span className="text-sm text-foreground">{experiences[2].date}</span>
    //       <h3 className="text-lg text-blue-500 dark:text-blue-400 font-medium ">{experiences[2].company}</h3>
    //       <p className="text-muted-foreground">{experiences[2].description}</p>
    //     </div>
    //   ),
    // },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="relative pb-12 last:pb-0"
    >
      <Timeline data={data} />
    </motion.div>
  );
}