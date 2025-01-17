"use client";

import { motion } from "framer-motion";
import { useState } from "react"
interface EducationCardProps {
  degree: string;
  institution: string;
  duration: string;
  year: string;
  description: string;
  courses: string[];
  gpa: string;
  icon: React.ReactNode;
  dateIcon: React.ReactNode;
  index: number;
}

export function EducationCard({
  degree,
  institution,
  duration,
  year,
  description,
  courses,
  gpa,
  icon,
  dateIcon,
  index
}: EducationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-card rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
    >   
      <div className="">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center cursor-pointer">
            <div className="w-14 h-10 p-2 bg-gray-100 dark:bg-accent/80 rounded-md flex items-center justify-center text-foreground dark:text-foreground-400">
              {icon}
            </div>
            <div className="ml-4">
              <div className="lg:text-xl md:text-lg sm:text-sm font-bold text-foreground-900 dark:text-white">{degree}</div>
              <p className="text-blue-600 dark:text-blue-400">{institution}</p>
              <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm justify-start mt-2">
                {dateIcon}
                <span className="ml-2">{year}</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className={`transition-all duration-300 ${isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Courses</div>
              <ul className="grid grid-cols-2 gap-2">
              {courses.map((course, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
                  • {course}
                </li>
                ))}
              </ul>
            </motion.div>
            {/* <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
              GPA: <span className="text-blue-600 dark:text-blue-400">{gpa}</span>
            </p> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}