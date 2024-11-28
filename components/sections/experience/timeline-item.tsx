"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  description: string;
  index: number;
}

export function TimelineItem({ title, company, date, description, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 h-full w-[2px] bg-border">
        <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-primary" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-muted-foreground">{date}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-primary font-medium">{company}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}