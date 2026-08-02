"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Circle } from "lucide-react";


type Project = {
  id: number;
  category: "Full-Stack" | "Ecosystems" | "Stealth Tools";
  title: string;
  subtitle: string;
  description: string;
  desktop: string;
  mobile: string;
  tech: string[];
 
};

const projects: Project[] = [
  {
    id: 1,
    category: "Full-Stack",
    title: "MindMate",
    subtitle: "AI Mental Health Platform",
    description:
      "Enterprise AI platform focused on intelligent conversations, emotional support and scalable backend infrastructure.",
    desktop: "/projectimages/Mindmate.png",
    mobile: "/projectimages/Mindmate.png",
    tech: [
      "React",
      "Next.js",
      "Spring Boot",
      "MySQL",
      "Gemini AI",
      "TypeScript",
    ],

  },

  {
    id: 2,
    category: "Full-Stack",
    title: "VistAura",
    subtitle: "Travel Listing Engine",
    description:
      "Modern travel ecosystem engineered for high performance listings and seamless booking experiences.",
    desktop: "/projectimages/Vistaura.png",
    mobile: "/projectimages/Vistaura.png",
    tech: [
      "Next.js",
      "Spring Boot",
      "Tailwind",
      "MySQL",
      "REST API",
    ],
  
  },

  {
    id: 3,
    category: "Ecosystems",
    title: "Systems Engine",
    subtitle: "Enterprise Infrastructure",
    description:
      "High-performance backend ecosystem for enterprise-grade internal platforms.",
    desktop: "/projectimages/Ecommerce.png",
    mobile: "/projectimages/Ecommerce.png",
    tech: [
      "Java",
      "Spring",
      "Docker",
      "Redis",
      "AWS",
    ],
   
  },

  {
    id: 4,
    category: "Stealth Tools",
    title: "Automation Engine",
    subtitle: "Workflow Platform",
    description:
      "Private automation suite connecting APIs, internal systems and intelligent workflows.",
    desktop: "/projectimages/Automation.png",
    mobile: "/projectimages/Automation.png",
    tech: [
      "Node",
      "TypeScript",
      "MongoDB",
      "Automation",
      "Cloud",
    ],
 
  },
];


const filters = [
  "All Systems",
  "Full-Stack",
  "Ecosystems",
  "Stealth Tools",
] as const;

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All Systems");
const [selectedProject, setSelectedProject] = useState(0);
  const filtered = useMemo(() => {
    if (activeFilter === "All Systems") return projects;

    return projects.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);


  

const featured =
  filtered[Math.min(selectedProject, filtered.length - 1)];

  return (
    <section className="bg-dark">

      {/* HERO */}

      <div className="mx-auto max-w-[1300px] p-16 md:py-28">

        <div className="absolute -left-12 top-0 h-[220px] w-[220px] rounded-full bg-primary/20 blur-[100px]" />

       
<div className="flex justify-center">
        <div className="inline-flex md:mb-16 my-10 items-center gap-2 rounded-full border border-light/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-light/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
           RECENT WORK
          </div>
          </div>

        <h2 className="mx-auto  max-w-5xl text-center text-3xl md:text-5xl font-bold text-[#F5EFEB]">

          Built for  {" "}

          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

            Ambitious

          </span>

          <br />

          Founders.  Engineered to<br />

        {" "}

          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

            Scale.

          </span>

        </h2>

        <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-5 text-[#B9AEA8]">
Every project reflects our commitment to thoughtful design, scalable engineering, and measurable business impact.

        </p>
        {/* Premium Stats */}

<div className="hidden mt-20 px-28 md:grid grid-cols-2 gap-8 sm:grid-cols-4">

  <div className="group rounded-2xl bg-gradient-to-t from-primary/5 to-transparent p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary">
    <h3 className="text-3xl font-bold text-text">150+</h3>
    <p className="mt-2 text-sm text-text/60">Projects Delivered</p>
  </div>

  <div className="group rounded-2xl bg-gradient-to-t from-primary/5 to-transparent  p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
    <h3 className="text-3xl font-bold text-text">98%</h3>
    <p className="mt-2 text-sm text-text/60">Client Satisfaction</p>
  </div>

  <div className="group rounded-2xl bg-gradient-to-t from-primary/5 to-transparent p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
    <h3 className="text-3xl font-bold text-text">4+</h3>
    <p className="mt-2 text-sm text-text/60">Years Experience</p>
  </div>

  <div className="group rounded-2xl bg-gradient-to-t from-primary/5 to-transparent p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
    <h3 className="text-3xl font-bold text-text">24/7</h3>
    <p className="mt-2 text-sm text-text/60">Premium Support</p>
  </div>

</div>

      </div>

     

      <div className=" md:py-24">
      

        <div className="mx-auto max-w-[1300px] px-8">
 <div className="mb-12  ">

          <h2 className=" text-2xl md:text-3xl font-bold text-light">
           What We've Built
          </h2>
          

        </div>

          {/* FILTERS */}


          <div className=" py-5 flex flex-wrap gap-4">

            {filters.map((item) => (

              <button
                key={item}
                onClick={() => {
                setActiveFilter(item);
                setSelectedProject(0);
                }}

                className={`rounded-full border px-6 py-3 text-sm transition ${
                  activeFilter === item
                    ? "border-primary bg-background text-light"
                    : "border-black/10  bg-background text-[#5E524C]"
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

            {/* <div className="mb-8">

              <h3 className="text-4xl font-bold text-[#F5EFEB]">
                {featured.title}
              </h3>

              <p className="mt-3 text-[#F3A953]">
                {featured.subtitle}
              </p>

              <p className="mt-6 max-w-2xl leading-8 text-[#B9AEA8]">
                {featured.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {featured.tech.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#F5EFEB] backdrop-blur-xl"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div> */}

            <div className="group relative overflow-hidden rounded-[14px]  bg-[black] p-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_10px_rgba(255,107,44,.5)]">

              {/* Browser */}

              <div className="mb-1 flex items-center gap-2">

                <div className="h-3 w-3 rounded-full bg-[#FE424D]" />

                <div className="h-3 w-3 rounded-full bg-[#F3A953]" />

                <div className="h-3 w-3 rounded-full bg-emerald-400" />

              </div>
              

                <div className="relative overflow-hidden rounded-2xl border border-white/5">
                

                  <img
                    src={featured.desktop}
                    alt={featured.title}
                    className="h-[180px] md:h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
   
                    <div className="absolute bottom-4 left-4">

                    <h3 className="text-2xl font-bold text-dark">
                        {featured.title}
                    </h3>

                    <p className="text-[#F3A953]">
                        {featured.subtitle}
                    </p>

                   

                    <div className="mt-4 flex flex-wrap gap-3">

                        {featured.tech.map((tech) => (

                        <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-dark/10 px-2 py-1 text-sm text-dark backdrop-blur-xl"
                        >
                            {tech}
                        </span>

                        ))}

                    </div>

                    </div>
                

              </div>

            </div>

          </div>

          {/* MOBILE */}

          <div className="flex justify-center">

            <div className="group relative  w-full max-w-[300px] rounded-[20px] border border-white/10 bg-[black] p-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_10px_rgba(255,107,44,.5)]">

              <div className="absolute left-1/2 top-3 h-2 w-20 -translate-x-1/2 rounded-full bg-[black]" />


              <div className="overflow-hidden rounded-[14px] border border-white/5">

                <img
                  src={featured.mobile}
                  alt={featured.title}
                  className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

            </div>

          </div>

        </div>

          {/* PROJECT GRID */}

          <div className="mt-5 grid gap-3  grid-cols-2 lg:grid-cols-4">

            {filtered.slice(1).map((project,index) => (

            <div
            key={project.id}
            onClick={() => setSelectedProject(index + 1)}
            className={`group relative cursor-pointer overflow-hidden rounded-[20px] border rounded-[20px] transition-all duration-300 ${
                selectedProject === index + 1
                ? "border-primary "
                : "border-black/10"
            } bg-white`}
            >

                <img
                  src={project.desktop}
                  alt={project.title}
                  className=" md:h-[200px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <button className="hidden absolute  right-6 top-6 md:flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#191412] transition hover:scale-105">

                  <ArrowUpRight size={18} />

                </button>

                <div className="absolute bottom-4 left-4">

                  <h4 className="text-md md:text-2xl font-bold text-white">

                    {project.title}

                  </h4>


                </div>

              </div>

            ))}

          </div>
          </div>
          </div>
          </section>
          );
          }


