"use client";

import React from "react";
import { Search, Palette, CodeXml,Circle, BadgeCheck, Rocket } from "lucide-react";


const steps = [
  {
    number: "1",
    title: "Discover",
    icon: Search,
    bg: "#6b2d0365",
    items: ["Vision", "Research", "Strategy"],
  },
  {
    number: "2",
    title: "Design",
    icon: Palette,
    bg: "#6b2d0365",
    items: ["Wireframes", "Interface", "Prototype"],
  },
  {
    number: "3",
    title: "Build",
    icon: CodeXml,
    bg: "#6b2d0365",
    items: ["Development", "APIs", "Database"],
  },
  {
    number: "4",
    title: "Test",
    icon: BadgeCheck,
    bg: "#6b2d0365",
    items: ["Quality", "Performance", "Security"],
  },
  {
    number: "5",
    title: "Ship",
    icon: Rocket,
    bg: "#6b2d0365",
    items: ["Launch", "Analytics","Maintenance"],
  },
];



function DownArrow() {
  return (
    <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
      <path
        d="M8,1 L8,22"
        stroke="#F3A953"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2,17 L8,24 L14,17"
        stroke="#F3A953"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProcessSteps() {
  return (
    <section id="process" className="w-full bg-dark py-20 px-6">

{/* Badge */}
 <div className="flex justify-center">
         <div className="inline-flex mb-15  items-center gap-2 rounded-full border border-light/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-light/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
          HOW WE WORK
          </div>
</div>
         {/* Heading */}

         <h2 className="mx-auto mt-8 max-w-3xl text-center text-3xl font-bold leading-tight text-[#F5EFEB] lg:text-4xl">

          You share the{" "}

          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">

             vision.

           </span>

           <br />

           We engineer the {" "}
           <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">

             solution.

           </span>

        </h2>

         <p className="mx-auto mt-6 mb-10 max-w-3xl text-center text-md leading-5 text-[#B7ADA6]">
           A transparent development process designed for startups,
           businesses and enterprise applications.
         </p>


       <div className=" hidden max-w-6xl mx-auto lg:flex items-start justify-center">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={step.title}>
              <div className="flex flex-col items-center w-[150px]">
                {/* Pill card */}
                <div className="relative w-[90px] h-[230px] rounded-full bg-gradient-to-r from-primary to-accent  shadow-[0_10px_20px_rgba(255,107,44,0.8)] hover:shadow-[0_20px_20px_rgba(255,107,44,0.8)] flex flex-col items-center pt-6">
                  <span className="text-5xl mt-3 font-bold text-white">
                   <h1>{step.number}</h1> 
                  </span>

                  <div
                    className="absolute bottom-0 w-[90px] h-[90px] rounded-full flex items-center justify-center   transition-all duration-500 ease-out hover:-translate-y-6  hover:scale-[1]
"
                    style={{ backgroundColor: step.bg }}
                  >
                    <Icon size={30} strokeWidth={2} color="#281008" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-10 text-xl  text-primary">
                  {step.title}
                </h3>

                {/* Down arrow */}
                <div className="my-2">
                  <DownArrow />
                </div>

                {/* Sub items */}
                <div className="flex flex-col items-center gap-3 text-center">
                  {step.items.map((item) => (
                    <p
                      key={item}
                      className="text-[15px] text-white/50 leading-snug"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="mt-[58px] mx-[-6px]">
                  <img src ="/projectimages/ProcessArrow.png"
                  className="w-16 h-auto  " />
                  
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>


      {/* ================= MOBILE PROCESS ================= */}

<div className="mx-auto mt-12 flex max-w-md flex-col gap-8 lg:hidden">

  {steps.map((step, i) => {
    const Icon = step.icon;

    return (
      <div key={step.title} className="relative">

        {/* Connector */}

        {i !== steps.length  && (
          <div className="absolute left-[30px] top-20 h-[calc(100%+28px)] w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
        )}

        <div className="flex gap-5">

          {/* Pill */}

          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_10px_25px_rgba(255,107,44,0.45)]">

            <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-dark text-[20px] font-bold text-primary border border-primary">
              {step.number}
            </span>

            <Icon size={26} color="#fff" />

          </div>

          {/* Card */}

          <div className="flex-1 mt-16 -ml-5 rounded-3xl backdrop-blur-xl">

            <h3 className="text-xl font-semibold text-light">
              {step.title}
            </h3>

            <div className="mt-4 space-y-3">

              {step.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-light/65"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />

                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    );
  })}

</div>
    </section>
  );
}
