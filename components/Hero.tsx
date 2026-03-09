"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5">
        Shirish Acharya
      </h1>

      <p className="text-xl sm:text-2xl text-[var(--muted)] max-w-2xl mb-10">
        AI focused Backend Engineer crafting scalable, secure, and performant systems.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-opacity-90 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-lg font-medium hover:bg-[var(--primary)] hover:text-white transition"
        >
          Get in Touch
        </a>
      </div>
    </motion.section>
  );
}