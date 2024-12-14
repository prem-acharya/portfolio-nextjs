"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Resume Builder",
    type: "Personal",
    demo: true,
    description: "Built a web app enabling users to create, customize, and download professional resumes with a real-time preview.",
    image: "/images/projects/project1.webp",
    tags: ["React", "Tailwind CSS", "JavaScript", "PDF Export"],
    demoUrl: "https://resume-builder-e50cb.web.app",
    githubUrl: "https://github.com/prem-acharya/Resume_Builder---React",
  },
  {
    title: "Notes App",
    type: "Personal",
    demo: false,
    description: "A notes app for organizing, managing, and scanning documents with many more features.",
    image: "/images/projects/project2.webp",
    tags: ["React", "Firebase", "Tailwind CSS", "Emotion CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/prem-acharya/notes-app",
  },
  {
    title: "Buy Phones Plugin",
    type: "Personal",
    demo: false,
    description: "Built a WordPress plugin to manage phone sales and inventory with seamless admin controls.",
    image: "/images/projects/project4.webp",
    tags: ["PHP", "WordPress", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/prem-acharya/buy_phones_plugin",
  },
  {
    title: "Todo List",
    type: "Personal",
    demo: true,
    description: "web app where users can register, login, and manage their to-do lists with the ability to upload images.",
    image: "/images/projects/project3.webp",
    tags: ["React", "Firebase", "Tailwind CSS", "Material UI"],
    demoUrl: "https://todo-app-bf450.web.app/",
    githubUrl: "https://github.com/prem-acharya/Todo-List---React",
  },
  {
    title: "Home Automation",
    type: "Personal",
    demo: false,
    description: "A system to control and monitor home devices such as AC, TV with real-time temperature and humidity tracking.",
    image: "/images/projects/project5.webp",
    tags: ["PHP", "JavaScript", "ESP8266", "ArduinoIDE"],
    demoUrl: "#",
    githubUrl: "https://github.com/prem-acharya/Home-Automation---PHP-Dashboard",
  },
  {
    title: "Restaurant Websites",
    type: "Personal",
    demo: false,
    description: "Built a restaurant website to display food categories, manage a shopping cart, and generate bills for orders.",
    image: "/images/projects/project6.webp",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/prem-acharya/Restaurant_Websites---PHP",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-accent/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Some of my recent work"
        />

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={`${project.title}-${index}`} className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard
                  {...project}
                  index={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}