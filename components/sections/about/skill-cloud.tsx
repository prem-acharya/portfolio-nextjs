"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Laptop, Palette, Server } from "lucide-react";

const skills = [
  { icon: Code2, label: "TypeScript" },
  { icon: Globe, label: "React" },
  { icon: Database, label: "SQL" },
  { icon: Server, label: "Node.js" },
  { icon: Palette, label: "UI/UX" },
  { icon: Laptop, label: "Next.js" },
];

export function SkillCloud() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {skills.map((Skill, index) => (
        <motion.div
          key={Skill.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
        >
          <Skill.icon className="h-8 w-8 mb-2 text-primary" />
          <span className="text-sm font-medium">{Skill.label}</span>
        </motion.div>
      ))}
    </div>
  );
}