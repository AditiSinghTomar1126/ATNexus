"use client";

import {
  ArrowUpRight,
  Code2,
  Database,
  Cpu,
  Circle,
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    icon: Code2,
    description:
      "Scalable web applications engineered with React, Next.js, Spring Boot and cloud-native architecture.",
    points: [
      "Responsive Design",
      "SEO Optimized",
      "High Performance",
    ],
  },
  {
    title: "Custom Software Solutions",
    icon: Database,
    description:
      "Custom software  engineered to automate workflows and solve complex business challenges.",
    points: [
      "Business Automation",
      "API Integration",
      "Custom Dashboards",
    ],
  },
  {
    title: "Website Maintenance and Support",
    icon: Cpu,
    description:
     " Keep your website secure, optimized, and up to date with continuous monitoring and regular maintenance.",
    points: [
      "Security Updates ",
      "Bug Fixes",
      "Performance Optimization",
    ],
  },
];
export default function ServicesCards() {
  return (
    <section className="bg-[#120d0a] py-12">

      <div className="mx-auto max-w-[1450px] px-8">
<div className="flex justify-center">
         <div className="inline-flex mb-15  items-center gap-2 rounded-full border border-light/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-light/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
         WHAT WE BUILD
          </div>
          </div>

          <h3 className="mx-auto mt-10 mb-10 max-w-6xl text-center text-3xl font-bold  text-[#F5EFEB] lg:text-4xl">

            Digital Products

            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

              {" "}Engineered

            </span>

            <br />

            For Performance,

           

            Scale & Growth.

          </h3>

      
          

        </div>

      <div className="mx-auto grid max-w-[1350px] lg:grid-cols-3 gap-7 px-4 lg:px-0 md:px:-0">

        {services.map((service) => {

          const Icon = service.icon;

          return (

            <div
              key={service.title}


              
              className="group flex h-full flex-col rounded-[30px] border border-white/5  bg-background/10 p-8 backdrop-blur-4xl shadow-[0_5px_10px_rgba(255,107,44,0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6b2c]/30  hover:shadow-[0_10px_20px_#ff6b2c]"
            >

              {/* LEFT */}

              <div className="max-w-3xl">

                <div className="flex items-center gap-5">

                   <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/70">

                    <Icon className="h-7 w-7 text-white" />

                  </div>

                  <h3 className="text-2xl font-bold text-[#F5EFEB]">

                    {service.title}

                  </h3>

                </div>

                <p className="mt-5 max-w-2xl text-md leading-5 text-[#B8AEA7]">

                  {service.description}

                </p>

                <div className="mt-8 space-y-4">

                  {service.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-center gap-2"
                    >

                      <div className="h-2 w-2 rounded-full bg-[#ff6b2c]" />

                      <span className="text-[#E4DBD5]">

                        {point}

                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* RIGHT */}
<div className="mt-8 flex justify-start">
  
  <button 
    className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-4 py-3 text-sm font-medium text-[#F5EFEB] hover:bg-[#120d0a]/50"
  >
  <a href="/services">  Explore Service </a>
    <ArrowUpRight size={16} />
  </button>
</div>

            </div>

          );
        })}

      </div>

    </section>
  );
}