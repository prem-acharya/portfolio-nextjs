"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

export function TimelineItem() {

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Credsoft Technologies",
      date: "Sep 2024 - Present",
      employmentType: "Full Time",
      locationType: "On-site",
      description: "At Credsoft Technologies, I work as a Full Stack Developer, building functional and user-friendly web applications using tools like React, Next, Node and many more.",
      skills: ["MERN Stack", "Next JS", "Node JS"],
    },
    {
      title: "React Developer",
      company: "Credsoft Technologies",
      date: "Mar 2024 - Aug 2024 • 6 mos",
      employmentType: "Internship",
      locationType: "On-site",
      description: "As a React Developer, I enhanced my skills in React, explored Node.js and Express, worked with MongoDB, and gained experience in API development and integration.",
      skills: ["React JS", "Node JS", "Express JS", "MongoDB"],
    },
    {
      title: "Web Developer",
      company: "InfiniteAI Technology Private Limited",
      date: "May 2023 - Jun 2023 • 2 mos",
      employmentType: "Internship",
      locationType: "On-site",
      description: "I completed an internship at InfiniteAI Technology Private Limited, where I worked with React.js and Tailwind CSS. During this time, I gained hands-on experience and learned the fundamentals of React JS.",
      skills: ["React JS", "Tailwind CSS"],
    },
  ];
  
  const data = [
    {
      title: experiences[0].title,
      content: (
        <div className="space-y-2">
          <span className="text-sm text-foreground font-medium">{experiences[0].date}</span>
          <h3 className="text-lg text-blue-500 dark:text-blue-400 font-medium ">{experiences[0].company}</h3>
          <span className="text-sm text-foreground font-medium">{experiences[0].employmentType}{' • '}{experiences[0].locationType}</span>
          
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground">{experiences[0].description}</p>
            <div className="flex flex-wrap gap-2">
              {experiences[0].skills.map((skill) => (
                <span key={skill} className="text-sm text-foreground bg-foreground/10 px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: experiences[1].title,
      content: (
        <div className="space-y-2">
          <span className="text-sm text-foreground font-medium">{experiences[1].date}</span>
          <h3 className="text-lg text-blue-500 dark:text-blue-400 font-medium ">{experiences[1].company}</h3>
          <span className="text-sm text-foreground font-medium">{experiences[1].employmentType}{' • '}{experiences[1].locationType}</span>
          <p className="text-muted-foreground">{experiences[1].description}</p>
          <div className="flex flex-wrap gap-2">
            {experiences[1].skills.map((skill) => (
              <span key={skill} className="text-sm text-foreground bg-foreground/10 px-3 py-1 rounded-full">{skill}</span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: experiences[2].title,
      content: (
        <div className="space-y-2">
          <span className="text-sm text-foreground font-medium">{experiences[2].date}</span>
          <h3 className="text-lg text-blue-500 dark:text-blue-400 font-medium ">{experiences[2].company}</h3>
          <span className="text-sm text-foreground font-medium">{experiences[2].employmentType}{' • '}{experiences[2].locationType}</span>
          <p className="text-muted-foreground">{experiences[2].description}</p>
          <div className="flex flex-wrap gap-2">
            {experiences[2].skills.map((skill) => (
              <span key={skill} className="text-sm text-foreground bg-foreground/10 px-3 py-1 rounded-full">{skill}</span>
            ))}
          </div>
        </div>
      ),
    },
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