import Link from "next/link";
import { Mail, Sparkles } from "lucide-react";
import Image from "next/image";

// TODO: Real links, columns aur copy baad me finalize honge
const footerColumns = [
  {
    title: "Company",
    links: [
       { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Process", href: "/#process" },
      { label: "Work", href: "/projects" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services" },   
      { label: "SaaS Development", href: "/services" },
      { label: "Custom Software Solutions", href: "/services" },
     { label: "Website Maintainance", href:"/services" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Chat with us", href: "https://wa.me/919762117170" },
      { label: "E-Mail us ", href: "mailto:tech.atnexus@gmail.com" }  ,  
      { label: "Book a Call", href: "/contact" }  ,
      { label: "Get a quote", href: "/contact" }  ,
      
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-dark text-light">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className=" ">
              <Image
          src= "/logo.svg"
          alt ="ATNexus Tech"
          width = {250}
          height = {60}
          className=" -ml-20 -mt-24" />
            </Link>

            <a
              href="mailto:tech.atnexus@gmail.com"
              className="-mt-16  flex items-center gap-2 text-xl text-light/80 hover:text-primary"
            >
              <Mail size={18} />
             tech.atnexus@gmail.com
            </a>
          </div>

          {/* Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-bold text-light">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-light/80 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-secondary via-primary/40 to-secondary" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-light/70 md:flex-row md:items-center">
          <p>© {year} ATNexus Tech. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made and managed by ATNexus Tech
          </p>
        </div>
      </div>

      {/* Floating CTA */}
      {/* <Link
        href="/contact"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-light shadow-lg hover:opacity-90"
      >
        <Sparkles size={16} />
        Get your free draft
      </Link> */}
    </footer>
  );
}
