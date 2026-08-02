
"use client";

import { ArrowRight,Circle } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Luxury Interior",
    category: "Web Design",
    image: "/projectimages/Ecommerce.png",
    height: "h-[200px]",
  },
  {
    title: "Real Estate",
    category: "Development",
    image: "/projectimages/Expertsystem.png",
    height: "h-[200px]",
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX",
    image: "/projectimages/Mindmate.png",
    height: "h-[200px]",
  },
  {
    title: "Healthcare",
    category: "SaaS",
    image:"/projectimages/Vistaura.png",
    height: "h-[200px]",
  },
  {
    title: "Ecommerce",
    category: "Next.js",
    image: "/projectimages/Automation.png",
    height: "h-[200px]",
  },
  {
    title: "Portfolio",
    category: "Branding",
    image: "/projectimages/Automation.png",
    height: "h-[200px]",
  },
];
function ProjectCard({
  project,
  rotate = "",
}: {
  project: (typeof PROJECTS)[number];
  rotate?: string;
}) {
  return (
    <div
   className={`group ${project.height} ${rotate} relative overflow-hidden
    rounded-[16px]
    width-50px
    border border-white/10
    bg-white/[0.04]
    backdrop-blur-2xl
    transition-all
    duration-700
    hover:-translate-y-2
    hover:scale-[1.02]
    `}
     style={{
  boxShadow: `
    0 20px 60px rgba(0,0,0,.45),
    inset 0 1px rgba(255,255,255,.08)
  `,
}}
    >
      {/* Image */}

      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
      />

      {/* Overlay */}

      <div
  className="
  absolute
  inset-0
  opacity-0
  transition-opacity
  duration-700
  group-hover:opacity-100
"
>
  <div
    className="
    absolute
    -left-1/2
    top-0
    h-full
    w-1/2
    
    bg-gradient-to-r
    from-transparent
    via-white/20
    to-transparent
    blur-xl
    animate-pulse
    "
  />
</div>

   

      {/* Bottom */}

      <div className="absolute bottom-0 left-0 right-0  bg-background/40">

        {/* <span className="text-xs uppercase tracking-[0.25em] text-primary/80 ">
          {project.category}
        </span> */}

        <h3 className=" text-sm font-semibold text-text py-1 px-2">
          {project.title}
        </h3>

      </div>
    </div>
  );
}
export default function Hero() {
  const loop = (arr: typeof PROJECTS) => [...arr, ...arr];
  const column1 = useMemo(() => loop(PROJECTS), []);
  const column2 = useMemo(() => loop([...PROJECTS].reverse()), []);
  const column3 = useMemo(() => loop(PROJECTS), []);
  
  return (
    <section className="relative overflow-hidden bg-dark pt-20">

      {/* Background Grid */}

      <div className="absolute inset-0 opacity-[0.05]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
             linear-gradient(rgba(255,107,44,.4) 1px,transparent 1px),
             linear-gradient(90deg,rgba(255,107,44,.4) 1px,transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

      </div>

      {/* Orange Glow */}

      <div
        className="absolute left-10 top-1/4 h-[270px] w-[270px] -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(241, 95, 17, 0.8), transparent 80%)",
        }}
      />

      {/* Content */}

      <div className="relative mx-auto flex max-w-full items-center gap-10 ">
{/* LEFT */}

<div className="w-full lg:w-[42%] px-5 lg:-mt-44 lg:ml-10">

  {/* Badge */}

  <div className="inline-flex items-center gap-2 md:mt-10 rounded-full border border-light/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-light/60 lg:mb-2">
    <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
    INTRODUCING ATNEXUS TECH
  </div>

  {/* Heading */}

  <h1 className="mt-8 text-center text-4xl font-black leading-[1.15] tracking-tight text-light  lg:mt-10 lg:text-left lg:text-5xl">

    We build{" "}

    <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
      Fast Software
    </span>

    <br />

    for Founders Who

    <br />

    Move{" "}

    <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
      Fast
    </span>

  </h1>

  {/* Small Description */}
{/* 
  <p className="mx-auto mt-6 max-w-md text-center text-sm leading-7 text-light/60 lg:mx-0 lg:text-left lg:text-base">

    High-performance websites and scalable software engineered for ambitious
    startups and modern businesses.

  </p> */}

  {/* CTA */}

  <div className=" mb-20 mt-5 md:my-16 flex justify-center lg:justify-start">

    <Link
      href="/contact"
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-md font-semibold text-white shadow-[0_0_20px_rgba(254,66,77,0.35)] transition-all hover:scale-105"
    >
      Start a Project

      <ArrowRight size={18} />

    </Link>

  </div>

  {/* Trust Badges */}

  <div className=" absolute bottom-10 left-10 right-0 mt-16 flex flex-wrap justify-center gap-3 font-mono text-[11px] text-light/50 lg:justify-start lg:gap-6">

    <span className="flex items-center gap-2  ">
      <Circle size={6} fill="#34d399" color="#34d399" />
      Performance First
    </span>

    <span className="flex items-center gap-2">
      <Circle size={6} fill="#d3ab34" color="#d3ab34" />
      Secure by Design
    </span>

    <span className="flex items-center gap-2">
      <Circle size={6} fill="#4297fe" color="#4297fe" />
      Built to Scale
    </span>

  </div>

</div>

        {/* RIGHT */}

        <div className="relative hidden h-[755px] flex-1 overflow-hidden lg:block">

          {/* Top Fade */}

          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-r from-black/40 to-transparent" />

          {/* Bottom Fade */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-full bg-gradient-to-l from-black/40 to-transparent" />

          

          <div className="grid h-full overflow-hidden grid-cols-3 gap-2">

  <div className="marquee-up flex flex-col gap-4">

    {column1.map((project, index) => (
      <ProjectCard
        key={index}
        project={project}
     
      />
    ))}

  </div>

  <div className="marquee-down flex flex-col gap-4 pt-20">

    {column2.map((project, index) => (
      <ProjectCard
        key={index}
        project={project}
      
      />
    ))}

  </div>

  <div className="marquee-up flex flex-col gap-4 pt-180">

    {column3.map((project, index) => (
      <ProjectCard
        key={index}
        project={project}
        
      />
    ))}

  </div>

</div>

        </div>

      </div>

    </section>
  );
}


