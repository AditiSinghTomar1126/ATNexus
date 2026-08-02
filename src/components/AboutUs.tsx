
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock3,
  Circle,
  Gem,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-dark text-light">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-32 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />

        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      {/* HERO */}

      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-2">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="flex justify-left md:-mt-20">
        <div className="inline-flex mb-16 items-center gap-2 rounded-full border border-light/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-light/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
            ABOUT ATNEXUS
           </div>
          </div>

             <h2 className="mx-auto  max-w-5xl  text-3xl lg:text-5xl font-bold text-[#F5EFEB]">

          Building Digital   {" "}

           <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

            Products 
           </span>

           <br />

           That Help

         {" "}
<br />
           <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

            Business {" "}

           </span>
           Grow.

         </h2>

            <p className="mt-8 max-w-xl text-md leading-5 text-light/65">

              We craft modern websites, scalable web applications and
              high-performance digital products that help startups and
              businesses grow with confidence.

            </p>

            <Link
              href="/projects"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-4 font-semibold text-light transition hover:scale-105"
            >
              View Our Work

              <ArrowRight size={18} />
            </Link>

            {/* TRUST BADGES */}
             <div className=" hidden absolute top-20% md:flex flex-wrap items-center gap-6 mt-20 font-mono  text-xs text-light/40">
            <span className="flex items-center gap-1.5">
               <Circle size={6} fill="#34d399" color="#34d399" />
              Performance First
             </span>
             <span className="flex items-center gap-1.5">
               <Circle size={6} fill="#d3ab34" color="#d3ab34" />
               Secure by Design
             </span>
              <span className="flex items-center gap-1.5">
               <Circle size={6} fill="#4297fe" color="#4297fe" />
               Built to Scale
            </span>
           </div>


          </div>

          {/* RIGHT */}

          <div className="relative h-auto md:h-[420px]">


              <div className="absolute md:top-20 md:h-60 md:w-60 rounded-full bg-primary/50 blur-[120px] px-10" />

              <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg- p-10 backdrop-blur-2xl shadow-[0_5px_10px_rgba(255,107,44,0.5)]">

                <div className="grid gap-8">

                  <div className="flex items-start gap-5">

                    <div className="flex h-10 w-14 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-primary/10 text-1xl md:text-2xl">
                      🚀
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-light">
                        Built For Growth
                      </h3>

                      <p className="mt-2 text-light/60">
                        Every product is designed with scalability,
                        maintainability, and future expansion in mind.
                      </p>

                    </div>

                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  <div className="flex items-start gap-5">

                    <div className="flex h-10 w-14 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-primary/10 text-1xl md:text-2xl">
                      ⚡
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-light">
                        Engineered For Performance
                      </h3>

                      <p className="mt-2 text-light/60">
                        Optimized architecture, clean code, and lightning-fast
                        user experiences across every device.
                      </p>

                    </div>

                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  <div className="flex items-start gap-5">

                    <div className="flex h-10 w-14 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-primary/10 text-1xl md:text-2xl">
                      🤝
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-light">
                        Partnership Mindset
                      </h3>

                      <p className="mt-2 text-light/60">
                        We work alongside our clients, focusing on long-term
                        success instead of one-time project delivery.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>
         

          </div>

    

      </section>
      {/* ================= WHO WE ARE ================= */}

      <section className="relative py-16 bg-light">
                     <div className="flex justify-left">
        <div className="inline-flex mb-20 ml-28 items-center gap-2 rounded-full border border-dark/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-dark/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
           WHO WE ARE
           </div>
          </div>

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">
            

            {/* LEFT */}

            <div>

      

              <h2 className=" text-3xl md:text-4xl md:-mt-20 font-black leading-tight text-dark ">
                Where  {" "}

           <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

            Vision 
           </span> 
           <br/>
      
              Meets {" "}
               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

            Engineering 
           </span>
                <br />

              
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-5 text-dark/65">

              ATNexus is a modern software agency dedicated to building fast, scalable, and user-focused digital products. We partner with startups and growing businesses to transform ideas into reliable websites, web applications, and custom software that deliver measurable business value.

              </p>

              <p className="mt-6 max-w-xl leading-5 text-dark/55">

               Every solution is crafted with thoughtful design, clean engineering, and long-term scalability in mind. Our focus is not just on writing code, but on creating digital experiences that help businesses grow with confidence.

              </p>

            </div>

{/* ================= MISSION ================= */}

            <div className="group relative overflow-hidden rounded-[20px]  bg-white  p-10 backdrop-blur-2xl   shadow-[0_5px_10px_rgba(255,107,44,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,107,44,1)] hover:border-primary">

              <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-primary/10 blur-[120px]  transition-all duration-500 group-hover:bg-primary/20" />

              <div className="relative">


                <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  Our Mission
                </span>

                <h3 className="mt-4 text-3xl font-bold text-dark">
                  Building for Today
                   <br /> Scaling for Tomorrow. <br />
                 
                 
                </h3>

                <p className="mt-6 leading-5 text-dark/65">
Our mission is to help businesses turn ambitious ideas into modern digital solutions through thoughtful strategy, exceptional design, and reliable development. We build products that are fast, scalable, and designed to create long-term impact rather than short-term results.

                </p>

              </div>

            </div>
          </div>

        </div>
              

      </section>
     
    </main>
  );
}