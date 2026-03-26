"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  { label: "Focus", value: "Backend & AI Systems" },
  { label: "Location", value: "Kathmandu, Nepal" },
  { label: "Status", value: "Open to opportunities" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left – image with decorative frame */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block relative"
        >
          <div className="relative w-full max-w-sm mx-auto">
            {/* Decorative border offset */}
            <div className="absolute -inset-2 rounded-2xl border border-[var(--primary)]/20" />
            <div className="absolute -inset-4 rounded-2xl border border-[var(--primary)]/10" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/profile.jpeg"
                alt="Shirish Acharya"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle color overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c10]/60 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Right – text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <span className="font-mono text-xs text-[var(--primary)] tracking-widest uppercase">
              // about me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
              Building at the edge
              <br />
              <span className="text-[var(--muted)]">of backend & AI</span>
            </h2>
          </div>

          <div className="space-y-4 text-[var(--muted)] leading-relaxed">
            <p>
              I'm an AI-focused backend engineer with a passion for building scalable systems
              and intelligent, data-driven applications. My work spans API design, distributed
              systems, data analysis, and machine learning integration.
            </p>
            <p>
              I work at the intersection of backend engineering and machine learning. From
              building speech-to-text models and data processing pipelines to designing secure
              systems. I'm drawn to challenges around performance, reliability, and leveraging
              data for intelligent decision-making.
            </p>
          </div>

          {/* Highlight chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {highlights.map(({ label, value }) => (
              <div
                key={label}
                className="px-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors"
              >
                <div className="text-xs font-mono text-[var(--primary)] mb-1">{label}</div>
                <div className="text-sm font-medium">{value}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="#projects"
              className="text-sm font-medium text-[var(--primary)] hover:underline underline-offset-4 transition"
            >
              See my work →
            </a>
            <a
              href="/Shirish Acharya CV.pdf"
              target="_blank"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition"
            >
              Download resume ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}