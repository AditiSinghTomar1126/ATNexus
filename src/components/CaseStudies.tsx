"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Monitor,
  Smartphone,
  Layers3,
  Database,
  Cpu,
} from "lucide-react";

type Project = {
  id: number;
  category: "Full-Stack" | "Ecosystems" | "Stealth Tools";
  title: string;
  subtitle: string;
  description: string;
  desktop: string;
  mobile: string;
  tech: string[];
  before: string[];
  after: string[];
};

const projects: Project[] = [
  {
    id: 1,
    category: "Full-Stack",
    title: "MindMate",
    subtitle: "AI Mental Health Platform",
    description:
      "Enterprise AI platform focused on intelligent conversations, emotional support and scalable backend infrastructure.",
    desktop: "/projectimages/p1.jpeg",
    mobile: "/projectimages/p1.jpeg",
    tech: [
      "React",
      "Next.js",
      "Spring Boot",
      "MySQL",
      "Gemini AI",
      "TypeScript",
    ],
    before: [
      "Legacy Monolith",
      "Slow SQL Queries",
      "Duplicated Business Logic",
      "No Responsive UI",
    ],
    after: [
      "SSR Architecture",
      "Distributed Services",
      "Optimized Cache",
      "Modern Responsive UI",
    ],
  },

  {
    id: 2,
    category: "Full-Stack",
    title: "VistAura",
    subtitle: "Travel Listing Engine",
    description:
      "Modern travel ecosystem engineered for high performance listings and seamless booking experiences.",
    desktop: "/projectimage/vistaura-desktop.jpg",
    mobile: "/projectimage/vistaura-mobile.jpg",
    tech: [
      "Next.js",
      "Spring Boot",
      "Tailwind",
      "MySQL",
      "REST API",
    ],
    before: [
      "Static Pages",
      "Slow Search",
      "Poor UX",
      "Limited Scalability",
    ],
    after: [
      "Dynamic SSR",
      "Fast Search",
      "Reusable Components",
      "Cloud Ready",
    ],
  },

  {
    id: 3,
    category: "Ecosystems",
    title: "Systems Engine",
    subtitle: "Enterprise Infrastructure",
    description:
      "High-performance backend ecosystem for enterprise-grade internal platforms.",
    desktop: "/projectimage/system-desktop.jpg",
    mobile: "/projectimage/system-mobile.jpg",
    tech: [
      "Java",
      "Spring",
      "Docker",
      "Redis",
      "AWS",
    ],
    before: [
      "Manual Deployment",
      "Single Server",
      "High Downtime",
      "Legacy APIs",
    ],
    after: [
      "Dockerized",
      "Microservices",
      "Cloud Scaling",
      "API Gateway",
    ],
  },

  {
    id: 4,
    category: "Stealth Tools",
    title: "Automation Engine",
    subtitle: "Workflow Platform",
    description:
      "Private automation suite connecting APIs, internal systems and intelligent workflows.",
    desktop: "/projectimage/automation-desktop.jpg",
    mobile: "/projectimage/automation-mobile.jpg",
    tech: [
      "Node",
      "TypeScript",
      "MongoDB",
      "Automation",
      "Cloud",
    ],
    before: [
      "Manual Processes",
      "No Integrations",
      "Slow Execution",
      "Disconnected Systems",
    ],
    after: [
      "Workflow Engine",
      "API Automation",
      "Instant Sync",
      "Monitoring",
    ],
  },
];

const filters = [
  "All Systems",
  "Full-Stack",
  "Ecosystems",
  "Stealth Tools",
] as const;

export default function ProjectsShowcase() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]>("All Systems");

  const [activeProject, setActiveProject] = useState(0);

  const [slider, setSlider] = useState(55);

  const filteredProjects = useMemo(() => {
    if (filter === "All Systems") return projects;

    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const current =
    filteredProjects[
      Math.min(activeProject, filteredProjects.length - 1)
    ];

  return (
    <section className="py-28">

      <div className="mx-auto max-w-[1300px] px-8">

        <div className="mb-14">

          <span className="rounded-full bg-[#2C221E] px-5 py-2 font-mono text-xs tracking-[.3em] text-[#F3A953]">

            PROJECT SYSTEMS

          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#F5EFEB]">

            Engineering

            <span className="bg-gradient-to-r from-[#FE424D] to-[#F3A953] bg-clip-text text-transparent">

              {" "}Digital Products

            </span>

          </h2>

        </div>

        {/* FILTER ROW */}

        <div className="mb-14 flex flex-wrap gap-4">

          {filters.map((item) => (

            <button
              key={item}
              onClick={() => {
                setFilter(item);
                setActiveProject(0);
              }}
              className={`rounded-full border px-6 py-3 text-sm transition-all duration-300 ${
                filter === item
                  ? "border-[#FE424D] bg-[#FE424D]/10 text-[#F5EFEB] shadow-lg shadow-[#FE424D]/20"
                  : "border-white/5 bg-[#2C221E] text-[#C8BEB8] hover:border-[#FE424D]/40"
              }`}
            >

              {item}

            </button>

          ))}

        </div>

        {/* DEVICE SHOWCASE */}

        <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_.7fr]">
            {/* DESKTOP MOCKUP */}

          <div>

            <div className="mb-8">

              <h3 className="text-4xl font-bold text-[#F5EFEB]">
                {current.title}
              </h3>

              <p className="mt-3 text-[#F3A953]">
                {current.subtitle}
              </p>

              <p className="mt-6 max-w-2xl leading-8 text-[#B9AEA8]">
                {current.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {current.tech.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#F5EFEB] backdrop-blur-xl"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

            <div className="group relative overflow-hidden rounded-[14px]  bg-[black] p-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(254,66,77,.15)]">

              {/* Browser */}

              <div className="mb-1 flex items-center gap-2">

                <div className="h-3 w-3 rounded-full bg-[#FE424D]" />

                <div className="h-3 w-3 rounded-full bg-[#F3A953]" />

                <div className="h-3 w-3 rounded-full bg-emerald-400" />

              </div>

             

           

                <div className="relative overflow-hidden rounded-2xl border border-white/5">

                  <img
                    src={current.desktop}
                    alt={current.title}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                

              </div>

            </div>

          </div>

          {/* MOBILE */}

          <div className="flex justify-center">

            <div className="group relative w-full max-w-[300px] rounded-[20px] border border-white/10 bg-[black] p-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(254,66,77,.15)]">

              <div className="absolute left-1/2 top-3 h-2 w-20 -translate-x-1/2 rounded-full bg-[black]" />


              <div className="overflow-hidden rounded-[14px] border border-white/5">

                <img
                  src={current.mobile}
                  alt={current.title}
                  className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

            </div>

          </div>

        </div>

        {/* BEFORE / AFTER */}

        <div className="mt-24">
            <div className="overflow-hidden rounded-[20px] border border-white/5 bg-[#FAF7F1]">

            <div className="border-b border-white/5 px-8 py-6">

              <span className="font-mono text-xs tracking-[.3em] text-[#F3A953]">

                 SYSTEM TRANSFORMATION

              </span>

              <h3 className="mt-3 text-3xl font-bold text-[#F5EFEB]">

                Before vs After

              </h3>

            </div>

            <div className="relative h-[520px] overflow-hidden">

              {/* AFTER */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#2C221E] to-[#1B1513] p-10">

                <div className="mb-8 flex items-center gap-3">

                  <Cpu className="text-[#FE424D]" />

                  <h4 className="text-2xl font-bold text-[#F5EFEB]">

                    Next-Gen Blueprint

                  </h4>

                </div>

                <div className="space-y-5">

                  {current.after.map((item) => (

                    <div
                      key={item}
                      className="rounded-2xl border border-[#FE424D]/15 bg-[#FE424D]/5 px-6 py-5 backdrop-blur-xl"
                    >

                      <span className="text-[#F5EFEB]">
                        ✓ {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* BEFORE */}

              <div
                className="absolute inset-y-0 left-0 overflow-hidden bg-[#1B1716]"
                style={{ width: `${slider}%` }}
              >

                <div className="h-full w-[900px] p-10">

                  <div className="mb-8 flex items-center gap-3">

                    <Database className="text-[#F3A953]" />

                    <h4 className="text-2xl font-bold text-[#F5EFEB]">

                      Legacy Monolith

                    </h4>

                  </div>

                  <div className="space-y-5">

                    {current.before.map((item) => (

                      <div
                        key={item}
                        className="rounded-2xl border border-white/5 bg-white/[0.04] px-6 py-5"
                      >

                        <span className="text-[#D2C8C2]">
                          ✕ {item}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

              {/* DRAG BAR */}

              <div
                className="absolute top-0 bottom-0 z-20 w-1 cursor-ew-resize bg-gradient-to-b from-[#FE424D] to-[#F3A953]"
                style={{ left: `${slider}%` }}
              >

                <button
                  onClick={() =>
                    setSlider((p) => (p === 55 ? 25 : 55))
                  }
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FE424D]/30 bg-[#2C221E] shadow-xl shadow-[#FE424D]/20"
                >

                  <Layers3
                    size={22}
                    className="text-[#FE424D]"
                  />

                </button>

              </div>

            </div>

          </div>

          {/* PROJECT NAVIGATION */}

          <div className="mt-16 grid gap-5 md:grid-cols-4">
            {filteredProjects.map((project, index) => (

              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`group rounded-[24px] border p-6 text-left transition-all duration-300 ${
                  current.id === project.id
                    ? "border-[#FE424D] bg-[#FE424D]/5 shadow-lg shadow-[#FE424D]/10"
                    : "border-white/5 bg-[#2C221E] hover:-translate-y-1 hover:border-[#FE424D]/30"
                }`}
              >

                <div className="mb-4 flex items-center justify-between">

                  <span className="font-mono text-xs tracking-[.3em] text-[#F3A953]">
                    0{project.id}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className={`transition ${
                      current.id === project.id
                        ? "text-[#FE424D]"
                        : "text-[#6D625C] group-hover:text-[#FE424D]"
                    }`}
                  />

                </div>

                <h4 className="text-2xl font-bold text-[#F5EFEB]">
                  {project.title}
                </h4>

                <p className="mt-2 text-sm text-[#B9AEA8]">
                  {project.subtitle}
                </p>

                <div className="mt-6 h-[4px] overflow-hidden rounded-full bg-white/5">

                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-[#FE424D] to-[#F3A953] transition-all duration-500 ${
                      current.id === project.id
                        ? "w-full"
                        : "w-0 group-hover:w-1/2"
                    }`}
                  />

                </div>

              </button>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
             