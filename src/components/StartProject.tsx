



"use client";

import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";

export default function ProjectCTA() {
  return (
    <section className="relative overflow-hidden bg-dark py-28">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        
        backgroundSize:"42px 42px"
      }}/>
      <div className="absolute left-1/2 top-[-180px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/70 blur-[140px]" />
      <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-primary blur-[120px]" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary blur-[150px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px] border border-black bg-white p-[1px] shadow-[0_40px_100px_rgba(0,0,0,.12)]">
          <div className="relative rounded-[30px] bg-white px-8 py-20 md:px-16">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <div className="inline-flex mb-15  items-center gap-2 rounded-full border border-dark/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-dark/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
           LET'S BUILD SOMETHING AMAZING
          </div>

              <h2 className="mt-8 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                Ready to Build Something
                <br/>
            
                <span className="mt-3  bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  That Actually Stands Out?
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-md leading-5 text-slate-600">
                Transform your vision into a premium digital experience that attracts customers, builds trust, and helps your business grow.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-[0_10px_10px_rgba(255,107,44,.6)] transition hover:-translate-y-1">
                  Start a Project
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1"/>
                </Link>

                <Link href="/services#pricing" className="rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-800 transition hover:border-primary">
                  Explore Plans
                </Link>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
