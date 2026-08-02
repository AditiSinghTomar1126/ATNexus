"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
  ArrowUpRight,
  Circle
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  link: string;
};

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    link: "",
  });

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    access_key: "a2611ff9-e4ec-43ad-a47f-dc24f543afbc",
    ...form,
  }),
});



      if (!res.ok) throw new Error();

      alert("Inquiry sent successfully.");

      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
        link: "",
      });
    } catch {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-dark py-20">
      {/* Badge */}

         <div className="flex justify-center">

             <div className="inline-flex mb-15  items-center gap-2 rounded-full border border-light/10 bg-light/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-wide text-light/60">
            <Circle size={6} fill="#ff6b2c" color="#ff6b2c" />
            READY TO SHIP?
          </div>


         </div>

         {/* Heading */}

         <h2 className="mx-auto mt-8 max-w-3xl text-center text-3xl font-bold leading-tight text-[#F5EFEB] lg:text-4xl">

           Let's build something {" "}

          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">

             fast.

          </span>

           <br />

           {/* We engineer the solution. */}

        </h2>

         <p className="mx-auto mt-6 mb-10 max-w-3xl text-center text-md leading-8 text-[#B7ADA6]">

         No endless meetings, no agency fluff. Tell us what you’re building and let’s get code into production.
         </p>


      <div className=" mx-auto grid max-w-[1400px]   gap-8 px-4 lg:grid-cols-[500px_1fr]">

        {/* LEFT PANEL */}

        <div className=" rounded-[20px] bg-gradient-to-b from-primary/10 to-background p-6 md:p-10 text-[#F5EFEB] ">
                 

          <span className="font-mono text-xs tracking-[.3em] text-[#F3A953]">

            GET IN TOUCH

          </span>

          <h2 className="mt-3 text-2xl font-bold">

            Reach us
            <br />
            directly.

          </h2>

          <p className="mt-2 leading-5 text-[#B8AEA7]">

            Prefer to talk first? Reach us through any of the
            channels below and we'll get back within one
            business day.

          </p>

          <div className="mt-4 space-y-3">

            <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-2">

              <div className="rounded-2xl bg-white/5 p-3">

                <Mail className="text-[#fff]" />

              </div>

              <div>

                <p className="font-mono text-xs tracking-[.2em] text-[#F3A953]">

                  EMAIL

                </p>

                <h4 className="mt-1 font-medium">

                  tech.atnexus@gmail.com

                </h4>

              </div>

            </div>

            <div  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-2">

              <div className="rounded-2xl bg-white/5 p-3">

                <Phone className="text-[#fff]" />

              </div>

              <div>

                <p className="font-mono text-xs tracking-[.2em] text-[#F3A953]">

                  PHONE

                </p>

                <h4 className="mt-1 font-medium">

                  +91 9762117170

                </h4>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-2">

              <div className="rounded-2xl bg-white/5 p-3">

                <MapPin className="text-[#fff]" />

              </div>

              <div>

                <p className="font-mono text-xs tracking-[.2em] text-[#F3A953]">

                  OFFICE

                </p>

                <h4 className="mt-1 font-medium">

                  Dehradun, India

                </h4>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-2 ">

              <div className="rounded-2xl bg-white/5 p-3">

                <Clock className="text-[#fff]" />

              </div>

              <div>

                <p className="font-mono text-xs tracking-[.2em] text-[#F3A953]">

                  RESPONSE

                </p>

                <h4 className="mt-1 font-medium">

                  Within one business day

                </h4>

              </div>

            </div>

          </div>

          <div className="my-7 h-px bg-white/10" />

          <span className="font-mono text-xs tracking-[.3em] text-[#F3A953]">

            WHAT YOU CAN EXPECT

          </span>

          <div className="mt-3 space-y-2">

            {[
              "Response within one business day",
              "Free project consultation",
              "Technical roadmap",
              "Transparent pricing",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <Check
                  size={18}
                  className="text-[#F3A953]"
                />

                <span className="text-[#D2C9C2]">

                  {item}

                </span>

              </div>

            ))}

          </div>
          

        </div>

        {/* RIGHT FORM */}

        <form
          onSubmit={handleSubmit}
          className="rounded-[20px] bg-[#FAF8F6] p-6 md:p-10"
        >
          <h3 className="text-2xl font-bold text-[#191412]">

            Tell us about your project

          </h3>

          <p className="mt-3 text-[#6A605B]">

            The more details you share, the better we can understand
            your requirements and prepare the right solution.

          </p>

          <div className="mt-6 grid text-dark gap-4 md:grid-cols-2">

            <div>

              <label className="mb-3 block font-mono text-xs tracking-[.25em] text-[#6A605B]">
                NAME
              </label>

              <input
                required
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                placeholder="Your name"
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-5 outline-none transition focus:border-primary"
              />

            </div>

            <div>

              <label className="mb-3 block font-mono text-xs tracking-[.25em] text-[#6A605B]">
                EMAIL
              </label>

              <input
                required
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                placeholder="you@example.com"
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-5 outline-none transition focus:border-primary"
              />

            </div>

            <div>

              <label className="mb-3 block font-mono text-xs tracking-[.25em] text-[#6A605B]">
                BUSINESS NAME
              </label>

              <input
                value={form.company}
                onChange={(e) =>
                  setForm({
                    ...form,
                    company: e.target.value,
                  })
                }
                placeholder="Company name"
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-5 outline-none transition focus:border-primary"
              />

            </div>

            <div>

              <label className="mb-3 block font-mono text-xs tracking-[.25em] text-[#6A605B]">
                PHONE
              </label>

              <input
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form, 
                    phone: e.target.value,
                  })
                }
                placeholder="+91 XXXXX XXXXX"
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-5 outline-none transition focus:border-primary"
              />

            </div>

         

          <div>

            <label className="mb-3 block font-mono text-xs tracking-[.25em] text-[#6A605B]">
              SERVICE
            </label>

            <select
            style={{ color: "#191412" }}
              value={form.service}
              onChange={(e) =>
                setForm({
                  ...form,
                  service: e.target.value,
                })
              }
              className="h-12 w-full rounded-2xl border border-black/10 bg-white px-5 outline-none transition focus:border-primary "
            >

              <option value="" className="text-[#191412]">
                Choose a service
              </option>

              <option>Full-Stack Development</option>

              <option>Website Maintenance and Support</option>
 
              <option>Custom Software Solutions</option> 

             

            </select>

          </div>
           <div>

              <label className="mb-3 block font-mono text-xs tracking-[.25em] text-[#6A605B]">
                WEBSITE OR SOCIAL LINK
              </label>

              <input
                value={form.link}
                onChange={(e) =>
                  setForm({
                    ...form,
                    link: e.target.value,
                  })
                }
                placeholder="https://your-website.com"
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-5 outline-none transition focus:border-primary"
              />

            </div>
         </div>
          <div className="mt-6 text-dark ">

            <label className="mb-3 block font-mono text-xs tracking-[.25em] text-[#6A605B]">
              PROJECT DETAILS
            </label>

            <textarea
              rows={6}
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              placeholder="Tell us about your project..."
              className="w-full rounded-2xl border border-black/10 bg-white p-5 outline-none transition focus:border-primary"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-10 flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 font-medium text-white transition hover:scale-105 disabled:opacity-60"
          >

            {loading ? "Sending..." : "Send Inquiry"}

            <ArrowUpRight size={18} />

          </button>

        </form>

      </div>

    </section>
  );
}