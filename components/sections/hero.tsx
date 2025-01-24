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
        <h1 className="text-2xl md:text-5xl font-bold mb-1 text-blue-500 hover">
          Prem Acharya
        </h1>
        <h1 className="text-sm md:text-md font-normal md:font-medium mb-6">Full Stack Developer</h1>
        <p className="text-md md:text-lg text-muted-foreground mb-8">
          {/* Your code, your legacy! */}
          Building dreams in bytes!
        </p>
        <div className="flex gap-4 justify-center sm:flex-row flex-col">
          <Button
            size="lg"
            className="group"
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            className="group bg-transparent text-default-foreground border-default-foreground/20 border-2 hover:bg-default-foreground/10"
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact Me
            <User className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
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
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Scroll down
        </motion.div>
      </div>
    </section>
  );
}
