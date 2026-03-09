"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 px-6 flex justify-between items-center transition-all duration-300 z-50 ${
        scrolled
          ? "bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 backdrop-blur-lg border-b border-[var(--primary)]/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
          <Link href="/" className="block transition-transform hover:scale-105 active:scale-95">
            <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
              <Image
                src="/images/shirish-nav.png"
                alt="Shirish Acharya - Back to home"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <a href="#about" className="hover:text-[var(--primary)] transition-colors">About</a>
        <a href="#skills" className="hover:text-[var(--primary)] transition-colors">Skills</a>
        <a href="#projects" className="hover:text-[var(--primary)] transition-colors">Projects</a>
        <a href="#contact" className="hover:text-[var(--primary)] transition-colors">Contact</a>
        <DarkModeToggle />
      </div>
    </nav>
  );
}