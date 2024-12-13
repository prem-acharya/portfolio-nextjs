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
    title: "E-commerce Platform",
    type: "Personal",
    demo: true,
    description: "A modern e-commerce platform built with Next.js and Stripe integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/username/ecommerce",
  },
  {
    title: "Task Management App",
    type: "Personal",
    demo: true,
    description: "A collaborative task management application with real-time updates.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://demo-tasks.example.com",
    githubUrl: "https://github.com/username/tasks",
  },
  {
    title: "AI Image Generator",
    type: "Personal",
    demo: false,
    description: "An AI-powered image generation tool using DALL-E API.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=450&fit=crop",
    tags: ["OpenAI", "React", "Express", "AWS"],
    demoUrl: "https://demo-ai-gen.example.com",
    githubUrl: "https://github.com/username/ai-gen",
  },
  {
    title: "Task Management App",
    type: "Personal",
    demo: true,
    description: "A collaborative task management application with real-time updates.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://demo-tasks.example.com",
    githubUrl: "https://github.com/username/tasks",
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