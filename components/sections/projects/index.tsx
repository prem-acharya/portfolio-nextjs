"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "E-commerce Platform",
    type: "Personal",
    description: "A modern e-commerce platform built with Next.js and Stripe integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/username/ecommerce",
  },
  {
    title: "Task Management App",
    type: "Personal",
    description: "A collaborative task management application with real-time updates.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://demo-tasks.example.com",
    githubUrl: "https://github.com/username/tasks",
  },
  {
    title: "AI Image Generator",
    type: "Personal",
    description: "An AI-powered image generation tool using DALL-E API.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=450&fit=crop",
    tags: ["OpenAI", "React", "Express", "AWS"],
    demoUrl: "https://demo-ai-gen.example.com",
    githubUrl: "https://github.com/username/ai-gen",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}