"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { EducationCard } from "./education-card";
import { GraduationCap, CalendarClock } from "lucide-react";

const education = [
  {
    degree: "B.Tech in ICT (Information and Communication Technology)",
    institution: "Marwadi University - Rajkot, Gujarat",
    institutionUrl: "https://www.marwadiuniversity.ac.in/",
    year: "2021 - 2024",
    description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
    duration: "3 years",
    courses: ["Software Engineering", "Artificial Intelligence", "Data Structures and Algorithms"],
    gpa: "7.6",
    icon: <GraduationCap />,
    dateIcon: <CalendarClock />,
  },
  {
    degree: "Diploma in ICT (Information and Communication Technology)",
    institution: "Marwadi University - Rajkot, Gujarat",
    institutionUrl: "https://www.marwadiuniversity.ac.in/",
    year: "2018 - 2021",
    description: "Core focus on programming fundamentals, data structures, and algorithms.",
    duration: "3 years",
    courses: ["Programming Fundamentals", "Data Structures", "Algorithms"],
    gpa: "7.8",
    icon: <GraduationCap />,
    dateIcon: <CalendarClock />,
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

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-20 mt-12">
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