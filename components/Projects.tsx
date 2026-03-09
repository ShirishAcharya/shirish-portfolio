"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "VoiceMate",
    shortDesc: "A voice based chess application",
    fullDesc: "VoiceMate is a voice-controlled chess application that allows players to make moves using spoken commands. The system converts speech into chess notation and executes moves on the board in real time, demonstrating the integration of speech processing and interactive application design.",
    tech: ["Python", "Speech Processing", "TCN and BiLSTM", "Flutter", "Firebase"],
    link: "https://drive.google.com/file/d/1uW2JwRf39dT-eGJ2yO6zG77ZWx6LyWRc/view?usp=sharing",
  },
  {
    title: "Resume Ranker",
    shortDesc: "AI-Based Resume Ranking Tool",
    fullDesc: "Resume Ranker analyzes resumes against a job description to determine candidate relevance. The system processes resume text, extracts important features such as skills and keywords, and ranks candidates based on their alignment with the job requirements.",
    tech: ["Python", "NLP", "Text Processing", "LLMs"],
    link: "https://github.com/ShirishAcharya/Resume-Ranker",
  },
  {
    title: "Sindhu Kathmandu Credit and Savings Cooperative Limited",
    shortDesc: "A website for a client",
    fullDesc:"As part of a two person team, designed and developed the official website for Sindhu Kathmandu, providing a modern platform to showcase the organization’s information and activities. The application was built using React with Supabase handling backend data storage and management, and deployed on Vercel for scalable and reliable hosting.",
    tech:["ReactJS" , "Supabase" , "Vercel" ,"Client"],
    link: "https://www.sindhukathmandu.com.np/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.06, y: -8, transition: { duration: 0.3 } }} // zoom + lift
            className="group relative bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-[var(--primary)] transition-all duration-300"
          >
            {/* Optional: add placeholder image or screenshot here later */}
            {/* <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700" /> */}

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              {/* Short description visible always */}
              <p className="text-[var(--muted)] mb-4 group-hover:hidden">{project.shortDesc}</p>

              {/* Detailed description revealed on hover */}
              <p className="text-[var(--muted)] mb-6 hidden group-hover:block transition-all duration-300">
                {project.fullDesc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}