"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "./timeline-item";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    date: "2021 - Present",
    description: "Led the development of multiple high-impact web applications using React and Next.js. Mentored junior developers and implemented best practices.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    date: "2019 - 2021",
    description: "Developed and maintained full-stack applications using Node.js and React. Improved application performance by 40%.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Labs",
    date: "2018 - 2019",
    description: "Collaborated on various web development projects and gained expertise in modern JavaScript frameworks.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-accent/50">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="mt-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.title}
              {...experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}