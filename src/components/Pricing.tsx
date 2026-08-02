"use client";

import { ArrowRight, Check, Circle } from "lucide-react";

const plans = [
  {
    name: "Core",
    price: "₹2,999",
    period: "/project",
    popular: false,
    description: "Perfect for Startups and Personal Brands.",
    features: [
      "Landing Page",
      "Responsive Website",
      "Premium UI Design",
      "SEO Ready Structure",
      "7 Days Support",
    ],
  },
  {
    name: "Growth",
    price: "₹7,999",
    period: "/project",
    popular: true,
    description: "Designed for Businesses Ready to Grow.",
    features: [
      "Everything in Starter",
      "Upto 5 Pages",
      "Advanced Animations",
      "Performance Optimized",
      "30 Days Support",
    ],
  },
  {
    name: "Elite",
    price: "Let's Talk",
    period: "",
    popular: false,
    description: "Tailored Enterprise Software and Automation.",
    features: [
      "Custom Architecture",
      "Full Custom Design",
      "API Integration",
      "Advanced Features",
      "Dedicated Support",
      
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="overflow-hidden bg-dark py-10  ">

      <div className="mx-auto max-w-[1350px] px-8">

        {/* Badge */}

        <div className="flex justify-center">

         <div className="inline-flex mb-15  items-center gap-2 rounded-full border border-light/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-light/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
            TRANSPARENT PRICING
          </div>

        </div>

        {/* Heading */}

        <h2 className="mx-auto mt-10 max-w-5xl text-center text-3xl md:text-4xl font-bold leading-tight text-[#F5EFEB]">

          Premium Quality.

          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

            {" "}Fair Pricing.

          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-md leading-6 text-[#B8AEA7]">

          Transparent pricing with premium engineering,
          scalable architecture and long-term support.
          No hidden costs. No unnecessary complexity.

        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {[
            "No Hidden Charges",
            "Free Consultation",
            "Post-Launch Support",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[#DDD3CD]"
            >

              <Check
                size={15}
                className="text-[#F3A953]"
              />

              <span className="text-sm">

                {item}

              </span>

            </div>

          ))}

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (<article
              key={plan.name}
              className={`group relative overflow-hidden rounded-[30px] border hover:border-primary transition-all duration-500 hover:-translate-y-2
              ${
                plan.popular
                  ? "border-primary bg-white/[0.04] shadow-[0_5px_5px_#ff6b2c] hover:shadow-[0_10px_10px_#ff6b2c]"
                  : "border-white/5 bg-background"
              }`}
            >

              {plan.popular && (

                <div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-primary px-2 py-1 text-xs  tracking-[.25em] text-white">

                  MOST POPULAR

                </div>

              )}

              <div className="p-8">

                <h3 className="mt-2 text-3xl font-bold text-[#F5EFEB]">

                  {plan.name}

                </h3>

                <div className="mt-4 flex items-end gap-1">

                  <span className="text-5xl font-bold text-[#F5EFEB]">

                    {plan.price}

                  </span>

                  <span className="pb-2 text-[#B8AEA7]">

                    {plan.period}

                  </span>

                </div>

                <p className="mt-4 leading-5 text-[#B8AEA7]">

                  {plan.description}

                </p>

                <div className="mt-8 space-y-2">

                  {plan.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <Check
                        size={18}
                        className="text-[#F3A953]"
                      />

                      <span className="text-[#E7DDD6]">

                        {feature}

                      </span>

                    </div>

                  ))}

                </div>

                <button
                  className={`mt-12 bg-primary text-white hover:scale-105 inline-flex items-center gap-3 rounded-full px-5 py-2.5 font-medium transition-all duration-300
                  
 
                  `}
                >

                 <a href="/contact" >Start a project </a>

                  <ArrowRight size={18} />

                </button>

              </div>

            </article>

          ))}
          </div>


       

      </div>

      {/* Background Glow */}

      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#FE424D]/8 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#F3A953]/8 blur-[160px]" />

    </section>
  );
}