"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  description: string;
  index: number;
}

export function EducationCard({ degree, institution, year, description, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <div className="space-y-2">
          <span className="text-sm text-muted-foreground">{year}</span>
          <h3 className="text-xl font-semibold">{degree}</h3>
          <p className="text-primary font-medium">{institution}</p>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}