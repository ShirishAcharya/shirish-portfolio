"use client";

import { motion } from "framer-motion";
import Image from "next/image"; 

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left column: Text – takes ~half on md+ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 md:max-w-[90%] lg:max-w-[80%]" // keeps text from stretching too wide
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-display)] tracking-tight">
            About Me
          </h2>

          <div className="prose prose-lg dark:prose-invert text-[var(--muted)] leading-relaxed">
            <p className="font-[var(--font-sans)] text-lg md:text-xl">
              I am an AI-focused backend engineer building scalable systems and intelligent, data-driven applications.
              My work spans API design, distributed systems, data analysis, and machine learning integration.
            </p>

            <p className="font-[var(--font-sans)] text-lg md:text-xl">
              I enjoy working at the intersection of backend engineering and machine learning, from building speech-to-text 
              models and data processing pipelines to designing secure systems. I am particularly interested 
              in system performance, reliability, and leveraging data to drive intelligent decision-making.
            </p>

            {/* Optional: Add 1–2 more lines for better flow */}
            <p className="font-[var(--font-sans)] text-lg md:text-xl">
              I aim to build software that is not only functional, but technically robust, secure, and scalable.
            </p>
          </div>
        </motion.div>

        {/* Right column: Empty for now – add your photo, icons, or content here */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block" // hide on mobile, show on md+
        >
          {/* Example placeholders – replace with real content */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/images/profile.jpeg"
              alt="Shirish Acharya"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}