"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend & Systems",
    tag: "01",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
  },
  {
    title: "AI & Data Science",
    tag: "02",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    ],
  },
  {
    title: "Frontend & Web",
    tag: "03",
    skills: [
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-[var(--primary)] tracking-widest uppercase">
          // tech stack
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">What I build with</h2>
      </motion.div>

      <div className="space-y-16">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-xs text-[var(--primary)]/50">{cat.tag}</span>
              <div className="w-px h-4 bg-[var(--border)]" />
              <h3 className="text-sm font-mono font-medium text-[var(--muted)] uppercase tracking-widest">
                {cat.title}
              </h3>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>

            {/* Skill grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {cat.skills.map((skill, sIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 + sIdx * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-[var(--card)] border border-[var(--border)] group-hover:border-[var(--primary)]/40 group-hover:bg-[var(--primary)]/5 transition-all duration-200">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors text-center leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}