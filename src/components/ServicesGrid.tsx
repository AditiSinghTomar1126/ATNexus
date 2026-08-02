"use client";

import { ArrowRight, ArrowUpRight, Code2, Circle, Database, Cpu } from "lucide-react";

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

export default function ServicesSection() {
  return (
    <section className="overflow-hidden bg-[#120d0a]">

      {/* ================= HERO ================= */}

      <section className="relative py-16">

        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#120d0a]/10 blur-[150px]" />

        <div className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[140px]" />

        <div className="mx-auto max-w-[1450px] px-8">
 <div className="flex justify-center">
          <div className="inline-flex mb-15  items-center gap-2 rounded-full border border-light/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-light/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
          WHAT WE BUILD
          </div>
          </div>

          <h1 className="mx-auto mt-6 max-w-6xl text-center text-3xl  font-bold leading-[1.08] text-[#F5EFEB] lg:text-5xl">

            Digital Products

            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

              {" "}Engineered

            </span>

            <br />

            For Performance,

            <br />

            Scale & Growth.

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-center text-md leading-5 text-[#B8AEA7]">

            We build modern software ecosystems combining premium UI,
            enterprise architecture and scalable technologies to help
            businesses grow faster.

          </p>

          <div className="mt-14 flex justify-center gap-5 flex-wrap ">

            <button className="flex items-center gap-3 rounded-full bg-primary px-5 py-3 font-semibold text-white transition duration-300 hover:scale-105">

             <a href="/contact"> Start a project </a>

              <ArrowRight size={18} />

            </button>

            <button className="rounded-full border border-white/10 bg-white/[0.05] px-8 py-3 font-medium text-[#F5EFEB] backdrop-blur-xl transition hover:border-primary ">

             <a href="/projects" > View Portfolio </a>

            </button>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}
      

      <section className="pb-20 bg-[#faf7f1]">
     

        <div className="mx-auto grid max-w-[1350px] gap-7  px-6 lg:grid-cols-3  ">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <article
                key={service.title}
                className="group flex h-full flex-col rounded-[30px] mt-10 border border-white/5 bg-black/[0.045] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:bg-white/[0.06]  hover:shadow-[0_10px_10px_#ff6b2c]"
              >
                <div className="mb-8 flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/70">

                    <Icon className="h-7 w-7 text-white" />

                  </div>

                  <div>

                   

                    <h3 className="mt-2 text-2xl font-bold text-[#000000]">

                      {service.title}

                    </h3>

                  </div>

                </div>

                <p className="leading-6 text-[#000000]">

                  {service.description}

                </p>

                <div className="mt-8 space-y-4">

                  {service.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-center gap-3"
                    >

                      <div className="h-2 w-2 rounded-full bg-[#FE424D]" />

                      <span className="text-[#000000]">

                        {point}

                      </span>

                    </div>

                  ))}

                </div>

                <div className="mt-auto pt-10">

                  <button className="flex items-center gap-3 rounded-full border border-black/10 bg-black/[0.05] px-6 py-3 text-[#000000] transition-all duration-300 hover:border-primary ">

                     <a href="" > Learn More </a>

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </button>

                </div>

              </article>

            );

          })}

        </div>

      </section>

    </section>
  );
}