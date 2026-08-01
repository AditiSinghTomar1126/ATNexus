"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {  ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [lastScroll, setLastScroll] = useState(0);
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 30);

      if (current <= 10) {
        setShow(true);
      } else if (current > lastScroll) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500
      ${
        show ? "translate-y-0" : "-translate-y-full"
      }
      ${
        scrolled
          ? "bg-black/75 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent backdrop-blur-lg border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-full items-center justify-between px-1">
        <Link
          href="/"
        
        >
          <Image
          src= "/logo.svg"
          alt ="ATNexus Tech"
          width = {250}
          height = {60}
          className="py-0 -mt-4 -ml-2" />
        </Link>

        <ul className="flex items-center gap-20">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-white transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div  className=" px-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:shadow-[0_0_20px_2px_rgba(254,66,77,0.45)] transition-transform md:text-base"
            >
              Start a project
              <ArrowRight size={18} />
            </Link>
          </div>
      </nav>
    </header>
  );
}