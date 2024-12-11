"use client";

import { motion } from "framer-motion";
import { SparklesCore } from "../sparkles";
import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";
// import { WeatherCard } from "@/components/weather/weather-card";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.6}
        particleCount={50}
      />
      
      {/* <WeatherCard /> */}
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-1 text-blue-500 hover">
            Prem Acharya
          </h1>
          <h1 className="text-lg font-medium mb-6">
            Full Stack Developer
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          {/* Your code, your legacy! */}
          Building dreams in bytes!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center sm:flex-row flex-col"
        >
          <Button
            size="lg"
            className="group"
            onClick={() => {
              document.querySelector('#projects')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            className="group bg-transparent text-default-foreground border border-default-foreground/20 hover:bg-default-foreground/10"
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Contact Me
            <User className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-muted-foreground cursor-pointer"
          onClick={() => {
            document.querySelector('#about')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          Scroll down
        </motion.div>
      </div>
    </section>
  );
}