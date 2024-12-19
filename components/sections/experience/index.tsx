"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "./timeline-item";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 bg-accent/50">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="mt-12">
          <TimelineItem />
        </div>
      </div>
    </section>
  );
}