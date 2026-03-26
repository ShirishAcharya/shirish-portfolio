"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "VoiceMate",
    shortDesc: "Voice-controlled chess via speech recognition",
    fullDesc:
      "A voice-controlled chess application allowing players to make moves using spoken commands. Converts speech into chess notation and executes moves in real time — integrating speech processing, TCN/BiLSTM models, and a Flutter frontend.",
    tech: ["Python", "TCN & BiLSTM", "Flutter", "Firebase"],
    link: "https://drive.google.com/file/d/1uW2JwRf39dT-eGJ2yO6zG77ZWx6LyWRc/view?usp=sharing",
    type: "ML / Mobile",
  },
  {
    number: "02",
    title: "Resume Ranker",
    shortDesc: "AI-based resume ranking against job descriptions",
    fullDesc:
      "Analyzes resumes against job descriptions to rank candidates by relevance. Extracts skills and keywords using NLP and LLMs, then scores alignment with job requirements, automating a traditionally manual screening process.",
    tech: ["Python", "NLP", "LLMs", "Text Processing"],
    link: "https://github.com/ShirishAcharya/Resume-Ranker",
    type: "AI / NLP",
  },
  {
    number: "03",
    title: "Sindhu Kathmandu",
    shortDesc: "Production website for a credit cooperative",
    fullDesc:
      "Designed and developed the official website for Sindhu Kathmandu Credit and Savings Cooperative as part of a two-person team. Built with React and Supabase for data management, deployed on Vercel.",
    tech: ["React", "Supabase", "Vercel"],
    link: "https://www.sindhukathmandu.com.np/",
    type: "Client / Web",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-[var(--primary)] tracking-widest uppercase">
          // selected work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Projects</h2>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8 bg-[var(--card)] border border-[var(--border)] rounded-2xl hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/[0.02] transition-all duration-300 overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[var(--primary)]/5 to-transparent pointer-events-none" />

            {/* Number */}
            <div className="font-mono text-5xl font-bold text-[var(--border)] group-hover:text-[var(--primary)]/20 transition-colors select-none shrink-0 w-16 text-center">
              {project.number}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-[var(--muted)] group-hover:text-[var(--primary)] shrink-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 max-w-2xl">
                {project.fullDesc}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] text-[var(--primary)]/60 border border-[var(--primary)]/20 px-2 py-0.5 rounded-full uppercase tracking-widest">
                  {project.type}
                </span>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-0.5 bg-[var(--border)]/50 rounded-full text-[var(--muted)] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/ShirishAcharya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--primary)] font-mono transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          More on GitHub
        </a>
      </motion.div>
    </section>
  );
}