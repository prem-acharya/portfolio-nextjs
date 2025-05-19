"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  type: string;
  demo: boolean;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  index: number;
}

export function ProjectCard({
  title,
  type,
  demo,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-background/100 rounded-lg overflow-hidden"
    >
      <div className="aspect-video relative overflow-hidden brightness-95">
        <span className="absolute top-2 right-2 z-10 bg-background/70 text-foreground font-semibold px-2 py-1 rounded-full text-xs">{type}</span>
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          priority={index === 0}
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="sm" asChild className={cn(demo ? "" : "cursor-not-allowed")}>
            {demo ? (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <span className="rounded-full w-3 h-3 mr-2 animate-pulse bg-green-500"></span>
                Demo
              </a>
            ) : (
              <span className="inline-flex items-center">
                <span className="rounded-full w-3 h-3 mr-2 animate-pulse bg-red-500 to-red-600"></span>
                Demo
              </span>
            )}
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}