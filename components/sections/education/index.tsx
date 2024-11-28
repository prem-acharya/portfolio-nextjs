"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { EducationCard } from "./education-card";

const education = [
  {
    degree: "Master of Computer Science",
    institution: "Tech University",
    year: "2016 - 2018",
    description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    year: "2012 - 2016",
    description: "Core focus on programming fundamentals, data structures, and algorithms.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="Academic background and qualifications"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {education.map((item, index) => (
            <EducationCard
              key={item.degree}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}