"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Circle,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MindMate",
    category: "AI HEALTHCARE",
    type: "FEATURED",
    description:
      "AI-powered mental health " ,
    image: "/projectimages/Mindmate.png",
    tags: [
      "React",
      "Next.js",
      "Spring Boot",
      "MySQL",
      "TypeScript",
    ],
  },
  {
    id: 2,
    title: "VistAura",
    category: "TRAVEL PLATFORM",
    type: "FULL STACK",
    description:
      "Modern travel listing ecosystem ",
    image: "/projectimages/Vistaura.png",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Spring",
      "MySQL",
      "REST API",
    ],
  },
  {
    id: 3,
    title: "Systems Engine",
    category: "ENTERPRISE",
    type: "BACKEND",
    description:
      "Enterprise software infrastructure ",
    image: "/projectimages/Expertsystem.png",
    tags: [
      "Java",
      "Spring",
      "Docker",
      "Redis",
      "AWS",
      "Microservices",
    ],
  },
  {
    id: 4,
    title: "Automation Engine",
    category: "AUTOMATION",
    type: "WORKFLOW",
    description:
      "Automation suite connecting APIs",
    image: "/projectimages/Automation.png",
    tags: [
      "Node",
      "TypeScript",
      "MongoDB",
      "REST",
      "Automation",
      
    ],
  },
  
];

export default function RecentWork() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = projects[active];

  const next = () =>
    setActive((p) => (p + 1) % projects.length);

  const prev = () =>
    setActive((p) => (p - 1 + projects.length) % projects.length);

  return (
    <section className="bg-[#FAF8F6] py-20">

      <div className="mx-auto max-w-full">

        <div className="mb-12 px-8 ">

         <div className="inline-flex mb-15  items-center gap-2 rounded-full border border-dark/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-dark/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
          RECENT PROJECTS
          </div>

          <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-[#191412]">
           Recent work we love
          </h2>

        </div> 

    
<div className="relative mt-8 overflow-hidden">
  <div className="marqueee flex w-max gap-5">
    {[...projects, ...projects].map((project, i) => (
      <div
        key={i}
        className="relative h-60 w-[340px] flex-shrink-0 overflow-hidden border border-background/50 rounded-2xl"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-0 w-full bg-background/40  px-3 py-2 backdrop-blur">
          <span className="font-bold text-light">{project.title}</span>
          <p className="text-sm text-light/70">{project.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>

    </section>
  );
}