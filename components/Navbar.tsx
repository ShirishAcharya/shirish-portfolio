"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080c10]/90 backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-mono text-[var(--primary)] text-lg font-medium tracking-tight">
              SA
            </span>
            <span className="w-px h-4 bg-[var(--border)]" />
            <span className="text-sm font-medium text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
              shirish.dev
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-[var(--primary-dim)] rounded-md border border-[var(--primary)]/20"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              );
            })}
            <a
              href="/Shirish Acharya CV.pdf"
              target="_blank"
              className="ml-4 px-4 py-1.5 text-sm font-mono font-medium border border-[var(--primary)]/40 text-[var(--primary)] rounded hover:bg-[var(--primary)]/10 transition-all"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-40 w-64 bg-[#0d1117] border-l border-[var(--border)] flex flex-col pt-24 px-8 gap-4 md:hidden"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="/Shirish Acharya CV.pdf"
              target="_blank"
              className="mt-4 text-sm font-mono text-[var(--primary)] border border-[var(--primary)]/30 px-4 py-2 rounded text-center hover:bg-[var(--primary)]/10 transition"
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}